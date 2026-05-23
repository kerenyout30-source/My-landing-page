# קרן AI — Landing Page

> דף נחיתה תדמיתי עבור קרן, מפתחת פתרונות AI לעסקים קטנים ובינוניים. בנוי ב-Next.js 16 עם תמיכת RTL מלאה, אסתטיקה כהה עם accent כפול (ניאון טורקיז + ענבר חם), ואנימציות חלקות בכל הדף.

[![Built with Next.js](https://img.shields.io/badge/Next.js-16-black?logo=next.js)](https://nextjs.org/)
[![Tailwind CSS v4](https://img.shields.io/badge/Tailwind-v4-38bdf8?logo=tailwindcss)](https://tailwindcss.com/)
[![TypeScript](https://img.shields.io/badge/TypeScript-strict-3178c6?logo=typescript)](https://www.typescriptlang.org/)

---

## מה זה?

דף נחיתה חד-עמודי שמיועד להציג שירותי AI עסקיים וליצור לידים. הוא כולל:

| סקשן | מה הוא עושה |
|---|---|
| **Hero** | פתיחה אסימטרית עם כותרת בסריף (Frank Ruhl Libre), מילה אחת ב-gradient ענבר→ניאון, ו-chat mockup מונפש שמדמה שיחה מתגלגלת בלולאה |
| **About** | פסקת חיבור אישית + chips של brand personality |
| **Services** | Bento grid עם 1 כרטיס "Featured" (AI Chatbots) ו-4 כרטיסים קומפקטיים |
| **Why Choose Me** | 5 נקודות בידול עם אייקונים |
| **Process** | Timeline אופקי (מובייל: אנכי) עם קו פרוגרס שמתמלא בגלילה |
| **ROI** | 4 stat cards עם count-up animation + טבלת השוואה "ידני vs AI" |
| **Contact** | טופס לידים עם ולידציה צד-לקוח (zod + react-hook-form) + Server Action שמשגר אימייל דרך Resend, וכפתור WhatsApp נוסף |

ועוד: Navbar צף בצורת pill, marquee של מונחים טכניים ברקע ה-Hero, noise overlay גלובלי, ambient orbs בכל סקשן, כפתור WhatsApp צף, ו-A11y מלא (RTL, focus rings, ARIA, prefers-reduced-motion).

---

## איך מריצים?

### דרישות מקדימות
- Node.js 20+ (פותח על 24)
- npm

### צעדים

1. **שיכפול הפרויקט**:
   ```bash
   git clone https://github.com/kerenyout30-source/My-landing-page.git
   cd My-landing-page
   ```

2. **התקנת תלויות**:
   ```bash
   npm install
   ```

3. **הגדרת env vars** (אופציונלי - בלי זה הטופס יציג הודעת dev-mode):
   ```bash
   cp .env.local.example .env.local
   ```
   ערכו את `.env.local`:
   ```env
   RESEND_API_KEY=re_xxxxxxxxxxxxxxxxxxx
   LEAD_TO_EMAIL=your-email@example.com
   LEAD_FROM_EMAIL=onboarding@resend.dev   # אופציונלי
   ```
   קבלת API key: [resend.com/api-keys](https://resend.com/api-keys)

4. **הרצת dev server**:
   ```bash
   npm run dev
   ```
   פתחו [http://localhost:3000](http://localhost:3000) בדפדפן.

5. **עדכון מספר WhatsApp** ב-[lib/site-config.ts](lib/site-config.ts) - שורה 25, להמיר את ה-placeholder ל-`972` + הטלפון שלכם בלי האפס.

### סקריפטים נוספים
| פקודה | מה היא עושה |
|---|---|
| `npm run dev` | dev server עם Turbopack ו-hot reload |
| `npm run build` | בנייה לפרודקשן |
| `npm run start` | הרצת ה-build |
| `npm run lint` | בדיקת ESLint |

---

## Tech Stack

- **[Next.js 16](https://nextjs.org/)** (App Router, Turbopack) - SSR + Server Actions
- **[React 19](https://react.dev/)**
- **[TypeScript](https://www.typescriptlang.org/)** strict
- **[Tailwind CSS v4](https://tailwindcss.com/)** - design tokens דרך `@theme`
- **[Framer Motion](https://www.framer.com/motion/)** - אנימציות
- **[Lucide Icons](https://lucide.dev/)** - אייקונים SVG
- **[Zod](https://zod.dev/)** + **[React Hook Form](https://react-hook-form.com/)** - ולידציה לטופס
- **[Resend](https://resend.com/)** - שליחת אימיילים
- **[Sonner](https://sonner.emilkowal.ski/)** - toast notifications
- פונטים: **Heebo** (body), **Assistant** (display), **Frank Ruhl Libre** (editorial accent)

---

## מבנה תיקיות

```
/app
  ├─ layout.tsx           # RTL + פונטים + metadata + Toaster
  ├─ page.tsx             # הרכבת הסקשנים
  ├─ globals.css          # design tokens + keyframes + utilities
  └─ actions/
      └─ submit-lead.ts   # Server Action: zod validation + Resend
/components
  ├─ ui/                  # פרימיטיביים (Button, Input, Textarea, Label)
  ├─ sections/            # 7 סקשנים + Footer
  └─ shared/              # קומפוננטות לשימוש חוזר (10+)
/lib
  ├─ utils.ts             # cn() helper
  ├─ schemas.ts           # zod schemas
  └─ site-config.ts       # כל התוכן העברי + נתוני ROI + מספר WhatsApp
/snapshots                # ארכיון של גרסאות קודמות (gitignored)
```

---

## גרסאות וארכיון

הפרויקט נבנה איטרטיבית, ויש שתי דרכים לחזור לגרסאות קודמות:

### Branches
- **`main`** - הגרסה הנוכחית
- **`design-v1-pre-amber`** - snapshot לפני הוספת ה-amber accent וסקשן ROI

```bash
git checkout design-v1-pre-amber   # לראות את הגרסה הישנה
git checkout main                  # לחזור לחדשה
```

### Snapshots סטטיים
תיקיית `snapshots/` (gitignored) מכילה build סטטי של גרסאות מסוימות. כל גרסה היא תיקייה עם `index.html` שאפשר לפתוח בלי להריץ Node:
- `snapshots/v1-pre-amber/` - גרסה ראשונה
- `snapshots/v2-amber-roi/` - גרסה עם amber + ROI section

---

## מה למדתי בתהליך

הפרויקט נבנה בשיתוף עם Claude (Sonnet/Opus), והסתעף מ-PRD מפורט שכתבתי לדף הנחיתה. הלקחים החשובים:

### 🎯 PRD מפורט שווה זהב
ככל שה-brief מפורט יותר (מטרה, קהל יעד, brand personality, פלטה, טיפוגרפיה, סקשנים, אנימציות) - כך התוצאה הראשונית קרובה יותר למה שדמיינתי. שעה של תכנון מראש חוסכת ימי איטרציות.

### 🎨 "Distinctive over generic" זה הבדל אמיתי
האסתטיקה הכהה-עם-ניאון-טורקיז היא ברירת המחדל של כל סטרטאפ AI ב-2025. דרושים choices קטנים כדי לבלוט:
- **צבע אקסנט שני** (כאן: ענבר) - מספיק בשני-שלושה מקומות
- **פונט אופייני** לכותרת אחת (Frank Ruhl Libre לסריף - distinctive לעברית)
- **רגע WOW אחד** שזכור (כאן: chat mockup מונפש שמדמה את השירות עצמו)

### 🧱 לא לערבב Server Components ל-Client Components בקלילות
טעות מוקדמת בפרויקט: העברתי אובייקטים שכללו lucide icons (פונקציות) כ-props מ-Server Component ל-Client Component. Next.js לא מצליח לסריאליז פונקציות בגבול הזה. הפתרון: או לסמן את הסקשן כ-`"use client"`, או לעבור למזהי אייקון כ-strings.

### 📦 Server Actions vs Static Export
רציתי snapshot סטטי של האתר (`output: "export"`), אבל Server Actions לא נתמכים בייצוא סטטי. הפתרון: סטוב זמני של הפונקציה לפני build, ושחזור מ-git אחרי. עכשיו יש לי script פנימי שמייצר ארכיון לכל גרסה.

### 🌐 RTL זה לא רק `dir="rtl"`
חוויות שלמדתי:
- **לוגיות vs פיזיות**: ב-RTL, `start-*` ו-`end-*` של Tailwind עדיפות על `left-*`/`right-*` כשרוצים שהקוד יהיה עתידי לתמיכה ב-LTR. במקומות שכן רוצים פיזי (כמו מיקום של floating button), `left-*`/`right-*` הם הבחירה הנכונה.
- **טבלאות**: `text-start` במקום `text-left` כדי שיתיישר כראוי בעברית.
- **Transitions אופקיים**: Tailwind לא הופך אוטומטית `translate-x`. צריך לחשוב פיזית.

### 🪶 פחות זה יותר באנימציות
ה-frontend-design skill הדגיש: "one well-orchestrated page load with staggered reveals creates more delight than scattered micro-interactions." הוצאתי הרבה אנימציות שהוספתי "כי אפשר" - והאתר השתפר.

### 🔧 Git workflow עם branches וסנאפשוטים
בכל שלב משמעותי יצרתי snapshot (branch + תיקיית build סטטי). זה נתן לי ביטחון לקחת סיכונים בעיצוב - תמיד היה אפשר לחזור.

---

## עתיד אפשרי

יכולות שיכולות להתווסף בהמשך:
- בלוג עם MDX
- portfolio של פרויקטים
- testimonials עם carousel
- אינטגרציה ל-Calendly לקביעת פגישות
- analytics dashboard
- גרסה אנגלית (i18n)
- חיבור ל-CRM (HubSpot / Pipedrive)

---

## רישיון

הפרויקט הזה הוא personal showcase ולא מיועד לשימוש מסחרי חוזר. הקוד פתוח לצפייה ולמידה.

---

**נבנה עם ☕ ו-Claude Code בידי קרן**
