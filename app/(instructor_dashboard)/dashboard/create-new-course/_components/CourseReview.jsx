import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Check, Edit } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function CourseReview() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="border-b">
        <div className="container flex items-center justify-between py-4">
          <Link
            href="/"
            className="flex items-center gap-2 text-muted-foreground hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Back to Dashboard</span>
          </Link>
          <div className="flex items-center gap-4">
            <Badge
              variant="outline"
              className="text-green-500 border-green-200 bg-green-50"
            >
              Review Mode
            </Badge>
            <Button>Submit For Review</Button>
          </div>
        </div>
      </header>

      <main className="flex-1 container py-8">
        <div className="max-w-5xl mx-auto space-y-8">
          <div className="flex items-center justify-between">
            <h1 className="text-3xl font-bold">Course Review</h1>
            <Button variant="outline" asChild>
              <Link href="/preview">Preview Course</Link>
            </Button>
          </div>

          <div className="grid gap-6">
            {/* Basic Information */}
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle>Basic Information</CardTitle>
                <Button variant="ghost" size="sm" className="h-8 gap-1">
                  <Edit className="h-4 w-4" />
                  Edit
                </Button>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <p className="text-sm font-medium text-muted-foreground">
                        Title
                      </p>
                      <p className="mt-1">Web Development Masterclass</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-muted-foreground">
                        Subtitle
                      </p>
                      <p className="mt-1">
                        Learn to build modern, responsive websites from scratch
                      </p>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-muted-foreground">
                        Category
                      </p>
                      <p className="mt-1">Development</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <p className="text-sm font-medium text-muted-foreground">
                        Sub-category
                      </p>
                      <p className="mt-1">Web Development</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-muted-foreground">
                        Topic
                      </p>
                      <p className="mt-1">HTML, CSS, JavaScript, React</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-muted-foreground">
                        Language
                      </p>
                      <p className="mt-1">English</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <p className="text-sm font-medium text-muted-foreground">
                        Course Level
                      </p>
                      <p className="mt-1">Intermediate</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-muted-foreground">
                        Duration
                      </p>
                      <p className="mt-1">24 hours</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Advanced Information */}
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle>Advanced Information</CardTitle>
                <Button variant="ghost" size="sm" className="h-8 gap-1">
                  <Edit className="h-4 w-4" />
                  Edit
                </Button>
              </CardHeader>
              <CardContent>
                <div className="grid gap-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <p className="text-sm font-medium text-muted-foreground mb-2">
                        Course Thumbnail
                      </p>
                      <div className="relative aspect-video rounded-lg overflow-hidden border bg-muted">
                        <Image
                          src="/placeholder.svg?height=200&width=350"
                          alt="Course thumbnail"
                          fill
                          className="object-cover"
                        />
                      </div>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-muted-foreground mb-2">
                        Course Trailer
                      </p>
                      <div className="relative aspect-video rounded-lg overflow-hidden border bg-muted flex items-center justify-center">
                        <div className="h-12 w-12 rounded-full bg-white/90 flex items-center justify-center">
                          <div className="h-0 w-0 border-y-6 border-y-transparent border-l-10 border-l-primary ml-1"></div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <p className="text-sm font-medium text-muted-foreground mb-2">
                      Course Description
                    </p>
                    <p className="text-sm text-muted-foreground">
                      This comprehensive course will take you from beginner to
                      professional web developer. Youll learn HTML, CSS,
                      JavaScript, React, and more through hands-on projects and
                      real-world examples. By the end of this course, youll have
                      the skills to build modern, responsive websites and web
                      applications.
                    </p>
                  </div>

                  <div>
                    <p className="text-sm font-medium text-muted-foreground mb-2">
                      What You Will Teach
                    </p>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {[
                        "Build responsive websites using HTML5 and CSS3",
                        "Create interactive web applications with JavaScript",
                        "Develop modern UIs with React.js",
                        "Implement user authentication and authorization",
                      ].map((item, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <Check className="h-4 w-4 text-green-500 mt-0.5" />
                          <span className="text-sm">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <p className="text-sm font-medium text-muted-foreground mb-2">
                      Target Audience
                    </p>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {[
                        "Beginners who want to learn web development",
                        "Designers looking to expand their coding skills",
                        "Developers wanting to update their knowledge",
                        "Anyone interested in building websites",
                      ].map((item, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <Check className="h-4 w-4 text-green-500 mt-0.5" />
                          <span className="text-sm">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <p className="text-sm font-medium text-muted-foreground mb-2">
                      Course Requirements
                    </p>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {[
                        "Basic computer skills",
                        "No prior coding experience needed",
                        "A computer with internet access",
                        "Eagerness to learn and practice",
                      ].map((item, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <Check className="h-4 w-4 text-green-500 mt-0.5" />
                          <span className="text-sm">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Curriculum */}
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle>Curriculum</CardTitle>
                <Button variant="ghost" size="sm" className="h-8 gap-1">
                  <Edit className="h-4 w-4" />
                  Edit
                </Button>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="border rounded-lg overflow-hidden">
                    <div className="bg-muted px-4 py-3 flex items-center justify-between font-medium">
                      <div>Section 01: Introduction to Web Development</div>
                      <div className="text-sm text-muted-foreground">
                        3 lectures • 45 min
                      </div>
                    </div>
                    <div className="divide-y">
                      <div className="px-4 py-3 flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className="h-2 w-2 rounded-full bg-primary"></div>
                          <span>Welcome to the Course</span>
                        </div>
                        <div className="text-sm text-muted-foreground">
                          10 min
                        </div>
                      </div>
                      <div className="px-4 py-3 flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className="h-2 w-2 rounded-full bg-primary"></div>
                          <span>Setting Up Your Development Environment</span>
                        </div>
                        <div className="text-sm text-muted-foreground">
                          15 min
                        </div>
                      </div>
                      <div className="px-4 py-3 flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className="h-2 w-2 rounded-full bg-primary"></div>
                          <span>Web Development Overview</span>
                        </div>
                        <div className="text-sm text-muted-foreground">
                          20 min
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="border rounded-lg overflow-hidden">
                    <div className="bg-muted px-4 py-3 flex items-center justify-between font-medium">
                      <div>Section 02: HTML Fundamentals</div>
                      <div className="text-sm text-muted-foreground">
                        4 lectures • 1h 20min
                      </div>
                    </div>
                    <div className="divide-y">
                      <div className="px-4 py-3 flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className="h-2 w-2 rounded-full bg-primary"></div>
                          <span>HTML Document Structure</span>
                        </div>
                        <div className="text-sm text-muted-foreground">
                          20 min
                        </div>
                      </div>
                      <div className="px-4 py-3 flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className="h-2 w-2 rounded-full bg-primary"></div>
                          <span>Working with Text Elements</span>
                        </div>
                        <div className="text-sm text-muted-foreground">
                          25 min
                        </div>
                      </div>
                      <div className="px-4 py-3 flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className="h-2 w-2 rounded-full bg-primary"></div>
                          <span>HTML Forms and Inputs</span>
                        </div>
                        <div className="text-sm text-muted-foreground">
                          20 min
                        </div>
                      </div>
                      <div className="px-4 py-3 flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className="h-2 w-2 rounded-full bg-primary"></div>
                          <span>Semantic HTML</span>
                        </div>
                        <div className="text-sm text-muted-foreground">
                          15 min
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Publish Course */}
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle>Publish Settings</CardTitle>
                <Button variant="ghost" size="sm" className="h-8 gap-1">
                  <Edit className="h-4 w-4" />
                  Edit
                </Button>
              </CardHeader>
              <CardContent>
                <div className="grid gap-6">
                  <div>
                    <p className="text-sm font-medium text-muted-foreground mb-2">
                      Welcome Message
                    </p>
                    <p className="text-sm">
                      Welcome to the Web Development Masterclass! Im excited to
                      have you join this course. Get ready to embark on an
                      exciting journey into the world of web development. By the
                      end of this course, youll have the skills to build your
                      own websites from scratch.
                    </p>
                  </div>

                  <div>
                    <p className="text-sm font-medium text-muted-foreground mb-2">
                      Congratulations Message
                    </p>
                    <p className="text-sm">
                      Congratulations on completing the Web Development
                      Masterclass! Youve learned valuable skills that will help
                      you in your web development journey. Remember to keep
                      practicing and building projects to reinforce what youve
                      learned. I cant wait to see what youll create!
                    </p>
                  </div>

                  <div>
                    <p className="text-sm font-medium text-muted-foreground mb-2">
                      Instructors
                    </p>
                    <div className="flex flex-wrap gap-4">
                      <div className="flex items-center gap-3 border rounded-lg p-3">
                        <Avatar>
                          <AvatarImage
                            src="/placeholder.svg?height=40&width=40"
                            alt="Instructor"
                          />
                          <AvatarFallback>JD</AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="text-sm font-medium">John Doe</p>
                          <p className="text-xs text-muted-foreground">
                            UI/UX Designer
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3 border rounded-lg p-3">
                        <Avatar>
                          <AvatarImage
                            src="/placeholder.svg?height=40&width=40"
                            alt="Instructor"
                          />
                          <AvatarFallback>JS</AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="text-sm font-medium">Jane Smith</p>
                          <p className="text-xs text-muted-foreground">
                            UI/UX Designer
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="flex justify-between pt-4">
            <Button variant="outline">Previous Step</Button>
            <Button>Submit For Review</Button>
          </div>
        </div>
      </main>
    </div>
  );
}
