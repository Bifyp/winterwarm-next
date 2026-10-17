-- The website uses a private server-side PostgreSQL connection through Prisma.
-- No anonymous or signed-in Supabase Data API access is required.
ALTER TABLE public.categories ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.products ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.inquiries ENABLE ROW LEVEL SECURITY;
REVOKE ALL PRIVILEGES ON TABLE public.categories, public.products, public.inquiries FROM PUBLIC, anon, authenticated;
