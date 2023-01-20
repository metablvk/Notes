import { FC, useState, MouseEvent } from 'react';
import Link from 'next/link';
import styles from './header.module.css';

// add the React Header Element
const Header: FC = () => {
  const [menuState, setMenuState] = useState<boolean>(false);
  const handleClick = (e: MouseEvent) => {
    setMenuState(!menuState);
  };
  return (
    <header>
      <nav
        className={`${styles.navbar} py-8 px-8 max-w-6xl mx-auto`}
        onClick={handleClick}
      >
        <div className={styles.hamburger}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div>
          <Link href='/'>Metablvk&apos;s Notes & Tips</Link>
        </div>
        <ul
          className={
            menuState
              ? `${styles.navbar_menu} ${styles.show_menu}`
              : `${styles.navbar_menu}`
          }
        >
          <li>
            <Link className='text-lg' href='/'>
              Home
            </Link>
          </li>
          <li>
            <Link className='text-lg' href='/html'>
              HTML
            </Link>
          </li>
          <li>
            <Link className='text-lg' href='/css'>
              CSS
            </Link>
          </li>
          <li>
            <Link className='text-lg' href='/javascript'>
              JavaScript
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

// export Header module
export default Header;
