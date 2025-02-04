import Link from "next/link"
import { Button } from "@/components/ui/button"
import Image from "next/image"
export default function Navbar() {
  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <Image
                        className=""
                        src="/logo.png"
                        alt="CardiA Smart Band"
                        width={100}
                        height={100}
                      />
            <Link href="/" className="flex-shrink-0 flex items-center">
              <span className="text-2xl font-bold text-primary">CardiA</span>
            </Link>
          </div>
          <div className="flex items-center">
            <Link href="/about" className="text-gray-700 hover:text-primary px-3 py-2 rounded-md text-sm font-medium">
              About
            </Link>
            <Link
              href="/features"
              className="text-gray-700 hover:text-primary px-3 py-2 rounded-md text-sm font-medium"
            >
              Features
            </Link>
            <Link href="/pricing" className="text-gray-700 hover:text-primary px-3 py-2 rounded-md text-sm font-medium">
              Pricing
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-primary px-3 py-2 rounded-md text-sm font-medium">
              Contact
            </Link>
            <Button className="ml-4">Get Started</Button>
          </div>
        </div>
      </div>
    </nav>
  )
}

