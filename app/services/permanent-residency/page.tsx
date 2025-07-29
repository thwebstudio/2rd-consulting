import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Clock, FileText, Users, Globe, Home } from "lucide-react"

export default function PermanentResidencyPage() {
  const countries = [
    {
      name: "Canada",
      programs: ["Express Entry", "Provincial Nominee Program", "Quebec Immigration", "Family Sponsorship"],
      processingTime: "6-18 months",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      name: "Australia",
      programs: ["Skilled Independent", "Skilled Nominated", "Employer Sponsored", "Family Stream"],
      processingTime: "8-24 months",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      name: "United Kingdom",
      programs: ["Skilled Worker to ILR", "Global Talent", "Investor Route", "Family Route"],
      processingTime: "6-12 months",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      name: "New Zealand",
      programs: ["Skilled Migrant", "Investor Category", "Family Category", "Work to Residence"],
      processingTime: "12-24 months",
      image: "/placeholder.svg?height=200&width=300",
    },
  ]

  const requirements = [
    "Valid passport and identity documents",
    "Educational credential assessment",
    "Language proficiency test results",
    "Work experience documentation",
    "Police clearance certificates",
    "Medical examination reports",
    "Proof of funds and financial support",
    "Employment references and contracts",
    "Family relationship documents",
    "Professional licensing (if applicable)",
  ]

  const processSteps = [
    {
      step: 1,
      title: "Eligibility Assessment",
      description: "Comprehensive evaluation of your qualifications and determination of the best immigration pathway.",
      duration: "1-2 weeks",
    },
    {
      step: 2,
      title: "Document Collection",
      description: "Systematic gathering and preparation of all required documents and certifications.",
      duration: "2-4 weeks",
    },
    {
      step: 3,
      title: "Application Submission",
      description: "Professional preparation and submission of your permanent residency application.",
      duration: "1-2 weeks",
    },
    {
      step: 4,
      title: "Follow-up & Settlement",
      description: "Application monitoring, interview preparation, and post-approval settlement support.",
      duration: "Ongoing",
    },
  ]

  const benefits = [
    "Comprehensive eligibility assessment",
    "Points calculation and optimization",
    "Document preparation and verification",
    "Application strategy development",
    "Interview preparation and coaching",
    "Legal representation if required",
    "Settlement planning and support",
    "Citizenship pathway guidance",
  ]

  const pathways = [
    {
      title: "Skilled Worker Programs",
      description: "For professionals with in-demand skills and qualifications",
      icon: <Users className="h-8 w-8 text-slate-900" />,
      features: ["Points-based system", "No job offer required", "Fast processing", "Family inclusion"],
    },
    {
      title: "Employer Sponsored",
      description: "For individuals with job offers from approved employers",
      icon: <FileText className="h-8 w-8 text-slate-900" />,
      features: ["Job offer required", "Employer support", "Direct pathway", "Work experience credit"],
    },
    {
      title: "Investment Programs",
      description: "For high net worth individuals and investors",
      icon: <Globe className="h-8 w-8 text-slate-900" />,
      features: ["Capital investment", "Business experience", "Fast track option", "Flexible requirements"],
    },
    {
      title: "Family Sponsorship",
      description: "For family members of citizens and permanent residents",
      icon: <Home className="h-8 w-8 text-slate-900" />,
      features: ["Family connection", "No points required", "Sponsor support", "Settlement assistance"],
    },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-sm font-medium text-slate-600 mb-4 tracking-wider uppercase">
                PERMANENT RESIDENCY SERVICES
              </p>
              <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6 leading-tight">
                Make it your
                <br />
                permanent home
              </h1>
            </div>
            <div className="text-right">
              <p className="text-lg text-slate-600 mb-6 max-w-md ml-auto">
                Expert guidance for permanent residency and citizenship applications. Build your future in your dream
                country.
              </p>
              <Button size="lg" className="bg-slate-900 hover:bg-slate-800 text-white px-8 py-3">
                Start your journey
              </Button>
            </div>
          </div>

          {/* Hero Image */}
          <div className="mt-16">
            <div className="relative h-96 md:h-[500px] rounded-lg overflow-hidden">
              <Image
                src="/placeholder.svg?height=500&width=1200"
                alt="Happy family celebrating permanent residency"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Immigration Pathways */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">Immigration Pathways</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Multiple routes to permanent residency based on your qualifications and circumstances
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {pathways.map((pathway, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-8">
                  <div className="flex items-center mb-4">
                    {pathway.icon}
                    <h3 className="text-xl font-bold text-slate-800 ml-3">{pathway.title}</h3>
                  </div>
                  <p className="text-slate-600 mb-6">{pathway.description}</p>
                  <div className="grid grid-cols-2 gap-2">
                    {pathway.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-600" />
                        <span className="text-sm text-slate-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Countries We Serve */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">Permanent Residency Programs</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              We provide permanent residency services for major immigration destinations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {countries.map((country, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div className="relative h-48">
                  <Image src={country.image || "/placeholder.svg"} alt={country.name} fill className="object-cover" />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-slate-800 mb-3">{country.name}</h3>
                  <div className="mb-4">
                    <p className="text-sm text-slate-600 mb-2">Programs:</p>
                    <ul className="text-sm space-y-1">
                      {country.programs.map((program, idx) => (
                        <li key={idx} className="text-slate-700">
                          • {program}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex items-center text-sm text-slate-600">
                    <Clock className="h-4 w-4 mr-1" />
                    <span>Processing: {country.processingTime}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">Our PR Process</h2>
            <p className="text-xl text-slate-600">Comprehensive support from assessment to approval</p>
          </div>

          <div className="max-w-4xl mx-auto">
            {processSteps.map((step, index) => (
              <div key={index} className="flex items-start mb-8 last:mb-0">
                <div className="flex-shrink-0 w-16 h-16 bg-slate-900 text-white rounded-full flex items-center justify-center text-xl font-bold mr-6">
                  {step.step}
                </div>
                <div className="flex-grow bg-white p-6 rounded-lg shadow-sm border">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold text-slate-800">{step.title}</h3>
                    <Badge variant="outline" className="text-slate-900">
                      {step.duration}
                    </Badge>
                  </div>
                  <p className="text-slate-600">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Requirements */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6">Document Requirements</h2>
              <p className="text-lg text-slate-600 mb-8">
                Essential documents for permanent residency applications. Requirements vary by country and program type.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {requirements.map((requirement, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-1" />
                    <span className="text-slate-700">{requirement}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <Image
                src="/placeholder.svg?height=500&width=600"
                alt="Permanent residency document requirements"
                width={600}
                height={500}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-slate-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Our PR Services?</h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Expert guidance for your permanent residency journey
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <Card key={index} className="bg-white/10 border-white/20 text-white">
                <CardContent className="p-6 text-center">
                  <CheckCircle className="h-8 w-8 text-amber-400 mx-auto mb-3" />
                  <p className="text-slate-100">{benefit}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-amber-500 to-amber-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready for Permanent Residency?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Take the first step towards making your dream country your permanent home. Contact us for expert guidance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-amber-600 hover:bg-slate-100">
              Start Your Application
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-amber-600 bg-transparent"
            >
              Get Free Assessment
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
