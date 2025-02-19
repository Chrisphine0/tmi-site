import { notFound } from "next/navigation"
import Image from "next/image"
import { projects } from "@/app/data/projects"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.link.split("/").pop(),
  }))
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = projects.find((p) => p.link.endsWith(params.slug))

  if (!project) {
    notFound()
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Card className="overflow-hidden">
        <div className="relative h-64 md:h-96">
          <Image
            src={project.image || "/placeholder.svg"}
            alt={project.title}
            fill
            style={{ objectFit: "cover" }}
            priority
          />
        </div>
        <CardHeader>
          <CardTitle className="text-3xl font-bold text-green-800">{project.title}</CardTitle>
        </CardHeader>
        <CardContent>
          <CardDescription className="text-lg text-gray-700">{project.description}</CardDescription>
          {/* Add more project details here */}
          <div className="mt-8">
            <h3 className="text-xl font-semibold text-green-700 mb-4">Project Goals</h3>
            <ul className="list-disc list-inside space-y-2">
              <li>Improve soil health and fertility</li>
              <li>Reduce soil erosion and land degradation</li>
              <li>Increase community awareness and participation</li>
              <li>Enhance agricultural productivity and food security</li>
            </ul>
          </div>
          <div className="mt-8">
            <h3 className="text-xl font-semibold text-green-700 mb-4">Get Involved</h3>
            <p className="text-gray-700">
              We welcome volunteers and supporters to join us in this important initiative. If you're interested in
              participating or learning more about this project, please contact us or visit our Get Involved page.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}