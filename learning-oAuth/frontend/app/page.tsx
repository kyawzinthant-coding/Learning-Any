"use client";
import { useState, useEffect } from "react";

export default function Home() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [user, setUser] = useState<any>(null);

  const baseBackend = "http://localhost:4000/api/auth/";

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await fetch("http://localhost:4000/api/auth/me", {
          credentials: "include", // ⚠️ Must include credentials to send cookie
        });
        console.log(res);

        if (!res.ok) throw new Error("User not logged in");

        const data = await res.json();
        setUser(data.user);
      } catch (err) {
        console.error("Error fetching user:", err);
      }
    };

    fetchUser();
  }, []);

  return (
    <main className="container mx-auto text-center flex justify-center items-center h-screen flex-col space-y-12 ">
      <div>
        <h1>Auth0 OAuth Example</h1>
        {user ? (
          <div>
            <p>Hello, {user.name}</p>
            <p>Email: {user.email}</p>
          </div>
        ) : (
          <div>
            <p>Please log in</p>
          </div>
        )}
      </div>

      <div className="flex gap-6 items-center">
        <a href={`${baseBackend}login`}>
          <button className="p-2 border rounded-lg text-center flex justify-center items-center cursor-pointer">
            Login
          </button>
        </a>
        <a href={`${baseBackend}logout`}>
          <button className="p-2 border rounded-lg text-center flex justify-center items-center cursor-pointer">
            Logout
          </button>
        </a>
      </div>
    </main>
  );
}
