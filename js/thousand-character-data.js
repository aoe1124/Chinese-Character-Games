// 千字文数据
const thousandCharacterData = {
    sentences: [
        {
            characters: [
                { char: '天', pinyin: 'tiān' },
                { char: '地', pinyin: 'dì' },
                { char: '玄', pinyin: 'xuán' },
                { char: '黄', pinyin: 'huáng' },
                { char: '宇', pinyin: 'yǔ' },
                { char: '宙', pinyin: 'zhòu' },
                { char: '洪', pinyin: 'hóng' },
                { char: '荒', pinyin: 'huāng' }
            ],
            translation: '天与地，玄与黄，宇宙在混沌蒙昧中开创'
        },
        {
            characters: [
                { char: '日', pinyin: 'rì' },
                { char: '月', pinyin: 'yuè' },
                { char: '盈', pinyin: 'yíng' },
                { char: '昃', pinyin: 'zè' },
                { char: '辰', pinyin: 'chén' },
                { char: '宿', pinyin: 'sù' },
                { char: '列', pinyin: 'liè' },
                { char: '张', pinyin: 'zhāng' }
            ],
            translation: '日月盈亏，星辰布列在天上'
        },
        {
            characters: [
                { char: '寒', pinyin: 'hán' },
                { char: '来', pinyin: 'lái' },
                { char: '暑', pinyin: 'shǔ' },
                { char: '往', pinyin: 'wǎng' },
                { char: '秋', pinyin: 'qiū' },
                { char: '收', pinyin: 'shōu' },
                { char: '冬', pinyin: 'dōng' },
                { char: '藏', pinyin: 'cáng' }
            ],
            translation: '寒暑往来，秋收冬藏的运行规律'
        },
        {
            characters: [
                { char: '闰', pinyin: 'rùn' },
                { char: '余', pinyin: 'yú' },
                { char: '成', pinyin: 'chéng' },
                { char: '岁', pinyin: 'suì' },
                { char: '律', pinyin: 'lǜ' },
                { char: '吕', pinyin: 'lǚ' },
                { char: '调', pinyin: 'tiáo' },
                { char: '阳', pinyin: 'yáng' }
            ],
            translation: '闰月调节，使阴阳调和，四季运行'
        },
        {
            characters: [
                { char: '云', pinyin: 'yún' },
                { char: '腾', pinyin: 'téng' },
                { char: '致', pinyin: 'zhì' },
                { char: '雨', pinyin: 'yǔ' },
                { char: '露', pinyin: 'lù' },
                { char: '结', pinyin: 'jié' },
                { char: '为', pinyin: 'wéi' },
                { char: '霜', pinyin: 'shuāng' }
            ],
            translation: '云气上升而致雨，露水凝结成霜'
        },
        {
            characters: [
                { char: '金', pinyin: 'jīn' },
                { char: '生', pinyin: 'shēng' },
                { char: '丽', pinyin: 'lì' },
                { char: '水', pinyin: 'shuǐ' },
                { char: '玉', pinyin: 'yù' },
                { char: '出', pinyin: 'chū' },
                { char: '昆', pinyin: 'kūn' },
                { char: '冈', pinyin: 'gāng' }
            ],
            translation: '黄金产于丽水，美玉出自昆冈'
        },
        {
            characters: [
                { char: '剑', pinyin: 'jiàn' },
                { char: '号', pinyin: 'hào' },
                { char: '巨', pinyin: 'jù' },
                { char: '阙', pinyin: 'quē' },
                { char: '珠', pinyin: 'zhū' },
                { char: '称', pinyin: 'chēng' },
                { char: '夜', pinyin: 'yè' },
                { char: '光', pinyin: 'guāng' }
            ],
            translation: '宝剑名为巨阙，明珠被称为夜光'
        },
        {
            characters: [
                { char: '果', pinyin: 'guǒ' },
                { char: '珍', pinyin: 'zhēn' },
                { char: '李', pinyin: 'lǐ' },
                { char: '柰', pinyin: 'nài' },
                { char: '菜', pinyin: 'cài' },
                { char: '重', pinyin: 'zhòng' },
                { char: '芥', pinyin: 'jiè' },
                { char: '姜', pinyin: 'jiāng' }
            ],
            translation: '果实珍贵如李柰，蔬菜重要似芥姜'
        },
        {
            characters: [
                { char: '海', pinyin: 'hǎi' },
                { char: '咸', pinyin: 'xián' },
                { char: '河', pinyin: 'hé' },
                { char: '淡', pinyin: 'dàn' },
                { char: '鳞', pinyin: 'lín' },
                { char: '潜', pinyin: 'qián' },
                { char: '羽', pinyin: 'yǔ' },
                { char: '翔', pinyin: 'xiáng' }
            ],
            translation: '海水咸苦河水淡，鱼儿游潜鸟儿翔'
        },
        {
            characters: [
                { char: '龙', pinyin: 'lóng' },
                { char: '师', pinyin: 'shī' },
                { char: '火', pinyin: 'huǒ' },
                { char: '帝', pinyin: 'dì' },
                { char: '鸟', pinyin: 'niǎo' },
                { char: '官', pinyin: 'guān' },
                { char: '人', pinyin: 'rén' },
                { char: '皇', pinyin: 'huáng' }
            ],
            translation: '龙为师者火为帝，凤为官者人为皇'
        },
        {
            characters: [
                { char: '始', pinyin: 'shǐ' },
                { char: '制', pinyin: 'zhì' },
                { char: '文', pinyin: 'wén' },
                { char: '字', pinyin: 'zì' },
                { char: '乃', pinyin: 'nǎi' },
                { char: '服', pinyin: 'fú' },
                { char: '衣', pinyin: 'yī' },
                { char: '裳', pinyin: 'cháng' }
            ],
            translation: '开始制定文字，人们才有了衣裳'
        },
        {
            characters: [
                { char: '推', pinyin: 'tuī' },
                { char: '位', pinyin: 'wèi' },
                { char: '让', pinyin: 'ràng' },
                { char: '国', pinyin: 'guó' },
                { char: '有', pinyin: 'yǒu' },
                { char: '虞', pinyin: 'yú' },
                { char: '陶', pinyin: 'táo' },
                { char: '唐', pinyin: 'táng' }
            ],
            translation: '推让帝位，有虞氏、陶唐氏的美德'
        },
        {
            characters: [
                { char: '吊', pinyin: 'diào' },
                { char: '民', pinyin: 'mín' },
                { char: '伐', pinyin: 'fá' },
                { char: '罪', pinyin: 'zuì' },
                { char: '周', pinyin: 'zhōu' },
                { char: '发', pinyin: 'fā' },
                { char: '殷', pinyin: 'yīn' },
                { char: '汤', pinyin: 'tāng' }
            ],
            translation: '安抚百姓讨伐暴政，周武王、商汤王的功绩'
        },
        {
            characters: [
                { char: '坐', pinyin: 'zuò' },
                { char: '朝', pinyin: 'cháo' },
                { char: '问', pinyin: 'wèn' },
                { char: '道', pinyin: 'dào' },
                { char: '垂', pinyin: 'chuí' },
                { char: '拱', pinyin: 'gǒng' },
                { char: '平', pinyin: 'píng' },
                { char: '章', pinyin: 'zhāng' }
            ],
            translation: '在朝廷询问治国之道，制定礼仪制度'
        },
        {
            characters: [
                { char: '爱', pinyin: 'ài' },
                { char: '育', pinyin: 'yù' },
                { char: '黎', pinyin: 'lí' },
                { char: '首', pinyin: 'shǒu' },
                { char: '臣', pinyin: 'chén' },
                { char: '伏', pinyin: 'fú' },
                { char: '戎', pinyin: 'róng' },
                { char: '羌', pinyin: 'qiāng' }
            ],
            translation: '爱护百姓，臣服戎羌等少数民族'
        },
        {
            characters: [
                { char: '遐', pinyin: 'xiá' },
                { char: '迩', pinyin: 'ěr' },
                { char: '一', pinyin: 'yī' },
                { char: '体', pinyin: 'tǐ' },
                { char: '率', pinyin: 'shuài' },
                { char: '宾', pinyin: 'bīn' },
                { char: '归', pinyin: 'guī' },
                { char: '王', pinyin: 'wáng' }
            ],
            translation: '远近一体，宾客归顺于王'
        },
        {
            characters: [
                { char: '鸣', pinyin: 'míng' },
                { char: '凤', pinyin: 'fèng' },
                { char: '在', pinyin: 'zài' },
                { char: '树', pinyin: 'shù' },
                { char: '白', pinyin: 'bái' },
                { char: '驹', pinyin: 'jū' },
                { char: '食', pinyin: 'shí' },
                { char: '场', pinyin: 'chǎng' }
            ],
            translation: '凤凰鸣叫栖息树上，白马在场进食'
        },
        {
            characters: [
                { char: '化', pinyin: 'huà' },
                { char: '被', pinyin: 'bèi' },
                { char: '草', pinyin: 'cǎo' },
                { char: '木', pinyin: 'mù' },
                { char: '赖', pinyin: 'lài' },
                { char: '及', pinyin: 'jí' },
                { char: '万', pinyin: 'wàn' },
                { char: '方', pinyin: 'fāng' }
            ],
            translation: '教化遍及草木，恩惠普及四方'
        },
        {
            characters: [
                { char: '盖', pinyin: 'gài' },
                { char: '此', pinyin: 'cǐ' },
                { char: '身', pinyin: 'shēn' },
                { char: '发', pinyin: 'fà' },
                { char: '四', pinyin: 'sì' },
                { char: '大', pinyin: 'dà' },
                { char: '五', pinyin: 'wǔ' },
                { char: '常', pinyin: 'cháng' }
            ],
            translation: '说到此身发肤，要遵守四大五常'
        },
        {
            characters: [
                { char: '恭', pinyin: 'gōng' },
                { char: '惟', pinyin: 'wéi' },
                { char: '鞠', pinyin: 'jū' },
                { char: '养', pinyin: 'yǎng' },
                { char: '岂', pinyin: 'qǐ' },
                { char: '敢', pinyin: 'gǎn' },
                { char: '毁', pinyin: 'huǐ' },
                { char: '伤', pinyin: 'shāng' }
            ],
            translation: '恭敬地抚养身���不敢毁坏损伤'
        },
        {
            characters: [
                { char: '女', pinyin: 'nǚ' },
                { char: '慕', pinyin: 'mù' },
                { char: '贞', pinyin: 'zhēn' },
                { char: '洁', pinyin: 'jié' },
                { char: '男', pinyin: 'nán' },
                { char: '效', pinyin: 'xiào' },
                { char: '才', pinyin: 'cái' },
                { char: '良', pinyin: 'liáng' }
            ],
            translation: '女子仰慕贞洁，男子效法贤良'
        },
        {
            characters: [
                { char: '知', pinyin: 'zhī' },
                { char: '过', pinyin: 'guò' },
                { char: '必', pinyin: 'bì' },
                { char: '改', pinyin: 'gǎi' },
                { char: '得', pinyin: 'dé' },
                { char: '能', pinyin: 'néng' },
                { char: '莫', pinyin: 'mò' },
                { char: '忘', pinyin: 'wàng' }
            ],
            translation: '知道过错就改正，得到才能莫忘记'
        },
        {
            characters: [
                { char: '罔', pinyin: 'wǎng' },
                { char: '谈', pinyin: 'tán' },
                { char: '彼', pinyin: 'bǐ' },
                { char: '短', pinyin: 'duǎn' },
                { char: '靡', pinyin: 'mí' },
                { char: '恃', pinyin: 'shì' },
                { char: '己', pinyin: 'jǐ' },
                { char: '长', pinyin: 'cháng' }
            ],
            translation: '不谈论他人短处，不依仗自己长处'
        },
        {
            characters: [
                { char: '信', pinyin: 'xìn' },
                { char: '使', pinyin: 'shǐ' },
                { char: '可', pinyin: 'kě' },
                { char: '复', pinyin: 'fù' },
                { char: '器', pinyin: 'qì' },
                { char: '欲', pinyin: 'yù' },
                { char: '难', pinyin: 'nán' },
                { char: '量', pinyin: 'liàng' }
            ],
            translation: '诚信使人可交往，器量要宽大无边'
        },
        {
            characters: [
                { char: '墨', pinyin: 'mò' },
                { char: '悲', pinyin: 'bēi' },
                { char: '丝', pinyin: 'sī' },
                { char: '染', pinyin: 'rǎn' },
                { char: '诗', pinyin: 'shī' },
                { char: '赋', pinyin: 'fù' },
                { char: '合', pinyin: 'hé' },
                { char: '声', pinyin: 'shēng' }
            ],
            translation: '用墨写字染丝作画，诗文文章要和谐'
        },
        {
            characters: [
                { char: '弦', pinyin: 'xián' },
                { char: '歌', pinyin: 'gē' },
                { char: '酒', pinyin: 'jiǔ' },
                { char: '宴', pinyin: 'yàn' },
                { char: '接', pinyin: 'jiē' },
                { char: '杯', pinyin: 'bēi' },
                { char: '举', pinyin: 'jǔ' },
                { char: '觞', pinyin: 'shāng' }
            ],
            translation: '弹琴唱歌饮酒宴会，传杯换盏要适量'
        },
        {
            characters: [
                { char: '礼', pinyin: 'lǐ' },
                { char: '义', pinyin: 'yì' },
                { char: '廉', pinyin: 'lián' },
                { char: '耻', pinyin: 'chǐ' },
                { char: '国', pinyin: 'guó' },
                { char: '之', pinyin: 'zhī' },
                { char: '四', pinyin: 'sì' },
                { char: '维', pinyin: 'wéi' }
            ],
            translation: '礼义廉耻，是治国的四大纲维'
        },
        {
            characters: [
                { char: '读', pinyin: 'dú' },
                { char: '书', pinyin: 'shū' },
                { char: '勤', pinyin: 'qín' },
                { char: '学', pinyin: 'xué' },
                { char: '立', pinyin: 'lì' },
                { char: '身', pinyin: 'shēn' },
                { char: '以', pinyin: 'yǐ' },
                { char: '道', pinyin: 'dào' }
            ],
            translation: '勤奋读书学习，以道德立身处世'
        },
        {
            characters: [
                { char: '孝', pinyin: 'xiào' },
                { char: '当', pinyin: 'dāng' },
                { char: '竭', pinyin: 'jié' },
                { char: '力', pinyin: 'lì' },
                { char: '忠', pinyin: 'zhōng' },
                { char: '则', pinyin: 'zé' },
                { char: '尽', pinyin: 'jìn' },
                { char: '心', pinyin: 'xīn' }
            ],
            translation: '孝顺要竭尽全力，忠诚要全心全意'
        },
        {
            characters: [
                { char: '临', pinyin: 'lín' },
                { char: '深', pinyin: 'shēn' },
                { char: '履', pinyin: 'lǚ' },
                { char: '薄', pinyin: 'báo' },
                { char: '夙', pinyin: 'sù' },
                { char: '兴', pinyin: 'xīng' },
                { char: '温', pinyin: 'wēn' },
                { char: '凊', pinyin: 'qìng' }
            ],
            translation: '走路要谨慎小心，起早要温习功课'
        },
        {
            characters: [
                { char: '摴', pinyin: 'shū' },
                { char: '兰', pinyin: 'lán' },
                { char: '博', pinyin: 'bó' },
                { char: '塞', pinyin: 'sāi' },
                { char: '弈', pinyin: 'yì' },
                { char: '棋', pinyin: 'qí' },
                { char: '时', pinyin: 'shí' },
                { char: '巧', pinyin: 'qiǎo' }
            ],
            translation: '摴蒲、博塞、围棋等游戏，要适时适量'
        },
        {
            characters: [
                { char: '升', pinyin: 'shēng' },
                { char: '阶', pinyin: 'jiē' },
                { char: '纳', pinyin: 'nà' },
                { char: '陛', pinyin: 'bì' },
                { char: '弁', pinyin: 'biàn' },
                { char: '转', pinyin: 'zhuǎn' },
                { char: '疑', pinyin: 'yí' },
                { char: '星', pinyin: 'xīng' }
            ],
            translation: '升官进爵如登天阶，冠冕像转动的星辰'
        },
        {
            characters: [
                { char: '右', pinyin: 'yòu' },
                { char: '通', pinyin: 'tōng' },
                { char: '广', pinyin: 'guǎng' },
                { char: '内', pinyin: 'nèi' },
                { char: '左', pinyin: 'zuǒ' },
                { char: '达', pinyin: 'dá' },
                { char: '承', pinyin: 'chéng' },
                { char: '明', pinyin: 'míng' }
            ],
            translation: '右边通向广内，左边达到承明'
        },
        {
            characters: [
                { char: '杨', pinyin: 'yáng' },
                { char: '伯', pinyin: 'bó' },
                { char: '雄', pinyin: 'xióng' },
                { char: '文', pinyin: 'wén' },
                { char: '王', pinyin: 'wáng' },
                { char: '注', pinyin: 'zhù' },
                { char: '易', pinyin: 'yì' },
                { char: '传', pinyin: 'chuán' }
            ],
            translation: '杨伯雄著文章，王弼注解易传'
        },
        {
            characters: [
                { char: '贾', pinyin: 'jiǎ' },
                { char: '思', pinyin: 'sī' },
                { char: '勤', pinyin: 'qín' },
                { char: '说', pinyin: 'shuō' },
                { char: '经', pinyin: 'jīng' },
                { char: '童', pinyin: 'tóng' },
                { char: '寻', pinyin: 'xún' },
                { char: '诗', pinyin: 'shī' }
            ],
            translation: '贾谊勤勉讲经，童子寻找诗句'
        },
        {
            characters: [
                { char: '彼', pinyin: 'bǐ' },
                { char: '既', pinyin: 'jì' },
                { char: '生', pinyin: 'shēng' },
                { char: '知', pinyin: 'zhī' },
                { char: '方', pinyin: 'fāng' },
                { char: '则', pinyin: 'zé' },
                { char: '任', pinyin: 'rèn' },
                { char: '真', pinyin: 'zhēn' }
            ],
            translation: '他们生来就有智慧，自然担当重任'
        },
        {
            characters: [
                { char: '羔', pinyin: 'gāo' },
                { char: '羊', pinyin: 'yáng' },
                { char: '美', pinyin: 'měi' },
                { char: '食', pinyin: 'shí' },
                { char: '众', pinyin: 'zhòng' },
                { char: '所', pinyin: 'suǒ' },
                { char: '同', pinyin: 'tóng' },
                { char: '羡', pinyin: 'xiàn' }
            ],
            translation: '羔羊肉是美味，大家都羡慕喜爱'
        },
        {
            characters: [
                { char: '融', pinyin: 'róng' },
                { char: '和', pinyin: 'hé' },
                { char: '雅', pinyin: 'yǎ' },
                { char: '俗', pinyin: 'sú' },
                { char: '皆', pinyin: 'jiē' },
                { char: '共', pinyin: 'gòng' },
                { char: '取', pinyin: 'qǔ' },
                { char: '容', pinyin: 'róng' }
            ],
            translation: '雅俗要融和，大家都要包容'
        },
        {
            characters: [
                { char: '绸', pinyin: 'chóu' },
                { char: '缪', pinyin: 'miù' },
                { char: '束', pinyin: 'shù' },
                { char: '修', pinyin: 'xiū' },
                { char: '永', pinyin: 'yǒng' },
                { char: '思', pinyin: 'sī' },
                { char: '深', pinyin: 'shēn' },
                { char: '虑', pinyin: 'lǜ' }
            ],
            translation: '谨慎地修身养性，永远要深思熟虑'
        },
        {
            characters: [
                { char: '磨', pinyin: 'mó' },
                { char: '砺', pinyin: 'lì' },
                { char: '以', pinyin: 'yǐ' },
                { char: '须', pinyin: 'xū' },
                { char: '温', pinyin: 'wēn' },
                { char: '故', pinyin: 'gù' },
                { char: '知', pinyin: 'zhī' },
                { char: '新', pinyin: 'xīn' }
            ],
            translation: '磨练是必需的，温故才能知新'
        },
        {
            characters: [
                { char: '画', pinyin: 'huà' },
                { char: '彩', pinyin: 'cǎi' },
                { char: '仔', pinyin: 'zǐ' },
                { char: '细', pinyin: 'xì' },
                { char: '情', pinyin: 'qíng' },
                { char: '深', pinyin: 'shēn' },
                { char: '意', pinyin: 'yì' },
                { char: '远', pinyin: 'yuǎn' }
            ],
            translation: '绘画要仔细讲究，感情要深远长久'
        },
        {
            characters: [
                { char: '毕', pinyin: 'bì' },
                { char: '恭', pinyin: 'gōng' },
                { char: '俨', pinyin: 'yǎn' },
                { char: '恪', pinyin: 'kè' },
                { char: '守', pinyin: 'shǒu' },
                { char: '规', pinyin: 'guī' },
                { char: '司', pinyin: 'sī' },
                { char: '职', pinyin: 'zhí' }
            ],
            translation: '要恭敬谨慎，遵守规矩尽职责'
        },
        {
            characters: [
                { char: '焚', pinyin: 'fén' },
                { char: '膏', pinyin: 'gāo' },
                { char: '继', pinyin: 'jì' },
                { char: '晷', pinyin: 'guǐ' },
                { char: '昼', pinyin: 'zhòu' },
                { char: '夜', pinyin: 'yè' },
                { char: '勤', pinyin: 'qín' },
                { char: '学', pinyin: 'xué' }
            ],
            translation: '点灯熬油继续读书，昼夜勤奋学习'
        },
        {
            characters: [
                { char: '博', pinyin: 'bó' },
                { char: '览', pinyin: 'lǎn' },
                { char: '群', pinyin: 'qún' },
                { char: '书', pinyin: 'shū' },
                { char: '参', pinyin: 'cān' },
                { char: '纂', pinyin: 'zuǎn' },
                { char: '机', pinyin: 'jī' },
                { char: '要', pinyin: 'yào' }
            ],
            translation: '广泛阅读群书，参考总结要领'
        },
        {
            characters: [
                { char: '诚', pinyin: 'chéng' },
                { char: '敬', pinyin: 'jìng' },
                { char: '谨', pinyin: 'jǐn' },
                { char: '慎', pinyin: 'shèn' },
                { char: '待', pinyin: 'dài' },
                { char: '人', pinyin: 'rén' },
                { char: '以', pinyin: 'yǐ' },
                { char: '礼', pinyin: 'lǐ' }
            ],
            translation: '诚恳恭敬谨慎，以礼待人接物'
        },
        {
            characters: [
                { char: '静', pinyin: 'jìng' },
                { char: '扫', pinyin: 'sǎo' },
                { char: '阶', pinyin: 'jiē' },
                { char: '前', pinyin: 'qián' },
                { char: '安', pinyin: 'ān' },
                { char: '置', pinyin: 'zhì' },
                { char: '物', pinyin: 'wù' },
                { char: '华', pinyin: 'huá' }
            ],
            translation: '静心打扫台阶，安放整齐物品'
        },
        {
            characters: [
                { char: '祸', pinyin: 'huò' },
                { char: '因', pinyin: 'yīn' },
                { char: '恶', pinyin: 'è' },
                { char: '积', pinyin: 'jī' },
                { char: '福', pinyin: 'fú' },
                { char: '缘', pinyin: 'yuán' },
                { char: '善', pinyin: 'shàn' },
                { char: '庆', pinyin: 'qìng' }
            ],
            translation: '祸因恶事积累，福从善行而来'
        },
        {
            characters: [
                { char: '尺', pinyin: 'chǐ' },
                { char: '璧', pinyin: 'bì' },
                { char: '非', pinyin: 'fēi' },
                { char: '宝', pinyin: 'bǎo' },
                { char: '寸', pinyin: 'cùn' },
                { char: '阴', pinyin: 'yīn' },
                { char: '是', pinyin: 'shì' },
                { char: '竞', pinyin: 'jìng' }
            ],
            translation: '尺璧不算珍宝，寸阴争分夺秒'
        },
        {
            characters: [
                { char: '资', pinyin: 'zī' },
                { char: '父', pinyin: 'fù' },
                { char: '事', pinyin: 'shì' },
                { char: '君', pinyin: 'jūn' },
                { char: '曰', pinyin: 'yuē' },
                { char: '严', pinyin: 'yán' },
                { char: '与', pinyin: 'yǔ' },
                { char: '敬', pinyin: 'jìng' }
            ],
            translation: '侍奉父母君长，要严肃又恭敬'
        },
        {
            characters: [
                { char: '孝', pinyin: 'xiào' },
                { char: '友', pinyin: 'yǒu' },
                { char: '忠', pinyin: 'zhōng' },
                { char: '信', pinyin: 'xìn' },
                { char: '礼', pinyin: 'lǐ' },
                { char: '义', pinyin: 'yì' },
                { char: '廉', pinyin: 'lián' },
                { char: '节', pinyin: 'jié' }
            ],
            translation: '孝顺友爱忠信，礼义廉耻节操'
        },
        {
            characters: [
                { char: '笔', pinyin: 'bǐ' },
                { char: '砚', pinyin: 'yàn' },
                { char: '纸', pinyin: 'zhǐ' },
                { char: '墨', pinyin: 'mò' },
                { char: '立', pinyin: 'lì' },
                { char: '案', pinyin: 'àn' },
                { char: '旁', pinyin: 'páng' },
                { char: '斜', pinyin: 'xié' }
            ],
            translation: '笔墨纸砚摆放整齐，案几端正不歪斜'
        },
        {
            characters: [
                { char: '琴', pinyin: 'qín' },
                { char: '瑟', pinyin: 'sè' },
                { char: '击', pinyin: 'jī' },
                { char: '鼓', pinyin: 'gǔ' },
                { char: '宫', pinyin: 'gōng' },
                { char: '商', pinyin: 'shāng' },
                { char: '角', pinyin: 'jué' },
                { char: '徵', pinyin: 'zhǐ' }
            ],
            translation: '琴瑟和鼓，演奏宫商角徵音律'
        },
        {
            characters: [
                { char: '渔', pinyin: 'yú' },
                { char: '樵', pinyin: 'qiáo' },
                { char: '耕', pinyin: 'gēng' },
                { char: '读', pinyin: 'dú' },
                { char: '自', pinyin: 'zì' },
                { char: '得', pinyin: 'dé' },
                { char: '之', pinyin: 'zhī' },
                { char: '趣', pinyin: 'qù' }
            ],
            translation: '打渔砍柴耕田读书，自有一番乐趣'
        },
        {
            characters: [
                { char: '梅', pinyin: 'méi' },
                { char: '兰', pinyin: 'lán' },
                { char: '竹', pinyin: 'zhú' },
                { char: '菊', pinyin: 'jú' },
                { char: '岁', pinyin: 'suì' },
                { char: '寒', pinyin: 'hán' },
                { char: '知', pinyin: 'zhī' },
                { char: '音', pinyin: 'yīn' }
            ],
            translation: '梅兰竹菊四君子，岁寒仍见其风骨'
        },
        {
            characters: [
                { char: '柳', pinyin: 'liǔ' },
                { char: '绿', pinyin: 'lǜ' },
                { char: '更', pinyin: 'gèng' },
                { char: '深', pinyin: 'shēn' },
                { char: '花', pinyin: 'huā' },
                { char: '红', pinyin: 'hóng' },
                { char: '未', pinyin: 'wèi' },
                { char: '了', pinyin: 'liǎo' }
            ],
            translation: '柳色更加深绿，花红正开未谢'
        },
        {
            characters: [
                { char: '池', pinyin: 'chí' },
                { char: '塘', pinyin: 'táng' },
                { char: '春', pinyin: 'chūn' },
                { char: '草', pinyin: 'cǎo' },
                { char: '院', pinyin: 'yuàn' },
                { char: '落', pinyin: 'luò' },
                { char: '花', pinyin: 'huā' },
                { char: '香', pinyin: 'xiāng' }
            ],
            translation: '池塘春草青青，庭院落花飘香'
        },
        {
            characters: [
                { char: '树', pinyin: 'shù' },
                { char: '木', pinyin: 'mù' },
                { char: '丛', pinyin: 'cóng' },
                { char: '生', pinyin: 'shēng' },
                { char: '山', pinyin: 'shān' },
                { char: '水', pinyin: 'shuǐ' },
                { char: '速', pinyin: 'sù' },
                { char: '流', pinyin: 'liú' }
            ],
            translation: '树木丛生茂密，山涧流水湍急'
        },
        {
            characters: [
                { char: '吉', pinyin: 'jí' },
                { char: '凶', pinyin: 'xiōng' },
                { char: '悔', pinyin: 'huǐ' },
                { char: '吝', pinyin: 'lìn' },
                { char: '趋', pinyin: 'qū' },
                { char: '吉', pinyin: 'jí' },
                { char: '避', pinyin: 'bì' },
                { char: '凶', pinyin: 'xiōng' }
            ],
            translation: '吉凶祸福难料，趋吉避凶为要'
        },
        {
            characters: [
                { char: '容', pinyin: 'róng' },
                { char: '止', pinyin: 'zhǐ' },
                { char: '若', pinyin: 'ruò' },
                { char: '思', pinyin: 'sī' },
                { char: '言', pinyin: 'yán' },
                { char: '辞', pinyin: 'cí' },
                { char: '安', pinyin: 'ān' },
                { char: '定', pinyin: 'dìng' }
            ],
            translation: '举止要沉稳，言辞要安定'
        },
        {
            characters: [
                { char: '笃', pinyin: 'dǔ' },
                { char: '初', pinyin: 'chū' },
                { char: '诚', pinyin: 'chéng' },
                { char: '美', pinyin: 'měi' },
                { char: '慎', pinyin: 'shèn' },
                { char: '终', pinyin: 'zhōng' },
                { char: '宜', pinyin: 'yí' },
                { char: '先', pinyin: 'xiān' }
            ],
            translation: '开始要笃实，结束要谨慎'
        },
        {
            characters: [
                { char: '荣', pinyin: 'róng' },
                { char: '业', pinyin: 'yè' },
                { char: '所', pinyin: 'suǒ' },
                { char: '基', pinyin: 'jī' },
                { char: '籍', pinyin: 'jí' },
                { char: '甚', pinyin: 'shèn' },
                { char: '无', pinyin: 'wú' },
                { char: '竟', pinyin: 'jìng' }
            ],
            translation: '事业有所根基，功名才能成就'
        },
        {
            characters: [
                { char: '学', pinyin: 'xué' },
                { char: '优', pinyin: 'yōu' },
                { char: '登', pinyin: 'dēng' },
                { char: '仕', pinyin: 'shì' },
                { char: '摄', pinyin: 'shè' },
                { char: '职', pinyin: 'zhí' },
                { char: '从', pinyin: 'cóng' },
                { char: '政', pinyin: 'zhèng' }
            ],
            translation: '学业优秀可做官，担任职务参与政事'
        },
        {
            characters: [
                { char: '存', pinyin: 'cún' },
                { char: '以', pinyin: 'yǐ' },
                { char: '甘', pinyin: 'gān' },
                { char: '棠', pinyin: 'táng' },
                { char: '去', pinyin: 'qù' },
                { char: '而', pinyin: 'ér' },
                { char: '益', pinyin: 'yì' },
                { char: '咏', pinyin: 'yǒng' }
            ],
            translation: '留下甘棠遗爱，离去后更受称颂'
        },
        {
            characters: [
                { char: '乐', pinyin: 'lè' },
                { char: '殊', pinyin: 'shū' },
                { char: '贵', pinyin: 'guì' },
                { char: '贱', pinyin: 'jiàn' },
                { char: '礼', pinyin: 'lǐ' },
                { char: '别', pinyin: 'bié' },
                { char: '尊', pinyin: 'zūn' },
                { char: '卑', pinyin: 'bēi' }
            ],
            translation: '音乐分贵贱，礼节别尊卑'
        },
        {
            characters: [
                { char: '上', pinyin: 'shàng' },
                { char: '和', pinyin: 'hé' },
                { char: '下', pinyin: 'xià' },
                { char: '睦', pinyin: 'mù' },
                { char: '夫', pinyin: 'fū' },
                { char: '唱', pinyin: 'chàng' },
                { char: '妇', pinyin: 'fù' },
                { char: '随', pinyin: 'suí' }
            ],
            translation: '上下和睦相处，夫妇和谐相随'
        },
        {
            characters: [
                { char: '外', pinyin: 'wài' },
                { char: '受', pinyin: 'shòu' },
                { char: '傅', pinyin: 'fù' },
                { char: '训', pinyin: 'xùn' },
                { char: '入', pinyin: 'rù' },
                { char: '奉', pinyin: 'fèng' },
                { char: '母', pinyin: 'mǔ' },
                { char: '仪', pinyin: 'yí' }
            ],
            translation: '外受师长教导，入则孝敬父母'
        },
        {
            characters: [
                { char: '诸', pinyin: 'zhū' },
                { char: '姑', pinyin: 'gū' },
                { char: '伯', pinyin: 'bó' },
                { char: '叔', pinyin: 'shū' },
                { char: '犹', pinyin: 'yóu' },
                { char: '子', pinyin: 'zǐ' },
                { char: '比', pinyin: 'bǐ' },
                { char: '儿', pinyin: 'ér' }
            ],
            translation: '姑嫂叔伯长辈，都要如同父母'
        },
        {
            characters: [
                { char: '孔', pinyin: 'kǒng' },
                { char: '怀', pinyin: 'huái' },
                { char: '兄', pinyin: 'xiōng' },
                { char: '弟', pinyin: 'dì' },
                { char: '同', pinyin: 'tóng' },
                { char: '气', pinyin: 'qì' },
                { char: '连', pinyin: 'lián' },
                { char: '枝', pinyin: 'zhī' }
            ],
            translation: '思念兄弟手足，同气连枝一体'
        },
        {
            characters: [
                { char: '交', pinyin: 'jiāo' },
                { char: '友', pinyin: 'yǒu' },
                { char: '投', pinyin: 'tóu' },
                { char: '分', pinyin: 'fèn' },
                { char: '切', pinyin: 'qiè' },
                { char: '磨', pinyin: 'mó' },
                { char: '箴', pinyin: 'zhēn' },
                { char: '规', pinyin: 'guī' }
            ],
            translation: '交友要投契合，互相切磋规劝'
        },
        {
            characters: [
                { char: '仁', pinyin: 'rén' },
                { char: '慈', pinyin: 'cí' },
                { char: '隐', pinyin: 'yǐn' },
                { char: '恻', pinyin: 'cè' },
                { char: '造', pinyin: 'zào' },
                { char: '次', pinyin: 'cì' },
                { char: '弗', pinyin: 'fú' },
                { char: '离', pinyin: 'lí' }
            ],
            translation: '仁慈要发自内心，造次也不能忘记'
        },
        {
            characters: [
                { char: '节', pinyin: 'jié' },
                { char: '义', pinyin: 'yì' },
                { char: '廉', pinyin: 'lián' },
                { char: '退', pinyin: 'tuì' },
                { char: '颠', pinyin: 'diān' },
                { char: '沛', pinyin: 'pèi' },
                { char: '匪', pinyin: 'fěi' },
                { char: '亏', pinyin: 'kuī' }
            ],
            translation: '节义廉退的品德，颠沛流离不亏损'
        },
        {
            characters: [
                { char: '性', pinyin: 'xìng' },
                { char: '静', pinyin: 'jìng' },
                { char: '情', pinyin: 'qíng' },
                { char: '逸', pinyin: 'yì' },
                { char: '心', pinyin: 'xīn' },
                { char: '动', pinyin: 'dòng' },
                { char: '神', pinyin: 'shén' },
                { char: '疲', pinyin: 'pí' }
            ],
            translation: '性情安静则逸适，心神躁动则疲惫'
        },
        {
            characters: [
                { char: '守', pinyin: 'shǒu' },
                { char: '真', pinyin: 'zhēn' },
                { char: '志', pinyin: 'zhì' },
                { char: '满', pinyin: 'mǎn' },
                { char: '逐', pinyin: 'zhú' },
                { char: '物', pinyin: 'wù' },
                { char: '意', pinyin: 'yì' },
                { char: '移', pinyin: 'yí' }
            ],
            translation: '守住真心志气满，追逐外物意志移'
        },
        {
            characters: [
                { char: '坚', pinyin: 'jiān' },
                { char: '持', pinyin: 'chí' },
                { char: '雅', pinyin: 'yǎ' },
                { char: '操', pinyin: 'cāo' },
                { char: '好', pinyin: 'hào' },
                { char: '爵', pinyin: 'jué' },
                { char: '自', pinyin: 'zì' },
                { char: '縻', pinyin: 'mí' }
            ],
            translation: '坚持高雅品操，美好爵位自来'
        },
        {
            characters: [
                { char: '都', pinyin: 'dōu' },
                { char: '邑', pinyin: 'yì' },
                { char: '华', pinyin: 'huá' },
                { char: '夏', pinyin: 'xià' },
                { char: '东', pinyin: 'dōng' },
                { char: '西', pinyin: 'xī' },
                { char: '二', pinyin: 'èr' },
                { char: '京', pinyin: 'jīng' }
            ],
            translation: '都城华夏文��，东西二京繁荣'
        },
        {
            characters: [
                { char: '背', pinyin: 'bèi' },
                { char: '邙', pinyin: 'máng' },
                { char: '面', pinyin: 'miàn' },
                { char: '洛', pinyin: 'luò' },
                { char: '浮', pinyin: 'fú' },
                { char: '渭', pinyin: 'wèi' },
                { char: '据', pinyin: 'jù' },
                { char: '泾', pinyin: 'jīng' }
            ],
            translation: '背靠邙山面洛水，浮渭水据泾河'
        },
        {
            characters: [
                { char: '宫', pinyin: 'gōng' },
                { char: '殿', pinyin: 'diàn' },
                { char: '盘', pinyin: 'pán' },
                { char: '郁', pinyin: 'yù' },
                { char: '楼', pinyin: 'lóu' },
                { char: '观', pinyin: 'guān' },
                { char: '飞', pinyin: 'fēi' },
                { char: '惊', pinyin: 'jīng' }
            ],
            translation: '宫殿重重盘旋，楼观高耸入云'
        },
        {
            characters: [
                { char: '图', pinyin: 'tú' },
                { char: '写', pinyin: 'xiě' },
                { char: '禽', pinyin: 'qín' },
                { char: '兽', pinyin: 'shòu' },
                { char: '画', pinyin: 'huà' },
                { char: '彩', pinyin: 'cǎi' },
                { char: '仙', pinyin: 'xiān' },
                { char: '灵', pinyin: 'líng' }
            ],
            translation: '图画飞禽走兽，彩绘仙人灵物'
        },
        {
            characters: [
                { char: '丙', pinyin: 'bǐng' },
                { char: '舍', pinyin: 'shè' },
                { char: '旁', pinyin: 'páng' },
                { char: '启', pinyin: 'qǐ' },
                { char: '甲', pinyin: 'jiǎ' },
                { char: '帐', pinyin: 'zhàng' },
                { char: '对', pinyin: 'duì' },
                { char: '楹', pinyin: 'yíng' }
            ],
            translation: '丙舍旁边开启，甲帐对着门楹'
        },
        {
            characters: [
                { char: '肆', pinyin: 'sì' },
                { char: '筵', pinyin: 'yán' },
                { char: '设', pinyin: 'shè' },
                { char: '席', pinyin: 'xí' },
                { char: '鼓', pinyin: 'gǔ' },
                { char: '瑟', pinyin: 'sè' },
                { char: '吹', pinyin: 'chuī' },
                { char: '笙', pinyin: 'shēng' }
            ],
            translation: '摆设宴席筵席，鼓瑟吹笙演奏'
        },
        {
            characters: [
                { char: '升', pinyin: 'shēng' },
                { char: '阶', pinyin: 'jiē' },
                { char: '纳', pinyin: 'nà' },
                { char: '陛', pinyin: 'bì' },
                { char: '弁', pinyin: 'biàn' },
                { char: '转', pinyin: 'zhuǎn' },
                { char: '疑', pinyin: 'yí' },
                { char: '星', pinyin: 'xīng' }
            ],
            translation: '登上台阶御阶，冠冕如星闪耀'
        },
        {
            characters: [
                { char: '右', pinyin: 'yòu' },
                { char: '通', pinyin: 'tōng' },
                { char: '广', pinyin: 'guǎng' },
                { char: '内', pinyin: 'nèi' },
                { char: '左', pinyin: 'zuǒ' },
                { char: '达', pinyin: 'dá' },
                { char: '承', pinyin: 'chéng' },
                { char: '明', pinyin: 'míng' }
            ],
            translation: '右通广内殿，左达承明廷'
        },
        {
            characters: [
                { char: '既', pinyin: 'jì' },
                { char: '集', pinyin: 'jí' },
                { char: '坟', pinyin: 'fén' },
                { char: '典', pinyin: 'diǎn' },
                { char: '亦', pinyin: 'yì' },
                { char: '聚', pinyin: 'jù' },
                { char: '群', pinyin: 'qún' },
                { char: '英', pinyin: 'yīng' }
            ],
            translation: '收集典籍文献，聚集英才贤能'
        },
        {
            characters: [
                { char: '杜', pinyin: 'dù' },
                { char: '稿', pinyin: 'gǎo' },
                { char: '钟', pinyin: 'zhōng' },
                { char: '隶', pinyin: 'lì' },
                { char: '漆', pinyin: 'qī' },
                { char: '书', pinyin: 'shū' },
                { char: '壁', pinyin: 'bì' },
                { char: '经', pinyin: 'jīng' }
            ],
            translation: '杜草钟隶书法，漆书刻写经典'
        },
        {
            characters: [
                { char: '府', pinyin: 'fǔ' },
                { char: '罗', pinyin: 'luó' },
                { char: '将', pinyin: 'jiāng' },
                { char: '相', pinyin: 'xiāng' },
                { char: '路', pinyin: 'lù' },
                { char: '侠', pinyin: 'xiá' },
                { char: '槐', pinyin: 'huái' },
                { char: '卿', pinyin: 'qīng' }
            ],
            translation: '府中将相大臣，路有侠士槐卿'
        },
        {
            characters: [
                { char: '户', pinyin: 'hù' },
                { char: '封', pinyin: 'fēng' },
                { char: '八', pinyin: 'bā' },
                { char: '县', pinyin: 'xiàn' },
                { char: '家', pinyin: 'jiā' },
                { char: '给', pinyin: 'jǐ' },
                { char: '千', pinyin: 'qiān' },
                { char: '��', pinyin: 'bīng' }
            ],
            translation: '户封八县采邑，家给千兵供养'
        },
        {
            characters: [
                { char: '高', pinyin: 'gāo' },
                { char: '冠', pinyin: 'guān' },
                { char: '陪', pinyin: 'péi' },
                { char: '驾', pinyin: 'jià' },
                { char: '驱', pinyin: 'qū' },
                { char: '毂', pinyin: 'gǔ' },
                { char: '振', pinyin: 'zhèn' },
                { char: '缨', pinyin: 'yīng' }
            ],
            translation: '高冠陪驾出行，驱车振缨而进'
        },
        {
            characters: [
                { char: '世', pinyin: 'shì' },
                { char: '禄', pinyin: 'lù' },
                { char: '侈', pinyin: 'chǐ' },
                { char: '富', pinyin: 'fù' },
                { char: '车', pinyin: 'chē' },
                { char: '驾', pinyin: 'jià' },
                { char: '肥', pinyin: 'féi' },
                { char: '轻', pinyin: 'qīng' }
            ],
            translation: '世代禄位富贵，车驾肥马轻裘'
        },
        {
            characters: [
                { char: '策', pinyin: 'cè' },
                { char: '功', pinyin: 'gōng' },
                { char: '茂', pinyin: 'mào' },
                { char: '实', pinyin: 'shí' },
                { char: '勒', pinyin: 'lè' },
                { char: '碑', pinyin: 'bēi' },
                { char: '刻', pinyin: 'kè' },
                { char: '铭', pinyin: 'míng' }
            ],
            translation: '策勋功绩茂盛，勒碑刻铭记功'
        },
        {
            characters: [
                { char: '磻', pinyin: 'pán' },
                { char: '溪', pinyin: 'xī' },
                { char: '伊', pinyin: 'yī' },
                { char: '尹', pinyin: 'yǐn' },
                { char: '佐', pinyin: 'zuǒ' },
                { char: '时', pinyin: 'shí' },
                { char: '阿', pinyin: 'ā' },
                { char: '衡', pinyin: 'héng' }
            ],
            translation: '磻溪遇伊尹，阿衡相天子'
        },
        {
            characters: [
                { char: '奄', pinyin: 'yǎn' },
                { char: '宅', pinyin: 'zhái' },
                { char: '曲', pinyin: 'qǔ' },
                { char: '阜', pinyin: 'fù' },
                { char: '微', pinyin: 'wēi' },
                { char: '旦', pinyin: 'dàn' },
                { char: '孰', pinyin: 'shú' },
                { char: '营', pinyin: 'yíng' }
            ],
            translation: '奄国曲阜邑，周公营洛邑'
        },
        {
            characters: [
                { char: '桓', pinyin: 'huán' },
                { char: '公', pinyin: 'gōng' },
                { char: '匡', pinyin: 'kuāng' },
                { char: '合', pinyin: 'hé' },
                { char: '济', pinyin: 'jì' },
                { char: '弱', pinyin: 'ruò' },
                { char: '扶', pinyin: 'fú' },
                { char: '倾', pinyin: 'qīng' }
            ],
            translation: '桓公行霸道，匡合天下事'
        },
        {
            characters: [
                { char: '绮', pinyin: 'qǐ' },
                { char: '回', pinyin: 'huí' },
                { char: '汉', pinyin: 'hàn' },
                { char: '惠', pinyin: 'huì' },
                { char: '说', pinyin: 'shuō' },
                { char: '感', pinyin: 'gǎn' },
                { char: '武', pinyin: 'wǔ' },
                { char: '丁', pinyin: 'dīng' }
            ],
            translation: '绮回说汉惠，感动武丁心'
        },
        {
            characters: [
                { char: '俊', pinyin: 'jùn' },
                { char: '乂', pinyin: 'yì' },
                { char: '密', pinyin: 'mì' },
                { char: '勿', pinyin: 'wù' },
                { char: '多', pinyin: 'duō' },
                { char: '士', pinyin: 'shì' },
                { char: '寡', pinyin: 'guǎ' },
                { char: '徒', pinyin: 'tú' }
            ],
            translation: '贤臣辅佐主，不可太多徒'
        },
        {
            characters: [
                { char: '求', pinyin: 'qiú' },
                { char: '古', pinyin: 'gǔ' },
                { char: '寻', pinyin: 'xún' },
                { char: '论', pinyin: 'lùn' },
                { char: '画', pinyin: 'huà' },
                { char: '坐', pinyin: 'zuò' },
                { char: '铺', pinyin: 'pū' },
                { char: '图', pinyin: 'tú' }
            ],
            translation: '探求古代事，参详图画论'
        },
        {
            characters: [
                { char: '急', pinyin: 'jí' },
                { char: '如', pinyin: 'rú' },
                { char: '星', pinyin: 'xīng' },
                { char: '火', pinyin: 'huǒ' },
                { char: '周', pinyin: 'zhōu' },
                { char: '书', pinyin: 'shū' },
                { char: '双', pinyin: 'shuāng' },
                { char: '照', pinyin: 'zhào' }
            ],
            translation: '急如星火速，周书昭事明'
        },
        {
            characters: [
                { char: '陈', pinyin: 'chén' },
                { char: '谋', pinyin: 'móu' },
                { char: '贵', pinyin: 'guì' },
                { char: '达', pinyin: 'dá' },
                { char: '施', pinyin: 'shī' },
                { char: '惠', pinyin: 'huì' },
                { char: '无', pinyin: 'wú' },
                { char: '疆', pinyin: 'jiāng' }
            ],
            translation: '谋略要通达，恩惠布四方'
        },
        {
            characters: [
                { char: '临', pinyin: 'lín' },
                { char: '皋', pinyin: 'gāo' },
                { char: '幸', pinyin: 'xìng' },
                { char: '即', pinyin: 'jí' },
                { char: '两', pinyin: 'liǎng' },
                { char: '疏', pinyin: 'shū' },
                { char: '见', pinyin: 'jiàn' },
                { char: '亲', pinyin: 'qīn' }
            ],
            translation: '临皋即上位，疏远与亲近'
        },
        {
            characters: [
                { char: '孟', pinyin: 'mèng' },
                { char: '轲', pinyin: 'kē' },
                { char: '敦', pinyin: 'dūn' },
                { char: '素', pinyin: 'sù' },
                { char: '史', pinyin: 'shǐ' },
                { char: '鱼', pinyin: 'yú' },
                { char: '秉', pinyin: 'bǐng' },
                { char: '直', pinyin: 'zhí' }
            ],
            translation: '孟轲品德高，史鱼秉性直'
        },
        {
            characters: [
                { char: '庶', pinyin: 'shù' },
                { char: '几', pinyin: 'jī' },
                { char: '中', pinyin: 'zhōng' },
                { char: '庸', pinyin: 'yōng' },
                { char: '劳', pinyin: 'láo' },
                { char: '谦', pinyin: 'qiān' },
                { char: '谨', pinyin: 'jǐn' },
                { char: '敕', pinyin: 'chì' }
            ],
            translation: '为人要中庸，谦虚又谨慎'
        },
        {
            characters: [
                { char: '聆', pinyin: 'líng' },
                { char: '音', pinyin: 'yīn' },
                { char: '察', pinyin: 'chá' },
                { char: '理', pinyin: 'lǐ' },
                { char: '鉴', pinyin: 'jiàn' },
                { char: '貌', pinyin: 'mào' },
                { char: '辨', pinyin: 'biàn' },
                { char: '色', pinyin: 'sè' }
            ],
            translation: '倾听辨音理，观察明事理'
        },
        {
            characters: [
                { char: '贻', pinyin: 'yí' },
                { char: '厥', pinyin: 'jué' },
                { char: '嘉', pinyin: 'jiā' },
                { char: '猷', pinyin: 'yóu' },
                { char: '勉', pinyin: 'miǎn' },
                { char: '其', pinyin: 'qí' },
                { char: '祗', pinyin: 'zhī' },
                { char: '植', pinyin: 'zhí' }
            ],
            translation: '留下好谋略，勉励要谨慎'
        },
        {
            characters: [
                { char: '省', pinyin: 'xǐng' },
                { char: '躬', pinyin: 'gōng' },
                { char: '讥', pinyin: 'jī' },
                { char: '诫', pinyin: 'jiè' },
                { char: '宠', pinyin: 'chǒng' },
                { char: '增', pinyin: 'zēng' },
                { char: '抗', pinyin: 'kàng' },
                { char: '极', pinyin: 'jí' }
            ],
            translation: '反省听规劝，恩宠要节制'
        },
        {
            characters: [
                { char: '殆', pinyin: 'dài' },
                { char: '辱', pinyin: 'rǔ' },
                { char: '近', pinyin: 'jìn' },
                { char: '耻', pinyin: 'chǐ' },
                { char: '林', pinyin: 'lín' },
                { char: '皋', pinyin: 'gāo' },
                { char: '幸', pinyin: 'xìng' },
                { char: '遇', pinyin: 'yù' }
            ],
            translation: '危辱近耻辱，林皋幸遇遇'
        },
        {
            characters: [
                { char: '两', pinyin: 'liǎng' },
                { char: '疏', pinyin: 'shū' },
                { char: '见', pinyin: 'jiàn' },
                { char: '机', pinyin: 'jī' },
                { char: '解', pinyin: 'jiě' },
                { char: '组', pinyin: 'zǔ' },
                { char: '谁', pinyin: 'shuí' },
                { char: '逼', pinyin: 'bī' }
            ],
            translation: '疏远见机变，解组去官职'
        },
        {
            characters: [
                { char: '索', pinyin: 'suǒ' },
                { char: '居', pinyin: 'jū' },
                { char: '闲', pinyin: 'xián' },
                { char: '处', pinyin: 'chù' },
                { char: '沉', pinyin: 'chén' },
                { char: '默', pinyin: 'mò' },
                { char: '寂', pinyin: 'jì' },
                { char: '寥', pinyin: 'liáo' }
            ],
            translation: '独居闲静处，沉默寂寥中'
        },
        {
            characters: [
                { char: '求', pinyin: 'qiú' },
                { char: '古', pinyin: 'gǔ' },
                { char: '澹', pinyin: 'dàn' },
                { char: '泊', pinyin: 'bó' },
                { char: '干', pinyin: 'gān' },
                { char: '谒', pinyin: 'yè' },
                { char: '犹', pinyin: 'yóu' },
                { char: '勤', pinyin: 'qín' }
            ],
            translation: '追求古朴道，谒见要勤恳'
        },
        {
            characters: [
                { char: '布', pinyin: 'bù' },
                { char: '衣', pinyin: 'yī' },
                { char: '粗', pinyin: 'cū' },
                { char: '食', pinyin: 'shí' },
                { char: '斗', pinyin: 'dǒu' },
                { char: '粟', pinyin: 'sù' },
                { char: '斤', pinyin: 'jīn' },
                { char: '肉', pinyin: 'ròu' }
            ],
            translation: '布衣粗食简，斗米斤肉足'
        },
        {
            characters: [
                { char: '亲', pinyin: 'qīn' },
                { char: '戚', pinyin: 'qī' },
                { char: '故', pinyin: 'gù' },
                { char: '旧', pinyin: 'jiù' },
                { char: '老', pinyin: 'lǎo' },
                { char: '少', pinyin: 'shào' },
                { char: '异', pinyin: 'yì' },
                { char: '粮', pinyin: 'liáng' }
            ],
            translation: '亲戚与故旧，老少各有别'
        }
    ]
};

// 导出数据
if (typeof module !== 'undefined' && module.exports) {
    module.exports = thousandCharacterData;
} 