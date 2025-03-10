// 模拟股票数据
const stockData = [
  { symbol: 'AAPL', name: '苹果', price: 189.84, change: 2.35, changePercent: 1.25 },
  { symbol: 'TSLA', name: '特斯拉', price: 237.49, change: -3.21, changePercent: -1.33 },
  { symbol: 'BABA', name: '阿里巴巴', price: 73.42, change: 0.87, changePercent: 1.20 },
  { symbol: 'TCEHY', name: '腾讯控股', price: 45.23, change: -0.42, changePercent: -0.92 },
  { symbol: '600519', name: '贵州茅台', price: 1789.50, change: 23.45, changePercent: 1.33 },
  { symbol: '000858', name: '五粮液', price: 168.75, change: -2.34, changePercent: -1.37 },
  { symbol: '601318', name: '中国平安', price: 48.32, change: 0.56, changePercent: 1.17 },
  { symbol: '000001', name: '平安银行', price: 12.45, change: -0.23, changePercent: -1.82 }
];

// 模拟指数数据
const indexData = [
  { symbol: 'DJIA', name: '道琼斯工业平均指数', price: 38996.39, change: 134.21, changePercent: 0.35 },
  { symbol: 'SPX', name: 'S&P 500', price: 5069.76, change: 16.85, changePercent: 0.33 },
  { symbol: 'IXIC', name: '纳斯达克综合指数', price: 15996.82, change: 78.81, changePercent: 0.49 },
  { symbol: 'HSI', name: '恒生指数', price: 16589.44, change: -143.03, changePercent: -0.85 },
  { symbol: '000001.SS', name: '上证指数', price: 3015.38, change: 15.32, changePercent: 0.51 }
];

// 模拟用户资产数据
const portfolioData = {
  totalAssets: 125678.45,
  cashBalance: 23456.78,
  todayProfit: 1234.56,
  totalProfit: 12345.67,
  profitPercent: 10.87,
  holdings: [
    { symbol: 'AAPL', name: '苹果', shares: 10, avgPrice: 175.32, currentPrice: 189.84, profit: 145.20, profitPercent: 8.27 },
    { symbol: 'BABA', name: '阿里巴巴', shares: 50, avgPrice: 70.25, currentPrice: 73.42, profit: 158.50, profitPercent: 4.51 },
    { symbol: '600519', name: '贵州茅台', shares: 2, avgPrice: 1750.00, currentPrice: 1789.50, profit: 79.00, profitPercent: 2.26 },
    { symbol: '000858', name: '五粮液', shares: 15, avgPrice: 172.50, currentPrice: 168.75, profit: -56.25, profitPercent: -2.17 }
  ]
};

// 模拟市场资讯数据
const newsData = [
  { 
    id: 1, 
    title: '美联储暗示年内可能降息，市场普遍看好', 
    source: '华尔街日报', 
    time: '10:30', 
    summary: '美联储主席鲍威尔在最新讲话中暗示，如果通胀持续降温，年内可能会开始降息周期。' 
  },
  { 
    id: 2, 
    title: '苹果发布新一代iPhone，股价应声上涨', 
    source: '彭博社', 
    time: '09:15', 
    summary: '苹果公司昨日发布新一代iPhone，搭载全新AI功能，市场反应积极，股价上涨超过2%。' 
  },
  { 
    id: 3, 
    title: '中国央行下调MLF利率，释放宽松信号', 
    source: '路透社', 
    time: '08:45', 
    summary: '中国人民银行今日下调中期借贷便利(MLF)利率10个基点，释放货币政策宽松信号。' 
  },
  { 
    id: 4, 
    title: '特斯拉Q2财报不及预期，股价承压', 
    source: '财经时报', 
    time: '昨天', 
    summary: '特斯拉公布第二季度财报，营收和利润均不及市场预期，导致股价在盘后交易中下跌。' 
  }
];

// 更新时间
function updateTime() {
  const now = new Date();
  const hours = now.getHours().toString().padStart(2, '0');
  const minutes = now.getMinutes().toString().padStart(2, '0');
  const timeElements = document.querySelectorAll('.current-time');
  timeElements.forEach(el => {
    el.textContent = `${hours}:${minutes}`;
  });
}

