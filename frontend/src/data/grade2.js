// GRADE 2 — "God's Love and the Sacraments"
// Catholic Catechist Toolkit
// 30 Sessions | Age 7-8 | All content original, doctrinally accurate (CCC)
// Scripture: Catholic Public Domain Version (CPDV)

export const PILLAR_COLORS = {
  Creed:      "#4A90D9",
  Sacraments: "#D4A843",
  Morality:   "#6DB87B",
  Prayer:     "#9B6DB8",
  Review:     "#C0607A"
};

export const SESSIONS = [

  // ── WEEK 1 ─────────────────────────────────────────────────────────
  {
    week: 1,
    title: "God Made Everything",
    pillar: "Creed",
    verse: "In the beginning, God created heaven and earth. — Genesis 1:1",
    discover: {
      title: "Discover: God the Creator",
      instruction: "Tap each card to learn how God made the world!",
      items: [
        { icon: "🌟", name: "Light and Sky", desc: "On the first days, God made light, the sky, and the seas. He saw that it was good! God made everything with love and care (CCC 295)." },
        { icon: "🌿", name: "Plants and Animals", desc: "God filled the earth with plants, trees, fish, birds, and all kinds of animals. Each one shows His creativity and goodness (CCC 299)." },
        { icon: "👤", name: "People — The Best Part!", desc: "On the sixth day, God made people — and called them 'very good.' We are the only creatures made in God's own image (CCC 355)." },
        { icon: "😴", name: "The Seventh Day", desc: "God rested on the seventh day and blessed it. This is why Sunday is a holy day of rest and worship for us (CCC 345)." },
        { icon: "💛", name: "God Made You!", desc: "God made YOU on purpose, with love. You are not an accident — God wanted you to exist and loves you perfectly (CCC 356)." }
      ]
    },
    secondary: "timeline",
    timeline: {
      title: "Put Creation in Order!",
      instruction: "Tap two items to swap them into the correct order.",
      items: [
        { id: 1, text: "God creates light and sky", order: 1 },
        { id: 2, text: "God fills the sea and sky with creatures", order: 2 },
        { id: 3, text: "God makes land animals", order: 3 },
        { id: 4, text: "God creates people in His image", order: 4 },
        { id: 5, text: "God rests and blesses the seventh day", order: 5 }
      ]
    },
    quiz: {
      questions: [
        { q: "Who made everything in the world?", opts: ["Scientists", "God", "Angels", "The Sun"], correct: 1 },
        { q: "People are made in God's ___.", opts: ["House", "Garden", "Image", "Dream"], correct: 2 },
        { q: "What did God say about everything He made?", opts: ["It was okay", "It was good", "It was hard", "It was small"], correct: 1 },
        { q: "Why did God make you?", opts: ["By accident", "Out of love", "To do chores", "Because He was bored"], correct: 1 },
        { q: "God rested on which day?", opts: ["The first", "The third", "The fifth", "The seventh"], correct: 3 }
      ]
    ,
    bonus: { q: "Who made the sun, moon, and stars?", opts: ["Angels", "God", "People", "Nobody"], correct: 1, reward: "Faith Champion!" }
    },
    prayer: {
      title: "Prayer of Thanks for Creation",
      lines: [
        { s: "L", t: "God our Father, you made everything with love." },
        { s: "A", t: "Thank you for the beautiful world you created!" },
        { s: "L", t: "You made the stars, the oceans, the animals, and us." },
        { s: "A", t: "Help us to take care of your wonderful creation." },
        { s: "L", t: "And help us to remember that you made us and love us." },
        { s: "A", t: "In the name of the Father, and of the Son, and of the Holy Spirit. Amen." }
      ]
    }
  },

  // ── WEEK 2 ─────────────────────────────────────────────────────────
  {
    week: 2,
    title: "God Is Our Father",
    pillar: "Creed",
    verse: "See what love the Father has given us, that we should be called children of God. — 1 John 3:1",
    discover: {
      title: "Discover: God Our Father",
      instruction: "Tap each card to learn about God as our Father!",
      items: [
        { icon: "👨‍👧", name: "Father Means Love", desc: "A good father provides, protects, and loves his children. God is the perfect Father — He loves us more than any earthly parent ever could (CCC 239)." },
        { icon: "🌍", name: "Father of All People", desc: "God is not just the Father of one family or country. He is the Father of every person who has ever lived — everywhere in the world!" },
        { icon: "🛡️", name: "He Protects Us", desc: "God watches over us always. Even when things are hard or scary, God our Father is with us. We are never alone (CCC 301)." },
        { icon: "💌", name: "He Knows Our Name", desc: "God knows everything about you — your name, your feelings, even the number of hairs on your head! He loves you personally (CCC 300)." },
        { icon: "🤲", name: "We Can Talk to Him", desc: "Because God is our Father, we can talk to Him any time in prayer. Prayer is like a conversation with the most loving Father imaginable." }
      ]
    },
    secondary: "fillblank",
    fillblank: {
      title: "God Is Our Father!",
      instruction: "Fill in the missing word about God our Father.",
      sentences: [
        { text: "God loves us ___ than any earthly parent.", answer: "more", options: ["more", "less", "the same", "less often"] },
        { text: "God knows everything about us — He knows our ___.", answer: "name", options: ["name", "address", "school", "grades"] },
        { text: "God is the ___ of all people on earth.", answer: "Father", options: ["Father", "King", "Teacher", "Creator only"] },
        { text: "We can talk to God our Father through ___.", answer: "prayer", options: ["prayer", "texting", "a priest only", "dreams"] }
      ]
    },
    quiz: {
      questions: [
        { q: "God is the ___ of all people.", opts: ["King", "Father", "Teacher", "Neighbor"], correct: 1 },
        { q: "God loves us ___ than any earthly parent.", opts: ["Less", "The same", "More", "Sometimes less"], correct: 2 },
        { q: "God knows ___.", opts: ["Only our grade", "Nothing about us", "Everything about us", "Just our address"], correct: 2 },
        { q: "How can we talk to God our Father?", opts: ["Only in church", "Only with a priest", "Through prayer anywhere", "By writing a letter"], correct: 2 },
        { q: "Are we ever alone when we trust in God?", opts: ["Yes, always", "Only at night", "No, never", "Sometimes"], correct: 2 }
      ]
    ,
    bonus: { q: "God made people in His own ___ and likeness.", opts: ["house", "image", "color", "size"], correct: 1, reward: "Creed Scholar!" }
    },
    prayer: {
      title: "Prayer to God Our Father",
      lines: [
        { s: "L", t: "God, you are our loving Father in heaven." },
        { s: "A", t: "Thank you for knowing us and loving us perfectly." },
        { s: "L", t: "Help us to trust you when things are hard." },
        { s: "A", t: "Remind us that you are always with us." },
        { s: "L", t: "We want to be your children always." },
        { s: "A", t: "In the name of the Father, and of the Son, and of the Holy Spirit. Amen." }
      ]
    }
  },

  // ── WEEK 3 ─────────────────────────────────────────────────────────
  {
    week: 3,
    title: "Jesus: God's Son",
    pillar: "Creed",
    verse: "For God so loved the world that he gave his only-begotten Son. — John 3:16",
    discover: {
      title: "Discover: Who Is Jesus?",
      instruction: "Tap each card to learn about Jesus!",
      items: [
        { icon: "⭐", name: "Born in Bethlehem", desc: "Jesus was born in a stable in Bethlehem. Angels announced His birth to shepherds, and wise men followed a star to find Him (CCC 525)." },
        { icon: "👶", name: "True God and True Man", desc: "Jesus is both fully God and fully human. He has a human body and feelings like us, but He is also the Son of God (CCC 464)." },
        { icon: "🐟", name: "He Did Miracles", desc: "Jesus healed the sick, fed thousands with a little bread and fish, calmed storms, and raised people from the dead — showing God's power and love." },
        { icon: "📖", name: "He Taught About God", desc: "Jesus taught us who God is and how to live. He told stories called parables to help people understand God's love (CCC 561)." },
        { icon: "✝️", name: "He Died and Rose Again", desc: "Jesus died on the cross to save us from sin, and He rose from the dead on Easter Sunday. This is the Good News — the Gospel (CCC 638)!" }
      ]
    },
    secondary: "fillblank",
    fillblank: {
      title: "Fill In the Blanks About Jesus!",
      instruction: "Fill in the missing word about Jesus.",
      sentences: [
        { text: "Jesus was born in ___.", answer: "Bethlehem", options: ["Bethlehem", "Jerusalem", "Nazareth", "Egypt"] },
        { text: "Jesus is true God and true ___.", answer: "man", options: ["man", "angel", "prophet", "king"] },
        { text: "Jesus rose from the dead on ___ Sunday.", answer: "Easter", options: ["Easter", "Christmas", "Advent", "Lent"] },
        { text: "Jesus is God's ___.", answer: "Son", options: ["Son", "servant", "neighbor", "messenger"] }
      ]
    },
    quiz: {
      questions: [
        { q: "Where was Jesus born?", opts: ["Jerusalem", "Bethlehem", "Egypt", "Nazareth"], correct: 1 },
        { q: "Jesus is both God and ___.", opts: ["An angel", "A prophet", "A human", "A spirit"], correct: 2 },
        { q: "Why did God send Jesus?", opts: ["To be a king", "To fight wars", "Because He loves us", "To build a temple"], correct: 2 },
        { q: "What is the Good News about Jesus?", opts: ["He was rich", "He died and rose to save us", "He was a great teacher only", "He defeated Rome"], correct: 1 },
        { q: "Stories Jesus told to teach are called ___.", opts: ["Poems", "Parables", "Psalms", "Prayers"], correct: 1 }
      ]
    ,
    bonus: { q: "How many Persons are in the Holy Trinity?", opts: ["1", "2", "3", "4"], correct: 2, reward: "Believer Extraordinaire!" }
    },
    prayer: {
      title: "Prayer to Jesus",
      lines: [
        { s: "L", t: "Lord Jesus, you are the Son of God and our Savior." },
        { s: "A", t: "Thank you for coming to earth to show us God's love." },
        { s: "L", t: "You healed the sick and taught us how to live." },
        { s: "A", t: "Help us to follow your example every day." },
        { s: "L", t: "Thank you for dying and rising so our sins can be forgiven." },
        { s: "A", t: "Jesus, we love you. Amen." }
      ]
    }
  },

  // ── WEEK 4 ─────────────────────────────────────────────────────────
  {
    week: 4,
    title: "The Holy Spirit",
    pillar: "Creed",
    verse: "The Holy Spirit will come upon you. — Luke 1:35",
    discover: {
      title: "Discover: The Holy Spirit",
      instruction: "Tap each card to learn about the Holy Spirit!",
      items: [
        { icon: "🕊️", name: "A Person, Not a Thing", desc: "The Holy Spirit is the Third Person of the Trinity. He is not a force or a feeling — He is God, fully alive and active in our hearts (CCC 687)." },
        { icon: "🔥", name: "Fire and Wind", desc: "The Holy Spirit appeared as fire and wind at Pentecost, giving the Apostles courage and wisdom to share the Gospel. Fire shows His warmth and power (CCC 696)." },
        { icon: "💪", name: "He Gives Us Strength", desc: "The Holy Spirit helps us to be brave, kind, and holy. When we feel too weak to do what is right, the Spirit gives us the strength we need (CCC 736)." },
        { icon: "🏠", name: "He Lives in Us", desc: "At Baptism, the Holy Spirit came to live in our souls. Our bodies become 'temples of the Holy Spirit' — sacred places where God dwells (CCC 1695)." },
        { icon: "🎁", name: "He Gives Gifts", desc: "The Holy Spirit gives us spiritual gifts: wisdom, understanding, and courage. These gifts help us love God and serve others well (CCC 1830)." }
      ]
    },
    secondary: "timeline",
    timeline: {
      title: "The Holy Spirit Through History",
      instruction: "Tap two items to swap them into the correct order.",
      items: [
        { id: 1, text: "The Spirit hovered over the waters at creation", order: 1 },
        { id: 2, text: "The Spirit descends on Jesus at His Baptism as a dove", order: 2 },
        { id: 3, text: "Jesus promises to send the Holy Spirit", order: 3 },
        { id: 4, text: "The Holy Spirit comes at Pentecost as fire and wind", order: 4 },
        { id: 5, text: "The Holy Spirit comes to us at our Baptism", order: 5 }
      ]
    },
    quiz: {
      questions: [
        { q: "The Holy Spirit is the ___ Person of the Trinity.", opts: ["First", "Second", "Third", "Fourth"], correct: 2 },
        { q: "The Holy Spirit appeared as fire and ___ at Pentecost.", opts: ["Rain", "Wind", "Light", "Snow"], correct: 1 },
        { q: "At Baptism, the Holy Spirit comes to live ___.", opts: ["In a church", "In a book", "In our souls", "In heaven only"], correct: 2 },
        { q: "Which animal is a symbol of the Holy Spirit?", opts: ["Eagle", "Lamb", "Dove", "Fish"], correct: 2 },
        { q: "The Holy Spirit gives us ___ to do what is right.", opts: ["Money", "Strength", "Friends", "Rules"], correct: 1 }
      ]
    ,
    bonus: { q: "Name the three Persons of the Trinity.", opts: ["Father, Son, Holy Spirit", "Father, Mother, Son", "God, Mary, Jesus", "Father, Son, Angels"], correct: 0, reward: "Doctrine Star!" }
    },
    prayer: {
      title: "Come, Holy Spirit",
      lines: [
        { s: "L", t: "Come, Holy Spirit, fill our hearts with Your love." },
        { s: "A", t: "Give us wisdom and courage to do what is right." },
        { s: "L", t: "You live in us since the day of our Baptism." },
        { s: "A", t: "Help us to be temples worthy of Your presence." },
        { s: "L", t: "Send us Your gifts so we can serve God and others." },
        { s: "A", t: "Come, Holy Spirit. Amen." }
      ]
    }
  },

  // ── WEEK 5 ─────────────────────────────────────────────────────────
  {
    week: 5,
    title: "Unit 1 Review: God and the Trinity",
    pillar: "Review",
    verse: "Go therefore and make disciples of all nations, baptizing them in the name of the Father and of the Son and of the Holy Spirit. — Matthew 28:19",
    discover: {
      title: "Review: God and the Trinity",
      instruction: "Tap each card to review what we learned!",
      items: [
        { icon: "🌟", name: "God Created Everything", desc: "God made the world and everything in it. People are made in His image and are special to Him (Genesis 1)." },
        { icon: "👨‍👧", name: "God Is Our Father", desc: "God loves us perfectly as a Father. He knows us by name and is always with us (CCC 239)." },
        { icon: "✝️", name: "Jesus Is God's Son", desc: "Jesus is true God and true man. He died and rose to save us — that is the Good News (CCC 464, 638)." },
        { icon: "🕊️", name: "The Holy Spirit", desc: "The Holy Spirit is the Third Person of the Trinity. He gives us strength and lives in us since Baptism (CCC 687)." }
      ]
    },
    secondary: "sort",
    sort: {
      title: "Who Am I? God the Father, Son, or Spirit?",
      instruction: "Tap each description, then tap the correct Person of the Trinity.",
      items: [
        { name: "Made all creation", icon: "🌍", group: "Father" },
        { name: "Born in Bethlehem", icon: "⭐", group: "Son" },
        { name: "Came at Pentecost as fire", icon: "🔥", group: "Holy Spirit" },
        { name: "Loves us as a Father", icon: "💛", group: "Father" },
        { name: "Died and rose for us", icon: "✝️", group: "Son" },
        { name: "Lives in our souls", icon: "🏠", group: "Holy Spirit" },
        { name: "Appeared as a dove", icon: "🕊️", group: "Holy Spirit" }
      ],
      groups: ["Father", "Son", "Holy Spirit"],
      colors: { Father: "#4A90D9", Son: "#D4A843", "Holy Spirit": "#9B6DB8" },
      icons: { Father: "👨‍👧", Son: "✝️", "Holy Spirit": "🕊️" }
    },
    quiz: {
      questions: [
        { q: "How many Persons are in the Trinity?", opts: ["1", "2", "3", "4"], correct: 2 },
        { q: "Who made the world?", opts: ["Angels", "People", "God", "No one"], correct: 2 },
        { q: "Jesus is true God and true ___.", opts: ["Angel", "Prophet", "Man", "Spirit"], correct: 2 },
        { q: "The Holy Spirit first came to the Apostles at ___.", opts: ["Christmas", "Easter", "Pentecost", "Lent"], correct: 2 },
        { q: "People are made in God's ___.", opts: ["House", "Image", "Garden", "Story"], correct: 1 }
      ]
    ,
    bonus: { q: "Who made the sun, moon, and stars?", opts: ["Angels", "God", "People", "Nobody"], correct: 1, reward: "Super Scholar!" }
    },
    prayer: {
      title: "Glory Be — The Trinity Prayer",
      lines: [
        { s: "L", t: "Let us praise the Holy Trinity together." },
        { s: "A", t: "Glory be to the Father, and to the Son, and to the Holy Spirit." },
        { s: "L", t: "As it was in the beginning, is now, and ever shall be." },
        { s: "A", t: "World without end. Amen." },
        { s: "L", t: "God is Father, Son, and Holy Spirit — Three Persons, One God." },
        { s: "A", t: "We praise you, Holy Trinity, now and forever. Amen." }
      ]
    }
  },

  // ── WEEK 6 ─────────────────────────────────────────────────────────
  {
    week: 6,
    title: "Original Sin and God's Promise",
    pillar: "Creed",
    verse: "I will put enmity between you and the woman, and between your seed and her seed. — Genesis 3:15",
    discover: {
      title: "Discover: The Fall and the Promise",
      instruction: "Tap each card to learn what happened and what God promised!",
      items: [
        { icon: "🌺", name: "The Garden of Eden", desc: "God placed Adam and Eve in a beautiful garden. They were friends with God, happy, and free from suffering. Everything was perfect (CCC 374)." },
        { icon: "🍎", name: "The First Sin", desc: "Adam and Eve disobeyed God by eating the forbidden fruit. This first sin broke their friendship with God and is called Original Sin (CCC 397)." },
        { icon: "😢", name: "What Sin Brought", desc: "Because of Original Sin, suffering, sickness, and death entered the world. It also makes it harder for us to choose good over evil (CCC 400)." },
        { icon: "🌈", name: "God's Promise", desc: "Even after the sin, God did not abandon us. He promised to send a Savior — someone who would repair the friendship between God and people (CCC 410)." },
        { icon: "✝️", name: "Jesus Is the Answer", desc: "Jesus is the fulfillment of God's promise! He is called the 'new Adam' because He repaired what the first Adam broke (CCC 411)." }
      ]
    },
    secondary: "timeline",
    timeline: {
      title: "The Story of the Fall",
      instruction: "Tap two items to swap them into the correct order.",
      items: [
        { id: 1, text: "God creates Adam and Eve in Eden", order: 1 },
        { id: 2, text: "Adam and Eve disobey God", order: 2 },
        { id: 3, text: "Sin enters the world", order: 3 },
        { id: 4, text: "God promises a Savior", order: 4 },
        { id: 5, text: "Jesus comes to save us", order: 5 }
      ]
    },
    quiz: {
      questions: [
        { q: "The first sin of Adam and Eve is called ___ Sin.", opts: ["Terrible", "Original", "Ancient", "Garden"], correct: 1 },
        { q: "What did Original Sin break?", opts: ["The garden", "The stars", "Our friendship with God", "The animals"], correct: 2 },
        { q: "What did God promise after the sin?", opts: ["A new garden", "A Savior", "More food", "Angels as helpers"], correct: 1 },
        { q: "Jesus is called the 'new ___.'", opts: ["Moses", "David", "Adam", "Noah"], correct: 2 },
        { q: "Original sin makes it harder for us to choose ___.", opts: ["Good over evil", "Friends", "What to eat", "A career"], correct: 0 }
      ]
    ,
    bonus: { q: "What is the Bible?", opts: ["A storybook", "God's Word", "A dictionary", "A history textbook"], correct: 1, reward: "Faith Explorer!" }
    },
    prayer: {
      title: "Prayer for God's Help",
      lines: [
        { s: "L", t: "Lord, we know that sin makes it hard to choose what is good." },
        { s: "A", t: "Help us to choose you every day." },
        { s: "L", t: "Thank you for keeping your promise and sending Jesus to save us." },
        { s: "A", t: "We are grateful that you never gave up on us." },
        { s: "L", t: "Help us to grow stronger in choosing love over selfishness." },
        { s: "A", t: "In the name of the Father, and of the Son, and of the Holy Spirit. Amen." }
      ]
    }
  },

  // ── WEEK 7 ─────────────────────────────────────────────────────────
  {
    week: 7,
    title: "What Is a Sacrament?",
    pillar: "Sacraments",
    verse: "Jesus breathed on them and said: Receive the Holy Spirit. — John 20:22",
    discover: {
      title: "Discover: Sacraments!",
      instruction: "Tap each card to learn what a sacrament is!",
      items: [
        { icon: "🎁", name: "God's Special Gifts", desc: "A sacrament is a special sign given to us by Jesus that actually gives us God's grace. There are 7 sacraments in all (CCC 1131)." },
        { icon: "👀", name: "Signs We Can See", desc: "Every sacrament uses things we can see and touch — water, oil, bread, wine. These visible signs give us invisible grace (CCC 1084)." },
        { icon: "✋", name: "Jesus Gave Them", desc: "Jesus Himself gave us the sacraments. He did not just teach about them — He performed them and told His Apostles to continue them (CCC 1114)." },
        { icon: "🌊", name: "Grace Flows Through Them", desc: "Grace is God's own life and love shared with us. The sacraments are the main way God pours His grace into our souls (CCC 1131)." },
        { icon: "🔢", name: "Seven Sacraments", desc: "There are exactly 7 sacraments: Baptism, Confirmation, Eucharist, Reconciliation, Anointing of the Sick, Holy Orders, and Matrimony (CCC 1210)." }
      ]
    },
    secondary: "fillblank",
    fillblank: {
      title: "What Is a Sacrament?",
      instruction: "Fill in the missing word about sacraments.",
      sentences: [
        { text: "A sacrament gives us God's ___.", answer: "grace", options: ["grace", "money", "food", "rules"] },
        { text: "Jesus gave us ___ sacraments.", answer: "seven", options: ["seven", "three", "ten", "five"] },
        { text: "Sacraments use signs we can ___.", answer: "see", options: ["see", "dream", "invent", "imagine"] },
        { text: "The sacraments were given to us by ___.", answer: "Jesus", options: ["Jesus", "Moses", "Peter", "the Pope"] }
      ]
    },
    quiz: {
      questions: [
        { q: "How many sacraments are there?", opts: ["3", "5", "7", "10"], correct: 2 },
        { q: "Who gave us the sacraments?", opts: ["The Pope", "Moses", "Jesus", "Angels"], correct: 2 },
        { q: "What do sacraments give us?", opts: ["Grace", "Money", "Rules", "Friends"], correct: 0 },
        { q: "Sacraments use signs we can ___.", opts: ["Dream", "See and touch", "Invent", "Imagine"], correct: 1 },
        { q: "Which is NOT a sacrament?", opts: ["Baptism", "Eucharist", "Prayer", "Matrimony"], correct: 2 }
      ]
    ,
    bonus: { q: "What is poured on a person during Baptism?", opts: ["Oil", "Milk", "Water", "Juice"], correct: 2, reward: "Sacrament Star!" }
    },
    prayer: {
      title: "Thank You for the Sacraments",
      lines: [
        { s: "L", t: "Lord Jesus, you gave us seven sacraments as gifts of love." },
        { s: "A", t: "Thank you for making a way to be close to us." },
        { s: "L", t: "Through the sacraments, you pour your grace into our souls." },
        { s: "A", t: "Help us to receive them with grateful and open hearts." },
        { s: "L", t: "May the sacraments make us holy and bring us closer to you." },
        { s: "A", t: "In the name of the Father, and of the Son, and of the Holy Spirit. Amen." }
      ]
    }
  },

  // ── WEEK 8 ─────────────────────────────────────────────────────────
  {
    week: 8,
    title: "Baptism: Welcome to the Family!",
    pillar: "Sacraments",
    verse: "Unless one is born of water and the Spirit, he cannot enter the kingdom of God. — John 3:5",
    discover: {
      title: "Discover: Baptism!",
      instruction: "Tap each card to learn about the first sacrament!",
      items: [
        { icon: "💧", name: "Water Is Poured", desc: "In Baptism, water is poured three times while the priest says, 'I baptize you in the name of the Father, and of the Son, and of the Holy Spirit' (CCC 1239)." },
        { icon: "👼", name: "We Become God's Children", desc: "Baptism makes us children of God and members of His Church. Original sin is washed away and we receive new life (CCC 1213)." },
        { icon: "🕯️", name: "The Baptismal Candle", desc: "A candle is lit from the Easter candle. It means we have received the light of Christ and are called to share that light with others (CCC 1243)." },
        { icon: "🤍", name: "The White Garment", desc: "A white garment is placed on the newly baptized. It shows they have been made clean and have 'put on Christ' — a brand new beginning (CCC 1243)." },
        { icon: "👨‍👩‍👧", name: "Godparents", desc: "Godparents make a special promise to help the baptized person grow in faith. They are like spiritual parents chosen with love (CCC 1255)." }
      ]
    },
    secondary: "sort",
    sort: {
      title: "What Happens at Baptism?",
      instruction: "Sort each item: Does it happen AT Baptism or AFTER Baptism?",
      items: [
        { name: "Water poured three times", icon: "💧", group: "At Baptism" },
        { name: "Candle is lit", icon: "🕯️", group: "At Baptism" },
        { name: "White garment given", icon: "🤍", group: "At Baptism" },
        { name: "Original sin washed away", icon: "✨", group: "At Baptism" },
        { name: "Go to Sunday Mass", icon: "⛪", group: "After Baptism" },
        { name: "Receive First Communion", icon: "🍞", group: "After Baptism" },
        { name: "Learn about Jesus", icon: "📖", group: "After Baptism" }
      ],
      groups: ["At Baptism", "After Baptism"],
      colors: { "At Baptism": "#4A90D9", "After Baptism": "#6DB87B" },
      icons: { "At Baptism": "💧", "After Baptism": "➡️" }
    },
    quiz: {
      questions: [
        { q: "How many times is water poured in Baptism?", opts: ["1", "2", "3", "7"], correct: 2 },
        { q: "What does Baptism wash away?", opts: ["Dirt", "Original sin", "Sadness", "Germs"], correct: 1 },
        { q: "The white garment means we have 'put on ___.'", opts: ["A costume", "Armor", "Christ", "An angel"], correct: 2 },
        { q: "Godparents promise to help us grow in ___.", opts: ["School", "Sports", "Faith", "Cooking"], correct: 2 },
        { q: "Baptism makes us ___ of God.", opts: ["Students", "Servants", "Children", "Neighbors"], correct: 2 }
      ]
    ,
    bonus: { q: "How many sacraments are there?", opts: ["3", "5", "7", "10"], correct: 2, reward: "Grace Expert!" }
    },
    prayer: {
      title: "Baptism Renewal Prayer",
      lines: [
        { s: "L", t: "On the day of your Baptism, you became a child of God." },
        { s: "A", t: "Thank you, Lord, for welcoming us into your family!" },
        { s: "L", t: "The water washed away sin and gave us new life." },
        { s: "A", t: "Help us to live as children of the light." },
        { s: "L", t: "May we carry the flame of faith we received at Baptism." },
        { s: "A", t: "In the name of the Father, and of the Son, and of the Holy Spirit. Amen." }
      ]
    }
  },

  // ── WEEK 9 ─────────────────────────────────────────────────────────
  {
    week: 9,
    title: "Reconciliation: God Forgives Us",
    pillar: "Sacraments",
    verse: "Whose sins you shall forgive, they are forgiven them. — John 20:23",
    discover: {
      title: "Discover: The Sacrament of Reconciliation",
      instruction: "Tap each card to learn how God forgives us!",
      items: [
        { icon: "💔", name: "When We Sin", desc: "When we choose to do something wrong on purpose — like lying, being mean, or disobeying — we commit a sin. Sin hurts our friendship with God (CCC 1849)." },
        { icon: "🙏", name: "God Always Forgives", desc: "God's love is so big that He always wants to forgive us. The story of the Prodigal Son shows us how happy God is when we come back to Him (CCC 1439)." },
        { icon: "👂", name: "We Tell the Priest", desc: "In Reconciliation, we confess our sins to a priest. The priest acts in the place of Jesus — he keeps our confession completely secret (CCC 1467)." },
        { icon: "✅", name: "We Receive Absolution", desc: "After we confess and say we are sorry, the priest gives absolution — the words that grant God's forgiveness. Our sins are truly gone (CCC 1449)." },
        { icon: "🤝", name: "We Are Friends Again!", desc: "After Reconciliation, we are fully restored in our friendship with God. We leave lighter, happier, and with God's grace renewed in us (CCC 1468)." }
      ]
    },
    secondary: "timeline",
    timeline: {
      title: "Steps in Reconciliation",
      instruction: "Tap two items to swap them into the correct order.",
      items: [
        { id: 1, text: "Examine your conscience — think about your sins", order: 1 },
        { id: 2, text: "Feel truly sorry for your sins", order: 2 },
        { id: 3, text: "Confess your sins to the priest", order: 3 },
        { id: 4, text: "Receive absolution from the priest", order: 4 },
        { id: 5, text: "Do your penance and thank God", order: 5 }
      ]
    },
    quiz: {
      questions: [
        { q: "What is a sin?", opts: ["A mistake", "Choosing wrong on purpose", "Forgetting something", "Being sad"], correct: 1 },
        { q: "In Reconciliation, we confess to a ___.", opts: ["Teacher", "Friend", "Priest", "Parent"], correct: 2 },
        { q: "What is absolution?", opts: ["A prayer", "The priest's words of forgiveness", "A punishment", "A song"], correct: 1 },
        { q: "Is the priest allowed to tell our confession to others?", opts: ["Yes, to parents", "Yes, to the bishop", "No, never", "Yes, sometimes"], correct: 2 },
        { q: "After Reconciliation our friendship with God is ___.", opts: ["Broken", "The same", "Restored", "Lost"], correct: 2 }
      ]
    ,
    bonus: { q: "Baptism makes us part of God's ___.", opts: ["school", "team", "family", "army"], correct: 2, reward: "Liturgy Whiz!" }
    },
    prayer: {
      title: "Act of Contrition",
      lines: [
        { s: "L", t: "Let us tell God we are truly sorry for our sins." },
        { s: "A", t: "O my God, I am heartily sorry for having offended you." },
        { s: "L", t: "We are sorry because sin hurts our friendship with you." },
        { s: "A", t: "I firmly resolve, with the help of your grace, to sin no more." },
        { s: "L", t: "Thank you, Lord, for always being ready to forgive us." },
        { s: "A", t: "Help us to start fresh and love you more each day. Amen." }
      ]
    }
  },

  // ── WEEK 10 ─────────────────────────────────────────────────────────
  {
    week: 10,
    title: "Unit Review: God, Sacraments & Church",
    pillar: "Review",
    verse: "I came that they may have life, and have it abundantly. — John 10:10",
    discover: {
      title: "Review: Weeks 6-9",
      instruction: "Tap each card to review what we learned!",
      items: [
        { icon: "⚠️", name: "Original Sin & God's Promise", desc: "Adam and Eve sinned and broke friendship with God. But God promised a Savior — and Jesus is the fulfillment of that promise (CCC 410)." },
        { icon: "🎁", name: "The 7 Sacraments", desc: "Jesus gave us 7 sacraments — visible signs that give us invisible grace. They are Baptism, Confirmation, Eucharist, Reconciliation, Anointing, Holy Orders, and Matrimony (CCC 1210)." },
        { icon: "💧", name: "Baptism", desc: "Baptism uses water poured three times. It washes away Original Sin, makes us God's children, and welcomes us into the Church with the white garment and candle (CCC 1213)." },
        { icon: "🙏", name: "Reconciliation", desc: "In Reconciliation we confess our sins to a priest, receive absolution, and our friendship with God is fully restored. God is always ready to forgive (CCC 1468)." }
      ]
    },
    secondary: "timeline",
    timeline: {
      title: "The Story of Salvation So Far!",
      instruction: "Tap two items to swap them into the correct order.",
      items: [
        { id: 1, text: "God creates Adam and Eve in friendship with Him", order: 1 },
        { id: 2, text: "Original Sin breaks that friendship", order: 2 },
        { id: 3, text: "God promises to send a Savior", order: 3 },
        { id: 4, text: "Jesus comes and gives us the sacraments", order: 4 },
        { id: 5, text: "We receive Baptism and become God's children", order: 5 }
      ]
    },
    quiz: {
      questions: [
        { q: "What broke the friendship between people and God?", opts: ["A flood", "Original Sin", "A war", "Forgetting to pray"], correct: 1 },
        { q: "How many sacraments did Jesus give us?", opts: ["3", "5", "7", "10"], correct: 2 },
        { q: "What is washed away in Baptism?", opts: ["Germs", "Sadness", "Original Sin", "Bad habits"], correct: 2 },
        { q: "In Reconciliation, the priest gives us ___.", opts: ["Penance only", "Advice", "Absolution — God's forgiveness", "A blessing"], correct: 2 },
        { q: "God's promise of a Savior was fulfilled by ___.", opts: ["Moses", "David", "Elijah", "Jesus"], correct: 3 }
      ]
    ,
    bonus: { q: "God made people in His own ___ and likeness.", opts: ["house", "image", "color", "size"], correct: 1, reward: "Review Champion!" }
    },
    prayer: {
      title: "Glory Be",
      lines: [
        { s: "L", t: "Let us give praise to the Holy Trinity." },
        { s: "A", t: "Glory be to the Father, and to the Son, and to the Holy Spirit." },
        { s: "L", t: "As it was in the beginning, is now, and ever shall be." },
        { s: "A", t: "World without end. Amen." },
        { s: "L", t: "Thank you, God, for Original Sin conquered and sins forgiven." },
        { s: "A", t: "Help us to live always in your grace and love. Amen." }
      ]
    }
  },

  // ── WEEK 11 ─────────────────────────────────────────────────────────
  {
    week: 11,
    title: "Getting Ready for First Communion",
    pillar: "Sacraments",
    verse: "Whoever eats my flesh and drinks my blood abides in me, and I in him. — John 6:56",
    discover: {
      title: "Discover: Preparing for First Communion",
      instruction: "Tap each card to learn how to prepare!",
      items: [
        { icon: "🔍", name: "Examine Your Conscience", desc: "Before receiving Jesus, we think about how we have acted. Did we love God and others? Did we do anything wrong? This is called examining your conscience." },
        { icon: "🙁", name: "Go to Reconciliation", desc: "If we have sinned seriously, we must go to Confession first. We must be in a state of grace — our friendship with God must be whole (CCC 1385)." },
        { icon: "⏱️", name: "The Communion Fast", desc: "We do not eat food or drink anything (except water or medicine) for one hour before receiving Communion. This helps us prepare our hearts (CCC 1387)." },
        { icon: "🚶", name: "Walking Up Reverently", desc: "We walk up to receive Communion with hands folded or arms crossed. We receive with respect and say 'Amen' to show we believe Jesus is present." },
        { icon: "💬", name: "Prayer Afterward", desc: "After receiving Communion, we return to our pew to pray quietly. We thank Jesus for coming to us and ask Him to help us throughout the day." }
      ]
    },
    secondary: "timeline",
    timeline: {
      title: "Steps to Receive Communion Well",
      instruction: "Tap two items to swap them into the correct order.",
      items: [
        { id: 1, text: "Examine your conscience", order: 1 },
        { id: 2, text: "Go to Reconciliation if needed", order: 2 },
        { id: 3, text: "Fast for one hour", order: 3 },
        { id: 4, text: "Receive with reverence and say Amen", order: 4 },
        { id: 5, text: "Pray quietly afterward", order: 5 }
      ]
    },
    quiz: {
      questions: [
        { q: "Before Communion, we must be in a state of ___.", opts: ["Mind", "Grace", "Health", "Joy"], correct: 1 },
        { q: "How long do we fast before Communion?", opts: ["30 minutes", "One hour", "All day", "Three hours"], correct: 1 },
        { q: "What do we say when we receive Communion?", opts: ["Thank you", "Amen", "Alleluia", "Hosanna"], correct: 1 },
        { q: "What should we do right after receiving Communion?", opts: ["Leave church", "Eat a snack", "Pray quietly", "Talk to friends"], correct: 2 },
        { q: "What does 'Amen' mean when we receive Communion?", opts: ["Hello", "Goodbye", "I believe", "Thank you"], correct: 2 }
      ]
    ,
    bonus: { q: "What does the white garment at Baptism show?", opts: ["Being cold", "Being made new in Christ", "Being dressed up", "Being old"], correct: 1, reward: "Sacrament Scholar!" }
    },
    prayer: {
      title: "Prayer After Receiving Communion",
      lines: [
        { s: "L", t: "Jesus, you have come to live in my heart." },
        { s: "A", t: "Thank you for loving me enough to be this close to me." },
        { s: "L", t: "Stay with me throughout this day and guide my steps." },
        { s: "A", t: "Help me to be kind, honest, and loving to everyone I meet." },
        { s: "L", t: "I want to be close to you always, Jesus." },
        { s: "A", t: "Thank you, Lord Jesus. I love you. Amen." }
      ]
    }
  },

  // ── WEEK 12 ─────────────────────────────────────────────────────────
  {
    week: 12,
    title: "The Mass: Our Great Prayer",
    pillar: "Sacraments",
    verse: "Do this in memory of me. — Luke 22:19",
    discover: {
      title: "Discover: The Parts of the Mass",
      instruction: "Tap each card to learn about the Mass!",
      items: [
        { icon: "✝️", name: "Introductory Rites", desc: "The Mass begins with the Sign of the Cross, a greeting, and the Gloria. We ask God to have mercy on us and prepare our hearts to worship (CCC 1348)." },
        { icon: "📖", name: "Liturgy of the Word", desc: "We hear readings from the Bible — the Old Testament, a Psalm, the New Testament, and the Gospel. Then the priest gives a homily to explain (CCC 1349)." },
        { icon: "🍞", name: "Liturgy of the Eucharist", desc: "This is the heart of the Mass. The priest offers bread and wine, and they become the Body and Blood of Jesus at the consecration (CCC 1350)." },
        { icon: "🚀", name: "Concluding Rites", desc: "The Mass ends with the priest's blessing and 'Go forth.' We are sent out to love and serve God and others in the world (CCC 1332)." }
      ]
    },
    secondary: "sort",
    sort: {
      title: "Which Part of the Mass?",
      instruction: "Tap an item, then tap the correct part of the Mass.",
      items: [
        { name: "Sign of the Cross", icon: "✝️", group: "Introductory Rites" },
        { name: "Gospel reading", icon: "📖", group: "Liturgy of the Word" },
        { name: "Consecration of bread and wine", icon: "🍞", group: "Liturgy of the Eucharist" },
        { name: "Receiving Communion", icon: "🙏", group: "Liturgy of the Eucharist" },
        { name: "The Homily", icon: "🎤", group: "Liturgy of the Word" },
        { name: "Final Blessing", icon: "✋", group: "Concluding Rites" },
        { name: "Gloria", icon: "🎵", group: "Introductory Rites" }
      ],
      groups: ["Introductory Rites", "Liturgy of the Word", "Liturgy of the Eucharist", "Concluding Rites"],
      colors: { "Introductory Rites": "#9B6DB8", "Liturgy of the Word": "#4A90D9", "Liturgy of the Eucharist": "#D4A843", "Concluding Rites": "#6DB87B" },
      icons: { "Introductory Rites": "✝️", "Liturgy of the Word": "📖", "Liturgy of the Eucharist": "🍞", "Concluding Rites": "🚀" }
    },
    quiz: {
      questions: [
        { q: "How many main parts does the Mass have?", opts: ["2", "3", "4", "5"], correct: 2 },
        { q: "The homily is part of the Liturgy of the ___.", opts: ["Eucharist", "Word", "Gathering", "Prayer"], correct: 1 },
        { q: "When does bread and wine become Jesus' Body and Blood?", opts: ["At the start of Mass", "During the consecration", "At Communion", "At the Gloria"], correct: 1 },
        { q: "The Mass ends by ___ us to serve others.", opts: ["Warning", "Sending", "Stopping", "Asking"], correct: 1 },
        { q: "Jesus told us to celebrate the Mass 'in ___ of me.'", opts: ["Honor", "Memory", "Praise", "Celebration"], correct: 1 }
      ]
    ,
    bonus: { q: "In the sacrament of Reconciliation, God ___ our sins.", opts: ["remembers", "ignores", "forgives", "writes down"], correct: 2, reward: "Grace Champion!" }
    },
    prayer: {
      title: "Prayer Before Mass",
      lines: [
        { s: "L", t: "Lord, we are about to celebrate the Mass — your greatest gift." },
        { s: "A", t: "Open our ears to hear your Word in the readings." },
        { s: "L", t: "Open our hearts to receive you in Holy Communion." },
        { s: "A", t: "Help us to pay attention and to worship you with our whole hearts." },
        { s: "L", t: "And when we go forth, may we bring your love to the world." },
        { s: "A", t: "In the name of the Father, and of the Son, and of the Holy Spirit. Amen." }
      ]
    }
  },

  // ── WEEK 13 ─────────────────────────────────────────────────────────
  {
    week: 13,
    title: "The Liturgical Year",
    pillar: "Sacraments",
    verse: "This is the day the Lord has made; let us exult and rejoice in it. — Psalm 118:24",
    discover: {
      title: "Discover: God's Calendar",
      instruction: "Tap each season to learn about the Church's year!",
      items: [
        { icon: "🕯️", name: "Advent — Waiting", desc: "Advent lasts four weeks before Christmas. We wait and prepare for Jesus' coming — both His birth and His return at the end of time. Color: purple (CCC 1095)." },
        { icon: "⭐", name: "Christmas — Joy!", desc: "Christmas celebrates Jesus' birth in Bethlehem. The season continues until the Baptism of the Lord. Color: white and gold." },
        { icon: "🌿", name: "Lent — Growing", desc: "Lent lasts 40 days before Easter. We fast, pray, and give to help us grow closer to God and prepare to celebrate Jesus' resurrection. Color: purple." },
        { icon: "🌸", name: "Easter — Alleluia!", desc: "Easter is the greatest feast — Jesus is risen! The Easter season lasts 50 days. Color: white and gold. Every Sunday is a mini-Easter (CCC 1168)." },
        { icon: "🌳", name: "Ordinary Time — Growing", desc: "Ordinary Time is the longest season. We grow in faith, learn from Jesus, and live out the Gospel in our daily lives. Color: green." }
      ]
    },
    secondary: "fillblank",
    fillblank: {
      title: "The Liturgical Seasons!",
      instruction: "Fill in the missing word about each season.",
      sentences: [
        { text: "Advent is ___ weeks of waiting for Christmas.", answer: "four", options: ["four", "seven", "forty", "two"] },
        { text: "The greatest feast of the Church's year is ___.", answer: "Easter", options: ["Easter", "Christmas", "Pentecost", "Advent"] },
        { text: "Lent lasts ___ days.", answer: "forty", options: ["forty", "seven", "thirty", "fifty"] },
        { text: "The color for Ordinary Time is ___.", answer: "green", options: ["green", "purple", "red", "white"] }
      ]
    },
    quiz: {
      questions: [
        { q: "What color is Advent?", opts: ["Green", "White", "Red", "Purple"], correct: 3 },
        { q: "Easter lasts ___ days.", opts: ["7", "40", "50", "30"], correct: 2 },
        { q: "What is the GREATEST feast of the year?", opts: ["Christmas", "Easter", "Pentecost", "Advent"], correct: 1 },
        { q: "What color is Ordinary Time?", opts: ["Green", "Purple", "White", "Red"], correct: 0 },
        { q: "Lent prepares us for ___.", opts: ["Christmas", "Advent", "Easter", "Pentecost"], correct: 2 }
      ]
    ,
    bonus: { q: "Before Confession, we should examine our ___.", opts: ["homework", "closet", "conscience", "wallet"], correct: 2, reward: "Sacrament Star!" }
    },
    prayer: {
      title: "Prayer Through the Seasons",
      lines: [
        { s: "L", t: "Lord, your Church gives us seasons to grow in faith all year." },
        { s: "A", t: "In Advent, help us to wait for you with hope." },
        { s: "L", t: "In Lent, help us to pray, fast, and give to others." },
        { s: "A", t: "At Easter, fill our hearts with your risen joy." },
        { s: "L", t: "In every season, may we walk closer to you." },
        { s: "A", t: "In the name of the Father, and of the Son, and of the Holy Spirit. Amen." }
      ]
    }
  },

  // ── WEEK 14 ─────────────────────────────────────────────────────────
  {
    week: 14,
    title: "Right and Wrong: God's Law",
    pillar: "Morality",
    verse: "I am the Lord your God. You shall not have strange gods before me. — Exodus 20:2-3",
    discover: {
      title: "Discover: Right and Wrong",
      instruction: "Tap each card to learn about God's Law!",
      items: [
        { icon: "⚖️", name: "God Gives Us a Moral Law", desc: "God gave us laws to help us live well and love rightly. Just like traffic laws keep us safe, God's moral law helps us flourish and be happy (CCC 1950)." },
        { icon: "❤️", name: "Love Is the Root", desc: "All of God's laws come from love. Jesus said all laws hang on two: love God and love your neighbor. Love is always the reason behind every rule (CCC 2055)." },
        { icon: "🧠", name: "Our Conscience", desc: "God gave us a conscience — an inner voice that helps us judge right from wrong. We must listen to it and keep it trained by learning our faith (CCC 1778)." },
        { icon: "🚦", name: "Choosing Good or Evil", desc: "Every day we make choices. God gave us free will — we can choose good or evil. He calls us to choose good, but He never forces us (CCC 1731)." },
        { icon: "🙌", name: "Virtue Helps Us", desc: "A virtue is a good habit. When we practice kindness, honesty, or patience regularly, it becomes easier to choose good. Virtue makes us strong (CCC 1803)." }
      ]
    },
    secondary: "sort",
    sort: {
      title: "Good Choice or Bad Choice?",
      instruction: "Tap each action, then tap whether it's a good choice or a bad choice.",
      items: [
        { name: "Helping a friend who fell", icon: "🤝", group: "Good Choice" },
        { name: "Sharing your lunch", icon: "🍱", group: "Good Choice" },
        { name: "Telling the truth", icon: "✅", group: "Good Choice" },
        { name: "Lying to stay out of trouble", icon: "🤥", group: "Bad Choice" },
        { name: "Taking something that isn't yours", icon: "😈", group: "Bad Choice" },
        { name: "Being mean to someone smaller", icon: "👊", group: "Bad Choice" },
        { name: "Praying before meals", icon: "🙏", group: "Good Choice" }
      ],
      groups: ["Good Choice", "Bad Choice"],
      colors: { "Good Choice": "#6DB87B", "Bad Choice": "#C0607A" },
      icons: { "Good Choice": "✅", "Bad Choice": "❌" }
    },
    quiz: {
      questions: [
        { q: "God gave us laws to help us live ___.", opts: ["In fear", "Wealthy", "Well and lovingly", "Without thinking"], correct: 2 },
        { q: "Our inner voice that tells us right from wrong is called our ___.", opts: ["Feeling", "Conscience", "Opinion", "Brain only"], correct: 1 },
        { q: "Free will means we can choose ___.", opts: ["Our favorite color", "Good or evil", "When to sleep", "Our parents"], correct: 1 },
        { q: "A ___ is a good habit.", opts: ["Sin", "Virtue", "Mistake", "Rule"], correct: 1 },
        { q: "All of God's laws are rooted in ___.", opts: ["Fear", "Power", "Rules", "Love"], correct: 3 }
      ]
    ,
    bonus: { q: "God gave us the Ten Commandments to help us ___.", opts: ["be afraid", "live well", "be rich", "be famous"], correct: 1, reward: "Virtue Hero!" }
    },
    prayer: {
      title: "Prayer to Choose Well",
      lines: [
        { s: "L", t: "Lord, you gave us a conscience to know right from wrong." },
        { s: "A", t: "Help us to listen to that inner voice and choose good." },
        { s: "L", t: "Give us the courage to do the right thing even when it is hard." },
        { s: "A", t: "Forgive us for the times we choose selfishly." },
        { s: "L", t: "Train our hearts to love as you love." },
        { s: "A", t: "In the name of the Father, and of the Son, and of the Holy Spirit. Amen." }
      ]
    }
  },

  // ── WEEK 15 ─────────────────────────────────────────────────────────
  {
    week: 15,
    title: "The Ten Commandments: Loving God",
    pillar: "Morality",
    verse: "You shall love the Lord your God with your whole heart. — Deuteronomy 6:5",
    discover: {
      title: "Discover: Commandments 1-3",
      instruction: "Tap each card to learn how the commandments teach us to love God!",
      items: [
        { icon: "1️⃣", name: "First Commandment", desc: "'You shall not have strange gods before me.' God alone is to be worshiped. We put nothing — money, sports, screens — above God in our hearts (CCC 2083)." },
        { icon: "2️⃣", name: "Second Commandment", desc: "'You shall not take the name of the Lord your God in vain.' God's name is holy. We say it with love and reverence, never carelessly (CCC 2142)." },
        { icon: "3️⃣", name: "Third Commandment", desc: "'Remember to keep holy the Lord's Day.' Sunday is special. We go to Mass, rest from unnecessary work, and spend time with God and family (CCC 2168)." },
        { icon: "💛", name: "These Three Are About God", desc: "The first three commandments all teach us how to love God: be faithful to Him, honor His name, and worship Him on Sundays." }
      ]
    },
    secondary: "fillblank",
    fillblank: {
      title: "Fill in the Commandments!",
      instruction: "Fill in the missing word from each commandment.",
      sentences: [
        { text: "You shall not have ___ gods before me.", answer: "strange", options: ["strange", "many", "false", "big"] },
        { text: "You shall not take the name of the Lord in ___.", answer: "vain", options: ["vain", "anger", "fun", "doubt"] },
        { text: "Remember to keep ___ the Lord's Day.", answer: "holy", options: ["holy", "busy", "quiet", "happy"] },
        { text: "Commandments 1-3 teach us to love ___.", answer: "God", options: ["God", "ourselves", "others", "the earth"] }
      ]
    },
    quiz: {
      questions: [
        { q: "The first commandment tells us to worship ___.", opts: ["Saints", "God alone", "Angels", "Anything"], correct: 1 },
        { q: "The second commandment is about God's ___.", opts: ["Day", "Love", "Name", "Power"], correct: 2 },
        { q: "Which day does the third commandment make holy?", opts: ["Friday", "Saturday", "Sunday", "Monday"], correct: 2 },
        { q: "What must we do on Sunday?", opts: ["Sleep all day", "Go to Mass", "Work extra hard", "Stay home"], correct: 1 },
        { q: "Commandments 1-3 are about our relationship with ___.", opts: ["Family", "Neighbors", "God", "Country"], correct: 2 }
      ]
    ,
    bonus: { q: "The greatest commandment is to love ___.", opts: ["only ourselves", "only our friends", "God", "money"], correct: 2, reward: "Moral Champion!" }
    },
    prayer: {
      title: "Act of Love for God",
      lines: [
        { s: "L", t: "Lord, you ask us to love you above all things." },
        { s: "A", t: "O my God, I love you above all things, with my whole heart and soul." },
        { s: "L", t: "We honor your holy name with reverence and love." },
        { s: "A", t: "Blessed be God. Blessed be His holy name." },
        { s: "L", t: "We will keep Sunday holy by coming to worship you." },
        { s: "A", t: "Help us to love you first always. Amen." }
      ]
    }
  },

  // ── WEEK 16 ─────────────────────────────────────────────────────────
  {
    week: 16,
    title: "Unit Review: Sacraments & Morality",
    pillar: "Review",
    verse: "I came that they may have life, and have it abundantly. — John 10:10",
    discover: {
      title: "Review: Sacraments and Right Living",
      instruction: "Tap each card to review what we learned!",
      items: [
        { icon: "🎁", name: "The 7 Sacraments", desc: "Jesus gave us 7 sacraments: Baptism, Confirmation, Eucharist, Reconciliation, Anointing, Holy Orders, and Matrimony (CCC 1210)." },
        { icon: "💧", name: "Baptism & Reconciliation", desc: "Baptism gives us new life and washes away Original Sin. Reconciliation forgives our sins and restores our friendship with God." },
        { icon: "🍞", name: "The Eucharist", desc: "At Mass, bread and wine truly become Jesus' Body and Blood. The Mass has four parts: Introductory, Word, Eucharist, Concluding." },
        { icon: "⚖️", name: "Right and Wrong", desc: "God gives us a conscience, free will, and commandments to help us choose good. Commandments 1-3 teach love of God." }
      ]
    },
    secondary: "sort",
    sort: {
      title: "Which Sacrament Is It?",
      instruction: "Tap the description, then tap the correct sacrament.",
      items: [
        { name: "Water poured, Original Sin washed away", icon: "💧", group: "Baptism" },
        { name: "We confess sins to the priest", icon: "🙏", group: "Reconciliation" },
        { name: "Bread and wine become Jesus", icon: "🍞", group: "Eucharist" },
        { name: "Bishop anoints with chrism", icon: "🕊️", group: "Confirmation" },
        { name: "Priest anoints the seriously ill", icon: "🌿", group: "Anointing of the Sick" },
        { name: "Man and woman united by God", icon: "💍", group: "Matrimony" },
        { name: "Ordained to serve as priest", icon: "⛪", group: "Holy Orders" }
      ],
      groups: ["Baptism", "Reconciliation", "Eucharist", "Confirmation", "Anointing of the Sick", "Matrimony", "Holy Orders"],
      colors: { Baptism: "#4A90D9", Reconciliation: "#6DB87B", Eucharist: "#D4A843", Confirmation: "#9B6DB8", "Anointing of the Sick": "#C0607A", Matrimony: "#E88B3A", "Holy Orders": "#5A7A5A" },
      icons: { Baptism: "💧", Reconciliation: "🙏", Eucharist: "🍞", Confirmation: "🕊️", "Anointing of the Sick": "🌿", Matrimony: "💍", "Holy Orders": "⛪" }
    },
    quiz: {
      questions: [
        { q: "How many sacraments are there?", opts: ["3", "5", "7", "10"], correct: 2 },
        { q: "Which sacrament forgives our sins?", opts: ["Baptism", "Eucharist", "Reconciliation", "Anointing"], correct: 2 },
        { q: "At Mass the bread and wine truly become ___.", opts: ["A symbol", "A memory", "Jesus Himself", "Holy water"], correct: 2 },
        { q: "Which sacrament do we receive first?", opts: ["Eucharist", "Confirmation", "Baptism", "Reconciliation"], correct: 2 },
        { q: "God gives us a ___ to know right from wrong.", opts: ["Book", "Conscience", "Teacher", "List"], correct: 1 }
      ]
    ,
    bonus: { q: "How many Persons are in the Holy Trinity?", opts: ["1", "2", "3", "4"], correct: 2, reward: "Knowledge Star!" }
    },
    prayer: {
      title: "Glory Be",
      lines: [
        { s: "L", t: "Let us give praise to the Holy Trinity." },
        { s: "A", t: "Glory be to the Father, and to the Son, and to the Holy Spirit." },
        { s: "L", t: "As it was in the beginning, is now, and ever shall be." },
        { s: "A", t: "World without end. Amen." },
        { s: "L", t: "Thank you, God, for the sacraments and for teaching us to live well." },
        { s: "A", t: "Help us always to love you and our neighbor. Amen." }
      ]
    }
  },

  // ── WEEK 17 ─────────────────────────────────────────────────────────
  {
    week: 17,
    title: "Love Your Neighbor",
    pillar: "Morality",
    verse: "You shall love your neighbor as yourself. — Matthew 22:39",
    discover: {
      title: "Discover: The Ten Commandments 4-10",
      instruction: "Tap each card to learn how to love our neighbor!",
      items: [
        { icon: "4️⃣", name: "Fourth Commandment", desc: "'Honor your father and your mother.' We obey and respect our parents and those in authority over us. They protect and teach us (CCC 2197)." },
        { icon: "5️⃣", name: "Fifth Commandment", desc: "'You shall not kill.' Every human life is sacred. We protect life and avoid violence, bullying, and hurting others (CCC 2258)." },
        { icon: "🚫", name: "No Stealing or Lying", desc: "The seventh commandment says 'Do not steal.' The eighth says 'Do not lie.' We respect others' property and always tell the truth (CCC 2401, 2464)." },
        { icon: "❤️", name: "These Are About Love", desc: "Commandments 4-10 all come down to one thing: love your neighbor as yourself. Every law Jesus teaches flows from love." }
      ]
    },
    secondary: "timeline",
    timeline: {
      title: "Commandments 4-10 in Order!",
      instruction: "Tap two items to swap them into the correct order.",
      items: [
        { id: 1, text: "4th: Honor your father and your mother", order: 1 },
        { id: 2, text: "5th: Do not kill — protect all human life", order: 2 },
        { id: 3, text: "6th & 9th: Be faithful and pure in heart", order: 3 },
        { id: 4, text: "7th & 10th: Do not steal or be greedy", order: 4 },
        { id: 5, text: "8th: Do not lie — always tell the truth", order: 5 }
      ]
    },
    quiz: {
      questions: [
        { q: "The fourth commandment says to honor your ___.", opts: ["Teacher", "Father and mother", "Priest", "Friend"], correct: 1 },
        { q: "The fifth commandment protects human ___.", opts: ["Property", "Life", "Name", "Day"], correct: 1 },
        { q: "The eighth commandment tells us not to ___.", opts: ["Kill", "Steal", "Lie", "Covet"], correct: 2 },
        { q: "Commandments 4-10 teach us to love our ___.", opts: ["Property", "Country", "Neighbor", "Rules"], correct: 2 },
        { q: "Jesus said all the commandments hang on ___ and love of neighbor.", opts: ["Prayer", "Rules", "Love of God", "The Church"], correct: 2 }
      ]
    ,
    bonus: { q: "Who is our neighbor?", opts: ["Only the person next door", "Only family", "Only friends", "Everyone"], correct: 3, reward: "Goodness Guide!" }
    },
    prayer: {
      title: "Prayer to Love Our Neighbor",
      lines: [
        { s: "L", t: "Jesus, you said we must love our neighbor as ourselves." },
        { s: "A", t: "Help us to see you in every person we meet." },
        { s: "L", t: "Give us patience with those who are difficult to love." },
        { s: "A", t: "Help us to be honest, kind, and respectful." },
        { s: "L", t: "May our love for others reflect your love for us." },
        { s: "A", t: "In the name of the Father, and of the Son, and of the Holy Spirit. Amen." }
      ]
    }
  },

  // ── WEEK 18 ─────────────────────────────────────────────────────────
  {
    week: 18,
    title: "Forgiveness and Mercy",
    pillar: "Morality",
    verse: "Be merciful, even as your Father also is merciful. — Luke 6:36",
    discover: {
      title: "Discover: Forgiveness",
      instruction: "Tap each card to learn about God's mercy and ours!",
      items: [
        { icon: "🩹", name: "Forgiveness Heals", desc: "When we forgive someone who hurt us, it heals us too. Holding onto anger hurts our hearts. Jesus calls us to forgive even those who hurt us deeply." },
        { icon: "🐑", name: "The Lost Sheep", desc: "Jesus told a story of a shepherd who left 99 sheep to find one lost one. This shows how much God loves each person and seeks those who have strayed (Luke 15:4-7)." },
        { icon: "🏃", name: "The Prodigal Son", desc: "A son took his inheritance and wasted it. When he returned home, his father ran to embrace him. God is like that father — always ready to welcome us back (Luke 15:20)." },
        { icon: "🙏", name: "Saying Sorry", desc: "When we have hurt someone, we should say sorry sincerely. True sorrow means meaning it and trying not to repeat the same hurtful action." },
        { icon: "🕊️", name: "Mercy Is a Gift", desc: "Mercy means giving someone kindness even when they don't deserve it. When God forgives us, He is showing mercy. We are called to be merciful too (CCC 2840)." }
      ]
    },
    secondary: "fillblank",
    fillblank: {
      title: "Forgiveness Fill-In!",
      instruction: "Fill in the missing word about forgiveness.",
      sentences: [
        { text: "God is always ready to ___ us.", answer: "forgive", options: ["forgive", "punish", "ignore", "test"] },
        { text: "Mercy means giving kindness even when not ___.", answer: "deserved", options: ["deserved", "requested", "known", "expected"] },
        { text: "The father ran to meet the ___ son.", answer: "prodigal", options: ["prodigal", "older", "rich", "younger"] },
        { text: "We are called to forgive ___ as God forgives us.", answer: "others", options: ["others", "rules", "only ourselves", "later"] }
      ]
    },
    quiz: {
      questions: [
        { q: "Jesus said to forgive ___.", opts: ["Only good people", "Only family", "Those who hurt us", "Never"], correct: 2 },
        { q: "In the Lost Sheep parable, the shepherd left 99 to find ___.", opts: ["The wolf", "10 sheep", "1 lost sheep", "More food"], correct: 2 },
        { q: "Mercy means giving kindness even when not ___.", opts: ["Asked", "Expected", "Deserved", "Possible"], correct: 2 },
        { q: "In the Prodigal Son story, the father represents ___.", opts: ["The Church", "God", "A priest", "A teacher"], correct: 1 },
        { q: "True forgiveness means ___.", opts: ["Pretending nothing happened", "Saying sorry and meaning it", "Just forgetting", "Being angry inside"], correct: 1 }
      ]
    ,
    bonus: { q: "When we do something wrong on purpose, it is called ___.", opts: ["a mistake", "sin", "an accident", "bad luck"], correct: 1, reward: "Virtue Star!" }
    },
    prayer: {
      title: "Prayer for a Forgiving Heart",
      lines: [
        { s: "L", t: "Lord, you are rich in mercy and slow to anger." },
        { s: "A", t: "Thank you for always forgiving us when we are sorry." },
        { s: "L", t: "Help us to forgive those who hurt or disappoint us." },
        { s: "A", t: "Give us hearts that do not hold grudges." },
        { s: "L", t: "May we treat others with the same mercy you show us." },
        { s: "A", t: "In the name of the Father, and of the Son, and of the Holy Spirit. Amen." }
      ]
    }
  },

  // ── WEEK 19 ─────────────────────────────────────────────────────────
  {
    week: 19,
    title: "Loving and Serving Others",
    pillar: "Morality",
    verse: "Whatever you did to one of the least of my brothers, you did to me. — Matthew 25:40",
    discover: {
      title: "Discover: Serving Others",
      instruction: "Tap each card to learn how to serve like Jesus!",
      items: [
        { icon: "🫀", name: "Jesus Served", desc: "Jesus washed His disciples' feet at the Last Supper. The Son of God became a servant! He taught us that serving others is a sign of true greatness (John 13:14)." },
        { icon: "🍽️", name: "Corporal Works of Mercy", desc: "Corporal Works of Mercy are ways to help people's bodies: feed the hungry, give drink to the thirsty, clothe the naked, visit the sick, shelter the homeless (CCC 2447)." },
        { icon: "💬", name: "Spiritual Works of Mercy", desc: "Spiritual Works of Mercy help people's souls: counsel the doubtful, instruct the ignorant, comfort the sad, pray for others (CCC 2447)." },
        { icon: "😃", name: "Small Acts Matter", desc: "We don't have to do huge things to serve. Sharing, listening, being kind to someone lonely — these small acts of love matter enormously to God." },
        { icon: "🌍", name: "Seeing Jesus in Others", desc: "Jesus said that when we feed the hungry or visit the sick, we are doing it to HIM. Every person we serve carries the image of God (CCC 2449)." }
      ]
    },
    secondary: "sort",
    sort: {
      title: "Corporal or Spiritual Work of Mercy?",
      instruction: "Tap each act, then tap whether it helps the body or the soul.",
      items: [
        { name: "Feed the hungry", icon: "🍽️", group: "Corporal (Body)" },
        { name: "Visit the sick", icon: "🏥", group: "Corporal (Body)" },
        { name: "Clothe the naked", icon: "👕", group: "Corporal (Body)" },
        { name: "Pray for others", icon: "🙏", group: "Spiritual (Soul)" },
        { name: "Comfort someone sad", icon: "🤗", group: "Spiritual (Soul)" },
        { name: "Shelter the homeless", icon: "🏠", group: "Corporal (Body)" },
        { name: "Teach someone about God", icon: "📖", group: "Spiritual (Soul)" }
      ],
      groups: ["Corporal (Body)", "Spiritual (Soul)"],
      colors: { "Corporal (Body)": "#D4A843", "Spiritual (Soul)": "#9B6DB8" },
      icons: { "Corporal (Body)": "💪", "Spiritual (Soul)": "✨" }
    },
    quiz: {
      questions: [
        { q: "Jesus served His disciples by ___.", opts: ["Cooking dinner", "Washing their feet", "Giving them money", "Building them homes"], correct: 1 },
        { q: "Feeding the hungry is a ___ Work of Mercy.", opts: ["Spiritual", "Corporal", "Personal", "Private"], correct: 1 },
        { q: "Jesus said when we serve others, we serve ___.", opts: ["The Church", "Ourselves", "Him", "The priest"], correct: 2 },
        { q: "Praying for others is a ___ Work of Mercy.", opts: ["Corporal", "Personal", "Spiritual", "Physical"], correct: 2 },
        { q: "Every person we serve bears the ___ of God.", opts: ["Name", "Image", "Glory", "Power"], correct: 1 }
      ]
    ,
    bonus: { q: "What should we do when we hurt someone?", opts: ["Hide", "Say sorry and try to fix it", "Pretend nothing happened", "Blame someone else"], correct: 1, reward: "Moral Explorer!" }
    },
    prayer: {
      title: "Prayer to Serve Others",
      lines: [
        { s: "L", t: "Lord, you showed us how to serve when you washed your disciples' feet." },
        { s: "A", t: "Give us servant hearts, willing to help others." },
        { s: "L", t: "Help us to see your face in those who are hungry, sad, or sick." },
        { s: "A", t: "May our small acts of love bring joy to those around us." },
        { s: "L", t: "Make us instruments of your kindness in the world." },
        { s: "A", t: "In the name of the Father, and of the Son, and of the Holy Spirit. Amen." }
      ]
    }
  },

  // ── WEEK 20 ─────────────────────────────────────────────────────────
  {
    week: 20,
    title: "Unit Review: Moral Life",
    pillar: "Review",
    verse: "Be perfect, therefore, as your heavenly Father is perfect. — Matthew 5:48",
    discover: {
      title: "Review: Living a Good Life",
      instruction: "Tap each card to review the moral life!",
      items: [
        { icon: "⚖️", name: "God's Law Helps Us", desc: "God gave us commandments and a conscience to help us choose good over evil. Free will means every choice matters (CCC 1950)." },
        { icon: "1️⃣", name: "Commandments 1-3: Love God", desc: "No other gods, honor God's name, keep Sunday holy. The first three commandments are all about our relationship with God." },
        { icon: "4️⃣", name: "Commandments 4-10: Love Neighbor", desc: "Honor parents, don't kill, don't steal, don't lie. The last seven commandments teach us to love and respect others." },
        { icon: "🕊️", name: "Forgiveness and Service", desc: "God calls us to forgive as He forgives us, and to serve others through the Works of Mercy, seeing Jesus in every person we meet." }
      ]
    },
    secondary: "fillblank",
    fillblank: {
      title: "Review: The Moral Life",
      instruction: "Fill in the missing word.",
      sentences: [
        { text: "Our inner voice that tells us right from wrong is called our ___.", answer: "conscience", options: ["conscience", "feeling", "brain", "memory"] },
        { text: "The first three commandments teach us to love ___.", answer: "God", options: ["God", "others", "ourselves", "the earth"] },
        { text: "Feeding the hungry is a ___ Work of Mercy.", answer: "Corporal", options: ["Corporal", "Spiritual", "Personal", "Simple"] },
        { text: "Jesus said to ___ others as God forgives us.", answer: "forgive", options: ["forgive", "judge", "ignore", "test"] }
      ]
    },
    quiz: {
      questions: [
        { q: "How many commandments are there?", opts: ["5", "7", "10", "12"], correct: 2 },
        { q: "Which commandment says 'Honor your father and mother'?", opts: ["The 2nd", "The 3rd", "The 4th", "The 5th"], correct: 2 },
        { q: "What helps us choose between right and wrong?", opts: ["Luck", "Our conscience", "Our friends", "The weather"], correct: 1 },
        { q: "Visiting the sick is a ___ Work of Mercy.", opts: ["Spiritual", "Corporal", "Private", "Difficult"], correct: 1 },
        { q: "Jesus said all commandments hang on love of God and love of ___.", opts: ["Angels", "Rules", "Neighbor", "Country"], correct: 2 }
      ]
    ,
    bonus: { q: "Name the three Persons of the Trinity.", opts: ["Father, Son, Holy Spirit", "Father, Mother, Son", "God, Mary, Jesus", "Father, Son, Angels"], correct: 0, reward: "Quiz Master!" }
    },
    prayer: {
      title: "Our Father",
      lines: [
        { s: "L", t: "Let us pray the prayer Jesus himself taught us." },
        { s: "A", t: "Our Father, who art in heaven, hallowed be thy name." },
        { s: "A", t: "Thy kingdom come, thy will be done, on earth as it is in heaven." },
        { s: "A", t: "Give us this day our daily bread, and forgive us our trespasses." },
        { s: "A", t: "As we forgive those who trespass against us." },
        { s: "A", t: "And lead us not into temptation, but deliver us from evil. Amen." }
      ]
    }
  },

  // ── WEEK 21 ─────────────────────────────────────────────────────────
  {
    week: 21,
    title: "What Is Prayer?",
    pillar: "Prayer",
    verse: "Pray without ceasing. — 1 Thessalonians 5:17",
    discover: {
      title: "Discover: Prayer!",
      instruction: "Tap each card to learn what prayer is!",
      items: [
        { icon: "💬", name: "Talking to God", desc: "Prayer is a conversation with God. Just as we talk to a friend, we can talk to God — sharing our thoughts, feelings, joys, and worries (CCC 2559)." },
        { icon: "👂", name: "Listening Too", desc: "Prayer is not just talking — it is also being quiet and listening. God speaks to us in our hearts, in Scripture, and through the people around us (CCC 2708)." },
        { icon: "🙌", name: "Four Types of Prayer", desc: "There are four types: ADORATION (praising God), THANKSGIVING (thanking God), PETITION (asking God for what we need), and CONTRITION (saying sorry) (CCC 2626)." },
        { icon: "📍", name: "Anywhere, Any Time", desc: "We can pray walking to school, before sleep, in church, or at the dinner table. There is no wrong place or time to pray. God always listens (CCC 2743)." },
        { icon: "🤝", name: "Prayer Changes Things", desc: "Prayer does not change God — it changes us. When we pray, we open our hearts to God's wisdom and grace, and we grow closer to Him (CCC 2735)." }
      ]
    },
    secondary: "sort",
    sort: {
      title: "What Type of Prayer?",
      instruction: "Tap each prayer, then tap its type.",
      items: [
        { name: "'God, you are amazing!'", icon: "🌟", group: "Adoration" },
        { name: "'Thank you for my family.'", icon: "💛", group: "Thanksgiving" },
        { name: "'Please help my sick friend.'", icon: "🙏", group: "Petition" },
        { name: "'I am sorry for being mean.'", icon: "😔", group: "Contrition" },
        { name: "'You are holy and all-powerful!'", icon: "✨", group: "Adoration" },
        { name: "'Please give us good weather.'", icon: "☀️", group: "Petition" },
        { name: "'Thank you for this food.'", icon: "🍽️", group: "Thanksgiving" }
      ],
      groups: ["Adoration", "Thanksgiving", "Petition", "Contrition"],
      colors: { Adoration: "#D4A843", Thanksgiving: "#6DB87B", Petition: "#4A90D9", Contrition: "#C0607A" },
      icons: { Adoration: "🌟", Thanksgiving: "💛", Petition: "🙏", Contrition: "😔" }
    },
    quiz: {
      questions: [
        { q: "Prayer is a ___ with God.", opts: ["Game", "Conversation", "Test", "Performance"], correct: 1 },
        { q: "Can we pray anywhere?", opts: ["Only in church", "Only at home", "Only at night", "Yes, anywhere"], correct: 3 },
        { q: "Which type of prayer praises God for who He is?", opts: ["Petition", "Contrition", "Adoration", "Thanksgiving"], correct: 2 },
        { q: "Which type of prayer says sorry?", opts: ["Adoration", "Contrition", "Petition", "Thanksgiving"], correct: 1 },
        { q: "Prayer changes ___.", opts: ["God", "The weather", "Us", "Time"], correct: 2 }
      ]
    ,
    bonus: { q: "What is prayer?", opts: ["Talking and listening to God", "Just asking for things", "Only singing", "Reciting words fast"], correct: 0, reward: "Prayer Warrior!" }
    },
    prayer: {
      title: "Simple Prayer Practice",
      lines: [
        { s: "L", t: "Let us pray together using all four types of prayer." },
        { s: "A", t: "God, you are wonderful and holy — we adore you!" },
        { s: "L", t: "Think of one thing you are grateful for today..." },
        { s: "A", t: "Thank you, Lord, for all the good gifts you give us." },
        { s: "L", t: "Is there something you need? Ask God now in your heart." },
        { s: "A", t: "And Lord, forgive us for the times we have not loved well. Amen." }
      ]
    }
  },

  // ── WEEK 22 ─────────────────────────────────────────────────────────
  {
    week: 22,
    title: "The Our Father",
    pillar: "Prayer",
    verse: "When you pray, say: Our Father, who art in heaven. — Luke 11:2",
    discover: {
      title: "Discover: The Our Father",
      instruction: "Tap each card to understand every line of the Our Father!",
      items: [
        { icon: "👨‍👧", name: "Our Father", desc: "We say 'OUR' Father — not just 'my' Father. We pray together as God's family. Every person on earth can call God Father (CCC 2786)." },
        { icon: "👑", name: "Hallowed Be Thy Name", desc: "'Hallowed' means holy. We pray that God's name is honored everywhere — in how we live, speak, and treat others (CCC 2807)." },
        { icon: "🌎", name: "Thy Kingdom Come", desc: "We ask God to bring His kingdom of love, justice, and peace to our hearts and to the whole world (CCC 2816)." },
        { icon: "🍞", name: "Give Us Our Daily Bread", desc: "We ask God for everything we need — food, love, and also the Eucharist, our spiritual food. We trust God to provide (CCC 2835)." },
        { icon: "🕊️", name: "Forgive Us... As We Forgive", desc: "We ask God to forgive us AND we promise to forgive others. These are linked — God's mercy flows through us to others (CCC 2838)." }
      ]
    },
    secondary: "fillblank",
    fillblank: {
      title: "Pray the Our Father!",
      instruction: "Fill in the missing words from the Our Father.",
      sentences: [
        { text: "Our Father, who art in ___.", answer: "heaven", options: ["heaven", "earth", "church", "sky"] },
        { text: "Hallowed be thy ___.", answer: "name", options: ["name", "house", "throne", "glory"] },
        { text: "Give us this day our daily ___.", answer: "bread", options: ["bread", "water", "gifts", "prayers"] },
        { text: "Lead us not into ___, but deliver us from evil.", answer: "temptation", options: ["temptation", "trouble", "sadness", "darkness"] }
      ]
    },
    quiz: {
      questions: [
        { q: "Who taught us the Our Father?", opts: ["Moses", "Mary", "Jesus", "Peter"], correct: 2 },
        { q: "Why do we say 'Our' and not 'My' Father?", opts: ["Sounds better", "We pray as God's family", "It's shorter", "It's tradition only"], correct: 1 },
        { q: "'Hallowed' means ___.", opts: ["Hollow", "Holy", "Happy", "Humble"], correct: 1 },
        { q: "'Daily bread' can also refer to the ___.", opts: ["Bible", "Eucharist", "Rosary", "Homily"], correct: 1 },
        { q: "We promise to ___ those who hurt us.", opts: ["Avoid", "Forgive", "Ignore", "Report"], correct: 1 }
      ]
    ,
    bonus: { q: "Can we pray only in church?", opts: ["Yes", "No \u2014 anywhere, anytime", "Only on Sundays", "Only before meals"], correct: 1, reward: "Prayer Pro!" }
    },
    prayer: {
      title: "Praying the Our Father Together",
      lines: [
        { s: "L", t: "Let us pray slowly the prayer Jesus gave us." },
        { s: "A", t: "Our Father, who art in heaven, hallowed be thy name." },
        { s: "A", t: "Thy kingdom come, thy will be done, on earth as it is in heaven." },
        { s: "A", t: "Give us this day our daily bread." },
        { s: "A", t: "And forgive us our trespasses, as we forgive those who trespass against us." },
        { s: "A", t: "And lead us not into temptation, but deliver us from evil. Amen." }
      ]
    }
  },

  // ── WEEK 23 ─────────────────────────────────────────────────────────
  {
    week: 23,
    title: "The Hail Mary",
    pillar: "Prayer",
    verse: "Hail, full of grace, the Lord is with you. — Luke 1:28",
    discover: {
      title: "Discover: The Hail Mary",
      instruction: "Tap each card to understand the Hail Mary!",
      items: [
        { icon: "👼", name: "The Angel's Words", desc: "The angel Gabriel said to Mary: 'Hail, full of grace, the Lord is with you.' These are the very first words of the Hail Mary (Luke 1:28)." },
        { icon: "🤝", name: "Elizabeth's Words", desc: "When Mary visited her cousin Elizabeth, Elizabeth said: 'Blessed are you among women, and blessed is the fruit of your womb' (Luke 1:42)." },
        { icon: "🌸", name: "Mother of God", desc: "We call Mary 'Mother of God' because she is the mother of Jesus, who is God. This title honors both Mary and her Son (CCC 509)." },
        { icon: "🙏", name: "Pray for Us Sinners", desc: "We ask Mary to pray for us 'now and at the hour of our death.' Mary is like a loving mother who intercedes for her children before God (CCC 969)." },
        { icon: "🌹", name: "A Biblical Prayer", desc: "The Hail Mary is beautiful because most of its words come right from the Bible. Praying it means praying with Scripture!" }
      ]
    },
    secondary: "timeline",
    timeline: {
      title: "Where Did the Hail Mary Come From?",
      instruction: "Tap two items to swap them into the correct order.",
      items: [
        { id: 1, text: "Angel Gabriel greets Mary (Luke 1:28)", order: 1 },
        { id: 2, text: "Mary visits her cousin Elizabeth", order: 2 },
        { id: 3, text: "Elizabeth blesses Mary (Luke 1:42)", order: 3 },
        { id: 4, text: "The Church adds 'Holy Mary, Mother of God...'", order: 4 },
        { id: 5, text: "We pray the Hail Mary as a beautiful Scripture prayer", order: 5 }
      ]
    },
    quiz: {
      questions: [
        { q: "Who said 'Hail, full of grace'?", opts: ["Elizabeth", "Joseph", "The Angel Gabriel", "God"], correct: 2 },
        { q: "Who said 'Blessed are you among women'?", opts: ["An angel", "Mary", "Elizabeth", "Jesus"], correct: 2 },
        { q: "Why is Mary called 'Mother of God'?", opts: ["She is very old", "She is Jesus' mother, who is God", "She lives in heaven", "An angel told us"], correct: 1 },
        { q: "In the Hail Mary, we ask Mary to pray for us ___ and at our death.", opts: ["Sometimes", "On Sundays", "Now", "When we ask"], correct: 2 },
        { q: "Most of the Hail Mary's words come from the ___.", opts: ["Catechism", "Bible", "Pope", "Tradition only"], correct: 1 }
      ]
    ,
    bonus: { q: "The Our Father was taught by ___.", opts: ["Moses", "Mary", "Jesus", "Peter"], correct: 2, reward: "Spiritual Star!" }
    },
    prayer: {
      title: "The Hail Mary",
      lines: [
        { s: "L", t: "Let us pray to Our Blessed Mother." },
        { s: "A", t: "Hail Mary, full of grace, the Lord is with thee." },
        { s: "A", t: "Blessed art thou among women, and blessed is the fruit of thy womb, Jesus." },
        { s: "A", t: "Holy Mary, Mother of God, pray for us sinners." },
        { s: "A", t: "Now and at the hour of our death. Amen." },
        { s: "L", t: "Mary, our mother, pray for us and lead us to Jesus." }
      ]
    }
  },

  // ── WEEK 24 ─────────────────────────────────────────────────────────
  {
    week: 24,
    title: "The Rosary",
    pillar: "Prayer",
    verse: "Behold, from henceforth, all generations will call me blessed. — Luke 1:48",
    discover: {
      title: "Discover: The Rosary",
      instruction: "Tap each card to learn about this beautiful prayer!",
      items: [
        { icon: "📿", name: "What Is the Rosary?", desc: "The Rosary is a prayer that uses beads to count Hail Marys. While we pray, we think about important events in the lives of Jesus and Mary (CCC 2708)." },
        { icon: "😊", name: "Joyful Mysteries", desc: "The Joyful Mysteries celebrate happy events: the Annunciation, the Visitation, the Nativity, the Presentation, and Finding Jesus in the Temple." },
        { icon: "😢", name: "Sorrowful Mysteries", desc: "The Sorrowful Mysteries remember Jesus' suffering: His agony, scourging, crowning with thorns, carrying the cross, and crucifixion." },
        { icon: "🌟", name: "Glorious Mysteries", desc: "The Glorious Mysteries celebrate Jesus' victory: His Resurrection, Ascension, Pentecost, and Mary's Assumption and Coronation." },
        { icon: "💡", name: "Luminous Mysteries", desc: "The Luminous Mysteries focus on Jesus' public life: His Baptism, the Wedding at Cana, proclaiming the Kingdom, the Transfiguration, and the Last Supper." }
      ]
    },
    secondary: "timeline",
    timeline: {
      title: "Pray One Decade of the Rosary!",
      instruction: "Tap two items to swap them into the correct order for a Rosary decade.",
      items: [
        { id: 1, text: "Announce the Mystery to meditate on", order: 1 },
        { id: 2, text: "Pray the Our Father", order: 2 },
        { id: 3, text: "Pray 10 Hail Marys while meditating", order: 3 },
        { id: 4, text: "Pray the Glory Be", order: 4 },
        { id: 5, text: "Move to the next bead and repeat", order: 5 }
      ]
    },
    quiz: {
      questions: [
        { q: "The Rosary uses beads to count ___.", opts: ["Our Fathers", "Hail Marys", "Glory Bes", "Psalms"], correct: 1 },
        { q: "How many sets of mysteries are in the Rosary?", opts: ["2", "3", "4", "5"], correct: 2 },
        { q: "The Nativity belongs to which set of mysteries?", opts: ["Sorrowful", "Glorious", "Joyful", "Luminous"], correct: 2 },
        { q: "The Resurrection belongs to which set of mysteries?", opts: ["Joyful", "Glorious", "Sorrowful", "Luminous"], correct: 1 },
        { q: "While praying the Rosary, we meditate on events in Jesus' and Mary's ___.", opts: ["Parables", "Commandments", "Lives", "Dreams"], correct: 2 }
      ]
    ,
    bonus: { q: "What does 'Amen' mean?", opts: ["Goodbye", "Let it be so / I believe", "Help me", "Maybe"], correct: 1, reward: "Prayer Champion!" }
    },
    prayer: {
      title: "One Decade of the Rosary",
      lines: [
        { s: "L", t: "Let us pray one decade of the Rosary, thinking about the Annunciation." },
        { s: "A", t: "Our Father, who art in heaven, hallowed be thy name..." },
        { s: "L", t: "The Angel Gabriel told Mary she would be the Mother of God's Son." },
        { s: "A", t: "Hail Mary, full of grace, the Lord is with thee... (pray 10 times in your heart)." },
        { s: "L", t: "Mary said yes to God with all her heart. Can we say yes to God today?" },
        { s: "A", t: "Glory be to the Father, and to the Son, and to the Holy Spirit. Amen." }
      ]
    }
  },

  // ── WEEK 25 ─────────────────────────────────────────────────────────
  {
    week: 25,
    title: "Unit Review: Prayer",
    pillar: "Review",
    verse: "Ask, and it will be given to you; seek, and you will find. — Matthew 7:7",
    discover: {
      title: "Review: Prayer",
      instruction: "Tap each card to review what we learned about prayer!",
      items: [
        { icon: "💬", name: "Prayer Is a Conversation", desc: "Prayer is talking AND listening to God. We can pray anywhere, any time, with four types: Adoration, Thanksgiving, Petition, Contrition (CCC 2559)." },
        { icon: "✝️", name: "The Our Father", desc: "Jesus gave us the Our Father — the perfect prayer. Every line has deep meaning: hallowed, kingdom come, daily bread, forgiveness (CCC 2786)." },
        { icon: "🌹", name: "The Hail Mary", desc: "The Hail Mary comes mostly from Scripture — the words of Gabriel and Elizabeth. We ask Mary to pray for us as our spiritual mother (CCC 969)." },
        { icon: "📿", name: "The Rosary", desc: "The Rosary meditates on Jesus' life through four sets of mysteries: Joyful, Sorrowful, Glorious, and Luminous (CCC 2708)." }
      ]
    },
    secondary: "timeline",
    timeline: {
      title: "History of Our Prayers",
      instruction: "Tap two items to swap them into the correct order.",
      items: [
        { id: 1, text: "God created us to be in relationship with Him", order: 1 },
        { id: 2, text: "Jesus teaches us the Our Father", order: 2 },
        { id: 3, text: "Gabriel and Elizabeth speak words of the Hail Mary", order: 3 },
        { id: 4, text: "The Church develops the Rosary over centuries", order: 4 },
        { id: 5, text: "We pray these prayers together today", order: 5 }
      ]
    },
    quiz: {
      questions: [
        { q: "The four types of prayer are Adoration, Thanksgiving, Petition, and ___.", opts: ["Praise", "Contrition", "Recitation", "Singing"], correct: 1 },
        { q: "Who taught us the Our Father?", opts: ["Mary", "Moses", "Jesus", "Peter"], correct: 2 },
        { q: "The Hail Mary's first words were spoken by ___.", opts: ["Mary", "Elizabeth", "Joseph", "The Angel Gabriel"], correct: 3 },
        { q: "How many sets of mysteries are in the Rosary?", opts: ["2", "3", "4", "5"], correct: 2 },
        { q: "Prayer changes ___.", opts: ["God", "The world directly", "Us", "Rules"], correct: 2 }
      ]
    ,
    bonus: { q: "What is the Bible?", opts: ["A storybook", "God's Word", "A dictionary", "A history textbook"], correct: 1, reward: "All-Star Learner!" }
    },
    prayer: {
      title: "Prayer to Our Blessed Mother",
      lines: [
        { s: "L", t: "Mary, you said yes to God with a full and trusting heart." },
        { s: "A", t: "Help us to say yes to God in our daily lives." },
        { s: "L", t: "You are our spiritual mother — always interceding for us." },
        { s: "A", t: "Pray for us, Holy Mary, now and always." },
        { s: "L", t: "Lead us always closer to your Son, Jesus." },
        { s: "A", t: "Hail Mary, full of grace, the Lord is with thee. Amen." }
      ]
    }
  },

  // ── WEEK 26 ─────────────────────────────────────────────────────────
  {
    week: 26,
    title: "The Saints: Our Friends in Heaven",
    pillar: "Prayer",
    verse: "We are surrounded by so great a cloud of witnesses. — Hebrews 12:1",
    discover: {
      title: "Discover: The Saints!",
      instruction: "Tap each card to learn about our friends in heaven!",
      items: [
        { icon: "😇", name: "What Is a Saint?", desc: "A saint is a person who lived a holy life and is now in heaven with God. The Church officially recognizes some saints, but there are countless more (CCC 828)." },
        { icon: "🙏", name: "Saints Pray for Us", desc: "Saints are not dead — they are alive with God in heaven! They can hear our prayers and intercede for us before God, like friends putting in a good word (CCC 956)." },
        { icon: "🌹", name: "St. Thérèse of Lisieux", desc: "St. Thérèse believed in 'the Little Way' — doing small things with great love. She died at 24 and is a Doctor of the Church. She said she would 'spend her heaven doing good on earth.'" },
        { icon: "🕊️", name: "St. Francis of Assisi", desc: "St. Francis loved creation and the poor. He gave up wealth to follow Jesus. He wrote a famous prayer: 'Lord, make me an instrument of your peace.'" },
        { icon: "⭐", name: "Our Patron Saints", desc: "Patron saints are saints who have a special connection to us — chosen at Baptism or Confirmation. They are like a personal friend in heaven who prays for us." }
      ]
    },
    secondary: "sort",
    sort: {
      title: "Match the Saint to Their Gift!",
      instruction: "Tap each saint or fact, then tap the correct saint.",
      items: [
        { name: "'The Little Way' of small acts", icon: "🌹", group: "St. Thérèse" },
        { name: "Loved creation and the poor", icon: "🌿", group: "St. Francis" },
        { name: "'Lord, make me an instrument of peace'", icon: "🕊️", group: "St. Francis" },
        { name: "Died at age 24, Doctor of the Church", icon: "📖", group: "St. Thérèse" },
        { name: "Wrote many letters and conversion stories", icon: "✍️", group: "St. Thérèse" },
        { name: "Founded the Franciscan order", icon: "⛪", group: "St. Francis" },
        { name: "Born in Normandy, France", icon: "🇫🇷", group: "St. Thérèse" }
      ],
      groups: ["St. Thérèse", "St. Francis"],
      colors: { "St. Thérèse": "#C0607A", "St. Francis": "#6DB87B" },
      icons: { "St. Thérèse": "🌹", "St. Francis": "🕊️" }
    },
    quiz: {
      questions: [
        { q: "A saint is someone who lived a holy life and is now in ___.", opts: ["A church", "Heaven", "A book", "History"], correct: 1 },
        { q: "Can saints pray for us?", opts: ["No, they are dead", "Yes, they are alive in God", "Only famous ones", "Only if we are good"], correct: 1 },
        { q: "St. Thérèse taught us 'The Little ___.'", opts: ["Flower", "Way", "Prayer", "Book"], correct: 1 },
        { q: "St. Francis wrote: 'Lord, make me an instrument of ___.'", opts: ["Love", "Justice", "Peace", "Light"], correct: 2 },
        { q: "A saint who has a special connection to us is called a ___ saint.", opts: ["Personal", "Patron", "Private", "Perfect"], correct: 1 }
      ]
    ,
    bonus: { q: "The Hail Mary starts with the words of the Angel ___.", opts: ["Michael", "Raphael", "Gabriel", "Uriel"], correct: 2, reward: "Devotion Star!" }
    },
    prayer: {
      title: "Prayer of St. Francis",
      lines: [
        { s: "L", t: "Let us pray the prayer of St. Francis together." },
        { s: "A", t: "Lord, make me an instrument of your peace." },
        { s: "L", t: "Where there is hatred, let me sow love." },
        { s: "A", t: "Where there is darkness, light. Where there is sadness, joy." },
        { s: "L", t: "Grant that I may not seek to be consoled, but to console." },
        { s: "A", t: "For it is in giving that we receive. Amen." }
      ]
    }
  },

  // ── WEEK 27 ─────────────────────────────────────────────────────────
  {
    week: 27,
    title: "Mary: Our Spiritual Mother",
    pillar: "Prayer",
    verse: "Behold, your mother. — John 19:27",
    discover: {
      title: "Discover: Mary, Our Mother",
      instruction: "Tap each card to learn about the Blessed Virgin Mary!",
      items: [
        { icon: "🌸", name: "The Annunciation", desc: "God asked Mary to be the Mother of His Son. An angel brought the message. Mary said 'Yes' — 'Let it be done to me according to your word' (Luke 1:38, CCC 484)." },
        { icon: "👶", name: "Mother of Jesus", desc: "Mary carried, bore, and raised Jesus. She is truly the Mother of God because Jesus, her Son, is truly God (CCC 495)." },
        { icon: "✝️", name: "At the Cross", desc: "Mary stood faithfully at the foot of the cross when Jesus died. Her love never wavered even in the greatest suffering (CCC 618)." },
        { icon: "🌟", name: "The Assumption", desc: "At the end of her life, Mary was taken body and soul into heaven. This is called the Assumption — a special gift from God (CCC 974)." },
        { icon: "🌹", name: "Our Mother Too", desc: "From the cross, Jesus gave Mary to us as our spiritual mother. When we honor Mary, we honor her Son. She leads us always to Jesus (CCC 969)." }
      ]
    },
    secondary: "timeline",
    timeline: {
      title: "Mary's Story",
      instruction: "Tap two items to swap them into the correct order.",
      items: [
        { id: 1, text: "Gabriel announces God's plan — Mary says yes", order: 1 },
        { id: 2, text: "Mary gives birth to Jesus in Bethlehem", order: 2 },
        { id: 3, text: "Mary follows Jesus through His ministry", order: 3 },
        { id: 4, text: "Mary stands at the foot of the cross", order: 4 },
        { id: 5, text: "Mary is assumed body and soul into heaven", order: 5 }
      ]
    },
    quiz: {
      questions: [
        { q: "What did Mary say when the angel asked her to be Jesus' mother?", opts: ["No", "Let me think", "Yes, let it be done", "Ask Joseph"], correct: 2 },
        { q: "Mary is called 'Mother of ___.'", opts: ["Angels", "God", "Saints", "Heaven"], correct: 1 },
        { q: "Where was Mary when Jesus died?", opts: ["Home", "At the Last Supper", "At the foot of the cross", "In Jerusalem"], correct: 2 },
        { q: "The Assumption means Mary was taken body and soul into ___.", opts: ["The Church", "Jerusalem", "Heaven", "A garden"], correct: 2 },
        { q: "When we honor Mary, we honor ___.", opts: ["The angels", "Her Son Jesus", "The Church only", "All the saints"], correct: 1 }
      ]
    ,
    bonus: { q: "What is the first prayer many Catholics learn?", opts: ["The Rosary", "The Sign of the Cross", "The Creed", "The Angelus"], correct: 1, reward: "Prayer Warrior!" }
    },
    prayer: {
      title: "Memorare — Prayer to Mary",
      lines: [
        { s: "L", t: "Let us pray the Memorare — a beautiful prayer to Our Lady." },
        { s: "A", t: "Remember, O most gracious Virgin Mary, that never was it known." },
        { s: "L", t: "That anyone who fled to your protection or sought your intercession was left unaided." },
        { s: "A", t: "Inspired with this confidence, we fly to you, O Virgin of virgins, our Mother." },
        { s: "L", t: "To you do we come, before you we stand, sinful and sorrowful." },
        { s: "A", t: "O Mother of the Word Incarnate, despise not our petitions, but hear and answer us. Amen." }
      ]
    }
  },

  // ── WEEK 28 ─────────────────────────────────────────────────────────
  {
    week: 28,
    title: "Signs and Sacred Spaces",
    pillar: "Sacraments",
    verse: "How awesome is this place! This is the house of God. — Genesis 28:17",
    discover: {
      title: "Discover: Our Church Building",
      instruction: "Tap each card to learn about the sacred spaces in our church!",
      items: [
        { icon: "⛪", name: "The Church Building", desc: "The church building is a sacred place set apart for worship. When we enter, we are in a special place where God is especially present to us (CCC 1181)." },
        { icon: "💧", name: "Holy Water Font", desc: "Near the entrance, we dip our fingers in holy water and make the Sign of the Cross. It reminds us of our Baptism (CCC 1668)." },
        { icon: "🕯️", name: "The Sanctuary Lamp", desc: "A red lamp burns near the tabernacle to show that Jesus is truly present in the Eucharist. We genuflect (bend one knee) as a sign of respect (CCC 1379)." },
        { icon: "🎨", name: "Statues and Icons", desc: "Images of Jesus, Mary, and the saints help us pray. We do not worship them — they are like photos of dear friends who point us to God (CCC 1161)." },
        { icon: "🪑", name: "The Altar and Ambo", desc: "The altar is where the Eucharist is celebrated. The ambo is the stand where Scripture is proclaimed. Both are places where Christ is truly present (CCC 1182, 1184)." }
      ]
    },
    secondary: "sort",
    sort: {
      title: "Where Is It in Church?",
      instruction: "Tap each item, then tap where in the church it belongs.",
      items: [
        { name: "Holy water font", icon: "💧", group: "At the Entrance" },
        { name: "Altar", icon: "🍞", group: "In the Sanctuary" },
        { name: "Tabernacle", icon: "✨", group: "In the Sanctuary" },
        { name: "Ambo (lectern)", icon: "📖", group: "In the Sanctuary" },
        { name: "Pews for worshipers", icon: "🪑", group: "In the Nave" },
        { name: "Baptismal font", icon: "🌊", group: "At the Entrance" },
        { name: "Stations of the Cross", icon: "✝️", group: "In the Nave" }
      ],
      groups: ["At the Entrance", "In the Nave", "In the Sanctuary"],
      colors: { "At the Entrance": "#9B6DB8", "In the Nave": "#4A90D9", "In the Sanctuary": "#D4A843" },
      icons: { "At the Entrance": "🚪", "In the Nave": "🪑", "In the Sanctuary": "✨" }
    },
    quiz: {
      questions: [
        { q: "Why do we use holy water when entering church?", opts: ["For good luck", "To remember our Baptism", "To cool down", "It tastes good"], correct: 1 },
        { q: "A burning red lamp near the tabernacle tells us Jesus is ___.", opts: ["Coming soon", "Present in the Eucharist", "Being honored", "Praying"], correct: 1 },
        { q: "Why do we genuflect in church?", opts: ["It's exercise", "As a sign of respect for Jesus", "It's required by law", "To show we are Catholic"], correct: 1 },
        { q: "The ambo is where ___ is proclaimed.", opts: ["Communion is given", "Scripture is read", "Baptism happens", "Confession is heard"], correct: 1 },
        { q: "Images of saints in church help us ___.", opts: ["Worship the saints", "Pray and remember our friends in heaven", "Decorate the church", "Feel entertained"], correct: 1 }
      ]
    ,
    bonus: { q: "After confessing our sins, the priest gives us ___.", opts: ["candy", "absolution", "a grade", "homework"], correct: 1, reward: "Grace Expert!" }
    },
    prayer: {
      title: "Prayer Upon Entering Church",
      lines: [
        { s: "L", t: "Lord, we enter your house with reverence and joy." },
        { s: "A", t: "This is a holy place where you are truly present." },
        { s: "L", t: "As we sign ourselves with holy water, we remember our Baptism." },
        { s: "A", t: "We are your children, washed clean and made new in you." },
        { s: "L", t: "Help us to pray, listen, and worship you with our whole hearts." },
        { s: "A", t: "In the name of the Father, and of the Son, and of the Holy Spirit. Amen." }
      ]
    }
  },

  // ── WEEK 29 ─────────────────────────────────────────────────────────
  {
    week: 29,
    title: "We Are the Church!",
    pillar: "Creed",
    verse: "You are the light of the world. A city set on a hill cannot be hidden. — Matthew 5:14",
    discover: {
      title: "Discover: We Are the Church!",
      instruction: "Tap each card to learn your role in the Church!",
      items: [
        { icon: "🏛️", name: "The Body of Christ", desc: "St. Paul called the Church the 'Body of Christ.' Jesus is the head, and we are all members. Every person has an important role to play (CCC 791)." },
        { icon: "🌟", name: "You Are a Light", desc: "Jesus said 'You are the light of the world.' Every time we act with love, honesty, and kindness, we shine God's light into the world (Matthew 5:14)." },
        { icon: "⛪", name: "Our Parish Family", desc: "A parish is our local Church family — where we worship, learn, serve, and grow together. Our pastor leads the parish and the bishop leads the diocese." },
        { icon: "📣", name: "Share the Faith", desc: "Every baptized person is called to share their faith. This does not mean being preachy — it means living our faith joyfully so others notice something different about us (CCC 905)." },
        { icon: "🙏", name: "Pray for the World", desc: "One of the most important things we can do for the Church and the world is pray. Our prayers make a real difference — they are not just words (CCC 2745)." }
      ]
    },
    secondary: "fillblank",
    fillblank: {
      title: "We Are the Church!",
      instruction: "Fill in the missing word.",
      sentences: [
        { text: "St. Paul called the Church the ___ of Christ.", answer: "Body", options: ["Body", "Kingdom", "Voice", "Heart"] },
        { text: "Jesus said 'You are the ___ of the world.'", answer: "light", options: ["light", "salt", "hope", "joy"] },
        { text: "A ___ is our local Church community.", answer: "parish", options: ["parish", "diocese", "school", "convent"] },
        { text: "Our prayers for the world are real and ___.", answer: "powerful", options: ["powerful", "private", "quiet", "personal"] }
      ]
    },
    quiz: {
      questions: [
        { q: "St. Paul called the Church the ___ of Christ.", opts: ["Family", "Kingdom", "Body", "Voice"], correct: 2 },
        { q: "Jesus said 'You are the ___ of the world.'", opts: ["Salt", "Light", "Hope", "Love"], correct: 1 },
        { q: "A parish is our local Church ___.", opts: ["School", "Government", "Family", "Club"], correct: 2 },
        { q: "Every baptized person is called to ___ their faith.", opts: ["Keep private", "Share joyfully", "Only think about", "Study in books"], correct: 1 },
        { q: "Our prayers for the world are ___.", opts: ["Just words", "Useless", "Real and powerful", "Only for big problems"], correct: 2 }
      ]
    ,
    bonus: { q: "The Old Testament tells about life ___ Jesus was born.", opts: ["after", "during", "before", "instead of"], correct: 2, reward: "Faith Champion!" }
    },
    prayer: {
      title: "Prayer to Be the Church",
      lines: [
        { s: "L", t: "Lord, you call us to be your Body in the world." },
        { s: "A", t: "Help us to shine your light in our homes, schools, and neighborhoods." },
        { s: "L", t: "Make us generous in service and bold in sharing your love." },
        { s: "A", t: "May our parish grow in faith, hope, and love." },
        { s: "L", t: "Together, we are your Church — your hands and feet in the world." },
        { s: "A", t: "In the name of the Father, and of the Son, and of the Holy Spirit. Amen." }
      ]
    }
  },

  // ── WEEK 30 ─────────────────────────────────────────────────────────
  {
    week: 30,
    title: "Year in Review & Celebration",
    pillar: "Review",
    verse: "I am the way, the truth, and the life. — John 14:6",
    discover: {
      title: "Celebrate What We Learned!",
      instruction: "Tap each card to remember the big ideas from this year!",
      items: [
        { icon: "✝️", name: "God and the Trinity", desc: "God is our Creator and Father. Jesus is His Son, true God and true Man. The Holy Spirit lives in us since Baptism — Three Persons, One God (CCC 253)." },
        { icon: "🎁", name: "The 7 Sacraments", desc: "Jesus gave us 7 sacraments as channels of grace: Baptism, Confirmation, Eucharist, Reconciliation, Anointing, Holy Orders, and Matrimony (CCC 1210)." },
        { icon: "⚖️", name: "Living a Moral Life", desc: "God gives us commandments, a conscience, and free will to help us choose good. We are called to love God and neighbor, forgive, and serve (CCC 1950)." },
        { icon: "🙏", name: "Prayer and Mary", desc: "We learned the Our Father, the Hail Mary, and the Rosary. Mary is our spiritual mother. The saints pray for us from heaven (CCC 2708, 969)." },
        { icon: "⛪", name: "We Are the Church", desc: "We are baptized members of the Body of Christ. We worship at Mass, serve others, and shine God's light in the world. Our faith is a gift to share!" }
      ]
    },
    secondary: "sort",
    sort: {
      title: "Match Each Topic to Its Pillar!",
      instruction: "Tap each topic, then tap the pillar it belongs to.",
      items: [
        { name: "God created us in His image", icon: "🌍", group: "Creed" },
        { name: "Baptism washes away Original Sin", icon: "💧", group: "Sacraments" },
        { name: "The Ten Commandments", icon: "📜", group: "Morality" },
        { name: "The Our Father", icon: "🙏", group: "Prayer" },
        { name: "Jesus is true God and true Man", icon: "✝️", group: "Creed" },
        { name: "The Real Presence in the Eucharist", icon: "🍞", group: "Sacraments" },
        { name: "Forgiveness and the Works of Mercy", icon: "🤝", group: "Morality" },
        { name: "The Hail Mary and the Rosary", icon: "📿", group: "Prayer" }
      ],
      groups: ["Creed", "Sacraments", "Morality", "Prayer"],
      colors: { Creed: "#4A90D9", Sacraments: "#D4A843", Morality: "#6DB87B", Prayer: "#9B6DB8" },
      icons: { Creed: "✝️", Sacraments: "🎁", Morality: "⚖️", Prayer: "🙏" }
    },
    quiz: {
      questions: [
        { q: "How many Persons are in the Holy Trinity?", opts: ["1", "2", "3", "4"], correct: 2 },
        { q: "How many sacraments did Jesus give us?", opts: ["3", "5", "7", "10"], correct: 2 },
        { q: "Which sacrament forgives our sins?", opts: ["Baptism", "Eucharist", "Reconciliation", "Anointing"], correct: 2 },
        { q: "The Our Father was taught to us by ___.", opts: ["Moses", "Mary", "Jesus", "Peter"], correct: 2 },
        { q: "We are called to love God and our ___.", opts: ["Country", "Rules", "Neighbor", "Feelings"], correct: 2 }
      ]
    ,
    bonus: { q: "The Old Testament tells about life ___ Jesus was born.", opts: ["after", "during", "before", "instead of"], correct: 2, reward: "Super Scholar!" }
    },
    prayer: {
      title: "End-of-Year Celebration Prayer",
      lines: [
        { s: "L", t: "Lord, thank you for this wonderful year of learning about you." },
        { s: "A", t: "Thank you for our catechist, our classmates, and our parish family." },
        { s: "L", t: "Help us to carry everything we learned in our hearts." },
        { s: "A", t: "May we live as children of God — loving, forgiving, and serving." },
        { s: "L", t: "Jesus, you are the Way, the Truth, and the Life. Lead us always." },
        { s: "A", t: "In the name of the Father, and of the Son, and of the Holy Spirit. Amen." }
      ]
    }
  }

];
