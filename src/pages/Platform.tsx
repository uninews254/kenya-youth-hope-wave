import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Briefcase, GraduationCap, Shield, Sprout, Rocket, ArrowRight, Users, Target } from "lucide-react";

const Platform = () => {
  const platformItems = [
    {
      icon: Briefcase,
      title: "Youth Jobs & Employment",
      subtitle: "Creating 10,000 opportunities in 5 years",
      description: "Launch comprehensive job creation programs targeting youth unemployment through skills training, entrepreneurship support, and partnerships with private sector.",
      goals: [
        "Establish 5 skills training centers in the constituency",
        "Partner with 100+ local businesses for internship programs",
        "Create youth-led cooperatives in agriculture and technology",
        "Launch digital marketplace for youth entrepreneurs"
      ],
      color: "hope"
    },
    {
      icon: GraduationCap,
      title: "Quality Education for All",
      subtitle: "Investing in our future leaders",
      description: "Ensure every child has access to quality education from primary to tertiary level, with focus on digital literacy and practical skills.",
      goals: [
        "Renovate and equip 20 primary schools with modern facilities",
        "Establish computer labs in all secondary schools",
        "Provide scholarships for 500 needy students annually",
        "Launch adult literacy programs for parents"
      ],
      color: "trust"
    },
    {
      icon: Shield,
      title: "Clean Leadership & Governance",
      subtitle: "Transparency in every decision",
      description: "Implement highest standards of accountability, transparency, and ethical leadership in all government operations and community projects.",
      goals: [
        "Publish monthly progress reports on all projects",
        "Establish citizen oversight committees",
        "Create digital platform for budget transparency",
        "Hold quarterly public accountability sessions"
      ],
      color: "youth"
    },
    {
      icon: Sprout,
      title: "Modern Agriculture Support",
      subtitle: "Empowering our farmers",
      description: "Support smallholder farmers with modern techniques, access to markets, and financial services to increase productivity and income.",
      goals: [
        "Introduce smart farming techniques to 1,000 farmers",
        "Establish farmers' market and storage facilities",
        "Facilitate access to affordable agricultural credit",
        "Launch value addition training programs"
      ],
      color: "hope"
    },
    {
      icon: Rocket,
      title: "Hustle & Business Support",
      subtitle: "Unleashing entrepreneurial potential",
      description: "Create an ecosystem that supports small businesses, street vendors, and young entrepreneurs with access to capital, training, and markets.",
      goals: [
        "Launch constituency business incubator",
        "Establish micro-finance programs for small businesses",
        "Create digital platform connecting businesses to customers",
        "Organize monthly business networking events"
      ],
      color: "trust"
    }
  ];

  const getColorClasses = (color: string) => {
    switch (color) {
      case "hope":
        return "text-hope border-hope bg-hope/5";
      case "trust":
        return "text-trust border-trust bg-trust/5";
      case "youth":
        return "text-youth border-youth bg-youth/5";
      default:
        return "text-hope border-hope bg-hope/5";
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 gradient-hero text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge className="mb-6 bg-white/20 text-white border-white">
            <Target className="h-4 w-4 mr-2" />
            Our Platform
          </Badge>
          <h1 className="font-montserrat font-bold text-4xl md:text-5xl mb-6">
            Five Pillars for Transformative Change
          </h1>
          <p className="text-xl leading-relaxed max-w-3xl mx-auto">
            Our comprehensive platform addresses the core challenges facing our constituency 
            with practical, youth-driven solutions that deliver real results.
          </p>
        </div>
      </section>

      {/* Platform Overview */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-16">
            {platformItems.map((item, index) => (
              <Card key={index} className={`group hover:shadow-lg transition-all duration-300 hover:scale-105 animate-slide-up ${getColorClasses(item.color)}`} style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="p-6 text-center">
                  <item.icon className={`h-12 w-12 mx-auto mb-4 text-${item.color}`} />
                  <h3 className="font-raleway font-semibold text-lg mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.subtitle}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Platform Items */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {platformItems.map((item, index) => (
              <div key={index} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                <div className={`animate-fade-in ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <Badge className={`mb-4 ${getColorClasses(item.color)}`}>
                    <item.icon className="h-4 w-4 mr-2" />
                    Pillar {index + 1}
                  </Badge>
                  <h2 className="font-montserrat font-bold text-3xl md:text-4xl mb-4">
                    {item.title}
                  </h2>
                  <p className="campaign-subheading text-lg text-gray-600 mb-6">
                    {item.subtitle}
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-8">
                    {item.description}
                  </p>
                  <Button className={`btn-${item.color} font-raleway`}>
                    Learn More
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Button>
                </div>
                
                <div className={`animate-slide-up ${index % 2 === 1 ? 'lg:order-1' : ''}`} style={{ animationDelay: '0.2s' }}>
                  <Card className="shadow-lg">
                    <CardHeader>
                      <CardTitle className="font-raleway text-xl">Key Goals & Targets</CardTitle>
                    </CardHeader>
                    <CardContent className="p-6">
                      <ul className="space-y-4">
                        {item.goals.map((goal, goalIndex) => (
                          <li key={goalIndex} className="flex items-start space-x-3">
                            <div className={`w-2 h-2 rounded-full bg-${item.color} mt-2 flex-shrink-0`}></div>
                            <span className="text-gray-700">{goal}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Implementation Timeline */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-montserrat font-bold text-3xl md:text-4xl mb-4">
              Implementation Timeline
            </h2>
            <p className="campaign-subheading text-lg text-gray-600">
              Our 5-year roadmap for delivering real change
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {[
              { year: "Year 1", focus: "Foundation & Planning", desc: "Establish structures and partnerships" },
              { year: "Year 2", focus: "Skills & Education", desc: "Launch training centers and school upgrades" },
              { year: "Year 3", focus: "Job Creation", desc: "Deploy employment programs and business support" },
              { year: "Year 4", focus: "Agriculture & Growth", desc: "Expand farming programs and market access" },
              { year: "Year 5", focus: "Consolidation", desc: "Evaluate, expand successful programs" }
            ].map((phase, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-hope rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="font-montserrat font-bold text-white text-sm">{index + 1}</span>
                  </div>
                  <h3 className="font-raleway font-semibold text-lg mb-2 text-trust">{phase.year}</h3>
                  <h4 className="font-raleway font-medium text-hope mb-2">{phase.focus}</h4>
                  <p className="text-gray-600 text-sm">{phase.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 gradient-cta text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-montserrat font-bold text-3xl md:text-4xl mb-6">
            Ready to Make This Vision Reality?
          </h2>
          <p className="text-xl mb-8 leading-relaxed">
            Our platform is more than promises - it's a detailed roadmap for change. 
            Join us in making these transformative ideas a reality for our constituency.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-trust hover:bg-gray-100 font-raleway font-semibold">
              <Users className="h-5 w-5 mr-2" />
              Join Our Campaign
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-trust font-raleway font-semibold">
              Download Full Manifesto
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Platform;