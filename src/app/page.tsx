"use client";
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
import { Menu, X } from "lucide-react";
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
import { KpiChart } from "@/components/ui/kpi_chart";
import Image from "next/image"
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
const features: Feature[] = [
  {
    icon: <TrendingUp className="h-6 w-6" />,
    title: "Premium Cement",
    description:
      "High-strength cement for durable and long-lasting construction.",
  },
  {
    icon: <Users2 className="h-6 w-6" />,
    title: "Precast Blocks",
    description:
      "Ready-to-use precast concrete blocks for fast and efficient building.",
  },
  {
    icon: <ShieldCheck className="h-6 w-6" />,
    title: "Quality Sand",
    description:
      "Clean, graded sand ideal for mixing and finishing.",
  },
  {
    icon: <Handshake className="h-6 w-6" />,
    title: "Iron Bars",
    description:
      "Reinforced iron bars for strong structural support.",
  },
];

const plans: Plan[] = [
  {
    name: "Basic Materials",
    price: "$199",
    tagline: "Essential supplies for small projects.",
    features: [
      "1 bag premium cement",
      "10 precast blocks",
      "1 ton quality sand",
      "5 iron bars",
    ],
    cta: "Order Now",
  },
  {
    name: "Builder's Choice",
    price: "$799",
    tagline: "Best value for medium construction needs.",
    features: [
      "10 bags premium cement",
      "100 precast blocks",
      "5 tons quality sand",
      "50 iron bars",
    ],
    cta: "Get Builder Pack",
    highlighted: true,
  },
  {
    name: "Custom Bulk",
    price: "Contact Us",
    tagline: "Tailored bulk orders for large projects.",
    features: [
      "Custom cement quantity",
      "Bulk precast blocks",
      "Bulk sand delivery",
      "Bulk iron bars",
    ],
    cta: "Request Quote",
  },
];

const testimonials: Testimonial[] = [
  {
    quote:
      "The cement quality is top-notch and delivery was always on time. Our projects are stronger than ever.",
    author: "Engr. Carlos Dela Cruz",
    role: "Site Manager, BuildPro Inc.",
  },
  {
    quote:
      "Precast blocks and iron bars from MCPM made our construction process faster and more reliable.",
    author: "Maria Santos",
    role: "Project Engineer, UrbanRise",
  },
  {
    quote:
      "We trust MCPM for all our sand and cement needs. Consistent quality and great service.",
    author: "Jose Ramirez",
    role: "Contractor, Ramirez Builders",
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


const nav: NavItem[] = [
  { label: "Materials", href: "#features" },
  { label: "Products", href: "#solutions" },
  { label: "Pricing", href: "#pricing" },
  { label: "Projects", href: "#portfolio" },
  { label: "About Us", href: "#about" },
  { label: "FAQ", href: "#faq" },
];

const image_urls = [
  "/images/sample1.jpg",
  "/images/sample2.jpg",
  "/images/sample3.jpg",
  // add more image paths as needed
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


const Header: React.FC = () => {
  const [open, setOpen] = React.useState(false);
  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/80 border-b">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 flex items-center justify-between py-4">
      <a href="#" className="flex items-center gap-2 font-semibold">
        <Image
          src="/favicon.ico"
          alt="MCPM logo"
          width={32}
          height={32}
          className="h-8 w-8 rounded-2xl bg-black text-white grid place-items-center"
          unoptimized
        />
        <span className="text-lg">MCPM</span>
      </a>
        <nav className="hidden md:flex items-center gap-6">
          {nav.map((n) => (
            <a key={n.href} href={n.href} className="text-sm text-gray-600 hover:text-gray-900">
              {n.label}
            </a>
          ))}
          <Button className="rounded-2xl">Order Materials</Button>
        </nav>
        <button
          aria-label="Toggle Menu"
          className="md:hidden p-2"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t bg-white">
          <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-4 flex flex-col gap-4">
            {nav.map((n) => (
              <a key={n.href} href={n.href} className="text-sm text-gray-700">
                {n.label}
              </a>
            ))}
            <Button className="rounded-2xl w-full">Order Materials</Button>
          </div>
        </div>
      )}
    </header>
  );
};


