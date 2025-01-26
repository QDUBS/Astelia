"use client";

export default function Error() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
      <div className="text-center">
        <h1 className="text-9xl font-extrabold text-red-600">500</h1>
        <h2 className="text-3xl mt-4">Oops! Something Went Wrong</h2>
        <p className="mt-2 text-lg text-gray-300">
          There was an error on the server. Please try again later.
        </p>
      </div>
    </div>
  );
}
