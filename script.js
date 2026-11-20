// Add the phone number in international format, digits only, for example: 34612345678.
const PHONE_NUMBER = "34677672741";

const translations = {
  ru: {
    title: "Jardinería del Sol | Сады и бассейны в Марбелье",
    description: "Уход за садами, бассейнами и пальмами в Марбелье. Полив, сезонное обслуживание и забота о вашем участке.",
    brandAria: "Jardinería del Sol — на главную", navAria: "Основная навигация", languageAria: "Выбрать язык",
    navServices: "Услуги", navAbout: "О нас", navContact: "Контакты", navCta: "Заказать уход",
    menuOpen: "Открыть меню", menuClose: "Закрыть меню", heroImage: "Цветущий средиземноморский сад",
    heroEyebrow: "САДЫ, КОТОРЫЕ РАДУЮТ КАЖДЫЙ ДЕНЬ",
    heroTitle: "Ваш сад —<br>ваше место <em>силы.</em>",
    heroCopy: "Ухоженные сады, чистые бассейны и здоровые пальмы в Марбелье. Берём заботу о вашем участке на себя.",
    heroButton: "Посмотреть услуги", callNow: "Позвонить", location: "Марбелья · Коста-дель-Соль",
    scrollAria: "Прокрутить к услугам", scroll: "ЛИСТАЙТЕ", introLabel: "МЕСТНАЯ БРИГАДА",
    introEyebrow: "ЗАБОТА С ХАРАКТЕРОМ",
    introTitle: "Сад — это не просто участок.<br>Это <em>ваше место отдыха.</em>",
    introCopy: "Мы — дружная бригада в Марбелье. Регулярно ухаживаем за садами и бассейнами, следим за растениями, поливом и чистотой, чтобы на улице хотелось проводить время.",
    introLink: "Расскажите, что нужно вашему саду",
    introNote: "Внимание к каждой пальме, каждому цветку и каждому уголку.",
    servicesEyebrow: "ЧЕМ МЫ ПОМОЖЕМ",
    servicesTitle: "Всё для вашего <em>зелёного уголка.</em>",
    servicesCopy: "Комплексный уход — от регулярной уборки до сезонных работ. Можно выбрать одну услугу или доверить нам весь участок.",
    serviceGardenTitle: "Уход за садом",
    serviceGardenCopy: "Стрижка газона, прополка, уборка листвы, уход за клумбами и живыми изгородями.",
    serviceGardenAria: "Узнать об уходе за садом",
    servicePoolTitle: "Чистка бассейна",
    servicePoolCopy: "Уборка чаши и зоны вокруг бассейна — чисто и приятно для отдыха.",
    servicePoolAria: "Узнать о чистке бассейна",
    servicePalmTitle: "Уход за пальмами",
    servicePalmCopy: "Обрезка сухих листьев и уборка пальм — аккуратно и с заботой об участке.",
    servicePalmAria: "Узнать об уходе за пальмами",
    serviceWaterTitle: "Полив и растения",
    serviceWaterCopy: "Полив сада и внимание к растениям с учётом жары и особенностей участка.",
    serviceWaterAria: "Узнать о поливе сада",
    serviceFootnote: "Работаем в Марбелье и ближайших районах. Объём и частоту ухода обсудим заранее.",
    showcaseEyebrow: "ЗЕЛЕНЬ, ЦВЕТ И СВЕЖЕСТЬ",
    showcaseTitle: "Больше времени<br>на <em>жизнь в саду.</em>",
    showcaseCopy: "Поддерживаем красоту сада в любое время года — от цветущих клумб до опрятных пальм и чистой воды.",
    showcaseButton: "Обсудить уход", flowersAlt: "Нежные цветы в саду",
    plantsAlt: "Уход за садовыми растениями", captionFlowers: "ЦВЕТУЩИЕ КЛУМБЫ",
    captionPlants: "ЗАБОТА О РАСТЕНИЯХ", careEyebrow: "ПРОСТО И ПОНЯТНО",
    careTitle: "Уход, который подходит<br><em>именно вашему саду.</em>",
    careCopy: "У всех участков свои задачи. Сначала знакомимся с садом, потом вместе решаем, что и как часто нужно делать.",
    stepOneTitle: "Знакомимся",
    stepOneCopy: "Вы рассказываете о саде, бассейне и о том, что хотелось бы улучшить.",
    stepTwoTitle: "Составляем план",
    stepTwoCopy: "Обсуждаем подходящие работы, удобный график и нужную частоту приездов.",
    stepThreeTitle: "Поддерживаем порядок",
    stepThreeCopy: "Регулярно ухаживаем за участком и остаёмся на связи по текущим задачам.",
    promiseImage: "Зелёные растения в ухоженном саду",
    promiseEyebrow: "ВАШ САД В ХОРОШИХ РУКАХ",
    promiseTitle: "Пусть за окном<br>будет <em>красиво.</em>",
    promiseCopy: "Расскажите, что нужно вашему саду. Обсудим задачу и подберём удобный формат ухода.",
    promiseButton: "Связаться с нами", promiseCaption: "ЗЕЛЁНЫЕ ПРОСТРАНСТВА ДЛЯ ЖИЗНИ",
    contactEyebrow: "ДАВАЙТЕ ПОЗНАКОМИМСЯ",
    contactTitle: "Ваш сад готов<br>к <em>переменам?</em>",
    contactCopy: "Расскажите, что нужно вашему саду. Работаем в Марбелье и ближайших районах.",
    contactTip: "Отправьте фото участка в WhatsApp — обсудим, какой уход подойдёт вашему саду.",
    contactCallLabel: "ПОЗВОНИТЕ НАМ", contactLocation: "Марбелья и окрестности",
    whatsappButton: "Написать в WhatsApp",
    whatsappMessage: "Здравствуйте! Хочу обсудить уход за садом в Марбелье.",
    chatOpen: "Открыть чат", chatClose: "Закрыть чат", chatOpenButton: "Написать нам", chatCloseButton: "Свернуть чат",
    chatSubtitle: "Бригада по уходу за садами", chatTime: "Напишите нам в любое время",
    chatGreeting: "Здравствуйте! Напишите вопрос — он откроется в WhatsApp, и бригада ответит вам там.",
    chatMessageLabel: "Ваше сообщение", chatPlaceholder: "Напишите сообщение...", chatSend: "Отправить",
    chatDelivery: "Переписка продолжится в WhatsApp.",
    phoneHint: "Добавьте номер телефона в файле script.js, чтобы включить звонки.",
    footerLine: "Уход за садами и бассейнами · Марбелья"
  },
  en: {
    title: "Jardinería del Sol | Gardens and pools in Marbella",
    description: "Garden, pool and palm tree care in Marbella. Irrigation, seasonal maintenance and attentive care for your outdoor space.",
    brandAria: "Jardinería del Sol — home", navAria: "Main navigation", languageAria: "Choose language",
    navServices: "Services", navAbout: "About us", navContact: "Contact", navCta: "Request garden care",
    menuOpen: "Open menu", menuClose: "Close menu", heroImage: "A blooming Mediterranean garden",
    heroEyebrow: "GARDENS TO ENJOY EVERY DAY",
    heroTitle: "Your garden —<br>your place to <em>unwind.</em>",
    heroCopy: "Beautiful gardens, clean pools and healthy palms in Marbella. We take care of your outdoor space, so you can enjoy it.",
    heroButton: "Explore our services", callNow: "Call us", location: "Marbella · Costa del Sol",
    scrollAria: "Scroll to services", scroll: "SCROLL", introLabel: "YOUR LOCAL TEAM",
    introEyebrow: "THOUGHTFUL, PERSONAL CARE",
    introTitle: "A garden is more than a plot of land.<br>It is <em>your place to unwind.</em>",
    introCopy: "We are a friendly local team in Marbella. We care for gardens and pools, tend to plants, irrigation and tidiness, so you can make the most of your outdoor space.",
    introLink: "Tell us what your garden needs",
    introNote: "We give every palm, every flower and every corner the attention it deserves.",
    servicesEyebrow: "HOW WE CAN HELP",
    servicesTitle: "Everything your <em>garden needs.</em>",
    servicesCopy: "Complete care, from regular tidying to seasonal jobs. Choose a service or let us look after the whole outdoor space.",
    serviceGardenTitle: "Garden care",
    serviceGardenCopy: "Lawn mowing, weeding, leaf clearing, and care for flower beds and hedges.",
    serviceGardenAria: "Ask about garden care",
    servicePoolTitle: "Pool cleaning",
    servicePoolCopy: "We clean the pool and the surrounding area, keeping it fresh and ready to enjoy.",
    servicePoolAria: "Ask about pool cleaning",
    servicePalmTitle: "Palm tree care",
    servicePalmCopy: "Careful trimming of dry fronds and palm clean-up to keep your garden neat.",
    servicePalmAria: "Ask about palm tree care",
    serviceWaterTitle: "Irrigation and plants",
    serviceWaterCopy: "Garden watering and attentive plant care, mindful of the local heat and your garden.",
    serviceWaterAria: "Ask about garden watering",
    serviceFootnote: "Serving Marbella and nearby areas. We will agree the scope and schedule with you in advance.",
    showcaseEyebrow: "GREENERY, FLOWERS AND FRESHNESS",
    showcaseTitle: "More time to<br><em>enjoy your garden.</em>",
    showcaseCopy: "We keep your garden looking lovely in every season, from colourful flower beds to tidy palms and sparkling water.",
    showcaseButton: "Talk about garden care", flowersAlt: "Delicate flowers in a garden",
    plantsAlt: "Care for garden plants", captionFlowers: "FLOWER BEDS IN BLOOM",
    captionPlants: "THOUGHTFUL PLANT CARE", careEyebrow: "SIMPLE AND STRAIGHTFORWARD",
    careTitle: "Care that suits<br><em>your garden.</em>",
    careCopy: "Every outdoor space is different. We start by getting to know your garden, then agree together on what it needs and how often.",
    stepOneTitle: "Let's meet",
    stepOneCopy: "Tell us about your garden, pool and anything you would like to improve.",
    stepTwoTitle: "Make a plan",
    stepTwoCopy: "We discuss the right jobs, a convenient schedule and how often we should visit.",
    stepThreeTitle: "Keep things looking good",
    stepThreeCopy: "We care for your outdoor space regularly and stay in touch about ongoing needs.",
    promiseImage: "Green plants in a well-kept garden",
    promiseEyebrow: "YOUR GARDEN IN GOOD HANDS",
    promiseTitle: "Let the view outside<br>make you <em>smile.</em>",
    promiseCopy: "Tell us what your garden needs. We will talk it through and find an approach that works for you.",
    promiseButton: "Get in touch", promiseCaption: "GREEN SPACES MADE FOR LIVING",
    contactEyebrow: "LET'S GET TO KNOW EACH OTHER",
    contactTitle: "Ready to give<br>your garden a <em>refresh?</em>",
    contactCopy: "Tell us what your garden needs. We work in Marbella and nearby areas.",
    contactTip: "Send us a photo of your garden on WhatsApp and we can discuss the right care for it.",
    contactCallLabel: "GIVE US A CALL", contactLocation: "Marbella and nearby areas",
    whatsappButton: "Message us on WhatsApp",
    whatsappMessage: "Hello! I'd like to discuss garden care in Marbella.",
    chatOpen: "Open chat", chatClose: "Close chat", chatOpenButton: "Message us", chatCloseButton: "Close chat",
    chatSubtitle: "Garden care team", chatTime: "Send us a message anytime",
    chatGreeting: "Hello! Type your question here. It will open in WhatsApp, where our team can reply.",
    chatMessageLabel: "Your message", chatPlaceholder: "Type your message...", chatSend: "Send",
    chatDelivery: "Your conversation will continue in WhatsApp.",
    phoneHint: "Add your phone number in script.js to enable calls.",
    footerLine: "Garden and pool care · Marbella"
  },
  es: {
    title: "Jardinería del Sol | Jardines y piscinas en Marbella",
    description: "Cuidado de jardines, piscinas y palmeras en Marbella. Riego, mantenimiento de temporada y atención para tu espacio exterior.",
    brandAria: "Jardinería del Sol — inicio", navAria: "Navegación principal", languageAria: "Elegir idioma",
    navServices: "Servicios", navAbout: "Quiénes somos", navContact: "Contacto", navCta: "Solicitar cuidado",
    menuOpen: "Abrir menú", menuClose: "Cerrar menú", heroImage: "Un jardín mediterráneo lleno de flores",
    heroEyebrow: "JARDINES PARA DISFRUTAR CADA DÍA",
    heroTitle: "Tu jardín —<br>tu lugar para <em>desconectar.</em>",
    heroCopy: "Jardines cuidados, piscinas limpias y palmeras sanas en Marbella. Nos ocupamos de tu espacio exterior para que tú lo disfrutes.",
    heroButton: "Descubre nuestros servicios", callNow: "Llámanos", location: "Marbella · Costa del Sol",
    scrollAria: "Desplazarse a servicios", scroll: "DESLIZA", introLabel: "EQUIPO LOCAL",
    introEyebrow: "CUIDADO CON CERCANÍA",
    introTitle: "Un jardín es mucho más que un terreno.<br>Es <em>tu lugar para descansar.</em>",
    introCopy: "Somos un equipo cercano de Marbella. Cuidamos jardines y piscinas, atendemos las plantas, el riego y la limpieza para que disfrutes al máximo del exterior de tu casa.",
    introLink: "Cuéntanos qué necesita tu jardín",
    introNote: "Cuidamos cada palmera, cada flor y cada rincón.",
    servicesEyebrow: "CÓMO PODEMOS AYUDARTE",
    servicesTitle: "Todo lo que tu <em>jardín necesita.</em>",
    servicesCopy: "Un cuidado completo, desde la limpieza habitual hasta los trabajos de temporada. Elige un servicio o confíanos todo el espacio.",
    serviceGardenTitle: "Cuidado de jardines",
    serviceGardenCopy: "Corte de césped, retirada de malas hierbas y hojas, y cuidado de parterres y setos.",
    serviceGardenAria: "Consultar sobre cuidado de jardines",
    servicePoolTitle: "Limpieza de piscinas",
    servicePoolCopy: "Limpiamos la piscina y la zona de alrededor para que esté lista para disfrutar.",
    servicePoolAria: "Consultar sobre limpieza de piscinas",
    servicePalmTitle: "Cuidado de palmeras",
    servicePalmCopy: "Poda de hojas secas y limpieza de palmeras con cuidado del jardín.",
    servicePalmAria: "Consultar sobre cuidado de palmeras",
    serviceWaterTitle: "Riego y plantas",
    serviceWaterCopy: "Riego del jardín y cuidado de las plantas teniendo en cuenta el calor y cada espacio.",
    serviceWaterAria: "Consultar sobre riego del jardín",
    serviceFootnote: "Trabajamos en Marbella y alrededores. Acordamos contigo el trabajo y la frecuencia de antemano.",
    showcaseEyebrow: "VERDE, FLORES Y FRESCURA",
    showcaseTitle: "Más tiempo para<br><em>disfrutar del jardín.</em>",
    showcaseCopy: "Mantenemos tu jardín bonito en cualquier época del año: parterres llenos de color, palmeras cuidadas y agua limpia.",
    showcaseButton: "Hablemos del jardín", flowersAlt: "Flores delicadas en un jardín",
    plantsAlt: "Cuidado de las plantas del jardín", captionFlowers: "PARTERRES EN FLOR",
    captionPlants: "CUIDAMOS TUS PLANTAS", careEyebrow: "FÁCIL Y CLARO",
    careTitle: "Un cuidado pensado<br><em>para tu jardín.</em>",
    careCopy: "Cada espacio exterior es diferente. Primero conocemos tu jardín y después decidimos juntos qué necesita y con qué frecuencia.",
    stepOneTitle: "Nos conocemos",
    stepOneCopy: "Nos cuentas cómo es tu jardín, si tienes piscina y qué te gustaría mejorar.",
    stepTwoTitle: "Preparamos un plan",
    stepTwoCopy: "Hablamos de los trabajos, el horario más cómodo y cada cuánto debemos ir.",
    stepThreeTitle: "Lo mantenemos bonito",
    stepThreeCopy: "Cuidamos tu espacio con regularidad y seguimos en contacto para atender nuevas necesidades.",
    promiseImage: "Plantas verdes en un jardín cuidado",
    promiseEyebrow: "TU JARDÍN, EN BUENAS MANOS",
    promiseTitle: "Que al mirar afuera<br>todo se vea <em>bonito.</em>",
    promiseCopy: "Cuéntanos qué necesita tu jardín. Hablamos de la tarea y buscamos la forma de cuidarlo que mejor te venga.",
    promiseButton: "Contacta con nosotros", promiseCaption: "ESPACIOS VERDES PARA DISFRUTAR",
    contactEyebrow: "¿HABLAMOS?",
    contactTitle: "¿Listo para darle<br>un aire nuevo a <em>tu jardín?</em>",
    contactCopy: "Cuéntanos qué necesita tu jardín. Trabajamos en Marbella y alrededores.",
    contactTip: "Envíanos una foto de tu jardín por WhatsApp y hablamos sobre el cuidado que necesita.",
    contactCallLabel: "LLÁMANOS", contactLocation: "Marbella y alrededores",
    whatsappButton: "Escríbenos por WhatsApp",
    whatsappMessage: "¡Hola! Me gustaría hablar sobre el cuidado de mi jardín en Marbella.",
    chatOpen: "Abrir chat", chatClose: "Cerrar chat", chatOpenButton: "Escríbenos", chatCloseButton: "Cerrar chat",
    chatSubtitle: "Equipo de cuidado de jardines", chatTime: "Escríbenos cuando quieras",
    chatGreeting: "¡Hola! Escribe aquí tu pregunta. Se abrirá en WhatsApp, donde nuestro equipo podrá responderte.",
    chatMessageLabel: "Tu mensaje", chatPlaceholder: "Escribe tu mensaje...", chatSend: "Enviar",
    chatDelivery: "La conversación continuará en WhatsApp.",
    phoneHint: "Añade el número de teléfono en el archivo script.js para activar las llamadas.",
    footerLine: "Cuidado de jardines y piscinas · Marbella"
  }
};

