import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, Users, Target, Heart, ArrowRight, Play, Calendar } from "lucide-react";
import heroCandidate from "@/assets/hero-candidate.jpg";
import votingPattern from "@/assets/voting-pattern.jpg";

// ✅ Add your external audio file here
import candidateVoice from "@/assets/candidate-voice.mp3"; 

const Home = () => {
  const [timeToElection, setTimeToElection] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  // ✅ Setup audio ref for candidate voice
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const playVoiceNote = () => {
    if (audioRef.current) {
      audioRef.current.play();
    }
  };

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
            {/* ✅ Register to Vote link */}
            <a 
              href="https://www.iebc.or.ke/register-vote" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <Button size="lg" className="btn-hope text-lg px-8 py-4 font-raleway font-semibold">
                <Users className="h-5 w-5 mr-2" />
                Register to Vote
              </Button>
            </a>

            <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-black text-lg px-8 py-4 font-raleway font-semibold">
              <Play className="h-5 w-5 mr-2" />
              Watch Our Vision
            </Button>
          </div>

          {/* ✅ Candidate Voice Note */}
          <div className="bg-white/10 backdrop-blur-md rounded-lg p-4 inline-flex items-center space-x-3 mb-8">
            <Button size="sm" className="btn-youth rounded-full" onClick={playVoiceNote}>
              <Play className="h-4 w-4" />
            </Button>
            <span className="font-raleway text-sm">Voice Note from the Candidate</span>
            {/* Hidden audio element */}
            <audio ref={audioRef} src={candidateVoice} preload="auto" />
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* The rest of your code remains unchanged */}
      {/* ... */}
    </div>
  );
};

export default Home;
