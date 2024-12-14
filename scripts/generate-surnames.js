// 百家姓原文
const text = `赵钱孙李，周吴郑王。
冯陈褚卫，蒋沈韩杨。
朱秦尤许，何吕施张。
孔曹严华，金魏陶姜。
戚谢邹喻，柏水窦章。
云苏潘葛，奚范彭郎。
鲁韦昌马，苗凤花方。
俞任袁柳，酆鲍史唐。
费廉岑薛，雷贺倪汤。
滕殷罗毕，郝邬安常。
乐于时傅，皮卞齐康。
伍余元卜，顾孟平黄。
和穆萧尹，姚邵湛汪。
祁毛禹狄，米贝明臧。
计伏成戴，谈宋茅庞。
熊纪舒屈，项祝董梁。
杜阮蓝闵，席季麻强。
贾路娄危，江童颜郭。
梅盛林刁，钟徐邱骆。
高夏蔡田，樊胡凌霍。
虞万支柯，昝管卢莫。
经房裘缪，干解应宗。
丁宣贲邓，郁单杭洪。
包诸左石，崔吉钮龚。
程嵇邢滑，裴陆荣翁。`;

// 分割成句子
const sentences = text.split('\n').map(line => line.trim()).filter(line => line);

// 检查句子数量
console.log(`总句数：${sentences.length}`);

// 检查每句字数（包含逗号）
sentences.forEach((sentence, index) => {
    if (sentence.length !== 9) { // 8个字+1个句号
        console.log(`警告：第${index + 1}句长度不正确：${sentence}`);
    }
});

// 生成游戏数据
const gameData = sentences.map((sentence, index) => {
    // 移除句号
    const text = sentence.slice(0, -1);
    
    // 分割字符
    const chars = text.split('');
    
    // 生成字符数据
    const characters = chars.map(char => {
        if (char === '，') {
            return {
                char: char,
                pinyin: "",
                options: [char]
            };
        }
        
        return {
            char: char,
            pinyin: "PINYIN", // 需要手动填写
            options: [char, "OPTION1", "OPTION2", "OPTION3"] // 需要手动填写
        };
    });
    
    return {
        id: index + 1,
        text: text,
        characters: characters
    };
});

// 输出JSON
const fs = require('fs');
fs.writeFileSync('temp-surnames.json', JSON.stringify(gameData, null, 2), 'utf8');

// 统计信息
const totalChars = sentences.join('').replace(/[，。]/g, '').length;
console.log(`总姓氏数：${totalChars}`); 