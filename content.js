/* =====================================================================
   ISEKAI Server Whitepaper — Content Source
   ---------------------------------------------------------------------
   このファイルがすべての文言の「唯一の情報源」です。
   ルール文言を修正したい場合は、このファイル内の文字列を編集するだけで
   日本語・英語・中国語（簡体）・ベトナム語のすべてに反映されます。

   This file is the single source of truth for all rule text.
   To update any rule, edit the strings in this file —
   changes will reflect in Japanese, English, Simplified Chinese,
   and Vietnamese views.
   ===================================================================== */

const ISEKAI_CONTENT = {
  /* --------- メタ情報 / Meta --------- */
  meta: {
    serverName: "ISEKAI",
    version: "1.0",
    lastUpdated: {
      ja: "2026年4月22日",
      en: "April 22, 2026",
      zh: "2026年4月22日",
      vi: "22 tháng 4, 2026"
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
      en: "Server Charter",
      zh: "服务器宪章",
      vi: "Hiến chương máy chủ"
    },
    title: {
      ja: "ISEKAI サーバールール",
      en: "ISEKAI Server Rules",
      zh: "ISEKAI 服务器规则",
      vi: "Quy tắc máy chủ ISEKAI"
    },
    subtitle: {
      ja: "北欧神話の地で、共に紡ぐ物語のために",
      en: "Forging legends together in the realm of Norse myth",
      zh: "在北欧神话的大地上，共同编织我们的传说",
      vi: "Cùng dệt nên huyền thoại trên vùng đất thần thoại Bắc Âu"
    },
    intro: {
      ja: "ようこそ、ISEKAIサーバーへ。ここはLegend of YMIRの世界で、海を越え、言葉を越えて集った冒険者たちの拠点です。私たちが大切にしているのは、勝敗以上に「一緒に遊ぶ仲間への敬意」と「気軽に笑い合える空気感」。このホワイトペーパーは、そんな雰囲気をこれからも守っていくための、みんなのための約束ごとです。堅苦しく考える必要はありません。困ったときに立ち返れる、ちょっとした道しるべだと思ってください。",
      en: "Welcome to ISEKAI. This is where adventurers from across oceans and languages have gathered in the world of Legend of YMIR. What we value most isn't winning — it's mutual respect and the easy laughter shared between travel companions. This whitepaper exists to preserve that atmosphere for everyone who calls this server home. Don't think of these as rigid laws — think of them as a friendly compass to return to whenever you need one.",
      zh: "欢迎来到 ISEKAI 服务器。这里是 Legend of YMIR 的世界，是跨越海洋与语言相聚一堂的冒险者们的据点。比起胜负，我们更珍视「对同伴的尊重」与「能轻松欢笑的氛围」。这份白皮书，是为了让这样的氛围延续下去、属于大家的共同约定。不必把它想得太严肃——请把它当作困惑时可以回头参考的一份小小指引。",
      vi: "Chào mừng đến với máy chủ ISEKAI. Đây là thế giới Legend of YMIR, nơi những nhà phiêu lưu vượt qua biển cả và ngôn ngữ tụ hội về. Điều chúng tôi trân trọng hơn cả thắng thua là «sự tôn trọng dành cho bạn đồng hành» và «bầu không khí dễ dàng cười đùa cùng nhau». Bản bạch thư này là lời hẹn ước chung để gìn giữ bầu không khí ấy cho tất cả mọi người. Đừng nghĩ nó quá nghiêm khắc — hãy xem nó như một tấm biển chỉ đường nhỏ, để quay về mỗi khi bối rối."
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
    ],
    zh: [
      { id: "server-war",     label: "服务器战役" },
      { id: "crown-strategy", label: "王冠战方针" },
      { id: "chat-manner",    label: "聊天礼仪" },
      { id: "trouble",        label: "纠纷处理" },
      { id: "hunting",        label: "狩猎场规则" },
      { id: "auto-quest",     label: "自动任务" },
      { id: "boss",           label: "Boss 与冠军" },
      { id: "prohibited",     label: "禁止事项" }
    ],
    vi: [
      { id: "server-war",     label: "Trận chiến máy chủ" },
      { id: "crown-strategy", label: "Chiến lược Vương miện" },
      { id: "chat-manner",    label: "Phép tắc trò chuyện" },
      { id: "trouble",        label: "Giải quyết xung đột" },
      { id: "hunting",        label: "Quy tắc khu săn" },
      { id: "auto-quest",     label: "Nhiệm vụ tự động" },
      { id: "boss",           label: "Boss & Champion" },
      { id: "prohibited",     label: "Hành vi bị cấm" }
    ]
  },

  /* --------- セクション / Sections --------- */
  sections: [
    {
      id: "server-war",
      number: "I",
      icon: "⚔",
      title: {
        ja: "サーバー戦ルール",
        en: "Server Battle Rules",
        zh: "服务器战役规则",
        vi: "Quy tắc trận chiến máy chủ"
      },
      lead: {
        ja: "塔と王冠を巡る攻防は、サーバーの華。だからこそ、外の敵にだけ刃を向けましょう。",
        en: "The battles for the towers and the crown are the soul of our server — let's keep our blades aimed outward.",
        zh: "围绕塔楼与王冠的攻防是服务器的精华。正因如此，让我们只将刀锋指向外部的敌人。",
        vi: "Những trận chiến quanh các tòa tháp và Vương miện là linh hồn của máy chủ — hãy chỉ hướng lưỡi kiếm ra bên ngoài."
      },
      rules: [
        {
          ja: "塔は自由に争奪してOKです。",
          en: "The towers may be freely contested at any time.",
          zh: "塔楼可以自由争夺。",
          vi: "Các tòa tháp có thể được tranh đoạt tự do bất cứ lúc nào."
        },
        {
          ja: "タワー1〜3の争奪戦中は、サーバー内プレイヤー同士の攻撃を禁止します。",
          en: "During Tower 1–3 battles, attacks between players of the same server are prohibited.",
          zh: "在塔 1 至塔 3 的争夺战期间，禁止同服务器玩家之间互相攻击。",
          vi: "Trong các trận tranh Tháp 1–3, cấm tấn công giữa các người chơi cùng máy chủ."
        },
        {
          ja: "王冠（クラウン）争奪戦中も同様に、サーバー内攻撃は禁止です。",
          en: "The same applies during the Crown contest — no intra-server attacks.",
          zh: "王冠（Crown）争夺战期间同样禁止同服务器内互相攻击。",
          vi: "Quy định tương tự áp dụng cho trận tranh Vương miện — cấm tấn công nội bộ máy chủ."
        }
      ]
    },
    {
      id: "crown-strategy",
      number: "II",
      icon: "♛",
      title: {
        ja: "王冠戦の行動方針",
        en: "Crown Battle Strategy",
        zh: "王冠战行动方针",
        vi: "Phương châm hành động trong trận Vương miện"
      },
      lead: {
        ja: "王冠を獲ったクランは、もうサーバーの旗印。みんなで担いで守り抜きましょう。",
        en: "The clan that claims the Crown becomes our banner — we lift it together, and we defend it together.",
        zh: "夺得王冠的公会就是服务器的旗帜——让我们一同举起、一同守护。",
        vi: "Liên minh giành được Vương miện trở thành lá cờ của máy chủ — tất cả cùng nâng lên, cùng bảo vệ."
      },
      rules: [
        {
          ja: "王冠を獲得したクランを、サーバー全体で防衛する方針に切り替えます。",
          en: "Once a clan claims the Crown, the entire server shifts into a unified defensive posture to protect them.",
          zh: "一旦有公会夺得王冠，整个服务器将转为统一防御，共同守护该公会。",
          vi: "Khi một liên minh giành được Vương miện, toàn bộ máy chủ chuyển sang tư thế phòng thủ thống nhất để bảo vệ họ."
        },
        {
          ja: "敵サーバーからの攻撃に対しては、連携して防衛を行ってください。",
          en: "When enemy servers strike, coordinate with your fellow players to mount the defense together.",
          zh: "面对敌对服务器的进攻，请与同伴协作，共同防御。",
          vi: "Khi máy chủ địch tấn công, hãy phối hợp với đồng đội để cùng nhau phòng thủ."
        }
      ]
    },
    {
      id: "chat-manner",
      number: "III",
      icon: "✦",
      title: {
        ja: "チャットマナー",
        en: "Chat Etiquette",
        zh: "聊天礼仪",
        vi: "Phép tắc trò chuyện"
      },
      lead: {
        ja: "言葉ひとつで空気は変わります。気持ちよく話せる場所を、みんなで保ちましょう。",
        en: "A single word can shift the mood of an entire server. Let's keep this a place where everyone can speak comfortably.",
        zh: "一句话就能改变整个氛围。让我们共同守护一个人人都能愉快交流的地方。",
        vi: "Một lời nói có thể thay đổi cả bầu không khí. Hãy cùng giữ nơi này là chỗ ai cũng có thể trò chuyện thoải mái."
      },
      rules: [
        {
          ja: "常に敬意を持った発言を心がけてください。",
          en: "Speak with respect at all times.",
          zh: "请始终以尊重的态度发言。",
          vi: "Luôn phát ngôn với sự tôn trọng."
        },
        {
          ja: "差別発言などの暴言は禁止です。",
          en: "Discriminatory language and verbal abuse are strictly prohibited.",
          zh: "禁止任何歧视言论或恶言辱骂。",
          vi: "Nghiêm cấm ngôn từ phân biệt đối xử và lăng mạ."
        },
        {
          ja: "幼稚な連呼やスパム行為はやめましょう。",
          en: "Childish spam and repetitive flooding are not welcome here.",
          zh: "请停止幼稚的反复刷屏与垃圾信息行为。",
          vi: "Không spam trẻ con hay lặp lại tin nhắn gây nhiễu."
        },
        {
          ja: "他サーバーのプレイヤーと交流する際も、同じ姿勢でお願いします。",
          en: "These same standards apply whenever you interact with players from other servers.",
          zh: "与其他服务器的玩家交流时，同样请遵守上述态度。",
          vi: "Các chuẩn mực trên cũng áp dụng khi bạn giao tiếp với người chơi từ máy chủ khác."
        }
      ]
    },
    {
      id: "trouble",
      number: "IV",
      icon: "☘",
      title: {
        ja: "トラブル対応",
        en: "Conflict Resolution",
        zh: "纠纷处理",
        vi: "Giải quyết xung đột"
      },
      lead: {
        ja: "誰にでも、うまくいかない日はあります。話せばだいたい、なんとかなります。",
        en: "Bad days happen to everyone. Most things work out once we actually talk them through.",
        zh: "谁都会有不顺利的日子。只要肯好好谈，大多数事情都能解决。",
        vi: "Ai cũng có những ngày không thuận lợi. Hầu hết mọi chuyện đều ổn thỏa khi ta thực sự trò chuyện."
      },
      rules: [
        {
          ja: "問題やもめ事は、まず話し合いで解決を目指しましょう。",
          en: "When issues arise, aim to resolve them through honest conversation first.",
          zh: "遇到问题或纷争时，首先请通过坦诚沟通来寻求解决。",
          vi: "Khi có vấn đề, trước hết hãy tìm cách giải quyết qua đối thoại chân thành."
        },
        {
          ja: "感情的にならず、冷静に対応してください。",
          en: "Stay calm. Handle disagreements with a level head, not heated words.",
          zh: "请保持冷静，不要情绪化，理性地处理分歧。",
          vi: "Hãy giữ bình tĩnh. Xử lý bất đồng bằng đầu lạnh, không phải lời nóng nảy."
        }
      ]
    },
    {
      id: "hunting",
      number: "V",
      icon: "🏹",
      title: {
        ja: "狩場ルール（マップスポット）",
        en: "Hunting Ground Rules (Map Spots)",
        zh: "狩猎场规则（地图点位）",
        vi: "Quy tắc khu săn (Điểm trên bản đồ)"
      },
      lead: {
        ja: "先に来た人の場所は、その人のリズムを尊重して。譲り合いがいちばん早い近道です。",
        en: "Honor the rhythm of whoever arrived first. A little courtesy is the fastest path forward.",
        zh: "请尊重先到者的节奏。互相礼让，才是最快的捷径。",
        vi: "Tôn trọng nhịp độ của người đến trước. Một chút nhường nhịn là con đường nhanh nhất."
      },
      rules: [
        {
          ja: "先人がいる場合は、無断での割り込みや占有はしないでください。",
          en: "If another player is already at a spot, do not cut in or take it over without asking.",
          zh: "如果已有玩家在该地点，请勿未经允许插入或占据。",
          vi: "Nếu đã có người chơi khác ở điểm săn, đừng chen vào hay chiếm chỗ mà chưa hỏi."
        },
        {
          ja: "※例外：クエスト進行中の通過・処理は対象外です。",
          en: "Exception: passing through or completing active quest objectives is fine.",
          zh: "※例外：任务进行中的通过或处理不在此限。",
          vi: "※Ngoại lệ: việc đi qua hay xử lý mục tiêu nhiệm vụ đang tiến hành là được phép.",
          note: true
        }
      ]
    },
    {
      id: "auto-quest",
      number: "VI",
      icon: "⚙",
      title: {
        ja: "自動任務ルール",
        en: "Auto-Quest Rules",
        zh: "自动任务规则",
        vi: "Quy tắc nhiệm vụ tự động"
      },
      lead: {
        ja: "オートで遊ぶ時間も大切。でも、誰かの成長の邪魔にならないように。",
        en: "Auto-quest time matters too — just not at the cost of someone else's progress.",
        zh: "自动挂机的时间也很重要，但请不要妨碍他人的成长。",
        vi: "Thời gian cày tự động cũng quan trọng — nhưng đừng cản trở sự phát triển của người khác."
      },
      rules: [
        {
          ja: "自動任務ルートでの正義モードの使用は禁止です。",
          en: "Justice Mode is not permitted while running auto-quest routes.",
          zh: "在自动任务路线中禁止使用正义模式。",
          vi: "Cấm sử dụng Chế độ Chính nghĩa khi chạy tuyến nhiệm vụ tự động."
        },
        {
          ja: "味方プレイヤーの成長や、狩場環境を妨げる行為とみなされます。",
          en: "Such use is treated as obstruction of fellow players' growth and disruption of the hunting environment.",
          zh: "此行为将被视为妨碍同服玩家的成长并破坏狩猎环境。",
          vi: "Hành vi này được xem là cản trở sự phát triển của đồng đội và phá hoại môi trường săn bắn."
        }
      ]
    },
    {
      id: "boss",
      number: "VII",
      icon: "☠",
      title: {
        ja: "ボス・チャンピオンルール（最重要）",
        en: "Boss & Champion Rules (Top Priority)",
        zh: "Boss 与冠军规则（最重要）",
        vi: "Quy tắc Boss & Champion (Ưu tiên cao nhất)"
      },
      important: true,
      lead: {
        ja: "ここがいちばん揉めやすい場所。だからこそ、ラインをはっきりさせておきます。",
        en: "This is where things get heated most often — so the line is drawn clearly here.",
        zh: "这里最容易发生纠纷，因此我们在此明确划定界线。",
        vi: "Đây là nơi dễ xảy ra xung đột nhất — vì vậy ranh giới được vạch rõ tại đây."
      },
      subsections: [
        {
          heading: {
            ja: "HPによる判定",
            en: "HP-Based Judgment",
            zh: "按 HP 判定",
            vi: "Phán định theo HP"
          },
          rules: [
            {
              ja: "HP50%以上 → 誰でも攻撃OK（自由参加）",
              en: "HP above 50% → Anyone may attack (free-for-all)",
              zh: "HP 50% 以上 → 任何人都可攻击（自由参与）",
              vi: "HP trên 50% → Bất cứ ai cũng có thể tấn công (tự do tham gia)"
            },
            {
              ja: "HP50%未満 → 最初に攻撃した人が独占権を持ちます",
              en: "HP below 50% → The first attacker holds exclusive rights",
              zh: "HP 50% 以下 → 首位攻击者拥有独占权",
              vi: "HP dưới 50% → Người tấn công đầu tiên có độc quyền"
            }
          ]
        },
        {
          heading: {
            ja: "禁止行為",
            en: "Prohibited Actions",
            zh: "禁止行为",
            vi: "Hành vi bị cấm"
          },
          rules: [
            {
              ja: "横取り（キルスティール）",
              en: "Kill stealing",
              zh: "抢怪（KS）",
              vi: "Cướp mạng (kill steal)"
            },
            {
              ja: "妨害、強引な割り込み",
              en: "Interference or forced entry into another player's fight",
              zh: "干扰他人战斗或强行插入",
              vi: "Can thiệp hoặc chen vào trận chiến của người khác"
            }
          ]
        },
        {
          heading: {
            ja: "対象",
            en: "Applies To",
            zh: "适用范围",
            vi: "Áp dụng cho"
          },
          rules: [
            {
              ja: "全ボス（フォークヴァング／ヴァルキリーの殿堂／フィールドを含むすべて）",
              en: "All bosses (Fólkvangr, Hall of the Valkyries, and all field bosses)",
              zh: "所有 Boss（包括弗尔克范格、瓦尔基里殿堂以及野外 Boss）",
              vi: "Toàn bộ Boss (Fólkvangr, Sảnh đường Valkyrie, và toàn bộ Boss ngoài trời)"
            }
          ]
        }
      ]
    },
    {
      id: "prohibited",
      number: "VIII",
      icon: "⛔",
      title: {
        ja: "その他禁止事項",
        en: "Other Prohibited Acts",
        zh: "其他禁止事项",
        vi: "Các hành vi bị cấm khác"
      },
      lead: {
        ja: "サーバーの土台を壊す行為は、誰のためにもなりません。ここは線引きをはっきり。",
        en: "Some lines exist to protect everyone — these are non-negotiable.",
        zh: "破坏服务器根基的行为对任何人都没有好处。此处的界线不容含糊。",
        vi: "Một số ranh giới tồn tại để bảo vệ tất cả mọi người — không thể thương lượng."
      },
      rules: [
        {
          ja: "RMT（リアルマネートレード）を行う、または試みる行為は禁止です。",
          en: "Real-money trading (RMT), and any attempt to engage in it, is prohibited.",
          zh: "禁止进行或尝试真实货币交易（RMT）。",
          vi: "Nghiêm cấm giao dịch tiền thật (RMT) cũng như mọi nỗ lực thực hiện."
        },
        {
          ja: "チートツール等を用いた不正行為は、いかなる形でも禁止です。",
          en: "Cheat tools and any form of unauthorized exploitation are strictly forbidden.",
          zh: "严禁使用外挂工具等任何形式的作弊行为。",
          vi: "Nghiêm cấm mọi hình thức gian lận bằng công cụ cheat hay thao tác trái phép."
        }
      ]
    }
  ],

  /* --------- フッター / Footer --------- */
  footer: {
    closing: {
      ja: "ルールは、誰かを縛るためではなく、もっと自由に遊ぶためにあります。困ったときは、まず近くの誰かに声をかけてみてください。ISEKAIは、そういうサーバーでありたいと思っています。",
      en: "These rules don't exist to restrict you — they exist so we can all play more freely. When something's wrong, just reach out to someone nearby. That's the kind of server ISEKAI wants to be.",
      zh: "规则的存在，不是为了束缚谁，而是为了让大家玩得更自由。遇到困难时，先向身边的人打声招呼吧。ISEKAI 想成为那样的服务器。",
      vi: "Các quy tắc này không tồn tại để trói buộc bạn — chúng tồn tại để tất cả chúng ta có thể chơi tự do hơn. Khi có điều gì không ổn, hãy cất lời với một ai đó ở gần. Đó là kiểu máy chủ mà ISEKAI mong muốn trở thành."
    },
    signature: {
      ja: "— ISEKAI 運営チーム",
      en: "— The ISEKAI Team",
      zh: "— ISEKAI 运营团队",
      vi: "— Đội ngũ ISEKAI"
    },
    /* 言語トグルのボタン表示：現在の言語を表示中のとき、ボタンには「次に切り替わる言語」を表示する。
       循環順: ja → en → zh → vi → ja */
    languageToggle: {
      ja: "English",
      en: "中文",
      zh: "Tiếng Việt",
      vi: "日本語"
    },
    versionLabel: {
      ja: "バージョン",
      en: "Version",
      zh: "版本",
      vi: "Phiên bản"
    },
    updatedLabel: {
      ja: "最終更新",
      en: "Last Updated",
      zh: "最后更新",
      vi: "Cập nhật lần cuối"
    }
  }
};
