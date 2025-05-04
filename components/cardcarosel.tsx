"use client";
import Image from "next/image";
import React, { useState } from "react";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";

export function AppleCardsCarouselDemo() {
  const [isFormVisible, setFormVisible] = useState(false); // Manage form visibility state

  const toggleFormVisibility = () => {
    setFormVisible(!isFormVisible);
  };

  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    <div className="w-full h-full py-20">
      <h2 className="max-w-7xl pl-4 mx-auto text-xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-200 font-sans">
        Events, Workshops & Live Classes
      </h2>
      <p className="max-w-7xl pl-4 mx-auto text-lg md:text-xl text-neutral-600 dark:text-neutral-300 font-sans mt-4">
        Seamlessly schedule your Events, Workshops, or Live Classes with
        SkilledIn.
      </p>

      {/* Button to open the form */}
      <div className="mt-[40px] ml-[135px] mb-[100px]">
        <button
          onClick={toggleFormVisibility}
          className="px-6 py-3 bg-blue-500 text-white rounded-lg"
        >
          Create Event
        </button>
      </div>

      {/* Form modal */}
      {isFormVisible && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h3 className="text-xl font-bold mb-4">Create a New Event</h3>
            <form>
              <div className="mb-4">
                <label
                  htmlFor="eventName"
                  className="block text-sm font-medium text-gray-700"
                >
                  Event Name
                </label>
                <input
                  id="eventName"
                  type="text"
                  placeholder="Enter event name"
                  className="w-full p-2 border border-gray-300 rounded-md"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="eventDate"
                  className="block text-sm font-medium text-gray-700"
                >
                  Event Date
                </label>
                <input
                  id="eventDate"
                  type="date"
                  className="w-full p-2 border border-gray-300 rounded-md"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="eventDescription"
                  className="block text-sm font-medium text-gray-700"
                >
                  Event Description
                </label>
                <textarea
                  id="eventDescription"
                  placeholder="Enter event description"
                  className="w-full p-2 border border-gray-300 rounded-md"
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

      <Carousel items={cards} />
    </div>
  );
}

const DummyContent = () => {
  return (
    <>
      {[...new Array(3).fill(1)].map((_, index) => {
        return (
          <div
            key={"dummy-content" + index}
            className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
          >
            <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
              <span className="font-bold text-neutral-700 dark:text-neutral-200">
                The first rule of Apple club is that you boast about Apple club.
              </span>{" "}
              Keep a journal, quickly jot down a grocery list, and take amazing
              class notes. Want to convert those notes to text? No problem.
              Langotiya jeetu ka mara hua yaar is ready to capture every
              thought.
            </p>
            <Image
              src="https://assets.aceternity.com/macbook.png"
              alt="Macbook mockup from Aceternity UI"
              height="500"
              width="500"
              className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain"
            />
          </div>
        );
      })}
    </>
  );
};

const data = [
  {
    category: "Event 1",
    title: "Event Description.",
    src: "https://images.unsplash.com/photo-1542744095-fcf48d80b0fd?q=80&w=1776&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: <DummyContent />,
  },
  {
    category: "Event 2",
    title: "Event Description.",
    src: "https://plus.unsplash.com/premium_photo-1681487469745-91d1d8a5836b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: <DummyContent />,
  },
  {
    category: "Event 3",
    title: "Event Description.",
    src: "https://plus.unsplash.com/premium_photo-1661546333305-667b3326bb99?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: <DummyContent />,
  },
];
