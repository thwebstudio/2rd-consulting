import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Target, Eye, CheckCircle, MapPin } from "lucide-react"

export default function AboutPage() {
  const objectives = [
    "To become a trusted leader in Immigration and Mobility Consultancy Services in Nigeria",
    "To assist 5000+ individual clients and 500+ corporate clients in their mobility and visa needs",
    "To expand our service offerings globally within the next 20 years",
    "End-to-End support and assistance from visa application to post-arrival settlement services",
    "To render Mobility Expertise & Advisory for businesses managing global employee mobility and cross-country business assignments",
  ]

  const teamMembers = [
    {
      name: "Fransisca Okolie",
      position: "Manager - Client Services",
      image: "/placeholder.svg?height=300&width=300",
      description: "Leading our client services with over 10 years of experience in immigration consulting.",
    },
    {
      name: "Immigration Specialist",
      position: "Senior Visa Consultant",
      image: "/placeholder.svg?height=300&width=300",
      description: "Expert in work permits and corporate mobility solutions with extensive embassy relations.",
    },
    {
      name: "Legal Advisor",
      position: "Immigration Law Expert",
      image: "/placeholder.svg?height=300&width=300",
      description: "Specialized in immigration law and regulatory compliance across multiple jurisdictions.",
    },
  ]

  const milestones = [
    { year: "2020", event: "Company Established", description: "2RD Consulting Associates founded with RC: 7743580" },
    { year: "2021", event: "Lagos Office", description: "Opened main office at 33 Alfred Rewane, Ikoyi, Lagos" },
    { year: "2022", event: "Abuja Expansion", description: "Extended services to Nigeria's capital city" },
    { year: "2023", event: "UK Presence", description: "Established operations in the United Kingdom" },
    { year: "2024", event: "5000+ Clients", description: "Reached milestone of serving over 5000 individual clients" },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 to-blue-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="bg-amber-500 text-white mb-4">About 2RD Consulting Associates</Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Your Business Partner in
              <span className="text-amber-400"> Global Mobility</span>
            </h1>
            <p className="text-xl text-blue-100 mb-8">
              We are a professional consultancy firm that specializes in offering comprehensive Immigration and Mobility
              Services to Individuals and Corporate Organizations.
            </p>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6">Who We Are</h2>
              <p className="text-lg text-slate-600 mb-6">
                2RD Consulting Associates is a professional consultancy firm registered with RC: 7743580. We specialize
                in offering comprehensive Immigration and Mobility Services to Individuals and Corporate Organizations.
              </p>
              <p className="text-lg text-slate-600 mb-6">
                Our mission is to simplify the process of Visas and Local Immigration Compliance, ensuring a smooth and
                compliant transition for our clients. We have a strong presence in Lagos, Abuja, and the UK.
              </p>
              <p className="text-lg text-slate-600">
                We are well-positioned to capitalize on the growing demand for Immigration and Mobility Services. With a
                clear understanding of our client needs, we are confident in our ability to provide value and achieve
                long-term success.
              </p>
            </div>
            <div className="relative">
              <Image
                src="/placeholder.svg?height=500&width=600"
                alt="2RD Consulting Associates Office"
                width={600}
                height={500}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="p-8">
              <CardContent className="p-0">
                <div className="flex items-center mb-4">
                  <Target className="h-8 w-8 text-blue-900 mr-3" />
                  <h3 className="text-2xl font-bold text-slate-800">Our Mission</h3>
                </div>
                <p className="text-slate-600 text-lg">
                  To simplify the process of Visas and Local Immigration Compliance, ensuring a smooth and compliant
                  transition for our clients while providing exceptional service and expert guidance throughout their
                  journey.
                </p>
              </CardContent>
            </Card>

            <Card className="p-8">
              <CardContent className="p-0">
                <div className="flex items-center mb-4">
                  <Eye className="h-8 w-8 text-blue-900 mr-3" />
                  <h3 className="text-2xl font-bold text-slate-800">Our Vision</h3>
                </div>
                <p className="text-slate-600 text-lg">
                  To revolutionize Mobility Services across Nigeria and beyond, becoming the most trusted leader in
                  Immigration and Mobility Consultancy Services while expanding our global reach.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Business Objectives */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">Our Business Objectives</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Clear goals that drive our commitment to excellence and client satisfaction
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {objectives.map((objective, index) => (
              <div key={index} className="flex items-start space-x-3 bg-white p-6 rounded-lg shadow-sm border">
                <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
                <p className="text-slate-700">{objective}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Locations */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Global Presence</h2>
            <p className="text-xl text-blue-100">Strategically located to serve you better</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-white/10 border-white/20 text-white">
              <CardContent className="p-6 text-center">
                <MapPin className="h-12 w-12 text-amber-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">Lagos Office</h3>
                <p className="text-blue-100">
                  33 Alfred Rewane Road
                  <br />
                  Ikoyi, Lagos, Nigeria
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/10 border-white/20 text-white">
              <CardContent className="p-6 text-center">
                <MapPin className="h-12 w-12 text-amber-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">Abuja Office</h3>
                <p className="text-blue-100">
                  Federal Capital Territory
                  <br />
                  Abuja, Nigeria
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/10 border-white/20 text-white">
              <CardContent className="p-6 text-center">
                <MapPin className="h-12 w-12 text-amber-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">UK Office</h3>
                <p className="text-blue-100">
                  United Kingdom
                  <br />
                  European Operations
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">Meet Our Team</h2>
            <p className="text-xl text-slate-600">Experienced professionals dedicated to your success</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index} className="overflow-hidden">
                <div className="relative h-64">
                  <Image src={member.image || "/placeholder.svg"} alt={member.name} fill className="object-cover" />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-slate-800 mb-1">{member.name}</h3>
                  <p className="text-blue-900 font-medium mb-3">{member.position}</p>
                  <p className="text-slate-600">{member.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Company Timeline */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">Our Journey</h2>
            <p className="text-xl text-slate-600">Key milestones in our growth story</p>
          </div>

          <div className="max-w-4xl mx-auto">
            {milestones.map((milestone, index) => (
              <div key={index} className="flex items-start mb-8 last:mb-0">
                <div className="flex-shrink-0 w-20 text-right mr-8">
                  <div className="bg-blue-900 text-white px-3 py-1 rounded-full text-sm font-bold">
                    {milestone.year}
                  </div>
                </div>
                <div className="flex-grow bg-white p-6 rounded-lg shadow-sm border-l-4 border-amber-500">
                  <h3 className="text-xl font-bold text-slate-800 mb-2">{milestone.event}</h3>
                  <p className="text-slate-600">{milestone.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
