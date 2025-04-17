import { auth0 } from "../lib/auth0";

export default async function Home() {
  const session = await auth0.getSession();

  if (!session) {
    return (
      <main>
        <div className="container mx-auto text-center space-x-12">
          <a href="/api/auth/login">Log in</a>
          <a href="/api/auth/login?screen_hint=signup">Sign up</a>
          <a href="/api/auth/logout">Logout</a>
        </div>
      </main>
    );
  }

  return (
    <main className="container mx-auto text-center">
      <h1>Welcome, {session.user.name}!</h1>
    </main>
  );
}
