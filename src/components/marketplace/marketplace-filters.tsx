import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import { Search } from 'lucide-react'

interface MarketplaceFiltersProps {
  searchTerm: string
  setSearchTerm: (value: string) => void
  categoryFilter: string
  setCategoryFilter: (value: string) => void
  valuationRange: number[]
  setValuationRange: (value: number[]) => void
}

export default function MarketplaceFilters({
  searchTerm,
  setSearchTerm,
  categoryFilter,
  setCategoryFilter,
  valuationRange,
  setValuationRange
}: MarketplaceFiltersProps) {
  return (
    <div className="flex flex-col md:flex-row gap-6 mb-8">
      <div className="flex-1">
        <div className="relative">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
          <Input
            type="search"
            placeholder="Search ideas..."
            className="pl-8"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>
      <Select value={categoryFilter} onValueChange={setCategoryFilter}>
        <SelectTrigger className="w-full md:w-[200px]">
          <SelectValue placeholder="Category" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="">All Categories</SelectItem>
          <SelectItem value="Sustainability">Sustainability</SelectItem>
          <SelectItem value="Healthcare">Healthcare</SelectItem>
          <SelectItem value="Education">Education</SelectItem>
          <SelectItem value="Fintech">Fintech</SelectItem>
          <SelectItem value="AI">AI</SelectItem>
        </SelectContent>
      </Select>
      <div className="w-full md:w-[300px]">
        <p className="text-sm font-medium mb-2">Valuation Range</p>
        <Slider
          min={0}
          max={1500000}
          step={100000}
          value={valuationRange}
          onValueChange={setValuationRange}
        />
        <div className="flex justify-between text-sm text-gray-500 mt-2">
          <span>${valuationRange[0].toLocaleString()}</span>
          <span>${valuationRange[1].toLocaleString()}</span>
        </div>
      </div>
    </div>
  )
}