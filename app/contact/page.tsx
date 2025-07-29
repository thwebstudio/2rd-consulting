"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Phone, Mail, MapPin, Clock, Send, MessageSquare, Calendar, Users, CheckCircle } from "lucide-react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log("Form submitted:", formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const contactInfo = [
    {
      icon: <Phone className="h-6 w-6 text-amber-500" />,
      title: "Phone",
      details: ["+234 215 885 521", "Available 24/7"],
      action: "Call Now",
    },
    {
      icon: <Mail className="h-6 w-6 text-amber-500" />,
      title: "Email",
      details: ["2rdconsultingassociate@gmail.com", "Response within 24 hours"],
      action: "Send Email",
    },
    {
      icon: <MessageSquare className="h-6 w-6 text-amber-500" />,
      title: "WhatsApp",
      details: ["+234 215 885 521", "Instant messaging support"],
      action: "Chat Now",
    },
  ]

  const offices = [
    {
      city: "Lagos",
      address: "33 Alfred Rewane Road, Ikoyi, Lagos, Nigeria",
      hours: "Monday - Friday: 9:00 AM - 6:00 PM",
      phone: "+234 215 885 521",
      isMain: true,
    },
    {
      city: "Abuja",
      address: "Federal Capital Territory, Abuja, Nigeria",
      hours: "Monday - Friday: 9:00 AM - 6:00 PM",
      phone: "+234 215 885 521",
      isMain: false,
    },
    {
      city: "United Kingdom",
      address: "UK Office - European Operations",
      hours: "Monday - Friday: 9:00 AM - 5:00 PM GMT",
      phone: "UK Contact Available",
      isMain: false,
    },
  ]

  const services = [
    "Work Visa Application",
    "Study Visa Application",
    "Tourist Visa Application",
    "Permanent Residency",
    "Corporate Mobility",
    "Document Services",
    "General Inquiry",
  ]

  const faqs = [
    {
      question: "How long does the visa application process take?",
      answer:
        "Processing times vary by country and visa type, typically ranging from 2-12 weeks. We provide estimated timelines during consultation.",
    },
    {
      question: "Do you offer free consultations?",
      answer:
        "Yes, we offer free initial consultations to assess your needs and determine the best visa pathway for your situation.",
    },
    {
      question: "What documents do I need for my visa application?",
      answer:
        "Document requirements vary by visa type and destination country. We provide a comprehensive checklist during your consultation.",
    },
    {
      question: "Can you help with urgent visa applications?",
      answer:
        "Yes, we offer expedited processing services for urgent applications, subject to embassy availability and additional fees.",
    },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 to-slate-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="bg-amber-500 text-white mb-4">Get In Touch</Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Contact
              <span className="text-amber-400"> Us</span>
            </h1>
            <p className="text-xl text-blue-100 mb-8">
              Ready to start your immigration journey? Our expert team is here to help you every step of the way.
              Contact us for a free consultation.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">Get In Touch With Us</h2>
            <p className="text-xl text-slate-600">Multiple ways to reach our immigration experts</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {contactInfo.map((info, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-8">
                  <div className="flex justify-center mb-4">{info.icon}</div>
                  <h3 className="text-xl font-bold text-slate-800 mb-3">{info.title}</h3>
                  <div className="space-y-1 mb-4">
                    {info.details.map((detail, idx) => (
                      <p key={idx} className={idx === 0 ? "font-semibold text-slate-800" : "text-slate-600 text-sm"}>
                        {detail}
                      </p>
                    ))}
                  </div>
                  <Button className="bg-blue-900 hover:bg-blue-800">{info.action}</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Office Info */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-slate-800 mb-6">Send Us a Message</h2>
              <Card>
                <CardContent className="p-8">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">
                          Full Name *
                        </label>
                        <Input
                          id="name"
                          name="name"
                          type="text"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Enter your full name"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                          Email Address *
                        </label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="Enter your email"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-2">
                          Phone Number
                        </label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="Enter your phone number"
                        />
                      </div>
                      <div>
                        <label htmlFor="service" className="block text-sm font-medium text-slate-700 mb-2">
                          Service Needed *
                        </label>
                        <select
                          id="service"
                          name="service"
                          required
                          value={formData.service}
                          onChange={handleChange}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                          <option value="">Select a service</option>
                          {services.map((service, index) => (
                            <option key={index} value={service}>
                              {service}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">
                        Message *
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        required
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell us about your immigration needs..."
                        rows={5}
                      />
                    </div>

                    <Button type="submit" size="lg" className="w-full bg-amber-500 hover:bg-amber-600">
                      Send Message
                      <Send className="ml-2 h-5 w-5" />
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Office Locations */}
            <div>
              <h2 className="text-3xl font-bold text-slate-800 mb-6">Our Office Locations</h2>
              <div className="space-y-6">
                {offices.map((office, index) => (
                  <Card key={index} className={office.isMain ? "border-amber-500 border-2" : ""}>
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <CardTitle className="text-xl text-slate-800">{office.city} Office</CardTitle>
                        {office.isMain && <Badge className="bg-amber-500 text-white">Main Office</Badge>}
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        <div className="flex items-start space-x-3">
                          <MapPin className="h-5 w-5 text-amber-500 mt-1 flex-shrink-0" />
                          <p className="text-slate-600">{office.address}</p>
                        </div>
                        <div className="flex items-center space-x-3">
                          <Clock className="h-5 w-5 text-amber-500 flex-shrink-0" />
                          <p className="text-slate-600">{office.hours}</p>
                        </div>
                        <div className="flex items-center space-x-3">
                          <Phone className="h-5 w-5 text-amber-500 flex-shrink-0" />
                          <p className="text-slate-600">{office.phone}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-slate-600">Quick answers to common questions about our services</p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold text-slate-800 mb-3">{faq.question}</h3>
                  <p className="text-slate-600">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose 2RD Consulting Associates?</h2>
            <p className="text-xl text-blue-100">Your trusted partner in immigration success</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <Users className="h-12 w-12 text-amber-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Expert Team</h3>
              <p className="text-blue-100">Certified immigration consultants with years of experience</p>
            </div>
            <div className="text-center">
              <CheckCircle className="h-12 w-12 text-amber-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">High Success Rate</h3>
              <p className="text-blue-100">Proven track record of successful visa applications</p>
            </div>
            <div className="text-center">
              <Clock className="h-12 w-12 text-amber-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">24/7 Support</h3>
              <p className="text-blue-100">Round-the-clock assistance for all your queries</p>
            </div>
            <div className="text-center">
              <MapPin className="h-12 w-12 text-amber-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Global Presence</h3>
              <p className="text-blue-100">Offices in Lagos, Abuja, and the United Kingdom</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-amber-500 to-amber-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Start Your Immigration Journey?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Don't wait any longer. Contact us today for a free consultation and take the first step towards achieving
            your immigration goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-amber-600 hover:bg-slate-100">
              <Calendar className="mr-2 h-5 w-5" />
              Book Free Consultation
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-amber-600 bg-transparent"
            >
              <Phone className="mr-2 h-5 w-5" />
              Call Now
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
