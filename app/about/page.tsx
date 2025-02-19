import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Leaf, Users, Globe, Sprout } from "lucide-react"
import TeamGallery from "../components/TeamGallery"

export default function About() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center text-green-800">About Tuhifadhi Mchanga Initiative</h1>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4 text-green-700">Our Story</h2>
        <p className="text-lg mb-4">
          Tuhifadhi Mchanga Initiative (TMI) was founded in 2024 as a female-led youth initiative dedicated to
          empowering communities on soil health through awareness, restoration, and advocacy. Based in Kenya, TMI
          operates across several counties, promoting the preservation of our silent hero—soil.
        </p>
        <p className="text-lg mb-4">
          Our journey began when a group of passionate young environmentalists recognized the critical role of soil
          health in sustainable agriculture and climate resilience. Driven by a shared vision, we set out to make a
          tangible difference in our communities and beyond.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4 text-green-700">Our Mission and Vision</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center text-green-700">
                <Leaf className="mr-2" /> Our Mission
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                TMI is dedicated to empowering communities on soil health through awareness, restoration, and advocacy.
                Our mission is to nurture the life beneath our feet, ensuring sustainable agricultural practices and
                fostering climate resilience for the benefit of current and future generations.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center text-green-700">
                <Globe className="mr-2" /> Our Vision
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                Our vision is to create a world where communities actively preserve and restore soil health, recognizing
                it as the silent hero that sustains life. We aim to promote sustainable practices that support
                biodiversity, improve food security, and enhance the livelihoods of people in Kenya and beyond.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4 text-green-700">Our Core Values</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              icon: Leaf,
              title: "Sustainability",
              description: "Promoting sustainable agricultural practices to protect and conserve soil.",
            },
            {
              icon: Users,
              title: "Community Empowerment",
              description: "Engaging and empowering communities to take action for soil health.",
            },
            {
              icon: Globe,
              title: "Education and Awareness",
              description: "Raising awareness and educating the public on the importance of soil health.",
            },
            {
              icon: Sprout,
              title: "Innovation",
              description: "Implementing innovative solutions for soil conservation and restoration.",
            },
          ].map((value, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle className="flex items-center text-green-700">
                  <value.icon className="mr-2" /> {value.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>{value.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-8 text-center text-green-700">Meet Our Team</h2>
        <p className="text-lg text-center mb-8">
          Our dedicated team of experts and passionate individuals work together to make a lasting impact on soil health
          and community development.
        </p>
        <TeamGallery />
      </section>
    </div>
  )
}

