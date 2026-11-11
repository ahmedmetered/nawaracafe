export type Language = "ar" | "en";
export type Localized = { ar: string; en: string };
const text = (ar: string, en: string): Localized => ({ ar, en });

export const copy = {
  brand: text("قهوة نوّارة", "Nawara Café"),
  navMenu: text("المنيو", "Menu"), navAbout: text("حكايتنا", "Our story"), navVisit: text("نوّرنا", "Visit us"),
  eyebrow: text("قهوتك الحلوة… وناسك الأحلى", "GOOD COFFEE. GREAT COMPANY."),
  heroFirst: text("قهوة نوّارة", "Nawara Café"),
  tagline: text("القهوة اللي بتظبط مزاجك", "Coffee that fixes your mood"),
  heroDescription: text("ريحة قهوة حلوة، لقمة بتفرّح، وقعدة على مزاجك. خدلك بريك… وسيب الباقي علينا.", "Lovely coffee, happy little bites, and a spot that feels like you. Take a break… we’ll take it from here."),
  viewMenu: text("شوف المنيو", "Explore the menu"), madeWith: text("معمولة بحب، كل يوم", "Made with love, every day"),
  cupLabel: text("يومك أحلى معانا", "A little cup of happy"), since: text("من أول رشفة ♡", "Love at first sip ♡"),
  specialLabel: text("حلو النهارده", "TODAY’S SPECIAL"), specialTitle: text("لاتيه كراميل + كوكيز", "Caramel latte + a cookie"),
  specialDescription: text("ثنائي يظبط اليوم… بسعر ألذ!", "Your new favourite duo. An even sweeter price!"), specialBadge: text("على مزاجك", "A happy little treat"),
  menuEyebrow: text("كل حاجة بتحبها", "A LITTLE OF WHAT YOU LOVE"), menuTitle: text("اختار اللي يظبط مزاجك", "Find your happy flavour"),
  menuDescription: text("من أول رشفة لآخر لقمة… كله معمول بحب.", "From the first sip to the last bite, it’s all made with love."),
  search: text("بتدور على إيه؟", "What are you craving?"), empty: text("مفيش حاجة بالاسم ده… جرّب كلمة تانية ☕", "Nothing here just yet… try another search ☕"),
  best: text("الأكثر طلباً", "Bestseller"), new: text("جديد", "New"), vegan: text("نباتي", "Vegan"),
  menuNote: text("الأسعار بالجنيه المصري وشاملة الضريبة • اسألنا عن بدائل اللبن", "Prices include tax • Ask us about milk alternatives"),
  whyEyebrow: text("مش مجرد قهوة", "MORE THAN A COFFEE"), whyTitle: text("ليه قعدتنا غير؟", "Why it feels different here"),
  visitEyebrow: text("مكانك مستنيك", "YOUR SPOT IS WAITING"), visitTitle: text("عدّي علينا… ونوّرنا", "Come on over. Stay a little."),
  hours: text("مواعيد القعدة الحلوة", "Time for a good time"), weekdays: text("السبت – الخميس", "Saturday – Thursday"), weekend: text("الجمعة", "Friday"),
  weekdayTime: text("٨ صباحاً – ١١ مساءً", "8 AM – 11 PM"), weekendTime: text("٩ صباحاً – ١٢ منتصف الليل", "9 AM – midnight"),
  location: text("تلاقينا فين؟", "Where to find us"), address: text("١٢ شارع الياسمين، المعادي، القاهرة", "12 Jasmine Street, Maadi, Cairo"),
  locationNote: text("عنوان تخيّلي… بس القعدة الحلوة حقيقية في خيالك", "A fictional address. A very real café daydream."), mapLabel: text("قهوة نوّارة • المعادي", "Nawara Café • Maadi"), mapNote: text("خريطة تجريبية", "Illustrated demo map"),
  feedbackEyebrow: text("رأيك يفرق معانا", "A PENNY FOR YOUR THOUGHTS"), feedbackTitle: text("كانت القعدة عاملة إيه؟", "How was your little break?"), feedbackDescription: text("قولنا إيه عجبك… وإيه نخلّيه أحلى المرة الجاية.", "Tell us what you loved, and what could be even better next time."),
  name: text("اسمك", "Your name"), namePlaceholder: text("نقولك يا إيه؟", "What should we call you?"), rating: text("تقييمك", "Your rating"), star: text("نجوم", "stars"),
  message: text("رسالتك", "Your message"), messagePlaceholder: text("اكتب اللي في بالك…", "Tell us what’s on your mind…"), send: text("ابعت رأيك", "Send your thoughts"),
  feedbackNote: text("نموذج تجريبي، رسالتك مش بتتخزّن أو تتبعت.", "Demo form — your message isn’t stored or sent."),
  thanks: text("رأيك نوّر يومنا!", "You made our day!"), thanksDescription: text("شكراً على كلامك الحلو. مستنيينك على قهوة قريب ♡", "Thanks for sharing a little love. See you for a coffee soon ♡"), another: text("اكتب رأي تاني", "Leave another note"),
  footer: text("قهوة حلوة، ولمة أحلى.", "Good coffee. Even better company."), demo: text("موقع تجريبي", "Demo website"), copyright: text("قهوة نوّارة — معمولة بحب", "Nawara Café — made with love"),
  instagram: text("إنستجرام (تجريبي)", "Instagram (demo)"), facebook: text("فيسبوك (تجريبي)", "Facebook (demo)"), socialNote: text("قريباً", "Coming soon"),
};

