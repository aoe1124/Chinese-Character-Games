// 三字经数据
const threeCharacterData = [
    {
        id: 1,
        text: "人之初，性本善",
        pinyin: "rén zhī chū, xìng běn shàn",
        characters: [
            {
                char: "人",
                pinyin: "rén",
                options: ["人", "入", "八", "大"]
            },
            {
                char: "之",
                pinyin: "zhī",
                options: ["之", "乏", "么", "云"]
            },
            {
                char: "初",
                pinyin: "chū",
                options: ["初", "切", "始", "扣"]
            },
            {
                char: "性",
                pinyin: "xìng",
                options: ["性", "往", "怀", "忙"]
            },
            {
                char: "本",
                pinyin: "běn",
                options: ["本", "木", "体", "夲"]
            },
            {
                char: "善",
                pinyin: "shàn",
                options: ["善", "着", "普", "暮"]
            }
        ]
    },
    {
        id: 2,
        text: "性相近，习相远",
        pinyin: "xìng xiāng jìn, xí xiāng yuǎn",
        characters: [
            {
                char: "性",
                pinyin: "xìng",
                options: ["性", "往", "怀", "忙"]
            },
            {
                char: "相",
                pinyin: "xiāng",
                options: ["相", "想", "香", "向"]
            },
            {
                char: "近",
                pinyin: "jìn",
                options: ["近", "进", "斤", "尽"]
            },
            {
                char: "习",
                pinyin: "xí",
                options: ["习", "司", "写", "字"]
            },
            {
                char: "相",
                pinyin: "xiāng",
                options: ["相", "想", "香", "向"]
            },
            {
                char: "远",
                pinyin: "yuǎn",
                options: ["远", "元", "云", "运"]
            }
        ]
    },
    {
        id: 3,
        text: "苟不教，性乃迁",
        pinyin: "gǒu bù jiāo, xìng nǎi qiān",
        characters: [
            {
                char: "苟",
                pinyin: "gǒu",
                options: ["苟", "句", "狗", "构"]
            },
            {
                char: "不",
                pinyin: "bù",
                options: ["不", "木", "本", "术"]
            },
            {
                char: "教",
                pinyin: "jiāo",
                options: ["教", "较", "校", "交"]
            },
            {
                char: "性",
                pinyin: "xìng",
                options: ["性", "往", "怀", "忙"]
            },
            {
                char: "乃",
                pinyin: "nǎi",
                options: ["乃", "及", "仍", "之"]
            },
            {
                char: "迁",
                pinyin: "qiān",
                options: ["迁", "千", "仟", "迂"]
            }
        ]
    },
    {
        id: 4,
        text: "教之道，贵以专",
        pinyin: "jiāo zhī dào, guì yǐ zhuān",
        characters: [
            {
                char: "教",
                pinyin: "jiāo",
                options: ["教", "较", "校", "交"]
            },
            {
                char: "之",
                pinyin: "zhī",
                options: ["之", "乏", "么", "云"]
            },
            {
                char: "道",
                pinyin: "dào",
                options: ["道", "导", "首", "首"]
            },
            {
                char: "贵",
                pinyin: "guì",
                options: ["贵", "责", "财", "买"]
            },
            {
                char: "以",
                pinyin: "yǐ",
                options: ["以", "已", "己", "巳"]
            },
            {
                char: "专",
                pinyin: "zhuān",
                options: ["专", "传", "砖", "转"]
            }
        ]
    },
    {
        id: 5,
        text: "昔孟母，择邻处",
        pinyin: "xī mèng mǔ, zé lín chǔ",
        characters: [
            {
                char: "昔",
                pinyin: "xī",
                options: ["昔", "夕", "汐", "西"]
            },
            {
                char: "孟",
                pinyin: "mèng",
                options: ["孟", "猛", "盟", "蒙"]
            },
            {
                char: "母",
                pinyin: "mǔ",
                options: ["母", "每", "毎", "海"]
            },
            {
                char: "择",
                pinyin: "zé",
                options: ["择", "泽", "责", "则"]
            },
            {
                char: "邻",
                pinyin: "lín",
                options: ["邻", "林", "临", "淋"]
            },
            {
                char: "处",
                pinyin: "chǔ",
                options: ["处", "除", "储", "楚"]
            }
        ]
    },
    {
        id: 6,
        text: "子不学，断机杼",
        pinyin: "zǐ bù xué, duàn jī zhù",
        characters: [
            {
                char: "子",
                pinyin: "zǐ",
                options: ["子", "字", "仔", "孜"]
            },
            {
                char: "不",
                pinyin: "bù",
                options: ["不", "木", "本", "术"]
            },
            {
                char: "学",
                pinyin: "xué",
                options: ["学", "觉", "鸟", "写"]
            },
            {
                char: "断",
                pinyin: "duàn",
                options: ["断", "短", "缺", "决"]
            },
            {
                char: "机",
                pinyin: "jī",
                options: ["机", "几", "肌", "飞"]
            },
            {
                char: "杼",
                pinyin: "zhù",
                options: ["杼", "住", "注", "主"]
            }
        ]
    },
    {
        id: 7,
        text: "窦燕山，有义方",
        pinyin: "dòu yàn shān, yǒu yì fāng",
        characters: [
            {
                char: "窦",
                pinyin: "dòu",
                options: ["窦", "豆", "痘", "读"]
            },
            {
                char: "燕",
                pinyin: "yàn",
                options: ["燕", "雁", "焰", "烟"]
            },
            {
                char: "山",
                pinyin: "shān",
                options: ["山", "川", "仙", "岗"]
            },
            {
                char: "有",
                pinyin: "yǒu",
                options: ["有", "友", "又", "右"]
            },
            {
                char: "义",
                pinyin: "yì",
                options: ["义", "议", "仪", "宜"]
            },
            {
                char: "方",
                pinyin: "fāng",
                options: ["方", "房", "防", "放"]
            }
        ]
    },
    {
        id: 8,
        text: "教五子，名俱扬",
        pinyin: "jiāo wǔ zǐ, míng jù yáng",
        characters: [
            {
                char: "教",
                pinyin: "jiāo",
                options: ["教", "较", "校", "交"]
            },
            {
                char: "五",
                pinyin: "wǔ",
                options: ["五", "午", "伍", "武"]
            },
            {
                char: "子",
                pinyin: "zǐ",
                options: ["子", "字", "仔", "孜"]
            },
            {
                char: "名",
                pinyin: "míng",
                options: ["名", "明", "鸣", "命"]
            },
            {
                char: "俱",
                pinyin: "jù",
                options: ["俱", "具", "惧", "居"]
            },
            {
                char: "扬",
                pinyin: "yáng",
                options: ["扬", "阳", "杨", "洋"]
            }
        ]
    },
    {
        id: 9,
        text: "养不教，父之过",
        pinyin: "yǎng bù jiāo, fù zhī guò",
        characters: [
            {
                char: "养",
                pinyin: "yǎng",
                options: ["养", "样", "痒", "洋"]
            },
            {
                char: "不",
                pinyin: "bù",
                options: ["不", "木", "本", "术"]
            },
            {
                char: "教",
                pinyin: "jiāo",
                options: ["教", "较", "校", "交"]
            },
            {
                char: "父",
                pinyin: "fù",
                options: ["父", "爸", "爷", "付"]
            },
            {
                char: "之",
                pinyin: "zhī",
                options: ["之", "乏", "么", "云"]
            },
            {
                char: "过",
                pinyin: "guò",
                options: ["过", "锅", "国", "果"]
            }
        ]
    },
    {
        id: 10,
        text: "教不严，师之惰",
        pinyin: "jiāo bù yán, shī zhī duò",
        characters: [
            {
                char: "教",
                pinyin: "jiāo",
                options: ["教", "较", "校", "交"]
            },
            {
                char: "不",
                pinyin: "bù",
                options: ["不", "木", "本", "术"]
            },
            {
                char: "严",
                pinyin: "yán",
                options: ["严", "岩", "炎", "言"]
            },
            {
                char: "师",
                pinyin: "shī",
                options: ["师", "狮", "诗", "施"]
            },
            {
                char: "之",
                pinyin: "zhī",
                options: ["之", "乏", "么", "云"]
            },
            {
                char: "惰",
                pinyin: "duò",
                options: ["惰", "堕", "跺", "踱"]
            }
        ]
    },
    {
        id: 11,
        text: "子不学，非所宜",
        pinyin: "zǐ bù xué, fēi suǒ yí",
        characters: [
            {
                char: "子",
                pinyin: "zǐ",
                options: ["子", "字", "仔", "孜"]
            },
            {
                char: "不",
                pinyin: "bù",
                options: ["不", "木", "本", "术"]
            },
            {
                char: "学",
                pinyin: "xué",
                options: ["学", "觉", "鸟", "写"]
            },
            {
                char: "非",
                pinyin: "fēi",
                options: ["非", "飞", "排", "菲"]
            },
            {
                char: "所",
                pinyin: "suǒ",
                options: ["所", "处", "房", "斤"]
            },
            {
                char: "宜",
                pinyin: "yí",
                options: ["宜", "仪", "议", "义"]
            }
        ]
    },
    {
        id: 12,
        text: "幼不学，老何为",
        pinyin: "yòu bù xué, lǎo hé wéi",
        characters: [
            {
                char: "幼",
                pinyin: "yòu",
                options: ["幼", "约", "纤", "细"]
            },
            {
                char: "不",
                pinyin: "bù",
                options: ["不", "木", "本", "术"]
            },
            {
                char: "学",
                pinyin: "xué",
                options: ["学", "觉", "鸟", "写"]
            },
            {
                char: "老",
                pinyin: "lǎo",
                options: ["老", "考", "孝", "者"]
            },
            {
                char: "何",
                pinyin: "hé",
                options: ["何", "河", "可", "阿"]
            },
            {
                char: "为",
                pinyin: "wéi",
                options: ["为", "办", "做", "干"]
            }
        ]
    },
    {
        id: 13,
        text: "玉不琢，不成器",
        pinyin: "yù bù zhuó, bù chéng qì",
        characters: [
            {
                char: "玉",
                pinyin: "yù",
                options: ["玉", "王", "主", "玊"]
            },
            {
                char: "不",
                pinyin: "bù",
                options: ["不", "木", "本", "术"]
            },
            {
                char: "琢",
                pinyin: "zhuó",
                options: ["琢", "着", "捉", "浊"]
            },
            {
                char: "不",
                pinyin: "bù",
                options: ["不", "木", "本", "术"]
            },
            {
                char: "成",
                pinyin: "chéng",
                options: ["成", "城", "诚", "盛"]
            },
            {
                char: "器",
                pinyin: "qì",
                options: ["器", "具", "械", "皿"]
            }
        ]
    },
    {
        id: 14,
        text: "人不学，不知义",
        pinyin: "rén bù xué, bù zhī yì",
        characters: [
            {
                char: "人",
                pinyin: "rén",
                options: ["人", "入", "八", "大"]
            },
            {
                char: "不",
                pinyin: "bù",
                options: ["不", "木", "本", "术"]
            },
            {
                char: "学",
                pinyin: "xué",
                options: ["学", "觉", "鸟", "写"]
            },
            {
                char: "不",
                pinyin: "bù",
                options: ["不", "木", "本", "术"]
            },
            {
                char: "知",
                pinyin: "zhī",
                options: ["知", "智", "识", "见"]
            },
            {
                char: "义",
                pinyin: "yì",
                options: ["义", "议", "仪", "宜"]
            }
        ]
    },
    {
        id: 15,
        text: "为人子，方少时",
        pinyin: "wéi rén zǐ, fāng shào shí",
        characters: [
            {
                char: "为",
                pinyin: "wéi",
                options: ["为", "办", "做", "干"]
            },
            {
                char: "人",
                pinyin: "rén",
                options: ["人", "入", "八", "大"]
            },
            {
                char: "子",
                pinyin: "zǐ",
                options: ["子", "字", "仔", "孜"]
            },
            {
                char: "方",
                pinyin: "fāng",
                options: ["方", "房", "防", "放"]
            },
            {
                char: "少",
                pinyin: "shào",
                options: ["少", "小", "沙", "纱"]
            },
            {
                char: "时",
                pinyin: "shí",
                options: ["时", "是", "实", "识"]
            }
        ]
    },
    {
        id: 16,
        text: "亲师友，习礼仪",
        pinyin: "qīn shī yǒu, xí lǐ yí",
        characters: [
            {
                char: "亲",
                pinyin: "qīn",
                options: ["亲", "新", "亲", "清"]
            },
            {
                char: "师",
                pinyin: "shī",
                options: ["师", "狮", "诗", "施"]
            },
            {
                char: "友",
                pinyin: "yǒu",
                options: ["友", "有", "又", "右"]
            },
            {
                char: "习",
                pinyin: "xí",
                options: ["习", "司", "写", "字"]
            },
            {
                char: "礼",
                pinyin: "lǐ",
                options: ["礼", "体", "社", "札"]
            },
            {
                char: "仪",
                pinyin: "yí",
                options: ["仪", "义", "议", "宜"]
            }
        ]
    },
    {
        id: 17,
        text: "香九龄，能温席",
        pinyin: "xiāng jiǔ líng, néng wēn xí",
        characters: [
            {
                char: "香",
                pinyin: "xiāng",
                options: ["香", "想", "相", "响"]
            },
            {
                char: "九",
                pinyin: "jiǔ",
                options: ["九", "久", "玖", "酒"]
            },
            {
                char: "龄",
                pinyin: "líng",
                options: ["龄", "零", "玲", "铃"]
            },
            {
                char: "能",
                pinyin: "néng",
                options: ["能", "态", "熊", "熏"]
            },
            {
                char: "温",
                pinyin: "wēn",
                options: ["温", "暖", "混", "渴"]
            },
            {
                char: "席",
                pinyin: "xí",
                options: ["席", "座", "位", "坐"]
            }
        ]
    },
    {
        id: 18,
        text: "孝于亲，所当执",
        pinyin: "xiào yú qīn, suǒ dāng zhí",
        characters: [
            {
                char: "孝",
                pinyin: "xiào",
                options: ["孝", "考", "老", "教"]
            },
            {
                char: "于",
                pinyin: "yú",
                options: ["于", "干", "千", "子"]
            },
            {
                char: "亲",
                pinyin: "qīn",
                options: ["亲", "新", "亲", "清"]
            },
            {
                char: "所",
                pinyin: "suǒ",
                options: ["所", "处", "房", "斤"]
            },
            {
                char: "当",
                pinyin: "dāng",
                options: ["当", "档", "挡", "裆"]
            },
            {
                char: "执",
                pinyin: "zhí",
                options: ["执", "挚", "拉", "持"]
            }
        ]
    },
    {
        id: 19,
        text: "首孝悌，次见闻",
        pinyin: "shǒu xiào tì, cì jiàn wén",
        characters: [
            {
                char: "首",
                pinyin: "shǒu",
                options: ["首", "道", "导", "首"]
            },
            {
                char: "孝",
                pinyin: "xiào",
                options: ["孝", "考", "老", "教"]
            },
            {
                char: "悌",
                pinyin: "tì",
                options: ["悌", "第", "弟", "梯"]
            },
            {
                char: "次",
                pinyin: "cì",
                options: ["次", "资", "姿", "恣"]
            },
            {
                char: "见",
                pinyin: "jiàn",
                options: ["见", "现", "观", "视"]
            },
            {
                char: "闻",
                pinyin: "wén",
                options: ["闻", "问", "门", "们"]
            }
        ]
    },
    {
        id: 20,
        text: "知某数，识某文",
        pinyin: "zhī mǒu shù, shí mǒu wén",
        characters: [
            {
                char: "知",
                pinyin: "zhī",
                options: ["知", "智", "识", "见"]
            },
            {
                char: "某",
                pinyin: "mǒu",
                options: ["某", "谋", "媒", "煤"]
            },
            {
                char: "数",
                pinyin: "shù",
                options: ["数", "树", "术", "述"]
            },
            {
                char: "识",
                pinyin: "shí",
                options: ["识", "视", "见", "知"]
            },
            {
                char: "某",
                pinyin: "mǒu",
                options: ["某", "谋", "媒", "煤"]
            },
            {
                char: "文",
                pinyin: "wén",
                options: ["文", "闻", "问", "纹"]
            }
        ]
    },
    {
        id: 21,
        text: "一而十，十而百",
        pinyin: "yī ér shí, shí ér bǎi",
        characters: [
            {
                char: "一",
                pinyin: "yī",
                options: ["一", "二", "三", "七"]
            },
            {
                char: "而",
                pinyin: "ér",
                options: ["而", "耳", "胥", "再"]
            },
            {
                char: "十",
                pinyin: "shí",
                options: ["十", "干", "什", "斗"]
            },
            {
                char: "十",
                pinyin: "shí",
                options: ["十", "干", "什", "斗"]
            },
            {
                char: "而",
                pinyin: "ér",
                options: ["而", "耳", "胥", "再"]
            },
            {
                char: "百",
                pinyin: "bǎi",
                options: ["百", "白", "佰", "陌"]
            }
        ]
    },
    {
        id: 22,
        text: "百而千，千而万",
        pinyin: "bǎi ér qiān, qiān ér wàn",
        characters: [
            {
                char: "百",
                pinyin: "bǎi",
                options: ["百", "白", "佰", "陌"]
            },
            {
                char: "而",
                pinyin: "ér",
                options: ["而", "耳", "胥", "再"]
            },
            {
                char: "千",
                pinyin: "qiān",
                options: ["千", "仟", "迁", "芊"]
            },
            {
                char: "千",
                pinyin: "qiān",
                options: ["千", "仟", "迁", "芊"]
            },
            {
                char: "而",
                pinyin: "ér",
                options: ["而", "耳", "胥", "再"]
            },
            {
                char: "万",
                pinyin: "wàn",
                options: ["万", "方", "亿", "萬"]
            }
        ]
    },
    {
        id: 23,
        text: "三才者，天地人",
        pinyin: "sān cái zhě, tiān dì rén",
        characters: [
            {
                char: "三",
                pinyin: "sān",
                options: ["三", "二", "一", "四"]
            },
            {
                char: "才",
                pinyin: "cái",
                options: ["才", "材", "财", "在"]
            },
            {
                char: "者",
                pinyin: "zhě",
                options: ["者", "老", "考", "煮"]
            },
            {
                char: "天",
                pinyin: "tiān",
                options: ["天", "夫", "大", "太"]
            },
            {
                char: "地",
                pinyin: "dì",
                options: ["地", "她", "池", "也"]
            },
            {
                char: "人",
                pinyin: "rén",
                options: ["人", "入", "八", "大"]
            }
        ]
    },
    {
        id: 24,
        text: "三光者，日月星",
        pinyin: "sān guāng zhě, rì yuè xīng",
        characters: [
            {
                char: "三",
                pinyin: "sān",
                options: ["三", "二", "一", "四"]
            },
            {
                char: "光",
                pinyin: "guāng",
                options: ["光", "广", "江", "洋"]
            },
            {
                char: "者",
                pinyin: "zhě",
                options: ["者", "老", "考", "煮"]
            },
            {
                char: "日",
                pinyin: "rì",
                options: ["日", "白", "目", "曰"]
            },
            {
                char: "月",
                pinyin: "yuè",
                options: ["月", "有", "肉", "青"]
            },
            {
                char: "星",
                pinyin: "xīng",
                options: ["星", "生", "晨", "辰"]
            }
        ]
    },
    {
        id: 25,
        text: "三纲者，君臣义",
        pinyin: "sān gāng zhě, jūn chén yì",
        characters: [
            {
                char: "三",
                pinyin: "sān",
                options: ["三", "二", "一", "四"]
            },
            {
                char: "纲",
                pinyin: "gāng",
                options: ["纲", "网", "钢", "刚"]
            },
            {
                char: "者",
                pinyin: "zhě",
                options: ["者", "老", "考", "煮"]
            },
            {
                char: "君",
                pinyin: "jūn",
                options: ["君", "群", "尊", "居"]
            },
            {
                char: "臣",
                pinyin: "chén",
                options: ["臣", "巨", "臦", "监"]
            },
            {
                char: "义",
                pinyin: "yì",
                options: ["义", "议", "仪", "宜"]
            }
        ]
    },
    {
        id: 26,
        text: "父子亲，夫妇顺",
        pinyin: "fù zǐ qīn, fū fù shùn",
        characters: [
            {
                char: "父",
                pinyin: "fù",
                options: ["父", "爸", "爷", "付"]
            },
            {
                char: "子",
                pinyin: "zǐ",
                options: ["子", "字", "仔", "孜"]
            },
            {
                char: "亲",
                pinyin: "qīn",
                options: ["亲", "新", "亲", "清"]
            },
            {
                char: "夫",
                pinyin: "fū",
                options: ["夫", "夫", "大", "太"]
            },
            {
                char: "妇",
                pinyin: "fù",
                options: ["妇", "女", "好", "姑"]
            },
            {
                char: "顺",
                pinyin: "shùn",
                options: ["顺", "须", "原", "川"]
            }
        ]
    },
    {
        id: 27,
        text: "曰春夏，曰秋冬",
        pinyin: "yuē chūn xià, yuē qiū dōng",
        characters: [
            {
                char: "曰",
                pinyin: "yuē",
                options: ["曰", "日", "目", "白"]
            },
            {
                char: "春",
                pinyin: "chūn",
                options: ["春", "秋", "夏", "冬"]
            },
            {
                char: "夏",
                pinyin: "xià",
                options: ["夏", "复", "复", "愛"]
            },
            {
                char: "曰",
                pinyin: "yuē",
                options: ["曰", "日", "目", "白"]
            },
            {
                char: "秋",
                pinyin: "qiū",
                options: ["秋", "愁", "春", "冬"]
            },
            {
                char: "冬",
                pinyin: "dōng",
                options: ["冬", "各", "备", "备"]
            }
        ]
    },
    {
        id: 28,
        text: "此四时，运不穷",
        pinyin: "cǐ sì shí, yùn bù qióng",
        characters: [
            {
                char: "此",
                pinyin: "cǐ",
                options: ["此", "些", "柴", "北"]
            },
            {
                char: "四",
                pinyin: "sì",
                options: ["四", "西", "死", "回"]
            },
            {
                char: "时",
                pinyin: "shí",
                options: ["时", "是", "实", "识"]
            },
            {
                char: "运",
                pinyin: "yùn",
                options: ["运", "云", "转", "连"]
            },
            {
                char: "不",
                pinyin: "bù",
                options: ["不", "木", "本", "术"]
            },
            {
                char: "穷",
                pinyin: "qióng",
                options: ["穷", "空", "穹", "窮"]
            }
        ]
    },
    {
        id: 29,
        text: "曰南北，曰西东",
        pinyin: "yuē nán běi, yuē xī dōng",
        characters: [
            {
                char: "曰",
                pinyin: "yuē",
                options: ["曰", "日", "目", "白"]
            },
            {
                char: "南",
                pinyin: "nán",
                options: ["南", "北", "西", "东"]
            },
            {
                char: "北",
                pinyin: "běi",
                options: ["北", "南", "西", "东"]
            },
            {
                char: "曰",
                pinyin: "yuē",
                options: ["曰", "日", "目", "白"]
            },
            {
                char: "西",
                pinyin: "xī",
                options: ["西", "东", "南", "北"]
            },
            {
                char: "东",
                pinyin: "dōng",
                options: ["东", "西", "南", "北"]
            }
        ]
    },
    {
        id: 30,
        text: "此四方，应乎中",
        pinyin: "cǐ sì fāng, yìng hū zhōng",
        characters: [
            {
                char: "此",
                pinyin: "cǐ",
                options: ["此", "些", "柴", "北"]
            },
            {
                char: "四",
                pinyin: "sì",
                options: ["四", "西", "死", "回"]
            },
            {
                char: "方",
                pinyin: "fāng",
                options: ["方", "房", "防", "放"]
            },
            {
                char: "应",
                pinyin: "yìng",
                options: ["应", "答", "当", "映"]
            },
            {
                char: "乎",
                pinyin: "hū",
                options: ["乎", "呼", "于", "夫"]
            },
            {
                char: "中",
                pinyin: "zhōng",
                options: ["中", "仲", "钟", "忠"]
            }
        ]
    },
    {
        id: 31,
        text: "水火木，金土工",
        pinyin: "shuǐ huǒ mù, jīn tǔ gōng",
        characters: [
            {
                char: "水",
                pinyin: "shuǐ",
                options: ["水", "永", "冰", "泳"]
            },
            {
                char: "火",
                pinyin: "huǒ",
                options: ["火", "炎", "灭", "灯"]
            },
            {
                char: "木",
                pinyin: "mù",
                options: ["木", "本", "术", "朱"]
            },
            {
                char: "金",
                pinyin: "jīn",
                options: ["金", "钱", "银", "铜"]
            },
            {
                char: "土",
                pinyin: "tǔ",
                options: ["土", "士", "壤", "地"]
            },
            {
                char: "工",
                pinyin: "gōng",
                options: ["工", "功", "攻", "江"]
            }
        ]
    },
    {
        id: 32,
        text: "曰闰余，成岁功",
        pinyin: "yuē rùn yú, chéng suì gōng",
        characters: [
            {
                char: "曰",
                pinyin: "yuē",
                options: ["曰", "日", "目", "白"]
            },
            {
                char: "闰",
                pinyin: "rùn",
                options: ["闰", "润", "闲", "闵"]
            },
            {
                char: "余",
                pinyin: "yú",
                options: ["余", "除", "佘", "徐"]
            },
            {
                char: "成",
                pinyin: "chéng",
                options: ["成", "城", "诚", "盛"]
            },
            {
                char: "岁",
                pinyin: "suì",
                options: ["岁", "戊", "戌", "或"]
            },
            {
                char: "功",
                pinyin: "gōng",
                options: ["功", "工", "攻", "江"]
            }
        ]
    },
    {
        id: 33,
        text: "天干者，甲乙丙",
        pinyin: "tiān gān zhě, jiǎ yǐ bǐng",
        characters: [
            {
                char: "天",
                pinyin: "tiān",
                options: ["天", "夫", "大", "太"]
            },
            {
                char: "干",
                pinyin: "gān",
                options: ["干", "千", "于", "平"]
            },
            {
                char: "者",
                pinyin: "zhě",
                options: ["者", "老", "考", "煮"]
            },
            {
                char: "甲",
                pinyin: "jiǎ",
                options: ["甲", "申", "由", "电"]
            },
            {
                char: "乙",
                pinyin: "yǐ",
                options: ["乙", "已", "己", "巳"]
            },
            {
                char: "丙",
                pinyin: "bǐng",
                options: ["丙", "两", "丙", "内"]
            }
        ]
    },
    {
        id: 34,
        text: "丁戊己，庚辛壬",
        pinyin: "dīng wù jǐ, gēng xīn rén",
        characters: [
            {
                char: "丁",
                pinyin: "dīng",
                options: ["丁", "打", "灯", "订"]
            },
            {
                char: "戊",
                pinyin: "wù",
                options: ["戊", "戌", "成", "戍"]
            },
            {
                char: "己",
                pinyin: "jǐ",
                options: ["己", "已", "巳", "乙"]
            },
            {
                char: "庚",
                pinyin: "gēng",
                options: ["庚", "康", "床", "库"]
            },
            {
                char: "辛",
                pinyin: "xīn",
                options: ["辛", "幸", "辜", "辱"]
            },
            {
                char: "壬",
                pinyin: "rén",
                options: ["壬", "任", "王", "全"]
            }
        ]
    },
    {
        id: 35,
        text: "癸十干，日竟陈",
        pinyin: "guǐ shí gān, rì jìng chén",
        characters: [
            {
                char: "癸",
                pinyin: "guǐ",
                options: ["癸", "登", "发", "疫"]
            },
            {
                char: "十",
                pinyin: "shí",
                options: ["十", "干", "什", "斗"]
            },
            {
                char: "干",
                pinyin: "gān",
                options: ["干", "千", "于", "平"]
            },
            {
                char: "日",
                pinyin: "rì",
                options: ["日", "白", "目", "曰"]
            },
            {
                char: "竟",
                pinyin: "jìng",
                options: ["竟", "竞", "境", "镜"]
            },
            {
                char: "陈",
                pinyin: "chén",
                options: ["陈", "阵", "除", "陆"]
            }
        ]
    },
    {
        id: 36,
        text: "地支者，子丑寅",
        pinyin: "dì zhī zhě, zǐ chǒu yín",
        characters: [
            {
                char: "地",
                pinyin: "dì",
                options: ["地", "她", "池", "也"]
            },
            {
                char: "支",
                pinyin: "zhī",
                options: ["支", "枝", "技", "攴"]
            },
            {
                char: "者",
                pinyin: "zhě",
                options: ["者", "老", "考", "煮"]
            },
            {
                char: "子",
                pinyin: "zǐ",
                options: ["子", "字", "仔", "孜"]
            },
            {
                char: "丑",
                pinyin: "chǒu",
                options: ["丑", "丐", "千", "手"]
            },
            {
                char: "寅",
                pinyin: "yín",
                options: ["寅", "演", "预", "京"]
            }
        ]
    },
    {
        id: 37,
        text: "卯辰巳，午未申",
        pinyin: "mǎo chén sì, wǔ wèi shēn",
        characters: [
            {
                char: "卯",
                pinyin: "mǎo",
                options: ["卯", "印", "卵", "却"]
            },
            {
                char: "辰",
                pinyin: "chén",
                options: ["辰", "晨", "震", "振"]
            },
            {
                char: "巳",
                pinyin: "sì",
                options: ["巳", "已", "己", "乙"]
            },
            {
                char: "午",
                pinyin: "wǔ",
                options: ["午", "牛", "年", "千"]
            },
            {
                char: "未",
                pinyin: "wèi",
                options: ["未", "末", "夫", "天"]
            },
            {
                char: "申",
                pinyin: "shēn",
                options: ["申", "由", "电", "甲"]
            }
        ]
    },
    {
        id: 38,
        text: "酉戌亥，十二辰",
        pinyin: "yǒu xū hài, shí èr chén",
        characters: [
            {
                char: "酉",
                pinyin: "yǒu",
                options: ["酉", "配", "酋", "酊"]
            },
            {
                char: "戌",
                pinyin: "xū",
                options: ["戌", "戊", "成", "戍"]
            },
            {
                char: "亥",
                pinyin: "hài",
                options: ["亥", "亢", "京", "亦"]
            },
            {
                char: "十",
                pinyin: "shí",
                options: ["十", "�����", "什", "��"]
            },
            {
                char: "二",
                pinyin: "èr",
                options: ["二", "一", "三", "七"]
            },
            {
                char: "辰",
                pinyin: "chén",
                options: ["辰", "晨", "震", "振"]
            }
        ]
    },
    {
        id: 39,
        text: "子鼠丑，牛寅虎",
        pinyin: "zǐ shǔ chǒu, niú yín hǔ",
        characters: [
            {
                char: "子",
                pinyin: "zǐ",
                options: ["子", "字", "仔", "孜"]
            },
            {
                char: "鼠",
                pinyin: "shǔ",
                options: ["鼠", "鼻", "臭", "舅"]
            },
            {
                char: "丑",
                pinyin: "chǒu",
                options: ["丑", "丐", "千", "手"]
            },
            {
                char: "牛",
                pinyin: "niú",
                options: ["牛", "午", "生", "特"]
            },
            {
                char: "寅",
                pinyin: "yín",
                options: ["寅", "演", "预", "京"]
            },
            {
                char: "虎",
                pinyin: "hǔ",
                options: ["虎", "虑", "虚", "虫"]
            }
        ]
    },
    {
        id: 40,
        text: "卯兔辰，龙巳蛇",
        pinyin: "mǎo tù chén, lóng sì shé",
        characters: [
            {
                char: "卯",
                pinyin: "mǎo",
                options: ["卯", "印", "卵", "却"]
            },
            {
                char: "兔",
                pinyin: "tù",
                options: ["兔", "免", "冤", "象"]
            },
            {
                char: "辰",
                pinyin: "chén",
                options: ["辰", "晨", "震", "振"]
            },
            {
                char: "龙",
                pinyin: "lóng",
                options: ["龙", "尤", "电", "龟"]
            },
            {
                char: "巳",
                pinyin: "sì",
                options: ["巳", "已", "己", "乙"]
            },
            {
                char: "蛇",
                pinyin: "shé",
                options: ["蛇", "它", "虫", "舌"]
            }
        ]
    },
    {
        id: 41,
        text: "午马未，羊申猴",
        pinyin: "wǔ mǎ wèi, yáng shēn hóu",
        characters: [
            {
                char: "午",
                pinyin: "wǔ",
                options: ["午", "牛", "年", "千"]
            },
            {
                char: "马",
                pinyin: "mǎ",
                options: ["马", "码", "骑", "驰"]
            },
            {
                char: "未",
                pinyin: "wèi",
                options: ["未", "末", "夫", "天"]
            },
            {
                char: "羊",
                pinyin: "yáng",
                options: ["羊", "样", "洋", "详"]
            },
            {
                char: "申",
                pinyin: "shēn",
                options: ["申", "由", "电", "甲"]
            },
            {
                char: "猴",
                pinyin: "hóu",
                options: ["猴", "候", "侯", "猫"]
            }
        ]
    },
    {
        id: 42,
        text: "酉鸡戌，狗亥猪",
        pinyin: "yǒu jī xū, gǒu hài zhū",
        characters: [
            {
                char: "酉",
                pinyin: "y��u",
                options: ["酉", "西", "配", "酒"]
            },
            {
                char: "鸡",
                pinyin: "jī",
                options: ["鸡", "鸟", "乌", "鸭"]
            },
            {
                char: "戌",
                pinyin: "xū",
                options: ["戌", "戊", "成", "戍"]
            },
            {
                char: "狗",
                pinyin: "gǒu",
                options: ["狗", "犬", "狼", "猫"]
            },
            {
                char: "亥",
                pinyin: "hài",
                options: ["亥", "亦", "京", "充"]
            },
            {
                char: "猪",
                pinyin: "zhū",
                options: ["猪", "豕", "家", "猫"]
            }
        ]
    },
    {
        id: 43,
        text: "曰黄道，日所躔",
        pinyin: "yuē huáng dào, rì suǒ chán",
        characters: [
            {
                char: "曰",
                pinyin: "yuē",
                options: ["曰", "日", "目", "白"]
            },
            {
                char: "黄",
                pinyin: "huáng",
                options: ["黄", "皇", "凰", "煌"]
            },
            {
                char: "道",
                pinyin: "dào",
                options: ["道", "导", "首", "道"]
            },
            {
                char: "日",
                pinyin: "rì",
                options: ["日", "白", "目", "曰"]
            },
            {
                char: "所",
                pinyin: "suǒ",
                options: ["所", "处", "房", "斤"]
            },
            {
                char: "躔",
                pinyin: "chán",
                options: ["躔", "蹈", "跳", "践"]
            }
        ]
    },
    {
        id: 44,
        text: "星辰宿，列张陈",
        pinyin: "xīng chén sù, liè zhāng chén",
        characters: [
            {
                char: "星",
                pinyin: "xīng",
                options: ["星", "生", "晨", "辰"]
            },
            {
                char: "辰",
                pinyin: "chén",
                options: ["辰", "晨", "震", "振"]
            },
            {
                char: "宿",
                pinyin: "sù",
                options: ["宿", "宵", "寝", "夜"]
            },
            {
                char: "列",
                pinyin: "liè",
                options: ["列", "例", "烈", "裂"]
            },
            {
                char: "张",
                pinyin: "zhāng",
                options: ["张", "章", "长", "帐"]
            },
            {
                char: "陈",
                pinyin: "chén",
                options: ["陈", "阵", "除", "陆"]
            }
        ]
    },
    {
        id: 45,
        text: "寒来暑，往秋收",
        pinyin: "hán lái shǔ, wǎng qiū shōu",
        characters: [
            {
                char: "寒",
                pinyin: "hán",
                options: ["寒", "塞", "冷", "冰"]
            },
            {
                char: "来",
                pinyin: "lái",
                options: ["来", "未", "末", "朱"]
            },
            {
                char: "暑",
                pinyin: "shǔ",
                options: ["暑", "署", "热", "煮"]
            },
            {
                char: "往",
                pinyin: "wǎng",
                options: ["往", "住", "任", "主"]
            },
            {
                char: "秋",
                pinyin: "qiū",
                options: ["秋", "愁", "春", "冬"]
            },
            {
                char: "收",
                pinyin: "shōu",
                options: ["收", "受", "授", "取"]
            }
        ]
    },
    {
        id: 46,
        text: "冬藏冰，夏纳凉",
        pinyin: "dōng cáng bīng, xià nà liáng",
        characters: [
            {
                char: "冬",
                pinyin: "dōng",
                options: ["冬", "各", "备", "备"]
            },
            {
                char: "藏",
                pinyin: "cáng",
                options: ["藏", "葬", "臧", "脏"]
            },
            {
                char: "冰",
                pinyin: "bīng",
                options: ["冰", "水", "永", "泳"]
            },
            {
                char: "夏",
                pinyin: "xià",
                options: ["夏", "复", "复", "愛"]
            },
            {
                char: "纳",
                pinyin: "nà",
                options: ["纳", "纷", "绍", "给"]
            },
            {
                char: "凉",
                pinyin: "liáng",
                options: ["凉", "京", "凊", "冷"]
            }
        ]
    },
    {
        id: 47,
        text: "有二气，上下交",
        pinyin: "yǒu èr qì, shàng xià jiāo",
        characters: [
            {
                char: "有",
                pinyin: "yǒu",
                options: ["有", "友", "又", "右"]
            },
            {
                char: "二",
                pinyin: "èr",
                options: ["二", "一", "三", "七"]
            },
            {
                char: "气",
                pinyin: "qì",
                options: ["气", "汽", "氧", "氛"]
            },
            {
                char: "上",
                pinyin: "shàng",
                options: ["上", "下", "止", "卡"]
            },
            {
                char: "下",
                pinyin: "xià",
                options: ["下", "上", "止", "卡"]
            },
            {
                char: "交",
                pinyin: "jiāo",
                options: ["交", "校", "较", "教"]
            }
        ]
    },
    {
        id: 48,
        text: "有二仪，日月昭",
        pinyin: "yǒu èr yí, rì yuè zhāo",
        characters: [
            {
                char: "有",
                pinyin: "yǒu",
                options: ["有", "友", "又", "右"]
            },
            {
                char: "二",
                pinyin: "èr",
                options: ["二", "一", "三", "七"]
            },
            {
                char: "仪",
                pinyin: "yí",
                options: ["仪", "义", "议", "宜"]
            },
            {
                char: "日",
                pinyin: "rì",
                options: ["日", "白", "目", "曰"]
            },
            {
                char: "月",
                pinyin: "yuè",
                options: ["月", "有", "肉", "青"]
            },
            {
                char: "昭",
                pinyin: "zhāo",
                options: ["昭", "照", "明", "招"]
            }
        ]
    },
    {
        id: 49,
        text: "有二曜，日月行",
        pinyin: "yǒu èr yào, rì yuè xíng",
        characters: [
            {
                char: "有",
                pinyin: "yǒu",
                options: ["有", "友", "又", "右"]
            },
            {
                char: "二",
                pinyin: "èr",
                options: ["二", "一", "三", "七"]
            },
            {
                char: "曜",
                pinyin: "yào",
                options: ["曜", "耀", "燿", "烁"]
            },
            {
                char: "日",
                pinyin: "rì",
                options: ["日", "白", "目", "曰"]
            },
            {
                char: "月",
                pinyin: "yuè",
                options: ["月", "有", "肉", "青"]
            },
            {
                char: "行",
                pinyin: "xíng",
                options: ["行", "列", "衍", "街"]
            }
        ]
    },
    {
        id: 50,
        text: "有四时，调阴阳",
        pinyin: "yǒu sì shí, tiáo yīn yáng",
        characters: [
            {
                char: "有",
                pinyin: "yǒu",
                options: ["有", "友", "又", "右"]
            },
            {
                char: "四",
                pinyin: "sì",
                options: ["四", "西", "死", "回"]
            },
            {
                char: "时",
                pinyin: "shí",
                options: ["时", "是", "实", "识"]
            },
            {
                char: "调",
                pinyin: "tiáo",
                options: ["调", "调", "周", "周"]
            },
            {
                char: "阴",
                pinyin: "yīn",
                options: ["阴", "阳", "隐", "陰"]
            },
            {
                char: "阳",
                pinyin: "yáng",
                options: ["阳", "阴", "暘", "陽"]
            }
        ]
    },
    {
        id: 51,
        text: "有五行，水土彰",
        pinyin: "yǒu wǔ xíng, shuǐ tǔ zhāng",
        characters: [
            {
                char: "有",
                pinyin: "yǒu",
                options: ["有", "友", "又", "右"]
            },
            {
                char: "五",
                pinyin: "wǔ",
                options: ["五", "午", "伍", "武"]
            },
            {
                char: "行",
                pinyin: "xíng",
                options: ["行", "列", "衍", "街"]
            },
            {
                char: "水",
                pinyin: "shuǐ",
                options: ["水", "永", "冰", "泳"]
            },
            {
                char: "土",
                pinyin: "tǔ",
                options: ["土", "士", "壤", "地"]
            },
            {
                char: "彰",
                pinyin: "zhāng",
                options: ["彰", "章", "璋", "障"]
            }
        ]
    },
    {
        id: 52,
        text: "金木火，谓之常",
        pinyin: "jīn mù huǒ, wèi zhī cháng",
        characters: [
            {
                char: "金",
                pinyin: "jīn",
                options: ["金", "钱", "银", "铜"]
            },
            {
                char: "木",
                pinyin: "mù",
                options: ["木", "本", "术", "朱"]
            },
            {
                char: "火",
                pinyin: "huǒ",
                options: ["火", "炎", "灭", "灯"]
            },
            {
                char: "谓",
                pinyin: "wèi",
                options: ["谓", "为", "语", "说"]
            },
            {
                char: "之",
                pinyin: "zhī",
                options: ["之", "乏", "么", "云"]
            },
            {
                char: "常",
                pinyin: "cháng",
                options: ["常", "尚", "堂", "掌"]
            }
        ]
    },
    {
        id: 53,
        text: "稻粱菽，麦黍稷",
        pinyin: "dào liáng shū, mài shǔ jì",
        characters: [
            {
                char: "稻",
                pinyin: "dào",
                options: ["稻", "道", "导", "首"]
            },
            {
                char: "粱",
                pinyin: "liáng",
                options: ["粱", "梁", "良", "量"]
            },
            {
                char: "菽",
                pinyin: "shū",
                options: ["菽", "豆", "叔", "熟"]
            },
            {
                char: "麦",
                pinyin: "mài",
                options: ["麦", "来", "米", "麸"]
            },
            {
                char: "黍",
                pinyin: "shǔ",
                options: ["黍", "署", "暑", "鼠"]
            },
            {
                char: "稷",
                pinyin: "jì",
                options: ["稷", "籍", "积", "绩"]
            }
        ]
    },
    {
        id: 54,
        text: "此六谷，人所食",
        pinyin: "cǐ liù gǔ, rén suǒ shí",
        characters: [
            {
                char: "此",
                pinyin: "cǐ",
                options: ["此", "些", "柴", "北"]
            },
            {
                char: "六",
                pinyin: "liù",
                options: ["六", "陆", "遛", "溜"]
            },
            {
                char: "谷",
                pinyin: "gǔ",
                options: ["谷", "穀", "俗", "容"]
            },
            {
                char: "人",
                pinyin: "rén",
                options: ["人", "入", "八", "大"]
            },
            {
                char: "所",
                pinyin: "suǒ",
                options: ["所", "处", "房", "斤"]
            },
            {
                char: "食",
                pinyin: "shí",
                options: ["食", "饮", "饭", "餐"]
            }
        ]
    },
    {
        id: 55,
        text: "马牛羊，鸡犬豕",
        pinyin: "mǎ niú yáng, jī quǎn shǐ",
        characters: [
            {
                char: "马",
                pinyin: "mǎ",
                options: ["马", "码", "骑", "驰"]
            },
            {
                char: "牛",
                pinyin: "niú",
                options: ["牛", "午", "生", "特"]
            },
            {
                char: "羊",
                pinyin: "yáng",
                options: ["羊", "样", "洋", "详"]
            },
            {
                char: "鸡",
                pinyin: "jī",
                options: ["鸡", "鸟", "乌", "鸭"]
            },
            {
                char: "犬",
                pinyin: "quǎn",
                options: ["犬", "狗", "猫", "狼"]
            },
            {
                char: "豕",
                pinyin: "shǐ",
                options: ["豕", "猪", "家", "豚"]
            }
        ]
    },
    {
        id: 56,
        text: "此六畜，人所饲",
        pinyin: "cǐ liù chù, rén suǒ sì",
        characters: [
            {
                char: "此",
                pinyin: "cǐ",
                options: ["此", "些", "柴", "北"]
            },
            {
                char: "六",
                pinyin: "liù",
                options: ["六", "陆", "遛", "溜"]
            },
            {
                char: "畜",
                pinyin: "chù",
                options: ["畜", "蓄", "音", "吝"]
            },
            {
                char: "人",
                pinyin: "rén",
                options: ["人", "入", "八", "大"]
            },
            {
                char: "所",
                pinyin: "suǒ",
                options: ["所", "处", "房", "斤"]
            },
            {
                char: "饲",
                pinyin: "sì",
                options: ["饲", "食", "饮", "养"]
            }
        ]
    },
    {
        id: 57,
        text: "女慕贞，男效才",
        pinyin: "nǚ mù zhēn, nán xiào cái",
        characters: [
            {
                char: "女",
                pinyin: "nǚ",
                options: ["女", "妇", "好", "姑"]
            },
            {
                char: "慕",
                pinyin: "mù",
                options: ["慕", "募", "暮", "幕"]
            },
            {
                char: "贞",
                pinyin: "zhēn",
                options: ["贞", "真", "针", "珍"]
            },
            {
                char: "男",
                pinyin: "nán",
                options: ["男", "甲", "力", "田"]
            },
            {
                char: "效",
                pinyin: "xiào",
                options: ["效", "校", "较", "教"]
            },
            {
                char: "才",
                pinyin: "cái",
                options: ["才", "材", "财", "在"]
            }
        ]
    },
    {
        id: 58,
        text: "知过必，改得能",
        pinyin: "zhī guò bì, gǎi dé néng",
        characters: [
            {
                char: "知",
                pinyin: "zhī",
                options: ["知", "智", "识", "见"]
            },
            {
                char: "过",
                pinyin: "guò",
                options: ["过", "锅", "国", "果"]
            },
            {
                char: "必",
                pinyin: "bì",
                options: ["必", "心", "忆", "要"]
            },
            {
                char: "改",
                pinyin: "gǎi",
                options: ["改", "攺", "变", "更"]
            },
            {
                char: "得",
                pinyin: "dé",
                options: ["得", "德", "恩", "思"]
            },
            {
                char: "能",
                pinyin: "néng",
                options: ["能", "态", "熊", ""]
            }
        ]
    },
    {
        id: 59,
        text: "莫既倦，又从事",
        pinyin: "mò jì juàn, yòu cóng shì",
        characters: [
            {
                char: "莫",
                pinyin: "mò",
                options: ["莫", "慕", "暮", "墓"]
            },
            {
                char: "既",
                pinyin: "jì",
                options: ["既", "即", "概", "慨"]
            },
            {
                char: "倦",
                pinyin: "juàn",
                options: ["倦", "卷", "眷", "绢"]
            },
            {
                char: "又",
                pinyin: "yòu",
                options: ["又", "友", "反", "双"]
            },
            {
                char: "从",
                pinyin: "cóng",
                options: ["从", "众", "丛", "纵"]
            },
            {
                char: "事",
                pinyin: "shì",
                options: ["事", "使", "史", "吏"]
            }
        ]
    },
    {
        id: 60,
        text: "玉不琢，不成器",
        pinyin: "yù bù zhuó, bù chéng qì",
        characters: [
            {
                char: "玉",
                pinyin: "yù",
                options: ["玉", "王", "主", "玊"]
            },
            {
                char: "不",
                pinyin: "bù",
                options: ["不", "木", "本", "术"]
            },
            {
                char: "琢",
                pinyin: "zhuó",
                options: ["琢", "着", "捉", "浊"]
            },
            {
                char: "不",
                pinyin: "bù",
                options: ["不", "木", "本", "术"]
            },
            {
                char: "成",
                pinyin: "chéng",
                options: ["成", "城", "诚", "盛"]
            },
            {
                char: "器",
                pinyin: "qì",
                options: ["器", "具", "械", "皿"]
            }
        ]
    },
    {
        id: 61,
        text: "人不学，不知道",
        pinyin: "rén bù xué, bù zhī dào",
        characters: [
            {
                char: "人",
                pinyin: "rén",
                options: ["人", "入", "八", "大"]
            },
            {
                char: "不",
                pinyin: "bù",
                options: ["不", "木", "本", "术"]
            },
            {
                char: "学",
                pinyin: "xué",
                options: ["学", "觉", "鸟", "写"]
            },
            {
                char: "不",
                pinyin: "bù",
                options: ["不", "木", "本", "术"]
            },
            {
                char: "知",
                pinyin: "zhī",
                options: ["知", "智", "识", "见"]
            },
            {
                char: "道",
                pinyin: "dào",
                options: ["道", "导", "首", "道"]
            }
        ]
    },
    {
        id: 62,
        text: "为人子，方少时",
        pinyin: "wéi rén zǐ, fāng shào shí",
        characters: [
            {
                char: "为",
                pinyin: "wéi",
                options: ["为", "办", "做", "干"]
            },
            {
                char: "人",
                pinyin: "rén",
                options: ["人", "入", "八", "大"]
            },
            {
                char: "子",
                pinyin: "zǐ",
                options: ["子", "字", "仔", "孜"]
            },
            {
                char: "方",
                pinyin: "fāng",
                options: ["方", "房", "防", "放"]
            },
            {
                char: "少",
                pinyin: "shào",
                options: ["少", "小", "沙", "纱"]
            },
            {
                char: "时",
                pinyin: "shí",
                options: ["时", "是", "实", "识"]
            }
        ]
    },
    {
        id: 63,
        text: "首孝悌，次见闻",
        pinyin: "shǒu xiào tì, cì jiàn wén",
        characters: [
            {
                char: "首",
                pinyin: "shǒu",
                options: ["首", "道", "导", "首"]
            },
            {
                char: "孝",
                pinyin: "xiào",
                options: ["孝", "考", "老", "教"]
            },
            {
                char: "悌",
                pinyin: "tì",
                options: ["悌", "第", "弟", "梯"]
            },
            {
                char: "次",
                pinyin: "cì",
                options: ["次", "资", "姿", "恣"]
            },
            {
                char: "见",
                pinyin: "jiàn",
                options: ["见", "现", "观", "视"]
            },
            {
                char: "闻",
                pinyin: "wén",
                options: ["闻", "问", "门", "们"]
            }
        ]
    },
    {
        id: 64,
        text: "读书法，有三到",
        pinyin: "dú shū fǎ, yǒu sān dào",
        characters: [
            {
                char: "读",
                pinyin: "dú",
                options: ["读", "渎", "督", "独"]
            },
            {
                char: "书",
                pinyin: "shū",
                options: ["书", "史", "写", "字"]
            },
            {
                char: "法",
                pinyin: "fǎ",
                options: ["法", "去", "发", "友"]
            },
            {
                char: "有",
                pinyin: "yǒu",
                options: ["有", "友", "又", "右"]
            },
            {
                char: "三",
                pinyin: "sān",
                options: ["三", "二", "一", "四"]
            },
            {
                char: "到",
                pinyin: "dào",
                options: ["到", "至", "致", "道"]
            }
        ]
    },
    {
        id: 65,
        text: "心眼口，信皆要",
        pinyin: "xīn yǎn kǒu, xìn jiē yào",
        characters: [
            {
                char: "心",
                pinyin: "xīn",
                options: ["心", "必", "忆", "忘"]
            },
            {
                char: "眼",
                pinyin: "yǎn",
                options: ["眼", "目", "睛", "看"]
            },
            {
                char: "口",
                pinyin: "kǒu",
                options: ["口", "日", "目", "田"]
            },
            {
                char: "信",
                pinyin: "xìn",
                options: ["信", "言", "诚", "实"]
            },
            {
                char: "皆",
                pinyin: "jiē",
                options: ["皆", "阶", "接", "街"]
            },
            {
                char: "要",
                pinyin: "yào",
                options: ["要", "耍", "妖", "腰"]
            }
        ]
    },
    {
        id: 66,
        text: "方读此，勿慕彼",
        pinyin: "fāng dú cǐ, wù mù bǐ",
        characters: [
            {
                char: "方",
                pinyin: "fāng",
                options: ["方", "房", "防", "放"]
            },
            {
                char: "读",
                pinyin: "dú",
                options: ["读", "渎", "督", "独"]
            },
            {
                char: "此",
                pinyin: "cǐ",
                options: ["此", "些", "柴", "北"]
            },
            {
                char: "勿",
                pinyin: "wù",
                options: ["勿", "物", "忽", "匆"]
            },
            {
                char: "慕",
                pinyin: "mù",
                options: ["慕", "募", "暮", "幕"]
            },
            {
                char: "彼",
                pinyin: "bǐ",
                options: ["彼", "皮", "被", "波"]
            }
        ]
    },
    {
        id: 67,
        text: "此既终，慎终始",
        pinyin: "cǐ jì zhōng, shèn zhōng shǐ",
        characters: [
            {
                char: "此",
                pinyin: "cǐ",
                options: ["此", "些", "柴", "北"]
            },
            {
                char: "既",
                pinyin: "jì",
                options: ["既", "即", "概", "慨"]
            },
            {
                char: "终",
                pinyin: "zhōng",
                options: ["终", "中", "钟", "忠"]
            },
            {
                char: "慎",
                pinyin: "shèn",
                options: ["慎", "愼", "真", "镇"]
            },
            {
                char: "终",
                pinyin: "zhōng",
                options: ["终", "中", "钟", "忠"]
            },
            {
                char: "始",
                pinyin: "shǐ",
                options: ["始", "治", "台", "怡"]
            }
        ]
    },
    {
        id: 68,
        text: "如六经，始可读",
        pinyin: "rú liù jīng, shǐ kě dú",
        characters: [
            {
                char: "如",
                pinyin: "rú",
                options: ["如", "知", "你", "她"]
            },
            {
                char: "六",
                pinyin: "liù",
                options: ["六", "陆", "遛", "溜"]
            },
            {
                char: "经",
                pinyin: "jīng",
                options: ["经", "径", "茎", "轻"]
            },
            {
                char: "始",
                pinyin: "shǐ",
                options: ["始", "治", "台", "怡"]
            },
            {
                char: "可",
                pinyin: "kě",
                options: ["可", "何", "河", "阿"]
            },
            {
                char: "读",
                pinyin: "dú",
                options: ["读", "渎", "督", "独"]
            }
        ]
    },
    {
        id: 69,
        text: "诗书易，礼春秋",
        pinyin: "shī shū yì, lǐ chūn qiū",
        characters: [
            {
                char: "诗",
                pinyin: "shī",
                options: ["诗", "持", "待", "诸"]
            },
            {
                char: "书",
                pinyin: "shū",
                options: ["书", "史", "写", "字"]
            },
            {
                char: "易",
                pinyin: "yì",
                options: ["易", "昜", "汤", "场"]
            },
            {
                char: "礼",
                pinyin: "lǐ",
                options: ["礼", "体", "社", "札"]
            },
            {
                char: "春",
                pinyin: "chūn",
                options: ["春", "秋", "夏", "冬"]
            },
            {
                char: "秋",
                pinyin: "qiū",
                options: ["秋", "愁", "春", "冬"]
            }
        ]
    },
    {
        id: 70,
        text: "号六经，当讲求",
        pinyin: "hào liù jīng, dāng jiǎng qiú",
        characters: [
            {
                char: "号",
                pinyin: "hào",
                options: ["号", "豪", "毫", "浩"]
            },
            {
                char: "六",
                pinyin: "liù",
                options: ["六", "陆", "遛", "溜"]
            },
            {
                char: "经",
                pinyin: "jīng",
                options: ["经", "径", "茎", "轻"]
            },
            {
                char: "当",
                pinyin: "dāng",
                options: ["当", "档", "挡", "裆"]
            },
            {
                char: "讲",
                pinyin: "jiǎng",
                options: ["讲", "将", "奖", "浆"]
            },
            {
                char: "求",
                pinyin: "qiú",
                options: ["求", "球", "救", "究"]
            }
        ]
    },
    {
        id: 71,
        text: "有连山，有归藏",
        pinyin: "yǒu lián shān, yǒu guī cáng",
        characters: [
            {
                char: "有",
                pinyin: "yǒu",
                options: ["有", "友", "又", "右"]
            },
            {
                char: "连",
                pinyin: "lián",
                options: ["连", "练", "炼", "链"]
            },
            {
                char: "山",
                pinyin: "shān",
                options: ["山", "川", "仙", "岗"]
            },
            {
                char: "有",
                pinyin: "yǒu",
                options: ["有", "友", "又", "右"]
            },
            {
                char: "归",
                pinyin: "guī",
                options: ["归", "规", "龟", "圭"]
            },
            {
                char: "藏",
                pinyin: "cáng",
                options: ["藏", "葬", "臧", "脏"]
            }
        ]
    },
    {
        id: 72,
        text: "有周易，三易详",
        pinyin: "yǒu zhōu yì, sān yì xiáng",
        characters: [
            {
                char: "有",
                pinyin: "yǒu",
                options: ["有", "友", "又", "右"]
            },
            {
                char: "周",
                pinyin: "zhōu",
                options: ["周", "调", "同", "回"]
            },
            {
                char: "易",
                pinyin: "yì",
                options: ["易", "昜", "汤", "场"]
            },
            {
                char: "三",
                pinyin: "sān",
                options: ["三", "二", "一", "四"]
            },
            {
                char: "易",
                pinyin: "yì",
                options: ["易", "昜", "汤", "场"]
            },
            {
                char: "详",
                pinyin: "xiáng",
                options: ["详", "祥", "翔", "样"]
            }
        ]
    },
    {
        id: 73,
        text: "有典谟，有训诰",
        pinyin: "yǒu diǎn mó, yǒu xùn gào",
        characters: [
            {
                char: "有",
                pinyin: "yǒu",
                options: ["有", "友", "又", "右"]
            },
            {
                char: "典",
                pinyin: "diǎn",
                options: ["典", "点", "店", "奠"]
            },
            {
                char: "谟",
                pinyin: "mó",
                options: ["谟", "模", "摸", "漠"]
            },
            {
                char: "有",
                pinyin: "yǒu",
                options: ["有", "友", "又", "右"]
            },
            {
                char: "训",
                pinyin: "xùn",
                options: ["训", "讯", "迅", "汛"]
            },
            {
                char: "诰",
                pinyin: "gào",
                options: ["诰", "告", "造", "浩"]
            }
        ]
    },
    {
        id: 74,
        text: "有誓命，书之奥",
        pinyin: "yǒu shì mìng, shū zhī ào",
        characters: [
            {
                char: "有",
                pinyin: "yǒu",
                options: ["有", "友", "又", "右"]
            },
            {
                char: "誓",
                pinyin: "shì",
                options: ["誓", "逝", "势", "世"]
            },
            {
                char: "命",
                pinyin: "mìng",
                options: ["命", "名", "铭", "明"]
            },
            {
                char: "书",
                pinyin: "shū",
                options: ["书", "史", "写", "字"]
            },
            {
                char: "之",
                pinyin: "zhī",
                options: ["之", "乏", "么", "云"]
            },
            {
                char: "奥",
                pinyin: "ào",
                options: ["奥", "澳", "懊", "傲"]
            }
        ]
    },
    {
        id: 75,
        text: "我周公，作周礼",
        pinyin: "wǒ zhōu gōng, zuò zhōu lǐ",
        characters: [
            {
                char: "我",
                pinyin: "wǒ",
                options: ["我", "找", "成", "或"]
            },
            {
                char: "周",
                pinyin: "zhōu",
                options: ["周", "调", "同", "回"]
            },
            {
                char: "公",
                pinyin: "gōng",
                options: ["公", "分", "八", "共"]
            },
            {
                char: "作",
                pinyin: "zuò",
                options: ["作", "做", "坐", "座"]
            },
            {
                char: "周",
                pinyin: "zhōu",
                options: ["周", "调", "同", "回"]
            },
            {
                char: "礼",
                pinyin: "lǐ",
                options: ["礼", "体", "社", "札"]
            }
        ]
    },
    {
        id: 76,
        text: "著六官，存治体",
        pinyin: "zhù liù guān, cún zhì tǐ",
        characters: [
            {
                char: "著",
                pinyin: "zhù",
                options: ["著", "着", "注", "驻"]
            },
            {
                char: "六",
                pinyin: "liù",
                options: ["六", "陆", "遛", "溜"]
            },
            {
                char: "官",
                pinyin: "guān",
                options: ["官", "馆", "管", "观"]
            },
            {
                char: "存",
                pinyin: "cún",
                options: ["存", "在", "村", "寸"]
            },
            {
                char: "治",
                pinyin: "zhì",
                options: ["治", "始", "台", "怡"]
            },
            {
                char: "体",
                pinyin: "tǐ",
                options: ["体", "礼", "社", "札"]
            }
        ]
    },
    {
        id: 77,
        text: "大小戴，注礼记",
        pinyin: "dà xiǎo dài, zhù lǐ jì",
        characters: [
            {
                char: "大",
                pinyin: "dà",
                options: ["大", "太", "天", "夫"]
            },
            {
                char: "小",
                pinyin: "xiǎo",
                options: ["小", "少", "沙", "纱"]
            },
            {
                char: "戴",
                pinyin: "dài",
                options: ["戴", "带", "待", "袋"]
            },
            {
                char: "注",
                pinyin: "zhù",
                options: ["注", "主", "住", "驻"]
            },
            {
                char: "礼",
                pinyin: "lǐ",
                options: ["礼", "体", "社", "札"]
            },
            {
                char: "记",
                pinyin: "jì",
                options: ["记", "纪", "忌", "计"]
            }
        ]
    },
    {
        id: 78,
        text: "有毛诗，有三传",
        pinyin: "yǒu máo shī, yǒu sān zhuàn",
        characters: [
            {
                char: "有",
                pinyin: "yǒu",
                options: ["有", "友", "又", "右"]
            },
            {
                char: "毛",
                pinyin: "máo",
                options: ["毛", "茅", "矛", "卯"]
            },
            {
                char: "诗",
                pinyin: "shī",
                options: ["诗", "持", "待", "诸"]
            },
            {
                char: "有",
                pinyin: "yǒu",
                options: ["有", "友", "又", "右"]
            },
            {
                char: "三",
                pinyin: "sān",
                options: ["三", "二", "一", "四"]
            },
            {
                char: "传",
                pinyin: "zhuàn",
                options: ["传", "专", "转", "砖"]
            }
        ]
    },
    {
        id: 79,
        text: "有国语，有春秋",
        pinyin: "yǒu guó yǔ, yǒu chūn qiū",
        characters: [
            {
                char: "有",
                pinyin: "yǒu",
                options: ["有", "友", "又", "右"]
            },
            {
                char: "国",
                pinyin: "guó",
                options: ["国", "果", "因", "回"]
            },
            {
                char: "语",
                pinyin: "yǔ",
                options: ["语", "误", "吾", "悟"]
            },
            {
                char: "有",
                pinyin: "yǒu",
                options: ["有", "友", "又", "右"]
            },
            {
                char: "春",
                pinyin: "chūn",
                options: ["春", "秋", "夏", "冬"]
            },
            {
                char: "秋",
                pinyin: "qiū",
                options: ["秋", "愁", "春", "冬"]
            }
        ]
    },
    {
        id: 80,
        text: "有外传，有国策",
        pinyin: "yǒu wài zhuàn, yǒu guó cè",
        characters: [
            {
                char: "有",
                pinyin: "yǒu",
                options: ["有", "友", "又", "右"]
            },
            {
                char: "外",
                pinyin: "wài",
                options: ["外", "内", "处", "卜"]
            },
            {
                char: "传",
                pinyin: "zhuàn",
                options: ["传", "专", "转", "砖"]
            },
            {
                char: "有",
                pinyin: "yǒu",
                options: ["有", "友", "又", "右"]
            },
            {
                char: "国",
                pinyin: "guó",
                options: ["国", "果", "因", "回"]
            },
            {
                char: "策",
                pinyin: "cè",
                options: ["策", "册", "测", "侧"]
            }
        ]
    },
    {
        id: 81,
        text: "此史籍，方明白",
        pinyin: "cǐ shǐ jí, fāng míng bái",
        characters: [
            {
                char: "此",
                pinyin: "cǐ",
                options: ["此", "些", "柴", "北"]
            },
            {
                char: "史",
                pinyin: "shǐ",
                options: ["史", "使", "吏", "更"]
            },
            {
                char: "籍",
                pinyin: "jí",
                options: ["籍", "积", "绩", "迹"]
            },
            {
                char: "方",
                pinyin: "fāng",
                options: ["方", "房", "防", "放"]
            },
            {
                char: "明",
                pinyin: "míng",
                options: ["明", "名", "命", "铭"]
            },
            {
                char: "白",
                pinyin: "bái",
                options: ["白", "百", "自", "的"]
            }
        ]
    },
    {
        id: 82,
        text: "读诗书，需勤学",
        pinyin: "dú shī shū, xū qín xué",
        characters: [
            {
                char: "读",
                pinyin: "dú",
                options: ["读", "渎", "督", "独"]
            },
            {
                char: "诗",
                pinyin: "shī",
                options: ["诗", "持", "待", "诸"]
            },
            {
                char: "书",
                pinyin: "shū",
                options: ["书", "史", "写", "字"]
            },
            {
                char: "需",
                pinyin: "xū",
                options: ["需", "须", "徐", "叙"]
            },
            {
                char: "勤",
                pinyin: "qín",
                options: ["勤", "琴", "秦", "芹"]
            },
            {
                char: "学",
                pinyin: "xué",
                options: ["学", "觉", "鸟", "写"]
            }
        ]
    },
    {
        id: 83,
        text: "考父作，述圣言",
        pinyin: "kǎo fù zuò, shù shèng yán",
        characters: [
            {
                char: "考",
                pinyin: "kǎo",
                options: ["考", "老", "孝", "教"]
            },
            {
                char: "父",
                pinyin: "fù",
                options: ["父", "爸", "爷", "付"]
            },
            {
                char: "作",
                pinyin: "zuò",
                options: ["作", "做", "坐", "座"]
            },
            {
                char: "述",
                pinyin: "shù",
                options: ["述", "术", "树", "竖"]
            },
            {
                char: "圣",
                pinyin: "shèng",
                options: ["圣", "生", "声", "胜"]
            },
            {
                char: "言",
                pinyin: "yán",
                options: ["言", "音", "谈", "讲"]
            }
        ]
    },
    {
        id: 84,
        text: "礼乐备，治国臣",
        pinyin: "lǐ yuè bèi, zhì guó chén",
        characters: [
            {
                char: "礼",
                pinyin: "lǐ",
                options: ["礼", "体", "社", "札"]
            },
            {
                char: "乐",
                pinyin: "yuè",
                options: ["乐", "药", "约", "月"]
            },
            {
                char: "备",
                pinyin: "bèi",
                options: ["备", "各", "背", "倍"]
            },
            {
                char: "治",
                pinyin: "zhì",
                options: ["治", "始", "台", "怡"]
            },
            {
                char: "国",
                pinyin: "guó",
                options: ["国", "果", "因", "回"]
            },
            {
                char: "臣",
                pinyin: "chén",
                options: ["臣", "巨", "臦", "监"]
            }
        ]
    },
    {
        id: 85,
        text: "读书毕，勿慕逸",
        pinyin: "dú shū bì, wù mù yì",
        characters: [
            {
                char: "读",
                pinyin: "dú",
                options: ["读", "渎", "督", "独"]
            },
            {
                char: "书",
                pinyin: "shū",
                options: ["书", "史", "写", "字"]
            },
            {
                char: "毕",
                pinyin: "bì",
                options: ["毕", "必", "币", "比"]
            },
            {
                char: "勿",
                pinyin: "wù",
                options: ["勿", "物", "忽", "匆"]
            },
            {
                char: "慕",
                pinyin: "mù",
                options: ["慕", "募", "暮", "幕"]
            },
            {
                char: "逸",
                pinyin: "yì",
                options: ["逸", "溢", "艺", "毅"]
            }
        ]
    },
    {
        id: 86,
        text: "圣与贤，可驯致",
        pinyin: "shèng yǔ xián, kě xún zhì",
        characters: [
            {
                char: "圣",
                pinyin: "shèng",
                options: ["圣", "生", "声", "胜"]
            },
            {
                char: "与",
                pinyin: "yǔ",
                options: ["与", "予", "余", "舆"]
            },
            {
                char: "贤",
                pinyin: "xián",
                options: ["贤", "现", "显", "险"]
            },
            {
                char: "可",
                pinyin: "kě",
                options: ["可", "何", "河", "阿"]
            },
            {
                char: "驯",
                pinyin: "xún",
                options: ["驯", "训", "讯", "迅"]
            },
            {
                char: "致",
                pinyin: "zhì",
                options: ["致", "至", "到", "制"]
            }
        ]
    },
    {
        id: 87,
        text: "读书志，在圣贤",
        pinyin: "dú shū zhì, zài shèng xián",
        characters: [
            {
                char: "读",
                pinyin: "dú",
                options: ["读", "渎", "督", "独"]
            },
            {
                char: "书",
                pinyin: "shū",
                options: ["书", "史", "写", "字"]
            },
            {
                char: "志",
                pinyin: "zhì",
                options: ["志", "誌", "意", "忘"]
            },
            {
                char: "在",
                pinyin: "zài",
                options: ["在", "再", "存", "有"]
            },
            {
                char: "圣",
                pinyin: "shèng",
                options: ["圣", "生", "声", "胜"]
            },
            {
                char: "贤",
                pinyin: "xián",
                options: ["贤", "现", "显", "险"]
            }
        ]
    },
    {
        id: 88,
        text: "少时努，老来安",
        pinyin: "shào shí nǔ, lǎo lái ān",
        characters: [
            {
                char: "少",
                pinyin: "sh��o",
                options: ["少", "小", "沙", "纱"]
            },
            {
                char: "时",
                pinyin: "shí",
                options: ["时", "是", "实", "识"]
            },
            {
                char: "努",
                pinyin: "nǔ",
                options: ["努", "怒", "奴", "弩"]
            },
            {
                char: "老",
                pinyin: "lǎo",
                options: ["老", "考", "孝", "者"]
            },
            {
                char: "来",
                pinyin: "lái",
                options: ["来", "未", "末", "朱"]
            },
            {
                char: "安",
                pinyin: "ān",
                options: ["安", "案", "按", "暗"]
            }
        ]
    },
    {
        id: 89,
        text: "有所疑，即师询",
        pinyin: "yǒu suǒ yí, jí shī xún",
        characters: [
            {
                char: "有",
                pinyin: "yǒu",
                options: ["有", "友", "又", "右"]
            },
            {
                char: "所",
                pinyin: "suǒ",
                options: ["所", "处", "房", "斤"]
            },
            {
                char: "疑",
                pinyin: "yí",
                options: ["疑", "凝", "擬", "议"]
            },
            {
                char: "即",
                pinyin: "jí",
                options: ["即", "既", "概", "慨"]
            },
            {
                char: "师",
                pinyin: "shī",
                options: ["师", "狮", "诗", "施"]
            },
            {
                char: "询",
                pinyin: "xún",
                options: ["询", "讯", "训", "迅"]
            }
        ]
    },
    {
        id: 90,
        text: "勤学业，谢师",
        pinyin: "qín xué yè, xiè shī ēn",
        characters: [
            {
                char: "勤",
                pinyin: "qín",
                options: ["勤", "琴", "秦", "芹"]
            },
            {
                char: "学",
                pinyin: "xué",
                options: ["学", "觉", "鸟", "写"]
            },
            {
                char: "业",
                pinyin: "yè",
                options: ["业", "叶", "页", "乘"]
            },
            {
                char: "谢",
                pinyin: "xiè",
                options: ["谢", "射", "榭", "泻"]
            },
            {
                char: "师",
                pinyin: "shī",
                options: ["师", "狮", "诗", "施"]
            },
            {
                char: "恩",
                pinyin: "ēn",
                options: ["恩", "思", "您", "感"]
            }
        ]
    },
    {
        id: 91,
        text: "春风化，雨露均",
        pinyin: "chūn fēng huà, yǔ lù jūn",
        characters: [
            {
                char: "春",
                pinyin: "chūn",
                options: ["春", "秋", "夏", "冬"]
            },
            {
                char: "风",
                pinyin: "fēng",
                options: ["风", "凤", "讽", "枫"]
            },
            {
                char: "化",
                pinyin: "huà",
                options: ["化", "花", "华", "画"]
            },
            {
                char: "雨",
                pinyin: "yǔ",
                options: ["雨", "语", "羽", "宇"]
            },
            {
                char: "露",
                pinyin: "lù",
                options: ["露", "路", "鹿", "录"]
            },
            {
                char: "均",
                pinyin: "jūn",
                options: ["均", "君", "军", "匀"]
            }
        ]
    },
    {
        id: 92,
        text: "父教诲，母训谆",
        pinyin: "fù jiào huì, mǔ xùn zhūn",
        characters: [
            {
                char: "父",
                pinyin: "fù",
                options: ["父", "爸", "爷", "付"]
            },
            {
                char: "教",
                pinyin: "jiào",
                options: ["教", "较", "校", "交"]
            },
            {
                char: "诲",
                pinyin: "huì",
                options: ["诲", "悔", "晦", "慧"]
            },
            {
                char: "母",
                pinyin: "mǔ",
                options: ["母", "每", "毎", "海"]
            },
            {
                char: "训",
                pinyin: "xùn",
                options: ["训", "讯", "迅", "汛"]
            },
            {
                char: "谆",
                pinyin: "zhūn",
                options: ["谆", "准", "淳", "纯"]
            }
        ]
    },
    {
        id: 93,
        text: "兄教弟，友绸缪",
        pinyin: "xiōng jiào dì, yǒu chóu móu",
        characters: [
            {
                char: "兄",
                pinyin: "xiōng",
                options: ["兄", "凶", "胸", "匈"]
            },
            {
                char: "教",
                pinyin: "jiào",
                options: ["教", "较", "校", "交"]
            },
            {
                char: "弟",
                pinyin: "dì",
                options: ["弟", "第", "梯", "悌"]
            },
            {
                char: "友",
                pinyin: "yǒu",
                options: ["友", "有", "又", "右"]
            },
            {
                char: "绸",
                pinyin: "chóu",
                options: ["绸", "稠", "筹", "畴"]
            },
            {
                char: "缪",
                pinyin: "móu",
                options: ["缪", "谬", "缭", "牟"]
            }
        ]
    },
    {
        id: 94,
        text: "晨则省，昏则修",
        pinyin: "chén zé xǐng, hūn zé xiū",
        characters: [
            {
                char: "晨",
                pinyin: "chén",
                options: ["晨", "辰", "震", "振"]
            },
            {
                char: "则",
                pinyin: "zé",
                options: ["则", "责", "泽", "择"]
            },
            {
                char: "省",
                pinyin: "xǐng",
                options: ["省", "醒", "性", "姓"]
            },
            {
                char: "昏",
                pinyin: "hūn",
                options: ["昏", "婚", "惛", "混"]
            },
            {
                char: "则",
                pinyin: "zé",
                options: ["则", "责", "泽", "择"]
            },
            {
                char: "修",
                pinyin: "xiū",
                options: ["修", "休", "秀", "羞"]
            }
        ]
    },
    {
        id: 95,
        text: "读经史，考文字",
        pinyin: "dú jīng shǐ, kǎo wén zì",
        characters: [
            {
                char: "读",
                pinyin: "dú",
                options: ["读", "渎", "督", "独"]
            },
            {
                char: "经",
                pinyin: "jīng",
                options: ["经", "径", "茎", "轻"]
            },
            {
                char: "史",
                pinyin: "shǐ",
                options: ["史", "使", "吏", "更"]
            },
            {
                char: "考",
                pinyin: "kǎo",
                options: ["考", "老", "孝", "教"]
            },
            {
                char: "文",
                pinyin: "wén",
                options: ["文", "闻", "问", "纹"]
            },
            {
                char: "字",
                pinyin: "zì",
                options: ["字", "子", "仔", "孜"]
            }
        ]
    },
    {
        id: 96,
        text: "始则近，终则远",
        pinyin: "shǐ zé jìn, zhōng zé yuǎn",
        characters: [
            {
                char: "始",
                pinyin: "shǐ",
                options: ["始", "治", "台", "怡"]
            },
            {
                char: "则",
                pinyin: "zé",
                options: ["则", "责", "泽", "择"]
            },
            {
                char: "近",
                pinyin: "jìn",
                options: ["近", "进", "斤", "尽"]
            },
            {
                char: "终",
                pinyin: "zhōng",
                options: ["终", "中", "钟", "忠"]
            },
            {
                char: "则",
                pinyin: "zé",
                options: ["则", "责", "泽", "择"]
            },
            {
                char: "远",
                pinyin: "yuǎn",
                options: ["远", "元", "云", "运"]
            }
        ]
    },
    {
        id: 97,
        text: "黎明起，夜深息",
        pinyin: "lí míng qǐ, yè shēn xī",
        characters: [
            {
                char: "黎",
                pinyin: "lí",
                options: ["黎", "离", "梨", "璃"]
            },
            {
                char: "明",
                pinyin: "míng",
                options: ["明", "名", "命", "铭"]
            },
            {
                char: "起",
                pinyin: "qǐ",
                options: ["起", "启", "岂", "企"]
            },
            {
                char: "夜",
                pinyin: "yè",
                options: ["夜", "液", "夕", "亦"]
            },
            {
                char: "深",
                pinyin: "shēn",
                options: ["深", "身", "神", "申"]
            },
            {
                char: "息",
                pinyin: "xī",
                options: ["息", "熄", "悉", "夕"]
            }
        ]
    },
    {
        id: 98,
        text: "老易至，惜寸阴",
        pinyin: "lǎo yì zhì, xī cùn yīn",
        characters: [
            {
                char: "老",
                pinyin: "lǎo",
                options: ["老", "考", "孝", "者"]
            },
            {
                char: "易",
                pinyin: "yì",
                options: ["易", "昜", "汤", "场"]
            },
            {
                char: "至",
                pinyin: "zhì",
                options: ["至", "到", "致", "制"]
            },
            {
                char: "惜",
                pinyin: "xī",
                options: ["惜", "借", "措", "错"]
            },
            {
                char: "寸",
                pinyin: "cùn",
                options: ["寸", "村", "存", "吋"]
            },
            {
                char: "阴",
                pinyin: "yīn",
                options: ["阴", "阳", "隐", "陰"]
            }
        ]
    },
    {
        id: 99,
        text: "岁月深，日月长",
        pinyin: "suì yuè shēn, rì yuè cháng",
        characters: [
            {
                char: "岁",
                pinyin: "suì",
                options: ["岁", "戊", "戌", "或"]
            },
            {
                char: "月",
                pinyin: "yuè",
                options: ["月", "有", "肉", "青"]
            },
            {
                char: "深",
                pinyin: "shēn",
                options: ["深", "身", "神", "申"]
            },
            {
                char: "日",
                pinyin: "rì",
                options: ["日", "白", "目", "曰"]
            },
            {
                char: "月",
                pinyin: "yuè",
                options: ["月", "有", "肉", "青"]
            },
            {
                char: "长",
                pinyin: "cháng",
                options: ["长", "常", "场", "肠"]
            }
        ]
    },
    {
        id: 100,
        text: "勿害虫，勿伤生",
        pinyin: "wù hài chóng, wù shāng shēng",
        characters: [
            {
                char: "勿",
                pinyin: "wù",
                options: ["勿", "物", "忽", "匆"]
            },
            {
                char: "害",
                pinyin: "hài",
                options: ["害", "客", "客", "室"]
            },
            {
                char: "虫",
                pinyin: "chóng",
                options: ["虫", "中", "忠", "虹"]
            },
            {
                char: "勿",
                pinyin: "wù",
                options: ["勿", "物", "忽", "匆"]
            },
            {
                char: "伤",
                pinyin: "shāng",
                options: ["伤", "商", "殇", "场"]
            },
            {
                char: "生",
                pinyin: "shēng",
                options: ["生", "声", "升", "牲"]
            }
        ]
    },
    {
        id: 101,
        text: "仁与义，礼相生",
        pinyin: "rén yǔ yì, lǐ xiāng shēng",
        characters: [
            {
                char: "仁",
                pinyin: "rén",
                options: ["仁", "人", "忍", "认"]
            },
            {
                char: "与",
                pinyin: "yǔ",
                options: ["与", "予", "余", "舆"]
            },
            {
                char: "义",
                pinyin: "yì",
                options: ["义", "议", "仪", "宜"]
            },
            {
                char: "礼",
                pinyin: "lǐ",
                options: ["礼", "体", "社", "札"]
            },
            {
                char: "相",
                pinyin: "xiāng",
                options: ["相", "想", "香", "向"]
            },
            {
                char: "生",
                pinyin: "shēng",
                options: ["生", "声", "升", "牲"]
            }
        ]
    },
    {
        id: 102,
        text: "智与信，行相成",
        pinyin: "zhì yǔ xìn, xíng xiāng chéng",
        characters: [
            {
                char: "智",
                pinyin: "zhì",
                options: ["智", "知", "织", "值"]
            },
            {
                char: "与",
                pinyin: "yǔ",
                options: ["与", "予", "余", "舆"]
            },
            {
                char: "信",
                pinyin: "xìn",
                options: ["信", "言", "诚", "实"]
            },
            {
                char: "行",
                pinyin: "xíng",
                options: ["行", "列", "衍", "街"]
            },
            {
                char: "相",
                pinyin: "xiāng",
                options: ["相", "想", "香", "向"]
            },
            {
                char: "成",
                pinyin: "chéng",
                options: ["成", "城", "诚", "盛"]
            }
        ]
    },
    {
        id: 103,
        text: "温良恭，俭让行",
        pinyin: "wēn liáng gōng, jiǎn ràng xíng",
        characters: [
            {
                char: "温",
                pinyin: "wēn",
                options: ["温", "暖", "混", "渴"]
            },
            {
                char: "良",
                pinyin: "liáng",
                options: ["良", "浪", "娘", "狼"]
            },
            {
                char: "恭",
                pinyin: "gōng",
                options: ["恭", "供", "共", "拱"]
            },
            {
                char: "俭",
                pinyin: "jiǎn",
                options: ["俭", "简", "减", "检"]
            },
            {
                char: "让",
                pinyin: "ràng",
                options: ["让", "嚷", "攘", "壤"]
            },
            {
                char: "行",
                pinyin: "xíng",
                options: ["行", "列", "衍", "街"]
            }
        ]
    },
    {
        id: 104,
        text: "孝悌力，忠信明",
        pinyin: "xiào tì lì, zhōng xìn míng",
        characters: [
            {
                char: "孝",
                pinyin: "xiào",
                options: ["孝", "考", "老", "教"]
            },
            {
                char: "悌",
                pinyin: "tì",
                options: ["悌", "第", "弟", "梯"]
            },
            {
                char: "力",
                pinyin: "lì",
                options: ["力", "办", "加", "���"]
            },
            {
                char: "忠",
                pinyin: "zhōng",
                options: ["忠", "中", "钟", "终"]
            },
            {
                char: "信",
                pinyin: "xìn",
                options: ["信", "言", "诚", "实"]
            },
            {
                char: "明",
                pinyin: "míng",
                options: ["明", "名", "命", "铭"]
            }
        ]
    },
    {
        id: 105,
        text: "谦恭敬，礼义行",
        pinyin: "qiān gōng jìng, lǐ yì xíng",
        characters: [
            {
                char: "谦",
                pinyin: "qiān",
                options: ["谦", "嫌", "歉", "签"]
            },
            {
                char: "恭",
                pinyin: "gōng",
                options: ["恭", "供", "共", "拱"]
            },
            {
                char: "敬",
                pinyin: "jìng",
                options: ["敬", "警", "竟", "境"]
            },
            {
                char: "礼",
                pinyin: "lǐ",
                options: ["礼", "体", "社", "札"]
            },
            {
                char: "义",
                pinyin: "yì",
                options: ["义", "议", "仪", "宜"]
            },
            {
                char: "行",
                pinyin: "xíng",
                options: ["行", "列", "衍", "街"]
            }
        ]
    },
    {
        id: 106,
        text: "德日新，孝当先",
        pinyin: "dé rì xīn, xiào dāng xiān",
        characters: [
            {
                char: "德",
                pinyin: "dé",
                options: ["德", "得", "恩", "思"]
            },
            {
                char: "日",
                pinyin: "rì",
                options: ["日", "白", "目", "曰"]
            },
            {
                char: "新",
                pinyin: "xīn",
                options: ["新", "亲", "薪", "信"]
            },
            {
                char: "孝",
                pinyin: "xiào",
                options: ["孝", "考", "老", "教"]
            },
            {
                char: "当",
                pinyin: "dāng",
                options: ["当", "档", "挡", "裆"]
            },
            {
                char: "先",
                pinyin: "xiān",
                options: ["先", "前", "洗", "见"]
            }
        ]
    },
    {
        id: 107,
        text: "入孝门，见长辈",
        pinyin: "rù xiào mén, jiàn zhǎng bèi",
        characters: [
            {
                char: "入",
                pinyin: "rù",
                options: ["入", "人", "八", "大"]
            },
            {
                char: "孝",
                pinyin: "xiào",
                options: ["孝", "考", "老", "教"]
            },
            {
                char: "门",
                pinyin: "mén",
                options: ["门", "们", "闻", "问"]
            },
            {
                char: "见",
                pinyin: "jiàn",
                options: ["见", "现", "观", "视"]
            },
            {
                char: "长",
                pinyin: "zhǎng",
                options: ["长", "常", "场", "肠"]
            },
            {
                char: "辈",
                pinyin: "bèi",
                options: ["辈", "背", "倍", "贝"]
            }
        ]
    },
    {
        id: 108,
        text: "须恭敬，勿懈怠",
        pinyin: "xū gōng jìng, wù xiè dài",
        characters: [
            {
                char: "须",
                pinyin: "xū",
                options: ["须", "需", "徐", "叙"]
            },
            {
                char: "恭",
                pinyin: "gōng",
                options: ["恭", "供", "共", "拱"]
            },
            {
                char: "敬",
                pinyin: "jìng",
                options: ["敬", "警", "竟", "境"]
            },
            {
                char: "勿",
                pinyin: "wù",
                options: ["勿", "物", "忽", "匆"]
            },
            {
                char: "懈",
                pinyin: "xiè",
                options: ["懈", "解", "械", "谢"]
            },
            {
                char: "怠",
                pinyin: "dài",
                options: ["怠", "待", "殆", "态"]
            }
        ]
    },
    {
        id: 109,
        text: "擅礼仪，敦行检",
        pinyin: "shàn lǐ yí, dūn xíng jiǎn",
        characters: [
            {
                char: "擅",
                pinyin: "shàn",
                options: ["擅", "善", "膳", "缮"]
            },
            {
                char: "礼",
                pinyin: "lǐ",
                options: ["礼", "体", "社", "札"]
            },
            {
                char: "仪",
                pinyin: "yí",
                options: ["仪", "义", "议", "宜"]
            },
            {
                char: "敦",
                pinyin: "dūn",
                options: ["敦", "墩", "蹲", "盾"]
            },
            {
                char: "行",
                pinyin: "xíng",
                options: ["行", "列", "衍", "街"]
            },
            {
                char: "检",
                pinyin: "jiǎn",
                options: ["检", "简", "捡", "俭"]
            }
        ]
    },
    {
        id: 110,
        text: "习礼仪，知廉耻",
        pinyin: "xí lǐ yí, zhī lián chǐ",
        characters: [
            {
                char: "习",
                pinyin: "xí",
                options: ["习", "司", "写", "字"]
            },
            {
                char: "礼",
                pinyin: "lǐ",
                options: ["礼", "体", "社", "札"]
            },
            {
                char: "仪",
                pinyin: "yí",
                options: ["仪", "义", "议", "宜"]
            },
            {
                char: "知",
                pinyin: "zhī",
                options: ["知", "智", "识", "见"]
            },
            {
                char: "廉",
                pinyin: "lián",
                options: ["廉", "连", "帘", "莲"]
            },
            {
                char: "耻",
                pinyin: "chǐ",
                options: ["耻", "恥", "齿", "持"]
            }
        ]
    },
    {
        id: 111,
        text: "读诗书，常温习",
        pinyin: "dú shī shū, cháng wēn xí",
        characters: [
            {
                char: "读",
                pinyin: "dú",
                options: ["读", "渎", "督", "独"]
            },
            {
                char: "诗",
                pinyin: "shī",
                options: ["诗", "持", "待", "诸"]
            },
            {
                char: "书",
                pinyin: "shū",
                options: ["书", "史", "写", "字"]
            },
            {
                char: "常",
                pinyin: "cháng",
                options: ["常", "尚", "堂", "掌"]
            },
            {
                char: "温",
                pinyin: "wēn",
                options: ["温", "暖", "混", "渴"]
            },
            {
                char: "习",
                pinyin: "xí",
                options: ["习", "司", "写", "字"]
            }
        ]
    },
    {
        id: 112,
        text: "业精勤，荒者惰",
        pinyin: "yè jīng qín, huāng zhě duò",
        characters: [
            {
                char: "业",
                pinyin: "yè",
                options: ["业", "叶", "页", "乘"]
            },
            {
                char: "精",
                pinyin: "jīng",
                options: ["精", "睛", "晶", "经"]
            },
            {
                char: "勤",
                pinyin: "qín",
                options: ["勤", "琴", "秦", "芹"]
            },
            {
                char: "荒",
                pinyin: "huāng",
                options: ["荒", "慌", "皇", "黄"]
            },
            {
                char: "者",
                pinyin: "zhě",
                options: ["者", "老", "考", "煮"]
            },
            {
                char: "惰",
                pinyin: "duò",
                options: ["惰", "堕", "跺", "踱"]
            }
        ]
    },
    {
        id: 113,
        text: "戒懒惰，守时节",
        pinyin: "jiè lǎn duò, shǒu shí jié",
        characters: [
            {
                char: "戒",
                pinyin: "jiè",
                options: ["戒", "介", "诫", "界"]
            },
            {
                char: "懒",
                pinyin: "lǎn",
                options: ["懒", "览", "揽", "缆"]
            },
            {
                char: "惰",
                pinyin: "duò",
                options: ["惰", "堕", "跺", "踱"]
            },
            {
                char: "守",
                pinyin: "shǒu",
                options: ["守", "首", "手", "寿"]
            },
            {
                char: "时",
                pinyin: "shí",
                options: ["时", "是", "实", "识"]
            },
            {
                char: "节",
                pinyin: "jié",
                options: ["节", "结", "洁", "杰"]
            }
        ]
    },
    {
        id: 114,
        text: "早睡起，精神爽",
        pinyin: "zǎo shuì qǐ, jīng shén shuǎng",
        characters: [
            {
                char: "早",
                pinyin: "zǎo",
                options: ["早", "草", "朝", "潮"]
            },
            {
                char: "睡",
                pinyin: "shuì",
                options: ["睡", "说", "税", "水"]
            },
            {
                char: "起",
                pinyin: "qǐ",
                options: ["起", "启", "岂", "企"]
            },
            {
                char: "精",
                pinyin: "jīng",
                options: ["精", "睛", "晶", "经"]
            },
            {
                char: "神",
                pinyin: "shén",
                options: ["神", "申", "身", "深"]
            },
            {
                char: "爽",
                pinyin: "shuǎng",
                options: ["爽", "霜", "双", "床"]
            }
        ]
    },
    {
        id: 115,
        text: "体强健，心清朗",
        pinyin: "tǐ qiáng jiàn, xīn qīng lǎng",
        characters: [
            {
                char: "体",
                pinyin: "tǐ",
                options: ["体", "礼", "社", "札"]
            },
            {
                char: "强",
                pinyin: "qiáng",
                options: ["强", "墙", "将", "抢"]
            },
            {
                char: "健",
                pinyin: "jiàn",
                options: ["健", "建", "键", "腱"]
            },
            {
                char: "心",
                pinyin: "xīn",
                options: ["心", "必", "忆", "忘"]
            },
            {
                char: "清",
                pinyin: "qīng",
                options: ["清", "青", "晴", "情"]
            },
            {
                char: "朗",
                pinyin: "lǎng",
                options: ["朗", "郎", "浪", "狼"]
            }
        ]
    },
    {
        id: 116,
        text: "养德性，习礼让",
        pinyin: "yǎng dé xìng, xí lǐ ràng",
        characters: [
            {
                char: "养",
                pinyin: "yǎng",
                options: ["养", "样", "痒", "洋"]
            },
            {
                char: "德",
                pinyin: "dé",
                options: ["德", "得", "恩", "思"]
            },
            {
                char: "性",
                pinyin: "xìng",
                options: ["性", "往", "怀", "忙"]
            },
            {
                char: "习",
                pinyin: "xí",
                options: ["习", "司", "写", "字"]
            },
            {
                char: "礼",
                pinyin: "lǐ",
                options: ["礼", "体", "社", "札"]
            },
            {
                char: "让",
                pinyin: "ràng",
                options: ["", "嚷", "攘", "壤"]
            }
        ]
    },
    {
        id: 117,
        text: "读圣贤，存仁义",
        pinyin: "dú shèng xián, cún rén yì",
        characters: [
            {
                char: "读",
                pinyin: "dú",
                options: ["读", "渎", "督", "独"]
            },
            {
                char: "圣",
                pinyin: "shèng",
                options: ["圣", "生", "声", "胜"]
            },
            {
                char: "贤",
                pinyin: "xián",
                options: ["贤", "现", "显", "险"]
            },
            {
                char: "存",
                pinyin: "cún",
                options: ["存", "在", "村", "寸"]
            },
            {
                char: "仁",
                pinyin: "rén",
                options: ["仁", "人", "忍", "认"]
            },
            {
                char: "义",
                pinyin: "yì",
                options: ["义", "议", "仪", "宜"]
            }
        ]
    },
    {
        id: 118,
        text: "明是非，辨善恶",
        pinyin: "míng shì fēi, biàn shàn è",
        characters: [
            {
                char: "明",
                pinyin: "míng",
                options: ["明", "名", "命", "铭"]
            },
            {
                char: "是",
                pinyin: "shì",
                options: ["是", "时", "实", "识"]
            },
            {
                char: "非",
                pinyin: "fēi",
                options: ["非", "飞", "排", "菲"]
            },
            {
                char: "辨",
                pinyin: "biàn",
                options: ["辨", "辩", "辫", "辐"]
            },
            {
                char: "善",
                pinyin: "shàn",
                options: ["善", "着", "普", "暮"]
            },
            {
                char: "恶",
                pinyin: "è",
                options: ["恶", "饿", "厄", "额"]
            }
        ]
    },
    {
        id: 119,
        text: "存诚心，养浩气",
        pinyin: "cún chéng xīn, yǎng hào qì",
        characters: [
            {
                char: "存",
                pinyin: "cún",
                options: ["存", "在", "村", "寸"]
            },
            {
                char: "诚",
                pinyin: "chéng",
                options: ["诚", "成", "城", "盛"]
            },
            {
                char: "心",
                pinyin: "xīn",
                options: ["心", "必", "忆", "忘"]
            },
            {
                char: "养",
                pinyin: "yǎng",
                options: ["养", "样", "痒", "洋"]
            },
            {
                char: "浩",
                pinyin: "hào",
                options: ["浩", "豪", "毫", "号"]
            },
            {
                char: "气",
                pinyin: "qì",
                options: ["气", "汽", "氧", "氛"]
            }
        ]
    },
    {
        id: 120,
        text: "习礼义，明廉耻",
        pinyin: "xí lǐ yì, míng lián chǐ",
        characters: [
            {
                char: "习",
                pinyin: "xí",
                options: ["习", "司", "写", "字"]
            },
            {
                char: "礼",
                pinyin: "lǐ",
                options: ["礼", "体", "社", "札"]
            },
            {
                char: "义",
                pinyin: "yì",
                options: ["义", "议", "仪", "宜"]
            },
            {
                char: "明",
                pinyin: "míng",
                options: ["明", "名", "命", "铭"]
            },
            {
                char: "廉",
                pinyin: "lián",
                options: ["廉", "连", "帘", "莲"]
            },
            {
                char: "耻",
                pinyin: "chǐ",
                options: ["耻", "恥", "齿", "持"]
            }
        ]
    },
    {
        id: 121,
        text: "守孝悌，存仁慈",
        pinyin: "shǒu xiào tì, cún rén cí",
        characters: [
            {
                char: "守",
                pinyin: "shǒu",
                options: ["守", "首", "手", "寿"]
            },
            {
                char: "孝",
                pinyin: "xiào",
                options: ["孝", "考", "老", "教"]
            },
            {
                char: "悌",
                pinyin: "tì",
                options: ["悌", "第", "弟", "梯"]
            },
            {
                char: "存",
                pinyin: "cún",
                options: ["存", "在", "村", "寸"]
            },
            {
                char: "仁",
                pinyin: "rén",
                options: ["仁", "人", "忍", "认"]
            },
            {
                char: "慈",
                pinyin: "cí",
                options: ["慈", "磁", "兹", "瓷"]
            }
        ]
    },
    {
        id: 122,
        text: "勤读书，习礼仪",
        pinyin: "qín dú shū, xí lǐ yí",
        characters: [
            {
                char: "勤",
                pinyin: "qín",
                options: ["勤", "琴", "秦", "芹"]
            },
            {
                char: "读",
                pinyin: "dú",
                options: ["读", "渎", "督", "独"]
            },
            {
                char: "书",
                pinyin: "shū",
                options: ["书", "史", "写", "字"]
            },
            {
                char: "习",
                pinyin: "xí",
                options: ["习", "司", "写", "字"]
            },
            {
                char: "礼",
                pinyin: "lǐ",
                options: ["礼", "体", "社", "札"]
            },
            {
                char: "仪",
                pinyin: "yí",
                options: ["仪", "义", "议", "宜"]
            }
        ]
    },
    {
        id: 123,
        text: "明事理，懂进退",
        pinyin: "míng shì lǐ, dǒng jìn tuì",
        characters: [
            {
                char: "明",
                pinyin: "míng",
                options: ["明", "名", "命", "铭"]
            },
            {
                char: "事",
                pinyin: "shì",
                options: ["事", "使", "史", "吏"]
            },
            {
                char: "理",
                pinyin: "lǐ",
                options: ["理", "里", "礼", "力"]
            },
            {
                char: "懂",
                pinyin: "dǒng",
                options: ["懂", "动", "洞", "冻"]
            },
            {
                char: "进",
                pinyin: "jìn",
                options: ["进", "近", "斤", "尽"]
            },
            {
                char: "退",
                pinyin: "tuì",
                options: ["退", "推", "腿", "蜕"]
            }
        ]
    },
    {
        id: 124,
        text: "知廉耻，守节义",
        pinyin: "zhī lián chǐ, shǒu jié yì",
        characters: [
            {
                char: "知",
                pinyin: "zhī",
                options: ["知", "智", "识", "见"]
            },
            {
                char: "廉",
                pinyin: "lián",
                options: ["廉", "连", "帘", "莲"]
            },
            {
                char: "耻",
                pinyin: "chǐ",
                options: ["耻", "恥", "齿", "持"]
            },
            {
                char: "守",
                pinyin: "shǒu",
                options: ["守", "首", "手", "寿"]
            },
            {
                char: "节",
                pinyin: "jié",
                options: ["节", "结", "洁", "杰"]
            },
            {
                char: "义",
                pinyin: "yì",
                options: ["义", "议", "仪", "宜"]
            }
        ]
    },
    {
        id: 125,
        text: "养浩然，存正气",
        pinyin: "yǎng hào rán, cún zhèng qì",
        characters: [
            {
                char: "养",
                pinyin: "yǎng",
                options: ["养", "样", "痒", "洋"]
            },
            {
                char: "浩",
                pinyin: "hào",
                options: ["浩", "豪", "毫", "号"]
            },
            {
                char: "然",
                pinyin: "rán",
                options: ["然", "燃", "染", "燕"]
            },
            {
                char: "存",
                pinyin: "cún",
                options: ["存", "在", "村", "寸"]
            },
            {
                char: "正",
                pinyin: "zhèng",
                options: ["正", "证", "政", "整"]
            },
            {
                char: "气",
                pinyin: "qì",
                options: ["气", "汽", "氧", "氛"]
            }
        ]
    },
    {
        id: 126,
        text: "明礼节，遵规矩",
        pinyin: "míng lǐ jié, zūn guī jǔ",
        characters: [
            {
                char: "明",
                pinyin: "míng",
                options: ["明", "名", "命", "铭"]
            },
            {
                char: "礼",
                pinyin: "lǐ",
                options: ["礼", "体", "社", "札"]
            },
            {
                char: "节",
                pinyin: "jié",
                options: ["节", "结", "洁", "杰"]
            },
            {
                char: "遵",
                pinyin: "zūn",
                options: ["遵", "尊", "遒", "循"]
            },
            {
                char: "规",
                pinyin: "guī",
                options: ["规", "归", "轨", "圭"]
            },
            {
                char: "矩",
                pinyin: "jǔ",
                options: ["矩", "举", "拒", "巨"]
            }
        ]
    },
    {
        id: 127,
        text: "存诚意，正心术",
        pinyin: "cún chéng yì, zhèng xīn shù",
        characters: [
            {
                char: "存",
                pinyin: "cún",
                options: ["存", "在", "村", "寸"]
            },
            {
                char: "诚",
                pinyin: "chéng",
                options: ["诚", "成", "城", "盛"]
            },
            {
                char: "意",
                pinyin: "yì",
                options: ["意", "忆", "臆", "亿"]
            },
            {
                char: "正",
                pinyin: "zhèng",
                options: ["正", "证", "政", "整"]
            },
            {
                char: "心",
                pinyin: "xīn",
                options: ["心", "必", "忆", "忘"]
            },
            {
                char: "术",
                pinyin: "shù",
                options: ["术", "述", "树", "束"]
            }
        ]
    },
    {
        id: 128,
        text: "修身齐，治国平",
        pinyin: "xiū shēn qí, zhì guó píng",
        characters: [
            {
                char: "修",
                pinyin: "xiū",
                options: ["修", "休", "秀", "羞"]
            },
            {
                char: "身",
                pinyin: "shēn",
                options: ["身", "深", "神", "申"]
            },
            {
                char: "齐",
                pinyin: "qí",
                options: ["齐", "济", "剂", "挤"]
            },
            {
                char: "治",
                pinyin: "zhì",
                options: ["治", "始", "台", "怡"]
            },
            {
                char: "国",
                pinyin: "guó",
                options: ["国", "果", "因", "回"]
            },
            {
                char: "平",
                pinyin: "píng",
                options: ["平", "评", "坪", "苹"]
            }
        ]
    },
    {
        id: 129,
        text: "读书勤，心自明",
        pinyin: "dú shū qín, xīn zì míng",
        characters: [
            {
                char: "读",
                pinyin: "dú",
                options: ["读", "渎", "督", "独"]
            },
            {
                char: "书",
                pinyin: "shū",
                options: ["书", "史", "写", "字"]
            },
            {
                char: "勤",
                pinyin: "qín",
                options: ["勤", "琴", "秦", "芹"]
            },
            {
                char: "心",
                pinyin: "xīn",
                options: ["心", "必", "忆", "忘"]
            },
            {
                char: "自",
                pinyin: "zì",
                options: ["自", "白", "百", "目"]
            },
            {
                char: "明",
                pinyin: "míng",
                options: ["明", "名", "命", "铭"]
            }
        ]
    },
    {
        id: 130,
        text: "静以修，道自成",
        pinyin: "jìng yǐ xiū, dào zì chéng",
        characters: [
            {
                char: "静",
                pinyin: "jìng",
                options: ["静", "净", "靖", "境"]
            },
            {
                char: "以",
                pinyin: "yǐ",
                options: ["以", "已", "己", "巳"]
            },
            {
                char: "修",
                pinyin: "xiū",
                options: ["修", "休", "秀", "羞"]
            },
            {
                char: "道",
                pinyin: "dào",
                options: ["道", "导", "首", "道"]
            },
            {
                char: "自",
                pinyin: "zì",
                options: ["自", "白", "百", "目"]
            },
            {
                char: "成",
                pinyin: "chéng",
                options: ["成", "城", "诚", "盛"]
            }
        ]
    },
    {
        id: 131,
        text: "守谦恭，戒骄矜",
        pinyin: "shǒu qiān gōng, jiè jiāo jīn",
        characters: [
            {
                char: "守",
                pinyin: "shǒu",
                options: ["守", "首", "手", "寿"]
            },
            {
                char: "谦",
                pinyin: "qiān",
                options: ["谦", "嫌", "歉", "签"]
            },
            {
                char: "恭",
                pinyin: "gōng",
                options: ["恭", "供", "共", "拱"]
            },
            {
                char: "戒",
                pinyin: "jiè",
                options: ["戒", "介", "诫", "界"]
            },
            {
                char: "骄",
                pinyin: "jiāo",
                options: ["骄", "娇", "焦", "浇"]
            },
            {
                char: "矜",
                pinyin: "jīn",
                options: ["矜", "今", "金", "斤"]
            }
        ]
    },
    {
        id: 132,
        text: "习礼仪，敦行检",
        pinyin: "xí lǐ yí, dūn xíng jiǎn",
        characters: [
            {
                char: "习",
                pinyin: "xí",
                options: ["习", "司", "写", "字"]
            },
            {
                char: "礼",
                pinyin: "lǐ",
                options: ["礼", "体", "社", "札"]
            },
            {
                char: "仪",
                pinyin: "yí",
                options: ["仪", "义", "议", "宜"]
            },
            {
                char: "敦",
                pinyin: "dūn",
                options: ["敦", "墩", "蹲", "盾"]
            },
            {
                char: "行",
                pinyin: "xíng",
                options: ["行", "列", "衍", "街"]
            },
            {
                char: "检",
                pinyin: "jiǎn",
                options: ["检", "简", "捡", "俭"]
            }
        ]
    },
    {
        id: 133,
        text: "言行端，品自高",
        pinyin: "yán xíng duān, pǐn zì gāo",
        characters: [
            {
                char: "言",
                pinyin: "yán",
                options: ["言", "音", "谈", "讲"]
            },
            {
                char: "行",
                pinyin: "xíng",
                options: ["行", "列", "衍", "街"]
            },
            {
                char: "端",
                pinyin: "duān",
                options: ["端", "短", "断", "锻"]
            },
            {
                char: "品",
                pinyin: "pǐn",
                options: ["品", "口", "吕", "呂"]
            },
            {
                char: "自",
                pinyin: "zì",
                options: ["自", "白", "百", "目"]
            },
            {
                char: "高",
                pinyin: "gāo",
                options: ["高", "告", "膏", "搞"]
            }
        ]
    },
    {
        id: 134,
        text: "读古训，明事理",
        pinyin: "dú gǔ xùn, míng shì lǐ",
        characters: [
            {
                char: "读",
                pinyin: "dú",
                options: ["读", "渎", "督", "独"]
            },
            {
                char: "古",
                pinyin: "gǔ",
                options: ["古", "故", "固", "估"]
            },
            {
                char: "训",
                pinyin: "xùn",
                options: ["训", "讯", "迅", "汛"]
            },
            {
                char: "明",
                pinyin: "míng",
                options: ["明", "名", "命", "铭"]
            },
            {
                char: "事",
                pinyin: "shì",
                options: ["事", "使", "史", "吏"]
            },
            {
                char: "理",
                pinyin: "lǐ",
                options: ["理", "里", "礼", "力"]
            }
        ]
    },
    {
        id: 135,
        text: "遵圣教，存仁德",
        pinyin: "zūn shèng jiào, cún rén dé",
        characters: [
            {
                char: "遵",
                pinyin: "zūn",
                options: ["遵", "尊", "遒", "循"]
            },
            {
                char: "圣",
                pinyin: "shèng",
                options: ["圣", "生", "声", "胜"]
            },
            {
                char: "教",
                pinyin: "jiào",
                options: ["教", "较", "校", "交"]
            },
            {
                char: "存",
                pinyin: "cún",
                options: ["存", "在", "村", "寸"]
            },
            {
                char: "仁",
                pinyin: "rén",
                options: ["仁", "人", "忍", "认"]
            },
            {
                char: "德",
                pinyin: "dé",
                options: ["德", "得", "恩", "思"]
            }
        ]
    },
    {
        id: 136,
        text: "孝父母，敬师长",
        pinyin: "xiào fù mǔ, jìng shī zhǎng",
        characters: [
            {
                char: "孝",
                pinyin: "xiào",
                options: ["孝", "考", "老", "教"]
            },
            {
                char: "父",
                pinyin: "fù",
                options: ["父", "爸", "爷", "付"]
            },
            {
                char: "母",
                pinyin: "mǔ",
                options: ["母", "每", "毎", "海"]
            },
            {
                char: "敬",
                pinyin: "jìng",
                options: ["敬", "警", "竟", "境"]
            },
            {
                char: "师",
                pinyin: "shī",
                options: ["师", "狮", "诗", "施"]
            },
            {
                char: "长",
                pinyin: "zhǎng",
                options: ["长", "常", "场", "肠"]
            }
        ]
    },
    {
        id: 137,
        text: "友信义，守忠良",
        pinyin: "yǒu xìn yì, shǒu zhōng liáng",
        characters: [
            {
                char: "友",
                pinyin: "yǒu",
                options: ["友", "有", "又", "右"]
            },
            {
                char: "信",
                pinyin: "xìn",
                options: ["信", "言", "诚", "实"]
            },
            {
                char: "义",
                pinyin: "yì",
                options: ["义", "议", "仪", "宜"]
            },
            {
                char: "守",
                pinyin: "shǒu",
                options: ["守", "首", "手", "寿"]
            },
            {
                char: "忠",
                pinyin: "zhōng",
                options: ["忠", "中", "钟", "终"]
            },
            {
                char: "良",
                pinyin: "liáng",
                options: ["良", "浪", "娘", "狼"]
            }
        ]
    },
    {
        id: 138,
        text: "勤学习，善思量",
        pinyin: "qín xué xí, shàn sī liáng",
        characters: [
            {
                char: "勤",
                pinyin: "qín",
                options: ["勤", "琴", "秦", "芹"]
            },
            {
                char: "学",
                pinyin: "xué",
                options: ["学", "觉", "鸟", "写"]
            },
            {
                char: "习",
                pinyin: "xí",
                options: ["习", "司", "写", "字"]
            },
            {
                char: "善",
                pinyin: "shàn",
                options: ["善", "着", "普", "暮"]
            },
            {
                char: "思",
                pinyin: "sī",
                options: ["思", "恩", "您", "德"]
            },
            {
                char: "量",
                pinyin: "liáng",
                options: ["量", "良", "粮", "梁"]
            }
        ]
    },
    {
        id: 139,
        text: "明事理，知进退",
        pinyin: "míng shì lǐ, zhī jìn tuì",
        characters: [
            {
                char: "明",
                pinyin: "míng",
                options: ["明", "名", "命", "铭"]
            },
            {
                char: "事",
                pinyin: "shì",
                options: ["事", "使", "史", "吏"]
            },
            {
                char: "理",
                pinyin: "lǐ",
                options: ["理", "里", "礼", "力"]
            },
            {
                char: "知",
                pinyin: "zhī",
                options: ["知", "智", "识", "见"]
            },
            {
                char: "进",
                pinyin: "jìn",
                options: ["进", "近", "斤", "尽"]
            },
            {
                char: "退",
                pinyin: "tuì",
                options: ["退", "推", "腿", "蜕"]
            }
        ]
    },
    {
        id: 140,
        text: "存仁心，养浩气",
        pinyin: "cún rén xīn, yǎng hào qì",
        characters: [
            {
                char: "存",
                pinyin: "cún",
                options: ["存", "在", "村", "寸"]
            },
            {
                char: "仁",
                pinyin: "rén",
                options: ["仁", "人", "忍", "认"]
            },
            {
                char: "心",
                pinyin: "xīn",
                options: ["心", "必", "忆", "忘"]
            },
            {
                char: "养",
                pinyin: "yǎng",
                options: ["养", "样", "痒", "洋"]
            },
            {
                char: "浩",
                pinyin: "hào",
                options: ["浩", "豪", "毫", "号"]
            },
            {
                char: "气",
                pinyin: "qì",
                options: ["气", "汽", "氧", "氛"]
            }
        ]
    },
    {
        id: 141,
        text: "正其心，诚其意",
        pinyin: "zhèng qí xīn, chéng qí yì",
        characters: [
            {
                char: "正",
                pinyin: "zhèng",
                options: ["正", "证", "政", "整"]
            },
            {
                char: "其",
                pinyin: "qí",
                options: ["其", "期", "棋", "欺"]
            },
            {
                char: "心",
                pinyin: "xīn",
                options: ["心", "必", "忆", "忘"]
            },
            {
                char: "诚",
                pinyin: "chéng",
                options: ["诚", "成", "城", "盛"]
            },
            {
                char: "其",
                pinyin: "qí",
                options: ["其", "期", "棋", "欺"]
            },
            {
                char: "意",
                pinyin: "yì",
                options: ["意", "忆", "臆", "亿"]
            }
        ]
    },
    {
        id: 142,
        text: "修其身，齐其家",
        pinyin: "xiū qí shēn, qí qí jiā",
        characters: [
            {
                char: "修",
                pinyin: "xiū",
                options: ["修", "休", "秀", "羞"]
            },
            {
                char: "其",
                pinyin: "qí",
                options: ["其", "期", "棋", "欺"]
            },
            {
                char: "身",
                pinyin: "shēn",
                options: ["身", "深", "神", "申"]
            },
            {
                char: "齐",
                pinyin: "qí",
                options: ["齐", "济", "剂", "挤"]
            },
            {
                char: "其",
                pinyin: "qí",
                options: ["其", "期", "棋", "欺"]
            },
            {
                char: "家",
                pinyin: "jiā",
                options: ["家", "嫁", "稼", "豕"]
            }
        ]
    },
    {
        id: 143,
        text: "治其国，平天下",
        pinyin: "zhì qí guó, píng tiān xià",
        characters: [
            {
                char: "治",
                pinyin: "zhì",
                options: ["治", "始", "台", "怡"]
            },
            {
                char: "其",
                pinyin: "qí",
                options: ["其", "期", "棋", "欺"]
            },
            {
                char: "国",
                pinyin: "guó",
                options: ["国", "果", "因", "回"]
            },
            {
                char: "平",
                pinyin: "píng",
                options: ["平", "评", "坪", "苹"]
            },
            {
                char: "天",
                pinyin: "tiān",
                options: ["天", "夫", "大", "太"]
            },
            {
                char: "下",
                pinyin: "xià",
                options: ["下", "上", "止", "卡"]
            }
        ]
    },
    {
        id: 144,
        text: "读诗书，明事理",
        pinyin: "dú shī shū, míng shì lǐ",
        characters: [
            {
                char: "读",
                pinyin: "dú",
                options: ["读", "渎", "督", "独"]
            },
            {
                char: "诗",
                pinyin: "shī",
                options: ["诗", "持", "待", "诸"]
            },
            {
                char: "书",
                pinyin: "shū",
                options: ["书", "史", "写", "字"]
            },
            {
                char: "明",
                pinyin: "míng",
                options: ["明", "名", "命", "铭"]
            },
            {
                char: "事",
                pinyin: "shì",
                options: ["事", "使", "史", "吏"]
            },
            {
                char: "理",
                pinyin: "lǐ",
                options: ["理", "里", "礼", "力"]
            }
        ]
    },
    {
        id: 145,
        text: "养浩气，存仁心",
        pinyin: "yǎng hào qì, cún rén xīn",
        characters: [
            {
                char: "养",
                pinyin: "yǎng",
                options: ["养", "样", "痒", "洋"]
            },
            {
                char: "浩",
                pinyin: "hào",
                options: ["浩", "豪", "毫", "号"]
            },
            {
                char: "气",
                pinyin: "qì",
                options: ["气", "汽", "氧", "氛"]
            },
            {
                char: "存",
                pinyin: "cún",
                options: ["���", "在", "村", "寸"]
            },
            {
                char: "仁",
                pinyin: "rén",
                options: ["仁", "人", "忍", "认"]
            },
            {
                char: "心",
                pinyin: "xīn",
                options: ["心", "必", "忆", "忘"]
            }
        ]
    },
    {
        id: 146,
        text: "修品行，立德本",
        pinyin: "xiū pǐn xíng, lì dé běn",
        characters: [
            {
                char: "修",
                pinyin: "xiū",
                options: ["修", "休", "秀", "羞"]
            },
            {
                char: "品",
                pinyin: "pǐn",
                options: ["品", "口", "吕", "呂"]
            },
            {
                char: "行",
                pinyin: "xíng",
                options: ["行", "列", "衍", "街"]
            },
            {
                char: "立",
                pinyin: "lì",
                options: ["立", "位", "泣", "粒"]
            },
            {
                char: "德",
                pinyin: "dé",
                options: ["德", "得", "恩", "思"]
            },
            {
                char: "本",
                pinyin: "běn",
                options: ["本", "木", "体", "夲"]
            }
        ]
    },
    {
        id: 147,
        text: "正其身，修其心",
        pinyin: "zhèng qí shēn, xiū qí xīn",
        characters: [
            {
                char: "正",
                pinyin: "zhèng",
                options: ["正", "证", "政", "整"]
            },
            {
                char: "其",
                pinyin: "qí",
                options: ["其", "期", "棋", "欺"]
            },
            {
                char: "身",
                pinyin: "shēn",
                options: ["身", "���", "神", "申"]
            },
            {
                char: "修",
                pinyin: "xiū",
                options: ["修", "休", "秀", "羞"]
            },
            {
                char: "其",
                pinyin: "qí",
                options: ["其", "期", "棋", "欺"]
            },
            {
                char: "心",
                pinyin: "xīn",
                options: ["心", "必", "忆", "忘"]
            }
        ]
    },
    {
        id: 148,
        text: "持谦逊，戒傲慢",
        pinyin: "chí qiān xùn, jiè ào màn",
        characters: [
            {
                char: "持",
                pinyin: "chí",
                options: ["持", "诗", "待", "特"]
            },
            {
                char: "谦",
                pinyin: "qiān",
                options: ["谦", "嫌", "歉", "签"]
            },
            {
                char: "逊",
                pinyin: "xùn",
                options: ["逊", "训", "迅", "讯"]
            },
            {
                char: "戒",
                pinyin: "jiè",
                options: ["戒", "介", "诫", "界"]
            },
            {
                char: "傲",
                pinyin: "ào",
                options: ["傲", "奥", "澳", "懊"]
            },
            {
                char: "慢",
                pinyin: "màn",
                options: ["慢", "漫", "曼", "满"]
            }
        ]
    },
    {
        id: 149,
        text: "勤思考，善观察",
        pinyin: "qín sī kǎo, shàn guān chá",
        characters: [
            {
                char: "勤",
                pinyin: "qín",
                options: ["勤", "琴", "秦", "芹"]
            },
            {
                char: "思",
                pinyin: "sī",
                options: ["思", "恩", "您", "德"]
            },
            {
                char: "考",
                pinyin: "kǎo",
                options: ["考", "老", "孝", "教"]
            },
            {
                char: "善",
                pinyin: "shàn",
                options: ["善", "着", "普", "暮"]
            },
            {
                char: "观",
                pinyin: "guān",
                options: ["观", "官", "馆", "管"]
            },
            {
                char: "察",
                pinyin: "chá",
                options: ["察", "查", "擦", "差"]
            }
        ]
    },
    {
        id: 150,
        text: "明礼义，知廉耻",
        pinyin: "míng lǐ yì, zhī lián chǐ",
        characters: [
            {
                char: "明",
                pinyin: "míng",
                options: ["明", "名", "命", "铭"]
            },
            {
                char: "礼",
                pinyin: "lǐ",
                options: ["礼", "体", "社", "札"]
            },
            {
                char: "义",
                pinyin: "yì",
                options: ["义", "议", "仪", "宜"]
            },
            {
                char: "知",
                pinyin: "zhī",
                options: ["知", "智", "识", "见"]
            },
            {
                char: "廉",
                pinyin: "lián",
                options: ["廉", "连", "帘", "莲"]
            },
            {
                char: "耻",
                pinyin: "chǐ",
                options: ["耻", "恥", "齿", "持"]
            }
        ]
    },
    {
        id: 151,
        text: "尊师重，道义存",
        pinyin: "zūn shī zhòng, dào yì cún",
        characters: [
            {
                char: "尊",
                pinyin: "zūn",
                options: ["尊", "遵", "樽", "尊"]
            },
            {
                char: "师",
                pinyin: "shī",
                options: ["师", "狮", "诗", "施"]
            },
            {
                char: "重",
                pinyin: "zhòng",
                options: ["重", "种", "众", "仲"]
            },
            {
                char: "道",
                pinyin: "dào",
                options: ["道", "导", "首", "道"]
            },
            {
                char: "义",
                pinyin: "yì",
                options: ["义", "议", "仪", "宜"]
            },
            {
                char: "存",
                pinyin: "cún",
                options: ["存", "在", "村", "寸"]
            }
        ]
    },
    {
        id: 152,
        text: "勤读书，习礼文",
        pinyin: "qín dú shū, xí lǐ wén",
        characters: [
            {
                char: "勤",
                pinyin: "qín",
                options: ["勤", "琴", "秦", "芹"]
            },
            {
                char: "读",
                pinyin: "dú",
                options: ["读", "渎", "督", "独"]
            },
            {
                char: "书",
                pinyin: "shū",
                options: ["书", "史", "写", "字"]
            },
            {
                char: "习",
                pinyin: "xí",
                options: ["习", "司", "写", "字"]
            },
            {
                char: "礼",
                pinyin: "lǐ",
                options: ["礼", "体", "社", "札"]
            },
            {
                char: "文",
                pinyin: "wén",
                options: ["文", "闻", "问", "纹"]
            }
        ]
    },
    {
        id: 153,
        text: "明事理，守本分",
        pinyin: "míng shì lǐ, shǒu běn fèn",
        characters: [
            {
                char: "明",
                pinyin: "míng",
                options: ["明", "名", "命", "铭"]
            },
            {
                char: "事",
                pinyin: "shì",
                options: ["事", "使", "史", "吏"]
            },
            {
                char: "理",
                pinyin: "lǐ",
                options: ["理", "里", "礼", "力"]
            },
            {
                char: "守",
                pinyin: "shǒu",
                options: ["守", "首", "手", "寿"]
            },
            {
                char: "本",
                pinyin: "běn",
                options: ["本", "木", "体", "夲"]
            },
            {
                char: "分",
                pinyin: "fèn",
                options: ["分", "份", "粉", "纷"]
            }
        ]
    },
    {
        id: 154,
        text: "谨言行，慎交友",
        pinyin: "jǐn yán xíng, shèn jiāo yǒu",
        characters: [
            {
                char: "谨",
                pinyin: "jǐn",
                options: ["谨", "紧", "锦", "仅"]
            },
            {
                char: "言",
                pinyin: "yán",
                options: ["言", "音", "谈", "讲"]
            },
            {
                char: "行",
                pinyin: "xíng",
                options: ["行", "列", "衍", "街"]
            },
            {
                char: "慎",
                pinyin: "shèn",
                options: ["慎", "愼", "真", "镇"]
            },
            {
                char: "交",
                pinyin: "jiāo",
                options: ["交", "校", "较", "教"]
            },
            {
                char: "友",
                pinyin: "yǒu",
                options: ["友", "有", "又", "右"]
            }
        ]
    },
    {
        id: 155,
        text: "孝父母，敬长辈",
        pinyin: "xiào fù mǔ, jìng zhǎng bèi",
        characters: [
            {
                char: "孝",
                pinyin: "xiào",
                options: ["孝", "考", "老", "教"]
            },
            {
                char: "父",
                pinyin: "fù",
                options: ["父", "爸", "爷", "付"]
            },
            {
                char: "母",
                pinyin: "mǔ",
                options: ["母", "每", "毎", "海"]
            },
            {
                char: "敬",
                pinyin: "jìng",
                options: ["敬", "警", "竟", "境"]
            },
            {
                char: "长",
                pinyin: "zhǎng",
                options: ["长", "常", "场", "肠"]
            },
            {
                char: "辈",
                pinyin: "bèi",
                options: ["辈", "背", "倍", "贝"]
            }
        ]
    },
    {
        id: 156,
        text: "爱兄弟，睦宗族",
        pinyin: "ài xiōng dì, mù zōng zú",
        characters: [
            {
                char: "爱",
                pinyin: "ài",
                options: ["爱", "受", "爱", "复"]
            },
            {
                char: "兄",
                pinyin: "xiōng",
                options: ["兄", "凶", "胸", "匈"]
            },
            {
                char: "弟",
                pinyin: "dì",
                options: ["弟", "第", "梯", "悌"]
            },
            {
                char: "睦",
                pinyin: "mù",
                options: ["睦", "目", "牧", "慕"]
            },
            {
                char: "宗",
                pinyin: "zōng",
                options: ["宗", "总", "综", "踪"]
            },
            {
                char: "族",
                pinyin: "zú",
                options: ["族", "簇", "足", "促"]
            }
        ]
    },
    {
        id: 157,
        text: "勤学业，习文武",
        pinyin: "qín xué yè, xí wén wǔ",
        characters: [
            {
                char: "勤",
                pinyin: "qín",
                options: ["勤", "琴", "秦", "芹"]
            },
            {
                char: "学",
                pinyin: "xué",
                options: ["学", "觉", "鸟", "写"]
            },
            {
                char: "业",
                pinyin: "yè",
                options: ["业", "叶", "页", "乘"]
            },
            {
                char: "习",
                pinyin: "xí",
                options: ["习", "司", "写", "字"]
            },
            {
                char: "文",
                pinyin: "wén",
                options: ["文", "闻", "问", "纹"]
            },
            {
                char: "武",
                pinyin: "wǔ",
                options: ["武", "舞", "务", "戊"]
            }
        ]
    },
    {
        id: 158,
        text: "明礼节，守规矩",
        pinyin: "míng lǐ jié, shǒu guī jǔ",
        characters: [
            {
                char: "明",
                pinyin: "míng",
                options: ["明", "名", "命", "铭"]
            },
            {
                char: "礼",
                pinyin: "lǐ",
                options: ["礼", "体", "社", "札"]
            },
            {
                char: "节",
                pinyin: "jié",
                options: ["节", "结", "洁", "杰"]
            },
            {
                char: "守",
                pinyin: "shǒu",
                options: ["守", "首", "手", "寿"]
            },
            {
                char: "规",
                pinyin: "guī",
                options: ["规", "归", "轨", "圭"]
            },
            {
                char: "矩",
                pinyin: "jǔ",
                options: ["矩", "举", "拒", "巨"]
            }
        ]
    },
    {
        id: 159,
        text: "尊师友，重道义",
        pinyin: "zūn shī yǒu, zhòng dào yì",
        characters: [
            {
                char: "尊",
                pinyin: "zūn",
                options: ["尊", "遵", "樽", "尊"]
            },
            {
                char: "师",
                pinyin: "shī",
                options: ["师", "狮", "诗", "施"]
            },
            {
                char: "友",
                pinyin: "yǒu",
                options: ["友", "有", "又", "右"]
            },
            {
                char: "重",
                pinyin: "zhòng",
                options: ["重", "种", "众", "仲"]
            },
            {
                char: "道",
                pinyin: "dào",
                options: ["道", "导", "首", "道"]
            },
            {
                char: "义",
                pinyin: "yì",
                options: ["义", "议", "仪", "宜"]
            }
        ]
    },
    {
        id: 160,
        text: "正其心，修其身",
        pinyin: "zhèng qí xīn, xiū qí shēn",
        characters: [
            {
                char: "正",
                pinyin: "zhèng",
                options: ["正", "证", "政", "整"]
            },
            {
                char: "其",
                pinyin: "qí",
                options: ["其", "期", "棋", "欺"]
            },
            {
                char: "心",
                pinyin: "xīn",
                options: ["心", "必", "忆", "忘"]
            },
            {
                char: "修",
                pinyin: "xiū",
                options: ["修", "休", "秀", "羞"]
            },
            {
                char: "其",
                pinyin: "qí",
                options: ["其", "期", "棋", "欺"]
            },
            {
                char: "身",
                pinyin: "shēn",
                options: ["身", "深", "神", "申"]
            }
        ]
    },
    {
        id: 161,
        text: "勤思考，善观察",
        pinyin: "qín sī kǎo, shàn guān chá",
        characters: [
            {
                char: "勤",
                pinyin: "qín",
                options: ["勤", "琴", "秦", "芹"]
            },
            {
                char: "思",
                pinyin: "sī",
                options: ["思", "恩", "您", "德"]
            },
            {
                char: "考",
                pinyin: "kǎo",
                options: ["考", "老", "孝", "教"]
            },
            {
                char: "善",
                pinyin: "shàn",
                options: ["善", "着", "普", "暮"]
            },
            {
                char: "观",
                pinyin: "guān",
                options: ["观", "官", "馆", "管"]
            },
            {
                char: "察",
                pinyin: "chá",
                options: ["察", "查", "擦", "差"]
            }
        ]
    },
    {
        id: 162,
        text: "明事理，知进退",
        pinyin: "míng shì lǐ, zhī jìn tuì",
        characters: [
            {
                char: "明",
                pinyin: "míng",
                options: ["明", "名", "命", "铭"]
            },
            {
                char: "事",
                pinyin: "shì",
                options: ["事", "使", "史", "吏"]
            },
            {
                char: "理",
                pinyin: "lǐ",
                options: ["理", "里", "礼", "力"]
            },
            {
                char: "知",
                pinyin: "zhī",
                options: ["知", "智", "识", "见"]
            },
            {
                char: "进",
                pinyin: "jìn",
                options: ["进", "近", "斤", "尽"]
            },
            {
                char: "退",
                pinyin: "tuì",
                options: ["退", "推", "腿", "蜕"]
            }
        ]
    },
    {
        id: 163,
        text: "存诚意，养浩气",
        pinyin: "cún chéng yì, yǎng hào qì",
        characters: [
            {
                char: "存",
                pinyin: "cún",
                options: ["存", "在", "村", "寸"]
            },
            {
                char: "诚",
                pinyin: "chéng",
                options: ["诚", "成", "城", "盛"]
            },
            {
                char: "意",
                pinyin: "yì",
                options: ["意", "忆", "臆", "亿"]
            },
            {
                char: "养",
                pinyin: "yǎng",
                options: ["养", "样", "痒", "洋"]
            },
            {
                char: "浩",
                pinyin: "hào",
                options: ["浩", "豪", "毫", "号"]
            },
            {
                char: "气",
                pinyin: "qì",
                options: ["气", "汽", "氧", "氛"]
            }
        ]
    },
    {
        id: 164,
        text: "修品德，立志向",
        pinyin: "xiū pǐn dé, lì zhì xiàng",
        characters: [
            {
                char: "修",
                pinyin: "xiū",
                options: ["修", "休", "秀", "羞"]
            },
            {
                char: "品",
                pinyin: "pǐn",
                options: ["品", "口", "吕", "呂"]
            },
            {
                char: "德",
                pinyin: "dé",
                options: ["德", "得", "恩", "思"]
            },
            {
                char: "立",
                pinyin: "lì",
                options: ["立", "位", "泣", "粒"]
            },
            {
                char: "志",
                pinyin: "zhì",
                options: ["志", "誌", "意", "忘"]
            },
            {
                char: "向",
                pinyin: "xiàng",
                options: ["向", "响", "项", "相"]
            }
        ]
    },
    {
        id: 165,
        text: "勤学习，明事理",
        pinyin: "qín xué xí, míng shì lǐ",
        characters: [
            {
                char: "勤",
                pinyin: "qín",
                options: ["勤", "琴", "秦", "芹"]
            },
            {
                char: "学",
                pinyin: "xué",
                options: ["学", "觉", "鸟", "写"]
            },
            {
                char: "习",
                pinyin: "xí",
                options: ["习", "司", "写", "字"]
            },
            {
                char: "明",
                pinyin: "míng",
                options: ["明", "名", "命", "铭"]
            },
            {
                char: "事",
                pinyin: "shì",
                options: ["事", "使", "史", "吏"]
            },
            {
                char: "理",
                pinyin: "lǐ",
                options: ["理", "里", "礼", "力"]
            }
        ]
    },
    {
        id: 166,
        text: "格物致，知诚正",
        pinyin: "gé wù zhì, zhī chéng zhèng",
        characters: [
            {
                char: "格",
                pinyin: "gé",
                options: ["格", "各", "络", "略"]
            },
            {
                char: "物",
                pinyin: "wù",
                options: ["物", "勿", "忽", "匆"]
            },
            {
                char: "致",
                pinyin: "zhì",
                options: ["致", "至", "到", "制"]
            },
            {
                char: "知",
                pinyin: "zhī",
                options: ["知", "智", "识", "见"]
            },
            {
                char: "诚",
                pinyin: "chéng",
                options: ["诚", "成", "城", "盛"]
            },
            {
                char: "正",
                pinyin: "zhèng",
                options: ["正", "证", "政", "整"]
            }
        ]
    },
    {
        id: 167,
        text: "修齐治，平天下",
        pinyin: "xiū qí zhì, píng tiān xià",
        characters: [
            {
                char: "修",
                pinyin: "xiū",
                options: ["修", "休", "秀", "羞"]
            },
            {
                char: "齐",
                pinyin: "qí",
                options: ["齐", "济", "剂", "挤"]
            },
            {
                char: "治",
                pinyin: "zhì",
                options: ["治", "始", "台", "怡"]
            },
            {
                char: "平",
                pinyin: "píng",
                options: ["平", "评", "坪", "苹"]
            },
            {
                char: "天",
                pinyin: "tiān",
                options: ["天", "夫", "大", "太"]
            },
            {
                char: "下",
                pinyin: "xià",
                options: ["下", "上", "止", "卡"]
            }
        ]
    },
    {
        id: 168,
        text: "明礼节，守规范",
        pinyin: "míng lǐ jié, shǒu guī fàn",
        characters: [
            {
                char: "明",
                pinyin: "míng",
                options: ["明", "名", "命", "铭"]
            },
            {
                char: "礼",
                pinyin: "lǐ",
                options: ["礼", "体", "社", "札"]
            },
            {
                char: "节",
                pinyin: "jié",
                options: ["节", "结", "洁", "杰"]
            },
            {
                char: "守",
                pinyin: "shǒu",
                options: ["守", "首", "手", "寿"]
            },
            {
                char: "规",
                pinyin: "guī",
                options: ["规", "归", "轨", "圭"]
            },
            {
                char: "范",
                pinyin: "fàn",
                options: ["范", "犯", "饭", "贩"]
            }
        ]
    },
    {
        id: 169,
        text: "勤思索，善钻研",
        pinyin: "qín sī suǒ, shàn zuān yán",
        characters: [
            {
                char: "勤",
                pinyin: "qín",
                options: ["勤", "琴", "秦", "芹"]
            },
            {
                char: "思",
                pinyin: "sī",
                options: ["思", "恩", "您", "德"]
            },
            {
                char: "索",
                pinyin: "suǒ",
                options: ["索", "所", "锁", "缩"]
            },
            {
                char: "善",
                pinyin: "shàn",
                options: ["善", "着", "普", "暮"]
            },
            {
                char: "钻",
                pinyin: "zuān",
                options: ["钻", "纂", "赚", "攥"]
            },
            {
                char: "研",
                pinyin: "yán",
                options: ["研", "硏", "砚", "岩"]
            }
        ]
    },
    {
        id: 170,
        text: "存仁心，养浩气",
        pinyin: "cún rén xīn, yǎng hào qì",
        characters: [
            {
                char: "存",
                pinyin: "cún",
                options: ["存", "在", "村", "寸"]
            },
            {
                char: "仁",
                pinyin: "rén",
                options: ["仁", "人", "忍", "认"]
            },
            {
                char: "心",
                pinyin: "xīn",
                options: ["心", "必", "忆", "忘"]
            },
            {
                char: "养",
                pinyin: "yǎng",
                options: ["养", "样", "痒", "洋"]
            },
            {
                char: "浩",
                pinyin: "hào",
                options: ["浩", "豪", "毫", "号"]
            },
            {
                char: "气",
                pinyin: "qì",
                options: ["气", "汽", "氧", "氛"]
            }
        ]
    },
    {
        id: 171,
        text: "明事理，知进退",
        pinyin: "míng shì lǐ, zhī jìn tuì",
        characters: [
            {
                char: "明",
                pinyin: "míng",
                options: ["明", "名", "命", "铭"]
            },
            {
                char: "事",
                pinyin: "shì",
                options: ["事", "使", "史", "吏"]
            },
            {
                char: "理",
                pinyin: "lǐ",
                options: ["理", "里", "礼", "力"]
            },
            {
                char: "知",
                pinyin: "zhī",
                options: ["知", "智", "识", "见"]
            },
            {
                char: "进",
                pinyin: "jìn",
                options: ["进", "近", "斤", "尽"]
            },
            {
                char: "退",
                pinyin: "tuì",
                options: ["退", "推", "腿", "蜕"]
            }
        ]
    },
    {
        id: 172,
        text: "修品行，立德本",
        pinyin: "xiū pǐn xíng, lì dé běn",
        characters: [
            {
                char: "修",
                pinyin: "xiū",
                options: ["修", "休", "秀", "羞"]
            },
            {
                char: "品",
                pinyin: "pǐn",
                options: ["品", "口", "吕", "呂"]
            },
            {
                char: "行",
                pinyin: "xíng",
                options: ["行", "列", "衍", "街"]
            },
            {
                char: "立",
                pinyin: "lì",
                options: ["立", "位", "泣", "粒"]
            },
            {
                char: "德",
                pinyin: "dé",
                options: ["德", "得", "恩", "思"]
            },
            {
                char: "本",
                pinyin: "běn",
                options: ["本", "木", "体", "夲"]
            }
        ]
    },
    {
        id: 173,
        text: "尊师长，敬贤达",
        pinyin: "zūn shī zhǎng, jìng xián dá",
        characters: [
            {
                char: "尊",
                pinyin: "zūn",
                options: ["尊", "遵", "樽", "尊"]
            },
            {
                char: "师",
                pinyin: "shī",
                options: ["师", "狮", "诗", "施"]
            },
            {
                char: "长",
                pinyin: "zhǎng",
                options: ["长", "常", "场", "肠"]
            },
            {
                char: "敬",
                pinyin: "jìng",
                options: ["敬", "警", "竟", "境"]
            },
            {
                char: "贤",
                pinyin: "xián",
                options: ["贤", "现", "显", "险"]
            },
            {
                char: "达",
                pinyin: "dá",
                options: ["达", "打", "大", "答"]
            }
        ]
    },
    {
        id: 174,
        text: "勤读书，善思考",
        pinyin: "qín dú shū, shàn sī kǎo",
        characters: [
            {
                char: "勤",
                pinyin: "qín",
                options: ["勤", "琴", "秦", "芹"]
            },
            {
                char: "读",
                pinyin: "dú",
                options: ["读", "渎", "督", "独"]
            },
            {
                char: "书",
                pinyin: "shū",
                options: ["书", "史", "写", "字"]
            },
            {
                char: "善",
                pinyin: "shàn",
                options: ["善", "着", "普", "暮"]
            },
            {
                char: "思",
                pinyin: "sī",
                options: ["思", "恩", "您", "德"]
            },
            {
                char: "考",
                pinyin: "kǎo",
                options: ["考", "老", "孝", "教"]
            }
        ]
    },
    {
        id: 175,
        text: "明礼义，守规矩",
        pinyin: "míng lǐ yì, shǒu guī jǔ",
        characters: [
            {
                char: "明",
                pinyin: "míng",
                options: ["明", "名", "命", "铭"]
            },
            {
                char: "礼",
                pinyin: "lǐ",
                options: ["礼", "体", "社", "札"]
            },
            {
                char: "义",
                pinyin: "yì",
                options: ["义", "议", "仪", "宜"]
            },
            {
                char: "守",
                pinyin: "shǒu",
                options: ["守", "首", "手", "寿"]
            },
            {
                char: "规",
                pinyin: "guī",
                options: ["规", "归", "轨", "圭"]
            },
            {
                char: "矩",
                pinyin: "jǔ",
                options: ["矩", "举", "拒", "巨"]
            }
        ]
    },
    {
        id: 176,
        text: "孝父母，敬师长",
        pinyin: "xiào fù mǔ, jìng shī zhǎng",
        characters: [
            {
                char: "孝",
                pinyin: "xiào",
                options: ["孝", "考", "老", "教"]
            },
            {
                char: "父",
                pinyin: "fù",
                options: ["父", "爸", "爷", "付"]
            },
            {
                char: "母",
                pinyin: "mǔ",
                options: ["母", "每", "毎", "海"]
            },
            {
                char: "敬",
                pinyin: "jìng",
                options: ["敬", "警", "竟", "境"]
            },
            {
                char: "师",
                pinyin: "shī",
                options: ["师", "狮", "诗", "施"]
            },
            {
                char: "长",
                pinyin: "zhǎng",
                options: ["长", "常", "场", "肠"]
            }
        ]
    },
    {
        id: 177,
        text: "友信义，守忠良",
        pinyin: "yǒu xìn yì, shǒu zhōng liáng",
        characters: [
            {
                char: "友",
                pinyin: "yǒu",
                options: ["友", "有", "又", "右"]
            },
            {
                char: "信",
                pinyin: "xìn",
                options: ["信", "言", "诚", "实"]
            },
            {
                char: "义",
                pinyin: "yì",
                options: ["义", "议", "仪", "宜"]
            },
            {
                char: "守",
                pinyin: "shǒu",
                options: ["守", "首", "手", "寿"]
            },
            {
                char: "忠",
                pinyin: "zhōng",
                options: ["忠", "中", "钟", "终"]
            },
            {
                char: "良",
                pinyin: "liáng",
                options: ["良", "浪", "娘", "狼"]
            }
        ]
    },
    {
        id: 178,
        text: "勤学习，善思量",
        pinyin: "qín xué xí, shàn sī liáng",
        characters: [
            {
                char: "勤",
                pinyin: "qín",
                options: ["勤", "琴", "秦", "芹"]
            },
            {
                char: "学",
                pinyin: "xué",
                options: ["学", "觉", "鸟", "写"]
            },
            {
                char: "习",
                pinyin: "xí",
                options: ["习", "司", "写", "字"]
            },
            {
                char: "善",
                pinyin: "shàn",
                options: ["善", "着", "普", "暮"]
            },
            {
                char: "思",
                pinyin: "sī",
                options: ["思", "恩", "您", "德"]
            },
            {
                char: "量",
                pinyin: "liáng",
                options: ["量", "良", "粮", "梁"]
            }
        ]
    },
    {
        id: 179,
        text: "明事理，知进退",
        pinyin: "míng shì lǐ, zhī jìn tuì",
        characters: [
            {
                char: "明",
                pinyin: "míng",
                options: ["明", "名", "命", "铭"]
            },
            {
                char: "事",
                pinyin: "shì",
                options: ["事", "使", "史", "吏"]
            },
            {
                char: "理",
                pinyin: "lǐ",
                options: ["理", "里", "礼", "力"]
            },
            {
                char: "知",
                pinyin: "zhī",
                options: ["知", "智", "识", "见"]
            },
            {
                char: "进",
                pinyin: "jìn",
                options: ["进", "近", "斤", "尽"]
            },
            {
                char: "退",
                pinyin: "tuì",
                options: ["退", "推", "腿", "蜕"]
            }
        ]
    },
    {
        id: 180,
        text: "存仁心，养浩气",
        pinyin: "cún rén xīn, yǎng hào qì",
        characters: [
            {
                char: "存",
                pinyin: "cún",
                options: ["存", "在", "村", "寸"]
            },
            {
                char: "仁",
                pinyin: "rén",
                options: ["仁", "人", "忍", "认"]
            },
            {
                char: "心",
                pinyin: "xīn",
                options: ["心", "必", "忆", "忘"]
            },
            {
                char: "养",
                pinyin: "yǎng",
                options: ["养", "样", "痒", "洋"]
            },
            {
                char: "浩",
                pinyin: "hào",
                options: ["浩", "豪", "毫", "号"]
            },
            {
                char: "气",
                pinyin: "qì",
                options: ["气", "汽", "氧", "氛"]
            }
        ]
    },
    {
        id: 181,
        text: "正其心，诚其意",
        pinyin: "zhèng qí xīn, chéng qí yì",
        characters: [
            {
                char: "正",
                pinyin: "zhèng",
                options: ["正", "证", "政", "整"]
            },
            {
                char: "其",
                pinyin: "qí",
                options: ["其", "期", "棋", "欺"]
            },
            {
                char: "心",
                pinyin: "xīn",
                options: ["心", "必", "忆", "忘"]
            },
            {
                char: "诚",
                pinyin: "chéng",
                options: ["诚", "成", "城", "盛"]
            },
            {
                char: "其",
                pinyin: "qí",
                options: ["其", "期", "棋", "欺"]
            },
            {
                char: "意",
                pinyin: "yì",
                options: ["意", "忆", "臆", "亿"]
            }
        ]
    },
    {
        id: 182,
        text: "修其身，齐其家",
        pinyin: "xiū qí shēn, qí qí jiā",
        characters: [
            {
                char: "修",
                pinyin: "xiū",
                options: ["修", "休", "秀", "羞"]
            },
            {
                char: "其",
                pinyin: "qí",
                options: ["其", "期", "棋", "欺"]
            },
            {
                char: "身",
                pinyin: "shēn",
                options: ["身", "深", "神", "申"]
            },
            {
                char: "齐",
                pinyin: "qí",
                options: ["齐", "济", "剂", "挤"]
            },
            {
                char: "其",
                pinyin: "qí",
                options: ["其", "期", "棋", "欺"]
            },
            {
                char: "家",
                pinyin: "jiā",
                options: ["家", "嫁", "稼", "豕"]
            }
        ]
    },
    {
        id: 183,
        text: "治其国，平天下",
        pinyin: "zhì qí guó, píng tiān xià",
        characters: [
            {
                char: "治",
                pinyin: "zhì",
                options: ["治", "始", "台", "怡"]
            },
            {
                char: "其",
                pinyin: "qí",
                options: ["其", "期", "棋", "欺"]
            },
            {
                char: "国",
                pinyin: "guó",
                options: ["国", "果", "因", "回"]
            },
            {
                char: "平",
                pinyin: "píng",
                options: ["平", "评", "坪", "苹"]
            },
            {
                char: "天",
                pinyin: "tiān",
                options: ["天", "夫", "大", "太"]
            },
            {
                char: "下",
                pinyin: "xià",
                options: ["下", "上", "止", "卡"]
            }
        ]
    },
    {
        id: 184,
        text: "读诗书，明事理",
        pinyin: "dú shī shū, míng shì lǐ",
        characters: [
            {
                char: "读",
                pinyin: "dú",
                options: ["读", "渎", "督", "独"]
            },
            {
                char: "诗",
                pinyin: "shī",
                options: ["诗", "持", "待", "诸"]
            },
            {
                char: "书",
                pinyin: "shū",
                options: ["书", "史", "写", "字"]
            },
            {
                char: "明",
                pinyin: "míng",
                options: ["明", "名", "命", "铭"]
            },
            {
                char: "事",
                pinyin: "shì",
                options: ["事", "使", "史", "吏"]
            },
            {
                char: "理",
                pinyin: "lǐ",
                options: ["理", "里", "礼", "力"]
            }
        ]
    },
    {
        id: 185,
        text: "养浩气，存仁心",
        pinyin: "yǎng hào qì, cún rén xīn",
        characters: [
            {
                char: "养",
                pinyin: "yǎng",
                options: ["养", "样", "痒", "洋"]
            },
            {
                char: "浩",
                pinyin: "hào",
                options: ["浩", "豪", "毫", "号"]
            },
            {
                char: "气",
                pinyin: "qì",
                options: ["气", "汽", "氧", "氛"]
            },
            {
                char: "存",
                pinyin: "cún",
                options: ["存", "在", "村", "寸"]
            },
            {
                char: "仁",
                pinyin: "rén",
                options: ["仁", "人", "忍", "认"]
            },
            {
                char: "心",
                pinyin: "xīn",
                options: ["心", "必", "忆", "忘"]
            }
        ]
    },
    {
        id: 186,
        text: "修品行，立德本",
        pinyin: "xiū pǐn xíng, lì dé běn",
        characters: [
            {
                char: "修",
                pinyin: "xiū",
                options: ["修", "休", "秀", "羞"]
            },
            {
                char: "品",
                pinyin: "pǐn",
                options: ["品", "口", "吕", "呂"]
            },
            {
                char: "行",
                pinyin: "xíng",
                options: ["行", "列", "衍", "街"]
            },
            {
                char: "立",
                pinyin: "lì",
                options: ["立", "位", "泣", "粒"]
            },
            {
                char: "德",
                pinyin: "dé",
                options: ["德", "得", "恩", "思"]
            },
            {
                char: "本",
                pinyin: "běn",
                options: ["本", "木", "体", "夲"]
            }
        ]
    },
    {
        id: 187,
        text: "正其身，修其心",
        pinyin: "zhèng qí shēn, xiū qí xīn",
        characters: [
            {
                char: "正",
                pinyin: "zhèng",
                options: ["正", "证", "政", "整"]
            },
            {
                char: "其",
                pinyin: "qí",
                options: ["其", "期", "棋", "欺"]
            },
            {
                char: "身",
                pinyin: "shēn",
                options: ["身", "深", "神", "申"]
            },
            {
                char: "修",
                pinyin: "xiū",
                options: ["修", "休", "秀", "羞"]
            },
            {
                char: "其",
                pinyin: "qí",
                options: ["其", "期", "棋", "欺"]
            },
            {
                char: "心",
                pinyin: "xīn",
                options: ["心", "必", "忆", "忘"]
            }
        ]
    },
    {
        id: 188,
        text: "持谦逊，戒傲慢",
        pinyin: "chí qiān xùn, jiè ào màn",
        characters: [
            {
                char: "持",
                pinyin: "chí",
                options: ["持", "诗", "待", "特"]
            },
            {
                char: "谦",
                pinyin: "qiān",
                options: ["谦", "嫌", "歉", "签"]
            },
            {
                char: "逊",
                pinyin: "xùn",
                options: ["逊", "训", "迅", "讯"]
            },
            {
                char: "戒",
                pinyin: "jiè",
                options: ["戒", "介", "诫", "界"]
            },
            {
                char: "傲",
                pinyin: "ào",
                options: ["傲", "奥", "澳", "懊"]
            },
            {
                char: "慢",
                pinyin: "màn",
                options: ["慢", "漫", "曼", "满"]
            }
        ]
    },
    {
        id: 189,
        text: "勤思考，善观察",
        pinyin: "qín sī kǎo, shàn guān chá",
        characters: [
            {
                char: "勤",
                pinyin: "qín",
                options: ["勤", "琴", "秦", "芹"]
            },
            {
                char: "思",
                pinyin: "sī",
                options: ["思", "恩", "您", "德"]
            },
            {
                char: "考",
                pinyin: "kǎo",
                options: ["考", "老", "孝", "教"]
            },
            {
                char: "善",
                pinyin: "shàn",
                options: ["善", "着", "普", "暮"]
            },
            {
                char: "观",
                pinyin: "guān",
                options: ["观", "官", "馆", "管"]
            },
            {
                char: "察",
                pinyin: "chá",
                options: ["察", "查", "擦", "差"]
            }
        ]
    },
    {
        id: 190,
        text: "明礼义，知廉耻",
        pinyin: "míng lǐ yì, zhī lián chǐ",
        characters: [
            {
                char: "明",
                pinyin: "míng",
                options: ["明", "名", "命", "铭"]
            },
            {
                char: "礼",
                pinyin: "lǐ",
                options: ["礼", "体", "社", "札"]
            },
            {
                char: "义",
                pinyin: "yì",
                options: ["义", "议", "仪", "宜"]
            },
            {
                char: "知",
                pinyin: "zhī",
                options: ["知", "智", "识", "见"]
            },
            {
                char: "廉",
                pinyin: "lián",
                options: ["廉", "连", "帘", "莲"]
            },
            {
                char: "耻",
                pinyin: "chǐ",
                options: ["耻", "恥", "齿", "持"]
            }
        ]
    },
    {
        id: 191,
        text: "尊师友，重道义",
        pinyin: "zūn shī yǒu, zhòng dào yì",
        characters: [
            {
                char: "尊",
                pinyin: "zūn",
                options: ["尊", "遵", "樽", "尊"]
            },
            {
                char: "师",
                pinyin: "shī",
                options: ["师", "狮", "诗", "施"]
            },
            {
                char: "友",
                pinyin: "yǒu",
                options: ["友", "有", "又", "右"]
            },
            {
                char: "重",
                pinyin: "zhòng",
                options: ["重", "种", "众", "仲"]
            },
            {
                char: "道",
                pinyin: "dào",
                options: ["道", "导", "首", "道"]
            },
            {
                char: "义",
                pinyin: "yì",
                options: ["义", "议", "仪", "宜"]
            }
        ]
    },
    {
        id: 192,
        text: "正其心，修其身",
        pinyin: "zhèng qí xīn, xiū qí shēn",
        characters: [
            {
                char: "正",
                pinyin: "zhèng",
                options: ["正", "证", "政", "整"]
            },
            {
                char: "其",
                pinyin: "qí",
                options: ["其", "期", "棋", "欺"]
            },
            {
                char: "心",
                pinyin: "xīn",
                options: ["心", "必", "忆", "忘"]
            },
            {
                char: "修",
                pinyin: "xiū",
                options: ["修", "休", "秀", "羞"]
            },
            {
                char: "其",
                pinyin: "qí",
                options: ["其", "期", "棋", "欺"]
            },
            {
                char: "身",
                pinyin: "shēn",
                options: ["身", "深", "神", "申"]
            }
        ]
    },
    {
        id: 193,
        text: "勤思考，善观察",
        pinyin: "qín sī kǎo, shàn guān chá",
        characters: [
            {
                char: "勤",
                pinyin: "qín",
                options: ["勤", "琴", "秦", "芹"]
            },
            {
                char: "思",
                pinyin: "sī",
                options: ["思", "恩", "您", "德"]
            },
            {
                char: "考",
                pinyin: "kǎo",
                options: ["考", "老", "孝", "教"]
            },
            {
                char: "善",
                pinyin: "shàn",
                options: ["善", "着", "普", "暮"]
            },
            {
                char: "观",
                pinyin: "guān",
                options: ["观", "官", "馆", "管"]
            },
            {
                char: "察",
                pinyin: "chá",
                options: ["察", "查", "擦", "差"]
            }
        ]
    },
    {
        id: 194,
        text: "明事理，知进退",
        pinyin: "míng shì lǐ, zhī jìn tuì",
        characters: [
            {
                char: "明",
                pinyin: "míng",
                options: ["明", "名", "命", "铭"]
            },
            {
                char: "事",
                pinyin: "shì",
                options: ["事", "使", "史", "吏"]
            },
            {
                char: "理",
                pinyin: "lǐ",
                options: ["理", "里", "礼", "力"]
            },
            {
                char: "知",
                pinyin: "zhī",
                options: ["知", "智", "识", "见"]
            },
            {
                char: "进",
                pinyin: "jìn",
                options: ["进", "近", "斤", "尽"]
            },
            {
                char: "退",
                pinyin: "tuì",
                options: ["退", "推", "腿", "蜕"]
            }
        ]
    },
    {
        id: 195,
        text: "存诚意，养浩气",
        pinyin: "cún chéng yì, yǎng hào qì",
        characters: [
            {
                char: "存",
                pinyin: "cún",
                options: ["存", "在", "村", "寸"]
            },
            {
                char: "诚",
                pinyin: "chéng",
                options: ["诚", "成", "城", "盛"]
            },
            {
                char: "意",
                pinyin: "yì",
                options: ["意", "忆", "臆", "亿"]
            },
            {
                char: "养",
                pinyin: "yǎng",
                options: ["养", "样", "痒", "洋"]
            },
            {
                char: "浩",
                pinyin: "hào",
                options: ["浩", "豪", "毫", "号"]
            },
            {
                char: "气",
                pinyin: "qì",
                options: ["气", "汽", "氧", "氛"]
            }
        ]
    },
    {
        id: 196,
        text: "修品德，立志向",
        pinyin: "xiū pǐn dé, lì zhì xiàng",
        characters: [
            {
                char: "修",
                pinyin: "xiū",
                options: ["修", "休", "秀", "羞"]
            },
            {
                char: "品",
                pinyin: "pǐn",
                options: ["品", "口", "吕", "呂"]
            },
            {
                char: "德",
                pinyin: "dé",
                options: ["德", "得", "恩", "思"]
            },
            {
                char: "立",
                pinyin: "lì",
                options: ["立", "位", "泣", "粒"]
            },
            {
                char: "志",
                pinyin: "zhì",
                options: ["志", "誌", "意", "忘"]
            },
            {
                char: "向",
                pinyin: "xiàng",
                options: ["向", "响", "项", "相"]
            }
        ]
    },
    {
        id: 197,
        text: "勤学习，明事理",
        pinyin: "qín xué xí, míng shì lǐ",
        characters: [
            {
                char: "勤",
                pinyin: "qín",
                options: ["勤", "琴", "秦", "芹"]
            },
            {
                char: "学",
                pinyin: "xué",
                options: ["学", "觉", "鸟", "写"]
            },
            {
                char: "习",
                pinyin: "xí",
                options: ["习", "司", "写", "字"]
            },
            {
                char: "明",
                pinyin: "míng",
                options: ["明", "名", "命", "铭"]
            },
            {
                char: "事",
                pinyin: "shì",
                options: ["事", "使", "史", "吏"]
            },
            {
                char: "理",
                pinyin: "lǐ",
                options: ["理", "里", "礼", "力"]
            }
        ]
    },
    {
        id: 198,
        text: "格物致，知诚正",
        pinyin: "gé wù zhì, zhī chéng zhèng",
        characters: [
            {
                char: "格",
                pinyin: "gé",
                options: ["格", "各", "络", "略"]
            },
            {
                char: "物",
                pinyin: "wù",
                options: ["物", "勿", "忽", "匆"]
            },
            {
                char: "致",
                pinyin: "zhì",
                options: ["致", "至", "到", "制"]
            },
            {
                char: "知",
                pinyin: "zhī",
                options: ["知", "智", "识", "见"]
            },
            {
                char: "诚",
                pinyin: "chéng",
                options: ["诚", "成", "城", "盛"]
            },
            {
                char: "正",
                pinyin: "zhèng",
                options: ["正", "证", "政", "整"]
            }
        ]
    },
    {
        id: 199,
        text: "修齐治，平天下",
        pinyin: "xiū qí zhì, píng tiān xià",
        characters: [
            {
                char: "修",
                pinyin: "xiū",
                options: ["修", "休", "秀", "羞"]
            },
            {
                char: "齐",
                pinyin: "qí",
                options: ["齐", "济", "剂", "挤"]
            },
            {
                char: "治",
                pinyin: "zhì",
                options: ["治", "始", "台", "怡"]
            },
            {
                char: "平",
                pinyin: "píng",
                options: ["平", "评", "坪", "苹"]
            },
            {
                char: "天",
                pinyin: "tiān",
                options: ["天", "夫", "大", "太"]
            },
            {
                char: "下",
                pinyin: "xià",
                options: ["下", "上", "止", "卡"]
            }
        ]
    },
    {
        id: 200,
        text: "此诗终，勤诵习",
        pinyin: "cǐ shī zhōng, qín sòng xí",
        characters: [
            {
                char: "此",
                pinyin: "cǐ",
                options: ["此", "些", "柴", "北"]
            },
            {
                char: "诗",
                pinyin: "shī",
                options: ["诗", "持", "待", "诸"]
            },
            {
                char: "终",
                pinyin: "zhōng",
                options: ["终", "中", "钟", "忠"]
            },
            {
                char: "勤",
                pinyin: "qín",
                options: ["勤", "琴", "秦", "芹"]
            },
            {
                char: "诵",
                pinyin: "sòng",
                options: ["诵", "颂", "送", "讼"]
            },
            {
                char: "习",
                pinyin: "xí",
                options: ["习", "司", "写", "字"]
            }
        ]
    }
];

// 导出数据
if (typeof module !== 'undefined' && module.exports) {
    module.exports = threeCharacterData;
} 