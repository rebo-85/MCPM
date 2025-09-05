import React from "react";
import {
  ArrowRight,
  Check,
  TrendingUp,
  Users2,
  Handshake,
  ShieldCheck,
  Mail,
  Phone,
  MapPin,
  ExternalLink,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {Header, KpiChart} from "@/components/client";
import { motion } from "framer-motion";

// ---------- Types ----------

type NavItem = { label: string; href: string };

type Feature = {
  icon: React.ReactNode;
  title: string;
  description: string;
};

type Plan = {
  name: string;
  price: string;
  tagline: string;
  features: string[];
  cta: string;
  highlighted?: boolean;
};

type Testimonial = {
  quote: string;
  author: string;
  role: string;
};

// ---------- Data ----------

const nav: NavItem[] = [
  { label: "Features", href: "#features" },
  { label: "Solutions", href: "#solutions" },
  { label: "Pricing", href: "#pricing" },
  { label: "Work", href: "#portfolio" },
  { label: "About", href: "#about" },
  { label: "FAQ", href: "#faq" },
];

const features: Feature[] = [
  {
    icon: <TrendingUp className="h-6 w-6" />,
    title: "Growth-first",
    description:
      "A strategy-led approach that turns traffic into revenue with measurable outcomes.",
  },
  {
    icon: <Users2 className="h-6 w-6" />,
    title: "Human-centered",
    description:
      "We design experiences people actually enjoy using, not just clicking.",
  },
  {
    icon: <ShieldCheck className="h-6 w-6" />,
    title: "Reliable stack",
    description:
      "Modern, secure, and maintainable tech—battle-tested patterns and tooling.",
  },
  {
    icon: <Handshake className="h-6 w-6" />,
    title: "Partner mindset",
    description:
      "We collaborate as an extension of your team to hit your milestones.",
  },
];

const plans: Plan[] = [
  {
    name: "Starter",
    price: "$499",
    tagline: "Launch a clean, credible presence in days.",
    features: [
      "1 landing page",
      "Basic analytics",
      "Email capture",
      "SEO-ready structure",
    ],
    cta: "Get Started",
  },
  {
    name: "Growth",
    price: "$1,499",
    tagline: "Scale with multi-page and integrations.",
    features: [
      "Up to 8 pages",
      "Blog + CMS",
      "CRM integration",
      "Performance optimization",
    ],
    cta: "Scale Now",
    highlighted: true,
  },
  {
    name: "Custom",
    price: "Book call",
    tagline: "Tailored builds for unique needs.",
    features: [
      "Custom design system",
      "Advanced automations",
      "A/B testing",
      "Priority support",
    ],
    cta: "Talk to Us",
  },
];

const testimonials: Testimonial[] = [
  {
    quote:
      "They delivered a site that 10x'd our inbound demos in 60 days—clean, fast, and on-brand.",
    author: "Avery Chen",
    role: "Head of Growth, LumenAI",
  },
  {
    quote:
      "Seamless collaboration and real business outcomes. We treat them like part of the team.",
    author: "Miguel Santos",
    role: "COO, Coastline Logistics",
  },
  {
    quote:
      "From strategy to execution—flawless. Our conversions are up and the site is easy to manage.",
    author: "Priya Sharma",
    role: "Marketing Lead, Finverse",
  },
];

const kpiData = [
  { name: "Jan", value: 12 },
  { name: "Feb", value: 18 },
  { name: "Mar", value: 26 },
  { name: "Apr", value: 31 },
  { name: "May", value: 45 },
  { name: "Jun", value: 58 },
];

// ---------- Components ----------

const Container: React.FC<React.PropsWithChildren<{ className?: string }>> = ({
  children,
  className = "",
}) => (
  <div
    className={`mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 ${className}`}
  >
    {children}
  </div>
);

const Hero: React.FC = () => (
  <section className="relative overflow-hidden">
    <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-white via-white to-gray-50" />
    <Container className="py-20 md:py-28 grid lg:grid-cols-2 gap-10 items-center">
      <div className="space-y-6 opacity-0 animate-fadeIn">
        <Badge className="rounded-2xl px-3 py-1">New: Site Launch Kit</Badge>
        <h1 className="text-4xl md:text-6xl font-semibold leading-tight">
          Build a business website that looks great and sells even better.
        </h1>
        <p className="text-gray-600 text-lg md:text-xl">
          Strategy, design, and development in one modern template. Ship fast,
          iterate faster.
        </p>
        <div className="flex flex-col sm:flex-row gap-3">
          <Button className="rounded-2xl h-11 px-6">
            Start Free Brief
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
          <Button variant="outline" className="rounded-2xl h-11 px-6">
            View Work
            <ExternalLink className="ml-2 h-4 w-4" />
          </Button>
        </div>
        <div className="flex items-center gap-6 pt-2">
          <div className="text-3xl font-semibold">+58%</div>
          <div className="text-gray-600">avg. lead growth after launch</div>
        </div>
      </div>
      <div className="rounded-3xl border bg-white p-6 shadow-sm opacity-0 animate-fadeIn [animation-delay:200ms]">
        <div className="text-sm font-medium mb-4">Projected Impact</div>
        <div className="h-64 w-full">
          <KpiChart data={kpiData} />
        </div>
        <div className="mt-4 grid grid-cols-3 gap-4">
          {["Speed", "SEO", "Leads"].map((k) => (
            <div key={k} className="rounded-2xl border p-3 text-center">
              <div className="text-xl font-semibold">A+</div>
              <div className="text-xs text-gray-600">{k}</div>
            </div>
          ))}
        </div>
      </div>
    </Container>
  </section>
);

const Features: React.FC = () => (
  <section id="features" className="py-16 md:py-24">
    <Container>
      <div className="mx-auto max-w-2xl text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-semibold">Everything you need to win online</h2>
        <p className="text-gray-600 mt-3">A modular template that adapts to any service business.</p>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((f) => (
          <Card key={f.title} className="rounded-3xl">
            <CardHeader>
              <div className="h-11 w-11 rounded-2xl border grid place-items-center mb-2">{f.icon}</div>
              <CardTitle className="text-lg">{f.title}</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-gray-600">{f.description}</CardContent>
          </Card>
        ))}
      </div>
    </Container>
  </section>
);

