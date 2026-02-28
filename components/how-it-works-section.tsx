import { ArrowRight } from "lucide-react"

const steps = [
  {
    number: "01",
    title: "Submit a URL, email, or HTML",
    description:
      "Send any suspicious content through our REST API or paste it into the web dashboard. Supports single checks and batch processing.",
  },
  {
    number: "02",
    title: "Multi-vector feature extraction",
    description:
      "Our pipeline extracts 25+ URL features, processes email text through DistilBERT, and parses HTML for 13+ structural anomalies simultaneously.",
  },
  {
    number: "03",
    title: "Hybrid AI classification",
    description:
      "A multi-input fusion network combines XGBoost predictions on structured features with transformer embeddings for a final confidence score.",
  },
  {
    number: "04",
    title: "Explainable threat report",
    description:
      "Receive a detailed verdict with confidence percentage, SHAP-powered feature importance, risk breakdown, and actionable recommendations.",
  },
]

export function HowItWorksSection() {
  return (
    <section id="how-it-works" className="px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="text-center">
          <p className="text-sm font-medium uppercase tracking-widest text-primary">
            How It Works
          </p>
          <h2 className="mt-3 text-balance text-3xl font-bold text-foreground sm:text-4xl">
            From suspicious link to actionable insight
          </h2>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <div key={step.number} className="relative">
              <div className="rounded-xl border border-border/50 bg-card p-6">
                <span className="text-3xl font-bold text-primary/20">{step.number}</span>
                <h3 className="mt-3 text-base font-semibold text-foreground">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {step.description}
                </p>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden items-center justify-center py-0 lg:absolute lg:-right-3 lg:top-1/2 lg:flex lg:-translate-y-1/2">
                  <ArrowRight className="size-4 text-primary/30" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
