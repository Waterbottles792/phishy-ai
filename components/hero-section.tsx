"use client"

import { useState } from "react"
import { Shield, ArrowRight, Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export function HeroSection() {
  const [url, setUrl] = useState("")

  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 pt-24 pb-16">
      {/* Background grid effect */}
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(56,189,148,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(56,189,148,0.03)_1px,transparent_1px)] bg-[size:64px_64px]" />
      {/* Radial glow */}
      <div className="pointer-events-none absolute top-1/4 left-1/2 size-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/5 blur-3xl" />

      <div className="relative z-10 mx-auto flex max-w-4xl flex-col items-center text-center">
        <Badge variant="outline" className="mb-6 border-primary/30 bg-primary/5 text-primary">
          <Shield className="mr-1 size-3" />
          AI-Powered Threat Detection
        </Badge>

        <h1 className="text-balance text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl">
          Stop phishing before
          <br />
          <span className="text-primary">it stops you</span>
        </h1>

        <p className="mt-6 max-w-2xl text-pretty text-base text-muted-foreground sm:text-lg md:text-xl">
          Detect phishing threats in real-time using hybrid AI models. Scan URLs, 
          emails, and websites with enterprise-grade accuracy powered by 
          DistilBERT and XGBoost.
        </p>

        {/* Live URL scanner demo */}
        <div className="mt-10 w-full max-w-xl">
          <div className="flex items-center gap-2 rounded-xl border border-border bg-card p-2">
            <div className="flex flex-1 items-center gap-2 rounded-lg bg-secondary px-4 py-3">
              <Search className="size-4 shrink-0 text-muted-foreground" />
              <input
                type="text"
                placeholder="Enter a URL to scan..."
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                className="w-full bg-transparent text-sm text-foreground placeholder:text-muted-foreground focus:outline-none"
              />
            </div>
            <Button className="shrink-0 bg-primary text-primary-foreground hover:bg-primary/90">
              Scan
              <ArrowRight className="ml-1 size-4" />
            </Button>
          </div>
          <p className="mt-3 text-xs text-muted-foreground">
            Try: https://paypa1-secure-login.tk/verify-account
          </p>
        </div>

        {/* Stats row */}
        <div className="mt-16 grid w-full max-w-2xl grid-cols-3 gap-4">
          {[
            { value: "99.2%", label: "Detection Accuracy" },
            { value: "<50ms", label: "Avg. Response Time" },
            { value: "3", label: "Detection Vectors" },
          ].map((stat) => (
            <div key={stat.label} className="rounded-lg border border-border/50 bg-card/50 px-4 py-5">
              <div className="text-2xl font-bold text-primary sm:text-3xl">{stat.value}</div>
              <div className="mt-1 text-xs text-muted-foreground sm:text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
