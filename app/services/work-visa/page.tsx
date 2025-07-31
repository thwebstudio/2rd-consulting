import Image from "next/image";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  CheckCircle,
  Clock,
  FileText,
  Users,
  Globe,
  ArrowRight,
  AlertCircle,
} from "lucide-react";

export default function WorkVisaPage() {
  const countries = [
    {
      name: "United Kingdom",
      visaTypes: [
        "Skilled Worker Visa",
        "Global Talent Visa",
        "Intra-company Transfer",
        "Temporary Worker Visa",
      ],
      processingTime: "3-8 weeks",
      image: "/uk.jpg",
    },
    {
      name: "United States",
      visaTypes: ["H-1B Visa", "L-1 Visa", "O-1 Visa", "TN Visa"],
      processingTime: "2-6 months",
      image: "/us.jpg",
    },
    {
      name: "Canada",
      visaTypes: [
        "Express Entry",
        "Provincial Nominee",
        "LMIA Work Permit",
        "NAFTA Work Permit",
      ],
      processingTime: "4-12 weeks",
      image: "/ca.jpg",
    },
    {
      name: "Schengen Area",
      visaTypes: [
        "EU Blue Card",
        "National Work Permit",
        "ICT Permit",
        "Seasonal Worker",
      ],
      processingTime: "2-8 weeks",
      image: "/sheg.jpg",
    },
  ];

  const requirements = [
    "Valid passport with minimum 6 months validity",
    "Job offer letter from employer",
    "Educational certificates and transcripts",
    "Professional qualifications and certifications",
    "Work experience letters",
    "Medical examination reports",
    "Police clearance certificates",
    "Proof of financial support",
    "Passport-sized photographs",
    "Completed visa application forms",
  ];

  const processSteps = [
    {
      step: 1,
      title: "Initial Assessment",
      description:
        "We evaluate your qualifications, work experience, and determine the best visa pathway for your situation.",
      duration: "1-2 days",
    },
    {
      step: 2,
      title: "Document Preparation",
      description:
        "Our team assists in gathering and preparing all required documents, ensuring they meet embassy standards.",
      duration: "1-2 weeks",
    },
    {
      step: 3,
      title: "Application Submission",
      description:
        "We submit your application to the relevant embassy or immigration authority and schedule appointments.",
      duration: "1-3 days",
    },
    {
      step: 4,
      title: "Follow-up & Support",
      description:
        "We monitor your application progress and provide updates until visa approval and beyond.",
      duration: "Ongoing",
    },
  ];

  const benefits = [
    "Expert guidance from certified immigration consultants",
    "Personalized application strategy",
    "Document verification and preparation",
    "Embassy appointment scheduling",
    "Interview preparation and coaching",
    "Application tracking and updates",
    "Post-approval travel assistance",
    "Settlement support services",
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 to-slate-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="bg-amber-500 text-white mb-4">
                Work Visa Services
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                Work Visa
                <span className="text-amber-400"> Applications</span>
              </h1>
              <p className="text-xl text-blue-100 mb-8">
                Professional assistance for work permit applications worldwide.
                We help skilled professionals secure employment visas in their
                desired destinations.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-amber-500 hover:bg-amber-600 text-white"
                >
                  Start Application
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-blue-900 bg-transparent"
                >
                  Free Consultation
                </Button>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/hero2.jpg"
                alt="Work Visa Services"
                width={600}
                height={500}
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Countries We Serve */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
              Countries We Serve
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              We provide work visa services for major destinations worldwide
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {countries.map((country, index) => (
              <Card
                key={index}
                className="overflow-hidden hover:shadow-lg transition-shadow duration-300"
              >
                <div className="relative h-48">
                  <Image
                    src={country.image || "/placeholder.svg"}
                    alt={country.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-slate-800 mb-3">
                    {country.name}
                  </h3>
                  <div className="mb-4">
                    <p className="text-sm text-slate-600 mb-2">Visa Types:</p>
                    <ul className="text-sm space-y-1">
                      {country.visaTypes.map((type, idx) => (
                        <li key={idx} className="text-slate-700">
                          • {type}
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
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
              Our Work Visa Process
            </h2>
            <p className="text-xl text-slate-600">
              Step-by-step guidance from application to approval
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {processSteps.map((step, index) => (
              <div key={index} className="flex items-start mb-8 last:mb-0">
                <div className="flex-shrink-0 w-16 h-16 bg-blue-900 text-white rounded-full flex items-center justify-center text-xl font-bold mr-6">
                  {step.step}
                </div>
                <div className="flex-grow bg-white p-6 rounded-lg shadow-sm">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold text-slate-800">
                      {step.title}
                    </h3>
                    <Badge variant="outline" className="text-blue-900">
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
              <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6">
                Document Requirements
              </h2>
              <p className="text-lg text-slate-600 mb-8">
                While requirements vary by country and visa type, here are the
                common documents needed for most work visa applications:
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
                src="/wv.jpg"
                alt="Document Requirements"
                width={600}
                height={500}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Choose Our Work Visa Services?
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Professional expertise and personalized support for your work visa
              journey
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <Card
                key={index}
                className="bg-white/10 border-white/20 text-white"
              >
                <CardContent className="p-6 text-center">
                  <CheckCircle className="h-8 w-8 text-amber-400 mx-auto mb-3" />
                  <p className="text-blue-100">{benefit}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Important Notice */}
      <section className="py-16 bg-amber-50">
        <div className="container mx-auto px-4">
          <Card className="border-amber-200 bg-amber-50">
            <CardContent className="p-8">
              <div className="flex items-start space-x-4">
                <AlertCircle className="h-8 w-8 text-amber-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold text-amber-800 mb-3">
                    Important Information
                  </h3>
                  <div className="text-amber-700 space-y-2">
                    <p>
                      • Work visa requirements and processing times vary by
                      country and individual circumstances
                    </p>
                    <p>
                      • Some countries require a job offer before visa
                      application
                    </p>
                    <p>
                      • Processing times may be affected by embassy workload and
                      seasonal variations
                    </p>
                    <p>
                      • Additional documents may be requested during the
                      application process
                    </p>
                    <p>
                      • We recommend starting your application process 3-6
                      months before your intended travel date
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-amber-500 to-amber-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Apply for Your Work Visa?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Let our experienced team guide you through the work visa application
            process. Contact us today for a free consultation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white text-amber-600 hover:bg-slate-100"
            >
              Start Your Application
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-amber-600 bg-transparent"
            >
              Get Free Consultation
            </Button>
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-800 mb-4">
              Related Services
            </h2>
            <p className="text-lg text-slate-600">
              Explore our other immigration services
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6 text-center">
                <Users className="h-12 w-12 text-blue-900 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-slate-800 mb-3">
                  Corporate Mobility
                </h3>
                <p className="text-slate-600 mb-4">
                  Comprehensive corporate mobility solutions for businesses.
                </p>
                <Link href="/services/corporate-mobility">
                  <Button variant="outline" className="w-full bg-transparent">
                    Learn More
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6 text-center">
                <Globe className="h-12 w-12 text-blue-900 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-slate-800 mb-3">
                  Permanent Residency
                </h3>
                <p className="text-slate-600 mb-4">
                  Long-term residency and citizenship application services.
                </p>
                <Link href="/services/permanent-residency">
                  <Button variant="outline" className="w-full bg-transparent">
                    Learn More
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6 text-center">
                <FileText className="h-12 w-12 text-blue-900 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-slate-800 mb-3">
                  Document Services
                </h3>
                <p className="text-slate-600 mb-4">
                  Professional document preparation and verification services.
                </p>
                <Link href="/services/documents">
                  <Button variant="outline" className="w-full bg-transparent">
                    Learn More
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
