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
  const [eventLink, setEventLink] = useState('');
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setError('');

    try {
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

      if (!response.ok) throw new Error('Failed to create event');

      const data = await response.json();
      console.log('API Response:', data);
      
      if (data.meetLink) setMeetLink(data.meetLink);
      if (data.eventLink) setEventLink(data.eventLink);

    } catch (err: any) {
      console.error('Error creating event:', err);
      setError('Failed to create event. Please try again.');
    }
  };

  return (
    <div className="max-w-lg mx-auto mt-10 p-6 border rounded-lg shadow-md bg-white">
      <h1 className="text-xl font-bold mb-4">Create an Event</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="summary"
          placeholder="Event Title"
          value={formData.summary}
          onChange={handleChange}
          required
          className="w-full p-2 border rounded"
        />
        <textarea
          name="description"
          placeholder="Event Description"
          value={formData.description}
          onChange={handleChange}
          required
          className="w-full p-2 border rounded"
        />
        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          required
          className="w-full p-2 border rounded"
        />
        <input
          type="time"
          name="time"
          value={formData.time}
          onChange={handleChange}
          required
          className="w-full p-2 border rounded"
        />
        <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded">Create Event</button>
      </form>

      {error && (
        <div className="mt-4 p-2 bg-red-100 border border-red-300 text-red-700 rounded">
          {error}
        </div>
      )}

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
