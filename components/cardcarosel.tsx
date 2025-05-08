"use client";
import React, { useState } from "react";

type Event = {
  name: string;
  date: string;
  description: string;
};

export function AppleCardsCarouselDemo() {
  const [isFormVisible, setFormVisible] = useState(false);
  const [events, setEvents] = useState<Event[]>([]);
  const [formData, setFormData] = useState<Event>({
    name: "",
    date: "",
    description: "",
  });

  const toggleFormVisibility = () => {
    setFormVisible(!isFormVisible);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setEvents((prev) => [...prev, formData]);
    setFormData({ name: "", date: "", description: "" });
    setFormVisible(false);
  };

  // Format date to match Google Calendar's expected format
  const formatDateForGoogleCalendar = (date: string) => {
    const dateObj = new Date(date);
    return dateObj.toISOString().replace(/[-:]/g, "").split(".")[0] + "Z";
  };

  // Create Google Calendar event URL
  const createGoogleCalendarLink = (event: Event) => {
    const startDate = formatDateForGoogleCalendar(event.date);
    const endDate = startDate; // Assuming it's a one-day event
    const calendarUrl = `https://calendar.google.com/calendar/r/eventedit?text=${encodeURIComponent(
      event.name
    )}&dates=${startDate}/${endDate}&details=${encodeURIComponent(
      event.description
    )}&sf=true&output=xml`;
    return calendarUrl;
  };

  return (
    <div className="w-full h-full py-20">
      <h2 className="max-w-7xl pl-4 mx-auto text-xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-200 font-sans">
        Events, Workshops & Live Classes
      </h2>
      <p className="max-w-7xl pl-4 mx-auto text-lg md:text-xl text-neutral-600 dark:text-neutral-300 font-sans mt-4">
        Seamlessly schedule your Events, Workshops, or Live Classes with SkilledIn.
      </p>

      <div className="mt-[40px] ml-[135px] mb-[100px]">
        <button
          onClick={toggleFormVisibility}
          className="px-6 py-3 bg-blue-500 text-white rounded-lg"
        >
          Create An Event
        </button>
      </div>

      {isFormVisible && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h3 className="text-xl font-bold mb-4 text-black">Create a New Event</h3>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="name" className="block text-sm font-medium text-black">
                  Event Name
                </label>
                <input
                  id="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter event name"
                  className="w-full p-2 border border-gray-300 rounded-md text-black"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="date" className="block text-sm font-medium text-black">
                  Event Date
                </label>
                <input
                  id="date"
                  type="date"
                  value={formData.date}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded-md text-black"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="description" className="block text-sm font-medium text-black">
                  Event Description
                </label>
                <textarea
                  id="description"
                  value={formData.description}
                  onChange={handleChange}
                  placeholder="Enter event description"
                  className="w-full p-2 border border-gray-300 rounded-md text-black"
                  required
                />
              </div>
              <div className="flex justify-end space-x-4">
                <button
                  type="button"
                  onClick={toggleFormVisibility}
                  className="px-4 py-2 bg-gray-500 text-white rounded-md"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-500 text-white rounded-md"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Display the submitted events */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-4 max-w-7xl mx-auto">
        {events.map((event, index) => (
          <div key={index} className="bg-white dark:bg-neutral-800 rounded-xl p-6 shadow-md">
            <h3 className="text-xl font-bold mb-2">{event.name}</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300 mb-1">Date: {event.date}</p>
            <p className="text-gray-700 dark:text-gray-200">{event.description}</p>
            <a
              href={createGoogleCalendarLink(event)}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-block text-blue-500 hover:text-blue-700"
            >
              Add to Google Calendar
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}