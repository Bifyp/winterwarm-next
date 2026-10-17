import { z } from "zod";
export const needs = ["HVAC", "Dostęp", "LED", "Doradztwo"] as const;
export const objects = [
  "Hala magazynowa",
  "Hala produkcyjna",
  "Warsztat lub garaż",
  "Handel lub usługi",
  "Obiekt sportowy",
  "Inny obiekt",
] as const;
export const stages = [
  "Nowa inwestycja",
  "Modernizacja",
  "Adaptacja",
  "Wstępne rozpoznanie",
] as const;
const text = (max: number) =>
  z
    .string()
    .trim()
    .max(max)
    .refine(
      (s) => !/[\u0000-\u0008\u000B\u000C\u000E-\u001F]/.test(s),
      "Nieprawidłowy tekst.",
    );
export const contactSchema = z.object({
  needs: z
    .array(z.enum(needs))
    .min(1)
    .max(4)
    .refine((v) => new Set(v).size === v.length),
  object: z.enum(objects),
  stage: z.enum(stages),
  area: z.union([z.literal(""), z.coerce.number().positive().max(10000000)]),
  location: text(100),
  details: text(3000),
  name: text(150).min(2),
  email: z
    .email()
    .max(200)
    .refine((s) => !/[\r\n]/.test(s)),
  consent: z.literal(true),
  website: z.string().max(100).optional().default(""),
  token: z.string().max(2048).optional().default(""),
  requestId: z.uuid(),
});
export type ContactInput = z.infer<typeof contactSchema>;
export function recipientFor(
  needs: readonly string[],
  env: NodeJS.ProcessEnv = process.env,
) {
  const specific =
    needs.length === 1
      ? (
          {
            HVAC: env.CONTACT_TO_HVAC,
            Dostęp: env.CONTACT_TO_ACCESS,
            LED: env.CONTACT_TO_LED,
          } as Record<string, string | undefined>
        )[needs[0]]
      : undefined;
  return specific || env.CONTACT_TO;
}
export function briefText(v: {
  needs: readonly string[];
  object: string;
  stage: string;
  area: string | number;
  location: string;
  details: string;
  name: string;
  email: string;
}) {
  return (
    "Dzień dobry,\n\nChcę porozmawiać o rozwiązaniach dla inwestycji.\n\nObszary: " +
    v.needs.join(", ") +
    "\nObiekt: " +
    v.object +
    "\nEtap: " +
    v.stage +
    (v.area ? "\nPowierzchnia: " + v.area + " m²" : "") +
    (v.location ? "\nMiejscowość: " + v.location : "") +
    (v.details ? "\n\nSzczegóły:\n" + v.details : "") +
    "\n\nKontakt:\n" +
    v.name +
    "\n" +
    v.email +
    "\n\nProszę o kontakt w sprawie dalszych kroków."
  );
}
