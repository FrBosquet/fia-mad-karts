'use client';

import { Navbar } from 'flowbite-react';

export default function DefaultNavbar() {
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
          active
          href="#"
        >
          <p>
            Home
          </p>
        </Navbar.Link>
        <Navbar.Link href="#">
          Services
        </Navbar.Link>
        <Navbar.Link href="#">
          Pricing
        </Navbar.Link>
        <Navbar.Link href="#">
          Contact
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  )
}


