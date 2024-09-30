import Link from 'next/link'
import { Zap } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="border-t">
      <div className="container flex flex-col gap-4 py-10 md:flex-row md:gap-8">
        <div className="flex-1 space-y-4">
          <div className="flex items-center space-x-2">
            <Zap className="h-6 w-6 text-primary" />
            <span className="font-bold">IdeaForge</span>
          </div>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Empowering innovators to change the world, one idea at a time.
          </p>
        </div>
        <nav className="flex flex-col gap-4 sm:flex-row md:gap-8">
          <Link href="#" className="text-sm hover:underline">
            Privacy Policy
          </Link>
          <Link href="#" className="text-sm hover:underline">
            Terms of Service
          </Link>
          <Link href="#" className="text-sm hover:underline">
            Contact Us
          </Link>
        </nav>
      </div>
      <div className="border-t py-6 md:py-0">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
          <p className="text-sm text-gray-500 dark:text-gray-400">© 2023 IdeaForge. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}