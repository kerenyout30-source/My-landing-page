import { z } from "zod";

export const LeadSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "השם קצר מדי")
    .max(80, "השם ארוך מדי"),
  phone: z
    .string()
    .trim()
    .regex(/^0\d{1,2}-?\d{7}$|^0\d{8,9}$/, "מספר טלפון לא תקין"),
  email: z
    .string()
    .trim()
    .email("כתובת אימייל לא תקינה")
    .max(120),
  message: z
    .string()
    .trim()
    .min(5, "ספרו לי מעט יותר על העסק")
    .max(2000, "ההודעה ארוכה מדי"),
});

export type LeadInput = z.infer<typeof LeadSchema>;
