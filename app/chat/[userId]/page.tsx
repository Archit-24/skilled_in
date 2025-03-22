'use client';

import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { useEffect, useRef, useState } from 'react';
import { useParams, useSearchParams } from 'next/navigation';
import { useAuth } from '@clerk/nextjs';
import { db } from '../../../firebaseConfig';
import { collection, addDoc, query, orderBy, onSnapshot, serverTimestamp } from 'firebase/firestore';
import EmojiPicker from 'emoji-picker-react';

// Define Message type
type Message = {
  id: string;
  text: string;
  sender: string;
  fileUrl?: string;
  timestamp?: any;
};

export default function ChatPage() {
  const storage = getStorage();
  const { userId } = useParams() as { userId: string };
  const searchParams = useSearchParams();
  const userName = searchParams.get('name') || 'User';
  const { userId: loggedInUserId } = useAuth() ?? { userId: undefined };
  const [messages, setMessages] = useState<Message[]>([]);
  const [newMessage, setNewMessage] = useState('');
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  

  // Fetch messages in real time
  useEffect(() => {
    const messagesRef = collection(db, 'messages', userId, 'messages');
    const q = query(messagesRef, orderBy('timestamp', 'asc'));

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const msgs: Message[] = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      })) as Message[];
      setMessages(msgs);
    });

    return () => unsubscribe();
  }, [userId]);

  // Scroll to bottom when messages update
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  // Send message
  const sendMessage = async () => {
    if (newMessage.trim() === '' && !selectedFile) return;

    const messagesRef = collection(db, 'messages', userId, 'messages');

    const messageData: Partial<Message> = {
      text: newMessage,
      sender: loggedInUserId ?? 'Unknown',
      timestamp: serverTimestamp(),
    };

    // Upload file logic (Assume Firebase Storage integration)
    if (selectedFile) {
      const storageRef = ref(storage, `uploads/${selectedFile.name}`);
      await uploadBytes(storageRef, selectedFile);
      const fileUrl = await getDownloadURL(storageRef);
      messageData.fileUrl = fileUrl;
      setSelectedFile(null);
    }

    await addDoc(messagesRef, messageData);
    setNewMessage('');
  };

  // Add emoji to message
  const handleEmojiClick = (emoji: any) => {
    setNewMessage((prev) => prev + emoji.emoji);
  };

  return (
    <div className="max-w-lg mx-auto mt-10 p-6 border rounded-lg shadow-md bg-white flex flex-col h-[80vh]">
      {/* Chat Header */}
      <h1 className="text-xl font-bold mb-4 text-center">Chat with {userName}</h1>

      {/* Messages List */}
      <div className="flex-grow overflow-y-auto border p-3 rounded-lg bg-gray-100">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`mb-2 p-2 max-w-xs rounded-lg ${
              msg.sender === loggedInUserId ? 'bg-blue-500 text-white ml-auto' : 'bg-gray-300'
            }`}
          >
            {msg.text}
            {msg.fileUrl && (
              <a href={msg.fileUrl} target="_blank" rel="noopener noreferrer" className="text-blue-700 underline ml-2">
                View File
              </a>
            )}
          </div>
        ))}
        <div ref={messagesEndRef}></div>
      </div>

      {/* Input Box */}
      <div className="flex items-center mt-4 border rounded-lg overflow-hidden">
        {/* Emoji Picker */}
        <button onClick={() => setShowEmojiPicker(!showEmojiPicker)} className="px-3 text-xl">
          😀
        </button>
        {showEmojiPicker && (
          <div className="absolute bottom-16">
            <EmojiPicker onEmojiClick={handleEmojiClick} />
          </div>
        )}

        {/* File Upload */}
        <label htmlFor="fileUpload" className="cursor-pointer px-3 text-xl">
          📎
        </label>
        <input
          id="fileUpload"
          type="file"
          onChange={(e) => setSelectedFile(e.target.files?.[0] || null)}
          className="hidden"
        />

        {/* Message Input */}
        <input
          type="text"
          placeholder="Type a message..."
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          className="flex-grow p-2 border-none focus:outline-none"
          onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
        />

        {/* Send Button */}
        <button
          onClick={sendMessage}
          className="bg-blue-500 text-white px-4 py-2 hover:bg-blue-600 transition"
        >
          Send
        </button>
      </div>
    </div>
  );
}
