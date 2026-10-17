# Winterwarm Polska — Next.js

Многостраничный сайт на **Next.js App Router, React и TypeScript**, подготовленный для Vercel. Исходный тёмный дизайн сохранён. HTML страницы перенесены в JSX/React, а не встроены в iframe. 14 основных страниц + приватность + настоящая 404. Поиск, каталог, вкладки, схема объекта, таблица XR+ и brief работают как React-компоненты.

## Supabase: создана настоящая база

В Supabase создан проект `winterwarm` (`alotnsoundhkzllotvjq`, Frankfurt / `eu-central-1`). В нём применена схема и загружены 3 категории / 22 товара. Таблицы защищены RLS, доступ через роли `anon` и `authenticated` отозван. Заявок в базе нет.

**Сайт ещё не подключён:** каталог продолжает читать JSON, `/api/contact` пока отправляет почту без записи в PostgreSQL. Необходимы приватное серверное соединение, интеграция кода и проверка deployment. Статус и порядок подключения: [docs/SUPABASE.md](docs/SUPABASE.md).

## PostgreSQL + Prisma: исходный демонстрационный каркас

Добавлены схема `Category → Product`, отдельная модель `Inquiry`, сгенерированная SQL-миграция, Prisma Client и seed с 3 категориями / 22 товарами. **Это подготовленная структура, не подключённая БД:** каталог сайта остаётся в JSON, заявки в PostgreSQL не записываются. Это описание первоначального каркаса; актуальный статус созданной базы указан выше.

Без сервера можно выполнить `npm run db:validate`, `npm run db:generate` и `npm run db:seed:preview`. Настройка и границы демонстрации: [docs/DATABASE-DEMO.md](docs/DATABASE-DEMO.md). Не запускайте миграции/seed на реальной базе без осознанной настройки `DATABASE_URL`.

## Локальный запуск

Требуется Node.js 24 LTS и npm.

```sh
npm ci
cp .env.example .env.local
npm run dev
```

Открыть http://localhost:3000. Для запуска без серверной почты менять `.env.local` не требуется: доступно составление e-mail и скачивание brief.

```sh
npm run check       # строгая типизация и unit/API тесты
npm run build       # production-сборка
npm start           # production-сервер
npx playwright install chromium
npm run test:e2e    # браузерные проверки, сервер поднимается автоматически
```

Для системного Chromium: `PLAYWRIGHT_EXECUTABLE_PATH=$(command -v chromium) npm run test:e2e`.

## Деплой на Vercel

1. В Vercel выбрать **Add New → Project → Import Git Repository** и импортировать `Bifyp/winterwarm-next`.
2. Framework: **Next.js**, Root Directory: корень репозитория. Node.js **24.x**.
3. Install Command: `npm ci`; Build Command: `npm run build`. Output Directory оставить стандартным, **не** `out`/`public`. Не выбирать static export: API требует serverless runtime.
4. Добавить `SITE_URL` с реальным HTTPS-доменом. По умолчанию `SITE_INDEXABLE=false`, `CONTACT_ENABLED=false`: это безопасный preview.
5. Нажать Deploy. Сайт работает без сервисов формы — доступен e-mail fallback. Vercel подключает preview к веткам и production к main.
6. Подключить домен в Settings → Domains, применить DNS-записи, которые выдаст Vercel. Текущий домен Winterwarm **не изменялся**.
7. После проверки контента, прав на изображения и приватности включить `SITE_INDEXABLE=true` для **Production** и пересобрать. Preview остаётся noindex независимо от этого флага.

Файл `vercel.json` уже включает Next.js, команды и лимит 30 секунд для API. Никаких `vercel --prod`, токенов Vercel или привязки чужого аккаунта в проекте нет.

## Реальная отправка заявок

