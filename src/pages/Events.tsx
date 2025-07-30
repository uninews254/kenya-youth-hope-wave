import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Clock, Users, ArrowRight, CheckCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Events = () => {
  const [attendingEvents, setAttendingEvents] = useState<number[]>([]);
  const { toast } = useToast();

  const upcomingEvents = [
    {
      id: 1,
      title: "Youth Rally: Our Time is Now",
      date: "2024-02-15",
      time: "14:00",
      location: "Uhuru Park, Nairobi",
      description: "Join thousands of young Kenyans as we launch our campaign with energy, hope, and determination for change.",
      attendees: 2500,
      type: "Rally",
      status: "upcoming"
    },
    {
      id: 2,
      title: "Town Hall: Jobs & Education",
      date: "2024-02-20",
      time: "18:00",
      location: "Kibera Community Center",
      description: "Interactive discussion on our plans for job creation and education reform. Bring your questions and ideas.",
      attendees: 300,
      type: "Town Hall",
      status: "upcoming"
    },
    {
      id: 3,
      title: "Women in Leadership Forum",
      date: "2024-02-25",
      time: "15:00",
      location: "Karen Country Club",
      description: "Celebrating women leaders and discussing gender equality in politics and business.",
      attendees: 150,
      type: "Forum",
      status: "upcoming"
    },
    {
      id: 4,
      title: "Student Debate: Future of Kenya",
      date: "2024-03-01",
      time: "16:00",
      location: "University of Nairobi",
      description: "Interactive debate with university students on key issues facing Kenya's youth.",
      attendees: 500,
      type: "Debate",
      status: "upcoming"
    },
    {
      id: 5,
      title: "Farmers' Market & Agricultural Forum",
      date: "2024-03-05",
      time: "09:00",
      location: "Nakuru Agricultural Center",
      description: "Supporting local farmers and discussing modern agricultural practices and market access.",
      attendees: 200,
      type: "Forum",
      status: "upcoming"
    },
    {
      id: 6,
      title: "Technology & Innovation Summit",
      date: "2024-03-10",
      time: "10:00",
      location: "iHub Nairobi",
      description: "Exploring how technology can solve local problems and create opportunities for youth.",
      attendees: 300,
      type: "Summit",
      status: "upcoming"
    }
  ];

  const pastEvents = [
    {
      id: 7,
      title: "Campaign Launch: Hope Wave Begins",
      date: "2024-01-15",
      time: "16:00",
      location: "Kasarani Stadium",
      description: "Historic launch of our campaign with over 5,000 supporters showing up to start the movement.",
      attendees: 5000,
      type: "Launch",
      status: "completed"
    },
    {
      id: 8,
      title: "Community Listening Tour - Eastlands",
      date: "2024-01-20",
      time: "14:00",
      location: "Various Locations, Eastlands",
      description: "Door-to-door conversations with residents about their priorities and concerns.",
      attendees: 800,
      type: "Tour",
      status: "completed"
    }
  ];

  const handleAttendEvent = (eventId: number) => {
    if (attendingEvents.includes(eventId)) {
      setAttendingEvents(attendingEvents.filter(id => id !== eventId));
      toast({
        title: "Registration cancelled",
        description: "You have been removed from the event attendee list.",
      });
    } else {
      setAttendingEvents([...attendingEvents, eventId]);
      toast({
        title: "Registration confirmed!",
        description: "You'll receive event details and updates via SMS.",
      });
    }
  };

  const getEventTypeColor = (type: string) => {
    switch (type.toLowerCase()) {
      case "rally":
        return "bg-hope text-white";
      case "town hall":
        return "bg-trust text-white";
      case "forum":
        return "bg-youth text-white";
      case "debate":
        return "bg-purple-500 text-white";
      case "summit":
        return "bg-green-600 text-white";
      case "tour":
        return "bg-gray-600 text-white";
      case "launch":
        return "bg-red-600 text-white";
      default:
        return "bg-gray-500 text-white";
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      weekday: 'long', 
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
            <Calendar className="h-4 w-4 mr-2" />
            Campaign Events
          </Badge>
          <h1 className="font-montserrat font-bold text-4xl md:text-5xl mb-6">
            Join Us in Building Change
          </h1>
          <p className="text-xl leading-relaxed max-w-3xl mx-auto">
            Every event is an opportunity to connect, learn, and contribute to our movement. 
            Join us as we bring hope and transformation to every corner of our constituency.
          </p>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-montserrat font-bold text-3xl md:text-4xl mb-4">
              Upcoming Events
            </h2>
            <p className="campaign-subheading text-lg text-gray-600">
              Mark your calendar and join us for these exciting events
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {upcomingEvents.map((event, index) => (
              <Card key={event.id} className="group hover:shadow-lg transition-all duration-300 hover:scale-105 animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardHeader className="pb-4">
                  <div className="flex justify-between items-start mb-2">
                    <Badge className={getEventTypeColor(event.type)}>
                      {event.type}
                    </Badge>
                    {attendingEvents.includes(event.id) && (
                      <CheckCircle className="h-5 w-5 text-green-500" />
                    )}
                  </div>
                  <CardTitle className="font-raleway text-xl leading-tight">
                    {event.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2 text-gray-600">
                      <Calendar className="h-4 w-4" />
                      <span className="text-sm">{formatDate(event.date)}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-gray-600">
                      <Clock className="h-4 w-4" />
                      <span className="text-sm">{event.time} EAT</span>
                    </div>
                    <div className="flex items-center space-x-2 text-gray-600">
                      <MapPin className="h-4 w-4" />
                      <span className="text-sm">{event.location}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-gray-600">
                      <Users className="h-4 w-4" />
                      <span className="text-sm">{event.attendees} expected</span>
                    </div>
                  </div>
                  
                  <p className="text-gray-700 text-sm leading-relaxed">
                    {event.description}
                  </p>
                  
                  <div className="pt-2">
                    <Button
                      onClick={() => handleAttendEvent(event.id)}
                      className={`w-full font-raleway ${
                        attendingEvents.includes(event.id) 
                          ? 'bg-green-500 hover:bg-green-600' 
                          : 'btn-trust'
                      }`}
                    >
                      {attendingEvents.includes(event.id) ? 'Registered' : 'Confirm Attendance'}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Map Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-montserrat font-bold text-3xl mb-4">
              Event Locations
            </h2>
            <p className="campaign-subheading text-gray-600">
              Find events near you across the constituency
            </p>
          </div>

          <Card className="animate-fade-in">
            <CardContent className="p-8">
              <div className="bg-gray-200 rounded-lg h-96 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                  <h3 className="font-raleway font-semibold text-xl mb-2">Interactive Map</h3>
                  <p className="text-gray-600 mb-4">
                    Google Maps integration showing all event locations
                  </p>
                  <Button className="btn-trust font-raleway">
                    View on Google Maps
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Past Events */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-montserrat font-bold text-3xl md:text-4xl mb-4">
              Past Events
            </h2>
            <p className="campaign-subheading text-lg text-gray-600">
              Relive the moments that built our movement
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {pastEvents.map((event, index) => (
              <Card key={event.id} className="group hover:shadow-lg transition-all duration-300 animate-fade-in" style={{ animationDelay: `${index * 0.2}s` }}>
                <CardHeader className="pb-4">
                  <div className="flex justify-between items-start mb-2">
                    <Badge className={getEventTypeColor(event.type)}>
                      {event.type}
                    </Badge>
                    <Badge variant="outline" className="text-green-600 border-green-600">
                      Completed
                    </Badge>
                  </div>
                  <CardTitle className="font-raleway text-xl leading-tight">
                    {event.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2 text-gray-600">
                      <Calendar className="h-4 w-4" />
                      <span className="text-sm">{formatDate(event.date)}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-gray-600">
                      <MapPin className="h-4 w-4" />
                      <span className="text-sm">{event.location}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-gray-600">
                      <Users className="h-4 w-4" />
                      <span className="text-sm">{event.attendees} attended</span>
                    </div>
                  </div>
                  
                  <p className="text-gray-700 text-sm leading-relaxed">
                    {event.description}
                  </p>
                  
                  <Button variant="outline" className="w-full font-raleway">
                    View Photos & Highlights
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Event Newsletter */}
      <section className="py-16 gradient-cta text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-montserrat font-bold text-3xl mb-6">
            Never Miss an Event
          </h2>
          <p className="text-xl mb-8 leading-relaxed">
            Subscribe to our event updates and be the first to know about rallies, 
            town halls, and community meetings in your area.
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
            We respect your privacy. Unsubscribe anytime.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Events;