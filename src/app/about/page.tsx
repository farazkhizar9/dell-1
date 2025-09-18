"use client";
import React from "react";

const About: React.FC = () => {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-white">
      <h1 className="text-3xl font-semibold mb-4">About Us</h1>
      <p className="max-w-lg text-center text-gray-600">
        This is the About page. Here you can write details about yourself or
        your project.
      </p>
    </main>
  );
};

export default About;