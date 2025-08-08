import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Quote, Users, Target, Award, Heart } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 gradient-hero text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <Badge className="mb-6 bg-white/20 text-white border-white">
                <Users className="h-4 w-4 mr-2" />
                Meet Your Candidate
              </Badge>
              <h1 className="font-montserrat font-bold text-4xl md:text-5xl mb-6">
                A Leader Born from the Youth, For the Youth
              </h1>
              <p className="text-xl leading-relaxed">
                At 25, I represent the voice of a generation ready to lead. 
                Born and raised in this constituency, I understand the challenges 
                we face and have the energy and vision to solve them.
              </p>
            </div>
            <div className="animate-slide-up">
              <Card className="bg-white/10 backdrop-blur-md border-white/20">
                <CardContent className="p-8">
                  <div className="text-center">
                    <div className="w-32 h-32 bg-white/20 rounded-full mx-auto mb-6 flex items-center justify-center">
                      <Users className="h-16 w-16 text-white" />
                    </div>
                    <h3 className="font-montserrat font-bold text-2xl mb-2">MUCHANGA KIRAGU</h3>
                    <p className="text-white/80 mb-4">MP Candidate 2027</p>
                    <Badge className="bg-youth/20 text-youth border-youth">
                      Age 25 • Lawyer • Community Youth Leader
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Biography */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-montserrat font-bold text-3xl md:text-4xl mb-4">My Journey</h2>
            <p className="campaign-subheading text-lg text-gray-600">
              From humble beginnings to leading the change we need
            </p>
          </div>

          <div className="space-y-12">
            {[
              {
    year: "2000",
    title: "Born in KIKUYU constituency",
    description:
      "Born and raised in Kikuyu, I experienced firsthand the challenges facing our youth - unemployment, limited educational opportunities, and lack of representation in leadership.",
  },
  {
    year: "2015",
    title: "Community Organizer",
    description:
      "Founded 'Youth Voices Kenya', a grassroots organization that has trained over 2,000 young people in civic engagement and leadership skills.",
  },
  {
    year: "2016",
    title: "Primary School Milestone",
    description:
      "Sat for my KCPE at Kikuyu Township Primary School. Scored 387 marks with a Grade A, demonstrating strong academic foundation early on.",
  },
  {
    year: "2020",
    title: "Founded Youth Empowerment Foundation",
    description:
      "Established the 'Youth Forward Foundation'—a non-profit organization focused on entrepreneurship, digital skills training, and job placement. It has empowered over 2,000 youth across Kikuyu constituency and beyond.",
  },
  {
    year: "2020",
    title: "KCSE Achievement",
    description:
      "Completed my Kenya Certificate of Secondary Education (KCSE) at Alliance High School, earning a mean grade of A– and preparing myself for university law studies.",
  },
  {
    year: "2021",
    title: "Chuka University – Bachelor of Laws",
    description:
      "Joined Chuka University to pursue a Bachelor of Laws (LLB). Became active in leadership and advocacy throughout my studies.",
  },
  {
    year: "2023",
    title: "Elected Faculty of Law President",
    description:
      "Successfully vied and was elected President of the Faculty of Law, representing law students and leading major academic reforms.",
  },
  {
    year: "2024",
    title: "Elected 17th CUSA President",
    description:
      "Became the 17th President of Chuka University Students Association (CUSA) for the 2024–2025 term, amplifying student voices and championing youth empowerment.",
  },
  {
    year: "2025",
    title: "Declared Candidacy for General Elections",
    description:
      "With a vision for inclusive leadership and youth representation, I officially declared my intention to run in the upcoming general elections as a Member of Parliament for Kikuyu constituency.",
  },
];
            ].map((milestone, index) => (
              <div key={index} className="flex items-start space-x-6 animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-hope rounded-full flex items-center justify-center">
                    <span className="font-montserrat font-bold text-white text-sm">{milestone.year}</span>
                  </div>
                </div>
                <div className="flex-grow">
                  <h3 className="font-raleway font-semibold text-xl mb-2 text-trust">{milestone.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{milestone.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision Quote */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Quote className="h-12 w-12 text-hope mx-auto mb-6" />
          <blockquote className="text-2xl md:text-3xl font-raleway italic text-gray-800 mb-6 leading-relaxed">
            "I'm not running to be another politician. I'm running to be the voice of every young person 
            who has been told to wait their turn. Our turn is now."
          </blockquote>
          <cite className="font-montserrat font-semibold text-trust">- MUCHANGA KIRAGU, MP KIKUYU 2027</cite>
        </div>
      </section>

      {/* Youth-Driven Vision */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-montserrat font-bold text-3xl md:text-4xl mb-4">Youth-Driven Vision</h2>
            <p className="campaign-subheading text-lg text-gray-600 max-w-2xl mx-auto">
              Our approach to leadership is different - it's collaborative, transparent, and focused on results
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Target,
                title: "Data-Driven Decisions",
                description: "Every policy decision will be backed by research and community input, not political convenience."
              },
              {
                icon: Users,
                title: "Inclusive Leadership",
                description: "Monthly town halls, youth councils, and digital platforms to ensure every voice is heard."
              },
              {
                icon: Award,
                title: "Accountable Governance",
                description: "Quarterly progress reports, transparent budgets, and regular community feedback sessions."
              }
            ].map((principle, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 animate-scale-in" style={{ animationDelay: `${index * 0.2}s` }}>
                <CardContent className="p-8 text-center">
                  <principle.icon className="h-12 w-12 text-hope mx-auto mb-4" />
                  <h3 className="font-raleway font-semibold text-xl mb-4 text-trust">{principle.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{principle.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Patriotic Statement */}
      <section className="py-16 gradient-patriotic text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-montserrat font-bold text-3xl md:text-4xl mb-6">
            Proud to Serve Kenya
          </h2>
          <p className="text-xl leading-relaxed mb-8">
            Born under the Kenyan flag, raised with Kenyan values, and committed to the Kenyan dream. 
            I believe in a Kenya where every citizen, regardless of age, tribe, or background, 
            has the opportunity to thrive and contribute to our nation's greatness.
          </p>
          <div className="flex justify-center items-center space-x-4">
            <div className="w-4 h-3 bg-red-600"></div>
            <div className="w-4 h-3 bg-black"></div>
            <div className="w-4 h-3 bg-green-600"></div>
            <span className="font-raleway font-semibold ml-4">One Nation, One People, One Future</span>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-hope text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-montserrat font-bold text-3xl mb-6">
            Ready to Lead Together?
          </h2>
          <p className="text-xl mb-8">
            Join me in building a constituency where youth leadership drives real change. 
            Together, we'll create the opportunities our generation deserves.
          </p>
          <Button size="lg" className="bg-white text-hope hover:bg-gray-100 font-raleway font-semibold">
            <Heart className="h-5 w-5 mr-2" />
            Join Our Movement
          </Button>
        </div>
      </section>
    </div>
  );
};

export default About;