// const ImageLoop: React.FC = () => (
//   <div className="flex gap-4 overflow-x-auto py-4">
//     {image_urls.map((url, idx) => (
//       <Image
//         key={idx}
//         src={url}
//         alt={`loop_image_${idx}`}
//         width={320}
//         height={160}
//         className="h-40 w-auto rounded-xl object-cover flex-shrink-0"
//         unoptimized
//       />
//     ))}
//   </div>
// );

const Hero: React.FC = () => (
  <section className="relative overflow-hidden">
    <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-white via-white to-gray-50" />
    <Container className="py-20 md:py-28 grid lg:grid-cols-2 gap-10 items-center">
      <div className="space-y-6 opacity-0 animate-fadeIn">
        <Badge className="rounded-2xl px-3 py-1">Now Available: Bulk Cement & Blocks</Badge>
        <h1 className="text-4xl md:text-6xl font-semibold leading-tight">
          Build stronger with premium construction materials.
        </h1>
        <p className="text-gray-600 text-lg md:text-xl">
          Cement, sand, precast blocks, and iron bars delivered to your site—fast and reliable.
        </p>
        <div className="flex flex-col sm:flex-row gap-3">
          <Button className="rounded-2xl h-11 px-6">
            Get Free Quote
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
          <Button variant="outline" className="rounded-2xl h-11 px-6">
            View Products
            <ExternalLink className="ml-2 h-4 w-4" />
          </Button>
        </div>
        <div className="flex items-center gap-6 pt-2">
          <div className="text-3xl font-semibold">+75%</div>
          <div className="text-gray-600">faster delivery for your materials</div>
        </div>
      </div>
      <div className="rounded-3xl border bg-white p-6 shadow-sm opacity-0 animate-fadeIn [animation-delay:200ms]">
        <div className="text-sm font-medium mb-4">Material Supply Trend</div>
        <div className="h-64 w-full">
          <KpiChart data={kpiData} />
        </div>
        <div className="mt-4 grid grid-cols-3 gap-4">
          {["Cement", "Blocks", "Iron Bars"].map((k) => (
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
        <h2 className="text-3xl md:text-4xl font-semibold">All the materials you need for your next build</h2>
        <p className="text-gray-600 mt-3">From cement to iron bars, we supply quality construction essentials.</p>
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
            <Badge className="rounded-2xl w-fit mb-2">Products</Badge>
            <CardTitle className="text-2xl">Construction Material Supplies</CardTitle>
          </CardHeader>
          <CardContent className="grid sm:grid-cols-2 gap-4">
            {["Cement", "Precast Blocks", "Sand", "Iron Bars"].map((s) => (
              <div key={s} className="rounded-2xl border p-4 flex items-start gap-3">
                <Check className="h-5 w-5" />
                <div>
                  <div className="font-medium">{s}</div>
                  <div className="text-sm text-gray-600">Available in various grades and sizes.</div>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
        <Card className="rounded-3xl">
          <CardHeader>
            <Badge className="rounded-2xl w-fit mb-2">Add-ons</Badge>
            <CardTitle className="text-2xl">Delivery & Services</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {["Site delivery", "Bulk discounts", "Custom orders", "Technical support"].map(
              (s) => (
                <div key={s} className="rounded-2xl border p-4 flex items-start gap-3">
                  <Check className="h-5 w-5" />
                  <div>
                    <div className="font-medium">{s}</div>
                    <div className="text-sm text-gray-600">Enhance your material sourcing experience.</div>
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
          <h3 className="text-3xl font-semibold">Recent Projects</h3>
          <p className="text-gray-600">See how our materials power real construction sites.</p>
        </div>
        <Button variant="outline" className="rounded-2xl">View All Projects</Button>
      </div>
      <div className="grid md:grid-cols-3 gap-6">
        {[1, 2, 3].map((i) => (
          <Card key={i} className="rounded-3xl overflow-hidden">
            <div className="aspect-[16/10] bg-gradient-to-br from-gray-100 to-gray-200" />
            <CardHeader>
              <CardTitle className="text-lg">Project {i}: Cement & Blocks</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-gray-600">
              High-quality materials delivered for a successful build.
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
        <h3 className="text-3xl md:text-4xl font-semibold">Material Pricing</h3>
        <p className="text-gray-600 mt-3">Choose the right package for your construction needs.</p>
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
                {p.highlighted && <Badge className="rounded-2xl">Best Seller</Badge>}
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
        <h3 className="text-3xl md:text-4xl font-semibold">What builders say</h3>
        <p className="text-gray-600 mt-3">Trusted by contractors and engineers nationwide.</p>
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
        <h3 className="text-3xl md:text-4xl font-semibold">Supplying quality since day one</h3>
        <p className="text-gray-600 mt-4">
          MCPM delivers premium cement, sand, blocks, and iron bars for every construction project. We focus on quality, reliability, and customer satisfaction.
        </p>
        <div className="mt-6 grid sm:grid-cols-3 gap-4">
          {["Fast Delivery", "Bulk Discounts", "Trusted by Builders"].map((k) => (
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
        <h3 className="text-3xl md:text-4xl font-semibold">Frequently Asked Questions</h3>
        <p className="text-gray-600 mt-3">Quick answers about our construction materials.</p>
      </div>
      <div className="mx-auto max-w-2xl">
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger>How fast can you deliver cement and blocks?</AccordionTrigger>
            <AccordionContent>
              Most orders are delivered within 2–3 days depending on location and quantity.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>What brands of cement do you supply?</AccordionTrigger>
            <AccordionContent>
              We offer top local and international brands. Contact us for specific requests.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>Can I order custom quantities?</AccordionTrigger>
            <AccordionContent>
              Yes—custom and bulk orders are welcome. Let us know your requirements.
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
          <CardTitle className="text-2xl">Request a Material Quote</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <Input placeholder="Full name" />
          <Input type="email" placeholder="Work email" />
          <Input placeholder="Company" />
          <Textarea placeholder="What materials do you need?" />
          <Button className="rounded-2xl w-full h-11">Send Request</Button>
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
            <a href="mailto:sales@mcpm.com" className="text-gray-600">sales@mcpm.com</a>
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
            <div className="font-medium">Warehouse</div>
            <div className="text-gray-600">123 Supply Rd, Industrial Zone, Manila</div>
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
        <Image
          src="/favicon.ico"
          alt="MCPM logo"
          width={32}
          height={32}
          className="h-8 w-8 rounded-2xl bg-black text-white grid place-items-center"
          unoptimized
        />
        <span className="text-lg">MCPM</span>
      </a>
        <p className="text-gray-600">
          Your trusted source for cement, sand, blocks, and iron bars.
        </p>
      </div>
      <div>
        <div className="font-medium mb-3">Company</div>
        <ul className="space-y-2 text-gray-600">
          <li><a href="#about">About Us</a></li>
          <li><a href="#portfolio">Projects</a></li>
          <li><a href="#pricing">Pricing</a></li>
          <li><a href="#faq">FAQ</a></li>
        </ul>
      </div>
      <div>
        <div className="font-medium mb-3">Materials</div>
        <ul className="space-y-2 text-gray-600">
          <li><a href="#">Cement</a></li>
          <li><a href="#">Precast Blocks</a></li>
          <li><a href="#">Sand</a></li>
          <li><a href="#">Iron Bars</a></li>
        </ul>
      </div>
      <div>
        <div className="font-medium mb-3">Newsletter</div>
        <div className="flex gap-2">
          <Input placeholder="Your email" />
          <Button className="rounded-2xl">Subscribe</Button>
        </div>
        <div className="text-xs text-gray-600 mt-2">Get updates on new materials and promos.</div>
      </div>
    </Container>
    <Container className="pt-8 mt-8 border-t text-xs text-gray-600 flex items-center justify-between">
      <div>© {new Date().getFullYear()} MCPM Materials, Inc. All rights reserved.</div>
      <div className="flex gap-4">
        <a href="#">Facebook</a>
        <a href="#">LinkedIn</a>
        <a href="#">Instagram</a>
      </div>
    </Container>
  </footer>
);



export default function BusinessWebsiteTemplate() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
       <div className="w-full aspect-[3/1] bg-gray-100 relative">
        <Image
          src="/images/cover.jpg"
          alt="construction materials cover"
          fill
          className="object-contain"
          priority
        />
      </div>
      <Header />
      <Hero />
      <Features />
      <Solutions />
      {/* <ImageLoop /> */}
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
