import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, Users, Target, Heart, ArrowRight, Play, Calendar } from "lucide-react";
import heroCandidate from "@/assets/hero-candidate.jpg";
import votingPattern from "@/assets/voting-pattern.jpg";

const Home = () => {
  const [timeToElection, setTimeToElection] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const electionDate = new Date("2027-08-09T06:00:00Z"); // Kenya general election date

    const updateCountdown = () => {
      const now = new Date();
      const diff = electionDate.getTime() - now.getTime();

      if (diff > 0) {
        setTimeToElection({
          days: Math.floor(diff / (1000 * 60 * 60 * 24)),
          hours: Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((diff % (1000 * 60)) / 1000),
        });
      }
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section 
        className="relative min-h-screen flex items-center justify-center text-white"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(${heroCandidate})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center animate-fade-in">
          <Badge className="mb-6 bg-hope/20 text-hope border-hope">
            <Calendar className="h-4 w-4 mr-2" />
            Election 2027
          </Badge>
          
          <h1 className="font-montserrat font-bold text-4xl md:text-6xl lg:text-7xl mb-6 leading-tight">
            Muchanga Kiragu — Kikuyu Constituency MP 2027
          </h1>
          
          <p className="campaign-slogan text-xl md:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto leading-relaxed">
            Mungu mbele • Ngai mbere • God First. Join Muchanga Kiragu's movement for youth empowerment, jobs, education, and clean leadership.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button size="lg" className="btn-hope text-lg px-8 py-4 font-raleway font-semibold">
              <Users className="h-5 w-5 mr-2" />
              Register to Vote
            </Button>
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-black text-lg px-8 py-4 font-raleway font-semibold">
              <Play className="h-5 w-5 mr-2" />
              Watch Our Vision
            </Button>
          </div>

          {/* Voice Note from Candidate */}
          <div className="bg-white/10 backdrop-blur-md rounded-lg p-4 inline-flex items-center space-x-3 mb-8">
            <Button size="sm" className="btn-youth rounded-full">
              <Play className="h-4 w-4" />
            </Button>
            <span className="font-raleway text-sm">Voice Note from the Candidate</span>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Election Countdown */}
      <section className="py-16 bg-gradient-to-r from-hope to-trust text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-montserrat font-bold text-3xl mb-8">Election Countdown</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
            {[
              { label: "Days", value: timeToElection.days },
              { label: "Hours", value: timeToElection.hours },
              { label: "Minutes", value: timeToElection.minutes },
              { label: "Seconds", value: timeToElection.seconds },
            ].map((item, index) => (
              <div key={index} className="bg-white/20 rounded-lg p-4 backdrop-blur-sm">
                <div className="font-montserrat font-bold text-2xl md:text-4xl">{item.value}</div>
                <div className="font-raleway text-sm md:text-base">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Platform Preview */}
      <section 
        className="py-20 relative"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.95), rgba(255,255,255,0.95)), url(${votingPattern})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-montserrat font-bold text-3xl md:text-4xl mb-4 text-gray-900">
              Our Platform for Change
            </h2>
            <p className="campaign-subheading text-lg text-gray-600 max-w-2xl mx-auto">
              Five key pillars that will transform our constituency and empower the youth
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {[
              { icon: "💼", title: "Youth Jobs", desc: "Creating 10,000 new opportunities" },
              { icon: "🎓", title: "Education", desc: "Quality learning for all" },
              { icon: "🧹", title: "Clean Leadership", desc: "Transparency and accountability" },
              { icon: "🌾", title: "Agriculture", desc: "Supporting local farmers" },
              { icon: "🚀", title: "Hustle Support", desc: "Empowering entrepreneurs" },
            ].map((item, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:scale-105 animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="p-6 text-center">
                  <div className="text-4xl mb-4">{item.icon}</div>
                  <h3 className="font-raleway font-semibold text-lg mb-2 text-hope">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button className="btn-trust font-raleway">
              View Full Platform
              <ArrowRight className="h-4 w-4 ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 gradient-cta text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-montserrat font-bold text-3xl md:text-4xl mb-6">
            Be the Change You Want to See
          </h2>
          <p className="campaign-subheading text-xl mb-12 max-w-2xl mx-auto">
            Every vote counts. Every voice matters. Join thousands of young Kenyans 
            who are choosing hope over fear, progress over stagnation.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {[
              { icon: Users, title: "Join 15,000+ Supporters", desc: "Growing every day" },
              { icon: Target, title: "5 Key Promises", desc: "Real solutions for real problems" },
              { icon: Heart, title: "100% Grassroots", desc: "Powered by the people" },
            ].map((item, index) => (
              <div key={index} className="text-center animate-scale-in" style={{ animationDelay: `${index * 0.2}s` }}>
                <item.icon className="h-12 w-12 mx-auto mb-4 text-white" />
                <h3 className="font-raleway font-semibold text-lg mb-2">{item.title}</h3>
                <p className="text-white/80">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-trust hover:bg-gray-100 font-raleway font-semibold">
              <Heart className="h-5 w-5 mr-2" />
              Volunteer Today
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-trust font-raleway font-semibold">
              <Clock className="h-5 w-5 mr-2" />
              Upcoming Events
            </Button>
          </div>
        </div>
      </section>

      {/* Youth Poll */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="font-montserrat font-bold text-2xl md:text-3xl mb-4">
              Youth Voice Poll
            </h2>
            <p className="campaign-subheading text-gray-600">
              What's your top priority for our constituency?
            </p>
          </div>

          <Card>
            <CardContent className="p-6">
              <div className="space-y-4">
                {[
                  { option: "Job Creation & Employment", percentage: 35 },
                  { option: "Education & Skills Development", percentage: 28 },
                  { option: "Healthcare Access", percentage: 18 },
                  { option: "Infrastructure Development", percentage: 12 },
                  { option: "Environmental Protection", percentage: 7 },
                ].map((item, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between">
                      <span className="font-raleway">{item.option}</span>
                      <span className="text-hope font-semibold">{item.percentage}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-hope h-2 rounded-full transition-all duration-1000"
                        style={{ width: `${item.percentage}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
              <Button className="w-full mt-6 btn-youth font-raleway">
                Cast Your Vote
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Home;  
