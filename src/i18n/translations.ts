export type Locale = "zh" | "en" | "es" | "qu";
export type LinkItem = { name: string; url: string };
export type FAQItem = { question: string; answer: string };
export type TransportOption = { name: string; time: string; price: string; steps: string[] };
export type TimelineEvent = { period: string; description: string };
export type HistorySection = { subtitle: string; content: string };
export type EcologySection = { subtitle: string; content: string };
export type CultureSection = { subtitle: string; content: string };

export type Translations = {
  nav: { about: string; ecology: string; culture: string; bestTime: string; visiting: string; transportation: string; tips: string; gallery: string; reviews: string; faq: string; location: string };
  hero: { tagline: string; title: string; subtitle: string; cta: string };
  rating: { reviews: string; source: string };
  about: { title: string; p1: string; p2: string; highlights: { title: string; items: string[] }; bestTime: { title: string; content: string; tip: string } };
  ecology: EcologySection;
  culture: CultureSection;
  visiting: { title: string; hours: { title: string; content: string; note: string }; price: { title: string; content: string; note: string }; duration: { title: string; content: string; note: string }; tips: { title: string; items: string[] }; route: { title: string; content: string } };
  transportation: { title: string; airport: { title: string; content: string; options: TransportOption[] }; city: { title: string; content: string; steps: string[] }; selfDrive: { title: string; content: string; steps: string[] } };
  tips: { title: string; items: string[] };
  gallery: { title: string; viewMore: string };
  reviews: { title: string; subtitle: string; viewMore: string };
  faq: { title: string; subtitle: string; items: FAQItem[] };
  location: { title: string; address: string; openMaps: string };
  footer: { callToAction: string; text: string; made: string; linksTitle: string; links: LinkItem[] };
};

