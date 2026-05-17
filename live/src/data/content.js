import { lang } from "./lang";
export const CONTACT_EMAIL = "askus.solv3d@gmail.com";

const I18N = {
  en: {
    brand: { mark: "S3", name: "Solv3d", tagline: "practical digital transformation" },
    nav: { us: "Us", projects: "Projects", clients: "Our Clients", faq: "FAQ", contact: "Contact" },
    hero: {
      eyebrow: "Practical Digital Transformation",
      title: "Digital transformation that starts from the way your business already works.",
      body: "Solv3d helps SMEs improve process, internal tools, reporting, and AI adoption — without waiting for clean data or a perfect stack.",
      windowTitle: "Current reality to first useful move",
      tabs: { board: "Board", list: "List", timeline: "Timeline" },
      columns: [
        { label: "The Challenge", items: ["Outdated websites", "Inefficient manual processes", "Untapped AI integration"] },
        { label: "Our Levers", items: ["Fresh website overhaul", "Modern automations", "AI implementation"] },
        { label: "Your Outcomes", items: ["Increased online traffic", "Time saved", "Focus on core business"] },
      ],
    },
    team: {
      title: "Us",
      intro: "A small team that stays close to the work. All 3 of us stay hands-on, bringing you through the problem, our solutions and implementation.",
      members: {
        keith: { role: "Product Strategist", tags: ["User Requirements", "Business Strategy", "UX"] },
        gabriel: { role: "Technical Lead", tags: ["Full-Stack Development", "ML & AI Implementation", "DevOps"] },
        astin: { role: "Technical Lead", tags: ["Legal & Governance", "Solutions Architecture"] },
      },
    },
    projects: {
      title: "Past Projects",
      actions: { github: "GitHub", viewClientSite: "View Client Site", demoVideo: "Demo Video" },
      cards: {
        learned: {
          name: "Learned",
          type: "AI Content Tool",
          description: "An AI-powered content tool that transforms PDFs, web URLs, and text prompts into interactive social media feeds — mimicking Reddit and X interfaces so users can get smart by doomscrolling through their own content.",
          videos: { postGeneration: "Post Generation", knowledgeGraph: "Knowledge Graph", settings: "Settings" },
        },
        fluent: {
          name: "Fluent",
          type: "Language Learning App",
          description: "A social-media-style language learning platform where users create, share, and explore bite-sized lessons — featuring flashcards, a built-in dictionary, and community-driven content feeds.",
          videos: { onboarding: "Onboarding", homeFeed: "Home Feed", flashcards: "Flashcards", dictionary: "Dictionary" },
        },
        dealbreaker: {
          name: "DealBreaker",
          type: "LawTech Hackathon — Winner",
          description: "An AI-powered contract analysis tool that transforms legal documents into interactive decision adventures — helping users understand complex clauses through guided scenarios and smart analysis.",
          images: ["DealBreaker upload interface", "Contract analysis in progress", "Interactive decision adventure", "Detailed legal overview"],
          teamPhotoAlt: "Team receiving award",
        },
        lightForm: {
          name: "Light + Form",
          type: "Client Website Revamp",
          description: "A full website revamp delivered for a real client, Light + Form. Guided by the idea that light should shape everything around it, we reworked the structure, messaging flow, and overall UX to better support how their team presents products and serves customers.",
          videos: { walkthrough: "Client Site Walkthrough" },
        },
        handoff: {
          name: "Handoff",
          type: "GoodHack 2026 Healthcare AI",
          description: "Built for GoodHub SEA's GoodHack, Handoff turns doctor appointment audio and transcripts into clear caregiver action plans. It redacts direct PII, extracts daily tasks, appointment and notification candidates, guarded research follow-ups, and keeps auditable lineage so immediate tasks and long-term care considerations are not left half-remembered or unactionable.",
          videos: { transcription: "Transcription", dailyTasks: "Daily Tasks", careGoals: "Care Goals", upcoming: "Upcoming" },
        },
      },
    },
    clients: {
      title: "Our Clients",
      intro: "Teams we have helped with practical digital work.",
      label: "Client",
      visitLabel: "Visit {name} on Instagram",
      items: {
        lightFormConcepts: {
          name: "Light + Form Concepts",
          description: "Lighting concepts and solutions partner.",
        },
      },
    },
    faq: {
      title: "Reassurance before you commit to anything bigger.",
      intro: "The first conversation should help you decide, not pressure you into a large programme.",
      items: [
        { question: "Do we need clean systems before talking to you?", answer: "No. Most teams come to us while the current setup is still messy. We expect that and work from there." },
        { question: "How quickly can we start with a first move?", answer: "Usually faster than a traditional transformation project. The aim is to define and start one sensible improvement, not redesign everything at once." },
        { question: "Will you push AI even if we are not ready?", answer: "No. We only recommend AI when the process, source material, and review path are ready enough to support it." },
        { question: "Is this only for large companies?", answer: "No. We work with SME teams that need more clarity and less operational drag without hiring a giant consultancy." },
      ],
    },
    footer: { contact: "Contact", location: "Singapore", navigate: "Navigate", home: "Home", copyright: `© ${new Date().getFullYear()} Solv3d. All rights reserved.` },
    links: { linkedin: "LinkedIn", website: "Website", emailUs: "Email us" },
  },
  zh: {
    brand: { mark: "S3", name: "Solv3d", tagline: "务实的数字化转型" },
    nav: { us: "团队", projects: "项目", clients: "我们的客户", faq: "常见问题", contact: "联系" },
    hero: {
      eyebrow: "务实的数字化转型",
      title: "从企业现有工作方式出发的数字化转型。",
      body: "Solv3d 帮助中小企业改善流程、内部工具、报表与 AI 采用，而不是等到数据完美或系统重做后才开始。",
      windowTitle: "从现状到第一个有效动作",
      tabs: { board: "看板", list: "列表", timeline: "时间线" },
      columns: [
        { label: "当前挑战", items: ["过时的网站", "低效的人工流程", "未开发的 AI 整合"] },
        { label: "我们的手段", items: ["全新网站改版", "现代自动化探索", "有意义的 AI 实施"] },
        { label: "你的成果", items: ["在线流量提升", "时间节省", "更专注于核心业务"] },
      ],
    },
    team: {
      title: "团队",
      intro: "一个贴近工作的小团队。我们三个人都亲力亲为，带你了解问题、我们的方案和落地执行。",
      members: {
        keith: { role: "产品策略", tags: ["用户需求", "商业策略", "用户体验"] },
        gabriel: { role: "技术负责人", tags: ["全栈开发", "机器学习与 AI 落地", "DevOps"] },
        astin: { role: "技术负责人", tags: ["法律与治理", "解决方案架构"] },
      },
    },
    projects: {
      title: "过往项目",
      actions: { github: "GitHub", viewClientSite: "查看客户网站", demoVideo: "演示视频" },
      cards: {
        learned: {
          name: "Learned",
          type: "AI 内容工具",
          description: "一个由 AI 驱动的内容工具，可把 PDF、网页链接和文字提示转成互动式社交媒体信息流，模拟 Reddit 和 X 的界面，让用户通过浏览自己的内容来高效学习。",
          videos: { postGeneration: "帖子生成", knowledgeGraph: "知识图谱", settings: "设置" },
        },
        fluent: {
          name: "Fluent",
          type: "语言学习应用",
          description: "一个社交媒体风格的语言学习平台，让用户创建、分享和探索短小课程，并提供抽认卡、内置词典和社区内容流。",
          videos: { onboarding: "新手引导", homeFeed: "首页动态", flashcards: "抽认卡", dictionary: "词典" },
        },
        dealbreaker: {
          name: "DealBreaker",
          type: "法律科技黑客松 — 冠军",
          description: "一个由 AI 驱动的合同分析工具，把法律文件转成互动式决策冒险，帮助用户通过引导场景和智能分析理解复杂条款。",
          images: ["DealBreaker 上传界面", "合同分析进行中", "互动式决策冒险", "详细法律概览"],
          teamPhotoAlt: "团队领奖照片",
        },
        lightForm: {
          name: "Light + Form",
          type: "客户网站改版",
          description: "我们为真实客户 Light + Form 完成了完整网站改版。围绕“光应塑造周围一切”的理念，我们重整结构、信息流和整体用户体验，以更好支持团队展示产品和服务客户。",
          videos: { walkthrough: "客户网站演示" },
        },
        handoff: {
          name: "Handoff",
          type: "GoodHack 2026 医疗 AI",
          description: "Handoff 为 GoodHub SEA 的 GoodHack 而建，可把医生预约录音和文字记录转成清晰的照护者行动计划。它会遮蔽直接个人资料、提取每日任务、预约和提醒候选项、谨慎的研究跟进，并保留可审计的脉络。",
          videos: { transcription: "转录", dailyTasks: "每日任务", careGoals: "照护目标", upcoming: "即将事项" },
        },
      },
    },
    clients: {
      title: "我们的客户",
      intro: "我们曾协助这些团队推进务实的数字化工作。",
      label: "客户",
      visitLabel: "在 Instagram 访问{name}",
      items: {
        lightFormConcepts: {
          name: "Light + Form Concepts",
          description: "照明概念与解决方案合作伙伴。",
        },
      },
    },
    faq: {
      title: "先让你安心，再谈更大的投入。",
      intro: "第一次沟通应该帮助你判断，而不是把你推进一个过大的项目里。",
      items: [
        { question: "系统还很乱，可以先聊吗？", answer: "可以。大多数团队来找我们时，现状都还不整齐。我们本来就是从这种现实开始工作。" },
        { question: "多久能开始做出第一步？", answer: "通常会比传统转型项目更快。目标是先定义并启动一个合理的改进，而不是一次重做所有东西。" },
        { question: "你们会不会一开始就强推 AI？", answer: "不会。只有当流程、资料来源和复核路径都准备得足够稳妥时，我们才会建议 AI。" },
        { question: "这是只适合大公司的吗？", answer: "不是。我们为需要更清楚判断、又不想请大型咨询公司的中小企业团队服务。" },
      ],
    },
    footer: { contact: "联系", location: "新加坡", navigate: "导航", home: "首页", copyright: `© ${new Date().getFullYear()} Solv3d。保留所有权利。` },
    links: { linkedin: "LinkedIn", website: "网站", emailUs: "给我们发邮件" },
  },
  ms: {
    brand: { mark: "S3", name: "Solv3d", tagline: "transformasi digital yang praktikal" },
    nav: { us: "Kami", projects: "Projek", clients: "Klien Kami", faq: "FAQ", contact: "Hubungi" },
    hero: {
      eyebrow: "Transformasi digital yang praktikal",
      title: "Transformasi digital yang bermula daripada cara perniagaan anda benar-benar beroperasi.",
      body: "Solv3d membantu PKS memperbaiki proses, alat dalaman, pelaporan, dan penggunaan AI tanpa menunggu data sempurna atau timbunan sistem yang ideal.",
      windowTitle: "Daripada realiti semasa ke langkah pertama yang berguna",
      tabs: { board: "Papan", list: "Senarai", timeline: "Garis masa" },
      columns: [
        { label: "Cabaran", items: ["Laman web usang", "Proses manual yang tidak cekap", "Integrasi AI belum diterokai"] },
        { label: "Tuas kami", items: ["Rombakan laman web", "Automasi moden", "Pelaksanaan AI"] },
        { label: "Hasil anda", items: ["Trafik dalam talian meningkat", "Masa dijimatkan", "Fokus pada perniagaan teras"] },
      ],
    },
    team: {
      title: "Kami",
      intro: "Pasukan kecil yang kekal dekat dengan kerja. Kami bertiga kekal hands-on, membawa anda melalui masalah, penyelesaian dan pelaksanaan kami.",
      members: {
        keith: { role: "Pakar Strategi Produk", tags: ["Keperluan Pengguna", "Strategi Perniagaan", "UX"] },
        gabriel: { role: "Ketua Teknikal", tags: ["Pembangunan Full-Stack", "Pelaksanaan ML & AI", "DevOps"] },
        astin: { role: "Ketua Teknikal", tags: ["Undang-undang & Tadbir Urus", "Seni Bina Penyelesaian"] },
      },
    },
    projects: {
      title: "Projek Lepas",
      actions: { github: "GitHub", viewClientSite: "Lihat Laman Klien", demoVideo: "Video Demo" },
      cards: {
        learned: {
          name: "Learned",
          type: "Alat Kandungan AI",
          description: "Alat kandungan berkuasa AI yang menukar PDF, URL web dan prompt teks kepada feed media sosial interaktif, meniru antara muka Reddit dan X supaya pengguna boleh belajar melalui kandungan sendiri.",
          videos: { postGeneration: "Penjanaan Pos", knowledgeGraph: "Graf Pengetahuan", settings: "Tetapan" },
        },
        fluent: {
          name: "Fluent",
          type: "Aplikasi Pembelajaran Bahasa",
          description: "Platform pembelajaran bahasa bergaya media sosial untuk mencipta, berkongsi dan meneroka pelajaran ringkas, dengan flashcard, kamus terbina dalam dan feed komuniti.",
          videos: { onboarding: "Pengenalan", homeFeed: "Feed Utama", flashcards: "Flashcard", dictionary: "Kamus" },
        },
        dealbreaker: {
          name: "DealBreaker",
          type: "Hackathon LawTech — Pemenang",
          description: "Alat analisis kontrak berkuasa AI yang menukar dokumen undang-undang kepada pengembaraan keputusan interaktif, membantu pengguna memahami klausa kompleks melalui senario berpandu dan analisis pintar.",
          images: ["Antara muka muat naik DealBreaker", "Analisis kontrak sedang berjalan", "Pengembaraan keputusan interaktif", "Gambaran undang-undang terperinci"],
          teamPhotoAlt: "Pasukan menerima anugerah",
        },
        lightForm: {
          name: "Light + Form",
          type: "Rombakan Laman Web Klien",
          description: "Rombakan laman web penuh untuk klien sebenar, Light + Form. Berpandukan idea bahawa cahaya membentuk ruang sekeliling, kami menyusun semula struktur, aliran mesej dan UX keseluruhan supaya pasukan mereka dapat mempamerkan produk dan melayan pelanggan dengan lebih baik.",
          videos: { walkthrough: "Panduan Laman Klien" },
        },
        handoff: {
          name: "Handoff",
          type: "GoodHack 2026 AI Penjagaan Kesihatan",
          description: "Dibina untuk GoodHub SEA GoodHack, Handoff menukar audio janji temu doktor dan transkrip kepada pelan tindakan penjaga yang jelas. Ia menyunting PII langsung, mengekstrak tugasan harian, calon janji temu dan notifikasi, susulan kajian terkawal, serta mengekalkan jejak audit.",
          videos: { transcription: "Transkripsi", dailyTasks: "Tugasan Harian", careGoals: "Matlamat Penjagaan", upcoming: "Akan Datang" },
        },
      },
    },
    clients: {
      title: "Klien Kami",
      intro: "Pasukan yang pernah kami bantu dengan kerja digital yang praktikal.",
      label: "Klien",
      visitLabel: "Lawati {name} di Instagram",
      items: {
        lightFormConcepts: {
          name: "Light + Form Concepts",
          description: "Rakan kongsi konsep dan penyelesaian pencahayaan.",
        },
      },
    },
    faq: {
      title: "Kejelasan dahulu sebelum komitmen yang lebih besar.",
      intro: "Perbualan pertama patut membantu anda membuat keputusan, bukan menolak anda ke projek yang terlalu besar.",
      items: [
        { question: "Perlu ke sistem kami sudah kemas sebelum bercakap dengan anda?", answer: "Tidak. Kebanyakan pasukan datang semasa susunan semasa masih bersepah. Kami memang menjangka itu." },
        { question: "Berapa cepat langkah pertama boleh dimulakan?", answer: "Biasanya lebih cepat daripada projek transformasi tradisional. Matlamatnya ialah menentukan dan memulakan satu penambahbaikan yang masuk akal." },
        { question: "Adakah anda akan memaksa AI walaupun kami belum bersedia?", answer: "Tidak. Kami hanya cadangkan AI apabila proses, bahan sumber, dan laluan semakan cukup bersedia." },
        { question: "Adakah ini hanya untuk syarikat besar?", answer: "Tidak. Halaman ini direka untuk pasukan PKS yang perlukan lebih kejelasan dan kurang beban operasi." },
      ],
    },
    footer: { contact: "Hubungi", location: "Singapura", navigate: "Navigasi", home: "Laman utama", copyright: `© ${new Date().getFullYear()} Solv3d. Hak cipta terpelihara.` },
    links: { linkedin: "LinkedIn", website: "Laman web", emailUs: "E-mel kami" },
  },
  ta: {
    brand: { mark: "S3", name: "Solv3d", tagline: "நடைமுறை டிஜிட்டல் மாற்றம்" },
    nav: { us: "அணி", projects: "திட்டங்கள்", clients: "எங்கள் வாடிக்கையாளர்கள்", faq: "கேள்விகள்", contact: "தொடர்பு" },
    hero: {
      eyebrow: "நடைமுறை டிஜிட்டல் மாற்றம்",
      title: "உங்கள் நிறுவனம் இப்போது வேலை செய்கிற விதத்திலிருந்தே தொடங்கும் டிஜிட்டல் மாற்றம்.",
      body: "Solv3d சிறு மற்றும் நடுத்தர நிறுவனங்களுக்கு செயல்முறை, உள் கருவிகள், அறிக்கையிடல் மற்றும் AI பயன்பாட்டை மேம்படுத்த உதவுகிறது.",
      windowTitle: "தற்போதைய நிலை முதல் முதல் பயனுள்ள படி வரை",
      tabs: { board: "பலகை", list: "பட்டியல்", timeline: "காலவரிசை" },
      columns: [
        { label: "சவால்", items: ["காலாவதியான வலைதளங்கள்", "திறனற்ற கைமுறை செயல்முறைகள்", "பயன்படுத்தப்படாத AI ஒருங்கிணைப்பு"] },
        { label: "எங்கள் வழிமுறைகள்", items: ["புதிய வலைதள மாற்றம்", "நவீன தானியக்கங்கள்", "AI செயல்படுத்தல்"] },
        { label: "உங்கள் விளைவுகள்", items: ["ஆன்லைன் போக்குவரத்து அதிகரிப்பு", "நேரம் சேமிப்பு", "முக்கிய வணிகத்தில் கவனம்"] },
      ],
    },
    team: {
      title: "அணி",
      intro: "வேலைக்கு நெருக்கமாக இருக்கும் சிறு குழு. எங்கள் மூவரும் hands-on ஆக இருந்து, பிரச்சினை, தீர்வுகள் மற்றும் செயல்படுத்தல் வழியாக உங்களை அழைத்துச் செல்கிறோம்.",
      members: {
        keith: { role: "தயாரிப்பு உத்தி நிபுணர்", tags: ["பயனர் தேவைகள்", "வணிக உத்தி", "UX"] },
        gabriel: { role: "தொழில்நுட்ப முன்னிலை", tags: ["Full-Stack மேம்பாடு", "ML & AI செயல்படுத்தல்", "DevOps"] },
        astin: { role: "தொழில்நுட்ப முன்னிலை", tags: ["சட்டம் & நிர்வாகம்", "தீர்வு கட்டமைப்பு"] },
      },
    },
    projects: {
      title: "கடந்த திட்டங்கள்",
      actions: { github: "GitHub", viewClientSite: "வாடிக்கையாளர் தளத்தை பார்க்க", demoVideo: "டெமோ வீடியோ" },
      cards: {
        learned: {
          name: "Learned",
          type: "AI உள்ளடக்க கருவி",
          description: "PDF, வலை URL மற்றும் உரை prompts ஐ Reddit மற்றும் X போன்ற இடைமுகங்களுடன் செயல்படும் சமூக ஊடக feeds ஆக மாற்றும் AI கருவி. பயனர்கள் தங்கள் சொந்த உள்ளடக்கத்தை scroll செய்து கற்றுக்கொள்ள முடியும்.",
          videos: { postGeneration: "பதிவு உருவாக்கம்", knowledgeGraph: "அறிவு வரைபடம்", settings: "அமைப்புகள்" },
        },
        fluent: {
          name: "Fluent",
          type: "மொழி கற்றல் செயலி",
          description: "சமூக ஊடக பாணி மொழி கற்றல் தளம். பயனர்கள் சிறிய பாடங்களை உருவாக்க, பகிர மற்றும் ஆராயலாம்; flashcards, உள்ளமைந்த அகராதி மற்றும் சமூக feeds உடன்.",
          videos: { onboarding: "தொடக்க அறிமுகம்", homeFeed: "முகப்பு feed", flashcards: "Flashcards", dictionary: "அகராதி" },
        },
        dealbreaker: {
          name: "DealBreaker",
          type: "LawTech Hackathon — வெற்றி",
          description: "சட்ட ஆவணங்களை இடைமுகத் தீர்மானப் பயணங்களாக மாற்றும் AI ஒப்பந்த பகுப்பாய்வு கருவி. வழிகாட்டப்பட்ட சூழல்கள் மற்றும் நுண்ணறிவு பகுப்பாய்வு மூலம் கடினமான clauses ஐ புரிந்துகொள்ள உதவுகிறது.",
          images: ["DealBreaker பதிவேற்ற இடைமுகம்", "ஒப்பந்த பகுப்பாய்வு நடைபெறுகிறது", "இடைமுகத் தீர்மான பயணம்", "விரிவான சட்ட மேலோட்டம்"],
          teamPhotoAlt: "விருது பெறும் அணி",
        },
        lightForm: {
          name: "Light + Form",
          type: "வாடிக்கையாளர் வலைதள மாற்றம்",
          description: "உண்மையான வாடிக்கையாளர் Light + Form க்காக முழுமையான வலைதள மாற்றத்தை வழங்கினோம். ஒளி சுற்றியுள்ள அனைத்தையும் வடிவமைக்க வேண்டும் என்ற எண்ணத்துடன், அவர்களின் தயாரிப்பு விளக்கம் மற்றும் வாடிக்கையாளர் சேவைக்கு உதவும் வகையில் அமைப்பு, செய்தி ஓட்டம் மற்றும் UX ஐ மறுசீரமைத்தோம்.",
          videos: { walkthrough: "வாடிக்கையாளர் தள walkthrough" },
        },
        handoff: {
          name: "Handoff",
          type: "GoodHack 2026 Healthcare AI",
          description: "GoodHub SEA GoodHack க்காக உருவாக்கப்பட்ட Handoff, மருத்துவர் சந்திப்பு audio மற்றும் transcripts ஐ தெளிவான caregiver action plans ஆக மாற்றுகிறது. நேரடி PII ஐ மறைத்து, தினசரி பணிகள், appointment மற்றும் notification candidates, பாதுகாப்பான research follow-ups ஆகியவற்றை எடுத்து, audit செய்யக்கூடிய lineage ஐ வைத்திருக்கும்.",
          videos: { transcription: "Transcription", dailyTasks: "தினசரி பணிகள்", careGoals: "பராமரிப்பு இலக்குகள்", upcoming: "வரவிருப்பவை" },
        },
      },
    },
    clients: {
      title: "எங்கள் வாடிக்கையாளர்கள்",
      intro: "நடைமுறை டிஜிட்டல் வேலைகளில் நாங்கள் உதவிய அணிகள்.",
      label: "வாடிக்கையாளர்",
      visitLabel: "Instagram இல் {name} ஐ பார்க்க",
      items: {
        lightFormConcepts: {
          name: "Light + Form Concepts",
          description: "ஒளி வடிவமைப்பு கருத்துகள் மற்றும் தீர்வுகளுக்கான கூட்டாளர்.",
        },
      },
    },
    faq: {
      title: "பெரிய commitment க்கு முன் தெளிவும் நிம்மதியும்.",
      intro: "முதல் உரையாடல் உங்களுக்கு முடிவு எடுக்க உதவவேண்டும்; மிகப்பெரிய திட்டத்துக்குள் தள்ள வேண்டாம்.",
      items: [
        { question: "எங்கள் systems இன்னும் சீராக இல்லை. இருந்தும் பேசலாமா?", answer: "ஆமாம். பெரும்பாலான அணிகள் தற்போதைய அமைப்பு இன்னும் குழப்பமாக இருக்கும்போதே எங்களை அணுகுகின்றன." },
        { question: "முதல் படியை எவ்வளவு விரைவாகத் தொடங்கலாம்?", answer: "சாதாரண transformation project ஐ விட பொதுவாக வேகமாகத் தொடங்க முடியும். ஒரு நியாயமான முதல் மேம்பாட்டைத் தொடங்குவதே இலக்கு." },
        { question: "நாங்கள் தயாராக இல்லாவிட்டாலும் AI ஐ தள்ளுவீர்களா?", answer: "இல்லை. process, source material, மற்றும் review path போதுமான அளவு தயாராக இருக்கும் போது மட்டுமே AI ஐ பரிந்துரைக்கிறோம்." },
        { question: "இது பெரிய நிறுவனங்களுக்கு மட்டுமா?", answer: "இல்லை. பெரிய consultancy இல்லாமல் தெளிவும் குறைந்த operational drag உம் தேவைப்படும் SME அணிகளுக்கானது." },
      ],
    },
    footer: { contact: "தொடர்பு", location: "சிங்கப்பூர்", navigate: "வழிசெலுத்தல்", home: "முகப்பு", copyright: `© ${new Date().getFullYear()} Solv3d. அனைத்து உரிமைகளும் பாதுகாக்கப்பட்டவை.` },
    links: { linkedin: "LinkedIn", website: "வலைத்தளம்", emailUs: "எங்களுக்கு மின்னஞ்சல் அனுப்புங்கள்" },
  },
};

