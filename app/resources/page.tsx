import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import Link from "next/link"
import { Button } from "@/components/ui/button"

interface Resource {
  title: string
  description: string
  link: string
  isExternal?: boolean
}

const resources: Resource[] = [
  {
    title: "Understanding Soil Health",
    description: "A comprehensive guide to soil health and its importance (PDF)",
    link: "https://www.uaex.uada.edu/publications/pdf/FSA2202.pdf",
  },
  {
    title: "Benefits of Soil Conservation Techniques",
    description: "Learn about various soil conservation techniques and their benefits",
    link: "https://www.perennia.ca/wp-content/uploads/2018/04/soil-conservation-and-practice.pdf",
  },
  {
    title: "How to Implement Sustainable Farming Practices",
    description: "A step-by-step guide to implementing sustainable farming practices (PDF)",
    link: "https://saiplatform.org/wp-content/uploads/2021/02/principlespractices_saiplatform_2021.pdf",
  },
  {
    title: "Vetiver Grass for Erosion Control: A Case Study",
    description: "Research paper on the effectiveness of vetiver grass in erosion control",
    link: "https://vetiver.org/AUS_Sediment.pdf",
  },
  {
    title: "The Role of Soil Microbiome in Sustainable Agriculture",
    description: "Exploring the importance of soil microorganisms in agriculture",
    link: "https://ieep.eu/wp-content/uploads/2023/12/The-Soil-Microbiome-ESAD-IEEP-2023.pdf",
  },
  {
    title: "Soil Conservation and Climate Resilience in East Africa",
    description: "A study on the relationship between soil conservation and climate resilience",
    link: "https://agra.org/wp-content/uploads/2018/04/Soil-Health-and-Climate-Change-publication.pdf",
  },
  {
    title: "FAO Soils Portal",
    description: "Comprehensive information on soil health and management",
    link: "https://www.fao.org/soils-portal/en/",
    isExternal: true,
  },
  {
    title: "NRCS Soil Health",
    description: "Resources on soil health from the Natural Resources Conservation Service",
    link: "https://www.nrcs.usda.gov/conservation-basics/natural-resource-concerns/soil",
    isExternal: true,
  },
  {
    title: "Soil Association",
    description:
      "UK's leading membership charity campaigning for healthy, humane and sustainable food, farming and land use",
    link: "https://www.soilassociation.org",
    isExternal: true,
  },
]

export default function Resources() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center text-green-800">Resources</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {resources.map((resource, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle className="text-xl font-semibold text-green-700">{resource.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>{resource.description}</CardDescription>
            </CardContent>
            <CardFooter>
              <Button asChild className="w-full bg-green-600 hover:bg-green-700 text-white">
                <Link
                  href={resource.link}
                  target={resource.isExternal ? "_blank" : "_self"}
                  rel={resource.isExternal ? "noopener noreferrer" : ""}
                >
                  {resource.isExternal ? "Visit Website" : "Learn More"}
                </Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}

