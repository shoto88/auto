# カスハラ対策ナビ — 2026年10月義務化対応の情報・比較サイト

改正労働施策総合推進法(2026年10月1日施行)で全事業主に義務化される**カスタマーハラスメント対策**の総合情報サイト。制度解説・ひな形(基本方針/掲示文/対応フロー)・対策サービス比較を1か所にまとめる。**最終目標はスモールM&A市場での売却(バイアウト)。**

- ジャンル選定の調査記録: [`docs/genre-research.md`](docs/genre-research.md)
- 事業計画・売却までのロードマップ: [`docs/strategy.md`](docs/strategy.md)
- 掲載データの集め方・入力ガイド: [`docs/data-guide.md`](docs/data-guide.md)

> 掲載データは**実在する15サービス**(2026年7月14日時点の公開情報ベース)。料金は公式に公開されている金額のみ記載し、未確認は「要問い合わせ」。運用ルールは `docs/data-guide.md` を参照。

## 技術構成

- [Astro](https://astro.build) による完全静的サイト(サーバー不要・維持費ほぼゼロ)
- 掲載データは `src/data/services.json` の1ファイルで管理(非エンジニアでも更新可能 → 売却時に引き継ぎやすい)
- Cloudflare Pages / Vercel / Netlify の無料枠でホスティング可能

## 開発

```bash
npm install
npm run dev      # 開発サーバー (http://localhost:4321)
npm run build    # 本番ビルド → dist/
npm run preview  # ビルド結果の確認
```

## ページ構成

| パス | 内容 | 役割 |
|---|---|---|
| `/` | トップ(施行日カウントダウン+対応4ステップ) | 全体導線 |
| `/guide/` | 義務化ガイド(施行日・対象・講ずべき措置) | SEO集客の柱 |
| `/templates/` | 基本方針・掲示文・対応フローのひな形 | アクセスの入口(検索需要大) |
| `/services/` | 対策サービス比較(実在15サービス、カテゴリ絞り込み付き) | マネタイズ(送客) |
| `/services/[slug]/` | 各サービス詳細(データから自動生成) | ロングテールSEO |
| `/subsidy/` | 東京都カスハラ防止対策奨励金(40万円)の解説 | 商業意図の強い検索の受け皿+ツール比較への導線 |
| `/industry/` | 業種別の対応要点 | 検索の受け皿+内部リンク |
| `/about/` | 運営者情報・掲載基準・問い合わせ | 信頼性 |

## デプロイ(Cloudflare Pages の例)

1. このリポジトリを Cloudflare Pages に接続
2. Build command: `npm run build` / Output directory: `dist`
3. 独自ドメインを設定したら `astro.config.mjs` の `site` と `public/robots.txt` の URL を差し替える