// 格式化价格
function formatPrice(price) {
  return price.toFixed(2);
}

// 格式化变化百分比
function formatChangePercent(percent) {
  return (percent > 0 ? '+' : '') + percent.toFixed(2) + '%';
}

// 获取价格变化的CSS类
function getPriceChangeClass(change) {
  return change > 0 ? 'price-up' : (change < 0 ? 'price-down' : '');
}

// 初始化页面
document.addEventListener('DOMContentLoaded', function() {
  // 更新时间
  updateTime();
  setInterval(updateTime, 60000);
  
  // 初始化股票列表
  initStockList();
  
  // 初始化指数数据
  initIndexData();
  
  // 初始化资产数据
  initPortfolioData();
  
  // 初始化新闻列表
  initNewsData();
  
  // 模拟股票价格变动
  setInterval(simulatePriceChanges, 3000);
});

// 初始化股票列表
function initStockList() {
  const stockListElement = document.getElementById('stock-list');
  if (!stockListElement) return;
  
  stockListElement.innerHTML = '';
  
  stockData.forEach(stock => {
    const changeClass = getPriceChangeClass(stock.change);
    const listItem = document.createElement('div');
    listItem.className = 'list-item';
    listItem.innerHTML = `
      <div style="flex: 1;">
        <div style="font-weight: 600;">${stock.name}</div>
        <div style="font-size: 12px; color: #666;">${stock.symbol}</div>
      </div>
      <div style="text-align: right;">
        <div style="font-weight: 600;">${formatPrice(stock.price)}</div>
        <div class="${changeClass}" style="font-size: 12px;">
          ${formatChangePercent(stock.changePercent)} ${formatPrice(stock.change)}
        </div>
      </div>
    `;
    stockListElement.appendChild(listItem);
  });
}

// 初始化指数数据
function initIndexData() {
  const indexListElement = document.getElementById('index-list');
  if (!indexListElement) return;
  
  indexListElement.innerHTML = '';
  
  indexData.forEach(index => {
    const changeClass = getPriceChangeClass(index.change);
    const listItem = document.createElement('div');
    listItem.className = 'list-item';
    listItem.innerHTML = `
      <div style="flex: 1;">
        <div style="font-weight: 600;">${index.name}</div>
        <div style="font-size: 12px; color: #666;">${index.symbol}</div>
      </div>
      <div style="text-align: right;">
        <div style="font-weight: 600;">${formatPrice(index.price)}</div>
        <div class="${changeClass}" style="font-size: 12px;">
          ${formatChangePercent(index.changePercent)} ${formatPrice(index.change)}
        </div>
      </div>
    `;
    indexListElement.appendChild(listItem);
  });
}

// 初始化资产数据
function initPortfolioData() {
  const totalAssetsElement = document.getElementById('total-assets');
  const todayProfitElement = document.getElementById('today-profit');
  const totalProfitElement = document.getElementById('total-profit');
  const holdingsListElement = document.getElementById('holdings-list');
  
  if (totalAssetsElement) {
    totalAssetsElement.textContent = formatPrice(portfolioData.totalAssets);
  }
  
  if (todayProfitElement) {
    todayProfitElement.textContent = formatPrice(portfolioData.todayProfit);
    todayProfitElement.className = getPriceChangeClass(portfolioData.todayProfit);
  }
  
  if (totalProfitElement) {
    totalProfitElement.textContent = `${formatPrice(portfolioData.totalProfit)} (${formatChangePercent(portfolioData.profitPercent)})`;
    totalProfitElement.className = getPriceChangeClass(portfolioData.totalProfit);
  }
  
  if (holdingsListElement) {
    holdingsListElement.innerHTML = '';
    
    portfolioData.holdings.forEach(holding => {
      const profitClass = getPriceChangeClass(holding.profit);
      const listItem = document.createElement('div');
      listItem.className = 'list-item';
      listItem.innerHTML = `
        <div style="flex: 1;">
          <div style="font-weight: 600;">${holding.name}</div>
          <div style="font-size: 12px; color: #666;">${holding.symbol} · ${holding.shares}股</div>
        </div>
        <div style="text-align: right;">
          <div style="font-weight: 600;">${formatPrice(holding.currentPrice)}</div>
          <div class="${profitClass}" style="font-size: 12px;">
            ${formatChangePercent(holding.profitPercent)} ${formatPrice(holding.profit)}
          </div>
        </div>
      `;
      holdingsListElement.appendChild(listItem);
    });
  }
}

