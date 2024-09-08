// components/Buttons.tsx
import { useState, useRef } from 'react';

const Buttons: React.FC = () => {
  const [noButtonStyle, setNoButtonStyle] = useState<React.CSSProperties>({});
  const noButtonRef = useRef<HTMLButtonElement>(null);

  const moveNoButton = () => {
    if (noButtonRef.current) {
      const button = noButtonRef.current;
      const buttonRect = button.getBoundingClientRect();

      // Viewport dimensions
      const viewportWidth = window.innerWidth;
      const viewportHeight = window.innerHeight;

      // Button dimensions
      const buttonWidth = buttonRect.width;
      const buttonHeight = buttonRect.height;

      // Calculate new position
      const x = Math.random() * (viewportWidth - buttonWidth);
      const y = Math.random() * (viewportHeight - buttonHeight);

      setNoButtonStyle({
        position: 'absolute',
        backgroundColor: 'yellow',
        padding: '10px 40px',
        left: `${x}px`,
        top: `${y}px`,
      });
    }
  };

  return (
    <div className={'response-block'}>
      <button className={'yes-button'}>Yes!!!</button>
      <button
        className={'no-button'}
        ref={noButtonRef}
        style={noButtonStyle}
        onMouseEnter={moveNoButton}
      >
        No 😭
      </button>
    </div>
  );
};

export default Buttons;
