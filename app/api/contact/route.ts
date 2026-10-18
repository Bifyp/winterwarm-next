export const runtime = "nodejs";
export const dynamic = "force-dynamic";
export async function POST() {
  return Response.json(
    { error: "Wysyłka jest wyłączona w szablonie demonstracyjnym." },
    { status: 503 },
  );
}
