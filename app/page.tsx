"use client";

export default function Home() {
  const handleSubmit = (event: any) => {
    event.preventDefault();
    const value = event.target[0].value;
    console.log({ value });
  };

  return (
    <main className="m-4">
      <h1 className="text-white">GET</h1>
      <form onSubmit={(event) => handleSubmit(event)}>
        <input
          type="text"
          className={
            "bg-black w-full mt-4 p-4 text-white text-2xl border-l-8 border-green-500 outline-none focus:border-b-1 focus:border-white"
          }
          autoFocus
          placeholder="Ask Gemini..."
        />
      </form>
    </main>
  );
}
