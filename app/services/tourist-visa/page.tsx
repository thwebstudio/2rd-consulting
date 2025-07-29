import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Clock } from "lucide-react"

export default function TouristVisaPage() {
  const countries = [
    {
      name: "United Kingdom",
      visaTypes: ["Standard Visitor Visa", "Family Visit Visa", "Business Visit Visa", "Transit Visa"],
      processingTime: "3-6 weeks",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      name: "Schengen Area",
      visaTypes: ["Tourist Schengen Visa", "Business Schengen Visa", "Family Visit Visa", "Transit Visa"],
      processingTime: "2-4 weeks",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      name: "United States",
      visaTypes: ["B-1/B-2 Tourist Visa", "ESTA (Visa Waiver)", "Transit Visa", "Family Visit Visa"],
      processingTime: "2-8 weeks",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      name: "Canada",
      visaTypes: ["Visitor Visa (TRV)", "eTA Authorization", "Super Visa", "Transit Visa"],
      processingTime: "2-6 weeks",
      image: "/placeholder.svg?height=200&width=300",
    },
  ]

  const requirements = [
    "Valid passport with minimum 6 months validity",
    "Completed visa application form",
    "Recent passport-sized photographs",
    "Travel itinerary and flight bookings",
    "Hotel reservations or accommodation proof",
    "Travel insurance coverage",
    "Bank statements (last 3-6 months)",
    "Employment letter or business registration",
    "Invitation letter (if visiting family/friends)",
    "Proof of ties to home country",
  ]

  const processSteps = [
    {
      step: 1,
      title: "Travel Planning",
      description: "We help you plan your itinerary, book accommodations, and prepare travel documentation.",
      duration: "3-5 days",
    },
    {
      step: 2,
      title: "Document Preparation",
      description: "Comprehensive preparation of all required documents and application forms.",
      duration: "1-2 weeks",
    },
    {
      step: 3,
      title: "Application Submission",
      description: "Professional submission of your tourist visa application and embassy appointment booking.",
      duration: "1-3 days",
    },
    {
      step: 4,
      title: "Travel Support",
      description: "Pre-travel briefing, travel insurance, and 24/7 support during your trip.",
      duration: "Ongoing",
    },
  ]

  const benefits = [
    "Complete travel itinerary planning",
    "Hotel and flight booking assistance",
    "Travel insurance arrangement",
    "Embassy appointment scheduling",
    "Visa interview preparation",
    "Document verification service",
    "24/7 travel support",
    "Emergency assistance abroad",
  ]

  const destinations = [
    {
      name: "Europe",
      description: "Explore 26 Schengen countries with a single visa",
      image: "/placeholder.svg?height=300&width=400",
      highlights: ["Paris", "Rome", "Barcelona", "Amsterdam"],
    },
    {
      name: "United Kingdom",
      description: "Discover the rich history and culture of Britain",
      image: "/placeholder.svg?height=300&width=400",
      highlights: ["London", "Edinburgh", "Bath", "Oxford"],
    },
    {
      name: "United States",
      description: "Experience the diversity of America",
      image: "/placeholder.svg?height=300&width=400",
      highlights: ["New York", "Los Angeles", "Las Vegas", "Miami"],
    },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-sm font-medium text-slate-600 mb-4 tracking-wider uppercase">TOURIST VISA SERVICES</p>
              <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6 leading-tight">
                Explore the world,
                <br />
                hassle-free travel
              </h1>
            </div>
            <div className="text-right">
              <p className="text-lg text-slate-600 mb-6 max-w-md ml-auto">
                Professional tourist visa services for leisure, business, and family visits. We make your travel dreams
                come true.
              </p>
              <Button size="lg" className="bg-slate-900 hover:bg-slate-800 text-white px-8 py-3">
                Plan your trip
              </Button>
            </div>
          </div>

          {/* Hero Image */}
          <div className="mt-16">
            <div className="relative h-96 md:h-[500px] rounded-lg overflow-hidden">
              <Image
                src="/placeholder.svg?height=500&width=1200"
                alt="Happy tourists exploring world landmarks"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Popular Destinations */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">Popular Destinations</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Discover amazing destinations with our tourist visa services
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {destinations.map((destination, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div className="relative h-64">
                  <Image
                    src={destination.image || "/placeholder.svg"}
                    alt={destination.name}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-2xl font-bold">{destination.name}</h3>
                  </div>
                </div>
                <CardContent className="p-6">
                  <p className="text-slate-600 mb-4">{destination.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {destination.highlights.map((highlight, idx) => (
                      <Badge key={idx} variant="outline" className="text-slate-700">
                        {highlight}
                      </Badge>
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
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">Tourist Visa Services</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              We provide tourist visa services for major destinations worldwide
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
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">Our Tourist Visa Process</h2>
            <p className="text-xl text-slate-600">From planning to passport stamping</p>
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
                Essential documents for tourist visa applications. Requirements may vary by destination and purpose of
                visit.
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
                alt="Tourist visa document requirements"
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Our Tourist Visa Services?</h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Complete travel support from visa application to your return
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Explore the World?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Let us handle your tourist visa application while you plan your perfect trip. Contact us today to get
            started.
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
              Get Free Consultation
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
