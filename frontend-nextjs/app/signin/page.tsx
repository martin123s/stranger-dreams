"use client"

import React from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useRouter } from "next/navigation";

const page = () => {
  const router = useRouter();

  return (
    <div
      className="fixed inset-0 bg-gray-500 opacity-30 flex items-center justify-center z-50"
      onClick={() => router.back()} // closes modal
    >
      <div
        className="bg-white shadow-xl rounded-2xl p-8 w-[500px]"
        onClick={(e) => e.stopPropagation()} // prevent background click
      >
        <h2 className="text-xl font-semibold mb-4">Search</h2>
        <input
          type="text"
          placeholder="Type here..."
          className="border p-2 w-full rounded-md"
        />
      </div>
    </div>
  );
}

export default page