import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Heart, Users, Megaphone, Download, Phone, MessageCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const GetInvolved = () => {
  const [volunteerForm, setVolunteerForm] = useState({
    name: "",
    email: "",
    phone: "",
    skills: "",
    availability: "",
    motivation: ""
  });
  const [donationAmount, setDonationAmount] = useState(1000);
  const { toast } = useToast();

  const handleVolunteerSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Thank you for volunteering!",
      description: "We'll be in touch within 24 hours to get you started.",
    });
    setVolunteerForm({
      name: "",
      email: "",
      phone: "",
      skills: "",
      availability: "",
      motivation: ""
    });
  };

  const handleDonation = (amount: number) => {
    // Simulate MPESA payment flow
    toast({
      title: "MPESA Payment Initiated",
      description: `Please complete payment of KSH ${amount.toLocaleString()} on your phone.`,
    });
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 gradient-cta text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge className="mb-6 bg-white/20 text-white border-white">
            <Users className="h-4 w-4 mr-2" />
            Get Involved
          </Badge>
          <h1 className="font-montserrat font-bold text-4xl md:text-5xl mb-6">
            Be the Change You Want to See
          </h1>
          <p className="text-xl leading-relaxed max-w-3xl mx-auto">
            Every movement starts with individuals who dare to act. Join thousands of young Kenyans 
            who are choosing to be part of the solution. Your time, skills, and support can change everything.
          </p>
        </div>
      </section>

      {/* Ways to Get Involved */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-montserrat font-bold text-3xl md:text-4xl mb-4">
              How You Can Make a Difference
            </h2>
            <p className="campaign-subheading text-lg text-gray-600">
              Multiple ways to contribute to our movement
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {[
              {
                icon: Users,
                title: "Volunteer",
                description: "Join our ground team for voter registration, community outreach, and event support.",
                action: "Sign up to volunteer",
                color: "hope"
              },
              {
                icon: Heart,
                title: "Donate",
                description: "Support our campaign with financial contributions to fund our community programs.",
                action: "Make a donation",
                color: "trust"
              },
              {
                icon: Megaphone,
                title: "Spread the Word",
                description: "Share our message on social media and in your community. Every voice amplifies our impact.",
                action: "Download materials",
                color: "youth"
              }
            ].map((way, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:scale-105 animate-slide-up" style={{ animationDelay: `${index * 0.2}s` }}>
                <CardContent className="p-8 text-center">
                  <way.icon className={`h-16 w-16 mx-auto mb-6 text-${way.color}`} />
                  <h3 className="font-raleway font-semibold text-xl mb-4">{way.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{way.description}</p>
                  <Button className={`btn-${way.color} font-raleway`}>
                    {way.action}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Volunteer Form */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="animate-fade-in">
              <h2 className="font-montserrat font-bold text-3xl mb-6">Join Our Volunteer Team</h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Our volunteers are the heart of our movement. Whether you have 2 hours a week or 20, 
                there's a role for you in building the change we need.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-hope rounded-full flex items-center justify-center flex-shrink-0">
                    <Users className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-raleway font-semibold text-lg mb-2">Community Outreach</h4>
                    <p className="text-gray-600">Door-to-door campaigns, voter registration drives, community meetings</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-trust rounded-full flex items-center justify-center flex-shrink-0">
                    <Megaphone className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-raleway font-semibold text-lg mb-2">Digital Campaigns</h4>
                    <p className="text-gray-600">Social media management, content creation, online engagement</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-youth rounded-full flex items-center justify-center flex-shrink-0">
                    <Heart className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-raleway font-semibold text-lg mb-2">Event Support</h4>
                    <p className="text-gray-600">Rally organization, logistics, crowd management, hospitality</p>
                  </div>
                </div>
              </div>
            </div>

            <Card className="animate-slide-up" style={{ animationDelay: '0.3s' }}>
              <CardHeader>
                <CardTitle className="font-raleway text-2xl">Volunteer Registration</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleVolunteerSubmit} className="space-y-4">
                  <div>
                    <Label htmlFor="name">Full Name</Label>
                    <Input
                      id="name"
                      value={volunteerForm.name}
                      onChange={(e) => setVolunteerForm({...volunteerForm, name: e.target.value})}
                      placeholder="Your full name"
                      required
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="email">Email Address</Label>
                    <Input
                      id="email"
                      type="email"
                      value={volunteerForm.email}
                      onChange={(e) => setVolunteerForm({...volunteerForm, email: e.target.value})}
                      placeholder="your.email@example.com"
                      required
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      value={volunteerForm.phone}
                      onChange={(e) => setVolunteerForm({...volunteerForm, phone: e.target.value})}
                      placeholder="+254 700 000 000"
                      required
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="skills">Skills & Experience</Label>
                    <Textarea
                      id="skills"
                      value={volunteerForm.skills}
                      onChange={(e) => setVolunteerForm({...volunteerForm, skills: e.target.value})}
                      placeholder="Tell us about your relevant skills, experience, or interests"
                      rows={3}
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="availability">Availability</Label>
                    <Textarea
                      id="availability"
                      value={volunteerForm.availability}
                      onChange={(e) => setVolunteerForm({...volunteerForm, availability: e.target.value})}
                      placeholder="When are you available? (days, times, frequency)"
                      rows={2}
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="motivation">Why do you want to volunteer?</Label>
                    <Textarea
                      id="motivation"
                      value={volunteerForm.motivation}
                      onChange={(e) => setVolunteerForm({...volunteerForm, motivation: e.target.value})}
                      placeholder="What motivates you to be part of this movement?"
                      rows={3}
                    />
                  </div>
                  
                  <Button type="submit" className="w-full btn-hope font-raleway">
                    Join Our Team
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Donation Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-montserrat font-bold text-3xl md:text-4xl mb-4">
              Support Our Movement
            </h2>
            <p className="campaign-subheading text-lg text-gray-600 max-w-2xl mx-auto">
              Your donations fund community programs, voter education, and grassroots organizing. 
              Every contribution, big or small, makes a difference.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="animate-fade-in">
              <h3 className="font-raleway font-semibold text-2xl mb-6">Quick Donate via MPESA</h3>
              <div className="grid grid-cols-2 gap-4 mb-8">
                {[500, 1000, 2000, 5000, 10000, 20000].map((amount) => (
                  <Button
                    key={amount}
                    variant={donationAmount === amount ? "default" : "outline"}
                    className={`font-raleway ${donationAmount === amount ? 'btn-trust' : ''}`}
                    onClick={() => setDonationAmount(amount)}
                  >
                    KSH {amount.toLocaleString()}
                  </Button>
                ))}
              </div>
              
              <div className="mb-6">
                <Label htmlFor="customAmount">Custom Amount (KSH)</Label>
                <Input
                  id="customAmount"
                  type="number"
                  value={donationAmount}
                  onChange={(e) => setDonationAmount(Number(e.target.value))}
                  min="100"
                  step="100"
                />
              </div>
              
              <Button 
                onClick={() => handleDonation(donationAmount)}
                className="w-full btn-trust font-raleway text-lg py-3"
              >
                <Phone className="h-5 w-5 mr-2" />
                Donate KSH {donationAmount.toLocaleString()} via MPESA
              </Button>
              
              <p className="text-sm text-gray-500 mt-4 text-center">
                Secure payment powered by MPESA. You'll receive SMS confirmation.
              </p>
            </div>

            <Card className="animate-slide-up" style={{ animationDelay: '0.3s' }}>
              <CardHeader>
                <CardTitle className="font-raleway text-xl">Where Your Money Goes</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {[
                    { category: "Community Programs", percentage: 40, description: "Skills training, education support, youth programs" },
                    { category: "Campaign Operations", percentage: 25, description: "Events, materials, transportation, venues" },
                    { category: "Digital Outreach", percentage: 20, description: "Website, social media, online advertising" },
                    { category: "Administrative", percentage: 15, description: "Legal compliance, financial management" }
                  ].map((item, index) => (
                    <div key={index}>
                      <div className="flex justify-between mb-2">
                        <span className="font-raleway font-medium">{item.category}</span>
                        <span className="text-trust font-semibold">{item.percentage}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
                        <div 
                          className="bg-trust h-2 rounded-full transition-all duration-1000"
                          style={{ width: `${item.percentage}%` }}
                        ></div>
                      </div>
                      <p className="text-sm text-gray-600">{item.description}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Digital Supporter Kit */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-montserrat font-bold text-3xl mb-6">
            Digital Supporter Kit
          </h2>
          <p className="text-gray-600 mb-8 leading-relaxed">
            Download our official campaign materials to share on social media, 
            WhatsApp groups, and with friends and family.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: "Social Media Pack", desc: "Facebook covers, Instagram posts, Twitter headers", format: "ZIP" },
              { title: "WhatsApp Stickers", desc: "Custom stickers and status updates", format: "PNG" },
              { title: "Print Materials", desc: "Posters, flyers, banners for printing", format: "PDF" }
            ].map((kit, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <Download className="h-12 w-12 text-youth mx-auto mb-4" />
                  <h3 className="font-raleway font-semibold text-lg mb-2">{kit.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{kit.desc}</p>
                  <Badge variant="outline" className="mb-4">{kit.format}</Badge>
                  <Button className="w-full btn-youth font-raleway">
                    Download Kit
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact for Involvement */}
      <section className="py-16 gradient-hero text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-montserrat font-bold text-3xl mb-6">
            Ready to Join the Movement?
          </h2>
          <p className="text-xl mb-8 leading-relaxed">
            Have questions about volunteering or want to organize in your area? 
            Our team is here to help you get started.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-trust hover:bg-gray-100 font-raleway font-semibold">
              <MessageCircle className="h-5 w-5 mr-2" />
              WhatsApp Us
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-trust font-raleway font-semibold">
              <Phone className="h-5 w-5 mr-2" />
              Call Campaign Office
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GetInvolved;