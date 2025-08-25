export const projects = [
  {
    id: 'greenai',
    title: 'GreenAI',
    company: 'GreenAI',
    role: 'Full-Stack Python Developer',
    type: 'saaS',
    typeIcon: 'Database',
    typeColor: 'from-green-400 to-green-600',
    technologies: ['Python','PyMuPDF','ReportLab', 'WeasyPrint','OpenAI API','Node.js','Express','Redis','MongoDB','Docker','Azure Pipelines','ReactJS','NextJS'],
    achievements: [
      'Automated parsing of architectural drawings, HVAC schedules, and IAQ documentation using OCR and spatial libraries',
      'Implemented AI-driven data extraction pipeline with OpenAI API for text and tables',
      'Built a rule-based engine for LEED credit calculation across v4, v4.1, and v5'
    ],
    impact: 'Shortened certification timelines and reduced manual effort',
    users: 'Developers, contractors, sustainability consultants, building owners',
    confidential: true
  },
  {
    id: 'dapp-confidential',
    title: 'DAPP — [Name Confidential]',
    company: 'Confidential Client',
    role: 'Full-Stack Developer',
    type: 'blockchain',
    typeIcon: 'BlockchainIcon',
    typeColor: 'from-purple-500 to-pink-500',
    technologies: ['NextJS', 'HTML', 'CSS', 'GraphQL (Apollo Server)', 'SEO', 'React', 'NodeJS'],
    achievements: [
      'Architected and built an SEO-optimized, server-side-rendered full-stack platform using Next.js and Node.js',
      'Designed a type-safe GraphQL API layer with Apollo Server, reducing over-fetching and improving developer productivity',
      'Platform now supports over a half-billion-dollar valuation and serves millions of global users'
    ],
    impact: 'Half-billion-dollar valuation',
    users: 'Millions of global users',
    confidential: true
  },
  {
    id: 'clay-buck-coast',
    title: 'Clay & Buck / Coast to Coast AM',
    company: 'iHeartMedia',
    role: 'React Native Developer',
    type: 'mobile',
    typeIcon: 'MobileIcon',
    typeColor: 'from-blue-500 to-cyan-500',
    technologies: ['React Native', 'GraphQL (Apollo Server)', 'SEO', 'React', 'JavaScript', 'TypeScript', 'NodeJS', 'TestFlight', 'Google Play Console', 'Sentry', 'Firebase Crashlytics'],
    achievements: [
      'Maintained and modernized existing React Native codebase for Coast to Coast AM Insider podcast application (iOS 15.6+ & Android API 30+)',
      'Upgraded React Native version from 0.64 to 0.73, resolving breaking changes in third-party libraries',
      'Integrated and upgraded React Native audio player with background playback, lock-screen controls, and offline episode caching',
      'Migrated legacy REST endpoints to GraphQL, reducing round-trip requests by 40% and simplifying state management',
      'Managed App Store and Google Play Store releases with timely approvals'
    ],
    impact: '40% reduction in API requests',
    users: 'Podcast listeners',
    confidential: false
  },
  {
    id: 'meta1-fluer',
    title: 'Meta1 — Fluer App',
    company: 'Meta1',
    role: 'Flutter Developer',
    type: 'mobile',
    typeIcon: 'MobileIcon',
    typeColor: 'from-green-500 to-emerald-500',
    technologies: ['Flutter', 'Dart', 'ReactJS', 'React Native', 'GraphQL', 'JavaScript', 'TypeScript', 'NodeJS', 'HTML5', 'CSS3'],
    achievements: [
      'Led full migration of legacy JavaScript blockchain into Dart, re-implementing all calls in Flutter',
      'Recreated all UI screens—buy, sell, deposit, withdraw, token swap interface, dashboard charts, transaction history—in Flutter\'s widget tree',
      'Ensured responsive layouts for mobile and web automatically',
      'Delivered Android APK with proper keystore signatures and iOS IPA uploaded to App Store Connect'
    ],
    impact: 'Complete platform migration',
    users: 'Blockchain users',
    confidential: false
  },
  {
    id: 'cakepanda',
    title: 'CakePanda',
    company: 'Decentralized Marketplace',
    role: 'Full-Stack Developer',
    type: 'blockchain',
    typeIcon: 'BlockchainIcon',
    typeColor: 'from-orange-500 to-red-500',
    technologies: ['NextJS (ReactJS)', 'JavaScript', 'TypeScript', 'NodeJS', 'HTML5', 'CSS3', 'EtherJS', 'Wagmi'],
    achievements: [
      'Built a decentralized NFT/token marketplace inspired by Cake Monster on BNB Chain',
      'Coordinated with UI/UX designer to convert Figma wireframes into responsive React components (mobile-first)',
      'Implemented React/Next.js front-end with Web3 integration (Ethers.js and Wagmi.js) for Metamask/TrustWallet connectivity',
      'Integrated "CakePanda" tokenomics—transaction fees split into buy-back burns, liquidity pooling, and community rewards'
    ],
    impact: 'Live burn and reward metrics',
    users: 'NFT/Token traders',
    confidential: false
  },
  {
    id: 'crosstower',
    title: 'CrossTower',
    company: 'Crypto Exchange',
    role: 'Full-Stack Developer',
    type: 'web',
    typeIcon: 'WebIcon',
    typeColor: 'from-indigo-500 to-purple-500',
    technologies: ['NextJS', 'ReactJS', 'JavaScript', 'TypeScript', 'NodeJS', 'HTML5', 'CSS3', 'SEO', 'AWS', 'Docker', 'WebSocket', 'REST APIs', 'Payment-Gateway SDKs'],
    achievements: [
      'Created homepage using Next.js with server-side rendering and SEO optimization',
      'Designed real-time trading UI with WebSocket-driven order book showing live bids and asks',
      'Built buy/sell/convert functionality in React components with real-time portfolio updates',
      'Maintained user portfolio view showing balances, order history, and P&L with real-time data refresh',
      'Integrated AirPay gateway for fiat deposit and withdrawal with payment SDK and transaction status tracking'
    ],
    impact: 'Real-time trading platform',
    users: 'Crypto traders',
    confidential: false
  }
];
