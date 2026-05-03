import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Phone, MapPin, Clock, Star, Stethoscope, Award, CheckCircle2, Calendar, IndianRupee } from "lucide-react";
import doctorHero from "@/assets/doctor-hero.jpg";

const PHONE = "08959677717";
const PHONE_DISPLAY = "089596 77717";

const services = [
  "General Medicine Consultation",
  "Liver-related Conditions",
  "Liver Elastography",
  "Insulin Management",
  "Random Blood Sugar Testing",
  "Hb Electrophoresis",
  "Blood Platelet Disorders",
  "Lipid Storage Disease",
  "Duchenne Muscular Dystrophy",
  "DiGeorge Syndrome",
  "Cefuroxime Allergy Management",
];

const reviews = [
  { name: "Anjali S.", text: "Dr. Satsangi gives detailed consultation and proper time for every concern. He's our family doctor now." },
  { name: "Rohit M.", text: "Very trusted and reliable. Takes extra care of my elderly parents with regular follow-ups." },
  { name: "Priya K.", text: "Comfortable environment and very satisfying treatment experience. Highly recommended." },
  { name: "Amit V.", text: "He listens patiently and explains everything clearly. Best physician in Indore." },
];

const Index = () => {
  const callDoctor = () => { window.location.href = `tel:${PHONE}`; };

  return (
    <div className="min-h-screen bg-background">
      {/* Nav */}
      <header className="sticky top-0 z-50 backdrop-blur-lg bg-background/80 border-b border-border">
        <div className="container flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-lg bg-gradient-hero flex items-center justify-center shadow-soft">
              <Stethoscope className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="font-bold text-lg">Dr. S Satsangi</span>
          </div>
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
            <a href="#about" className="text-muted-foreground hover:text-primary transition-smooth">About</a>
            <a href="#services" className="text-muted-foreground hover:text-primary transition-smooth">Services</a>
            <a href="#reviews" className="text-muted-foreground hover:text-primary transition-smooth">Reviews</a>
            <a href="#contact" className="text-muted-foreground hover:text-primary transition-smooth">Contact</a>
          </nav>
          <Button onClick={callDoctor} size="sm" className="bg-gradient-hero hover:opacity-90 shadow-soft">
            <Phone className="w-4 h-4 mr-2" /> Call Now
          </Button>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-soft">
        <div className="container py-16 md:py-24 grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <Badge className="bg-secondary text-secondary-foreground hover:bg-secondary border-0">
              <Star className="w-3 h-3 mr-1 fill-accent text-accent" /> 5.0 · 278 Reviews
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold leading-[1.1]">
              Compassionate Care from a Trusted{" "}
              <span className="bg-gradient-hero bg-clip-text text-transparent">Family Physician</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-lg">
              Dr. S Satsangi (MBBS, MD Medicine) provides detailed consultations, personalized treatment, and lifelong care for you and your family in Indore.
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
              <img src={doctorHero} alt="Dr. S Satsangi, Physician in Indore" className="w-full h-full object-cover" />
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

      {/* About / Stats */}
      <section id="about" className="container py-16 md:py-24">
        <div className="grid md:grid-cols-4 gap-6">
          {[
            { icon: Star, label: "Patient Rating", value: "5.0" },
            { icon: CheckCircle2, label: "Reviews", value: "278+" },
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

      {/* Services */}
      <section id="services" className="bg-gradient-soft py-16 md:py-24">
        <div className="container">
          <div className="max-w-2xl mb-12">
            <Badge className="bg-secondary text-secondary-foreground border-0 mb-4">Our Services</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Comprehensive Medical Care</h2>
            <p className="text-muted-foreground">From general consultations to specialized diagnostic services, get expert medical attention under one roof.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {services.map((service) => (
              <Card key={service} className="p-5 shadow-soft hover:shadow-card hover:-translate-y-1 transition-smooth border-border group">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-gradient-hero flex items-center justify-center shrink-0 group-hover:shadow-glow transition-smooth">
                    <Stethoscope className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <div className="font-medium pt-1.5">{service}</div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section id="reviews" className="container py-16 md:py-24">
        <div className="max-w-2xl mb-12 text-center mx-auto">
          <Badge className="bg-secondary text-secondary-foreground border-0 mb-4">Patient Stories</Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Loved by 278+ Patients</h2>
          <div className="flex items-center justify-center gap-1">
            {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-accent text-accent" />)}
            <span className="ml-2 font-semibold">5.0 / 5.0</span>
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

      {/* Contact */}
      <section id="contact" className="bg-gradient-hero py-16 md:py-24">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="text-primary-foreground space-y-6">
              <h2 className="text-3xl md:text-5xl font-bold">Visit the Clinic</h2>
              <p className="text-primary-foreground/90 text-lg">Walk in or call ahead to book your appointment with Dr. Satsangi.</p>
              <div className="space-y-4">
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
              </div>
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
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-8">
        <div className="container flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <div>© {new Date().getFullYear()} Dr. S Satsangi · MBBS, MD (Medicine)</div>
          <div>Palhar Nagar, Indore · Madhya Pradesh</div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
