'use client';
import React from 'react';

export default function Header() {
  return (
    <header className="bg-white shadow-md sticky top-0 z-10">
      <nav className="container mx-auto flex justify-end items-center py-4 px-6">
        {/* Heading: MyWebsite */}
        <div className="text-2xl font-bold text-blue-600">
          MyWebsite
        </div>
      </nav>
    </header>
  );
}
