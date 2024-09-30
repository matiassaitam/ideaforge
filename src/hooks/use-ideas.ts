import { Idea } from '@/app/types'
import { useState, useEffect } from 'react'

export function useIdeas() {
  const [ideas, setIdeas] = useState<Idea[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<Error | null>(null)

  useEffect(() => {
    async function fetchIdeas() {
      try {
        const response = await fetch('/api/ideas')
        if (!response.ok) {
          throw new Error('Failed to fetch ideas')
        }
        const data = await response.json()
        setIdeas(data)
      } catch (err) {
        setError(err instanceof Error ? err : new Error('An error occurred'))
      } finally {
        setIsLoading(false)
      }
    }

    fetchIdeas()
  }, [])

  return { ideas, isLoading, error }
}