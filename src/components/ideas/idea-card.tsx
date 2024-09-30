import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { DollarSign, Users, TrendingUp } from 'lucide-react'
import { Idea } from "@/app/types"

interface IdeaCardProps {
  idea: Idea
}

export default function IdeaCard({ idea }: IdeaCardProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{idea.title}</CardTitle>
        <CardDescription>{idea.description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex justify-between items-center mb-2">
          <Badge>{idea.category}</Badge>
          <span className="text-sm text-gray-500">Traction: {idea.traction}</span>
        </div>
        <div className="space-y-2">
          <div className="flex items-center">
            <DollarSign className="h-4 w-4 mr-2 text-green-500" />
            <span className="font-medium">Valuation: ${idea.valuation.toLocaleString()}</span>
          </div>
          <div className="flex items-center">
            <Users className="h-4 w-4 mr-2 text-blue-500" />
            <span>Collaborators: {idea.collaborators}</span>
          </div>
          <div className="flex items-center">
            <TrendingUp className="h-4 w-4 mr-2 text-orange-500" />
            <span>Growth Potential: {idea.growthPotential}</span>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full">View Details</Button>
      </CardFooter>
    </Card>
  )
}