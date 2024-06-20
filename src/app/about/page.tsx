// pages/about.tsx
import Link from 'next/link';

const About: React.FC = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>About Page</h1>
      <nav>
        <ul className="flex space-x-4">
          <li>
            <Link href="/">
              <p className="text-blue-500 hover:underline">Home</p>
            </Link>
          </li>
          <li>
            <Link href="/contact">
              <p className="text-blue-500 hover:underline">Contact</p>
            </Link>
          </li>
        </ul>
      </nav>
    </main>
  );
}

export default About;
