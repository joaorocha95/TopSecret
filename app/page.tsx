"use client";
import Buttons from "./Buttons";

export default function Home() {
  return (
    <div>
      <main style={{ display: 'flex', height: '100vh', margin: 0, overflow: 'hidden', justifyContent: 'center', alignContent: 'center' }}>
        <div className={'main-card'}>
          <div className={'title-block'}>Date</div>
          <Buttons />
        </div>
      </main>
    </div>
  );
}
