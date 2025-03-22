'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

// Define User type
type User = {
  id: string;
  name: string;
  email: string;
  imageUrl: string;
};

export default function UserSearch() {
  const [searchTerm, setSearchTerm] = useState('');
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  // Fetch users whenever searchTerm changes
  useEffect(() => {
    const fetchUsers = async () => {
      setLoading(true);
      try {
        const response = await fetch(`/api/getUsers?search=${searchTerm}`);
        const data: User[] = await response.json();
        setUsers(data);
      } catch (error) {
        console.error('Error fetching users:', error);
      } finally {
        setLoading(false);
      }
    };

    if (searchTerm.trim() !== '') {
      fetchUsers();
    } else {
      setUsers([]);
    }
  }, [searchTerm]);

  return (
    <div className="max-w-lg mx-auto mt-10 p-6 border rounded-lg shadow-md bg-white">
      {/* Search Input */}
      <input
        type="text"
        placeholder="Search users..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
      />

      {/* Loading Spinner */}
      {loading && (
        <div className="flex justify-center items-center mt-4">
          <div className="w-6 h-6 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
        </div>
      )}

      {/* No Results */}
      {!loading && searchTerm && users.length === 0 && (
        <p className="text-center text-gray-500 mt-4">No users found</p>
      )}

      {/* User List */}
      {!loading && users.length > 0 && (
        <ul className="mt-4 space-y-3">
          {users.map((user) => (
            <li
              key={user.id}
              className="p-3 border rounded-lg flex items-center space-x-4 hover:bg-gray-100 transition cursor-pointer"
              onClick={() => router.push(`/chat/${user.id}?name=${encodeURIComponent(user.name)}`)}
            >
              <img src={user.imageUrl} alt={user.name} className="w-10 h-10 rounded-full" />
              <div>
                <p className="font-bold text-lg">{user.name}</p>
                <p className="text-sm text-gray-600">{user.email}</p>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
