// ============================================================
// GRADE 5 — CATHOLIC CATECHIST TOOLKIT
// "Jesus Christ: Lord, Savior, and Teacher"
// 30 Weekly Sessions | Age 10–11
// Scripture: Catholic Public Domain Version (CPDV)
// Doctrine: Catechism of the Catholic Church (CCC)
// ============================================================

export const PILLAR_COLORS = {
  Creed:      "#4A90D9",
  Sacraments: "#D4A843",
  Morality:   "#6DB87B",
  Prayer:     "#9B6DB8",
  Review:     "#C0392B"
};

export const SESSIONS = [

  // ── WEEK 1 ─────────────────────────────────────────────────
  {
    week: 1,
    title: "Who Is Jesus Christ?",
    pillar: "Creed",
    verse: "You are the Christ, the Son of the living God. — Matthew 16:16",

    discover: {
      title: "Discover: Jesus Christ",
      instruction: "Tap each card to learn who Jesus truly is.",
      items: [
        { icon: "✝️", name: "True God and True Man", desc: "Jesus is fully divine and fully human — two natures in one Person. This mystery is called the Incarnation. CCC 464 teaches that the Son of God became man without ceasing to be God." },
        { icon: "👑", name: "The Messiah", desc: "Jesus is the Christ, a Greek word meaning 'Anointed One.' The Hebrew word is Messiah. He was anointed as Priest, Prophet, and King. CCC 436 explains that all three roles point to His saving mission." },
        { icon: "📖", name: "The Word of God", desc: "John's Gospel calls Jesus the 'Word' (Logos) who was with God from the beginning. Through Him, all things were made. He reveals the Father perfectly to us (CCC 241)." },
        { icon: "🕊️", name: "Son of God", desc: "At His Baptism and Transfiguration, the Father declared Jesus His beloved Son. This title reveals His eternal relationship within the Holy Trinity (CCC 441–442)." },
        { icon: "🌍", name: "Savior of the World", desc: "The name 'Jesus' means 'God saves.' He came to rescue humanity from sin and death. CCC 430 says He saves us not just from external enemies, but from sin itself." }
      ]
    },

    secondary: "fillblank",
    fillblank: {
      title: "Complete the Titles of Jesus!",
      instruction: "Fill in the missing word about who Jesus is.",
      sentences: [
        { text: "Jesus is the ___, the Son of the living God.", answer: "Christ", options: ["Christ", "Prophet", "Teacher", "King"] },
        { text: "The eternal Son of God became man — this is the ___.", answer: "Incarnation", options: ["Resurrection", "Incarnation", "Ascension", "Baptism"] },
        { text: "The name 'Jesus' means 'God ___.'", answer: "saves", options: ["loves", "creates", "saves", "rules"] },
        { text: "Jesus is anointed as Priest, Prophet, and ___.", answer: "King", options: ["Deacon", "Bishop", "Apostle", "King"] }
      ]
    },

    quiz: {
      questions: [
        { q: "What does the name 'Jesus' mean?", opts: ["God is great", "God saves", "God loves", "God rules"], correct: 1 },
        { q: "What does 'Christ' mean?", opts: ["Anointed One", "Chosen King", "Holy Teacher", "Son of Man"], correct: 0 },
        { q: "The Incarnation means Jesus became ___.", opts: ["an angel", "a prophet only", "fully God and fully man", "a spirit"], correct: 2 },
        { q: "Where is Jesus called the 'Word of God'?", opts: ["Matthew's Gospel", "Mark's Gospel", "Luke's Gospel", "John's Gospel"], correct: 3 },
        { q: "Jesus is anointed as Priest, Prophet, and ___.", opts: ["Apostle", "King", "Deacon", "Shepherd"], correct: 1 }
      ]
    },

    prayer: {
      title: "Prayer: Lord, I Believe",
      lines: [
        { s: "L", t: "Lord Jesus, you are the Christ, the Son of the living God." },
        { s: "A", t: "We believe in you — true God and true man." },
        { s: "L", t: "You came into the world to save us from sin and death." },
        { s: "A", t: "Thank you for the gift of your love." },
        { s: "L", t: "Help us to know you more deeply each day." },
        { s: "A", t: "Lord Jesus, we trust in you. Amen." }
      ]
    }
  },

  // ── WEEK 2 ─────────────────────────────────────────────────
  {
    week: 2,
    title: "The Incarnation and the Holy Family",
    pillar: "Creed",
    verse: "And the Word was made flesh and dwelt among us. — John 1:14",

    discover: {
      title: "Discover: God Becomes Human",
      instruction: "Tap each card to learn about the Incarnation.",
      items: [
        { icon: "👼", name: "The Annunciation", desc: "The Angel Gabriel appeared to Mary and asked her to be the Mother of God's Son. Mary said 'yes' freely and humbly, saying 'Let it be done to me according to your word' (Luke 1:38). CCC 484–486." },
        { icon: "⭐", name: "The Nativity", desc: "Jesus was born in Bethlehem, in a humble stable. He is the eternal Son of God choosing poverty to show us that greatness is found in love, not wealth. CCC 525." },
        { icon: "👨‍👩‍👦", name: "The Holy Family", desc: "Jesus, Mary, and Joseph are the Holy Family. They model obedience, love, and faith. The Church holds up the Holy Family as a model for every Christian family (CCC 533)." },
        { icon: "🔨", name: "The Hidden Life", desc: "For about 30 years Jesus lived quietly in Nazareth, working as a carpenter with Joseph. This 'hidden life' teaches us that ordinary daily work and family life are holy (CCC 531)." },
        { icon: "🕍", name: "Finding in the Temple", desc: "At age 12, Jesus stayed behind in the Temple and told Mary and Joseph He must be about His Father's business. This is the only Gospel event from His childhood (Luke 2:46–49)." }
      ]
    },

    secondary: "timeline",
    timeline: {
      title: "The Early Life of Jesus — In Order!",
      instruction: "Tap two items to swap them into the correct order.",
      items: [
        { id: 1, text: "The Annunciation — angel visits Mary", order: 1 },
        { id: 2, text: "Jesus is born in Bethlehem", order: 2 },
        { id: 3, text: "Presentation of Jesus in the Temple", order: 3 },
        { id: 4, text: "Flight into Egypt to escape Herod", order: 4 },
        { id: 5, text: "Jesus found in Temple at age 12", order: 5 }
      ]
    },

    quiz: {
      questions: [
        { q: "Which angel appeared to Mary?", opts: ["Michael", "Raphael", "Gabriel", "Uriel"], correct: 2 },
        { q: "Where was Jesus born?", opts: ["Nazareth", "Jerusalem", "Bethlehem", "Egypt"], correct: 2 },
        { q: "What work did Joseph do?", opts: ["Fisherman", "Carpenter", "Farmer", "Scribe"], correct: 1 },
        { q: "How old was Jesus when found in the Temple?", opts: ["8", "10", "12", "15"], correct: 2 },
        { q: "The Holy Family is Jesus, Mary, and ___.", opts: ["Peter", "Joseph", "John", "David"], correct: 1 }
      ]
    },

    prayer: {
      title: "Prayer to the Holy Family",
      lines: [
        { s: "L", t: "Jesus, Mary, and Joseph, the Holy Family of Nazareth," },
        { s: "A", t: "help our families to love one another as you loved." },
        { s: "L", t: "Mary, you said yes to God with your whole heart." },
        { s: "A", t: "Teach us to say yes to God in our own lives." },
        { s: "L", t: "Joseph, you protected and cared for Jesus and Mary." },
        { s: "A", t: "Help us to serve others faithfully. Amen." }
      ]
    }
  },

  // ── WEEK 3 ─────────────────────────────────────────────────
  {
    week: 3,
    title: "The Baptism and Temptation of Jesus",
    pillar: "Creed",
    verse: "This is my beloved Son, in whom I am well pleased. — Matthew 3:17",

    discover: {
      title: "Discover: Jesus Begins His Mission",
      instruction: "Tap each card to learn about Jesus' preparation for ministry.",
      items: [
        { icon: "🕊️", name: "Baptism by John", desc: "Jesus came to John the Baptist at the Jordan River to be baptized. He did not need cleansing from sin, but He was showing us the way of humility and identifying Himself with sinners He came to save (CCC 536)." },
        { icon: "☁️", name: "The Voice from Heaven", desc: "When Jesus rose from the water, the Holy Spirit descended like a dove and the Father's voice said: 'This is my beloved Son.' All three Persons of the Trinity appeared at once — a Trinitarian revelation (CCC 535)." },
        { icon: "🏜️", name: "Forty Days in the Desert", desc: "The Holy Spirit led Jesus into the desert for 40 days of fasting and prayer. This mirrors Israel's 40 years in the desert — but Jesus succeeds where they struggled (CCC 538)." },
        { icon: "😈", name: "The Three Temptations", desc: "The devil tempted Jesus three times: with bread (comfort over God), with power (pride), and with a dare (testing God). Jesus defeated each temptation with Scripture (Matthew 4:1–11)." }
      ]
    },

    secondary: "fillblank",
    fillblank: {
      title: "Fill in the Blanks!",
      instruction: "Fill in the missing word for each sentence.",
      sentences: [
        { text: "Jesus was baptized in the Jordan ___ by John.", answer: "River", options: ["River", "Sea", "Lake", "Desert"] },
        { text: "The Holy Spirit appeared like a ___.", answer: "dove", options: ["flame", "dove", "cloud", "star"] },
        { text: "Jesus fasted in the desert for ___ days.", answer: "forty", options: ["seven", "twelve", "forty", "thirty"] },
        { text: "Jesus defeated temptation using ___.", answer: "Scripture", options: ["prayer", "Scripture", "fasting", "angels"] }
      ]
    },

    quiz: {
      questions: [
        { q: "Who baptized Jesus?", opts: ["Peter", "John the Baptist", "Joseph", "Moses"], correct: 1 },
        { q: "What did the Holy Spirit look like at Jesus' Baptism?", opts: ["A flame", "A lamb", "A dove", "A cloud"], correct: 2 },
        { q: "How many days was Jesus in the desert?", opts: ["12", "30", "40", "50"], correct: 2 },
        { q: "How many times did the devil tempt Jesus?", opts: ["1", "2", "3", "7"], correct: 2 },
        { q: "Jesus defeated temptation by quoting ___.", opts: ["Moses", "Scripture", "Prayer books", "An angel"], correct: 1 }
      ]
    },

    prayer: {
      title: "Prayer Against Temptation",
      lines: [
        { s: "L", t: "Lord Jesus, you faced temptation and overcame it." },
        { s: "A", t: "Help us when we are tempted to do wrong." },
        { s: "L", t: "When we are weak, remind us of your strength." },
        { s: "A", t: "We trust in your word to guide our choices." },
        { s: "L", t: "Fill us with the Holy Spirit so we may choose what is good." },
        { s: "A", t: "Lead us not into temptation, but deliver us from evil. Amen." }
      ]
    }
  },

  // ── WEEK 4 ─────────────────────────────────────────────────
  {
    week: 4,
    title: "The Kingdom of God",
    pillar: "Creed",
    verse: "The kingdom of God is at hand. Repent, and believe in the Gospel. — Mark 1:15",

    discover: {
      title: "Discover: What Is God's Kingdom?",
      instruction: "Tap each card to understand the Kingdom of God.",
      items: [
        { icon: "🌱", name: "Not a Place — a Presence", desc: "The Kingdom of God is not a country with borders. It is wherever God reigns in people's hearts and lives. Jesus said the Kingdom is 'at hand' — close, here, now (CCC 541)." },
        { icon: "🎭", name: "Parables Reveal It", desc: "Jesus taught about the Kingdom through parables — short stories with a deeper meaning. Parables like the Mustard Seed and the Pearl show how the Kingdom grows and is worth everything (CCC 546)." },
        { icon: "💊", name: "Miracles Reveal It", desc: "Jesus healed the sick, raised the dead, and cast out demons as signs that God's Kingdom had arrived. Every miracle showed that God's love and power were overcoming evil (CCC 547–548)." },
        { icon: "👐", name: "Open to All", desc: "Jesus invited everyone into the Kingdom — especially the poor, sinners, and those society rejected. The Kingdom is God's gift to the humble, not a reward for the powerful (CCC 544)." },
        { icon: "🔮", name: "Now and Not Yet", desc: "The Kingdom is already here through Jesus and His Church, but it is not yet fully complete. We await its fulfillment at the end of time when God will be all in all (CCC 671)." }
      ]
    },

    secondary: "timeline",
    timeline: {
      title: "Jesus Reveals the Kingdom — In Order!",
      instruction: "Tap two items to swap them into the correct order.",
      items: [
        { id: 1, text: "Jesus announces: 'The Kingdom of God is at hand'", order: 1 },
        { id: 2, text: "Jesus teaches the Beatitudes on the Mount", order: 2 },
        { id: 3, text: "Jesus heals the sick and casts out demons", order: 3 },
        { id: 4, text: "Jesus tells the Parable of the Mustard Seed", order: 4 },
        { id: 5, text: "Jesus sends the Apostles to proclaim the Kingdom", order: 5 }
      ]
    },

    quiz: {
      questions: [
        { q: "The Kingdom of God is wherever ___.", opts: ["there is a church building", "God reigns in hearts", "good people live", "priests serve"], correct: 1 },
        { q: "What are parables?", opts: ["Lists of rules", "Short stories with deeper meaning", "Prayers", "Prophecies"], correct: 1 },
        { q: "Which parable shows how the Kingdom grows from something tiny?", opts: ["Prodigal Son", "Mustard Seed", "Good Samaritan", "Ten Virgins"], correct: 1 },
        { q: "Who did Jesus especially invite into the Kingdom?", opts: ["The rich and powerful", "Only Jewish people", "The poor and sinners", "Scholars only"], correct: 2 },
        { q: "The Kingdom is 'now and not yet' — it is here, but also awaits ___.", opts: ["Easter", "Christmas", "Fulfillment at the end of time", "The Pope's blessing"], correct: 2 }
      ]
    },

    prayer: {
      title: "Prayer: Thy Kingdom Come",
      lines: [
        { s: "L", t: "Lord Jesus, you announced that the Kingdom of God is at hand." },
        { s: "A", t: "Help us to welcome your Kingdom in our hearts." },
        { s: "L", t: "May we grow like the mustard seed — small beginnings, great love." },
        { s: "A", t: "Help us to be signs of your Kingdom in our school and home." },
        { s: "L", t: "Thy Kingdom come, thy will be done, on earth as it is in heaven." },
        { s: "A", t: "Come, Lord Jesus. Amen." }
      ]
    }
  },

  // ── WEEK 5 ─────────────────────────────────────────────────
  {
    week: 5,
    title: "Unit 1 Review: Jesus Christ and His Mission",
    pillar: "Review",
    verse: "I am the way, the truth, and the life. — John 14:6",

    discover: {
      title: "Review: Who Is Jesus?",
      instruction: "Tap each card to review the big ideas from Unit 1.",
      items: [
        { icon: "✝️", name: "Review: The Incarnation", desc: "Jesus is true God and true man — the eternal Son of God who was born of the Virgin Mary. This is the Incarnation, the central mystery of our faith." },
        { icon: "👨‍👩‍👦", name: "Review: The Holy Family", desc: "Jesus grew up in Nazareth with Mary and Joseph. His hidden life teaches us the holiness of ordinary family love and work." },
        { icon: "🕊️", name: "Review: Baptism & Temptation", desc: "Jesus was baptized at the Jordan, and the Trinity was revealed. He fasted 40 days in the desert and defeated the devil's temptations using Scripture." },
        { icon: "🌱", name: "Review: The Kingdom of God", desc: "Through parables and miracles, Jesus showed that the Kingdom of God is God's loving reign in our hearts — open to all, especially the poor and humble." }
      ]
    },

    secondary: "fillblank",
    fillblank: {
      title: "Review Fill-in-the-Blank",
      instruction: "Fill in the missing word to complete each sentence.",
      sentences: [
        { text: "Jesus is ___ God and true man.", answer: "true", options: ["true", "part", "almost", "sometimes"] },
        { text: "Mary said 'yes' to God at the ___.", answer: "Annunciation", options: ["Nativity", "Annunciation", "Visitation", "Presentation"] },
        { text: "Jesus defeated temptation by quoting ___.", answer: "Scripture", options: ["Prayer", "Scripture", "Angels", "Saints"] },
        { text: "The Kingdom of God is wherever God ___ in hearts.", answer: "reigns", options: ["sleeps", "waits", "reigns", "hides"] }
      ]
    },

    quiz: {
      questions: [
        { q: "What does the name Jesus mean?", opts: ["God rules", "God saves", "God loves", "God creates"], correct: 1 },
        { q: "Which angel appeared to Mary at the Annunciation?", opts: ["Michael", "Raphael", "Gabriel", "Uriel"], correct: 2 },
        { q: "Who baptized Jesus?", opts: ["Peter", "John the Baptist", "Joseph", "Elijah"], correct: 1 },
        { q: "What is the Incarnation?", opts: ["Jesus rising from the dead", "God becoming man in Jesus", "The Holy Spirit at Pentecost", "Jesus ascending to heaven"], correct: 1 },
        { q: "The Kingdom of God is open especially to whom?", opts: ["Only the priests", "The rich", "The poor and sinners", "The powerful"], correct: 2 }
      ]
    },

    prayer: {
      title: "Glory Be — Review Prayer",
      lines: [
        { s: "L", t: "Let us give glory to God as we remember all we have learned." },
        { s: "A", t: "Glory be to the Father, and to the Son, and to the Holy Spirit." },
        { s: "L", t: "Jesus came to save us — true God and true man." },
        { s: "A", t: "As it was in the beginning, is now, and ever shall be." },
        { s: "L", t: "May we carry what we have learned in our hearts." },
        { s: "A", t: "World without end. Amen." }
      ]
    }
  },

  // ── WEEK 6 ─────────────────────────────────────────────────
  {
    week: 6,
    title: "The Sermon on the Mount",
    pillar: "Creed",
    verse: "Blessed are the pure in heart, for they shall see God. — Matthew 5:8",

    discover: {
      title: "Discover: Jesus the Teacher",
      instruction: "Tap each card to explore the Sermon on the Mount.",
      items: [
        { icon: "⛰️", name: "The Setting", desc: "Jesus climbed a mountain to teach the crowds — just as Moses received the Law on Mount Sinai. Jesus is the new Moses, bringing a new and deeper law rooted in love (CCC 577)." },
        { icon: "😊", name: "The Beatitudes", desc: "Jesus opened the Sermon with eight Beatitudes — 'Blessed are...' — which describe the attitudes of those who will inherit the Kingdom of God. 'Blessed' means truly, deeply happy (CCC 1716)." },
        { icon: "🧂", name: "Salt and Light", desc: "Jesus told His followers they are 'the salt of the earth' and 'the light of the world.' We are called to preserve goodness and shine God's love in the world (Matthew 5:13–16)." },
        { icon: "💛", name: "Love Your Enemies", desc: "Jesus raised the bar beyond the Law of Moses: 'Love your enemies and pray for those who persecute you.' This radical love makes us like our heavenly Father (Matthew 5:44, CCC 1825)." },
        { icon: "🔑", name: "The New Law of Love", desc: "The Sermon on the Mount is the 'Magna Carta' of Christianity. Jesus fulfilled and perfected the old law, showing that holiness is about interior conversion, not just external behavior (CCC 1965)." }
      ]
    },

    secondary: "fillblank",
    fillblank: {
      title: "Sermon on the Mount Fill-in-the-Blank",
      instruction: "Fill in the missing word from the Sermon on the Mount.",
      sentences: [
        { text: "Blessed are the ___ in heart, for they shall see God.", answer: "pure", options: ["pure", "proud", "rich", "wise"] },
        { text: "Jesus said His followers are the ___ of the world.", answer: "light", options: ["salt", "light", "hope", "voice"] },
        { text: "Jesus said: Love your ___.", answer: "enemies", options: ["friends", "family", "enemies", "teachers"] },
        { text: "The Sermon on the Mount teaches that holiness is about ___ conversion.", answer: "interior", options: ["exterior", "interior", "public", "social"] }
      ]
    },

    quiz: {
      questions: [
        { q: "How many Beatitudes are there?", opts: ["4", "6", "8", "10"], correct: 2 },
        { q: "What does 'blessed' mean in the Beatitudes?", opts: ["Lucky", "Rich", "Truly happy", "Famous"], correct: 2 },
        { q: "Jesus said His followers are the salt of the earth and the ___ of the world.", opts: ["crown", "light", "sword", "rock"], correct: 1 },
        { q: "Jesus said to love your ___.", opts: ["only friends", "enemies", "teachers", "family"], correct: 1 },
        { q: "The Sermon on the Mount is found in which Gospel?", opts: ["Mark", "Luke", "John", "Matthew"], correct: 3 }
      ]
    },

    prayer: {
      title: "Beatitudes Prayer",
      lines: [
        { s: "L", t: "Lord Jesus, you taught us how to be truly blessed." },
        { s: "A", t: "Blessed are the merciful — help us to forgive others." },
        { s: "L", t: "Blessed are the pure in heart — help us to seek your face." },
        { s: "A", t: "Blessed are the peacemakers — help us to bring peace." },
        { s: "L", t: "May we be salt and light in our world." },
        { s: "A", t: "Teach us to love even our enemies. Amen." }
      ]
    }
  },

  // ── WEEK 7 ─────────────────────────────────────────────────
  {
    week: 7,
    title: "The Miracles of Jesus",
    pillar: "Creed",
    verse: "What sort of man is this, that even the winds and the sea obey him? — Matthew 8:27",

    discover: {
      title: "Discover: Jesus' Miracles",
      instruction: "Tap each card to learn about different types of miracles.",
      items: [
        { icon: "💧", name: "Water into Wine", desc: "At the wedding in Cana, Mary noticed the wine had run out. At her request, Jesus changed water into wine. This was His first miracle, and it revealed His glory (John 2:1–11, CCC 1335)." },
        { icon: "🍞", name: "Feeding 5,000", desc: "Jesus took five loaves and two fish, blessed them, and fed over 5,000 people — with twelve baskets left over. This miracle points forward to the Eucharist (CCC 1335)." },
        { icon: "🌊", name: "Calming the Storm", desc: "When a violent storm threatened the boat, the disciples woke Jesus in fear. He rebuked the wind and waves, and there was a great calm. Jesus has power over all of nature (Matthew 8:23–27)." },
        { icon: "👁️", name: "Healing the Blind", desc: "Jesus healed many who were blind — including Bartimaeus, who cried out 'Son of David, have mercy on me!' His faith made him well. Jesus heals bodies and souls (Mark 10:46–52)." },
        { icon: "☠️", name: "Raising Lazarus", desc: "When His friend Lazarus died, Jesus wept — showing His true humanity. Then He commanded: 'Lazarus, come out!' This greatest miracle pointed to His own resurrection (John 11:1–44, CCC 994)." }
      ]
    },

    secondary: "timeline",
    timeline: {
      title: "Miracles in Order!",
      instruction: "Tap two items to swap them into the correct order.",
      items: [
        { id: 1, text: "Water into wine at Cana (first miracle)", order: 1 },
        { id: 2, text: "Calming the storm on the Sea of Galilee", order: 2 },
        { id: 3, text: "Feeding 5,000 with loaves and fish", order: 3 },
        { id: 4, text: "Healing Bartimaeus, the blind beggar", order: 4 },
        { id: 5, text: "Raising Lazarus from the dead", order: 5 }
      ]
    },

    quiz: {
      questions: [
        { q: "What was Jesus' first miracle?", opts: ["Feeding 5,000", "Water into wine", "Calming the storm", "Healing the blind"], correct: 1 },
        { q: "At whose request did Jesus perform His first miracle?", opts: ["Peter", "Mary", "John", "A disciple"], correct: 1 },
        { q: "Jesus fed 5,000 people with five loaves and ___ fish.", opts: ["one", "two", "five", "twelve"], correct: 1 },
        { q: "Who did Jesus raise from the dead in John chapter 11?", opts: ["Jairus", "Bartimaeus", "Lazarus", "Simon"], correct: 2 },
        { q: "What do Jesus' miracles tell us about the Kingdom of God?", opts: ["It is only in heaven", "God's power overcomes evil and suffering", "Only priests experience it", "It requires hard work"], correct: 1 }
      ]
    },

    prayer: {
      title: "Prayer for Healing",
      lines: [
        { s: "L", t: "Lord Jesus, you healed the sick and raised the dead." },
        { s: "A", t: "Have mercy on all who are sick or suffering." },
        { s: "L", t: "You wept for Lazarus — you know our grief and pain." },
        { s: "A", t: "Bring your comfort and healing to those we love." },
        { s: "L", t: "Increase our faith so that we may cry out: Son of David, have mercy on us!" },
        { s: "A", t: "Lord, we trust in your power and love. Amen." }
      ]
    }
  },

  // ── WEEK 8 ─────────────────────────────────────────────────
  {
    week: 8,
    title: "The Disciples and the Twelve Apostles",
    pillar: "Creed",
    verse: "Follow me, and I will make you fishers of men. — Matthew 4:19",

    discover: {
      title: "Discover: Called by Jesus",
      instruction: "Tap each card to learn about those Jesus called.",
      items: [
        { icon: "🎣", name: "The Call of the Disciples", desc: "Jesus called ordinary people — fishermen, a tax collector — to follow Him. He didn't look for the most important or powerful. He looked for willing hearts (CCC 787)." },
        { icon: "1️⃣2️⃣", name: "The Twelve Apostles", desc: "From His larger group of disciples, Jesus chose 12 Apostles. The number 12 mirrors the 12 tribes of Israel — they will be the foundation of the new People of God (CCC 551)." },
        { icon: "🪨", name: "Peter: The Rock", desc: "Simon was renamed Peter ('rock') by Jesus, who gave him the keys of the Kingdom. Peter was the leader of the Apostles and the first Pope (Matthew 16:18, CCC 552)." },
        { icon: "❤️", name: "John: The Beloved Disciple", desc: "John was the youngest Apostle and is called 'the disciple whom Jesus loved.' He stood at the foot of the Cross, and Jesus entrusted His mother Mary to John's care (John 19:26–27)." },
        { icon: "💰", name: "Matthew: The Tax Collector", desc: "Matthew (also called Levi) was a tax collector — a despised profession — when Jesus called him. His conversion shows that Jesus calls everyone, even those considered sinners (Matthew 9:9–13)." }
      ]
    },

    secondary: "sort",
    sort: {
      title: "Which Apostle?",
      instruction: "Match the description to the correct apostle.",
      items: [
        { name: "First Pope, 'The Rock'", icon: "🪨", group: "Peter" },
        { name: "Youngest Apostle, beloved disciple", icon: "❤️", group: "John" },
        { name: "Denied Jesus three times", icon: "🐓", group: "Peter" },
        { name: "Stood at the foot of the Cross", icon: "✝️", group: "John" },
        { name: "Was a tax collector before being called", icon: "💰", group: "Matthew" },
        { name: "Wrote a Gospel for Jewish Christians", icon: "📖", group: "Matthew" },
        { name: "Given care of Mary by Jesus", icon: "👩", group: "John" }
      ],
      groups: ["Peter", "John", "Matthew"],
      colors: { "Peter": "#4A90D9", "John": "#D4A843", "Matthew": "#6DB87B" },
      icons:  { "Peter": "🪨", "John": "❤️", "Matthew": "💰" }
    },

    quiz: {
      questions: [
        { q: "How many Apostles did Jesus choose?", opts: ["7", "10", "12", "70"], correct: 2 },
        { q: "What does 'Peter' mean?", opts: ["Light", "Rock", "Fire", "Water"], correct: 1 },
        { q: "What was Matthew's job before Jesus called him?", opts: ["Fisherman", "Carpenter", "Tax collector", "Priest"], correct: 2 },
        { q: "To whom did Jesus entrust the care of Mary at the Cross?", opts: ["Peter", "James", "John", "Thomas"], correct: 2 },
        { q: "Jesus said He would make the fishermen 'fishers of ___.'", opts: ["fish", "men", "souls", "gold"], correct: 1 }
      ]
    },

    prayer: {
      title: "Prayer: Follow Me",
      lines: [
        { s: "L", t: "Lord Jesus, you called ordinary people to follow you." },
        { s: "A", t: "Call us, too. We want to follow you." },
        { s: "L", t: "You chose Peter, the fisherman, to be the rock of your Church." },
        { s: "A", t: "Help us to be faithful even when we feel small or afraid." },
        { s: "L", t: "May we hear your voice saying, 'Follow me,' each day." },
        { s: "A", t: "Lord, we leave everything to follow you. Amen." }
      ]
    }
  },

  // ── WEEK 9 ─────────────────────────────────────────────────
  {
    week: 9,
    title: "The Transfiguration and the Road to Jerusalem",
    pillar: "Creed",
    verse: "He was transfigured before them; his face shone like the sun. — Matthew 17:2",

    discover: {
      title: "Discover: Glory and the Cross",
      instruction: "Tap each card to learn about the Transfiguration and what came next.",
      items: [
        { icon: "🌟", name: "The Transfiguration", desc: "Jesus took Peter, James, and John up Mount Tabor. His face shone like the sun and His clothes became dazzling white. Moses and Elijah appeared with Him, showing He fulfills the Law and Prophets (CCC 554–556)." },
        { icon: "👂", name: "The Father Speaks Again", desc: "As at the Baptism, the Father's voice spoke: 'This is my beloved Son. Listen to Him.' The Transfiguration strengthened the disciples for the scandal of the Cross ahead." },
        { icon: "🚶", name: "Setting His Face for Jerusalem", desc: "Jesus 'set His face toward Jerusalem' knowing He would suffer and die there. He walked deliberately toward His passion out of love for us — nothing forced Him (Luke 9:51)." },
        { icon: "🌿", name: "Palm Sunday", desc: "Jesus entered Jerusalem triumphantly, with crowds waving palm branches and shouting 'Hosanna!' They expected a political king, but He came as the humble King of Peace riding on a donkey (CCC 559–560)." }
      ]
    },

    secondary: "timeline",
    timeline: {
      title: "The Road to Jerusalem — In Order!",
      instruction: "Tap two items to swap them into the correct order.",
      items: [
        { id: 1, text: "Jesus is transfigured on the mountain", order: 1 },
        { id: 2, text: "Jesus sets His face toward Jerusalem", order: 2 },
        { id: 3, text: "Jesus raises Lazarus from the dead", order: 3 },
        { id: 4, text: "Jesus enters Jerusalem on Palm Sunday", order: 4 },
        { id: 5, text: "Jesus cleanses the Temple", order: 5 }
      ]
    },

    quiz: {
      questions: [
        { q: "On which mountain was Jesus transfigured?", opts: ["Mount Sinai", "Mount Carmel", "Mount Tabor", "Mount of Olives"], correct: 2 },
        { q: "Who appeared with Jesus at the Transfiguration?", opts: ["Peter and John", "Moses and Elijah", "Abraham and David", "Isaiah and Jeremiah"], correct: 1 },
        { q: "What did the voice say at the Transfiguration?", opts: ["This is the Messiah", "This is my beloved Son, listen to Him", "Follow Him to Jerusalem", "He will rise again"], correct: 1 },
        { q: "What did the crowd shout on Palm Sunday?", opts: ["Alleluia", "Hosanna", "Gloria", "Amen"], correct: 1 },
        { q: "What animal did Jesus ride into Jerusalem?", opts: ["Horse", "Camel", "Donkey", "Mule"], correct: 2 }
      ]
    },

    prayer: {
      title: "Prayer: Hosanna!",
      lines: [
        { s: "L", t: "Lord Jesus, the crowds welcomed you into Jerusalem with joy." },
        { s: "A", t: "Hosanna! Blessed is he who comes in the name of the Lord!" },
        { s: "L", t: "You entered as the King of Peace — humble, riding on a donkey." },
        { s: "A", t: "Help us to welcome you as King in our hearts every day." },
        { s: "L", t: "You knew suffering was ahead, yet you chose love over fear." },
        { s: "A", t: "Give us your courage to walk the road of love. Amen." }
      ]
    }
  },

  // ── WEEK 10 ────────────────────────────────────────────────
  {
    week: 10,
    title: "The Passion, Death, and Resurrection of Jesus",
    pillar: "Creed",
    verse: "I am the resurrection and the life; whoever believes in me, even if he dies, will live. — John 11:25",

    discover: {
      title: "Discover: The Paschal Mystery",
      instruction: "Tap each card to learn about Jesus' suffering, death, and rising.",
      items: [
        { icon: "🍷", name: "The Last Supper", desc: "The night before He died, Jesus shared a final meal with His Apostles. He took bread and wine and said 'This is my Body... This is my Blood.' This instituted the Eucharist (CCC 1337–1340)." },
        { icon: "🌿", name: "Gethsemane", desc: "In the Garden of Gethsemane, Jesus prayed: 'Not my will but yours be done.' He sweat blood in His agony. This shows His true humanity and perfect obedience to the Father (CCC 612)." },
        { icon: "✝️", name: "The Crucifixion", desc: "Jesus was crucified on Calvary. From the Cross, He forgave those who killed Him and promised paradise to the repentant thief. His death is our salvation (CCC 571, 623)." },
        { icon: "🌅", name: "The Resurrection", desc: "On the third day, Jesus rose from the dead — bodily, gloriously, truly. The Resurrection is the cornerstone of Christian faith. Without it, our faith would be in vain (CCC 638, 1 Cor 15:14)." },
        { icon: "🙏", name: "The Paschal Mystery", desc: "The Passion, Death, Resurrection, and Ascension of Jesus together make up the Paschal Mystery — the central event of salvation history that we re-enter at every Mass (CCC 1085)." }
      ]
    },

    secondary: "timeline",
    timeline: {
      title: "Holy Week — In Order!",
      instruction: "Tap two items to swap them into the correct order.",
      items: [
        { id: 1, text: "The Last Supper — Eucharist instituted", order: 1 },
        { id: 2, text: "Agony in the Garden of Gethsemane", order: 2 },
        { id: 3, text: "Jesus is arrested, tried, and condemned", order: 3 },
        { id: 4, text: "Crucifixion on Calvary — Jesus dies", order: 4 },
        { id: 5, text: "Resurrection on the third day", order: 5 }
      ]
    },

    quiz: {
      questions: [
        { q: "What did Jesus institute at the Last Supper?", opts: ["Confession", "The Eucharist", "Holy Orders", "Baptism"], correct: 1 },
        { q: "What did Jesus pray in Gethsemane?", opts: ["Let this cup pass from me, yet not my will but yours", "I am ready to die", "Father, why have you forsaken me", "Into your hands I commend my spirit"], correct: 0 },
        { q: "Where was Jesus crucified?", opts: ["Bethlehem", "Gethsemane", "Calvary", "Jerusalem's Temple"], correct: 2 },
        { q: "On which day did Jesus rise from the dead?", opts: ["The first day", "The second day", "The third day", "The seventh day"], correct: 2 },
        { q: "The Paschal Mystery includes Jesus' passion, death, resurrection, and ___.", opts: ["miracles", "Baptism", "Ascension", "Temptation"], correct: 2 }
      ]
    },

    prayer: {
      title: "Prayer of the Cross",
      lines: [
        { s: "L", t: "Lord Jesus, you suffered and died on the Cross out of love for us." },
        { s: "A", t: "We adore you, O Christ, and we bless you." },
        { s: "L", t: "By your holy cross you have redeemed the world." },
        { s: "A", t: "Because by your holy cross you have redeemed the world." },
        { s: "L", t: "You rose from the dead, and death has no power over you." },
        { s: "A", t: "Christ is risen! Alleluia, Alleluia. Amen." }
      ]
    }
  },

  // ── WEEK 11 ────────────────────────────────────────────────
  {
    week: 11,
    title: "The Ascension and Pentecost",
    pillar: "Creed",
    verse: "You will receive power when the Holy Spirit comes upon you. — Acts 1:8",

    discover: {
      title: "Discover: Jesus Sends the Spirit",
      instruction: "Tap each card to learn about the Ascension and Pentecost.",
      items: [
        { icon: "☁️", name: "The Ascension", desc: "Forty days after the Resurrection, Jesus ascended body and soul into heaven. He now sits at the right hand of the Father, interceding for us. He promised to return at the end of time (CCC 659–663)." },
        { icon: "🔥", name: "Pentecost", desc: "Fifty days after Easter, the Holy Spirit descended on Mary and the Apostles in the form of tongues of fire. This is the 'birthday of the Church.' They began to proclaim the Gospel fearlessly (CCC 731–732)." },
        { icon: "🗣️", name: "Speaking in Languages", desc: "At Pentecost, the Apostles spoke in different languages and were understood by people from every nation. This reversed the division at Babel, calling all people into one family of God (Acts 2:4–11)." },
        { icon: "🏛️", name: "The Church Is Born", desc: "Peter preached and 3,000 people were baptized that day. The Church was launched into the world, empowered by the Holy Spirit. The sacramental life began (CCC 1076)." }
      ]
    },

    secondary: "fillblank",
    fillblank: {
      title: "Ascension and Pentecost Fill-in-the-Blank",
      instruction: "Fill in the missing word.",
      sentences: [
        { text: "Jesus ascended to heaven ___ days after the Resurrection.", answer: "forty", options: ["twelve", "forty", "fifty", "seven"] },
        { text: "The Holy Spirit descended as tongues of ___.", answer: "fire", options: ["water", "fire", "wind", "light"] },
        { text: "Pentecost is called the birthday of the ___.", answer: "Church", options: ["Bible", "Rosary", "Church", "Eucharist"] },
        { text: "___ people were baptized on the day of Pentecost.", answer: "3,000", options: ["100", "500", "1,000", "3,000"] }
      ]
    },

    quiz: {
      questions: [
        { q: "How many days after Easter did the Ascension occur?", opts: ["3", "12", "40", "50"], correct: 2 },
        { q: "How many days after Easter was Pentecost?", opts: ["40", "50", "60", "100"], correct: 1 },
        { q: "The Holy Spirit appeared at Pentecost as tongues of ___.", opts: ["water", "light", "fire", "wind"], correct: 2 },
        { q: "Pentecost is called the birthday of the ___.", opts: ["Bible", "Eucharist", "Rosary", "Church"], correct: 3 },
        { q: "How many people were baptized on Pentecost?", opts: ["300", "1,000", "3,000", "12,000"], correct: 2 }
      ]
    },

    prayer: {
      title: "Come, Holy Spirit",
      lines: [
        { s: "L", t: "Come, Holy Spirit, fill the hearts of your faithful." },
        { s: "A", t: "And kindle in them the fire of your love." },
        { s: "L", t: "Send forth your Spirit, and they shall be created." },
        { s: "A", t: "And you shall renew the face of the earth." },
        { s: "L", t: "Lord, by the light of the Holy Spirit you have taught us." },
        { s: "A", t: "Grant us your gifts and peace. Amen." }
      ]
    }
  },

  // ── WEEK 12 ────────────────────────────────────────────────
  {
    week: 12,
    title: "Unit 2 Review: The Life of Christ",
    pillar: "Review",
    verse: "Jesus Christ is the same yesterday, today, and forever. — Hebrews 13:8",

    discover: {
      title: "Review: The Life of Jesus",
      instruction: "Tap each card to review the key events from the life of Christ.",
      items: [
        { icon: "⛰️", name: "Review: Teaching & Miracles", desc: "Jesus taught through parables and the Sermon on the Mount. His miracles — healing, calming storms, raising the dead — revealed the Kingdom of God." },
        { icon: "1️⃣2️⃣", name: "Review: The Apostles", desc: "Jesus chose 12 Apostles. Peter was named the Rock and first Pope. John was the beloved disciple. Matthew, a tax collector, became an Apostle and evangelist." },
        { icon: "✝️", name: "Review: Paschal Mystery", desc: "The Last Supper, Crucifixion, and Resurrection form the Paschal Mystery — the central saving events. Jesus died for our sins and rose to new life on the third day." },
        { icon: "🔥", name: "Review: Ascension & Pentecost", desc: "Jesus ascended to heaven 40 days after Easter. The Holy Spirit came at Pentecost, 50 days after Easter, giving birth to the Church and empowering the Apostles." }
      ]
    },

    secondary: "sort",
    sort: {
      title: "Match the Event to the Time!",
      instruction: "Tap an event, then tap when it happened.",
      items: [
        { name: "Water into wine at Cana", icon: "💧", group: "Public Ministry" },
        { name: "Transfiguration", icon: "🌟", group: "Public Ministry" },
        { name: "The Last Supper", icon: "🍷", group: "Paschal Mystery" },
        { name: "Crucifixion", icon: "✝️", group: "Paschal Mystery" },
        { name: "Resurrection", icon: "🌅", group: "Paschal Mystery" },
        { name: "Ascension", icon: "☁️", group: "After Easter" },
        { name: "Pentecost", icon: "🔥", group: "After Easter" }
      ],
      groups: ["Public Ministry", "Paschal Mystery", "After Easter"],
      colors: { "Public Ministry": "#4A90D9", "Paschal Mystery": "#C0392B", "After Easter": "#D4A843" },
      icons:  { "Public Ministry": "🎭", "Paschal Mystery": "✝️", "After Easter": "🔥" }
    },

    quiz: {
      questions: [
        { q: "How many Beatitudes are there?", opts: ["4", "8", "10", "12"], correct: 1 },
        { q: "Who is called the 'Rock' and first Pope?", opts: ["John", "James", "Peter", "Andrew"], correct: 2 },
        { q: "On which day did Jesus rise from the dead?", opts: ["First", "Second", "Third", "Seventh"], correct: 2 },
        { q: "How many days after Easter did Jesus ascend?", opts: ["3", "12", "40", "50"], correct: 2 },
        { q: "The Paschal Mystery includes all EXCEPT which?", opts: ["Passion", "Resurrection", "Nativity", "Ascension"], correct: 2 }
      ]
    },

    prayer: {
      title: "Apostles' Creed — Review Prayer",
      lines: [
        { s: "L", t: "Let us profess what we believe about Jesus Christ." },
        { s: "A", t: "I believe in Jesus Christ, His only Son, our Lord." },
        { s: "L", t: "He was conceived by the Holy Spirit, born of the Virgin Mary." },
        { s: "A", t: "He suffered, died, was buried, and on the third day rose again." },
        { s: "L", t: "He ascended into heaven and is seated at the right hand of the Father." },
        { s: "A", t: "He will come again to judge the living and the dead. Amen." }
      ]
    }
  },

  // ── WEEK 13 ────────────────────────────────────────────────
  {
    week: 13,
    title: "The Four Gospels",
    pillar: "Creed",
    verse: "These things are written so that you may believe that Jesus is the Christ. — John 20:31",

    discover: {
      title: "Discover: The Four Evangelists",
      instruction: "Tap each card to learn about the four Gospels.",
      items: [
        { icon: "👼", name: "Matthew — The Tax Collector", desc: "Matthew wrote for a Jewish audience, showing Jesus as the new Moses who fulfills the Law. His Gospel features long discourses like the Sermon on the Mount. Symbol: a winged man (CCC 125)." },
        { icon: "🦁", name: "Mark — The Shortest Gospel", desc: "Mark likely used Peter's memoirs. His Gospel is fast-paced and action-oriented, using 'immediately' often. It emphasizes Jesus as a man of power and service. Symbol: a winged lion." },
        { icon: "🐂", name: "Luke — The Physician", desc: "Luke wrote for Gentile Christians, emphasizing mercy, prayer, and the poor. He records unique stories like the Prodigal Son and the Good Samaritan. Symbol: a winged ox." },
        { icon: "🦅", name: "John — The Theologian", desc: "John's Gospel is the most theological — beginning not at the Nativity but at the dawn of creation: 'In the beginning was the Word.' He focuses on Jesus' divine nature. Symbol: a soaring eagle." },
        { icon: "📚", name: "One Truth, Four Portraits", desc: "The four Gospels together give us a complete and rich portrait of Jesus. They are not contradictory but complementary, each highlighting different aspects of the one Lord (CCC 126–127)." }
      ]
    },

    secondary: "sort",
    sort: {
      title: "Match the Gospel!",
      instruction: "Match the clue to the correct Gospel.",
      items: [
        { name: "Fastest paced, uses 'immediately'", icon: "⚡", group: "Mark" },
        { name: "Prodigal Son and Good Samaritan unique to this", icon: "🐂", group: "Luke" },
        { name: "Begins 'In the beginning was the Word'", icon: "🦅", group: "John" },
        { name: "Sermon on the Mount found here", icon: "👼", group: "Matthew" },
        { name: "Emphasizes mercy and the poor", icon: "💛", group: "Luke" },
        { name: "Most theological, focuses on divinity", icon: "⭐", group: "John" },
        { name: "Written for Jewish Christians", icon: "✡️", group: "Matthew" }
      ],
      groups: ["Matthew", "Mark", "Luke", "John"],
      colors: { "Matthew": "#4A90D9", "Mark": "#C0392B", "Luke": "#D4A843", "John": "#9B6DB8" },
      icons:  { "Matthew": "👼", "Mark": "🦁", "Luke": "🐂", "John": "🦅" }
    },

    quiz: {
      questions: [
        { q: "Which Gospel begins 'In the beginning was the Word'?", opts: ["Matthew", "Mark", "Luke", "John"], correct: 3 },
        { q: "Which Gospel was written for Jewish Christians?", opts: ["Mark", "Matthew", "Luke", "John"], correct: 1 },
        { q: "The Prodigal Son parable is unique to which Gospel?", opts: ["Matthew", "Mark", "Luke", "John"], correct: 2 },
        { q: "Which Gospel is the shortest and most action-packed?", opts: ["Matthew", "Mark", "Luke", "John"], correct: 1 },
        { q: "How many Gospels are there?", opts: ["2", "3", "4", "5"], correct: 2 }
      ]
    },

    prayer: {
      title: "Prayer for Love of Scripture",
      lines: [
        { s: "L", t: "Lord Jesus, you are the living Word of God." },
        { s: "A", t: "Open our hearts to hear your word in the Gospels." },
        { s: "L", t: "Through Matthew, Mark, Luke, and John, you speak to us." },
        { s: "A", t: "Give us love for Scripture so that we may know you better." },
        { s: "L", t: "May your word be a lamp for our feet and a light on our path." },
        { s: "A", t: "Speak, Lord. Your servants are listening. Amen." }
      ]
    }
  },

  // ── WEEK 14 ────────────────────────────────────────────────
  {
    week: 14,
    title: "What Is Conscience?",
    pillar: "Morality",
    verse: "I will put my law within them, and I will write it upon their hearts. — Jeremiah 31:33",

    discover: {
      title: "Discover: The Voice Within",
      instruction: "Tap each card to learn about conscience.",
      items: [
        { icon: "💬", name: "God's Voice Within", desc: "Conscience is our inner capacity to know good from evil. CCC 1776 describes it as 'a judgment of reason by which the human person recognizes the moral quality of a concrete act.'" },
        { icon: "📏", name: "Judging Our Actions", desc: "Conscience helps us decide if an action is right or wrong BEFORE we act, warns us WHILE we act, and tells us whether we chose well AFTER we act (CCC 1778)." },
        { icon: "📖", name: "Forming Our Conscience", desc: "A conscience needs to be formed and educated. We form it through prayer, reading Scripture, studying the Church's teaching, and seeking wisdom from good mentors (CCC 1783–1785)." },
        { icon: "⚠️", name: "Erroneous Conscience", desc: "A conscience can be wrong if poorly formed — through bad habits, ignoring God's law, or refusing to learn. That is why ongoing formation is essential (CCC 1790–1791)." },
        { icon: "🧭", name: "Always Follow Conscience", desc: "We are always obliged to follow our conscience. But we are also obliged to form it correctly. An honest person works to ensure their conscience aligns with God's truth (CCC 1800)." }
      ]
    },

    secondary: "sort",
    sort: {
      title: "Good Conscience Habits or Bad?",
      instruction: "Tap an item, then tap the category it belongs to.",
      items: [
        { name: "Praying before making decisions", icon: "🙏", group: "Forming Conscience Well" },
        { name: "Ignoring what the Church teaches", icon: "🚫", group: "Forming Conscience Poorly" },
        { name: "Reading the Gospels regularly", icon: "📖", group: "Forming Conscience Well" },
        { name: "Making excuses for doing wrong", icon: "😬", group: "Forming Conscience Poorly" },
        { name: "Asking wise adults for guidance", icon: "👩‍🏫", group: "Forming Conscience Well" },
        { name: "Following peers who act badly", icon: "👥", group: "Forming Conscience Poorly" },
        { name: "Examining your conscience daily", icon: "💭", group: "Forming Conscience Well" }
      ],
      groups: ["Forming Conscience Well", "Forming Conscience Poorly"],
      colors: { "Forming Conscience Well": "#6DB87B", "Forming Conscience Poorly": "#C0392B" },
      icons:  { "Forming Conscience Well": "✅", "Forming Conscience Poorly": "❌" }
    },

    quiz: {
      questions: [
        { q: "Conscience is our inner ability to know ___ from ___.", opts: ["friends from enemies", "good from evil", "truth from facts", "faith from works"], correct: 1 },
        { q: "How do we form a good conscience?", opts: ["By doing whatever feels right", "Through prayer, Scripture, and Church teaching", "By following our friends", "By ignoring rules"], correct: 1 },
        { q: "According to CCC, we are always obliged to ___.", opts: ["do what others say", "follow our conscience", "avoid all decisions", "ask a priest first"], correct: 1 },
        { q: "A poorly formed conscience can lead us to ___.", opts: ["holiness", "correct decisions", "error and sin", "perfect virtue"], correct: 2 },
        { q: "God's moral law is written in our ___.", opts: ["school books", "hearts / conscience", "church buildings", "family rules"], correct: 1 }
      ]
    },

    prayer: {
      title: "Examination of Conscience Prayer",
      lines: [
        { s: "L", t: "Lord, you have written your law on our hearts." },
        { s: "A", t: "Help us to listen to the voice of our conscience." },
        { s: "L", t: "Have I chosen good today? Have I hurt anyone?" },
        { s: "A", t: "Lord, I am sorry for the times I ignored your voice." },
        { s: "L", t: "Form my conscience with your truth and your love." },
        { s: "A", t: "Help me to choose what is truly good tomorrow. Amen." }
      ]
    }
  },

  // ── WEEK 15 ────────────────────────────────────────────────
  {
    week: 15,
    title: "The Cardinal Virtues",
    pillar: "Morality",
    verse: "Whatever is true, whatever is honorable, whatever is just — think about these things. — Philippians 4:8",

    discover: {
      title: "Discover: The Four Cardinal Virtues",
      instruction: "Tap each card to learn about the virtues that anchor moral life.",
      items: [
        { icon: "🧠", name: "Prudence", desc: "Prudence is the 'charioteer of virtues' — the wisdom to know the right thing to do and how to do it. It is practical wisdom guiding our actions toward the true good (CCC 1806)." },
        { icon: "⚖️", name: "Justice", desc: "Justice is the constant will to give God and neighbor what is their due. It means treating everyone fairly and with respect for their rights and dignity (CCC 1807)." },
        { icon: "💪", name: "Fortitude", desc: "Fortitude is moral courage — the strength to overcome fear and do what is right even when it is hard. It can mean enduring difficulties for a good purpose (CCC 1808)." },
        { icon: "🎯", name: "Temperance", desc: "Temperance moderates our desires and passions, keeping them in check so they serve the good. It helps us enjoy good things without being controlled by them (CCC 1809)." },
        { icon: "🏛️", name: "Why 'Cardinal'?", desc: "The word 'cardinal' comes from the Latin 'cardo' meaning 'hinge' — all moral life hinges on these four. They can be developed through practice and God's grace (CCC 1804)." }
      ]
    },

    secondary: "fillblank",
    fillblank: {
      title: "Cardinal Virtues Fill-in-the-Blank",
      instruction: "Fill in the missing word.",
      sentences: [
        { text: "___ is the wisdom to choose what is truly good.", answer: "Prudence", options: ["Justice", "Prudence", "Fortitude", "Temperance"] },
        { text: "___ is giving God and neighbor what they are due.", answer: "Justice", options: ["Prudence", "Fortitude", "Justice", "Temperance"] },
        { text: "___ gives us courage to do right even when it is hard.", answer: "Fortitude", options: ["Justice", "Temperance", "Prudence", "Fortitude"] },
        { text: "___ helps us moderate our desires and passions.", answer: "Temperance", options: ["Temperance", "Fortitude", "Justice", "Prudence"] }
      ]
    },

    quiz: {
      questions: [
        { q: "Which virtue is called the 'charioteer' of the others?", opts: ["Justice", "Fortitude", "Prudence", "Temperance"], correct: 2 },
        { q: "Justice means giving God and others what they are ___.", opts: ["given", "due", "promised", "asking for"], correct: 1 },
        { q: "Which virtue helps us stay courageous in difficult times?", opts: ["Temperance", "Prudence", "Justice", "Fortitude"], correct: 3 },
        { q: "Temperance helps us control our ___.", opts: ["talents", "friends", "desires and passions", "prayer life"], correct: 2 },
        { q: "The word 'cardinal' comes from the Latin word for ___.", opts: ["heart", "crown", "hinge", "fire"], correct: 2 }
      ]
    },

    prayer: {
      title: "Prayer for Virtue",
      lines: [
        { s: "L", t: "Lord, help us to grow in the four cardinal virtues." },
        { s: "A", t: "Give us prudence to know what is truly good." },
        { s: "L", t: "Give us justice to treat every person with dignity." },
        { s: "A", t: "Give us fortitude to do right even when it is hard." },
        { s: "L", t: "Give us temperance to keep our desires ordered to love." },
        { s: "A", t: "Make us holy as you are holy. Amen." }
      ]
    }
  },

  // ── WEEK 16 ────────────────────────────────────────────────
  {
    week: 16,
    title: "The Theological Virtues",
    pillar: "Morality",
    verse: "So faith, hope, and love remain, these three; but the greatest of these is love. — 1 Corinthians 13:13",

    discover: {
      title: "Discover: Faith, Hope, and Love",
      instruction: "Tap each card to learn about the three theological virtues.",
      items: [
        { icon: "🙏", name: "Faith", desc: "Faith is the theological virtue by which we believe in God and all He has revealed, because God Himself is truth. It is both a gift from God and our free response (CCC 1814)." },
        { icon: "🌈", name: "Hope", desc: "Hope is the confident expectation of eternal life and the graces needed to reach it. It anchors us amid suffering and keeps our eyes on God's promises (CCC 1817–1818)." },
        { icon: "❤️", name: "Love (Charity)", desc: "Charity is the greatest virtue — the love of God above all things, and love of neighbor for God's sake. St. Paul says it is greater than faith and hope combined (CCC 1822–1823)." },
        { icon: "🎁", name: "Infused by God", desc: "Unlike cardinal virtues which we practice and develop, theological virtues are infused — poured into us by God — at Baptism. They connect us directly to God (CCC 1812–1813)." }
      ]
    },

    secondary: "timeline",
    timeline: {
      title: "From Faith to Love — In Order!",
      instruction: "Tap two items to swap them into the correct order.",
      items: [
        { id: 1, text: "Faith — we believe in God and trust His word", order: 1 },
        { id: 2, text: "Hope — we expect eternal life with confidence", order: 2 },
        { id: 3, text: "Love — the greatest virtue, poured out for God and neighbor", order: 3 },
        { id: 4, text: "We act on love through the Works of Mercy", order: 4 },
        { id: 5, text: "Our love unites us with the whole Body of Christ", order: 5 }
      ]
    },

    quiz: {
      questions: [
        { q: "Which are the three theological virtues?", opts: ["Prudence, Justice, Fortitude", "Faith, Hope, Love", "Mercy, Grace, Peace", "Truth, Beauty, Goodness"], correct: 1 },
        { q: "Which theological virtue is the greatest?", opts: ["Faith", "Hope", "Love/Charity", "Prudence"], correct: 2 },
        { q: "Theological virtues are ___ by God at Baptism.", opts: ["earned", "infused", "commanded", "practiced"], correct: 1 },
        { q: "Hope keeps our eyes on God's ___.", opts: ["commandments", "promises", "priests", "books"], correct: 1 },
        { q: "St. Paul says love is ___ than faith and hope.", opts: ["smaller", "equal", "greater", "similar"], correct: 2 }
      ]
    },

    prayer: {
      title: "Acts of Faith, Hope, and Love",
      lines: [
        { s: "L", t: "Let us pray our acts of faith, hope, and love." },
        { s: "A", t: "O my God, I firmly believe that you are one God in three Persons." },
        { s: "L", t: "Act of Hope:" },
        { s: "A", t: "O my God, I hope in you for grace and for glory, because of your promises." },
        { s: "L", t: "Act of Love:" },
        { s: "A", t: "O my God, I love you above all things. Help me to love you more. Amen." }
      ]
    }
  },

  // ── WEEK 17 ────────────────────────────────────────────────
  {
    week: 17,
    title: "Sin and God's Mercy",
    pillar: "Morality",
    verse: "If we confess our sins, he is faithful and just to forgive us our sins. — 1 John 1:9",

    discover: {
      title: "Discover: Sin and Forgiveness",
      instruction: "Tap each card to understand sin and God's mercy.",
      items: [
        { icon: "🎯", name: "What Is Sin?", desc: "Sin is an offense against God — a failure to love Him and our neighbor. CCC 1849 defines it as 'an utterance, a deed, or a desire contrary to the eternal law.' It wounds our relationship with God." },
        { icon: "🔴", name: "Mortal Sin", desc: "Mortal sin completely breaks our relationship with God. It requires three conditions: grave matter, full knowledge, and deliberate consent. It kills the life of grace in the soul (CCC 1857)." },
        { icon: "🟡", name: "Venial Sin", desc: "Venial sin weakens but does not destroy our relationship with God. It is a less serious offense, or grave matter done without full knowledge or consent (CCC 1862–1863)." },
        { icon: "💛", name: "God's Mercy", desc: "God's mercy is infinitely greater than all our sins. The parable of the Prodigal Son shows a Father who runs to embrace the returning sinner. God never stops loving us (CCC 1846)." },
        { icon: "🕊️", name: "The Sacrament of Reconciliation", desc: "Jesus gave the Church the power to forgive sins (John 20:23). In Confession, through the priest, God forgives sins and restores grace. Going regularly is a great spiritual practice (CCC 1440)." }
      ]
    },

    secondary: "fillblank",
    fillblank: {
      title: "Sin and Mercy Fill-in-the-Blank",
      instruction: "Fill in the missing word.",
      sentences: [
        { text: "Mortal sin completely ___ our relationship with God.", answer: "breaks", options: ["weakens", "breaks", "improves", "questions"] },
        { text: "Venial sin ___ our relationship with God.", answer: "weakens", options: ["destroys", "weakens", "fixes", "removes"] },
        { text: "God's mercy is ___ than all our sins.", answer: "greater", options: ["smaller", "equal", "greater", "less"] },
        { text: "Jesus gave the Church the power to ___ sins.", answer: "forgive", options: ["judge", "forgive", "punish", "remember"] }
      ]
    },

    quiz: {
      questions: [
        { q: "Which type of sin breaks our relationship with God completely?", opts: ["Venial sin", "Mortal sin", "Original sin", "Any mistake"], correct: 1 },
        { q: "How many conditions are needed for a mortal sin?", opts: ["1", "2", "3", "7"], correct: 2 },
        { q: "Which parable shows God's mercy to sinners?", opts: ["Mustard Seed", "Good Samaritan", "Prodigal Son", "Sower and Seed"], correct: 2 },
        { q: "Where did Jesus give the Church the power to forgive sins?", opts: ["Matthew 5", "John 20:23", "Luke 15", "Acts 2"], correct: 1 },
        { q: "Venial sin ___ our relationship with God.", opts: ["destroys", "strengthens", "weakens", "removes"], correct: 2 }
      ]
    },

    prayer: {
      title: "Act of Contrition",
      lines: [
        { s: "L", t: "Let us tell God we are truly sorry for our sins." },
        { s: "A", t: "O my God, I am heartily sorry for having offended you." },
        { s: "L", t: "Tell God why you are sorry:" },
        { s: "A", t: "I detest all my sins because I dread the loss of heaven and because they offend you." },
        { s: "L", t: "Make your promise to God:" },
        { s: "A", t: "I firmly resolve to sin no more and to avoid the near occasions of sin. Amen." }
      ]
    }
  },

  // ── WEEK 18 ────────────────────────────────────────────────
  {
    week: 18,
    title: "The Works of Mercy",
    pillar: "Morality",
    verse: "Truly I say to you, as long as you did it to one of these my least brothers, you did it to me. — Matthew 25:40",

    discover: {
      title: "Discover: Love in Action",
      instruction: "Tap each card to learn about the Works of Mercy.",
      items: [
        { icon: "🍞", name: "Corporal Works of Mercy", desc: "The Corporal Works of Mercy are physical acts of love: feed the hungry, give drink to the thirsty, clothe the naked, shelter the homeless, visit the sick, ransom the captive, bury the dead (CCC 2447)." },
        { icon: "💬", name: "Spiritual Works of Mercy", desc: "The Spiritual Works of Mercy care for the soul: instruct the ignorant, counsel the doubtful, admonish sinners, bear wrongs patiently, forgive offenses, comfort the afflicted, pray for the living and dead (CCC 2447)." },
        { icon: "👤", name: "Seeing Christ in Others", desc: "In Matthew 25, Jesus tells us that when we serve the hungry, thirsty, stranger, naked, sick, or imprisoned — we serve HIM. Every person in need is Jesus in disguise." },
        { icon: "🌍", name: "Catholic Social Teaching", desc: "The Works of Mercy connect to Catholic Social Teaching, which calls us to build a just society: care for the poor, protect human dignity, and seek peace (CCC 2419–2420)." }
      ]
    },

    secondary: "sort",
    sort: {
      title: "Corporal or Spiritual Work of Mercy?",
      instruction: "Tap the work, then tap its type.",
      items: [
        { name: "Feed the hungry", icon: "🍞", group: "Corporal" },
        { name: "Pray for the living and dead", icon: "🙏", group: "Spiritual" },
        { name: "Clothe the naked", icon: "👕", group: "Corporal" },
        { name: "Comfort the afflicted", icon: "💛", group: "Spiritual" },
        { name: "Visit the sick", icon: "🏥", group: "Corporal" },
        { name: "Counsel the doubtful", icon: "💬", group: "Spiritual" },
        { name: "Shelter the homeless", icon: "🏠", group: "Corporal" }
      ],
      groups: ["Corporal", "Spiritual"],
      colors: { "Corporal": "#D4A843", "Spiritual": "#9B6DB8" },
      icons:  { "Corporal": "🍞", "Spiritual": "💬" }
    },

    quiz: {
      questions: [
        { q: "How many Corporal Works of Mercy are there?", opts: ["4", "5", "6", "7"], correct: 3 },
        { q: "In Matthew 25, Jesus says those who serve the poor serve ___.", opts: ["the Church", "themselves", "Jesus Himself", "their neighbors"], correct: 2 },
        { q: "Which of these is a Spiritual Work of Mercy?", opts: ["Feed the hungry", "Pray for the living and dead", "Visit the sick", "Clothe the naked"], correct: 1 },
        { q: "Which of these is a Corporal Work of Mercy?", opts: ["Comfort the afflicted", "Counsel the doubtful", "Visit the sick", "Forgive offenses"], correct: 2 },
        { q: "The Works of Mercy show love through ___.", opts: ["Thinking kind thoughts", "Action and service", "Church attendance only", "Giving money only"], correct: 1 }
      ]
    },

    prayer: {
      title: "Prayer of Service",
      lines: [
        { s: "L", t: "Lord Jesus, you told us that serving the poor is serving you." },
        { s: "A", t: "Open our eyes to see your face in those who suffer." },
        { s: "L", t: "We pray for the hungry, the homeless, and the lonely." },
        { s: "A", t: "Help us to reach out with your mercy and love." },
        { s: "L", t: "Give us hearts ready to serve, not just to receive." },
        { s: "A", t: "Make us instruments of your mercy in the world. Amen." }
      ]
    }
  },

  // ── WEEK 19 ────────────────────────────────────────────────
  {
    week: 19,
    title: "Social Justice and Human Dignity",
    pillar: "Morality",
    verse: "You shall love your neighbor as yourself. — Matthew 22:39",

    discover: {
      title: "Discover: The Dignity of Every Person",
      instruction: "Tap each card to learn about human dignity and justice.",
      items: [
        { icon: "💎", name: "Made in God's Image", desc: "Every human person is made in the image and likeness of God (imago Dei). This is why every life — from conception to natural death — deserves respect and protection (CCC 1700–1701)." },
        { icon: "⚖️", name: "Social Justice", desc: "Social justice means ordering society so that people can access what they need to live with dignity: food, shelter, education, healthcare, and peace. It is part of loving our neighbor (CCC 1928)." },
        { icon: "✊", name: "Option for the Poor", desc: "Catholic Social Teaching calls for a 'preferential option for the poor' — not that the poor matter more than others, but that those who are most vulnerable deserve special attention and protection (CCC 2448)." },
        { icon: "🌿", name: "Care for Creation", desc: "God entrusted creation to humanity as stewards — not owners. We are called to care for the environment as part of loving God and neighbor, now and for future generations (CCC 2415)." },
        { icon: "✝️", name: "Saints of Justice", desc: "Many saints modeled social justice: St. Martin de Porres served the poor, St. Katharine Drexel fought for racial equality, St. Oscar Romero spoke for the oppressed. Holiness includes justice." }
      ]
    },

    secondary: "fillblank",
    fillblank: {
      title: "Social Justice Fill-in-the-Blank",
      instruction: "Fill in the missing word.",
      sentences: [
        { text: "Every person is made in God's ___ and likeness.", answer: "image", options: ["image", "shadow", "laws", "plan"] },
        { text: "Catholic Social Teaching includes a preferential option for the ___.", answer: "poor", options: ["priests", "wealthy", "poor", "scholars"] },
        { text: "Social ___ means ordering society so people can live with dignity.", answer: "justice", options: ["media", "justice", "science", "rules"] },
        { text: "We are called to be ___ of creation, not its owners.", answer: "stewards", options: ["rulers", "stewards", "users", "lords"] }
      ]
    },

    quiz: {
      questions: [
        { q: "What makes every human life valuable?", opts: ["Intelligence", "Being baptized", "Being made in God's image", "Hard work"], correct: 2 },
        { q: "The Church's 'option for the poor' means:", opts: ["The poor are better than others", "We ignore the rich", "The vulnerable deserve special attention", "Only poor people go to heaven"], correct: 2 },
        { q: "Which saint fought for racial equality?", opts: ["St. Francis", "St. Katharine Drexel", "St. Patrick", "St. Peter"], correct: 1 },
        { q: "We should care for the environment because we are God's ___.", opts: ["Owners of creation", "Stewards of creation", "Masters of nature", "Kings of the earth"], correct: 1 },
        { q: "Social justice is part of following which commandment?", opts: ["First Commandment", "Third Commandment", "Love your neighbor", "Honor your parents"], correct: 2 }
      ]
    },

    prayer: {
      title: "Prayer for Justice",
      lines: [
        { s: "L", t: "Lord, you created every person in your image and likeness." },
        { s: "A", t: "Help us to respect the dignity of every human being." },
        { s: "L", t: "We pray for the poor, the hungry, and the oppressed." },
        { s: "A", t: "Help us to build a world of fairness and peace." },
        { s: "L", t: "Give us the courage of the saints who fought for justice." },
        { s: "A", t: "May your Kingdom of love and justice come. Amen." }
      ]
    }
  },

  // ── WEEK 20 ────────────────────────────────────────────────
  {
    week: 20,
    title: "Unit 3 Review: The Moral Life",
    pillar: "Review",
    verse: "Be perfect, therefore, as your heavenly Father is perfect. — Matthew 5:48",

    discover: {
      title: "Review: Living a Moral Life",
      instruction: "Tap each card to review the key ideas of our moral life.",
      items: [
        { icon: "💬", name: "Review: Conscience", desc: "Conscience is God's law written in our hearts. We must form it through prayer, Scripture, and Church teaching — and always follow it once properly formed." },
        { icon: "🏛️", name: "Review: The Virtues", desc: "The four Cardinal Virtues are Prudence, Justice, Fortitude, and Temperance. The three Theological Virtues are Faith, Hope, and Love — infused by God at Baptism." },
        { icon: "🕊️", name: "Review: Sin and Mercy", desc: "Mortal sin destroys grace; venial sin weakens it. God's mercy is always greater than our sin. The Sacrament of Reconciliation restores our friendship with God." },
        { icon: "🍞", name: "Review: Works of Mercy", desc: "The 7 Corporal Works of Mercy serve physical needs; the 7 Spiritual Works serve the soul. Every person in need is Jesus Himself in Matthew 25." }
      ]
    },

    secondary: "sort",
    sort: {
      title: "Which Type of Virtue?",
      instruction: "Tap each virtue, then tap its category.",
      items: [
        { name: "Faith", icon: "🙏", group: "Theological" },
        { name: "Hope", icon: "🌈", group: "Theological" },
        { name: "Love", icon: "❤️", group: "Theological" },
        { name: "Prudence", icon: "🧠", group: "Cardinal" },
        { name: "Justice", icon: "⚖️", group: "Cardinal" },
        { name: "Fortitude", icon: "💪", group: "Cardinal" },
        { name: "Temperance", icon: "🎯", group: "Cardinal" }
      ],
      groups: ["Theological", "Cardinal"],
      colors: { "Theological": "#D4A843", "Cardinal": "#4A90D9" },
      icons:  { "Theological": "✨", "Cardinal": "🏛️" }
    },

    quiz: {
      questions: [
        { q: "Which virtue is the 'charioteer' of all virtues?", opts: ["Justice", "Hope", "Prudence", "Charity"], correct: 2 },
        { q: "What type of sin breaks grace completely?", opts: ["Original sin", "Venial sin", "Mortal sin", "Concupiscence"], correct: 2 },
        { q: "The Works of Mercy serve others because every person in need is ___.", opts: ["our family", "Jesus Himself", "a saint", "an angel"], correct: 1 },
        { q: "Which is NOT a Theological Virtue?", opts: ["Faith", "Hope", "Fortitude", "Love"], correct: 2 },
        { q: "How do we form a good conscience?", opts: ["By following our feelings", "Prayer, Scripture, and Church teaching", "By asking our friends", "By watching TV"], correct: 1 }
      ]
    },

    prayer: {
      title: "Our Father — Review Prayer",
      lines: [
        { s: "L", t: "Let us pray the prayer that Jesus taught us." },
        { s: "A", t: "Our Father, who art in heaven, hallowed be thy name." },
        { s: "L", t: "May God's Kingdom of justice and love come on earth." },
        { s: "A", t: "Thy kingdom come, thy will be done, on earth as it is in heaven." },
        { s: "L", t: "Forgive us as we forgive those who hurt us." },
        { s: "A", t: "And lead us not into temptation, but deliver us from evil. Amen." }
      ]
    }
  },

  // ── WEEK 21 ────────────────────────────────────────────────
  {
    week: 21,
    title: "The Sacrament of Reconciliation",
    pillar: "Sacraments",
    verse: "Whose sins you forgive are forgiven them. — John 20:23",

    discover: {
      title: "Discover: The Sacrament of Forgiveness",
      instruction: "Tap each card to understand Reconciliation.",
      items: [
        { icon: "🙏", name: "God Wants to Forgive", desc: "God never stops loving us, even when we sin. Jesus gave the Apostles authority to forgive sins so that we could experience God's mercy concretely through the Church (CCC 1440–1442)." },
        { icon: "📋", name: "Examining Your Conscience", desc: "Before Confession, we reflect on our actions: How have I failed to love God? How have I hurt my neighbor? This honest self-examination is the first step of conversion (CCC 1454)." },
        { icon: "😔", name: "Contrition: Being Truly Sorry", desc: "Contrition is sorrow for sin and the firm resolution not to sin again. Perfect contrition comes from love of God; imperfect contrition from fear of punishment — both are valid (CCC 1451–1453)." },
        { icon: "🗣️", name: "Confessing Sins", desc: "We confess our mortal sins to the priest by kind and number. Venial sins may also be confessed. The priest acts in the Person of Christ — he is not judging you, he is an instrument of mercy (CCC 1455–1458)." },
        { icon: "✅", name: "Absolution and Penance", desc: "The priest gives a penance (prayer or action) and then pronounces the words of absolution in the name of the Trinity. God forgives completely — nothing held back (CCC 1449–1450)." }
      ]
    },

    secondary: "timeline",
    timeline: {
      title: "Steps of Reconciliation — In Order!",
      instruction: "Tap two items to swap them into the correct order.",
      items: [
        { id: 1, text: "Examine your conscience honestly", order: 1 },
        { id: 2, text: "Feel sorrow (contrition) and resolve to amend", order: 2 },
        { id: 3, text: "Confess your sins to the priest", order: 3 },
        { id: 4, text: "Receive penance from the priest", order: 4 },
        { id: 5, text: "Receive absolution — God forgives you!", order: 5 }
      ]
    },

    quiz: {
      questions: [
        { q: "Who gave the Church the authority to forgive sins?", opts: ["Peter", "Moses", "Jesus", "The Pope"], correct: 2 },
        { q: "What is contrition?", opts: ["A type of penance", "Sorrow for sin with resolution to amend", "Confessing to a friend", "A prayer after Mass"], correct: 1 },
        { q: "What must we confess to the priest?", opts: ["All venial sins", "Our mortal sins by kind and number", "Our thoughts only", "Our childhood mistakes"], correct: 1 },
        { q: "After confession, the priest gives us ___.", opts: ["A lecture", "Communion", "A penance and absolution", "A new name"], correct: 2 },
        { q: "How completely does God forgive in this sacrament?", opts: ["Partially", "Only if we are perfect", "Completely — nothing held back", "After a waiting period"], correct: 2 }
      ]
    },

    prayer: {
      title: "Prayer Before Confession",
      lines: [
        { s: "L", t: "Lord Jesus, I come to you with a humble heart." },
        { s: "A", t: "I know I have sinned and have failed to love." },
        { s: "L", t: "I believe in your mercy, which is greater than all my faults." },
        { s: "A", t: "Give me the courage to confess honestly and completely." },
        { s: "L", t: "I trust that through the priest, you will truly forgive me." },
        { s: "A", t: "Thank you for your mercy and for calling me back to you. Amen." }
      ]
    }
  },

  // ── WEEK 22 ────────────────────────────────────────────────
  {
    week: 22,
    title: "The Eucharist: Source and Summit",
    pillar: "Sacraments",
    verse: "I am the living bread which came down from heaven. — John 6:51",

    discover: {
      title: "Discover: The Eucharist",
      instruction: "Tap each card to deepen your understanding of the Eucharist.",
      items: [
        { icon: "🏆", name: "Source and Summit", desc: "The Eucharist is called the 'source and summit' of the Christian life — all other sacraments and ministries flow from it and are directed toward it (CCC 1324)." },
        { icon: "✝️", name: "The Real Presence", desc: "In the Eucharist, bread and wine truly become the Body and Blood of Jesus Christ — a change called transubstantiation. Jesus is truly, really, and substantially present (CCC 1373–1374)." },
        { icon: "🔄", name: "Re-Presenting the Sacrifice", desc: "The Mass does not repeat the sacrifice of the Cross — it makes that same once-for-all sacrifice truly present again. Every Mass is Calvary and Easter made present for us (CCC 1366–1367)." },
        { icon: "🤝", name: "Communion and Community", desc: "When we receive Communion, we are united not only with Jesus but with all members of His body — the Church, living and dead. The Eucharist builds up the Body of Christ (CCC 1396)." },
        { icon: "⭐", name: "Eucharistic Adoration", desc: "Because Jesus is truly present in the Eucharist, we can adore Him in the tabernacle or at an Exposition. Spending time with Jesus in adoration is a powerful form of prayer (CCC 1378–1379)." }
      ]
    },

    secondary: "fillblank",
    fillblank: {
      title: "Eucharist Fill-in-the-Blank",
      instruction: "Fill in the missing word.",
      sentences: [
        { text: "The Eucharist is the ___ and summit of Christian life.", answer: "source", options: ["goal", "source", "end", "symbol"] },
        { text: "The change of bread and wine into Jesus' Body and Blood is called ___.", answer: "transubstantiation", options: ["transformation", "transubstantiation", "consecration", "elevation"] },
        { text: "The Mass makes the sacrifice of the ___ present again.", answer: "Cross", options: ["Nativity", "Cross", "Baptism", "Rosary"] },
        { text: "Jesus is kept in the ___ in the church.", answer: "tabernacle", options: ["altar", "tabernacle", "chalice", "pew"] }
      ]
    },

    quiz: {
      questions: [
        { q: "The Eucharist is the source and ___ of Christian life.", opts: ["center", "goal", "summit", "beginning"], correct: 2 },
        { q: "What is transubstantiation?", opts: ["Jesus becoming a symbol", "Bread and wine becoming Jesus' Body and Blood", "A type of prayer", "A feast day"], correct: 1 },
        { q: "The Mass makes which event present again?", opts: ["The Nativity", "The Baptism of Jesus", "The sacrifice of the Cross", "Pentecost"], correct: 2 },
        { q: "When we receive Communion, we are united with ___.", opts: ["The Pope only", "Jesus and all members of His Body", "Only our parish", "Only the saints"], correct: 1 },
        { q: "Eucharistic Adoration means spending time with Jesus in the ___.", opts: ["confessional", "parish hall", "tabernacle/monstrance", "pulpit"], correct: 2 }
      ]
    },

    prayer: {
      title: "Prayer of Adoration",
      lines: [
        { s: "L", t: "Lord Jesus, you are truly present in the Eucharist." },
        { s: "A", t: "We adore you, O Christ, truly present in the Blessed Sacrament." },
        { s: "L", t: "You give yourself completely to us at every Mass." },
        { s: "A", t: "May we receive you with reverence, gratitude, and love." },
        { s: "L", t: "O Sacrament most holy, O Sacrament divine," },
        { s: "A", t: "All praise and all thanksgiving be every moment thine. Amen." }
      ]
    }
  },

  // ── WEEK 23 ────────────────────────────────────────────────
  {
    week: 23,
    title: "The Sacrament of Confirmation",
    pillar: "Sacraments",
    verse: "You will receive power when the Holy Spirit comes upon you. — Acts 1:8",

    discover: {
      title: "Discover: Confirmed in the Spirit",
      instruction: "Tap each card to understand Confirmation.",
      items: [
        { icon: "🔥", name: "Completing Baptism", desc: "Confirmation completes and perfects what began at Baptism. It more fully incorporates us into the Church and makes us soldiers of Christ. It is received only once (CCC 1285, 1304)." },
        { icon: "👁️", name: "The Seven Gifts", desc: "Confirmation strengthens the Seven Gifts of the Holy Spirit: Wisdom, Understanding, Counsel, Fortitude, Knowledge, Piety, and Fear of the Lord. These gifts help us live as disciples (CCC 1303)." },
        { icon: "✋", name: "The Rite of Confirmation", desc: "The essential rite is the Laying on of Hands with Anointing with Sacred Chrism by the Bishop, who says: 'Be sealed with the Gift of the Holy Spirit.' The word 'seal' indicates permanence (CCC 1300–1301)." },
        { icon: "🦸", name: "Witnesses of Faith", desc: "Confirmed Catholics are called to be witnesses — not just to believe privately, but to proclaim and defend the faith boldly in daily life. Confirmation equips us to evangelize (CCC 1316)." }
      ]
    },

    secondary: "sort",
    sort: {
      title: "Gifts of the Holy Spirit — Sort It!",
      instruction: "Sort each gift into the right category.",
      items: [
        { name: "Wisdom", icon: "💡", group: "Gifts for the Mind" },
        { name: "Understanding", icon: "🔍", group: "Gifts for the Mind" },
        { name: "Knowledge", icon: "📚", group: "Gifts for the Mind" },
        { name: "Counsel", icon: "💬", group: "Gifts for Action" },
        { name: "Fortitude", icon: "💪", group: "Gifts for Action" },
        { name: "Piety", icon: "🙏", group: "Gifts for the Heart" },
        { name: "Fear of the Lord", icon: "✨", group: "Gifts for the Heart" }
      ],
      groups: ["Gifts for the Mind", "Gifts for Action", "Gifts for the Heart"],
      colors: { "Gifts for the Mind": "#4A90D9", "Gifts for Action": "#6DB87B", "Gifts for the Heart": "#D4A843" },
      icons:  { "Gifts for the Mind": "💡", "Gifts for Action": "💪", "Gifts for the Heart": "🙏" }
    },

    quiz: {
      questions: [
        { q: "Confirmation ___ what began at Baptism.", opts: ["replaces", "undoes", "completes", "contradicts"], correct: 2 },
        { q: "How many Gifts of the Holy Spirit are there?", opts: ["4", "5", "7", "12"], correct: 2 },
        { q: "Which minister usually administers Confirmation?", opts: ["Any priest", "A deacon", "The bishop", "A catechist"], correct: 2 },
        { q: "The essential rite includes anointing with ___.", opts: ["Water", "Holy water", "Sacred Chrism", "Incense"], correct: 2 },
        { q: "What are Confirmed Catholics called to be?", opts: ["Perfect saints", "Ordained priests", "Witnesses and evangelizers", "Church leaders only"], correct: 2 }
      ]
    },

    prayer: {
      title: "Prayer to the Holy Spirit (Confirmation)",
      lines: [
        { s: "L", t: "Come, Holy Spirit! Come, Fire of God's love!" },
        { s: "A", t: "Seal us as Your own, fill us with Your seven gifts." },
        { s: "L", t: "Give us wisdom to know what is true and good." },
        { s: "A", t: "Give us fortitude to be bold witnesses of our faith." },
        { s: "L", t: "May our Confirmation make us soldiers of Christ." },
        { s: "A", t: "Lord, we say yes to you — seal us with your love. Amen." }
      ]
    }
  },

  // ── WEEK 24 ────────────────────────────────────────────────
  {
    week: 24,
    title: "Holy Orders and Matrimony",
    pillar: "Sacraments",
    verse: "I am among you as one who serves. — Luke 22:27",

    discover: {
      title: "Discover: Sacraments of Service",
      instruction: "Tap each card to learn about Holy Orders and Matrimony.",
      items: [
        { icon: "✝️", name: "Holy Orders", desc: "Holy Orders ordains men as bishops, priests, or deacons to serve God's People. Bishops have the fullness of the priesthood; priests cooperate with them; deacons serve in special ministries (CCC 1554–1571)." },
        { icon: "⚡", name: "In the Person of Christ", desc: "An ordained priest acts 'in persona Christi' — in the person of Christ — when he celebrates the sacraments. At Mass, it is Christ Himself acting through the priest's words and hands (CCC 1548)." },
        { icon: "💍", name: "Matrimony", desc: "In the Sacrament of Matrimony, a man and woman exchange vows before God and the Church. Their love becomes a sacrament — a visible sign of Christ's love for His Church (CCC 1601, 1661)." },
        { icon: "👨‍👩‍👧", name: "The Domestic Church", desc: "The family formed in Matrimony is called the 'domestic church' — a little church in the home where faith is first taught and practiced. Parents are the first catechists (CCC 1666, 2225)." }
      ]
    },

    secondary: "sort",
    sort: {
      title: "Holy Orders or Matrimony?",
      instruction: "Tap each phrase, then tap which sacrament it belongs to.",
      items: [
        { name: "Ordained as bishop, priest, or deacon", icon: "✝️", group: "Holy Orders" },
        { name: "Man and woman exchange vows", icon: "💍", group: "Matrimony" },
        { name: "Acts 'in persona Christi'", icon: "⚡", group: "Holy Orders" },
        { name: "Creates the 'domestic church'", icon: "🏠", group: "Matrimony" },
        { name: "Can only be received by baptized men", icon: "👤", group: "Holy Orders" },
        { name: "Sign of Christ's love for the Church", icon: "❤️", group: "Matrimony" },
        { name: "Administers the sacraments", icon: "🕊️", group: "Holy Orders" }
      ],
      groups: ["Holy Orders", "Matrimony"],
      colors: { "Holy Orders": "#4A90D9", "Matrimony": "#D4A843" },
      icons:  { "Holy Orders": "✝️", "Matrimony": "💍" }
    },

    quiz: {
      questions: [
        { q: "How many degrees of Holy Orders are there?", opts: ["1", "2", "3", "7"], correct: 2 },
        { q: "A priest acts 'in persona Christi,' which means?", opts: ["In the name of the bishop", "In the person of Christ", "In the spirit of the Apostles", "In the Church's authority"], correct: 1 },
        { q: "In Matrimony, the couple's love is a sign of Christ's love for ___.", opts: ["Humanity", "The Pope", "His Church", "His Mother"], correct: 2 },
        { q: "The family formed in Matrimony is called the ___ church.", opts: ["small", "local", "domestic", "mini"], correct: 2 },
        { q: "Who are the first catechists of children in faith?", opts: ["Priests", "Bishops", "Parents", "Catechists"], correct: 2 }
      ]
    },

    prayer: {
      title: "Prayer for Vocations",
      lines: [
        { s: "L", t: "Lord, you call some to Holy Orders and some to Matrimony." },
        { s: "A", t: "We pray for all priests, deacons, and bishops who serve your people." },
        { s: "L", t: "We pray for all families, that their homes may be domestic churches." },
        { s: "A", t: "Help us to discern our own vocations with open hearts." },
        { s: "L", t: "May we answer your call generously, as Mary said yes." },
        { s: "A", t: "Lord, here I am — help me to serve you. Amen." }
      ]
    }
  },

  // ── WEEK 25 ────────────────────────────────────────────────
  {
    week: 25,
    title: "Unit 4 Review: Sacraments",
    pillar: "Review",
    verse: "Christ has no body now but yours. — St. Teresa of Ávila",

    discover: {
      title: "Review: The Sacraments",
      instruction: "Tap each card to review the sacraments we studied.",
      items: [
        { icon: "🕊️", name: "Review: Reconciliation", desc: "Jesus gave the Church the power to forgive sins. In Confession, we examine our conscience, feel contrition, confess our sins, receive penance, and God fully forgives us through the priest." },
        { icon: "🏆", name: "Review: The Eucharist", desc: "The Eucharist is the source and summit of Christian life. Transubstantiation means bread and wine truly become Jesus' Body and Blood. The Mass re-presents the sacrifice of the Cross." },
        { icon: "🔥", name: "Review: Confirmation", desc: "Confirmation completes Baptism, strengthening us with the Holy Spirit's 7 gifts. The bishop anoints with Sacred Chrism saying 'Be sealed with the Gift of the Holy Spirit.'" },
        { icon: "✝️", name: "Review: Holy Orders & Matrimony", desc: "Holy Orders ordains men to serve as deacons, priests, or bishops. Matrimony unites man and woman in a covenant of love that images Christ's love for the Church. The family is the 'domestic church.'" }
      ]
    },

    secondary: "fillblank",
    fillblank: {
      title: "Sacraments Review Fill-in-the-Blank",
      instruction: "Fill in the missing word.",
      sentences: [
        { text: "The Eucharist is the source and ___ of Christian life.", answer: "summit", options: ["center", "summit", "end", "symbol"] },
        { text: "In Confirmation, the Holy Spirit's ___ gifts strengthen us.", answer: "seven", options: ["four", "seven", "three", "twelve"] },
        { text: "In Reconciliation, God forgives us ___ — nothing held back.", answer: "completely", options: ["partially", "sometimes", "completely", "conditionally"] },
        { text: "The family is called the ___ Church.", answer: "domestic", options: ["domestic", "small", "local", "parish"] }
      ]
    },

    quiz: {
      questions: [
        { q: "What is transubstantiation?", opts: ["A prayer at Mass", "Bread and wine becoming Christ's Body and Blood", "A type of fasting", "The blessing of water"], correct: 1 },
        { q: "What does the bishop say during Confirmation?", opts: ["I baptize you", "Be sealed with the Gift of the Holy Spirit", "This is my Body", "Go in peace"], correct: 1 },
        { q: "How many steps are in a good confession?", opts: ["2", "3", "4", "5"], correct: 3 },
        { q: "Holy Orders can be received by ___.", opts: ["Any baptized person", "Only women", "Only baptized men", "Any Christian"], correct: 2 },
        { q: "Which sacrament's vows image Christ's love for the Church?", opts: ["Holy Orders", "Confirmation", "Matrimony", "Baptism"], correct: 2 }
      ]
    },

    prayer: {
      title: "Hail Mary — Review Prayer",
      lines: [
        { s: "L", t: "Let us pray to Mary, who said yes to God's call." },
        { s: "A", t: "Hail Mary, full of grace, the Lord is with thee." },
        { s: "L", t: "Blessed art thou among women, and blessed is the fruit of thy womb, Jesus." },
        { s: "A", t: "Holy Mary, Mother of God, pray for us sinners." },
        { s: "L", t: "In all the moments of our lives, from our first breath to our last," },
        { s: "A", t: "Now and at the hour of our death. Amen." }
      ]
    }
  },

  // ── WEEK 26 ────────────────────────────────────────────────
  {
    week: 26,
    title: "Deeper Prayer: Lectio Divina and Mental Prayer",
    pillar: "Prayer",
    verse: "Your word is a lamp to my feet and a light to my path. — Psalm 119:105",

    discover: {
      title: "Discover: Praying with Scripture",
      instruction: "Tap each card to learn about deeper forms of prayer.",
      items: [
        { icon: "📖", name: "Lectio Divina", desc: "Lectio Divina ('Sacred Reading') is an ancient form of praying with Scripture in four steps: Read (Lectio), Meditate (Meditatio), Pray (Oratio), and Contemplate (Contemplatio) (CCC 1177)." },
        { icon: "👁️", name: "Read: Lectio", desc: "We slowly read a short Scripture passage, listening for a word or phrase that strikes us. We don't rush through it — we listen as God's living word." },
        { icon: "💭", name: "Meditate: Meditatio", desc: "We chew on the word like food — turning it over in our mind, asking: What is God saying to me through this? How does this touch my life right now?" },
        { icon: "🗣️", name: "Pray and Contemplate", desc: "We respond to God in prayer — adoration, thanks, asking forgiveness. Then we rest quietly in His presence (Contemplatio), simply being with God without many words." },
        { icon: "🧘", name: "Mental Prayer", desc: "Mental prayer is any prayer that is not only with the lips but with the heart — thinking about God, imagining Gospel scenes, talking with Jesus as a friend (CCC 2708–2709)." }
      ]
    },

    secondary: "timeline",
    timeline: {
      title: "Lectio Divina — In Order!",
      instruction: "Tap two items to swap them into the correct order.",
      items: [
        { id: 1, text: "Lectio — slowly read the Scripture passage", order: 1 },
        { id: 2, text: "Meditatio — meditate on the word you noticed", order: 2 },
        { id: 3, text: "Oratio — respond to God in prayer", order: 3 },
        { id: 4, text: "Contemplatio — rest quietly in God's presence", order: 4 },
        { id: 5, text: "Actio — let the word change how you live", order: 5 }
      ]
    },

    quiz: {
      questions: [
        { q: "What does Lectio Divina mean?", opts: ["Holy Communion", "Sacred Reading", "Divine Prayer", "Scripture Study"], correct: 1 },
        { q: "In Lectio Divina, the first step is ___.", opts: ["Praying", "Meditating", "Reading slowly", "Being silent"], correct: 2 },
        { q: "What do we do in the 'Contemplatio' step?", opts: ["Read faster", "Write notes", "Rest silently in God's presence", "Memorize verses"], correct: 2 },
        { q: "Mental prayer means praying with the ___.", opts: ["only our lips", "heart and mind", "prayer book only", "singing voice"], correct: 1 },
        { q: "Who can practice Lectio Divina?", opts: ["Only priests", "Only adults", "Only monks", "Any baptized person"], correct: 3 }
      ]
    },

    prayer: {
      title: "Lectio Divina Practice",
      lines: [
        { s: "L", t: "Let us try Lectio Divina together. Listen: 'Be still and know that I am God.'" },
        { s: "A", t: "Lord, we are listening. Speak, for your servants hear you." },
        { s: "L", t: "Meditate: What word struck you? Rest with it for a moment." },
        { s: "A", t: "Lord, you are God. Help us to be still and know your presence." },
        { s: "L", t: "Respond to God from your heart. Speak to Him now in silence." },
        { s: "A", t: "Thank you for speaking to us in your holy word. Amen." }
      ]
    }
  },

  // ── WEEK 27 ────────────────────────────────────────────────
  {
    week: 27,
    title: "Mary and the Rosary",
    pillar: "Prayer",
    verse: "Do whatever he tells you. — John 2:5",

    discover: {
      title: "Discover: Mary and the Rosary",
      instruction: "Tap each card to learn about Mary and this beautiful prayer.",
      items: [
        { icon: "🌹", name: "Mary: Mother and Model", desc: "Mary is the Mother of God (Theotokos) and the mother of all Christians. Her 'yes' to God at the Annunciation made salvation possible. She is the first and greatest disciple (CCC 967)." },
        { icon: "📿", name: "What Is the Rosary?", desc: "The Rosary is a meditation on the life of Jesus and Mary, praying Hail Marys on beads while meditating on the Mysteries. Pope John Paul II called it his favorite prayer (CCC 971)." },
        { icon: "😊", name: "The Joyful Mysteries", desc: "Joyful Mysteries: Annunciation, Visitation, Nativity, Presentation, Finding in the Temple. These celebrate the hidden life of Jesus and Mary's joyful faith." },
        { icon: "😔", name: "Sorrowful and Glorious", desc: "Sorrowful: Agony in Garden, Scourging, Crowning, Carrying the Cross, Crucifixion. Glorious: Resurrection, Ascension, Pentecost, Assumption, Coronation of Mary." },
        { icon: "💡", name: "The Luminous Mysteries", desc: "Added by Pope John Paul II in 2002: Baptism of Jesus, Wedding at Cana, Proclamation of the Kingdom, Transfiguration, Institution of the Eucharist — mysteries of light from Jesus' public ministry." }
      ]
    },

    secondary: "sort",
    sort: {
      title: "Which Set of Mysteries?",
      instruction: "Sort each event into the correct set of Mysteries.",
      items: [
        { name: "Annunciation", icon: "👼", group: "Joyful" },
        { name: "Crucifixion", icon: "✝️", group: "Sorrowful" },
        { name: "Resurrection", icon: "🌅", group: "Glorious" },
        { name: "Transfiguration", icon: "🌟", group: "Luminous" },
        { name: "Nativity", icon: "⭐", group: "Joyful" },
        { name: "Pentecost", icon: "🔥", group: "Glorious" },
        { name: "Agony in the Garden", icon: "🌿", group: "Sorrowful" }
      ],
      groups: ["Joyful", "Sorrowful", "Glorious", "Luminous"],
      colors: { "Joyful": "#6DB87B", "Sorrowful": "#C0392B", "Glorious": "#D4A843", "Luminous": "#4A90D9" },
      icons:  { "Joyful": "😊", "Sorrowful": "😔", "Glorious": "🌟", "Luminous": "💡" }
    },

    quiz: {
      questions: [
        { q: "What does 'Theotokos' mean?", opts: ["Blessed Virgin", "Mother of God", "Queen of Heaven", "First Apostle"], correct: 1 },
        { q: "How many sets of Mysteries are in the Rosary?", opts: ["2", "3", "4", "5"], correct: 2 },
        { q: "Which Pope added the Luminous Mysteries?", opts: ["Pope Francis", "Pope Benedict XVI", "Pope John Paul II", "Pope Pius XII"], correct: 2 },
        { q: "Mary's words at Cana, 'Do whatever he tells you,' show she is ___.", opts: ["Bossy", "A guide to Jesus", "A priest", "A prophet only"], correct: 1 },
        { q: "Which of these is a Joyful Mystery?", opts: ["Crucifixion", "Pentecost", "Annunciation", "Transfiguration"], correct: 2 }
      ]
    },

    prayer: {
      title: "One Decade of the Rosary",
      lines: [
        { s: "L", t: "Let us pray one decade of the Rosary, meditating on the Annunciation." },
        { s: "A", t: "Our Father, who art in heaven, hallowed be thy name..." },
        { s: "L", t: "The Angel Gabriel said: Hail Mary, full of grace, the Lord is with you." },
        { s: "A", t: "Hail Mary, full of grace, the Lord is with thee... (pray 10 times)" },
        { s: "L", t: "Glory be to the Father, and to the Son, and to the Holy Spirit." },
        { s: "A", t: "As it was in the beginning, is now, and ever shall be. World without end. Amen." }
      ]
    }
  },

  // ── WEEK 28 ────────────────────────────────────────────────
  {
    week: 28,
    title: "Praying the Liturgy of the Hours",
    pillar: "Prayer",
    verse: "Seven times a day I praise you. — Psalm 119:164",

    discover: {
      title: "Discover: The Church's Daily Prayer",
      instruction: "Tap each card to learn about the Liturgy of the Hours.",
      items: [
        { icon: "⏰", name: "What Is the Liturgy of the Hours?", desc: "The Liturgy of the Hours (also called the Divine Office) is the official daily prayer of the Church. It sanctifies the whole day by dedicating morning, daytime, evening, and night to God (CCC 1174)." },
        { icon: "🌅", name: "Morning Prayer (Lauds)", desc: "Lauds is the morning prayer, offered at daybreak. We offer the coming day to God, praying Psalms and a hymn. It echoes the Church rising with Christ each morning." },
        { icon: "🌆", name: "Evening Prayer (Vespers)", desc: "Vespers is prayed at sunset. We give thanks for the day's blessings and ask forgiveness for failures. The Magnificat of Mary is prayed at Vespers each evening." },
        { icon: "📖", name: "Psalms: The Prayer Book of the Bible", desc: "The Liturgy of the Hours is built around the 150 Psalms. Jesus Himself prayed the Psalms. These ancient prayers express every human emotion — joy, sorrow, praise, and need (CCC 1177)." }
      ]
    },

    secondary: "fillblank",
    fillblank: {
      title: "Liturgy of the Hours Fill-in-the-Blank",
      instruction: "Fill in the missing word about the Church's daily prayer.",
      sentences: [
        { text: "Morning Prayer in the Liturgy of the Hours is called ___.", answer: "Lauds", options: ["Vespers", "Lauds", "Compline", "Terce"] },
        { text: "Evening Prayer is called ___.", answer: "Vespers", options: ["Lauds", "Vespers", "None", "Terce"] },
        { text: "The Liturgy of the Hours is built around the 150 ___.", answer: "Psalms", options: ["Gospels", "Prayers", "Psalms", "Epistles"] },
        { text: "Mary's prayer prayed at Vespers is called the ___.", answer: "Magnificat", options: ["Our Father", "Magnificat", "Hail Mary", "Glory Be"] }
      ]
    },

    quiz: {
      questions: [
        { q: "Another name for the Liturgy of the Hours is the ___.", opts: ["Rosary", "Divine Office", "Mass", "Benediction"], correct: 1 },
        { q: "Morning Prayer in the Liturgy of the Hours is called ___.", opts: ["Vespers", "Compline", "Lauds", "Terce"], correct: 2 },
        { q: "Evening Prayer is called ___.", opts: ["Lauds", "Vespers", "Compline", "None"], correct: 1 },
        { q: "The Liturgy of the Hours is built around the ___.", opts: ["Gospels", "Psalms", "Catechism", "Epistles"], correct: 1 },
        { q: "Mary's prayer at Vespers is the ___.", opts: ["Our Father", "Hail Mary", "Magnificat", "Glory Be"], correct: 2 }
      ]
    },

    prayer: {
      title: "Morning Prayer — Lauds",
      lines: [
        { s: "L", t: "O God, come to my assistance; O Lord, make haste to help me." },
        { s: "A", t: "Glory be to the Father, and to the Son, and to the Holy Spirit." },
        { s: "L", t: "Lord, as this new day begins, we offer it to you." },
        { s: "A", t: "May all we do today be for your glory and the good of our neighbor." },
        { s: "L", t: "May our morning prayer rise to you like incense." },
        { s: "A", t: "Bless us this day, Lord. We are yours. Amen." }
      ]
    }
  },

  // ── WEEK 29 ────────────────────────────────────────────────
  {
    week: 29,
    title: "Saints: Our Models and Intercessors",
    pillar: "Prayer",
    verse: "We are surrounded by a great cloud of witnesses. — Hebrews 12:1",

    discover: {
      title: "Discover: The Communion of Saints",
      instruction: "Tap each card to learn about the saints and how they help us.",
      items: [
        { icon: "🌟", name: "What Is a Saint?", desc: "A saint is a person in heaven who lived a holy life and is now in God's eternal presence. The Church canonizes saints officially after verifying miracles, confirming they are with God (CCC 828)." },
        { icon: "🤝", name: "The Communion of Saints", desc: "The Church on earth (Pilgrims), in Purgatory (Penitents), and in Heaven (Triumphant) are all connected. We can ask the saints in heaven to pray for us — like asking a friend to pray (CCC 954–959)." },
        { icon: "📚", name: "Patron Saints", desc: "Each saint has a special area they are associated with — their 'patronage.' St. Luke: doctors. St. Joseph: workers. St. Francis: animals and the environment. St. Thomas Aquinas: students." },
        { icon: "🔥", name: "St. Joan of Arc", desc: "St. Joan of Arc was a teenage girl who heard God's voice and led armies to defend France. She was martyred at 19. She shows that God calls the young and the small to great things (feast: May 30)." },
        { icon: "🌸", name: "St. Thérèse of Lisieux", desc: "'The Little Way' — Thérèse taught that holiness comes through doing small things with great love. She became a Doctor of the Church despite dying at age 24 (feast: October 1)." }
      ]
    },

    secondary: "sort",
    sort: {
      title: "Match the Saint to Their Role!",
      instruction: "Tap the saint's name, then tap what they are patron of.",
      items: [
        { name: "St. Luke", icon: "🩺", group: "Patron of Doctors" },
        { name: "St. Joseph", icon: "🔨", group: "Patron of Workers" },
        { name: "St. Francis", icon: "🌿", group: "Patron of the Environment" },
        { name: "St. Thomas Aquinas", icon: "📚", group: "Patron of Students" },
        { name: "St. Cecilia", icon: "🎵", group: "Patron of Musicians" },
        { name: "St. Dymphna", icon: "💙", group: "Patron of Mental Health" },
        { name: "St. Christopher", icon: "🚗", group: "Patron of Travelers" }
      ],
      groups: ["Patron of Doctors", "Patron of Workers", "Patron of the Environment", "Patron of Students"],
      colors: { "Patron of Doctors": "#6DB87B", "Patron of Workers": "#4A90D9", "Patron of the Environment": "#27AE60", "Patron of Students": "#D4A843" },
      icons:  { "Patron of Doctors": "🩺", "Patron of Workers": "🔨", "Patron of the Environment": "🌿", "Patron of Students": "📚" }
    },

    quiz: {
      questions: [
        { q: "What is a saint?", opts: ["Any holy person who ever lived", "A person officially recognized as being in heaven", "A priest or bishop", "Anyone who prays daily"], correct: 1 },
        { q: "The three parts of the Church are Pilgrims, Penitents, and ___.", opts: ["Apostles", "Triumphant (Saints in Heaven)", "The Clergy", "New Christians"], correct: 1 },
        { q: "What did St. Thérèse call her approach to holiness?", opts: ["The Great Way", "The Little Way", "The Path of Penance", "The Royal Road"], correct: 1 },
        { q: "St. Joan of Arc showed that God calls ___.", opts: ["Only adults", "Only soldiers", "The young and small too", "Only the educated"], correct: 2 },
        { q: "Who is the patron of students?", opts: ["St. Luke", "St. Francis", "St. Joseph", "St. Thomas Aquinas"], correct: 3 }
      ]
    },

    prayer: {
      title: "Litany of the Saints",
      lines: [
        { s: "L", t: "Lord, have mercy." },
        { s: "A", t: "Lord, have mercy." },
        { s: "L", t: "Holy Mary, Mother of God," },
        { s: "A", t: "Pray for us." },
        { s: "L", t: "All holy saints and angels," },
        { s: "A", t: "Pray for us, and help us follow your example. Amen." }
      ]
    }
  },

  // ── WEEK 30 ────────────────────────────────────────────────
  {
    week: 30,
    title: "Year in Review & Celebration",
    pillar: "Review",
    verse: "I have come that they may have life and have it more abundantly. — John 10:10",

    discover: {
      title: "Celebrate: A Year with Jesus!",
      instruction: "Tap each card to recall the big themes of Grade 5.",
      items: [
        { icon: "✝️", name: "Who Is Jesus?", desc: "Jesus is true God and true man — the Messiah, the Word of God, the Savior. He was born of Mary, taught, performed miracles, died on the Cross, rose from the dead, and ascended to heaven." },
        { icon: "⛰️", name: "Jesus the Teacher", desc: "Jesus taught the Sermon on the Mount with the Beatitudes, called disciples, revealed the Kingdom through parables and miracles, and transfigured Himself to reveal His glory." },
        { icon: "🏛️", name: "Living a Moral Life", desc: "We are called to form our conscience, grow in the Cardinal and Theological Virtues, avoid sin, practice the Works of Mercy, and work for social justice and human dignity." },
        { icon: "🕊️", name: "The Sacraments", desc: "Reconciliation restores our friendship with God. The Eucharist is the source and summit of Christian life. Confirmation strengthens us with the Holy Spirit. Holy Orders and Matrimony serve the community." },
        { icon: "🙏", name: "A Life of Prayer", desc: "We learned Lectio Divina, the Rosary and its Mysteries, the Liturgy of the Hours, and the intercession of the saints. Prayer is our daily conversation with God." }
      ]
    },

    secondary: "sort",
    sort: {
      title: "Match the Topic to Its Pillar!",
      instruction: "Tap a topic, then tap which pillar of the faith it belongs to.",
      items: [
        { name: "The Incarnation", icon: "✝️", group: "Creed" },
        { name: "The Eucharist", icon: "🏆", group: "Sacraments" },
        { name: "Cardinal Virtues", icon: "🏛️", group: "Morality" },
        { name: "The Rosary", icon: "📿", group: "Prayer" },
        { name: "The Kingdom of God", icon: "🌱", group: "Creed" },
        { name: "Reconciliation", icon: "🕊️", group: "Sacraments" },
        { name: "Works of Mercy", icon: "🍞", group: "Morality" },
        { name: "Lectio Divina", icon: "📖", group: "Prayer" }
      ],
      groups: ["Creed", "Sacraments", "Morality", "Prayer"],
      colors: { "Creed": "#4A90D9", "Sacraments": "#D4A843", "Morality": "#6DB87B", "Prayer": "#9B6DB8" },
      icons:  { "Creed": "✝️", "Sacraments": "🏆", "Morality": "⚖️", "Prayer": "🙏" }
    },

    quiz: {
      questions: [
        { q: "What does the name 'Jesus' mean?", opts: ["God rules", "God saves", "God loves", "God creates"], correct: 1 },
        { q: "Which virtue is the greatest of all?", opts: ["Prudence", "Justice", "Hope", "Love / Charity"], correct: 3 },
        { q: "The Eucharist is the source and ___ of Christian life.", opts: ["end", "crown", "summit", "goal"], correct: 2 },
        { q: "What is Lectio Divina?", opts: ["A Psalm", "Sacred Reading with Scripture", "A type of Mass", "A Marian prayer"], correct: 1 },
        { q: "How many Mysteries are in the Rosary?", opts: ["3 sets of 5", "4 sets of 5", "5 sets of 5", "2 sets of 10"], correct: 1 }
      ]
    },

    prayer: {
      title: "End-of-Year Celebration Prayer",
      lines: [
        { s: "L", t: "Lord Jesus, thank you for this year of learning and growing in faith." },
        { s: "A", t: "We have come to know you better — true God and true man, our Savior." },
        { s: "L", t: "Help us to carry everything we have learned in our hearts this summer." },
        { s: "A", t: "May we practice the virtues, pray daily, and serve others generously." },
        { s: "L", t: "Thank you for our catechist, our class, and our parish family." },
        { s: "A", t: "We love you, Lord. Send us forth with joy! Amen." }
      ]
    }
  }

];
