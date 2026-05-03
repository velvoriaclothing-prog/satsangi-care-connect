import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger, SheetClose } from "@/components/ui/sheet";
import Autoplay from "embla-carousel-autoplay";
import { useRef } from "react";
import { Phone, MapPin, Clock, Star, Stethoscope, Award, CheckCircle2, Calendar, IndianRupee, Heart, Shield, Users, Activity, Microscope, Pill, HeartPulse, Brain, Droplet, ClipboardCheck, Sparkles, Menu, HelpCircle, Info, Mail } from "lucide-react";

const doctorHero = "https://res.cloudinary.com/de19zn4f9/image/upload/v1777837022/IMG_0042_ge8pfg.jpg";

const PHONE = "08959677717";
const PHONE_DISPLAY = "089596 77717";

const services = [
  { icon: Stethoscope, title: "General Medicine Consultation", desc: "Comprehensive evaluation, diagnosis, and treatment for all common adult illnesses." },
  { icon: Activity, title: "Liver Care & Elastography", desc: "Diagnosis and management of hepatitis, fatty liver, cirrhosis with non-invasive elastography." },
  { icon: Droplet, title: "Diabetes & Insulin Management", desc: "Personalized diabetes plans, insulin titration and random blood sugar monitoring." },
  { icon: Microscope, title: "Hb Electrophoresis", desc: "Screening and management for thalassemia, sickle cell and other hemoglobinopathies." },
  { icon: HeartPulse, title: "Blood Platelet Disorders", desc: "Evaluation and treatment of thrombocytopenia, ITP and bleeding disorders." },
  { icon: Brain, title: "Lipid Storage Disease", desc: "Specialist care for Gaucher, Niemann-Pick and other rare metabolic disorders." },
  { icon: Shield, title: "Duchenne Muscular Dystrophy", desc: "Long-term supportive care and follow-up for DMD and related neuromuscular conditions." },
  { icon: Heart, title: "DiGeorge Syndrome Care", desc: "Coordinated medical management for patients with 22q11.2 deletion syndrome." },
  { icon: Pill, title: "Drug Allergy Management", desc: "Cefuroxime and other antibiotic allergy assessment, alternatives and safe prescribing." },
];

const reviews = [
  { name: "Anjali Sharma", text: "Dr. Satsangi gives detailed consultation and proper time for every concern. He's our family doctor now and we trust him completely with our parents' health." },
  { name: "Rohit Mehta", text: "Very trusted and reliable. Takes extra care of my elderly parents with regular follow-ups. His diagnostic skills are sharp and treatment is always effective." },
  { name: "Priya Kulkarni", text: "Comfortable environment and very satisfying treatment experience. The doctor explains every test result patiently. Highly recommended for all of Indore." },
  { name: "Amit Verma", text: "He listens patiently and explains everything clearly. Best physician in Indore for liver and diabetes related issues. The clinic staff is also very helpful." },
];

const whyChoose = [
  { icon: Award, title: "15+ Years Experience", desc: "Trusted MBBS, MD physician with deep expertise in internal medicine." },
  { icon: Users, title: "278+ Happy Patients", desc: "Loved by families across Indore for compassionate, ethical care." },
  { icon: ClipboardCheck, title: "Evidence-Based Care", desc: "Every diagnosis and prescription rooted in the latest medical research." },
  { icon: Heart, title: "Personalized Attention", desc: "Detailed consultations - never rushed, always thorough and caring." },
];

const faqs = [
  { q: "What are the consultation hours?", a: "The clinic opens daily at 6:00 PM. Walk-ins are welcome, but calling ahead is recommended to reserve your slot." },
  { q: "How much is the consultation fee?", a: "The standard consultation fee is ₹500. Follow-up visits within a short period may be discounted - please ask at reception." },
  { q: "Do I need an appointment?", a: "Appointments are not mandatory but highly recommended. Please call 089596 77717 to book your slot and avoid waiting." },
  { q: "Where is the clinic located?", a: "The clinic is at 320, 60 Feet Road, Sector B, Palhar Nagar, Indore, MP - 452005. Easily accessible with parking available nearby." },
  { q: "What conditions does Dr. Satsangi treat?", a: "Dr. Satsangi specializes in general medicine including liver diseases, diabetes, blood disorders, drug allergies and rare metabolic conditions like lipid storage diseases." },
  { q: "Are diagnostic tests available at the clinic?", a: "Yes - the clinic offers Liver Elastography, Hb Electrophoresis, Random Blood Sugar testing and other diagnostic services on-site." },
];

