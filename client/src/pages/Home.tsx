import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Check, ChevronDown, Globe2, HeartHandshake, LoaderCircle, Menu, Music2, Send, Sparkles, X } from "lucide-react";
import { Language, translate } from "../lib/i18n";

const heroPhoto = "https://res.cloudinary.com/zuyjjqpl/image/upload/v1791041957/WhatsApp_Image_2026-10-02_at_20.04.37.webp";
const learningPhoto = "https://res.cloudinary.com/zuyjjqpl/image/upload/v1791041911/WhatsApp_Image_2026-10-02_at_20.04.37j.webp";
const telegramUrl = "https://t.me/OrbiahEducation";
const academyEmail = "admissions@orbiaheducation.com";
const registrationFormUrl = "https://form.jotform.com/260384788218064";
const formEndpoint = "/api/enrollment.php";

const socialLinks: { tiktok: string; telegram: string; snapchat?: string } = {
  tiktok: "https://www.tiktok.com/@orbiaheducation",
  telegram: "https://t.me/OrbiahEducation",
  // snapchat: "https://example.com",
};

const programs = [
  { label: "Kids", age: "Ages 5–12", copy: "Build confident foundations in language, literacy, numeracy and curiosity.", color: "sun" },
  { label: "Teens", age: "Ages 13–18", copy: "Grow academic skills, English communication and independent learning habits.", color: "sky" },
  { label: "Adults", age: "18+", copy: "Learn a language, develop digital skills or keep moving toward your goals.", color: "mint" },
];

const subjects = ["English", "Arabic", "French", "Korean", "Quran", "Coding", "School support"];

const systemPillars = [
  { title: "Orbiah Schools", kicker: "PHYSICAL LEARNING", copy: "Structured classrooms, qualified teachers and a safe learning environment. Opening soon." },
  { title: "Orbiah Academy", kicker: "ONLINE LEARNING SYSTEM", copy: "Learn from anywhere through flexible digital learning, live and recorded lessons and structured courses." },
  { title: "Orbiah Hope", kicker: "CHARITY & SCHOLARSHIPS", copy: "A future pathway for sponsorship, access to education and community impact." },
];

const faqs = [
  { question: "Who is Orbiah Academy for?", answer: "Orbiah Academy supports children, teenagers and adults who want flexible, structured learning with personal encouragement. Learners can join locally or internationally." },
  { question: "What subjects do you offer?", answer: "Our programs may include English, Arabic, French, Korean, Quran, coding and school support. We can help you find the right combination based on your learner’s goals." },
  { question: "Are lessons online?", answer: "Yes. Orbiah Academy is designed as an online learning and tutoring platform, making it possible to learn from wherever you are. Physical school opportunities are part of our future vision." },
  { question: "What languages can learners use?", answer: "We offer English-medium learning options and support language development in English, Arabic, French and Korean. Tell us your preferred language in the interest form." },
  { question: "How do I get started?", answer: "Complete the enrolment interest form or message us on Telegram. We’ll learn about your needs and help you choose the best next step." },
];

const testimonials = [
  { audience: "SAMPLE PARENT TESTIMONIAL", quote: "The lessons have helped my child feel more confident and stay engaged with learning.", attribution: "Parent of an Orbiah learner (sample)" },
  { audience: "SAMPLE LEARNER TESTIMONIAL", quote: "I enjoy learning at my own pace and feel supported as I work towards my goals.", attribution: "Orbiah learner (sample)" },
];

function SnapchatIcon({ size = 18, className = "" }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg">
      <path d="M12.002 2C7.585 2 5.093 5.378 5.093 8.358c0 1.956 1.092 3.125 1.764 3.737.217.198.303.484.225.766-.118.423-.526 1.834-.693 2.378-.073.238-.284.402-.534.418-1.042.067-2.618.572-2.81 1.488-.088.421.144.757.514.862 1.411.4 3.324.083 4.298-.44.156-.084.343-.092.507-.024.96.4 2.217.657 3.638.657 1.42 0 2.678-.257 3.638-.657.164-.068.35-.06.507.024.974.523 2.887.84 4.298.44.37-.105.602-.441.514-.862-.192-.916-1.768-1.421-2.81-1.488-.25-.016-.461-.18-.534-.418-.167-.544-.575-1.955-.693-2.378-.078-.282.008-.568.225-.766.672-.612 1.764-1.781 1.764-3.737C18.91 5.378 16.418 2 12.002 2z" />
    </svg>
  );
}

