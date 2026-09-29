# Run the project locally

This project has two apps:

- `server`: Node.js/Express API and Socket.IO server, normally at `http://localhost:8000`.
- `client`: Next.js website at `http://localhost:3000`.

Run both apps in separate terminals. The client can open without every third-party integration configured, but registration and most backend features need the server and its services.

## 1. Install the prerequisites

- Install Node.js. The server package specifies Node 18.x; use a Node version compatible with that requirement if you encounter runtime issues. Node 18 is end-of-life, so do not use it for a public-facing deployment.
- Git Bash or PowerShell.
- Accounts/services needed for normal registration:
  - [MongoDB Atlas](https://www.mongodb.com/cloud/atlas/register) for the database.
  - [Upstash](https://console.upstash.com/) for Redis.
  - An SMTP email provider to send account activation codes. For example, [Gmail App Passwords](https://myaccount.google.com/apppasswords) (requires 2-Step Verification) or [Brevo](https://app.brevo.com/).

Optional integrations:

- [Cloudinary](https://cloudinary.com/users/register_free) for image uploads.
- [Stripe](https://dashboard.stripe.com/register) for payments.
- [VdoCipher](https://www.vdocipher.com/) for protected course videos.
- [Google Cloud credentials](https://console.cloud.google.com/apis/credentials) and/or [GitHub OAuth apps](https://github.com/settings/developers) for social authentication. OAuth is not required to open the site.

## 2. Configure the server

Create or edit `server/.env` (this file is for local secrets; do not share or commit it). Set the following values, keeping any other project-specific values that are already configured:

```env
PORT=8000
DB_URL=<MongoDB Atlas connection string>
REDIS_URL=<Upstash Redis connection URL>

ACCESS_TOKEN=<random secret>
REFRESH_TOKEN=<different random secret>
ACTIVATION_SECRET=<different random secret>

SMTP_HOST=<SMTP host>
SMTP_PORT=587
SMTP_SERVICE=<SMTP service name, if required by your provider>
SMTP_MAIL=<sender email address>
SMTP_PASSWORD=<SMTP password or app password>
```

For a Gmail SMTP account, use `SMTP_HOST=smtp.gmail.com`, `SMTP_SERVICE=gmail`, and a Google App Password rather than your normal Google password. For other providers, use their SMTP host, port, and credentials.

Generate a random secret in a terminal with:

```bash
node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
```

Run it separately for each secret. Do not reuse or publish the generated values. For MongoDB Atlas, create a database user and allow your computer's IP address in Network Access. For Upstash, copy the Redis connection URL into `REDIS_URL`.

The server needs working `DB_URL` and `REDIS_URL` values. SMTP is needed for email/password account registration and activation. Cloudinary, Stripe, and VdoCipher credentials can be added when using those features:

```env
CLOUD_NAME=<Cloudinary cloud name>
CLOUD_API_KEY=<Cloudinary API key>
CLOUD_SECRET_KEY=<Cloudinary API secret>
STRIPE_SECRET_KEY=<Stripe test secret key>
STRIPE_PUBLISHABLE_KEY=<Stripe test publishable key>
VDOCIPHER_API_SECRET=<VdoCipher API secret>
```

## 3. Configure the client

Create or edit `client/.env`:

```env
NEXT_PUBLIC_SERVER_URI=http://localhost:8000/api/v1/
NEXT_PUBLIC_SOCKET_SERVER_URI=http://localhost:8000
SECRET=<random NextAuth secret>
```

The client also accepts `GOOGLE_CLIENT_ID`, `GOOGLE_CLIENT_SECRET`, `GITHUB_CLIENT_ID`, and `GITHUB_CLIENT_SECRET`. They are optional for local startup. If you configure Google OAuth, add these URLs to the Google OAuth client:

- Authorised JavaScript origin: `http://localhost:3000`
- Authorised redirect URI: `http://localhost:3000/api/auth/callback/google`

Copy the resulting Google Client ID and Client secret into `client/.env`. Never share or commit those credentials. If Google requires an OAuth consent screen, set it up and add your account as a test user while the app is in testing mode.

## 4. Install and start the API

Open a terminal in the project folder, then run:

```bash
cd /d/LMS-master/server
npm ci
npm run dev
```

Keep this terminal open. Check that the API responds at [http://localhost:8000/test](http://localhost:8000/test).

## 5. Install and start the website

Open a second terminal:

```bash
cd /d/LMS-master/client
corepack yarn install
corepack yarn dev
```

Keep this terminal open and visit [http://localhost:3000](http://localhost:3000).

## 6. Register in the app

Use the site's sign-up form with an email address you can access. Enter the activation code sent to that address. The code expires after five minutes; check the spam folder if the email does not arrive.

## Troubleshooting

### Yarn reports `ESOCKETTIMEDOUT` while fetching a package

This means Yarn could not download a package from the registry in time. Check your internet/VPN/firewall, then retry from `client`:

```bash
npm ping --registry=https://registry.npmjs.org/
corepack yarn install --network-timeout 600000 --network-concurrency 1
```

Do not run `yarn dev` until dependency installation completes successfully. If installation failed, `next: not recognized` is expected because Next.js was not installed.

### Redis connection failed

Check that `REDIS_URL` in `server/.env` is the full, valid Upstash Redis connection URL.

### MongoDB connection error

Check the Atlas connection string, database username/password, and IP allowlist. URL-encode special characters in the database password.

### Registration or activation email fails

Check the SMTP host, port, sender email, and SMTP/app password in `server/.env`. For Gmail, use an App Password.

### The website cannot reach the API

Ensure the server is running on port 8000 and `NEXT_PUBLIC_SERVER_URI` is `http://localhost:8000/api/v1/`. Restart the client after changing its `.env` file.

### Image uploads, payments, or course video do not work

Configure the corresponding Cloudinary, Stripe, or VdoCipher settings in `server/.env`. Use Stripe test-mode credentials for local testing.

## Keep credentials private

Never paste secrets into chat, screenshots, or public issues. Before committing, check `git status` and confirm no `.env` files containing credentials are staged. If a real credential has already been published, rotate it with its provider.
