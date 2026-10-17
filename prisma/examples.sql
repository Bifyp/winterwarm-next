-- Educational examples for a FUTURE migrated/seeded PostgreSQL database.
-- These SELECT statements do not prove the database is deployed.

-- Active products with their categories (JOIN).
SELECT p.id, p.name, c.name AS category, p.group_name
FROM products AS p
JOIN categories AS c ON c.slug = p.category_slug
WHERE p.active = TRUE
ORDER BY c.sort_order, p.sort_order, p.id;

-- Number of active products in each category (including empty categories).
SELECT c.slug, c.name, COUNT(p.id) AS product_count
FROM categories AS c
LEFT JOIN products AS p ON p.category_slug = c.slug AND p.active = TRUE
GROUP BY c.slug, c.name, c.sort_order
ORDER BY c.sort_order;

-- Named category; a real application must bind user values, not concatenate SQL.
SELECT id, name, description
FROM products
WHERE category_slug = 'hvac' AND active = TRUE
ORDER BY sort_order, id;

-- Planned inquiry processing: aggregate counts only, no personal data.
SELECT status, COUNT(*) AS inquiry_count
FROM inquiries
GROUP BY status;
