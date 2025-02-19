"use client"
import { useState } from "react"
import type React from "react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Facebook, Instagram, Linkedin, MapPin, Phone, Mail } from "lucide-react"

export default function Contact() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [subject, setSubject] = useState("")
  const [message, setMessage] = useState("")
  const [department, setDepartment] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, subject, message, department }),
      })
      if (response.ok) {
        alert("Message sent successfully!")
        setName("")
        setEmail("")
        setSubject("")
        setMessage("")
        setDepartment("")
      } else {
        throw new Error("Failed to send message")
      }
    } catch (error) {
      alert("Failed to send message. Please try again.")
    }
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center text-green-800">Contact Us</h1>

      <div className="grid md:grid-cols-2 gap-8">
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl font-semibold text-green-700">Get in Touch</CardTitle>
            <CardDescription>
              We'd love to hear from you. Fill out the form and we'll get back to you as soon as possible.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Input
                  type="text"
                  placeholder="Your Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
              <div>
                <Input
                  type="email"
                  placeholder="Your Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div>
                <Input
                  type="text"
                  placeholder="Subject"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  required
                />
              </div>
              <div>
                <Select value={department} onValueChange={setDepartment}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select Department" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="general">General Inquiries</SelectItem>
                    <SelectItem value="projects">Projects</SelectItem>
                    <SelectItem value="donations">Donations</SelectItem>
                    <SelectItem value="volunteers">Volunteers</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Textarea
                  placeholder="Your Message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                />
              </div>
              <Button type="submit" className="w-full bg-green-600 hover:bg-green-700 text-white">
                Send Message
              </Button>
            </form>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-2xl font-semibold text-green-700">Contact Information</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center">
              <MapPin className="mr-2 h-5 w-5 text-green-600" />
              <p>P.O. Box 11640-00100, Nairobi GPO, Kenya</p>
            </div>
            <div className="flex items-center">
              <Phone className="mr-2 h-5 w-5 text-green-600" />
              <p>+254 795435604</p>
            </div>
            <div className="flex items-center">
              <Mail className="mr-2 h-5 w-5 text-green-600" />
              <p>info@tuhifadhimchanga.org</p>
            </div>
            <div className="flex space-x-4 mt-6">
              <a
                href="https://www.facebook.com/profile.php?id=61558662527742"
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-600 hover:text-green-800"
              >
                <Facebook />
              </a>
              <a
                href="https://www.instagram.com/tuhifadhimchanga"
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-600 hover:text-green-800"
              >
                <Instagram />
              </a>
              <a
                href="https://www.linkedin.com/company/tuhifadhi-mchanga-initiative/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-600 hover:text-green-800"
              >
                <Linkedin />
              </a>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