const PROJECTS = {
  items: [
    {
      id: "learned",
      name: "Learned",
      type: "AI Content Tool",
      description: "An AI-powered content tool that transforms PDFs, web URLs, and text prompts into interactive social media feeds — mimicking Reddit and X interfaces so users can get smart by doomscrolling through their own content.",
      links: { github: "https://github.com/gongahkia/trae-hackathon-2026" },
      videos: [
        { key: "postGeneration", src: "/learned/learned-post-generation.mp4", label: "Post Generation" },
        { key: "knowledgeGraph", src: "/learned/learned-knowledge-graph.mp4", label: "Knowledge Graph" },
        { key: "settings", src: "/learned/learned-settings.mp4", label: "Settings" },
      ],
    },
    {
      id: "fluent",
      name: "Fluent",
      type: "Language Learning App",
      description: "A social-media-style language learning platform where users create, share, and explore bite-sized lessons — featuring flashcards, a built-in dictionary, and community-driven content feeds.",
      links: { github: "https://github.com/gongahkia/fluent-prod", youtube: "https://youtu.be/CDzxqKg4azY?si=CeLbFTXc5HBxP5Bz" },
      videos: [
        { key: "onboarding", src: "/fluent/fluent-onboarding.mp4", label: "Onboarding" },
        { key: "homeFeed", src: "/fluent/fluent-home-feed-1.mp4", label: "Home Feed" },
        { key: "flashcards", src: "/fluent/fluent-flashcards.mp4", label: "Flashcards" },
        { key: "dictionary", src: "/fluent/fluent-dictionary.mp4", label: "Dictionary" },
      ],
    },
    {
      id: "dealbreaker",
      name: "DealBreaker",
      type: "LawTech Hackathon — Winner",
      description: "An AI-powered contract analysis tool that transforms legal documents into interactive decision adventures — helping users understand complex clauses through guided scenarios and smart analysis.",
      images: [
        { src: "/lawtech/lawtech-hackathon-1.jpeg", alt: "DealBreaker upload interface" },
        { src: "/lawtech/lawtech-hackathon-2.jpeg", alt: "Contract analysis in progress" },
        { src: "/lawtech/lawtech-hackathon-3.jpeg", alt: "Interactive decision adventure" },
        { src: "/lawtech/lawtech-hackathon-4.jpeg", alt: "Detailed legal overview" },
      ],
      teamPhoto: { src: "/lawtech/lawtech-hackathon-team-win-photo.jpeg", alt: "Team receiving award" },
    },
    {
      id: "lightForm",
      name: "Light + Form",
      type: "Client Website Revamp",
      description: "A full website revamp delivered for a real client, Light + Form. Guided by the idea that light should shape everything around it, we reworked the structure, messaging flow, and overall UX to better support how their team presents products and serves customers.",
      links: { website: "https://light-pro.com/" },
      videos: [
        { key: "walkthrough", src: "/light-form/light-form-demo.mp4", label: "Client Site Walkthrough" },
      ],
      media: { aspect: "landscape" },
    },
    {
      id: "handoff",
      name: "Handoff",
      type: "GoodHack 2026 Healthcare AI",
      description: "Built for GoodHub SEA's GoodHack, Handoff turns doctor appointment audio and transcripts into clear caregiver action plans. It redacts direct PII, extracts daily tasks, appointment and notification candidates, guarded research follow-ups, and keeps auditable lineage so immediate tasks and long-term care considerations are not left half-remembered or unactionable.",
      links: { github: "https://github.com/gongahkia/goodhack-hackathon-2026" },
      videos: [
        { key: "transcription", src: "/handoff/transcription.mov", label: "Transcription" },
        { key: "dailyTasks", src: "/handoff/daily-tasks.mov", label: "Daily Tasks" },
        { key: "careGoals", src: "/handoff/daily-goals.mov", label: "Care Goals" },
        { key: "upcoming", src: "/handoff/upcoming.mov", label: "Upcoming" },
      ],
    },
  ],
};

