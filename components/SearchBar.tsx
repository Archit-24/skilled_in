"use client";

import { PlaceholdersAndVanishInput } from "./ui/placeholder";

export function PlaceholdersAndVanishInputDemo() {
  const placeholders = [
    "Search for mentors, friends, or skill buddies...",
    "Find conversations that spark ideas...",
    "Looking for a skill partner? Start typing!",
    "Revisit your chats or start a new one...",
    "Who do you want to learn or teach with today?",
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
  };
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("submitted");
  };
  return (
    <div className="h-[40rem] flex flex-col justify-center  items-center px-4">
      <h2 className="mb-10 sm:mb-20 text-xl text-center sm:text-5xl dark:text-white text-black">
        Chat With Your Community
      </h2>
      <PlaceholdersAndVanishInput
        placeholders={placeholders}
        onChange={handleChange}
        onSubmit={onSubmit}
      />
    </div>
  );
}
