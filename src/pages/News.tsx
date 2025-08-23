import { useState } from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Calendar, User, ArrowRight, Heart, MessageCircle, Share2, X } from "lucide-react";

const News = () => {
  const [selectedArticle, setSelectedArticle] = useState<number | null>(null);
  
  const newsArticles = [
    {
      id: 1,
      title: "Hon. Evans Muchanga Engages Community and Faith Leaders Across Kikuyu",
      excerpt: "On Sunday, July 27, Hon. Evans Muchanga participated in a series of events across Kikuyu Constituency, beginning with a church service in Karen, later attending a Pastors' Fellowship at Thirime Grounds, and concluding with youth engagement at Mutuine Church...",
      fullContent: "On Sunday, July 27, Hon. Evans Muchanga participated in a series of meaningful events across Kikuyu Constituency, demonstrating his deep commitment to community engagement and spiritual leadership.\n\nThe day began with a church service in Karen, where Hon. Muchanga joined fellow congregants in worship and reflection. During the service, he spoke about the importance of faith in leadership and how divine guidance shapes his vision for Kikuyu Constituency.\n\nLater in the morning, he attended the Pastors' Fellowship at Thirime Grounds, a gathering that brought together religious leaders from across the constituency. The fellowship provided a platform for spiritual leaders to discuss their role in community development and how they can collaborate with political leadership to address local challenges.\n\n'The church has always been the backbone of our community,' Hon. Muchanga stated during the fellowship. 'As leaders, both spiritual and political, we must work hand in hand to uplift our people and create lasting change.'\n\nThe day concluded with a youth engagement session at Mutuine Church, where Hon. Muchanga interacted with young people from various backgrounds. The session focused on youth empowerment, education opportunities, and the importance of active participation in the democratic process.\n\nDuring the youth session, several young people raised questions about employment opportunities, access to education, and their role in the upcoming 2027 elections. Hon. Muchanga emphasized his commitment to creating policies that directly benefit the youth, including job creation programs and educational scholarships.\n\n'Our young people are not just the leaders of tomorrow - they are the leaders of today,' he concluded. 'Their voices matter, and their dreams will shape the future of Kikuyu Constituency.'",
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
      excerpt: "On Sunday, August 17, Hon. Evans Muchanga attended community activities in Gikambura including a football match, the Mr. and Mrs. Thogoto event, and a women's group meeting focused on empowerment and development...",
      fullContent: "On Sunday, August 17, Hon. Evans Muchanga demonstrated his commitment to community engagement by participating in multiple activities in Gikambura, showcasing the diverse ways he connects with constituents across all segments of society.\n\nThe day started with a thrilling football match at the local grounds, where Hon. Muchanga not only watched but also participated as a player. The match brought together teams from different neighborhoods, fostering unity and healthy competition among youth in the area.\n\n'Sports have the power to unite us beyond our differences,' Hon. Muchanga commented while addressing the players and spectators. 'When we play together, we build trust, friendship, and community spirit that extends far beyond the field.'\n\nFollowing the football match, he attended the Mr. and Mrs. Thogoto event, a cultural celebration that highlights the rich traditions of the Kikuyu community. The event featured traditional dances, music, and storytelling, providing a platform for preserving and sharing cultural heritage with younger generations.\n\nDuring the cultural event, Hon. Muchanga participated in traditional ceremonies and spoke about the importance of maintaining cultural identity while embracing modern development. He emphasized how traditional values can guide contemporary leadership and community development initiatives.\n\nThe day concluded with a women's group meeting focused on empowerment and development. The session brought together women from various backgrounds to discuss economic opportunities, leadership roles, and community development projects.\n\nThe women shared their challenges, including access to credit, market opportunities for their businesses, and the need for better healthcare services. Hon. Muchanga listened attentively and outlined his plans to support women's economic empowerment through microfinance programs and skills development initiatives.\n\n'Women are the backbone of our families and communities,' he stated. 'Empowering women economically means strengthening our entire constituency. Your success is our collective success.'",
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
      fullContent: "On Monday, August 18, Hon. Evans Muchanga held a productive meeting with boda boda operators in Ruthigiti, acknowledging their vital role in the local economy and transportation system while addressing their key concerns and challenges.\n\nThe meeting took place at the main boda boda stage in Ruthigiti, bringing together over 50 operators from different routes within the constituency. The operators shared their daily experiences, challenges, and suggestions for improving their working conditions and business environment.\n\nKey issues raised during the meeting included harassment by county officials, lack of proper staging facilities, high fuel costs, and limited access to affordable motorbikes and spare parts. The operators also expressed concerns about road safety and the need for better training programs.\n\n'You are not just transport providers - you are entrepreneurs, job creators, and essential service providers,' Hon. Muchanga told the gathering. 'Your sector employs thousands of young people and provides crucial transportation services to our community.'\n\nThe operators appreciated his recognition of their contribution to the local economy. James Mwangi, chairman of the Ruthigiti Boda Boda Association, stated: 'For too long, we have been overlooked by leaders. It's refreshing to have someone who understands our struggles and sees our potential.'\n\nDuring the discussion, Hon. Muchanga outlined several initiatives he plans to champion if elected, including:\n\n- Establishing proper staging facilities with security and amenities\n- Creating a revolving fund to help operators access affordable motorbikes\n- Advocating for fair treatment by county officials\n- Supporting training programs on road safety and business skills\n- Facilitating access to insurance services at subsidized rates\n\nThe meeting concluded with the formation of a joint committee to continue dialogue and develop specific action plans. Hon. Muchanga committed to regular engagement with the boda boda community and promised to be their voice in Parliament.\n\n'Your dreams are valid, and your concerns are legitimate,' he concluded. 'Together, we will transform challenges into opportunities and build a thriving transport sector that serves everyone.'",
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
      title: "Hon. Evans Muchanga Attends Pastors' Breakfast in Kikuyu",
      excerpt: "On Saturday, August 30, Hon. Evans Muchanga joined local pastors for a breakfast meeting in Kikuyu that provided a platform for fellowship, prayer, and discussions on community matters...",
      fullContent: "On Saturday, August 30, Hon. Evans Muchanga joined local pastors for an inspiring breakfast meeting in Kikuyu, reinforcing the vital partnership between spiritual and political leadership in community development.\n\nThe breakfast meeting, held at a local community center, brought together over 30 pastors from different denominations across Kikuyu Constituency. The gathering created a unique opportunity for interfaith dialogue and collaborative planning for community initiatives.\n\nThe meeting began with prayer and worship, setting a spiritual tone for the discussions that followed. Rev. Samuel Kamau, who organized the event, welcomed Hon. Muchanga and emphasized the importance of having God-fearing leaders in political positions.\n\n'We are gathered here not just as religious leaders, but as shepherds of this community,' Rev. Kamau stated. 'Our role extends beyond the pulpit to supporting leaders who share our values and vision for a better society.'\n\nDuring the breakfast, pastors shared insights about the challenges facing their congregations, including youth unemployment, family breakdowns, substance abuse, and economic hardships. They discussed how the church can work alongside political leadership to address these issues comprehensively.\n\nHon. Muchanga spoke passionately about his faith journey and how his Christian beliefs shape his political vision. 'My campaign slogan \"Mungu mbele\" is not just words - it reflects my deep conviction that God must guide every decision we make as leaders,' he shared.\n\nThe pastors appreciated his authenticity and commitment to Christian principles. Pastor Mary Wanjiku from Kikuyu Baptist Church commented: 'It's rare to find a young politician who openly acknowledges God's sovereignty and seeks divine guidance in leadership.'\n\nKey topics discussed during the meeting included:\n\n- Establishing youth mentorship programs through churches\n- Creating support systems for struggling families\n- Developing community-based solutions to drug abuse\n- Promoting moral and ethical leadership at all levels\n- Strengthening the partnership between church and government\n\nThe meeting concluded with the pastors pledging their support for Hon. Muchanga's campaign and agreeing to continue regular dialogue. They formed a Pastors' Advisory Committee to provide spiritual guidance and community insights throughout his political journey.\n\n'We believe God has called you for such a time as this,' concluded Pastor John Githinji. 'We will continue to pray for you and support your vision for transforming Kikuyu Constituency.'",
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
      fullContent: "On Wednesday, September 17, Hon. Evans Muchanga attended a transformative meeting with members of the Nachu Women Sacco, highlighting his commitment to women's economic empowerment and grassroots financial inclusion.\n\nThe meeting, held at the Nachu Community Center, brought together over 80 women from various backgrounds who are members of the Savings and Credit Cooperative Organization (Sacco). The women shared their experiences, challenges, and success stories in their journey toward financial independence.\n\nNachu Women Sacco, established five years ago, has grown to become one of the most successful women-led financial cooperatives in Kikuyu Constituency. The Sacco provides its members with affordable loans, savings opportunities, and financial literacy training.\n\nChairperson Grace Wambui welcomed Hon. Muchanga and provided an overview of the Sacco's achievements, including disbursing over KSh 50 million in loans to members and maintaining a 98% loan repayment rate. She highlighted how the Sacco has transformed the lives of women and their families.\n\n'Before joining this Sacco, many of us struggled to access credit from traditional banks,' Wambui explained. 'Today, we own businesses, have built homes, and educated our children through the support we get from each other.'\n\nDuring the interactive session, women shared their personal stories of transformation. Mary Nyambura, a member who started a small grocery business with a Sacco loan, now employs three people and has expanded to two locations. 'This Sacco gave me hope when I had none,' she testified.\n\nHon. Muchanga listened attentively to the women's experiences and commended their resilience and entrepreneurial spirit. He acknowledged the crucial role women play in economic development and outlined his plans to support women-led initiatives.\n\n'You are living proof that when women are empowered economically, entire communities benefit,' Hon. Muchanga stated. 'Your success stories inspire me and reinforce my commitment to creating an enabling environment for women's economic participation.'\n\nKey initiatives he promised to champion include:\n\n- Advocating for increased government funding for women's cooperatives\n- Facilitating access to larger loan facilities for women's groups\n- Supporting skills development and business training programs\n- Creating market linkages for women's products and services\n- Promoting women's participation in government tenders and contracts\n\nThe women appreciated his genuine interest in their welfare and his practical approach to supporting their economic activities. They pledged their support for his political aspirations and agreed to form a Women's Economic Empowerment Committee to continue the dialogue.\n\nTreasurer Jane Wanjiru concluded the meeting by saying: 'We need leaders who understand that empowering women is not just about giving speeches, but about creating real opportunities. We believe you are such a leader.'",
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
      title: "PCEA Karinde Convention Marks Hon. Evans Muchanga's Parliamentary Bid Announcement",
      excerpt: "On Sunday, August 24, PCEA Karinde hosted a convention where Hon. Evans Muchanga officially announced his bid to run for Kikuyu MP in 2027, with over 60 young aspirants invited from across the country...",
      fullContent: "On Sunday, August 24, PCEA Karinde hosted a historic convention that marked a pivotal moment in Hon. Evans Muchanga's political journey as he officially announced his bid to run for Kikuyu MP in the 2027 general elections.\n\nThe convention, themed 'Rising Leaders: A New Generation of Faith-Based Leadership,' attracted over 60 young political aspirants from across Kenya, making it one of the most significant youth political gatherings in recent years.\n\nThe event began with a worship service led by the church choir, followed by prayers for the nation and upcoming leaders. Rev. Dr. Peter Karanja, the church's senior pastor, delivered an inspiring sermon on 'Leadership as Service,' emphasizing the biblical foundation of servant leadership.\n\n'God calls leaders not to be served, but to serve,' Rev. Dr. Karanja proclaimed. 'Young leaders like Evans represent hope for a generation that will lead with integrity, humility, and faith.'\n\nThe highlight of the convention was Hon. Muchanga's official announcement speech, where he outlined his vision for Kikuyu Constituency and his commitment to youth-centered leadership. Speaking to a packed church, he shared his personal journey and the divine calling he feels to serve his community.\n\n'Today, I stand before you not just as a young man with political ambitions, but as a servant called by God to be a voice for the voiceless, hope for the hopeless, and a bridge between generations,' Hon. Muchanga declared to thunderous applause.\n\nHis speech covered key policy areas including:\n\n- Youth employment creation through technology and entrepreneurship hubs\n- Educational support through scholarships and infrastructure development\n- Healthcare improvement with focus on maternal and child health\n- Agricultural modernization to support local farmers\n- Infrastructure development including roads and digital connectivity\n\nGuest speakers at the convention included successful young leaders from various sectors who shared their experiences and encouraged the aspirants. Dr. Faith Mukami, a successful entrepreneur and youth advocate, challenged the young leaders to maintain their integrity throughout their political journey.\n\n'The temptation to compromise will be great, but remember that your generation is watching,' Dr. Mukami advised. 'Lead with the fear of God and the love of people in your heart.'\n\nThe convention also featured breakout sessions where aspirants discussed various topics including campaign strategies, policy development, and maintaining faith in politics. These sessions provided valuable networking opportunities and knowledge sharing among the young leaders.\n\nAttendees included youth from various constituencies, church leaders, community elders, and political mentors. The diversity of participants demonstrated the broad appeal of Hon. Muchanga's message and the growing momentum behind his campaign.\n\nThe event concluded with a commitment ceremony where Hon. Muchanga signed a pledge to maintain integrity, transparency, and servant leadership throughout his political journey. The pledge was witnessed by church leaders and community elders, symbolizing the accountability structure that will guide his leadership.\n\n'This is not just a political announcement - it's a covenant with God and the people of Kikuyu,' Hon. Muchanga concluded. 'Together, we will write a new chapter of hope, progress, and godly leadership for our constituency.'",
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

  const handleReadMore = (articleId: number) => {
    setSelectedArticle(articleId);
  };

  const closeModal = () => {
    setSelectedArticle(null);
  };

  const selectedArticleData = newsArticles.find(article => article.id === selectedArticle);

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
                  <Button 
                    onClick={() => handleReadMore(newsArticles[0].id)}
                    className="btn-trust font-raleway"
                  >  
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
                    <Button 
                      onClick={() => handleReadMore(article.id)}
                      variant="ghost" 
                      size="sm" 
                      className="text-trust hover:text-trust/80"
                    >  
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

      {/* Article Modal */}
      <Dialog open={selectedArticle !== null} onOpenChange={closeModal}>
        <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="font-montserrat font-bold text-2xl mb-4">
              {selectedArticleData?.title}
            </DialogTitle>
            <Button
              onClick={closeModal}
              variant="ghost"
              size="sm"
              className="absolute right-4 top-4"
            >
              <X className="h-4 w-4" />
            </Button>
          </DialogHeader>
          
          {selectedArticleData && (
            <div className="space-y-6">
              {/* Article Meta Info */}
              <div className="flex items-center space-x-4 border-b pb-4">
                <Badge className={getCategoryColor(selectedArticleData.category)}>
                  {selectedArticleData.category}
                </Badge>
                <div className="flex items-center space-x-2 text-gray-600">
                  <Calendar className="h-4 w-4" />
                  <span className="text-sm">{formatDate(selectedArticleData.date)}</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-600">
                  <User className="h-4 w-4" />
                  <span className="text-sm">{selectedArticleData.author}</span>
                </div>
              </div>

              {/* Article Image Placeholder */}
              <div className="bg-gray-200 h-64 flex items-center justify-center rounded-lg">
                <div className="text-center text-gray-500">
                  <MessageCircle className="h-16 w-16 mx-auto mb-4" />
                  <p>Article Image</p>
                </div>
              </div>

              {/* Full Article Content */}
              <div className="prose max-w-none">
                <div className="text-gray-700 leading-relaxed whitespace-pre-line">
                  {selectedArticleData.fullContent}
                </div>
              </div>

              {/* Social Engagement Footer */}
              <div className="flex items-center justify-between text-sm text-gray-500 border-t pt-4">
                <div className="flex items-center space-x-6">
                  <div className="flex items-center space-x-2">
                    <Heart className="h-5 w-5" />
                    <span>{selectedArticleData.likes} likes</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <MessageCircle className="h-5 w-5" />
                    <span>{selectedArticleData.comments} comments</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Share2 className="h-5 w-5" />
                    <span>{selectedArticleData.shares} shares</span>
                  </div>
                </div>
                <Button 
                  onClick={closeModal}
                  className="btn-trust font-raleway"
                >
                  Close Article
                </Button>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default News;