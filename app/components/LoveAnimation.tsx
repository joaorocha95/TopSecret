import { useEffect } from 'react';
import styles from './styles/LoveAnimation.module.css';

const LoveAnimation: React.FC = () => {
    useEffect(() => {
        const love = setInterval(() => {
            const r_num = Math.floor(Math.random() * 40) + 1;
            const r_size = Math.floor(Math.random() * 65) + 10;
            const r_left = Math.floor(Math.random() * 100) + 1;
            const r_bg = Math.floor(Math.random() * 25) + 100;
            const r_time = Math.floor(Math.random() * 5) + 5;

            const bgHeart = document.querySelector(`.${styles.bg_heart}`);
            if (bgHeart) {
                const heartDiv1 = document.createElement('div');
                heartDiv1.className = styles.heart;
                heartDiv1.style.width = `${r_size}px`;
                heartDiv1.style.height = `${r_size}px`;
                heartDiv1.style.left = `${r_left}%`;
                heartDiv1.style.background = `rgba(255, ${r_bg - 25}, ${r_bg}, 1)`;
                heartDiv1.style.animation = `love ${r_time}s ease`;

                const heartDiv2 = document.createElement('div');
                heartDiv2.className = styles.heart;
                heartDiv2.style.width = `${r_size - 10}px`;
                heartDiv2.style.height = `${r_size - 10}px`;
                heartDiv2.style.left = `${r_left + r_num}%`;
                heartDiv2.style.background = `rgba(255, ${r_bg - 25}, ${r_bg + 25}, 1)`;
                heartDiv2.style.animation = `love ${r_time + 5}s ease`;

                bgHeart.appendChild(heartDiv1);
                bgHeart.appendChild(heartDiv2);

                document.querySelectorAll(`.${styles.heart}`).forEach((heart) => {
                    const top = parseFloat(window.getComputedStyle(heart).top.replace(/[^-\d\.]/g, ''));
                    const width = parseFloat(window.getComputedStyle(heart).width.replace(/[^-\d\.]/g, ''));
                    if (top <= -100 || width >= 150) {
                        heart.remove();
                    }
                });
            }
        }, 500);

        return () => clearInterval(love);
    }, []);

    return <div className={`.${styles.heart}`}></div>;
};

export default LoveAnimation;
