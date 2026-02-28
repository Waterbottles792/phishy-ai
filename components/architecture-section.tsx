"use client"

import { useState } from "react"
import { Shield, ArrowDown, ArrowRight, Brain, BarChart3 } from "lucide-react"

const layers = [
  {
    id: "input",
    label: "Input Layer",
    items: ["URL", "Email Body", "HTML Source"],
    color: "border-primary/40 bg-primary/5",
    icon: Shield,
  },
  {
    id: "extraction",
    label: "Feature Extraction",
    items: ["25+ URL Features", "DistilBERT Embeddings", "13+ HTML Features"],
    color: "border-chart-2/40 bg-chart-2/5",
    icon: BarChart3,
  },
  {
    id: "models",
    label: "Model Ensemble",
    items: ["XGBoost", "Random Forest", "DistilBERT Classifier"],
    color: "border-chart-4/40 bg-chart-4/5",
    icon: Brain,
  },
  {
    id: "output",
    label: "Fusion & Output",
    items: ["Stacking Meta-Learner", "SHAP Explanations", "Confidence Score"],
    color: "border-primary/40 bg-primary/5",
    icon: Shield,
  },
]

export function ArchitectureSection() {
  const [activeLayer, setActiveLayer] = useState<string | null>(null)

  return (
    <section className="border-t border-border/50 px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="text-center">
          <p className="text-sm font-medium uppercase tracking-widest text-primary">
            Architecture
          </p>
          <h2 className="mt-3 text-balance text-3xl font-bold text-foreground sm:text-4xl">
            Multi-input hybrid fusion network
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-pretty text-muted-foreground">
            A four-stage pipeline that processes URL features, text embeddings, and 
            HTML signals through an ensemble of specialized models.
          </p>
        </div>

        <div className="mx-auto mt-16 flex max-w-2xl flex-col items-center gap-4">
          {layers.map((layer, index) => (
            <div key={layer.id} className="w-full">
              <button
                onClick={() => setActiveLayer(activeLayer === layer.id ? null : layer.id)}
                className={`w-full rounded-xl border p-6 text-left transition-all ${layer.color} ${
                  activeLayer === layer.id ? "ring-1 ring-primary/30" : ""
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <layer.icon className="size-5 text-primary" />
                    <h3 className="text-base font-semibold text-foreground">{layer.label}</h3>
                  </div>
                  <ArrowRight
                    className={`size-4 text-muted-foreground transition-transform ${
                      activeLayer === layer.id ? "rotate-90" : ""
                    }`}
                  />
                </div>
                <div className="mt-3 flex flex-wrap gap-2">
                  {layer.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-md border border-border/50 bg-background/50 px-3 py-1 text-xs text-muted-foreground"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </button>
              {index < layers.length - 1 && (
                <div className="flex justify-center py-2">
                  <ArrowDown className="size-4 text-primary/30" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
