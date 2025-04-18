import { auth0 } from "../lib/auth0";

export default async function Home() {
  const session = await auth0.getSession();

  const baseBackend = "http://localhost:3000/auth/";

  if (!session) {
    return (
      <main>
        <div className="container mx-auto text-center space-x-12">
          <a href={`${baseBackend}login`}>Log in</a>
          <a href={`${baseBackend}login?screen_hint=signup`}>Sign up</a>
          <a href={`${baseBackend}logout`}>Logout</a>
        </div>
      </main>
    );
  }

  return (
    <main className="container mx-auto text-center">
      <h1>Welcome, {session.user.name}!</h1>

      <a href={`${baseBackend}logout`}>
        <button className="p-2 border rounded-lg text-center flex justify-center items-center">
          Logout
        </button>
      </a>
    </main>
  );
}
