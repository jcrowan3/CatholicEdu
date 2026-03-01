// ═══════════════════════════════════════════════════════════════
//  GRADE 6 — "The Creed and Our Catholic Faith"
//  Catholic Catechist Toolkit | grade6.js
//  30 Weekly Sessions | All content original & doctrinally accurate
//  Scripture: Catholic Public Domain Version (CPDV)
//  CCC references cited in discover card descriptions
// ═══════════════════════════════════════════════════════════════

export const PILLAR_COLORS = {
  Creed:      "#4A90D9",
  Sacraments: "#D4A843",
  Morality:   "#6DB87B",
  Prayer:     "#9B6DB8",
  Review:     "#C0736A"
};

export const SESSIONS = [

  // ── WEEK 1 ──────────────────────────────────────────────────
  {
    week: 1,
    title: "Why We Believe: Faith and Reason",
    pillar: "Creed",
    verse: "Faith is the substance of things to be hoped for, the evidence of things that are not seen. — Hebrews 11:1",

    discover: {
      title: "Discover: Faith and Reason",
      instruction: "Tap each card to explore how faith and reason work together.",
      items: [
        { icon: "🧠", name: "What Is Faith?", desc: "Faith is a gift from God that allows us to believe in Him and all He has revealed. The CCC teaches that faith is 'the theological virtue by which we believe in God' (CCC 1814). It is not blind — it is trust built on evidence and love." },
        { icon: "🔭", name: "What Is Reason?", desc: "Reason is the human ability to think, question, and discover truth. The Church teaches that faith and reason are not enemies — they are two wings of the same bird, both leading us toward truth (CCC 159)." },
        { icon: "⚖️", name: "Faith AND Reason", desc: "St. Anselm called theology 'faith seeking understanding.' We ask questions because faith invites us to go deeper. Asking 'Why?' is not doubt — it is the beginning of wisdom (CCC 158)." },
        { icon: "📖", name: "Divine Revelation", desc: "God has revealed Himself to us through Scripture (the Bible) and Tradition (the living teaching of the Church). Together these form one source of truth, guarded by the Magisterium (CCC 80–82)." },
        { icon: "🕊️", name: "The Creed as Our Response", desc: "The Apostles' Creed and the Nicene Creed are the Church's great 'Yes!' to everything God has revealed. Professing the Creed is an act of faith made together as a community." }
      ]
    },

    secondary: "sort",
    sort: {
      title: "Faith or Reason — or Both?",
      instruction: "Tap an item, then tap the category it belongs to.",
      items: [
        { name: "Believing in God's love",       icon: "❤️",  group: "Faith" },
        { name: "Studying the natural world",    icon: "🌍",  group: "Reason" },
        { name: "Praying the Creed at Mass",     icon: "📿",  group: "Faith" },
        { name: "Learning math and science",     icon: "📐",  group: "Reason" },
        { name: "Trusting God in hard times",    icon: "🙏",  group: "Faith" },
        { name: "Asking questions about truth",  icon: "❓",  group: "Both" },
        { name: "St. Thomas Aquinas's writings", icon: "✍️",  group: "Both" }
      ],
      groups: ["Faith", "Reason", "Both"],
      colors: { Faith: "#4A90D9", Reason: "#6DB87B", Both: "#D4A843" },
      icons:  { Faith: "🕊️",      Reason: "🔭",      Both: "⚖️" }
    },

    quiz: {
      questions: [
        { q: "What is faith?", opts: ["A feeling of happiness", "A gift from God enabling us to believe", "A set of rules to follow", "A scientific theory"], correct: 1 },
        { q: "The Church teaches that faith and reason are:", opts: ["Enemies", "Unrelated", "Two wings leading to truth", "Identical"], correct: 2 },
        { q: "God reveals Himself through:", opts: ["Only the Bible", "Scripture and Tradition together", "Only Church councils", "Dreams alone"], correct: 1 },
        { q: "Who guards Sacred Scripture and Tradition?", opts: ["The President", "Scientists", "The Magisterium", "Individual Christians"], correct: 2 },
        { q: "Asking faith questions is:", opts: ["A sign of doubt", "Forbidden", "The beginning of wisdom", "Only for adults"], correct: 2 }
      ]
    },

    prayer: {
      title: "Prayer for the Gift of Faith",
      lines: [
        { s: "L", t: "Lord God, you have given us the gift of faith." },
        { s: "A", t: "Help us to treasure this gift and never take it for granted." },
        { s: "L", t: "When questions arise, let them draw us closer to you, not further away." },
        { s: "A", t: "May our minds and hearts always seek the truth you reveal." },
        { s: "L", t: "We believe — help our unbelief." },
        { s: "A", t: "Lord, we ask this in the name of Jesus Christ. Amen." }
      ]
    }
  },

  // ── WEEK 2 ──────────────────────────────────────────────────
  {
    week: 2,
    title: "The Holy Trinity: One God, Three Persons",
    pillar: "Creed",
    verse: "Go therefore and teach all nations, baptizing them in the name of the Father and of the Son and of the Holy Spirit. — Matthew 28:19",

    discover: {
      title: "Discover: The Holy Trinity",
      instruction: "Tap each card to understand the central mystery of our faith.",
      items: [
        { icon: "✝️", name: "The Central Mystery", desc: "The Trinity is the central mystery of Christian faith and life. We believe in one God who exists as three distinct Persons: Father, Son, and Holy Spirit. This is not three gods — it is one God in three Persons (CCC 234)." },
        { icon: "👑", name: "God the Father", desc: "God the Father is the first Person of the Trinity, the Creator of all things visible and invisible. Jesus taught us to call God 'Our Father,' revealing an intimate relationship of love and care (CCC 238–240)." },
        { icon: "✡️", name: "God the Son", desc: "God the Son is the second Person of the Trinity. He is eternally begotten of the Father. In the fullness of time, He became human — Jesus of Nazareth — to save us. He is fully God and fully human (CCC 441–445)." },
        { icon: "🔥", name: "God the Holy Spirit", desc: "God the Holy Spirit is the third Person of the Trinity, the Lord and Giver of Life, who proceeds from the Father and the Son. He is at work in the world, in the sacraments, and in our souls (CCC 685–686)." },
        { icon: "🌊", name: "One God", desc: "Though three Persons, God is perfectly One. The three Persons share one divine nature, one will, and one love. The inner life of God is an eternal exchange of love — a communion that we are invited to share (CCC 253–255)." }
      ]
    },

    secondary: "fillblank",
    fillblank: {
      title: "Complete the Trinitarian Formula",
      instruction: "Fill in the missing word.",
      sentences: [
        { text: "There is one God in ___ Persons.", answer: "three", options: ["three", "two", "seven", "twelve"] },
        { text: "The first Person of the Trinity is God the ___.", answer: "Father", options: ["Father", "Spirit", "Angel", "Prophet"] },
        { text: "Jesus is the ___ Person of the Trinity.", answer: "second", options: ["second", "first", "third", "fourth"] },
        { text: "The Holy Spirit proceeds from the Father and the ___.", answer: "Son", options: ["Son", "Angels", "Church", "Pope"] }
      ]
    },

    quiz: {
      questions: [
        { q: "How many Persons are in the Holy Trinity?", opts: ["One", "Two", "Three", "Four"], correct: 2 },
        { q: "How many Gods do Catholics believe in?", opts: ["One", "Two", "Three", "Many"], correct: 0 },
        { q: "Which Person of the Trinity became human?", opts: ["The Father", "The Son", "The Holy Spirit", "All three"], correct: 1 },
        { q: "The Holy Spirit is described as the Lord and Giver of:", opts: ["Wisdom", "Life", "Power", "Bread"], correct: 1 },
        { q: "The Trinity is described as the ___ mystery of Christian faith.", opts: ["Easiest", "Central", "Hidden", "Newest"], correct: 1 }
      ]
    },

    prayer: {
      title: "Glory Be — A Trinitarian Prayer",
      lines: [
        { s: "L", t: "Let us praise the Holy Trinity together." },
        { s: "A", t: "Glory be to the Father, and to the Son, and to the Holy Spirit." },
        { s: "L", t: "God has always been and will always be — without beginning or end." },
        { s: "A", t: "As it was in the beginning, is now, and ever shall be, world without end." },
        { s: "L", t: "The Trinity is a mystery of infinite love into which we are invited." },
        { s: "A", t: "Amen. Thanks be to God — Father, Son, and Holy Spirit." }
      ]
    }
  },

  // ── WEEK 3 ──────────────────────────────────────────────────
  {
    week: 3,
    title: "God the Creator: Creation and Human Dignity",
    pillar: "Creed",
    verse: "In the beginning God created heaven and earth. — Genesis 1:1",

    discover: {
      title: "Discover: Creation and Dignity",
      instruction: "Tap each card to explore what the Church teaches about creation.",
      items: [
        { icon: "🌌", name: "God Created Everything", desc: "God created everything that exists — visible and invisible — freely, out of nothing (ex nihilo). Creation is not an accident. It is an act of love, designed with purpose and order (CCC 295–297)." },
        { icon: "👤", name: "The Dignity of the Human Person", desc: "Humans are the high point of God's creation, made in His image and likeness (Imago Dei). This gives every human being infinite dignity — from conception to natural death — that no one can take away (CCC 355–357)." },
        { icon: "💨", name: "Body and Soul", desc: "Every person is a unity of body and soul. The soul is the spiritual principle that makes us fully human and enables us to know God and love Him. It is created directly by God and is immortal (CCC 362–366)." },
        { icon: "🌿", name: "Our Call to Stewardship", desc: "Because God made the world and called it 'very good,' humans are called to be stewards — caretakers — of creation. We are not owners but managers of a gift entrusted to us (CCC 2415)." },
        { icon: "🤝", name: "Made for Community", desc: "God said 'It is not good for the human being to be alone.' We are made for relationship — with God and with one another. The family is the first community, the first school of love (CCC 1882)." }
      ]
    },

    secondary: "timeline",
    timeline: {
      title: "The Story of Creation — In Order",
      instruction: "Tap two items to swap them into the correct order.",
      items: [
        { id: 1, text: "God creates light, sky, and water",       order: 1 },
        { id: 2, text: "God creates land, plants, and seasons",   order: 2 },
        { id: 3, text: "God creates sea creatures and birds",     order: 3 },
        { id: 4, text: "God creates land animals",                order: 4 },
        { id: 5, text: "God creates humanity and rests on Day 7", order: 5 }
      ]
    },

    quiz: {
      questions: [
        { q: "God created everything out of:", opts: ["Existing matter", "Nothing (ex nihilo)", "Light alone", "Water alone"], correct: 1 },
        { q: "Humans are made in God's:", opts: ["Shadow", "Kingdom", "Image and likeness", "Name"], correct: 2 },
        { q: "Every human being has infinite:", opts: ["Wealth", "Power", "Dignity", "Knowledge"], correct: 2 },
        { q: "Our call to care for creation is called:", opts: ["Ownership", "Stewardship", "Domination", "Isolation"], correct: 1 },
        { q: "What is the soul?", opts: ["The brain", "A feeling", "The spiritual principle making us human", "An organ"], correct: 2 }
      ]
    },

    prayer: {
      title: "Prayer of Praise for Creation",
      lines: [
        { s: "L", t: "Lord God, you spoke and the universe came into being." },
        { s: "A", t: "All praise and glory be to you, Creator of all things!" },
        { s: "L", t: "You made us in your image and called us your own." },
        { s: "A", t: "Help us to see your face in every person we meet." },
        { s: "L", t: "Teach us to care for your creation with grateful and responsible hearts." },
        { s: "A", t: "May everything we do reflect your love. Amen." }
      ]
    }
  },

  // ── WEEK 4 ──────────────────────────────────────────────────
  {
    week: 4,
    title: "Original Sin and the Promise of a Savior",
    pillar: "Creed",
    verse: "For all have sinned and are in need of the glory of God. — Romans 3:23",

    discover: {
      title: "Discover: The Fall and the Promise",
      instruction: "Tap each card to understand sin, its effects, and God's response.",
      items: [
        { icon: "🍎", name: "The First Sin", desc: "Adam and Eve were created in perfect friendship with God. But they chose to disobey — to place their own will above God's. This is called Original Sin, and it wounded human nature for all who come after (CCC 396–398)." },
        { icon: "💔", name: "The Effects of Original Sin", desc: "Original Sin did not make us evil, but it wounded us. We now experience suffering, death, and a tendency toward sin called concupiscence. Our relationship with God was broken, but not destroyed (CCC 405–406)." },
        { icon: "🌟", name: "The Protoevangelium", desc: "Even in the moment of the fall, God promised a Savior. In Genesis 3:15, God promised that a descendant of the woman would crush the serpent's head. The Church calls this the Protoevangelium — the 'first gospel' (CCC 410–411)." },
        { icon: "🛡️", name: "Mary, the New Eve", desc: "Just as Eve's 'no' brought death, Mary's 'yes' — her fiat — opened the door to salvation. Mary is called the New Eve, perfectly preserved from Original Sin by the grace of God (CCC 411)." },
        { icon: "✝️", name: "Jesus, Our Savior", desc: "The entire Old Testament prepares the way for Jesus Christ, the promised Savior. He alone could restore our friendship with God — not by erasing our freedom, but by offering His life in love (CCC 422–425)." }
      ]
    },

    secondary: "timeline",
    timeline: {
      title: "The Fall and the Promise — In Order",
      instruction: "Tap two items to swap them into the correct order.",
      items: [
        { id: 1, text: "God creates Adam and Eve in friendship with Him",    order: 1 },
        { id: 2, text: "Adam and Eve choose to disobey God",                 order: 2 },
        { id: 3, text: "Original Sin wounds human nature",                   order: 3 },
        { id: 4, text: "God promises a Savior (the Protoevangelium)",        order: 4 },
        { id: 5, text: "Mary's fiat opens the door for the promised Savior", order: 5 }
      ]
    },

    quiz: {
      questions: [
        { q: "What is Original Sin?", opts: ["A personal sin we commit", "The first sin of Adam and Eve that wounded human nature", "A sin only children have", "A mistake in creation"], correct: 1 },
        { q: "Original Sin gives us a tendency toward sin called:", opts: ["Concupiscence", "Ignorance", "Pride", "Sloth"], correct: 0 },
        { q: "The 'Protoevangelium' is:", opts: ["A book of the Bible", "The first promise of a Savior", "A sacrament", "A type of prayer"], correct: 1 },
        { q: "Who is called the 'New Eve'?", opts: ["St. Mary Magdalene", "Eve's daughter", "Mary, the Mother of Jesus", "St. Elizabeth"], correct: 2 },
        { q: "Mary was preserved from Original Sin by:", opts: ["Her own merit", "A special prayer", "God's grace from her conception", "Her parents' holiness"], correct: 2 }
      ]
    },

    prayer: {
      title: "Prayer of Hope After the Fall",
      lines: [
        { s: "L", t: "Lord, we know that sin entered the world and wounded humanity." },
        { s: "A", t: "But you did not abandon us — you promised a Savior." },
        { s: "L", t: "Thank you for never giving up on us, even when we turn away." },
        { s: "A", t: "Like Mary, may we say 'yes' to your will in every moment of our lives." },
        { s: "L", t: "Jesus, you came to restore what was lost. We place our hope in you." },
        { s: "A", t: "Have mercy on us and lead us back to the Father. Amen." }
      ]
    }
  },

  // ── WEEK 5 — REVIEW ─────────────────────────────────────────
  {
    week: 5,
    title: "Unit 1 Review: God and Creation",
    pillar: "Review",
    verse: "You shall love the Lord your God with all your heart and with all your soul and with all your mind. — Matthew 22:37",

    discover: {
      title: "Review: God and Creation",
      instruction: "Tap each card to review what we've learned so far.",
      items: [
        { icon: "🧠", name: "Faith and Reason", desc: "Faith is a gift from God; reason is our God-given ability to think. They work together — both wings leading us toward truth. Sacred Scripture and Tradition are the two sources of God's revelation." },
        { icon: "✝️", name: "The Holy Trinity", desc: "One God in three Persons: Father, Son, and Holy Spirit. The Trinity is the central mystery of our faith. Jesus is fully human and fully divine — the second Person made flesh." },
        { icon: "🌌", name: "Creation and Dignity", desc: "God created everything out of nothing. Humans are made in God's image (Imago Dei), giving every person infinite dignity. We are called to be stewards of creation." },
        { icon: "🍎", name: "Original Sin and the Promise", desc: "Adam and Eve's sin wounded human nature. But God immediately promised a Savior. Mary's 'yes' opened the door, and Jesus Christ came to restore our friendship with God." }
      ]
    },

    secondary: "timeline",
    timeline: {
      title: "Salvation History — The Big Picture",
      instruction: "Tap two items to swap them into the correct order.",
      items: [
        { id: 1, text: "God creates the world out of nothing (ex nihilo)",   order: 1 },
        { id: 2, text: "Adam and Eve sin — Original Sin wounds human nature", order: 2 },
        { id: 3, text: "God promises a Savior (the Protoevangelium)",         order: 3 },
        { id: 4, text: "Mary's fiat makes the Incarnation possible",          order: 4 },
        { id: 5, text: "The Holy Spirit guides the Church through all ages",  order: 5 }
      ]
    },

    quiz: {
      questions: [
        { q: "What is the central mystery of Christian faith?", opts: ["The Incarnation", "The Holy Trinity", "The Resurrection", "Original Sin"], correct: 1 },
        { q: "What does 'ex nihilo' mean?", opts: ["Out of love", "Out of nothing", "Out of water", "Out of light"], correct: 1 },
        { q: "The Protoevangelium is found in which book?", opts: ["Exodus", "Psalms", "Genesis", "Romans"], correct: 2 },
        { q: "What does 'Imago Dei' mean?", opts: ["Image of the Church", "Image of God", "Image of creation", "Image of the saints"], correct: 1 },
        { q: "Faith and reason are described as:", opts: ["Enemies", "Two wings toward truth", "Identical", "Unrelated"], correct: 1 }
      ]
    },

    prayer: {
      title: "Act of Faith",
      lines: [
        { s: "L", t: "Let us pray together an act of faith in all God has revealed." },
        { s: "A", t: "O my God, I firmly believe that you are one God in three Persons." },
        { s: "L", t: "I believe that you created us in your image and love us without measure." },
        { s: "A", t: "I believe that you sent your Son to save us from sin and death." },
        { s: "L", t: "I believe all that your holy Church teaches, because you have revealed it." },
        { s: "A", t: "Increase our faith, Lord. We believe — help our unbelief. Amen." }
      ]
    }
  },

  // ── WEEK 6 ──────────────────────────────────────────────────
  {
    week: 6,
    title: "The Incarnation: God Becomes Human",
    pillar: "Creed",
    verse: "And the Word became flesh and dwelt among us. — John 1:14",

    discover: {
      title: "Discover: The Incarnation",
      instruction: "Tap each card to explore the mystery of God becoming human.",
      items: [
        { icon: "👶", name: "What Is the Incarnation?", desc: "The Incarnation is the mystery of the Son of God becoming human while remaining fully God. 'Incarnation' comes from the Latin for 'in the flesh.' The second Person of the Trinity took on a human body and soul (CCC 461–463)." },
        { icon: "💬", name: "The Annunciation", desc: "The angel Gabriel appeared to Mary and announced that she would conceive the Son of God by the power of the Holy Spirit. Mary's 'fiat' — 'let it be done to me according to your word' — made the Incarnation possible (CCC 484–486)." },
        { icon: "⭐", name: "Born in Bethlehem", desc: "Jesus was born in Bethlehem during the reign of Caesar Augustus, fulfilling the prophecy of Micah 5:2. The shepherds and the Magi represent all of humanity — Jew and Gentile alike — being welcomed by the newborn King." },
        { icon: "🕊️", name: "Fully Human, Fully Divine", desc: "Jesus is not half-God and half-human. He is fully God and fully human — two natures united in one divine Person. This was defined at the Council of Chalcedon in 451 AD and is central to our faith (CCC 481–483)." },
        { icon: "❓", name: "Why Did God Become Human?", desc: "God became human to save us from sin, to show us how to live, to reveal God's love perfectly, and to make us partakers in the divine nature. As St. Athanasius wrote: 'God became human so that humans might become God' (CCC 457–460)." }
      ]
    },

    secondary: "timeline",
    timeline: {
      title: "The Events of the Incarnation",
      instruction: "Tap two items to swap them into the correct order.",
      items: [
        { id: 1, text: "The angel Gabriel visits Mary (Annunciation)",   order: 1 },
        { id: 2, text: "Mary says 'yes' — her fiat",                    order: 2 },
        { id: 3, text: "Jesus is conceived by the Holy Spirit",          order: 3 },
        { id: 4, text: "Jesus is born in Bethlehem",                     order: 4 },
        { id: 5, text: "Shepherds and Magi come to worship",             order: 5 }
      ]
    },

    quiz: {
      questions: [
        { q: "The Incarnation means:", opts: ["Jesus rising from the dead", "God the Son becoming human", "The Holy Spirit coming at Pentecost", "Jesus ascending to heaven"], correct: 1 },
        { q: "Mary's 'fiat' means:", opts: ["I doubt you", "Let it be done as you say", "I am afraid", "I do not understand"], correct: 1 },
        { q: "Jesus was born in:", opts: ["Jerusalem", "Nazareth", "Bethlehem", "Egypt"], correct: 2 },
        { q: "Jesus is:", opts: ["Fully God only", "Fully human only", "Half God, half human", "Fully God and fully human"], correct: 3 },
        { q: "The Council of Chalcedon defined:", opts: ["The number of sacraments", "Jesus' two natures in one Person", "The Canon of Scripture", "The date of Easter"], correct: 1 }
      ]
    },

    prayer: {
      title: "Angelus Prayer",
      lines: [
        { s: "L", t: "The Angel of the Lord declared unto Mary." },
        { s: "A", t: "And she conceived of the Holy Spirit." },
        { s: "L", t: "Behold the handmaid of the Lord." },
        { s: "A", t: "Be it done unto me according to your word." },
        { s: "L", t: "And the Word was made flesh." },
        { s: "A", t: "And dwelt among us. Hail Mary, full of grace… Amen." }
      ]
    }
  },

  // ── WEEK 7 ──────────────────────────────────────────────────
  {
    week: 7,
    title: "The Life and Ministry of Jesus",
    pillar: "Creed",
    verse: "I am the way and the truth and the life. No one comes to the Father except through me. — John 14:6",

    discover: {
      title: "Discover: Jesus' Life and Ministry",
      instruction: "Tap each card to explore the key moments of Jesus' public life.",
      items: [
        { icon: "💧", name: "The Baptism of Jesus", desc: "When Jesus was baptized by John in the Jordan River, the Holy Spirit descended like a dove and the Father's voice proclaimed: 'This is my beloved Son.' This moment reveals the Trinity and inaugurates Jesus' public mission (CCC 535–537)." },
        { icon: "🌊", name: "The Temptation in the Desert", desc: "After His baptism, Jesus fasted 40 days in the desert and was tempted by the devil. He overcame each temptation with Scripture, showing us how to resist evil and trust in God alone (CCC 538–540)." },
        { icon: "📣", name: "Proclaiming the Kingdom", desc: "Jesus' central message was the Kingdom of God — a new order of love, justice, and mercy breaking into the world. He proclaimed it through preaching, healing, and the forgiveness of sins (CCC 543–546)." },
        { icon: "✨", name: "Miracles of Jesus", desc: "Jesus performed miracles — healing the sick, raising the dead, calming storms — as signs that the Kingdom of God had arrived and that He had divine authority. Miracles invite faith; they do not force it (CCC 547–550)." },
        { icon: "👥", name: "Calling the Twelve", desc: "Jesus called twelve Apostles to share His mission, with Peter as their head. This group became the foundation of the Church. Their calling was not based on their perfection, but on God's grace (CCC 551–553)." }
      ]
    },

    secondary: "fillblank",
    fillblank: {
      title: "The Life of Jesus",
      instruction: "Fill in the missing word.",
      sentences: [
        { text: "At Jesus' baptism, the Holy Spirit descended like a ___.", answer: "dove", options: ["dove", "flame", "cloud", "star"] },
        { text: "Jesus fasted for ___ days in the desert.", answer: "forty", options: ["forty", "seven", "twelve", "three"] },
        { text: "Jesus' central message was the Kingdom of ___.", answer: "God", options: ["God", "Israel", "David", "Heaven"] },
        { text: "Jesus called ___ Apostles to share His mission.", answer: "twelve", options: ["twelve", "seven", "five", "three"] }
      ]
    },

    quiz: {
      questions: [
        { q: "At Jesus' baptism, whose voice was heard from heaven?", opts: ["An angel's", "John the Baptist's", "God the Father's", "The Holy Spirit's"], correct: 2 },
        { q: "Jesus was tempted in the desert for how long?", opts: ["Three days", "Seven days", "Forty days", "One year"], correct: 2 },
        { q: "Jesus' central message was:", opts: ["The Ten Commandments", "The Kingdom of God", "The Mosaic Law", "The Temple rituals"], correct: 1 },
        { q: "Miracles are signs that invite:", opts: ["Fear", "Entertainment", "Faith", "Confusion"], correct: 2 },
        { q: "Who was the head of the Twelve Apostles?", opts: ["John", "James", "Andrew", "Peter"], correct: 3 }
      ]
    },

    prayer: {
      title: "Prayer to Follow Jesus",
      lines: [
        { s: "L", t: "Lord Jesus, you are the Way, the Truth, and the Life." },
        { s: "A", t: "Help us to follow you more closely each day." },
        { s: "L", t: "When we face temptation, strengthen us with your word." },
        { s: "A", t: "When we are lost, draw us back to the Father's house." },
        { s: "L", t: "May our lives proclaim the Kingdom of God in word and deed." },
        { s: "A", t: "Jesus, we trust in you. Lead us to eternal life. Amen." }
      ]
    }
  },

  // ── WEEK 8 ──────────────────────────────────────────────────
  {
    week: 8,
    title: "The Passion and Death of Jesus",
    pillar: "Creed",
    verse: "Greater love than this no one has: that one lay down his life for his friends. — John 15:13",

    discover: {
      title: "Discover: The Passion of Christ",
      instruction: "Tap each card to understand the suffering and death of Jesus.",
      items: [
        { icon: "🍞", name: "The Last Supper", desc: "On the night before He died, Jesus shared a final Passover meal with His Apostles. He took bread and wine and made them His Body and Blood, instituting the Eucharist — which the Church celebrates at every Mass (CCC 1339–1340)." },
        { icon: "🌿", name: "The Garden of Gethsemane", desc: "Jesus prayed in agony in the Garden, asking if the cup of suffering might pass — but surrendering entirely to the Father's will. His prayer teaches us that obedience to God, even in suffering, is the path of love (CCC 612)." },
        { icon: "⚖️", name: "The Trial and Condemnation", desc: "Jesus was betrayed by Judas, arrested, tried unjustly, and condemned to death. He was innocent in every way, yet He accepted the unjust sentence, willingly giving His life for us (CCC 595–598)." },
        { icon: "✝️", name: "The Crucifixion", desc: "Jesus was crucified on Golgotha — 'the place of the skull.' His death on the Cross is the supreme sacrifice — the one, perfect offering that takes away the sin of the world and reconciles humanity to God (CCC 613–618)." },
        { icon: "🪨", name: "The Burial", desc: "Jesus died and was buried in a new tomb. His body rested in the tomb on Holy Saturday while His soul descended to the realm of the dead to bring the good news to all who awaited redemption (CCC 624–627)." }
      ]
    },

    secondary: "timeline",
    timeline: {
      title: "The Events of Holy Week",
      instruction: "Tap two items to swap them into the correct order.",
      items: [
        { id: 1, text: "The Last Supper — Jesus institutes the Eucharist",      order: 1 },
        { id: 2, text: "Prayer in the Garden of Gethsemane",                    order: 2 },
        { id: 3, text: "Betrayal by Judas and arrest of Jesus",                 order: 3 },
        { id: 4, text: "Jesus is crucified and dies on the Cross",              order: 4 },
        { id: 5, text: "Jesus is buried in the tomb",                           order: 5 }
      ]
    },

    quiz: {
      questions: [
        { q: "At the Last Supper, Jesus instituted:", opts: ["The Rosary", "The Eucharist", "Confession", "Confirmation"], correct: 1 },
        { q: "In Gethsemane, Jesus prayed:", opts: ["For power", "For escape", "In surrender to the Father's will", "For the Apostles only"], correct: 2 },
        { q: "Who betrayed Jesus?", opts: ["Peter", "John", "Judas", "Thomas"], correct: 2 },
        { q: "Jesus was crucified at a place called:", opts: ["Bethlehem", "Golgotha", "Gethsemane", "Nazareth"], correct: 1 },
        { q: "Jesus' death on the Cross is:", opts: ["A tragedy with no meaning", "The perfect sacrifice reconciling us to God", "A myth", "Only symbolic"], correct: 1 }
      ]
    },

    prayer: {
      title: "Stations of the Cross — Opening Prayer",
      lines: [
        { s: "L", t: "Lord Jesus Christ, you went before us carrying the Cross." },
        { s: "A", t: "We adore you, O Christ, and we bless you." },
        { s: "L", t: "Because by your holy Cross you have redeemed the world." },
        { s: "A", t: "Your suffering was not wasted — it was love poured out for us." },
        { s: "L", t: "Help us to take up our own crosses and follow you faithfully." },
        { s: "A", t: "May your sacrifice never be far from our hearts. Amen." }
      ]
    }
  },

  // ── WEEK 9 ──────────────────────────────────────────────────
  {
    week: 9,
    title: "The Resurrection: Death Is Defeated",
    pillar: "Creed",
    verse: "I am the resurrection and the life. He who believes in me, even if he die, shall live. — John 11:25",

    discover: {
      title: "Discover: The Resurrection",
      instruction: "Tap each card to explore the heart of Christian faith.",
      items: [
        { icon: "🌅", name: "The Empty Tomb", desc: "On the third day after His death, the tomb of Jesus was found empty. The stone was rolled away — not to let Jesus out, but to let the disciples in to see. The Resurrection is a historical event that changed everything (CCC 639–640)." },
        { icon: "✨", name: "The Risen Body of Christ", desc: "Jesus rose bodily from the dead — not as a ghost or symbol, but in a transformed, glorified body. His risen body is real but no longer bound by the limits of space, time, or death (CCC 645–646)." },
        { icon: "🧑‍🤝‍🧑", name: "Appearances of the Risen Christ", desc: "Jesus appeared to Mary Magdalene, the two disciples on the road to Emmaus, the Eleven Apostles, and to more than 500 people. These appearances confirmed the reality of the Resurrection (CCC 641–645)." },
        { icon: "🏔️", name: "The Ascension", desc: "Forty days after His resurrection, Jesus ascended to the right hand of the Father in heaven. He did not abandon us — He went to prepare a place for us and to send the Holy Spirit (CCC 659–662)." },
        { icon: "⭐", name: "Why the Resurrection Matters", desc: "Without the Resurrection, faith is empty (1 Corinthians 15:14). But because Jesus rose, we know that sin and death do not have the final word. Our own resurrection is guaranteed by His (CCC 651–655)." }
      ]
    },

    secondary: "fillblank",
    fillblank: {
      title: "The Resurrection — Key Facts",
      instruction: "Fill in the missing word.",
      sentences: [
        { text: "Jesus rose from the dead on the ___ day.", answer: "third", options: ["third", "first", "seventh", "fortieth"] },
        { text: "The risen body of Jesus was real and ___.", answer: "glorified", options: ["glorified", "ghostly", "symbolic", "invisible"] },
        { text: "The Ascension happened ___ days after the Resurrection.", answer: "forty", options: ["forty", "three", "seven", "fifty"] },
        { text: "St. Paul says without the Resurrection, our faith is ___.", answer: "empty", options: ["empty", "enough", "perfect", "stronger"] }
      ]
    },

    quiz: {
      questions: [
        { q: "On which day did Jesus rise from the dead?", opts: ["The first day", "The second day", "The third day", "The seventh day"], correct: 2 },
        { q: "The risen body of Jesus was:", opts: ["A ghost", "Purely spiritual with no body", "Real and glorified", "Only symbolic"], correct: 2 },
        { q: "Who was the first person to see the Risen Jesus?", opts: ["Peter", "John", "Mary Magdalene", "Thomas"], correct: 2 },
        { q: "How many days after the Resurrection did the Ascension occur?", opts: ["Three", "Seven", "Thirty", "Forty"], correct: 3 },
        { q: "St. Paul says without the Resurrection, our faith is:", opts: ["Stronger", "Empty", "Complete", "Enough"], correct: 1 }
      ]
    },

    prayer: {
      title: "Easter Alleluia Prayer",
      lines: [
        { s: "L", t: "Christ is risen! Death has been defeated!" },
        { s: "A", t: "Alleluia! Thanks be to God who gives us the victory!" },
        { s: "L", t: "Because Jesus rose, we know that our lives have eternal meaning." },
        { s: "A", t: "Alleluia! We shall rise with Christ to eternal life." },
        { s: "L", t: "Let us live as Easter people — full of hope, joy, and love." },
        { s: "A", t: "Alleluia, alleluia, alleluia! Amen." }
      ]
    }
  },

  // ── WEEK 10 — REVIEW ─────────────────────────────────────────
  {
    week: 10,
    title: "Unit 2 Review: Jesus — Life, Death, and Resurrection",
    pillar: "Review",
    verse: "Jesus Christ is the same, yesterday and today and forever. — Hebrews 13:8",

    discover: {
      title: "Review: The Mystery of Jesus Christ",
      instruction: "Tap each card to review everything we've learned about Jesus.",
      items: [
        { icon: "👶", name: "The Incarnation", desc: "The Son of God became fully human while remaining fully God. At the Annunciation, Mary said 'yes' and Jesus was conceived. He is both fully God and fully human — defined at the Council of Chalcedon (CCC 461–483)." },
        { icon: "📣", name: "Jesus' Ministry", desc: "Jesus was baptized in the Jordan, withstood temptation in the desert, proclaimed the Kingdom of God, performed miracles, and called twelve Apostles with Peter as their head." },
        { icon: "✝️", name: "Passion and Death", desc: "At the Last Supper, Jesus gave us the Eucharist. He was betrayed, tried, crucified at Golgotha, and buried. His death is the one perfect sacrifice reconciling humanity to God (CCC 613–618)." },
        { icon: "🌅", name: "Resurrection and Ascension", desc: "On the third day Jesus rose bodily from the dead. His risen body was real and glorified. Forty days later He ascended to the Father's right hand. Without the Resurrection, faith is empty (CCC 651–655)." }
      ]
    },

    secondary: "timeline",
    timeline: {
      title: "The Life of Jesus — In Order",
      instruction: "Tap two items to swap them into the correct order.",
      items: [
        { id: 1, text: "Jesus is born in Bethlehem",                       order: 1 },
        { id: 2, text: "Jesus is baptized and begins his ministry",        order: 2 },
        { id: 3, text: "The Last Supper — Eucharist is instituted",        order: 3 },
        { id: 4, text: "Jesus dies on the Cross and is buried",            order: 4 },
        { id: 5, text: "Jesus rises from the dead and ascends to heaven",  order: 5 }
      ]
    },

    quiz: {
      questions: [
        { q: "The Council of Chalcedon defined that Jesus is:", opts: ["Only human", "Only divine", "Fully God and fully human", "Half of each"], correct: 2 },
        { q: "At the Last Supper, Jesus instituted:", opts: ["Confirmation", "Baptism", "The Eucharist", "Holy Orders"], correct: 2 },
        { q: "Jesus was crucified at a place called:", opts: ["Bethlehem", "Nazareth", "Golgotha", "Gethsemane"], correct: 2 },
        { q: "How many days after His death did Jesus rise?", opts: ["One", "Three", "Seven", "Forty"], correct: 1 },
        { q: "The Ascension happened how many days after the Resurrection?", opts: ["Three", "Seven", "Forty", "Fifty"], correct: 2 }
      ]
    },

    prayer: {
      title: "The Apostles' Creed — Christological Section",
      lines: [
        { s: "L", t: "Let us profess our faith in Jesus Christ together." },
        { s: "A", t: "I believe in Jesus Christ, His only Son, our Lord, who was conceived by the Holy Spirit, born of the Virgin Mary." },
        { s: "L", t: "He suffered under Pontius Pilate, was crucified, died, and was buried." },
        { s: "A", t: "He descended into hell. On the third day He rose again from the dead." },
        { s: "L", t: "He ascended into heaven and is seated at the right hand of God the Father Almighty." },
        { s: "A", t: "From there He will come to judge the living and the dead. We believe. Amen." }
      ]
    }
  },

  // ── WEEK 11 ──────────────────────────────────────────────────
  {
    week: 11,
    title: "The Church: People of God and Body of Christ",
    pillar: "Creed",
    verse: "You are the body of Christ, and individually members of it. — 1 Corinthians 12:27",

    discover: {
      title: "Discover: The Church",
      instruction: "Tap each card to explore what the Church truly is.",
      items: [
        { icon: "🏛️", name: "More Than a Building", desc: "The Church is not primarily a building — it is a people, gathered by God through faith and Baptism. The word 'church' (ecclesia) means an 'assembly called forth' by God from the world (CCC 751–752)." },
        { icon: "🫀", name: "Body of Christ", desc: "St. Paul calls the Church the Body of Christ — with Jesus as the Head and all baptized members as parts of the body. Every member has a unique role, and all are united by the same Spirit (CCC 787–796)." },
        { icon: "👨‍👩‍👧‍👦", name: "People of God", desc: "The Church is also the People of God — a covenant community stretching from Adam through Abraham and Israel to all the baptized. We are a pilgrim people, journeying together toward heaven (CCC 781–786)." },
        { icon: "🌍", name: "Universal and Local", desc: "The universal Church includes all Catholics worldwide united under the Pope. The local Church (diocese or parish) is where we actually live our faith in community. Both expressions of Church are real and important (CCC 832–835)." },
        { icon: "✝️", name: "The Four Marks (Review)", desc: "The Church is One (united in one faith and one Baptism), Holy (made holy by God), Catholic (universal, for all people), and Apostolic (built on the Apostles). These marks identify the true Church of Christ (CCC 811–870)." }
      ]
    },

    secondary: "fillblank",
    fillblank: {
      title: "Complete the Sentence About the Church",
      instruction: "Fill in the missing word.",
      sentences: [
        { text: "The word 'church' (ecclesia) means an assembly ___ forth by God.", answer: "called", options: ["called", "pushed", "brought", "set"] },
        { text: "St. Paul calls the Church the ___ of Christ.", answer: "Body", options: ["Body", "Heart", "Voice", "Kingdom"] },
        { text: "Jesus is the ___ of the Body of Christ.", answer: "Head", options: ["Head", "Heart", "Hand", "Foot"] },
        { text: "The four marks of the Church are One, Holy, Catholic, and ___.", answer: "Apostolic", options: ["Apostolic", "Roman", "Perfect", "Ancient"] }
      ]
    },

    quiz: {
      questions: [
        { q: "The word 'ecclesia' means:", opts: ["A holy building", "An assembly called forth by God", "A group of clergy", "A prayer circle"], correct: 1 },
        { q: "Who is the Head of the Body of Christ?", opts: ["The Pope", "Peter", "Jesus", "Mary"], correct: 2 },
        { q: "The Church as 'People of God' emphasizes it is a:", opts: ["Government", "Covenant community on a journey", "Business organization", "Cultural club"], correct: 1 },
        { q: "How many marks does the Church have?", opts: ["Two", "Three", "Four", "Seven"], correct: 2 },
        { q: "Which mark means the Church is for all people everywhere?", opts: ["One", "Holy", "Catholic", "Apostolic"], correct: 2 }
      ]
    },

    prayer: {
      title: "Prayer for the Church",
      lines: [
        { s: "L", t: "Lord Jesus, you founded your Church to be a sign of your love in the world." },
        { s: "A", t: "Help us to be worthy members of your Body." },
        { s: "L", t: "May your Church always be one, holy, catholic, and apostolic." },
        { s: "A", t: "Unite all Christians in the bond of your love and truth." },
        { s: "L", t: "Send the Holy Spirit to renew and strengthen your Church in every age." },
        { s: "A", t: "May we be the Church you dream of — and never give up. Amen." }
      ]
    }
  },

  // ── WEEK 12 ──────────────────────────────────────────────────
  {
    week: 12,
    title: "Mary and the Communion of Saints",
    pillar: "Creed",
    verse: "All generations shall call me blessed. — Luke 1:48",

    discover: {
      title: "Discover: Mary and the Saints",
      instruction: "Tap each card to learn about our friends in heaven.",
      items: [
        { icon: "👑", name: "Mary, Mother of God", desc: "Mary is the Mother of Jesus — and because Jesus is God, she is truly the Mother of God (Theotokos). This title was defined at the Council of Ephesus in 431 AD. Mary is our greatest intercessor and model of discipleship (CCC 963–966)." },
        { icon: "🌟", name: "The Immaculate Conception", desc: "From the very first moment of her conception, Mary was preserved from Original Sin by a special grace of God, in anticipation of her Son's saving death. This is the dogma of the Immaculate Conception, celebrated on December 8 (CCC 491–492)." },
        { icon: "☁️", name: "The Assumption of Mary", desc: "At the end of her earthly life, Mary was taken up — body and soul — into heaven. This is the dogma of the Assumption, celebrated on August 15. It previews the bodily resurrection of all who are saved (CCC 966)." },
        { icon: "😇", name: "The Communion of Saints", desc: "We are in communion with all who have died in God's grace — the saints in heaven, the souls in purgatory being purified, and the faithful on earth. This is the Communion of Saints — we are never alone in our faith (CCC 946–948)." },
        { icon: "🙏", name: "Asking Saints to Intercede", desc: "When we ask saints to pray for us, we are not worshipping them — we are asking our friends in heaven to pray to God on our behalf, just as we ask friends on earth to pray for us. This is intercession (CCC 956)." }
      ]
    },

    secondary: "sort",
    sort: {
      title: "Marian Dogmas and the Communion of Saints",
      instruction: "Tap an item, then tap whether it describes Mary or the Communion of Saints.",
      items: [
        { name: "Immaculate Conception",       icon: "🌟", group: "Mary" },
        { name: "Saints pray for us in heaven", icon: "😇", group: "Saints" },
        { name: "Assumption into heaven",       icon: "☁️", group: "Mary" },
        { name: "Souls in purgatory",           icon: "🔥", group: "Saints" },
        { name: "Mother of God (Theotokos)",    icon: "👑", group: "Mary" },
        { name: "Faithful on earth together",   icon: "🌍", group: "Saints" },
        { name: "Model of perfect discipleship",icon: "✨", group: "Mary" }
      ],
      groups: ["Mary", "Saints"],
      colors: { Mary: "#9B6DB8", Saints: "#D4A843" },
      icons:  { Mary: "👑",       Saints: "😇" }
    },

    quiz: {
      questions: [
        { q: "Why is Mary called 'Mother of God'?", opts: ["Because she created God", "Because Jesus, who is God, is her Son", "Because she lives in heaven", "Because the Pope declared it"], correct: 1 },
        { q: "The Immaculate Conception means Mary was:", opts: ["Born in a miraculous way", "Preserved from Original Sin from conception", "A perfect human being by her own effort", "Assumed into heaven"], correct: 1 },
        { q: "The Assumption means Mary was taken into heaven:", opts: ["Only spiritually", "Body and soul", "After many centuries", "By the Apostles"], correct: 1 },
        { q: "The Communion of Saints includes:", opts: ["Only canonized saints", "Saints in heaven only", "Saints in heaven, souls in purgatory, and the faithful on earth", "Only Catholics alive today"], correct: 2 },
        { q: "Asking saints to pray for us is called:", opts: ["Worship", "Idolatry", "Intercession", "Superstition"], correct: 2 }
      ]
    },

    prayer: {
      title: "The Memorare",
      lines: [
        { s: "L", t: "Let us pray together the ancient prayer to Our Lady, the Memorare." },
        { s: "A", t: "Remember, O most gracious Virgin Mary, that never was it known that anyone who fled to your protection was left unaided." },
        { s: "L", t: "Inspired by this confidence, we fly unto you, O Virgin of virgins, our Mother." },
        { s: "A", t: "To you we come, before you we stand, sinful and sorrowful." },
        { s: "L", t: "O Mother of the Word Incarnate, despise not our petitions." },
        { s: "A", t: "But in your mercy hear and answer us. Amen." }
      ]
    }
  },

  // ── WEEK 13 ──────────────────────────────────────────────────
  {
    week: 13,
    title: "The Last Things: Death, Judgment, Heaven, and Hell",
    pillar: "Creed",
    verse: "I am the resurrection and the life. He who believes in me, even if he die, shall live. — John 11:25",

    discover: {
      title: "Discover: The Four Last Things",
      instruction: "Tap each card to explore what the Church teaches about life after death.",
      items: [
        { icon: "⏳", name: "Death", desc: "Every human person will die. Death is not the end — it is the passage from earthly life to eternal life. At the moment of death, our soul separates from our body, and we come before God (CCC 1007–1011)." },
        { icon: "⚖️", name: "Judgment", desc: "There are two judgments: the Particular Judgment (immediately after death, for each individual) and the Last Judgment (at the end of time, for all humanity together). Both are expressions of God's justice and mercy (CCC 1021–1022, 1038–1041)." },
        { icon: "☀️", name: "Heaven", desc: "Heaven is the eternal life of perfect joy in the presence of God — the Beatific Vision. It is not a place in the sky but a state of perfect communion with the Holy Trinity and all the saints (CCC 1023–1025)." },
        { icon: "🔥", name: "Purgatory", desc: "Purgatory is a state of purification after death for those who die in God's grace but still need to be cleansed of attachments to sin. We can help souls in purgatory through our prayers and sacrifices (CCC 1030–1032)." },
        { icon: "🌑", name: "Hell", desc: "Hell is the eternal separation from God, chosen freely by those who die in a state of mortal sin and refuse God's mercy. The Church teaches that hell is real and possible — this is why our choices in this life matter so much (CCC 1033–1037)." }
      ]
    },

    secondary: "sort",
    sort: {
      title: "The Four Last Things",
      instruction: "Tap each description, then tap which 'Last Thing' it belongs to.",
      items: [
        { name: "Immediate judgment after death",      icon: "⚖️", group: "Judgment" },
        { name: "Perfect joy in God's presence",       icon: "☀️", group: "Heaven" },
        { name: "Purification before entering heaven", icon: "🔥", group: "Purgatory" },
        { name: "Eternal separation from God",         icon: "🌑", group: "Hell" },
        { name: "The passage from earthly life",       icon: "⏳", group: "Death" },
        { name: "We can pray for these souls",         icon: "🙏", group: "Purgatory" },
        { name: "Chosen by rejecting God's mercy",     icon: "😔", group: "Hell" }
      ],
      groups: ["Death", "Judgment", "Heaven", "Purgatory", "Hell"],
      colors: { Death: "#888", Judgment: "#D4A843", Heaven: "#4A90D9", Purgatory: "#C0736A", Hell: "#333" },
      icons:  { Death: "⏳",   Judgment: "⚖️",       Heaven: "☀️",    Purgatory: "🔥",      Hell: "🌑" }
    },

    quiz: {
      questions: [
        { q: "The Particular Judgment happens:", opts: ["At the end of time", "Immediately after death", "At Baptism", "During purgatory"], correct: 1 },
        { q: "Heaven is best described as:", opts: ["A place in the sky with clouds", "Eternal perfect joy with God", "A reward for being nice", "The same as purgatory"], correct: 1 },
        { q: "Purgatory is:", opts: ["A second chance after hell", "A place for non-believers", "Purification for those dying in God's grace", "The same as limbo"], correct: 2 },
        { q: "We can help souls in purgatory by:", opts: ["Visiting them", "Sending them food", "Praying and making sacrifices for them", "Doing nothing — they are in God's hands"], correct: 2 },
        { q: "Hell is:", opts: ["A myth the Church made up", "Eternal separation from God chosen freely", "A temporary punishment", "Only for Satan"], correct: 1 }
      ]
    },

    prayer: {
      title: "Prayer for the Holy Souls",
      lines: [
        { s: "L", t: "Lord God, we believe in the resurrection and eternal life." },
        { s: "A", t: "May we live each day as if eternity depended on our choices — because it does." },
        { s: "L", t: "We pray for all the faithful departed, especially those who need purification." },
        { s: "A", t: "Eternal rest grant unto them, O Lord, and let perpetual light shine upon them." },
        { s: "L", t: "May their souls and the souls of all the faithful departed, through the mercy of God," },
        { s: "A", t: "Rest in peace. Amen." }
      ]
    }
  },

  // ── WEEK 14 ──────────────────────────────────────────────────
  {
    week: 14,
    title: "Sacred Scripture: God's Word to Us",
    pillar: "Creed",
    verse: "All scripture, inspired by God, is useful for teaching, for reproof, for correction, and for training in righteousness. — 2 Timothy 3:16",

    discover: {
      title: "Discover: Sacred Scripture",
      instruction: "Tap each card to learn how God speaks to us through the Bible.",
      items: [
        { icon: "📖", name: "What Is the Bible?", desc: "The Bible is the written Word of God. It is a library of 73 books (46 Old Testament, 27 New Testament) written by human authors under the inspiration of the Holy Spirit. God is the true author; human authors are real authors too (CCC 105–106)." },
        { icon: "✍️", name: "Divine Inspiration", desc: "God inspired the human authors so that they wrote what He intended, using their own words, personalities, and literary styles. Inspiration does not mean dictation — God worked through human minds and hearts (CCC 106)." },
        { icon: "📜", name: "The Old Testament", desc: "The Old Testament (46 books) tells the story of God's covenant with Israel — from creation through the patriarchs, the Exodus, the prophets, and the wisdom writings. It prepares for and points to Jesus Christ (CCC 121–123)." },
        { icon: "✝️", name: "The New Testament", desc: "The New Testament (27 books) is the fulfillment of the Old. It includes the four Gospels (Matthew, Mark, Luke, John), the Acts of the Apostles, the Letters, and Revelation. The Gospels are the heart of all Scripture (CCC 124–127)." },
        { icon: "🙏", name: "Lectio Divina", desc: "Lectio Divina ('sacred reading') is a traditional Catholic practice of prayerfully reading Scripture in four steps: Read (Lectio), Reflect (Meditatio), Respond (Oratio), and Rest (Contemplatio). It transforms us by letting God's word dwell in us (CCC 1177)." }
      ]
    },

    secondary: "fillblank",
    fillblank: {
      title: "Scripture Facts",
      instruction: "Fill in the missing word.",
      sentences: [
        { text: "The Bible contains ___ books in total.", answer: "73", options: ["73", "66", "39", "27"] },
        { text: "The New Testament contains ___ books.", answer: "27", options: ["27", "46", "39", "12"] },
        { text: "The four ___ are the heart of all Scripture.", answer: "Gospels", options: ["Gospels", "Psalms", "Letters", "Prophets"] },
        { text: "God inspired the human authors through the Holy ___.", answer: "Spirit", options: ["Spirit", "Church", "Pope", "Angels"] }
      ]
    },

    quiz: {
      questions: [
        { q: "How many books are in the Catholic Bible?", opts: ["39", "66", "73", "80"], correct: 2 },
        { q: "'Inspiration' means God:", opts: ["Dictated every word mechanically", "Worked through human minds to write what He intended", "Only inspired the Gospels", "Wrote the Bible himself without humans"], correct: 1 },
        { q: "Which Testament prepares for and points to Jesus?", opts: ["The New Testament", "The Old Testament", "Both equally", "Neither"], correct: 1 },
        { q: "What are the four Gospels?", opts: ["Genesis, Exodus, Leviticus, Numbers", "Matthew, Mark, Luke, John", "Romans, Corinthians, Galatians, Ephesians", "Isaiah, Jeremiah, Ezekiel, Daniel"], correct: 1 },
        { q: "Lectio Divina is:", opts: ["A way to memorize Scripture", "A prayerful reading of Scripture in four steps", "Reading the Bible as fast as possible", "Only for priests and monks"], correct: 1 }
      ]
    },

    prayer: {
      title: "Prayer Before Reading Scripture",
      lines: [
        { s: "L", t: "Lord, open our minds and hearts to receive your holy word." },
        { s: "A", t: "Speak, Lord — your servants are listening." },
        { s: "L", t: "May your word be a lamp for our feet and a light for our path." },
        { s: "A", t: "Let your word take root in us and bear much fruit." },
        { s: "L", t: "Holy Spirit, you inspired the sacred writers — inspire us now as we read." },
        { s: "A", t: "May we be doers of your word, and not hearers only. Amen." }
      ]
    }
  },

  // ── WEEK 15 ──────────────────────────────────────────────────
  {
    week: 15,
    title: "Sacred Tradition and the Magisterium",
    pillar: "Creed",
    verse: "Stand firm and hold to the traditions which you were taught by us. — 2 Thessalonians 2:15",

    discover: {
      title: "Discover: Tradition and the Magisterium",
      instruction: "Tap each card to learn how the Church hands on God's truth.",
      items: [
        { icon: "🏛️", name: "What Is Sacred Tradition?", desc: "Sacred Tradition is the living transmission of the Gospel — the teachings, practices, and ways of understanding that the Apostles handed on to the Church. It is not human customs but the living deposit of faith (CCC 78–79)." },
        { icon: "📖", name: "Scripture and Tradition Together", desc: "Scripture and Sacred Tradition are not two separate sources — they flow from the same divine spring and together form one sacred deposit of faith. Neither can be understood apart from the other (CCC 80–81)." },
        { icon: "👑", name: "The Magisterium", desc: "The Magisterium is the teaching authority of the Church — exercised by the Pope and bishops in union with him. Its role is not to create new truth but to authentically interpret and guard what has been revealed (CCC 85–87)." },
        { icon: "⛪", name: "Papal Infallibility", desc: "When the Pope speaks ex cathedra (from the chair, in his official capacity) on a matter of faith or morals, he is protected from error by the Holy Spirit. This is a rare and solemn exercise of the Magisterium (CCC 891–892)." },
        { icon: "🤝", name: "Why This Matters", desc: "Without Scripture, Tradition, and the Magisterium working together, we have no reliable way to know what God has revealed. The Church preserves and presents the fullness of truth so that every generation can receive it (CCC 95)." }
      ]
    },

    secondary: "fillblank",
    fillblank: {
      title: "Scripture, Tradition, Magisterium",
      instruction: "Fill in the missing word.",
      sentences: [
        { text: "Scripture and Tradition flow from the same ___ spring.", answer: "divine", options: ["divine", "human", "ancient", "Roman"] },
        { text: "The Magisterium's role is to guard and ___ what has been revealed.", answer: "interpret", options: ["interpret", "replace", "create", "ignore"] },
        { text: "When the Pope speaks ex cathedra, he is protected from ___ by the Holy Spirit.", answer: "error", options: ["error", "boredom", "misunderstanding", "criticism"] },
        { text: "The Magisterium is exercised by the Pope and ___ in union with him.", answer: "bishops", options: ["bishops", "priests", "deacons", "theologians"] }
      ]
    },

    quiz: {
      questions: [
        { q: "Sacred Tradition is:", opts: ["Human customs and rules", "The living transmission of the Gospel from the Apostles", "Only the writings of the Popes", "Old-fashioned practices that can be changed"], correct: 1 },
        { q: "Scripture and Tradition come from:", opts: ["Different sources", "Human decisions", "The same divine source", "Church councils alone"], correct: 2 },
        { q: "The Magisterium's role is to:", opts: ["Create new doctrine", "Interpret and guard what has been revealed", "Replace Scripture", "Only apply to the Pope"], correct: 1 },
        { q: "What does 'ex cathedra' mean?", opts: ["From a book", "From the chair (official teaching)", "From tradition", "From Scripture"], correct: 1 },
        { q: "The Magisterium is exercised by:", opts: ["All Catholics", "Only the Pope", "The Pope and bishops in union with him", "Cardinals and theologians"], correct: 2 }
      ]
    },

    prayer: {
      title: "Prayer for the Pope and Bishops",
      lines: [
        { s: "L", t: "Lord, you entrusted the fullness of truth to your Church." },
        { s: "A", t: "Protect and guide our Holy Father, the Pope." },
        { s: "L", t: "Give wisdom and courage to all the bishops who teach in union with him." },
        { s: "A", t: "May the Church always faithfully hand on what the Apostles received." },
        { s: "L", t: "Help us to receive the Church's teaching with humble and open hearts." },
        { s: "A", t: "Lord, you are the Way, the Truth, and the Life. Lead us always. Amen." }
      ]
    }
  },

  // ── WEEK 16 — REVIEW ─────────────────────────────────────────
  {
    week: 16,
    title: "Unit 2 Review: Jesus, the Spirit, and the Church",
    pillar: "Review",
    verse: "Jesus Christ is the same, yesterday and today and forever. — Hebrews 13:8",

    discover: {
      title: "Review: Jesus, Spirit, and Church",
      instruction: "Tap each card to review the key teachings from Weeks 6–15.",
      items: [
        { icon: "👶", name: "The Incarnation", desc: "The Son of God became fully human while remaining fully God. Jesus was born in Bethlehem, lived, preached the Kingdom, and called twelve Apostles. He is the Way, Truth, and Life." },
        { icon: "✝️", name: "Passion, Death & Resurrection", desc: "Jesus died on the Cross as the one, perfect sacrifice for sin. On the third day, He rose from the dead. His Ascension opened heaven. Without the Resurrection, faith is empty." },
        { icon: "🔥", name: "The Holy Spirit", desc: "At Pentecost, the Holy Spirit came upon the Apostles and the Church was born. The Spirit gives seven gifts and bears twelve fruits in us, guiding the Church in truth." },
        { icon: "📖", name: "Scripture, Tradition, Magisterium", desc: "God reveals Himself through Scripture (73 books) and Sacred Tradition together. The Magisterium — the Pope and bishops — guards and interprets this deposit of faith." }
      ]
    },

    secondary: "timeline",
    timeline: {
      title: "The Story of Salvation — Key Events in Order",
      instruction: "Tap two items to swap them into the correct order.",
      items: [
        { id: 1, text: "The Annunciation — Mary's fiat",             order: 1 },
        { id: 2, text: "Jesus is baptized in the Jordan",            order: 2 },
        { id: 3, text: "The Last Supper and the Eucharist instituted", order: 3 },
        { id: 4, text: "The Resurrection on the third day",          order: 4 },
        { id: 5, text: "Pentecost — the Holy Spirit descends",       order: 5 }
      ]
    },

    quiz: {
      questions: [
        { q: "Jesus is:", opts: ["Only human", "Only divine", "Fully God and fully human", "Half of each"], correct: 2 },
        { q: "The Holy Spirit descended at Pentecost in:", opts: ["Water and oil", "Tongues of fire and wind", "A bright light", "Thunder and lightning"], correct: 1 },
        { q: "The Catholic Bible has how many books?", opts: ["39", "66", "73", "27"], correct: 2 },
        { q: "Sacred Tradition is:", opts: ["Human customs", "The living transmission of the Gospel", "Outdated rules", "Only the writings of Popes"], correct: 1 },
        { q: "Who heads the Magisterium?", opts: ["The Cardinals", "The Theologians", "The Pope with the bishops", "The Deacons"], correct: 2 }
      ]
    },

    prayer: {
      title: "Nicene Creed Reflection",
      lines: [
        { s: "L", t: "Let us together profess the faith we have studied and received." },
        { s: "A", t: "I believe in one God, the Father almighty, maker of heaven and earth." },
        { s: "L", t: "I believe in one Lord Jesus Christ, the Only Begotten Son of God." },
        { s: "A", t: "Who for us and for our salvation came down from heaven." },
        { s: "L", t: "I believe in the Holy Spirit, the Lord, the giver of life." },
        { s: "A", t: "I believe in one, holy, catholic, and apostolic Church. Amen." }
      ]
    }
  },

  // ── WEEK 17 ──────────────────────────────────────────────────
  {
    week: 17,
    title: "Conscience: Knowing Right from Wrong",
    pillar: "Morality",
    verse: "I always strive to have a clear conscience before God and before men. — Acts 24:16",

    discover: {
      title: "Discover: The Human Conscience",
      instruction: "Tap each card to understand what conscience is and how to form it.",
      items: [
        { icon: "💡", name: "What Is Conscience?", desc: "Conscience is the inner voice that judges whether an act is good or evil. It is not merely a feeling — it is our practical reason applying the moral law to specific situations. God speaks to us through our conscience (CCC 1776–1778)." },
        { icon: "⚠️", name: "Forming a Good Conscience", desc: "A conscience must be formed — educated — to judge correctly. We form our conscience through prayer, reading Scripture, learning the Church's teaching, and seeking wise counsel. An unformed conscience can be wrong (CCC 1783–1785)." },
        { icon: "😇", name: "Certain Conscience", desc: "We must always follow a certain (sure) conscience — if after prayer and reflection we are morally certain something is right or wrong, we are obliged to follow that judgment. Acting against a certain conscience is always sinful (CCC 1790)." },
        { icon: "❓", name: "Doubtful Conscience", desc: "When uncertain about the morality of an action, we must seek clarity before acting. We should never act on a doubtful conscience in a potentially grave matter without first trying to resolve the doubt (CCC 1787)." },
        { icon: "🙏", name: "Erroneous Conscience", desc: "A conscience can be genuinely mistaken — this is called an erroneous conscience. If the error is not our fault (invincible ignorance), we are not guilty for following it. If we could have known better, we bear responsibility (CCC 1790–1793)." }
      ]
    },

    secondary: "fillblank",
    fillblank: {
      title: "Understanding Conscience",
      instruction: "Fill in the missing word.",
      sentences: [
        { text: "Conscience is our practical ___ applying the moral law.", answer: "reason", options: ["reason", "feeling", "emotion", "instinct"] },
        { text: "We form conscience through prayer, Scripture, and the Church's ___.", answer: "teaching", options: ["teaching", "building", "music", "art"] },
        { text: "We must always follow a ___ conscience.", answer: "certain", options: ["certain", "doubtful", "comfortable", "popular"] },
        { text: "A conscience that is wrong through no fault of our own is called ___ ignorance.", answer: "invincible", options: ["invincible", "moral", "culpable", "personal"] }
      ]
    },

    quiz: {
      questions: [
        { q: "Conscience is best described as:", opts: ["A feeling in your gut", "Practical reason judging moral acts", "The voice of your parents", "Following what friends do"], correct: 1 },
        { q: "We form our conscience through:", opts: ["Guessing", "Only personal experience", "Prayer, Scripture, and Church teaching", "What feels right in the moment"], correct: 2 },
        { q: "We are always obliged to follow a ___ conscience.", opts: ["Doubtful", "Certain", "Popular", "Easy"], correct: 1 },
        { q: "An erroneous conscience is one that:", opts: ["Always leads to sin", "Is wrong despite sincere effort", "Never happens to good people", "Is a sign of wickedness"], correct: 1 },
        { q: "Before acting on a doubtful conscience in a grave matter, we should:", opts: ["Act anyway", "Ask friends", "Seek clarity through prayer and counsel", "Flip a coin"], correct: 2 }
      ]
    },

    prayer: {
      title: "Prayer for a Clear Conscience",
      lines: [
        { s: "L", t: "Lord, you have written your law upon our hearts." },
        { s: "A", t: "Help us to hear your voice clearly in our conscience." },
        { s: "L", t: "Form our consciences with your truth, so we may know right from wrong." },
        { s: "A", t: "Forgive us for the times we have silenced our conscience." },
        { s: "L", t: "Give us the courage to always act on what we know to be right." },
        { s: "A", t: "Lord, may our conscience be always clear before you. Amen." }
      ]
    }
  },

  // ── WEEK 18 ──────────────────────────────────────────────────
  {
    week: 18,
    title: "Sin: Personal and Social",
    pillar: "Morality",
    verse: "If we say that we have no sin, we deceive ourselves, and the truth is not in us. — 1 John 1:8",

    discover: {
      title: "Discover: Understanding Sin",
      instruction: "Tap each card to understand sin and its effects.",
      items: [
        { icon: "💔", name: "What Is Sin?", desc: "Sin is a free choice to disobey God — to act against reason, truth, and right conscience. It is an offense against God and damages our relationship with Him, with others, and with ourselves (CCC 1849–1850)." },
        { icon: "⚫", name: "Mortal Sin", desc: "Mortal sin kills the life of grace in the soul. Three conditions are all required: grave matter, full knowledge, and deliberate consent. A person who dies in unrepented mortal sin faces eternal separation from God (CCC 1857–1861)." },
        { icon: "🟡", name: "Venial Sin", desc: "Venial sin weakens but does not destroy our relationship with God. It wounds charity and disposes us toward greater sin. Venial sins should be confessed and repented of — they are not 'fine' (CCC 1862–1863)." },
        { icon: "🌐", name: "Social Sin", desc: "Sin is not only personal — it has social effects. Structures of sin (unjust systems, bad laws, corrupt institutions) can trap people. We are called to work for justice and to change sinful social structures (CCC 1869)." },
        { icon: "😔", name: "The Seven Capital Sins", desc: "The seven capital sins are sources from which other sins spring: pride, avarice (greed), envy, anger, gluttony, lust, and sloth. They are called 'capital' because they generate other sins and vices (CCC 1866)." }
      ]
    },

    secondary: "sort",
    sort: {
      title: "Mortal or Venial Sin?",
      instruction: "Tap an item, then tap whether it describes mortal or venial sin.",
      items: [
        { name: "Requires grave matter",                icon: "⚫", group: "Mortal" },
        { name: "Weakens but doesn't kill grace",       icon: "🟡", group: "Venial" },
        { name: "Full knowledge required",              icon: "🧠", group: "Mortal" },
        { name: "Smaller offenses against God",         icon: "💛", group: "Venial" },
        { name: "Deliberate consent required",          icon: "✋", group: "Mortal" },
        { name: "Disposes us toward greater sin",       icon: "📉", group: "Venial" },
        { name: "Kills the life of grace in the soul",  icon: "💀", group: "Mortal" }
      ],
      groups: ["Mortal", "Venial"],
      colors: { Mortal: "#C0736A", Venial: "#D4A843" },
      icons:  { Mortal: "⚫",      Venial: "🟡" }
    },

    quiz: {
      questions: [
        { q: "Sin is always a:", opts: ["Mistake", "Accident", "Free choice to disobey God", "Weakness of personality"], correct: 2 },
        { q: "For a sin to be mortal, it must involve:", opts: ["Any wrong action", "Grave matter, full knowledge, and deliberate consent", "Only grave matter", "Being an adult"], correct: 1 },
        { q: "Venial sin:", opts: ["Kills the life of grace", "Has no effect on us", "Weakens our relationship with God", "Is the same as mortal sin"], correct: 2 },
        { q: "How many capital sins are there?", opts: ["Three", "Five", "Seven", "Ten"], correct: 2 },
        { q: "Social sin refers to:", opts: ["Sins done with friends", "Unjust systems and structures that trap people", "Very public sins", "Sins against society's norms"], correct: 1 }
      ]
    },

    prayer: {
      title: "Act of Contrition",
      lines: [
        { s: "L", t: "Let us turn to God with repentant hearts and pray together." },
        { s: "A", t: "O my God, I am heartily sorry for having offended you." },
        { s: "L", t: "I detest all my sins because of your just punishments." },
        { s: "A", t: "But most of all, because they offend you, my God, who are all-good and worthy of all my love." },
        { s: "L", t: "I firmly resolve, with the help of your grace, to sin no more." },
        { s: "A", t: "And to avoid the near occasions of sin. Amen." }
      ]
    }
  },

  // ── WEEK 19 ──────────────────────────────────────────────────
  {
    week: 19,
    title: "The Virtue of Justice and the Common Good",
    pillar: "Morality",
    verse: "Let justice roll down like waters and righteousness like an ever-flowing stream. — Amos 5:24",

    discover: {
      title: "Discover: Justice and the Common Good",
      instruction: "Tap each card to explore justice as a virtue and a social call.",
      items: [
        { icon: "⚖️", name: "What Is Justice?", desc: "Justice is the moral virtue that consists in the constant and firm will to give to God and neighbor what is their due. It disposes us to respect the rights of others and builds up right relationships in community (CCC 1807)." },
        { icon: "🌍", name: "The Common Good", desc: "The common good is the sum of conditions that allow individuals and communities to reach their fulfillment. It requires the promotion of human rights, social peace, and the development of all people — not just some (CCC 1906–1909)." },
        { icon: "🏠", name: "Social Justice", desc: "Social justice applies the principle of justice to the structures of society — laws, economics, and institutions. Catholics are called to work for a just society where everyone can flourish and human dignity is respected (CCC 1928–1929)." },
        { icon: "🤝", name: "Solidarity", desc: "Solidarity is the virtue of social friendship — recognizing that we are all connected and responsible for one another. It moves us from an 'I' to a 'we' mentality, especially toward the poor and vulnerable (CCC 1939–1941)." },
        { icon: "💚", name: "Preferential Option for the Poor", desc: "The Church teaches that we must give special attention to the needs of the poor and vulnerable. This does not mean ignoring others, but giving priority to those in greatest need. This is the 'preferential option for the poor' (CCC 2448)." }
      ]
    },

    secondary: "sort",
    sort: {
      title: "Principles of Catholic Social Teaching",
      instruction: "Tap an item, then tap the principle of justice it best illustrates.",
      items: [
        { name: "Giving everyone what they are owed",         icon: "⚖️", group: "Justice" },
        { name: "We are all responsible for one another",     icon: "🤝", group: "Solidarity" },
        { name: "Conditions for all people to flourish",      icon: "🌍", group: "Common Good" },
        { name: "Priority given to the most vulnerable",      icon: "💚", group: "Option for Poor" },
        { name: "Fair wages and working conditions",          icon: "🏭", group: "Social Justice" },
        { name: "Global responsibility for world poverty",    icon: "🌐", group: "Solidarity" },
        { name: "Everyone's human rights must be protected",  icon: "👤", group: "Common Good" }
      ],
      groups: ["Justice", "Solidarity", "Common Good", "Social Justice", "Option for Poor"],
      colors: { Justice: "#D4A843", Solidarity: "#4A90D9", "Common Good": "#6DB87B", "Social Justice": "#C0736A", "Option for Poor": "#9B6DB8" },
      icons:  { Justice: "⚖️",       Solidarity: "🤝",     "Common Good": "🌍",       "Social Justice": "🏠",        "Option for Poor": "💚" }
    },

    quiz: {
      questions: [
        { q: "Justice is the virtue of giving to others:", opts: ["What we feel like giving", "As little as possible", "What is their due", "Only material goods"], correct: 2 },
        { q: "The common good refers to:", opts: ["What is good for me", "Conditions allowing all people to flourish", "What the majority wants", "Economic success"], correct: 1 },
        { q: "Solidarity means:", opts: ["Only helping your own family", "Recognizing our connection to and responsibility for all", "Giving to charity sometimes", "Feeling sorry for the poor"], correct: 1 },
        { q: "The 'preferential option for the poor' means:", opts: ["Ignoring the wealthy", "Only caring about the poor", "Giving priority to those in greatest need", "Eliminating all wealth"], correct: 2 },
        { q: "Social justice applies justice to:", opts: ["Individual relationships only", "Church rules", "The structures and laws of society", "Only economic issues"], correct: 2 }
      ]
    },

    prayer: {
      title: "Prayer for Justice in the World",
      lines: [
        { s: "L", t: "Lord God, you call us to work for a just and peaceful world." },
        { s: "A", t: "Open our eyes to see the needs of those around us." },
        { s: "L", t: "Give us the courage to speak for those who have no voice." },
        { s: "A", t: "And the generosity to share what we have with those in need." },
        { s: "L", t: "May your justice flow like water and your righteousness like a stream." },
        { s: "A", t: "Lord, make us instruments of justice and peace in the world. Amen." }
      ]
    }
  },

  // ── WEEK 20 ──────────────────────────────────────────────────
  {
    week: 20,
    title: "The Virtues: Living as God's People",
    pillar: "Morality",
    verse: "Whatever is true, whatever honorable, whatever just, whatever pure — think about these things. — Philippians 4:8",

    discover: {
      title: "Discover: The Virtues",
      instruction: "Tap each card to explore the virtues that shape a holy life.",
      items: [
        { icon: "⭐", name: "What Is a Virtue?", desc: "A virtue is a stable disposition of the soul that inclines us to do good habitually. Virtues are not just one-time good acts — they are patterns of excellence built through practice and God's grace (CCC 1803–1804)." },
        { icon: "🎯", name: "The Cardinal Virtues", desc: "The four cardinal (hinge) virtues are prudence, justice, fortitude, and temperance. All other natural virtues hinge on these four. They can be developed through human effort and are perfected by God's grace (CCC 1805–1809)." },
        { icon: "💛", name: "The Theological Virtues", desc: "Faith, hope, and charity (love) are the three theological virtues — gifts directly infused by God at Baptism. They relate us directly to God. Of these, St. Paul says, 'The greatest of these is charity' (CCC 1812–1813)." },
        { icon: "💜", name: "Prudence: The Driver of Virtues", desc: "Prudence is the virtue that helps us discern the right course of action in any situation. It is called the 'charioteer of the virtues' — it guides all the other virtues in the right direction (CCC 1806)." },
        { icon: "💪", name: "Fortitude: Courage for Good", desc: "Fortitude is the virtue that gives us the strength to do what is right even when it is difficult, dangerous, or unpopular. It is the courage to persevere in faith and goodness (CCC 1808)." }
      ]
    },

    secondary: "sort",
    sort: {
      title: "Cardinal or Theological Virtues?",
      instruction: "Tap an item, then tap whether it is a Cardinal or Theological virtue.",
      items: [
        { name: "Prudence",   icon: "🎯", group: "Cardinal" },
        { name: "Faith",      icon: "🕊️", group: "Theological" },
        { name: "Justice",    icon: "⚖️", group: "Cardinal" },
        { name: "Hope",       icon: "⭐", group: "Theological" },
        { name: "Fortitude",  icon: "💪", group: "Cardinal" },
        { name: "Charity",    icon: "❤️", group: "Theological" },
        { name: "Temperance", icon: "⚖️", group: "Cardinal" }
      ],
      groups: ["Cardinal", "Theological"],
      colors: { Cardinal: "#4A90D9", Theological: "#9B6DB8" },
      icons:  { Cardinal: "🎯",      Theological: "💛" }
    },

    quiz: {
      questions: [
        { q: "A virtue is:", opts: ["A single good act", "A stable disposition to do good habitually", "A Church rule", "A feeling of goodwill"], correct: 1 },
        { q: "Which are the four cardinal virtues?", opts: ["Faith, hope, charity, love", "Prudence, justice, fortitude, temperance", "Wisdom, knowledge, piety, fear of God", "Kindness, patience, mercy, honesty"], correct: 1 },
        { q: "The theological virtues are:", opts: ["Earned through hard work", "Gifts from God infused at Baptism", "Only for adults", "The same as the cardinal virtues"], correct: 1 },
        { q: "'Charioteer of the virtues' refers to:", opts: ["Justice", "Fortitude", "Prudence", "Temperance"], correct: 2 },
        { q: "St. Paul says the greatest theological virtue is:", opts: ["Faith", "Hope", "Charity", "Prudence"], correct: 2 }
      ]
    },

    prayer: {
      title: "Prayer for the Virtues",
      lines: [
        { s: "L", t: "Lord, you call us to be holy as you are holy." },
        { s: "A", t: "Give us the wisdom to know what is good, true, and beautiful." },
        { s: "L", t: "Strengthen in us the virtues of prudence, justice, fortitude, and temperance." },
        { s: "A", t: "And fill us with the gifts of faith, hope, and love." },
        { s: "L", t: "Help us to practice virtue not just once, but as a way of life." },
        { s: "A", t: "Lord, make us saints. We are not too young to begin. Amen." }
      ]
    }
  },

  // ── WEEK 21 — REVIEW ─────────────────────────────────────────
  {
    week: 21,
    title: "Unit 3 Review: The Moral Life",
    pillar: "Review",
    verse: "Be doers of the word and not hearers only. — James 1:22",

    discover: {
      title: "Review: The Moral Life",
      instruction: "Tap each card to review the key moral teachings from Weeks 17–20.",
      items: [
        { icon: "💡", name: "Conscience", desc: "Conscience is practical reason judging moral acts. We must form it well through prayer, Scripture, and Church teaching. We are always obliged to follow a certain conscience." },
        { icon: "💔", name: "Sin and Its Types", desc: "Sin is a free choice to disobey God. Mortal sin (grave + full knowledge + full consent) kills grace. Venial sin weakens it. The seven capital sins are sources of other sins." },
        { icon: "⚖️", name: "Justice and the Common Good", desc: "Justice gives everyone what they are due. The common good seeks conditions for all to flourish. Solidarity and the preferential option for the poor guide Catholic social action." },
        { icon: "⭐", name: "The Virtues", desc: "Virtues are stable habits of the good. The four cardinal virtues hinge on prudence, justice, fortitude, and temperance. The three theological virtues — faith, hope, and charity — are gifts of God." }
      ]
    },

    secondary: "fillblank",
    fillblank: {
      title: "Review: Key Moral Terms",
      instruction: "Fill in the missing word.",
      sentences: [
        { text: "For a sin to be mortal, it must involve grave matter, full knowledge, and deliberate ___.", answer: "consent", options: ["consent", "emotion", "habit", "action"] },
        { text: "The four ___ virtues are prudence, justice, fortitude, and temperance.", answer: "cardinal", options: ["cardinal", "theological", "capital", "moral"] },
        { text: "The virtue of ___ gives everyone what is their due.", answer: "justice", options: ["justice", "prudence", "charity", "hope"] },
        { text: "The greatest theological virtue is ___.", answer: "charity", options: ["charity", "faith", "hope", "prudence"] }
      ]
    },

    quiz: {
      questions: [
        { q: "What is the 'charioteer of the virtues'?", opts: ["Justice", "Fortitude", "Prudence", "Temperance"], correct: 2 },
        { q: "The three theological virtues are:", opts: ["Faith, hope, charity", "Prudence, justice, fortitude", "Love, joy, peace", "Wisdom, knowledge, piety"], correct: 0 },
        { q: "The seven capital sins are:", opts: ["Sources of other sins", "The worst sins possible", "Only serious sins", "Sins that can't be forgiven"], correct: 0 },
        { q: "Solidarity means:", opts: ["Only helping yourself", "Recognizing our responsibility for all", "Giving to charity once a year", "Helping only the poor"], correct: 1 },
        { q: "Conscience must be:", opts: ["Ignored", "Followed blindly", "Formed through prayer and Church teaching", "Only trusted when convenient"], correct: 2 }
      ]
    },

    prayer: {
      title: "Prayer of Dedication",
      lines: [
        { s: "L", t: "Lord, we have learned so much about how to live a good and holy life." },
        { s: "A", t: "Help us to put what we know into practice every day." },
        { s: "L", t: "Form our consciences, grow our virtues, and forgive our sins." },
        { s: "A", t: "Give us the courage to choose good even when it is hard." },
        { s: "L", t: "We want to be people of justice, virtue, and love." },
        { s: "A", t: "Lord, help us to be doers of your word and not hearers only. Amen." }
      ]
    }
  },

  // ── WEEK 22 ──────────────────────────────────────────────────
  {
    week: 22,
    title: "What Is Prayer? Deepening Our Understanding",
    pillar: "Prayer",
    verse: "Pray without ceasing. — 1 Thessalonians 5:17",

    discover: {
      title: "Discover: Prayer — A Deeper Look",
      instruction: "Tap each card to go deeper into what prayer really is.",
      items: [
        { icon: "🙏", name: "A Covenant Relationship", desc: "Prayer is the living relationship of the children of God with their Father. It is not merely reciting formulas — it is an encounter with the living God who desires our company (CCC 2558–2560)." },
        { icon: "💬", name: "Vocal Prayer", desc: "Vocal prayer uses words — spoken or sung — to address God. The Our Father, Hail Mary, and the psalms are examples. Even vocal prayers require attention of heart, not just lips moving (CCC 2700–2704)." },
        { icon: "🧠", name: "Meditation", desc: "Meditation is a form of prayer that engages our thoughts, imagination, and desires to understand and respond to God's word. Lectio Divina is a classic form. It is thinking prayerfully (CCC 2705–2708)." },
        { icon: "🕊️", name: "Contemplative Prayer", desc: "Contemplation is the highest form of prayer — a simple, loving gaze at God. It does not require many words. St. Teresa of Ávila described it as 'a close sharing between friends' (CCC 2709–2719)." },
        { icon: "⛰️", name: "The Battle of Prayer", desc: "Prayer requires effort. We face distractions, dryness, and discouragement. The saints teach us to persevere. Dryness is not failure — it can be an invitation to deeper trust. God is always faithful (CCC 2725–2737)." }
      ]
    },

    secondary: "fillblank",
    fillblank: {
      title: "Types and Forms of Prayer",
      instruction: "Fill in the missing word.",
      sentences: [
        { text: "Prayer is the living ___ of the children of God with their Father.", answer: "relationship", options: ["relationship", "habit", "duty", "ritual"] },
        { text: "___ prayer uses words spoken or sung to address God.", answer: "Vocal", options: ["Vocal", "Silent", "Hidden", "Mental"] },
        { text: "Meditation engages our thoughts, imagination, and ___ in prayer.", answer: "desires", options: ["desires", "muscles", "schedules", "memories"] },
        { text: "Contemplation is a simple loving ___ at God.", answer: "gaze", options: ["gaze", "shout", "prayer", "demand"] }
      ]
    },

    quiz: {
      questions: [
        { q: "Prayer is primarily:", opts: ["Saying words at church", "A living relationship with God", "A religious duty only", "Something only priests do"], correct: 1 },
        { q: "Vocal prayer requires:", opts: ["No heart — just words", "Perfect Latin pronunciation", "Attention of heart, not just lips", "A priest to lead it"], correct: 2 },
        { q: "Meditation engages our:", opts: ["Physical fitness", "Thoughts, imagination, and desires", "Memory only", "Group activities"], correct: 1 },
        { q: "Contemplative prayer is described as:", opts: ["Saying many words", "Complex mental exercises", "A simple loving gaze at God", "Praying the Rosary"], correct: 2 },
        { q: "Dryness in prayer is:", opts: ["A sign to stop praying", "Always our fault", "A possible invitation to deeper trust", "Proof that God is absent"], correct: 2 }
      ]
    },

    prayer: {
      title: "A Prayer of Quiet Presence",
      lines: [
        { s: "L", t: "Lord, we come to you not with many words, but with open hearts." },
        { s: "A", t: "Speak, Lord — we are listening. We want to know you." },
        { s: "L", t: "In the noise of our lives, help us to find moments of quiet with you." },
        { s: "A", t: "You are closer to us than we are to ourselves. We rest in you." },
        { s: "L", t: "Teach us to pray — not just with our lips, but with our whole lives." },
        { s: "A", t: "May our prayer never be just words, but an encounter with you. Amen." }
      ]
    }
  },

  // ── WEEK 23 ──────────────────────────────────────────────────
  {
    week: 23,
    title: "The Psalms: Israel's Prayer Book",
    pillar: "Prayer",
    verse: "I will bless the Lord at all times; his praise shall be always in my mouth. — Psalm 34:2",

    discover: {
      title: "Discover: Praying the Psalms",
      instruction: "Tap each card to discover the power of the Psalms as prayer.",
      items: [
        { icon: "📜", name: "What Are the Psalms?", desc: "The Psalms are 150 sacred poems and songs in the Old Testament, traditionally associated with King David. They were the prayer book of Israel and became the prayer book of the Church. Jesus Himself prayed the Psalms (CCC 2585–2588)." },
        { icon: "🙌", name: "Types of Psalms", desc: "Psalms cover the full range of human emotion. There are psalms of praise (Hallelujah psalms), psalms of lament (crying out to God in pain), psalms of thanksgiving, wisdom psalms, and royal psalms pointing to the Messiah." },
        { icon: "😢", name: "Psalms of Lament", desc: "Many psalms express grief, despair, and even anger at God. 'My God, my God, why have you forsaken me?' (Psalm 22). This teaches us that we can bring our full, honest selves to God — He can handle our pain." },
        { icon: "🎵", name: "The Psalms at Mass", desc: "The Church prays the Psalms at every Mass in the Responsorial Psalm. The Liturgy of the Hours (the Church's daily prayer) is built almost entirely on the Psalms. They are the heartbeat of Christian prayer." },
        { icon: "✝️", name: "Jesus and the Psalms", desc: "Jesus quoted the Psalms on the Cross ('My God, my God, why have you forsaken me?' — Psalm 22) and in his final breath ('Into your hands I commend my spirit' — Psalm 31:5). The Psalms shaped his prayer and identity." }
      ]
    },

    secondary: "timeline",
    timeline: {
      title: "The Psalms Through Salvation History",
      instruction: "Tap two items to swap them into the correct order.",
      items: [
        { id: 1, text: "Psalms composed during Israel's kingdom period",         order: 1 },
        { id: 2, text: "Psalms used in Temple worship in Jerusalem",             order: 2 },
        { id: 3, text: "Jesus prays the Psalms throughout His life",             order: 3 },
        { id: 4, text: "Jesus quotes Psalm 22 from the Cross",                   order: 4 },
        { id: 5, text: "The Church prays Psalms daily in the Liturgy of Hours",  order: 5 }
      ]
    },

    quiz: {
      questions: [
        { q: "How many Psalms are in the Bible?", opts: ["73", "100", "150", "200"], correct: 2 },
        { q: "Psalms of lament teach us that:", opts: ["We shouldn't be sad in prayer", "We can bring our full honest selves to God", "Only happy psalms are good", "Crying is wrong"], correct: 1 },
        { q: "Which psalm did Jesus quote from the Cross?", opts: ["Psalm 23", "Psalm 22", "Psalm 100", "Psalm 51"], correct: 1 },
        { q: "The Church prays Psalms at every Mass in the:", opts: ["Gloria", "Responsorial Psalm", "Creed", "Penitential Rite"], correct: 1 },
        { q: "The Liturgy of the Hours is built mainly on:", opts: ["The Rosary", "The Our Father", "The Psalms", "The Gospel"], correct: 2 }
      ]
    },

    prayer: {
      title: "Praying Psalm 23",
      lines: [
        { s: "L", t: "The Lord is my shepherd — I shall not want." },
        { s: "A", t: "He leads me to green pastures and restful waters." },
        { s: "L", t: "Even in the darkest valley, I will fear no evil." },
        { s: "A", t: "For you are with me, Lord — your rod and your staff comfort me." },
        { s: "L", t: "Surely goodness and mercy shall follow me all the days of my life." },
        { s: "A", t: "And I shall dwell in the house of the Lord forever. Amen." }
      ]
    }
  },

  // ── WEEK 24 ──────────────────────────────────────────────────
  {
    week: 24,
    title: "Intercessory Prayer and Praying for Others",
    pillar: "Prayer",
    verse: "I urge therefore, first of all, that petitions, prayers, intercessions, and thanksgivings be offered for all. — 1 Timothy 2:1",

    discover: {
      title: "Discover: Intercessory Prayer",
      instruction: "Tap each card to learn about praying for others.",
      items: [
        { icon: "🙏", name: "What Is Intercession?", desc: "Intercessory prayer is praying on behalf of others — bringing their needs before God. Abraham, Moses, and Jesus Himself are great intercessors in Scripture. Intercession is an act of love and solidarity (CCC 2634–2636)." },
        { icon: "✝️", name: "Jesus, Our Great Intercessor", desc: "Jesus is our greatest intercessor. He lives forever at the right hand of the Father, interceding for us (Hebrews 7:25). Our prayer is united to His priestly intercession at every Mass (CCC 2634)." },
        { icon: "👑", name: "Mary's Intercession", desc: "Mary intercedes for us as our spiritual Mother. At the wedding at Cana, she brought the needs of others to Jesus: 'They have no wine' (John 2:3). She still does this for us today (CCC 969)." },
        { icon: "😇", name: "Intercessory Power of the Saints", desc: "The saints in heaven also intercede for us. We are all connected in the Communion of Saints. When we ask a saint to pray for us, we are joining our prayer to theirs and to Christ's (CCC 956)." },
        { icon: "❤️", name: "Praying for Enemies", desc: "Jesus commands us to pray even for our enemies and persecutors (Matthew 5:44). This is one of the most challenging and transformative forms of prayer. It opens our hearts to God's universal love (CCC 2636)." }
      ]
    },

    secondary: "fillblank",
    fillblank: {
      title: "Intercessory Prayer",
      instruction: "Fill in the missing word.",
      sentences: [
        { text: "Intercessory prayer brings the needs of ___ before God.", answer: "others", options: ["others", "ourselves", "enemies only", "saints"] },
        { text: "Jesus intercedes for us at the right hand of the ___.", answer: "Father", options: ["Father", "Church", "Pope", "angels"] },
        { text: "At Cana, Mary said: 'They have no ___.'", answer: "wine", options: ["wine", "bread", "water", "fish"] },
        { text: "Jesus commands us to pray even for our ___.", answer: "enemies", options: ["enemies", "friends", "parents", "teachers"] }
      ]
    },

    quiz: {
      questions: [
        { q: "Intercessory prayer is:", opts: ["Praying only for yourself", "Praying on behalf of others", "A special Mass prayer", "Only done by priests"], correct: 1 },
        { q: "Who is our greatest intercessor?", opts: ["Mary", "Peter", "Jesus", "The Pope"], correct: 2 },
        { q: "At the Wedding at Cana, Mary said:", opts: ["'Pray for us sinners'", "'They have no wine'", "'Do whatever he tells you'", "Both B and C"], correct: 3 },
        { q: "Asking saints to pray for us is an expression of:", opts: ["Worshipping saints", "The Communion of Saints", "Disobeying Scripture", "Superstition"], correct: 1 },
        { q: "Jesus commands us to pray for:", opts: ["Only friends and family", "Only the sick", "Only ourselves", "Even our enemies"], correct: 3 }
      ]
    },

    prayer: {
      title: "A Prayer of Intercession",
      lines: [
        { s: "L", t: "Lord, we bring before you all those who are in need." },
        { s: "A", t: "For the sick, the suffering, and the lonely — have mercy, Lord." },
        { s: "L", t: "For those who have no one to pray for them — we stand in for them now." },
        { s: "A", t: "United with Mary, the saints, and all the Church, we bring them to you." },
        { s: "L", t: "And Lord, help us to pray even for those who have hurt us." },
        { s: "A", t: "May your love be victorious in every heart, including our own. Amen." }
      ]
    }
  },

  // ── WEEK 25 — REVIEW ─────────────────────────────────────────
  {
    week: 25,
    title: "Unit 4 Review: Prayer and the Life of Faith",
    pillar: "Review",
    verse: "The prayer of a just man avails much, as it is effective. — James 5:16",

    discover: {
      title: "Review: Prayer and the Life of Faith",
      instruction: "Tap each card to review what we've learned about prayer.",
      items: [
        { icon: "🙏", name: "Three Forms of Prayer", desc: "Vocal prayer uses words aloud. Meditation engages our thoughts and imagination with God's word. Contemplation is a silent loving gaze at God. All three deepen our relationship with Him." },
        { icon: "📜", name: "The Psalms", desc: "150 sacred poems that are the prayer book of both Israel and the Church. The Psalms express the full range of human emotion — praise, lament, thanksgiving, and wisdom. Jesus prayed them too." },
        { icon: "😇", name: "Intercession", desc: "Intercessory prayer brings others before God. Jesus intercedes for us eternally. Mary and the saints intercede for us. We are called to pray for all — even enemies." },
        { icon: "⛰️", name: "The Battle of Prayer", desc: "Prayer requires perseverance. Distractions and dryness are normal. God is always faithful. The saints show us that persisting through difficulty leads to deeper union with God." }
      ]
    },

    secondary: "sort",
    sort: {
      title: "Match the Prayer Topic",
      instruction: "Tap an item, then tap the prayer topic it best belongs to.",
      items: [
        { name: "Lectio Divina",             icon: "📖", group: "Meditation" },
        { name: "Praying for the sick",      icon: "🏥", group: "Intercession" },
        { name: "Psalm 23",                  icon: "📜", group: "The Psalms" },
        { name: "A loving gaze at God",      icon: "🕊️", group: "Contemplation" },
        { name: "Asking Mary to pray for us",icon: "👑", group: "Intercession" },
        { name: "Psalm of lament",           icon: "😢", group: "The Psalms" },
        { name: "Reciting the Rosary aloud", icon: "📿", group: "Vocal Prayer" }
      ],
      groups: ["Vocal Prayer", "Meditation", "Contemplation", "The Psalms", "Intercession"],
      colors: { "Vocal Prayer": "#4A90D9", Meditation: "#6DB87B", Contemplation: "#9B6DB8", "The Psalms": "#D4A843", Intercession: "#C0736A" },
      icons:  { "Vocal Prayer": "💬",        Meditation: "🧠",     Contemplation: "🕊️",     "The Psalms": "📜",       Intercession: "🙏" }
    },

    quiz: {
      questions: [
        { q: "Which is the highest form of prayer?", opts: ["Vocal", "Meditation", "Contemplation", "Intercession"], correct: 2 },
        { q: "How many Psalms are in the Bible?", opts: ["100", "150", "73", "27"], correct: 1 },
        { q: "Intercessory prayer is defined as:", opts: ["Asking God for personal needs", "Praying on behalf of others", "Saying many prayers quickly", "Only praying the Rosary"], correct: 1 },
        { q: "Dryness in prayer is best understood as:", opts: ["Proof God doesn't care", "An invitation to deeper trust", "A reason to stop praying", "Only for beginners"], correct: 1 },
        { q: "The Liturgy of the Hours is built mainly on:", opts: ["The Our Father", "The Rosary", "The Psalms", "The Creed"], correct: 2 }
      ]
    },

    prayer: {
      title: "Prayer of St. Francis (Adapted)",
      lines: [
        { s: "L", t: "Lord, make us instruments of your peace." },
        { s: "A", t: "Where there is hatred, let us sow love. Where there is injury, pardon." },
        { s: "L", t: "Where there is doubt, faith. Where there is despair, hope." },
        { s: "A", t: "Where there is darkness, light. Where there is sadness, joy." },
        { s: "L", t: "Grant that we may not so much seek to be consoled as to console." },
        { s: "A", t: "For it is in giving that we receive, and in dying that we rise to eternal life. Amen." }
      ]
    }
  },

  // ── WEEK 26 ──────────────────────────────────────────────────
  {
    week: 26,
    title: "The Eucharist: Source and Summit",
    pillar: "Sacraments",
    verse: "I am the living bread that came down from heaven. If anyone eats of this bread, he will live forever. — John 6:51",

    discover: {
      title: "Discover: The Eucharist More Deeply",
      instruction: "Tap each card to deepen your understanding of the Eucharist.",
      items: [
        { icon: "🍞", name: "Source and Summit", desc: "The Eucharist is called the 'source and summit of the Christian life.' It is the source — from which all grace flows — and the summit — toward which all Church activity is directed. Everything in the Church leads to and flows from the Eucharist (CCC 1324)." },
        { icon: "✝️", name: "The Mass as Sacrifice", desc: "The Mass is not a re-crucifixion — it is the one sacrifice of Christ made present in an unbloody manner. The sacrifice of Calvary and the sacrifice of the Mass are the same sacrifice, offered once for all (CCC 1367)." },
        { icon: "🌟", name: "Real Presence", desc: "At the words of consecration, the bread and wine truly, really, and substantially become the Body and Blood, Soul and Divinity of Jesus Christ. This is called transubstantiation (CCC 1373–1376)." },
        { icon: "🤝", name: "Eucharist as Communion", desc: "Receiving Holy Communion is not just personal — it builds up the Body of Christ. When we receive Jesus, we are more deeply united to Him and to one another as the Church (CCC 1396–1397)." },
        { icon: "🌍", name: "Eucharist and Mission", desc: "The word 'Mass' comes from the Latin 'missa' — we are sent. After receiving the Eucharist, we are sent out to love and serve the world. The Eucharist must change how we live (CCC 1332)." }
      ]
    },

    secondary: "timeline",
    timeline: {
      title: "The Eucharist Through History",
      instruction: "Tap two items to swap them into the correct order.",
      items: [
        { id: 1, text: "Jesus institutes the Eucharist at the Last Supper",       order: 1 },
        { id: 2, text: "Early Christians break bread together on Sundays",         order: 2 },
        { id: 3, text: "Church defines transubstantiation (4th Lateran Council)",  order: 3 },
        { id: 4, text: "The Council of Trent reaffirms the Real Presence",         order: 4 },
        { id: 5, text: "We receive the Eucharist at Mass this week",               order: 5 }
      ]
    },

    quiz: {
      questions: [
        { q: "The Eucharist is called the 'source and ___ of the Christian life.'", opts: ["Center", "Summit", "Foundation", "Goal"], correct: 1 },
        { q: "The Mass is:", opts: ["A re-crucifixion of Jesus", "The same one sacrifice of Christ made present", "A memorial only", "A symbolic meal"], correct: 1 },
        { q: "Transubstantiation means:", opts: ["The bread and wine change color", "Jesus is symbolically present", "Bread and wine truly become Jesus' Body and Blood", "The priest becomes Jesus"], correct: 2 },
        { q: "When we receive Communion, we are united to:", opts: ["Jesus only", "The priest only", "Jesus and one another as the Church", "Only those in our parish"], correct: 2 },
        { q: "The word 'Mass' comes from Latin meaning:", opts: ["We eat", "We are sent", "We remember", "We praise"], correct: 1 }
      ]
    },

    prayer: {
      title: "Prayer of St. Thomas Aquinas After Communion",
      lines: [
        { s: "L", t: "Lord, you have fed us with yourself in Holy Communion." },
        { s: "A", t: "I give you thanks with all my heart for this great gift." },
        { s: "L", t: "May this holy meal strengthen us for the journey of faith." },
        { s: "A", t: "And inflame us with a love that cannot grow cold." },
        { s: "L", t: "Send us forth from this altar to love and serve the world." },
        { s: "A", t: "Thanks be to God — the Mass is ended, the mission has begun. Amen." }
      ]
    }
  },

  // ── WEEK 27 ──────────────────────────────────────────────────
  {
    week: 27,
    title: "Reconciliation: The Sacrament of Mercy",
    pillar: "Sacraments",
    verse: "Whose sins you forgive, they are forgiven them; and whose sins you retain, they are retained. — John 20:23",

    discover: {
      title: "Discover: The Sacrament of Reconciliation",
      instruction: "Tap each card to understand the gift of God's forgiveness.",
      items: [
        { icon: "💚", name: "God's Mercy Never Ends", desc: "God desires our return more than we desire to return. The parable of the Prodigal Son shows the Father running to meet the returning son. His mercy is always greater than our sin (CCC 1439–1445)." },
        { icon: "✋", name: "The Five Steps of Reconciliation", desc: "To make a good confession, we: (1) Examine our conscience, (2) Be truly sorry (contrition), (3) Have the firm intention to avoid sin, (4) Confess our sins to the priest, and (5) Do the penance given (CCC 1450–1460)." },
        { icon: "👨‍⚕️", name: "The Priest as Minister", desc: "The priest acts in persona Christi — in the person of Christ. He has the authority to absolve sins, but the real forgiveness comes from God. The priest is bound by the seal of confession — absolute secrecy (CCC 1461–1467)." },
        { icon: "⚡", name: "The Effects of Reconciliation", desc: "Reconciliation restores sanctifying grace, reconciles us with God and the Church, gives peace and serenity, strengthens us against future temptation, and (if mortal sin was forgiven) rescues us from eternal death (CCC 1496)." },
        { icon: "📅", name: "How Often Should We Go?", desc: "Catholics are required to confess serious sins at least once a year. But the Church strongly encourages frequent confession — even of venial sins. Regular confession is one of the great spiritual disciplines of Catholic life (CCC 1457)." }
      ]
    },

    secondary: "timeline",
    timeline: {
      title: "The Five Steps of a Good Confession",
      instruction: "Tap two items to swap them into the correct order.",
      items: [
        { id: 1, text: "Examine your conscience honestly",        order: 1 },
        { id: 2, text: "Have true sorrow (contrition) for sins",  order: 2 },
        { id: 3, text: "Firmly intend to avoid sin in the future",order: 3 },
        { id: 4, text: "Confess your sins to the priest",         order: 4 },
        { id: 5, text: "Accept and complete the penance given",   order: 5 }
      ]
    },

    quiz: {
      questions: [
        { q: "Which parable shows God's mercy for returning sinners?", opts: ["The Good Samaritan", "The Prodigal Son", "The Lost Sheep", "Both B and C"], correct: 3 },
        { q: "The priest in confession acts:", opts: ["As himself only", "In persona Christi — in the person of Christ", "As a judge who punishes", "As a friend giving advice"], correct: 1 },
        { q: "The seal of confession means:", opts: ["The priest can share what he hears", "The priest is bound to absolute secrecy", "Only the bishop knows", "The penitent must keep silent"], correct: 1 },
        { q: "Catholics are required to confess serious sins at least:", opts: ["Once a month", "Every week", "Once a year", "Only before death"], correct: 2 },
        { q: "Reconciliation restores:", opts: ["Our reputation", "Sanctifying grace", "Physical health", "Our friendships"], correct: 1 }
      ]
    },

    prayer: {
      title: "Prayer of the Prodigal Son",
      lines: [
        { s: "L", t: "Lord, like the prodigal son, we have sometimes wandered far from you." },
        { s: "A", t: "But you are always watching and waiting to run to us when we return." },
        { s: "L", t: "Help us never to be afraid to come back to you, no matter what we've done." },
        { s: "A", t: "Your mercy is greater than our sin. We trust in your love." },
        { s: "L", t: "Thank you for the sacrament of Reconciliation — your gift of new beginnings." },
        { s: "A", t: "Father, we are coming home. Receive us with your mercy. Amen." }
      ]
    }
  },

  // ── WEEK 28 ──────────────────────────────────────────────────
  {
    week: 28,
    title: "Confirmation: Sent Forth by the Spirit",
    pillar: "Sacraments",
    verse: "You will receive power when the Holy Spirit comes upon you, and you will be my witnesses. — Acts 1:8",

    discover: {
      title: "Discover: Confirmation More Deeply",
      instruction: "Tap each card to explore the sacrament of Confirmation.",
      items: [
        { icon: "🔥", name: "Confirmation Completes Baptism", desc: "Confirmation completes and deepens Baptismal grace. It seals us with the Gift of the Holy Spirit, strengthening us to be witnesses and soldiers of Christ. Baptism is birth; Confirmation is maturity (CCC 1285–1289)." },
        { icon: "👨‍✈️", name: "The Sponsor", desc: "A Confirmation sponsor accompanies the candidate on their journey. They must be a practicing Catholic who has received all three sacraments of initiation. Often a godparent serves this role — demonstrating the link to Baptism (CCC 1311)." },
        { icon: "✍️", name: "Choosing a Confirmation Name", desc: "Candidates often choose the name of a saint as their Confirmation name. This saint becomes a heavenly patron and model for their life. It connects them more deeply to the Communion of Saints." },
        { icon: "🛡️", name: "Gifts for Mission", desc: "Confirmation strengthens the seven gifts of the Holy Spirit within us: wisdom, understanding, counsel, fortitude, knowledge, piety, and fear of the Lord. These are not for ourselves alone — they equip us for mission (CCC 1303)." },
        { icon: "❗", name: "Obligations After Confirmation", desc: "Confirmed Catholics have a serious obligation to practice their faith, defend it when necessary, help spread the Gospel, and live as witnesses of Christ in the world. Confirmation is not graduation — it is the beginning (CCC 1319)." }
      ]
    },

    secondary: "sort",
    sort: {
      title: "Baptism or Confirmation?",
      instruction: "Tap an item, then tap which sacrament of initiation it primarily describes.",
      items: [
        { name: "Original sin washed away",           icon: "💧", group: "Baptism" },
        { name: "Sealed with the Holy Spirit",        icon: "🔥", group: "Confirmation" },
        { name: "Entrance into the Church",           icon: "🚪", group: "Baptism" },
        { name: "Maturity and strengthening of faith",icon: "💪", group: "Confirmation" },
        { name: "White garment and candle",           icon: "🕯️", group: "Baptism" },
        { name: "Anointing with chrism on forehead",  icon: "✨", group: "Confirmation" },
        { name: "Chosen sponsor/godparent present",   icon: "🤝", group: "Both" }
      ],
      groups: ["Baptism", "Confirmation", "Both"],
      colors: { Baptism: "#4A90D9", Confirmation: "#C0736A", Both: "#D4A843" },
      icons:  { Baptism: "💧",      Confirmation: "🔥",      Both: "⭐" }
    },

    quiz: {
      questions: [
        { q: "Confirmation ___ Baptismal grace.", opts: ["Replaces", "Cancels", "Completes and deepens", "Has nothing to do with"], correct: 2 },
        { q: "A Confirmation sponsor must be:", opts: ["Any adult", "A priest or deacon", "A practicing Catholic who received all three initiation sacraments", "A family member only"], correct: 2 },
        { q: "Choosing a Confirmation name connects us to:", opts: ["Our family heritage", "The Communion of Saints and a heavenly patron", "The Pope", "Our godparents"], correct: 1 },
        { q: "After Confirmation, Catholics are obligated to:", opts: ["Do nothing differently", "Only attend Mass", "Practice, defend, and spread the faith as witnesses", "Become priests or nuns"], correct: 2 },
        { q: "Confirmation is best understood as:", opts: ["Graduation from the Church", "The end of religious education", "The beginning of active faith and mission", "Only for adults"], correct: 2 }
      ]
    },

    prayer: {
      title: "Prayer for Those to be Confirmed",
      lines: [
        { s: "L", t: "Lord, send your Holy Spirit upon all who will be confirmed." },
        { s: "A", t: "Fill them with your wisdom, understanding, and courage." },
        { s: "L", t: "May they be bold witnesses of your Gospel in the world." },
        { s: "A", t: "Give them the fortitude to stand firm when faith is difficult." },
        { s: "L", t: "Confirmation is not the end — it is a new beginning of mission." },
        { s: "A", t: "Holy Spirit, come upon us and make us your witnesses. Amen." }
      ]
    }
  },

  // ── WEEK 29 ──────────────────────────────────────────────────
  {
    week: 29,
    title: "Called to Holiness: Our Vocation in Life",
    pillar: "Morality",
    verse: "Be holy, for I, the Lord your God, am holy. — Leviticus 19:2",

    discover: {
      title: "Discover: Our Call to Holiness",
      instruction: "Tap each card to understand the universal call to holiness.",
      items: [
        { icon: "⭐", name: "Holiness Is for Everyone", desc: "The Second Vatican Council taught that all the faithful — not just priests and religious — are called to holiness. It is the fundamental vocation of every baptized person (CCC 2013–2014)." },
        { icon: "💍", name: "Marriage and Family Life", desc: "Marriage is a sacrament through which a man and woman serve God and the Church by building a holy family. The family is called the 'domestic church' — the first place children experience God's love (CCC 1655–1657)." },
        { icon: "🕊️", name: "Religious Life", desc: "Some are called to live the evangelical counsels — poverty, chastity, and obedience — as priests, religious sisters, brothers, or monks. This life is a radical witness to the Kingdom of God (CCC 914–916)." },
        { icon: "🌍", name: "The Lay Vocation", desc: "Lay people are called to sanctify the world from within — through their work, family, culture, and civic life. The laity bring the Gospel to places priests and religious cannot reach (CCC 898–900)." },
        { icon: "🔊", name: "Discerning Your Vocation", desc: "God has a specific plan for each of us. Discovering your vocation requires prayer, listening, seeking wise counsel, and paying attention to where God has placed your gifts and deepest desires (CCC 2254)." }
      ]
    },

    secondary: "sort",
    sort: {
      title: "States of Life in the Church",
      instruction: "Tap an item, then tap the state of life it belongs to.",
      items: [
        { name: "Building a holy family together",     icon: "👨‍👩‍👧‍👦", group: "Marriage" },
        { name: "Vow of poverty and obedience",        icon: "📿",      group: "Religious Life" },
        { name: "Sanctifying the world through work",  icon: "💼",      group: "Lay Life" },
        { name: "Ordained to serve God's people",      icon: "🏛️",      group: "Holy Orders" },
        { name: "Domestic church — first school of faith", icon: "🏠",  group: "Marriage" },
        { name: "Life in a monastery or convent",      icon: "⛪",      group: "Religious Life" },
        { name: "Bringing the Gospel to public life",  icon: "🌍",      group: "Lay Life" }
      ],
      groups: ["Marriage", "Religious Life", "Lay Life", "Holy Orders"],
      colors: { Marriage: "#D4A843", "Religious Life": "#9B6DB8", "Lay Life": "#6DB87B", "Holy Orders": "#4A90D9" },
      icons:  { Marriage: "💍",       "Religious Life": "🕊️",     "Lay Life": "🌍",      "Holy Orders": "🏛️" }
    },

    quiz: {
      questions: [
        { q: "Who is called to holiness according to the Church?", opts: ["Only priests and nuns", "Only saints", "All baptized faithful", "Only bishops"], correct: 2 },
        { q: "The family is called the:", opts: ["Little Church", "Domestic Church", "Parish Church", "Mini-Church"], correct: 1 },
        { q: "The evangelical counsels are:", opts: ["Faith, hope, charity", "Poverty, chastity, obedience", "Prayer, fasting, almsgiving", "Prudence, justice, fortitude"], correct: 1 },
        { q: "The lay vocation calls people to sanctify:", opts: ["Only the Church", "Only their own soul", "The world from within, through ordinary life", "Only their families"], correct: 2 },
        { q: "Discerning your vocation requires:", opts: ["Just waiting to see what happens", "Prayer, counsel, and paying attention to your gifts", "Only asking your parents", "No effort — God will tell you clearly"], correct: 1 }
      ]
    },

    prayer: {
      title: "Prayer for Vocations",
      lines: [
        { s: "L", t: "Lord, you call each of us by name and have a plan for our lives." },
        { s: "A", t: "Help us to hear your voice and respond with open hearts." },
        { s: "L", t: "We pray for all who are discerning their vocation in life." },
        { s: "A", t: "Give them courage, clarity, and the joy of following you." },
        { s: "L", t: "May many hear the call to priesthood, religious life, and holy marriage." },
        { s: "A", t: "Lord, here I am. I come to do your will. Send me. Amen." }
      ]
    }
  },

  // ── WEEK 30 — FINAL REVIEW ──────────────────────────────────
  {
    week: 30,
    title: "Year in Review: The Creed and Our Catholic Faith",
    pillar: "Review",
    verse: "I have fought the good fight, I have finished the race, I have kept the faith. — 2 Timothy 4:7",

    discover: {
      title: "Review: A Year of Faith",
      instruction: "Tap each card to celebrate everything you've learned in Grade 6!",
      items: [
        { icon: "✝️", name: "The Creed: God and Salvation", desc: "One God in three Persons. The Incarnation — God becomes human. The Passion, Death, Resurrection, and Ascension of Jesus. The Holy Spirit and the birth of the Church at Pentecost." },
        { icon: "📖", name: "Scripture, Tradition, Magisterium", desc: "God reveals Himself through Scripture (73 books) and Sacred Tradition together. The Magisterium guards and interprets this deposit of faith. The Psalms are the prayer book of the Church." },
        { icon: "⭐", name: "The Moral Life", desc: "Conscience must be formed and followed. Sin has types and consequences. Justice, solidarity, and the common good guide our social life. Virtues are stable habits of the good." },
        { icon: "🙏", name: "Prayer and the Sacraments", desc: "Three forms of prayer: vocal, meditation, contemplation. Intercessory prayer unites us to Christ's own prayer. The Eucharist is source and summit. Reconciliation restores grace. Confirmation equips us for mission." }
      ]
    },

    secondary: "sort",
    sort: {
      title: "Match the Topic to the Pillar",
      instruction: "Tap a topic, then tap the pillar it belongs to.",
      items: [
        { name: "The Holy Trinity",       icon: "✝️", group: "Creed" },
        { name: "The Psalms",             icon: "📜", group: "Prayer" },
        { name: "Mortal and Venial Sin",  icon: "💔", group: "Morality" },
        { name: "Transubstantiation",     icon: "🍞", group: "Sacraments" },
        { name: "The Incarnation",        icon: "👶", group: "Creed" },
        { name: "Justice and Solidarity", icon: "⚖️", group: "Morality" },
        { name: "The Cardinal Virtues",   icon: "🎯", group: "Morality" },
        { name: "Reconciliation",         icon: "💚", group: "Sacraments" }
      ],
      groups: ["Creed", "Sacraments", "Morality", "Prayer"],
      colors: { Creed: "#4A90D9", Sacraments: "#D4A843", Morality: "#6DB87B", Prayer: "#9B6DB8" },
      icons:  { Creed: "✝️",      Sacraments: "🍞",      Morality: "⭐",     Prayer: "🙏" }
    },

    quiz: {
      questions: [
        { q: "The central mystery of our faith is:", opts: ["The Incarnation", "The Holy Trinity", "The Resurrection", "The Eucharist"], correct: 1 },
        { q: "Transubstantiation refers to:", opts: ["A symbolic change in bread and wine", "Bread and wine truly becoming Jesus' Body and Blood", "The priest's blessing", "A change in appearance only"], correct: 1 },
        { q: "A mortal sin requires:", opts: ["Only grave matter", "Grave matter, full knowledge, and deliberate consent", "Any evil thought", "Being aware of the Church's law"], correct: 1 },
        { q: "Confirmation is best understood as:", opts: ["Graduation from faith", "The beginning of active mission", "Replacing Baptism", "Only for adults"], correct: 1 },
        { q: "All baptized faithful are called to:", opts: ["Only attend Mass", "Become priests or nuns", "Holiness in their state of life", "Follow only the commandments"], correct: 2 }
      ]
    },

    prayer: {
      title: "End-of-Year Prayer of Thanksgiving",
      lines: [
        { s: "L", t: "Lord, thank you for this year of growing in faith and knowledge of you." },
        { s: "A", t: "Thank you for our catechist, our class, and our parish family." },
        { s: "L", t: "We have learned about you — Father, Son, and Holy Spirit." },
        { s: "A", t: "Help us to live what we have learned, every day of our lives." },
        { s: "L", t: "May the Creed we profess at Mass be the creed we live by in the world." },
        { s: "A", t: "Lord, we believe. Help our unbelief. Walk with us always. Amen." }
      ]
    }
  }

];