function updateWhatsappLinks(copy) {
  const phone = PHONE_NUMBER.replace(/\D/g, "");
  const hasValidPhone = /^\d{8,15}$/.test(phone);

  document.querySelectorAll("[data-whatsapp-link]").forEach((link) => {
    link.href = hasValidPhone
      ? `https://wa.me/${phone}?text=${encodeURIComponent(copy.whatsappMessage)}`
      : "#contacto";
  });
}

const menuButton = document.querySelector(".menu-toggle");
const navigation = document.querySelector("#main-nav");

if (menuButton && navigation) {
  menuButton.addEventListener("click", () => {
    const isOpen = menuButton.getAttribute("aria-expanded") === "true";
    menuButton.setAttribute("aria-expanded", String(!isOpen));
    menuButton.setAttribute("aria-label", isOpen ? translations[document.documentElement.lang].menuOpen : translations[document.documentElement.lang].menuClose);
    navigation.classList.toggle("is-open", !isOpen);
  });

  navigation.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      menuButton.setAttribute("aria-expanded", "false");
      menuButton.setAttribute("aria-label", translations[document.documentElement.lang].menuOpen);
      navigation.classList.remove("is-open");
    });
  });
}

function setLanguage(language) {
  const copy = translations[language];
  if (!copy) return;

  document.documentElement.lang = language;
  document.title = copy.title;
  document.querySelector('meta[name="description"]').content = copy.description;

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    element.textContent = copy[element.dataset.i18n];
  });
  document.querySelectorAll("[data-i18n-html]").forEach((element) => {
    element.innerHTML = copy[element.dataset.i18nHtml];
  });
  document.querySelectorAll("[data-i18n-aria-label]").forEach((element) => {
    element.setAttribute("aria-label", copy[element.dataset.i18nAriaLabel]);
  });
  document.querySelectorAll("[data-i18n-alt]").forEach((element) => {
    element.alt = copy[element.dataset.i18nAlt];
  });
  document.querySelectorAll("[data-i18n-placeholder]").forEach((element) => {
    element.placeholder = copy[element.dataset.i18nPlaceholder];
  });
  document.querySelectorAll(".language-button").forEach((button) => {
    const isActive = button.dataset.lang === language;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });

  const hint = document.querySelector("[data-phone-hint]");
  if (hint && !/^\d{8,15}$/.test(PHONE_NUMBER)) {
    hint.textContent = "";
  }
  updateWhatsappLinks(copy);

  const chatToggleLabel = document.querySelector("[data-chat-toggle-label]");
  const chatWidget = document.querySelector("#chat-widget");
  if (chatToggleLabel && chatWidget) {
    chatToggleLabel.textContent = chatWidget.hidden ? copy.chatOpenButton : copy.chatCloseButton;
  }
}

