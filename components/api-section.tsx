"use client"

import { useState } from "react"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"

const endpoints = [
  {
    key: "url",
    label: "URL Scan",
    method: "POST",
    path: "/api/v1/detect/url",
    request: `{
  "url": "https://paypa1-secure-login.tk/verify"
}`,
    response: `{
  "verdict": "PHISHING",
  "confidence": 0.974,
  "risk_level": "critical",
  "features": {
    "url_length": 42,
    "suspicious_tld": true,
    "brand_impersonation": "paypal",
    "has_ip_address": false,
    "entropy": 4.21
  },
  "explanation": [
    "Domain closely resembles 'paypal.com'",
    "TLD '.tk' is high-risk",
    "URL contains 'verify' keyword"
  ]
}`,
  },
  {
    key: "email",
    label: "Email Scan",
    method: "POST",
    path: "/api/v1/detect/email",
    request: `{
  "subject": "Urgent: Verify Your Account",
  "body": "Dear user, your account will be suspended unless you verify your identity within 24 hours...",
  "sender": "security@paypa1.com"
}`,
    response: `{
  "verdict": "PHISHING",
  "confidence": 0.961,
  "risk_level": "high",
  "nlp_analysis": {
    "urgency_score": 0.92,
    "threat_score": 0.87,
    "model": "distilbert-phishing-v1"
  },
  "explanation": [
    "High urgency language detected",
    "Sender domain spoofs 'paypal.com'",
    "Contains account suspension threat"
  ]
}`,
  },
  {
    key: "html",
    label: "HTML Scan",
    method: "POST",
    path: "/api/v1/detect/html",
    request: `{
  "url": "https://example-login.xyz",
  "html": "<html>...</html>"
}`,
    response: `{
  "verdict": "PHISHING",
  "confidence": 0.943,
  "risk_level": "high",
  "html_features": {
    "external_forms": 2,
    "hidden_fields": 5,
    "obfuscated_js": true,
    "favicon_external": true
  },
  "explanation": [
    "Form submits to external domain",
    "5 hidden input fields detected",
    "Obfuscated JavaScript present"
  ]
}`,
  },
]

export function ApiSection() {
  const [activeTab, setActiveTab] = useState("url")

  const active = endpoints.find((e) => e.key === activeTab) ?? endpoints[0]

  return (
    <section id="api" className="px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="text-center">
          <p className="text-sm font-medium uppercase tracking-widest text-primary">
            Developer API
          </p>
          <h2 className="mt-3 text-balance text-3xl font-bold text-foreground sm:text-4xl">
            Simple REST API. Powerful results.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-pretty text-muted-foreground">
            Integrate phishing detection into any application with a single API call.
            JSON in, JSON out. Full explainability included.
          </p>
        </div>

        <div className="mt-12">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="mx-auto max-w-4xl">
            <div className="flex justify-center">
              <TabsList className="bg-secondary">
                {endpoints.map((ep) => (
                  <TabsTrigger key={ep.key} value={ep.key} className="data-[state=active]:bg-card data-[state=active]:text-foreground">
                    {ep.label}
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>

            {endpoints.map((ep) => (
              <TabsContent key={ep.key} value={ep.key} className="mt-6">
                <div className="overflow-hidden rounded-xl border border-border/50 bg-card">
                  {/* Endpoint header */}
                  <div className="flex items-center gap-3 border-b border-border/50 px-6 py-4">
                    <Badge className="bg-primary/10 text-primary border-primary/20 font-mono text-xs">
                      {ep.method}
                    </Badge>
                    <code className="text-sm text-muted-foreground font-mono">{ep.path}</code>
                  </div>

                  <div className="grid md:grid-cols-2">
                    {/* Request */}
                    <div className="border-b border-border/50 p-6 md:border-b-0 md:border-r">
                      <p className="mb-3 text-xs font-medium uppercase tracking-wider text-muted-foreground">
                        Request
                      </p>
                      <pre className="overflow-x-auto text-sm leading-relaxed">
                        <code className="font-mono text-foreground/80">{ep.request}</code>
                      </pre>
                    </div>

                    {/* Response */}
                    <div className="p-6">
                      <p className="mb-3 text-xs font-medium uppercase tracking-wider text-muted-foreground">
                        Response
                      </p>
                      <pre className="overflow-x-auto text-sm leading-relaxed">
                        <code className="font-mono text-primary/80">{ep.response}</code>
                      </pre>
                    </div>
                  </div>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </div>
    </section>
  )
}
