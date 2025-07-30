import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, User, ArrowRight, Heart, MessageCircle, Share2 } from "lucide-react";

const News = () => {
  const newsArticles = [
    {
      id: 1,
      title: "Hope Wave Campaign Launches with Record Youth Attendance",
      excerpt: "Over 5,000 young Kenyans gathered at Kasarani Stadium to launch what promises to be the most youth-driven political campaign in recent history...",
      author: "Campaign Team",
      date: "2024-01-16",
      category: "Campaign",
      image: "/api/placeholder/400/250",
      likes: 234,
      comments: 67,
      shares: 89
    },
    {
      id: 2,
      title: "New Skills Training Centers to Create 2,000 Youth Jobs",
      excerpt: "Our detailed plan for establishing five modern skills training centers across the constituency will directly address youth unemployment...",
      author: "Alex Mwangi",
      date: "2024-01-20",
      category: "Policy",
      image: "/api/placeholder/400/250",
      likes: 456,
      comments: 123,
      shares: 178
    },
    {
      id: 3,
      title: "Community Listening Tour: What We Learned in Eastlands",
      excerpt: "Three days of door-to-door conversations revealed the top priorities for residents: jobs, education, and clean water access...",
      author: "Community Team",
      date: "2024-01-25",
      category: "Community",
      image: "/api/placeholder/400/250",
      likes: 187,
      comments: 45,
      shares: 67
    },
    {
      id: 4,
      title: "Youth Unemployment Crisis: Our Comprehensive Solution",
      excerpt: "With 67% of youth unemployment in our constituency, we're proposing a multi-pronged approach that combines skills training, entrepreneurship support...",
      author: "Policy Team",
      date: "2024-01-30",
      category: "Policy",
      image: "/api/placeholder/400/250",
      likes: 342,
      comments: 89,
      shares: 134
    },
    {
      id: 5,
      title: "Women in Leadership: Breaking Barriers Together",
      excerpt: "Our campaign is proud to have 60% women in leadership positions. Here's how we're working to ensure gender equality in all our programs...",
      author: "Sarah Wanjiku",
      date: "2024-02-02",
      category: "Leadership",
      image: "/api/placeholder/400/250",
      likes: 289,
      comments: 156,
      shares: 201
    },
    {
      id: 6,
      title: "Technology for Good: Digital Solutions for Local Problems",
      excerpt: "From mobile apps that connect farmers to markets to digital platforms for government services, technology will be central to our governance...",
      author: "Tech Team",
      date: "2024-02-05",
      category: "Innovation",
      image: "/api/placeholder/400/250",
      likes: 421,
      comments: 178,
      shares: 267
    }
  ];

  const getCategoryColor = (category: string) => {
    switch (category.toLowerCase()) {
      case "campaign":
        return "bg-hope text-white";
      case "policy":
        return "bg-trust text-white";
      case "community":
        return "bg-youth text-white";
      case "leadership":
        return "bg-purple-500 text-white";
      case "innovation":
        return "bg-green-600 text-white";
      default:
        return "bg-gray-500 text-white";
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 gradient-hero text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge className="mb-6 bg-white/20 text-white border-white">
            <MessageCircle className="h-4 w-4 mr-2" />
            Campaign News
          </Badge>
          <h1 className="font-montserrat font-bold text-4xl md:text-5xl mb-6">
            Stay Updated on Our Movement
          </h1>
          <p className="text-xl leading-relaxed max-w-3xl mx-auto">
            Follow our journey, policy updates, community stories, and campaign milestones. 
            Every story here represents real progress toward the change we're building together.
          </p>
        </div>
      </section>

      {/* Featured Article */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h2 className="font-montserrat font-bold text-2xl mb-2">Featured Story</h2>
            <div className="w-20 h-1 bg-hope"></div>
          </div>

          <Card className="overflow-hidden shadow-lg animate-fade-in">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="bg-gray-200 h-64 lg:h-full flex items-center justify-center">
                <div className="text-center text-gray-500">
                  <MessageCircle className="h-16 w-16 mx-auto mb-4" />
                  <p>Featured Image</p>
                </div>
              </div>
              <div className="p-8">
                <div className="flex items-center space-x-4 mb-4">
                  <Badge className={getCategoryColor(newsArticles[0].category)}>
                    {newsArticles[0].category}
                  </Badge>
                  <div className="flex items-center space-x-2 text-gray-600">
                    <Calendar className="h-4 w-4" />
                    <span className="text-sm">{formatDate(newsArticles[0].date)}</span>
                  </div>
                </div>
                <h3 className="font-montserrat font-bold text-2xl md:text-3xl mb-4 leading-tight">
                  {newsArticles[0].title}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  {newsArticles[0].excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <User className="h-4 w-4 text-gray-500" />
                    <span className="text-sm text-gray-600">{newsArticles[0].author}</span>
                  </div>
                  <Button className="btn-trust font-raleway">
                    Read Full Story
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* News Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="font-montserrat font-bold text-3xl mb-4">Latest Updates</h2>
            <p className="campaign-subheading text-gray-600">
              Recent news, policy announcements, and community stories
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {newsArticles.slice(1).map((article, index) => (
              <Card key={article.id} className="group hover:shadow-lg transition-all duration-300 hover:scale-105 animate-slide-up overflow-hidden" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="bg-gray-200 h-48 flex items-center justify-center">
                  <div className="text-center text-gray-500">
                    <MessageCircle className="h-8 w-8 mx-auto mb-2" />
                    <p className="text-sm">Article Image</p>
                  </div>
                </div>
                
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between mb-2">
                    <Badge className={getCategoryColor(article.category)}>
                      {article.category}
                    </Badge>
                    <div className="flex items-center space-x-1 text-gray-500">
                      <Calendar className="h-3 w-3" />
                      <span className="text-xs">{formatDate(article.date)}</span>
                    </div>
                  </div>
                  <h3 className="font-raleway font-semibold text-lg leading-tight group-hover:text-trust transition-colors">
                    {article.title}
                  </h3>
                </CardHeader>
                
                <CardContent className="pt-0">
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    {article.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <div className="flex items-center space-x-1">
                      <User className="h-3 w-3" />
                      <span>{article.author}</span>
                    </div>
                  </div>
                  
                  {/* Social Engagement */}
                  <div className="flex items-center justify-between text-sm text-gray-500 border-t pt-3">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-1">
                        <Heart className="h-4 w-4" />
                        <span>{article.likes}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <MessageCircle className="h-4 w-4" />
                        <span>{article.comments}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Share2 className="h-4 w-4" />
                        <span>{article.shares}</span>
                      </div>
                    </div>
                    <Button variant="ghost" size="sm" className="text-trust hover:text-trust/80">
                      Read More
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button className="btn-hope font-raleway">
              Load More Articles
            </Button>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="gradient-cta text-white overflow-hidden">
            <CardContent className="p-8 md:p-12 text-center">
              <h2 className="font-montserrat font-bold text-3xl mb-4">
                Get Campaign Updates Direct to Your Inbox
              </h2>
              <p className="text-xl mb-8 leading-relaxed">
                Be the first to know about policy announcements, community stories, 
                and campaign milestones. Join 15,000+ subscribers.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="flex-1 px-4 py-3 rounded-lg text-gray-900 font-raleway"
                />
                <Button className="bg-white text-trust hover:bg-gray-100 font-raleway font-semibold px-6">
                  Subscribe
                </Button>
              </div>
              <p className="text-sm text-white/80 mt-4">
                Weekly digest • No spam • Unsubscribe anytime
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-montserrat font-bold text-3xl mb-4">
              Browse by Category
            </h2>
            <p className="campaign-subheading text-gray-600">
              Find stories that matter to you
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              { name: "Campaign", count: 12 },
              { name: "Policy", count: 8 },
              { name: "Community", count: 15 },
              { name: "Leadership", count: 6 },
              { name: "Innovation", count: 4 },
              { name: "Events", count: 10 }
            ].map((category, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="p-4 text-center">
                  <h3 className="font-raleway font-semibold text-lg mb-1">{category.name}</h3>
                  <p className="text-gray-600 text-sm">{category.count} articles</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default News;