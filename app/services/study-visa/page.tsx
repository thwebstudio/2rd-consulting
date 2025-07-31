import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Clock } from "lucide-react";

export default function StudyVisaPage() {
  const countries = [
    {
      name: "United Kingdom",
      visaTypes: [
        "Student Visa (Tier 4)",
        "Short-term Study Visa",
        "Child Student Visa",
        "Graduate Route",
      ],
      processingTime: "3-8 weeks",
      image: "/uk.jpg",
    },
    {
      name: "United States",
      visaTypes: [
        "F-1 Student Visa",
        "M-1 Vocational Visa",
        "J-1 Exchange Visa",
        "OPT/CPT Extensions",
      ],
      processingTime: "2-6 months",
      image: "/us.jpg",
    },
    {
      name: "Canada",
      visaTypes: [
        "Study Permit",
        "Co-op Work Permit",
        "Post-Graduate Work Permit",
        "Quebec Student Visa",
      ],
      processingTime: "4-12 weeks",
      image: "/ca.jpg",
    },
    {
      name: "Australia",
      visaTypes: [
        "Student Visa (500)",
        "Guardian Visa (590)",
        "Training Visa (407)",
        "Graduate Visa (485)",
      ],
      processingTime: "4-8 weeks",
      image: "/aus.jpg",
    },
  ];

  const requirements = [
    "Valid passport with minimum 6 months validity",
    "Letter of acceptance from educational institution",
    "Academic transcripts and certificates",
    "English language proficiency test results (IELTS/TOEFL)",
    "Financial proof and bank statements",
    "Medical examination reports",
    "Police clearance certificates",
    "Statement of purpose/Personal statement",
    "Passport-sized photographs",
    "Completed visa application forms",
  ];

  const processSteps = [
    {
      step: 1,
      title: "University Selection & Application",
      description:
        "We help you choose the right institution and course, and assist with university applications.",
      duration: "2-4 weeks",
    },
    {
      step: 2,
      title: "Document Preparation",
      description:
        "Comprehensive preparation of all required documents including academic and financial records.",
      duration: "1-2 weeks",
    },
    {
      step: 3,
      title: "Visa Application Submission",
      description:
        "Professional submission of your student visa application with embassy follow-up.",
      duration: "1-3 days",
    },
    {
      step: 4,
      title: "Pre-Departure Support",
      description:
        "Accommodation assistance, travel arrangements, and orientation support.",
      duration: "Ongoing",
    },
  ];

  const benefits = [
    "University selection guidance",
    "Course recommendation based on career goals",
    "Scholarship and funding assistance",
    "English language test preparation",
    "Visa interview coaching",
    "Accommodation arrangement support",
    "Pre-departure orientation",
    "Post-arrival settlement assistance",
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-sm font-medium text-slate-600 mb-4 tracking-wider uppercase">
                STUDY VISA SERVICES
              </p>
              <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6 leading-tight">
                Study abroad,
                <br />
                achieve your dreams
              </h1>
            </div>
            <div className="text-right">
              <p className="text-lg text-slate-600 mb-6 max-w-md ml-auto">
                Expert guidance for student visa applications worldwide. We help
                you secure admission and visa for your dream university.
              </p>
              <Button
                size="lg"
                className="bg-slate-900 hover:bg-slate-800 text-white px-8 py-3"
              >
                Start your application
              </Button>
            </div>
          </div>

          {/* Hero Image */}
          <div className="mt-16">
            <div className="relative h-96 md:h-[500px] rounded-lg overflow-hidden">
              <Image
                src="/hero3.jpg"
                alt="Students studying abroad at university campus"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Countries We Serve */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
              Study Destinations
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              We provide student visa services for top educational destinations
              worldwide
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
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
              Our Study Visa Process
            </h2>
            <p className="text-xl text-slate-600">
              From university selection to visa approval
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {processSteps.map((step, index) => (
              <div key={index} className="flex items-start mb-8 last:mb-0">
                <div className="flex-shrink-0 w-16 h-16 bg-slate-900 text-white rounded-full flex items-center justify-center text-xl font-bold mr-6">
                  {step.step}
                </div>
                <div className="flex-grow bg-white p-6 rounded-lg shadow-sm border">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold text-slate-800">
                      {step.title}
                    </h3>
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
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6">
                Document Requirements
              </h2>
              <p className="text-lg text-slate-600 mb-8">
                Essential documents needed for student visa applications.
                Requirements may vary by country and institution.
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
                src="/sv.jpg"
                alt="Student visa document requirements"
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Choose Our Study Visa Services?
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Comprehensive support for your educational journey abroad
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Study Abroad?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Let us help you achieve your educational dreams. Contact us today
            for expert guidance on your study visa application.
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
    </div>
  );
}
