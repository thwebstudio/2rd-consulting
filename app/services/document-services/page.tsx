import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, FileText, Stamp, Globe, Shield, Clock } from "lucide-react"

export default function DocumentServicesPage() {
  const services = [
    {
      title: "Document Verification",
      description: "Professional verification of educational and professional documents",
      icon: <Shield className="h-8 w-8 text-slate-900" />,
      features: ["Educational certificates", "Professional licenses", "Work experience", "Identity documents"],
    },
    {
      title: "Apostille Services",
      description: "Official apostille certification for international document recognition",
      icon: <Stamp className="h-8 w-8 text-slate-900" />,
      features: ["Birth certificates", "Marriage certificates", "Educational documents", "Commercial documents"],
    },
    {
      title: "Translation Services",
      description: "Certified translation services for official documents",
      icon: <Globe className="h-8 w-8 text-slate-900" />,
      features: ["Certified translations", "Legal documents", "Academic transcripts", "Medical records"],
    },
    {
      title: "Notarization",
      description: "Official notarization services for legal documents",
      icon: <FileText className="h-8 w-8 text-slate-900" />,
      features: ["Affidavits", "Power of attorney", "Contracts", "Statutory declarations"],
    },
  ]

  const documentTypes = [
    {
      category: "Educational Documents",
      documents: ["Degree certificates", "Transcripts", "Diplomas", "Professional certifications"],
      processing: "3-5 days",
    },
    {
      category: "Personal Documents",
      documents: ["Birth certificates", "Marriage certificates", "Passport copies", "Police clearances"],
      processing: "2-3 days",
    },
    {
      category: "Professional Documents",
      documents: ["Work experience letters", "Employment contracts", "Professional licenses", "Reference letters"],
      processing: "1-2 days",
    },
    {
      category: "Business Documents",
      documents: ["Company registration", "Financial statements", "Tax documents", "Business licenses"],
      processing: "3-7 days",
    },
  ]

  const processSteps = [
    {
      step: 1,
      title: "Document Submission",
      description: "Submit your documents through our secure portal or visit our office.",
      duration: "Same day",
    },
    {
      step: 2,
      title: "Review & Verification",
      description: "Our experts review and verify the authenticity of your documents.",
      duration: "1-2 days",
    },
    {
      step: 3,
      title: "Processing",
      description: "Documents are processed according to the required service (apostille, translation, etc.).",
      duration: "2-5 days",
    },
    {
      step: 4,
      title: "Delivery",
      description: "Processed documents are delivered securely to your preferred location.",
      duration: "1-2 days",
    },
  ]

  const benefits = [
    "Fast processing times",
    "Secure document handling",
    "Certified professionals",
    "Multiple language support",
    "Pickup and delivery service",
    "Digital copies provided",
    "Quality assurance",
    "Competitive pricing",
  ]

  const countries = [
    { name: "United States", flag: "🇺🇸", services: ["Apostille", "Translation", "Notarization"] },
    { name: "United Kingdom", flag: "🇬🇧", services: ["Apostille", "Translation", "Verification"] },
    { name: "Canada", flag: "🇨🇦", services: ["Authentication", "Translation", "Notarization"] },
    { name: "Australia", flag: "🇦🇺", services: ["Apostille", "Translation", "Verification"] },
    { name: "Germany", flag: "🇩🇪", services: ["Apostille", "Translation", "Legalization"] },
    { name: "France", flag: "🇫🇷", services: ["Apostille", "Translation", "Legalization"] },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-sm font-medium text-slate-600 mb-4 tracking-wider uppercase">DOCUMENT SERVICES</p>
              <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6 leading-tight">
                Professional document
                <br />
                services
              </h1>
            </div>
            <div className="text-right">
              <p className="text-lg text-slate-600 mb-6 max-w-md ml-auto">
                Comprehensive document preparation, verification, apostille, and translation services for all your
                immigration needs.
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
                alt="Professional document services and certification"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">Our Document Services</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Professional document processing services for international requirements
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

      {/* Document Types */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">Document Categories</h2>
            <p className="text-xl text-slate-600">We handle all types of documents for international use</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {documentTypes.map((type, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold text-slate-800 mb-3">{type.category}</h3>
                  <ul className="space-y-2 mb-4">
                    {type.documents.map((doc, idx) => (
                      <li key={idx} className="text-sm text-slate-600 flex items-center">
                        <CheckCircle className="h-3 w-3 text-green-600 mr-2" />
                        {doc}
                      </li>
                    ))}
                  </ul>
                  <div className="flex items-center text-sm text-slate-600">
                    <Clock className="h-4 w-4 mr-1" />
                    <span>Processing: {type.processing}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Countries We Serve */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">Countries We Serve</h2>
            <p className="text-xl text-slate-600">Document services for major international destinations</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {countries.map((country, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6 text-center">
                  <div className="text-4xl mb-3">{country.flag}</div>
                  <h3 className="text-lg font-bold text-slate-800 mb-3">{country.name}</h3>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {country.services.map((service, idx) => (
                      <Badge key={idx} variant="outline" className="text-slate-700">
                        {service}
                      </Badge>
                    ))}
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
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">Our Process</h2>
            <p className="text-xl text-slate-600">Simple and secure document processing workflow</p>
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

      {/* Benefits */}
      <section className="py-16 bg-slate-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Our Document Services?</h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Professional, secure, and reliable document processing services
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Need Document Services?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Get your documents processed professionally and securely. Contact us today for fast, reliable service.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-amber-600 hover:bg-slate-100">
              Submit Documents
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-amber-600 bg-transparent"
            >
              Get Quote
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
