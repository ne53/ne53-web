"use client";
import "./globals.css";

export default function Header() {
  return (
    <header className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-1">
        <div className="flex justify-between h-16">
          <div className="flex">
            <a href="/" className="flex-shrink-0 flex items-center">
              <p className="text-2xl font-bold text-gray-900">NE53 Tech Blog</p>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
