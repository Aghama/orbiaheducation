# Orbiah Academy deployment setup

The project is prepared for GitHub Actions to build the React/Vite site and deploy `dist/public` to Namecheap cPanel over standard FTP.

## GitHub repository secrets

Add these repository secrets before enabling the workflow:

- `FTP_SERVER` — Namecheap FTP hostname, without a protocol prefix.
- `FTP_USERNAME` — cPanel FTP username.
- `FTP_PASSWORD` — password for that FTP account.

The workflow uploads to `/public_html/`. FTP does not encrypt credentials or file contents in transit; use FTPS if the host supports it and encryption is required.

The workflow runs type-checking and a production build before deployment. It deploys only `dist/public`.

## Active enrollment form

The form posts to `/api/enrollment.php`. The endpoint validates the fields, requires bilingual consent, rejects the hidden honeypot field, and sends a notification to `info@orbiaheducation.com` with `Reply-To` set to the visitor’s email.

Before launch:

1. Upload/deploy the site so `api/enrollment.php` is present under the public document root.
2. Confirm `info@orbiaheducation.com` is hosted locally in cPanel or that the domain’s mail routing is configured for local delivery.
3. Submit one controlled test enquiry from the English form.
4. Submit one controlled test enquiry from the Arabic form.
5. Confirm both arrive at `info@orbiaheducation.com` and that replying goes to the visitor.
6. If `mail()` is restricted or delivery is unreliable, switch the endpoint to authenticated SMTP with PHPMailer using the domain mailbox credentials stored only on the server.

Do not commit mailbox passwords or cPanel credentials.
