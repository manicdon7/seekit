// Navbar.tsx
"use client";
import { useState, useEffect, useRef, MouseEvent } from "react";
import Link from "next/link";
import { app } from "../utils/firebase";
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut, User } from "firebase/auth";
import "../../src/app/globals.css";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [user, setUser] = useState<User | null>(null); // State to hold user information

  const auth = getAuth(app); // Get the auth instance from the Firebase app
  const dropdownRef = useRef<HTMLDivElement>(null); // Ref to hold reference of dropdown menu

  // Function to sign in with Google
  const signInWithGoogle = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      setUser(result.user); // Set user state with user information
    } catch (error) {
      if (error instanceof Error) {
        console.error("Error occurred during sign-in:", error.message);
      }
    }
  };

  // Function to sign out
  const handleSignOut = async () => {
    try {
      await signOut(auth);
      setUser(null); // Reset user state
    } catch (error) {
      if (error instanceof Error) {
        console.error("Error occurred during sign-out:", error.message);
      }
    }
  };

  // Effect to listen for changes in authentication state
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setUser(user); // Set user state if user is authenticated
      } else {
        setUser(null); // Reset user state if no user is authenticated
      }
    });

    return () => unsubscribe(); // Cleanup function to unsubscribe from auth state changes
  }, [auth]);

  // Effect to add event listener for clicks outside the dropdown
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false); // Close dropdown if clicked outside
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Function to toggle dropdown
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-[#232931] shadow-lg text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <Link href="/">
              <p className="text-xl font-bold cursor-pointer font-anton">Seekit</p>
            </Link>
          </div>
          <div className="hidden md:flex md:justify-between md:items-center md:space-x-10">
            <Link href="/">
              <p className="text-white hover:text-gray-600 cursor-pointer">Home</p>
            </Link>
            <Link href="/about">
              <p className="text-white hover:text-gray-600 cursor-pointer">About</p>
            </Link>
            <Link href="/contact">
              <p className="text-white hover:text-gray-600 cursor-pointer">Contact</p>
            </Link>
            {/* Conditional rendering based on user state */}
            {user ? (
              <div className="relative" ref={dropdownRef}>
                <button
                  onClick={toggleMenu}
                  className="flex items-center focus:outline-none"
                >
                  <img
                    src={user.photoURL || "/default-avatar.png"} // Use a default avatar if photoURL is not available
                    alt="User Avatar"
                    className="h-8 w-8 rounded-full"
                  />
                  <span className="ml-2 text-white">{user.displayName}</span>
                </button>
                {isOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1">
                    <button
                      onClick={handleSignOut}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
                    >
                      Logout
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <button
                className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
                onClick={signInWithGoogle}
              >
                Sign Up
              </button>
            )}
          </div>
          <div className="flex items-center md:hidden">
            <button
              onClick={toggleMenu}
              className="text-white hover:text-gray-600 focus:outline-none focus:text-gray-600"
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link href="/">
              <p className="block px-3 py-2 rounded-md text-base font-medium text-white hover:text-gray-600 cursor-pointer">Home</p>
            </Link>
            <Link href="/about">
              <p className="block px-3 py-2 rounded-md text-base font-medium text-white hover:text-gray-600 cursor-pointer">About</p>
            </Link>
            <Link href="/contact">
              <p className="block px-3 py-2 rounded-md text-base font-medium text-white hover:text-gray-600 cursor-pointer">Contact</p>
            </Link>
            {user ? (
              <button
                onClick={handleSignOut}
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-800 hover:text-gray-600 cursor-pointer w-full text-left"
              >
                Logout
              </button>
            ) : (
              <button
                onClick={signInWithGoogle}
                className="block w-full text-center bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
              >
                Sign Up
              </button>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
