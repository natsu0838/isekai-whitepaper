/* =====================================================================
   ISEKAI Server Whitepaper — Content Source
   ---------------------------------------------------------------------
   このファイルがすべての文言の「唯一の情報源」です。
   ルール文言を修正したい場合は、このファイル内の文字列を編集するだけで
   日本語・英語・中国語（簡体）・ベトナム語・フィリピン語のすべてに反映されます。

   This file is the single source of truth for all rule text.
   To update any rule, edit the strings in this file —
   changes will reflect in Japanese, English, Simplified Chinese,
   Vietnamese, and Filipino views.
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
      vi: "22 tháng 4, 2026",
      tl: "Abril 22, 2026"
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
      vi: "Hiến chương máy chủ",
      tl: "Charter ng Server"
    },
    title: {
      ja: "ISEKAI サーバールール",
      en: "ISEKAI Server Rules",
      zh: "ISEKAI 服务器规则",
      vi: "Quy tắc máy chủ ISEKAI",
      tl: "Mga Tuntunin ng Server ISEKAI"
    },
    subtitle: {
      ja: "北欧神話の地で、共に紡ぐ物語のために",
      en: "Forging legends together in the realm of Norse myth",
      zh: "在北欧神话的大地上，共同编织我们的传说",
      vi: "Cùng dệt nên huyền thoại trên vùng đất thần thoại Bắc Âu",
      tl: "Sama-samang humahabi ng alamat sa lupain ng mitolohiyang Norse"
    },
    intro: {
      ja: "ようこそ、ISEKAIサーバーへ。ここはLegend of YMIRの世界で、海を越え、言葉を越えて集った冒険者たちの拠点です。私たちが大切にしているのは、勝敗以上に「一緒に遊ぶ仲間への敬意」と「気軽に笑い合える空気感」。このホワイトペーパーは、そんな雰囲気をこれからも守っていくための、みんなのための約束ごとです。堅苦しく考える必要はありません。困ったときに立ち返れる、ちょっとした道しるべだと思ってください。",
      en: "Welcome to ISEKAI. This is where adventurers from across oceans and languages have gathered in the world of Legend of YMIR. What we value most isn't winning — it's mutual respect and the easy laughter shared between travel companions. This whitepaper exists to preserve that atmosphere for everyone who calls this server home. Don't think of these as rigid laws — think of them as a friendly compass to return to whenever you need one.",
      zh: "欢迎来到 ISEKAI 服务器。这里是 Legend of YMIR 的世界，是跨越海洋与语言相聚一堂的冒险者们的据点。比起胜负，我们更珍视「对同伴的尊重」与「能轻松欢笑的氛围」。这份白皮书，是为了让这样的氛围延续下去、属于大家的共同约定。不必把它想得太严肃——请把它当作困惑时可以回头参考的一份小小指引。",
      vi: "Chào mừng đến với máy chủ ISEKAI. Đây là thế giới Legend of YMIR, nơi những nhà phiêu lưu vượt qua biển cả và ngôn ngữ tụ hội về. Điều chúng tôi trân trọng hơn cả thắng thua là «sự tôn trọng dành cho bạn đồng hành» và «bầu không khí dễ dàng cười đùa cùng nhau». Bản bạch thư này là lời hẹn ước chung để gìn giữ bầu không khí ấy cho tất cả mọi người. Đừng nghĩ nó quá nghiêm khắc — hãy xem nó như một tấm biển chỉ đường nhỏ, để quay về mỗi khi bối rối.",
      tl: "Mabuhay sa ISEKAI. Dito nagsasama-sama ang mga manlalakbay mula sa iba't ibang dagat at wika sa mundo ng Legend of YMIR. Ang pinahahalagahan namin higit sa panalo o talo ay «paggalang sa bawat kasama sa paglalaro» at «magaang na atmospera kung saan madali ang tawanan». Ang whitepaper na ito ay umiiral upang mapanatili ang ganoong atmospera para sa lahat ng nagtuturing sa server na ito bilang tahanan. Huwag itong ituring na mahigpit na batas — isang magiliw na gabay lang ito, mababalikan tuwing kailangan."
    }
  },

  /* --------- ナビゲーション / Navigation --------- */
  nav: {
    ja: [
      { id: "server-war",       label: "サーバー戦" },
      { id: "external-stance",  label: "対外スタンス" },
      { id: "chat-manner",      label: "チャットマナー" },
      { id: "trouble",        label: "トラブル対応" },
      { id: "hunting",        label: "狩場ルール" },
      { id: "auto-quest",     label: "自動任務" },
      { id: "boss",           label: "ボス・チャンピオン" },
      { id: "prohibited",     label: "禁止事項" }
    ],
    en: [
      { id: "server-war",       label: "Server Battles" },
      { id: "external-stance",  label: "External Stance" },
      { id: "chat-manner",      label: "Chat Etiquette" },
      { id: "trouble",        label: "Conflict Resolution" },
      { id: "hunting",        label: "Hunting Grounds" },
      { id: "auto-quest",     label: "Auto-Quest" },
      { id: "boss",           label: "Boss & Champion" },
      { id: "prohibited",     label: "Prohibited Acts" }
    ],
    zh: [
      { id: "server-war",       label: "服务器战役" },
      { id: "external-stance",  label: "对外姿态" },
      { id: "chat-manner",      label: "聊天礼仪" },
      { id: "trouble",        label: "纠纷处理" },
      { id: "hunting",        label: "狩猎场规则" },
      { id: "auto-quest",     label: "自动任务" },
      { id: "boss",           label: "Boss 与冠军" },
      { id: "prohibited",     label: "禁止事项" }
    ],
    vi: [
      { id: "server-war",       label: "Trận chiến máy chủ" },
      { id: "external-stance",  label: "Lập trường đối ngoại" },
      { id: "chat-manner",      label: "Phép tắc trò chuyện" },
      { id: "trouble",        label: "Giải quyết xung đột" },
      { id: "hunting",        label: "Quy tắc khu săn" },
      { id: "auto-quest",     label: "Nhiệm vụ tự động" },
      { id: "boss",           label: "Boss & Champion" },
      { id: "prohibited",     label: "Hành vi bị cấm" }
    ],
    tl: [
      { id: "server-war",       label: "Laban ng Server" },
      { id: "external-stance",  label: "Panlabas na Paninindigan" },
      { id: "chat-manner",      label: "Etiketa sa Chat" },
      { id: "trouble",        label: "Pagresolba ng Alitan" },
      { id: "hunting",        label: "Pook-pangangaso" },
      { id: "auto-quest",     label: "Auto-Quest" },
      { id: "boss",           label: "Boss at Kampeon" },
      { id: "prohibited",     label: "Mga Ipinagbabawal" }
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
        vi: "Quy tắc trận chiến máy chủ",
        tl: "Mga Tuntunin ng Laban ng Server"
      },
      lead: {
        ja: "塔と王冠を巡る攻防は、サーバーの華。だからこそ、外の敵にだけ刃を向けましょう。王冠を獲ったら、みんなで担いで守り抜くのがISEKAI流です。",
        en: "The battles for the towers and the Crown are the soul of our server — let's keep our blades aimed outward. Once the Crown is won, the ISEKAI way is to lift it together and defend it together.",
        zh: "围绕塔楼与王冠的攻防是服务器的精华。正因如此，让我们只将刀锋指向外部的敌人。一旦夺得王冠，便一同举起、一同守护——这就是 ISEKAI 的风格。",
        vi: "Những trận chiến quanh các tòa tháp và Vương miện là linh hồn của máy chủ — hãy chỉ hướng lưỡi kiếm ra bên ngoài. Khi giành được Vương miện, phong cách ISEKAI là tất cả cùng nâng lên và cùng bảo vệ.",
        tl: "Ang mga laban para sa mga tore at sa Korona ang kaluluwa ng aming server — itutok natin ang ating mga sandata sa labas. Kapag nakamit ang Korona, ang istilo ng ISEKAI ay sama-samang itaas at sama-samang ipagtanggol ito."
      },
      rules: [
        {
          ja: "塔は自由に争奪してOKです。",
          en: "The towers may be freely contested at any time.",
          zh: "塔楼可以自由争夺。",
          vi: "Các tòa tháp có thể được tranh đoạt tự do bất cứ lúc nào.",
          tl: "Malaya ninyong maaaring labanan ang mga tore anumang oras."
        },
        {
          ja: "タワー1〜3の争奪戦中は、サーバー内プレイヤー同士の攻撃を禁止します。",
          en: "During Tower 1–3 battles, attacks between players of the same server are prohibited.",
          zh: "在塔 1 至塔 3 的争夺战期间，禁止同服务器玩家之间互相攻击。",
          vi: "Trong các trận tranh Tháp 1–3, cấm tấn công giữa các người chơi cùng máy chủ.",
          tl: "Sa labanan ng Tower 1–3, bawal ang pag-atake sa pagitan ng mga manlalaro ng parehong server."
        },
        {
          ja: "王冠（クラウン）争奪戦中も同様に、サーバー内攻撃は禁止です。",
          en: "The same applies during the Crown contest — no intra-server attacks.",
          zh: "王冠（Crown）争夺战期间同样禁止同服务器内互相攻击。",
          vi: "Quy định tương tự áp dụng cho trận tranh Vương miện — cấm tấn công nội bộ máy chủ.",
          tl: "Pareho ring bawal ang intra-server na pag-atake sa oras ng labanan para sa Korona."
        },
        {
          ja: "王冠を獲得したクランを、サーバー全体で防衛する方針に切り替えます。",
          en: "Once a clan claims the Crown, the entire server shifts into a unified defensive posture to protect them.",
          zh: "一旦有公会夺得王冠，整个服务器将转为统一防御，共同守护该公会。",
          vi: "Khi một liên minh giành được Vương miện, toàn bộ máy chủ chuyển sang tư thế phòng thủ thống nhất để bảo vệ họ.",
          tl: "Kapag nakamit ng isang clan ang Korona, lilipat ang buong server sa nagkakaisang depensa upang protektahan sila."
        },
        {
          ja: "敵サーバーからの攻撃に対しては、連携して防衛を行ってください。",
          en: "When enemy servers strike, coordinate with your fellow players to mount the defense together.",
          zh: "面对敌对服务器的进攻，请与同伴协作，共同防御。",
          vi: "Khi máy chủ địch tấn công, hãy phối hợp với đồng đội để cùng nhau phòng thủ.",
          tl: "Kapag umatake ang kalabang server, mag-ugnay kayo sa mga kapwa manlalaro upang sama-samang magtanggol."
        }
      ]
    },
    {
      id: "external-stance",
      number: "II",
      icon: "☯",
      title: {
        ja: "対外スタンス（他サーバーとの関係）",
        en: "External Stance (Relations with Other Servers)",
        zh: "对外姿态（与其他服务器的关系）",
        vi: "Lập trường đối ngoại (Quan hệ với các máy chủ khác)",
        tl: "Panlabas na Paninindigan (Relasyon sa Ibang Server)"
      },
      lead: {
        ja: "外の世界との向き合い方。普段は品格を、サーバー戦では本気を。",
        en: "How we face the world beyond. Grace in daily life, full force in Server Battles.",
        zh: "面对外部世界的方式——平日保持风度，服务器战全力以赴。",
        vi: "Cách chúng ta đối diện với thế giới bên ngoài — thường ngày giữ phong độ, trong trận chiến máy chủ dốc toàn lực.",
        tl: "Kung paano natin hinaharap ang mundo sa labas. May dignidad sa araw-araw, buong lakas sa Laban ng Server."
      },
      subsections: [
        {
          heading: {
            ja: "平時（フィールドボス等）",
            en: "Peacetime (Field Bosses, etc.)",
            zh: "平日（野外 Boss 等）",
            vi: "Thường ngày (Boss ngoài trời, v.v.)",
            tl: "Pana-panahon (Mga Field Boss, atbp.)"
          },
          rules: [
            {
              ja: "親しみのある敵サーバーに対しては、フィールドボスではピースフルに協力し合う姿勢を大切にします。",
              en: "With friendly rival servers, we value a peaceful, cooperative posture at field bosses.",
              zh: "面对相熟的对手服务器，在野外 Boss 时，我们重视和平、互相协助的姿态。",
              vi: "Với các máy chủ đối thủ thân thiện, tại các boss ngoài trời, chúng tôi đề cao tinh thần hòa bình và hợp tác.",
              tl: "Sa mga palakaibigang kalabang server, pinahahalagahan namin ang mapayapa at nagkakaisang pag-uugali sa mga field boss."
            },
            {
              ja: "無駄な争いは避け、ISEKAIサーバーとしての余裕と品格を持って行動してください。",
              en: "Avoid pointless conflict. Carry yourself with the composure and dignity of an ISEKAI player.",
              zh: "避免无谓的争斗，请以 ISEKAI 服务器应有的从容与风度行事。",
              vi: "Tránh những xung đột vô nghĩa. Hãy hành xử với sự điềm tĩnh và phẩm cách của một người chơi ISEKAI.",
              tl: "Iwasan ang walang-kwentang alitan. Kumilos nang may kaagapan at dignidad na nararapat sa isang manlalaro ng ISEKAI."
            }
          ]
        },
        {
          heading: {
            ja: "サーバー戦時",
            en: "During Server Battles",
            zh: "服务器战期间",
            vi: "Trong trận chiến máy chủ",
            tl: "Sa Oras ng Laban ng Server"
          },
          rules: [
            {
              ja: "サーバー戦においては一切の遠慮は不要です。",
              en: "In Server Battles, no restraint is needed whatsoever.",
              zh: "在服务器战中，无需任何客气。",
              vi: "Trong trận chiến máy chủ, không cần bất kỳ sự khách sáo nào.",
              tl: "Sa Laban ng Server, hindi na kailangan ng anumang pagpipigil."
            },
            {
              ja: "正々堂々と戦い、全力で勝利を目指しましょう。",
              en: "Fight fair and with all your might — aim for victory with everything you have.",
              zh: "堂堂正正地战斗，倾尽全力争取胜利。",
              vi: "Chiến đấu đường hoàng và dốc hết sức — hướng đến chiến thắng bằng toàn bộ khả năng.",
              tl: "Lumaban nang matapat at buong lakas — layunin ang tagumpay gamit ang lahat ng makakaya natin."
            }
          ]
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
        vi: "Phép tắc trò chuyện",
        tl: "Etiketa sa Chat"
      },
      lead: {
        ja: "言葉ひとつで空気は変わります。気持ちよく話せる場所を、みんなで保ちましょう。",
        en: "A single word can shift the mood of an entire server. Let's keep this a place where everyone can speak comfortably.",
        zh: "一句话就能改变整个氛围。让我们共同守护一个人人都能愉快交流的地方。",
        vi: "Một lời nói có thể thay đổi cả bầu không khí. Hãy cùng giữ nơi này là chỗ ai cũng có thể trò chuyện thoải mái.",
        tl: "Isang salita lang ay maaaring magbago ng buong mood ng server. Panatilihin natin itong lugar kung saan komportable ang lahat sa pag-uusap."
      },
      rules: [
        {
          ja: "常に敬意を持った発言を心がけてください。",
          en: "Speak with respect at all times.",
          zh: "请始终以尊重的态度发言。",
          vi: "Luôn phát ngôn với sự tôn trọng.",
          tl: "Laging magsalita nang may paggalang."
        },
        {
          ja: "差別発言などの暴言は禁止です。",
          en: "Discriminatory language and verbal abuse are strictly prohibited.",
          zh: "禁止任何歧视言论或恶言辱骂。",
          vi: "Nghiêm cấm ngôn từ phân biệt đối xử và lăng mạ.",
          tl: "Mahigpit na ipinagbabawal ang diskriminasyong pananalita at pang-aabusong berbal."
        },
        {
          ja: "幼稚な連呼やスパム行為はやめましょう。",
          en: "Childish spam and repetitive flooding are not welcome here.",
          zh: "请停止幼稚的反复刷屏与垃圾信息行为。",
          vi: "Không spam trẻ con hay lặp lại tin nhắn gây nhiễu.",
          tl: "Walang lugar dito ang pambatang pag-uulit at spam."
        },
        {
          ja: "他サーバーのプレイヤーと交流する際も、同じ姿勢でお願いします。",
          en: "These same standards apply whenever you interact with players from other servers.",
          zh: "与其他服务器的玩家交流时，同样请遵守上述态度。",
          vi: "Các chuẩn mực trên cũng áp dụng khi bạn giao tiếp với người chơi từ máy chủ khác.",
          tl: "Pareho ring pamantayan ang sinusunod kapag nakikipag-ugnayan sa mga manlalaro mula sa ibang server."
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
        vi: "Giải quyết xung đột",
        tl: "Pagresolba ng Alitan"
      },
      lead: {
        ja: "誰にでも、うまくいかない日はあります。話せばだいたい、なんとかなります。",
        en: "Bad days happen to everyone. Most things work out once we actually talk them through.",
        zh: "谁都会有不顺利的日子。只要肯好好谈，大多数事情都能解决。",
        vi: "Ai cũng có những ngày không thuận lợi. Hầu hết mọi chuyện đều ổn thỏa khi ta thực sự trò chuyện.",
        tl: "May masasamang araw sa lahat. Karamihan ng bagay ay nalulutas kapag talagang napag-usapan."
      },
      rules: [
        {
          ja: "問題やもめ事は、まず話し合いで解決を目指しましょう。",
          en: "When issues arise, aim to resolve them through honest conversation first.",
          zh: "遇到问题或纷争时，首先请通过坦诚沟通来寻求解决。",
          vi: "Khi có vấn đề, trước hết hãy tìm cách giải quyết qua đối thoại chân thành.",
          tl: "Kapag may problema, layunin munang lutasin ito sa pamamagitan ng tapat na pag-uusap."
        },
        {
          ja: "感情的にならず、冷静に対応してください。",
          en: "Stay calm. Handle disagreements with a level head, not heated words.",
          zh: "请保持冷静，不要情绪化，理性地处理分歧。",
          vi: "Hãy giữ bình tĩnh. Xử lý bất đồng bằng đầu lạnh, không phải lời nóng nảy.",
          tl: "Manatiling kalmado. Harapin ang di-pagkakaunawaan nang may malinaw na pag-iisip, hindi ng mainit na salita."
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
        vi: "Quy tắc khu săn (Điểm trên bản đồ)",
        tl: "Mga Tuntunin sa Pook-pangangaso (Mga Spot sa Mapa)"
      },
      lead: {
        ja: "先に来た人の場所は、その人のリズムを尊重して。譲り合いがいちばん早い近道です。",
        en: "Honor the rhythm of whoever arrived first. A little courtesy is the fastest path forward.",
        zh: "请尊重先到者的节奏。互相礼让，才是最快的捷径。",
        vi: "Tôn trọng nhịp độ của người đến trước. Một chút nhường nhịn là con đường nhanh nhất.",
        tl: "Igalang ang ritmo ng unang dumating. Ang kaunting paggalang ang pinakamabilis na landas pasulong."
      },
      rules: [
        {
          ja: "先人がいる場合は、無断での割り込みや占有はしないでください。",
          en: "If another player is already at a spot, do not cut in or take it over without asking.",
          zh: "如果已有玩家在该地点，请勿未经允许插入或占据。",
          vi: "Nếu đã có người chơi khác ở điểm săn, đừng chen vào hay chiếm chỗ mà chưa hỏi.",
          tl: "Kung may ibang manlalaro na nasa isang spot, huwag sumingit o kumuha ng posisyon nang hindi nagtatanong."
        },
        {
          ja: "※例外：クエスト進行中の通過・処理は対象外です。",
          en: "Exception: passing through or completing active quest objectives is fine.",
          zh: "※例外：任务进行中的通过或处理不在此限。",
          vi: "※Ngoại lệ: việc đi qua hay xử lý mục tiêu nhiệm vụ đang tiến hành là được phép.",
          tl: "※Eksepsyon: ayos lang ang pagdaan o pagtapos ng aktibong layunin ng quest.",
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
        vi: "Quy tắc nhiệm vụ tự động",
        tl: "Mga Tuntunin sa Auto-Quest"
      },
      lead: {
        ja: "オートで遊ぶ時間も大切。でも、誰かの成長の邪魔にならないように。",
        en: "Auto-quest time matters too — just not at the cost of someone else's progress.",
        zh: "自动挂机的时间也很重要，但请不要妨碍他人的成长。",
        vi: "Thời gian cày tự động cũng quan trọng — nhưng đừng cản trở sự phát triển của người khác.",
        tl: "Mahalaga rin ang oras ng auto-quest — pero hindi sa gastos ng paglago ng iba."
      },
      rules: [
        {
          ja: "自動任務ルートでの正義モードの使用は禁止です。",
          en: "Justice Mode is not permitted while running auto-quest routes.",
          zh: "在自动任务路线中禁止使用正义模式。",
          vi: "Cấm sử dụng Chế độ Chính nghĩa khi chạy tuyến nhiệm vụ tự động.",
          tl: "Hindi pinahihintulutan ang Justice Mode habang tumatakbo ang mga ruta ng auto-quest."
        },
        {
          ja: "味方プレイヤーの成長や、狩場環境を妨げる行為とみなされます。",
          en: "Such use is treated as obstruction of fellow players' growth and disruption of the hunting environment.",
          zh: "此行为将被视为妨碍同服玩家的成长并破坏狩猎环境。",
          vi: "Hành vi này được xem là cản trở sự phát triển của đồng đội và phá hoại môi trường săn bắn.",
          tl: "Ituturing na hadlang sa paglago ng kapwa manlalaro at pagsira sa kapaligiran ng pangangaso ang ganitong paggamit."
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
        vi: "Quy tắc Boss & Champion (Ưu tiên cao nhất)",
        tl: "Mga Tuntunin sa Boss at Kampeon (Pinakamataas na Prayoridad)"
      },
      important: true,
      lead: {
        ja: "ここがいちばん揉めやすい場所。だからこそ、ラインをはっきりさせておきます。",
        en: "This is where things get heated most often — so the line is drawn clearly here.",
        zh: "这里最容易发生纠纷，因此我们在此明确划定界线。",
        vi: "Đây là nơi dễ xảy ra xung đột nhất — vì vậy ranh giới được vạch rõ tại đây.",
        tl: "Dito madalas uminit ang sitwasyon — kaya maliwanag naming iginuguhit ang linya."
      },
      subsections: [
        {
          heading: {
            ja: "HPによる判定",
            en: "HP-Based Judgment",
            zh: "按 HP 判定",
            vi: "Phán định theo HP",
            tl: "Paghatol Batay sa HP"
          },
          rules: [
            {
              ja: "HP50%以上 → 誰でも攻撃OK（自由参加）",
              en: "HP above 50% → Anyone may attack (free-for-all)",
              zh: "HP 50% 以上 → 任何人都可攻击（自由参与）",
              vi: "HP trên 50% → Bất cứ ai cũng có thể tấn công (tự do tham gia)",
              tl: "HP lampas 50% → Sinuman ay maaaring umatake (libreng-pakikibahagi)"
            },
            {
              ja: "HP50%未満 → 最初に攻撃した人が独占権を持ちます",
              en: "HP below 50% → The first attacker holds exclusive rights",
              zh: "HP 50% 以下 → 首位攻击者拥有独占权",
              vi: "HP dưới 50% → Người tấn công đầu tiên có độc quyền",
              tl: "HP mas mababa sa 50% → Ang unang umatake ang may eksklusibong karapatan"
            }
          ]
        },
        {
          heading: {
            ja: "禁止行為",
            en: "Prohibited Actions",
            zh: "禁止行为",
            vi: "Hành vi bị cấm",
            tl: "Mga Ipinagbabawal na Gawain"
          },
          rules: [
            {
              ja: "横取り（キルスティール）",
              en: "Kill stealing",
              zh: "抢怪（KS）",
              vi: "Cướp mạng (kill steal)",
              tl: "Pagnanakaw ng kill (kill stealing)"
            },
            {
              ja: "妨害、強引な割り込み",
              en: "Interference or forced entry into another player's fight",
              zh: "干扰他人战斗或强行插入",
              vi: "Can thiệp hoặc chen vào trận chiến của người khác",
              tl: "Panggugulo o sapilitang paghihimagsik sa labanan ng iba"
            }
          ]
        },
        {
          heading: {
            ja: "対象",
            en: "Applies To",
            zh: "适用范围",
            vi: "Áp dụng cho",
            tl: "Saklaw"
          },
          rules: [
            {
              ja: "全ボス(フォークヴァング／ヴァルキリーの殿堂／フィールドを含むすべて)",
              en: "All bosses (Fólkvangr, Hall of the Valkyries, and all field bosses)",
              zh: "所有 Boss（包括弗尔克范格、瓦尔基里殿堂以及野外 Boss）",
              vi: "Toàn bộ Boss (Fólkvangr, Sảnh đường Valkyrie, và toàn bộ Boss ngoài trời)",
              tl: "Lahat ng boss (Fólkvangr, Hall of the Valkyries, at lahat ng field boss)"
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
        ja: "禁止事項と運営の対応",
        en: "Prohibited Acts & Enforcement",
        zh: "禁止事项与运营处理",
        vi: "Hành vi bị cấm & xử lý vận hành",
        tl: "Mga Ipinagbabawal at Aksyon ng Admin"
      },
      lead: {
        ja: "サーバーの土台を壊す行為は、誰のためにもなりません。ここは線引きをはっきりさせつつ、違反を見かけたときの流れも、わかりやすくまとめておきます。",
        en: "Some lines exist to protect everyone — these are non-negotiable. Below is how reports are handled, step by step.",
        zh: "破坏服务器根基的行为对任何人都没有好处。此处的界线不容含糊，并清晰说明发现违规时的处理流程。",
        vi: "Một số ranh giới tồn tại để bảo vệ tất cả mọi người — không thể thương lượng. Dưới đây là quy trình xử lý khi phát hiện vi phạm.",
        tl: "May mga linyang umiiral upang protektahan ang lahat — hindi ito napag-uusapan. Nasa ibaba kung paano pinangangasiwaan ang mga ulat, hakbang-hakbang."
      },
      subsections: [
        {
          heading: {
            ja: "RMT・チートツール",
            en: "RMT & Cheat Tools",
            zh: "RMT 与作弊工具",
            vi: "RMT & công cụ cheat",
            tl: "RMT at Cheat Tools"
          },
          rules: [
            {
              ja: "RMT（リアルマネートレード）を行う、または試みる行為は禁止です。",
              en: "Real-money trading (RMT), and any attempt to engage in it, is prohibited.",
              zh: "禁止进行或尝试真实货币交易（RMT）。",
              vi: "Nghiêm cấm giao dịch tiền thật (RMT) cũng như mọi nỗ lực thực hiện.",
              tl: "Ipinagbabawal ang Real-money trading (RMT), at ang anumang pagtatangkang sumali dito."
            },
            {
              ja: "チートツール等を用いた不正行為は、いかなる形でも禁止です。",
              en: "Cheat tools and any form of unauthorized exploitation are strictly forbidden.",
              zh: "严禁使用外挂工具等任何形式的作弊行为。",
              vi: "Nghiêm cấm mọi hình thức gian lận bằng công cụ cheat hay thao tác trái phép.",
              tl: "Mahigpit na ipinagbabawal ang cheat tools at anumang uri ng di-awtorisadong pagsasamantala."
            }
          ],
          flow: [
            {
              icon: "👁",
              label: {
                ja: "プレイヤーが発見",
                en: "A player spots a violation",
                zh: "玩家发现违规",
                vi: "Người chơi phát hiện vi phạm",
                tl: "May manlalaro na nakakita ng paglabag"
              }
            },
            {
              icon: "📹",
              label: {
                ja: "動画を添えて Discord チケットで通報",
                en: "Report via Discord ticket with video evidence",
                zh: "附上录像，通过 Discord 工单举报",
                vi: "Gửi phiếu báo cáo trên Discord kèm video",
                tl: "Mag-ulat sa pamamagitan ng Discord ticket kasama ang video bilang ebidensya"
              }
            },
            {
              icon: "⚖",
              label: {
                ja: "運営が確認・判断",
                en: "Admins review and decide",
                zh: "运营确认并做出判断",
                vi: "Đội vận hành xác minh và quyết định",
                tl: "Susuriin at magpapasya ang mga admin"
              }
            },
            {
              icon: "⛔",
              terminal: true,
              label: {
                ja: "確定後：警告なしで即BAN",
                en: "Once confirmed: Immediate ban (no warning)",
                zh: "确认后：不经警告直接封禁（BAN）",
                vi: "Sau khi xác nhận: cấm tài khoản ngay (không cảnh báo)",
                tl: "Kapag kumpirmado: Agarang ban (walang warning)"
              }
            },
            {
              icon: "📮",
              appeal: true,
              label: {
                ja: "不服・認識の誤りがあれば、プレイヤー自身が Discord チケットで連絡 → 解除も検討",
                en: "Disputes or mistaken identity? The player themselves opens a Discord ticket — unban is considered case by case.",
                zh: "若有异议或认知错误，请玩家本人通过 Discord 工单联系 — 将酌情考虑解封。",
                vi: "Nếu có khiếu nại hoặc nhầm lẫn, người chơi tự mở phiếu Discord — việc gỡ cấm sẽ được xem xét tùy trường hợp.",
                tl: "May pagtutol o maling pagkakakilanlan? Ang manlalaro mismo ang magbubukas ng Discord ticket — sasaalang-alanginin ang pag-unban sa bawat kaso."
              },
              subtext: {
                ja: "ISEKAI Discord に参加する",
                en: "Join the ISEKAI Discord",
                zh: "加入 ISEKAI Discord",
                vi: "Tham gia ISEKAI Discord",
                tl: "Sumali sa ISEKAI Discord",
                href: "https://discord.gg/F4UkC5FUVk"
              }
            }
          ]
        },
        {
          heading: {
            ja: "チャット上の暴言・差別",
            en: "Chat Abuse & Discrimination",
            zh: "聊天中的辱骂与歧视",
            vi: "Lăng mạ & phân biệt đối xử trên chat",
            tl: "Pang-aabuso at Diskriminasyon sa Chat"
          },
          rules: [
            {
              ja: "チャットでの煽り、罵声、差別発言は容認しません。",
              en: "Taunting, verbal abuse, and discriminatory language in chat will not be tolerated.",
              zh: "绝不容忍聊天中的挑衅、辱骂与歧视言论。",
              vi: "Không dung thứ hành vi khiêu khích, lăng mạ và ngôn từ phân biệt đối xử trong chat.",
              tl: "Hindi tatanggapin ang pang-uuyam, pang-aabusong berbal, at diskriminasyong salita sa chat."
            }
          ],
          flow: [
            {
              icon: "👁",
              label: {
                ja: "チャットで見かける",
                en: "Witnessed in chat",
                zh: "在聊天中发现",
                vi: "Chứng kiến trong chat",
                tl: "Nasaksihan sa chat"
              }
            },
            {
              icon: "🎫",
              label: {
                ja: "Discord チケットで通報",
                en: "Report via Discord ticket",
                zh: "通过 Discord 工单举报",
                vi: "Gửi phiếu báo cáo trên Discord",
                tl: "Mag-ulat sa pamamagitan ng Discord ticket"
              }
            },
            {
              icon: "⚖",
              label: {
                ja: "運営が確認・判断",
                en: "Admins review and decide",
                zh: "运营确认并做出判断",
                vi: "Đội vận hành xác minh và quyết định",
                tl: "Susuriin at magpapasya ang mga admin"
              }
            },
            {
              icon: "💬",
              label: {
                ja: "1回目：警告＋話し合いの場を設ける",
                en: "1st offense: Warning, plus a mediated discussion",
                zh: "第一次：警告，并安排双方对话",
                vi: "Lần 1: Cảnh cáo và tổ chức cuộc nói chuyện hòa giải",
                tl: "Unang paglabag: Warning, at isang pinamamagitnang talakayan"
              }
            },
            {
              icon: "⛔",
              terminal: true,
              label: {
                ja: "収拾がつかない場合：チャットBANを検討",
                en: "If unresolved: Chat ban under consideration",
                zh: "若无法收场：考虑聊天封禁",
                vi: "Nếu không giải quyết được: xem xét cấm chat",
                tl: "Kung hindi maresolba: Isasaalang-alang ang chat ban"
              }
            }
          ]
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
      vi: "Các quy tắc này không tồn tại để trói buộc bạn — chúng tồn tại để tất cả chúng ta có thể chơi tự do hơn. Khi có điều gì không ổn, hãy cất lời với một ai đó ở gần. Đó là kiểu máy chủ mà ISEKAI mong muốn trở thành.",
      tl: "Ang mga tuntuning ito ay hindi upang limitahan kayo — umiiral ito upang lahat tayo'y mas malayang makapaglaro. Kapag may mali, makipag-ugnayan lang sa kahit sinong malapit. Ganito ang uri ng server na nais maging ng ISEKAI."
    },
    signature: {
      ja: "— ISEKAI 運営チーム",
      en: "— The ISEKAI Team",
      zh: "— ISEKAI 运营团队",
      vi: "— Đội ngũ ISEKAI",
      tl: "— Ang ISEKAI Team"
    },
    versionLabel: {
      ja: "バージョン",
      en: "Version",
      zh: "版本",
      vi: "Phiên bản",
      tl: "Bersyon"
    },
    updatedLabel: {
      ja: "最終更新",
      en: "Last Updated",
      zh: "最后更新",
      vi: "Cập nhật lần cuối",
      tl: "Huling Update"
    }
  }
};
