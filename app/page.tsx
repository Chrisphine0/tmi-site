import FeaturedProjects from "./components/FeaturedProjects"
import Hero from "./components/Hero"
import { Leaf, Globe, Users, Sprout } from "lucide-react"
import GetInvolvedForm from "./components/GetInvolvedForm"
import DonateModal from "./components/DonateModal"
import SocialFeed from "./components/SocialFeed"
import { projects } from "./data/projects"

export default function Home() {
  return (
    <div>
      <Hero />
      <div className="relative bg-gradient-to-b from-green-50 to-white">
        <div className="absolute inset-0 soil-pattern-bg opacity-10" />
        <div className="container mx-auto px-4 py-16 relative">
          <section id="mission-vision" className="mb-16">
            <div className="grid md:grid-cols-2 gap-12">
              <div className="bg-white rounded-lg shadow-lg p-8 transform hover:scale-105 transition-transform duration-300">
                <h2 className="text-3xl font-bold mb-6 text-green-800 flex items-center">
                  <Leaf className="mr-2 h-8 w-8 text-green-600" />
                  Our Mission
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed">
                  TMI is dedicated to empowering communities on soil health through awareness, restoration, and
                  advocacy. Our mission is to nurture the life beneath our feet, ensuring sustainable agricultural
                  practices and fostering climate resilience for the benefit of current and future generations.
                </p>
              </div>
              <div className="bg-white rounded-lg shadow-lg p-8 transform hover:scale-105 transition-transform duration-300">
                <h2 className="text-3xl font-bold mb-6 text-green-800 flex items-center">
                  <Globe className="mr-2 h-8 w-8 text-green-600" />
                  Our Vision
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Our vision is to create a world where communities actively preserve and restore soil health,
                  recognizing it as the silent hero that sustains life. We aim to promote sustainable practices that
                  support biodiversity, improve food security, and enhance the livelihoods of people in Kenya and
                  beyond.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center text-green-800">What We Strive For</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: Leaf,
                  title: "Soil Conservation",
                  description: "Promoting practices that prevent soil erosion and maintain soil health.",
                },
                {
                  icon: Users,
                  title: "Community Empowerment",
                  description: "Educating and involving local communities in sustainable agriculture.",
                },
                {
                  icon: Globe,
                  title: "Climate Resilience",
                  description: "Fostering practices that help communities adapt to climate change.",
                },
                {
                  icon: Sprout,
                  title: "Sustainable Agriculture",
                  description: "Encouraging farming methods that preserve long-term productivity.",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center transform hover:scale-105 transition-transform duration-300"
                >
                  <item.icon className="h-12 w-12 text-green-600 mb-4" />
                  <h3 className="text-xl font-semibold mb-2 text-green-800">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>

      <FeaturedProjects projects={projects} />

      <section className="bg-green-800 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Join Us in Our Mission</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Together, we can make a significant impact on soil health and create a sustainable future for generations to
            come.
          </p>
          <div className="flex justify-center space-x-4">
            <GetInvolvedForm />
            <DonateModal />
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16">
        <SocialFeed />
      </div>
    </div>
  )
}

