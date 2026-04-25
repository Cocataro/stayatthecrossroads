# stayatthecrossroads.com

The Crossroads Inn — immersive cozy fantasy series site by Jason Krebs.
Full redesign per v1.0 spec.

## Status
Placeholder "coming soon" page live. Nina Kowalski builds the full Astro site per the design spec (JAS-20). Sofia Reyes delivers the 12 illustrated assets (JAS-19).

## Infrastructure
- Docker container (nginx:alpine) behind Traefik on the same VPS as Paperclip + jasonkrebsbooks.com
- TLS auto-provisioned by Traefik via Let's Encrypt
- Domain DNS at Hostinger → VPS IP 187.77.31.153

## Design spec
See `docs/design-spec-v1.0.png` (Board-approved 2026-04-16).

## Build + deploy
Once Nina has built the Astro source under `src/`:
- Build output goes to `site/` (or change docker-compose volume)
- Same deploy pattern as jasonkrebsbooks-site (`./deploy/deploy.sh`)

## Repos + agents
- This repo: `Cocataro/stayatthecrossroads` (public)
- Nina: write access via existing GITHUB_TOKEN (same PAT also covers this repo after Board updates scope)
- Sofia: write access for illustration delivery
# Last deploy test: 2026-04-25T21:59:07Z
