import { Link2, Mail, Code2, Brain, ShieldCheck, BarChart3 } from "lucide-react"

const features = [
  {
    icon: Link2,
    title: "URL Analysis",
    description:
      "Extract 25+ features from URLs including domain age, entropy, suspicious TLDs, punycode detection, and brand impersonation checks.",
  },
  {
    icon: Mail,
    title: "Email Scanning",
    description:
      "NLP-powered analysis of email content using TF-IDF and fine-tuned DistilBERT to detect social engineering, urgency triggers, and deceptive language.",
  },
  {
    icon: Code2,
    title: "HTML Inspection",
    description:
      "Deep analysis of website source code for hidden forms, obfuscated JavaScript, external resource abuse, and favicon spoofing.",
  },
  {
    icon: Brain,
    title: "Hybrid AI Models",
    description:
      "Combines XGBoost, Random Forest, and DistilBERT into a multi-input fusion architecture for maximum detection coverage.",
  },
  {
    icon: ShieldCheck,
    title: "AI Explainability",
    description:
      "Every detection includes SHAP-powered explanations showing exactly which features triggered the alert and why.",
  },
  {
    icon: BarChart3,
    title: "Real-time Dashboard",
    description:
      "Monitor threat trends, detection history, and model confidence scores through an intuitive analytics dashboard.",
  },
]

export function FeaturesSection() {
  return (
    <section id="features" className="px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="text-center">
          <p className="text-sm font-medium uppercase tracking-widest text-primary">
            Capabilities
          </p>
          <h2 className="mt-3 text-balance text-3xl font-bold text-foreground sm:text-4xl">
            Three detection vectors. One unified API.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-pretty text-muted-foreground">
            Phishy AI analyzes threats across URLs, email content, and website 
            HTML using a layered hybrid approach for industry-leading accuracy.
          </p>
        </div>

        <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group rounded-xl border border-border/50 bg-card p-6 transition-colors hover:border-primary/30 hover:bg-card/80"
            >
              <div className="flex size-10 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary/20">
                <feature.icon className="size-5" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-foreground">{feature.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
