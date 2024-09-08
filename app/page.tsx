import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <div className="main-card">
          <div className="main-card-title">Date?</div>
          <div className="response-block">
            <div className="main-card-button">Yes!</div>
            <div className="main-card-button">No 😭</div>
          </div>
        </div>
      </main>
    </div>
  );
}
