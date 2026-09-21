# Portfolio Expansion — About, Testimonials, Contact, and CV

## Direction
Extend the existing unfolding-dossier portfolio into a small, cohesive site. New pages will retain the current coral/plum palette, editorial typography, paper-proof details, broken-grid rhythm, subtle motion, and mobile-safe layouts.

## Pages and navigation
- Add a shared navigation that reaches Home, Work, About, Testimonials, and Contact from every page.
- Add an **About** page using only verified details from Mona’s résumé and existing career history, supported by her caricature and selected portfolio artwork.
- Add a **Testimonials** page styled as layered quotation proofs. Populate it only with the approved quotes, names, roles, and companies Mona provides; do not invent endorsements.
- Skip the Blog page entirely, as requested.
- Add a **Contact** page with Mona’s public details:
  - Phone: `+91 95998 28836`
  - Email: `monaaswal29@gmail.com`
  - Behance: `behance.net/monaaswal`
- Add a prominent **Download CV** action using the real `Mona Aswal.pdf` found in the shared Portfolio → Resume folder.

## Enquiry form
- Include fields for name, email, phone/company when relevant, project type, budget/timeline, and message.
- Add clear validation, submission progress, success feedback, and accessible error states.
- Prepare the contact page now, but keep direct website email delivery clearly unavailable until a sender domain owned by the user is connected. Do not create a fake success state or silently lose enquiries.
- Keep the visible email link available as an immediate contact option while domain-based sending is pending.

## Content safeguards
- Read the real résumé for biography, experience, skills, education, and CV download content.
- Use the existing Drive artwork and Mona’s caricature; do not generate substitute portfolio work.
- Do not publish placeholder testimonials. The page remains pending until the user pastes the approved quotes and attribution.
- Do not add a blog or “coming soon” blog content.

## Technical details
- Create separate `/about`, `/testimonials`, and `/contact` pages with unique titles, descriptions, Open Graph metadata, and Twitter card metadata.
- Preserve `/` and `/work`, updating their navigation and contact links consistently.
- Store the CV as a project-served downloadable file rather than relying on a Drive permission-sensitive link.
- Use accessible form labels, keyboard focus states, phone/email links, and responsive layouts.
- Verify all pages, navigation, the CV download, form validation, artwork loading, and desktop/mobile presentation.

## Pending inputs and activation
- **Testimonials:** approved quote text plus each person’s name, role, and company must be supplied before that page can be populated.
- **Email sending:** a sender domain owned by the user is required before the form can deliver enquiries. Once available, set up the sender domain and activate branded form emails to Mona.
