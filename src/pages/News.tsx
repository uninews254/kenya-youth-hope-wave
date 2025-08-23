import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, User, ArrowRight, Heart, MessageCircle, Share2 } from "lucide-react";

const News = () => {
  const newsArticles = [
    {
      id: 1,
      title: "Hon. Evans Muchanga Engages Community and Faith Leaders Across Kikuyu",
      excerpt: "On Sunday, July 27, Hon. Evans Muchanga participated in a series of events across Kikuyu Constituency, beginning with a church service in Karen, later attending a Pastors’ Fellowship at Thirime Grounds, and concluding with youth engagement at Mutuine Church...",
      author: "Media Team",
      date: "2025-07-27",
      category: "Community",
      image: "/api/placeholder/400/250",
      likes: 245,
      comments: 61,
      shares: 103
    },
    {
      id: 2,
      title: "Hon. Evans Muchanga Participates in Sports and Community Activities in Gikambura",
      excerpt: "On Sunday, August 17, Hon. Evans Muchanga attended community activities in Gikambura including a football match, the Mr. and Mrs. Thogoto event, and a women’s group meeting focused on empowerment and development...",
      author: "Media Team",
      date: "2025-08-17",
      category: "Community",
      image: "/api/placeholder/400/250",
      likes: 198,
      comments: 44,
      shares: 87
    },
    {
      id: 3,
      title: "Hon. Evans Muchanga Meets Boda Boda Operators in Ruthigiti",
      excerpt: "On Monday, August 18, Hon. Evans Muchanga engaged with boda boda operators in Ruthigiti, listening to their challenges and contributions to the local economy, and discussing ways to support the sector...",
      author: "Media Team",
      date: "2025-08-18",
      category: "Community",
      image: "/api/placeholder/400/250",
      likes: 165,
      comments: 39,
      shares: 74
    },
    {
      id: 4,
      title: "Hon. Evans Muchanga Attends Pastors’ Breakfast in Kikuyu",
      excerpt: "On Saturday, August 30, Hon. Evans Muchanga joined local pastors for a breakfast meeting in Kikuyu that provided a platform for fellowship, prayer, and discussions on community matters...",
      author: "Media Team",
      date: "2025-08-30",
      category: "Faith",
      image: "/api/placeholder/400/250",
      likes: 176,
      comments: 42,
      shares: 80
    },
    {
      id: 5,
      title: "Hon. Evans Muchanga Participates in Nachu Women Sacco Meeting",
      excerpt: "On Wednesday, September 17, Hon. Evans Muchanga attended a meeting with members of the Nachu Women Sacco, engaging in discussions on economic empowerment, savings, and community development...",
      author: "Media Team",
      date: "2025-09-17",
      category: "Leadership",
      image: "/api/placeholder/400/250",
      likes: 142,
      comments: 37,
      shares: 65
    },
    {
      id: 6,
      title: "PCEA Karinde Convention Marks Hon. Evans Muchanga’s Parliamentary Bid Announcement",
      excerpt: "On Sunday, August 24, PCEA Karinde hosted a convention where Hon. Evans Muchanga officially announced his bid to run for Kikuyu MP in 2027, with over 60 young aspirants invited from across the country...",
      author: "Media Team",
      date: "2025-08-24",
      category: "Campaign",
      image: "/api/placeholder/400/250",
      likes: 312,
      comments: 88,
      shares: 147
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
      case "health":
        return "bg-green-600 text-white";
      case "faith":
        return "bg-blue-600 text-white";
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
            Follow our journey, community stories, faith events, and campaign milestones.
            Every story here reflects ongoing engagement with Kikuyu Constituency.
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
              Recent community engagements, campaign announcements, and faith activities  
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
                Be the first to know about community engagements, campaign news, and milestones. Join our growing community of supporters.  
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
              { name: "Campaign", count: 1 },  
              { name: "Policy", count: 0 },  
              { name: "Community", count: 3 },  
              { name: "Leadership", count: 1 },  
              { name: "Health", count: 0 },  
              { name: "Faith", count: 1 }  
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