const CLIENTS = {
  items: [
    {
      id: "lightFormConcepts",
      name: "Light + Form Concepts",
      description: "Lighting concepts and solutions partner.",
      logo: "/clients/light-form-concepts.png",
      url: "https://www.instagram.com/lightformconcepts/?hl=en",
    },
  ],
};

const TEAM_MEMBERS = [
  { id: "keith", name: "Keith Tang", role: "Product Strategist", portrait: "/founders/keith.jpeg", tags: ["User Requirements", "Business Strategy", "UX"], links: { linkedin: "https://www.linkedin.com/in/keibtang/" } },
  { id: "gabriel", name: "Gabriel Ong", role: "Technical Lead", portrait: "/founders/gabriel.jpeg", tags: ["Full-Stack Development", "ML & AI Implementation", "DevOps"], links: { linkedin: "https://www.linkedin.com/in/gabriel-zmong/", website: "https://gabrielongzm.com/" } },
  { id: "astin", name: "Astin Tay", role: "Technical Lead", portrait: "/founders/astin.jpeg", tags: ["Legal & Governance", "Solutions Architecture"], links: { linkedin: "https://www.linkedin.com/in/astintay/" } },
];

function formatMessage(template, values = {}) {
  return Object.entries(values).reduce((message, [key, value]) => message.replaceAll(`{${key}}`, value), template);
}

