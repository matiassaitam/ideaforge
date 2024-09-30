"use client"

import { useState } from 'react'
import IdeaCard from '@/components/ideas/idea-card'
import MarketplaceFilters from '@/components/marketplace/marketplace-filters'
import { useIdeas } from '@/hooks/use-ideas'

export default function Marketplace() {
  const [searchTerm, setSearchTerm] = useState("")
  const [categoryFilter, setCategoryFilter] = useState("")
  const [valuationRange, setValuationRange] = useState([0, 1500000])

  const { ideas, isLoading, error } = useIdeas()

  const filteredIdeas = ideas.filter(idea => 
    idea.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
    (categoryFilter === "" || idea.category === categoryFilter) &&
    idea.valuation >= valuationRange[0] && idea.valuation <= valuationRange[1]
  )

  if (isLoading) return <div>Loading...</div>
  if (error) return <div>Error: {error.message}</div>

  return (
    <div className="container py-12">
      <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl mb-8">Idea Marketplace</h1>
      <MarketplaceFilters
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        categoryFilter={categoryFilter}
        setCategoryFilter={setCategoryFilter}
        valuationRange={valuationRange}
        setValuationRange={setValuationRange}
      />
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filteredIdeas.map(idea => (
          <IdeaCard key={idea.id} idea={idea} />
        ))}
      </div>
    </div>
  )
}