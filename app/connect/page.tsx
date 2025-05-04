"use client";

import { useEffect, useState } from "react";
import { db } from "@/firebaseConfig";
import {
  collection,
  query,
  onSnapshot,
  addDoc,
  where,
  getDocs,
} from "firebase/firestore";
import { useUser } from "@clerk/nextjs";
import { ExpandableCardDemo } from "@/components/Connect";
import { FloatingDockDemo } from "@/components/fltdock";

type UserType = {
  id: string;
  name: string;
  email: string;
};

function ConnectPage() {
  const { user } = useUser();
  const [users, setUsers] = useState<UserType[]>([]);
  const [connections, setConnections] = useState<{ [key: string]: string }>({});

  useEffect(() => {
    if (!user) return;

    // Fetch all users except current user
    const fetchUsers = async () => {
      const q = query(collection(db, "users"), where("id", "!=", user.id));
      const querySnapshot = await getDocs(q);

      const usersList: UserType[] = querySnapshot.docs.map((doc) => ({
        id: doc.id, // Firestore doc ID
        ...((({ id, ...rest }) => rest)(doc.data()) as Omit<UserType, "id">), // Ignore 'id' in doc data
      }));

      setUsers(usersList);
    };

    // Fetch connection status
    const fetchConnections = async () => {
      const connQuery = query(collection(db, "connections"));
      onSnapshot(connQuery, (snapshot) => {
        const connMap: { [key: string]: string } = {};
        snapshot.docs.forEach((doc) => {
          const data = doc.data();
          if (data.senderId === user.id || data.receiverId === user.id) {
            connMap[data.receiverId] = data.status;
          }
        });
        setConnections(connMap);
      });
    };

    fetchUsers();
    fetchConnections();
  }, [user]);

  // Send Connection Request
  const sendRequest = async (receiverId: string) => {
    await addDoc(collection(db, "connections"), {
      senderId: user?.id,
      receiverId,
      status: "pending",
    });
  };

  return (
    <div>
      <FloatingDockDemo />
      <div className="mt-[250px]">
        <ExpandableCardDemo />
      </div>

      {/* <div className="max-w-3xl mx-auto mt-10 p-5 bg-white shadow-md rounded-lg">
        <h2 className="text-2xl font-bold mb-5">People You May Know</h2>
        {users.map((usr) => (
          <div key={usr.id} className="flex justify-between items-center p-3 border-b">
            <div>
              <p className="text-lg font-semibold">{usr.name}</p>
              <p className="text-sm text-gray-500">{usr.email}</p>
            </div>
            <button
              onClick={() => sendRequest(usr.id)}
              disabled={connections[usr.id] === "pending" || connections[usr.id] === "connected"}
              className={`px-4 py-2 text-white rounded-lg ${
                connections[usr.id] === "pending"
                  ? "bg-gray-400 cursor-not-allowed"
                  : connections[usr.id] === "connected"
                  ? "bg-green-500"
                  : "bg-blue-500 hover:bg-blue-600"
              }`}
            >
              {connections[usr.id] === "pending"
                ? "Pending"
                : connections[usr.id] === "connected"
                ? "Connected"
                : "Connect"}
            </button>
          </div>
        ))}
      </div> */}
    </div>
  );
}

export default ConnectPage;
