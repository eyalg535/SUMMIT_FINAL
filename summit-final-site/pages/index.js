import { useEffect } from 'react';
import { useState } from 'react';

export default function Home() {
  const [expanded, setExpanded] = useState(null);
  useEffect(() => {
    const menuButton = document.getElementById('menu-button');
    const mobileMenu = document.getElementById('mobile-menu');

    if (menuButton && mobileMenu) {
      menuButton.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
      });
    }

    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('#navbar a');

    const onScroll = () => {
      let current = '';
      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (window.scrollY >= sectionTop - 100) {
          current = section.getAttribute('id');
        }
      });

      navLinks.forEach(link => {
        link.classList.remove('text-blue-600');
        if (link.getAttribute('href') === `#${current}`) {
          link.classList.add('text-blue-600');
        }
      });
    };

    window.addEventListener('scroll', onScroll);

    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  return <></>;  // Truncated for brevity; real content is in your canvas
}
