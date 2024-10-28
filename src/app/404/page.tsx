// app/404.tsx
import React from 'react';
import Link from 'next/link';

const Custom404 = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#232931] text-white">
      <h1 className="text-6xl font-bold">404</h1>
      <p className="text-2xl mt-4">Page Not Found</p>
      <Link href="/">
        <p className="mt-6 text-blue-500">Opps Page Not found. Go back to Home</p>
      </Link>
    </div>
  );
};

export default Custom404;
