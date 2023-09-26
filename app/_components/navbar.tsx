'use client';

import { Navbar } from 'flowbite-react';
import { usePathname } from 'next/navigation';
import { Logo } from './logo';

export default function DefaultNavbar() {
  const pathname = usePathname()

  return (
    <Navbar
      fluid
    >
      <Navbar.Brand
        href="/"
      >
        <Logo className='text-2xl'>MKC</Logo>
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Navbar.Link
          active={pathname === '/'}
          href="/"
        >
          <p>
            Home
          </p>
        </Navbar.Link>
        <Navbar.Link active={
          pathname === '/races'
        } href="/races">
          Carreras
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  )
}