// 初始化新闻列表
function initNewsData() {
  const newsListElement = document.getElementById('news-list');
  if (!newsListElement) return;
  
  newsListElement.innerHTML = '';
  
  newsData.forEach(news => {
    const listItem = document.createElement('div');
    listItem.className = 'list-item';
    listItem.style.flexDirection = 'column';
    listItem.style.alignItems = 'flex-start';
    listItem.innerHTML = `
      <div style="font-weight: 600; margin-bottom: 4px;">${news.title}</div>
      <div style="font-size: 12px; color: #666; margin-bottom: 8px;">${news.summary}</div>
      <div style="font-size: 12px; color: #999; display: flex; width: 100%;">
        <span>${news.source}</span>
        <span style="margin-left: auto;">${news.time}</span>
      </div>
    `;
    newsListElement.appendChild(listItem);
  });
}

// 模拟股票价格变动
function simulatePriceChanges() {
  stockData.forEach(stock => {
    const change = (Math.random() - 0.5) * 0.5;
    stock.price += change;
    stock.change += change;
    stock.changePercent = (stock.change / (stock.price - stock.change)) * 100;
  });
  
  indexData.forEach(index => {
    const change = (Math.random() - 0.5) * 5;
    index.price += change;
    index.change += change;
    index.changePercent = (index.change / (index.price - index.change)) * 100;
  });
  
  // 更新UI
  initStockList();
  initIndexData();
}

// 切换标签页
function switchTab(tabName) {
  const tabItems = document.querySelectorAll('.tab-item');
  tabItems.forEach(item => {
    item.classList.remove('active');
  });
  
  const selectedTab = document.querySelector(`.tab-item[data-tab="${tabName}"]`);
  if (selectedTab) {
    selectedTab.classList.add('active');
  }
}

// 模拟图表数据
function drawChart(containerId, isUp = true) {
  const container = document.getElementById(containerId);
  if (!container) return;
  
  const canvas = document.createElement('canvas');
  canvas.width = container.offsetWidth;
  canvas.height = container.offsetHeight;
  container.innerHTML = '';
  container.appendChild(canvas);
  
  const ctx = canvas.getContext('2d');
  const width = canvas.width;
  const height = canvas.height;
  
  // 绘制网格
  ctx.strokeStyle = '#f0f0f0';
  ctx.lineWidth = 1;
  
  // 横线
  for (let y = 0; y < height; y += 20) {
    ctx.beginPath();
    ctx.moveTo(0, y);
    ctx.lineTo(width, y);
    ctx.stroke();
  }
  
  // 竖线
  for (let x = 0; x < width; x += 20) {
    ctx.beginPath();
    ctx.moveTo(x, 0);
    ctx.lineTo(x, height);
    ctx.stroke();
  }
  
  // 绘制曲线
  ctx.beginPath();
  ctx.moveTo(0, height / 2);
  
  const points = 100;
  const amplitude = height / 4;
  const trend = isUp ? -1 : 1; // 上涨趋势为负（y轴向下为正）
  
  for (let i = 1; i <= points; i++) {
    const x = (width / points) * i;
    const randomFactor = Math.random() * 20 - 10;
    const trendFactor = trend * (i / points) * amplitude;
    const y = height / 2 + trendFactor + randomFactor;
    ctx.lineTo(x, y);
  }
  
  ctx.strokeStyle = isUp ? '#00c087' : '#ff4d4f';
  ctx.lineWidth = 2;
  ctx.stroke();
} 