export type Language = "en" | "ar" | "fr";

export const languageOptions: { code: Language; label: string; native: string }[] = [
  { code: "en", label: "English", native: "EN" },
  { code: "ar", label: "العربية", native: "AR" },
];

const arabic: Record<string, string> = {
  "All rights reserved.": "جميع الحقوق محفوظة.",
  Academy: "الأكاديمية", Programs: "البرامج", "How it works": "كيف نتعلم", "About Orbiah": "عن أوربيا",
  "Enroll now": "سجّل الآن", "LEARNING FOR WHEREVER LIFE TAKES YOU": "تعلّم من أي مكان وفي كل مرحلة",
  "Empowering minds.": "نُمكّن العقول.", "Shaping futures.": "ونصنع المستقبل.",
  "Flexible, supportive learning for children, young people and adults — wherever you are in the world.": "تعلّم مرن وداعم للأطفال والشباب والكبار، أينما كنتم في العالم.",
  "Explore Orbiah Academy": "اكتشف أكاديمية أوربيا", "Online learning with a": "تعلّم عبر الإنترنت مع", "human touch.": "لمسة إنسانية.",
  "Welcome to Orbiah Academy": "مرحباً بكم في أكاديمية أوربيا", "Learn from": "تعلّم من", anywhere: "أي مكان", Personal: "دعم", support: "شخصي",
  "Discover Orbiah": "اكتشف أوربيا", "THE ORBIAH ACADEMY": "أكاديمية أوربيا", "Quality learning,": "تعلّم ذو جودة،", "made accessible.": "متاح للجميع.",
  "WHO WE SERVE": "لمن نقدّم خدماتنا", "There’s a place": "هناك مكان", "for every learner.": "لكل متعلّم.",
  "WHAT WE TEACH": "ماذا نعلّم", "Learning that": "تعلّم", "opens doors.": "يفتح الأبواب.",
  "HOW LEARNING WORKS": "كيف نتعلم", "Structured enough": "منهج منظم", "to move forward.": "لنمضي إلى الأمام.",
  "THE BIGGER VISION": "الرؤية الأكبر", "Online today.": "عبر الإنترنت اليوم.", "Schools tomorrow.": "ومدارس غداً.",
  "Physical school coming soon": "مدرسة فعلية قريباً", "COMMON QUESTIONS": "أسئلة شائعة", "Good to": "من المفيد أن تعرف.",
  "know.": "", "Ask us directly": "اسألنا مباشرة", "START A CONVERSATION": "ابدأ محادثة", "Let’s find the": "لنجد", "right next step.": "الخطوة التالية المناسبة.",
  "Prefer to message?": "تفضّل المراسلة؟", "Enrolment interest": "طلب التسجيل", "Share a few details and we’ll be in touch.": "شاركنا بعض التفاصيل وسنتواصل معك.",
  "Parent / student name": "اسم ولي الأمر / الطالب", "Student age / grade": "عمر الطالب / الصف", Country: "الدولة", "Program interested in": "البرنامج المطلوب",
  "WhatsApp number": "رقم واتساب", "Email address": "البريد الإلكتروني", "Preferred language": "اللغة المفضلة", "Tell us a little more": "أخبرنا المزيد", optional: "اختياري",
  "Send my interest": "أرسل طلب الاهتمام", "We’ll only use your details to respond to this enquiry.": "سنستخدم بياناتك للرد على هذا الاستفسار فقط.",
  "Who is Orbiah Academy for?": "لمن تناسب أكاديمية أوربيا؟", "What subjects do you offer?": "ما المواد التي تقدمونها؟", "Are lessons online?": "هل الدروس عبر الإنترنت؟", "What languages can learners use?": "ما اللغات المتاحة للتعلم؟", "How do I get started?": "كيف أبدأ؟",
  Kids: "الأطفال", Teens: "المراهقون", Adults: "الكبار", "Ages 5–12": "من 5 إلى 12 سنة", "Ages 13–18": "من 13 إلى 18 سنة", "18+": "18 سنة فأكثر",
  English: "الإنجليزية", Arabic: "العربية", French: "الفرنسية", Quran: "القرآن", Coding: "البرمجة", "School support": "الدعم المدرسي",
  "Understand the learner": "نفهم المتعلم", "Learn with purpose": "نتعلم بهدف", "Grow with support": "ننمو بالدعم", "I agree that Orbiah Education may use these details to respond to my enquiry.": "أوافق على استخدام أوربيا للتعليم لهذه البيانات للرد على استفساري.", "Privacy: Orbiah Education uses your details only to respond to this enquiry. We do not sell them. You may request correction or deletion by emailing info@orbiaheducation.com.": "الخصوصية: تستخدم أوربيا للتعليم بياناتكم للرد على هذا الاستفسار فقط ولا تبيعها. يمكنكم طلب تصحيحها أو حذفها عبر البريد info@orbiaheducation.com.", "Your details are sent securely to info@orbiaheducation.com and used only to respond to your enquiry.": "تُرسل بياناتكم بأمان إلى info@orbiaheducation.com وتُستخدم للرد على استفساركم فقط.", "We couldn’t send your enquiry right now. Please try WhatsApp or email instead.": "تعذر إرسال استفساركم الآن. يرجى التواصل عبر واتساب أو البريد الإلكتروني.", "Sending…": "جارٍ الإرسال…", "Thank you for your interest.": "شكراً لاهتمامكم.", "Your enquiry has been sent to the Orbiah admissions team. We’ll be in touch soon.": "تم إرسال استفساركم إلى فريق القبول في أوربيا. سنتواصل معكم قريباً.", "Email enquiry details": "إرسال تفاصيل الاستفسار بالبريد", "Send another enquiry": "إرسال استفسار آخر",
  "A global education company delivering high-quality learning through physical schools, digital platforms and community outreach.": "شركة تعليمية عالمية تقدم تعلّماً عالي الجودة من خلال المدارس الحضورية والمنصات الرقمية وخدمة المجتمع.", "Structured classrooms, qualified teachers and a safe learning environment. Opening soon.": "فصول منظمة ومعلمون مؤهلون وبيئة تعليمية آمنة. قريباً.", "Learn from anywhere through flexible digital learning, live and recorded lessons and structured courses.": "تعلّموا من أي مكان عبر تعلّم رقمي مرن ودروس مباشرة ومسجلة ودورات منظمة.", "A future pathway for sponsorship, access to education and community impact.": "مسار مستقبلي للرعاية ودعم الوصول إلى التعليم وتحقيق أثر مجتمعي.",
  "Orbiah Education": "تعليم أوربيا", "Orbiah Schools": "مدارس أوربيا", "Orbiah Academy": "أكاديمية أوربيا", "Orbiah Hope": "أمل أوربيا", "OUR SYSTEM": "منظومتنا", "PHYSICAL LEARNING": "التعلّم الحضوري", "ONLINE LEARNING SYSTEM": "منظومة التعلّم عبر الإنترنت", "CHARITY & SCHOLARSHIPS": "العمل الخيري والمنح الدراسية", "International curriculum": "منهج دولي", "Multilingual learning": "تعلّم متعدد اللغات", "Accessible education for all": "تعليم متاح للجميع", "Start your journey with Orbiah": "ابدأ رحلتك مع أوربيا", "One vision,": "رؤية واحدة،", "many ways to learn.": "وطرق متعددة للتعلّم.", "From online learning today to physical schools and scholarships tomorrow, Orbiah is building an accessible education system across borders.": "من التعلّم عبر الإنترنت اليوم إلى المدارس الحضورية والمنح الدراسية غداً، تبني أوربيا منظومة تعليمية متاحة للجميع عبر الحدود.", "Opening soon": "قريباً", "Future initiative": "مبادرة مستقبلية", "Learn more": "اعرف المزيد", "Start learning": "ابدأ التعلّم", "ORBIAH ACADEMY LEVELS": "مراحل أكاديمية أوربيا", "Fun, engaging early education": "تعليم مبكر ممتع وتفاعلي", "Academic and future preparation": "الاستعداد الأكاديمي والمستقبلي", "Skills, growth and lifelong learning": "المهارات والنمو والتعلّم مدى الحياة", "Browse courses": "تصفّح الدورات", "Orbiah Education is a global education company delivering high-quality learning through physical schools, digital platforms and community outreach programs.": "أوربيا للتعليم شركة تعليمية عالمية تقدم تعلّماً عالي الجودة من خلال المدارس الحضورية والمنصات الرقمية وبرامج خدمة المجتمع.", "Orbiah Academy is our online learning system: learn from anywhere through live and recorded lessons, flexible digital learning and structured courses.": "أكاديمية أوربيا هي منظومتنا للتعلّم عبر الإنترنت: تعلّموا من أي مكان عبر دروس مباشرة ومسجلة وتعلّم رقمي مرن ودورات منظمة.", "Whether starting out, catching up or reaching for what’s next, Orbiah meets learners with the right mix of structure and encouragement.": "سواء كنتم تبدأون رحلة التعلّم أو تستدركون ما فاتكم أو تستعدون للخطوة التالية، توفر أوربيا المزيج المناسب من التنظيم والتشجيع.", "Orbiah Schools is our future-focused school concept, bringing together online and physical learning with international-style education and Arabic, English and French language development.": "مدارس أوربيا هي رؤيتنا لمدرسة تركز على المستقبل، وتجمع بين التعلّم عبر الإنترنت والتعلّم الحضوري مع تعليم بنمط دولي وتطوير اللغات العربية والإنجليزية والفرنسية.", "Our long-term vision includes online schooling, physical schools, continuing education, digital learning resources and scholarships through Orbiah Hope.": "تشمل رؤيتنا طويلة المدى التعليم المدرسي عبر الإنترنت والمدارس الحضورية والتعليم المستمر وموارد التعلّم الرقمية والمنح الدراسية من خلال أمل أوربيا.", "Empowering Minds. Shaping Futures.": "نُمكّن العقول ونصنع المستقبل.", "Learn from anywhere": "تعلّم من أي مكان",
  "Register Student": "تسجيل الطالب",
  "General Enquiry": "استفسار عام",
  "Looking for full student registration?": "هل تبحث عن التسجيل الكامل للطالب؟",
  "Open Registration Form": "افتح نموذج التسجيل",
  "Your Name": "اسمك",
  "Your full name": "اسمك الكامل",
  "Topic of Interest": "موضوع الاستفسار",
  "How can we help you?": "كيف يمكننا مساعدتك؟",
  "Type your message or question here...": "اكتب رسالتك أو سؤالك هنا...",
  "Privacy: Orbiah Education uses your details only to respond to this enquiry. We do not sell them.": "الخصوصية: تستخدم أوربيا للتعليم بياناتكم للرد على هذا الاستفسار فقط ولا تبيعها.",
  "Send Enquiry": "إرسال الاستفسار",
  "Kids learning": "تعلّم الأطفال",
  "Teen learning": "تعلّم المراهقين",
  "Adult learning": "تعلّم الكبار",
  "Private tutoring": "تدريس خاص",
  "Ask about a subject": "اسأل عن مادة",
};

