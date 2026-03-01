// ============================================================
//  GRADE 4 — SESSION DATA
//  "Who Is Jesus? The Life and Mission of Christ"
//  30 Weekly Sessions | Catholic Catechist Toolkit
//  All content original; Scripture: CPDV; Doctrine: CCC
// ============================================================

export const PILLAR_COLORS = {
  Creed:      "#4A90D9",
  Sacraments: "#D4A843",
  Morality:   "#6DB87B",
  Prayer:     "#9B6DB8",
  Review:     "#D9704A",
};

export const SESSIONS = [

  // ── WEEK 1 ──────────────────────────────────────────────
  {
    week: 1,
    title: "Who Is Jesus?",
    pillar: "Creed",
    verse: "You are the Christ, the Son of the living God. — Matthew 16:16",

    discover: {
      title: "Discover: Jesus, True God and True Man",
      instruction: "Tap each card to learn who Jesus really is!",
      items: [
        { icon: "✝️", name: "Son of God", desc: "Jesus is the second Person of the Holy Trinity — fully God from all eternity. The Catechism teaches that He is 'the only Son of God, eternally begotten of the Father' (CCC 242)." },
        { icon: "👶", name: "Son of Mary", desc: "Jesus is also fully human. He was born of the Virgin Mary, grew up in Nazareth, felt hunger and tiredness, and experienced friendship and sadness." },
        { icon: "🌟", name: "The Incarnation", desc: "The word 'incarnation' means 'becoming flesh.' God the Son took on a human body to save us. This is the greatest mystery of our faith (CCC 461)." },
        { icon: "📖", name: "What the Gospels Say", desc: "The four Gospels — Matthew, Mark, Luke, and John — tell us about Jesus' life, teaching, miracles, death, and resurrection." },
        { icon: "🕊️", name: "Why He Came", desc: "Jesus came to reveal the Father's love, forgive sins, conquer death, and open the gates of heaven for all people (CCC 599–600)." },
      ],
    },

    secondary: "sort",
    sort: {
      title: "True God AND True Man!",
      instruction: "Tap an item, then tap the category it belongs to.",
      items: [
        { name: "Born of Mary",          icon: "👶", group: "True Man" },
        { name: "Felt hunger",           icon: "🍞", group: "True Man" },
        { name: "Eternal Son of God",    icon: "✝️", group: "True God" },
        { name: "Wept for Lazarus",      icon: "😢", group: "True Man" },
        { name: "Forgives all sins",     icon: "🕊️", group: "True God" },
        { name: "Grew up in Nazareth",   icon: "🏠", group: "True Man" },
        { name: "One with the Father",   icon: "🌟", group: "True God" },
      ],
      groups: ["True God", "True Man"],
      colors: { "True God": "#4A90D9", "True Man": "#6DB87B" },
      icons:  { "True God": "✝️",      "True Man": "👤" },
    },

    quiz: {
      questions: [
        { q: "Jesus is fully God and fully ___.", opts: ["angel", "man", "prophet", "king"], correct: 1 },
        { q: "What does 'incarnation' mean?", opts: ["Becoming fire", "Becoming light", "Becoming flesh", "Becoming holy"], correct: 2 },
        { q: "Which Gospel books tell us about Jesus?", opts: ["Genesis & Exodus", "Matthew, Mark, Luke & John", "Acts & Romans", "Psalms & Proverbs"], correct: 1 },
        { q: "Jesus is the second Person of the ___.", opts: ["Church", "Angels", "Holy Trinity", "Apostles"], correct: 2 },
        { q: "Jesus came to reveal the love of ___.", opts: ["Moses", "Peter", "the Angels", "the Father"], correct: 3 },
      ],
    },

    prayer: {
      title: "Prayer to Know Jesus",
      lines: [
        { s: "L", t: "Lord Jesus, help us to know you more deeply." },
        { s: "A", t: "You are truly God and truly man — we believe in you." },
        { s: "L", t: "You came from heaven to be with us." },
        { s: "A", t: "Thank you for loving us so much that you became one of us." },
        { s: "L", t: "Open our hearts to follow you each day." },
        { s: "A", t: "Jesus, we trust in you. Amen." },
      ],
    },
  },

  // ── WEEK 2 ──────────────────────────────────────────────
  {
    week: 2,
    title: "The Annunciation and Nativity",
    pillar: "Creed",
    verse: "Behold, you will conceive in your womb and bring forth a son, and you shall call his name Jesus. — Luke 1:31",

    discover: {
      title: "Discover: Jesus Is Born",
      instruction: "Tap each card to explore the wonder of Christmas!",
      items: [
        { icon: "👼", name: "The Angel Gabriel", desc: "God sent the angel Gabriel to Mary in Nazareth. Gabriel told her she would be the mother of the Son of God. Mary said yes — 'Let it be done to me according to your word' (Luke 1:38, CPDV)." },
        { icon: "💍", name: "Saint Joseph", desc: "Joseph was Mary's husband and the foster father of Jesus. An angel appeared to him in a dream, telling him not to be afraid to take Mary as his wife." },
        { icon: "⭐", name: "Bethlehem", desc: "Jesus was born in Bethlehem, the city of David, because Joseph's family was from there. He was laid in a manger because there was no room at the inn." },
        { icon: "🌟", name: "The Shepherds", desc: "Angels appeared to shepherds in the field at night, announcing the birth of the Savior. The shepherds ran to Bethlehem and found Mary, Joseph, and the baby Jesus." },
        { icon: "🎁", name: "The Magi", desc: "Wise men from the East followed a star to find Jesus and offer Him gifts of gold, frankincense, and myrrh — gifts fit for a king, a priest, and one who would die for others." },
      ],
    },

    secondary: "timeline",
    timeline: {
      title: "The Christmas Story — In Order!",
      instruction: "Tap two items to swap them into the correct order.",
      items: [
        { id: 1, text: "Angel Gabriel visits Mary (the Annunciation)", order: 1 },
        { id: 2, text: "Mary and Joseph travel to Bethlehem", order: 2 },
        { id: 3, text: "Jesus is born and placed in a manger", order: 3 },
        { id: 4, text: "Angels announce the birth to the shepherds", order: 4 },
        { id: 5, text: "The Magi follow the star and offer gifts", order: 5 },
      ],
    },

    quiz: {
      questions: [
        { q: "Which angel appeared to Mary?", opts: ["Michael", "Raphael", "Gabriel", "Uriel"], correct: 2 },
        { q: "Where was Jesus born?", opts: ["Nazareth", "Jerusalem", "Bethlehem", "Egypt"], correct: 2 },
        { q: "What did Mary say to God's plan?", opts: ["I am afraid", "Let it be done to me", "I am not ready", "Send someone else"], correct: 1 },
        { q: "Who was the foster father of Jesus?", opts: ["John", "Peter", "James", "Joseph"], correct: 3 },
        { q: "The Magi brought three gifts: gold, frankincense, and ___.", opts: ["silver", "oil", "myrrh", "salt"], correct: 2 },
      ],
    },

    prayer: {
      title: "Prayer of the Annunciation",
      lines: [
        { s: "L", t: "The Angel of the Lord declared unto Mary." },
        { s: "A", t: "And she conceived of the Holy Spirit." },
        { s: "L", t: "Behold the handmaid of the Lord." },
        { s: "A", t: "Be it done unto me according to your word." },
        { s: "L", t: "And the Word was made flesh." },
        { s: "A", t: "And dwelt among us. Thanks be to God. Amen." },
      ],
    },
  },

  // ── WEEK 3 ──────────────────────────────────────────────
  {
    week: 3,
    title: "The Hidden Life of Jesus",
    pillar: "Creed",
    verse: "And Jesus advanced in wisdom and age and grace before God and men. — Luke 2:52",

    discover: {
      title: "Discover: Growing Up in Nazareth",
      instruction: "Tap each card to discover Jesus' early life!",
      items: [
        { icon: "✡️", name: "The Presentation", desc: "When Jesus was 40 days old, Mary and Joseph brought Him to the Temple in Jerusalem, as the Law required. The holy man Simeon recognized Jesus as the Savior." },
        { icon: "🚁", name: "The Flight to Egypt", desc: "King Herod wanted to harm Jesus. An angel warned Joseph in a dream, and the Holy Family fled to Egypt to keep Jesus safe, returning after Herod died." },
        { icon: "🔨", name: "Life in Nazareth", desc: "Jesus grew up in Nazareth with Mary and Joseph. He learned carpentry from Joseph, attended the synagogue, and lived a normal human life for about 30 years (CCC 533)." },
        { icon: "📜", name: "Finding in the Temple", desc: "When Jesus was twelve, He stayed behind in Jerusalem while Mary and Joseph traveled home. They found Him three days later in the Temple, listening to teachers and asking questions." },
        { icon: "💡", name: "Why the Hidden Life?", desc: "Jesus' quiet years in Nazareth teach us that ordinary life — family, work, prayer — is holy. He sanctified everyday life by living it perfectly (CCC 531)." },
      ],
    },

    secondary: "fillblank",
    fillblank: {
      title: "Jesus' Early Life",
      instruction: "Fill in the missing word.",
      sentences: [
        { text: "Mary and Joseph presented Jesus at the ___ in Jerusalem.", answer: "Temple", options: ["Temple", "Palace", "Market", "Garden"] },
        { text: "The Holy Family fled to ___ to escape King Herod.", answer: "Egypt", options: ["Egypt", "Rome", "Greece", "Persia"] },
        { text: "Jesus grew up in ___ and worked as a carpenter.", answer: "Nazareth", options: ["Nazareth", "Bethlehem", "Jericho", "Capernaum"] },
        { text: "At age twelve, Jesus was found in the Temple among the ___.", answer: "teachers", options: ["teachers", "soldiers", "merchants", "priests only"] },
      ],
    },

    quiz: {
      questions: [
        { q: "Who recognized the baby Jesus in the Temple as the Savior?", opts: ["King Herod", "Simeon", "John the Baptist", "Pilate"], correct: 1 },
        { q: "Why did the Holy Family flee to Egypt?", opts: ["To find work", "To visit relatives", "To escape King Herod", "To see the pyramids"], correct: 2 },
        { q: "What trade did Jesus learn from Joseph?", opts: ["Fishing", "Farming", "Carpentry", "Weaving"], correct: 2 },
        { q: "How old was Jesus when found in the Temple?", opts: ["Eight", "Ten", "Twelve", "Fifteen"], correct: 2 },
        { q: "Jesus' quiet life in Nazareth shows us that ___ life is holy.", opts: ["only royal", "only priestly", "ordinary", "perfect"], correct: 2 },
      ],
    },

    prayer: {
      title: "Prayer of the Holy Family",
      lines: [
        { s: "L", t: "Jesus, Mary, and Joseph lived together in love in Nazareth." },
        { s: "A", t: "Help our family to be like the Holy Family." },
        { s: "L", t: "Jesus grew in wisdom and grace before God and others." },
        { s: "A", t: "Help us to grow in faith, kindness, and holiness each day." },
        { s: "L", t: "May we find you present in the ordinary moments of our lives." },
        { s: "A", t: "Holy Family of Nazareth, pray for us. Amen." },
      ],
    },
  },

  // ── WEEK 4 ──────────────────────────────────────────────
  {
    week: 4,
    title: "The Baptism and Temptation of Jesus",
    pillar: "Creed",
    verse: "You are my beloved Son; in you I am well pleased. — Luke 3:22",

    discover: {
      title: "Discover: Jesus Begins His Ministry",
      instruction: "Tap each card to learn how Jesus began His public life!",
      items: [
        { icon: "🦅", name: "John the Baptist", desc: "John the Baptist prepared the way for Jesus by calling people to repentance and baptizing them in the Jordan River. He announced: 'After me comes one mightier than I.'" },
        { icon: "💧", name: "Jesus' Baptism", desc: "Jesus came to John to be baptized, not because He had sins, but to fulfill God's plan and show us the way. The Holy Spirit descended like a dove, and the Father's voice said: 'You are my beloved Son.'" },
        { icon: "😈", name: "The Temptation", desc: "After His Baptism, Jesus spent 40 days fasting in the desert. The devil tempted Him three times, but Jesus refused each time using the Word of God. He shows us how to resist temptation." },
        { icon: "📖", name: "Jesus' Weapon", desc: "Each time the devil tempted Him, Jesus answered with Scripture: 'It is written.' The Bible is our weapon against temptation too (CCC 538–540)." },
      ],
    },

    secondary: "timeline",
    timeline: {
      title: "From Baptism to Ministry!",
      instruction: "Tap two items to swap them into the correct order.",
      items: [
        { id: 1, text: "John the Baptist prepares the way in the desert", order: 1 },
        { id: 2, text: "Jesus comes to the Jordan to be baptized", order: 2 },
        { id: 3, text: "The Holy Spirit descends and the Father speaks", order: 3 },
        { id: 4, text: "Jesus fasts 40 days and is tempted in the desert", order: 4 },
        { id: 5, text: "Jesus returns and begins His public ministry", order: 5 },
      ],
    },

    quiz: {
      questions: [
        { q: "Who baptized Jesus in the Jordan River?", opts: ["Peter", "John the Baptist", "Andrew", "Philip"], correct: 1 },
        { q: "What descended on Jesus after His baptism?", opts: ["A dove", "An eagle", "A flame", "A cloud"], correct: 0 },
        { q: "How many days did Jesus fast in the desert?", opts: ["3", "7", "30", "40"], correct: 3 },
        { q: "How many times did the devil tempt Jesus?", opts: ["Once", "Twice", "Three times", "Seven times"], correct: 2 },
        { q: "Jesus defeated each temptation with the ___.", opts: ["sword", "Word of God", "prayer beads", "holy water"], correct: 1 },
      ],
    },

    prayer: {
      title: "Prayer Against Temptation",
      lines: [
        { s: "L", t: "Lord Jesus, you were tempted in the desert and you won." },
        { s: "A", t: "Help us to say no to temptation and yes to God." },
        { s: "L", t: "You used the Word of God to answer the devil." },
        { s: "A", t: "Help us to know and love the Scriptures." },
        { s: "L", t: "When we are tempted, remind us that you are stronger." },
        { s: "A", t: "Lord, lead us not into temptation, but deliver us from evil. Amen." },
      ],
    },
  },

  // ── WEEK 5: REVIEW ────────────────────────────────────
  {
    week: 5,
    title: "Unit 1 Review: Who Is Jesus?",
    pillar: "Review",
    verse: "I am the way, the truth, and the life. — John 14:6",

    discover: {
      title: "Review: Jesus — True God and True Man",
      instruction: "Tap each card to review what we have learned!",
      items: [
        { icon: "✝️", name: "Incarnation", desc: "God the Son became human — fully God and fully man — to save us. This is called the Incarnation. Mary said yes and Jesus was born in Bethlehem." },
        { icon: "🏠", name: "Hidden Life", desc: "Jesus grew up in Nazareth with Mary and Joseph, working as a carpenter. His ordinary life shows us that everyday life is holy." },
        { icon: "💧", name: "Baptism & Temptation", desc: "Jesus was baptized by John in the Jordan. The Father called Him 'beloved Son.' Then Jesus fasted 40 days and defeated the devil's temptations with Scripture." },
        { icon: "📖", name: "The Gospels", desc: "We know about Jesus through the four Gospels: Matthew, Mark, Luke, and John. These are the Good News of Jesus Christ." },
      ],
    },

    secondary: "sort",
    sort: {
      title: "Match the Event to the Story!",
      instruction: "Tap an item, then tap the week it belongs to.",
      items: [
        { name: "Born in Bethlehem",       icon: "⭐", group: "Nativity" },
        { name: "Angel visits Mary",       icon: "👼", group: "Nativity" },
        { name: "Fled to Egypt",           icon: "🚗", group: "Hidden Life" },
        { name: "Found in the Temple",     icon: "📜", group: "Hidden Life" },
        { name: "Holy Spirit as a dove",   icon: "🕊️", group: "Baptism" },
        { name: "40 days in the desert",   icon: "🏜️", group: "Baptism" },
        { name: "True God and True Man",   icon: "✝️", group: "Incarnation" },
      ],
      groups: ["Incarnation", "Nativity", "Hidden Life", "Baptism"],
      colors: { Incarnation: "#4A90D9", Nativity: "#D4A843", "Hidden Life": "#6DB87B", Baptism: "#9B6DB8" },
      icons:  { Incarnation: "✝️", Nativity: "⭐", "Hidden Life": "🏠", Baptism: "💧" },
    },

    quiz: {
      questions: [
        { q: "What is the Incarnation?", opts: ["Jesus rising from the dead", "God becoming human", "The Last Supper", "Pentecost"], correct: 1 },
        { q: "Where was Jesus born?", opts: ["Nazareth", "Jerusalem", "Bethlehem", "Egypt"], correct: 2 },
        { q: "What trade did Jesus learn from Joseph?", opts: ["Fishing", "Farming", "Carpentry", "Weaving"], correct: 2 },
        { q: "Who baptized Jesus?", opts: ["Peter", "Joseph", "John the Baptist", "Andrew"], correct: 2 },
        { q: "How long did Jesus fast in the desert?", opts: ["7 days", "20 days", "40 days", "50 days"], correct: 2 },
      ],
    },

    prayer: {
      title: "Glory Be — Review Prayer",
      lines: [
        { s: "L", t: "Let us give glory to the God who sent His Son for us." },
        { s: "A", t: "Glory be to the Father, and to the Son, and to the Holy Spirit." },
        { s: "L", t: "As it was in the beginning, is now, and ever shall be." },
        { s: "A", t: "World without end. Amen." },
        { s: "L", t: "Jesus, we have learned about your life and love this unit." },
        { s: "A", t: "Help us to know you more and follow you always. Amen." },
      ],
    },
  },

  // ── WEEK 6 ──────────────────────────────────────────────
  {
    week: 6,
    title: "Jesus Calls His Disciples",
    pillar: "Creed",
    verse: "Follow me, and I will make you fishers of men. — Matthew 4:19",

    discover: {
      title: "Discover: The Twelve Apostles",
      instruction: "Tap each card to meet the people Jesus chose!",
      items: [
        { icon: "🎣", name: "Fishermen Called First", desc: "Jesus' first disciples were fishermen: Peter, Andrew, James, and John. He called them by the Sea of Galilee and they left their boats immediately to follow Him." },
        { icon: "💼", name: "Matthew the Tax Collector", desc: "Matthew collected taxes for Rome — a job most people hated. Yet Jesus called him too: 'Follow me.' Matthew rose and followed, and later wrote a Gospel." },
        { icon: "12️⃣", name: "The Twelve Apostles", desc: "From His many followers, Jesus chose twelve to be His closest companions, called Apostles. They traveled with Him, learned from Him, and were sent out to preach." },
        { icon: "🌍", name: "Sent on Mission", desc: "The word 'apostle' means 'one who is sent.' Jesus trained the Twelve to carry His message to all nations after His resurrection (CCC 858–860)." },
        { icon: "🙋", name: "Jesus Calls Us Too", desc: "Jesus still calls each of us by name. Through Baptism, we are also disciples — learners and followers of Jesus." },
      ],
    },

    secondary: "sort",
    sort: {
      title: "Who Did Jesus Call?",
      instruction: "Tap an item, then tap whether they were one of the Twelve or a different follower.",
      items: [
        { name: "Peter",           icon: "⚓", group: "The Twelve" },
        { name: "Andrew",          icon: "🎣", group: "The Twelve" },
        { name: "James",           icon: "⚡", group: "The Twelve" },
        { name: "John",            icon: "✍️", group: "The Twelve" },
        { name: "Matthew",         icon: "💼", group: "The Twelve" },
        { name: "Mary Magdalene",  icon: "💜", group: "Other Disciples" },
        { name: "Lazarus",         icon: "🪦", group: "Other Disciples" },
      ],
      groups: ["The Twelve", "Other Disciples"],
      colors: { "The Twelve": "#4A90D9", "Other Disciples": "#D4A843" },
      icons:  { "The Twelve": "12️⃣", "Other Disciples": "🌟" },
    },

    quiz: {
      questions: [
        { q: "What does 'apostle' mean?", opts: ["One who prays", "One who is sent", "One who listens", "One who fasts"], correct: 1 },
        { q: "How many Apostles did Jesus choose?", opts: ["7", "10", "12", "70"], correct: 2 },
        { q: "What were Peter, Andrew, James, and John doing when called?", opts: ["Farming", "Praying", "Fishing", "Reading"], correct: 2 },
        { q: "What was Matthew's job before following Jesus?", opts: ["Shepherd", "Tax collector", "Carpenter", "Soldier"], correct: 1 },
        { q: "Through ___, we are also called to be disciples of Jesus.", opts: ["Holy Orders", "Baptism", "Confirmation", "Matrimony"], correct: 1 },
      ],
    },

    prayer: {
      title: "Prayer of the Disciple",
      lines: [
        { s: "L", t: "Lord Jesus, you called fishermen, tax collectors, and ordinary people." },
        { s: "A", t: "You are calling us too — help us to hear your voice." },
        { s: "L", t: "Peter, Andrew, James, and John left everything to follow you." },
        { s: "A", t: "Give us the courage to follow you in our own lives." },
        { s: "L", t: "You call us by name and know us completely." },
        { s: "A", t: "Here we are, Lord. We want to follow you. Amen." },
      ],
    },
  },

  // ── WEEK 7 ──────────────────────────────────────────────
  {
    week: 7,
    title: "The Miracles of Jesus",
    pillar: "Creed",
    verse: "This beginning of signs Jesus performed in Cana of Galilee, and he manifested his glory. — John 2:11",

    discover: {
      title: "Discover: Signs of God's Kingdom",
      instruction: "Tap each card to explore the miracles of Jesus!",
      items: [
        { icon: "🍷", name: "Water into Wine", desc: "At a wedding in Cana, Jesus turned water into wine at Mary's request. This was His first miracle and showed His divine power over creation." },
        { icon: "🌊", name: "Calming the Storm", desc: "When a violent storm threatened the disciples' boat, Jesus rebuked the wind and waves and they immediately became calm. The disciples asked: 'Who is this man?'" },
        { icon: "🍞", name: "Feeding 5,000", desc: "With only five loaves and two fish, Jesus fed more than 5,000 people. There were even twelve baskets of leftovers! This miracle foreshadowed the Eucharist." },
        { icon: "🦯", name: "Healing the Blind", desc: "Jesus gave sight to people who were born blind. These healings showed that He is the light of the world and that He cares for those who suffer." },
        { icon: "🪦", name: "Raising Lazarus", desc: "When His friend Lazarus died, Jesus wept — then raised him from the dead. This miracle pointed to Jesus' own resurrection and His power over death (CCC 994)." },
      ],
    },

    secondary: "sort",
    sort: {
      title: "What Kind of Miracle?",
      instruction: "Tap a miracle, then tap the type it belongs to.",
      items: [
        { name: "Water into wine",   icon: "🍷", group: "Power over Creation" },
        { name: "Calming the storm", icon: "🌊", group: "Power over Creation" },
        { name: "Healing a blind man", icon: "👁️", group: "Healing" },
        { name: "Healing ten lepers", icon: "🙌", group: "Healing" },
        { name: "Raising Lazarus",   icon: "🪦", group: "Power over Death" },
        { name: "Raising Jairus' daughter", icon: "👧", group: "Power over Death" },
        { name: "Feeding 5,000",     icon: "🍞", group: "Power over Creation" },
      ],
      groups: ["Power over Creation", "Healing", "Power over Death"],
      colors: { "Power over Creation": "#4A90D9", "Healing": "#6DB87B", "Power over Death": "#D9704A" },
      icons:  { "Power over Creation": "🌟", "Healing": "💚", "Power over Death": "✝️" },
    },

    quiz: {
      questions: [
        { q: "What was Jesus' first miracle?", opts: ["Healing a blind man", "Walking on water", "Water into wine", "Feeding 5,000"], correct: 2 },
        { q: "How many people did Jesus feed with five loaves and two fish?", opts: ["500", "2,000", "5,000", "12,000"], correct: 2 },
        { q: "The feeding of 5,000 pointed ahead to which sacrament?", opts: ["Baptism", "Confirmation", "The Eucharist", "Matrimony"], correct: 2 },
        { q: "When Jesus raised Lazarus, what did He do first?", opts: ["Prayed aloud", "Wept", "Fasted", "Gave thanks"], correct: 1 },
        { q: "Jesus' miracles showed that He is truly ___.", opts: ["a great prophet only", "an angel", "God", "a philosopher"], correct: 2 },
      ],
    },

    prayer: {
      title: "Prayer of Wonder",
      lines: [
        { s: "L", t: "Lord Jesus, you performed miracles that revealed your glory." },
        { s: "A", t: "Open our eyes to see your power working in our lives." },
        { s: "L", t: "You calmed the storm and fed the hungry." },
        { s: "A", t: "Help us to trust in you when life feels like a storm." },
        { s: "L", t: "You raised Lazarus — you have power even over death." },
        { s: "A", t: "We believe you are the Son of God. Amen." },
      ],
    },
  },

  // ── WEEK 8 ──────────────────────────────────────────────
  {
    week: 8,
    title: "The Parables of Jesus",
    pillar: "Creed",
    verse: "The kingdom of heaven is like a treasure hidden in a field. — Matthew 13:44",

    discover: {
      title: "Discover: Stories That Teach",
      instruction: "Tap each parable card to uncover its meaning!",
      items: [
        { icon: "🌱", name: "What Is a Parable?", desc: "Jesus often taught using parables — short stories from everyday life with a deeper spiritual meaning. He said: 'He who has ears to hear, let him hear.'" },
        { icon: "🐑", name: "The Lost Sheep", desc: "A shepherd leaves 99 sheep to find the one that is lost. When found, he rejoices greatly. Jesus is the Good Shepherd — He seeks out every person who is lost." },
        { icon: "🏠", name: "The Prodigal Son", desc: "A son takes his inheritance and wastes it. When he comes home repentant, his father runs to embrace him. This parable reveals God's unconditional, joyful forgiveness." },
        { icon: "🌾", name: "The Sower and the Seed", desc: "A farmer scatters seed on four kinds of soil. Only good soil produces fruit. We must be 'good soil' — open hearts that receive and act on God's Word." },
        { icon: "💛", name: "The Good Samaritan", desc: "A Samaritan helps a beaten stranger when religious leaders passed by. Jesus teaches that our neighbor is anyone in need — and we must love them as ourselves (CCC 1931)." },
      ],
    },

    secondary: "fillblank",
    fillblank: {
      title: "What Does the Parable Teach?",
      instruction: "Fill in the missing word to complete the lesson.",
      sentences: [
        { text: "The Lost Sheep shows that Jesus seeks out the ___ and lost.", answer: "sinful", options: ["sinful", "wealthy", "powerful", "proud"] },
        { text: "The Prodigal Son shows God's joy when sinners ___ and return.", answer: "repent", options: ["repent", "hide", "argue", "boast"] },
        { text: "The Good Samaritan teaches us to love our ___ as ourselves.", answer: "neighbor", options: ["neighbor", "friends", "family", "teachers"] },
        { text: "We should be 'good ___' — open hearts that receive God's Word.", answer: "soil", options: ["soil", "shepherds", "fishermen", "builders"] },
      ],
    },

    quiz: {
      questions: [
        { q: "What is a parable?", opts: ["A type of miracle", "A commandment", "A story with a deeper meaning", "A psalm"], correct: 2 },
        { q: "In the Parable of the Lost Sheep, how many sheep did the shepherd have?", opts: ["10", "50", "100", "1,000"], correct: 2 },
        { q: "What does the father do when the Prodigal Son returns?", opts: ["Punishes him", "Ignores him", "Runs to embrace him", "Sends him away again"], correct: 2 },
        { q: "In the Parable of the Sower, what does the seed represent?", opts: ["Money", "Bread", "God's Word", "Water"], correct: 2 },
        { q: "The Good Samaritan teaches us that our neighbor is ___.", opts: ["only our family", "only our countrymen", "only our friends", "anyone in need"], correct: 3 },
      ],
    },

    prayer: {
      title: "Prayer of the Good Samaritan",
      lines: [
        { s: "L", t: "Lord Jesus, you taught us that every person is our neighbor." },
        { s: "A", t: "Open our eyes to see those who need our help." },
        { s: "L", t: "Like the Good Samaritan, may we stop and care for others." },
        { s: "A", t: "Help us not to walk past someone who is hurting." },
        { s: "L", t: "You are the Good Shepherd who seeks out every lost soul." },
        { s: "A", t: "Thank you for seeking us out and never giving up on us. Amen." },
      ],
    },
  },

  // ── WEEK 9 ──────────────────────────────────────────────
  {
    week: 9,
    title: "The Sermon on the Mount",
    pillar: "Morality",
    verse: "Blessed are the pure in heart, for they shall see God. — Matthew 5:8",

    discover: {
      title: "Discover: Jesus Teaches on the Mountain",
      instruction: "Tap each card to explore Jesus' greatest sermon!",
      items: [
        { icon: "⛰️", name: "The Setting", desc: "Jesus went up a mountain and sat down to teach. The crowds gathered below. This great sermon covers how to truly live as children of God." },
        { icon: "😊", name: "The Beatitudes", desc: "Jesus began with eight Beatitudes — statements of 'blessed are...' that describe true happiness. 'Blessed' means deeply happy in God, not just feeling good in the moment (CCC 1716)." },
        { icon: "🧂", name: "Salt and Light", desc: "Jesus told His disciples: 'You are the salt of the earth. You are the light of the world.' We are called to flavor the world with goodness and shine God's truth for all to see." },
        { icon: "❤️", name: "Love Your Enemies", desc: "One of the most powerful teachings: Jesus asks us to love and pray for those who hurt us. This is radical love — far beyond what the world expects." },
        { icon: "🙏", name: "The Our Father", desc: "In the Sermon on the Mount, Jesus taught His disciples how to pray — and gave us the Our Father, the perfect model of Christian prayer (CCC 2759)." },
      ],
    },

    secondary: "sort",
    sort: {
      title: "Sort the Beatitudes!",
      instruction: "Tap each beatitude, then tap what it promises.",
      items: [
        { name: "Blessed are the poor in spirit",    icon: "🙇", group: "Kingdom of Heaven" },
        { name: "Blessed are the meek",              icon: "🕊️", group: "Inherit the Earth" },
        { name: "Blessed are the merciful",          icon: "💛", group: "Shown Mercy" },
        { name: "Blessed are the pure in heart",     icon: "💎", group: "See God" },
        { name: "Blessed are the peacemakers",       icon: "☮️", group: "Called Children of God" },
        { name: "Blessed are the persecuted",        icon: "💪", group: "Kingdom of Heaven" },
        { name: "Blessed are those who mourn",       icon: "😢", group: "Comforted" },
      ],
      groups: ["Kingdom of Heaven", "Inherit the Earth", "Shown Mercy", "See God", "Called Children of God", "Comforted"],
      colors: { "Kingdom of Heaven": "#4A90D9", "Inherit the Earth": "#6DB87B", "Shown Mercy": "#D4A843", "See God": "#9B6DB8", "Called Children of God": "#D9704A", "Comforted": "#5BA8A0" },
      icons:  { "Kingdom of Heaven": "👑", "Inherit the Earth": "🌍", "Shown Mercy": "💛", "See God": "👁️", "Called Children of God": "🙌", "Comforted": "🤗" },
    },

    quiz: {
      questions: [
        { q: "How many Beatitudes did Jesus teach?", opts: ["4", "7", "8", "10"], correct: 2 },
        { q: "Jesus said 'You are the ___ of the world.'", opts: ["salt and water", "light and fire", "salt and light", "bread and wine"], correct: 2 },
        { q: "Who is blessed according to Jesus?", opts: ["Only the rich", "Only the powerful", "Those who live by the world's rules", "Those who trust in God"], correct: 3 },
        { q: "What prayer did Jesus teach in the Sermon on the Mount?", opts: ["The Hail Mary", "The Our Father", "The Rosary", "The Glory Be"], correct: 1 },
        { q: "Jesus told us to love and pray for our ___.", opts: ["friends only", "family only", "enemies", "teachers only"], correct: 2 },
      ],
    },

    prayer: {
      title: "Beatitudes Prayer",
      lines: [
        { s: "L", t: "Blessed are the poor in spirit, for theirs is the kingdom of heaven." },
        { s: "A", t: "Lord, help us to depend on you and not on earthly things." },
        { s: "L", t: "Blessed are the merciful, for they shall obtain mercy." },
        { s: "A", t: "Lord, help us to forgive others as you have forgiven us." },
        { s: "L", t: "Blessed are the pure in heart, for they shall see God." },
        { s: "A", t: "Lord, keep our hearts clean and full of love for you. Amen." },
      ],
    },
  },

  // ── WEEK 10 ──────────────────────────────────────────────
  {
    week: 10,
    title: "Jesus and Prayer",
    pillar: "Prayer",
    verse: "When you pray, say: Our Father, who art in heaven. — Luke 11:2",

    discover: {
      title: "Discover: How Jesus Prayed",
      instruction: "Tap each card to see how Jesus teaches us to pray!",
      items: [
        { icon: "🌄", name: "Jesus Prayed Often", desc: "The Gospels show us that Jesus prayed constantly — early in the morning, late at night, before important decisions, and in the Garden of Gethsemane." },
        { icon: "🏔️", name: "Alone with the Father", desc: "Jesus often went to quiet places to pray alone. He showed us that personal, quiet prayer is essential. We need time alone with God." },
        { icon: "🙏", name: "The Our Father", desc: "Jesus taught His disciples exactly how to pray. The Our Father is called the 'summary of the whole Gospel' — it contains adoration, petition, forgiveness, and trust (CCC 2761)." },
        { icon: "💪", name: "Persistent Prayer", desc: "Jesus told parables about praying persistently — like a widow who kept asking a judge for justice. He encouraged us to keep asking God, trusting He hears and answers." },
        { icon: "🕯️", name: "Prayer in Gethsemane", desc: "Before His arrest, Jesus prayed in the garden: 'Not my will, but yours be done.' This teaches us to surrender our will to God even in the hardest moments." },
      ],
    },

    secondary: "fillblank",
    fillblank: {
      title: "The Our Father — Key Words",
      instruction: "Fill in the missing word from the Lord's Prayer.",
      sentences: [
        { text: "Our Father, who art in heaven, ___ be thy name.", answer: "hallowed", options: ["hallowed", "blessed", "praised", "golden"] },
        { text: "Thy ___ come, thy will be done on earth as in heaven.", answer: "kingdom", options: ["kingdom", "glory", "grace", "angels"] },
        { text: "Forgive us our trespasses, as we forgive those who ___ against us.", answer: "trespass", options: ["trespass", "argue", "fight", "compete"] },
        { text: "Lead us not into ___, but deliver us from evil.", answer: "temptation", options: ["temptation", "boredom", "trouble", "darkness"] },
      ],
    },

    quiz: {
      questions: [
        { q: "How often did Jesus pray, according to the Gospels?", opts: ["Only on Sundays", "Only in the Temple", "Constantly", "Once a year"], correct: 2 },
        { q: "The Our Father is called the summary of the whole ___.", opts: ["Church", "Bible", "Gospel", "Catechism"], correct: 2 },
        { q: "Jesus often went to ___ places to pray alone.", opts: ["crowded", "quiet", "rich", "noisy"], correct: 1 },
        { q: "In Gethsemane, Jesus prayed: 'Not my will, but ___ be done.'", opts: ["Peter's", "yours", "our", "Mary's"], correct: 1 },
        { q: "Jesus told parables to encourage us to pray ___.", opts: ["only briefly", "persistently", "silently only", "rarely"], correct: 1 },
      ],
    },

    prayer: {
      title: "The Our Father — Prayed with Meaning",
      lines: [
        { s: "L", t: "Jesus, teach us to pray as you taught your disciples." },
        { s: "A", t: "Our Father, who art in heaven, hallowed be thy name." },
        { s: "L", t: "May your kingdom come and your will be done." },
        { s: "A", t: "Give us this day our daily bread." },
        { s: "L", t: "Forgive us our trespasses, as we forgive those who trespass against us." },
        { s: "A", t: "And lead us not into temptation, but deliver us from evil. Amen." },
      ],
    },
  },

  // ── WEEK 11 ──────────────────────────────────────────────
  {
    week: 11,
    title: "Palm Sunday and Holy Week",
    pillar: "Creed",
    verse: "Hosanna! Blessed is he who comes in the name of the Lord. — Mark 11:9",

    discover: {
      title: "Discover: The Final Week",
      instruction: "Tap each card to walk with Jesus through Holy Week!",
      items: [
        { icon: "🌿", name: "Palm Sunday", desc: "Jesus entered Jerusalem riding on a donkey while crowds waved palm branches and shouted 'Hosanna!' They greeted Him as a king, fulfilling the prophecy of Zechariah." },
        { icon: "🕍", name: "Cleansing the Temple", desc: "Jesus went to the Temple and drove out the merchants and money changers. He declared: 'My house shall be called a house of prayer!' He showed zeal for the Father's house." },
        { icon: "🥣", name: "The Last Supper", desc: "On Holy Thursday, Jesus shared a final Passover meal with His Apostles. He washed their feet and gave us the Eucharist — His Body and Blood — for the first time." },
        { icon: "😢", name: "Gethsemane", desc: "After the Last Supper, Jesus prayed in agony in the Garden of Gethsemane. He was arrested there after Judas betrayed Him with a kiss." },
        { icon: "⚖️", name: "The Trials", desc: "Jesus was put on trial before the Jewish leaders and then before Pilate. Though innocent, He was condemned to death. He accepted this out of love for us." },
      ],
    },

    secondary: "timeline",
    timeline: {
      title: "Holy Week — In Order!",
      instruction: "Tap two items to swap them into the correct order.",
      items: [
        { id: 1, text: "Palm Sunday — Jesus enters Jerusalem", order: 1 },
        { id: 2, text: "Holy Thursday — The Last Supper", order: 2 },
        { id: 3, text: "Holy Thursday night — Gethsemane and arrest", order: 3 },
        { id: 4, text: "Good Friday — Trials and crucifixion", order: 4 },
        { id: 5, text: "Holy Saturday — Jesus lies in the tomb", order: 5 },
      ],
    },

    quiz: {
      questions: [
        { q: "What did the crowd wave as Jesus entered Jerusalem?", opts: ["Olive branches", "Palm branches", "Wheat stalks", "Banners"], correct: 1 },
        { q: "On what day is the Last Supper?", opts: ["Palm Sunday", "Holy Wednesday", "Holy Thursday", "Good Friday"], correct: 2 },
        { q: "Who betrayed Jesus with a kiss in the garden?", opts: ["Peter", "John", "Judas", "Thomas"], correct: 2 },
        { q: "What did Jesus give us at the Last Supper?", opts: ["The Rosary", "The Beatitudes", "The Eucharist", "The Commandments"], correct: 2 },
        { q: "Who condemned Jesus despite finding Him innocent?", opts: ["Herod", "Pilate", "Caiaphas", "Caesar"], correct: 1 },
      ],
    },

    prayer: {
      title: "Palm Sunday Hosanna",
      lines: [
        { s: "L", t: "Jesus, you entered Jerusalem knowing what awaited you." },
        { s: "A", t: "Hosanna! Blessed is he who comes in the name of the Lord." },
        { s: "L", t: "You washed the disciples' feet on the night of the Last Supper." },
        { s: "A", t: "Teach us to serve others as you served them." },
        { s: "L", t: "You prayed in the garden: 'Your will be done.'" },
        { s: "A", t: "Lord, help us to trust your will even when it is hard. Amen." },
      ],
    },
  },

  // ── WEEK 12 ──────────────────────────────────────────────
  {
    week: 12,
    title: "The Crucifixion and Death of Jesus",
    pillar: "Creed",
    verse: "Father, forgive them, for they know not what they do. — Luke 23:34",

    discover: {
      title: "Discover: The Cross of Jesus",
      instruction: "Tap each card to understand the meaning of Good Friday.",
      items: [
        { icon: "✝️", name: "The Way of the Cross", desc: "Jesus carried His cross through Jerusalem to a hill called Golgotha. Many people mocked Him, but others wept. Simon of Cyrene helped carry the cross." },
        { icon: "💔", name: "The Crucifixion", desc: "Jesus was nailed to the cross and crucified between two criminals. He suffered greatly out of love for every human being. His death was not an accident — it was the Father's plan of salvation." },
        { icon: "🗣️", name: "Seven Last Words", desc: "From the cross, Jesus said seven things. He forgave those who crucified Him. He gave Mary to be our Mother. He promised paradise to the repentant thief." },
        { icon: "🌑", name: "Signs in Creation", desc: "When Jesus died, the sky went dark, the earth shook, and the Temple veil was torn in two. These signs showed that something of cosmic importance had happened." },
        { icon: "🌹", name: "Why He Died", desc: "Jesus died to pay the price for our sins — to reconcile us to God. 'God so loved the world that He gave His only Son' (John 3:16). His death is an act of pure love (CCC 620)." },
      ],
    },

    secondary: "fillblank",
    fillblank: {
      title: "The Words of Jesus on the Cross",
      instruction: "Fill in the missing word from Jesus' words on the cross.",
      sentences: [
        { text: "Father, forgive them, for they know not what they ___.", answer: "do", options: ["do", "say", "want", "see"] },
        { text: "Today you will be with me in ___.", answer: "paradise", options: ["paradise", "heaven", "Nazareth", "peace"] },
        { text: "Woman, behold your ___.", answer: "son", options: ["son", "king", "servant", "friend"] },
        { text: "Father, into your ___ I commend my spirit.", answer: "hands", options: ["hands", "care", "glory", "love"] },
      ],
    },

    quiz: {
      questions: [
        { q: "Who helped Jesus carry the cross?", opts: ["John", "Peter", "Simon of Cyrene", "Mary Magdalene"], correct: 2 },
        { q: "Where was Jesus crucified?", opts: ["Bethlehem", "Nazareth", "Golgotha", "Gethsemane"], correct: 2 },
        { q: "What happened to the Temple veil when Jesus died?", opts: ["It caught fire", "It was torn in two", "It fell down", "It turned gold"], correct: 1 },
        { q: "Jesus died to ___.", opts: ["prove His power", "punish His enemies", "reconcile us to God", "escape the Romans"], correct: 2 },
        { q: "From the cross, Jesus gave Mary to be our ___.", opts: ["Teacher", "Mother", "Queen", "Guardian"], correct: 1 },
      ],
    },

    prayer: {
      title: "Stations of the Cross — Opening",
      lines: [
        { s: "L", t: "We adore you, O Christ, and we bless you." },
        { s: "A", t: "Because by your holy cross you have redeemed the world." },
        { s: "L", t: "Lord Jesus, you carried the cross for love of us." },
        { s: "A", t: "Help us to carry our own crosses with faith and courage." },
        { s: "L", t: "From the cross you forgave those who hurt you." },
        { s: "A", t: "Give us the grace to forgive those who hurt us. Amen." },
      ],
    },
  },

  // ── WEEK 13 ──────────────────────────────────────────────
  {
    week: 13,
    title: "The Resurrection of Jesus",
    pillar: "Creed",
    verse: "He is not here; for he has risen, just as he said. — Matthew 28:6",

    discover: {
      title: "Discover: Jesus Is Risen! Alleluia!",
      instruction: "Tap each card to celebrate the most important event in history!",
      items: [
        { icon: "🌅", name: "Easter Sunday Morning", desc: "On the third day after His crucifixion, Jesus rose from the dead. Mary Magdalene and other women went to the tomb and found it empty. An angel announced: 'He is not here; He has risen!'" },
        { icon: "👁️", name: "The Risen Jesus Appears", desc: "Jesus appeared to His disciples many times after the Resurrection: to Mary Magdalene, to the disciples on the road to Emmaus, to Peter, and to all the Apostles." },
        { icon: "🤲", name: "Thomas Believes", desc: "The Apostle Thomas doubted the resurrection until he saw and touched Jesus' wounds. Jesus said: 'Blessed are those who have not seen and yet believe' — that means us!" },
        { icon: "🏆", name: "Why the Resurrection Matters", desc: "The Resurrection proves that Jesus is truly God, that sin and death are conquered, and that we too will rise one day. Without the Resurrection, our faith is empty (CCC 638, 651)." },
        { icon: "🎉", name: "Easter Is 50 Days!", desc: "The Church celebrates Easter for 50 days — all the way to Pentecost. Every Sunday is a 'little Easter,' a weekly celebration of the Resurrection." },
      ],
    },

    secondary: "timeline",
    timeline: {
      title: "Easter — The Days After!",
      instruction: "Tap two items to swap them into the correct order.",
      items: [
        { id: 1, text: "The women find the empty tomb on Easter Sunday", order: 1 },
        { id: 2, text: "Jesus appears to Mary Magdalene in the garden", order: 2 },
        { id: 3, text: "Jesus walks with two disciples on the road to Emmaus", order: 3 },
        { id: 4, text: "Jesus appears to Thomas and the Apostles", order: 4 },
        { id: 5, text: "Jesus ascends to heaven 40 days after Easter", order: 5 },
      ],
    },

    quiz: {
      questions: [
        { q: "On what day did Jesus rise from the dead?", opts: ["The first day", "The second day", "The third day", "The seventh day"], correct: 2 },
        { q: "Who was the first person Jesus appeared to after the Resurrection?", opts: ["Peter", "Mary Magdalene", "Thomas", "John"], correct: 1 },
        { q: "What did Thomas say when he saw the risen Jesus?", opts: ["It cannot be!", "My Lord and my God!", "Are you a ghost?", "I still do not believe."], correct: 1 },
        { q: "The Resurrection shows that Jesus has conquered ___.", opts: ["the Temple", "Rome", "sin and death", "the storm"], correct: 2 },
        { q: "How many days does the Church celebrate Easter?", opts: ["7", "14", "40", "50"], correct: 3 },
      ],
    },

    prayer: {
      title: "Easter Alleluia Prayer",
      lines: [
        { s: "L", t: "This is the day the Lord has made!" },
        { s: "A", t: "Let us rejoice and be glad in it. Alleluia!" },
        { s: "L", t: "Christ has risen from the dead — death is conquered!" },
        { s: "A", t: "Lord Jesus, you are alive! We believe in you." },
        { s: "L", t: "Because you rose, we know that we will rise too." },
        { s: "A", t: "Alleluia, alleluia! Thanks be to God forever. Amen." },
      ],
    },
  },

  // ── WEEK 14 ──────────────────────────────────────────────
  {
    week: 14,
    title: "The Ascension and Pentecost",
    pillar: "Creed",
    verse: "You will receive power when the Holy Spirit has come upon you. — Acts 1:8",

    discover: {
      title: "Discover: Jesus Sends the Spirit",
      instruction: "Tap each card to learn what happened after the Resurrection!",
      items: [
        { icon: "☁️", name: "The Ascension", desc: "Forty days after Easter, Jesus led His Apostles to a hilltop and ascended into heaven. He promised to be with us always and to send the Holy Spirit." },
        { icon: "🔥", name: "Pentecost — Birthday of the Church", desc: "Ten days after the Ascension, the Holy Spirit came upon Mary and the Apostles in the form of fire and wind. This day is called Pentecost — the birthday of the Church." },
        { icon: "💪", name: "Transformed Apostles", desc: "Before Pentecost, the Apostles were hiding in fear. After the Holy Spirit came, they boldly went out and preached — and 3,000 people believed that very day!" },
        { icon: "🌍", name: "The Great Commission", desc: "Before His Ascension, Jesus gave His Apostles a mission: 'Go and make disciples of all nations, baptizing them in the name of the Father, Son, and Holy Spirit' (Matthew 28:19)." },
      ],
    },

    secondary: "sort",
    sort: {
      title: "Ascension or Pentecost?",
      instruction: "Tap an event, then tap whether it happened at the Ascension or Pentecost.",
      items: [
        { name: "Jesus rises into a cloud",     icon: "☁️", group: "Ascension" },
        { name: "Jesus gives the Great Commission", icon: "🌍", group: "Ascension" },
        { name: "Flames appear over heads",     icon: "🔥", group: "Pentecost" },
        { name: "Apostles speak new languages", icon: "🗣️", group: "Pentecost" },
        { name: "3,000 people are baptized",    icon: "💧", group: "Pentecost" },
        { name: "Jesus promises to send the Spirit", icon: "🕊️", group: "Ascension" },
        { name: "Birthday of the Church",       icon: "🎂", group: "Pentecost" },
      ],
      groups: ["Ascension", "Pentecost"],
      colors: { Ascension: "#4A90D9", Pentecost: "#D9704A" },
      icons:  { Ascension: "☁️", Pentecost: "🔥" },
    },

    quiz: {
      questions: [
        { q: "How many days after Easter did Jesus ascend to heaven?", opts: ["3", "7", "40", "50"], correct: 2 },
        { q: "What appeared at Pentecost?", opts: ["Clouds and thunder", "Fire and wind", "An earthquake", "A bright star"], correct: 1 },
        { q: "How many people were baptized on the day of Pentecost?", opts: ["120", "500", "1,000", "3,000"], correct: 3 },
        { q: "The Great Commission told the Apostles to go to ___.", opts: ["Jerusalem only", "Israel only", "all nations", "Rome first"], correct: 2 },
        { q: "Pentecost is called the ___ of the Church.", opts: ["founding", "birthday", "anniversary", "beginning"], correct: 1 },
      ],
    },

    prayer: {
      title: "Come, Holy Spirit",
      lines: [
        { s: "L", t: "Come, Holy Spirit, fill the hearts of your faithful." },
        { s: "A", t: "And kindle in them the fire of your love." },
        { s: "L", t: "Send forth your Spirit and they shall be created." },
        { s: "A", t: "And you shall renew the face of the earth." },
        { s: "L", t: "Lord, by the light of the Holy Spirit guide our hearts." },
        { s: "A", t: "Make us bold witnesses of Jesus in our world today. Amen." },
      ],
    },
  },

  // ── WEEK 15 ──────────────────────────────────────────────
  {
    week: 15,
    title: "Mary: Mother of Jesus and Our Mother",
    pillar: "Creed",
    verse: "Behold, henceforth all generations shall call me blessed. — Luke 1:48",

    discover: {
      title: "Discover: Mary, Our Mother",
      instruction: "Tap each card to learn about the Mother of Jesus!",
      items: [
        { icon: "👑", name: "The Immaculate Conception", desc: "Mary was preserved from original sin from the very first moment of her life — a special grace God gave her to prepare her to be the Mother of His Son (CCC 491)." },
        { icon: "💒", name: "Mother of God", desc: "Because Jesus is truly God, Mary is truly the Mother of God. This title — 'Theotokos' — was confirmed by the Church at the Council of Ephesus in 431 AD." },
        { icon: "✝️", name: "At the Cross", desc: "Mary stood at the foot of the cross as Jesus died. From the cross, Jesus gave Mary to be our Mother — and all of us to be her children." },
        { icon: "🌷", name: "The Assumption", desc: "At the end of her life, Mary was taken body and soul into heaven. This is called the Assumption. She now prays for us before God (CCC 966)." },
        { icon: "🙏", name: "Our Intercessor", desc: "Mary's first miracle request came at the Wedding at Cana — and Jesus answered. She still brings our prayers to Jesus and He listens to His Mother." },
      ],
    },

    secondary: "fillblank",
    fillblank: {
      title: "Mary — Key Words",
      instruction: "Fill in the missing word about Our Lady.",
      sentences: [
        { text: "Mary was preserved from ___ sin from the moment of her conception.", answer: "original", options: ["original", "mortal", "venial", "actual"] },
        { text: "Because Jesus is God, Mary is called the Mother of ___.", answer: "God", options: ["God", "angels", "the Church", "Israel"] },
        { text: "Jesus gave Mary to be our Mother from the ___.", answer: "cross", options: ["cross", "manger", "Temple", "boat"] },
        { text: "Mary was taken body and soul into heaven — this is the ___.", answer: "Assumption", options: ["Assumption", "Ascension", "Annunciation", "Presentation"] },
      ],
    },

    quiz: {
      questions: [
        { q: "What title means 'God-bearer' or 'Mother of God'?", opts: ["Immaculata", "Theotokos", "Magnificat", "Assumpta"], correct: 1 },
        { q: "The Immaculate Conception means Mary was free from ___.", opts: ["all suffering", "original sin", "temptation", "death"], correct: 1 },
        { q: "Where did Mary stand during the crucifixion?", opts: ["In Jerusalem", "At the tomb", "At the foot of the cross", "In the Garden"], correct: 2 },
        { q: "At which miracle did Mary ask Jesus to help?", opts: ["Feeding 5,000", "Raising Lazarus", "Wedding at Cana", "Healing the blind man"], correct: 2 },
        { q: "The Assumption means Mary was taken into heaven ___.", opts: ["only spiritually", "in her soul only", "body and soul", "after many years"], correct: 2 },
      ],
    },

    prayer: {
      title: "The Hail Mary — Line by Line",
      lines: [
        { s: "L", t: "The angel said: 'Hail, full of grace! The Lord is with you.'" },
        { s: "A", t: "Hail Mary, full of grace, the Lord is with thee." },
        { s: "L", t: "Elizabeth said: 'Blessed art thou among women.'" },
        { s: "A", t: "Blessed art thou among women, and blessed is the fruit of thy womb, Jesus." },
        { s: "L", t: "The Church adds our prayer of trust:" },
        { s: "A", t: "Holy Mary, Mother of God, pray for us sinners, now and at the hour of our death. Amen." },
      ],
    },
  },

  // ── WEEK 16: REVIEW ───────────────────────────────────
  {
    week: 16,
    title: "Unit 2-3 Review: The Life and Teachings of Jesus",
    pillar: "Review",
    verse: "I am the resurrection and the life. — John 11:25",

    discover: {
      title: "Review: The Heart of the Gospel",
      instruction: "Tap each card to review the life and mission of Jesus!",
      items: [
        { icon: "👨‍👩‍👧", name: "Jesus Calls Us", desc: "Jesus chose twelve Apostles and calls each of us to be disciples through Baptism. 'Follow me' — He is still speaking these words to us today." },
        { icon: "🌟", name: "Miracles and Parables", desc: "Jesus performed miracles showing His divine power and taught in parables revealing the Kingdom of God. The Good Samaritan, the Prodigal Son, the Lost Sheep." },
        { icon: "✝️", name: "Death and Resurrection", desc: "Jesus died on the cross for our sins — then rose from the dead on the third day. The Resurrection is the foundation of Christian faith (CCC 638)." },
        { icon: "🔥", name: "Ascension and Pentecost", desc: "Jesus ascended to heaven 40 days after Easter. Ten days later, the Holy Spirit came at Pentecost, launching the Church's mission to the world." },
      ],
    },

    secondary: "timeline",
    timeline: {
      title: "The Life of Jesus — Big Picture!",
      instruction: "Tap two items to swap them into the correct order.",
      items: [
        { id: 1, text: "Born in Bethlehem — the Incarnation", order: 1 },
        { id: 2, text: "Baptized by John and tempted in the desert", order: 2 },
        { id: 3, text: "Public ministry — miracles, parables, teaching", order: 3 },
        { id: 4, text: "Died on the cross — Rose on the third day", order: 4 },
        { id: 5, text: "Ascended — Pentecost — Church is born", order: 5 },
      ],
    },

    quiz: {
      questions: [
        { q: "How many Apostles did Jesus choose?", opts: ["7", "10", "12", "72"], correct: 2 },
        { q: "Which parable shows God's joy over a repentant sinner?", opts: ["The Sower", "The Prodigal Son", "The Good Samaritan", "The Talents"], correct: 1 },
        { q: "On what day did Jesus rise from the dead?", opts: ["Day 1", "Day 2", "Day 3", "Day 7"], correct: 2 },
        { q: "How many days after Easter is Pentecost?", opts: ["10", "40", "50", "100"], correct: 2 },
        { q: "Mary is the Mother of God because Jesus is truly ___.", opts: ["a prophet", "a king only", "God", "an angel"], correct: 2 },
      ],
    },

    prayer: {
      title: "Apostles' Creed — Our Faith",
      lines: [
        { s: "L", t: "Let us profess our faith in Jesus Christ together." },
        { s: "A", t: "I believe in Jesus Christ, His only Son, our Lord." },
        { s: "L", t: "He was conceived by the Holy Spirit and born of the Virgin Mary." },
        { s: "A", t: "He suffered, died, and was buried; on the third day He rose again." },
        { s: "L", t: "He ascended into heaven and will come again in glory." },
        { s: "A", t: "We believe — help our unbelief. Lord, we trust in you. Amen." },
      ],
    },
  },

  // ── WEEK 17 ──────────────────────────────────────────────
  {
    week: 17,
    title: "Jesus and the Sacrament of Reconciliation",
    pillar: "Sacraments",
    verse: "Whose sins you forgive, they are forgiven them. — John 20:23",

    discover: {
      title: "Discover: God's Gift of Forgiveness",
      instruction: "Tap each card to understand how Jesus forgives our sins!",
      items: [
        { icon: "🤝", name: "Jesus Forgives Sinners", desc: "Throughout His ministry, Jesus forgave many people their sins — the paralyzed man, the woman who wept at His feet, Zacchaeus the tax collector. He still forgives sins today." },
        { icon: "🗝️", name: "The Gift to the Apostles", desc: "On Easter Sunday evening, Jesus breathed on the Apostles and said: 'Receive the Holy Spirit. Whose sins you forgive, they are forgiven.' He gave them the power to forgive." },
        { icon: "📋", name: "How Confession Works", desc: "In Confession, we tell our sins to a priest, feel sorry, receive a penance, and are absolved. The priest acts in the person of Christ — it is really Jesus who forgives (CCC 1448)." },
        { icon: "💡", name: "Examination of Conscience", desc: "Before Confession, we examine our conscience — we look back at our choices and ask: 'Where have I failed to love God and others?' This is an important spiritual practice." },
        { icon: "🌅", name: "Starting Fresh", desc: "When we leave Confession, our souls are clean. The grace lost by mortal sin is restored; venial sins are forgiven. God remembers our sins no more (CCC 1468)." },
      ],
    },

    secondary: "timeline",
    timeline: {
      title: "Steps of a Good Confession!",
      instruction: "Tap two items to swap them into the correct order.",
      items: [
        { id: 1, text: "Examine your conscience — recall your sins", order: 1 },
        { id: 2, text: "Feel true sorrow — make an Act of Contrition", order: 2 },
        { id: 3, text: "Confess your sins to the priest", order: 3 },
        { id: 4, text: "Receive your penance from the priest", order: 4 },
        { id: 5, text: "Receive absolution and give thanks to God", order: 5 },
      ],
    },

    quiz: {
      questions: [
        { q: "Who gave the Apostles the power to forgive sins?", opts: ["Moses", "Peter", "Jesus", "John the Baptist"], correct: 2 },
        { q: "In Confession, the priest acts in the person of ___.", opts: ["the Bishop", "the Pope", "Christ", "the Apostles"], correct: 2 },
        { q: "What do we do before Confession to review our actions?", opts: ["Say the Rosary", "Examine our conscience", "Read the Psalms", "Fast for a day"], correct: 1 },
        { q: "In Confession, what do we receive that takes away sin?", opts: ["Anointing", "Communion", "Absolution", "Confirmation"], correct: 2 },
        { q: "Confession restores the grace that was lost by ___ sin.", opts: ["venial", "original", "mortal", "actual"], correct: 2 },
      ],
    },

    prayer: {
      title: "Act of Contrition",
      lines: [
        { s: "L", t: "Let us approach God with hearts that are truly sorry." },
        { s: "A", t: "O my God, I am heartily sorry for having offended you." },
        { s: "L", t: "We are sorry because we love you and sin hurts that love." },
        { s: "A", t: "I detest all my sins because they offend you, my God." },
        { s: "L", t: "Ask God to help you turn away from sin with His help." },
        { s: "A", t: "I firmly resolve, with the help of your grace, to sin no more. Amen." },
      ],
    },
  },

  // ── WEEK 18 ──────────────────────────────────────────────
  {
    week: 18,
    title: "Jesus Heals Body and Soul",
    pillar: "Sacraments",
    verse: "Your faith has saved you. Go in peace. — Luke 7:50",

    discover: {
      title: "Discover: Jesus the Healer",
      instruction: "Tap each card to see how Jesus heals us body and soul!",
      items: [
        { icon: "🩺", name: "Jesus Heals the Sick", desc: "Jesus healed many people — the blind, the lame, those with leprosy, and those with fevers. These healings showed His compassion and the coming of God's Kingdom." },
        { icon: "🤲", name: "Anointing of the Sick", desc: "The sacrament of Anointing of the Sick continues Jesus' healing ministry. A priest anoints the seriously ill with holy oil and prays for their healing, strength, and forgiveness." },
        { icon: "💧", name: "Faith Heals Too", desc: "Many healing stories in the Gospels highlight the importance of faith. Jesus often said 'Your faith has saved you.' Faith opens us to God's grace and healing." },
        { icon: "🧠", name: "Inner Healing", desc: "Jesus also heals hearts. He comforted the mourning, restored dignity to the outcast, and forgave sins. He heals our deepest wounds — fear, guilt, and loneliness." },
        { icon: "🌿", name: "James 5:14", desc: "The Letter of James instructs: 'Is anyone among you sick? Let them call the elders of the Church, and let them pray over him and anoint him with oil in the name of the Lord' (CCC 1519)." },
      ],
    },

    secondary: "sort",
    sort: {
      title: "Physical or Spiritual Healing?",
      instruction: "Tap an event, then tap whether it was physical or spiritual healing.",
      items: [
        { name: "Restoring sight to the blind",  icon: "👁️", group: "Physical" },
        { name: "Healing the paralyzed man",     icon: "🛏️", group: "Physical" },
        { name: "Forgiving the sinful woman",    icon: "💛", group: "Spiritual" },
        { name: "Calming Zacchaeus' greed",      icon: "🌳", group: "Spiritual" },
        { name: "Curing leprosy",                icon: "🙌", group: "Physical" },
        { name: "Freeing those with fear",       icon: "😌", group: "Spiritual" },
        { name: "Raising the dead",              icon: "🌟", group: "Physical" },
      ],
      groups: ["Physical", "Spiritual"],
      colors: { Physical: "#4A90D9", Spiritual: "#9B6DB8" },
      icons:  { Physical: "🩺", Spiritual: "🕊️" },
    },

    quiz: {
      questions: [
        { q: "Which sacrament continues Jesus' healing ministry for the sick?", opts: ["Baptism", "Matrimony", "Anointing of the Sick", "Holy Orders"], correct: 2 },
        { q: "What does Jesus often credit as the reason for healing?", opts: ["The person's money", "The person's faith", "The Law of Moses", "A clean life"], correct: 1 },
        { q: "Who administers the Anointing of the Sick?", opts: ["A deacon", "Any Catholic", "A bishop only", "A priest"], correct: 3 },
        { q: "James 5:14 instructs the sick to call the ___.", opts: ["doctors", "elders of the Church", "scribes", "Pharisees"], correct: 1 },
        { q: "Jesus heals not only bodies but also our ___.", opts: ["finances", "skills", "hearts and souls", "memories"], correct: 2 },
      ],
    },

    prayer: {
      title: "Prayer for the Sick",
      lines: [
        { s: "L", t: "Lord Jesus, you went about healing all who were sick." },
        { s: "A", t: "Heal all those who are suffering in body or spirit." },
        { s: "L", t: "You said 'Your faith has saved you' to those who came to you." },
        { s: "A", t: "Increase our faith so that we may trust in your healing power." },
        { s: "L", t: "Bless all doctors, nurses, and caregivers who serve the sick." },
        { s: "A", t: "May the sick and suffering find comfort in your loving arms. Amen." },
      ],
    },
  },

  // ── WEEK 19 ──────────────────────────────────────────────
  {
    week: 19,
    title: "Jesus the Good Shepherd",
    pillar: "Morality",
    verse: "I am the good shepherd. The good shepherd lays down his life for his sheep. — John 10:11",

    discover: {
      title: "Discover: Jesus Cares for Each of Us",
      instruction: "Tap each card to understand what the Good Shepherd means!",
      items: [
        { icon: "🐑", name: "Shepherd and Sheep", desc: "In biblical times, a shepherd lived with his flock, protected them from wolves, and searched for any lost sheep. Jesus calls Himself the Good Shepherd — and us His sheep." },
        { icon: "💗", name: "Lays Down His Life", desc: "A hired worker runs away when danger comes. But the Good Shepherd stays and gives His life for the sheep. Jesus literally did this on the cross — for every one of us." },
        { icon: "👂", name: "He Knows Our Voice", desc: "Jesus says: 'I know my sheep and my sheep know me.' He knows each of us by name — our struggles, our joys, our fears. We are not strangers to Him." },
        { icon: "🔍", name: "Seeks the Lost", desc: "Jesus leaves the 99 to find the one lost sheep. This shows that no one is too sinful, too far away, or too forgotten for Jesus to seek out with love." },
        { icon: "🚪", name: "He Is the Gate", desc: "Jesus also calls Himself 'the gate of the sheep.' Whoever enters through Him will be saved. He is the only way to the fullness of life (CCC 754)." },
      ],
    },

    secondary: "fillblank",
    fillblank: {
      title: "The Good Shepherd",
      instruction: "Fill in the missing word from Jesus' teaching.",
      sentences: [
        { text: "I am the good shepherd. The good shepherd lays down his ___ for the sheep.", answer: "life", options: ["life", "staff", "wealth", "time"] },
        { text: "I know my ___ and my sheep know me.", answer: "sheep", options: ["sheep", "workers", "enemies", "plans"] },
        { text: "The good shepherd leaves the ___ to find the one that is lost.", answer: "ninety-nine", options: ["ninety-nine", "city", "flock", "field"] },
        { text: "I am the ___: whoever enters through me will be saved.", answer: "gate", options: ["gate", "shepherd", "light", "way"] },
      ],
    },

    quiz: {
      questions: [
        { q: "What does the Good Shepherd do that a hired worker won't?", opts: ["Feeds the sheep", "Names the sheep", "Gives his life for the sheep", "Counts the sheep"], correct: 2 },
        { q: "How does Jesus say He knows His sheep?", opts: ["He counts them", "He knows them by name", "He tags them", "He watches from a distance"], correct: 1 },
        { q: "Jesus leaves the 99 to find how many lost sheep?", opts: ["1", "3", "10", "All of them"], correct: 0 },
        { q: "Jesus also calls Himself the ___ of the sheep.", opts: ["field", "river", "gate", "fence"], correct: 2 },
        { q: "The image of Jesus as Good Shepherd shows He is ___.", opts: ["powerful and strict", "loving and protective", "distant and holy", "famous and rich"], correct: 1 },
      ],
    },

    prayer: {
      title: "Psalm 23 — The Lord Is My Shepherd",
      lines: [
        { s: "L", t: "The Lord is my shepherd — I shall not want." },
        { s: "A", t: "He makes me lie down in green pastures and leads me beside still waters." },
        { s: "L", t: "Even though I walk through the valley of the shadow of death," },
        { s: "A", t: "I will fear no evil, for you are with me." },
        { s: "L", t: "Surely goodness and mercy shall follow me all the days of my life." },
        { s: "A", t: "And I shall dwell in the house of the Lord forever. Amen." },
      ],
    },
  },

  // ── WEEK 20: REVIEW ───────────────────────────────────
  {
    week: 20,
    title: "Unit 4 Review: How Jesus Saves and Heals",
    pillar: "Review",
    verse: "Come to me, all you who labor and are burdened, and I will give you rest. — Matthew 11:28",

    discover: {
      title: "Review: Jesus Our Savior and Healer",
      instruction: "Tap each card to review how Jesus heals and saves us!",
      items: [
        { icon: "🗝️", name: "Reconciliation", desc: "Jesus gave His Apostles the power to forgive sins. In Confession, the priest acts in the person of Christ — absolving our sins and restoring grace to our souls." },
        { icon: "🩺", name: "Anointing of the Sick", desc: "Jesus healed the sick and gave this ministry to the Church. The sacrament of Anointing brings spiritual strength and sometimes physical healing to those who are seriously ill." },
        { icon: "🐑", name: "Good Shepherd", desc: "Jesus is the Good Shepherd who knows us by name, lays down His life for us, and seeks out the lost. No one is beyond His reach and love." },
        { icon: "💛", name: "God's Mercy", desc: "Throughout His ministry, Jesus showed that God's mercy is greater than any sin. He forgave sinners, healed the sick, and raised the dead." },
      ],
    },

    secondary: "sort",
    sort: {
      title: "Match the Teaching to Jesus!",
      instruction: "Tap each item and match it to the right topic.",
      items: [
        { name: "Whose sins you forgive, they are forgiven", icon: "✝️", group: "Reconciliation" },
        { name: "Examine your conscience",                  icon: "🔍", group: "Reconciliation" },
        { name: "Anointing with holy oil",                  icon: "🫒", group: "Anointing" },
        { name: "Your faith has saved you",                 icon: "💪", group: "Anointing" },
        { name: "I lay down my life for the sheep",         icon: "🐑", group: "Good Shepherd" },
        { name: "He knows us by name",                      icon: "💗", group: "Good Shepherd" },
        { name: "Forgave the Prodigal Son",                 icon: "🏠", group: "Reconciliation" },
      ],
      groups: ["Reconciliation", "Anointing", "Good Shepherd"],
      colors: { Reconciliation: "#6DB87B", Anointing: "#D4A843", "Good Shepherd": "#4A90D9" },
      icons:  { Reconciliation: "🗝️", Anointing: "🩺", "Good Shepherd": "🐑" },
    },

    quiz: {
      questions: [
        { q: "Who hears our confession in the Sacrament of Reconciliation?", opts: ["A deacon", "A bishop", "A priest", "Any elder"], correct: 2 },
        { q: "The Anointing of the Sick is for those who are ___.", opts: ["young and healthy", "in mortal sin", "seriously ill", "about to be married"], correct: 2 },
        { q: "The Good Shepherd leaves 99 to find ___.", opts: ["the biggest sheep", "the best pasture", "one lost sheep", "all lost sheep"], correct: 2 },
        { q: "In Confession, what must we feel to be forgiven?", opts: ["Nothing — it's automatic", "True sorrow for sin", "Perfect holiness", "A feeling of peace first"], correct: 1 },
        { q: "Jesus the Good Shepherd shows that God's love is ___.", opts: ["conditional", "distant", "unconditional", "earned"], correct: 2 },
      ],
    },

    prayer: {
      title: "Come to Me — Jesus Prays Over Us",
      lines: [
        { s: "L", t: "Jesus said: 'Come to me, all who are weary, and I will give you rest.'" },
        { s: "A", t: "Lord, we come to you with all our struggles and sins." },
        { s: "L", t: "You are our Good Shepherd who seeks the lost and heals the broken." },
        { s: "A", t: "Thank you for never giving up on us." },
        { s: "L", t: "Give us the courage to come to Confession and receive your mercy." },
        { s: "A", t: "Merciful Jesus, we trust in you. Amen." },
      ],
    },
  },

  // ── WEEK 21 ──────────────────────────────────────────────
  {
    week: 21,
    title: "Following Jesus: The Moral Life",
    pillar: "Morality",
    verse: "If you love me, keep my commandments. — John 14:15",

    discover: {
      title: "Discover: Living as a Disciple",
      instruction: "Tap each card to learn what it means to follow Jesus every day!",
      items: [
        { icon: "❤️", name: "Love Is the Goal", desc: "Jesus summed up all of morality in love: love God with all your heart, and love your neighbor as yourself. Every moral rule flows from this double commandment of love." },
        { icon: "🪞", name: "Conscience", desc: "God gave us a conscience — an inner voice that helps us know right from wrong. We must form our conscience well by learning God's law and following it (CCC 1776)." },
        { icon: "⚖️", name: "Virtues", desc: "A virtue is a good habit — a tendency to choose what is good. The four cardinal virtues are prudence, justice, fortitude, and temperance. We grow in virtue through practice." },
        { icon: "⛓️", name: "Sin and Freedom", desc: "Sin is a choice to turn away from God and love. Mortal sin breaks our friendship with God; venial sin weakens it. True freedom is the ability to choose what is truly good (CCC 1849)." },
        { icon: "🌱", name: "Growing in Holiness", desc: "Discipleship is a journey. With prayer, the sacraments, and trying again after failures, we grow more like Jesus every day. Holiness is for everyone — not just saints." },
      ],
    },

    secondary: "sort",
    sort: {
      title: "Cardinal Virtues!",
      instruction: "Tap each description and sort it to the correct virtue.",
      items: [
        { name: "Making wise decisions",       icon: "🧠", group: "Prudence" },
        { name: "Giving each person their due", icon: "⚖️", group: "Justice" },
        { name: "Facing fear bravely",         icon: "💪", group: "Fortitude" },
        { name: "Controlling our desires",     icon: "🛑", group: "Temperance" },
        { name: "Thinking before acting",      icon: "💭", group: "Prudence" },
        { name: "Keeping promises faithfully", icon: "🤝", group: "Justice" },
        { name: "Not eating or drinking too much", icon: "🍎", group: "Temperance" },
      ],
      groups: ["Prudence", "Justice", "Fortitude", "Temperance"],
      colors: { Prudence: "#4A90D9", Justice: "#6DB87B", Fortitude: "#D9704A", Temperance: "#9B6DB8" },
      icons:  { Prudence: "🧠", Justice: "⚖️", Fortitude: "💪", Temperance: "🛑" },
    },

    quiz: {
      questions: [
        { q: "Jesus said all morality is summed up in ___.", opts: ["the Ten Commandments", "the Beatitudes", "the law of love", "the Rosary"], correct: 2 },
        { q: "What is a conscience?", opts: ["A feeling of happiness", "An inner voice that guides right from wrong", "A religious book", "A type of prayer"], correct: 1 },
        { q: "What is a virtue?", opts: ["A type of sin", "A good habit of choosing what is right", "A prayer", "A sacrament"], correct: 1 },
        { q: "Name the four cardinal virtues.", opts: ["Faith, Hope, Love, Peace", "Prudence, Justice, Fortitude, Temperance", "Kindness, Honesty, Bravery, Patience", "Wisdom, Knowledge, Prayer, Service"], correct: 1 },
        { q: "Sin is turning ___ from God and love.", opts: ["toward", "away", "close", "back"], correct: 1 },
      ],
    },

    prayer: {
      title: "Prayer for Virtue",
      lines: [
        { s: "L", t: "Lord Jesus, you are the model of every virtue." },
        { s: "A", t: "Help us to be prudent — to think and choose wisely." },
        { s: "L", t: "Help us to be just — to treat every person fairly and with dignity." },
        { s: "A", t: "Help us to be brave — to do what is right even when it is hard." },
        { s: "L", t: "Help us to be temperate — to use all of creation's gifts wisely." },
        { s: "A", t: "Lord, make us holy as you are holy. Amen." },
      ],
    },
  },

  // ── WEEK 22 ──────────────────────────────────────────────
  {
    week: 22,
    title: "Loving God: The First Three Commandments",
    pillar: "Morality",
    verse: "You shall love the Lord your God with all your heart. — Matthew 22:37",

    discover: {
      title: "Discover: Our Love for God",
      instruction: "Tap each card to explore how we love God through the commandments!",
      items: [
        { icon: "🚫", name: "1st: No False Gods", desc: "The first commandment calls us to worship God alone. Modern 'false gods' include money, popularity, and things we value more than God (CCC 2110–2114)." },
        { icon: "🗣️", name: "2nd: Respect God's Name", desc: "God's name is holy and must never be used carelessly or as a curse. We should only speak God's name in prayer, praise, and reverence." },
        { icon: "⛪", name: "3rd: Keep the Lord's Day Holy", desc: "Sunday is the Lord's Day — a day for Mass, rest, and family. The third commandment calls us to stop ordinary work and give the day to God and those we love." },
        { icon: "💙", name: "Why These Come First", desc: "The first three commandments govern our relationship with God. If we love God first and most, the other seven commandments become natural expressions of that love." },
      ],
    },

    secondary: "fillblank",
    fillblank: {
      title: "Commandments 1-3",
      instruction: "Fill in the missing word from the first three commandments.",
      sentences: [
        { text: "I am the Lord your God — you shall not have ___ gods before me.", answer: "strange", options: ["strange", "happy", "holy", "new"] },
        { text: "You shall not take the ___ of the Lord your God in vain.", answer: "name", options: ["name", "day", "gift", "house"] },
        { text: "Remember to keep ___ the Lord's Day.", answer: "holy", options: ["holy", "free", "clean", "quiet"] },
        { text: "The first 3 commandments teach us to love ___.", answer: "God", options: ["God", "ourselves", "our neighbors", "the Church"] },
      ],
    },

    quiz: {
      questions: [
        { q: "The first commandment says we must worship ___.", opts: ["anyone we choose", "God alone", "God and angels", "God and saints"], correct: 1 },
        { q: "Modern 'false gods' can include ___.", opts: ["prayer and Mass", "money and popularity", "family and friends", "school and sports"], correct: 1 },
        { q: "The second commandment calls us to respect God's ___.", opts: ["house", "name", "day", "people"], correct: 1 },
        { q: "What should we do on Sunday according to the third commandment?", opts: ["Only rest", "Only work", "Go to Mass and rest", "Avoid all others"], correct: 2 },
        { q: "Commandments 1-3 teach us about loving ___.", opts: ["our neighbors", "ourselves", "God", "the Church"], correct: 2 },
      ],
    },

    prayer: {
      title: "Act of Love",
      lines: [
        { s: "L", t: "Let us pray the Act of Love — the prayer of the heart that loves God above all things." },
        { s: "A", t: "O my God, I love you above all things, with my whole heart and soul." },
        { s: "L", t: "Help us to put nothing before you in our hearts." },
        { s: "A", t: "And I love my neighbor as myself for love of you." },
        { s: "L", t: "May we honor your name in every word we speak." },
        { s: "A", t: "My God, I love you. Help us to love you more each day. Amen." },
      ],
    },
  },

  // ── WEEK 23 ──────────────────────────────────────────────
  {
    week: 23,
    title: "Loving Others: The Last Seven Commandments",
    pillar: "Morality",
    verse: "Love your neighbor as yourself. — Matthew 22:39",

    discover: {
      title: "Discover: Commandments 4–10",
      instruction: "Tap each card to learn how we love others through God's law!",
      items: [
        { icon: "👨‍👩‍👧", name: "4th: Honor Parents", desc: "We owe our parents deep respect, gratitude, and obedience. God placed them as the first teachers of the faith in our lives (CCC 2197–2200)." },
        { icon: "❤️‍🔥", name: "5th: Protect Life", desc: "Every human life is sacred from conception to natural death. The fifth commandment calls us to care for life, avoid violence, and treat others with kindness." },
        { icon: "🤫", name: "8th: Tell the Truth", desc: "The eighth commandment calls us to be truthful in all we say. Lying hurts others and damages trust. We must always speak with honesty and integrity." },
        { icon: "🤲", name: "7th & 10th: Be Generous", desc: "We must not steal or covet what belongs to others. Instead, we are called to share, give generously, and be thankful for what God has given us." },
        { icon: "🌍", name: "All About Love", desc: "Commandments 4–10 are about loving our neighbor. Jesus showed us that loving God and loving our neighbor are inseparable — you cannot truly do one without the other." },
      ],
    },

    secondary: "sort",
    sort: {
      title: "Love God or Love Neighbor?",
      instruction: "Sort each commandment into the right group.",
      items: [
        { name: "No other gods",         icon: "🚫", group: "Love God (1–3)" },
        { name: "Keep Sunday holy",      icon: "⛪", group: "Love God (1–3)" },
        { name: "Honor your parents",    icon: "👨‍👩‍👧", group: "Love Neighbor (4–10)" },
        { name: "Do not steal",          icon: "🚷", group: "Love Neighbor (4–10)" },
        { name: "Respect God's name",    icon: "🗣️", group: "Love God (1–3)" },
        { name: "Do not lie",            icon: "🤫", group: "Love Neighbor (4–10)" },
        { name: "Protect human life",    icon: "❤️", group: "Love Neighbor (4–10)" },
      ],
      groups: ["Love God (1–3)", "Love Neighbor (4–10)"],
      colors: { "Love God (1–3)": "#4A90D9", "Love Neighbor (4–10)": "#6DB87B" },
      icons:  { "Love God (1–3)": "✝️", "Love Neighbor (4–10)": "🤝" },
    },

    quiz: {
      questions: [
        { q: "The fourth commandment calls us to honor our ___.", opts: ["teachers", "parents", "priests", "friends"], correct: 1 },
        { q: "The fifth commandment protects ___.", opts: ["property", "truth", "human life", "the Sabbath"], correct: 2 },
        { q: "The eighth commandment calls us to ___.", opts: ["worship God", "honor parents", "tell the truth", "avoid stealing"], correct: 2 },
        { q: "Commandments 4–10 focus on loving our ___.", opts: ["God", "neighbor", "Church", "family only"], correct: 1 },
        { q: "Every human life is sacred from ___ to natural death.", opts: ["birth", "conception", "age 1", "baptism"], correct: 1 },
      ],
    },

    prayer: {
      title: "Prayer for Our Families",
      lines: [
        { s: "L", t: "Lord Jesus, you were obedient to Mary and Joseph in Nazareth." },
        { s: "A", t: "Help us to honor and respect our parents and families." },
        { s: "L", t: "You taught us to love our neighbors as ourselves." },
        { s: "A", t: "Help us to protect and care for every human life." },
        { s: "L", t: "May we always speak the truth, share what we have, and live with integrity." },
        { s: "A", t: "Lord, teach us to love as you love. Amen." },
      ],
    },
  },

  // ── WEEK 24 ──────────────────────────────────────────────
  {
    week: 24,
    title: "The Works of Mercy",
    pillar: "Morality",
    verse: "Whatever you did for one of the least of these brothers of mine, you did for me. — Matthew 25:40",

    discover: {
      title: "Discover: Serving Jesus in Others",
      instruction: "Tap each card to learn how we show Jesus' love through the Works of Mercy!",
      items: [
        { icon: "🍽️", name: "Corporal Works of Mercy", desc: "The seven Corporal Works of Mercy care for people's physical needs: feed the hungry, give drink to the thirsty, clothe the naked, shelter the homeless, visit the sick, visit prisoners, bury the dead." },
        { icon: "🧠", name: "Spiritual Works of Mercy", desc: "The seven Spiritual Works of Mercy care for souls: counsel the doubtful, instruct the ignorant, admonish sinners, comfort the sorrowful, forgive offenses, bear wrongs patiently, pray for living and dead." },
        { icon: "👑", name: "Seeing Jesus in Others", desc: "In Matthew 25, Jesus tells us that when we serve 'the least' — the poor, the sick, the prisoner — we are serving Him. Every person carries the image of God (CCC 1716)." },
        { icon: "🌍", name: "Social Justice", desc: "Caring for the poor and vulnerable is not optional for Christians. The Church calls us to work for justice and the common good so that all people can live with dignity." },
      ],
    },

    secondary: "sort",
    sort: {
      title: "Corporal or Spiritual?",
      instruction: "Tap each work of mercy and sort it into the right category.",
      items: [
        { name: "Feed the hungry",         icon: "🍞", group: "Corporal" },
        { name: "Pray for the living and dead", icon: "🙏", group: "Spiritual" },
        { name: "Visit the sick",          icon: "🏥", group: "Corporal" },
        { name: "Comfort the sorrowful",   icon: "🤗", group: "Spiritual" },
        { name: "Clothe the naked",        icon: "👗", group: "Corporal" },
        { name: "Forgive offenses",        icon: "💛", group: "Spiritual" },
        { name: "Shelter the homeless",    icon: "🏠", group: "Corporal" },
      ],
      groups: ["Corporal", "Spiritual"],
      colors: { Corporal: "#D4A843", Spiritual: "#9B6DB8" },
      icons:  { Corporal: "💪", Spiritual: "🕊️" },
    },

    quiz: {
      questions: [
        { q: "Jesus said that when we serve others, we are serving ___.", opts: ["the Church", "our parents", "Jesus Himself", "the saints"], correct: 2 },
        { q: "The Corporal Works of Mercy care for people's ___ needs.", opts: ["spiritual", "physical", "emotional", "educational"], correct: 1 },
        { q: "Which is a Spiritual Work of Mercy?", opts: ["Feed the hungry", "Bury the dead", "Pray for the living and dead", "Clothe the naked"], correct: 2 },
        { q: "How many Corporal Works of Mercy are there?", opts: ["5", "6", "7", "10"], correct: 2 },
        { q: "The Works of Mercy teach us that caring for others is ___.", opts: ["optional", "essential to Christian life", "only for religious", "only for adults"], correct: 1 },
      ],
    },

    prayer: {
      title: "Matthew 25 — The Judgment Prayer",
      lines: [
        { s: "L", t: "Lord, when did we see you hungry or thirsty?" },
        { s: "A", t: "Whatever you did for the least of my brothers and sisters, you did for me." },
        { s: "L", t: "Help us to see your face in every person in need." },
        { s: "A", t: "May we feed the hungry, welcome the stranger, and visit the sick." },
        { s: "L", t: "Help us to be your hands and feet in this world." },
        { s: "A", t: "Lord, teach us to love as you love — no exceptions. Amen." },
      ],
    },
  },

  // ── WEEK 25: REVIEW ───────────────────────────────────
  {
    week: 25,
    title: "Unit 5 Review: Following Jesus",
    pillar: "Review",
    verse: "By this all people will know that you are my disciples, if you have love for one another. — John 13:35",

    discover: {
      title: "Review: Living as Disciples",
      instruction: "Tap each card to review how we follow Jesus in daily life!",
      items: [
        { icon: "⚖️", name: "Virtues & Conscience", desc: "God gave us a conscience to know right from wrong. The cardinal virtues — prudence, justice, fortitude, temperance — help us choose good consistently." },
        { icon: "📋", name: "The Commandments", desc: "The Ten Commandments guide our love of God (1-3) and love of neighbor (4-10). Jesus sums them up: love God and love your neighbor." },
        { icon: "🤲", name: "Works of Mercy", desc: "We serve Jesus by serving others. The Corporal Works meet physical needs; the Spiritual Works care for souls. In each person we serve, we encounter Christ." },
        { icon: "🌱", name: "Growing in Holiness", desc: "Following Jesus is a daily journey — with prayer, the sacraments, trying again after failures, and relying on God's grace, we grow more like Christ." },
      ],
    },

    secondary: "fillblank",
    fillblank: {
      title: "Review — Key Terms",
      instruction: "Fill in the missing word to complete each truth.",
      sentences: [
        { text: "The four cardinal virtues are prudence, justice, fortitude, and ___.", answer: "temperance", options: ["temperance", "kindness", "courage", "wisdom"] },
        { text: "Commandments 1-3 teach us to love ___.", answer: "God", options: ["God", "nature", "neighbors", "ourselves"] },
        { text: "When we serve others, Jesus says we serve ___.", answer: "Him", options: ["Him", "Mary", "the Church", "the poor only"] },
        { text: "Conscience is an inner ___ that guides us to do good.", answer: "voice", options: ["voice", "feeling", "book", "law"] },
      ],
    },

    quiz: {
      questions: [
        { q: "How did Jesus sum up all the commandments?", opts: ["Follow the rules", "Love God and love your neighbor", "Go to Mass and pray", "Obey the Church"], correct: 1 },
        { q: "Which virtue helps us make wise decisions?", opts: ["Fortitude", "Justice", "Prudence", "Temperance"], correct: 2 },
        { q: "The Corporal Works of Mercy care for people's ___ needs.", opts: ["spiritual", "emotional", "physical", "intellectual"], correct: 2 },
        { q: "What is sin?", opts: ["A mistake", "A bad feeling", "Choosing to turn away from God", "Breaking a Church rule only"], correct: 2 },
        { q: "Discipleship means following ___ every day.", opts: ["the Church laws", "Jesus", "the Apostles", "the Commandments only"], correct: 1 },
      ],
    },

    prayer: {
      title: "Our Father — Disciple's Prayer",
      lines: [
        { s: "L", t: "Jesus, you taught us to pray. Let us pray as disciples together." },
        { s: "A", t: "Our Father, who art in heaven, hallowed be thy name." },
        { s: "L", t: "We ask for your kingdom — where love and justice reign." },
        { s: "A", t: "Thy kingdom come, thy will be done, on earth as it is in heaven." },
        { s: "L", t: "Help us to forgive others as you have forgiven us." },
        { s: "A", t: "And forgive us our trespasses, as we forgive those who trespass against us. Amen." },
      ],
    },
  },

  // ── WEEK 26 ──────────────────────────────────────────────
  {
    week: 26,
    title: "Types of Prayer",
    pillar: "Prayer",
    verse: "Pray without ceasing. — 1 Thessalonians 5:17",

    discover: {
      title: "Discover: Different Ways to Pray",
      instruction: "Tap each card to explore the different types of prayer!",
      items: [
        { icon: "🙌", name: "Blessing and Adoration", desc: "We bless God — we acknowledge His greatness and give Him praise just for who He is. Adoration is the first movement of prayer, glorifying God above all things (CCC 2626)." },
        { icon: "🙏", name: "Petition", desc: "We ask God for what we need — forgiveness, help, strength, healing. Jesus encourages us: 'Ask and you shall receive, seek and you shall find, knock and it shall be opened to you.'" },
        { icon: "🤝", name: "Intercession", desc: "We pray on behalf of others — for our family, friends, the sick, the Pope, and even our enemies. Intercessory prayer is a powerful act of love for others." },
        { icon: "🎉", name: "Thanksgiving", desc: "We thank God for all His gifts — life, faith, family, creation. The Eucharist itself means 'thanksgiving.' A grateful heart is always open to God." },
        { icon: "🌟", name: "Praise", desc: "Praise glorifies God not only for what He gives us but for who He is. Songs, psalms, and shouts of joy are all forms of praise. Every being in heaven praises God unceasingly." },
      ],
    },

    secondary: "sort",
    sort: {
      title: "What Type of Prayer Is It?",
      instruction: "Tap a prayer example and sort it to the right type.",
      items: [
        { name: "Glory be to God!",                  icon: "🌟", group: "Praise" },
        { name: "Help me do well on my test.",       icon: "📝", group: "Petition" },
        { name: "Thank you for this food.",          icon: "🍽️", group: "Thanksgiving" },
        { name: "Please heal my sick friend.",       icon: "🏥", group: "Intercession" },
        { name: "Lord, I worship only you.",         icon: "🙌", group: "Adoration" },
        { name: "Bless our whole school.",           icon: "🏫", group: "Intercession" },
        { name: "Thank you for my family.",          icon: "👨‍👩‍👧", group: "Thanksgiving" },
      ],
      groups: ["Adoration", "Thanksgiving", "Petition", "Intercession", "Praise"],
      colors: { Adoration: "#4A90D9", Thanksgiving: "#6DB87B", Petition: "#D4A843", Intercession: "#9B6DB8", Praise: "#D9704A" },
      icons:  { Adoration: "🙌", Thanksgiving: "🎉", Petition: "🙏", Intercession: "🤝", Praise: "🌟" },
    },

    quiz: {
      questions: [
        { q: "Which type of prayer asks God for what we need?", opts: ["Praise", "Intercession", "Petition", "Thanksgiving"], correct: 2 },
        { q: "Praying for others is called ___.", opts: ["petition", "adoration", "intercession", "thanksgiving"], correct: 2 },
        { q: "The Eucharist means 'thanksgiving' in Greek. True or false?", opts: ["False — it means 'sacrifice'", "False — it means 'bread'", "True", "False — it means 'blessing'"], correct: 2 },
        { q: "Adoration acknowledges God's ___.", opts: ["commandments", "greatness and holiness", "gifts to us", "mercy only"], correct: 1 },
        { q: "Jesus said 'Ask and you shall ___.'", opts: ["be tested", "receive", "give", "wait"], correct: 1 },
      ],
    },

    prayer: {
      title: "Five Types of Prayer — Together",
      lines: [
        { s: "L", t: "Adoration: Lord, you are great and worthy of all praise!" },
        { s: "A", t: "We worship you, O God. You alone are holy." },
        { s: "L", t: "Thanksgiving: Thank you for life, faith, family, and creation." },
        { s: "A", t: "We give thanks for every gift, seen and unseen." },
        { s: "L", t: "Petition and Intercession: Lord, hear our needs and the needs of others." },
        { s: "A", t: "Grant us wisdom, strength, and mercy. Hear our prayer. Amen." },
      ],
    },
  },

  // ── WEEK 27 ──────────────────────────────────────────────
  {
    week: 27,
    title: "Praying with Scripture: Lectio Divina",
    pillar: "Prayer",
    verse: "Your word is a lamp to my feet and a light to my path. — Psalm 119:105",

    discover: {
      title: "Discover: Praying with God's Word",
      instruction: "Tap each card to learn how to pray with the Bible!",
      items: [
        { icon: "📖", name: "What Is Lectio Divina?", desc: "Lectio Divina means 'sacred reading.' It is an ancient way of praying with Scripture — not just reading for information, but opening our hearts to hear God speaking to us personally." },
        { icon: "👁️", name: "Step 1: Read (Lectio)", desc: "Read a short passage of Scripture slowly, two or three times. Pay attention to any word or phrase that stands out to you. Don't rush — let the words sink in." },
        { icon: "🤔", name: "Step 2: Reflect (Meditatio)", desc: "Think about the passage. What is God saying to you through this? How does it connect to your life today? Turn the words over in your heart like a treasure." },
        { icon: "💬", name: "Step 3: Respond (Oratio)", desc: "Speak to God from your heart — pray about what you read. Thank Him, ask Him, or just tell Him how you feel. This is a conversation, not a lecture." },
        { icon: "🤫", name: "Step 4: Rest (Contemplatio)", desc: "Simply be still in God's presence. Don't think or say anything — just rest with God. This is the deepest form of prayer: just being loved by God (CCC 2716)." },
      ],
    },

    secondary: "timeline",
    timeline: {
      title: "Lectio Divina — Four Steps!",
      instruction: "Tap two items to swap them into the correct order.",
      items: [
        { id: 1, text: "Lectio — Read the Scripture slowly", order: 1 },
        { id: 2, text: "Meditatio — Reflect on what God is saying", order: 2 },
        { id: 3, text: "Oratio — Respond to God from your heart", order: 3 },
        { id: 4, text: "Contemplatio — Rest in God's presence", order: 4 },
        { id: 5, text: "Return to your day, carrying God's Word with you", order: 5 },
      ],
    },

    quiz: {
      questions: [
        { q: "What does 'Lectio Divina' mean?", opts: ["Holy Scripture", "Sacred reading", "Divine prayer", "God's book"], correct: 1 },
        { q: "The first step of Lectio Divina is to ___.", opts: ["reflect quietly", "read the passage slowly", "respond to God", "rest in silence"], correct: 1 },
        { q: "In Meditatio, we ___.", opts: ["read aloud", "think about what God is saying through the text", "sing a hymn", "recite a memorized prayer"], correct: 1 },
        { q: "The final step, Contemplatio, involves ___.", opts: ["writing notes", "asking questions", "resting silently in God's presence", "reading a second passage"], correct: 2 },
        { q: "God's Word is described in Psalm 119 as a ___ to our path.", opts: ["fire", "lamp", "shield", "bridge"], correct: 1 },
      ],
    },

    prayer: {
      title: "Lectio Divina — John 10:14",
      lines: [
        { s: "L", t: "Listen to the Word of the Lord: 'I am the good shepherd; I know my sheep.'" },
        { s: "A", t: "Let the words sink into your heart... (pause in silence)" },
        { s: "L", t: "What word or phrase speaks to your heart right now?" },
        { s: "A", t: "Jesus knows me. He calls me by name. He loves me." },
        { s: "L", t: "Now speak to Jesus from your heart — in silence or aloud." },
        { s: "A", t: "Lord, I rest in your love. You are my shepherd. Amen." },
      ],
    },
  },

  // ── WEEK 28 ──────────────────────────────────────────────
  {
    week: 28,
    title: "Praying with the Saints",
    pillar: "Prayer",
    verse: "Therefore, since we are surrounded by such a great cloud of witnesses... — Hebrews 12:1",

    discover: {
      title: "Discover: The Church Prays with the Saints",
      instruction: "Tap each card to learn how saints help us pray!",
      items: [
        { icon: "☁️", name: "Cloud of Witnesses", desc: "Hebrews 12:1 says we are surrounded by a 'great cloud of witnesses' — the saints in heaven who cheer us on and intercede for us before God." },
        { icon: "⚡", name: "St. Francis Xavier", desc: "A missionary Jesuit, Francis Xavier brought the Gospel to India, Japan, and Asia. He prayed constantly and urged us to be bold in sharing our faith with others." },
        { icon: "🌹", name: "St. Thérèse of Lisieux", desc: "The 'Little Flower' taught that we can become holy through small, everyday acts of love. She prayed: 'Lord, I want to love you as much as a saint can love you.'" },
        { icon: "🔑", name: "St. Peter", desc: "The leader of the Apostles, Peter denied Jesus three times — then wept and repented. His life shows us that failures do not disqualify us from being used by God." },
        { icon: "📜", name: "St. Paul", desc: "Paul persecuted Christians before encountering the risen Jesus on the road to Damascus. He became the greatest missionary of the early Church and wrote many New Testament letters." },
      ],
    },

    secondary: "sort",
    sort: {
      title: "Match the Saint!",
      instruction: "Tap each clue and match it to the correct saint.",
      items: [
        { name: "The 'Little Way' of small acts",      icon: "🌹", group: "St. Thérèse" },
        { name: "Denied Jesus three times",            icon: "🔑", group: "St. Peter" },
        { name: "Missionary to Japan and India",       icon: "⚡", group: "St. Francis Xavier" },
        { name: "From persecutor to missionary",       icon: "📜", group: "St. Paul" },
        { name: "First leader of the Church",          icon: "⛪", group: "St. Peter" },
        { name: "Wrote letters in the New Testament",  icon: "✍️", group: "St. Paul" },
        { name: "Patron of Missionaries",              icon: "🌍", group: "St. Francis Xavier" },
      ],
      groups: ["St. Thérèse", "St. Peter", "St. Francis Xavier", "St. Paul"],
      colors: { "St. Thérèse": "#9B6DB8", "St. Peter": "#4A90D9", "St. Francis Xavier": "#D9704A", "St. Paul": "#6DB87B" },
      icons:  { "St. Thérèse": "🌹", "St. Peter": "🔑", "St. Francis Xavier": "⚡", "St. Paul": "📜" },
    },

    quiz: {
      questions: [
        { q: "What does Hebrews 12:1 call the saints in heaven?", opts: ["Angels of light", "Cloud of witnesses", "Army of God", "Pillars of faith"], correct: 1 },
        { q: "St. Thérèse of Lisieux is known for teaching ___.", opts: ["The Rosary method", "The Little Way of small acts of love", "Lectio Divina", "Fasting practices"], correct: 1 },
        { q: "St. Paul was converted when he encountered ___.", opts: ["Peter in Jerusalem", "Jesus on the road to Damascus", "An angel in a dream", "Mary in prayer"], correct: 1 },
        { q: "St. Peter denied Jesus ___ times before the crucifixion.", opts: ["Once", "Twice", "Three times", "Seven times"], correct: 2 },
        { q: "When we ask saints to pray for us, they ___.", opts: ["Cannot hear us", "Intercede before God on our behalf", "Replace our own prayers", "Only help sinners"], correct: 1 },
      ],
    },

    prayer: {
      title: "Litany of Saints",
      lines: [
        { s: "L", t: "Lord have mercy. Christ have mercy. Lord have mercy." },
        { s: "A", t: "Lord have mercy. Christ have mercy. Lord have mercy." },
        { s: "L", t: "Holy Mary, Mother of God — St. Peter — St. Paul — St. Thérèse —" },
        { s: "A", t: "Pray for us!" },
        { s: "L", t: "All holy men and women who lived in the love of God —" },
        { s: "A", t: "Pray for us! Help us to follow your example. Amen." },
      ],
    },
  },

  // ── WEEK 29 ──────────────────────────────────────────────
  {
    week: 29,
    title: "Sharing the Faith: We Are Missionaries",
    pillar: "Morality",
    verse: "Go therefore and make disciples of all nations. — Matthew 28:19",

    discover: {
      title: "Discover: Every Disciple Is a Missionary",
      instruction: "Tap each card to see how we share Jesus with others!",
      items: [
        { icon: "📢", name: "The Great Commission", desc: "Jesus' last words before the Ascension were a command: 'Go and make disciples of all nations.' Every baptized Christian shares in this missionary calling." },
        { icon: "💬", name: "Witness by Words", desc: "We share our faith by speaking about it — telling others what Jesus means to us, explaining what we believe, and inviting others to know Him." },
        { icon: "💛", name: "Witness by Actions", desc: "How we live speaks louder than words. Acts of kindness, honesty, mercy, and service show others the love of Jesus — often without saying a word." },
        { icon: "🙏", name: "Praying for Others", desc: "We share our faith by praying for those who do not yet know Jesus. Missionary prayer is a powerful tool — we ask God to draw others to Himself." },
        { icon: "🏠", name: "Starting at Home", desc: "Our first mission field is our own home, school, and neighborhood. Pope Francis said: 'Missionary disciples go out to all, beginning with those who are nearest, on the peripheries.'" },
      ],
    },

    secondary: "fillblank",
    fillblank: {
      title: "Missionary Life",
      instruction: "Fill in the missing word about being a missionary disciple.",
      sentences: [
        { text: "Jesus said: 'Go and make ___ of all nations.'", answer: "disciples", options: ["disciples", "converts", "friends", "helpers"] },
        { text: "We share faith by ___ and by how we live.", answer: "words", options: ["words", "singing", "writing", "traveling"] },
        { text: "Acts of kindness show others the love of ___.", answer: "Jesus", options: ["Jesus", "the saints", "the Church", "the Pope"] },
        { text: "Our first mission field is our own ___, school, and neighborhood.", answer: "home", options: ["home", "parish", "city", "country"] },
      ],
    },

    quiz: {
      questions: [
        { q: "The Great Commission tells us to make disciples of ___.", opts: ["our family only", "our country only", "all nations", "our parish only"], correct: 2 },
        { q: "Which of the following is a way to witness to faith?", opts: ["Keeping faith private only", "Acts of kindness", "Avoiding others", "Reading only"], correct: 1 },
        { q: "Every ___ Christian shares in the missionary calling.", opts: ["ordained", "religious", "baptized", "adult"], correct: 2 },
        { q: "Our first mission field is ___.", opts: ["foreign countries", "our home and neighborhood", "the whole world equally", "only the poor"], correct: 1 },
        { q: "We can also share faith by ___ for those who don't know Jesus.", opts: ["competing", "praying", "arguing", "shouting"], correct: 1 },
      ],
    },

    prayer: {
      title: "Missionary Disciple Prayer",
      lines: [
        { s: "L", t: "Lord Jesus, you said 'Go and make disciples of all nations.'" },
        { s: "A", t: "We say yes — send us! Help us to be your witnesses." },
        { s: "L", t: "Help us to witness by how we speak, act, and treat others." },
        { s: "A", t: "May our lives show others who you are." },
        { s: "L", t: "We begin our mission at home, at school, and in our neighborhood." },
        { s: "A", t: "Lord, use us to bring your love to the world. Amen." },
      ],
    },
  },

  // ── WEEK 30: YEAR IN REVIEW ───────────────────────────
  {
    week: 30,
    title: "Year in Review & Celebration",
    pillar: "Review",
    verse: "For I am convinced that neither death nor life... shall be able to separate us from the love of God in Christ Jesus. — Romans 8:38–39",

    discover: {
      title: "What We Learned About Jesus This Year!",
      instruction: "Tap to remember the great things we discovered in Grade 4!",
      items: [
        { icon: "✝️", name: "Who Is Jesus?", desc: "Jesus is truly God and truly man — the Incarnate Word. Born in Bethlehem, raised in Nazareth, baptized by John, and announced as God's beloved Son." },
        { icon: "🌟", name: "His Life and Ministry", desc: "Jesus called the Twelve, performed miracles, taught in parables, and showed us how to pray. Every action revealed the Kingdom of God." },
        { icon: "🏆", name: "His Death and Resurrection", desc: "Jesus died on the cross for our sins and rose gloriously on the third day. The Resurrection is the foundation of our faith." },
        { icon: "💛", name: "How He Saves Us", desc: "Through the Sacraments of Reconciliation and Anointing, Jesus continues to forgive and heal us. He is the Good Shepherd who never stops seeking us." },
        { icon: "📢", name: "Following Jesus", desc: "We follow Jesus through the virtues, the commandments, the works of mercy, and prayer. We are His missionary disciples, sent to share His love with the world." },
      ],
    },

    secondary: "sort",
    sort: {
      title: "Match the Pillar!",
      instruction: "Sort each topic into the right pillar of Catholic teaching.",
      items: [
        { name: "Incarnation",          icon: "✝️", group: "Creed" },
        { name: "Resurrection",         icon: "🏆", group: "Creed" },
        { name: "Reconciliation",       icon: "🗝️", group: "Sacraments" },
        { name: "Anointing of the Sick", icon: "🩺", group: "Sacraments" },
        { name: "Works of Mercy",       icon: "🤲", group: "Morality" },
        { name: "Lectio Divina",        icon: "📖", group: "Prayer" },
        { name: "The Cardinal Virtues", icon: "⚖️", group: "Morality" },
        { name: "Intercession",         icon: "🙏", group: "Prayer" },
      ],
      groups: ["Creed", "Sacraments", "Morality", "Prayer"],
      colors: { Creed: "#4A90D9", Sacraments: "#D4A843", Morality: "#6DB87B", Prayer: "#9B6DB8" },
      icons:  { Creed: "✝️", Sacraments: "🏛️", Morality: "❤️", Prayer: "🙏" },
    },

    quiz: {
      questions: [
        { q: "The Incarnation means God became ___.", opts: ["an angel", "a saint", "human", "invisible"], correct: 2 },
        { q: "Who did Jesus choose to be His twelve closest companions?", opts: ["The Pharisees", "The Apostles", "The Scribes", "The Disciples at large"], correct: 1 },
        { q: "On what day did Jesus rise from the dead?", opts: ["Day 1", "Day 2", "Day 3", "Day 7"], correct: 2 },
        { q: "Which sacrament forgives our sins?", opts: ["Baptism", "Anointing of the Sick", "Reconciliation", "Eucharist"], correct: 2 },
        { q: "We are all called to be missionary ___ of Jesus.", opts: ["servants", "disciples", "helpers", "students"], correct: 1 },
      ],
    },

    prayer: {
      title: "End-of-Year Prayer — Sent on Mission",
      lines: [
        { s: "L", t: "Lord Jesus, this year we have walked with you from Bethlehem to the Resurrection." },
        { s: "A", t: "Thank you for showing us who you are — true God and true man." },
        { s: "L", t: "You called your disciples by name — and you call us too." },
        { s: "A", t: "Here we are, Lord. Send us to bring your love to the world." },
        { s: "L", t: "May nothing ever separate us from your love." },
        { s: "A", t: "Jesus, we love you. Guide us this summer and always. Amen." },
      ],
    },
  },

]; // end SESSIONS
