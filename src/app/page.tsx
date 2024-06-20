"use client";
import { useState, useEffect } from 'react';
import Home from './Home/Home';
import Loader from '@/Components/Loader';
import '@/app/globals.css';

export default function Page() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handleComplete = () => {
      setTimeout(() => {
        setLoading(false);
      }, 0); // Ensures loader shows for at least 3 seconds
    };

    if (document.readyState === 'complete') {
      handleComplete();
    } else {
      window.addEventListener('load', handleComplete);
      return () => window.removeEventListener('load', handleComplete);
    }
  }, []);

  return (
    <main className="">
      {loading && <Loader />}
      <div className={loading ? 'blur-sm' : ''}>
        <Home />
      </div>
    </main>
  );
}