export const categories = [
  { id: "hot", icon: "☕", name: text("مشروبات ساخنة", "Hot drinks") },
  { id: "cold", icon: "🧊", name: text("مشروبات باردة", "Cold drinks") },
  { id: "sweet", icon: "🍰", name: text("حلويات", "Sweet treats") },
  { id: "snack", icon: "🥐", name: text("سناكس", "Little bites") },
] as const;
export type Category = typeof categories[number]["id"];
export type MenuItem = { id: string; category: Category; name: Localized; description: Localized; price: number; icon: string; tone: string; badge?: "best" | "new" | "vegan" };
export const menu: MenuItem[] = [
  { id:"espresso", category:"hot", name:text("إسبريسو", "Espresso"), description:text("صغيرة… بس مفعولها كبير. بن غني ومظبوط.", "Small cup, big character. Rich and beautifully balanced."), price:45, icon:"☕", tone:"peach" },
  { id:"cappuccino", category:"hot", name:text("كابتشينو", "Cappuccino"), description:text("قهوة غنية ورغوة لبن خفيفة زي السحاب.", "Rich espresso under a cloud of silky milk foam."), price:65, icon:"☕", tone:"gold", badge:"best" },
  { id:"latte", category:"hot", name:text("لاتيه", "Café latte"), description:text("إسبريسو ولبن كريمي… حضن في كوباية.", "Espresso and creamy milk. A hug in a mug."), price:70, icon:"🍵", tone:"mint" },
  { id:"turkish", category:"hot", name:text("قهوة تركي", "Turkish coffee"), description:text("على الهادي، وبوشّ حلو… زي ما بتحبها.", "Slow-brewed, full-bodied, and just how you like it."), price:40, icon:"☕", tone:"pink" },
  { id:"chocolate", category:"hot", name:text("هوت شوكليت", "Hot chocolate"), description:text("شوكولاتة غنية تدفّي القلب قبل الإيدين.", "Dreamy chocolate that warms you from the inside out."), price:75, icon:"🍫", tone:"lavender" },
  { id:"tea", category:"hot", name:text("شاي بالنعناع", "Fresh mint tea"), description:text("شاي مظبوط ونعناع فريش… وراحة بال.", "A proper cup of tea with fresh mint and a little calm."), price:35, icon:"🌿", tone:"green", badge:"vegan" },
  { id:"icedlatte", category:"cold", name:text("آيس لاتيه", "Iced latte"), description:text("قهوتك المفضلة، بس بانتعاشة زيادة.", "Your favourite coffee with an extra dose of chill."), price:75, icon:"🥤", tone:"gold", badge:"best" },
  { id:"coldbrew", category:"cold", name:text("كولد برو", "Cold brew"), description:text("بن مستخلص على البارد… ناعم ومليان طعم.", "Slow-steeped coffee, wonderfully smooth and bold."), price:80, icon:"🧊", tone:"mint", badge:"new" },
  { id:"lemon", category:"cold", name:text("ليمون بالنعناع", "Mint lemonade"), description:text("ليمون فريش ونعناع… نسمة صيف في كوباية.", "Fresh lemon and mint. A little summer in a glass."), price:55, icon:"🍋", tone:"green", badge:"vegan" },
  { id:"mango", category:"cold", name:text("عصير مانجو", "Fresh mango juice"), description:text("مانجو حلوة تقيلة… من غير أي كلام.", "Luscious, sunny mango. Nothing more needed."), price:65, icon:"🥭", tone:"peach" },
  { id:"shake", category:"cold", name:text("ميلك شيك فراولة", "Strawberry milkshake"), description:text("فراولة ولبن وآيس كريم… دلع على أصوله.", "Strawberries, milk and ice cream. Pure indulgence."), price:85, icon:"🍓", tone:"pink" },
  { id:"matcha", category:"cold", name:text("آيس ماتشا", "Iced matcha latte"), description:text("ماتشا ولبن كريمي… تغيير لطيف لمزاجك.", "Earthy matcha and creamy milk. A refreshing change."), price:90, icon:"🍵", tone:"green", badge:"new" },
  { id:"cheesecake", category:"sweet", name:text("تشيز كيك", "Berry cheesecake"), description:text("كريمية وناعمة… وعليها صوص توت يفرّح.", "Creamy cheesecake with a joyful berry topping."), price:95, icon:"🍰", tone:"pink", badge:"best" },
  { id:"brownie", category:"sweet", name:text("براوني", "Chocolate brownie"), description:text("شوكولاتة من جوّه وبرّه… مفيش مقاومة.", "Deeply chocolatey, irresistibly fudgy."), price:70, icon:"🍫", tone:"lavender" },
  { id:"cookie", category:"sweet", name:text("كوكيز شوكولاتة", "Chocolate chip cookie"), description:text("مقرمشة من برّه، وطرية من جوّه.", "Golden edges, a soft centre, and plenty of chocolate."), price:40, icon:"🍪", tone:"gold" },
  { id:"cinnamon", category:"sweet", name:text("سينامون رول", "Cinnamon roll"), description:text("لفة قرفة دافية وصوص يكمّل الحكاية.", "A warm cinnamon swirl with a dreamy icing drizzle."), price:75, icon:"🌀", tone:"peach", badge:"new" },
  { id:"carrot", category:"sweet", name:text("كيكة جزر", "Carrot cake"), description:text("جزر وقرفة وكريمة… أحلى مما تتخيّل.", "Spiced carrot cake with luscious cream cheese icing."), price:80, icon:"🥕", tone:"green" },
  { id:"icecream", category:"sweet", name:text("آيس كريم", "Ice cream"), description:text("سكوبين من السعادة… اختار نكهتك.", "Two scoops of happiness. Pick your favourite flavour."), price:60, icon:"🍨", tone:"mint" },
  { id:"croissant", category:"snack", name:text("كرواسون زبدة", "Butter croissant"), description:text("طبقات دهبية وهشة… مع القهوة حكاية.", "Flaky, golden layers. Coffee’s perfect companion."), price:50, icon:"🥐", tone:"gold", badge:"best" },
  { id:"cheesecroissant", category:"snack", name:text("كرواسون جبنة", "Cheese croissant"), description:text("كرواسون دافي وجبنة سايحة تظبط الجوع.", "A warm croissant filled with melty cheese."), price:65, icon:"🧀", tone:"peach" },
  { id:"sandwich", category:"snack", name:text("ساندوتش فراخ", "Chicken sandwich"), description:text("فراخ متبّلة وخضار فريش في عيش طري.", "Seasoned chicken and crisp greens in a soft bun."), price:110, icon:"🥪", tone:"mint" },
  { id:"toast", category:"snack", name:text("توست أفوكادو", "Avocado toast"), description:text("أفوكادو فريش على توست… خفيف ولذيذ.", "Fresh avocado on crunchy toast. Simple and lovely."), price:95, icon:"🥑", tone:"green", badge:"vegan" },
  { id:"fries", category:"snack", name:text("بطاطس كريسبي", "Crispy fries"), description:text("دهبية ومقرمشة… لقمة تجرّ لقمة.", "Golden, crunchy, and impossible to have just one."), price:55, icon:"🍟", tone:"pink", badge:"vegan" },
  { id:"bagel", category:"snack", name:text("بيجل جبنة كريمي", "Cream cheese bagel"), description:text("بيجل طازة مع جبنة كريمي وأعشاب.", "A fresh bagel with cream cheese and garden herbs."), price:75, icon:"🥯", tone:"lavender", badge:"new" },
];
export const reasons = [
  { icon:"🌱", title:text("بن مختار بحب", "Beans with a story"), description:text("بن طازة، متحمّص بعناية… عشان كل رشفة تفرق.", "Fresh beans, thoughtfully roasted. Because every sip matters."), tone:"green" },
  { icon:"🧡", title:text("قعدة شبه البيت", "Your home away from home"), description:text("ركن هادي، مزيكا حلوة، ووشوش بتستناك بابتسامة.", "A cosy corner, good music, and a smile waiting for you."), tone:"peach" },
  { icon:"🥐", title:text("طازة كل يوم", "A fresh start, every day"), description:text("حاجات حلوة طالعة من الفرن… ريحتها لوحدها حكاية.", "Fresh-from-the-oven treats. The smell alone is worth the visit."), tone:"gold" },
];
export function number(value: number, language: Language) { return new Intl.NumberFormat(language === "ar" ? "ar-EG" : "en-US", {useGrouping:false}).format(value); }
export function price(value: number, language: Language) { return language === "ar" ? `${number(value, language)} ج.م` : `EGP ${number(value, language)}`; }
export function filterMenu(category: Category, query: string, language: Language) { const normalized = query.trim().toLocaleLowerCase(language); return menu.filter(item => item.category === category && `${item.name[language]} ${item.description[language]}`.toLocaleLowerCase(language).includes(normalized)); }