function withLocalizedProjects() {
  const copy = t().projects.cards || {};
  return PROJECTS.items.map((project) => {
    const projectCopy = copy[project.id] || {};
    return {
      ...project,
      name: projectCopy.name || project.name,
      type: projectCopy.type || project.type,
      description: projectCopy.description || project.description,
      videos: project.videos?.map((video) => ({
        ...video,
        label: projectCopy.videos?.[video.key] || video.label,
      })),
      images: project.images?.map((image, index) => ({
        ...image,
        alt: projectCopy.images?.[index] || image.alt,
      })),
      teamPhoto: project.teamPhoto ? {
        ...project.teamPhoto,
        alt: projectCopy.teamPhotoAlt || project.teamPhoto.alt,
      } : undefined,
    };
  });
}

function withLocalizedClients() {
  const copy = t().clients.items || {};
  return CLIENTS.items.map((client) => {
    const clientCopy = copy[client.id] || {};
    const name = clientCopy.name || client.name;
    return {
      ...client,
      name,
      description: clientCopy.description || client.description,
      ariaLabel: formatMessage(t().clients.visitLabel, { name }),
    };
  });
}

function withLocalizedTeamMembers() {
  const copy = t().team.members || {};
  return TEAM_MEMBERS.map((member) => {
    const memberCopy = copy[member.id] || {};
    return {
      ...member,
      role: memberCopy.role || member.role,
      tags: memberCopy.tags || member.tags,
    };
  });
}

export function t() { return I18N[lang()] || I18N.en; }
export { withLocalizedClients as clients, withLocalizedProjects as projects, withLocalizedTeamMembers as teamMembers };
