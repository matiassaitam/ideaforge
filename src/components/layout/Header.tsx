"use client"

import Link from 'next/link'
import { useSession, signOut } from 'next-auth/react'
import { Button } from "@/components/ui/button"
import { Zap } from 'lucide-react'

export default function Header() {
  const { data: session } = useSession()

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
        <div className="flex gap-6 md:gap-10">
          <Link href="/" className="flex items-center space-x-2">
            <Zap className="h-6 w-6 text-primary" />
            <span className="inline-block font-bold">IdeaForge</span>
          </Link>
          <nav className="flex gap-6">
            <Link href="/marketplace" className="flex items-center text-sm font-medium text-muted-foreground">
              Marketplace
            </Link>
            <Link href="/challenges" className="flex items-center text-sm font-medium text-muted-foreground">
              Challenges
            </Link>
          </nav>
        </div>
        <div className="flex flex-1 items-center justify-end space-x-4">
          <nav className="flex items-center space-x-2">
            {session ? (
              <>
                <Link href="/submit-idea">
                  <Button size="sm">Submit Idea</Button>
                </Link>
                <Button variant="ghost" size="sm" onClick={() => signOut()}>
                  Log out
                </Button>
              </>
            ) : (
              <>
                <Link href="/login">
                  <Button variant="ghost" size="sm">
                    Log in
                  </Button>
                </Link>
                <Link href="/signup">
                  <Button size="sm">Sign up</Button>
                </Link>
              </>
            )}
          </nav>
        </div>
      </div>
    </header>
  )
}