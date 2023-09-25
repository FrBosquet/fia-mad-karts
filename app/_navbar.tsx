'use client';

import { Navbar } from 'flowbite-react';
import { usePathname } from 'next/navigation';

export default function DefaultNavbar() {
  const pathname = usePathname()

  return (
    <Navbar
      fluid
    >
      <Navbar.Brand
        href="/"
      >
        <img
          alt="Flowbite React Logo"
          className="mr-3 h-6 sm:h-9"
          src="/kart.svg"
        />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          FIA MADRID F1 CHAMPIONSHIP
        </span>
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


