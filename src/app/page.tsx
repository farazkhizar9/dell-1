"use client";
import React from "react";

const Home: React.FC = () => {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-6 text-blue-500">Welcome to My Website</h1>
      <img
        src="/faraz3.png"
        alt="Front Pic"
        className="w-64 h-64 object-cover rounded-2xl shadow-lg"
      />
      <p className="mt-4 text-lg text-blue-700 font-bold">
        This is the Home page built with Next.js 15 + TypeScript + TailwindCSS
      </p>
    </main>
  );
};

export default Home;
