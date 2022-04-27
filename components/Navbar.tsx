import React from 'react'
import styles from './Navbar.module.css';
import { ActiveLink } from './ActiveLink';

const menuItems = [
  {
      text: 'Home',
      href: '/'
  },
  {
      text: 'About',
      href: '/about'
  },
  {
      text: 'Contact',
      href: '/contact'
  },
  {
      text: 'Pricing',
      href: '/pricing'
  },
];

export const Navbar = () => {
  return (
    <nav className={styles['menu-container']}>
      {menuItems.map(m => (
        <ActiveLink text={m.text} href={m.href} key={m.href}/>
      ))}
    </nav>
  )
}
