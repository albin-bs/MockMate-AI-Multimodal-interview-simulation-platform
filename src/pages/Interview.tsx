import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { useNavigate } from "react-router-dom";
import { 
  Mic, 
  MicOff, 
  Video, 
  VideoOff, 
  Volume2, 
  VolumeX, 
  Brain,
  Clock,
  MessageSquare,
  Eye,
  PhoneOff
} from "lucide-react";

const Interview = () => {
  const navigate = useNavigate();
  const [isRecording, setIsRecording] = useState(true);
  const [isMuted, setIsMuted] = useState(false);
  const [isVideoOn, setIsVideoOn] = useState(true);
  const [currentQuestion, setCurrentQuestion] = useState(1);
  const [timeRemaining, setTimeRemaining] = useState(30 * 60); // 30 minutes in seconds
  const [isAiSpeaking, setIsAiSpeaking] = useState(false);
  const [confidenceScore, setConfidenceScore] = useState(72);
  const [eyeContact, setEyeContact] = useState(85);
  const [speechPace, setSpeechPace] = useState(68);

  const questions = [
    "Tell me about yourself and your background in software engineering.",
    "What's your approach to debugging complex technical issues?",
    "How do you stay updated with the latest technology trends?",
    "Describe a challenging project you've worked on recently.",
    "How do you handle code reviews and feedback from peers?"
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeRemaining((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          navigate('/feedback');
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    // Simulate AI speaking periodically
    const aiSpeakingTimer = setInterval(() => {
      setIsAiSpeaking(true);
      setTimeout(() => setIsAiSpeaking(false), 3000);
    }, 15000);

    return () => {
      clearInterval(timer);
      clearInterval(aiSpeakingTimer);
    };
  }, [navigate]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const handleEndInterview = () => {
    navigate('/feedback');
  };

  const progressPercentage = ((5 - currentQuestion + 1) / 5) * 100;

  return (
    <div className="min-h-screen bg-gradient-subtle">
      {/* Header */}
      <div className="bg-card/80 backdrop-blur-sm border-b shadow-soft">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
                  <Brain className="w-5 h-5 text-primary-foreground" />
                </div>
                <span className="font-bold text-primary">MockMate AI</span>
              </div>
              <Badge variant="secondary" className="flex items-center space-x-1">
                <Clock className="w-3 h-3" />
                <span>{formatTime(timeRemaining)}</span>
              </Badge>
            </div>
            
            <div className="flex items-center space-x-2">
              <Progress value={progressPercentage} className="w-32" />
              <span className="text-sm text-muted-foreground">
                {currentQuestion}/5
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          
          {/* Main Video Area */}
          <div className="lg:col-span-3 space-y-6">
            {/* AI Avatar */}
            <Card className="shadow-elegant">
              <CardContent className="p-6">
                <div className="aspect-video bg-gradient-hero rounded-lg relative overflow-hidden flex items-center justify-center">
                  <div className="text-center text-white">
                    <div className={`w-24 h-24 mx-auto mb-4 rounded-full bg-white/20 flex items-center justify-center transition-all duration-300 ${
                      isAiSpeaking ? 'scale-110 bg-white/30' : ''
                    }`}>
                      <Brain className="w-12 h-12" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">Sarah - AI Interviewer</h3>
                    <p className="text-white/80">
                      {isAiSpeaking ? "Speaking..." : "Listening to your response"}
                    </p>
                  </div>
                  {isAiSpeaking && (
                    <div className="absolute bottom-4 left-4 flex space-x-1">
                      <div className="w-2 h-2 bg-white rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-white rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                      <div className="w-2 h-2 bg-white rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>

            {/* Current Question */}
            <Card className="shadow-elegant">
              <CardContent className="p-6">
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <MessageSquare className="w-4 h-4 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold mb-2">Question {currentQuestion}</h3>
                    <p className="text-lg leading-relaxed">{questions[currentQuestion - 1]}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Control Panel */}
            <Card className="shadow-elegant">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div className="flex space-x-4">
                    <Button
                      variant={isMuted ? "destructive" : "secondary"}
                      size="lg"
                      onClick={() => setIsMuted(!isMuted)}
                    >
                      {isMuted ? <MicOff className="w-5 h-5" /> : <Mic className="w-5 h-5" />}
                    </Button>
                    <Button
                      variant={!isVideoOn ? "destructive" : "secondary"}
                      size="lg"
                      onClick={() => setIsVideoOn(!isVideoOn)}
                    >
                      {isVideoOn ? <Video className="w-5 h-5" /> : <VideoOff className="w-5 h-5" />}
                    </Button>
                    <Button variant="secondary" size="lg">
                      <Volume2 className="w-5 h-5" />
                    </Button>
                  </div>
                  
                  <div className="flex space-x-3">
                    {currentQuestion < 5 && (
                      <Button 
                        variant="outline"
                        onClick={() => setCurrentQuestion(prev => prev + 1)}
                      >
                        Next Question
                      </Button>
                    )}
                    <Button 
                      variant="destructive" 
                      onClick={handleEndInterview}
                      className="flex items-center space-x-2"
                    >
                      <PhoneOff className="w-4 h-4" />
                      <span>End Interview</span>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Sidebar */}
          <div className="space-y-6">
            {/* Your Video */}
            <Card className="shadow-elegant">
              <CardContent className="p-4">
                <h3 className="font-semibold mb-3 text-sm">Your Video</h3>
                <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
                  {isVideoOn ? (
                    <div className="text-center text-muted-foreground">
                      <Video className="w-8 h-8 mx-auto mb-2" />
                      <p className="text-xs">Camera Active</p>
                    </div>
                  ) : (
                    <div className="text-center text-muted-foreground">
                      <VideoOff className="w-8 h-8 mx-auto mb-2" />
                      <p className="text-xs">Camera Off</p>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>

            {/* Real-time Analytics */}
            <Card className="shadow-elegant">
              <CardContent className="p-4">
                <h3 className="font-semibold mb-4 text-sm">Live Analysis</h3>
                <div className="space-y-4">
                  <div>
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs text-muted-foreground">Confidence</span>
                      <span className="text-xs font-medium">{confidenceScore}%</span>
                    </div>
                    <Progress value={confidenceScore} className="h-2" />
                  </div>
                  
                  <div>
                    <div className="flex items-center justify-between mb-1">
                      <div className="flex items-center space-x-1">
                        <Eye className="w-3 h-3 text-muted-foreground" />
                        <span className="text-xs text-muted-foreground">Eye Contact</span>
                      </div>
                      <span className="text-xs font-medium">{eyeContact}%</span>
                    </div>
                    <Progress value={eyeContact} className="h-2" />
                  </div>
                  
                  <div>
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs text-muted-foreground">Speech Pace</span>
                      <span className="text-xs font-medium">{speechPace}%</span>
                    </div>
                    <Progress value={speechPace} className="h-2" />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Tips */}
            <Card className="shadow-elegant">
              <CardContent className="p-4">
                <h3 className="font-semibold mb-3 text-sm">Quick Tips</h3>
                <div className="space-y-2">
                  <p className="text-xs text-muted-foreground">• Maintain eye contact with the camera</p>
                  <p className="text-xs text-muted-foreground">• Speak clearly and at a moderate pace</p>
                  <p className="text-xs text-muted-foreground">• Use specific examples in your answers</p>
                  <p className="text-xs text-muted-foreground">• Keep your body language confident</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Interview;