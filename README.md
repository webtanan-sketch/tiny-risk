# Tiny Risk

> **TinyManager Module · Foundation**  
> ریسک‌ها را قبل از اینکه تبدیل به بحران شوند، قابل دیدن و قابل پیگیری کن.

[🇮🇷 فارسی](README.md) · [🇬🇧 English](README.en.md) · [TinyManager Core](https://github.com/webtanan-sketch/tinymanager)

![TinyManager Module](https://img.shields.io/badge/TinyManager-Module-2563EB)
![Status](https://img.shields.io/badge/Status-Foundation-64748B)
![Icon](https://img.shields.io/badge/Lucide-TriangleAlert-D97706)
![License](https://img.shields.io/badge/License-MIT-111827)

## هدف

**Tiny Risk** یک Risk Register سبک برای مدیر است. هر ریسک با احتمال و اثر ارزیابی می‌شود و سیستم به‌جای یک لیست شلوغ، مهم‌ترین ریسک‌ها را در اولویت قرار می‌دهد.

## مدل پایه

```text
Risk Score = Probability × Impact
```

هر دو مقدار در نسخه اول از ۱ تا ۵ هستند و نتیجه روی Heatmap پنج‌درپنج نمایش داده می‌شود.

## دامنه نسخه اول

- عنوان و شرح ریسک
- Probability 1–5
- Impact 1–5
- Risk Score
- سطح Low / Medium / High / Critical
- Owner
- Mitigation / اقدام کاهشی
- Due date
- وضعیت Open / Watching / Mitigated / Closed
- Heatmap 5×5
- فیلتر ریسک‌های بحرانی
- فارسی/English و RTL/LTR
- Local-first
- Export JSON / CSV

## Dashboard Widget

این ماژول برای Dashboard هسته Widget ارائه خواهد کرد:

```text
ریسک‌ها
12 فعال
3 بحرانی
```

Widget فقط سیگنال مدیریتی می‌دهد و جای صفحه کامل Risk Register را نمی‌گیرد.

## TinyManager Integration

- Shared Projects
- Shared People برای Risk Owner
- Notifications برای موعد اقدام
- Dashboard Widget
- Storage از Core

## Module Identity

```text
ID:       tiny-risk
Icon:     TriangleAlert (Lucide)
Category: insight
Route:    /modules/risk
Status:   Foundation
```

## Roadmap

- [x] تعریف دامنه و Manifest
- [ ] Risk scoring engine
- [ ] Risk register
- [ ] 5×5 Heatmap
- [ ] Dashboard widget
- [ ] Notifications
- [ ] Standalone mode
- [ ] Export
- [ ] Tests + CI
- [ ] TinyManager integration

## License

MIT © 2026 Webtanan
