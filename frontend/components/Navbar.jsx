"use client";
// components/Navbar.jsx
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import "../styles/navbar.css";

export default function Navbar() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const userData = localStorage.getItem("user");
      if (userData) {
        setUser(JSON.parse(userData));
      }
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    window.location.href = "/";
  };

  return (
    <div className="navbar">
      <div className="logo-links">
        <Image
          src="/assets/Mask.png"
          alt="Shadow Slave Logo"
          width={80} // Adjust based on your logo size
          height={80}
          priority // Optional: for above-the-fold images
        />
        <p className="logo-text">Shadow Slave</p>
        <ul className="links">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/plot">Plot</Link>
          </li>
          <li>
            <Link href="/characters">Characters</Link>
          </li>
          <li>
            <Link href="/gallery">Gallery</Link>
          </li>
          <li>
            <Link href="/author">Author</Link>
          </li>
        </ul>
      </div>
      <div className="auth">
        <ul>
          {user ? (
            <>
              <li>
                <Link href="/profile">{user.username}</Link>
              </li>
              <li>
                <button onClick={handleLogout} style={{ background: "none", border: "none", color: "inherit", cursor: "pointer", font: "inherit" }}>Logout</button>
              </li>
            </>
          ) : (
            <>
              <li>
                <Link href="/login">Login</Link>
              </li>
              <li>
                <Link href="/signup">Register</Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </div>
  );
}