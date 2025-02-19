import Link from "next/link"
import Image from "next/image"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import type { Project } from "@/types/project"

export default function FeaturedProjects({ projects }: { projects: Project[] }) {
  return (
    <section className="py-16 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-green-100 to-blue-50 opacity-50" />
      <div className="absolute inset-0 bg-[url('/images/leaf-pattern.jpg')] opacity-5" />
      <div className="container mx-auto px-4 relative">
        <h2 className="text-4xl font-bold mb-12 text-center text-green-800">Featured Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="relative h-48">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  style={{ objectFit: "cover" }}
                  loading="lazy"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-xl font-semibold text-green-700">{project.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">{project.description}</CardDescription>
              </CardContent>
              <CardFooter>
                <Button asChild className="w-full bg-green-600 hover:bg-green-700 text-white">
                  <Link href={project.link}>Learn More</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        <div className="text-center mt-12">
          <Button asChild size="lg" variant="outline" className="border-green-600 text-green-700 hover:bg-green-50">
            <Link href="/projects">View All Projects</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

