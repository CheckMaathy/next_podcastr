import format from 'date-fns/format';
import ptBR from 'date-fns/locale/pt-BR';
import Link from 'next/link';

import styles from './styles.module.scss';


interface props {
  toggleTheme(): void;
}

export function Header() {
  const currentDate = format(new Date(), 'EEEEEE, d MMMM', {
    locale: ptBR,
  });

  return (
    <header className={styles.headerContainer}>
      <Link href="/">
        <button type="button" className={styles.homeButton}>
          <img src="/logo.svg" alt="logo_podcastr" />
        </button>
      </Link>
      <p>The best for you listen</p>
      <span>{currentDate}</span>
    </header>
  );
}