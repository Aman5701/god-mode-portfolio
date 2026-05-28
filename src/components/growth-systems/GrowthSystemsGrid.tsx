import GrowthSystemCard from "./GrowthSystemCard";

const growthSystems = [
  {
    id: "maison-noir-cafe",

    title: "Maison Noir Café Experience",

    category: "Luxury Café Conversion System",

    description:
      "A premium café and roastery website experience designed to increase reservations, improve customer engagement, and create a cinematic luxury brand presence through immersive storytelling, WhatsApp communication, and high-conversion CTAs.",

    image: "/images/systems/maison-noir.png",

    features: [
      "WhatsApp Reservation Flow",
      "Luxury Brand Experience",
      "Interactive Menu Showcase",
      "High-Converting Hero Section",
      "Cinematic Product Display",
      "Mobile Optimized CTA Funnel",
    ],

    metrics: [
      {
        label: "Reservation Engagement",
        value: "+320%",
      },
      {
        label: "Luxury UX Experience",
        value: "Premium",
      },
    ],

    liveUrl: "https://velvet-brew-vision.lovable.app/",
  },

  {
    id: "maison-ceramica",

    title: "Maison Ceramica Architectural Conversion System",

    category: "Luxury Architectural Experience",

    description:
      "An ultra-premium ceramic and marble experience platform designed for luxury surface brands to showcase curated collections, capture architect leads, and convert showroom visitors into high-ticket interior clients.",

    image: "/images/systems/maison-ceramica.png",

    features: [
      "Architect Lead Generation",
      "Luxury Surface Collections",
      "Interactive Showroom Journey",
      "Interior Inspiration Galleries",
      "Consultation Booking Flow",
      "High-End Brand Positioning",
    ],

    metrics: [
      {
        label: "Showroom Bookings",
        value: "+290%",
      },
      {
        label: "Project Inquiries",
        value: "+410%",
      },
    ],

    liveUrl: "https://marble-vista-labs.lovable.app/",
  },

  {
    id: "meridian-auto",

    title: "Meridian Auto AI Sales Experience",

    category: "Automotive Conversion System",

    description:
      "An immersive luxury automotive platform crafted for premium dealerships to showcase elite inventory, engage high-intent buyers through AI-powered concierge interactions, and increase showroom conversions with cinematic digital experiences.",

    image: "/images/systems/meridian-auto.png",

    features: [
      "AI Vehicle Concierge",
      "Interactive Car Showcase",
      "Luxury Buyer Funnels",
      "Virtual Test Drive Journey",
      "Smart Lead Qualification",
      "Performance Inventory System",
    ],

    metrics: [
      {
        label: "Sales Inquiries",
        value: "+420%",
      },
      {
        label: "Engagement Time",
        value: "5.8x",
      },
    ],

    liveUrl: "https://dubai-drive-demo.lovable.app/",
  },
];

const GrowthSystemsGrid = () => {
  return (
    <section id="systems" className="relative py-24 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-primary/10 blur-[140px] rounded-full" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Heading */}
        <div className="max-w-3xl mb-16">
          <span className="text-primary uppercase tracking-[0.25em] text-sm font-semibold">
            Smart Business Systems
          </span>

          <h2 className="text-4xl md:text-5xl font-bold leading-tight mt-4 mb-6">
            More Than Just Websites.
            <br />
            <span className="text-gradient">Built To Generate Customers.</span>
          </h2>

          <p className="text-lg text-muted-foreground leading-relaxed">
            Powerful conversion-focused systems designed to automate lead
            generation, improve customer engagement, and increase business
            revenue.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {growthSystems.map((system, index) => (
            <GrowthSystemCard key={system.id} system={system} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default GrowthSystemsGrid;
