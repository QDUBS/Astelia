"use client";

import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
      <div className="text-center">
        <h1 className="text-9xl font-extrabold text-blue-500">404</h1>
        <h2 className="text-3xl mt-4">Oops! Page Not Found</h2>
        <p className="mt-2 text-lg text-gray-300">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link href="/">
            <p className="inline-block px-6 py-3 bg-blue-600 text-white rounded-md shadow-lg hover:bg-blue-700 transition duration-300 ease-in-out">
              Go Back to Home
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
}
