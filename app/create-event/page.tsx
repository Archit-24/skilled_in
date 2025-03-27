'use client';

import { useState } from 'react';

export default function CreateEventPage() {
  const [formData, setFormData] = useState({
    summary: '',
    description: '',
    date: '',
    time: '',
  });

  const [meetLink, setMeetLink] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);

    const startTime = `${formData.date}T${formData.time}:00+05:30`;
    const endTime = new Date(new Date(startTime).getTime() + 60 * 60 * 1000).toISOString();

    const response = await fetch('/api/create-event', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        summary: formData.summary,
        description: formData.description,
        startTime,
        endTime,
      }),
    });

    const data = await response.json();
    console.log('API Response:', data);
    if (data.meetLink) setMeetLink(data.meetLink);
  };

  return (
    <div className="max-w-lg mx-auto mt-10 p-6 border rounded-lg shadow-lg bg-white">
      <h1 className="text-2xl font-bold text-center text-gray-800 mb-4">📅 Create an Event</h1>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="summary"
          placeholder="Event Title"
          value={formData.summary}
          onChange={handleChange}
          required
          className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
        />
        <textarea
          name="description"
          placeholder="Event Description"
          value={formData.description}
          onChange={handleChange}
          required
          className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          required
          className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="time"
          name="time"
          value={formData.time}
          onChange={handleChange}
          required
          className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
        />
        <button 
          type="submit" 
          className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition">
          🚀 Create Event
        </button>
      </form>

      {meetLink && (
        <div className="mt-6 p-4 bg-green-100 border-l-4 border-green-500 rounded-lg shadow-md">
          <h2 className="text-lg font-semibold text-green-700">✅ Event Created Successfully!</h2>
          <p className="text-gray-700 mt-2">Here is your event link:</p>
          <div className="flex items-center justify-between mt-2 bg-white p-2 rounded-lg shadow">
            <a 
              href={meetLink} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-blue-600 font-semibold break-all hover:underline">
              {meetLink}
            </a>
            <button 
              onClick={() => navigator.clipboard.writeText(meetLink)} 
              className="ml-2 bg-blue-500 text-white px-3 py-1 rounded-lg hover:bg-blue-600 transition">
              📋 Copy
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
