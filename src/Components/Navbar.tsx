import { getAuth, GoogleAuthProvider, signInWithPopup, signOut, UserCredential, getAdditionalUserInfo, User } from "firebase/auth";
import emailjs from "emailjs-com";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import googleIcon from "@/app/assets/google_icon.png";
import { app } from "../utils/firebase";
import logo from "@/Assets/Seekit_transparent.png";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [user, setUser] = useState<User | null>(null);
  const [myPostsActive, setMyPostsActive] = useState<boolean>(false);

  const auth = getAuth(app);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const sendOnboardingEmail = (email: string | null, displayName: string | null) => {
    if (!email || !displayName) {
      console.error("Email or display name is missing.");
      return;
    }

    const templateParams = {
      to_name: displayName,
      to_email: email,
      subject: "Welcome to Seekit!",
      message: "We're thrilled to have you on board!",
    };

    emailjs.send(
      'service_ttp4zxu',  
      'template_6l70tuj',
      templateParams,
      'l6rbabXEYkrhk3WSb' 
    ).then((response: { status: any; text: any; }) => {
      console.log('SUCCESS!', response.status, response.text, displayName, email);
    }, (error: any) => {
      console.error('FAILED...', error);
    });
  };

  const signInWithGoogle = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const result: UserCredential = await signInWithPopup(auth, provider);
      setUser(result.user);

      // Check if the user is new
      const additionalUserInfo = getAdditionalUserInfo(result);
      if (additionalUserInfo?.isNewUser) {
        sendOnboardingEmail(result.user.email, result.user.displayName); // Send email to signed-in user
      }
    } catch (error) {
      console.error("Error occurred during sign-in:", (error as Error).message);
    }
  };

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      setUser(null);
    } catch (error) {
      console.error("Error occurred during sign-out:", (error as Error).message);
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
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
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

  // Function to handle clicking on 'My Posts' link
  const handleMyPostsClick = () => {
    setMyPostsActive(true); // Set active state for 'My Posts'
    setIsOpen(false); // Close dropdown

    // Navigate to '/my-posts' route or implement fetching posts logic
    // Replace with actual logic based on your routing and data fetching needs
    // Example:
    // router.push('/my-posts');
  };

  return (
    <nav className="bg-[#393E46] text-white top-0 z-50 fixed w-full backdrop-filter backdrop-blur-lg shadow-2xl bg-opacity-20">
      <div className="md:max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <Link href="/">
              {/* <p className="text-xl font-bold cursor-pointer font-anton">
                Seekit
              </p> */}
              <Image src={logo} height={200} width={150} alt="logo"/>
            </Link>
          </div>
          <div className="hidden md:flex md:justify-between md:items-center md:space-x-10">
            <Link href="/">
              <p
                className={`text-white hover:text-gray-600 cursor-pointer ${
                  myPostsActive ? "text-gray-600" : ""
                }`}
                onClick={() => setMyPostsActive(false)}
              >
                Home
              </p>
            </Link>
            <Link href="/lost">
              <p
                className={`text-white hover:text-gray-600 cursor-pointer ${
                  myPostsActive ? "text-gray-600" : ""
                }`}
                onClick={() => setMyPostsActive(false)}
              >
                Lost
              </p>
            </Link>
            <Link href="/seek">
              <p
                className={`text-white hover:text-gray-600 cursor-pointer ${
                  myPostsActive ? "text-gray-600" : ""
                }`}
                onClick={() => setMyPostsActive(false)}
              >
                Seek
              </p>
            </Link>
            <Link href="/found">
              <p
                className={`text-white hover:text-gray-600 cursor-pointer ${
                  myPostsActive ? "text-gray-600" : ""
                }`}
                onClick={() => setMyPostsActive(false)}
              >
                Found
              </p>
            </Link>
            {/* Conditional rendering based on user state */}
            {user ? (
              <div className="relative" ref={dropdownRef}>
                <button
                  onClick={toggleMenu}
                  className="flex items-center focus:outline-none"
                >
                  <Image
                    src={user.photoURL || "/default-avatar.png"}
                    alt="User Avatar"
                    className="h-8 w-8 rounded-full"
                    width={32}
                    height={32}
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
                    <Link href="/myposts">
                      <p
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
                        onClick={handleMyPostsClick}
                      >
                        My Posts
                      </p>
                    </Link>
                  </div>
                )}
              </div>
            ) : (
              <button
                className="bg-[#4ECCA3] flex text-white items-center px-4 py-2 rounded-md hover:bg-emerald-500"
                onClick={signInWithGoogle}
              >
                <span> Sign Up </span>
                <Image src={googleIcon} alt="google" width={30} height={30} />
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
              <p
                className={`block px-3 py-2 rounded-md text-base font-medium text-white hover:text-gray-600 cursor-pointer ${
                  myPostsActive ? "text-gray-600" : ""
                }`}
                onClick={() => setMyPostsActive(false)}
              >
                Home
              </p>
            </Link>
            <Link href="/lost">
              <p
                className={`block px-3 py-2 rounded-md text-base font-medium text-white hover:text-gray-600 cursor-pointer ${
                  myPostsActive ? "text-gray-600" : ""
                }`}
                onClick={() => setMyPostsActive(false)}
              >
                Lost
              </p>
            </Link>
            <Link href="/seek">
              <p
                className={`block px-3 py-2 rounded-md text-base font-medium text-white hover:text-gray-600 cursor-pointer ${
                  myPostsActive ? "text-gray-600" : ""
                }`}
                onClick={() => setMyPostsActive(false)}
              >
                Seek
              </p>
            </Link>
            <Link href="/found">
              <p
                className={`block px-3 py-2 rounded-md text-base font-medium text-white hover:text-gray-600 cursor-pointer ${
                  myPostsActive ? "text-gray-600" : ""
                }`}
                onClick={() => setMyPostsActive(false)}
              >
                Found
              </p>
            </Link>
            {user ? (
              <>
                <button
                  onClick={handleSignOut}
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-800 hover:text-gray-600 cursor-pointer w-full text-left"
                >
                  Logout
                </button>
                <Link href="/my-posts">
                  <p
                    className={`block px-3 py-2 rounded-md text-base font-medium text-white hover:text-gray-600 cursor-pointer ${
                      myPostsActive ? "text-gray-600" : ""
                    }`}
                    onClick={handleMyPostsClick}
                  >
                    My Posts
                  </p>
                </Link>
              </>
            ) : (
              <button
                onClick={signInWithGoogle}
                className="flex items-center w-full text-center bg-[#4ECCA3] text-white px-4 py-2 rounded-md hover:bg-emerald-500"
              >
                <span>Sign Up </span>
                <Image src={googleIcon} alt="google" width={30} height={30} />
              </button>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
