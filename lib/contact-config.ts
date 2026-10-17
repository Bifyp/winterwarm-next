export function isContactConfigured() {
  return (
    [
      "RESEND_API_KEY",
      "CONTACT_FROM",
      "CONTACT_TO",
      "UPSTASH_REDIS_REST_URL",
      "UPSTASH_REDIS_REST_TOKEN",
      "RATE_LIMIT_SALT",
      "TURNSTILE_SECRET_KEY",
      "NEXT_PUBLIC_TURNSTILE_SITE_KEY",
    ].every((k) => Boolean(process.env[k])) &&
    process.env.CONTACT_ENABLED === "true"
  );
}
