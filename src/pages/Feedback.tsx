import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useNavigate } from "react-router-dom";
import { 
  Brain, 
  TrendingUp, 
  Award, 
  Eye, 
  Volume2, 
  MessageSquare, 
  Clock,
  Target,
  ChevronRight,
  Download,
  Share2
} from "lucide-react";

const Feedback = () => {
  const navigate = useNavigate();
  
  const overallScore = 78;
  const previousScore = 65;
  const improvement = overallScore - previousScore;

  const metrics = {
    content: 82,
    delivery: 74,
    confidence: 76,
    eyeContact: 85,
    speechPace: 68,
    vocabulary: 79,
    clarity: 88,
    bodyLanguage: 72
  };

  const sessionData = [
    { session: 1, score: 45, date: "2024-01-15" },
    { session: 2, score: 52, date: "2024-01-18" },
    { session: 3, score: 58, date: "2024-01-22" },
    { session: 4, score: 65, date: "2024-01-25" },
    { session: 5, score: 78, date: "2024-01-28" },
  ];

  const strengths = [
    "Clear and articulate communication",
    "Good technical knowledge demonstration",
    "Maintained professional tone throughout",
    "Excellent eye contact with the camera"
  ];

  const improvements = [
    "Reduce filler words (um, uh) by 40%",
    "Provide more specific examples",
    "Speak slightly slower for better clarity",
    "Improve body language confidence"
  ];

  const recommendations = [
    {
      title: "Practice STAR Method",
      description: "Structure your answers using Situation, Task, Action, Result framework",
      priority: "High"
    },
    {
      title: "Mock Technical Questions",
      description: "Focus on system design and algorithm problems",
      priority: "Medium"
    },
    {
      title: "Body Language Training",
      description: "Work on confident posture and hand gestures",
      priority: "Low"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-subtle">
      {/* Header */}
      <div className="bg-card/80 backdrop-blur-sm border-b shadow-soft">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
                <Brain className="w-6 h-6 text-primary-foreground" />
              </div>
              <div>
                <h1 className="text-2xl font-bold">Interview Complete!</h1>
                <p className="text-muted-foreground">Software Engineer • 30 minutes</p>
              </div>
            </div>
            <div className="flex space-x-3">
              <Button variant="outline" size="sm">
                <Download className="w-4 h-4 mr-2" />
                Export Report
              </Button>
              <Button variant="outline" size="sm">
                <Share2 className="w-4 h-4 mr-2" />
                Share
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          
          {/* Main Content */}
          <div className="lg:col-span-3 space-y-8">
            
            {/* Overall Performance */}
            <Card className="shadow-elegant">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Award className="w-5 h-5 text-primary" />
                  <span>Overall Performance</span>
                </CardTitle>
                <CardDescription>Your comprehensive interview analysis</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="relative w-32 h-32 mx-auto mb-4">
                      <svg className="w-32 h-32 transform -rotate-90" viewBox="0 0 36 36">
                        <path
                          d="M18 2.0845
                            a 15.9155 15.9155 0 0 1 0 31.831
                            a 15.9155 15.9155 0 0 1 0 -31.831"
                          fill="none"
                          stroke="hsl(var(--muted))"
                          strokeWidth="2"
                        />
                        <path
                          d="M18 2.0845
                            a 15.9155 15.9155 0 0 1 0 31.831
                            a 15.9155 15.9155 0 0 1 0 -31.831"
                          fill="none"
                          stroke="hsl(var(--primary))"
                          strokeWidth="2"
                          strokeDasharray={`${overallScore}, 100`}
                        />
                      </svg>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-3xl font-bold text-primary">{overallScore}%</span>
                      </div>
                    </div>
                    <h3 className="font-semibold text-lg">Overall Score</h3>
                    <p className="text-muted-foreground">Great improvement!</p>
                  </div>
                  
                  <div className="space-y-4">
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium">Content Quality</span>
                        <span className="text-sm text-muted-foreground">{metrics.content}%</span>
                      </div>
                      <Progress value={metrics.content} className="h-2" />
                    </div>
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium">Delivery Style</span>
                        <span className="text-sm text-muted-foreground">{metrics.delivery}%</span>
                      </div>
                      <Progress value={metrics.delivery} className="h-2" />
                    </div>
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium">Confidence Level</span>
                        <span className="text-sm text-muted-foreground">{metrics.confidence}%</span>
                      </div>
                      <Progress value={metrics.confidence} className="h-2" />
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3 p-3 bg-success/10 rounded-lg">
                      <TrendingUp className="w-5 h-5 text-success" />
                      <div>
                        <p className="font-medium text-success">+{improvement} points</p>
                        <p className="text-xs text-success/80">Since last session</p>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <Eye className="w-4 h-4 text-muted-foreground" />
                        <span className="text-sm">Eye Contact: {metrics.eyeContact}%</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Volume2 className="w-4 h-4 text-muted-foreground" />
                        <span className="text-sm">Speech Pace: {metrics.speechPace}%</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <MessageSquare className="w-4 h-4 text-muted-foreground" />
                        <span className="text-sm">Clarity: {metrics.clarity}%</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Detailed Analysis */}
            <Tabs defaultValue="strengths" className="w-full">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="strengths">Strengths</TabsTrigger>
                <TabsTrigger value="improvements">Areas to Improve</TabsTrigger>
                <TabsTrigger value="recommendations">Recommendations</TabsTrigger>
                <TabsTrigger value="transcript">Transcript</TabsTrigger>
              </TabsList>
              
              <TabsContent value="strengths" className="space-y-4">
                <Card className="shadow-elegant">
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <Award className="w-5 h-5 text-success" />
                      <span>What You Did Well</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {strengths.map((strength, index) => (
                        <div key={index} className="flex items-start space-x-3 p-4 bg-success/5 rounded-lg border border-success/20">
                          <div className="w-2 h-2 bg-success rounded-full mt-2 flex-shrink-0"></div>
                          <p className="text-sm">{strength}</p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="improvements" className="space-y-4">
                <Card className="shadow-elegant">
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <Target className="w-5 h-5 text-warning" />
                      <span>Focus Areas</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {improvements.map((improvement, index) => (
                        <div key={index} className="flex items-start space-x-3 p-4 bg-warning/5 rounded-lg border border-warning/20">
                          <div className="w-2 h-2 bg-warning rounded-full mt-2 flex-shrink-0"></div>
                          <p className="text-sm">{improvement}</p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="recommendations" className="space-y-4">
                <Card className="shadow-elegant">
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <Brain className="w-5 h-5 text-primary" />
                      <span>Personalized Recommendations</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {recommendations.map((rec, index) => (
                        <div key={index} className="p-4 border rounded-lg">
                          <div className="flex items-start justify-between mb-2">
                            <h4 className="font-medium">{rec.title}</h4>
                            <Badge variant={rec.priority === 'High' ? 'destructive' : rec.priority === 'Medium' ? 'secondary' : 'outline'}>
                              {rec.priority}
                            </Badge>
                          </div>
                          <p className="text-sm text-muted-foreground">{rec.description}</p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="transcript" className="space-y-4">
                <Card className="shadow-elegant">
                  <CardHeader>
                    <CardTitle>Interview Transcript</CardTitle>
                    <CardDescription>Your responses with AI analysis</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="p-4 bg-muted/50 rounded-lg">
                        <p className="text-sm font-medium mb-2">Q1: Tell me about yourself and your background in software engineering.</p>
                        <p className="text-sm text-muted-foreground mb-2">
                          "I'm a passionate software engineer with 3 years of experience in full-stack development. I've worked primarily with React and Node.js, building scalable web applications..."
                        </p>
                        <div className="flex items-center space-x-2">
                          <Badge variant="secondary">Strong opening</Badge>
                          <Badge variant="outline">Clear structure</Badge>
                        </div>
                      </div>
                      
                      <div className="p-4 bg-muted/50 rounded-lg">
                        <p className="text-sm font-medium mb-2">Q2: What's your approach to debugging complex technical issues?</p>
                        <p className="text-sm text-muted-foreground mb-2">
                          "When I encounter complex bugs, I follow a systematic approach. First, I reproduce the issue consistently, then I use debugging tools like browser dev tools..."
                        </p>
                        <div className="flex items-center space-x-2">
                          <Badge variant="secondary">Methodical approach</Badge>
                          <Badge variant="outline">Good examples</Badge>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Progress Tracking */}
            <Card className="shadow-elegant">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <TrendingUp className="w-5 h-5 text-primary" />
                  <span>Progress</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {sessionData.map((session, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <div className={`w-2 h-2 rounded-full ${index === sessionData.length - 1 ? 'bg-primary' : 'bg-muted-foreground'}`}></div>
                        <span className="text-sm">Session {session.session}</span>
                      </div>
                      <div className="text-right">
                        <span className="text-sm font-medium">{session.score}%</span>
                        <p className="text-xs text-muted-foreground">{session.date}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Next Steps */}
            <Card className="shadow-elegant">
              <CardHeader>
                <CardTitle>Next Steps</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <Button 
                  className="w-full justify-start"
                  onClick={() => navigate('/configure')}
                >
                  <ChevronRight className="w-4 h-4 mr-2" />
                  Practice Again
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Clock className="w-4 h-4 mr-2" />
                  Schedule Follow-up
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <MessageSquare className="w-4 h-4 mr-2" />
                  Join Community
                </Button>
              </CardContent>
            </Card>

            {/* Session Stats */}
            <Card className="shadow-elegant">
              <CardHeader>
                <CardTitle>Session Stats</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Duration</span>
                    <span className="text-sm font-medium">28:34</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Questions</span>
                    <span className="text-sm font-medium">5 of 5</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Words spoken</span>
                    <span className="text-sm font-medium">1,247</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Avg response time</span>
                    <span className="text-sm font-medium">12s</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feedback;