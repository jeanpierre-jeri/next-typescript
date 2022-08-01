import ActiveLink from './ActiveLink'
import styles from './Navbar.module.css'

const menuItems = [
  {
    text: 'Home',
    href: '/',
  },
  {
    text: 'About',
    href: '/about',
  },
  {
    text: 'Contact',
    href: '/contact',
  },
  {
    text: 'Pricing',
    href: '/pricing',
  },
]

const Navbar = () => {
  return (
    <nav className={styles.nav}>
      {menuItems.map(({ text, href }) => (
        <ActiveLink to={href} key={href}>
          {text}
        </ActiveLink>
      ))}
    </nav>
  )
}

export default Navbar
