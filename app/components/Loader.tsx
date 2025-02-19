"use client"

import { useState, useEffect } from "react"

export default function Loader() {
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false)
    }, 10000) // 10 seconds

    return () => clearTimeout(timer)
  }, [])

  if (!isVisible) return null

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-green-50 z-50">
      <div className="w-32 h-32 relative">
        <div className="absolute inset-0 animate-soil-pour">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
            <path
              d="M50 10 C20 10 10 30 10 50 C10 70 30 90 50 90 C70 90 90 70 90 50 C90 30 80 10 50 10"
              fill="#8B4513"
            />
            <path
              d="M50 20 C30 20 20 35 20 50 C20 65 35 80 50 80 C65 80 80 65 80 50 C80 35 70 20 50 20"
              fill="#A0522D"
            />
            <path
              d="M50 30 C40 30 30 40 30 50 C30 60 40 70 50 70 C60 70 70 60 70 50 C70 40 60 30 50 30"
              fill="#D2691E"
            />
          </svg>
        </div>
        <div className="absolute inset-0 animate-hand-tilt">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
            <path d="M20 80 C30 70 40 65 50 65 C60 65 70 70 80 80" stroke="#000" strokeWidth="2" fill="none" />
            <path d="M15 85 C25 75 35 70 50 70 C65 70 75 75 85 85" stroke="#000" strokeWidth="2" fill="none" />
          </svg>
        </div>
      </div>
    </div>
  )
}

