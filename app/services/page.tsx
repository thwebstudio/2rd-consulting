import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  Plane,
  Users,
  Globe,
  FileText,
  Building,
  GraduationCap,
  Camera,
  Shield,
  ArrowRight,
  CheckCircle,
} from "lucide-react"

export default function ServicesPage() {
  const visaServices = [
    {
      icon: <Plane className="h-8 w-8 text-blue-900" />,
      title: "Work Visa Applications",
      description:
        "Comprehensive assistance for work permit applications across multiple countries including UK, US, Canada, and Schengen area.",
      features: ["Document preparation", "Application submission", "Interview preparation", "Follow-up support"],
      href: "/services/work-visa",
    },
    {
      icon: <GraduationCap className="h-8 w-8 text-blue-900" />,
      title: "Study Visa Services",
      description:
        "Expert guidance for student visa applications, university admissions support, and academic documentation.",
      features: ["University selection", "Application assistance", "Financial documentation", "Visa interview prep"],
      href: "/services/study-visa",
    },
    {
      icon: <Camera className="h-8 w-8 text-blue-900" />,
      title: "Tourist & Visit Visas",
      description: "Hassle-free tourist and visit visa applications for leisure, business, or family visits worldwide.",
      features: ["Itinerary planning", "Hotel bookings", "Travel insurance", "Embassy appointments"],
      href: "/services/tourist-visa",
    },
    {
      icon: <Globe className="h-8 w-8 text-blue-900" />,
      title: "Permanent Residency",
      description: "Long-term residency and citizenship application services with expert legal guidance.",
      features: ["Eligibility assessment", "Documentation support", "Legal representation", "Settlement services"],
      href: "/services/permanent-residency",
    },
  ]

  const corporateServices = [
    {
      icon: <Building className="h-8 w-8 text-blue-900" />,
      title: "Corporate Mobility Solutions",
      description:
        "End-to-end corporate mobility services for businesses managing global talent and international assignments.",
      features: ["Work permit management", "Employee relocation", "Compliance monitoring", "Cost optimization"],
      href: "/services/corporate-mobility",
    },
    {
      icon: <Users className="h-8 w-8 text-blue-900" />,
      title: "Business Visa Procurement",
      description: "Specialized business visa services for executives, investors, and corporate travelers.",
      features: ["Executive visas", "Investor visas", "Business meetings", "Conference attendance"],
      href: "/services/business-visa",
    },
    {
      icon: <Shield className="h-8 w-8 text-blue-900" />,
      title: "Compliance Management",
      description: "Ensure your business stays compliant with local immigration laws and regulations.",
      features: ["Legal compliance", "Risk assessment", "Policy development", "Training programs"],
      href: "/services/compliance",
    },
    {
      icon: <FileText className="h-8 w-8 text-blue-900" />,
      title: "Document Services",
      description: "Professional document preparation, verification, and apostille services.",
      features: ["Document verification", "Apostille services", "Translation services", "Notarization"],
      href: "/services/document-services",
    },
  ]

  const processSteps = [
    {
      step: "01",
      title: "Initial Consultation",
      description: "Free consultation to assess your needs and determine the best visa pathway.",
    },
    {
      step: "02",
      title: "Documentation",
      description: "Comprehensive document preparation and verification to ensure completeness.",
    },
    {
      step: "03",
      title: "Application Submission",
      description: "Professional submission of your application with embassy/consulate follow-up.",
    },
    {
      step: "04",
      title: "Post-Approval Support",
      description: "Continued support for travel arrangements and settlement services.",
    },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 to-slate-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="bg-amber-500 text-white mb-4">Comprehensive Immigration Services</Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Our
              <span className="text-amber-400"> Services</span>
            </h1>
            <p className="text-xl text-blue-100 mb-8">
              From individual visa applications to corporate mobility solutions, we provide end-to-end immigration and
              visa consulting services.
            </p>
          </div>
        </div>
      </section>

      {/* Visa & Residency Services */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">Visa & Residency Services</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Professional visa application services for individuals and families
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {visaServices.map((service, index) => (
              <Card key={index} className="group hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="flex items-center space-x-3 mb-3">
                    {service.icon}
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                  </div>
                  <p className="text-slate-600">{service.description}</p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-600" />
                        <span className="text-slate-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link href={service.href}>
                    <Button className="w-full group-hover:bg-blue-900">
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Corporate Services */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">Corporate Mobility Services</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Specialized solutions for businesses managing global talent and international operations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {corporateServices.map((service, index) => (
              <Card key={index} className="group hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="flex items-center space-x-3 mb-3">
                    {service.icon}
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                  </div>
                  <p className="text-slate-600">{service.description}</p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-600" />
                        <span className="text-slate-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link href={service.href}>
                    <Button className="w-full group-hover:bg-blue-900">
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">Our Process</h2>
            <p className="text-xl text-slate-600">Simple, transparent, and efficient approach to visa applications</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="bg-blue-900 text-white w-16 h-16 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {step.step}
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-3">{step.title}</h3>
                <p className="text-slate-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Additional Services</h2>
            <p className="text-xl text-blue-100">Comprehensive support beyond visa applications</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-white/10 border-white/20 text-white">
              <CardContent className="p-6 text-center">
                <FileText className="h-12 w-12 text-amber-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-3">Document Services</h3>
                <p className="text-blue-100">
                  Professional document preparation, verification, apostille, and translation services.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/10 border-white/20 text-white">
              <CardContent className="p-6 text-center">
                <Globe className="h-12 w-12 text-amber-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-3">Travel Packages</h3>
                <p className="text-blue-100">
                  Customized travel packages including flights, accommodation, and travel insurance.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/10 border-white/20 text-white">
              <CardContent className="p-6 text-center">
                <Shield className="h-12 w-12 text-amber-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-3">Post-Arrival Support</h3>
                <p className="text-blue-100">
                  Settlement services, bank account opening, and local registration assistance.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-amber-500 to-amber-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contact us today for a free consultation and let us help you achieve your immigration goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-amber-600 hover:bg-slate-100">
              Get Free Consultation
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-amber-600 bg-transparent"
            >
              Contact Us
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
