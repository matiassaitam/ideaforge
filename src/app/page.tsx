import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, Zap, Target, BarChart } from 'lucide-react'

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-b from-white to-gray-100 dark:from-gray-900 dark:to-gray-800">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                Forge Your Ideas into Reality
              </h1>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                Collaborate, Innovate, and Profit from Your Ideas in Our Revolutionary Ecosystem
              </p>
            </div>
            <div className="space-x-4">
              <Link href="/submit-idea">
                <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                  Submit Your Idea <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/marketplace">
                <Button variant="outline" size="lg">
                  Explore Marketplace
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section id="features" className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">Unique Features of IdeaForge</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader>
                <Zap className="h-8 w-8 mb-2 text-primary" />
                <CardTitle>Idea Fusion</CardTitle>
              </CardHeader>
              <CardContent>
                Our AI-powered system suggests complementary ideas and potential collaborators, fostering innovation through unexpected connections.
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <Target className="h-8 w-8 mb-2 text-primary" />
                <CardTitle>Innovation Challenges</CardTitle>
              </CardHeader>
              <CardContent>
                Participate in sponsored challenges from leading companies, with real funding and implementation opportunities.
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <BarChart className="h-8 w-8 mb-2 text-primary" />
                <CardTitle>Idea Valuation Engine</CardTitle>
              </CardHeader>
              <CardContent>
                Our proprietary algorithm assesses and values ideas based on market trends, user engagement, and expert feedback.
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}