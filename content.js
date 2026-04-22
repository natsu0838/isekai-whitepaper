/* =====================================================================
   ISEKAI Server Whitepaper — Content Source
   ---------------------------------------------------------------------
   このファイルがすべての文言の「唯一の情報源」です。
   ルール文言を修正したい場合は、このファイル内の文字列を編集するだけで
   日本語版・英語版の両方に反映されます。
   
   This file is the single source of truth for all rule text.
   To update any rule, edit the strings in this file —
   changes will reflect in both Japanese and English views.
   ===================================================================== */

const ISEKAI_CONTENT = {
  /* --------- メタ情報 / Meta --------- */
  meta: {
    serverName: "ISEKAI",
    version: "1.0",
    lastUpdated: {
      ja: "2026年4月22日",
      en: "April 22, 2026"
    },
    game: {
      title: "Legend of YMIR",
      url: "https://www.legendofymir.com/"
    }
  },

  /* --------- ヘッダー / Header --------- */
  header: {
    eyebrow: {
      ja: "サーバー憲章",
      en: "Server Charter"
    },
    title: {
      ja: "ISEKAI サーバールール",
      en: "ISEKAI Server Rules"
    },
    subtitle: {
      ja: "北欧神話の地で、共に紡ぐ物語のために",
      en: "Forging legends together in the realm of Norse myth"
    },
    intro: {
      ja: "ようこそ、ISEKAIサーバーへ。ここはLegend of YMIRの世界で、海を越え、言葉を越えて集った冒険者たちの拠点です。私たちが大切にしているのは、勝敗以上に「一緒に遊ぶ仲間への敬意」と「気軽に笑い合える空気感」。このホワイトペーパーは、そんな雰囲気をこれからも守っていくための、みんなのための約束ごとです。堅苦しく考える必要はありません。困ったときに立ち返れる、ちょっとした道しるべだと思ってください。",
      en: "Welcome to ISEKAI. This is where adventurers from across oceans and languages have gathered in the world of Legend of YMIR. What we value most isn't winning — it's mutual respect and the easy laughter shared between travel companions. This whitepaper exists to preserve that atmosphere for everyone who calls this server home. Don't think of these as rigid laws — think of them as a friendly compass to return to whenever you need one."
    }
  },

  /* --------- ナビゲーション / Navigation --------- */
  nav: {
    ja: [
      { id: "server-war",     label: "サーバー戦" },
      { id: "crown-strategy", label: "王冠戦の方針" },
      { id: "chat-manner",    label: "チャットマナー" },
      { id: "trouble",        label: "トラブル対応" },
      { id: "hunting",        label: "狩場ルール" },
      { id: "auto-quest",     label: "自動任務" },
      { id: "boss",           label: "ボス・チャンピオン" },
      { id: "prohibited",     label: "禁止事項" }
    ],
    en: [
      { id: "server-war",     label: "Server Battles" },
      { id: "crown-strategy", label: "Crown Strategy" },
      { id: "chat-manner",    label: "Chat Etiquette" },
      { id: "trouble",        label: "Conflict Resolution" },
      { id: "hunting",        label: "Hunting Grounds" },
      { id: "auto-quest",     label: "Auto-Quest" },
      { id: "boss",           label: "Boss & Champion" },
      { id: "prohibited",     label: "Prohibited Acts" }
    ]
  },

  /* --------- セクション / Sections --------- */
  sections: [
    {
      id: "server-war",
      number: "I",
      icon: "⚔",
      title: { ja: "サーバー戦ルール", en: "Server Battle Rules" },
      lead: {
        ja: "塔と王冠を巡る攻防は、サーバーの華。だからこそ、外の敵にだけ刃を向けましょう。",
        en: "The battles for the towers and the crown are the soul of our server — let's keep our blades aimed outward."
      },
      rules: [
        {
          ja: "塔は自由に争奪してOKです。",
          en: "The towers may be freely contested at any time."
        },
        {
          ja: "タワー1〜3の争奪戦中は、サーバー内プレイヤー同士の攻撃を禁止します。",
          en: "During Tower 1–3 battles, attacks between players of the same server are prohibited."
        },
        {
          ja: "王冠（クラウン）争奪戦中も同様に、サーバー内攻撃は禁止です。",
          en: "The same applies during the Crown contest — no intra-server attacks."
        }
      ]
    },
    {
      id: "crown-strategy",
      number: "II",
      icon: "♛",
      title: { ja: "王冠戦の行動方針", en: "Crown Battle Strategy" },
      lead: {
        ja: "王冠を獲ったクランは、もうサーバーの旗印。みんなで担いで守り抜きましょう。",
        en: "The clan that claims the Crown becomes our banner — we lift it together, and we defend it together."
      },
      rules: [
        {
          ja: "王冠を獲得したクランを、サーバー全体で防衛する方針に切り替えます。",
          en: "Once a clan claims the Crown, the entire server shifts into a unified defensive posture to protect them."
        },
        {
          ja: "敵サーバーからの攻撃に対しては、連携して防衛を行ってください。",
          en: "When enemy servers strike, coordinate with your fellow players to mount the defense together."
        }
      ]
    },
    {
      id: "chat-manner",
      number: "III",
      icon: "✦",
      title: { ja: "チャットマナー", en: "Chat Etiquette" },
      lead: {
        ja: "言葉ひとつで空気は変わります。気持ちよく話せる場所を、みんなで保ちましょう。",
        en: "A single word can shift the mood of an entire server. Let's keep this a place where everyone can speak comfortably."
      },
      rules: [
        {
          ja: "常に敬意を持った発言を心がけてください。",
          en: "Speak with respect at all times."
        },
        {
          ja: "差別発言などの暴言は禁止です。",
          en: "Discriminatory language and verbal abuse are strictly prohibited."
        },
        {
          ja: "幼稚な連呼やスパム行為はやめましょう。",
          en: "Childish spam and repetitive flooding are not welcome here."
        },
        {
          ja: "他サーバーのプレイヤーと交流する際も、同じ姿勢でお願いします。",
          en: "These same standards apply whenever you interact with players from other servers."
        }
      ]
    },
    {
      id: "trouble",
      number: "IV",
      icon: "☘",
      title: { ja: "トラブル対応", en: "Conflict Resolution" },
      lead: {
        ja: "誰にでも、うまくいかない日はあります。話せばだいたい、なんとかなります。",
        en: "Bad days happen to everyone. Most things work out once we actually talk them through."
      },
      rules: [
        {
          ja: "問題やもめ事は、まず話し合いで解決を目指しましょう。",
          en: "When issues arise, aim to resolve them through honest conversation first."
        },
        {
          ja: "感情的にならず、冷静に対応してください。",
          en: "Stay calm. Handle disagreements with a level head, not heated words."
        }
      ]
    },
    {
      id: "hunting",
      number: "V",
      icon: "🏹",
      title: { ja: "狩場ルール（マップスポット）", en: "Hunting Ground Rules (Map Spots)" },
      lead: {
        ja: "先に来た人の場所は、その人のリズムを尊重して。譲り合いがいちばん早い近道です。",
        en: "Honor the rhythm of whoever arrived first. A little courtesy is the fastest path forward."
      },
      rules: [
        {
          ja: "先人がいる場合は、無断での割り込みや占有はしないでください。",
          en: "If another player is already at a spot, do not cut in or take it over without asking."
        },
        {
          ja: "※例外：クエスト進行中の通過・処理は対象外です。",
          en: "Exception: passing through or completing active quest objectives is fine.",
          note: true
        }
      ]
    },
    {
      id: "auto-quest",
      number: "VI",
      icon: "⚙",
      title: { ja: "自動任務ルール", en: "Auto-Quest Rules" },
      lead: {
        ja: "オートで遊ぶ時間も大切。でも、誰かの成長の邪魔にならないように。",
        en: "Auto-quest time matters too — just not at the cost of someone else's progress."
      },
      rules: [
        {
          ja: "自動任務ルートでの正義モードの使用は禁止です。",
          en: "Justice Mode is not permitted while running auto-quest routes."
        },
        {
          ja: "味方プレイヤーの成長や、狩場環境を妨げる行為とみなされます。",
          en: "Such use is treated as obstruction of fellow players' growth and disruption of the hunting environment."
        }
      ]
    },
    {
      id: "boss",
      number: "VII",
      icon: "☠",
      title: { ja: "ボス・チャンピオンルール（最重要）", en: "Boss & Champion Rules (Top Priority)" },
      important: true,
      lead: {
        ja: "ここがいちばん揉めやすい場所。だからこそ、ラインをはっきりさせておきます。",
        en: "This is where things get heated most often — so the line is drawn clearly here."
      },
      subsections: [
        {
          heading: { ja: "HPによる判定", en: "HP-Based Judgment" },
          rules: [
            {
              ja: "HP50%以上 → 誰でも攻撃OK（自由参加）",
              en: "HP above 50% → Anyone may attack (free-for-all)"
            },
            {
              ja: "HP50%未満 → 最初に攻撃した人が独占権を持ちます",
              en: "HP below 50% → The first attacker holds exclusive rights"
            }
          ]
        },
        {
          heading: { ja: "禁止行為", en: "Prohibited Actions" },
          rules: [
            {
              ja: "横取り（キルスティール）",
              en: "Kill stealing"
            },
            {
              ja: "妨害、強引な割り込み",
              en: "Interference or forced entry into another player's fight"
            }
          ]
        },
        {
          heading: { ja: "対象", en: "Applies To" },
          rules: [
            {
              ja: "全ボス（フォークヴァング／ヴァルキリーの殿堂／フィールドを含むすべて）",
              en: "All bosses (Fólkvangr, Hall of the Valkyries, and all field bosses)"
            }
          ]
        }
      ]
    },
    {
      id: "prohibited",
      number: "VIII",
      icon: "⛔",
      title: { ja: "その他禁止事項", en: "Other Prohibited Acts" },
      lead: {
        ja: "サーバーの土台を壊す行為は、誰のためにもなりません。ここは線引きをはっきり。",
        en: "Some lines exist to protect everyone — these are non-negotiable."
      },
      rules: [
        {
          ja: "RMT（リアルマネートレード）を行う、または試みる行為は禁止です。",
          en: "Real-money trading (RMT), and any attempt to engage in it, is prohibited."
        },
        {
          ja: "チートツール等を用いた不正行為は、いかなる形でも禁止です。",
          en: "Cheat tools and any form of unauthorized exploitation are strictly forbidden."
        }
      ]
    }
  ],

  /* --------- フッター / Footer --------- */
  footer: {
    closing: {
      ja: "ルールは、誰かを縛るためではなく、もっと自由に遊ぶためにあります。困ったときは、まず近くの誰かに声をかけてみてください。ISEKAIは、そういうサーバーでありたいと思っています。",
      en: "These rules don't exist to restrict you — they exist so we can all play more freely. When something's wrong, just reach out to someone nearby. That's the kind of server ISEKAI wants to be."
    },
    signature: {
      ja: "— ISEKAI 運営チーム",
      en: "— The ISEKAI Team"
    },
    languageToggle: {
      ja: "English",
      en: "日本語"
    },
    versionLabel: {
      ja: "バージョン",
      en: "Version"
    },
    updatedLabel: {
      ja: "最終更新",
      en: "Last Updated"
    }
  }
};
