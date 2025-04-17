import { useEffect, useState } from "react";

function App() {
  const [autoUrl, setAutoUrl] = useState("");
  const [manualUrl, setManualUrl] = useState("");

  useEffect(() => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      const url = tabs[0]?.url;
      if (url) setAutoUrl(url);
    });
  }, []);

  const handleAutoSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Auto Saved:", autoUrl);
    // Save to chrome.storage or localStorage or backend here
  };

  const handleManualSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Manual Saved:", manualUrl);
    // Save to storage or backend
  };

  return (
    <div className="container mx-auto w-[500px]">
      <h1 className="text-center text-4xl font-sans font-bold">Smart Linker</h1>
      <div className="mt-12 flex flex-col gap-4 p-12">
        <form onSubmit={handleAutoSubmit}>
          <input
            className="border p-2 border-black"
            type="text"
            value={autoUrl}
            onChange={(e) => setAutoUrl(e.target.value)}
            placeholder="from tab auto "
          />
          <button
            type="submit"
            className="border p-2 cursor-pointer border-black"
          >
            Submit
          </button>
        </form>

        <form onSubmit={handleManualSubmit}>
          <input
            className="border p-2 border-black"
            type="text"
            value={manualUrl}
            onChange={(e) => setManualUrl(e.target.value)}
            placeholder="paste manual "
          />
          <button
            type="submit"
            className="border p-2 cursor-pointer border-black"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default App;
