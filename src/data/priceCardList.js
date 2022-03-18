export default [
  {
    crown: true,
    name: 'プレミアムプラン',
    campaign: true,
    before: '480,000円',
    price: '300,000円',
    description:
      'このLPと同じクオリティ！\n時間をかけて細部まで丁寧に\nこだわりたい人向けのプランです。',
    breakdown: [
      { title: 'プレミアムセクション×8', price: '400,000円' },
      { title: '企画/環境構築費', price: '50,000円' },
      { title: '問い合わせフォーム', price: '30,000円' },
      { title: 'ホスティング', price: '0円' },
      { title: 'レスポンシブ対応', price: '0円' },
    ],
  },
  {
    crown: false,
    name: 'シンプルプラン',
    campaign: true,
    before: '110,000円',
    price: '100,000円',
    description: 'シンプルな3セクションで\n必要な情報をスマートに！',
    breakdown: [
      { title: 'シンプルセクション×3', price: '60,000円' },
      { title: '企画/環境構築費', price: '50,000円' },
      { title: 'ホスティング', price: '0円' },
      { title: 'レスポンシブ対応', price: '0円' },
    ],
  },
]
