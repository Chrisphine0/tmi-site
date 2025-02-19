import Link from "next/link"
import Image from "next/image"
import { Facebook, Instagram, Linkedin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-green-800 text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex flex-col items-start">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1739187388252.jpg-hjhvokNybZz0fcHfTDqjXSHFAmkwvh.jpeg"
                alt="Tuhifadhi Mchanga Initiative Logo"
                width={60}
                height={60}
                className="mb-4"
              />
              <h3 className="text-xl font-semibold mb-4">Tuhifadhi Mchanga Initiative</h3>
            </div>
            <p className="mb-4">Empowering communities on soil health through awareness, restoration, and advocacy.</p>
            <div className="flex space-x-4">
              <Link
                href="https://www.facebook.com/profile.php?id=61558662527742"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
              >
                <Facebook className="h-6 w-6" />
              </Link>
              <Link
                href="https://www.threads.net/@tuhifadhi_mchanga?xmt=AQGzddrmGcLLhi2JXLan2GMB-w474tpm9oNQbJJDQ4qCuBk"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Threads"
              >
                <Instagram className="h-6 w-6" />
              </Link>
              <Link
                href="https://www.linkedin.com/company/tuhifadhi-mchanga-initiative/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-6 w-6" />
              </Link>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about">About Us</Link>
              </li>
              <li>
                <Link href="/projects">Projects</Link>
              </li>
              <li>
                <Link href="/get-involved">Get Involved</Link>
              </li>
              <li>
                <Link href="/resources">Resources</Link>
              </li>
              <li>
                <Link href="/contact">Contact Us</Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
            <p>Email: info@tuhifadhimchanga.org</p>
            <p>Phone: +254 795435604</p>
            <p>Address: P.O. Box 11640-00100, Nairobi GPO, Kenya</p>
          </div>
        </div>
        <div className="mt-8 text-center">
          <p>&copy; {new Date().getFullYear()} Tuhifadhi Mchanga Initiative. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