document.querySelectorAll(".language-button").forEach((button) => {
  button.addEventListener("click", () => setLanguage(button.dataset.lang));
});

document.querySelectorAll("[data-phone-link]").forEach((link) => {
  if (/^\d{8,15}$/.test(PHONE_NUMBER)) {
    link.href = `tel:+${PHONE_NUMBER}`;
  } else {
    link.addEventListener("click", (event) => {
      event.preventDefault();
      const hint = document.querySelector("[data-phone-hint]");
      if (hint) {
        hint.textContent = translations[document.documentElement.lang].phoneHint;
      }
    });
  }
});

document.querySelectorAll("[data-whatsapp-link]").forEach((link) => {
  link.addEventListener("click", (event) => {
    if (/^\d{8,15}$/.test(PHONE_NUMBER)) return;

    event.preventDefault();
    const hint = document.querySelector("[data-phone-hint]");
    if (hint) {
      hint.textContent = translations[document.documentElement.lang].phoneHint;
    }
  });
});

const chatToggle = document.querySelector("#chat-toggle");
const chatWidget = document.querySelector("#chat-widget");
const chatInput = document.querySelector("#chat-message");
const chatForm = document.querySelector("#chat-form");

function setChatOpen(isOpen) {
  if (!chatWidget || !chatToggle) return;

  const copy = translations[document.documentElement.lang] || translations.ru;
  chatWidget.hidden = !isOpen;
  chatWidget.setAttribute("aria-hidden", String(!isOpen));
  chatToggle.setAttribute("aria-expanded", String(isOpen));
  chatToggle.setAttribute("aria-label", isOpen ? copy.chatClose : copy.chatOpen);

  const label = chatToggle.querySelector("[data-chat-toggle-label]");
  if (label) label.textContent = isOpen ? copy.chatCloseButton : copy.chatOpenButton;
  if (isOpen && chatInput) chatInput.focus();
}

