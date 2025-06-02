import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area, BarChart, Bar } from 'recharts';
import { TrendingUp, TrendingDown, DollarSign, BarChart3, Activity, Target, Shield, Zap, Globe, Brain, Clock, Award, Star, Filter, Search, Eye, ChevronDown, ChevronUp } from 'lucide-react';
import './TraderPortfolio.css';

// Import images
import bitcoinLogo from '../images/bitcoin.png';
import ethereumLogo from '../images/ethereum.png';
import solanaLogo from '../images/solana.png';
import xrpLogo from '../images/xrp.png';
import shibaInuLogo from '../images/shiba-inu.png';

export const TRADER_ACCENT_COLOR = '#ffcc00'; // Updated based on new yellow scheme
export const TRADER_SECONDARY_COLOR = '#000000'; // Updated based on new black scheme

const TraderPortfolio = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [expandedCards, setExpandedCards] = useState<{ [id: number]: boolean }>({});
  const [currentTime, setCurrentTime] = useState(new Date());
  const { scrollYProgress } = useScroll();
  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);
  const [visibleSystemsCount, setVisibleSystemsCount] = useState(6);

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  // Trading performance data
  const performanceData = [
    { month: 'Jan', pnl: 12.5, sharpe: 1.48, maxDrawdown: 3.2 },
    { month: 'Feb', pnl: 8.7, sharpe: 1.32, maxDrawdown: 4.1 },
    { month: 'Mar', pnl: 15.3, sharpe: 1.62, maxDrawdown: 2.8 },
    { month: 'Apr', pnl: 11.2, sharpe: 1.41, maxDrawdown: 3.5 },
    { month: 'May', pnl: 18.6, sharpe: 1.75, maxDrawdown: 2.1 },
    { month: 'Jun', pnl: 14.8, sharpe: 1.53, maxDrawdown: 3.8 }
  ];

  const equityCurve = [
    { day: 1, value: 100000 }, { day: 30, value: 112500 }, { day: 60, value: 122400 },
    { day: 90, value: 141000 }, { day: 120, value: 156800 }, { day: 150, value: 185900 },
    { day: 180, value: 213400 }
  ];

  // 50+ Trading Systems and Projects
  const tradingSystems = [
    // Forex Systems
    { id: 1, title: 'EUR/USD Mean Reversion Pro', category: 'forex', pnl: '+12.5%', sharpe: '1.48', winRate: '68%', trades: 245, maxDD: '-3.2%', timeframe: 'H1', description: 'Advanced mean reversion system using Bollinger Bands, RSI divergence, and machine learning price prediction. Incorporates volatility filters and dynamic position sizing.', strategy: 'Statistical arbitrage with regime detection', risk: 'Low', complexity: 'High' },
    { id: 2, title: 'GBP/JPY Breakout Master', category: 'forex', pnl: '+18.7%', sharpe: '1.65', winRate: '71%', trades: 189, maxDD: '-4.1%', timeframe: 'H4', description: 'Momentum breakout system targeting major S/R levels with volume confirmation and news sentiment analysis.', strategy: 'Momentum + Volume analysis', risk: 'Medium', complexity: 'Medium' },
    { id: 3, title: 'USD/CAD Carry Trade Optimizer', category: 'forex', pnl: '+9.3%', sharpe: '1.23', winRate: '74%', trades: 156, maxDD: '-2.8%', timeframe: 'D1', description: 'Interest rate differential strategy with correlation analysis and central bank policy tracking.', strategy: 'Carry trade with macro overlay', risk: 'Low', complexity: 'Medium' },
    { id: 4, title: 'AUD/NZD Range Scalper', category: 'forex', pnl: '+15.2%', sharpe: '1.41', winRate: '69%', trades: 312, maxDD: '-3.5%', timeframe: 'M30', description: 'High-frequency range trading with order flow analysis and microstructure patterns.', strategy: 'Range trading + Order flow', risk: 'Medium', complexity: 'High' },
    { id: 5, title: 'Multi-Pair Correlation Grid', category: 'forex', pnl: '+22.1%', sharpe: '1.78', winRate: '73%', trades: 428, maxDD: '-4.7%', timeframe: 'H1', description: 'Basket trading system exploiting correlation inefficiencies across 8 major pairs.', strategy: 'Statistical arbitrage', risk: 'Medium', complexity: 'High' },

    // Crypto Systems
    { id: 6, title: 'BTC/USD Trend Following AI', category: 'crypto', pnl: '+34.5%', sharpe: '1.92', winRate: '64%', trades: 167, maxDD: '-8.2%', timeframe: 'H4', description: 'Deep learning trend detection with sentiment analysis from Twitter and Reddit data.', strategy: 'AI-powered trend following', risk: 'High', complexity: 'Very High' },
    { id: 7, title: 'ETH/BTC Pair Trading Alpha', category: 'crypto', pnl: '+28.3%', sharpe: '1.67', winRate: '71%', trades: 203, maxDD: '-6.1%', timeframe: 'H2', description: 'Relative strength momentum system with DeFi yield farming opportunity detection.', strategy: 'Pair trading + DeFi analysis', risk: 'High', complexity: 'High' },
    { id: 8, title: 'Altcoin Momentum Scanner', category: 'crypto', pnl: '+45.7%', sharpe: '2.13', winRate: '58%', trades: 89, maxDD: '-12.3%', timeframe: 'H6', description: 'Multi-timeframe momentum scanner across 50+ altcoins with whale movement tracking.', strategy: 'Momentum + Whale tracking', risk: 'Very High', complexity: 'High' },
    { id: 9, title: 'DeFi Arbitrage Hunter', category: 'crypto', pnl: '+19.4%', sharpe: '1.51', winRate: '82%', trades: 156, maxDD: '-3.8%', timeframe: 'M15', description: 'Cross-exchange arbitrage with gas fee optimization and MEV protection.', strategy: 'Pure arbitrage', risk: 'Low', complexity: 'Very High' },
    { id: 10, title: 'Crypto Fear & Greed Contrarian', category: 'crypto', pnl: '+16.8%', sharpe: '1.34', winRate: '69%', trades: 78, maxDD: '-5.4%', timeframe: 'D1', description: 'Contrarian system based on fear & greed index with social sentiment confirmation.', strategy: 'Sentiment contrarian', risk: 'Medium', complexity: 'Medium' },

    // Algorithmic Systems (Applicable to multiple asset classes)
    { id: 20, title: 'Multi-Asset ML Predictor', category: 'algorithmic', pnl: '+27.6%', sharpe: '1.83', winRate: '69%', trades: 345, maxDD: '-7.1%', timeframe: 'H1', description: 'Machine learning ensemble combining LSTM, Random Forest, and XGBoost across asset classes.', strategy: 'Machine learning ensemble', risk: 'High', complexity: 'Very High' },
    { id: 21, title: 'Genetic Algorithm Optimizer', category: 'algorithmic', pnl: '+31.2%', sharpe: '1.95', winRate: '66%', trades: 278, maxDD: '-8.4%', timeframe: 'M30', description: 'Self-evolving trading system using genetic algorithms for parameter optimization.', strategy: 'Evolutionary optimization', risk: 'High', complexity: 'Very High' },
    { id: 22, title: 'Reinforcement Learning Agent', category: 'algorithmic', pnl: '+24.8%', sharpe: '1.62', winRate: '64%', trades: 567, maxDD: '-6.3%', timeframe: 'M15', description: 'RL agent trained on tick data with reward shaping and action space optimization.', strategy: 'Reinforcement learning', risk: 'High', complexity: 'Very High' },

    // Statistical Arbitrage (Applicable to multiple asset classes)
    { id: 23, title: 'Pairs Trading Engine', category: 'statistical', pnl: '+16.4%', sharpe: '1.44', winRate: '72%', trades: 189, maxDD: '-3.7%', timeframe: 'H2', description: 'Cointegration-based pairs trading with regime detection and position sizing optimization.', strategy: 'Statistical arbitrage', risk: 'Medium', complexity: 'High' },
    { id: 24, title: 'Mean Reversion Basket', category: 'statistical', pnl: '+13.7%', sharpe: '1.31', winRate: '74%', trades: 234, maxDD: '-3.2%', timeframe: 'H4', description: 'Multi-asset mean reversion with PCA analysis and factor decomposition.', strategy: 'Factor-based mean reversion', risk: 'Medium', complexity: 'High' },
    { id: 25, title: 'Cross-Asset Momentum', category: 'statistical', pnl: '+21.3%', sharpe: '1.58', winRate: '67%', trades: 167, maxDD: '-5.4%', timeframe: 'D1', description: 'Cross-sectional momentum with risk parity position sizing and sector rotation.', strategy: 'Cross-sectional momentum', risk: 'Medium', complexity: 'High' },

    // High Frequency Systems (Applicable to multiple asset classes)
    { id: 26, title: 'Latency Arbitrage System', category: 'hft', pnl: '+8.9%', sharpe: '2.14', winRate: '89%', trades: 2341, maxDD: '-1.2%', timeframe: 'MS', description: 'Ultra-low latency arbitrage between exchanges with FPGA acceleration.', strategy: 'Latency arbitrage', risk: 'Low', complexity: 'Very High' },
    { id: 27, title: 'Market Making Bot', category: 'hft', pnl: '+14.6%', sharpe: '1.89', winRate: '84%', trades: 1876, maxDD: '-2.1%', timeframe: 'S1', description: 'Automated market making with inventory management and adverse selection protection.', strategy: 'Market making', risk: 'Medium', complexity: 'Very High' },
    { id: 28, title: 'Order Flow Imbalance', category: 'hft', pnl: '+11.3%', sharpe: '1.67', winRate: '77%', trades: 3245, maxDD: '-1.8%', timeframe: 'MS', description: 'Level 2 order book analysis with microstructure pattern recognition.', strategy: 'Order flow analysis', risk: 'Medium', complexity: 'Very High' },

    // Sector Rotation (Applicable to stocks/indices)
    { id: 29, title: 'Tech Sector Rotator', category: 'sector', pnl: '+18.2%', sharpe: '1.52', winRate: '69%', trades: 89, maxDD: '-4.9%', timeframe: 'W1', description: 'Technology subsector rotation with earnings momentum and valuation screening.', strategy: 'Sector rotation', risk: 'Medium', complexity: 'Medium' },
    { id: 30, title: 'Defensive Cyclical Switch', category: 'sector', pnl: '+12.8%', sharpe: '1.36', winRate: '71%', trades: 67, maxDD: '-3.4%', timeframe: 'M1', description: 'Economic cycle-based rotation between defensive and cyclical sectors.', strategy: 'Economic cycle rotation', risk: 'Low', complexity: 'Medium' },

    // Additional Advanced Systems (Applicable to multiple asset classes)
    { id: 31, title: 'Quantum Price Predictor', category: 'experimental', pnl: '+29.4%', sharpe: '1.87', winRate: '63%', trades: 123, maxDD: '-7.8%', timeframe: 'H6', description: 'Quantum computing-inspired algorithms for price pattern recognition and prediction.', strategy: 'Quantum algorithms', risk: 'High', complexity: 'Very High' },
    { id: 32, title: 'Social Media Sentiment Bot', category: 'alternative', pnl: '+17.6%', sharpe: '1.43', winRate: '66%', trades: 156, maxDD: '-4.7%', timeframe: 'H2', description: 'Real-time social media sentiment analysis with natural language processing and influence scoring.', strategy: 'Sentiment analysis', risk: 'Medium', complexity: 'High' },
    { id: 34, title: 'Economic Nowcasting AI', category: 'macro', pnl: '+11.9%', sharpe: '1.22', winRate: '74%', trades: 89, maxDD: '-2.8%', timeframe: 'D1', description: 'Real-time economic indicator nowcasting with high-frequency data integration.', strategy: 'Macro nowcasting', risk: 'Low', complexity: 'High' },

    // More Forex Systems
    { id: 35, title: 'Currency Carry Grid 2.0', category: 'forex', pnl: '+16.7%', sharpe: '1.41', winRate: '79%', trades: 234, maxDD: '-4.1%', timeframe: 'D1', description: 'Advanced carry trade strategy with volatility targeting and correlation filters.', strategy: 'Enhanced carry trade', risk: 'Medium', complexity: 'Medium' },
    { id: 36, title: 'CHF Safe Haven Detector', category: 'forex', pnl: '+9.8%', sharpe: '1.15', winRate: '71%', trades: 67, maxDD: '-2.3%', timeframe: 'H4', description: 'Safe haven flow detection with geopolitical risk modeling and VIX correlation.', strategy: 'Safe haven trading', risk: 'Low', complexity: 'Medium' },
    { id: 37, title: 'JPY Intervention Hunter', category: 'forex', pnl: '+13.4%', sharpe: '1.38', winRate: '68%', trades: 89, maxDD: '-3.7%', timeframe: 'H1', description: 'Central bank intervention detection with verbal intervention analysis and positioning data.', strategy: 'Intervention trading', risk: 'Medium', complexity: 'High' },
    { id: 38, title: 'Emerging Market FX Basket', category: 'forex', pnl: '+19.7%', sharpe: '1.56', winRate: '64%', trades: 123, maxDD: '-5.8%', timeframe: 'D1', description: 'Diversified EM currency basket with country risk assessment and commodity correlation.', strategy: 'EM basket trading', risk: 'High', complexity: 'Medium' },

    // More Crypto Systems
    { id: 39, title: 'NFT Market Cross-Trading', category: 'crypto', pnl: '+52.3%', sharpe: '2.41', winRate: '59%', trades: 67, maxDD: '-14.2%', timeframe: 'H12', description: 'Cross-platform NFT arbitrage with rarity scoring and floor price prediction.', strategy: 'NFT arbitrage', risk: 'Very High', complexity: 'High' },
    { id: 40, title: 'Yield Farming Optimizer', category: 'crypto', pnl: '+38.9%', sharpe: '1.94', winRate: '76%', trades: 89, maxDD: '-8.7%', timeframe: 'H6', description: 'Automated yield farming with impermanent loss hedging and gas optimization.', strategy: 'DeFi yield optimization', risk: 'High', complexity: 'Very High' },
    { id: 41, title: 'Layer 2 Scaling Plays', category: 'crypto', pnl: '+31.7%', sharpe: '1.78', winRate: '67%', trades: 145, maxDD: '-7.4%', timeframe: 'H8', description: 'Layer 2 scaling opportunity detection with bridge volume analysis and ecosystem growth.', strategy: 'Infrastructure plays', risk: 'High', complexity: 'High' },

    // Event-Driven Systems (Applicable to stocks)
    { id: 45, title: 'M&A Arbitrage Master', category: 'event_driven', pnl: '+14.3%', sharpe: '1.35', winRate: '82%', trades: 23, maxDD: '-2.4%', timeframe: 'Event', description: 'Merger arbitrage with deal completion probability modeling and regulatory analysis.', strategy: 'Merger arbitrage', risk: 'Medium', complexity: 'High' },
    { id: 46, title: 'Spinoff Value Extractor', category: 'event_driven', pnl: '+16.8%', sharpe: '1.41', winRate: '78%', trades: 18, maxDD: '-3.1%', timeframe: 'Event', description: 'Corporate spinoff trading with forced selling detection and value realization timing.', strategy: 'Special situations', risk: 'Medium', complexity: 'Medium' },
    { id: 47, title: 'Bankruptcy Recovery Play', category: 'event_driven', pnl: '+21.7%', sharpe: '1.63', winRate: '65%', trades: 12, maxDD: '-5.8%', timeframe: 'Event', description: 'Distressed securities trading with recovery rate modeling and legal process analysis.', strategy: 'Distressed investing', risk: 'Very High', complexity: 'High' },

    // Quantitative Systems (Applicable to multiple asset classes)
    { id: 48, title: 'Black-Litterman Optimizer', category: 'quantitative', pnl: '+12.9%', sharpe: '1.31', winRate: '69%', trades: 156, maxDD: '-3.4%', timeframe: 'M1', description: 'Portfolio optimization with Black-Litterman model and tail risk management.', strategy: 'Portfolio optimization', risk: 'Medium', complexity: 'Very High' },
    { id: 49, title: 'Risk Parity Evolution', category: 'quantitative', pnl: '+11.6%', sharpe: '1.28', winRate: '71%', trades: 89, maxDD: '-2.9%', timeframe: 'W1', description: 'Advanced risk parity with regime detection and alternative risk measures.', strategy: 'Risk parity', risk: 'Low', complexity: 'High' },
    { id: 50, title: 'Factor Momentum Model', category: 'quantitative', pnl: '+15.4%', sharpe: '1.42', winRate: '66%', trades: 234, maxDD: '-4.2%', timeframe: 'M1', description: 'Multi-factor momentum model with factor decay analysis and crowding detection.', strategy: 'Factor investing', risk: 'Medium', complexity: 'High' },

    // Bonus Systems (Applicable to multiple asset classes)
    { id: 52, title: 'Volatility Surface Arbitrage', category: 'volatility', pnl: '+18.7%', sharpe: '1.51', winRate: '68%', trades: 167, maxDD: '-4.8%', timeframe: 'D1', description: 'Options volatility surface arbitrage with smile dynamics and term structure modeling.', strategy: 'Vol surface arbitrage', risk: 'Medium', complexity: 'Very High' },
    // Community Ideas (My Ideas)
    { id: 53, title: 'AI-Driven News Sentiment Bot', category: 'alternative', pnl: '+15.9%', sharpe: '1.35', winRate: '70%', trades: 210, maxDD: '-4.0%', timeframe: 'H1', description: 'Utilizing natural language processing and machine learning to trade based on real-time financial news sentiment.', strategy: 'Sentiment analysis', risk: 'Medium', complexity: 'High' },
    { id: 54, title: 'Blockchain On-Chain Analysis Strategy', category: 'crypto', pnl: '+25.1%', sharpe: '1.70', winRate: '60%', trades: 150, maxDD: '-9.5%', timeframe: 'D1', description: 'Trading signals generated from analyzing public blockchain data, such as large whale movements and exchange flows.', strategy: 'On-chain analysis', risk: 'High', complexity: 'High' },
    { id: 55, title: 'Cross-Market Trend Correlation', category: 'statistical', pnl: '+11.2%', sharpe: '1.28', winRate: '65%', trades: 180, maxDD: '-3.1%', timeframe: 'H4', description: 'Identifying and trading based on correlated trend movements between seemingly unrelated assets or markets.', strategy: 'Correlation trading', risk: 'Medium', complexity: 'Medium' }
  ];

  const categories = ['all', 'forex', 'crypto', 'algorithmic', 'statistical', 'hft', 'sector', 'experimental', 'alternative', 'macro', 'event_driven', 'quantitative', 'volatility'];

  const myIdeas = [
    { id: 1, title: 'USD/MXN: Exhaustion After the Rally?', author: 'Talel', date: 'June 2', content: 'After a strong 3-week rally, USD/MXN is printing a potential evening star on the daily. Momentum is waning, and a mean reversion to the 100 MA around 16.60 seems likely.', setup: 'RSI divergence + volume drop = red flags for bulls.', target: 'TP: 16.60', stopLoss: 'SL: 17.30' },
    { id: 2, title: 'Soybean Futures Near Support – Mean Reversion Incoming?', author: 'Talel', date: 'June 2', content: 'ZS1! is bouncing off a strong weekly support zone around 1160. With commodities facing renewed demand, I\'m watching for a reversal pattern here.', setup: 'Setup: Bullish hammer + stoch crossover', target: 'TP: 1210', stopLoss: 'SL: 1148' },
    { id: 3, title: 'GBP/CHF Channel Bounce – Clean Technical Setup', author: 'Talel', date: 'June 2', content: 'A lesser-watched cross, but GBP/CHF has been perfectly respecting a descending channel. Price just bounced from the lower band with a bullish engulfing candle.', setup: 'Less noise = purer technical read.', target: 'TP: 1.1350', stopLoss: 'SL: 1.1175' },
    { id: 4, title: 'Ethereum vs Solana Dominance Flip Incoming?', author: 'Talel', date: 'June 2', content: 'ETH/SOL chart is showing signs of a long-term bottoming structure. If ETH holds above 8.6 SOL, we could see the pair push toward 10.2.', setup: 'Good for alt-season rotation tracking.', target: 'Watch zone: 8.6–8.9 breakout', stopLoss: null },
    { id: 5, title: 'Platinum (XPTUSD): Rare Reversal Forming?', author: 'Talel', date: 'June 2', content: 'Platinum often gets ignored, but the chart\'s printing a clean inverse H&S on the 4H. Breakout above $1025 could open up $1070 quickly.', setup: 'Setup: High probability pattern + volume uptick', target: 'TP: 1070', stopLoss: 'SL: 1002' },
    { id: 6, title: 'EuroStoxx 50 (EU50) – Bearish Divergence Building Up', author: 'Talel', date: 'June 2', content: 'EU50 has rallied too far, too fast. Weekly RSI divergence + low volume breakout = unsustainable move. Watching for short setups below 5050.', setup: 'Early signal — not yet triggered.', target: 'TP: 4930', stopLoss: 'SL: 5105' },
    { id: 7, title: 'NZD/JPY: Hidden Bearish Divergence in Play', author: 'Talel', date: 'June 2', content: 'Everyone\'s watching USD/JPY, but NZD/JPY shows clearer bearish divergence on both 1H and 4H. If 95.00 breaks, we might see a 100-pip move.', setup: 'Focus where the crowd isn\'t.', target: 'TP: 93.90', stopLoss: 'SL: 95.55' },
    { id: 8, title: 'Stellar (XLM) – Compression Before the Pop?', author: 'Talel', date: 'June 2', content: 'XLM is forming a symmetrical triangle on the 12H, nearing apex. Historically, this pattern leads to sharp moves — direction TBD.', setup: 'Set alerts, not positions.', target: 'Watch breakout > $0.116 or < $0.108', stopLoss: null },
    { id: 9, title: 'USD/CNH – Quiet Breakdown?', author: 'Talel', date: 'June 2', content: 'USD/CNH just lost a key trendline on the daily — and no one\'s talking about it. If momentum confirms, this could trigger a retrace to 7.19.', setup: 'CNH is a macro barometer — trade with caution.', target: 'TP: 7.19', stopLoss: 'SL: 7.26' },
    { id: 10, title: 'Silver vs Gold Ratio Hinting Risk-On Rotation', author: 'Talel', date: 'June 2', content: 'Silver/Gold ratio (XAG/XAU) rising = risk-on signal. If this breakout sustains, silver may outperform gold for weeks.', setup: 'Good for metals traders & macro watchers', target: 'XAG/USD TP: $32', stopLoss: 'SL: $29.20' }
  ];

  const filteredSystems = tradingSystems.filter(system => {
    const matchesCategory = activeFilter === 'all' || system.category === activeFilter;
    const matchesSearch = system.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         system.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const toggleExpanded = (id: number) => {
    setExpandedCards(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const totalPnL = tradingSystems.reduce((sum, system) => sum + parseFloat(system.pnl.replace('%', '').replace('+', '')), 0);
  const avgSharpe = tradingSystems.reduce((sum, system) => sum + parseFloat(system.sharpe), 0) / tradingSystems.length;
  const totalTrades = tradingSystems.reduce((sum, system) => sum + system.trades, 0);

  const handleShowMore = () => {
    setVisibleSystemsCount(prevCount => prevCount + 6);
  };

  return (
    <div className="trader-portfolio-container">
      {/* Animated Background */}
      <motion.div 
        className="animated-background"
        style={{ y: backgroundY }}
      >
        <motion.img src={bitcoinLogo} alt="Bitcoin Logo" className="animated-image bitcoin-logo" />
        <motion.img src={ethereumLogo} alt="Ethereum Logo" className="animated-image ethereum-logo" />
        <motion.img src={solanaLogo} alt="Solana Logo" className="animated-image solana-logo" />
        <motion.img src={xrpLogo} alt="XRP Logo" className="animated-image xrp-logo" />
        <motion.img src={shibaInuLogo} alt="Shiba Inu Logo" className="animated-image shiba-inu-logo" />
      </motion.div>

      {/* Hero Section */}
      <motion.section 
        className="trader-hero-section"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.div
          className="hero-content-container"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
        >
          <motion.h1 
            className="hero-title"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
        >
          TALEL ZAMOURI
          </motion.h1>
          
          <motion.h2 
            className="hero-subtitle"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
          >
            Quantitative Trading Specialist
          </motion.h2>
          
          <motion.p 
            className="hero-tagline"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8, ease: "easeOut" }}
          >
            Advanced algorithmic trading systems across global markets • 53+ proprietary strategies • AI-powered portfolio optimization
          </motion.p>

          {/* Live Stats */}
          <motion.div 
            className="live-stats-grid"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 1, ease: "easeOut" }}
          >
            <div className="stat-card">
              <div>
                <TrendingUp className="text-green" />
                <span className="text-green">+{totalPnL.toFixed(1)}%</span>
              </div>
              <p>Total P&L</p>
            </div>
            
            <div className="stat-card">
              <div>
                <BarChart3 className="text-blue" />
                <span className="text-blue">{avgSharpe.toFixed(2)}</span>
              </div>
              <p>Avg Sharpe</p>
            </div>
            
            <div className="stat-card">
              <div>
                <Activity className="text-purple" />
                <span className="text-purple">500</span>
              </div>
              <p>Total Trades</p>
            </div>
            
            <div className="stat-card">
              <div>
                <Clock className="text-yellow" />
                <span className="text-yellow">{currentTime.toLocaleTimeString()}</span>
              </div>
              <p>Live Time</p>
            </div>
          </motion.div>
        </motion.div>
      </motion.section>

      {/* Performance Dashboard */}
      <section className="performance-dashboard">
        <motion.h2 
          className="performance-heading"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Performance Analytics
        </motion.h2>
        
        <div className="charts-grid">
          <motion.div 
            className="chart-container"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="chart-heading text-yellow">Monthly P&L Performance</h3>
            <ResponsiveContainer width="100%" height={300}>
              <AreaChart data={performanceData}>
                <CartesianGrid strokeDasharray="3,3" stroke="#374151" />
                <XAxis dataKey="month" stroke="#9CA3AF" />
                <YAxis stroke="#9CA3AF" />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: 'rgba(0,0,0,0.8)', 
                    border: '1px solid #374151',
                    borderRadius: '8px'
                  }}
                />
                <Area 
                  type="monotone" 
                  dataKey="pnl" 
                  stroke="#FCD34D" 
                  fill="url(#colorPnl)" 
                />
                <defs>
                  <linearGradient id="colorPnl" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#FCD34D" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="#FCD34D" stopOpacity={0.1}/>
                  </linearGradient>
                </defs>
              </AreaChart>
            </ResponsiveContainer>
          </motion.div>

          <motion.div 
            className="chart-container"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="chart-heading text-blue">Equity Curve Growth</h3>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={equityCurve}>
                <CartesianGrid strokeDasharray="3,3" stroke="#374151" />
                <XAxis dataKey="day" stroke="#9CA3AF" />
                <YAxis stroke="#9CA3AF" />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: 'rgba(0,0,0,0.8)', 
                    border: '1px solid #374151',
                    borderRadius: '8px'
                  }}
                />
                <Line 
                  type="monotone" 
                  dataKey="value" 
                  stroke="#60A5FA" 
                  strokeWidth={3}
                  dot={{ fill: '#60A5FA', strokeWidth: 2, r: 4 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </motion.div>
        </div>
      </section>

      {/* Trading Systems Section */}
      <section className="trading-systems">
        <motion.h2 
          className="systems-heading"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          53+ Trading Systems & Projects
        </motion.h2>

        {/* Filter and Search */}
        <motion.div 
          className="filter-search-container"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="filter-search-inner">
            <div className="filter-buttons">
              {categories.map(category => (
                <button
                  key={category}
                  onClick={() => setActiveFilter(category)}
                  className={`filter-button ${activeFilter === category ? 'active' : ''}`}
                >
                  {category.replace('_', ' ').toUpperCase()}
                </button>
              ))}
            </div>
            
            <div className="search-input-container">
              <Search className="search-icon" />
              <input
                type="text"
                placeholder="Search strategies..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="search-input"
              />
            </div>
          </div>
        </motion.div>

        {/* Systems Grid */}
        <motion.div 
          className="systems-grid"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {filteredSystems.slice(0, visibleSystemsCount).map((system, index) => (
            <motion.div
              key={system.id}
              className="system-card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.02, y: -5 }}
            >
              <div className="card-content">
                <div className="card-header">
                  <div className="card-title-area">
                    <div className="category-risk-pills">
                      <span className={`category-pill ${system.category}`}>
                        {system.category.toUpperCase()}
                      </span>
                      <span className={`risk-pill ${system.risk.replace(' ', '')}`}>
                        {system.risk} Risk
                      </span>
                    </div>
                    <h3 className="card-title">
                      {system.title}
                    </h3>
                  </div>
                  <div className="pnl-area">
                    <div className="pnl-value">{system.pnl}</div>
                    <div className="pnl-label">P&L</div>
                  </div>
                </div>

                <div className="stats-grid">
                  <div className="stat-item">
                    <div className="stat-value">{system.sharpe}</div>
                    <div className="stat-label">Sharpe</div>
                  </div>
                  <div className="stat-item">
                    <div className="stat-value">{system.winRate}</div>
                    <div className="stat-label">Win Rate</div>
                  </div>
                  <div className="stat-item">
                    <div className="stat-value">{system.trades}</div>
                    <div className="stat-label">Trades</div>
                  </div>
                </div>

                <div className="details-space">
                  <div className="detail-row">
                    <span className="detail-label">Max DD:</span>
                    <span className="detail-value red">{system.maxDD}</span>
                  </div>
                  <div className="detail-row">
                    <span className="detail-label">Timeframe:</span>
                    <span className="detail-value white">{system.timeframe}</span>
                  </div>
                  <div className="detail-row">
                    <span className="detail-label">Complexity:</span>
                    <span className="detail-value white">{system.complexity}</span>
                  </div>
                </div>

                <p className="description">
                  {expandedCards[system.id] ? system.description : `${system.description.substring(0, 120)}...`}
                </p>

                {expandedCards[system.id] && (
                  <motion.div 
                    className="expanded-details"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="detail-row">
                      <span className="detail-label">Strategy:</span>
                      <span className="detail-value yellow">{system.strategy}</span>
                    </div>
                  </motion.div>
                )}

                <button
                  onClick={() => toggleExpanded(system.id)}
                  className="show-more-button"
                >
                  {expandedCards[system.id] ? 
                    <>Show Less <ChevronUp /></> :
                    <>Show More <ChevronDown /></>
                  }
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {visibleSystemsCount < filteredSystems.length && (
          <motion.button
            className="show-more-button-container"
            onClick={handleShowMore}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Show More Systems <ChevronDown />
          </motion.button>
        )}
      </section>

      {/* My Trading Ideas Section */}
      <section className="my-ideas-section">
        <motion.h2
          className="my-ideas-heading"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          My Trading Ideas
        </motion.h2>

        <div className="my-ideas-grid">
          {myIdeas.map(idea => (
            <motion.div
              key={idea.id}
              className="my-idea-card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idea.id * 0.1 }}
              whileHover={{ scale: 1.02, y: -5 }}
            >
              <div className="my-idea-card-content">
                <h3 className="my-idea-title">{idea.title}</h3>
                <p className="my-idea-meta">by {idea.author} | {idea.date}</p>
                <p className="my-idea-content">{idea.content}</p>
                {idea.setup && <p className="my-idea-setup">{idea.setup}</p>}
                <div className="my-idea-targets">
                  {idea.target && <span className="my-idea-target">{idea.target}</span>}
                  {idea.stopLoss && <span className="my-idea-stoploss">{idea.stopLoss}</span>}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="capabilities-section">
        <motion.h2 
          className="capabilities-heading"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Core Capabilities
        </motion.h2>

        <div className="capabilities-grid">
          {[
            {
              icon: Brain,
              title: "AI & Machine Learning",
              description: "Advanced neural networks, reinforcement learning, and ensemble methods for market prediction and strategy optimization.",
              color: "from-purple-500 to-pink-500"
            },
            {
              icon: Zap,
              title: "High-Frequency Trading",
              description: "Ultra-low latency systems with FPGA acceleration for microsecond-level market making and arbitrage opportunities.",
              color: "from-blue-500 to-cyan-500"
            },
            {
              icon: Globe,
              title: "Multi-Asset Portfolio",
              description: "Global diversification across forex, crypto, commodities, equities, fixed income, and alternative investments.",
              color: "from-green-500 to-emerald-500"
            },
            {
              icon: Shield,
              title: "Risk Management",
              description: "Sophisticated risk controls with VaR modeling, stress testing, and dynamic position sizing algorithms.",
              color: "from-red-500 to-pink-500"
            },
            {
              icon: Target,
              title: "Quantitative Research",
              description: "Statistical arbitrage, factor modeling, and econometric analysis for alpha generation and strategy development.",
              color: "from-yellow-500 to-orange-500"
            },
            {
              icon: Activity,
              title: "Real-Time Execution",
              description: "Direct market access with smart order routing, slippage minimization, and execution cost analysis.",
              color: "from-indigo-500 to-purple-500"
            }
          ].map((capability, index) => (
            <motion.div
              key={index}
              className="capability-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -10 }}
            >
              <div className="capability-icon-container">
                <capability.icon />
              </div>
              <h3 className="capability-title">
                {capability.title}
              </h3>
              <p className="capability-description">
                {capability.description}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="trader-footer">
        <div className="footer-content-wrapper">
          <div className="footer-text-container">
            <motion.div 
              className="footer-stats"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              {[
                { icon: DollarSign, label: "Portfolio Value", value: "$200k" },
                { icon: TrendingUp, label: "YTD Return", value: "+34.7%" },
                { icon: Award, label: "Sharpe Ratio", value: "1.68" },
                { icon: Star, label: "Systems Active", value: "53" }
              ].map((stat, index) => (
                <motion.div 
                  key={index}
                  className="footer-stat-item"
                  whileHover={{ scale: 1.1 }}
                >
                  <div className="footer-stat-icon-container">
                    <stat.icon />
                  </div>
                  <div className="footer-stat-value">{stat.value}</div>
                  <div className="footer-stat-label">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
            
            <motion.p 
              className="footer-copyright-text"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              © {new Date().getFullYear()} Talel Zamouri - Quantitative Trading Systems
            </motion.p>
            
            <motion.p 
              className="footer-disclaimer-text"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              Professional trading systems for institutional and private clients • Risk disclosure: Past performance does not guarantee future results
            </motion.p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default TraderPortfolio; 