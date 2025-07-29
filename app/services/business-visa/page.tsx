import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Briefcase, Users, Globe, TrendingUp } from "lucide-react"

export default function BusinessVisaPage() {
  const visaTypes = [
    {
      title: "Executive Visas",
      description: "For senior executives and management personnel",
      icon: <Users className="h-8 w-8 text-slate-900" />,
      features: ["L-1A Executive", "E-2 Investor", "O-1 Extraordinary Ability", "Global Talent Visa"],
      countries: ["USA", "UK", "Canada", "Australia"],
    },
    {
      title: "Investor Visas",
      description: "For entrepreneurs and business investors",
      icon: <TrendingUp className="h-8 w-8 text-slate-900" />,
      features: ["EB-5 Investment", "Tier 1 Investor", "Start-up Visa", "Business Innovation"],
      countries: ["USA", "UK", "Canada", "New Zealand"],
    },
    {
      title: "Business Meeting Visas",
      description: "For short-term business activities",
      icon: <Briefcase className="h-8 w-8 text-slate-900" />,
      features: ["B-1 Business", "Standard Visitor", "Business Schengen", "Business ETA"],
      countries: ["USA", "UK", "Schengen", "Canada"],
    },
    {
      title: "Intra-Company Transfers",
      description: "For employees transferring within multinational companies",
      icon: <Globe className="h-8 w-8 text-slate-900" />,
      features: ["L-1B Specialized", "ICT Permit", "Intra-company Transfer", "Global Mobility"],
      countries: ["USA", "UK", "Canada", "EU"],
    },
  ]

  const processSteps = [
    {
      step: 1,
      title: "Business Assessment",
      description: "Evaluate your business needs and determine the most suitable visa category.",
      duration: "1-2 days",
    },
    {
      step: 2,
      title: "Documentation",
      description: "Prepare business documents, financial records, and supporting evidence.",
      duration: "1-2 weeks",
    },
    {
      step: 3,
      title: "Application Filing",
      description: "Submit applications to relevant authorities and schedule appointments.",
      duration: "3-5 days",
    },
    {
      step: 4,
      title: "Follow-up Support",
      description: "Monitor application progress and provide ongoing business support.",
      duration: "Ongoing",
    },
  ]

  const requirements = [
    "Valid business registration documents",
    "Financial statements and tax returns",
    "Business plan and investment details",
    "Proof of business relationship",
    "Executive qualifications and experience",
    "Meeting invitations or conference details",
    "Travel itinerary and accommodation",
    "Insurance and financial guarantees",
  ]

  const benefits = [
    "Fast-track processing options",
    "Multiple entry visa arrangements",
    "Extension and renewal support",
    "Family visa coordination",
    "Business setup assistance",
    "Legal compliance guidance",
    "Ongoing business support",
    "Emergency visa services",
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-sm font-medium text-slate-600 mb-4 tracking-wider uppercase">BUSINESS VISA SERVICES</p>
              <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6 leading-tight">
                Business visas,
                <br />
                global opportunities
              </h1>
            </div>
            <div className="text-right">
              <p className="text-lg text-slate-600 mb-6 max-w-md ml-auto">
                Specialized business visa services for executives, investors, and corporate travelers. Expand your
                business globally.
              </p>
              <Button size="lg" className="bg-slate-900 hover:bg-slate-800 text-white px-8 py-3">
                Start application
              </Button>
            </div>
          </div>

          {/* Hero Image */}
          <div className="mt-16">
            <div className="relative h-96 md:h-[500px] rounded-lg overflow-hidden">
              <Image
                src="/placeholder.svg?height=500&width=1200"
                alt="Business professionals in international meeting"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Business Visa Types */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">Business Visa Categories</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Comprehensive business visa solutions for different business needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {visaTypes.map((visa, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-8">
                  <div className="flex items-center mb-4">
                    {visa.icon}
                    <h3 className="text-xl font-bold text-slate-800 ml-3">{visa.title}</h3>
                  </div>
                  <p className="text-slate-600 mb-6">{visa.description}</p>

                  <div className="mb-4">
                    <h4 className="font-semibold text-slate-800 mb-2">Visa Types:</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {visa.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center space-x-2">
                          <CheckCircle className="h-4 w-4 text-green-600" />
                          <span className="text-sm text-slate-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-slate-800 mb-2">Countries:</h4>
                    <div className="flex flex-wrap gap-2">
                      {visa.countries.map((country, idx) => (
                        <Badge key={idx} variant="outline" className="text-slate-700">
                          {country}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">Our Business Visa Process</h2>
            <p className="text-xl text-slate-600">Streamlined approach for business visa applications</p>
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

      {/* Requirements & Benefits */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-slate-800 mb-6">Document Requirements</h2>
              <p className="text-lg text-slate-600 mb-8">
                Essential documents for business visa applications vary by visa type and destination.
              </p>

              <div className="space-y-3">
                {requirements.map((requirement, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-1" />
                    <span className="text-slate-700">{requirement}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-slate-800 mb-6">Why Choose Our Services</h2>
              <p className="text-lg text-slate-600 mb-8">
                Professional business visa services with comprehensive support for your business needs.
              </p>

              <div className="space-y-3">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-1" />
                    <span className="text-slate-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-amber-500 to-amber-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Expand Your Business Globally?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Let us help you secure the right business visa for your international ventures. Contact us today.
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
              Get Consultation
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
