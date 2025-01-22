import React from 'react'
import Link from 'next/link'
import styles from './styles.module.css';

function Footer() {
  return (
    <footer className={styles.footer}>
      Made with ♥ by &nbsp;
      <Link
        href="https://www.linkedin.com/in/o%C4%9Fuzcan-ayan-916152255/"
        target="_blank">
        Oğuzcan Ayan
      </Link>
    </footer>
  )
}

export default Footer