const Solutions: React.FC = () => (
  <section id="solutions" className="py-16 md:py-24 bg-gray-50">
    <Container>
      <div className="grid lg:grid-cols-3 gap-6 items-stretch">
        <Card className="rounded-3xl lg:col-span-2">
          <CardHeader>
            <Badge className="rounded-2xl w-fit mb-2">Services</Badge>
            <CardTitle className="text-2xl">High-impact website builds</CardTitle>
          </CardHeader>
          <CardContent className="grid sm:grid-cols-2 gap-4">
            {["Brand sites", "Marketing sites", "Landing pages", "Ecommerce"].map((s) => (
              <div key={s} className="rounded-2xl border p-4 flex items-start gap-3">
                <Check className="h-5 w-5" />
                <div>
                  <div className="font-medium">{s}</div>
                  <div className="text-sm text-gray-600">Built for speed, SEO, and conversion.</div>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
        <Card className="rounded-3xl">
          <CardHeader>
            <Badge className="rounded-2xl w-fit mb-2">Add-ons</Badge>
            <CardTitle className="text-2xl">Extras that move the needle</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {["Analytics setup", "CRM + automations", "Content production", "Design system"].map(
              (s) => (
                <div key={s} className="rounded-2xl border p-4 flex items-start gap-3">
                  <Check className="h-5 w-5" />
                  <div>
                    <div className="font-medium">{s}</div>
                    <div className="text-sm text-gray-600">Plug-and-play with your stack.</div>
                  </div>
                </div>
              )
            )}
          </CardContent>
        </Card>
      </div>
    </Container>
  </section>
);

const Portfolio: React.FC = () => (
  <section id="portfolio" className="py-16 md:py-24">
    <Container>
      <div className="flex items-end justify-between mb-8">
        <div>
          <h3 className="text-3xl font-semibold">Recent work</h3>
          <p className="text-gray-600">Case studies that show the process and the wins.</p>
        </div>
        <Button variant="outline" className="rounded-2xl">View All</Button>
      </div>
      <div className="grid md:grid-cols-3 gap-6">
        {[1, 2, 3].map((i) => (
          <Card key={i} className="rounded-3xl overflow-hidden">
            <div className="aspect-[16/10] bg-gradient-to-br from-gray-100 to-gray-200" />
            <CardHeader>
              <CardTitle className="text-lg">Project {i}</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-gray-600">
              Conversion-focused redesign yielding measurable growth.
            </CardContent>
          </Card>
        ))}
      </div>
    </Container>
  </section>
);

const Pricing: React.FC = () => (
  <section id="pricing" className="py-16 md:py-24 bg-gray-50">
    <Container>
      <div className="mx-auto max-w-2xl text-center mb-12">
        <h3 className="text-3xl md:text-4xl font-semibold">Simple pricing</h3>
        <p className="text-gray-600 mt-3">Pick a plan and upgrade when you grow.</p>
      </div>
      <div className="grid md:grid-cols-3 gap-6">
        {plans.map((p) => (
          <Card
            key={p.name}
            className={`rounded-3xl ${p.highlighted ? "border-black shadow-md" : ""}`}
          >
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-2xl">{p.name}</CardTitle>
                {p.highlighted && <Badge className="rounded-2xl">Popular</Badge>}
              </div>
              <div className="text-3xl font-semibold">{p.price}</div>
              <div className="text-sm text-gray-600">{p.tagline}</div>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {p.features.map((f) => (
                  <div key={f} className="flex items-start gap-2">
                    <Check className="h-5 w-5" />
                    <span className="text-sm">{f}</span>
                  </div>
                ))}
              </div>
              <Button className="rounded-2xl w-full mt-6">{p.cta}</Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </Container>
  </section>
);

const Testimonials: React.FC = () => (
  <section className="py-16 md:py-24">
    <Container>
      <div className="mx-auto max-w-2xl text-center mb-12">
        <h3 className="text-3xl md:text-4xl font-semibold">What clients say</h3>
        <p className="text-gray-600 mt-3">Proof from real projects and teams.</p>
      </div>
      <div className="grid md:grid-cols-3 gap-6">
        {testimonials.map((t) => (
          <Card key={t.author} className="rounded-3xl">
            <CardContent className="pt-6">
              <p className="text-gray-700">“{t.quote}”</p>
              <div className="mt-4 text-sm">
                <div className="font-medium">{t.author}</div>
                <div className="text-gray-600">{t.role}</div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </Container>
  </section>
);

const About: React.FC = () => (
  <section id="about" className="py-16 md:py-24 bg-gray-50">
    <Container className="grid lg:grid-cols-2 gap-10 items-center">
      <div className="rounded-3xl border aspect-[4/3] bg-gradient-to-br from-gray-100 to-gray-200" />
      <div>
        <h3 className="text-3xl md:text-4xl font-semibold">We build with intent</h3>
        <p className="text-gray-600 mt-4">
          Senior-level designers and engineers shipping modern websites that are fast, scalable, and easy to maintain. We focus on business outcomes—leads, demos, and sales—not vanity metrics.
        </p>
        <div className="mt-6 grid sm:grid-cols-3 gap-4">
          {["<1 week MVP", "95+ Lighthouse", "SEO-ready"].map((k) => (
            <div key={k} className="rounded-2xl border p-4 text-center">
              <div className="text-xl font-semibold">{k}</div>
            </div>
          ))}
        </div>
      </div>
    </Container>
  </section>
);

const FAQ: React.FC = () => (
  <section id="faq" className="py-16 md:py-24">
    <Container>
      <div className="mx-auto max-w-2xl text-center mb-8">
        <h3 className="text-3xl md:text-4xl font-semibold">FAQ</h3>
        <p className="text-gray-600 mt-3">Quick answers to common questions.</p>
      </div>
      <div className="mx-auto max-w-2xl">
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger>How long does a project take?</AccordionTrigger>
            <AccordionContent>
              Typical engagements ship in 2–6 weeks depending on scope and content readiness.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>What stack do you use?</AccordionTrigger>
            <AccordionContent>
              React/Next.js, TypeScript, Tailwind, and a headless CMS. We integrate with your tools.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>Do you offer ongoing support?</AccordionTrigger>
            <AccordionContent>
              Yes—maintenance, iteration sprints, and growth retainers are available.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </Container>
  </section>
);

const Contact: React.FC = () => (
  <section id="contact" className="py-16 md:py-24 bg-gray-50">
    <Container className="grid lg:grid-cols-2 gap-8 items-start">
      <Card className="rounded-3xl">
        <CardHeader>
          <CardTitle className="text-2xl">Tell us about your project</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <Input placeholder="Full name" />
          <Input type="email" placeholder="Work email" />
          <Input placeholder="Company" />
          <Textarea placeholder="What are you trying to achieve?" />
          <Button className="rounded-2xl w-full h-11">Send Inquiry</Button>
          <div className="text-xs text-gray-600 text-center">
            By submitting, you agree to our terms and privacy policy.
          </div>
        </CardContent>
      </Card>
      <div className="space-y-4">
        <div className="rounded-3xl border p-6 flex items-start gap-4">
          <Mail className="h-5 w-5" />
          <div>
            <div className="font-medium">Email</div>
            <a href="mailto:hello@brand.com" className="text-gray-600">hello@brand.com</a>
          </div>
        </div>
        <div className="rounded-3xl border p-6 flex items-start gap-4">
          <Phone className="h-5 w-5" />
          <div>
            <div className="font-medium">Phone</div>
            <a href="tel:+11234567890" className="text-gray-600">+1 (123) 456-7890</a>
          </div>
        </div>
        <div className="rounded-3xl border p-6 flex items-start gap-4">
          <MapPin className="h-5 w-5" />
          <div>
            <div className="font-medium">Office</div>
            <div className="text-gray-600">123 Market St, Suite 400, Manila</div>
          </div>
        </div>
      </div>
    </Container>
  </section>
);

const Footer: React.FC = () => (
  <footer className="py-12 border-t bg-white">
    <Container className="grid md:grid-cols-4 gap-8 text-sm">
      <div className="space-y-3">
        <a href="#" className="flex items-center gap-2 font-semibold">
          <div className="h-8 w-8 rounded-2xl bg-black text-white grid place-items-center">B</div>
          <span className="text-lg">Brand</span>
        </a>
        <p className="text-gray-600">
          Modern websites that drive growth. Built fast, built right.
        </p>
      </div>
      <div>
        <div className="font-medium mb-3">Company</div>
        <ul className="space-y-2 text-gray-600">
          <li><a href="#about">About</a></li>
          <li><a href="#portfolio">Work</a></li>
          <li><a href="#pricing">Pricing</a></li>
          <li><a href="#faq">FAQ</a></li>
        </ul>
      </div>
      <div>
        <div className="font-medium mb-3">Resources</div>
        <ul className="space-y-2 text-gray-600">
          <li><a href="#">Blog</a></li>
          <li><a href="#">Guides</a></li>
          <li><a href="#">Privacy</a></li>
          <li><a href="#">Terms</a></li>
        </ul>
      </div>
      <div>
        <div className="font-medium mb-3">Newsletter</div>
        <div className="flex gap-2">
          <Input placeholder="Your email" />
          <Button className="rounded-2xl">Join</Button>
        </div>
        <div className="text-xs text-gray-600 mt-2">No spam. Unsubscribe anytime.</div>
      </div>
    </Container>
    <Container className="pt-8 mt-8 border-t text-xs text-gray-600 flex items-center justify-between">
      <div>© {new Date().getFullYear()} Brand, Inc. All rights reserved.</div>
      <div className="flex gap-4">
        <a href="#">LinkedIn</a>
        <a href="#">Twitter</a>
        <a href="#">Instagram</a>
      </div>
    </Container>
  </footer>
);


export default function BusinessWebsiteTemplate() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      <Header />
      <Hero />
      <Features />
      <Solutions />
      <Portfolio />
      <Pricing />
      <Testimonials />
      <About />
      <FAQ />
      <Contact />
      <Footer />
    </main>
  );
}