const highlights = [
  {
    icon: Stethoscope,
    title: "Expert Consultation",
    desc: "Detailed, unhurried consultations from an MBBS, MD physician who truly listens.",
    cta: "View Services",
    href: "#services",
  },
  {
    icon: Calendar,
    title: "Easy Booking",
    desc: "Walk in or call 089596 77717 to reserve your slot. Open daily from 6:00 PM.",
    cta: "Call Now",
    href: `tel:${PHONE}`,
  },
  {
    icon: MapPin,
    title: "Convenient Location",
    desc: "Centrally located at 320, 60 Feet Rd, Palhar Nagar, Indore. Parking available.",
    cta: "Get Directions",
    href: "#contact",
  },
  {
    icon: IndianRupee,
    title: "Transparent Pricing",
    desc: "Flat ₹500 consultation fee. No hidden charges, no unnecessary tests.",
    cta: "Learn More",
    href: "#about",
  },
  {
    icon: Microscope,
    title: "On-Site Diagnostics",
    desc: "Liver Elastography, Hb Electrophoresis & blood sugar testing right at the clinic.",
    cta: "Explore Tests",
    href: "#services",
  },
  {
    icon: Star,
    title: "5.0 ★ Rated",
    desc: "Trusted by 278+ patients across Indore for compassionate, ethical medical care.",
    cta: "Read Reviews",
    href: "#reviews",
  },
];

