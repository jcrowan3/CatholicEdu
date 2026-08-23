// ═══════════════════════════════════════════════════════════════
//  GRADE 7 — SESSION DATA
//  "Discipleship, Justice, and the Call to Holiness"
//  30 Weeks | 5 Pillars | Original content — Catholic Public Domain Version (CPDV)
// ═══════════════════════════════════════════════════════════════

export const PILLAR_COLORS = {
  Creed:      "#4A90D9",
  Sacraments: "#D4A843",
  Morality:   "#6DB87B",
  Prayer:     "#9B6DB8",
  Review:     "#C0392B"
};

export const SESSIONS = [

  // ─────────────────────────────────────────────
  //  UNIT 1: WHO IS GOD? (Creed) — Weeks 1–4
  // ─────────────────────────────────────────────
  {
    week: 1,
    title: "The Trinity: One God, Three Persons",
    pillar: "Creed",
    verse: "Go therefore and teach all nations, baptizing them in the name of the Father, and of the Son, and of the Holy Spirit. — Matthew 28:19",

    discover: {
      title: "Discover: The Holy Trinity",
      instruction: "Tap each card to explore the mystery of the Trinity.",
      items: [
        { icon: "✝️", name: "One God", desc: "The Catholic faith is monotheistic — we believe in one God. Yet this one God exists as three distinct Persons: Father, Son, and Holy Spirit. This is the central mystery of our faith (CCC 234)." },
        { icon: "👑", name: "God the Father", desc: "The First Person of the Trinity is God the Father, the Creator of all things. He is eternal, all-knowing, all-powerful, and perfectly good. He loves us as a father loves his children (CCC 198–231)." },
        { icon: "✨", name: "God the Son", desc: "The Second Person is the Son, Jesus Christ. He is fully divine and fully human. He became man to save us from sin and reveal the Father's love. His life, death, and resurrection are the heart of our faith (CCC 441–445)." },
        { icon: "🕊️", name: "God the Holy Spirit", desc: "The Third Person is the Holy Spirit, the Advocate and Sanctifier. He lives within the Church and within each baptized person, guiding us toward holiness and truth (CCC 683–688)." },
        { icon: "🌊", name: "Not Three Gods", desc: "The three Persons are not three separate gods. They are one divine Being who exists in a perfect communion of love. No human analogy fully captures this mystery — it must be accepted by faith (CCC 253–256)." }
      ]
    },

    secondary: "sort",
    sort: {
      title: "Match Each Person to the Trinity!",
      instruction: "Tap an item, then tap the Person of the Trinity it best describes.",
      items: [
        { name: "Creator of all things", icon: "🌍", group: "Father" },
        { name: "Born of the Virgin Mary", icon: "🌟", group: "Son" },
        { name: "Guides the Church today", icon: "🕊️", group: "Holy Spirit" },
        { name: "Died and rose for our sins", icon: "✝️", group: "Son" },
        { name: "Sanctifies and makes us holy", icon: "🔥", group: "Holy Spirit" },
        { name: "Sends the Son into the world", icon: "👑", group: "Father" },
        { name: "True God and True Man", icon: "✨", group: "Son" }
      ],
      groups: ["Father", "Son", "Holy Spirit"],
      colors: { "Father": "#4A90D9", "Son": "#D4A843", "Holy Spirit": "#C0392B" },
      icons:  { "Father": "👑", "Son": "✝️", "Holy Spirit": "🕊️" }
    },

    quiz: {
      questions: [
        { q: "How many Persons are in the Trinity?", opts: ["One", "Two", "Three", "Seven"], correct: 2 },
        { q: "How many Gods do Catholics believe in?", opts: ["Three", "One", "Two", "None"], correct: 1 },
        { q: "Which Person of the Trinity became man?", opts: ["The Father", "The Holy Spirit", "The Son", "All three"], correct: 2 },
        { q: "The Holy Spirit is also called the ___.", opts: ["Creator", "Redeemer", "Advocate", "Prophet"], correct: 2 },
        { q: "The Trinity is described in the Catechism as the ___ mystery of the faith.", opts: ["Smallest", "Central", "Optional", "Newest"], correct: 1 }
      ]
    ,
    bonus: { q: "The Nicene Creed was formulated at the Councils of ___ and Constantinople.", opts: ["Trent", "Vatican", "Nicaea", "Ephesus"], correct: 2, reward: "Faith Champion!" }
    },

    prayer: {
      title: "Glory Be — Trinitarian Prayer",
      lines: [
        { s: "L", t: "Let us pray to the Triune God who created and loves us." },
        { s: "A", t: "Glory be to the Father, and to the Son, and to the Holy Spirit." },
        { s: "L", t: "As it was in the beginning, is now, and ever shall be." },
        { s: "A", t: "World without end. Amen." },
        { s: "L", t: "Lord, deepen our faith in you — Father, Son, and Holy Spirit." },
        { s: "A", t: "May we always live in the light of your love. Amen." }
      ]
    }
  },

  // ─────────────────────────────────────────────
  {
    week: 2,
    title: "Divine Revelation: How God Speaks to Us",
    pillar: "Creed",
    verse: "In many ways and in various manners, God spoke in times past to the fathers by the prophets. — Hebrews 1:1",

    discover: {
      title: "Discover: How God Reveals Himself",
      instruction: "Tap each card to learn how God communicates with humanity.",
      items: [
        { icon: "📖", name: "Sacred Scripture", desc: "The Bible is the inspired Word of God, written by human authors under the guidance of the Holy Spirit. It is not merely a human book — God is its true author (CCC 105–108)." },
        { icon: "🏛️", name: "Sacred Tradition", desc: "Tradition is the living transmission of the Church's faith through teaching, worship, and life. Scripture and Tradition together make up the one sacred deposit of the Word of God (CCC 80–83)." },
        { icon: "🎓", name: "The Magisterium", desc: "The Magisterium is the Church's teaching authority — the Pope and bishops in communion with him. It authentically interprets both Scripture and Tradition for the faithful (CCC 85–87)." },
        { icon: "🌿", name: "Natural Revelation", desc: "God also reveals Himself through creation. By using reason, we can come to know that God exists through the beauty and order of the natural world (CCC 31–35)." },
        { icon: "🕊️", name: "Fullness in Jesus", desc: "Jesus Christ is the fullness of all revelation. In Him, God has said everything. No new public revelation is expected before the glorious return of Christ (CCC 65–66)." }
      ]
    },

    secondary: "timeline",
    timeline: {
      title: "God's Revelation Through History",
      instruction: "Tap two items to swap them into the correct order.",
      items: [
        { id: 1, text: "God reveals Himself through creation and conscience", order: 1 },
        { id: 2, text: "God speaks to the patriarchs and makes covenants", order: 2 },
        { id: 3, text: "God sends prophets to call people back to Him", order: 3 },
        { id: 4, text: "Jesus Christ — the fullness of Revelation — comes", order: 4 },
        { id: 5, text: "The Holy Spirit guides the Church to transmit the faith", order: 5 }
      ]
    },

    quiz: {
      questions: [
        { q: "Who is the ultimate author of Sacred Scripture?", opts: ["The Pope", "The Apostles", "God", "The Council of Bishops"], correct: 2 },
        { q: "What is the Magisterium?", opts: ["A school of theology", "The Church's teaching authority", "A book of prayers", "A type of monastery"], correct: 1 },
        { q: "Through what can we know God exists by reason alone?", opts: ["The Rosary", "Creation", "The Sacraments", "The Catechism"], correct: 1 },
        { q: "Jesus is the ___ of all divine revelation.", opts: ["Beginning", "Symbol", "Fullness", "Shadow"], correct: 2 },
        { q: "Scripture and Tradition together are called the ___.", opts: ["Deposit of Faith", "Nicene Creed", "Canon Law", "Church Fathers"], correct: 0 }
      ]
    ,
    bonus: { q: "The word 'consubstantial' in the Creed means ___.", opts: ["Similar to", "Of one being/substance with", "Created by", "Separate from"], correct: 1, reward: "Creed Scholar!" }
    },

    prayer: {
      title: "Prayer for Openness to God's Word",
      lines: [
        { s: "L", t: "Lord, open our hearts to receive your Word." },
        { s: "A", t: "Speak, Lord, your servants are listening." },
        { s: "L", t: "You have revealed yourself through creation, the prophets, and your Son." },
        { s: "A", t: "Help us to know you more deeply each day." },
        { s: "L", t: "May your Word be a lamp for our feet and a light for our path." },
        { s: "A", t: "We receive your Word with faith and gratitude. Amen." }
      ]
    }
  },

  // ─────────────────────────────────────────────
  {
    week: 3,
    title: "Jesus Christ: True God and True Man",
    pillar: "Creed",
    verse: "The Word was made flesh and dwelt among us, and we saw his glory. — John 1:14",

    discover: {
      title: "Discover: The Incarnation",
      instruction: "Tap each card to understand who Jesus truly is.",
      items: [
        { icon: "🌟", name: "The Incarnation", desc: "Incarnation means 'becoming flesh.' The eternal Son of God took on a human nature without giving up his divine nature. He is one Person with two natures — fully divine and fully human (CCC 464–469)." },
        { icon: "👶", name: "Born of Mary", desc: "Jesus was conceived by the Holy Spirit and born of the Virgin Mary. Mary is called Theotokos — 'God-bearer' or Mother of God — because the Person she bore is truly divine (CCC 484–511)." },
        { icon: "💧", name: "His Public Ministry", desc: "Jesus proclaimed the Kingdom of God, performed miracles, called disciples, and taught with divine authority. His healings and forgiveness of sins revealed His identity as the Son of God (CCC 535–560)." },
        { icon: "✝️", name: "His Death on the Cross", desc: "Jesus freely offered His life as the perfect sacrifice for the sins of all humanity. His death on the cross is the ultimate act of love — the new and eternal covenant (CCC 606–618)." },
        { icon: "🌅", name: "The Resurrection", desc: "On the third day, Jesus rose bodily from the dead — confirming that He is truly God and that His sacrifice was accepted. The Resurrection is the cornerstone of the Christian faith (CCC 638–658)." }
      ]
    },

    secondary: "fillblank",
    fillblank: {
      title: "Complete the Truth About Jesus!",
      instruction: "Fill in the missing word about the Incarnation.",
      sentences: [
        { text: "Jesus is fully divine and fully ___.", answer: "human", options: ["human", "symbol", "spiritual", "angelic"] },
        { text: "The Incarnation means God became ___.", answer: "flesh", options: ["distant", "invisible", "flesh", "silent"] },
        { text: "Mary is called the Mother of ___.", answer: "God", options: ["the Church", "God", "priests", "angels"] },
        { text: "The Resurrection is the ___ of our faith.", answer: "cornerstone", options: ["cornerstone", "decoration", "addition", "suggestion"] }
      ]
    },

    quiz: {
      questions: [
        { q: "What does 'Incarnation' mean?", opts: ["Baptism with water", "God becoming flesh", "Rising from the dead", "Being filled with grace"], correct: 1 },
        { q: "Jesus has how many natures?", opts: ["One", "Two", "Three", "None"], correct: 1 },
        { q: "Who is the mother of Jesus?", opts: ["Elizabeth", "Mary Magdalene", "Mary", "Martha"], correct: 2 },
        { q: "What do we call Mary in recognition of her role?", opts: ["Patron of Rome", "Theotokos (God-bearer)", "First Apostle", "Angel of God"], correct: 1 },
        { q: "The Resurrection proves that Jesus is truly ___.", opts: ["A prophet", "An angel", "God", "A king only"], correct: 2 }
      ]
    ,
    bonus: { q: "The Creed professes belief in the ___, holy, catholic, and apostolic Church.", opts: ["new", "old", "one", "large"], correct: 2, reward: "Believer Extraordinaire!" }
    },

    prayer: {
      title: "Angelus — Prayer of the Incarnation",
      lines: [
        { s: "L", t: "The Angel of the Lord declared unto Mary." },
        { s: "A", t: "And she conceived of the Holy Spirit." },
        { s: "L", t: "Behold the handmaid of the Lord. Be it done unto me according to your word." },
        { s: "A", t: "And the Word was made flesh, and dwelt among us." },
        { s: "L", t: "Pray for us, O Holy Mother of God." },
        { s: "A", t: "That we may be made worthy of the promises of Christ. Amen." }
      ]
    }
  },

  // ─────────────────────────────────────────────
  {
    week: 4,
    title: "The Church: Communion and Mission",
    pillar: "Creed",
    verse: "You are the light of the world. A city set on a mountain cannot be hidden. — Matthew 5:14",

    discover: {
      title: "Discover: The Church's Nature",
      instruction: "Tap each card to understand what the Church truly is.",
      items: [
        { icon: "🏛️", name: "Body of Christ", desc: "The Church is called the Body of Christ — Christ is the head and all baptized members are the body. Each person has a unique role, and together we carry on Christ's mission in the world (CCC 787–795)." },
        { icon: "👥", name: "People of God", desc: "The Church is the People of God — a community chosen not by merit but by grace. All the faithful share in the priestly, prophetic, and kingly mission of Christ (CCC 781–786)." },
        { icon: "🌍", name: "Universal and Local", desc: "The universal Church is the worldwide community of Catholics united under the Pope. The local church is the diocese. The parish is where most Catholics actually live out their faith (CCC 830–835)." },
        { icon: "🕊️", name: "Temple of the Spirit", desc: "The Church is also called the Temple of the Holy Spirit. The Spirit animates and unifies the Church, distributing spiritual gifts to all the faithful for the building up of the Body (CCC 797–801)." },
        { icon: "🌟", name: "Called to Mission", desc: "The Church exists to evangelize — to share the Good News of Jesus Christ with every person. Every baptized Catholic shares in this mission in their daily life (CCC 849–856)." }
      ]
    },

    secondary: "sort",
    sort: {
      title: "Images of the Church",
      instruction: "Tap each description, then tap which image of the Church it belongs to.",
      items: [
        { name: "Christ is the Head", icon: "✝️", group: "Body of Christ" },
        { name: "Chosen by grace, not merit", icon: "🌿", group: "People of God" },
        { name: "Animated by the Holy Spirit", icon: "🔥", group: "Temple of the Spirit" },
        { name: "Members have different roles", icon: "🤝", group: "Body of Christ" },
        { name: "Called to share the Gospel", icon: "📢", group: "People of God" },
        { name: "Spiritual gifts given to all", icon: "🎁", group: "Temple of the Spirit" },
        { name: "United in mission worldwide", icon: "🌍", group: "People of God" }
      ],
      groups: ["Body of Christ", "People of God", "Temple of the Spirit"],
      colors: { "Body of Christ": "#4A90D9", "People of God": "#6DB87B", "Temple of the Spirit": "#D4A843" },
      icons:  { "Body of Christ": "✝️", "People of God": "👥", "Temple of the Spirit": "🕊️" }
    },

    quiz: {
      questions: [
        { q: "Who is the Head of the Body of Christ?", opts: ["The Pope", "Peter", "Jesus Christ", "Mary"], correct: 2 },
        { q: "The People of God are chosen by ___.", opts: ["Their good works", "Grace", "Their nation", "Their family"], correct: 1 },
        { q: "What does it mean for the Church to 'evangelize'?", opts: ["To build church buildings", "To vote for leaders", "To share the Good News of Jesus", "To pray in private only"], correct: 2 },
        { q: "Who animates and unifies the Church?", opts: ["The Pope alone", "The Bishops", "The Holy Spirit", "The Roman Emperor"], correct: 2 },
        { q: "Every baptized Catholic ___ in the mission of the Church.", opts: ["Is excused from", "Shares", "Observes", "Is not part of"], correct: 1 }
      ]
    ,
    bonus: { q: "Apostolic succession means that ___.", opts: ["We read the Apostles' letters", "Bishops trace their authority back to the Apostles", "We memorize the Apostles' names", "Only apostles can be saints"], correct: 1, reward: "Doctrine Star!" }
    },

    prayer: {
      title: "Prayer for the Church's Mission",
      lines: [
        { s: "L", t: "Lord Jesus, you built your Church to be a light to the world." },
        { s: "A", t: "Help us to shine with your love wherever we go." },
        { s: "L", t: "May our parish be a community of welcome and service." },
        { s: "A", t: "Send us forth to share the Good News with everyone we meet." },
        { s: "L", t: "Fill your Church with the power of the Holy Spirit." },
        { s: "A", t: "May we be your hands and feet in the world today. Amen." }
      ]
    }
  },

  // ─────────────────────────────────────────────
  //  WEEK 5: UNIT 1 REVIEW
  // ─────────────────────────────────────────────
  {
    week: 5,
    title: "Unit 1 Review: God and the Church",
    pillar: "Review",
    ccc: "198-421, 748-975",
    verse: "And this is eternal life: that they may know you, the only true God, and Jesus Christ whom you have sent. — John 17:3",

    discover: {
      title: "Review: God and the Church",
      instruction: "Tap each card to review what we learned in Unit 1.",
      items: [
        { icon: "✝️", name: "The Trinity", desc: "One God in three Persons — Father, Son, and Holy Spirit. The central mystery of our Catholic faith, accepted by faith and celebrated in every blessing and prayer." },
        { icon: "📖", name: "Divine Revelation", desc: "God speaks through Scripture, Tradition, and ultimately through His Son, Jesus Christ. The Magisterium authentically interprets the deposit of faith for the Church." },
        { icon: "🌟", name: "The Incarnation", desc: "Jesus is fully God and fully human — born of Mary, died on the cross, and rose from the dead. He is the fullness of God's revelation and the Savior of all humanity." },
        { icon: "🌍", name: "The Church", desc: "The Body of Christ, People of God, and Temple of the Holy Spirit — called to evangelize and serve. Every Catholic shares in the Church's mission." }
      ]
    },

    secondary: "sort",
    sort: {
      title: "Match the Concept to the Topic!",
      instruction: "Tap each concept, then tap the Unit 1 topic it belongs to.",
      items: [
        { name: "Father, Son, Holy Spirit", icon: "✝️", group: "Trinity" },
        { name: "Scripture and Tradition", icon: "📖", group: "Revelation" },
        { name: "Born of the Virgin Mary", icon: "🌟", group: "Incarnation" },
        { name: "Body of Christ", icon: "🏛️", group: "Church" },
        { name: "Fully God, fully human", icon: "✨", group: "Incarnation" },
        { name: "The Magisterium interprets faith", icon: "🎓", group: "Revelation" },
        { name: "Called to evangelize", icon: "🌍", group: "Church" }
      ],
      groups: ["Trinity", "Revelation", "Incarnation", "Church"],
      colors: { "Trinity": "#4A90D9", "Revelation": "#D4A843", "Incarnation": "#C0392B", "Church": "#6DB87B" },
      icons:  { "Trinity": "✝️", "Revelation": "📖", "Incarnation": "🌟", "Church": "🏛️" }
    },

    quiz: {
      questions: [
        { q: "How many Persons are in the Trinity?", opts: ["One", "Two", "Three", "Four"], correct: 2 },
        { q: "What is the ultimate fullness of God's revelation?", opts: ["The Bible", "Jesus Christ", "The Pope", "Sacred Tradition"], correct: 1 },
        { q: "The Incarnation means God became ___.", opts: ["Invisible", "A spirit only", "Flesh (human)", "A myth"], correct: 2 },
        { q: "Every baptized Catholic shares in the Church's ___.", opts: ["Authority only", "Mission", "Priesthood only", "Leadership"], correct: 1 },
        { q: "The Magisterium is the Church's ___ authority.", opts: ["Financial", "Political", "Teaching", "Military"], correct: 2 }
      ]
    ,
    bonus: { q: "The Nicene Creed was formulated at the Councils of ___ and Constantinople.", opts: ["Trent", "Vatican", "Nicaea", "Ephesus"], correct: 2, reward: "Super Scholar!" }
    },

    prayer: {
      title: "Apostles' Creed — Unit 1 Close",
      lines: [
        { s: "L", t: "Let us profess what we have learned and believe." },
        { s: "A", t: "I believe in God, the Father Almighty, Creator of heaven and earth." },
        { s: "L", t: "And in Jesus Christ, His only Son, our Lord." },
        { s: "A", t: "Who was conceived by the Holy Spirit, born of the Virgin Mary." },
        { s: "L", t: "On the third day He rose again from the dead." },
        { s: "A", t: "I believe in the Holy Spirit, the holy Catholic Church. Amen." }
      ]
    }
  },

  // ─────────────────────────────────────────────
  //  UNIT 2: SACRAMENTS IN DEPTH — Weeks 6–9
  // ─────────────────────────────────────────────
  {
    week: 6,
    title: "Reconciliation: The Sacrament of Mercy",
    pillar: "Sacraments",
    verse: "If you forgive the sins of any, they are forgiven. — John 20:23",

    discover: {
      title: "Discover: The Sacrament of Reconciliation",
      instruction: "Tap each card to understand how God's mercy works in Confession.",
      items: [
        { icon: "🕊️", name: "God's Mercy", desc: "God never tires of forgiving us. No sin is too great for His mercy. The Sacrament of Reconciliation is Christ's gift to ensure we always have access to God's forgiveness (CCC 1422–1424)." },
        { icon: "🙏", name: "Contrition", desc: "Contrition is heartfelt sorrow for sin. Perfect contrition arises from love of God; imperfect contrition from fear of punishment. Both are valid, but we should always strive for love-based repentance (CCC 1451–1454)." },
        { icon: "📣", name: "Confession", desc: "We confess our sins to a priest who acts in the person of Christ. Mortal sins must be confessed by kind and number; venial sins are also confessed to grow in holiness (CCC 1455–1458)." },
        { icon: "✅", name: "Absolution", desc: "The priest pronounces the words of absolution: 'I absolve you from your sins in the name of the Father, and of the Son, and of the Holy Spirit.' Our sins are truly, objectively forgiven (CCC 1449)." },
        { icon: "🌱", name: "Penance and Conversion", desc: "The priest assigns a penance — a prayer or action to make satisfaction for sin. True reconciliation involves a firm purpose of amendment: a commitment not to sin again (CCC 1459–1460)." }
      ]
    },

    secondary: "timeline",
    timeline: {
      title: "Steps of the Sacrament of Reconciliation",
      instruction: "Tap two items to swap them into the correct order.",
      items: [
        { id: 1, text: "Examination of conscience — review your actions", order: 1 },
        { id: 2, text: "Contrition — feel sorrow and resolve to change", order: 2 },
        { id: 3, text: "Confession — tell your sins to the priest", order: 3 },
        { id: 4, text: "Absolution — the priest forgives in Christ's name", order: 4 },
        { id: 5, text: "Penance — complete the act of satisfaction", order: 5 }
      ]
    },

    quiz: {
      questions: [
        { q: "What is contrition?", opts: ["Pride in your actions", "Sorrow for sin", "A type of prayer", "A penance given"], correct: 1 },
        { q: "Who pronounces absolution?", opts: ["The bishop only", "The pope", "A deacon", "The priest"], correct: 3 },
        { q: "Mortal sins must be confessed by kind and ___.", opts: ["Date", "Number", "Location", "Time"], correct: 1 },
        { q: "What is a 'firm purpose of amendment'?", opts: ["A type of penance", "A commitment not to sin again", "A prayer of thanksgiving", "A special blessing"], correct: 1 },
        { q: "Perfect contrition arises from ___.", opts: ["Fear of hell", "Peer pressure", "Love of God", "The priest's urging"], correct: 2 }
      ]
    ,
    bonus: { q: "A sacrament is an outward sign instituted by ___ to give grace.", opts: ["The Pope", "The bishops", "Christ", "The saints"], correct: 2, reward: "Sacrament Star!" }
    },

    prayer: {
      title: "Act of Contrition",
      lines: [
        { s: "L", t: "Let us approach God with humble and contrite hearts." },
        { s: "A", t: "O my God, I am heartily sorry for having offended you." },
        { s: "L", t: "I detest all my sins because of your just punishments." },
        { s: "A", t: "But most of all because they offend you, my God, who are all good." },
        { s: "L", t: "I firmly resolve, with the help of your grace, to sin no more." },
        { s: "A", t: "And to avoid the near occasions of sin. Amen." }
      ]
    }
  },

  // ─────────────────────────────────────────────
  {
    week: 7,
    title: "The Eucharist: Source and Summit",
    pillar: "Sacraments",
    verse: "I am the living bread which came down from heaven. If anyone eats of this bread, he will live forever. — John 6:51",

    discover: {
      title: "Discover: The Eucharist More Deeply",
      instruction: "Tap each card to go deeper into the mystery of the Eucharist.",
      items: [
        { icon: "🍞", name: "Real Presence", desc: "At Mass, through the words of consecration spoken by the priest, the bread and wine truly become the Body and Blood of Jesus Christ. This is called transubstantiation (CCC 1373–1376)." },
        { icon: "🏔️", name: "Source and Summit", desc: "The Eucharist is the source and summit of the entire Christian life. All other sacraments and all ministries of the Church are directed toward and flow from the Eucharist (CCC 1324)." },
        { icon: "🕯️", name: "Memorial and Sacrifice", desc: "The Mass is not a repeat of Calvary — it makes the one sacrifice of Christ present again across time. Every Mass unites heaven and earth (CCC 1362–1368)." },
        { icon: "🤝", name: "Communion", desc: "Receiving Holy Communion unites us to Christ and to each other as the Church. We must be in a state of grace (free from mortal sin) and have fasted for one hour (CCC 1385–1390)." },
        { icon: "⛪", name: "Adoration", desc: "Jesus remains truly present in the Eucharist reserved in the tabernacle. Catholics honor this by genuflecting and through Eucharistic Adoration — silent prayer before the Blessed Sacrament (CCC 1378–1381)." }
      ]
    },

    secondary: "fillblank",
    fillblank: {
      title: "True or False? Fill the Blank!",
      instruction: "Fill in the missing word about the Eucharist.",
      sentences: [
        { text: "Transubstantiation means the bread truly becomes the ___ of Christ.", answer: "Body", options: ["Body", "symbol", "memory", "image"] },
        { text: "The Eucharist is the ___ and summit of Christian life.", answer: "source", options: ["source", "finish", "option", "least"] },
        { text: "To receive Communion worthily, we must be in a state of ___.", answer: "grace", options: ["grace", "joy", "sleep", "hunger"] },
        { text: "The Mass makes the one sacrifice of Christ ___ across time.", answer: "present", options: ["present", "repeated", "forgotten", "changed"] }
      ]
    },

    quiz: {
      questions: [
        { q: "What is transubstantiation?", opts: ["A prayer before Communion", "Bread becoming the Body of Christ", "A type of fast", "An act of the will"], correct: 1 },
        { q: "The Eucharist is called the ___ of Christian life.", opts: ["Shadow", "Source and Summit", "Beginning only", "Memorial only"], correct: 1 },
        { q: "Where is Jesus truly present between Masses?", opts: ["Only in the Bible", "In the Tabernacle", "Only in our memories", "In the altar alone"], correct: 1 },
        { q: "How long must we fast before receiving Communion?", opts: ["24 hours", "Three hours", "One hour", "No fasting needed"], correct: 2 },
        { q: "The Mass is the one ___ of Christ made present.", opts: ["Meal only", "Sacrifice", "Teaching only", "Blessing"], correct: 1 }
      ]
    ,
    bonus: { q: "The matter of Baptism is ___ and the form is the Trinitarian words.", opts: ["oil", "water", "bread", "incense"], correct: 1, reward: "Grace Expert!" }
    },

    prayer: {
      title: "Prayer of Eucharistic Adoration",
      lines: [
        { s: "L", t: "Lord Jesus, you are truly present in the Blessed Sacrament." },
        { s: "A", t: "We adore you with all our hearts, mind, and soul." },
        { s: "L", t: "You gave yourself completely on the cross for love of us." },
        { s: "A", t: "May we receive you with gratitude and live in communion with you." },
        { s: "L", t: "Help us to be worthy temples of your presence." },
        { s: "A", t: "Lord, I am not worthy — only say the word and I shall be healed. Amen." }
      ]
    }
  },

  // ─────────────────────────────────────────────
  {
    week: 8,
    title: "Confirmation: Living the Spirit's Gifts",
    pillar: "Sacraments",
    verse: "You will receive power when the Holy Spirit comes upon you. — Acts 1:8",

    discover: {
      title: "Discover: Confirmation's Seven Gifts",
      instruction: "Tap each card to learn about the gifts the Holy Spirit gives us.",
      items: [
        { icon: "🦅", name: "Wisdom", desc: "Wisdom helps us see life from God's perspective — to know what truly matters and to make decisions that reflect God's will. It is the greatest of the seven gifts (CCC 1831)." },
        { icon: "💡", name: "Understanding", desc: "Understanding gives us a deeper grasp of the truths of our faith. It allows us to comprehend the meaning of Scripture, the Creed, and the mysteries of God." },
        { icon: "🗺️", name: "Counsel (Right Judgment)", desc: "Counsel helps us discern what to do in difficult or morally complex situations. It is the practical wisdom to choose the right path when the way is unclear." },
        { icon: "💪", name: "Fortitude (Courage)", desc: "Fortitude gives us the strength to stand firm in our faith, even when it is difficult or unpopular. It is the courage to do what is right despite fear, ridicule, or suffering (CCC 1808)." },
        { icon: "📚", name: "Knowledge", desc: "Knowledge helps us understand the world in light of faith — to see creation correctly and to avoid the errors that lead us away from God. It humbles us before God's greatness." }
      ]
    },

    secondary: "sort",
    sort: {
      title: "Match the Gift to the Situation!",
      instruction: "Tap each situation, then tap the gift of the Holy Spirit that applies.",
      items: [
        { name: "Defending your faith when mocked", icon: "💪", group: "Fortitude" },
        { name: "Choosing God over popularity", icon: "🦅", group: "Wisdom" },
        { name: "Understanding a Bible passage deeply", icon: "💡", group: "Understanding" },
        { name: "Deciding the right thing when unsure", icon: "🗺️", group: "Counsel" },
        { name: "Seeing creation as God's gift", icon: "📚", group: "Knowledge" },
        { name: "Standing up for a bullied classmate", icon: "🤝", group: "Fortitude" },
        { name: "Grasping the mystery of the Trinity", icon: "✨", group: "Understanding" }
      ],
      groups: ["Wisdom", "Understanding", "Counsel", "Fortitude", "Knowledge"],
      colors: { "Wisdom": "#4A90D9", "Understanding": "#9B6DB8", "Counsel": "#D4A843", "Fortitude": "#C0392B", "Knowledge": "#6DB87B" },
      icons:  { "Wisdom": "🦅", "Understanding": "💡", "Counsel": "🗺️", "Fortitude": "💪", "Knowledge": "📚" }
    },

    quiz: {
      questions: [
        { q: "How many gifts does the Holy Spirit give in Confirmation?", opts: ["3", "5", "7", "12"], correct: 2 },
        { q: "Which gift helps us stand firm in faith despite difficulty?", opts: ["Knowledge", "Piety", "Fortitude", "Wisdom"], correct: 2 },
        { q: "Which gift helps us see life from God's perspective?", opts: ["Counsel", "Fear of the Lord", "Wisdom", "Understanding"], correct: 2 },
        { q: "Counsel helps us ___.", opts: ["Pray longer", "Discern the right choice in hard situations", "Understand creation", "Worship God properly"], correct: 1 },
        { q: "Confirmation 'seals' us with the Gift of the ___.", opts: ["Eucharist", "Pope", "Holy Spirit", "Bishop's blessing"], correct: 2 }
      ]
    ,
    bonus: { q: "Baptism imprints an indelible spiritual ___ on the soul.", opts: ["wound", "mark/character", "memory", "vision"], correct: 1, reward: "Liturgy Whiz!" }
    },

    prayer: {
      title: "Come, Holy Spirit",
      lines: [
        { s: "L", t: "Come, Holy Spirit, fill the hearts of your faithful." },
        { s: "A", t: "And kindle in them the fire of your love." },
        { s: "L", t: "Send forth your Spirit, and they shall be created." },
        { s: "A", t: "And you shall renew the face of the earth." },
        { s: "L", t: "Grant us your seven gifts so we may live as courageous disciples." },
        { s: "A", t: "Come, Holy Spirit — guide us, strengthen us, and make us holy. Amen." }
      ]
    }
  },

  // ─────────────────────────────────────────────
  {
    week: 9,
    title: "Holy Orders and Matrimony: Called to Serve",
    pillar: "Sacraments",
    verse: "Let the greatest among you become as the youngest, and the leader as one who serves. — Luke 22:26",

    discover: {
      title: "Discover: Sacraments at the Service of Communion",
      instruction: "Tap each card to understand how these sacraments build up the Church.",
      items: [
        { icon: "⛪", name: "Holy Orders", desc: "Holy Orders ordains men as bishops, priests, or deacons. Bishops are the successors of the Apostles. Priests celebrate the sacraments and shepherd parishes. Deacons serve in charity and the liturgy (CCC 1536–1589)." },
        { icon: "💍", name: "Matrimony", desc: "Matrimony unites a man and a woman in a covenant of lifelong, faithful, fruitful love. It reflects the love of Christ for His Church and is a public act witnessed by the Church (CCC 1601–1617)." },
        { icon: "🕊️", name: "A Sacramental Sign", desc: "In marriage, the spouses themselves are the ministers of the sacrament — they give the sacrament to each other. The priest or deacon witnesses on behalf of the Church (CCC 1623)." },
        { icon: "🌱", name: "Open to Life", desc: "Married love is called to be open to children — life-giving as well as unifying. The family is the 'domestic church' where children first learn to pray and to love God (CCC 1652–1657)." },
        { icon: "🤲", name: "Celibacy and Marriage", desc: "Priests in the Latin Rite freely choose celibacy as a sign of total dedication to God. Both marriage and celibacy are holy vocations that direct our love toward its ultimate source: God Himself (CCC 1579–1580)." }
      ]
    },

    secondary: "fillblank",
    fillblank: {
      title: "Fill in the Vocation!",
      instruction: "Complete each sentence about Holy Orders or Matrimony.",
      sentences: [
        { text: "Bishops are the successors of the ___.", answer: "Apostles", options: ["Apostles", "Prophets", "Deacons", "Laity"] },
        { text: "In Matrimony, the spouses are the ___ of the sacrament.", answer: "ministers", options: ["witnesses", "ministers", "priests", "observers"] },
        { text: "The family is called the 'domestic ___'.", answer: "church", options: ["monastery", "school", "church", "parish"] },
        { text: "Married love must be open to ___.", answer: "life", options: ["life", "wealth", "leisure", "success"] }
      ]
    },

    quiz: {
      questions: [
        { q: "How many degrees does Holy Orders have?", opts: ["One", "Two", "Three", "Seven"], correct: 2 },
        { q: "Who are the successors of the Apostles?", opts: ["Priests", "Deacons", "Bishops", "Laity"], correct: 2 },
        { q: "In Matrimony, who are the ministers of the sacrament?", opts: ["The priest", "The bishop", "The spouses", "The deacon"], correct: 2 },
        { q: "What is the family called in the Catechism?", opts: ["A small parish", "The domestic church", "A religious order", "A prayer group"], correct: 1 },
        { q: "Priestly celibacy in the Latin Rite is a sign of ___.", opts: ["Avoiding family", "Total dedication to God", "A rule without meaning", "A mistake in history"], correct: 1 }
      ]
    ,
    bonus: { q: "The essential rite of Confirmation is anointing with chrism and ___.", opts: ["pouring water", "laying on of hands", "reading Scripture", "breaking bread"], correct: 1, reward: "Sacrament Scholar!" }
    },

    prayer: {
      title: "Prayer for Vocations",
      lines: [
        { s: "L", t: "Lord, you call each of us to serve you in a unique way." },
        { s: "A", t: "Help us to hear your voice and respond with generous hearts." },
        { s: "L", t: "Bless our priests and deacons who serve your people." },
        { s: "A", t: "Bless married couples who mirror your love in their families." },
        { s: "L", t: "May all who are discerning their vocation find courage and clarity." },
        { s: "A", t: "Lord, here we are — send us wherever you call. Amen." }
      ]
    }
  },

  // ─────────────────────────────────────────────
  //  WEEK 10: UNIT 2 REVIEW
  // ─────────────────────────────────────────────
  {
    week: 10,
    title: "Unit 2 Review: Sacraments in Depth",
    pillar: "Review",
    ccc: "1113-1666",
    verse: "As many of you as were baptized into Christ have put on Christ. — Galatians 3:27",

    discover: {
      title: "Review: Sacraments in Depth",
      instruction: "Tap each card to review the sacraments we studied.",
      items: [
        { icon: "🕊️", name: "Reconciliation", desc: "Through contrition, confession, absolution, and penance, God truly forgives our sins. The priest acts in the person of Christ to restore us to grace." },
        { icon: "🍞", name: "The Eucharist", desc: "The source and summit of Christian life — the true Body and Blood of Jesus. We receive Jesus in Communion and adore Him in the Tabernacle." },
        { icon: "🔥", name: "Confirmation", desc: "We are sealed with the Holy Spirit and receive seven gifts to strengthen our faith and mission: wisdom, understanding, counsel, fortitude, knowledge, piety, fear of the Lord." },
        { icon: "⛪", name: "Holy Orders & Matrimony", desc: "The Sacraments at the Service of Communion — building up the Church through ordained ministry and holy marriage. Both are sacred vocations." }
      ]
    },

    secondary: "timeline",
    timeline: {
      title: "Sacraments of Initiation — In Order",
      instruction: "Tap two items to swap them into the correct order.",
      items: [
        { id: 1, text: "Baptism — entrance into God's family", order: 1 },
        { id: 2, text: "First Reconciliation — healing before Eucharist", order: 2 },
        { id: 3, text: "First Eucharist — source and summit received", order: 3 },
        { id: 4, text: "Confirmation — sealed with the Holy Spirit", order: 4 },
        { id: 5, text: "Lifelong reception of Eucharist and Reconciliation", order: 5 }
      ]
    },

    quiz: {
      questions: [
        { q: "Which sacrament requires contrition, confession, and absolution?", opts: ["Baptism", "Confirmation", "Reconciliation", "Anointing"], correct: 2 },
        { q: "The Eucharist is the ___ and summit of Christian life.", opts: ["Option", "Source", "Least", "End"], correct: 1 },
        { q: "How many gifts does the Holy Spirit give?", opts: ["3", "5", "7", "10"], correct: 2 },
        { q: "Bishops are the successors of the ___.", opts: ["Laity", "Pharisees", "Apostles", "Priests"], correct: 2 },
        { q: "In Matrimony, who ministers the sacrament to each other?", opts: ["The priest", "The bishop", "The deacon", "The spouses"], correct: 3 }
      ]
    ,
    bonus: { q: "The word 'consubstantial' in the Creed means ___.", opts: ["Similar to", "Of one being/substance with", "Created by", "Separate from"], correct: 1, reward: "Review Champion!" }
    },

    prayer: {
      title: "Anima Christi — Soul of Christ",
      lines: [
        { s: "L", t: "Let us pray with the words of a great Eucharistic prayer." },
        { s: "A", t: "Soul of Christ, sanctify me. Body of Christ, save me." },
        { s: "L", t: "Blood of Christ, inebriate me. Water from the side of Christ, wash me." },
        { s: "A", t: "Passion of Christ, strengthen me. O good Jesus, hear me." },
        { s: "L", t: "Within your wounds, hide me. Let me never be separated from you." },
        { s: "A", t: "In the hour of my death, call me and bid me come to you. Amen." }
      ]
    }
  },

  // ─────────────────────────────────────────────
  //  UNIT 3: MORALITY AND CONSCIENCE — Weeks 11–14
  // ─────────────────────────────────────────────
  {
    week: 11,
    title: "Conscience: The Voice of God Within",
    pillar: "Morality",
    verse: "I will put my law in their midst, and I will write it in their heart. — Jeremiah 31:33",

    discover: {
      title: "Discover: What Is Conscience?",
      instruction: "Tap each card to understand the role of conscience in moral life.",
      items: [
        { icon: "🧭", name: "What Is Conscience?", desc: "Conscience is our inner ability to judge whether an action is morally good or evil. It is not just a feeling — it is the voice that applies the natural moral law to concrete situations (CCC 1778)." },
        { icon: "🌿", name: "Natural Law", desc: "God has written the basic principles of right and wrong into human nature. This is called natural law. Every person, through right reason, can access these foundational moral truths (CCC 1954–1960)." },
        { icon: "📚", name: "Forming Conscience", desc: "A good conscience must be formed — educated and shaped by prayer, Scripture, the Catechism, and the teachings of the Church. An uninformed conscience can be sincerely wrong (CCC 1783–1785)." },
        { icon: "⚠️", name: "Erroneous Conscience", desc: "Sometimes our conscience gives us an incorrect judgment because of ignorance or error. We are still responsible for forming our conscience well and following it (CCC 1790–1794)." },
        { icon: "✅", name: "Always Follow Conscience", desc: "We are always obligated to obey the certain judgment of our conscience. But we also have a duty to make sure our conscience is well-formed. An informed conscience reflects God's law (CCC 1800)." }
      ]
    },

    secondary: "sort",
    sort: {
      title: "Good Formation or Poor Formation?",
      instruction: "Tap each habit, then sort it: does it help FORM or DEFORM conscience?",
      items: [
        { name: "Regular prayer and Mass", icon: "🙏", group: "Forms Conscience" },
        { name: "Reading the Catechism", icon: "📖", group: "Forms Conscience" },
        { name: "Ignoring Church teaching", icon: "🚫", group: "Deforms Conscience" },
        { name: "Following peer pressure only", icon: "👥", group: "Deforms Conscience" },
        { name: "Examining your conscience daily", icon: "🧭", group: "Forms Conscience" },
        { name: "Rationalizing wrong actions", icon: "❌", group: "Deforms Conscience" },
        { name: "Seeking spiritual direction", icon: "🌟", group: "Forms Conscience" }
      ],
      groups: ["Forms Conscience", "Deforms Conscience"],
      colors: { "Forms Conscience": "#6DB87B", "Deforms Conscience": "#C0392B" },
      icons:  { "Forms Conscience": "✅", "Deforms Conscience": "⚠️" }
    },

    quiz: {
      questions: [
        { q: "What is conscience?", opts: ["A feeling of happiness", "Our inner moral judgment ability", "A prayer we say", "A Church rule"], correct: 1 },
        { q: "Natural law is written by God into ___.", opts: ["The Bible only", "Human nature", "The Catechism only", "Church buildings"], correct: 1 },
        { q: "Whose teaching helps form our conscience?", opts: ["Popular opinion", "Social media", "The Church", "Our emotions alone"], correct: 2 },
        { q: "We are always obligated to follow our ___.", opts: ["Feelings", "Friends", "Conscience", "Desires"], correct: 2 },
        { q: "An uninformed conscience can be ___.", opts: ["Perfectly reliable", "Sincerely wrong", "Never wrong", "Ignored"], correct: 1 }
      ]
    ,
    bonus: { q: "A well-formed conscience requires ___.", opts: ["Just good feelings", "Prayer, study of Church teaching, and the guidance of the Holy Spirit", "Only personal opinions", "Peer pressure"], correct: 1, reward: "Virtue Hero!" }
    },

    prayer: {
      title: "Examination of Conscience Prayer",
      lines: [
        { s: "L", t: "Lord, you have written your law in our hearts." },
        { s: "A", t: "Help us to hear the voice of our conscience clearly." },
        { s: "L", t: "Give us wisdom to know right from wrong." },
        { s: "A", t: "And the courage to choose good even when it is hard." },
        { s: "L", t: "Form our consciences by your truth and your love." },
        { s: "A", t: "May we always act in ways that honor you. Amen." }
      ]
    }
  },

  // ─────────────────────────────────────────────
  {
    week: 12,
    title: "Sin: Choosing Against God",
    pillar: "Morality",
    verse: "If we say we have no sin, we deceive ourselves, and the truth is not in us. — 1 John 1:8",

    discover: {
      title: "Discover: Understanding Sin",
      instruction: "Tap each card to understand what sin is and how it harms us.",
      items: [
        { icon: "❌", name: "What Is Sin?", desc: "Sin is a free, deliberate thought, word, deed, or omission contrary to God's law. Sin wounds our relationship with God, with others, and with ourselves (CCC 1849–1851)." },
        { icon: "🔴", name: "Mortal Sin", desc: "Mortal sin kills grace in the soul. Three conditions are needed: it must be serious matter, committed with full knowledge, and with deliberate consent. It requires Confession for forgiveness (CCC 1857–1861)." },
        { icon: "🟡", name: "Venial Sin", desc: "Venial sin weakens our relationship with God without destroying grace completely. While less serious, it disposes us to mortal sin and should be avoided and confessed regularly (CCC 1862–1863)." },
        { icon: "🌊", name: "Social Sin", desc: "Sin has a social dimension — our choices affect others. Social structures of sin (like poverty, injustice, violence) result from accumulated individual sins and require conversion at personal and social levels (CCC 1869)." },
        { icon: "🌱", name: "Freedom and Responsibility", desc: "We sin freely — no one forces us. But ignorance, fear, habit, or strong emotion can reduce our moral responsibility. God always offers the grace to resist temptation (CCC 1735–1742)." }
      ]
    },

    secondary: "fillblank",
    fillblank: {
      title: "Fill in the Blank About Sin",
      instruction: "Complete each sentence about the nature of sin.",
      sentences: [
        { text: "Mortal sin requires serious matter, full knowledge, and deliberate ___.", answer: "consent", options: ["consent", "accident", "ignorance", "prayer"] },
        { text: "Venial sin ___ our relationship with God but does not destroy grace.", answer: "weakens", options: ["ends", "weakens", "strengthens", "ignores"] },
        { text: "Sin affects not just ourselves but ___.", answer: "others", options: ["only us", "others", "no one", "animals"] },
        { text: "God always offers the ___ to resist temptation.", answer: "grace", options: ["grace", "punishment", "law", "advice"] }
      ]
    },

    quiz: {
      questions: [
        { q: "How many conditions are needed for mortal sin?", opts: ["One", "Two", "Three", "Five"], correct: 2 },
        { q: "Mortal sin ___ grace in the soul.", opts: ["Increases", "Weakens", "Kills", "Creates"], correct: 2 },
        { q: "Venial sin ___ our relationship with God.", opts: ["Kills", "Destroys completely", "Has no effect on", "Weakens"], correct: 3 },
        { q: "What must we do after committing mortal sin?", opts: ["Ignore it", "Go to Confession", "Do more good works only", "Ask a friend"], correct: 1 },
        { q: "Sin is always a ___ act.", opts: ["Forced", "Accidental always", "Free", "Inherited"], correct: 2 }
      ]
    ,
    bonus: { q: "The natural moral law is ___.", opts: ["Written in the Bible only", "Written on every human heart by God", "Invented by governments", "Different for each culture"], correct: 1, reward: "Moral Champion!" }
    },

    prayer: {
      title: "Prayer for Forgiveness and Strength",
      lines: [
        { s: "L", t: "Lord, we are not without sin. We come to you with humble hearts." },
        { s: "A", t: "Have mercy on us, O God, according to your steadfast love." },
        { s: "L", t: "Create in us a clean heart, and renew a right spirit within us." },
        { s: "A", t: "Cast us not away from your presence, and take not your Holy Spirit from us." },
        { s: "L", t: "Restore to us the joy of your salvation." },
        { s: "A", t: "And sustain in us a willing spirit. Amen." }
      ]
    }
  },

  // ─────────────────────────────────────────────
  {
    week: 13,
    title: "The Virtues: Habits of the Heart",
    pillar: "Morality",
    verse: "Whatever is true, whatever is honorable, whatever is just — think about these things. — Philippians 4:8",

    discover: {
      title: "Discover: Theological and Cardinal Virtues",
      instruction: "Tap each card to learn about the virtues that shape a holy life.",
      items: [
        { icon: "🌟", name: "What Is a Virtue?", desc: "A virtue is a habitual, firm disposition to do good. Virtues are developed through repeated good choices and grow with God's grace. They make goodness easier and more joyful (CCC 1803–1804)." },
        { icon: "🙏", name: "Theological Virtues", desc: "Faith, Hope, and Charity are the theological virtues — they come directly from God and relate us to Him. They are infused at Baptism and perfected through the sacraments and prayer (CCC 1812–1829)." },
        { icon: "⚖️", name: "Prudence", desc: "Prudence is the charioteer of the virtues — it guides all the others by applying right reason to our actions. It helps us discern the true good and choose the right means to achieve it (CCC 1806)." },
        { icon: "🏛️", name: "Justice", desc: "Justice is the constant will to give to God and neighbor what is their due. It governs our relationships with others and is the foundation of social life (CCC 1807)." },
        { icon: "🦁", name: "Fortitude and Temperance", desc: "Fortitude gives us courage to pursue good despite difficulty. Temperance moderates our desires and emotions so they serve reason and goodness rather than controlling us (CCC 1808–1809)." }
      ]
    },

    secondary: "sort",
    sort: {
      title: "Theological or Cardinal Virtue?",
      instruction: "Tap each virtue, then sort it into the correct group.",
      items: [
        { name: "Faith", icon: "✝️", group: "Theological" },
        { name: "Hope", icon: "🌟", group: "Theological" },
        { name: "Charity (Love)", icon: "❤️", group: "Theological" },
        { name: "Prudence", icon: "⚖️", group: "Cardinal" },
        { name: "Justice", icon: "🏛️", group: "Cardinal" },
        { name: "Fortitude", icon: "💪", group: "Cardinal" },
        { name: "Temperance", icon: "🌊", group: "Cardinal" }
      ],
      groups: ["Theological", "Cardinal"],
      colors: { "Theological": "#9B6DB8", "Cardinal": "#D4A843" },
      icons:  { "Theological": "🙏", "Cardinal": "⚖️" }
    },

    quiz: {
      questions: [
        { q: "How many theological virtues are there?", opts: ["Two", "Three", "Four", "Seven"], correct: 1 },
        { q: "Which virtue is called the 'charioteer of all virtues'?", opts: ["Justice", "Fortitude", "Prudence", "Temperance"], correct: 2 },
        { q: "Justice means giving to God and neighbor what is their ___.", opts: ["Preference", "Due", "Opinion", "Request"], correct: 1 },
        { q: "The theological virtues come from ___.", opts: ["Education", "Habit alone", "God directly", "Our parents"], correct: 2 },
        { q: "Temperance helps us ___ our desires.", opts: ["Eliminate", "Ignore", "Moderate", "Multiply"], correct: 2 }
      ]
    ,
    bonus: { q: "The three sources for determining the morality of an act are the object, the intention, and the ___.", opts: ["outcome", "location", "circumstances", "emotion"], correct: 2, reward: "Goodness Guide!" }
    },

    prayer: {
      title: "Prayer for the Virtues",
      lines: [
        { s: "L", t: "Lord, plant in us the seeds of virtue." },
        { s: "A", t: "Give us faith to trust you, hope to wait for you, and charity to love like you." },
        { s: "L", t: "Give us prudence to choose wisely, and justice to treat others rightly." },
        { s: "A", t: "Give us fortitude to stand firm, and temperance to govern ourselves." },
        { s: "L", t: "Make virtue not just a rule we follow, but a habit of the heart." },
        { s: "A", t: "May we grow more like you every day. Amen." }
      ]
    }
  },

  // ─────────────────────────────────────────────
  {
    week: 14,
    title: "Human Dignity and the Common Good",
    pillar: "Morality",
    verse: "God created man in his own image, in the image of God he created him. — Genesis 1:27",

    discover: {
      title: "Discover: Dignity and the Common Good",
      instruction: "Tap each card to understand the foundation of Catholic social teaching.",
      items: [
        { icon: "🌟", name: "Imago Dei", desc: "Every human being is made in the image of God — imago Dei. This is the foundation of human dignity. Because of this, every person has inherent worth that cannot be earned or taken away (CCC 1700–1706)." },
        { icon: "🤝", name: "The Common Good", desc: "The common good is the sum total of conditions that allow individuals and communities to flourish. Society exists to serve the human person — not the other way around (CCC 1905–1912)." },
        { icon: "⚖️", name: "Social Justice", desc: "Social justice requires that social institutions be arranged so that all people can participate in the goods of society. It addresses unjust structures, not just individual wrongs (CCC 1928–1942)." },
        { icon: "🏠", name: "Subsidiarity", desc: "Subsidiarity teaches that decisions should be made at the lowest appropriate level — closest to the people affected. Higher authorities should support, not replace, smaller communities (CCC 1883–1885)." },
        { icon: "🌍", name: "Solidarity", desc: "Solidarity is our responsibility to our brothers and sisters — especially the poor and vulnerable. It is not just a feeling, but a commitment to the good of all, especially those on the margins (CCC 1939–1942)." }
      ]
    },

    secondary: "fillblank",
    fillblank: {
      title: "Catholic Social Teaching — Fill the Blank!",
      instruction: "Complete each core principle of Catholic social teaching.",
      sentences: [
        { text: "Human dignity comes from being made in the image of ___.", answer: "God", options: ["God", "society", "the state", "our parents"] },
        { text: "The common good allows individuals and communities to ___.", answer: "flourish", options: ["compete", "flourish", "earn", "govern"] },
        { text: "Subsidiarity says decisions should be made at the ___ level.", answer: "lowest appropriate", options: ["highest", "federal", "lowest appropriate", "most expensive"] },
        { text: "Solidarity means commitment to the good of ___, especially the poor.", answer: "all", options: ["ourselves", "all", "the powerful", "one nation"] }
      ]
    },

    quiz: {
      questions: [
        { q: "What does 'Imago Dei' mean?", opts: ["Born into sin", "Image of God", "Gift of grace", "Member of the Church"], correct: 1 },
        { q: "The common good allows people and communities to ___.", opts: ["Control others", "Compete for power", "Flourish", "Earn salvation"], correct: 2 },
        { q: "Subsidiarity means decisions should be made ___.", opts: ["Only by the Pope", "Only by governments", "At the lowest appropriate level", "By majority vote always"], correct: 2 },
        { q: "Solidarity especially emphasizes care for ___.", opts: ["The powerful", "Only Catholics", "The poor and vulnerable", "Our own families only"], correct: 2 },
        { q: "Social justice addresses ___.", opts: ["Only individual sins", "Unjust social structures", "Political parties only", "Economic systems only"], correct: 1 }
      ]
    ,
    bonus: { q: "A mortal sin requires grave matter, full knowledge, and ___.", opts: ["witnesses", "deliberate consent", "public knowledge", "repetition"], correct: 1, reward: "Virtue Star!" }
    },

    prayer: {
      title: "Prayer for Justice and Human Dignity",
      lines: [
        { s: "L", t: "Lord, you made every person in your image and likeness." },
        { s: "A", t: "Help us to see and honor the dignity in every human being." },
        { s: "L", t: "Open our eyes to those who suffer from poverty and injustice." },
        { s: "A", t: "Give us hearts of solidarity — hearts that feel what others feel." },
        { s: "L", t: "Move us to build a world where all can flourish as your children." },
        { s: "A", t: "May justice flow like water, and righteousness like an ever-flowing stream. Amen." }
      ]
    }
  },

  // ─────────────────────────────────────────────
  //  WEEK 15: UNIT 3 REVIEW
  // ─────────────────────────────────────────────
  {
    week: 15,
    title: "Unit 3 Review: Morality and Conscience",
    pillar: "Review",
    ccc: "1691-1802",
    verse: "Do not be conformed to this world, but be transformed by the renewal of your mind. — Romans 12:2",

    discover: {
      title: "Review: Morality, Sin, Virtue, and Dignity",
      instruction: "Tap each card to review the key themes of Unit 3.",
      items: [
        { icon: "🧭", name: "Conscience", desc: "Our inner moral compass that judges right from wrong. It must be formed by prayer, Scripture, and Church teaching. We must always follow our conscience — and form it well." },
        { icon: "❌", name: "Sin", desc: "A free choice against God's will — mortal (kills grace) or venial (weakens grace). Sin has personal and social dimensions. Confession restores us after mortal sin." },
        { icon: "⚖️", name: "The Virtues", desc: "Habits of goodness that make acting rightly easier. The theological virtues (faith, hope, charity) come from God. The cardinal virtues (prudence, justice, fortitude, temperance) govern our actions." },
        { icon: "🌟", name: "Human Dignity", desc: "Every person is made in God's image and has inherent dignity. This is the foundation of Catholic social teaching, which calls us to build a just world through solidarity and subsidiarity." }
      ]
    },

    secondary: "sort",
    sort: {
      title: "Match the Concept to the Right Category!",
      instruction: "Tap each concept, then tap the Unit 3 theme it belongs to.",
      items: [
        { name: "Formed by Church teaching", icon: "🧭", group: "Conscience" },
        { name: "Kills sanctifying grace", icon: "❌", group: "Sin" },
        { name: "Faith, Hope, Charity", icon: "🙏", group: "Virtue" },
        { name: "Imago Dei", icon: "🌟", group: "Human Dignity" },
        { name: "Requires contrition", icon: "💧", group: "Sin" },
        { name: "Prudence guides all others", icon: "⚖️", group: "Virtue" },
        { name: "Solidarity and subsidiarity", icon: "🤝", group: "Human Dignity" }
      ],
      groups: ["Conscience", "Sin", "Virtue", "Human Dignity"],
      colors: { "Conscience": "#4A90D9", "Sin": "#C0392B", "Virtue": "#6DB87B", "Human Dignity": "#9B6DB8" },
      icons:  { "Conscience": "🧭", "Sin": "❌", "Virtue": "⚖️", "Human Dignity": "🌟" }
    },

    quiz: {
      questions: [
        { q: "What is the duty of every Catholic regarding their conscience?", opts: ["Ignore it", "Follow it and form it well", "Replace it with feelings", "Let others decide"], correct: 1 },
        { q: "Mortal sin requires three conditions. Which is NOT one?", opts: ["Serious matter", "Full knowledge", "Strong emotion", "Deliberate consent"], correct: 2 },
        { q: "Which virtue is called the 'charioteer' of all virtues?", opts: ["Fortitude", "Justice", "Prudence", "Temperance"], correct: 2 },
        { q: "Human dignity is rooted in ___.", opts: ["Being Catholic", "Being educated", "Being made in God's image", "Being born into a good family"], correct: 2 },
        { q: "Solidarity means commitment to the good of ___.", opts: ["Only our family", "Our nation only", "All, especially the poor", "Those who agree with us"], correct: 2 }
      ]
    ,
    bonus: { q: "The Creed professes belief in the ___, holy, catholic, and apostolic Church.", opts: ["new", "old", "one", "large"], correct: 2, reward: "Knowledge Star!" }
    },

    prayer: {
      title: "Prayer for a Moral Life",
      lines: [
        { s: "L", t: "Lord, write your law on our hearts and guide our conscience." },
        { s: "A", t: "Help us to choose you over sin in every moment of our day." },
        { s: "L", t: "Grow in us the virtues — especially love, justice, and courage." },
        { s: "A", t: "May we honor the dignity of every person we encounter." },
        { s: "L", t: "Transform our minds, Lord, so we are not conformed to this world." },
        { s: "A", t: "But renewed by your truth and your love. Amen." }
      ]
    }
  },

  // ─────────────────────────────────────────────
  //  UNIT 4: JUSTICE AND CATHOLIC SOCIAL TEACHING — Weeks 16–19
  // ─────────────────────────────────────────────
  {
    week: 16,
    title: "The Option for the Poor",
    pillar: "Morality",
    verse: "Blessed are you who are poor, for yours is the kingdom of God. — Luke 6:20",

    discover: {
      title: "Discover: God's Love for the Poor",
      instruction: "Tap each card to understand the Church's preferential option for the poor.",
      items: [
        { icon: "🌿", name: "Jesus and the Poor", desc: "Throughout the Gospels, Jesus demonstrated a special love for the poor, the sick, the outcast, and the marginalized. He called them 'blessed' and said what we do to them, we do to Him (Matthew 25:40)." },
        { icon: "💛", name: "Preferential Option", desc: "The 'preferential option for the poor' means the poor must receive special attention and care. It does not exclude others — it simply recognizes that those who suffer most need our priority (CCC 2448)." },
        { icon: "📢", name: "Prophetic Tradition", desc: "The Old Testament prophets — Amos, Isaiah, Micah — constantly called Israel to care for widows, orphans, and strangers. Justice for the poor is not optional — it is at the core of God's covenant." },
        { icon: "🤝", name: "Works of Mercy", desc: "The Church teaches corporal and spiritual works of mercy as concrete ways to serve. Feeding the hungry, clothing the naked, visiting the sick — these are not extras but essential acts of love (CCC 2447)." },
        { icon: "⚖️", name: "Structural Change", desc: "Individual charity is necessary but not sufficient. Catholic social teaching also calls us to change unjust structures — laws, systems, and institutions that keep people in poverty." }
      ]
    },

    secondary: "sort",
    sort: {
      title: "Corporal or Spiritual Works of Mercy?",
      instruction: "Tap each work of mercy, then sort it into the correct type.",
      items: [
        { name: "Feed the hungry", icon: "🍞", group: "Corporal" },
        { name: "Instruct the ignorant", icon: "📚", group: "Spiritual" },
        { name: "Clothe the naked", icon: "👕", group: "Corporal" },
        { name: "Counsel the doubtful", icon: "🗣️", group: "Spiritual" },
        { name: "Visit the sick", icon: "🏥", group: "Corporal" },
        { name: "Pray for the living and dead", icon: "🙏", group: "Spiritual" },
        { name: "Shelter the homeless", icon: "🏠", group: "Corporal" }
      ],
      groups: ["Corporal", "Spiritual"],
      colors: { "Corporal": "#6DB87B", "Spiritual": "#9B6DB8" },
      icons:  { "Corporal": "🤝", "Spiritual": "🕊️" }
    },

    quiz: {
      questions: [
        { q: "The 'preferential option for the poor' means ___.", opts: ["Excluding the rich", "Special priority for those who suffer most", "Giving only to Catholics", "Ignoring economic issues"], correct: 1 },
        { q: "In Matthew 25, Jesus said what we do to the poor, we do to ___.", opts: ["The Church", "The government", "Him", "Society"], correct: 2 },
        { q: "Which of these is a corporal work of mercy?", opts: ["Counseling the doubtful", "Feeding the hungry", "Bearing wrongs patiently", "Praying for the dead"], correct: 1 },
        { q: "The Old Testament ___ constantly called Israel to care for the poor.", opts: ["Kings", "Prophets", "Priests", "Warriors"], correct: 1 },
        { q: "Catholic social teaching calls us to change unjust ___.", opts: ["Individuals only", "Feelings", "Structures and systems", "Our own habits only"], correct: 2 }
      ]
    ,
    bonus: { q: "Venial sin ___ our relationship with God but does not destroy sanctifying grace.", opts: ["strengthens", "has no effect on", "weakens", "completely destroys"], correct: 2, reward: "Moral Explorer!" }
    },

    prayer: {
      title: "Prayer for the Poor",
      lines: [
        { s: "L", t: "Lord, you said: 'whatever you do for the least of these, you do for me.'" },
        { s: "A", t: "Open our eyes to see you in the faces of the poor and suffering." },
        { s: "L", t: "Give us generous hearts that share what we have freely." },
        { s: "A", t: "Move us to work for justice, not just comfort." },
        { s: "L", t: "May we be instruments of your love in a world of need." },
        { s: "A", t: "Lord, make us servants of the poor — servants of you. Amen." }
      ]
    }
  },

  // ─────────────────────────────────────────────
  {
    week: 17,
    title: "Stewardship: Caring for God's Creation",
    pillar: "Morality",
    verse: "The Lord God took the man and put him in the Garden of Eden to work it and take care of it. — Genesis 2:15",

    discover: {
      title: "Discover: Our Responsibility for Creation",
      instruction: "Tap each card to learn about Catholic environmental stewardship.",
      items: [
        { icon: "🌍", name: "Creator and Creation", desc: "God created the world and called it 'very good.' Creation is a gift entrusted to humanity — not to exploit, but to cultivate and protect. We are stewards, not owners (CCC 299, 2415)." },
        { icon: "🌿", name: "Stewardship", desc: "Stewardship means responsible management of something belonging to another. We are stewards of God's creation — called to use it wisely for the benefit of all, including future generations." },
        { icon: "👥", name: "The Universal Destination of Goods", desc: "The goods of the earth are meant for all. While private property is legitimate, ownership comes with social responsibility. No one can claim more than their fair share at others' expense (CCC 2402–2406)." },
        { icon: "♻️", name: "Ecological Virtue", desc: "Pope Francis in Laudato Si calls us to an 'ecological conversion' — changing our relationship with the earth from one of exploitation to care. This is a moral, not just political, issue." },
        { icon: "🏡", name: "Our Local Responsibility", desc: "Caring for creation begins locally — reducing waste, respecting natural beauty, supporting sustainable practices. These small acts express our gratitude to God for the gift of creation." }
      ]
    },

    secondary: "timeline",
    timeline: {
      title: "From Creation to Stewardship",
      instruction: "Tap two items to swap them into the correct order.",
      items: [
        { id: 1, text: "God creates the world and calls it 'very good'", order: 1 },
        { id: 2, text: "God entrusts creation to human beings to care for it", order: 2 },
        { id: 3, text: "Human sin damages relationships — with God, others, and nature", order: 3 },
        { id: 4, text: "Christ redeems all things and calls us to renewal", order: 4 },
        { id: 5, text: "We are called to ecological conversion and responsible stewardship", order: 5 }
      ]
    },

    quiz: {
      questions: [
        { q: "According to Genesis, humans are called to ___ creation.", opts: ["Ignore", "Exploit fully", "Work and take care of", "Own completely"], correct: 2 },
        { q: "Stewardship means ___.", opts: ["Owning what you use", "Responsible management of another's goods", "Spending money carefully", "Leading a group"], correct: 1 },
        { q: "The 'universal destination of goods' means ___.", opts: ["Everyone gets the same", "Earth's goods are meant for all", "Only Catholics get goods", "Private property is wrong"], correct: 1 },
        { q: "Pope Francis' environmental encyclical is called ___.", opts: ["Rerum Novarum", "Laudato Si", "Caritas in Veritate", "Gaudium et Spes"], correct: 1 },
        { q: "Ecological conversion begins with ___.", opts: ["Government action only", "Scientific research only", "A change in our own hearts and habits", "Moving to a farm"], correct: 2 }
      ]
    ,
    bonus: { q: "The virtue of ___ helps us give to God and neighbor what is owed.", opts: ["temperance", "prudence", "justice", "fortitude"], correct: 2, reward: "Virtue Hero!" }
    },

    prayer: {
      title: "Canticle of the Sun — St. Francis",
      lines: [
        { s: "L", t: "Praised be you, my Lord, through all your creatures." },
        { s: "A", t: "Especially through Brother Sun, who gives us the day and the light." },
        { s: "L", t: "Praised be you, Lord, through Sister Water, so useful and humble." },
        { s: "A", t: "Praised be you, Lord, through Sister Mother Earth, who sustains us." },
        { s: "L", t: "Lord, make us faithful stewards of your beautiful creation." },
        { s: "A", t: "May we care for the earth as a gift for all generations. Amen." }
      ]
    }
  },

  // ─────────────────────────────────────────────
  {
    week: 18,
    title: "Peacemaking and Nonviolence",
    pillar: "Morality",
    verse: "Blessed are the peacemakers, for they shall be called children of God. — Matthew 5:9",

    discover: {
      title: "Discover: The Catholic Vision of Peace",
      instruction: "Tap each card to understand what the Church teaches about peace and conflict.",
      items: [
        { icon: "☮️", name: "Shalom", desc: "The Hebrew word 'shalom' means more than absence of war — it means total well-being, harmony, and right relationships. The peace Christ gives is not like the world's peace (John 14:27)." },
        { icon: "🕊️", name: "Nonviolence", desc: "Jesus taught love of enemies and nonviolent resistance. While the Church acknowledges self-defense, it holds nonviolence as an ideal and calls Catholics to pursue peaceful solutions first (CCC 2304–2306)." },
        { icon: "⚖️", name: "Just War Theory", desc: "The Church permits armed defense only when strict conditions are met: the harm is lasting and serious, all peaceful means have been exhausted, there is reasonable chance of success, and the means used are proportional (CCC 2309)." },
        { icon: "🤝", name: "Reconciliation", desc: "Peacemaking requires the courage to reconcile — to forgive and restore broken relationships. Jesus commanded us to be reconciled with our brother before offering gifts at the altar (Matthew 5:24)." },
        { icon: "📢", name: "Advocacy", desc: "Catholics are called to advocate for peace — through prayer, dialogue, disarmament efforts, and political engagement. Peace is not passive — it requires active effort (CCC 2317)." }
      ]
    },

    secondary: "fillblank",
    fillblank: {
      title: "Peace and Justice — Fill the Blank!",
      instruction: "Complete each sentence about Catholic peacemaking.",
      sentences: [
        { text: "Jesus said: Blessed are the ___, for they shall be called children of God.", answer: "peacemakers", options: ["peacemakers", "warriors", "powerful", "winners"] },
        { text: "Shalom means total well-being and ___ relationships.", answer: "right", options: ["right", "perfect", "equal", "political"] },
        { text: "Just War theory requires that all ___ means have been exhausted.", answer: "peaceful", options: ["peaceful", "military", "legal", "economic"] },
        { text: "Peacemaking requires the courage to ___.", answer: "reconcile", options: ["reconcile", "fight back", "retreat", "ignore"] }
      ]
    },

    quiz: {
      questions: [
        { q: "What does 'Shalom' mean?", opts: ["Military victory", "Absence of enemies", "Total well-being and right relationships", "Religious ceremony"], correct: 2 },
        { q: "Just War theory requires that peaceful means have been ___.", opts: ["Ignored", "Tried last", "Exhausted first", "Voted on"], correct: 2 },
        { q: "Jesus commanded us to love our ___.", opts: ["Allies only", "Enemies", "Government", "Church leaders"], correct: 1 },
        { q: "Peacemaking requires the courage to ___.", opts: ["Fight harder", "Run away", "Reconcile and forgive", "Avoid conflict forever"], correct: 2 },
        { q: "What does Catholic peace advocacy include?", opts: ["Ignoring politics", "Prayer, dialogue, and disarmament efforts", "Supporting all wars", "Being uninvolved"], correct: 1 }
      ]
    ,
    bonus: { q: "The 'preferential option for the poor' means ___.", opts: ["Only poor people matter", "We must give special attention to those most in need", "The Church ignores the rich", "Only donate money"], correct: 1, reward: "Moral Champion!" }
    },

    prayer: {
      title: "Prayer of St. Francis for Peace",
      lines: [
        { s: "L", t: "Lord, make me an instrument of your peace." },
        { s: "A", t: "Where there is hatred, let me sow love. Where there is injury, pardon." },
        { s: "L", t: "Where there is doubt, faith. Where there is darkness, light." },
        { s: "A", t: "Where there is sadness, joy." },
        { s: "L", t: "O Divine Master, grant that I may not seek to be consoled, but to console." },
        { s: "A", t: "For it is in giving that we receive. It is in dying that we are born to eternal life. Amen." }
      ]
    }
  },

  // ─────────────────────────────────────────────
  {
    week: 19,
    title: "Truth, Honesty, and the Eighth Commandment",
    pillar: "Morality",
    verse: "You shall know the truth, and the truth shall set you free. — John 8:32",

    discover: {
      title: "Discover: Living in Truth",
      instruction: "Tap each card to understand what the Church teaches about honesty and truth.",
      items: [
        { icon: "✅", name: "The Eighth Commandment", desc: "You shall not bear false witness. This commandment governs our relationship with truth — in speech, in action, and in our inner life. We are called to be people of truth (CCC 2464–2470)." },
        { icon: "🗣️", name: "Lying and Its Harm", desc: "A lie is a false statement made with the intent to deceive. It harms the liar, the deceived, and the fabric of social trust. Every lie violates the dignity of the person spoken to (CCC 2482–2487)." },
        { icon: "🌟", name: "Truthfulness", desc: "Truthfulness means aligning our words, actions, and inner intentions. It is a virtue — the habit of honesty in all things. It requires courage to speak truth when it is costly (CCC 2505)." },
        { icon: "🔒", name: "Secrets and Confidentiality", desc: "We are not required to reveal all truth at all times. Secrets may be kept; some information must be protected. Discretion is a virtue, not dishonesty (CCC 2488–2492)." },
        { icon: "🖥️", name: "Truth in the Digital Age", desc: "Online communication demands the same honesty as face-to-face interaction. Spreading rumors, creating false profiles, or sharing misinformation online violates the eighth commandment." }
      ]
    },

    secondary: "sort",
    sort: {
      title: "Honest or Dishonest?",
      instruction: "Tap each action, then sort it: is it honest or dishonest?",
      items: [
        { name: "Admitting a mistake you made", icon: "✅", group: "Honest" },
        { name: "Sharing a false rumor online", icon: "❌", group: "Dishonest" },
        { name: "Keeping a friend's confidence", icon: "🔒", group: "Honest" },
        { name: "Claiming credit for someone else's work", icon: "📋", group: "Dishonest" },
        { name: "Telling the truth when it costs you", icon: "💪", group: "Honest" },
        { name: "Exaggerating to make yourself look better", icon: "📈", group: "Dishonest" },
        { name: "Giving an honest answer even if awkward", icon: "🗣️", group: "Honest" }
      ],
      groups: ["Honest", "Dishonest"],
      colors: { "Honest": "#6DB87B", "Dishonest": "#C0392B" },
      icons:  { "Honest": "✅", "Dishonest": "❌" }
    },

    quiz: {
      questions: [
        { q: "What does the Eighth Commandment govern?", opts: ["Money", "Truth in speech and action", "Worship", "Relationships"], correct: 1 },
        { q: "A lie is a false statement made with intent to ___.", opts: ["Entertain", "Deceive", "Protect", "Simplify"], correct: 1 },
        { q: "Keeping a secret is ___ dishonest.", opts: ["Always", "Never", "Not necessarily", "Usually"], correct: 2 },
        { q: "Truthfulness requires ___ to speak the truth when costly.", opts: ["Nothing", "Permission", "Courage", "Money"], correct: 2 },
        { q: "Online communication requires the same honesty as ___.", opts: ["Public speeches only", "Legal documents only", "Face-to-face interaction", "Official statements only"], correct: 2 }
      ]
    ,
    bonus: { q: "Subsidiarity means problems should be solved at the ___ level possible.", opts: ["highest", "most local", "national", "international"], correct: 1, reward: "Goodness Guide!" }
    },

    prayer: {
      title: "Prayer for Honesty and Integrity",
      lines: [
        { s: "L", t: "Lord, you are the Way, the Truth, and the Life." },
        { s: "A", t: "Help us to be people of truth in all we say and do." },
        { s: "L", t: "Give us the courage to speak honestly, even when it is hard." },
        { s: "A", t: "Protect us from the temptation to deceive or mislead." },
        { s: "L", t: "May our words always build up rather than tear down." },
        { s: "A", t: "Lord, let your truth set us free. Amen." }
      ]
    }
  },

  // ─────────────────────────────────────────────
  //  WEEK 20: UNIT 4 REVIEW
  // ─────────────────────────────────────────────
  {
    week: 20,
    title: "Unit 4 Review: Justice and Moral Life",
    pillar: "Review",
    ccc: "1928-1948",
    verse: "Act justly, love tenderly, and walk humbly with your God. — Micah 6:8",

    discover: {
      title: "Review: Justice, Creation, Peace, and Truth",
      instruction: "Tap each card to review the key themes of Unit 4.",
      items: [
        { icon: "💛", name: "Option for the Poor", desc: "Jesus showed preferential love for the poor. We are called to works of mercy — both corporal and spiritual — and to change unjust structures that keep people in poverty." },
        { icon: "🌍", name: "Stewardship", desc: "We are stewards of God's creation — called to care for the earth wisely and sustainably for all generations. Ecological conversion begins in the heart." },
        { icon: "☮️", name: "Peacemaking", desc: "Blessed are the peacemakers. We are called to shalom — total well-being and right relationships. The Church teaches nonviolence and reconciliation as the path to lasting peace." },
        { icon: "✅", name: "Truth and Honesty", desc: "The Eighth Commandment calls us to be people of truth — in speech, action, and online life. Lying harms trust, dignity, and community." }
      ]
    },

    secondary: "timeline",
    timeline: {
      title: "The Path from Injustice to Justice",
      instruction: "Tap two items to swap them into the correct order.",
      items: [
        { id: 1, text: "See — recognize injustice and the needs around you", order: 1 },
        { id: 2, text: "Judge — evaluate through the lens of Catholic social teaching", order: 2 },
        { id: 3, text: "Act — take concrete action to address injustice", order: 3 },
        { id: 4, text: "Reflect — review what happened and what you learned", order: 4 },
        { id: 5, text: "Celebrate — give thanks and renew your commitment to justice", order: 5 }
      ]
    },

    quiz: {
      questions: [
        { q: "Which works of mercy feed the hungry and clothe the naked?", opts: ["Spiritual", "Corporal", "Sacramental", "Optional"], correct: 1 },
        { q: "Stewardship means treating creation as ___.", opts: ["Our own property", "Something to exploit", "A gift to care for", "Unimportant"], correct: 2 },
        { q: "Shalom means ___.", opts: ["Military power", "Total well-being", "Absence of crime", "National security"], correct: 1 },
        { q: "A lie harms the liar, the deceived, and ___.", opts: ["God only", "Social trust", "The economy", "Nothing else"], correct: 1 },
        { q: "The prophet Micah called us to act justly, love tenderly, and walk ___ with God.", opts: ["boldly", "proudly", "humbly", "loudly"], correct: 2 }
      ]
    ,
    bonus: { q: "Apostolic succession means that ___.", opts: ["We read the Apostles' letters", "Bishops trace their authority back to the Apostles", "We memorize the Apostles' names", "Only apostles can be saints"], correct: 1, reward: "Quiz Master!" }
    },

    prayer: {
      title: "Prayer for Justice in Our World",
      lines: [
        { s: "L", t: "Lord of justice, you call us to a world where all can flourish." },
        { s: "A", t: "Open our hearts to the poor, the vulnerable, and the forgotten." },
        { s: "L", t: "Give us courage to speak truth and challenge injustice." },
        { s: "A", t: "Help us to care for your creation with love and responsibility." },
        { s: "L", t: "Make us instruments of your peace — in our homes, our school, our world." },
        { s: "A", t: "Act justly, love tenderly, walk humbly — Lord, help us live it. Amen." }
      ]
    }
  },

  // ─────────────────────────────────────────────
  //  UNIT 5: PRAYER AND THE SPIRITUAL LIFE — Weeks 21–24
  // ─────────────────────────────────────────────
  {
    week: 21,
    title: "Lectio Divina: Praying with Scripture",
    pillar: "Prayer",
    verse: "Let the word of Christ dwell in you richly. — Colossians 3:16",

    discover: {
      title: "Discover: Lectio Divina",
      instruction: "Tap each card to learn this ancient way of praying with Scripture.",
      items: [
        { icon: "📖", name: "What Is Lectio Divina?", desc: "Lectio Divina means 'sacred reading' — an ancient form of prayer where we read Scripture slowly and prayerfully, listening for God's personal word to us. It is a conversation with the living God (CCC 2708)." },
        { icon: "👁️", name: "Lectio — Read", desc: "Read the Scripture passage slowly, several times. Do not rush. Allow the words to sink in. Notice any word or phrase that stands out or draws you." },
        { icon: "🧠", name: "Meditatio — Reflect", desc: "Reflect on the word or phrase that caught your attention. Chew on it mentally. Let it interact with your own life, questions, and experiences. What is God saying to you through this text?" },
        { icon: "🙏", name: "Oratio — Respond", desc: "Speak to God in your own words — thank Him, ask Him, confess to Him. Let the Scripture inspire your prayer. This is your response to what God has said." },
        { icon: "🌿", name: "Contemplatio — Rest", desc: "Simply rest in God's presence. No words are needed. Let God love you. This silent phase — contemplation — is the culmination of the prayer and a taste of heaven." }
      ]
    },

    secondary: "timeline",
    timeline: {
      title: "The Four Steps of Lectio Divina",
      instruction: "Tap two items to swap them into the correct order.",
      items: [
        { id: 1, text: "Lectio — Read the Scripture slowly and attentively", order: 1 },
        { id: 2, text: "Meditatio — Reflect on what stands out to you", order: 2 },
        { id: 3, text: "Oratio — Speak to God in response to His word", order: 3 },
        { id: 4, text: "Contemplatio — Rest silently in God's presence", order: 4 },
        { id: 5, text: "Actio — Go forth and live what you received", order: 5 }
      ]
    },

    quiz: {
      questions: [
        { q: "What does 'Lectio Divina' mean?", opts: ["Divine command", "Sacred reading", "Holy communion", "Ancient tradition"], correct: 1 },
        { q: "In Lectio Divina, Oratio means ___.", opts: ["Reading Scripture", "Reflecting on the text", "Speaking to God in prayer", "Resting in silence"], correct: 2 },
        { q: "Which step involves silent resting in God's presence?", opts: ["Lectio", "Meditatio", "Oratio", "Contemplatio"], correct: 3 },
        { q: "Lectio Divina is a conversation with ___.", opts: ["Our feelings", "The living God", "Church authorities", "Our community"], correct: 1 },
        { q: "During Meditatio, we ___ the Scripture passage.", opts: ["Memorize", "Speed-read", "Reflect on and chew on", "Ignore"], correct: 2 }
      ]
    ,
    bonus: { q: "Liturgy means the 'public work' or official ___ of the Church.", opts: ["teaching", "charity", "worship", "government"], correct: 2, reward: "Prayer Warrior!" }
    },

    prayer: {
      title: "Opening Prayer for Lectio Divina",
      lines: [
        { s: "L", t: "Lord, open our hearts to receive your living Word." },
        { s: "A", t: "Speak, Lord — your servants are listening." },
        { s: "L", t: "As we read your Scripture, let it read us — search us and know us." },
        { s: "A", t: "Let your Word be a lamp for our feet and a light on our path." },
        { s: "L", t: "Transform us by what we hear today." },
        { s: "A", t: "May we carry your Word in our hearts all this day. Amen." }
      ]
    }
  },

  // ─────────────────────────────────────────────
  {
    week: 22,
    title: "The Liturgy of the Hours: Praying with the Church",
    pillar: "Prayer",
    verse: "Pray without ceasing. — 1 Thessalonians 5:17",

    discover: {
      title: "Discover: The Church's Daily Prayer",
      instruction: "Tap each card to learn about the Liturgy of the Hours.",
      items: [
        { icon: "⏰", name: "What Is the Liturgy of the Hours?", desc: "The Liturgy of the Hours (also called the Divine Office) is the Church's official daily prayer. Priests, religious, and many laypeople pray it to sanctify every part of the day (CCC 1174–1178)." },
        { icon: "🌅", name: "Morning Prayer (Lauds)", desc: "Morning Prayer — Lauds — is prayed at dawn, offering the new day to God. It includes psalms, a Scripture reading, a canticle, and intercessions. It begins the day in God's presence." },
        { icon: "🌆", name: "Evening Prayer (Vespers)", desc: "Evening Prayer — Vespers — is prayed at sunset. It reviews the day, gives thanks, and intercedes for the world. The Magnificat of Mary is sung at Evening Prayer every day." },
        { icon: "📿", name: "The Psalms", desc: "The Psalms are at the heart of the Liturgy of the Hours. These 150 prayers cover every human emotion — joy, sorrow, praise, lament, trust, and longing. Jesus himself prayed the Psalms." },
        { icon: "🌍", name: "Praying with the Whole Church", desc: "When we pray the Liturgy of the Hours, we join priests, nuns, monks, and laypeople around the world in unceasing prayer. We are never praying alone — we pray as the Body of Christ." }
      ]
    },

    secondary: "fillblank",
    fillblank: {
      title: "The Liturgy of the Hours — Fill the Blank!",
      instruction: "Complete each sentence about the Church's daily prayer.",
      sentences: [
        { text: "The Liturgy of the Hours is also called the Divine ___.", answer: "Office", options: ["Office", "Mass", "Service", "Rosary"] },
        { text: "Morning Prayer is called ___.", answer: "Lauds", options: ["Lauds", "Vespers", "Compline", "Matins"] },
        { text: "The ___ of Mary is sung each evening at Vespers.", answer: "Magnificat", options: ["Magnificat", "Angelus", "Gloria", "Benedictus"] },
        { text: "The ___ are the heart of the Liturgy of the Hours.", answer: "Psalms", options: ["Psalms", "Gospels", "Epistles", "Canticles"] }
      ]
    },

    quiz: {
      questions: [
        { q: "Another name for the Liturgy of the Hours is ___.", opts: ["The Rosary", "The Divine Office", "The Mass", "The Angelus"], correct: 1 },
        { q: "How many Psalms are there?", opts: ["50", "100", "150", "200"], correct: 2 },
        { q: "Which prayer is prayed at sunrise?", opts: ["Vespers", "Compline", "Lauds", "None"], correct: 2 },
        { q: "The Magnificat is the canticle of ___.", opts: ["Peter", "John", "Paul", "Mary"], correct: 3 },
        { q: "When we pray the Liturgy of the Hours, we pray with ___.", opts: ["Only priests", "Only monks", "The whole Body of Christ", "Only those in our parish"], correct: 2 }
      ]
    ,
    bonus: { q: "The Liturgy of the Hours sanctifies the ___.", opts: ["altar only", "priest only", "whole day", "church building"], correct: 2, reward: "Prayer Pro!" }
    },

    prayer: {
      title: "Evening Prayer — Magnificat",
      lines: [
        { s: "L", t: "Let us close this day by joining Mary's song of praise." },
        { s: "A", t: "My soul magnifies the Lord, and my spirit rejoices in God my Savior." },
        { s: "L", t: "For He has regarded the humility of His servant, and done great things for me." },
        { s: "A", t: "Holy is His name, and His mercy is on those who fear Him." },
        { s: "L", t: "He has filled the hungry with good things, and sent the rich away empty." },
        { s: "A", t: "Glory to the Father, and to the Son, and to the Holy Spirit. Amen." }
      ]
    }
  },

  // ─────────────────────────────────────────────
  {
    week: 23,
    title: "Mystical Prayer: Saints of Deep Prayer",
    pillar: "Prayer",
    verse: "I call to you from the ends of the earth; lead me to the rock that is higher than I. — Psalm 61:2",

    discover: {
      title: "Discover: Great Mystics of the Church",
      instruction: "Tap each card to meet saints who teach us about the depths of prayer.",
      items: [
        { icon: "✝️", name: "St. Teresa of Ávila", desc: "St. Teresa of Ávila is a Doctor of the Church who described prayer as an interior castle — a journey into the soul where God dwells. She taught that prayer is friendship with the One who loves us (1515–1582)." },
        { icon: "🌹", name: "St. John of the Cross", desc: "St. John of the Cross described the 'dark night of the soul' — a purification where God removes spiritual consolations to deepen our faith. He taught that God is found in darkness as much as in light." },
        { icon: "🌟", name: "St. Thérèse of Lisieux", desc: "St. Thérèse's 'Little Way' teaches that prayer is not complicated — it is simply lifting your heart to God in the ordinariness of daily life. Small acts done with great love are deeply pleasing to God." },
        { icon: "🙏", name: "Bl. Carlo Acutis", desc: "Blessed Carlo Acutis (1991–2006) used his love of technology to spread devotion to the Eucharist. He said: 'The Eucharist is my highway to heaven.' His prayer life centered on daily Mass and Adoration." },
        { icon: "🌿", name: "Contemplative Prayer", desc: "Contemplative prayer is a wordless communion with God — resting in His presence and loving Him with undivided attention. It is the culmination of Christian prayer and a foretaste of eternal life (CCC 2709–2719)." }
      ]
    },

    secondary: "sort",
    sort: {
      title: "Match the Saint to Their Prayer Teaching!",
      instruction: "Tap each description, then tap the saint it describes.",
      items: [
        { name: "The Interior Castle of prayer", icon: "🏰", group: "St. Teresa of Ávila" },
        { name: "The Dark Night of the Soul", icon: "🌙", group: "St. John of the Cross" },
        { name: "The Little Way of small acts", icon: "🌹", group: "St. Thérèse of Lisieux" },
        { name: "The Eucharist as highway to heaven", icon: "💻", group: "Bl. Carlo Acutis" },
        { name: "Prayer as interior friendship with God", icon: "❤️", group: "St. Teresa of Ávila" },
        { name: "Finding God in darkness and purification", icon: "✝️", group: "St. John of the Cross" },
        { name: "Holiness in ordinary daily life", icon: "🌟", group: "St. Thérèse of Lisieux" }
      ],
      groups: ["St. Teresa of Ávila", "St. John of the Cross", "St. Thérèse of Lisieux", "Bl. Carlo Acutis"],
      colors: {
        "St. Teresa of Ávila": "#4A90D9",
        "St. John of the Cross": "#2C3E50",
        "St. Thérèse of Lisieux": "#D4A843",
        "Bl. Carlo Acutis": "#6DB87B"
      },
      icons: {
        "St. Teresa of Ávila": "🏰",
        "St. John of the Cross": "🌙",
        "St. Thérèse of Lisieux": "🌹",
        "Bl. Carlo Acutis": "💻"
      }
    },

    quiz: {
      questions: [
        { q: "St. Teresa of Ávila described prayer as an ___.", opts: ["Empty room", "Interior Castle", "Open field", "Sacred mountain"], correct: 1 },
        { q: "St. John of the Cross described the ___ of the soul.", opts: ["Bright Morning", "Dark Night", "Long Journey", "Hidden Room"], correct: 1 },
        { q: "St. Thérèse's 'Little Way' is about ___.", opts: ["Great miracles", "Long fasts", "Small acts done with great love", "Difficult penances"], correct: 2 },
        { q: "Bl. Carlo Acutis called the Eucharist his ___.", opts: ["Favorite prayer", "Highway to heaven", "Source of wisdom", "Greatest challenge"], correct: 1 },
        { q: "Contemplative prayer is a wordless ___ with God.", opts: ["Argument", "Communion", "Request", "Debate"], correct: 1 }
      ]
    ,
    bonus: { q: "Contemplative prayer is ___.", opts: ["Reading the Bible aloud", "Resting silently in God's presence", "Saying many words", "Group discussion"], correct: 1, reward: "Spiritual Star!" }
    },

    prayer: {
      title: "Prayer of St. Teresa of Ávila",
      lines: [
        { s: "L", t: "Let nothing disturb you. Let nothing frighten you." },
        { s: "A", t: "All things pass; God does not change." },
        { s: "L", t: "Patience achieves everything. Whoever has God lacks nothing." },
        { s: "A", t: "God alone suffices." },
        { s: "L", t: "Lord, teach us to pray deeply, from the heart." },
        { s: "A", t: "Draw us into the interior castle of prayer with you. Amen." }
      ]
    }
  },

  // ─────────────────────────────────────────────
  {
    week: 24,
    title: "Discernment: Hearing God's Call",
    pillar: "Prayer",
    verse: "Your word is a lamp for my feet and a light for my path. — Psalm 119:105",

    discover: {
      title: "Discover: The Art of Discernment",
      instruction: "Tap each card to learn how to hear God's voice in your life.",
      items: [
        { icon: "🧭", name: "What Is Discernment?", desc: "Discernment is the prayerful process of discovering God's will for your life. It involves prayer, reflection, consultation, and paying attention to the movements of your heart (CCC 1788)." },
        { icon: "🔥", name: "Consolation and Desolation", desc: "St. Ignatius of Loyola taught that consolation — peace, joy, drawing closer to God — is often a sign of moving toward God's will. Desolation — anxiety, confusion, withdrawal from God — may signal the opposite." },
        { icon: "👂", name: "Listening in Prayer", desc: "God speaks in many ways: through Scripture, the Church, wise counsel, the circumstances of life, and the deep desires of our hearts. Discernment requires the habit of listening prayer." },
        { icon: "🤲", name: "Spiritual Direction", desc: "A spiritual director is a trusted, prayerful person who helps us discern God's movement in our lives. The Church strongly recommends spiritual direction for those seeking to grow in holiness (CCC 2690)." },
        { icon: "🌱", name: "Discerning Your Vocation", desc: "Every person has a vocation — a call from God to love and serve in a specific way. Discerning this call is one of the most important journeys of life. Prayer, community, and time are essential." }
      ]
    },

    secondary: "fillblank",
    fillblank: {
      title: "Discernment — Fill the Blank!",
      instruction: "Complete each sentence about hearing and following God's call.",
      sentences: [
        { text: "Discernment is the process of discovering God's ___ for your life.", answer: "will", options: ["will", "punishment", "preference", "opinion"] },
        { text: "St. Ignatius taught about ___ and desolation as signs of spiritual movement.", answer: "consolation", options: ["consolation", "emotion", "happiness", "success"] },
        { text: "A ___ director helps us discern God's movement in our lives.", answer: "spiritual", options: ["spiritual", "school", "family", "career"] },
        { text: "Every person has a ___ — a specific call from God to love and serve.", answer: "vocation", options: ["vocation", "job", "option", "talent"] }
      ]
    },

    quiz: {
      questions: [
        { q: "Discernment is the process of discovering ___.", opts: ["A career", "God's will for your life", "A friend's advice", "Your own preferences"], correct: 1 },
        { q: "Who developed rules for discernment of spirits?", opts: ["St. Francis", "St. Teresa", "St. Ignatius of Loyola", "St. Thomas Aquinas"], correct: 2 },
        { q: "Consolation often feels like ___.", opts: ["Confusion and anxiety", "Peace, joy, and drawing closer to God", "Sadness and withdrawal", "Boredom and emptiness"], correct: 1 },
        { q: "What is a vocation?", opts: ["A job you choose", "A God-given call to love and serve", "A hobby you enjoy", "A talent you were born with"], correct: 1 },
        { q: "Spiritual direction is recommended by ___.", opts: ["Only religious orders", "The Church for those seeking holiness", "Modern psychology only", "Secular counselors"], correct: 1 }
      ]
    ,
    bonus: { q: "The three expressions of prayer are vocal, meditative, and ___.", opts: ["physical", "contemplative", "written", "sung"], correct: 1, reward: "Prayer Champion!" }
    },

    prayer: {
      title: "Suscipe — Prayer of Surrender",
      lines: [
        { s: "L", t: "Lord, teach us to give and not count the cost." },
        { s: "A", t: "Take, Lord, and receive all my liberty, my memory, my understanding." },
        { s: "L", t: "Take my entire will — all I have and possess." },
        { s: "A", t: "You, Lord, gave it all to me; I now return it all to you." },
        { s: "L", t: "Dispose of it wholly according to your will." },
        { s: "A", t: "Give me only your love and your grace — that is enough for me. Amen." }
      ]
    }
  },

  // ─────────────────────────────────────────────
  //  WEEK 25: UNIT 5 REVIEW
  // ─────────────────────────────────────────────
  {
    week: 25,
    title: "Unit 5 Review: Prayer and the Spiritual Life",
    pillar: "Review",
    ccc: "2558-2758",
    verse: "Seek the Lord while he may be found; call upon him while he is near. — Isaiah 55:6",

    discover: {
      title: "Review: Prayer, Mysticism, and Discernment",
      instruction: "Tap each card to review the key themes of Unit 5.",
      items: [
        { icon: "📖", name: "Lectio Divina", desc: "Sacred reading — Lectio (read), Meditatio (reflect), Oratio (respond), Contemplatio (rest). An ancient practice of praying with Scripture that transforms us from within." },
        { icon: "⏰", name: "Liturgy of the Hours", desc: "The Church's official daily prayer — sanctifying every part of the day through psalms, Scripture, and intercession. We never pray alone when we join this worldwide prayer." },
        { icon: "🌟", name: "Mystical Saints", desc: "St. Teresa of Ávila, St. John of the Cross, St. Thérèse, and Bl. Carlo Acutis each show us unique paths of deep prayer. All unite us with God who is the goal of all prayer." },
        { icon: "🧭", name: "Discernment", desc: "The prayerful process of hearing God's will. Using consolation and desolation, Scripture, wise counsel, and spiritual direction — we can learn to hear God's voice in our lives." }
      ]
    },

    secondary: "sort",
    sort: {
      title: "Match the Prayer Practice!",
      instruction: "Tap each description, then tap the prayer practice it describes.",
      items: [
        { name: "Praying with Scripture in four steps", icon: "📖", group: "Lectio Divina" },
        { name: "The Magnificat at evening prayer", icon: "🌆", group: "Liturgy of Hours" },
        { name: "The Little Way of small acts", icon: "🌹", group: "Mystical Saints" },
        { name: "Consolation and desolation as guides", icon: "🧭", group: "Discernment" },
        { name: "Sanctifying every part of the day", icon: "⏰", group: "Liturgy of Hours" },
        { name: "Wordless resting in God's presence", icon: "🌿", group: "Lectio Divina" },
        { name: "Finding God's specific call for your life", icon: "🌱", group: "Discernment" }
      ],
      groups: ["Lectio Divina", "Liturgy of Hours", "Mystical Saints", "Discernment"],
      colors: { "Lectio Divina": "#4A90D9", "Liturgy of Hours": "#D4A843", "Mystical Saints": "#9B6DB8", "Discernment": "#6DB87B" },
      icons:  { "Lectio Divina": "📖", "Liturgy of Hours": "⏰", "Mystical Saints": "🌟", "Discernment": "🧭" }
    },

    quiz: {
      questions: [
        { q: "What does 'Lectio Divina' mean?", opts: ["Daily Mass", "Sacred reading", "Evening prayer", "Divine service"], correct: 1 },
        { q: "Which step of Lectio Divina involves silent rest in God?", opts: ["Lectio", "Meditatio", "Oratio", "Contemplatio"], correct: 3 },
        { q: "Morning Prayer in the Liturgy of the Hours is called ___.", opts: ["Vespers", "Compline", "Lauds", "Matins"], correct: 2 },
        { q: "St. Teresa of Ávila described prayer as an ___.", opts: ["Open field", "Interior Castle", "Ancient ritual", "Empty room"], correct: 1 },
        { q: "Discernment involves paying attention to ___ in our hearts.", opts: ["Only emotions", "Consolation and desolation", "Our own plans", "Other people's opinions"], correct: 1 }
      ]
    ,
    bonus: { q: "The Church is called the 'Mystical Body of ___.'", opts: ["Peter", "Mary", "Christ", "The Saints"], correct: 2, reward: "All-Star Learner!" }
    },

    prayer: {
      title: "Prayer for a Life of Prayer",
      lines: [
        { s: "L", t: "Lord, you invite us to seek your face — and your face we seek." },
        { s: "A", t: "Teach us to read your Word with hungry hearts." },
        { s: "L", t: "Teach us to sanctify every part of our day with prayer." },
        { s: "A", t: "Teach us the Little Way — great love in small moments." },
        { s: "L", t: "Help us to discern your will and follow it with courage." },
        { s: "A", t: "Lord, draw us ever deeper into friendship with you. Amen." }
      ]
    }
  },

  // ─────────────────────────────────────────────
  //  UNIT 6: DISCIPLESHIP AND MISSION — Weeks 26–29
  // ─────────────────────────────────────────────
  {
    week: 26,
    title: "Called to Discipleship: Following Jesus",
    pillar: "Creed",
    verse: "Come, follow me. — Matthew 4:19",

    discover: {
      title: "Discover: What Is Discipleship?",
      instruction: "Tap each card to understand what it means to follow Jesus as a disciple.",
      items: [
        { icon: "👣", name: "What Is a Disciple?", desc: "A disciple is a learner and follower. The disciples of Jesus were not just admirers — they changed their lives, left their old ways behind, and committed to learning from and imitating Christ (CCC 1816)." },
        { icon: "✝️", name: "The Cost of Discipleship", desc: "Jesus was clear that following Him involves sacrifice: 'If anyone wishes to come after me, let him deny himself, take up his cross, and follow me' (Matthew 16:24). Discipleship is not comfortable — but it leads to life." },
        { icon: "🌍", name: "The Great Commission", desc: "Before His Ascension, Jesus commanded: 'Go and make disciples of all nations.' Every baptized Catholic receives this commission. We are all called to evangelize — to share Christ with the world (Matthew 28:19)." },
        { icon: "💡", name: "Discipleship in Ordinary Life", desc: "Most disciples live out their faith in ordinary life — as students, workers, parents, and friends. Every ordinary act done with love for God and neighbor is discipleship lived out." },
        { icon: "🌟", name: "Witnesses of the Resurrection", desc: "We are called to be witnesses — people whose lives testify to the Resurrection of Christ. When our joy, hope, and love are unexplainable by worldly standards, we point to Jesus (CCC 2472)." }
      ]
    },

    secondary: "sort",
    sort: {
      title: "Disciple or Not?",
      instruction: "Tap each action, then sort it: does it reflect true discipleship?",
      items: [
        { name: "Forgiving someone who hurt you", icon: "🕊️", group: "Discipleship" },
        { name: "Sharing your faith when asked", icon: "📢", group: "Discipleship" },
        { name: "Living only for comfort and pleasure", icon: "😴", group: "Not Discipleship" },
        { name: "Taking up your cross daily", icon: "✝️", group: "Discipleship" },
        { name: "Ignoring the needs of others", icon: "🚫", group: "Not Discipleship" },
        { name: "Serving those who cannot repay you", icon: "🤝", group: "Discipleship" },
        { name: "Putting yourself first in all things", icon: "❌", group: "Not Discipleship" }
      ],
      groups: ["Discipleship", "Not Discipleship"],
      colors: { "Discipleship": "#6DB87B", "Not Discipleship": "#C0392B" },
      icons:  { "Discipleship": "✝️", "Not Discipleship": "❌" }
    },

    quiz: {
      questions: [
        { q: "A disciple is a ___ and follower of Jesus.", opts: ["Admirer only", "Learner", "Critic", "Observer"], correct: 1 },
        { q: "Jesus said to take up your ___ and follow Him.", opts: ["Wallet", "Comfort", "Cross", "Achievement"], correct: 2 },
        { q: "The Great Commission calls us to make disciples of ___.", opts: ["Our friends only", "Catholics only", "All nations", "Our parish"], correct: 2 },
        { q: "We witness to the Resurrection through our ___.", opts: ["Arguments", "Comfort", "Joy, hope, and love", "Achievements"], correct: 2 },
        { q: "Discipleship is primarily lived out in ___.", opts: ["Only church settings", "Ordinary daily life", "Monastic life only", "Sacred spaces only"], correct: 1 }
      ]
    ,
    bonus: { q: "The Church is called the 'Mystical Body of ___.'", opts: ["Peter", "Mary", "Christ", "The Saints"], correct: 2, reward: "Faith Explorer!" }
    },

    prayer: {
      title: "Prayer of the Disciple",
      lines: [
        { s: "L", t: "Lord Jesus, you called your disciples by name and changed their lives." },
        { s: "A", t: "Call us by name and draw us close to you." },
        { s: "L", t: "Help us to deny ourselves, take up our cross, and follow you." },
        { s: "A", t: "May we not be ashamed of you before our peers and classmates." },
        { s: "L", t: "Give us the courage to share your love wherever we go." },
        { s: "A", t: "Here we are, Lord — we want to follow you. Amen." }
      ]
    }
  },

  // ─────────────────────────────────────────────
  {
    week: 27,
    title: "Evangelization: Sharing the Faith",
    pillar: "Creed",
    verse: "Always be ready to give an explanation to anyone who asks you for a reason for your hope. — 1 Peter 3:15",

    discover: {
      title: "Discover: The Call to Evangelize",
      instruction: "Tap each card to learn how Catholics share their faith.",
      items: [
        { icon: "📢", name: "What Is Evangelization?", desc: "Evangelization is sharing the Good News of Jesus Christ with others. It is not just about words — it is about witnessing through your life. The first evangelization is always the witness of a transformed life (CCC 905)." },
        { icon: "🌟", name: "New Evangelization", desc: "The 'New Evangelization' is a call from recent popes to re-propose the faith to people who were once Christian but have drifted away. It requires creativity, passion, and authenticity." },
        { icon: "💬", name: "Dialogue and Witness", desc: "Good evangelization involves listening, not just speaking. It requires understanding where people are coming from, building real relationships, and letting the Holy Spirit work through us (CCC 856)." },
        { icon: "🌍", name: "Missionary Activity", desc: "The Church has a missionary dimension — it is sent to the whole world. Missionaries proclaim Christ where He has not yet been heard. Every Catholic, through Baptism and Confirmation, shares this mission (CCC 849)." },
        { icon: "🏡", name: "Evangelizing by Living", desc: "The most powerful evangelization is the witness of a life transformed by Christ — a life marked by joy, service, forgiveness, and love. People are attracted to the beauty of holiness before arguments convince them." }
      ]
    },

    secondary: "fillblank",
    fillblank: {
      title: "Evangelization — Fill the Blank!",
      instruction: "Complete each sentence about sharing the faith.",
      sentences: [
        { text: "Evangelization begins with the witness of a ___ life.", answer: "transformed", options: ["transformed", "perfect", "busy", "ordinary"] },
        { text: "Good evangelization involves ___ as much as speaking.", answer: "listening", options: ["listening", "arguing", "debating", "correcting"] },
        { text: "Every Catholic shares in the Church's ___ mission through Baptism.", answer: "missionary", options: ["missionary", "optional", "priestly", "silent"] },
        { text: "People are attracted to the ___ of holiness before arguments.", answer: "beauty", options: ["beauty", "logic", "authority", "complexity"] }
      ]
    },

    quiz: {
      questions: [
        { q: "What is evangelization?", opts: ["Joining a religious order", "Sharing the Good News of Jesus with others", "Attending Mass daily", "Reading the Bible alone"], correct: 1 },
        { q: "The 'New Evangelization' is aimed especially at ___.", opts: ["Non-Christians", "People who have drifted from the faith", "Other religions", "Children only"], correct: 1 },
        { q: "Good evangelization involves ___ and witnessing.", opts: ["Arguing", "Demanding", "Listening", "Ignoring"], correct: 2 },
        { q: "The most powerful evangelization is ___.", opts: ["Long speeches", "Social media posts", "The witness of a transformed life", "Academic arguments"], correct: 2 },
        { q: "Every Catholic shares in the missionary mission through ___.", opts: ["The Pope's invitation", "Personal choice only", "Baptism and Confirmation", "Ordination"], correct: 2 }
      ]
    ,
    bonus: { q: "The Church teaches with Christ's authority through the ___.", opts: ["media", "Magisterium", "monarchy", "marketplace"], correct: 1, reward: "Faith Champion!" }
    },

    prayer: {
      title: "Prayer for the New Evangelization",
      lines: [
        { s: "L", t: "Lord, fill us with the fire of your Holy Spirit." },
        { s: "A", t: "Make us bold witnesses to your love and your resurrection." },
        { s: "L", t: "Give us words to speak and lives that testify to your truth." },
        { s: "A", t: "Help us to listen deeply and love genuinely." },
        { s: "L", t: "Send us out as your missionaries into our homes, schools, and communities." },
        { s: "A", t: "May the world see you in us. Amen." }
      ]
    }
  },

  // ─────────────────────────────────────────────
  {
    week: 28,
    title: "Living the Beatitudes as a Teenager",
    pillar: "Morality",
    ccc: "1716-1729",
    verse: "Blessed are the pure in heart, for they shall see God. — Matthew 5:8",

    discover: {
      title: "Discover: The Beatitudes for Teen Life",
      instruction: "Tap each card to apply the Beatitudes to your life right now.",
      items: [
        { icon: "🙏", name: "Poor in Spirit", desc: "Being 'poor in spirit' means not relying on our own pride, popularity, or possessions for identity. It means knowing we need God — especially when peer culture says self-sufficiency is strength." },
        { icon: "😢", name: "Those Who Mourn", desc: "Mourning over sin, injustice, and suffering is a sign of a tender heart. It moves us to action — to comfort others, seek reconciliation, and refuse to be numb to the pain of the world." },
        { icon: "🌿", name: "The Meek", desc: "Meekness is not weakness — it is strength under control. In a culture that admires dominance and aggression, meekness means treating everyone with gentleness, including people you disagree with." },
        { icon: "⚖️", name: "Hunger for Justice", desc: "Hunger and thirst for righteousness means caring deeply about justice, truth, and goodness — and being unsatisfied with moral mediocrity. This drives service, advocacy, and holy living." },
        { icon: "❤️", name: "Merciful, Pure, and Peacemaking", desc: "Mercy forgives; purity focuses the heart on God; peacemaking repairs broken relationships. In a world of grudges, distraction, and conflict, these Beatitudes are countercultural acts of discipleship." }
      ]
    },

    secondary: "sort",
    sort: {
      title: "Which Beatitude Fits the Situation?",
      instruction: "Tap each situation, then tap the Beatitude that applies.",
      items: [
        { name: "Forgiving a friend who betrayed you", icon: "🕊️", group: "Merciful" },
        { name: "Standing up for someone being bullied", icon: "⚖️", group: "Hunger for Justice" },
        { name: "Admitting you need God's help", icon: "🙏", group: "Poor in Spirit" },
        { name: "Speaking calmly instead of lashing out", icon: "🌿", group: "Meek" },
        { name: "Helping two arguing friends reconcile", icon: "☮️", group: "Peacemakers" },
        { name: "Feeling sad about injustice in the world", icon: "😢", group: "Those Who Mourn" },
        { name: "Choosing purity over fitting in", icon: "❤️", group: "Pure in Heart" }
      ],
      groups: ["Poor in Spirit", "Those Who Mourn", "Meek", "Hunger for Justice", "Merciful", "Pure in Heart", "Peacemakers"],
      colors: {
        "Poor in Spirit": "#4A90D9", "Those Who Mourn": "#2C3E50",
        "Meek": "#6DB87B", "Hunger for Justice": "#D4A843",
        "Merciful": "#9B6DB8", "Pure in Heart": "#C0392B", "Peacemakers": "#27AE60"
      },
      icons: {
        "Poor in Spirit": "🙏", "Those Who Mourn": "😢",
        "Meek": "🌿", "Hunger for Justice": "⚖️",
        "Merciful": "🕊️", "Pure in Heart": "❤️", "Peacemakers": "☮️"
      }
    },

    quiz: {
      questions: [
        { q: "Being 'poor in spirit' means ___.", opts: ["Being financially poor", "Knowing we need God", "Having few friends", "Being unhappy"], correct: 1 },
        { q: "Meekness is best described as ___.", opts: ["Weakness", "Indifference", "Strength under control", "Passivity"], correct: 2 },
        { q: "'Blessed are the merciful' means we should ___.", opts: ["Judge others fairly", "Forgive and show compassion", "Demand justice always", "Avoid difficult people"], correct: 1 },
        { q: "The 'pure in heart' shall ___.", opts: ["Rule the earth", "See God", "Be called God's children", "Inherit the kingdom"], correct: 1 },
        { q: "The Beatitudes are taught in Jesus' ___ on the Mount.", opts: ["Temptation", "Healing", "Sermon", "Transfiguration"], correct: 2 }
      ]
    ,
    bonus: { q: "Human dignity comes from ___.", opts: ["Wealth", "Education", "Being made in God's image", "Social status"], correct: 2, reward: "Virtue Star!" }
    },

    prayer: {
      title: "The Beatitudes as Prayer",
      lines: [
        { s: "L", t: "Lord Jesus, teach us to live the Beatitudes in our daily lives." },
        { s: "A", t: "Help us to be poor in spirit — dependent on you, not on ourselves." },
        { s: "L", t: "Give us meek hearts that treat everyone with gentleness." },
        { s: "A", t: "Fill us with hunger and thirst for justice in our world." },
        { s: "L", t: "Make us merciful, pure, and peacemaking — in your image." },
        { s: "A", t: "May we be your light in our school, our home, and our world. Amen." }
      ]
    }
  },

  // ─────────────────────────────────────────────
  {
    week: 29,
    title: "Mary and the Saints: Cloud of Witnesses",
    pillar: "Creed",
    verse: "Therefore, since we are surrounded by so great a cloud of witnesses, let us run with perseverance the race set before us. — Hebrews 12:1",

    discover: {
      title: "Discover: Our Friends in Heaven",
      instruction: "Tap each card to understand how Mary and the saints accompany us.",
      items: [
        { icon: "👑", name: "The Communion of Saints", desc: "The Church exists in three states: the Church Militant (us on earth), the Church Suffering (souls in purgatory), and the Church Triumphant (saints in heaven). Together we form the communion of saints (CCC 954–962)." },
        { icon: "🌹", name: "Mary, Queen of Saints", desc: "Mary is our greatest intercessor — fully redeemed by her Son, she prays for us constantly. She is the Mother of God and our Mother too, given to us by Jesus from the cross (John 19:27; CCC 966–975)." },
        { icon: "🌟", name: "The Saints as Models", desc: "Saints are not just historical figures — they are our friends and models. They show us that holiness is possible in every state of life, culture, and century. We are all called to sainthood (CCC 828)." },
        { icon: "🙏", name: "Intercession of the Saints", desc: "We ask saints to pray for us — not because they are divine, but because as members of the Body of Christ, their prayers are powerful. This is no different from asking a friend to pray (CCC 2683–2684)." },
        { icon: "🌺", name: "Canonization", desc: "The Church canonizes saints after careful investigation — confirming heroic virtue and miracles. Canonization is the Church's official declaration that this person is in heaven and worthy of veneration (CCC 828)." }
      ]
    },

    secondary: "timeline",
    timeline: {
      title: "The Path to Canonization",
      instruction: "Tap two items to swap them into the correct order.",
      items: [
        { id: 1, text: "A person lives a life of heroic virtue", order: 1 },
        { id: 2, text: "A cause for canonization is opened by the diocese", order: 2 },
        { id: 3, text: "The person is declared 'Venerable' after virtue is confirmed", order: 3 },
        { id: 4, text: "A miracle is verified — the person is Beatified (Blessed)", order: 4 },
        { id: 5, text: "A second miracle is verified — the person is Canonized (Saint)", order: 5 }
      ]
    },

    quiz: {
      questions: [
        { q: "The Church Militant refers to ___.", opts: ["The Pope's army", "Catholics on earth", "Saints in heaven", "Souls in purgatory"], correct: 1 },
        { q: "Mary was given as our Mother by Jesus at ___.", opts: ["The Annunciation", "The Visitation", "The Cross", "Pentecost"], correct: 2 },
        { q: "We ask saints to ___.", opts: ["Rule in our place", "Intercede and pray for us", "Forgive our sins", "Replace Jesus"], correct: 1 },
        { q: "Canonization requires a confirmed ___.", opts: ["Vision", "Prophecy", "Miracle", "Apparition"], correct: 2 },
        { q: "All Catholics are called to ___.", opts: ["Ordination", "Religious life only", "Sainthood", "Martyrdom"], correct: 2 }
      ]
    ,
    bonus: { q: "Infallibility means the Pope cannot err when teaching ___.", opts: ["about science", "about politics", "on faith and morals ex cathedra", "about everything"], correct: 2, reward: "Creed Scholar!" }
    },

    prayer: {
      title: "Litany of the Saints",
      lines: [
        { s: "L", t: "Holy Mary, Mother of God —" },
        { s: "A", t: "Pray for us." },
        { s: "L", t: "St. Michael, St. Peter, St. Paul, St. Mary Magdalene —" },
        { s: "A", t: "Pray for us." },
        { s: "L", t: "St. Francis, St. Teresa, St. Thérèse, Blessed Carlo Acutis —" },
        { s: "A", t: "Pray for us, and help us to run the race set before us. Amen." }
      ]
    }
  },

  // ─────────────────────────────────────────────
  //  WEEK 30: YEAR IN REVIEW & CELEBRATION
  // ─────────────────────────────────────────────
  {
    week: 30,
    title: "Year in Review: Disciples of Christ",
    pillar: "Review",
    ccc: "1691-1698, 1816",
    verse: "I can do all things through Christ who strengthens me. — Philippians 4:13",

    discover: {
      title: "Review: Everything We Learned This Year!",
      instruction: "Tap each card to celebrate what we have learned and believed.",
      items: [
        { icon: "✝️", name: "God and the Church", desc: "The Trinity — one God in three Persons. Divine Revelation through Scripture, Tradition, and Christ. The Church as Body of Christ, People of God, and Temple of the Spirit." },
        { icon: "🍞", name: "Sacraments", desc: "Reconciliation restores us; the Eucharist nourishes us; Confirmation gifts us. Holy Orders and Matrimony build up the Church. All sacraments give God's grace." },
        { icon: "⚖️", name: "Morality and Justice", desc: "Conscience, sin, virtue, and human dignity. The preferential option for the poor, stewardship of creation, peacemaking, and truth-telling — all flowing from love of God and neighbor." },
        { icon: "🙏", name: "Prayer and Discipleship", desc: "Lectio Divina, the Liturgy of the Hours, mystical prayer, and discernment. We are called to be disciples — witnesses of the Resurrection who share the faith and live the Beatitudes." },
        { icon: "🌟", name: "Mary and the Saints", desc: "We are surrounded by a cloud of witnesses — Mary, our Mother and Queen, and all the saints who show us that holiness is possible. We are all called to join them in heaven." }
      ]
    },

    secondary: "sort",
    sort: {
      title: "Sort Each Topic into Its Pillar!",
      instruction: "Tap each topic, then tap the pillar it belongs to.",
      items: [
        { name: "The Trinity", icon: "✝️", group: "Creed" },
        { name: "The Eucharist", icon: "🍞", group: "Sacraments" },
        { name: "Option for the Poor", icon: "💛", group: "Morality" },
        { name: "Lectio Divina", icon: "📖", group: "Prayer" },
        { name: "Conscience", icon: "🧭", group: "Morality" },
        { name: "Reconciliation", icon: "🕊️", group: "Sacraments" },
        { name: "Discernment", icon: "🌱", group: "Prayer" },
        { name: "The Incarnation", icon: "🌟", group: "Creed" }
      ],
      groups: ["Creed", "Sacraments", "Morality", "Prayer"],
      colors: { "Creed": "#4A90D9", "Sacraments": "#D4A843", "Morality": "#6DB87B", "Prayer": "#9B6DB8" },
      icons:  { "Creed": "✝️", "Sacraments": "⛪", "Morality": "⚖️", "Prayer": "🙏" }
    },

    quiz: {
      questions: [
        { q: "How many Persons are in the Holy Trinity?", opts: ["One", "Two", "Three", "Seven"], correct: 2 },
        { q: "Which sacrament makes the sacrifice of Christ present at Mass?", opts: ["Baptism", "Reconciliation", "The Eucharist", "Confirmation"], correct: 2 },
        { q: "Human dignity is rooted in being made in the ___ of God.", opts: ["Law", "Mind", "Image", "Creation"], correct: 2 },
        { q: "The four steps of Lectio Divina are: Read, Reflect, Respond, and ___.", opts: ["Repeat", "Rest", "Recite", "React"], correct: 1 },
        { q: "Jesus called every Christian to be His ___ in the world.", opts: ["Employee", "Observer", "Disciple and witness", "Admirer"], correct: 2 }
      ]
    ,
    bonus: { q: "The Church teaches with Christ's authority through the ___.", opts: ["media", "Magisterium", "monarchy", "marketplace"], correct: 1, reward: "Super Scholar!" }
    },

    prayer: {
      title: "Year-End Sending Forth Prayer",
      lines: [
        { s: "L", t: "Lord, thank you for this year of growing in faith, hope, and love." },
        { s: "A", t: "Thank you for our catechist, our classmates, and our parish community." },
        { s: "L", t: "We have learned about your Church, your sacraments, and your call to justice." },
        { s: "A", t: "Now send us out to live it — in our homes, schools, and communities." },
        { s: "L", t: "May we be true disciples — witnesses of your Resurrection in our world." },
        { s: "A", t: "I can do all things through Christ who strengthens me. Amen." }
      ]
    }
  }

];
