"use client"

import Image from "next/image"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { useState } from "react"

interface TeamMember {
  id: number
  name: string
  role: string
  bio: string
  image: string
}

const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: "Cynthia Meli",
    role: "Founder & Executive Director",
    bio: "I am an enthusiastic and result oriented individual. I have a knack for learning new things everyday. My future plans are to provide modern solutions and excellent commercial approach to solving problems and optimizing teamwork skills while pro-actively developing my career towards a bright future ahead.",
    image: "/images/cythia.jpg",
  },
  {
    id: 2,
    name: "Kirui Linner Chepkoech",
    role: "Secritary",
    bio: "Kirui Linner Chepkoech is a dedicated Phytosanitary Specialist with a Bachelor of Science in Horticulture from JKUAT and over four years of experience in Plant health inspection, pest detection, and quality management systems. She has a strong background in agronomic research, farmer education, and risk assessment, and ensuring compliance with international phytosanitary standards. Currently, she serves as the Secretary of Tuhifadhi Mchanga Initiative (TMI), where she actively advocates for soil conservation and sustainable agriculture within local communities. Her expertise includes pest risk analysis, seed certification, and export compliance, contributing to improved agricultural trade efficiency.Notable achievements include enhancing food safety and quality control at Twiga Foods by implementing stringent inspection protocols, reducing post-harvest losses through improved handling procedures, and ensuring compliance with market quality standards. She also played a vital role in streamlining supply chain operations, improving warehouse efficiency, and optimizing produce grading processes to enhance product consistency. Passionate about sustainability, she continuously seeks to integrate conservation practices into agricultural systems for long-term productivity and environmental health.",
    image: "/images/Kirui Lina - Kirui Linner.JPG",
  },
  {
    id: 3,
    name: "charity kibicha",
    role: "Projects Officer",
    bio: "A Kenyan youth passionate about healthy plants, sustainable agricultural practices and most importantly healthy soil!",
    image: "/images/DSC_9354 (1) - charity kibicha.jpg",
  },
  {
    id: 4,
    name: "Martin Maina",
    role: "Research Director",
    bio: "I am Martin Maina Kahanya, a graduate with a Bsc. Agriculture. An agronomist  by profession, specialize in crop management and sustainable farming practices. I am also a skilled cuttings propagator, focusing on plant reproduction techniques. Additionally, I am a dedicated soil advocate as a Reserch director at TMI,promoting healthy soil practices for improved agricultural productivity and environmental sustainability.",
    image: "/images/DSCF7264 - martin maina (1).jpg",
  },
  {
    id: 5,
    name: "Chrisphine Odhiambo",
    role: "Communications Officer",
    bio: "Managing public relations and digital communications for greater impact.",
    image: "/images/chris.jpg",
  },
]

export default function TeamGallery() {
  const [hoveredMember, setHoveredMember] = useState<number | null>(null)

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {teamMembers.map((member) => (
        <Card
          key={member.id}
          className="overflow-hidden transition-transform duration-300 hover:scale-105"
          onMouseEnter={() => setHoveredMember(member.id)}
          onMouseLeave={() => setHoveredMember(null)}
        >
          <div className="relative h-64 w-full">
            <Image
              src={member.image || "/placeholder.svg"}
              alt={`${member.name} - ${member.role}`}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              loading="lazy"
            />
          </div>
          <CardHeader>
            <CardTitle className="text-xl font-semibold text-green-700">{member.name}</CardTitle>
            <CardDescription className="text-sm font-medium text-green-600">{member.role}</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600">{member.bio}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

