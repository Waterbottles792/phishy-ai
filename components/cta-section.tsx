import { Shield, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function CtaSection() {
  return (
    <section className="px-6 py-24">
      <div className="mx-auto max-w-4xl">
        <div className="relative overflow-hidden rounded-2xl border border-primary/20 bg-primary/5 px-8 py-16 text-center sm:px-16">
          {/* Subtle glow */}
          <div className="pointer-events-none absolute top-0 left-1/2 size-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/10 blur-3xl" />

          <div className="relative z-10">
            <Shield className="mx-auto size-12 text-primary" />
            <h2 className="mt-6 text-balance text-3xl font-bold text-foreground sm:text-4xl">
              Ready to defend against phishing?
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-pretty text-muted-foreground">
              Start detecting phishing threats in minutes with our free tier. 
              No credit card required.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                Get Your API Key
                <ArrowRight className="ml-2 size-4" />
              </Button>
              <Button size="lg" variant="ghost" className="text-muted-foreground hover:text-foreground">
                Read the Docs
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
