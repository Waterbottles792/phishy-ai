import { Badge } from "@/components/ui/badge"

const stack = [
  { category: "ML / DL", items: ["XGBoost", "scikit-learn", "PyTorch", "Hugging Face"] },
  { category: "NLP", items: ["DistilBERT", "TF-IDF", "SHAP", "LIME"] },
  { category: "API", items: ["FastAPI", "PostgreSQL", "Redis", "Docker"] },
  { category: "Frontend", items: ["Next.js", "React", "Tailwind CSS", "Recharts"] },
]

export function TechStackSection() {
  return (
    <section className="border-t border-border/50 px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="text-center">
          <p className="text-sm font-medium uppercase tracking-widest text-primary">
            Technology
          </p>
          <h2 className="mt-3 text-balance text-3xl font-bold text-foreground sm:text-4xl">
            Built on proven technology
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-pretty text-muted-foreground">
            A carefully selected stack combining best-in-class ML frameworks with 
            production-ready infrastructure.
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-3xl gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {stack.map((group) => (
            <div key={group.category} className="text-center">
              <h3 className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
                {group.category}
              </h3>
              <div className="mt-4 flex flex-wrap justify-center gap-2">
                {group.items.map((item) => (
                  <Badge
                    key={item}
                    variant="outline"
                    className="border-border/80 bg-secondary/50 text-foreground/80"
                  >
                    {item}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
