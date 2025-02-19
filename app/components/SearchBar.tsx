"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"

interface SearchBarProps {
  onSearch: (query: string) => void
}

export default function SearchBar({ onSearch }: SearchBarProps) {
  const [query, setQuery] = useState("")

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    onSearch(query)
  }

  return (
    <form onSubmit={handleSearch} className="flex items-center mb-8">
      <Input
        type="text"
        placeholder="Search..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="flex-grow"
        aria-label="Search query"
      />
      <button
        type="submit"
        className="ml-2 p-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors duration-300"
        aria-label="Search"
      >
        <Search className="h-5 w-5" />
      </button>
    </form>
  )
}

