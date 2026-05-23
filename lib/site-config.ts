import {
  Bot,
  Brain,
  Workflow,
  LayoutTemplate,
  Plug,
  Sparkles,
  Heart,
  Clock,
  Briefcase,
  Wand2,
  type LucideIcon,
} from "lucide-react";

export const brand = {
  name: "קרן",
  tagline: "AI Solutions for Businesses",
  coreMessage: "AI מתקדם לעסקים — עם ליווי אישי אמיתי.",
  contactEmailFallback: "hello@example.com",
} as const;

// 👇 עדכני את המספר לקידומת בינלאומית ללא אפס מוביל וללא תווים מיוחדים.
// דוגמה: 0501234567 → "972501234567"
export const whatsapp = {
  number: "972500000000",
  defaultMessage: "היי קרן! הגעתי דרך האתר ואשמח לשמוע עוד על פתרונות ה-AI שלך.",
  buttonLabel: "WhatsApp",
  tooltipLabel: "צרו קשר בוואטסאפ",
} as const;

export function buildWhatsAppUrl(message?: string) {
  const text = encodeURIComponent(message ?? whatsapp.defaultMessage);
  return `https://wa.me/${whatsapp.number}?text=${text}`;
}

export const navLinks = [
  { href: "#about", label: "אודות" },
  { href: "#services", label: "שירותים" },
  { href: "#why-me", label: "למה אני" },
  { href: "#process", label: "תהליך" },
  { href: "#contact", label: "צרו קשר" },
] as const;

export const heroContent = {
  badge: "AI Solutions for Businesses",
  headline: "פתרונות AI חכמים לעסקים שרוצים לצמוח מהר יותר",
  subheadline:
    "צ׳אטבוטים, אוטומציות וסוכני AI בהתאמה אישית — עם ליווי אישי וחשיבה עסקית.",
  primaryCta: "השאירו פרטים לשיחת ייעוץ",
  secondaryCta: "גלו את השירותים",
} as const;

export const aboutContent = {
  eyebrow: "מי אני",
  title: "טכנולוגיה מתקדמת — עם נשמה אנושית",
  paragraphs: [
    "אני קרן, מפתחת פתרונות AI שמחברת בין טכנולוגיה מתקדמת ליחס אישי. אני מאמינה שבינה מלאכותית צריכה להרגיש פשוטה, אנושית — ולעבוד בשבילכם.",
    "כל פרויקט מתחיל בהבנה עמוקה של העסק שלכם, ממשיך בבנייה מותאמת אישית של הפתרון, ומסתיים בליווי שמוודא שהמערכת באמת מייצרת ערך — לא רק עוד כלי טכנולוגי.",
  ],
  pillars: [
    "מקצועית",
    "עתידנית",
    "חדשנית",
    "אנושית",
    "נגישה",
    "חכמה",
  ],
} as const;

export type Service = {
  icon: LucideIcon;
  title: string;
  description: string;
  bullets: string[];
};

export const services: Service[] = [
  {
    icon: Bot,
    title: "צ׳אטבוטים חכמים",
    description:
      "בוטים שמדברים את השפה של הלקוחות שלכם, עונים 24/7 ומעבירים פניות חמות אליכם.",
    bullets: ["מענה אוטומטי בעברית", "אינטגרציה ל-WhatsApp/אתר", "למידה מתמשכת"],
  },
  {
    icon: Brain,
    title: "סוכני AI",
    description:
      "סוכנים אוטונומיים שמבצעים משימות מורכבות — מחקר, סיכום, ניהול לידים וקבלת החלטות.",
    bullets: ["Workflows מותאמים", "חיבור למקורות מידע", "בקרת איכות"],
  },
  {
    icon: Workflow,
    title: "אוטומציות עסקיות",
    description:
      "מאגדים תהליכים ידניים בזרימות חכמות שחוסכות שעות בשבוע ומפחיתות טעויות.",
    bullets: ["Make / n8n / Zapier", "סנכרון בין מערכות", "התראות חכמות"],
  },
  {
    icon: LayoutTemplate,
    title: "דפי נחיתה ואתרים",
    description:
      "אתרים מהירים, מעוצבים ומותאמים להמרה — בנויים עם הטכנולוגיות הכי עדכניות.",
    bullets: ["Next.js + Tailwind", "אופטימיזציה ל-SEO", "מהירות טעינה גבוהה"],
  },
  {
    icon: Plug,
    title: "אינטגרציות",
    description:
      "מחברת מערכות שלא דיברו ביניהן — CRM, ניוזלטר, ספקי תשלום, סלאק וכל מה שצריך.",
    bullets: ["APIs מותאמים", "Webhooks", "אבטחה ופרטיות"],
  },
];

export type WhyPoint = { icon: LucideIcon; title: string; text: string };

export const whyPoints: WhyPoint[] = [
  {
    icon: Sparkles,
    title: "פתרונות מותאמים אישית",
    text: "אין כאן תבניות גנריות. כל פתרון נבנה סביב התהליכים והקהל הספציפי שלכם.",
  },
  {
    icon: Heart,
    title: "ליווי אישי לכל אורך הדרך",
    text: "אני נשארת איתכם גם אחרי ההשקה — אחראית על שיפור, אימון ובדיקות ביצועים.",
  },
  {
    icon: Clock,
    title: "זמינות גבוהה",
    text: "תקשורת ישירה במייל / וואטסאפ, ללא שכבות תיווך. תשובות ביום העסקים.",
  },
  {
    icon: Briefcase,
    title: "חשיבה עסקית",
    text: "AI הוא אמצעי — לא מטרה. כל החלטה מתחילה משאלה אחת: מה זה ייתן לעסק שלכם?",
  },
  {
    icon: Wand2,
    title: "שילוב AI ואוטומציה",
    text: "המשלב הנכון של מודלים, כלי no-code וקוד מותאם — לא משהו אחד בלבד.",
  },
];

export type Step = { number: string; title: string; description: string };

export const processSteps: Step[] = [
  {
    number: "01",
    title: "אפיון העסק",
    description:
      "פגישת אבחון מעמיקה — מבינים את התהליכים, נקודות הכאב והיעדים. מצמצמים את הפתרון לשלוש משימות שיעשו את ההבדל הגדול ביותר.",
  },
  {
    number: "02",
    title: "בנייה והטמעה",
    description:
      "בונה את המערכת איתכם — ולא בשבילכם. אינטגרציות, בדיקות, אימון הצוות והפעלה חיה עם בקרה הדוקה.",
  },
  {
    number: "03",
    title: "ליווי ושיפור",
    description:
      "אחרי ההשקה — מודדים, מתקנים ומשפרים. עדכונים שוטפים, הוספת יכולות חדשות ותחזוקה שמוודאת שהמערכת תמיד מעודכנת.",
  },
];

export const contactContent = {
  eyebrow: "בואו נדבר",
  title: "בואו נבנה מערכת חכמה לעסק שלכם",
  subtitle:
    "השאירו פרטים, ואחזור אליכם תוך יום עסקים לשיחת ייעוץ קצרה — ללא עלות והתחייבות.",
  cta: "שלחו פנייה",
  successTitle: "הפנייה התקבלה — תודה!",
  successBody: "אחזור אליכם בהקדם. בינתיים, אפשר להמשיך לעיין באתר.",
  errorBody: "משהו השתבש בשליחה. אפשר לנסות שוב או לכתוב לי ישירות במייל.",
} as const;
