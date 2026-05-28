import FloatingMetrics from "./FloatingMetrics";

const stats = [
  {
    label: "Lead Conversion",
    value: "+230%",
  },
  {
    label: "Client Response Time",
    value: "<30s",
  },
  {
    label: "WhatsApp Engagement",
    value: "+400%",
  },
  {
    label: "Automation Efficiency",
    value: "24/7",
  },
];

const GrowthStats = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-4">
            Built To Increase Sales
          </h2>

          <p className="text-muted-foreground max-w-2xl mx-auto">
            These systems are designed to generate leads, automate customer
            interactions, and improve business conversions.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <FloatingMetrics
              key={stat.label}
              label={stat.label}
              value={stat.value}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default GrowthStats;