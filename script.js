const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');
hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});





const translations = {
  en: {
    logo: "Accel Consulting",
    nav: { about: "About Us", programs: "Programs", contact: "Contact" },
    apply: "Apply Now",
    hero: { title: "Get the opportunity to study at the world’s best universities with Accel Consulting", register: "Register" },
    about: {
      title: "About Us",
      text1: "Passionate about international education and student mobility, we support students...",
      text2: "ACCEL Consulting provides international education consulting services. Your goal is our mission.",
      experience: "Experience",
      team: "Professional Team",
      partnership: "International Partnership",
      results: "High Results"
    },
    programs: {
      title: "Our Programs",
      foundation: "Foundation",
      foundationText: "Preparatory courses for beginners.",
      bachelor: "Bachelor",
      bachelorText: "Programs for undergraduate degree.",
      masters: "Masters",
      mastersText: "Postgraduate master’s programs."
    },
    footer: { address: "4b Islom Larimov Street, Namangan City." }
  },
  ru: {
    logo: "Аксел Консалтинг",
    nav: { about: "О нас", programs: "Программы", contact: "Контакты" },
    apply: "Подать заявку",
    hero: { title: "Получите возможность учиться в лучших университетах мира с Accel Consulting", register: "Регистрация" },
    about: {
      title: "О нас",
      text1: "Мы помогаем студентам находить правильные академические и карьерные пути за рубежом...",
      text2: "ACCEL Consulting оказывает услуги по международному образовательному консультированию.",
      experience: "Опыт",
      team: "Профессиональная команда",
      partnership: "Международное сотрудничество",
      results: "Высокие результаты"
    },
    programs: {
      title: "Наши программы",
      foundation: "Фаундейшн",
      foundationText: "Подготовительные курсы для начинающих.",
      bachelor: "Бакалавриат",
      bachelorText: "Программы для получения степени бакалавра.",
      masters: "Магистратура",
      mastersText: "Программы для получения степени магистра."
    },
    footer: { address: "г. Наманган, ул. Ислам Ларимов, 4б" }
  },
  uz: {
    logo: "Accel Konsalting",
    nav: { about: "Biz haqimizda", programs: "Dasturlar", contact: "Aloqa" },
    apply: "Ariza topshirish",
    hero: { title: "Accel Consulting bilan dunyoning eng yaxshi universitetlarida o‘qish imkoniyatiga ega bo‘ling", register: "Ro‘yxatdan o‘tish" },
    about: {
      title: "Biz haqimizda",
      text1: "Biz xalqaro ta'lim va talabalar mobilligiga ishtiyoq bilan yordam beramiz...",
      text2: "ACCEL Consulting xalqaro ta'lim bo‘yicha maslahat xizmatlarini taqdim etadi.",
      experience: "Tajriba",
      team: "Professional jamoa",
      partnership: "Xalqaro hamkorlik",
      results: "Yuqori natijalar"
    },
    programs: {
      title: "Bizning dasturlar",
      foundation: "Foundation",
      foundationText: "Boshlovchilar uchun tayyorlov kurslari.",
      bachelor: "Bakalavr",
      bachelorText: "Bakalavriat dasturlari.",
      masters: "Magistratura",
      mastersText: "Magistratura dasturlari."
    },
    footer: { address: "Namangan sh., Islom Larimov ko‘chasi, 4b" }
  }
};

const switchLang = (lang) => {
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const keys = el.dataset.i18n.split(".");
    let text = translations[lang];
    keys.forEach(k => text = text[k]);
    if (text) el.textContent = text;
  });
};

document.getElementById("lang-switch").addEventListener("change", (e) => {
  switchLang(e.target.value);
});

// Default language
switchLang("en");