function Logo() {
  return <a className="orbiah-logo" href="#top" aria-label="Orbiah Education home"><img src="https://res.cloudinary.com/zuyjjqpl/image/upload/v1790948818/Orbiah_Academy_Logo_new.webp" alt="Orbiah Education" /></a>;
}

function TelegramButton({ className = "" }: { className?: string }) {
  return <a className={`telegram-btn ${className}`} href={telegramUrl} target="_blank" rel="noreferrer"><Send size={18} /> Message us</a>;
}

function EnrollmentForm({ language }: { language: Language }) {
  const [sent, setSent] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");
  const t = (value: string) => translate(language, value);
  const [form, setForm] = useState({ name: "", age: "N/A", country: "N/A", program: "General Enquiry", email: "", language: "English", message: "", consent: false, website: "" });
  const update = (key: keyof typeof form) => (event: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => setForm((current) => ({ ...current, [key]: event.target.value }));
  const submit = async (event: FormEvent) => { event.preventDefault(); setError(""); setSubmitting(true); try { const response = await fetch(formEndpoint, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(form) }); const result = await response.json().catch(() => ({ ok: false })); if (!response.ok || !result.ok) throw new Error("submission failed"); setSent(true); } catch { setError(t("We couldn’t send your enquiry right now. Please try Telegram or email instead.")); } finally { setSubmitting(false); } };

  if (sent) return <div className="form-success"><span className="success-icon"><Check size={22} /></span><h3>{t("Thank you for your interest.")}</h3><p>{t("Your enquiry has been sent to the Orbiah admissions team. We'll be in touch soon.")}</p></div>;

  return <form className="interest-form" onSubmit={submit}>
    <div className="full-reg-banner">
      <span>{t("Looking for full student registration?")}</span>
      <a href={registrationFormUrl} target="_blank" rel="noreferrer">{t("Open Registration Form")} <ArrowRight size={14} /></a>
    </div>

    <div className="form-row">
      <label>{t("Your Name")}<input required value={form.name} onChange={update("name")} placeholder={t("Your full name")} /></label>
      <label>{t("Email address")}<input required type="email" value={form.email} onChange={update("email")} placeholder="you@domain.com" /></label>
    </div>

    <label>{t("Topic of Interest")}<select required value={form.program} onChange={update("program")}><option value="General Enquiry">{t("General Enquiry")}</option><option>{t("Kids learning")}</option><option>{t("Teen learning")}</option><option>{t("Adult learning")}</option><option>{t("Private tutoring")}</option><option>{t("School support")}</option></select></label>

    <label>{t("How can we help you?")} <textarea required value={form.message} onChange={update("message")} placeholder={t("Type your message or question here...")} rows={3} /></label>

    <label className="consent-row"><input required type="checkbox" checked={form.consent} onChange={(event) => setForm((current) => ({ ...current, consent: event.target.checked }))} /><span>{t("I agree that Orbiah Education may use these details to respond to my enquiry.")}</span></label>
    <p className="privacy-note">{t("Privacy: Orbiah Education uses your details only to respond to this enquiry. We do not sell them.")}</p>
    <input className="website-trap" tabIndex={-1} autoComplete="off" value={form.website} onChange={update("website")} aria-hidden="true" />
    {error && <p className="form-error" role="alert">{error}</p>}
    <button className="primary-btn form-submit" type="submit" disabled={submitting}>{submitting ? <><LoaderCircle className="form-spinner" size={17} /> {t("Sending…")}</> : <>{t("Send Enquiry")} <ArrowRight size={17} /></>}</button>
  </form>;
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [language, setLanguage] = useState<Language>("en");
  const t = (value: string) => translate(language, value);

  useEffect(() => {
    document.documentElement.lang = language;
    document.documentElement.dir = language === "ar" ? "rtl" : "ltr";
    window.localStorage.setItem("orbiah-language", language);
    document.title = language === "ar" ? "أكاديمية أوربيا | تعلّم مرن ودروس أونلاين للجميع" : "Orbiah Academy | Online Learning & Tutoring for Every Learner";
    const description = document.querySelector('meta[name="description"]');
    if (description) description.setAttribute("content", language === "ar" ? "أوربيا للتعليم شركة تعليمية عالمية تقدم تعلّماً متاحاً من خلال أكاديمية أوربيا ومدارس أوربيا والتعليم متعدد اللغات وتعلّم القرآن والبرمجة والمنح الدراسية." : "Orbiah Education is a global education company building accessible learning through Orbiah Academy online courses, Orbiah Schools, multilingual education, Quran learning, coding, and scholarships.");
  }, [language]);

  return <div id="top" className="orbiah-page" dir={language === "ar" ? "rtl" : "ltr"}>
    <header className="site-header"><div className="site-container header-inner"><Logo /><nav className={menuOpen ? "nav-open" : ""}><a href="#academy" onClick={() => setMenuOpen(false)}>{t("Academy")}</a><a href="#programs" onClick={() => setMenuOpen(false)}>{t("Programs")}</a><a href="#approach" onClick={() => setMenuOpen(false)}>{t("How it works")}</a><a href="#about" onClick={() => setMenuOpen(false)}>{t("About Orbiah")}</a><div className="mobile-nav-actions"><a className="primary-btn" href={registrationFormUrl} target="_blank" rel="noreferrer">{t("Register Student")} <ArrowRight size={16} /></a><TelegramButton /></div></nav><div className="header-actions"><TelegramButton /><a className="primary-btn header-cta" href={registrationFormUrl} target="_blank" rel="noreferrer">{t("Register Student")} <ArrowRight size={16} /></a></div><button className="menu-toggle" onClick={() => setMenuOpen((open) => !open)} aria-label="Toggle navigation">{menuOpen ? <X size={23} /> : <Menu size={23} />}</button></div></header>

    <main>
      <section className="orbiah-hero"><div className="hero-wash wash-left" /><div className="hero-wash wash-right" /><div className="site-container hero-layout"><motion.div className="hero-text" initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .55, ease: "easeOut" }}><span className="eyebrow"><Sparkles size={13} /> {t("LEARNING FOR WHEREVER LIFE TAKES YOU")}</span><h1>{t("Empowering minds.")}<br /><em>{t("Shaping futures.")}</em></h1><p className="hero-intro">{t("Flexible, supportive learning for children, young people and adults. Wherever you are in the world.")}</p><div className="hero-actions"><a className="primary-btn large-btn" href={registrationFormUrl} target="_blank" rel="noreferrer">{t("Register Student")} <ArrowRight size={18} /></a><TelegramButton className="hero-telegram" /></div><div className="hero-trust"><span className="trust-dots"><i /><i /><i /></span><span>{t("Online learning with a")}<br />{t("human touch.")}</span></div></motion.div><motion.div className="hero-visual" initial={{ opacity: 0, scale: .97 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: .65, delay: .12, ease: "easeOut" }}><div className="image-frame"><img src={heroPhoto} alt="African girl learning at home with headphones and a laptop" /><div className="image-label"><span className="label-dot" /> {t("Welcome to Orbiah Academy")}</div></div><div className="floating-note note-one"><Globe2 size={17} /><span>{t("Learn from")}<br /><strong>{t("anywhere")}</strong></span></div><div className="floating-note note-two"><HeartHandshake size={17} /><span>{t("Personal")}<br /><strong>{t("support")}</strong></span></div><div className="hero-doodle">✦</div></motion.div></div><a className="down-cue" href="#academy">{t("Discover Orbiah")} <ChevronDown size={15} /></a></section>

      <motion.section className="academy-intro" id="academy" initial={{ opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .16 }} transition={{ duration: .55, ease: "easeOut" }}><div className="site-container academy-grid"><div><span className="eyebrow green">{t("THE ORBIAH ACADEMY")}</span><h2>{t("Quality learning,")}<br /><em>{t("made accessible.")}</em></h2></div><div className="academy-copy"><p>{t("Orbiah Education is a global education company delivering high-quality learning through physical schools, digital platforms and community outreach programs.")}</p><p>{t("Orbiah Academy is our online learning system: learn from anywhere through live and recorded lessons, flexible digital learning and structured courses.")}</p><div className="academy-signals"><span>{t("International curriculum")}</span><span>{t("Multilingual learning")}</span><span>{t("Accessible education for all")}</span></div><button className="text-btn" onClick={() => setShowForm(true)}>{t("Start your journey with Orbiah")} <ArrowRight size={17} /></button></div></div></motion.section>

      <motion.section className="system-section" initial={{ opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .12 }} transition={{ duration: .55, ease: "easeOut" }}><div className="site-container"><div className="section-top"><div><span className="eyebrow green">{t("OUR SYSTEM")}</span><h2>{t("One vision,")}<br /><em>{t("many ways to learn.")}</em></h2></div><p>{t("From online learning today to physical schools and scholarships tomorrow, Orbiah is building an accessible education system across borders.")}</p></div><div className="system-grid">{systemPillars.map((pillar) => <article className="system-card" key={pillar.title}><span>{t(pillar.kicker)}</span><h3>{t(pillar.title)}</h3><p>{t(pillar.copy)}</p>{pillar.title === "Orbiah Academy" ? <a href={registrationFormUrl} target="_blank" rel="noreferrer" className="primary-btn" style={{ height: "36px", fontSize: "12px", marginTop: "auto" }}>{t("Register Student")} <ArrowRight size={14} /></a> : <span className="system-status">{pillar.title === "Orbiah Schools" ? t("Opening soon") : pillar.title === "Orbiah Hope" ? t("Future initiative") : t("Learn more")}</span>}</article>)}</div></div></motion.section>

      <motion.section className="programs-section" id="programs" initial={{ opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .12 }} transition={{ duration: .55, ease: "easeOut" }}><div className="site-container"><div className="section-top"><div><span className="eyebrow green">{t("ORBIAH ACADEMY LEVELS")}</span><h2>{t("There’s a place")}<br />{t("for every learner.")}</h2></div><p>{t("Whether starting out, catching up or reaching for what’s next, Orbiah meets learners with the right mix of structure and encouragement.")}</p></div><div className="program-grid">{programs.map((program, index) => <motion.article className={`program-card ${program.color}`} key={program.label} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .2 }} transition={{ duration: .42, delay: index * .09, ease: "easeOut" }}><span className="program-age">{t(program.age)}</span><h3>{t(program.label)}</h3><p>{t(program.label === "Kids" ? "Fun, engaging early education" : program.label === "Teens" ? "Academic and future preparation" : "Skills, growth and lifelong learning")}</p><a href={registrationFormUrl} target="_blank" rel="noreferrer" style={{ display: "inline-flex", alignItems: "center", gap: "7px", marginTop: "23px", fontSize: "12px", fontWeight: "700" }}>{t("Register Student")} <ArrowRight size={16} /></a></motion.article>)}</div></div></motion.section>

      <motion.section className="subjects-section" initial={{ opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .12 }} transition={{ duration: .55, ease: "easeOut" }}><div className="site-container subjects-layout"><div className="subject-copy"><span className="eyebrow green">{t("WHAT WE TEACH")}</span><h2>{t("Learning that")}<br /><em>{t("opens doors.")}</em></h2><p>Explore subjects that build strong foundations, confident communication and skills for the future.</p><button className="text-btn" onClick={() => setShowForm(true)}>{t("Ask about a subject")} <ArrowRight size={17} /></button></div><div className="subject-list">{subjects.map((subject, index) => <motion.div className="subject-pill" key={subject} initial={{ opacity: 0, x: 14 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: .35 }} transition={{ duration: .32, delay: index * .06, ease: "easeOut" }}><span>0{index + 1}</span>{t(subject)}<ArrowRight size={16} /></motion.div>)}</div></div></motion.section>

      <section className="approach-section" id="approach"><div className="site-container approach-layout"><motion.div className="approach-image" initial={{ opacity: 0, x: -18 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: .25 }} transition={{ duration: .55 }}><img src={learningPhoto} alt="African boy studying school subjects with headphones and a laptop" /><div className="approach-badge"><span>Orbiah approach</span><strong>Curious.<br />Confident.<br />Connected.</strong></div></motion.div><div className="approach-copy"><span className="eyebrow green">{t("HOW LEARNING WORKS")}</span><h2>{t("Structured enough")}<br />{t("to move forward.")}</h2><div className="steps"><div><b>01</b><span><strong>{t("Understand the learner")}</strong><small>We start with goals, interests and the kind of support that feels right.</small></span></div><div><b>02</b><span><strong>{t("Learn with purpose")}</strong><small>Clear lessons, engaging practice and a pace that works for each learner.</small></span></div><div><b>03</b><span><strong>{t("Grow with support")}</strong><small>Regular encouragement and progress conversations keep momentum going.</small></span></div></div></div></div></section>

      <motion.section className="schools-section" id="about" initial={{ opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .12 }} transition={{ duration: .55, ease: "easeOut" }}><div className="site-container schools-layout"><div><span className="eyebrow green">{t("THE BIGGER VISION")}</span><h2>{t("Online today.")}<br /><em>{t("Schools tomorrow.")}</em></h2><div className="coming-soon"><span className="coming-dot" /> {t("Physical school coming soon")}</div></div><div><p>{t("A modern education ecosystem designed to make quality learning more accessible to children, teens and adults—through schools, online learning, educational resources, and community support.")}</p><p>{t("Orbiah Schools is our future-focused school concept, bringing together online and physical learning with international-style education and Arabic, English, French and Korean language development.")}</p><p className="small-copy">{t("Our long-term vision includes online schooling, physical schools, continuing education, digital learning resources and scholarships through Orbiah Hope.")}</p><div className="vision-quote">{t("Empowering Minds. Shaping Futures.")}</div></div></div></motion.section>

      <motion.section className="feedback-section" id="feedback" initial={{ opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .12 }} transition={{ duration: .55, ease: "easeOut" }}><div className="site-container"><div className="feedback-heading"><span className="eyebrow green">STUDENT &amp; FAMILY FEEDBACK</span><h2>Hear from our<br /><em>community.</em></h2></div><div className="feedback-grid">{testimonials.map((testimonial) => <article className="feedback-card" key={testimonial.audience}><span className="feedback-sample">{testimonial.audience}</span><blockquote>“{testimonial.quote}”</blockquote><p>{testimonial.attribution}</p></article>)}</div><div className="feedback-invite"><a className="text-btn" href="https://form.jotform.com/261597276923066" target="_blank" rel="noreferrer">Share your feedback <ArrowRight size={17} /></a></div></div></motion.section>

      <motion.section className="faq-section" id="faq" initial={{ opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .12 }} transition={{ duration: .55, ease: "easeOut" }}><div className="site-container faq-layout"><div className="faq-intro"><span className="eyebrow green">{t("COMMON QUESTIONS")}</span><h2>{t("Good to")}<br /><em>{t("know.")}</em></h2><p>Everything you need to know before taking the first step. Still have a question?</p><button className="text-btn" onClick={() => setShowForm(true)}>{t("Ask us directly")} <ArrowRight size={17} /></button></div><div className="faq-list">{faqs.map((faq, index) => <div className={`faq-item ${openFaq === index ? "is-open" : ""}`} key={faq.question}><button className="faq-question" aria-expanded={openFaq === index} onClick={() => setOpenFaq(openFaq === index ? null : index)}><span>{t(faq.question)}</span><span className="faq-icon"><ChevronDown size={17} /></span></button><div className="faq-answer" aria-hidden={openFaq !== index}><p>{faq.answer}</p></div></div>)}</div></div></motion.section>

      <motion.section className="enroll-section" id="enroll" initial={{ opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .12 }} transition={{ duration: .55, ease: "easeOut" }}><div className="site-container enroll-layout"><div className="enroll-pitch"><span className="eyebrow">{t("START A CONVERSATION")}</span><h2>{t("Let’s find the")}<br /><em>{t("right next step.")}</em></h2><p>Tell us about your learner and what you’re looking for. We’ll help you find the best way to begin.</p><div className="enroll-contact"><span>{t("Prefer to message?")}</span><TelegramButton /></div><a className="email-link" href={`mailto:${academyEmail}`}>{academyEmail}</a></div><div className="form-card"><div className="form-heading"><div><h3>{t("General Enquiry")}</h3><p>{t("Share a few details and we’ll be in touch.")}</p></div></div><EnrollmentForm language={language} /></div></div></motion.section>
    </main>

    <footer className="site-footer">
      <div className="site-container footer-inner">
        <div className="footer-col-brand">
          <Logo />
          <div className="social-links footer-social" aria-label="Social media links">
            <a href={socialLinks.tiktok} target="_blank" rel="noreferrer" title="TikTok" aria-label="TikTok"><Music2 size={17} /></a>
            <a href={socialLinks.telegram} target="_blank" rel="noreferrer" title="Telegram" aria-label="Telegram"><Send size={17} /></a>
            {socialLinks.snapchat && (
              <a href={socialLinks.snapchat} target="_blank" rel="noreferrer" title="Snapchat" aria-label="Snapchat"><SnapchatIcon size={17} /></a>
            )}
          </div>
        </div>
        <div className="footer-tagline">Making learning more accessible,<br />flexible and meaningful.</div>
        <div className="footer-links">
          <a href="#academy">Academy</a>
          <a href="#programs">Programs</a>
          <a href="#enroll">Contact</a>
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Orbiah Education. {t("All rights reserved.")}</span>
          <span>Empowering minds. Shaping futures.</span>
        </div>
      </div>
    </footer>
    {showForm && <div className="form-modal" role="dialog" aria-modal="true" aria-label="General enquiry form" onClick={() => setShowForm(false)}><div className="form-modal-inner" onClick={(event) => event.stopPropagation()}><button className="modal-close" onClick={() => setShowForm(false)} aria-label="Close form"><X size={20} /></button><EnrollmentForm language={language} /></div></div>}
  </div>;
}