const french: Record<string, string> = {
  "All rights reserved.": "Tous droits réservés.",
  Academy: "Académie", Programs: "Programmes", "How it works": "Comment ça marche", "About Orbiah": "À propos d’Orbiah",
  "Enroll now": "S’inscrire", "LEARNING FOR WHEREVER LIFE TAKES YOU": "Apprendre où que vous soyez",
  "Empowering minds.": "Éveiller les esprits.", "Shaping futures.": "Construire les avenirs.",
  "Flexible, supportive learning for children, young people and adults — wherever you are in the world.": "Un apprentissage flexible et bienveillant pour les enfants, les jeunes et les adultes, où que vous soyez.",
  "Explore Orbiah Academy": "Découvrir l’Académie Orbiah", "Online learning with a": "Un apprentissage en ligne avec", "human touch.": "une touche humaine.",
  "Welcome to Orbiah Academy": "Bienvenue à l’Académie Orbiah", "Learn from": "Apprendre depuis", anywhere: "n’importe où", Personal: "Accompagnement", support: "personnel",
  "Discover Orbiah": "Découvrir Orbiah", "THE ORBIAH ACADEMY": "L’ACADÉMIE ORBIAH", "Quality learning,": "Un apprentissage de qualité,", "made accessible.": "accessible à tous.",
  "WHO WE SERVE": "POUR QUI", "There’s a place": "Une place", "for every learner.": "pour chaque apprenant.",
  "WHAT WE TEACH": "CE QUE NOUS ENSEIGNONS", "Learning that": "Un apprentissage qui", "opens doors.": "ouvre des portes.",
  "HOW LEARNING WORKS": "COMMENT ÇA MARCHE", "Structured enough": "Une structure pour", "to move forward.": "aller de l’avant.",
  "THE BIGGER VISION": "NOTRE GRANDE VISION", "Online today.": "En ligne aujourd’hui.", "Schools tomorrow.": "Des écoles demain.",
  "Physical school coming soon": "École physique bientôt disponible", "COMMON QUESTIONS": "QUESTIONS FRÉQUENTES", "Good to": "Bon à", "know.": "savoir.", "Ask us directly": "Nous contacter directement",
  "START A CONVERSATION": "COMMENÇONS LA CONVERSATION", "Let’s find the": "Trouvons", "right next step.": "la prochaine étape.", "Prefer to message?": "Vous préférez écrire ?",
  "Enrolment interest": "Demande d’inscription", "Share a few details and we’ll be in touch.": "Partagez quelques informations et nous vous répondrons.",
  "Parent / student name": "Nom du parent / de l’élève", "Student age / grade": "Âge / classe de l’élève", Country: "Pays", "Program interested in": "Programme souhaité",
  "WhatsApp number": "Numéro WhatsApp", "Email address": "Adresse e-mail", "Preferred language": "Langue préférée", "Tell us a little more": "Dites-nous en plus", optional: "facultatif",
  "Send my interest": "Envoyer ma demande", "We’ll only use your details to respond to this enquiry.": "Vos informations serviront uniquement à répondre à votre demande.",
  "Who is Orbiah Academy for?": "À qui s’adresse l’Académie Orbiah ?", "What subjects do you offer?": "Quelles matières proposez-vous ?", "Are lessons online?": "Les cours sont-ils en ligne ?", "What languages can learners use?": "Quelles langues sont disponibles ?", "How do I get started?": "Comment commencer ?",
  Kids: "Enfants", Teens: "Adolescents", Adults: "Adultes", "Ages 5–12": "5–12 ans", "Ages 13–18": "13–18 ans", "18+": "18 ans et +",
  English: "Anglais", Arabic: "Arabe", French: "Français", Quran: "Coran", Coding: "Programmation", "School support": "Soutien scolaire",
  "Understand the learner": "Comprendre l’apprenant", "Learn with purpose": "Apprendre avec un objectif", "Grow with support": "Grandir avec un accompagnement",
};

export function translate(language: Language, value: string): string {
  if (language === "ar") return arabic[value] ?? value;
  if (language === "fr") return french[value] ?? value;
  return value;
}