const Index = () => {
  const callDoctor = () => { window.location.href = `tel:${PHONE}`; };
  const autoplay = useRef(Autoplay({ delay: 4000, stopOnInteraction: false }));


  return (
    <div className="min-h-screen bg-background">
      {/* Nav */}
      <header className="sticky top-0 z-50 backdrop-blur-lg bg-background/80 border-b border-border">
        <div className="container flex items-center justify-between h-16">
          <a href="#" className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-lg bg-gradient-hero flex items-center justify-center shadow-soft">
              <Stethoscope className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="font-bold text-lg">Dr. S Satsangi</span>
          </a>
          <nav aria-label="Primary" className="hidden md:flex items-center gap-8 text-sm font-medium">
            <a href="#about" className="text-muted-foreground hover:text-primary transition-smooth">About</a>
            <a href="#services" className="text-muted-foreground hover:text-primary transition-smooth">Services</a>
            <a href="#why" className="text-muted-foreground hover:text-primary transition-smooth">Why Us</a>
            <a href="#reviews" className="text-muted-foreground hover:text-primary transition-smooth">Reviews</a>
            <a href="#faq" className="text-muted-foreground hover:text-primary transition-smooth">FAQ</a>
            <a href="#contact" className="text-muted-foreground hover:text-primary transition-smooth">Contact</a>
          </nav>
          <div className="flex items-center gap-2">
            <Button onClick={callDoctor} size="sm" className="bg-gradient-hero hover:opacity-90 shadow-soft hidden sm:inline-flex">
              <Phone className="w-4 h-4 mr-2" /> Call Now
            </Button>
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon" aria-label="Open menu">
                  <Menu className="w-5 h-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[85vw] sm:w-96 overflow-y-auto">
                <SheetHeader className="text-left">
                  <SheetTitle className="flex items-center gap-2">
                    <div className="w-9 h-9 rounded-lg bg-gradient-hero flex items-center justify-center shadow-soft">
                      <Stethoscope className="w-5 h-5 text-primary-foreground" />
                    </div>
                    Dr. S Satsangi
                  </SheetTitle>
                </SheetHeader>

                <div className="mt-6 space-y-6">
                  {/* Quick Nav */}
                  <div>
                    <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3">Explore</div>
                    <nav className="grid gap-1">
                      {[
                        { icon: Info, label: "About the Doctor", href: "#about" },
                        { icon: Stethoscope, label: "Services & Treatments", href: "#services" },
                        { icon: Award, label: "Why Choose Us", href: "#why" },
                        { icon: Star, label: "Patient Reviews", href: "#reviews" },
                        { icon: HelpCircle, label: "FAQs", href: "#faq" },
                        { icon: MapPin, label: "Location & Contact", href: "#contact" },
                      ].map((item) => (
                        <SheetClose asChild key={item.label}>
                          <a
                            href={item.href}
                            className="flex items-center gap-3 px-3 py-3 rounded-lg hover:bg-secondary transition-smooth text-sm font-medium"
                          >
                            <item.icon className="w-4 h-4 text-primary" />
                            {item.label}
                          </a>
                        </SheetClose>
                      ))}
                    </nav>
                  </div>

                  {/* Contact card */}
                  <Card className="p-4 shadow-soft border-border space-y-3">
                    <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Contact</div>
                    <a href={`tel:${PHONE}`} className="flex items-start gap-3 text-sm hover:text-primary transition-smooth">
                      <Phone className="w-4 h-4 mt-0.5 text-primary shrink-0" />
                      <div>
                        <div className="font-semibold">{PHONE_DISPLAY}</div>
                        <div className="text-xs text-muted-foreground">Tap to call directly</div>
                      </div>
                    </a>
                    <div className="flex items-start gap-3 text-sm">
                      <MapPin className="w-4 h-4 mt-0.5 text-primary shrink-0" />
                      <div className="text-muted-foreground">
                        320, 60 Feet Rd, Sector B,<br />Palhar Nagar, Indore, MP – 452005
                      </div>
                    </div>
                    <div className="flex items-start gap-3 text-sm">
                      <Clock className="w-4 h-4 mt-0.5 text-primary shrink-0" />
                      <div className="text-muted-foreground">Opens daily at 6:00 PM</div>
                    </div>
                    <div className="flex items-start gap-3 text-sm">
                      <IndianRupee className="w-4 h-4 mt-0.5 text-primary shrink-0" />
                      <div className="text-muted-foreground">Consultation Fee: <span className="font-semibold text-foreground">₹500</span></div>
                    </div>
                  </Card>

                  {/* CTAs */}
                  <div className="grid gap-2">
                    <Button onClick={callDoctor} className="bg-gradient-hero hover:opacity-90 shadow-soft w-full">
                      <Phone className="w-4 h-4 mr-2" /> Call Now
                    </Button>
                    <Button variant="outline" asChild className="w-full">
                      <a
                        href="https://www.google.com/maps/search/?api=1&query=320+60+Feet+Rd+Sector+B+Palhar+Nagar+Indore"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <MapPin className="w-4 h-4 mr-2" /> Get Directions
                      </a>
                    </Button>
                  </div>

                  <p className="text-xs text-muted-foreground text-center pt-2">
                    MBBS, MD (Medicine) · 5.0 ★ 278 Reviews
                  </p>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>


      <main>
        {/* Hero */}
        <section className="relative overflow-hidden bg-gradient-soft" aria-labelledby="hero-heading">
          <div className="container py-16 md:py-24 grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <Badge className="bg-secondary text-secondary-foreground hover:bg-secondary border-0">
                <Star className="w-3 h-3 mr-1 fill-accent text-accent" /> 5.0 · 278 Verified Reviews
              </Badge>
              <h1 id="hero-heading" className="text-4xl md:text-6xl font-bold leading-[1.1]">
                Compassionate Care from Indore's Trusted{" "}
                <span className="bg-gradient-hero bg-clip-text text-transparent">Family Physician</span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-lg">
                Dr. S Satsangi (MBBS, MD Medicine) provides detailed consultations, accurate diagnosis and personalized treatment for liver, diabetes, blood disorders and general medicine in Palhar Nagar, Indore.
              </p>
              <div className="flex flex-wrap gap-3">
                <Button onClick={callDoctor} size="lg" className="bg-gradient-hero hover:opacity-90 shadow-glow">
                  <Phone className="w-4 h-4 mr-2" /> Book Consultation
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <a href="#contact"><MapPin className="w-4 h-4 mr-2" /> Get Directions</a>
                </Button>
              </div>
              <div className="flex flex-wrap gap-6 pt-4 text-sm">
                <div className="flex items-center gap-2"><Award className="w-4 h-4 text-primary" /> MBBS, MD</div>
                <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-accent" /> 278+ Happy Patients</div>
                <div className="flex items-center gap-2"><Clock className="w-4 h-4 text-primary" /> Open at 6:00 PM</div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-hero rounded-3xl blur-3xl opacity-20" />
              <div className="relative rounded-3xl overflow-hidden shadow-card border border-border">
                <img src={doctorHero} alt="Dr. S Satsangi, MBBS MD Physician in Palhar Nagar, Indore" className="w-full h-full object-cover" loading="eager" />
              </div>
              <Card className="absolute -bottom-6 -left-6 p-4 shadow-card hidden sm:block">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center">
                    <IndianRupee className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="text-xs text-muted-foreground">Consultation Fee</div>
                    <div className="font-bold text-lg">₹500</div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* Highlights Slider */}
        <section className="bg-background py-16 md:py-20" aria-labelledby="highlights-heading">
          <div className="container">
            <div className="max-w-2xl mx-auto text-center mb-10">
              <Badge className="bg-secondary text-secondary-foreground border-0 mb-4">
                <Sparkles className="w-3 h-3 mr-1" /> Quick Guide
              </Badge>
              <h2 id="highlights-heading" className="text-3xl md:text-4xl font-bold mb-3">Everything You Need, In One Place</h2>
              <p className="text-muted-foreground">Swipe through to discover services, pricing, location and how to book your visit.</p>
            </div>
            <Carousel
              opts={{ align: "start", loop: true }}
              plugins={[autoplay.current]}
              className="w-full max-w-6xl mx-auto"
            >
              <CarouselContent className="-ml-4">
                {highlights.map((h) => (
                  <CarouselItem key={h.title} className="pl-4 md:basis-1/2 lg:basis-1/3">
                    <Card className="h-full p-6 shadow-soft hover:shadow-card transition-smooth border-border flex flex-col">
                      <div className="w-12 h-12 rounded-lg bg-gradient-hero flex items-center justify-center mb-4 shadow-soft">
                        <h.icon className="w-6 h-6 text-primary-foreground" />
                      </div>
                      <h3 className="font-semibold text-lg mb-2">{h.title}</h3>
                      <p className="text-sm text-muted-foreground mb-4 flex-1">{h.desc}</p>
                      <Button variant="outline" size="sm" asChild className="w-fit">
                        <a href={h.href}>{h.cta} →</a>
                      </Button>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="hidden sm:flex -left-4" />
              <CarouselNext className="hidden sm:flex -right-4" />
            </Carousel>
          </div>
        </section>

        {/* Stats */}
        <section className="container py-16 md:py-24" aria-labelledby="stats-heading">
          <h2 id="stats-heading" className="sr-only">Practice at a Glance</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { icon: Star, label: "Patient Rating", value: "5.0" },
              { icon: CheckCircle2, label: "Verified Reviews", value: "278+" },
              { icon: IndianRupee, label: "Consultation", value: "₹500" },
              { icon: Award, label: "Qualification", value: "MBBS, MD" },
            ].map((s) => (
              <Card key={s.label} className="p-6 shadow-soft hover:shadow-card transition-smooth border-border">
                <s.icon className="w-6 h-6 text-primary mb-3" />
                <div className="text-2xl font-bold">{s.value}</div>
                <div className="text-sm text-muted-foreground">{s.label}</div>
              </Card>
            ))}
          </div>
        </section>

        {/* About Doctor */}
        <section className="bg-gradient-soft py-16 md:py-24" aria-labelledby="about-doctor-heading">
          <div className="container grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="bg-secondary text-secondary-foreground border-0 mb-4">About the Doctor</Badge>
              <h2 id="about-doctor-heading" className="text-3xl md:text-4xl font-bold mb-6">Meet Dr. S Satsangi</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Dr. S Satsangi is a highly-respected General Physician in Indore, holding an <strong className="text-foreground">MBBS</strong> and <strong className="text-foreground">MD in Internal Medicine</strong>. Patients across Madhya Pradesh trust him for thorough examinations, clear explanations and ethical, evidence-based treatment.
                </p>
                <p>
                  His practice spans common conditions like fever, infections and lifestyle diseases, as well as specialized care for liver disorders, diabetes management, blood platelet abnormalities and rare conditions including <em>Lipid Storage Disease</em> and <em>DiGeorge Syndrome</em>.
                </p>
                <p>
                  With a 5-star average across 278+ reviews, Dr. Satsangi is known for never rushing a consultation - every patient receives the time, attention and personalized plan they deserve.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {whyChoose.map((w) => (
                <Card key={w.title} className="p-5 shadow-soft border-border">
                  <w.icon className="w-8 h-8 text-primary mb-3" />
                  <div className="font-semibold mb-1">{w.title}</div>
                  <div className="text-sm text-muted-foreground">{w.desc}</div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Services */}
        <section id="services" className="container py-16 md:py-24" aria-labelledby="services-heading">
          <div className="max-w-2xl mb-12">
            <Badge className="bg-secondary text-secondary-foreground border-0 mb-4">Our Services</Badge>
            <h2 id="services-heading" className="text-3xl md:text-4xl font-bold mb-4">Comprehensive Medical Care Under One Roof</h2>
            <p className="text-muted-foreground">From general consultations to specialized diagnostic tests for liver, blood and metabolic conditions - Dr. Satsangi's clinic offers expert medical attention with modern diagnostic support.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {services.map((service) => (
              <Card key={service.title} className="p-6 shadow-soft hover:shadow-card hover:-translate-y-1 transition-smooth border-border group">
                <div className="w-12 h-12 rounded-lg bg-gradient-hero flex items-center justify-center mb-4 group-hover:shadow-glow transition-smooth">
                  <service.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="font-semibold mb-2">{service.title}</h3>
                <p className="text-sm text-muted-foreground">{service.desc}</p>
              </Card>
            ))}
          </div>
        </section>

        {/* Why Choose */}
        <section id="why" className="bg-gradient-hero py-16 md:py-24 text-primary-foreground" aria-labelledby="why-heading">
          <div className="container">
            <div className="max-w-2xl mb-12 text-center mx-auto">
              <h2 id="why-heading" className="text-3xl md:text-4xl font-bold mb-4">Why Patients Across Indore Choose Us</h2>
              <p className="text-primary-foreground/90">Quality care, transparent pricing and a doctor who genuinely listens.</p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { icon: Heart, title: "Patient-First Approach", desc: "Every consultation is detailed and unhurried. Your concerns are heard and addressed completely." },
                { icon: Shield, title: "Ethical & Transparent", desc: "Honest diagnosis, no unnecessary tests, no hidden fees. Just straightforward medical care." },
                { icon: Microscope, title: "On-Site Diagnostics", desc: "Liver Elastography, Hb Electrophoresis and blood sugar testing available right at the clinic." },
              ].map((b) => (
                <div key={b.title} className="bg-primary-foreground/10 backdrop-blur p-6 rounded-2xl border border-primary-foreground/20">
                  <b.icon className="w-8 h-8 mb-4" />
                  <h3 className="font-semibold text-lg mb-2">{b.title}</h3>
                  <p className="text-primary-foreground/90 text-sm">{b.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Reviews */}
        <section id="reviews" className="container py-16 md:py-24" aria-labelledby="reviews-heading">
          <div className="max-w-2xl mb-12 text-center mx-auto">
            <Badge className="bg-secondary text-secondary-foreground border-0 mb-4">Patient Stories</Badge>
            <h2 id="reviews-heading" className="text-3xl md:text-4xl font-bold mb-4">Loved by 278+ Patients</h2>
            <div className="flex items-center justify-center gap-1">
              {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-accent text-accent" />)}
              <span className="ml-2 font-semibold">5.0 / 5.0 average rating</span>
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {reviews.map((r) => (
              <Card key={r.name} className="p-6 shadow-soft border-border">
                <div className="flex gap-1 mb-3">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-accent text-accent" />)}
                </div>
                <p className="text-foreground/90 mb-4 italic">"{r.text}"</p>
                <div className="font-semibold text-sm">— {r.name}</div>
              </Card>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="bg-gradient-soft py-16 md:py-24" aria-labelledby="faq-heading">
          <div className="container max-w-3xl">
            <div className="text-center mb-12">
              <Badge className="bg-secondary text-secondary-foreground border-0 mb-4">FAQ</Badge>
              <h2 id="faq-heading" className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
              <p className="text-muted-foreground">Everything you need to know before your visit.</p>
            </div>
            <Accordion type="single" collapsible className="space-y-3">
              {faqs.map((f, i) => (
                <AccordionItem key={i} value={`item-${i}`} className="bg-card border border-border rounded-xl px-5 shadow-soft">
                  <AccordionTrigger className="text-left font-semibold hover:no-underline">{f.q}</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">{f.a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="bg-gradient-hero py-16 md:py-24" aria-labelledby="contact-heading">
          <div className="container">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="text-primary-foreground space-y-6">
                <h2 id="contact-heading" className="text-3xl md:text-5xl font-bold">Visit the Clinic</h2>
                <p className="text-primary-foreground/90 text-lg">Walk in or call ahead to book your appointment with Dr. Satsangi.</p>
                <address className="space-y-4 not-italic">
                  <div className="flex gap-4">
                    <MapPin className="w-6 h-6 shrink-0 mt-1" />
                    <div>
                      <div className="font-semibold mb-1">Clinic Address</div>
                      <div className="text-primary-foreground/90">320, 60 Feet Rd, Sector B,<br />Palhar Nagar, Indore, MP – 452005</div>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <Clock className="w-6 h-6 shrink-0 mt-1" />
                    <div>
                      <div className="font-semibold mb-1">Working Hours</div>
                      <div className="text-primary-foreground/90">Opens at 6:00 PM · Mon – Sat</div>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <Phone className="w-6 h-6 shrink-0 mt-1" />
                    <div>
                      <div className="font-semibold mb-1">Phone</div>
                      <a href={`tel:${PHONE}`} className="text-primary-foreground/90 hover:underline">{PHONE_DISPLAY}</a>
                    </div>
                  </div>
                </address>
                <Button variant="secondary" size="lg" asChild className="w-full sm:w-auto">
                  <a href="https://www.google.com/maps/search/?api=1&query=Dr+S+Satsangi+Clinic+320+60+Feet+Rd+Palhar+Nagar+Indore+452005" target="_blank" rel="noopener noreferrer">
                    <MapPin className="w-4 h-4 mr-2" /> Get Directions on Google Maps
                  </a>
                </Button>
              </div>
              <Card className="p-8 shadow-card">
                <h3 className="text-2xl font-bold mb-2">Book a Consultation</h3>
                <p className="text-muted-foreground mb-6">Quick, easy and just a call away.</p>
                <div className="bg-secondary rounded-xl p-5 mb-6 flex items-center justify-between">
                  <div>
                    <div className="text-sm text-muted-foreground">Consultation Fee</div>
                    <div className="text-3xl font-bold text-primary">₹500</div>
                  </div>
                  <Calendar className="w-10 h-10 text-primary" />
                </div>
                <Button onClick={callDoctor} size="lg" className="w-full bg-gradient-hero hover:opacity-90 shadow-glow">
                  <Phone className="w-5 h-5 mr-2" /> Call {PHONE_DISPLAY}
                </Button>
                <p className="text-xs text-muted-foreground text-center mt-4">Available during clinic hours · 6:00 PM onwards</p>
              </Card>
            </div>
            <div className="mt-12 rounded-2xl overflow-hidden shadow-card border border-primary-foreground/20">
              <iframe
                title="Dr. S Satsangi Clinic Location - Palhar Nagar, Indore"
                src="https://www.google.com/maps?q=320+60+Feet+Rd+Sector+B+Palhar+Nagar+Indore+452005&output=embed"
                width="100%"
                height="400"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-border py-10">
        <div className="container grid md:grid-cols-3 gap-8 text-sm">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 rounded-lg bg-gradient-hero flex items-center justify-center">
                <Stethoscope className="w-4 h-4 text-primary-foreground" />
              </div>
              <span className="font-bold">Dr. S Satsangi</span>
            </div>
            <p className="text-muted-foreground">MBBS, MD (Medicine). Trusted family physician in Palhar Nagar, Indore.</p>
          </div>
          <div>
            <div className="font-semibold mb-3">Quick Links</div>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="#services" className="hover:text-primary">Services</a></li>
              <li><a href="#reviews" className="hover:text-primary">Patient Reviews</a></li>
              <li><a href="#faq" className="hover:text-primary">FAQ</a></li>
              <li><a href="#contact" className="hover:text-primary">Contact</a></li>
            </ul>
          </div>
          <div>
            <div className="font-semibold mb-3">Contact</div>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href={`tel:${PHONE}`} className="hover:text-primary">{PHONE_DISPLAY}</a></li>
              <li>320, 60 Feet Rd, Palhar Nagar</li>
              <li>Indore, MP – 452005</li>
            </ul>
          </div>
        </div>
        <div className="container mt-8 pt-6 border-t border-border text-xs text-muted-foreground text-center">
          © {new Date().getFullYear()} Dr. S Satsangi Clinic · All rights reserved
        </div>
      </footer>
    </div>
  );
};

export default Index;
