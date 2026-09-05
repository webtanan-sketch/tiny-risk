# Tiny Risk

> **TinyManager Module · Foundation**  
> Make risks visible and actionable before they become crises.

[🇮🇷 فارسی](README.md) · [🇬🇧 English](README.en.md) · [TinyManager Core](https://github.com/webtanan-sketch/tinymanager)

![TinyManager Module](https://img.shields.io/badge/TinyManager-Module-2563EB)
![Status](https://img.shields.io/badge/Status-Foundation-64748B)
![Icon](https://img.shields.io/badge/Lucide-TriangleAlert-D97706)
![License](https://img.shields.io/badge/License-MIT-111827)

## Purpose

**Tiny Risk** is a lightweight risk register for managers. Each risk is assessed by probability and impact so the most important risks rise above a noisy list.

## Base model

```text
Risk Score = Probability × Impact
```

The first version uses a 1–5 scale for both values and plots the result on a 5×5 heatmap.

## First-release scope

- risk title and description
- Probability 1–5
- Impact 1–5
- risk score
- Low / Medium / High / Critical level
- owner
- mitigation action
- due date
- Open / Watching / Mitigated / Closed status
- 5×5 heatmap
- critical-risk filtering
- Persian / English and RTL / LTR
- local-first persistence
- JSON / CSV export

## Dashboard widget

The module is designed to expose a compact management signal:

```text
Risks
12 active
3 critical
```

The widget is intentionally a summary, not a duplicate of the full register.

## TinyManager integration

- Shared Projects
- Shared People for risk ownership
- due-date notifications
- Dashboard widget
- Core storage

## Module identity

```text
ID:       tiny-risk
Icon:     TriangleAlert (Lucide)
Category: insight
Route:    /modules/risk
Status:   Foundation
```

## Roadmap

- [x] Define scope and manifest
- [ ] Risk scoring engine
- [ ] Risk register
- [ ] 5×5 heatmap
- [ ] Dashboard widget
- [ ] Notifications
- [ ] Standalone mode
- [ ] Export
- [ ] Tests + CI
- [ ] TinyManager integration

## License

MIT © 2026 Webtanan
