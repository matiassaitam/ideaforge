import { Idea } from '@/app/types'
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// This is a mock database. In a real application, you would use a proper database.
let ideas: Idea[] = [
  { 
    id: 1, 
    title: "EcoPackage", 
    description: "Sustainable packaging solution for e-commerce", 
    category: "Sustainability",
    valuation: 500000,
    collaborators: 12,
    traction: "High",
    growthPotential: "Very High"
  },
  { 
    id: 2, 
    title: "HealthTrack AI", 
    description: "AI-powered personal health monitoring system", 
    category: "Healthcare",
    valuation: 1200000,
    collaborators: 8,
    traction: "Medium",
    growthPotential: "High"
  },
  // Add more mock ideas here
]

export async function GET() {
  return NextResponse.json(ideas)
}

export async function POST(request: NextRequest) {
  const body = await request.json()
  const newIdea: Idea = {
    id: ideas.length + 1,
    ...body,
    valuation: Math.floor(Math.random() * 1000000) + 100000, // Mock valuation
    collaborators: 0,
    traction: "Low",
    growthPotential: "Unknown"
  }
  ideas.push(newIdea)
  return NextResponse.json(newIdea, { status: 201 })
}