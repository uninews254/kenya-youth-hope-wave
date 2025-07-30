import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Phone, Mail, MapPin, MessageCircle, Clock, Facebook, Twitter, Instagram, Youtube } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [contactForm, setContactForm] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    category: "general"
  });

  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message sent successfully!",
      description: "Thank you for reaching out. We'll respond within 24 hours.",
    });
    setContactForm({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
      category: "general"
    });
  };

  const handleWhatsApp = () => {
    const phoneNumber = "+254700000000";
    const message = "Hi! I'd like to get in touch with the Hope Wave campaign.";
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 gradient-hero text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge className="mb-6 bg-white/20 text-white border-white">
            <MessageCircle className="h-4 w-4 mr-2" />
            Get in Touch
          </Badge>
          <h1 className="font-montserrat font-bold text-4xl md:text-5xl mb-6">
            We Want to Hear From You
          </h1>
          <p className="text-xl leading-relaxed max-w-3xl mx-auto">
            Your voice matters. Whether you have questions, ideas, concerns, or want to share your story, 
            we're here to listen and respond. Let's build this movement together.
          </p>
        </div>
      </section>

      {/* Quick Contact Methods */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {[
              {
                icon: Phone,
                title: "Call Us",
                description: "Speak directly with our team",
                contact: "+254 700 000 000",
                action: "Call Now",
                color: "hope"
              },
              {
                icon: MessageCircle,
                title: "WhatsApp",
                description: "Quick chat on WhatsApp",
                contact: "Available 24/7",
                action: "Chat Now",
                color: "green-500"
              },
              {
                icon: Mail,
                title: "Email",
                description: "Send us a detailed message",
                contact: "info@hopewave2027.ke",
                action: "Email Us",
                color: "trust"
              },
              {
                icon: MapPin,
                title: "Visit Office",
                description: "Drop by our campaign office",
                contact: "Nairobi, Kenya",
                action: "Get Directions",
                color: "youth"
              }
            ].map((method, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:scale-105 animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="p-6 text-center">
                  <method.icon className={`h-12 w-12 mx-auto mb-4 text-${method.color}`} />
                  <h3 className="font-raleway font-semibold text-lg mb-2">{method.title}</h3>
                  <p className="text-gray-600 text-sm mb-2">{method.description}</p>
                  <p className={`font-medium text-${method.color} mb-4`}>{method.contact}</p>
                  <Button 
                    size="sm" 
                    className={`btn-${method.color} font-raleway`}
                    onClick={method.title === "WhatsApp" ? handleWhatsApp : undefined}
                  >
                    {method.action}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="animate-fade-in">
              <CardHeader>
                <CardTitle className="font-montserrat text-2xl">Send Us a Message</CardTitle>
                <p className="text-gray-600">
                  We read every message personally and respond within 24 hours.
                </p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        value={contactForm.name}
                        onChange={(e) => setContactForm({...contactForm, name: e.target.value})}
                        placeholder="Your full name"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={contactForm.email}
                        onChange={(e) => setContactForm({...contactForm, email: e.target.value})}
                        placeholder="your.email@example.com"
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        value={contactForm.phone}
                        onChange={(e) => setContactForm({...contactForm, phone: e.target.value})}
                        placeholder="+254 700 000 000"
                      />
                    </div>
                    <div>
                      <Label htmlFor="category">Category</Label>
                      <select
                        id="category"
                        value={contactForm.category}
                        onChange={(e) => setContactForm({...contactForm, category: e.target.value})}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-hope"
                      >
                        <option value="general">General Inquiry</option>
                        <option value="volunteer">Volunteering</option>
                        <option value="donation">Donations</option>
                        <option value="media">Media & Press</option>
                        <option value="policy">Policy Questions</option>
                        <option value="support">Support</option>
                      </select>
                    </div>
                  </div>
                  
                  <div>
                    <Label htmlFor="subject">Subject *</Label>
                    <Input
                      id="subject"
                      value={contactForm.subject}
                      onChange={(e) => setContactForm({...contactForm, subject: e.target.value})}
                      placeholder="What's this about?"
                      required
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      value={contactForm.message}
                      onChange={(e) => setContactForm({...contactForm, message: e.target.value})}
                      placeholder="Tell us what's on your mind..."
                      rows={5}
                      required
                    />
                  </div>
                  
                  <Button type="submit" className="w-full btn-trust font-raleway text-lg py-3">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-8 animate-slide-up" style={{ animationDelay: '0.3s' }}>
              {/* Office Hours */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2 font-raleway">
                    <Clock className="h-5 w-5 text-trust" />
                    <span>Office Hours</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex justify-between">
                    <span>Monday - Friday</span>
                    <span className="font-semibold">8:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday</span>
                    <span className="font-semibold">9:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span className="font-semibold">Closed</span>
                  </div>
                  <div className="pt-2 text-sm text-gray-600">
                    <strong>WhatsApp:</strong> Available 24/7 for urgent matters
                  </div>
                </CardContent>
              </Card>

              {/* Campaign Office */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2 font-raleway">
                    <MapPin className="h-5 w-5 text-youth" />
                    <span>Campaign Office</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <p className="font-semibold">Hope Wave Campaign Headquarters</p>
                    <p>Kimathi Street, Nairobi CBD</p>
                    <p>P.O. Box 12345-00100</p>
                    <p>Nairobi, Kenya</p>
                  </div>
                  <Button className="mt-4 w-full btn-youth font-raleway">
                    <MapPin className="h-4 w-4 mr-2" />
                    Get Directions
                  </Button>
                </CardContent>
              </Card>

              {/* Social Media */}
              <Card>
                <CardHeader>
                  <CardTitle className="font-raleway">Follow Our Journey</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    Stay connected with daily updates, behind-the-scenes content, and live coverage of our events.
                  </p>
                  <div className="grid grid-cols-2 gap-3">
                    {[
                      { icon: Facebook, name: "Facebook", handle: "@HopeWave2027", color: "blue-600" },
                      { icon: Twitter, name: "Twitter", handle: "@HopeWave2027", color: "blue-400" },
                      { icon: Instagram, name: "Instagram", handle: "@hopewave2027", color: "pink-500" },
                      { icon: Youtube, name: "YouTube", handle: "Hope Wave Campaign", color: "red-600" }
                    ].map((social, index) => (
                      <a
                        key={index}
                        href="#"
                        className={`flex items-center space-x-2 p-3 rounded-lg border hover:bg-gray-50 transition-colors text-${social.color}`}
                      >
                        <social.icon className="h-5 w-5" />
                        <div>
                          <div className="font-medium text-sm">{social.name}</div>
                          <div className="text-xs text-gray-500">{social.handle}</div>
                        </div>
                      </a>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-montserrat font-bold text-3xl mb-4">
              Frequently Asked Questions
            </h2>
            <p className="campaign-subheading text-gray-600">
              Quick answers to common questions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                question: "How can I volunteer for the campaign?",
                answer: "Fill out our volunteer form or contact us directly. We have roles for all skill levels and time commitments."
              },
              {
                question: "How do I donate to support the campaign?",
                answer: "You can donate securely via MPESA using the donation options on our Get Involved page."
              },
              {
                question: "When are the next community events?",
                answer: "Check our Events page for the latest schedule. We hold regular town halls and community meetings."
              },
              {
                question: "How can I register to vote?",
                answer: "We can help you register! Contact us or attend one of our voter registration drives."
              },
              {
                question: "What is your position on [specific issue]?",
                answer: "Check our Platform page for detailed policy positions, or contact us for specific questions."
              },
              {
                question: "How can my organization partner with you?",
                answer: "We welcome partnerships! Email us with details about your organization and collaboration ideas."
              }
            ].map((faq, index) => (
              <Card key={index} className="animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="p-6">
                  <h3 className="font-raleway font-semibold text-lg mb-2 text-trust">
                    {faq.question}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency Contact */}
      <section className="py-12 bg-red-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-montserrat font-bold text-2xl mb-4">
            Urgent or Time-Sensitive Matters?
          </h2>
          <p className="text-lg mb-6">
            For urgent campaign matters, media inquiries, or time-sensitive issues, 
            contact us immediately via WhatsApp or call our emergency line.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={handleWhatsApp}
              className="bg-green-500 hover:bg-green-600 font-raleway font-semibold"
            >
              <MessageCircle className="h-4 w-4 mr-2" />
              WhatsApp Emergency Line
            </Button>
            <Button 
              className="bg-white text-red-600 hover:bg-gray-100 font-raleway font-semibold"
            >
              <Phone className="h-4 w-4 mr-2" />
              Call Emergency Line
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;