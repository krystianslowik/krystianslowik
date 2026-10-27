# hey, I'm Krystian

I break things, fix them, and automate whatever survives.

Backend systems, cloud infra, CI/CD, and the kind of debugging that ends three
layers below where the ticket said the problem was. Lately, that's also meant
native macOS apps and browser internals.

## stack

Daily: TypeScript, Python, Bash, Kubernetes, Docker, Terraform, GitHub Actions,
Cloudflare, PostgreSQL, Prometheus, Grafana, Loki

Also in the repos: Swift, AppKit, Go, Kotlin, Node.js, NestJS, FastAPI, React,
Next.js, Bun, Redis, Traefik, ArgoCD, Helm, Playwright, WireMock, n8n, OpenTelemetry

## stuff I'm building

- [Arkt](https://github.com/krystianslowik/arkt)
  Native macOS browser in Swift and AppKit, with an Arc-style sidebar and
  Chromium integration in progress. Pre-alpha.
- [Skald](https://github.com/krystianslowik/skald)
  Valheim server dashboard. Join codes, player history, world maps, backups,
  and metrics. Go agent, Bun, React, Docker, Kubernetes.
- [Gorzko](https://gorzko.app)
  Wedding planner, RSVP, seating plans, and a shared photo album for guests.
  MinIO, presigned URLs, Kubernetes, Terraform, Cloudflare.
- [Doorman](https://github.com/krystianslowik/doorman)
  API for flagging free and disposable email domains.
  TypeScript, Cloudflare Workers, Durable Objects.

## tools I've shipped

- [Docker Compose Health Check](https://github.com/marketplace/actions/docker-compose-health-check)
  GitHub Action that waits for Compose services to be healthy before CI moves on.
- n8n community nodes:
  [AI Trace Exporter](https://github.com/krystianslowik/n8n-nodes-llm-observability)
  for model and tool call traces over OpenTelemetry, and
  [PDF Toolkit](https://github.com/krystianslowik/n8n-nodes-pdf)
  for generating and editing PDFs locally.
- [Trusted Shops SDK](https://github.com/krystianslowik/trustedshops-typescript-sdk)
  TypeScript SDK for authentication, accounts, and reviews.
- [Echoserve](https://github.com/jaracogmbh/echoserve)
  Kotlin and WireMock mock server for integration testing.

## homelab

Three-node kubeadm cluster. Cached signals, not real-time.

![nodes](https://img.shields.io/endpoint?url=https%3A%2F%2Fcluster.codewarbler.com%2Fbadges%2Fhealth&style=flat)
![pods](https://img.shields.io/endpoint?url=https%3A%2F%2Fcluster.codewarbler.com%2Fbadges%2Fpods&style=flat)
![uptime](https://img.shields.io/endpoint?url=https%3A%2F%2Fcluster.codewarbler.com%2Fbadges%2Fuptime&style=flat)
![restarts](https://img.shields.io/endpoint?url=https%3A%2F%2Fcluster.codewarbler.com%2Fbadges%2Frestarts-24h&style=flat)
![etcd snap](https://img.shields.io/endpoint?url=https%3A%2F%2Fcluster.codewarbler.com%2Fbadges%2Fetcd-snap&style=flat)

The restart counter is honest. One scheduler crash ended in a
[kernel patch](https://github.com/krystianslowik/linux/commit/0602c5e144d0d1f346e9209b8d6d15530c7ab91a)
to stop the idle task taking a migration path it never needed.

## outside

Experimental cooking (duck, pierogi, whatever's left in the fridge). Chess
(still bad, still playing). FPV drone builds. Side projects nobody asked for.

## what's next

More Arkt. CKA and CKS. Finding out whether the thing corrupting my nodes is
the kernel or the hardware.

I don't like doing things twice, unless it's automation, then you do it once
and never again.

---

[krystianslowik.com](https://krystianslowik.com) | [LinkedIn](https://www.linkedin.com/in/krystianslowik)
