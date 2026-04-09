import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      navbar: {
        features: 'Features',
        howItWorks: 'How it Works',
        partners: 'Partners',
        connectStation: 'Connect Station',
      },
      hero: {
        badge: 'Next Gen Fueling',
        headline: 'Refuel without\nwaiting',
        subtext: 'Pay for fuel directly from your phone in seconds. Skip the kiosk, skip the queue, and get back on the road faster.',
        startFueling: 'Start Fueling',
        learnMore: 'Learn More',
      },
      howItWorks: {
        title: 'How it works',
        subtitle: 'Three simple steps to change the way you refuel forever.',
        step1: {
          title: 'Find station',
          desc: 'Open the app and locate the nearest participating Fuel Go station on our live interactive map.'
        },
        step2: {
          title: 'Select pump',
          desc: 'Pull up, select your pump number in the app, and authorize the transaction with a single tap.'
        },
        step3: {
          title: 'Pay instantly',
          desc: 'Fuel up and drive away. Your digital receipt is already in your inbox and payment is handled securely.'
        }
      },
      features: {
        title: 'Powering your journey',
        subtitle: 'More than just payments. It\'s a complete fuel management system.',
        noQueues: {
          title: 'No queues',
          desc: 'Time is your most valuable asset. Save up to 5 minutes on every fueling session by bypassing the payment counter.'
        },
        fastPayments: {
          title: 'Fast payments',
          desc: 'Proprietary one-tap technology handles bank authorization in milliseconds.'
        },
        secure: {
          title: 'Secure transactions',
          desc: 'End-to-end encryption means we never store your card data on our servers.'
        },
        network: {
          title: 'Universal Network',
          desc: 'We partner with major fuel brands globally to ensure you\'re covered wherever the road takes you.'
        }
      },
      business: {
        title: 'For Gas Stations',
        subtitle: 'Increase revenue, reduce friction, and automate your pump management. Fuel Go integrates directly with your existing POS.',
        prop1: 'Reduce personnel overhead',
        prop2: 'Increase customer throughput by 40%',
        prop3: 'Advanced analytics and loyalty programs',
        cta: 'Connect your station',
      },
      security: {
        title: 'Safe payments, every time',
        subtitle: 'We use multi-layered security protocols. Your financial data is tokenized and never stored on our servers. With biometric locking, even if you lose your phone, your fuel wallet remains untouchable.'
      },
      cta: {
        title: 'Start using Fuel Go today',
        subtitle: 'Download the app and get $5 off your first full tank. Join over 2 million drivers on the road.',
      }
    }
  },
  ru: {
    translation: {
      navbar: {
        features: 'Преимущества',
        howItWorks: 'Как это работает',
        partners: 'Партнеры',
        connectStation: 'Подключить АЗС',
      },
      hero: {
        badge: 'Заправка нового поколения',
        headline: 'Заправляйтесь без\nочередей',
        subtext: 'Оплачивайте топливо прямо с телефона за считанные секунды. Забудьте о кассах и очередях — возвращайтесь на дорогу быстрее.',
        startFueling: 'Начать заправку',
        learnMore: 'Узнать больше',
      },
      howItWorks: {
        title: 'Как это работает',
        subtitle: 'Три простых шага, которые навсегда изменят ваш способ заправки.',
        step1: {
          title: 'Найдите АЗС',
          desc: 'Откройте приложение и найдите ближайшую заправку-партнера на нашей интерактивной карте.'
        },
        step2: {
          title: 'Выберите колонку',
          desc: 'Подъедьте, выберите номер колонки в приложении и авторизуйте транзакцию одним касанием.'
        },
        step3: {
          title: 'Мгновенная оплата',
          desc: 'Заправьтесь и уезжайте. Электронный чек уже у вас на почте, а оплата прошла безопасно.'
        }
      },
      features: {
        title: 'Энергия вашего пути',
        subtitle: 'Больше чем просто платежи. Это полная система управления топливом.',
        noQueues: {
          title: 'Никаких очередей',
          desc: 'Ваше время — самый ценный ресурс. Экономьте до 5 минут на каждой заправке, не заходя к кассиру.'
        },
        fastPayments: {
          title: 'Быстрые платежи',
          desc: 'Собственная технология оплаты в один клик обрабатывает транзакцию за миллисекунды.'
        },
        secure: {
          title: 'Безопасные транзакции',
          desc: 'Сквозное шифрование гарантирует, что данные вашей карты не хранятся на наших серверах.'
        },
        network: {
          title: 'Универсальная сеть',
          desc: 'Мы сотрудничаем с крупнейшими брендами АЗС, чтобы вы были обеспечены топливом в любой точке.'
        }
      },
      business: {
        title: 'Для АЗС',
        subtitle: 'Увеличьте выручку, уберите барьеры и автоматизируйте управление колонками. Fuel Go легко интегрируется с вашей кассой.',
        prop1: ' Снижение затрат на персонал',
        prop2: 'Увеличение пропускной способности на 40%',
        prop3: 'Продвинутая аналитика и программы лояльности',
        cta: 'Подключить станцию',
      },
      security: {
        title: 'Безопасная оплата каждый раз',
        subtitle: 'Мы используем многоуровневые протоколы защиты. Ваши данные токенизированы, а биометрия защитит кошелек даже при потере телефона.'
      },
      cta: {
        title: 'Начните использовать Fuel Go сегодня',
        subtitle: 'Скачайте приложение и получите скидку на первую заправку. Присоединяйтесь к 2 миллионам водителей.',
      }
    }
  },
  uz: {
    translation: {
      navbar: {
        features: 'Imkoniyatlar',
        howItWorks: 'Qanday ishlaydi',
        partners: 'Hamkorlar',
        connectStation: 'Shoxobchani ulash',
      },
      hero: {
        badge: 'Yangi avlod yonilg‘i quyish',
        headline: 'Navbatsiz\nyonilg‘i quying',
        subtext: 'Yonilg‘i uchun to‘lovni bir necha soniyada telefoningiz orqali amalga oshiring. G‘azna va navbatlarni unuting — yo‘lga tezroq qayting.',
        startFueling: 'Boshlash',
        learnMore: 'Batafsil',
      },
      howItWorks: {
        title: 'Qanday ishlaydi',
        subtitle: 'Yonilg‘i quyish odatingizni butunlay o‘zgartiradigan uchta oddiy qadam.',
        step1: {
          title: 'Shoxobchani toping',
          desc: 'Ilovani oching va interaktiv xarita orqali eng yaqin hamkor shoxobchani toping.'
        },
        step2: {
          title: 'Kolonkani tanlang',
          desc: 'To‘xtang, ilovada kolonka raqamini tanlang va bir tegish bilan to‘lovni tasdiqlang.'
        },
        step3: {
          title: 'Tezkor to‘lov',
          desc: 'Zapravka qiling va yo‘lga chiqing. Elektron chek pochtangizga yuboriladi, to‘lov esa xavfsiz yakunlanadi.'
        }
      },
      features: {
        title: 'Yo‘lingiz quvvati',
        subtitle: 'Shunchaki to‘lov emas. Bu to‘liq yonilg‘i boshqaruv tizimi.',
        noQueues: {
          title: 'Navbatlarsiz',
          desc: 'Vaqtingiz — eng oliy ne’mat. Har bir zapravkada kassaga bormasdan 5 daqiqagacha vaqtni tejang.'
        },
        fastPayments: {
          title: 'Tezkor to‘lovlar',
          desc: 'O‘zimizning bir tegishli to‘lov texnologiyamiz bank ruxsatini soniya ulushlarida bajaradi.'
        },
        secure: {
          title: 'Xavfsiz tranzaksiyalar',
          desc: 'Axborotni to‘liq shifrlash karta ma’lumotlaringiz serverlarimizda saqlanmasligini ta’minlaydi.'
        },
        network: {
          title: 'Universal tarmoq',
          desc: 'Biz yirik yoqilg‘i brendlari bilan hamkorlik qilamiz, toki siz har qanday yo‘lda zapravkasiz qolmasligingiz uchun.'
        }
      },
      business: {
        title: 'Yoqilg‘i shoxobchalari uchun',
        subtitle: 'Daromadni oshiring, jarayonlarni yengillashtiring va boshqaruvni avtomatlashtiring. Fuel Go mavjud tizimingizga oson ulanadi.',
        prop1: 'Xodimlar harajatlarini kamaytirish',
        prop2: 'O‘tkazuvchanlik qobiliyatini 40% ga oshirish',
        prop3: 'Kengaytirilgan tahlil va sodiqlik dasturlari',
        cta: 'Shoxobchani ulash',
      },
      security: {
        title: 'Har doim xavfsiz to‘lov',
        subtitle: 'Biz ko‘p bosqichli xavfsizlik protokollaridan foydalanamiz. Ma’lumotlaringiz xavfsiz, biometriya esa hamyoningizni ishonchli himoya qiladi.'
      },
      cta: {
        title: 'Bugun Fuel Godan foydalanishni boshlang',
        subtitle: 'Ilovani yuklab oling va birinchi zapravka uchun chegirmaga ega bo‘ling. 2 milliondan ortiq haydovchilarga qo‘shiling.',
      }
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'ru', // Default language
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
