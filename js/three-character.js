// 游戏数据
const gameData = {
    currentMode: 'sequence', // 'sequence' 或 'random'
    currentSentenceIndex: 0, // 当前句子的索引
    currentCharIndex: 0, // 当前字的索引
    learnedSentences: new Set(), // 记录已学习的句子
    totalSentences: threeCharacterData.length // 三字经总句数
};

// DOM 元素
const elements = {
    bigCharacter: document.querySelector('.big-character'),
    characterOptions: document.querySelector('.character-options'),
    feedbackArea: document.querySelector('.feedback-area'),
    fullSentence: document.querySelector('.full-sentence'),
    modeBtns: document.querySelectorAll('.mode-btn'),
    currentSentence: document.querySelector('.current-sentence'),
    totalSentences: document.querySelector('.total-sentences')
};

// 初始化游戏
function initGame() {
    if (gameData.currentMode === 'random') {
        // 随机模式：随机选择一个未学习的句子
        selectRandomSentence();
    } else {
        // 顺序模式：从第一句开始
        gameData.currentSentenceIndex = 0;
    }
    gameData.currentCharIndex = 0;
    updateDisplay();
    createOptions();
    initModeSwitch();
    updateProgress();
}

// 初始化模式切换
function initModeSwitch() {
    elements.modeBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const mode = btn.dataset.mode;
            if (mode !== gameData.currentMode) {
                // 更新模式
                gameData.currentMode = mode;
                // 更新按钮状态
                elements.modeBtns.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                // 重置游戏状态
                gameData.learnedSentences.clear();
                if (mode === 'random') {
                    selectRandomSentence();
                } else {
                    gameData.currentSentenceIndex = 0;
                }
                gameData.currentCharIndex = 0;
                // 更新显示
                updateDisplay();
                createOptions();
                updateProgress();
            }
        });
    });
}

// 选择随机句子
function selectRandomSentence() {
    const unlearned = [];
    for (let i = 0; i < threeCharacterData.length; i++) {
        if (!gameData.learnedSentences.has(i)) {
            unlearned.push(i);
        }
    }
    
    if (unlearned.length > 0) {
        const randomIndex = Math.floor(Math.random() * unlearned.length);
        gameData.currentSentenceIndex = unlearned[randomIndex];
    } else {
        // 所有句子都学习过了，重新开始
        gameData.learnedSentences.clear();
        gameData.currentSentenceIndex = Math.floor(Math.random() * threeCharacterData.length);
    }
}

// 更新显示
function updateDisplay() {
    const currentSentence = threeCharacterData[gameData.currentSentenceIndex];
    const currentChar = currentSentence.characters[gameData.currentCharIndex];
    
    // 更新大字显示
    elements.bigCharacter.textContent = currentChar.char;
    
    // 更新完整句子显示
    elements.fullSentence.innerHTML = createFullSentenceHTML(currentSentence);
}

// 创建完整句子的HTML
function createFullSentenceHTML(sentence) {
    return sentence.text.split('').map(char => {
        if (char === '，' || char === '。') {
            return `<ruby>${char}<rt></rt></ruby>`;
        }
        const charData = sentence.characters.find(c => c.char === char);
        if (charData) {
            return `<ruby>${char}<rt>${charData.pinyin}</rt></ruby>`;
        }
        return char;
    }).join('');
}

// 创建选项
function createOptions() {
    elements.characterOptions.innerHTML = '';
    const currentSentence = threeCharacterData[gameData.currentSentenceIndex];
    const currentChar = currentSentence.characters[gameData.currentCharIndex];
    
    // 打乱选项顺序
    const shuffledOptions = shuffleArray([...currentChar.options]);
    
    shuffledOptions.forEach(option => {
        const button = document.createElement('button');
        button.className = 'character-option';
        button.textContent = option;
        button.addEventListener('click', () => checkAnswer(option));
        elements.characterOptions.appendChild(button);
    });
}

// 检查答案
function checkAnswer(selected) {
    const currentSentence = threeCharacterData[gameData.currentSentenceIndex];
    const currentChar = currentSentence.characters[gameData.currentCharIndex];
    const button = [...elements.characterOptions.children]
        .find(btn => btn.textContent === selected);
    
    if (selected === currentChar.char) {
        // 答对了
        button.classList.add('correct');
        elements.feedbackArea.textContent = '答对了！😊';
        
        // 禁用所有按钮，防止重复点击
        [...elements.characterOptions.children].forEach(btn => {
            btn.style.pointerEvents = 'none';
        });
        
        // 延迟后进入下一个字
        setTimeout(() => {
            nextCharacter();
        }, 1000);
    } else {
        // 答错了
        button.classList.add('incorrect');
        elements.feedbackArea.textContent = '再试试看～';
        setTimeout(() => {
            button.classList.remove('incorrect');
        }, 500);
    }
}

// 进入下一个字
function nextCharacter() {
    const currentSentence = threeCharacterData[gameData.currentSentenceIndex];
    
    if (gameData.currentCharIndex < currentSentence.characters.length - 1) {
        // 还有字没学完
        gameData.currentCharIndex++;
    } else {
        // 这句话学完了
        gameData.learnedSentences.add(gameData.currentSentenceIndex);
        
        if (gameData.learnedSentences.size === gameData.totalSentences) {
            // 全部学完了
            showComplete();
            return;
        }
        
        // 进入下一句
        if (gameData.currentMode === 'random') {
            selectRandomSentence();
        } else {
            gameData.currentSentenceIndex++;
        }
        gameData.currentCharIndex = 0;
    }
    
    updateDisplay();
    createOptions();
    updateProgress();
    elements.feedbackArea.textContent = '';
}

// 更新进度显示
function updateProgress() {
    elements.currentSentence.textContent = gameData.currentSentenceIndex + 1;
    elements.totalSentences.textContent = gameData.totalSentences;
}

// 显示完成信息
function showComplete() {
    elements.characterOptions.innerHTML = `
        <div class="complete-message">
            <h3>太棒了！完成了！</h3>
            <button onclick="restartGame()" class="btn">再玩一次</button>
        </div>
    `;
    elements.feedbackArea.textContent = '🎉';
}

// 重新开始游戏
function restartGame() {
    gameData.learnedSentences.clear();
    initGame();
    elements.feedbackArea.textContent = '';
}

// 工具函数：打乱数组
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// 启动游戏
initGame(); 