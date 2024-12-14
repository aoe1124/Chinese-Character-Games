// 游戏状态
let currentSentenceIndex = 0;
let currentCharacterIndex = 0;
let gameMode = 'sequence'; // 'sequence' 或 'random'

// DOM 元素
const fullSentenceElement = document.querySelector('.full-sentence');
const bigCharacterElement = document.querySelector('.big-character');
const characterOptionsElement = document.querySelector('.character-options');
const feedbackArea = document.querySelector('.feedback-area');
const currentSentenceSpan = document.querySelector('.current-sentence');
const totalSentencesSpan = document.querySelector('.total-sentences');
const modeBtns = document.querySelectorAll('.mode-btn');

// 初始化游戏
function initGame() {
    // 设置总句子数
    totalSentencesSpan.textContent = thousandCharacterData.sentences.length;
    
    // 初始化模式切换按钮
    modeBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            modeBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            gameMode = btn.dataset.mode;
            resetGame();
        });
    });

    // 显示第一句
    showCurrentSentence();
}

// 重置游戏
function resetGame() {
    currentSentenceIndex = gameMode === 'random' ? 
        Math.floor(Math.random() * thousandCharacterData.sentences.length) : 0;
    currentCharacterIndex = 0;
    showCurrentSentence();
}

// 显示当前句子
function showCurrentSentence() {
    const currentSentence = thousandCharacterData.sentences[currentSentenceIndex];
    currentSentenceSpan.textContent = currentSentenceIndex + 1;

    // 构建句子显示
    let sentenceHTML = '<ruby>';
    currentSentence.characters.forEach(char => {
        sentenceHTML += `${char.char}<rt>${char.pinyin}</rt>`;
    });
    sentenceHTML += '</ruby>';
    fullSentenceElement.innerHTML = sentenceHTML;

    // 显示当前学习的字
    showCurrentCharacter();
}

// 显示当前字符
function showCurrentCharacter() {
    const currentSentence = thousandCharacterData.sentences[currentSentenceIndex];
    const currentChar = currentSentence.characters[currentCharacterIndex];
    
    // 更新大字显示
    bigCharacterElement.innerHTML = `${currentChar.char}<div class="big-character-grid"></div>`;
    
    // 生成选项
    generateOptions(currentChar.char);
}

// 生成选项
function generateOptions(correctChar) {
    // 清空选项区域
    characterOptionsElement.innerHTML = '';
    
    // 获取当前句子中的所有字符
    const allSentences = thousandCharacterData.sentences;
    const allChars = new Set(); // 使用Set避免重复字符
    
    // 添加正确答案
    allChars.add(correctChar);
    
    // 从其他句子中随机选择不同的字符
    while(allChars.size < 4) {
        const randomSentenceIndex = Math.floor(Math.random() * allSentences.length);
        const randomCharIndex = Math.floor(Math.random() * allSentences[randomSentenceIndex].characters.length);
        const randomChar = allSentences[randomSentenceIndex].characters[randomCharIndex].char;
        allChars.add(randomChar);
    }
    
    // 将选项转换为数组并打乱顺序
    const options = Array.from(allChars);
    for (let i = options.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [options[i], options[j]] = [options[j], options[i]];
    }
    
    // 创建选项按钮
    options.forEach(char => {
        const button = document.createElement('button');
        button.className = 'character-option';
        button.textContent = char;
        button.addEventListener('click', () => checkAnswer(char, correctChar));
        characterOptionsElement.appendChild(button);
    });
}

// 检查答案
function checkAnswer(selectedChar, correctChar) {
    const isCorrect = selectedChar === correctChar;
    
    // 显示反馈
    feedbackArea.innerHTML = isCorrect ? 
        '<div class="feedback correct">正确！</div>' : 
        '<div class="feedback incorrect">再试一次！</div>';
    
    if (isCorrect) {
        // 延迟后进入下一个字
        setTimeout(() => {
            currentCharacterIndex++;
            
            // 如果当前句子的所有字都学习完了
            if (currentCharacterIndex >= thousandCharacterData.sentences[currentSentenceIndex].characters.length) {
                currentCharacterIndex = 0;
                if (gameMode === 'sequence') {
                    currentSentenceIndex++;
                    // 如果所有句子都学习完了
                    if (currentSentenceIndex >= thousandCharacterData.sentences.length) {
                        currentSentenceIndex = 0; // 回到第一句
                    }
                } else {
                    // 随机模式下随机选择下一句
                    currentSentenceIndex = Math.floor(Math.random() * thousandCharacterData.sentences.length);
                }
                showCurrentSentence();
            } else {
                showCurrentCharacter();
            }
            
            feedbackArea.innerHTML = '';
        }, 1000);
    }
}

// 启动游戏
document.addEventListener('DOMContentLoaded', initGame); 