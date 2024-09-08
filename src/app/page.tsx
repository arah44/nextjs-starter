import { auth } from "@/app/auth";
import Link from "next/link";
import Image from "next/image";
import AnimateFadeIn from "@/components/animate-fade-in";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/header";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowRight, Zap, Database, Palette, Lock, Layout, Rocket, Check, Star, User, Shield, Layers, Moon, Sparkles, FileCode } from "lucide-react";

export default async function Home() {
  const session = await auth();

  return (
    <AnimateFadeIn>
      <div className="flex flex-col min-h-screen">
        <Header session={session} />
        
        <main className="flex-grow container mx-auto px-4 py-14 space-y-24">
          <section className="text-center max-w-3xl mx-auto pt-16">
            <h1 className="text-4xl lg:text-6xl font-extrabold tracking-tight mb-6 text-primary">
              Elevate Your Web Development
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Streamline your projects with our professional-grade toolkit. Build faster, smarter, and with confidence.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button asChild size="lg">
                <Link href="/signin" className="flex items-center">
                  Get Started <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button variant="outline" size="lg">
                <Link href="#features">Learn More</Link>
              </Button>
            </div>
          </section>

          <section id="features">
            <h2 className="text-3xl font-bold text-center mb-12 text-primary">Powerful Features</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: Zap,
                  title: "Next.js & React",
                  description: "Build modern, server-side rendered React applications with ease.",
                },
                {
                  icon: Palette,
                  title: "Tailwind CSS",
                  description: "Rapidly build custom designs with utility-first CSS framework.",
                },
                {
                  icon: Shield,
                  title: "Next-Auth",
                  description: "Implement secure, flexible authentication with minimal setup.",
                },
                {
                  icon: Database,
                  title: "Drizzle ORM",
                  description: "Type-safe, intuitive database toolkit for TypeScript developers.",
                },
                {
                  icon: Check,
                  title: "Zod",
                  description: "TypeScript-first schema validation with static type inference.",
                },
                {
                  icon: Layers,
                  title: "Radix UI",
                  description: "Unstyled, accessible components for building high‑quality design systems.",
                },
                {
                  icon: Moon,
                  title: "Next-Themes",
                  description: "Perfect dark mode in a Next.js app with multiple themes support.",
                },
                {
                  icon: Sparkles,
                  title: "Framer Motion",
                  description: "Production-ready animation library for React applications.",
                },
                {
                  icon: FileCode,
                  title: "TypeScript",
                  description: "Strongly typed programming language that builds on JavaScript.",
                },
              ].map((feature, index) => (
                <Card key={index} className="flex flex-col bg-card hover:bg-accent transition-colors duration-200">
                  <CardHeader>
                    <div className="flex items-center space-x-2">
                      <feature.icon className="h-6 w-6 text-primary" />
                      <CardTitle className="text-primary">{feature.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <p className="text-card-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-center mb-12 text-primary">Why Choose RocketKit?</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Rapid Development",
                  description: "Build and deploy up to 3x faster with our pre-configured setup and optimized workflows.",
                  stat: "300%",
                  statDescription: "faster development",
                },
                {
                  title: "Scalable Architecture",
                  description: "Our toolkit scales effortlessly, supporting projects from 100 to 1M+ users without breaking a sweat.",
                  stat: "99.9%",
                  statDescription: "uptime guarantee",
                },
                {
                  title: "Developer Productivity",
                  description: "Boost your team's efficiency with our intuitive APIs, hot reloading, and TypeScript integration.",
                  stat: "40%",
                  statDescription: "increase in productivity",
                },
              ].map((feature, index) => (
                <Card key={index} className="bg-card hover:bg-accent transition-colors duration-200">
                  <CardHeader>
                    <CardTitle className="text-primary">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-card-foreground mb-4">{feature.description}</p>
                    <div className="flex items-baseline">
                      <span className="text-4xl font-bold text-primary mr-2">{feature.stat}</span>
                      <span className="text-sm text-muted-foreground">{feature.statDescription}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="mt-12 text-center">
              <p className="text-lg text-muted-foreground mb-6">
                Join over 10,000+ developers who have supercharged their projects with RocketKit.
              </p>
              <Button asChild size="lg">
                <Link href="/signin" className="flex items-center">
                  Start Building Faster <Rocket className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-center mb-12 text-primary">Pricing Plans</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  name: "Starter",
                  price: "$0",
                  features: ["Basic toolkit", "Community support", "1 project"],
                },
                {
                  name: "Pro",
                  price: "$29/mo",
                  features: ["Full toolkit", "Priority support", "Unlimited projects", "Advanced analytics"],
                },
                {
                  name: "Enterprise",
                  price: "Custom",
                  features: ["Custom solutions", "Dedicated support", "On-premise deployment", "SLA"],
                },
              ].map((plan, index) => (
                <Card key={index} className={`bg-card hover:bg-accent transition-colors duration-200 ${index === 1 ? "border-primary" : ""}`}>
                  <CardHeader>
                    <CardTitle className="text-primary">{plan.name}</CardTitle>
                    <CardDescription className="text-2xl font-bold text-card-foreground">{plan.price}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 mb-4">
                      {plan.features.map((feature, fIndex) => (
                        <li key={fIndex} className="flex items-center text-card-foreground">
                          <Check className="h-5 w-5 text-primary mr-2" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Button className="w-full">
                      {index === 2 ? "Contact Sales" : "Get Started"}
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-center mb-12 text-primary">What Our Users Say</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  name: "Alex M.",
                  role: "CTO, TechStart Inc.",
                  text: "With RocketKit, we've reduced our time-to-market by 40%. It's been instrumental in our rapid growth.",
                  stars: 5,
                },
                {
                  name: "Emily R.",
                  role: "UX Director",
                  text: "RocketKit's customizable UI components have allowed us to maintain design consistency across all our products effortlessly.",
                  stars: 5,
                },
              ].map((testimonial, index) => (
                <Card key={index} className="overflow-hidden bg-card hover:bg-accent transition-colors duration-200">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="bg-primary text-primary-foreground rounded-full p-2">
                        <User className="h-8 w-8" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-card-foreground">{testimonial.name}</h3>
                        <Badge variant="secondary">{testimonial.role}</Badge>
                      </div>
                    </div>
                    <div className="flex mb-2">
                      {[...Array(testimonial.stars)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <p className="text-muted-foreground italic">&ldquo;{testimonial.text}&rdquo;</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-center mb-12 text-primary">Frequently Asked Questions</h2>
            <Tabs defaultValue="general" className="w-full max-w-2xl mx-auto">
              <TabsList className="grid w-full grid-cols-2 mb-8">
                <TabsTrigger value="general">General</TabsTrigger>
                <TabsTrigger value="technical">Technical</TabsTrigger>
              </TabsList>
              <TabsContent value="general">
                <Card className="bg-card hover:bg-accent transition-colors duration-200">
                  <CardContent className="pt-6">
                    <dl className="space-y-4">
                      <div>
                        <dt className="font-semibold text-card-foreground">What is RocketKit?</dt>
                        <dd className="text-muted-foreground">RocketKit is a comprehensive web development toolkit designed to streamline your project workflow and boost productivity.</dd>
                      </div>
                      <div>
                        <dt className="font-semibold text-card-foreground">How much does it cost?</dt>
                        <dd className="text-muted-foreground">We offer a free Starter plan and paid plans starting at $29/month. Check our Pricing section for more details.</dd>
                      </div>
                    </dl>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="technical">
                <Card className="bg-card hover:bg-accent transition-colors duration-200">
                  <CardContent className="pt-6">
                    <dl className="space-y-4">
                      <div>
                        <dt className="font-semibold text-card-foreground">Which technologies does RocketKit use?</dt>
                        <dd className="text-muted-foreground">RocketKit is built on Next.js, TypeScript, and uses Drizzle ORM with Turso for database management.</dd>
                      </div>
                      <div>
                        <dt className="font-semibold text-card-foreground">Can I use RocketKit with my existing project?</dt>
                        <dd className="text-muted-foreground">While RocketKit is optimized for new projects, many components can be integrated into existing projects with some adaptation.</dd>
                      </div>
                    </dl>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </section>

          <section className="text-center">
            <h2 className="text-3xl font-bold mb-6 text-primary">Ready to Supercharge Your Development?</h2>
            <p className="text-xl text-muted-foreground mb-8">Join thousands of developers who are building amazing projects with RocketKit.</p>
            <Button asChild size="lg">
              <Link href="/signin" className="flex items-center">
                Get Started Now <Rocket className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </section>
        </main>

        <footer className="py-6 text-center text-sm text-muted-foreground">
          <p>
            By using RocketKit, you agree to our{" "}
            <Link href="/terms" className="underline underline-offset-4 hover:text-primary">
              Terms of Service
            </Link>{" "}
            and{" "}
            <Link href="/privacy" className="underline underline-offset-4 hover:text-primary">
              Privacy Policy
            </Link>
            .
          </p>
        </footer>
      </div>
    </AnimateFadeIn>
  );
}
