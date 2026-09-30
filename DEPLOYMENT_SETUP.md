# Orbiah Academy deployment setup

The project is prepared for GitHub Actions to build the React/Vite site and deploy `dist/public` to Namecheap cPanel over SFTP.

## GitHub repository secrets

Add these repository secrets before enabling the workflow:

- `CPANEL_SFTP_HOST` — Namecheap SFTP hostname.
- `CPANEL_SFTP_USERNAME` — dedicated cPanel/SFTP deployment username.
- `CPANEL_SFTP_PRIVATE_KEY` — private key matching the authorized public key on the hosting account.
- `CPANEL_REMOTE_PATH` — the production document root, such as `/home/CPANEL_USER/public_html/`.

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

Do not commit mailbox passwords, SSH private keys, or cPanel credentials.