export const translations: Record<Locale, Translations> = {
  zh: {
    nav: { about: "景点概览", ecology: "生态探秘", culture: "神鹰文化", bestTime: "最佳时间", visiting: "游览指南", transportation: "交通接驳", tips: "游览建议", gallery: "照片画廊", reviews: "游客评价", faq: "常见问题", location: "地图位置" },
    hero: { tagline: "秘鲁阿雷基帕大区 · 科尔卡峡谷", title: "神鹰十字观景台", subtitle: "Mirador Cruz del Cóndor · 科尔卡峡谷", cta: "探索观景台" },
    rating: { reviews: "条评价", source: "Google 评论" },
    about: {
      title: "景点概览",
      p1: "神鹰十字观景台（Mirador Cruz del Cóndor）位于秘鲁阿雷基帕大区的科尔卡峡谷（Cañón del Colca），是世界上观赏安第斯神鹰（Vultur gryphus）的最佳地点之一。科尔卡峡谷的最大深度达4160米，这是从山谷最高峰（如安帕托火山）到谷底河流的垂直落差，其深度几乎是美国大峡谷（Grand Canyon）的两倍。\n\n观景台得名于十字形的岩石构造和经常在此飞翔的安第斯神鹰。每天清晨，神鹰利用热气流在峡谷上空盘旋滑翔，游客可以近距离观察这些巨大的鸟类。神鹰翼展可达3.2米，是西半球最大的飞行鸟类。",
      p2: "观景台24小时开放，但最佳参观时间是早上7:30至9:00，这时神鹰最活跃。入场费为外国游客70秘鲁索尔。观景台设有基础设施，包括停车场、观景平台和小型摊位。这里是科尔卡峡谷之旅的必游景点，每年吸引数万游客前来观赏神鹰。",
      highlights: { title: "景点亮点", items: ["神鹰观察: 世界上最佳的安第斯神鹰观察地点", "峡谷深度: 科尔卡峡谷深达4160米，世界最深之一", "最佳时间: 清晨7:30-9:00神鹰最活跃", "入场费用: 外国游客70秘鲁索尔", "地理位置: 阿雷基帕大区，科尔卡峡谷"] },
      bestTime: { title: "最佳参观时间", content: "清晨 7:30 - 9:00 是最佳时间\n此时神鹰利用热气流飞翔", tip: "💡 建议: 提前到达，占据有利观景位置" }
    },
    ecology: {
      subtitle: "生态探秘 | 巨兽的飞行密码：热气流滑翔原理",
      content: "为什么神鹰十字观景台的最佳观赏时间极其精确地被限定在早上 7:30 到 9:00 之间？这绝非巧合，而是一场由太阳、峡谷与地球重力共同演绎的物理奇观。\n\n**不会“扇翅膀”的飞行巨兽：**\n安第斯神鹰是西半球体型最大的飞行鸟类。一只成年神鹰的体重可以达到 15 公斤，翼展高达 3.2 米。由于体型过于庞大，如果像普通鸟类那样靠不断扇动翅膀来飞行，它们会迅速耗尽体能。因此，神鹰演化出了一套极度节能的生存策略——依靠“热气流”（Thermal Updrafts）进行滑翔。\n\n**科尔卡峡谷的“隐形电梯”：**\n深达 4160 米的科尔卡峡谷完美地提供了神鹰所需的动力。它的运作原理如下：\n\n• **清晨蓄能：** 夜间峡谷底部积聚了大量冷空气，神鹰通常在悬崖峭壁的巢穴中沉睡或梳理羽毛，等待日出。\n• **热力驱动：** 太阳升起后，阳光直射在深邃的峡谷底部和岩壁上。岩石迅速加热了周围的冷空气。\n• **气流上升：** 暖空气比冷空气轻，于是形成了强大的、垂直上升的热气流柱。这就像是在峡谷中开启了无数部“隐形的电梯”。\n• **乘风起飞（7:30 - 9:00 AM）：** 此时，神鹰只需从悬崖上一跃而下，展开巨大的双翼，就能毫不费力地乘着这些上升热气流盘旋而上，从谷底一直滑翔至数千米的高空去寻找动物的腐尸。\n\n一旦到了上午 9:30 以后，随着峡谷整体温度升高，集中的热气流会被打散，神鹰便会飞往更高、更远的高原觅食，直到傍晚才会返回。\n\n💡 **观察指南：** 当你在观景台看到神鹰时，注意观察它们的翅膀尖端。它们的主翼羽毛会像手指一样完全张开，以此来感知气流的微小变化，实现完美的空气动力学控制。由于它们在空中滑翔不需要消耗多余能量，即使飞越几百公里，神鹰的心跳也几乎与休息时保持一致！"
    },
    culture: {
      subtitle: "文化科普 | 安第斯宇宙观与神鹰图腾 (Cosmovisión Andina)",
      content: "在科尔卡峡谷，安第斯神鹰不仅仅是一只罕见的巨型猛禽，它更是印加与前印加文明中神圣的图腾。要理解神鹰的地位，就必须走进古老的“安第斯三界宇宙观”（Chakana）。\n\n在原住民的信仰体系中，宇宙被划分为三个截然不同却又紧密相连的维度，并分别由三种神圣的动物代表：\n\n• **Uku Pacha（地下世界 / 过去）：** 由蛇（Amaru）代表。象征着死者的灵魂栖息地、大地的深处以及生命的孕育与轮回。\n• **Kay Pacha（人类世界 / 现在）：** 由美洲狮（Puma）代表。象征着我们生存的大地、物质世界，代表着力量、勇气与俗世的智慧。\n• **Hanan Pacha（神明世界 / 未来）：** 由安第斯神鹰（Cóndor）代表。象征着天空、神明（Apus，即山神）的居所和无限的未来。\n\n**天空的使者：**\n因为神鹰飞跃在冰雪覆盖的安第斯群峰之上，原住民相信它是唯一能在“人类世界”与“神明世界”之间穿梭的生灵。神鹰被视为“神明的信使”，负责将人类的祈祷带给天空，并在每天清晨用巨大的双翼协助太阳升起。在当地传说中，神鹰也是灵魂的引路者，负责将逝者的灵魂驮在背上，飞向天国的安息之地。\n\n💡 **知识卡片：** 在观景台附近的村落里，你可能会看到一种十字形的阶梯状几何图案，这被称为“安第斯十字架”（Chakana）。它的顶端正中央，通常就象征着神鹰所统领的 Hanan Pacha。"
    },
    visiting: {
      title: "游览指南",
      hours: { title: "开放时间", content: "24 小时营业\n全年无休", note: "⚠️ 提醒：虽然24小时开放，但清晨是观察神鹰的最佳时间。" },
      price: { title: "门票费用", content: "国际/外国游客：70 PEN（科尔卡旅游套票 Boleto Turístico del Colca）\n南美洲国家游客：40 PEN\n秘鲁游客：10 PEN\n当地社区：免费\n\n（以上费用受汇率波动影响，以当地官方最新公布为准）", note: "⚠️ 重要提示：建议携带现金，因为此处可能不接受信用卡。费用可能变动，请提前确认。" },
      duration: { title: "建议游览时长", content: "建议预留 1 - 2 小时", note: "如果结合科尔卡峡谷一日游，建议安排半天至一天。" },
      tips: { title: "游览建议物品", items: ["保暖衣物（清晨气温较低）",
        "预防高反药物或古柯叶（观景台海拔约3287米，请预防高山症 Soroche）", "防晒用品与墨镜（高原紫外线强）", " binoculars（双筒望远镜）观鸟用", "水和零食", "相机和备用电池", "帽子"] },
      route: { title: "主要探索路线", content: "我们特别推荐以下科尔卡峡谷探索路线：\n\n1. 从阿雷基帕出发：早上5:00出发，约3小时到达观景台\n2. 在观景台停留1-2小时观察神鹰\n3. 继续游览科尔卡峡谷其他景点，如Yanque温泉\n4. 下午返回阿雷基帕或住在Chivay" }
    },
    transportation: {
      title: "交通接驳",
      airport: { title: "从利马或库斯科出发", content: "距离利马约 1000 公里，车程约 12-15 小时。距离库斯科约 600 公里。所有游客需先到达阿雷基帕（Arequipa）——科尔卡峡谷的门户城市。", options: [
        { name: "飞机+汽车(推荐)", price: "约 $100 - $200 美元", time: "约 1.5 小时飞机 + 3 小时汽车", steps: ["从利马飞往阿雷基帕（约1.5小时）", "从阿雷基帕包车或参加一日游前往观景台（约3小时）", "建议参加当地一日游团，包含交通和导游"] },
        { name: "长途汽车(经济实惠)", price: "约 $20 - $40 美元", time: "约 12-15 小时", steps: ["从利马乘坐长途汽车前往阿雷基帕", "从阿雷基帕参加一日游或包车前往观景台"] }
      ]},
      city: { title: "从阿雷基帕前往观景台", content: "阿雷基帕是科尔卡峡谷的门户城市。从阿雷基帕到观景台约 150 公里，车程约 3 小时。", steps: ["从阿雷基帕参加一日游团（最方便）", "包车前往（更自由）", "导航: 在 Google Maps 中输入 Mirador Cruz del Cóndor", "途经Chivay，可在此休息和吃早餐"] },
      selfDrive: { title: "自驾前往", content: "从阿雷基帕自驾前往观景台非常方便，道路状况良好。建议早上5:00出发，以便8:00前到达。", steps: ["导航至 Mirador Cruz del Cóndor, Cañón del Colca, Perú", "道路状况良好，但部分路段为山路", "建议高底盘车辆，虽然普通车辆也可通行", "清晨出发，以便最佳观鹰时间到达"] }
    },
    tips: { title: "游览建议", items: [
      "建议早上7:30前到达，占据有利位置",
      "神鹰在热气流中飞翔，最佳观察时间是清晨",
      "携带双筒望远镜，更好地观察神鹰",
      "请做好防晒措施，高原紫外线极强",
      "建议携带保暖衣物，清晨气温可能只有5-10°C",
      "请注意保持环境整洁，将所有垃圾带走",
      "不要喂食或惊扰野生动物",
      "建议聘请当地导游，了解更多关于神鹰的知识",
      "建议提前了解天气情况，雨天神鹰可能不出现",
      "尊重当地文化和传统"
    ] },
    gallery: { title: "精彩照片", viewMore: "在 Google Maps 查看更多相片" },
    reviews: { title: "游客评价", subtitle: "来自科尔卡峡谷的声音：Google Maps 真实见证", viewMore: "在 Google Maps 查看更多见证" },
    faq: { title: "常见问题", subtitle: "深入了解神鹰十字观景台", items: [
      { question: "神鹰十字观景台的开放时间是？", answer: "观景台24小时开放，全年无休。但最佳参观时间是早上7:30至9:00，这时安第斯神鹰最活跃，利用热气流在峡谷上空飞翔。" },
      { question: "进入观景台需要门票吗？费用是多少？", answer: "是的，进入观景台需要购买门票。外国游客70秘鲁索尔，秘鲁游客10秘鲁索尔，当地社区免费。建议携带现金，因为此处可能不接受信用卡。" },
      { question: "什么时候是观察神鹰的最佳时间？", answer: "清晨7:30至9:00是最佳时间。这时气温较低，神鹰利用热气流从峡谷底部升起，在悬崖边和观景台上空盘旋滑翔。之后热气流增强，神鹰会飞得更高更远。\n\n另外，旱季（5-11月）神鹰更活跃，因为食物更集中。" },
      { question: "观景台有什么特色？", answer: "神鹰十字观景台是世界知名的安第斯神鹰观察地点，特色包括：\n1. 近距离观察安第斯神鹰，翼展可达3.2米\n2. 科尔卡峡谷壮观景色，深度达4160米\n3. 24小时开放\n4. 入场费合理（外国游客70索尔）\n5. 基础设施完善，有停车场和观景平台" },
      { question: "如何前往神鹰十字观景台？", answer: "观景台位于秘鲁阿雷基帕大区科尔卡峡谷。从阿雷基帕出发约150公里，车程约3小时。具体导航可在 Google Maps 中搜索\"Mirador Cruz del Cóndor, Cañón del Colca, Perú\"。建议参加一日游团或包车前往。" },
      { question: "游览观景台需要注意什么？有什么安全建议？", answer: "游览观景台需要注意：\n1. 清晨气温低：携带保暖衣物\n2. 高原紫外线强：做好防晒\n3. 海拔：约3400米，注意高原反应\n4. 安全：不要越过护栏，注意脚下\n5. 环保：将所有垃圾带走，不要惊扰神鹰" },
      { question: "观景台附近还有哪些值得一游的景点？", answer: "科尔卡峡谷和阿雷基帕大区有许多值得游览的景点，包括：\n1. Chivay——科尔卡峡谷的主要城镇，有温泉\n2. Yanque——传统殖民地小镇\n3. Coporaque——另一个美丽小镇\n4. 阿雷基帕市区——联合国教科文组织世界文化遗产，白色火山岩建筑\n5. Colca Lodge温泉——在自然环境中泡温泉" }
    ]},
    location: { title: "地图位置", address: "93QV+FH San Juan de Chuccho\nCañón del Colca, Arequipa, Perú", openMaps: "在 Google Maps 查看位置" },
    footer: { callToAction: "作为科尔卡峡谷的重要景点，请与我们一起爱护环境、保护生态。保持观景台整洁，共同维护这一自然奇观。", text: "© 2026 神鹰十字观景台指南 · 保留所有权利。\n本网站是一个独立的第三方指南项目，致力于准确传播神鹰十字观景台信息。我们与秘鲁政府或其他官方机构没有任何关联。", made: "本网站是一个独立的第三方指南项目。为探索者与学习者而制。", linksTitle: "相关链接", links: [
      { name: "秘鲁外贸和旅游部", url: "https://www.gob.pe/mincetur" },
      { name: "秘鲁国家自然保护区管理局", url: "https://www.gob.pe/sernanp" },
      { name: "科尔卡峡谷官方指南", url: "https://www.peru.travel/es/atractivos/canon-del-colca" },
      { name: "阿雷基帕大区旅游指南", url: "https://www.peru.travel/es/destinos/arequipa" },
      { name: "阿雷基帕大区政府", url: "https://www.gob.pe/regionarequipa" }
    ]}
  },

  en: {
    nav: { about: "Overview", ecology: "Ecology", culture: "Culture", bestTime: "Best Time", visiting: "Visit Guide", transportation: "Getting There", tips: "Travel Tips", gallery: "Photo Gallery", reviews: "Reviews", faq: "FAQ", location: "Location" },
    hero: { tagline: "Arequipa, Peru · Colca Canyon", title: "Cruz del Cóndor Viewpoint", subtitle: "Mirador Cruz del Cóndor · Colca Canyon", cta: "Explore the Viewpoint" },
    rating: { reviews: "reviews", source: "Google Reviews" },
    about: {
      title: "Overview",
      p1: "The Cruz del Cóndor Viewpoint (Mirador Cruz del Cóndor) is located in the Colca Canyon (Cañón del Colca) in the Arequipa region of Peru. It is one of the best places in the world to observe the Andean condor (Vultur gryphus). Colca Canyon reaches a maximum depth of 4,160 meters, measured as the vertical drop from the highest peaks (like the Ampato volcano) to the river at the canyon floor, making it nearly twice as deep as the Grand Canyon.\n\nThe viewpoint gets its name from the cross-shaped rock formation and the Andean condors that frequently soar here. Every early morning, condors use thermal currents to circle and glide above the canyon, allowing visitors to observe these magnificent birds up close. The condor has a wingspan of up to 3.2 meters, making it the largest flying bird in the Western Hemisphere.",
      p2: "The viewpoint is open 24 hours, but the best time to visit is between 7:30 and 9:00 AM when the condors are most active. Entrance fee is 20 Peruvian soles for foreign visitors. The viewpoint has basic infrastructure including parking, viewing platforms, and small stalls. It is a must-visit attraction on any Colca Canyon trip, attracting tens of thousands of visitors each year.",
      highlights: { title: "Highlights", items: ["Condor Watching: World's best Andean condor observation spot", "Canyon Depth: Colca Canyon reaches 4,160m deep, one of world's deepest", "Best Time: Early morning 7:30-9:00 when condors are most active", "Entrance Fee: 70 PEN for foreign visitors", "Location: Arequipa region, Colca Canyon"] },
      bestTime: { title: "Best Time to Visit", content: "Early morning 7:30 - 9:00 AM is best\nCondors soar on thermal currents", tip: "💡 Tip: Arrive early to get a good viewing spot" }
    },
    ecology: {
      subtitle: "Ecology | The Flight Secret of a Giant: Thermal Updrafts",
      content: "Why is the best time to see condors at the Cruz del Cóndor viewpoint so precisely limited to between 7:30 and 9:00 AM? It's no coincidence, but a physical marvel orchestrated by the sun, the canyon, and gravity.\n\n**A Flying Giant That Doesn't 'Flap':**\nThe Andean condor is the largest flying bird in the Western Hemisphere. An adult can weigh up to 15 kg (33 lbs) with a wingspan of 3.2 meters (10.5 ft). Because of their massive size, continuously flapping their wings like normal birds would quickly exhaust their energy. Therefore, condors have evolved an extremely energy-efficient survival strategy—gliding on 'Thermal Updrafts'.\n\n**The 'Invisible Elevators' of Colca Canyon:**\nThe 4,160-meter-deep Colca Canyon perfectly provides the power condors need. Here is how it works:\n\n• **Morning Energy Storage:** At night, cold air accumulates at the bottom of the canyon. Condors usually sleep or preen their feathers in their cliffside nests, waiting for sunrise.\n• **Thermal Drive:** After the sun rises, direct sunlight hits the deep canyon floor and rock walls. The rocks rapidly heat the surrounding cold air.\n• **Rising Currents:** Warm air is lighter than cold air, forming powerful, vertically rising columns of thermal currents. This is like turning on countless 'invisible elevators' in the canyon.\n• **Taking Flight (7:30 - 9:00 AM):** At this time, a condor only needs to leap from the cliff and spread its huge wings to effortlessly ride these rising thermal currents, spiraling up from the canyon floor to thousands of meters high to search for animal carcasses.\n\nOnce it gets past 9:30 AM, as the canyon's overall temperature rises, the concentrated thermal currents dissipate, and the condors fly to higher, farther plateaus to forage until returning in the evening.\n\n💡 **Observation Guide:** When you see condors at the viewpoint, notice their wingtips. Their primary flight feathers spread completely open like fingers to sense minute changes in airflow, achieving perfect aerodynamic control. Because gliding in the air requires almost no extra energy, a condor's heart rate remains nearly identical to when it's resting, even while flying hundreds of kilometers!"
    },
    culture: {
      subtitle: "Culture | Andean Cosmology and the Condor Totem (Cosmovisión Andina)",
      content: "In the Colca Canyon, the Andean condor is not just a rare giant bird of prey; it is a sacred totem in Inca and pre-Inca civilizations. To understand the condor's status, one must look into the ancient 'Andean Three-World Cosmology' (Chakana).\n\nIn the indigenous belief system, the universe is divided into three distinct yet closely connected dimensions, represented by three sacred animals:\n\n• **Uku Pacha (Underworld / Past):** Represented by the Snake (Amaru). It symbolizes the resting place of the dead, the depths of the earth, and the cycle of life and rebirth.\n• **Kay Pacha (Human World / Present):** Represented by the Puma. It symbolizes the earth we live on, the material world, representing strength, courage, and earthly wisdom.\n• **Hanan Pacha (World of the Gods / Future):** Represented by the Andean Condor (Cóndor). It symbolizes the sky, the dwelling place of the gods (Apus, or mountain spirits), and the infinite future.\n\n**Messenger of the Sky:**\nBecause the condor flies over the snow-capped Andean peaks, indigenous people believed it was the only creature capable of traveling between the 'Human World' and the 'World of the Gods'. The condor is seen as the 'messenger of the gods', responsible for carrying human prayers to the sky and using its massive wings to help the sun rise every morning. In local legends, the condor also guides the souls of the deceased, carrying them on its back to their resting place in the heavens.\n\n💡 **Did you know?** In the villages near the viewpoint, you might see a cross-shaped, stepped geometric pattern known as the 'Andean Cross' (Chakana). Its top center usually symbolizes the Hanan Pacha, ruled by the condor."
    },
    visiting: {
      title: "Visitor Guide",
      hours: { title: "Opening Hours", content: "Open 24 hours\nOpen every day", note: "⚠️ Note: Although open 24 hours, early morning is the best time to see condors." },
      price: { title: "Entrance Fees", content: "International/Foreign visitors: 70 PEN (Colca Tourist Ticket / Boleto Turístico)\nSouth American visitors: 40 PEN\nPeruvian visitors: 10 PEN\nLocal communities: Free\n\n(Above fees subject to exchange rate fluctuations, please refer to official announcement)", note: "⚠️ Important Note: Cash is recommended as credit cards may not be accepted. Fees are subject to change, please confirm in advance." },
      duration: { title: "Recommended Duration", content: "Recommended: 1 - 2 hours", note: "If combined with a Colca Canyon day trip, plan for half a day to a full day." },
      tips: { title: "Recommended Items", items: ["Warm clothing (early morning temperatures are low)",
        "Altitude sickness medication or coca leaves (Viewpoint altitude is approx. 3,287m, please prevent Soroche)", "Sun protection & sunglasses (strong UV at altitude)", "Binoculars for birdwatching", "Water and snacks", "Camera and spare batteries", "Hat"] },
      route: { title: "Exploration Routes", content: "We especially recommend the following Colca Canyon exploration route:\n\n1. Depart from Arequipa: Leave at 5:00 AM, about 3 hours to the viewpoint\n2. Stay at the viewpoint for 1-2 hours to observe condors\n3. Continue visiting other Colca Canyon attractions, such as Yanque hot springs\n4. Return to Arequipa in the afternoon or stay in Chivay" }
    },
    transportation: {
      title: "Getting There",
      airport: { title: "From Lima or Cusco", content: "About 1,000 km from Lima, approx. 12-15 hours by car. About 600 km from Cusco. All visitors must first arrive at Arequipa — the gateway city to Colca Canyon.", options: [
        { name: "Flight + Car (Recommended)", price: "About $100 - $200 USD", time: "About 1.5 hours flight + 3 hours car", steps: ["Fly from Lima to Arequipa (approx. 1.5 hours)", "Take a day tour or chartered car from Arequipa to the viewpoint (approx. 3 hours)", "Recommended to join a local day tour, including transportation and guide"] },
        { name: "Long-distance Bus (Economical)", price: "About $20 - $40 USD", time: "About 12-15 hours", steps: ["Take a long-distance bus from Lima to Arequipa", "Join a day tour or charter a car from Arequipa to the viewpoint"] }
      ]},
      city: { title: "From Arequipa to the Viewpoint", content: "Arequipa is the gateway city to Colca Canyon. About 150 km from Arequipa to the viewpoint, approx. 3 hours by car.", steps: ["Join a day tour from Arequipa (most convenient)", "Charter a car (more freedom)", "Navigation: Enter Mirador Cruz del Cóndor in Google Maps", "Pass through Chivay, where you can rest and have breakfast"] },
      selfDrive: { title: "Driving", content: "Driving from Arequipa to the viewpoint is convenient, road conditions are good. Recommended to depart at 5:00 AM to arrive before 8:00 AM.", steps: ["Navigate to Mirador Cruz del Cóndor, Cañón del Colca, Perú", "Road conditions are good, but some sections are mountain roads", "High-clearance vehicle recommended, though regular cars can also pass", "Depart early in the morning to arrive in time for the best condor viewing"] }
    },
    tips: { title: "Travel Tips", items: [
      "Arrive before 7:30 AM to get a good spot",
      "Condors soar on thermal currents, best observed in early morning",
      "Bring binoculars for better condor observation",
      "Please take sun protection measures, UV is strong at altitude",
      "Bring warm clothing, early morning temperature may be only 5-10°C",
      "Keep the area clean, take all garbage with you",
      "Do not feed or disturb wildlife",
      "Hire a local guide to learn more about condors",
      "Check weather in advance, condors may not appear on rainy days",
      "Respect local culture and traditions"
    ] },
    gallery: { title: "Photo Gallery", viewMore: "View More Photos on Google Maps" },
    reviews: { title: "Reviews", subtitle: "Voices from Colca Canyon: Real Reviews from Google Maps", viewMore: "View More Reviews on Google Maps" },
    faq: { title: "Frequently Asked Questions", subtitle: "Learn more about Cruz del Cóndor Viewpoint", items: [
      { question: "What are the opening hours of Cruz del Cóndor Viewpoint?", answer: "The viewpoint is open 24 hours, every day of the year. However, the best time to visit is between 7:30 and 9:00 AM, when Andean condors are most active, using thermal currents to soar above the canyon." },
      { question: "Is there an entrance fee? How much is it?", answer: "Yes, there is an entrance fee. Foreign visitors: 20 Peruvian soles, Peruvian visitors: 10 soles, local communities: free. Cash is recommended as credit cards may not be accepted." },
      { question: "When is the best time to see condors?", answer: "Early morning 7:30 to 9:00 AM is the best time. The temperature is cooler, and condors use thermal currents rising from the canyon floor to circle and glide near the cliffs and above the viewpoint. After that, thermal currents strengthen and condors fly higher and farther away.\n\nAlso, during the dry season (May-November), condors are more active as food is more concentrated." },
      { question: "What are the features of the viewpoint?", answer: "Cruz del Cóndor Viewpoint is a world-renowned Andean condor observation spot. Features include:\n1. Close-up observation of Andean condors with wingspan up to 3.2 meters\n2. Spectacular Colca Canyon views, 4,160m deep\n3. Open 24 hours\n4. Reasonable entrance fee (70 soles for foreigners)\n5. Good infrastructure with parking and viewing platforms" },
      { question: "How to get to Cruz del Cóndor Viewpoint?", answer: "The viewpoint is located in Colca Canyon, Arequipa region, Peru. About 150 km from Arequipa, approx. 3 hours by car. For specific navigation, search for \"Mirador Cruz del Cóndor, Cañón del Colca, Perú\" in Google Maps. Recommended to join a day tour or charter a car." },
      { question: "What should I pay attention to when visiting? Any safety recommendations?", answer: "When visiting the viewpoint, please note:\n1. Early morning temperature is low: Bring warm clothing\n2. Strong UV at altitude: Use sun protection\n3. Altitude: Approx. 3,400m, be aware of altitude sickness\n4. Safety: Do not go beyond railings, watch your step\n5. Environmental protection: Take all garbage with you, do not disturb condors" },
      { question: "What other attractions are worth visiting near the viewpoint?", answer: "Colca Canyon and Arequipa region have many worth-visiting attractions, including:\n1. Chivay — Main town in Colca Canyon, with hot springs\n2. Yanque — Traditional colonial town\n3. Coporaque — Another beautiful town\n4. Arequipa city — UNESCO World Cultural Heritage, white volcanic stone buildings\n5. Colca Lodge hot springs — Soak in hot springs in natural setting" }
    ]},
    location: { title: "Map Location", address: "93QV+FH San Juan de Chuccho\nColca Canyon, Arequipa, Peru", openMaps: "View Location on Google Maps" },
    footer: { callToAction: "As an important attraction in Colca Canyon, please join us in caring for the environment and protecting ecology. Keep the viewpoint clean and maintain this natural wonder together.", text: "© 2026 Cruz del Cóndor Viewpoint Guide · All rights reserved.\nThis website is an independent third-party guide project dedicated to accurately sharing information about Cruz del Cóndor Viewpoint. We are not affiliated with the Peruvian government or any official authority.", made: "This website is an independent third-party guide project. Made for explorers and learners.", linksTitle: "Related Links", links: [
      { name: "Peru Ministry of Foreign Trade and Tourism", url: "https://www.gob.pe/mincetur" },
      { name: "National Service of Natural Protected Areas of Peru", url: "https://www.gob.pe/sernanp" },
      { name: "Colca Canyon Official Guide", url: "https://www.peru.travel/es/atractivos/canon-del-colca" },
      { name: "Arequipa Region Tourism Guide", url: "https://www.peru.travel/es/destinos/arequipa" },
      { name: "Arequipa Regional Government", url: "https://www.gob.pe/regionarequipa" }
    ]}
  },

  es: {
    nav: { about: "Descripción", ecology: "Ecología", culture: "Cultura", bestTime: "Mejor Época", visiting: "Guía de Visita", transportation: "Cómo Llegar", tips: "Consejos", gallery: "Galería de Fotos", reviews: "Reseñas", faq: "Preguntas Frecuentes", location: "Ubicación" },
    hero: { tagline: "Arequipa, Perú · Cañón del Colca", title: "Mirador Cruz del Cóndor", subtitle: "Cañón del Colca · Arequipa, Perú", cta: "Explora el Mirador" },
    rating: { reviews: "reseñas", source: "Google Reviews" },
    about: {
      title: "Descripción General",
      p1: "El Mirador Cruz del Cóndor se encuentra en el Cañón del Colca, en la región Arequipa de Perú. Es uno de los mejores lugares del mundo para observar el cóndor andino (Vultur gryphus). El Cañón del Colca alcanza una profundidad máxima de 4,160 metros, medida como la caída vertical desde los picos más altos (como el volcán Ampato) hasta el río en el fondo del cañón, haciéndolo casi el doble de profundo que el Gran Cañón.\n\nEl mirador debe su nombre a la formación rocosa en forma de cruz y a los cóndores andinos que frecuentemente sobrevuelan aquí. Todas las mañanas temprano, los cóndores utilizan corrientes térmicas para circular y planear sobre el cañón, permitiendo a los visitantes observar de cerca a estas magníficas aves. El cóndor tiene una envergadura de hasta 3.2 metros, siendo la ave voladora más grande del hemisferio occidental.",
      p2: "El mirador está abierto las 24 horas, pero el mejor momento para visitarlo es entre las 7:30 y 9:00 AM cuando los cóndores están más activos. La entrada cuesta 70 soles peruanos para visitantes extranjeros. El mirador cuenta con infraestructura básica que incluye estacionamiento, plataformas de observación y pequeños puestos. Es una atracción imperdible en cualquier viaje al Cañón del Colca, atrayendo a decenas de miles de visitantes cada año.",
      highlights: { title: "Datos Destacados", items: ["Observación de Cóndores: Mejor lugar del mundo para observar cóndor andino", "Profundidad del Cañón: Cañón del Colca alcanza 4,160m, uno de los más profundos", "Mejor Época: Temprano en la mañana 7:30-9:00 cuando cóndores están activos", "Entrada: 70 PEN para visitantes extranjeros", "Ubicación: Región Arequipa, Cañón del Colca"] },
      bestTime: { title: "Mejor Época para Visitar", content: "Temprano en la mañana 7:30 - 9:00 AM es mejor\nCóndores planean en corrientes térmicas", tip: "💡 Consejo: Llegue temprano para obtener un buen lugar de observación" }
    },
    ecology: {
      subtitle: "Ecología | El Secreto de Vuelo del Gigante: Corrientes Térmicas",
      content: "¿Por qué el mejor momento para ver cóndores en el mirador Cruz del Cóndor está tan precisamente limitado entre las 7:30 y las 9:00 AM? No es coincidencia, sino una maravilla física orquestada por el sol, el cañón y la gravedad.\n\n**Un Gigante Volador que no 'Aletea':**\nEl cóndor andino es el ave voladora más grande del hemisferio occidental. Un adulto puede pesar hasta 15 kg con una envergadura de 3.2 metros. Debido a su enorme tamaño, aletear continuamente como las aves normales agotaría rápidamente su energía. Por lo tanto, los cóndores han evolucionado una estrategia de supervivencia extremadamente eficiente en energía: planear en 'Corrientes Térmicas'.\n\n**Los 'Ascensores Invisibles' del Cañón del Colca:**\nEl Cañón del Colca, de 4,160 metros de profundidad, proporciona perfectamente la energía que los cóndores necesitan. Así es como funciona:\n\n• **Almacenamiento de Energía Matutino:** Por la noche, el aire frío se acumula en el fondo del cañón. Los cóndores generalmente duermen o acicalan sus plumas en sus nidos en los acantilados, esperando el amanecer.\n• **Impulso Térmico:** Después del amanecer, la luz solar directa golpea el profundo fondo del cañón y las paredes rocosas. Las rocas calientan rápidamente el aire frío circundante.\n• **Corrientes Ascendentes:** El aire cálido es más ligero que el aire frío, formando poderosas columnas de corrientes térmicas que se elevan verticalmente. Esto es como encender innumerables 'ascensores invisibles' en el cañón.\n• **Tomando Vuelo (7:30 - 9:00 AM):** En este momento, un cóndor solo necesita saltar del acantilado y extender sus enormes alas para montar sin esfuerzo estas corrientes térmicas ascendentes, girando en espiral desde el fondo del cañón hasta miles de metros de altura para buscar cadáveres de animales.\n\nUna vez pasadas las 9:30 AM, a medida que la temperatura general del cañón aumenta, las corrientes térmicas concentradas se disipan y los cóndores vuelan hacia mesetas más altas y lejanas para alimentarse hasta regresar por la noche.\n\n💡 **Guía de Observación:** Cuando vea cóndores en el mirador, note las puntas de sus alas. Sus plumas de vuelo primarias se abren completamente como dedos para detectar cambios diminutos en el flujo de aire, logrando un control aerodinámico perfecto. Debido a que planear en el aire casi no requiere energía adicional, ¡la frecuencia cardíaca de un cóndor permanece casi idéntica a cuando está descansando, incluso mientras vuela cientos de kilómetros!"
    },
    culture: {
      subtitle: "Cultura | La Cosmovisión Andina y el Tótem del Cóndor",
      content: "En el Cañón del Colca, el cóndor andino no es solo una rara ave de presa gigante; es un tótem sagrado en las civilizaciones incas y preincas. Para comprender el estatus del cóndor, uno debe mirar hacia la antigua 'Cosmovisión de los Tres Mundos Andinos' (Chakana).\n\nEn el sistema de creencias indígenas, el universo está dividido en tres dimensiones distintas pero estrechamente conectadas, representadas por tres animales sagrados:\n\n• **Uku Pacha (Mundo Subterráneo / Pasado):** Representado por la Serpiente (Amaru). Simboliza el lugar de descanso de los muertos, las profundidades de la tierra y el ciclo de vida y renacimiento.\n• **Kay Pacha (Mundo Humano / Presente):** Representado por el Puma. Simboliza la tierra en la que vivimos, el mundo material, representando la fuerza, el coraje y la sabiduría terrenal.\n• **Hanan Pacha (Mundo de los Dioses / Futuro):** Representado por el Cóndor Andino. Simboliza el cielo, la morada de los dioses (Apus, o espíritus de las montañas) y el futuro infinito.\n\n**Mensajero del Cielo:**\nDebido a que el cóndor vuela sobre los picos nevados de los Andes, los pueblos indígenas creían que era la única criatura capaz de viajar entre el 'Mundo Humano' y el 'Mundo de los Dioses'. El cóndor es visto como el 'mensajero de los dioses', responsable de llevar las oraciones humanas al cielo y usar sus enormes alas para ayudar a que el sol salga cada mañana. En las leyendas locales, el cóndor también guía las almas de los difuntos, llevándolos en su espalda a su lugar de descanso en los cielos.\n\n💡 **¿Sabías que?** En los pueblos cercanos al mirador, es posible que vea un patrón geométrico escalonado en forma de cruz conocido como la 'Cruz Andina' (Chakana). Su centro superior generalmente simboliza el Hanan Pacha, gobernado por el cóndor."
    },
    visiting: {
      title: "Guía de Visita",
      hours: { title: "Horario de Apertura", content: "Abierto las 24 horas\nAbierto todos los días", note: "⚠️ Nota: Aunque abierto las 24 horas, temprano en la mañana es el mejor momento para ver cóndores." },
      price: { title: "Tarifas de Entrada", content: "Visitantes extranjeros/internacionales: 70 PEN (Boleto Turístico del Colca)\nVisitantes sudamericanos: 40 PEN\nVisitantes peruanos: 10 PEN\nComunidades locales: Gratis\n\n(Las tarifas anteriores están sujetas a fluctuaciones de la tasa de cambio, consulte el anuncio oficial)", note: "⚠️ Nota Importante: Se recomienda efectivo ya que es posible que no se acepten tarjetas de crédito. Las tarifas están sujetas a cambios, confirme con anticipación." },
      duration: { title: "Duración Recomendada", content: "Recomendado: 1 - 2 horas", note: "Si se combina con un viaje de un día al Cañón del Colca, planee medio día a un día completo." },
      tips: { title: "Artículos Recomendados", items: ["Ropa abrigadora (temperatura temprano en la mañana es baja)",
        "Medicamentos para el mal de altura u hojas de coca (La altitud del mirador es de aprox. 3,287m, por favor prevenga el Soroche)", "Protección solar y gafas de sol (UV fuerte en altura)", "Binoculares para observación de aves", "Agua y snacks", "Cámara y baterías de repuesto", "Sombrero"] },
      route: { title: "Rutas de Exploración", content: "Recomendamos especialmente la siguiente ruta de exploración del Cañón del Colca:\n\n1. Salir de Arequipa: Salir a las 5:00 AM, aproximadamente 3 horas al mirador\n2. Quedarse en el mirador 1-2 horas para observar cóndores\n3. Continuar visitando otras atracciones del Cañón del Colca, como las aguas termales de Yanque\n4. Regresar a Arequipa en la tarde o quedarse en Chivay" }
    },
    transportation: {
      title: "Cómo Llegar",
      airport: { title: "Desde Lima o Cusco", content: "A unos 1,000 km de Lima, aproximadamente 12-15 horas en automóvil. A unos 600 km de Cusco. Todos los visitantes deben llegar primero a Arequipa — la ciudad de entrada al Cañón del Colca.", options: [
        { name: "Vuelo + Auto (Recomendado)", price: "Aprox. $100 - $200 USD", time: "Aprox. 1.5 horas vuelo + 3 horas auto", steps: ["Volar de Lima a Arequipa (aprox. 1.5 horas)", "Tomar un tour de un día o auto alquilado de Arequipa al mirador (aprox. 3 horas)", "Recomendado unirse a un tour de un día local, incluye transporte y guía"] },
        { name: "Ómnibus de Larga Distancia (Económico)", price: "Aprox. $20 - $40 USD", time: "Aproximadamente 12-15 horas", steps: ["Tomar un ómnibus de larga distancia de Lima a Arequipa", "Unirse a un tour de un día o alquilar auto de Arequipa al mirador"] }
      ]},
      city: { title: "De Arequipa al Mirador", content: "Arequipa es la ciudad de entrada al Cañón del Colca. Aproximadamente 150 km de Arequipa al mirador, aprox. 3 horas en automóvil.", steps: ["Unirse a un tour de un día desde Arequipa (más conveniente)", "Alquilar auto (más libertad)", "Navegación: Ingresar Mirador Cruz del Cóndor en Google Maps", "Pasar por Chivay, donde puede descansar y desayunar"] },
      selfDrive: { title: "Conduciendo", content: "Conducir de Arequipa al mirador es conveniente, condiciones de carretera son buenas. Recomendado salir a las 5:00 AM para llegar antes de las 8:00 AM.", steps: ["Navegar a Mirador Cruz del Cóndor, Cañón del Colca, Perú", "Condiciones de carretera son buenas, pero algunas secciones son caminos de montaña", "Vehículo de alta altura recomendado, aunque autos regulares también pueden pasar", "Salir temprano en la mañana para llegar a tiempo para la mejor observación de cóndores"] }
    },
    tips: { title: "Consejos de Viaje", items: [
      "Llegue antes de las 7:30 AM para obtener un buen lugar",
      "Cóndores planean en corrientes térmicas, mejor observados temprano en la mañana",
      "Traiga binoculares para mejor observación de cóndores",
      "Por favor tome medidas de protección solar, UV fuerte en altura",
      "Traiga ropa abrigadora, temperatura temprano puede ser solo 5-10°C",
      "Mantenga el área limpia, lleve toda la basura con usted",
      "No alimente ni perturbe la vida silvestre",
      "Contrate un guía local para aprender más sobre cóndores",
      "Verifique clima con anticipación, cóndores pueden no aparecer en días lluviosos",
      "Respete la cultura y tradiciones locales"
    ] },
    gallery: { title: "Galería de Fotos", viewMore: "Ver Más en Google Maps" },
    reviews: { title: "Reseñas", subtitle: "Voces del Cañón del Colca: Reseñas reales de Google Maps", viewMore: "Ver Más Reseñas en Google Maps" },
    faq: { title: "Preguntas Frecuentes", subtitle: "Aprenda más sobre el Mirador Cruz del Cóndor", items: [
      { question: "¿Cuál es el horario de apertura del Mirador Cruz del Cóndor?", answer: "El mirador está abierto las 24 horas, todos los días del año. Sin embargo, el mejor momento para visitarlo es entre las 7:30 y 9:00 AM, cuando los cóndores andinos están más activos, utilizando corrientes térmicas para planear sobre el cañón." },
      { question: "¿Hay tarifa de entrada? ¿Cuánto es?", answer: "Sí, hay una tarifa de entrada. Visitantes extranjeros: 70 soles peruanos, visitantes peruanos: 10 soles, comunidades locales: gratis. Se recomienda efectivo ya que es posible que no se acepten tarjetas de crédito." },
      { question: "¿Cuándo es el mejor momento para ver cóndores?", answer: "Temprano en la mañana de 7:30 a 9:00 AM es el mejor momento. La temperatura es más fresca y los cóndores utilizan corrientes térmicas que se elevan desde el fondo del cañón para circular y planear cerca de los acantilados y sobre el mirador. Después de eso, las corrientes térmicas se fortalecen y los cóndores vuelan más alto y más lejos.\n\nAdemás, durante la temporada seca (mayo-noviembre), los cóndores están más activos ya que la comida está más concentrada." },
      { question: "¿Cuáles son las características del mirador?", answer: "El Mirador Cruz del Cóndor es un lugar de observación de cóndores andinos reconocido mundialmente. Características incluyen:\n1. Observación cercana de cóndores andinos con envergadura de hasta 3.2 metros\n2. Vistas espectaculares del Cañón del Colca, 4,160m de profundidad\n3. Abierto las 24 horas\n4. Tarifa de entrada razonable (70 soles para extranjeros)\n5. Buena infraestructura con estacionamiento y plataformas de observación" },
      { question: "¿Cómo llegar al Mirador Cruz del Cóndor?", answer: "El mirador se encuentra en el Cañón del Colca, región Arequipa, Perú. Aproximadamente 150 km de Arequipa, aprox. 3 horas en automóvil. Para navegación específica, busque \"Mirador Cruz del Cóndor, Cañón del Colca, Perú\" en Google Maps. Recomendado unirse a un tour de un día o alquilar auto." },
      { question: "¿Qué debe tener en cuenta al visitar? ¿Alguna recomendación de seguridad?", answer: "Al visitar el mirador, por favor note:\n1. Temperatura temprano en la mañana es baja: Traiga ropa abrigadora\n2. UV fuerte en altura: Use protección solar\n3. Altitud: Aprox. 3,400m, tenga cuidado con el mal de altura\n4. Seguridad: No vaya más allá de las barandas, cuide sus pasos\n5. Protección ambiental: Lleve toda la basura con usted, no perturbe los cóndores" },
      { question: "¿Qué otras atracciones vale la pena visitar cerca del mirador?", answer: "El Cañón del Colca y la región Arequipa tienen muchas atracciones que vale la pena visitar, incluyendo:\n1. Chivay — Pueblo principal en el Cañón del Colca, con aguas termales\n2. Yanque — Pueblo colonial tradicional\n3. Coporaque — Otro pueblo hermoso\n4. Ciudad de Arequipa — UNESCO Patrimonio Cultural Mundial, edificios de piedra volcánica blanca\n5. Aguas termales de Colca Lodge — Descansar en aguas termales en entorno natural" }
    ]},
    location: { title: "Ubicación en el Mapa", address: "93QV+FH San Juan de Chuccho\nCañón del Colca, Arequipa, Perú", openMaps: "Ver Ubicación en Google Maps" },
    footer: { callToAction: "Como una atracción importante en el Cañón del Colca, por favor únanse a nosotros para cuidar el entorno y proteger la ecología. Mantenga el mirador limpio y mantenga esta maravilla natural juntos.", text: "© 2026 Guía del Mirador Cruz del Cóndor · Todos los derechos reservados.\nEste sitio web es un proyecto de guía independiente de terceros dedicado a compartir información precisa sobre el Mirador Cruz del Cóndor. No estamos afiliados con el gobierno peruano ni ninguna autoridad oficial.", made: "Este sitio web es un proyecto de guía independiente de terceros. Hecho para exploradores y aprendices.", linksTitle: "Enlaces Relacionados", links: [
      { name: "Ministerio de Comercio Exterior y Turismo de Perú", url: "https://www.gob.pe/mincetur" },
      { name: "Servicio Nacional de Áreas Naturales Protegidas por el Estado de Perú", url: "https://www.gob.pe/sernanp" },
      { name: "Guía Oficial del Cañón del Colca", url: "https://www.peru.travel/es/atractivos/canon-del-colca" },
      { name: "Guía de Turismo de la Región Arequipa", url: "https://www.peru.travel/es/destinos/arequipa" },
      { name: "Gobierno Regional de Arequipa", url: "https://www.gob.pe/regionarequipa" }
    ]}
  },

  qu: {
    nav: { about: "Qhaway", ecology: "Yachay", culture: "Kultura", bestTime: "Allin Punchaw", visiting: "Puriy", transportation: "Chaykamuy", tips: "Yachay", gallery: "Rikuy", reviews: "Niykuna", faq: "Tapuykuna", location: "Maypi" },
    hero: { tagline: "Arequipa, Piruw · Cañón del Colca", title: "Cruz del Cóndor Mirador", subtitle: "Mirador Cruz del Cóndor · Cañón del Colca", cta: "Rikuy" },
    rating: { reviews: "niykuna", source: "Google niykuna" },
    about: {
      title: "Qhaway",
      p1: "Cruz del Cóndor Mirador nisqa Cañón del Colca, Arequipa, Piruwpi tiyan. Kayqa Cóndor Andino (Vultur gryphus) rikuy paq allin lugarmi. Cañón del Colca nisqa tikanpura aswan hanaq cañonkunamanta, 4,160 mitru hanaq.\n\nMiradorninqa cruz unuq rumimanta, Cóndor Andino purinawan. Paqarina 7:30-9:00, cóndor purin. Cóndorqa 3.2 mitru iskay patakunawan, hatun p'isqu.",
      p2: "Miradorqa 24 ura kachkan. Allin punchawqa 7:30-9:00. Extranjero runakunaqa 70 PEN pagan. Miradorpi parking, rikuy, tiendakuna. Watapi achka runakuna hamun cóndorta rikuy.",
      highlights: { title: "Rikuy", items: ["Cóndor rikuy: Tikanpura aswan allin", "Cañón hanaq: 4,160 mitru", "Allin punchaw: 7:30-9:00", "Qullqi: 70 PEN extranjero", "Maypi: Arequipa, Cañón del Colca"] },
      bestTime: { title: "Allin Punchaw", content: "Paqarina 7:30 - 9:00 allin\nCóndor purin", tip: "💡 Yachay: Paqarina hamuy" }
    },
    ecology: {
      subtitle: "Yachay | Cóndor Phaway",
      content: "Cóndor phawayta munanki? 7:30 - 9:00 AM allinmi. Inti q'uñichin, wayra wichayman purin. Cóndorqa hatun p'isqu (15 kg), wayrawan phawan, mana kallpata usuchinchu.\n💡 **Yachay:** Cóndor phawaspaqa samasqallam kachkan."
    },
    culture: {
      subtitle: "Yachay | Cóndor Yachay (Cosmovisión Andina)",
      content: "Inka yachaypi kinsa pacha kan:\n• **Uku Pacha:** Amaru (Amaru)\n• **Kay Pacha:** Puma (Puma)\n• **Hanan Pacha:** Cóndor (Cóndor)\nCóndorqa Hanan Pachamanta apamun, Apukunawan rimaspa. Runakunaq almantapas apan."
    },
    visiting: {
      title: "Puriy",
      hours: { title: "Punchaw", content: "24 ura\nSapa punchaw", note: "⚠️ 7:30-9:00 cóndor rikuy." },
      price: { title: "Qullqi", content: "Extranjero: 70 PEN\nPiruw runakuna: 10 PEN\nLlaqtakuna: Mana qullqiyuqchu", note: "⚠️ Efectivo apamuy." },
      duration: { title: "Unay", content: "1 - 2 ura", note: "Colca Cañonwan: 1 punchaw." },
      tips: { title: "Apamuy", items: ["Ch'irita (patsallapi chiri)", "Intita amachakuy", "Binoculares", "Yaku", "Cámara"] },
      route: { title: "Puriy", content: "1. Arequipa-manta lluqsiy 5:00 AM\n2. Mirador-man 3 ura\n3. Cóndorta rikuy 1-2 ura\n4. Yanque, Chivay puriy" }
    },
    transportation: {
      title: "Chaykamuy",
      airport: { title: "Lima nisqamanta", content: "Lima nisqapi 1000 km, 12-15 ura. Tukuyn puriquqkuna Arequipa-man hamun.", options: [
        { name: "Anta + Auto", price: "$100 - $200", time: "1.5 ura + 3 ura", steps: ["Lima-manta Arequipa-man anta", "Arequipa-manta tour", "Tour allin"] },
        { name: "Ómnibus", price: "$20 - $40", time: "12-15 ura", steps: ["Lima-manta ómnibus", "Arequipa-man chayamuy"] }
      ]},
      city: { title: "Arequipa nisqamanta", content: "Arequipa-manta 150 km, 3 ura. Google Maps-mi maskuy.", steps: ["Tour apamuy", "Auto alquilay", "Chivay-man pasay"] },
      selfDrive: { title: "Kuti puriy", content: "Arequipa-manta allin. 5:00 AM lluqsiy.", steps: ["Google Maps-mi maskuy", "Kuti puriy", "5:00 AM lluqsiy"] }
    },
    tips: { title: "Yachay", items: [
      "7:30 AM-man ñawpa hamuy",
      "Cóndorta rikuy",
      "Binoculares apamuy",
      "Intita amachakuy",
      "Ch'irita apamuy",
      "Basurata mana saqiykuychu"
    ] },
    gallery: { title: "Rikuy", viewMore: "Google Maps nisqapi astawan rikuy" },
    reviews: { title: "Niykuna", subtitle: "Colca nispaq niykuna", viewMore: "Astawan niykuna" },
    faq: { title: "Tapuykuna", subtitle: "Yachay", items: [
      { question: "Hayk'aq kachkan?", answer: "24 ura. 7:30-9:00 cóndor rikuy." },
      { question: "Qullqi paganan chá?", answer: "Extranjero: 70 PEN." },
      { question: "Imapitachá cóndorta rikuy atikun?", answer: "7:30-9:00 AM. Kay punchawpi cóndor purin." },
      { question: "Maymantá chayamuy atikun?", answer: "Arequipa-manta 3 ura. Google Maps-mi maskuy." },
      { question: "Yachay munay?", answer: "Ch'irita, intita amachakuy, cóndorta rikuy." },
      { question: "Maypipas rikuy atikun?", answer: "Chivay, Yanque, Arequipa." }
    ]},
    location: { title: "Maypipas", address: "93QV+FH San Juan de Chuccho\nCañón del Colca, Arequipa, Piruw", openMaps: "Google Maps nisqapi maytapas rikuy" },
    footer: { callToAction: "Pachamamata yupaychay. Cóndorta amachay.", text: "© 2026 Cruz del Cóndor Mirador. Kayqa puriy yachay.", made: "Kayqa puriy yachay.", linksTitle: "Imakunata", links: [
      { name: "MINCETUR", url: "https://www.gob.pe/mincetur" },
      { name: "SERNANP", url: "https://www.gob.pe/sernanp" },
      { name: "Colca Cañon", url: "https://www.peru.travel/es/atractivos/canon-del-colca" },
      { name: "Arequipa", url: "https://www.peru.travel/es/destinos/arequipa" },
      { name: "Gobierno Arequipa", url: "https://www.gob.pe/regionarequipa" }
    ]}
  }
};
