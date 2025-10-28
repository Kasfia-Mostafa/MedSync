import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export const Header = () => {
  return (
    <header className="fixed top-0 w-full border-b bg-background/80 backdrop-blur-md z-10 supports-backdrop-filter:bg-background/60">
      <nav className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 cursor-pointer">
          <Image
            src="/logo-single.png"
            alt="MedSync Logo"
            width={300}
            height={60}
            className="h-16 w-auto object-contain"
          />
        </Link>
        {/* Add your navigation items here */}
      </nav>
    </header>
  )
}
