export default async function Home() {
  const baseBackend = "http://localhost:4000/api/auth/";

  return (
    <main className="container mx-auto text-center flex justify-center items-center h-screen ">
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
