"use client";
import Buttons from "./components/Buttons";
import LoveAnimation from './components/LoveAnimation';

export default function Home() {
  return (
    <div>
      <main style={{ display: 'flex', height: '100vh', margin: 0, overflow: 'hidden', justifyContent: 'center', alignContent: 'center' }}>
        <div className={'main-card'}>
          <div className={'title-block'}>Date?</div>
          <Buttons />
        </div>
        <LoveAnimation />
      </main>
    </div>
  );
}