if (chatToggle) {
  chatToggle.addEventListener("click", () => {
    setChatOpen(chatToggle.getAttribute("aria-expanded") !== "true");
  });
}

const chatClose = document.querySelector(".chat-close");
if (chatClose) {
  chatClose.addEventListener("click", () => setChatOpen(false));
}

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && chatWidget && !chatWidget.hidden) {
    setChatOpen(false);
  }
});

if (chatForm && chatInput) {
  chatForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const message = chatInput.value.trim();
    if (!message) {
      chatInput.focus();
      return;
    }

    if (!/^\d{8,15}$/.test(PHONE_NUMBER)) {
      const note = document.querySelector(".chat-note");
      if (note) note.textContent = translations[document.documentElement.lang].phoneHint;
      return;
    }

    window.open(`https://wa.me/${PHONE_NUMBER}?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer");
  });
}

const phoneDisplay = document.querySelector("[data-phone-display]");
if (phoneDisplay && /^\d{8,15}$/.test(PHONE_NUMBER)) {
  phoneDisplay.textContent = PHONE_NUMBER.startsWith("34") && PHONE_NUMBER.length === 11
    ? `+34 ${PHONE_NUMBER.slice(2, 5)} ${PHONE_NUMBER.slice(5, 8)} ${PHONE_NUMBER.slice(8)}`
    : `+${PHONE_NUMBER}`;
}

updateWhatsappLinks(translations[document.documentElement.lang] || translations.ru);

const year = document.querySelector("[data-year]");
if (year) {
  year.textContent = new Date().getFullYear();
}
