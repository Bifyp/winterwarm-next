-- CreateSchema
CREATE SCHEMA IF NOT EXISTS "public";

-- CreateEnum
CREATE TYPE "InquiryStatus" AS ENUM ('PENDING', 'EMAIL_ACCEPTED', 'EMAIL_FAILED');

-- CreateTable
CREATE TABLE "categories" (
    "slug" VARCHAR(32) NOT NULL,
    "name" VARCHAR(80) NOT NULL,
    "sort_order" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "categories_pkey" PRIMARY KEY ("slug")
);

-- CreateTable
CREATE TABLE "products" (
    "id" VARCHAR(64) NOT NULL,
    "name" VARCHAR(180) NOT NULL,
    "description" TEXT NOT NULL,
    "group_name" VARCHAR(80) NOT NULL,
    "image_path" VARCHAR(500) NOT NULL,
    "destination_url" VARCHAR(1000) NOT NULL,
    "category_slug" VARCHAR(32) NOT NULL,
    "active" BOOLEAN NOT NULL DEFAULT true,
    "sort_order" INTEGER NOT NULL DEFAULT 0,
    "created_at" TIMESTAMPTZ(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "products_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "inquiries" (
    "id" UUID NOT NULL,
    "contact_name" VARCHAR(150) NOT NULL,
    "contact_email" VARCHAR(200) NOT NULL,
    "needs" TEXT[],
    "object_type" VARCHAR(100) NOT NULL,
    "stage" VARCHAR(80) NOT NULL,
    "area_m2" DECIMAL(12,2),
    "location" VARCHAR(100),
    "details" TEXT,
    "consent_at" TIMESTAMPTZ(3) NOT NULL,
    "status" "InquiryStatus" NOT NULL DEFAULT 'PENDING',
    "provider_message_id" VARCHAR(200),
    "created_at" TIMESTAMPTZ(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "inquiries_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "products_category_slug_active_sort_order_idx" ON "products"("category_slug", "active", "sort_order");

-- CreateIndex
CREATE INDEX "inquiries_status_created_at_idx" ON "inquiries"("status", "created_at");

-- AddForeignKey
ALTER TABLE "products" ADD CONSTRAINT "products_category_slug_fkey" FOREIGN KEY ("category_slug") REFERENCES "categories"("slug") ON DELETE RESTRICT ON UPDATE CASCADE;

