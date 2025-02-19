"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const slides = [
  {
    image:
      "https://media.istockphoto.com/id/511976070/photo/green-sprouts.jpg?s=612x612&w=0&k=20&c=MzoPpySb-r5bdKui7g8tPWzaZJB6ppVJfKWwWPJIxO8=",
    title: "Nurturing Soil Health",
    description:
      "TMI is dedicated to empowering communities on soil health through awareness, restoration, and advocacy.",
  },
  {
    image:
      "https://media.istockphoto.com/id/1181366400/photo/in-the-hands-of-trees-growing-seedlings-bokeh-green-background-female-hand-holding-tree-on.jpg?s=612x612&w=0&k=20&c=jWUMrHgjMY9zQXsAwZFb1jfM6KxZE16-IXI1bvehjQM=",
    title: "Sustainable Agriculture",
    description:
      "We promote sustainable agricultural practices to ensure food security and improve livelihoods in Kenya and beyond.",
  },
  {
    image:
      "https://media.istockphoto.com/id/1395535128/photo/female-hands-touching-soil-on-the-field-at-sunset.jpg?s=612x612&w=0&k=20&c=gpkm1KoJ1Vu0ctZs1VinFagq_0BGqg0kU7_EgoVFmJ0=",
    title: "Community Empowerment",
    description:
      "Our initiatives focus on educating and empowering local communities to become stewards of their soil and environment.",
  },
]

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + slides.length) % slides.length)
  }

  return (
    <div className="relative h-screen">
      {slides.map((slide, index) => (
        <Image
          key={slide.image}
          src={slide.image || "/placeholder.svg"}
          alt={`Soil conservation image ${index + 1}`}
          fill
          style={{ objectFit: "cover" }}
          priority={index === 0}
          className={`transition-opacity duration-1000 ${index === currentSlide ? "opacity-100" : "opacity-0"}`}
        />
      ))}
      <div className="absolute inset-0 bg-white bg-opacity-70 flex items-center justify-center">
        <div className="text-center text-black p-4 max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Tuhifadhi Mchanga Initiative</h1>
          <h2 className="text-2xl md:text-4xl font-semibold mb-4">{slides[currentSlide].title}</h2>
          <p className="text-xl md:text-2xl mb-8">{slides[currentSlide].description}</p>
          <Button asChild size="lg" className="mr-4 bg-green-600 hover:bg-green-700 text-white">
            <a href="/about">Learn More</a>
          </Button>
          <Button asChild size="lg" variant="outline" className="border-green-600 text-green-600 hover:bg-green-50">
            <a href="/get-involved">Get Involved</a>
          </Button>
        </div>
      </div>
      <Button
        variant="ghost"
        size="icon"
        className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white"
        onClick={prevSlide}
      >
        <ChevronLeft className="h-8 w-8" />
      </Button>
      <Button
        variant="ghost"
        size="icon"
        className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white"
        onClick={nextSlide}
      >
        <ChevronRight className="h-8 w-8" />
      </Button>
    </div>
  )
}

