import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { useNavigate } from "react-router-dom";
import { Clock, Briefcase, Brain, ChevronRight, Star } from "lucide-react";

const jobRoles = [
  { id: "software-engineer", title: "Software Engineer", level: "Mid-Level", popular: true },
  { id: "data-scientist", title: "Data Scientist", level: "Senior", popular: true },
  { id: "product-manager", title: "Product Manager", level: "Mid-Level", popular: true },
  { id: "frontend-developer", title: "Frontend Developer", level: "Junior", popular: false },
  { id: "backend-developer", title: "Backend Developer", level: "Mid-Level", popular: false },
  { id: "devops-engineer", title: "DevOps Engineer", level: "Senior", popular: false },
  { id: "ui-ux-designer", title: "UI/UX Designer", level: "Mid-Level", popular: false },
  { id: "marketing-manager", title: "Marketing Manager", level: "Senior", popular: false },
];

const durations = [
  { value: "15", label: "15 minutes", description: "Quick practice session" },
  { value: "30", label: "30 minutes", description: "Standard interview length" },
  { value: "45", label: "45 minutes", description: "Comprehensive session" },
  { value: "60", label: "60 minutes", description: "Full technical interview" },
];

const Configure = () => {
  const navigate = useNavigate();
  const [selectedRole, setSelectedRole] = useState("");
  const [selectedDuration, setSelectedDuration] = useState("");
  const [isStarting, setIsStarting] = useState(false);

  const handleStartInterview = () => {
    if (!selectedRole || !selectedDuration) return;
    
    setIsStarting(true);
    setTimeout(() => {
      navigate('/interview');
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gradient-subtle">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
              <Brain className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold text-primary">MockMate AI</span>
          </div>
          <h1 className="text-4xl font-bold mb-2">Customize Your Interview</h1>
          <p className="text-xl text-muted-foreground">Set up your personalized practice session</p>
        </div>

        <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Job Role Selection */}
          <Card className="lg:col-span-2 shadow-elegant">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Briefcase className="w-5 h-5 text-primary" />
                <span>Select Job Role</span>
              </CardTitle>
              <CardDescription>Choose the position you're preparing for</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {jobRoles.map((role) => (
                  <div
                    key={role.id}
                    className={`p-4 rounded-lg border-2 cursor-pointer transition-all ${
                      selectedRole === role.id
                        ? "border-primary bg-primary/5 shadow-soft"
                        : "border-border hover:border-primary/50 hover:bg-primary/5"
                    }`}
                    onClick={() => setSelectedRole(role.id)}
                  >
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="font-semibold">{role.title}</h3>
                      {role.popular && (
                        <Badge variant="secondary" className="text-xs">
                          <Star className="w-3 h-3 mr-1" />
                          Popular
                        </Badge>
                      )}
                    </div>
                    <p className="text-sm text-muted-foreground">{role.level}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Configuration Panel */}
          <div className="space-y-6">
            {/* Duration Selection */}
            <Card className="shadow-elegant">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Clock className="w-5 h-5 text-primary" />
                  <span>Duration</span>
                </CardTitle>
                <CardDescription>How long should the interview be?</CardDescription>
              </CardHeader>
              <CardContent>
                <Select value={selectedDuration} onValueChange={setSelectedDuration}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select duration" />
                  </SelectTrigger>
                  <SelectContent>
                    {durations.map((duration) => (
                      <SelectItem key={duration.value} value={duration.value}>
                        <div>
                          <div className="font-medium">{duration.label}</div>
                          <div className="text-xs text-muted-foreground">{duration.description}</div>
                        </div>
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </CardContent>
            </Card>

            {/* Session Summary */}
            <Card className="shadow-elegant">
              <CardHeader>
                <CardTitle>Session Summary</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label className="text-sm font-medium">Role</Label>
                  <p className="text-sm text-muted-foreground">
                    {selectedRole ? jobRoles.find(r => r.id === selectedRole)?.title : "Not selected"}
                  </p>
                </div>
                <div className="space-y-2">
                  <Label className="text-sm font-medium">Duration</Label>
                  <p className="text-sm text-muted-foreground">
                    {selectedDuration ? `${selectedDuration} minutes` : "Not selected"}
                  </p>
                </div>
                <div className="space-y-2">
                  <Label className="text-sm font-medium">Features</Label>
                  <div className="space-y-1">
                    <p className="text-xs text-muted-foreground">• AI-generated questions</p>
                    <p className="text-xs text-muted-foreground">• Real-time feedback</p>
                    <p className="text-xs text-muted-foreground">• Performance analytics</p>
                    <p className="text-xs text-muted-foreground">• Progress tracking</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Start Button */}
            <Button
              className="w-full h-12 text-base shadow-elegant"
              onClick={handleStartInterview}
              disabled={!selectedRole || !selectedDuration || isStarting}
            >
              {isStarting ? (
                "Starting Interview..."
              ) : (
                <>
                  Start Interview
                  <ChevronRight className="w-4 h-4 ml-2" />
                </>
              )}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Configure;