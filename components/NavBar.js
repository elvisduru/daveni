import tw from 'twin.macro'
import Link from 'next/link'
import ActiveLink from './ActiveLink'
import useToggle from '../hooks/useToggle'
import { useRef, useEffect } from 'react'

const NavItem = tw.a`h-full flex items-center border-b border-white border-opacity-0 ml-10 cursor-pointer hocus:border-opacity-100`

const links = [
  {
    name: 'About Us',
    link: '/about',
  },
  {
    name: 'Global Citizenship',
    link: '/citizenship',
  },
  {
    name: 'Programs',
    link: '/programs',
  },
  {
    name: 'Media',
    link: '/media',
  },
  {
    name: 'Contact Us',
    link: '/contact',
  },
]

export default function NavBar() {
  const [openNav, toggleOpenNav] = useToggle()
  const navBarEl = useRef(null)

  const handleScroll = () => {
    if (window.scrollY > navBarEl.current.offsetHeight) {
      navBarEl.current.style.backgroundColor = '#181818'
    } else {
      navBarEl.current.style.backgroundColor = 'transparent'
    }
  }

  const NavBtn = ({ toggleNav }) => (
    <div
      onClick={toggleNav}
      tw="z-50 flex flex-col items-end space-y-2 md:hidden"
    >
      <div tw="w-8 h-0.5 bg-white"></div>
      <div tw="w-4 h-0.5 bg-white"></div>
    </div>
  )

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <nav
      ref={navBarEl}
      tw="text-xs text-white uppercase px-5 md:px-20 bg-transparent border-b border-white border-opacity-20  flex justify-between items-center h-10 fixed w-screen left-0 right-0 z-50"
    >
      <Link href="/">
        <a tw="w-7 flex h-full items-center cursor-pointer">
          <img src="images/logo.svg" alt="Daveni" />
        </a>
      </Link>
      <NavBtn toggleNav={toggleOpenNav} />
      <ul
        css={[
          tw`flex flex-col pt-8 pl-8 text-xl text-white text-opacity-80 bg-dark md:(flex-row bg-transparent static justify-between items-center py-0 text-sm translate-x-0)`,
          tw`transition-transform transform -translate-x-full ease-in-out duration-200`,
          tw`z-30 fixed w-screen left-0 top-0 h-screen md:(max-w-max h-full)`,
          openNav && tw`translate-x-0`,
          `
          @media (max-width: 500px) {
            & a {
              height: 100px;
              margin-left: 0;
            }
          } 
          `,
        ]}
        onClick={toggleOpenNav}
      >
        {links.map((link, i) => (
          <ActiveLink activeClassName="active" key={i} href={link.link}>
            <NavItem>{link.name}</NavItem>
          </ActiveLink>
        ))}
      </ul>
    </nav>
  )
}
