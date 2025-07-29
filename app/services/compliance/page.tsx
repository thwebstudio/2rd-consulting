import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Shield, FileText, AlertTriangle, BookOpen } from "lucide-react"

export default function CompliancePage() {
  const services = [
    {
      title: "Legal Compliance Audits",
      description: "Comprehensive review of your immigration compliance status",
      icon: <Shield className="h-8 w-8 text-slate-900" />,
      features: ["Compliance assessment", "Gap analysis", "Risk identification", "Remediation plans"],
    },
    {
      title: "Policy Development",
      description: "Custom immigration policies and procedures for your organization",
      icon: <FileText className="h-8 w-8 text-slate-900" />,
      features: ["Policy creation", "Procedure documentation", "Best practices", "Regular updates"],
    },
    {
      title: "Risk Management",
      description: "Proactive risk assessment and mitigation strategies",
      icon: <AlertTriangle className="h-8 w-8 text-slate-900" />,
      features: ["Risk assessment", "Mitigation strategies", "Monitoring systems", "Emergency protocols"],
    },
    {
      title: "Training Programs",
      description: "Staff training on immigration compliance and best practices",
      icon: <BookOpen className="h-8 w-8 text-slate-900" />,
      features: ["HR training", "Manager workshops", "Compliance updates", "Certification programs"],
    },
  ]

  const complianceAreas = [
    {
      area: "Work Authorization",
      description: "Ensure all employees have proper work authorization",
      requirements: ["I-9 verification", "Document retention", "E-Verify compliance", "Regular audits"],
    },
    {
      area: "Visa Compliance",
      description: "Maintain compliance with visa terms and conditions",
      requirements: ["Status maintenance", "Extension tracking", "Reporting obligations", "Record keeping"],
    },
    {
      area: "Reporting Requirements",
      description: "Meet all government reporting and notification obligations",
      requirements: ["USCIS notifications", "DOL reporting", "Status changes", "Address updates"],
    },
    {
      area: "Record Keeping",
      description: "Maintain proper documentation and records",
      requirements: ["Document retention", "File organization", "Audit trails", "Data security"],
    },
  ]

  const benefits = [
    "Reduced compliance risks",
    "Avoid penalties and fines",
    "Streamlined processes",
    "Expert guidance",
    "Regular updates on law changes",
    "Audit preparation support",
    "Emergency response planning",
    "Cost-effective solutions",
  ]

  const processSteps = [
    {
      step: 1,
      title: "Compliance Assessment",
      description: "Comprehensive review of your current immigration compliance status and practices.",
      duration: "1-2 weeks",
    },
    {
      step: 2,
      title: "Gap Analysis",
      description: "Identify compliance gaps and areas requiring immediate attention or improvement.",
      duration: "3-5 days",
    },
    {
      step: 3,
      title: "Strategy Development",
      description: "Create customized compliance strategy and implementation roadmap.",
      duration: "1 week",
    },
    {
      step: 4,
      title: "Implementation & Monitoring",
      description: "Execute compliance measures and provide ongoing monitoring and support.",
      duration: "Ongoing",
    },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-sm font-medium text-slate-600 mb-4 tracking-wider uppercase">COMPLIANCE MANAGEMENT</p>
              <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6 leading-tight">
                Stay compliant,
                <br />
                avoid risks
              </h1>
            </div>
            <div className="text-right">
              <p className="text-lg text-slate-600 mb-6 max-w-md ml-auto">
                Comprehensive immigration compliance management to protect your business from legal risks and penalties.
              </p>
              <Button size="lg" className="bg-slate-900 hover:bg-slate-800 text-white px-8 py-3">
                Get compliance audit
              </Button>
            </div>
          </div>

          {/* Hero Image */}
          <div className="mt-16">
            <div className="relative h-96 md:h-[500px] rounded-lg overflow-hidden">
              <Image
                src="/placeholder.svg?height=500&width=1200"
                alt="Business compliance and legal documentation"
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
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">Compliance Services</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Comprehensive compliance management solutions for your business
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

      {/* Compliance Areas */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">Key Compliance Areas</h2>
            <p className="text-xl text-slate-600">Critical areas requiring ongoing compliance management</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {complianceAreas.map((area, index) => (
              <Card key={index} className="border-l-4 border-l-amber-500">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-slate-800 mb-3">{area.area}</h3>
                  <p className="text-slate-600 mb-4">{area.description}</p>
                  <div className="space-y-2">
                    {area.requirements.map((req, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-600" />
                        <span className="text-sm text-slate-700">{req}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">Our Compliance Process</h2>
            <p className="text-xl text-slate-600">Systematic approach to immigration compliance management</p>
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Benefits of Compliance Management</h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Protect your business with proactive compliance management
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Protect Your Business Today</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Don't wait for compliance issues to arise. Get a comprehensive compliance audit and protect your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-amber-600 hover:bg-slate-100">
              Schedule Compliance Audit
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