`POST /api/contact`: JSON, серверная Zod-валидация, проверка Origin, лимит тела 16 КБ, honeypot, постоянный Redis rate limit, Turnstile с проверкой action/hostname, Resend с таймаутом и idempotency key. Получатель определяется **только сервером**. Ответ об успехе выдаётся только после принятия письма Resend. Это не подтверждение доставки/прочтения; доставки проверяются в Resend.

До настройки всех сервисов API отвечает **503**, UI предлагает e-mail и телефон. Защита не отключается при сбое Redis/Turnstile. В тестах используются заглушки: реальных писем тесты не отправляют.

### Настройка формы

- Resend: подтвердить домен отправителя, создать API key, задать `RESEND_API_KEY`, `CONTACT_FROM`, `CONTACT_TO`.
- При необходимости задать `CONTACT_TO_HVAC`, `CONTACT_TO_ACCESS`, `CONTACT_TO_LED`. Комбинированные запросы идут на общий `CONTACT_TO`.
- Upstash Redis: задать REST URL/token; `RATE_LIMIT_SALT` — случайная стабильная строка минимум 32 байта (`openssl rand -hex 32`). В Redis хранится HMAC-IP и счётчик с TTL 10 минут, не содержимое формы.
- Turnstile: создать widget, разрешить реальные hostname, задать **публичный** `NEXT_PUBLIC_TURNSTILE_SITE_KEY` и **секретный** `TURNSTILE_SECRET_KEY`. Public site key встраивается при сборке — после изменения нужен Redeploy.
- Согласовать политику приватности/правовое основание, сроки хранения и подрядчиков. Текущая `/prywatnosc` честно описывает технику, но **не является юридически утверждённой политикой**.
- Только после этого включить `CONTACT_ENABLED=true`, пересобрать и отправить тестовую заявку с реального сайта. Проверить получение, Reply-To, ошибки и rate limit. Для Preview использовать отдельные тестовые ключи/входящий ящик, не реальные production-получатели.

Секреты вводить в Vercel → Settings → Environment Variables. `.env.local` не коммитить. Никаких секретов в `NEXT_PUBLIC_*`, кроме публичного ключа Turnstile.

## Архитектура

- `app/*/page.tsx` — отдельные индексируемые маршруты и метаданные.
- `content/*.tsx` — редактируемые server-rendered JSX-разделы.
- `content/site-data.json` — поиск, каталог, материалы, типы объектов.
- `components/` — React-интерактивность, общая рамка и форма.
- `lib/contact-*` — валидация, маршрутизация получателей и обработка.
- `app/api/contact/route.ts` — Node.js serverless API, без базы персональных данных.
- `app/robots.ts`, `app/sitemap.ts` — SEO с блокировкой индексации preview.
- `next.config.ts` — 308 редиректы старых `.html` адресов и заголовки безопасности.
- `tests/`, `e2e/` — unit/API и Playwright. CI собирает и проверяет сайт.
- `docs/` — источники, исходный copy deck, предыдущий дизайн-отчёт и лицензии шрифтов. Эти документы описывают **предыдущую статическую версию** и не заменяют текущий README/LAUNCH-CHECKLIST.

### Локальные изображения и шрифты

Никаких внешних CDN-зависимостей для изображений/шрифтов. Бинарные исходники лежат в `asset-source/*.b64` (переносимый текстовый формат), manifest содержит SHA-256. `npm run assets` проверяет контрольные суммы и восстанавливает `public/assets/`. Это автоматически выполняется перед dev/build и на Vercel. Сгенерированные `.webp`/`.woff2` не коммитятся; SVG хранятся обычно. Не удалять `asset-source`.

## Важные границы готовности

Сборка и программные проверки не означают, что домен подключён, письмо доставлено или политика одобрена. Сайт сохраняет данные/статистику и изображения, собранные из материалов Winterwarm ранее; актуальность цифр, разрешение на публикацию и использование AI hero должен подтвердить владелец. Подробно: `docs/LAUNCH-CHECKLIST.md`. Репозиторий не содержит клиентских заявок и действующих секретов.
