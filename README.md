# ISEKAI ホワイトペーパー — 運用ガイド / Operations Guide

## ファイル構成 / File Structure

```
isekai-whitepaper/
├── isekai-whitepaper.html   ← メインのHTMLファイル（基本的に触らない）
├── content.js                ← ★ 文言を編集するファイルはここ ★
└── README.md                 ← このファイル
```

## 🇯🇵 日本語：文言を修正したいとき

**修正したいルールの文言は、すべて `content.js` だけを編集すれば反映されます。**
HTMLファイルは触る必要がありません。

### 例1：ルールの文言を1つ変えたい

`content.js` を開いて、修正したい文を探します。

```javascript
{
  ja: "塔は自由に争奪してOKです。",
  en: "The towers may be freely contested at any time."
}
```

`ja:` の右側が日本語、`en:` の右側が英語です。
それぞれを書き換えればOK。**両方を必ず編集してください**（片方だけ変えると、もう片方の言語で見た時にズレます）。

### 例2：ルールを1つ追加したい

該当セクションの `rules:` の中の配列に、カンマ区切りで新しい項目を追加します。

```javascript
rules: [
  {
    ja: "塔は自由に争奪してOKです。",
    en: "The towers may be freely contested at any time."
  },
  {
    ja: "新しく追加したいルールをここに書きます。",  ← 追加
    en: "Write the new rule here in English."          ← 追加
  }
]
```

### 例3：ルールを削除したい

該当の `{ ja: "...", en: "..." }` のブロックを、前後のカンマも含めて削除します。

### 例4：セクション全体を追加したい

`sections: [` の中に、既存セクションをコピペして編集するのが安全です。
最低限必要な項目は次の通り：

```javascript
{
  id: "new-section",                              // URLハッシュ用のID（半角英数）
  number: "IX",                                   // 章番号（ローマ数字）
  icon: "✦",                                      // アイコン（任意の絵文字や記号）
  title: { ja: "新しい章", en: "New Chapter" },
  lead:  { ja: "リード文（任意）", en: "Lead text (optional)" },
  rules: [
    { ja: "ルール1", en: "Rule 1" },
    { ja: "ルール2", en: "Rule 2" }
  ]
}
```

ナビゲーション（目次）にも自動で出すには、`nav` の `ja` と `en` の両配列にも同じ `id` で追加してください。

### 例5：最終更新日やバージョンを変える

`content.js` の冒頭にある `meta` ブロックを編集します。

```javascript
meta: {
  serverName: "ISEKAI",
  version: "1.1",                          ← 変更
  lastUpdated: {
    ja: "2026年5月",                       ← 変更
    en: "May 2026"                         ← 変更
  }
}
```

### 公開時の注意

このファイルセットは静的なHTMLなので、サーバーにそのままアップロードするだけで公開できます。
DiscordやWebサイトに掲載する場合は、`isekai-whitepaper.html` と `content.js` の2つのファイルを**同じフォルダ**に置いてください。

ローカルでプレビューする場合は、`isekai-whitepaper.html` をブラウザで開くだけです。
（一部のブラウザでローカル `file://` 経由だと content.js が読み込めないことがあります。その場合は簡易サーバーを立ててください：例 `python3 -m http.server`）

---

## 🇬🇧 English: How to Edit

**All rule text lives in `content.js`. You never need to touch the HTML file** to change wording.

### Example 1: Change one rule

Open `content.js`, find the rule you want to edit:

```javascript
{
  ja: "塔は自由に争奪してOKです。",
  en: "The towers may be freely contested at any time."
}
```

Edit both `ja:` (Japanese) and `en:` (English). **Always update both** to keep the languages in sync.

### Example 2: Add a new rule

Inside the relevant section's `rules:` array, append a new entry:

```javascript
rules: [
  { ja: "...", en: "..." },
  { ja: "新しいルール", en: "Your new rule here" }   ← added
]
```

### Example 3: Remove a rule

Delete the entire `{ ja: "...", en: "..." }` block including its trailing comma.

### Example 4: Add a whole new chapter

Copy-paste an existing section inside `sections: [...]`:

```javascript
{
  id: "new-section",
  number: "IX",
  icon: "✦",
  title: { ja: "新しい章", en: "New Chapter" },
  lead:  { ja: "...", en: "..." },
  rules: [
    { ja: "...", en: "..." }
  ]
}
```

To make it appear in the navigation menu, also add an entry with the same `id` to both `nav.ja` and `nav.en`.

### Example 5: Update version / date

Edit the `meta` block at the top of `content.js`.

### Deployment

Just upload the two files (`isekai-whitepaper.html` + `content.js`) to any web host — they form a fully static page, no server needed.

To preview locally: open the HTML in a browser. If `file://` blocks the JS load, run a quick local server:
```
python3 -m http.server
```

---

## ⚠ よくある失敗 / Common Mistakes

1. **カンマを忘れる** — JSON風の配列なので、`{...}` と `{...}` の間にはカンマが必要。最後の要素にはカンマ不要。
   *Forgetting commas — array elements need commas between them, but not after the last one.*

2. **クォート（`"`）を全角にしてしまう** — 必ず半角の `"` を使う。
   *Using full-width quotes — always use ASCII `"`.*

3. **片方の言語だけ修正する** — 必ず `ja` と `en` の両方を更新。
   *Editing only one language — always update both `ja` and `en`.*

4. **HTMLを直接編集する** — 文言修正は `content.js` のみで完結します。HTMLは触らないでください。
   *Editing the HTML directly — all text changes happen in `content.js`. Leave the HTML alone.*

---

## デザインのカラーやフォントを変えたい場合 / Visual Customization

色やフォントは `isekai-whitepaper.html` の `<style>` セクション冒頭の `:root` ブロックで管理しています：

```css
:root {
  --gold:       #c9a24a;   /* メインのゴールドカラー */
  --parchment:  #f4ead5;   /* 文字色 */
  --ink:        #0e1620;   /* 背景色 */
  ...
}
```

ここの色コードを変えるだけで、サイト全体のテーマカラーが切り替わります。
