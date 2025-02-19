"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import DonateModal from "./DonateModal"
import { Menu, X } from "lucide-react"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  return (
    <header className="bg-green-800 text-white sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1739187388252.jpg-hjhvokNybZz0fcHfTDqjXSHFAmkwvh.jpeg"
            alt="Tuhifadhi Mchanga Initiative Logo"
            width={40}
            height={40}
            className="mr-2"
          />
        </Link>
        <nav className="hidden md:flex items-center space-x-4">
          {["About", "Projects", "Get Involved", "Resources", "Contact"].map((item) => (
            <Link
              key={item}
              href={`/${item.toLowerCase().replace(" ", "-")}`}
              className="hover:bg-white hover:text-green-800 px-3 py-2 rounded-full transition-colors duration-300"
            >
              {item}
            </Link>
          ))}
          <DonateModal />
        </nav>
        <button className="md:hidden" onClick={toggleMenu} aria-label="Toggle menu">
          {isMenuOpen ? <X /> : <Menu />}
        </button>
      </div>
      {isMenuOpen && (
        <div className="md:hidden">
          <nav className="px-4 pt-2 pb-4">
            <ul className="space-y-2">
              {["About", "Projects", "Get Involved", "Resources", "Contact"].map((item) => (
                <li key={item}>
                  <Link
                    href={`/${item.toLowerCase().replace(" ", "-")}`}
                    className="block hover:bg-white hover:text-green-800 px-3 py-2 rounded-full transition-colors duration-300"
                    onClick={toggleMenu}
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-4">
              <DonateModal />
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}

