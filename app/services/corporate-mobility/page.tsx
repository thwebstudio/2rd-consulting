import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, FileText, Users, Briefcase, Shield } from "lucide-react"

export default function CorporateMobilityPage() {
  const services = [
    {
      title: "Work Permit Management",
      description: "End-to-end work permit processing for your international employees",
      icon: <FileText className="h-8 w-8 text-slate-900" />,
      features: ["Permit applications", "Renewals & extensions", "Compliance monitoring", "Legal updates"],
    },
    {
      title: "Employee Relocation",
      description: "Comprehensive relocation support for short and long-term assignments",
      icon: <Users className="h-8 w-8 text-slate-900" />,
      features: ["STA & LTA support", "Family visas", "Housing assistance", "School enrollment"],
    },
    {
      title: "Business Visa Services",
      description: "Specialized visa services for executives and business travelers",
      icon: <Briefcase className="h-8 w-8 text-slate-900" />,
      features: ["Executive visas", "Investor visas", "Meeting visas", "Conference attendance"],
    },
    {
      title: "Compliance Management",
      description: "Ensure your business stays compliant with immigration regulations",
      icon: <Shield className="h-8 w-8 text-slate-900" />,
      features: ["Legal compliance", "Risk assessment", "Policy development", "Training programs"],
    },
  ]

  const industries = [
    {
      name: "Technology",
      description: "IT professionals, software engineers, and tech executives",
      image: "/placeholder.svg?height=200&width=300",
      specialties: ["H-1B visas", "L-1 transfers", "Global talent visas", "Startup visas"],
    },
    {
      name: "Finance & Banking",
      description: "Financial professionals and banking executives",
      image: "/placeholder.svg?height=200&width=300",
      specialties: ["Intra-company transfers", "Executive visas", "Compliance roles", "Investment banking"],
    },
    {
      name: "Healthcare",
      description: "Medical professionals and healthcare workers",
      image: "/placeholder.svg?height=200&width=300",
      specialties: ["Medical visas", "Specialist permits", "Research visas", "Healthcare workers"],
    },
    {
      name: "Manufacturing",
      description: "Engineers, managers, and technical specialists",
      image: "/placeholder.svg?height=200&width=300",
      specialties: ["Technical visas", "Manager transfers", "Training visas", "Project assignments"],
    },
  ]

  const processSteps = [
    {
      step: 1,
      title: "Business Assessment",
      description: "Comprehensive evaluation of your company's mobility needs and compliance requirements.",
      duration: "1-2 weeks",
    },
    {
      step: 2,
      title: "Strategy Development",
      description: "Custom mobility strategy aligned with your business objectives and budget.",
      duration: "1 week",
    },
    {
      step: 3,
      title: "Implementation",
      description: "Execute visa applications, permits, and relocation services for your employees.",
      duration: "Ongoing",
    },
    {
      step: 4,
      title: "Ongoing Support",
      description: "Continuous compliance monitoring, renewals, and employee support services.",
      duration: "Ongoing",
    },
  ]

  const benefits = [
    "Dedicated account management",
    "Cost optimization strategies",
    "Compliance risk mitigation",
    "24/7 emergency support",
    "Global mobility expertise",
    "Technology-driven solutions",
    "Transparent reporting",
    "Scalable service delivery",
  ]

  const stats = [
    { number: "500+", label: "Corporate Clients" },
    { number: "50+", label: "Countries Covered" },
    { number: "95%", label: "Success Rate" },
    { number: "24/7", label: "Support Available" },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-sm font-medium text-slate-600 mb-4 tracking-wider uppercase">
                CORPORATE MOBILITY SERVICES
              </p>
              <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6 leading-tight">
                Global talent,
                <br />
                seamless mobility
              </h1>
            </div>
            <div className="text-right">
              <p className="text-lg text-slate-600 mb-6 max-w-md ml-auto">
                Comprehensive corporate mobility solutions for businesses managing global talent and international
                assignments.
              </p>
              <Button size="lg" className="bg-slate-900 hover:bg-slate-800 text-white px-8 py-3">
                Get started
              </Button>
            </div>
          </div>

          {/* Hero Image */}
          <div className="mt-16">
            <div className="relative h-96 md:h-[500px] rounded-lg overflow-hidden">
              <Image
                src="/placeholder.svg?height=500&width=1200"
                alt="Corporate team meeting with international professionals"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-slate-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Trusted by Leading Companies</h2>
            <p className="text-xl text-slate-300">Our track record speaks for itself</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-amber-400 mb-2">{stat.number}</div>
                <div className="text-slate-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">Our Corporate Services</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Comprehensive mobility solutions tailored to your business needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-8">
                  <div className="flex items-center mb-4">
                    {service.icon}
                    <h3 className="text-xl font-bold text-slate-800 ml-3">{service.title}</h3>
                  </div>
                  <p className="text-slate-600 mb-6">{service.description}</p>
                  <div className="grid grid-cols-2 gap-2">
                    {service.features.map((feature, idx) => (
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

      {/* Industries We Serve */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">Industries We Serve</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Specialized expertise across diverse industry sectors
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {industries.map((industry, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div className="relative h-48">
                  <Image src={industry.image || "/placeholder.svg"} alt={industry.name} fill className="object-cover" />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-slate-800 mb-3">{industry.name}</h3>
                  <p className="text-slate-600 mb-4">{industry.description}</p>
                  <div className="space-y-1">
                    {industry.specialties.map((specialty, idx) => (
                      <Badge key={idx} variant="outline" className="text-xs mr-1 mb-1">
                        {specialty}
                      </Badge>
                    ))}
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
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">Our Corporate Process</h2>
            <p className="text-xl text-slate-600">Streamlined approach to corporate mobility management</p>
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

      {/* Why Choose Us */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6">Why Choose Our Corporate Services?</h2>
              <p className="text-lg text-slate-600 mb-8">
                We understand the complexities of global business and provide tailored solutions that align with your
                corporate objectives.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-1" />
                    <span className="text-slate-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <Image
                src="/placeholder.svg?height=500&width=600"
                alt="Corporate mobility services"
                width={600}
                height={500}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-amber-500 to-amber-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Optimize Your Global Mobility?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Let us help you streamline your corporate mobility processes and reduce compliance risks. Contact us for a
            consultation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-amber-600 hover:bg-slate-100">
              Schedule Consultation
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-amber-600 bg-transparent"
            >
              Request Proposal
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
