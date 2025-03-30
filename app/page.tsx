import Link from "next/link"
import Image from "next/image"
import { ArrowRight, CheckCircle, Play, Sparkles, TrendingUp, Video } from "lucide-react"

import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen w-full overflow-x-hidden">
      <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
          <div className="flex gap-6 md:gap-10">
            <Link href="/" className="flex items-center space-x-2">
              <Sparkles className="h-6 w-6 text-primary" />
              <span className="inline-block font-bold">ContentScale</span>
            </Link>
            <nav className="hidden md:flex gap-6">
              <Link href="#services" className="text-sm font-medium transition-colors hover:text-primary">
                Services
              </Link>
              <Link href="#how-it-works" className="text-sm font-medium transition-colors hover:text-primary">
                How It Works
              </Link>
              <Link href="#testimonials" className="text-sm font-medium transition-colors hover:text-primary">
                Results
              </Link>
              <Link href="#pricing" className="text-sm font-medium transition-colors hover:text-primary">
                Pricing
              </Link>
            </nav>
          </div>
          <div className="flex flex-1 items-center justify-end space-x-4">
            <Button variant="ghost" className="hidden md:flex">
              Log in
            </Button>
            <Button>Get Started</Button>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6 max-w-screen-xl mx-auto">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Scale Your Content While You Focus On Your Business
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    We create, edit, and post high-performing content for creators and small business owners. Your
                    audience grows while you run your business.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button size="lg" className="gap-1">
                    Start Scaling Your Views
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                  <Button size="lg" variant="outline" className="gap-1">
                    Watch How It Works
                    <Play className="h-4 w-4" />
                  </Button>
                </div>
                <div className="flex items-center space-x-4 text-sm">
                  <div className="flex items-center gap-1">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>Research-backed content</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>Tailored to your niche</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>Hands-off process</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="relative w-full aspect-video rounded-xl overflow-hidden border shadow-xl">
                  <Image
                    src="/placeholder.svg?height=720&width=1280"
                    alt="Content creation process"
                    fill
                    className="object-cover"
                    priority
                  />
                  <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                    <Button
                      size="icon"
                      variant="outline"
                      className="rounded-full w-16 h-16 bg-background/80 hover:bg-background/90"
                    >
                      <Play className="h-8 w-8" />
                      <span className="sr-only">Play video</span>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="py-12 md:py-24 lg:py-32 bg-muted/50">
          <div className="container px-4 md:px-6 max-w-screen-xl mx-auto">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
                  Our Services
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Full-Service Content Creation</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  We handle every step of the content creation process so you can focus on what you do best.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-4 sm:gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
              <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
                <div className="rounded-full border p-4 bg-background">
                  <TrendingUp className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Niche Research</h3>
                <p className="text-center text-muted-foreground">
                  We analyze your industry, competitors, and audience to identify high-performing content opportunities.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
                <div className="rounded-full border p-4 bg-background">
                  <Sparkles className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Content Strategy</h3>
                <p className="text-center text-muted-foreground">
                  Custom content plans designed to grow your audience and establish your authority in your niche.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
                <div className="rounded-full border p-4 bg-background">
                  <Video className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Script Writing</h3>
                <p className="text-center text-muted-foreground">
                  Engaging, conversion-focused scripts that resonate with your target audience and drive action.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
                <div className="rounded-full border p-4 bg-background">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6 text-primary"
                  >
                    <path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242" />
                    <path d="M12 12v9" />
                    <path d="m8 17 4 4 4-4" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold">Video Editing</h3>
                <p className="text-center text-muted-foreground">
                  Professional editing that transforms your raw footage into polished, engaging content.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
                <div className="rounded-full border p-4 bg-background">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6 text-primary"
                  >
                    <rect width="18" height="18" x="3" y="3" rx="2" />
                    <path d="M9 8h7" />
                    <path d="M8 12h6" />
                    <path d="M11 16h4" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold">SEO Optimization</h3>
                <p className="text-center text-muted-foreground">
                  Strategic keyword research and optimization to ensure your content ranks and gets discovered.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
                <div className="rounded-full border p-4 bg-background">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6 text-primary"
                  >
                    <path d="M12 20.94c1.5 0 2.75 1.06 4 1.06 3 0 6-8 6-12.22A4.91 4.91 0 0 0 17 5c-2.22 0-4 1.44-5 2-1-.56-2.78-2-5-2a4.9 4.9 0 0 0-5 4.78C2 14 5 22 8 22c1.25 0 2.5-1.06 4-1.06Z" />
                    <path d="M10 2c1 .5 2 2 2 5" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold">Publishing & Distribution</h3>
                <p className="text-center text-muted-foreground">
                  We handle posting and initial promotion to maximize reach and engagement from day one.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="how-it-works" className="py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6 max-w-screen-xl mx-auto">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
                  The Process
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">How It Works</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Our streamlined process makes content creation effortless for busy business owners.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-4 sm:gap-8 py-12 md:grid-cols-3">
              <div className="flex flex-col items-center space-y-4 rounded-lg border p-6 shadow-sm">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-xl font-bold text-primary-foreground">
                  1
                </div>
                <h3 className="text-xl font-bold">Discovery Call</h3>
                <p className="text-center text-muted-foreground">
                  We learn about your business, goals, audience, and content preferences to create a tailored strategy.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4 rounded-lg border p-6 shadow-sm">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-xl font-bold text-primary-foreground">
                  2
                </div>
                <h3 className="text-xl font-bold">Content Creation</h3>
                <p className="text-center text-muted-foreground">
                  Our team researches, writes scripts, and prepares everything you need to record your part.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4 rounded-lg border p-6 shadow-sm">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-xl font-bold text-primary-foreground">
                  3
                </div>
                <h3 className="text-xl font-bold">You Record</h3>
                <p className="text-center text-muted-foreground">
                  Using our detailed script and instructions, you record your portion of the content (typically 15-30
                  minutes).
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4 rounded-lg border p-6 shadow-sm">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-xl font-bold text-primary-foreground">
                  4
                </div>
                <h3 className="text-xl font-bold">We Edit & Polish</h3>
                <p className="text-center text-muted-foreground">
                  Our professional editors transform your raw footage into engaging, high-quality content.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4 rounded-lg border p-6 shadow-sm">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-xl font-bold text-primary-foreground">
                  5
                </div>
                <h3 className="text-xl font-bold">Review & Approve</h3>
                <p className="text-center text-muted-foreground">
                  You review the final content and request any adjustments before publication.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4 rounded-lg border p-6 shadow-sm">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-xl font-bold text-primary-foreground">
                  6
                </div>
                <h3 className="text-xl font-bold">Publish & Grow</h3>
                <p className="text-center text-muted-foreground">
                  We handle publishing and initial promotion, then provide analytics to track performance.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="testimonials" className="py-12 md:py-24 lg:py-32 bg-muted/50">
          <div className="container px-4 md:px-6 max-w-screen-xl mx-auto">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
                  Success Stories
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Results That Speak For Themselves</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  See how we've helped businesses like yours scale their content and grow their audience.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-4 sm:gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
              <div className="flex flex-col justify-between rounded-lg border bg-background p-6 shadow-sm">
                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="h-5 w-5 text-yellow-500"
                      >
                        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-muted-foreground">
                    "ContentScale transformed our social media presence. We went from 500 to over 10,000 followers in
                    just 3 months, and our engagement has skyrocketed."
                  </p>
                </div>
                <div className="mt-6 flex items-center gap-4">
                  <Image
                    src="/placeholder.svg?height=100&width=100"
                    alt="Sarah Johnson"
                    width={40}
                    height={40}
                    className="rounded-full object-cover"
                  />
                  <div>
                    <p className="font-medium">Sarah Johnson</p>
                    <p className="text-sm text-muted-foreground">Fitness Coach</p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-between rounded-lg border bg-background p-6 shadow-sm">
                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="h-5 w-5 text-yellow-500"
                      >
                        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-muted-foreground">
                    "I was spending 20+ hours a week creating content. Now I spend just 2 hours recording, and
                    ContentScale handles the rest. My revenue has doubled while I work less."
                  </p>
                </div>
                <div className="mt-6 flex items-center gap-4">
                  <Image
                    src="/placeholder.svg?height=100&width=100"
                    alt="Michael Chen"
                    width={40}
                    height={40}
                    className="rounded-full object-cover"
                  />
                  <div>
                    <p className="font-medium">Michael Chen</p>
                    <p className="text-sm text-muted-foreground">E-commerce Store Owner</p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-between rounded-lg border bg-background p-6 shadow-sm">
                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="h-5 w-5 text-yellow-500"
                      >
                        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-muted-foreground">
                    "The quality of content that ContentScale produces is incredible. One of our videos went viral with
                    over 2 million views, bringing in hundreds of new clients."
                  </p>
                </div>
                <div className="mt-6 flex items-center gap-4">
                  <Image
                    src="/placeholder.svg?height=100&width=100"
                    alt="Jessica Martinez"
                    width={40}
                    height={40}
                    className="rounded-full object-cover"
                  />
                  <div>
                    <p className="font-medium">Jessica Martinez</p>
                    <p className="text-sm text-muted-foreground">Real Estate Agent</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="inline-flex gap-2 rounded-lg border bg-background p-1">
                <div className="flex h-2 w-8 rounded-md bg-primary"></div>
                <div className="flex h-2 w-2 rounded-md bg-muted"></div>
                <div className="flex h-2 w-2 rounded-md bg-muted"></div>
              </div>
            </div>
          </div>
        </section>

        <section id="pricing" className="py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6 max-w-screen-xl mx-auto">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
                  Pricing
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Simple, Transparent Pricing</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Choose the plan that fits your content needs and business goals.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-4 sm:gap-6 py-12 md:grid-cols-3">
              <div className="flex flex-col rounded-lg border bg-background p-6 shadow-sm">
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold">Starter</h3>
                  <p className="text-muted-foreground">Perfect for new creators looking to establish a presence.</p>
                </div>
                <div className="mt-4 flex items-baseline text-5xl font-bold">
                  $997
                  <span className="ml-1 text-lg font-normal text-muted-foreground">/month</span>
                </div>
                <ul className="mt-6 space-y-3">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>4 videos per month</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>Basic niche research</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>Script writing</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>Standard editing</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>Publishing assistance</span>
                  </li>
                </ul>
                <Button className="mt-8">Get Started</Button>
              </div>
              <div className="flex flex-col rounded-lg border bg-primary p-6 shadow-sm">
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold text-primary-foreground">Growth</h3>
                  <p className="text-primary-foreground/80">Our most popular plan for serious content creators.</p>
                </div>
                <div className="mt-4 flex items-baseline text-5xl font-bold text-primary-foreground">
                  $1,997
                  <span className="ml-1 text-lg font-normal text-primary-foreground/80">/month</span>
                </div>
                <ul className="mt-6 space-y-3 text-primary-foreground">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4" />
                    <span>8 videos per month</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4" />
                    <span>Advanced niche research</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4" />
                    <span>Premium script writing</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4" />
                    <span>Advanced editing with effects</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4" />
                    <span>Full publishing & promotion</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4" />
                    <span>Monthly strategy calls</span>
                  </li>
                </ul>
                <Button className="mt-8 bg-background text-primary hover:bg-background/90">Get Started</Button>
              </div>
              <div className="flex flex-col rounded-lg border bg-background p-6 shadow-sm">
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold">Scale</h3>
                  <p className="text-muted-foreground">For businesses ready to dominate their niche.</p>
                </div>
                <div className="mt-4 flex items-baseline text-5xl font-bold">
                  $3,997
                  <span className="ml-1 text-lg font-normal text-muted-foreground">/month</span>
                </div>
                <ul className="mt-6 space-y-3">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>16 videos per month</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>Comprehensive market research</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>Elite script writing</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>Premium editing with custom effects</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>Full publishing & cross-platform promotion</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>Weekly strategy calls</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>Dedicated content manager</span>
                  </li>
                </ul>
                <Button className="mt-8">Get Started</Button>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-24 lg:py-32 bg-muted/50">
          <div className="container px-4 md:px-6 max-w-screen-xl mx-auto">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Ready to Scale Your Content?</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Book a free strategy call to see how we can help you grow your audience while you focus on your
                  business.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button size="lg" className="gap-1">
                  Book Your Free Strategy Call
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t bg-background">
        <div className="container flex flex-col gap-6 py-8 md:flex-row md:items-center md:justify-between md:py-12">
          <div className="flex flex-col gap-2">
            <Link href="/" className="flex items-center space-x-2">
              <Sparkles className="h-6 w-6 text-primary" />
              <span className="inline-block font-bold">ContentScale</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Helping creators scale their content and grow their audience.
            </p>
          </div>
          <div className="flex flex-col gap-2 md:flex-row md:gap-4">
            <Link href="#" className="text-sm hover:underline">
              Terms of Service
            </Link>
            <Link href="#" className="text-sm hover:underline">
              Privacy Policy
            </Link>
            <Link href="#" className="text-sm hover:underline">
              Contact Us
            </Link>
          </div>
          <div className="flex items-center gap-4">
            <Link href="#" className="text-muted-foreground hover:text-foreground">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-5 w-5"
              >
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
              </svg>
              <span className="sr-only">Facebook</span>
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-foreground">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-5 w-5"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
              </svg>
              <span className="sr-only">Instagram</span>
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-foreground">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-5 w-5"
              >
                <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
              </svg>
              <span className="sr-only">Twitter</span>
            </Link>
          </div>
        </div>
        <div className="border-t py-6">
          <div className="container flex flex-col items-center justify-center gap-2 text-center text-sm text-muted-foreground md:flex-row md:gap-4">
            <p>© 2023 ContentScale. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}