import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"

export default function GetInvolved() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center text-green-800">Get Involved</h1>

      <div className="grid md:grid-cols-2 gap-8">
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl font-semibold text-green-700">Volunteer</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription className="text-lg mb-4">
              Join our team of dedicated volunteers and make a direct impact on soil conservation efforts.
            </CardDescription>
            <Button asChild className="w-full bg-green-600 hover:bg-green-700 text-white">
              <Link href="/volunteer">Become a Volunteer</Link>
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-2xl font-semibold text-green-700">Donate</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription className="text-lg mb-4">
              Support our mission financially. Every contribution helps us continue our vital work.
            </CardDescription>
            <Button asChild className="w-full bg-green-600 hover:bg-green-700 text-white">
              <Link href="/donate">Make a Donation</Link>
            </Button>
          </CardContent>
        </Card>
      </div>

      <section className="mt-12">
        <h2 className="text-2xl font-semibold mb-4 text-green-700">Other Ways to Help</h2>
        <ul className="list-disc list-inside space-y-2 text-lg">
          <li>Spread awareness about soil conservation in your community</li>
          <li>Participate in our local events and workshops</li>
          <li>Partner with us for corporate social responsibility initiatives</li>
          <li>Share our content on social media to reach a wider audience</li>
        </ul>
      </section>
    </div>
  )
}

