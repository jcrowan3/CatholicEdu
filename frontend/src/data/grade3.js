import { defineCurriculum } from "./curriculumSchema.js";

export const PILLAR_COLORS = { Creed: "#4A90D9", Sacraments: "#D4A843", Morality: "#6DB87B", Prayer: "#9B6DB8" };

export const SESSIONS = [
  // ─── WEEK 1 ───────────────────────────────────────────────
  {
    week: 1,
    title: "The Church Jesus Built",
    pillar: "Creed",
    ccc: "748-769",
    verse: "You are Peter, and upon this rock I will build my Church. \u2014 Matthew 16:18",
    discover: {
      title: "Discover: The Church",
      instruction: "Tap each card to learn how Jesus built His Church!",
      items: [
        { icon: "\ud83e\udea8", name: "Peter the Rock", desc: "Jesus chose Peter to be the leader of His Church. The name 'Peter' means 'rock' \u2014 and Jesus built His Church on this rock! (CCC 552)" },
        { icon: "\ud83d\udd11", name: "The Keys", desc: "Jesus gave Peter 'the keys of the kingdom of heaven' \u2014 the authority to lead and teach in His name. (CCC 553)" },
        { icon: "\ud83d\udc65", name: "The Apostles", desc: "Jesus chose 12 Apostles to spread the Good News. They were the first bishops of the Church. (CCC 858)" },
        { icon: "\ud83d\udd4a\ufe0f", name: "The Holy Spirit", desc: "At Pentecost, the Holy Spirit came upon the Apostles and gave them the power to teach and baptize. This was the 'birthday' of the Church! (CCC 731)" },
        { icon: "\u26ea", name: "The Church Today", desc: "The Church Jesus founded is alive today! The Pope is the successor of Peter, and bishops are successors of the Apostles. (CCC 880)" }
      ]
    },
    secondary: "timeline",
    timeline: {
      title: "Put It in Order!",
      instruction: "Tap two items to swap them into the correct order!",
      items: [
        { id: 1, text: "Jesus calls the Apostles", order: 1 },
        { id: 2, text: "Jesus gives Peter the keys", order: 2 },
        { id: 3, text: "Jesus dies and rises again", order: 3 },
        { id: 4, text: "Jesus ascends to heaven", order: 4 },
        { id: 5, text: "The Holy Spirit comes at Pentecost", order: 5 }
      ]
    },
    quiz: {
      questions: [
        { q: "Who did Jesus choose to lead His Church?", opts: ["John", "Peter", "Paul", "James"], correct: 1 },
        { q: "What does 'Peter' mean?", opts: ["Water", "Light", "Rock", "Fire"], correct: 2 },
        { q: "What event is called the 'birthday of the Church'?", opts: ["Christmas", "Easter", "Pentecost", "Palm Sunday"], correct: 2 },
        { q: "Who leads the Church on earth today?", opts: ["The President", "The Pope", "The Mayor", "The King"], correct: 1 },
        { q: "The Apostles were the first ___.", opts: ["Priests", "Deacons", "Bishops", "Monks"], correct: 2 }
      ],
    bonus: { q: "Jesus said 'the gates of the netherworld shall not prevail against it.' What does this promise mean for the Church?", opts: ["The Church has strong doors", "Hell has no gates", "Churches must have gates", "The Church will never be destroyed"], correct: 3, reward: "🌟 Scripture Scholar!" }
    },
    prayer: {
      title: "Prayer for the Church",
      lines: [
        { s: "L", t: "Let us pray for the Church that Jesus built." },
        { s: "A", t: "In the name of the Father, and of the Son, and of the Holy Spirit. Amen." },
        { s: "L", t: "Lord Jesus, you built your Church on the rock of Peter." },
        { s: "A", t: "Help us to be living stones in your Church." },
        { s: "L", t: "Send your Holy Spirit to guide our Pope and bishops." },
        { s: "A", t: "May we always be faithful members of your family. Amen." }
      ]
    }
  },

  // ─── WEEK 2 ───────────────────────────────────────────────
  {
    week: 2,
    title: "The Marks of the Church",
    pillar: "Creed",
    ccc: "811-870",
    verse: "One body and one Spirit, one Lord, one faith, one baptism. \u2014 Ephesians 4:4-5",
    discover: {
      title: "The Four Marks",
      instruction: "Tap each mark to learn what it means!",
      items: [
        { icon: "1\ufe0f\u20e3", name: "ONE", desc: "The Church is united in one faith, one baptism, and one Lord. Though we are many, we are one Body in Christ. (CCC 813)" },
        { icon: "\u2728", name: "HOLY", desc: "God is holy, and the Holy Spirit makes us holy through the Church and the sacraments. The Church includes many saints! (CCC 823-829)" },
        { icon: "\ud83c\udf0d", name: "CATHOLIC", desc: "'Catholic' means 'universal.' The Church is for ALL people in ALL places and ALL times. (CCC 830-831)" },
        { icon: "\ud83d\udcdc", name: "APOSTOLIC", desc: "The Church was founded on the Apostles. Their teaching has been handed down to every generation of bishops. (CCC 857)" }
      ]
    },
    secondary: "sort",
    sort: {
      title: "Match the Mark!",
      instruction: "Tap a description, then tap the mark it belongs to!",
      items: [
        { name: "United under the Pope", icon: "\ud83e\udd1d", group: "One" },
        { name: "The Holy Spirit makes us saints", icon: "\ud83d\ude07", group: "Holy" },
        { name: "For all people everywhere", icon: "\ud83c\udf0e", group: "Catholic" },
        { name: "Built on the Apostles", icon: "\ud83d\udcd6", group: "Apostolic" },
        { name: "One faith, one baptism", icon: "\ud83d\udca7", group: "One" },
        { name: "The sacraments make us holy", icon: "\ud83d\ude4f", group: "Holy" },
        { name: "In every country and language", icon: "\ud83d\udde3\ufe0f", group: "Catholic" },
        { name: "Bishops continue their teaching", icon: "\ud83d\udc68\u200d\ud83c\udfeb", group: "Apostolic" }
      ],
      groups: ["One", "Holy", "Catholic", "Apostolic"],
      colors: { One: "#4A90D9", Holy: "#D4A843", Catholic: "#6DB87B", Apostolic: "#9B6DB8" },
      icons: { One: "1\ufe0f\u20e3", Holy: "\u2728", Catholic: "\ud83c\udf0d", Apostolic: "\ud83d\udcdc" }
    },
    quiz: {
      questions: [
        { q: "How many marks of the Church are there?", opts: ["2", "4", "7", "10"], correct: 1 },
        { q: "What does 'Catholic' mean?", opts: ["Roman", "Holy", "Universal", "Ancient"], correct: 2 },
        { q: "The Church is Apostolic because it was built on the ___.", opts: ["Bible", "Apostles", "Saints", "Angels"], correct: 1 },
        { q: "What makes the Church holy?", opts: ["Good people", "The Holy Spirit", "Nice buildings", "Pretty music"], correct: 1 },
        { q: "We say the four marks in the ___.", opts: ["Our Father", "Hail Mary", "Nicene Creed", "Act of Contrition"], correct: 2 }
      ],
    bonus: { q: "If someone asks 'Why is the Church called Apostolic?', what is the best answer?", opts: ["Its teaching comes from the Apostles through the bishops", "It was built in ancient times", "It has many members", "It is named after an apostle"], correct: 0, reward: "🏆 Theology Pro!" }
    },
    prayer: {
      title: "From the Nicene Creed",
      lines: [
        { s: "L", t: "Let us profess the four marks of the Church together." },
        { s: "A", t: "In the name of the Father, and of the Son, and of the Holy Spirit. Amen." },
        { s: "L", t: "We believe in one, holy, catholic, and apostolic Church." },
        { s: "A", t: "We believe in one, holy, catholic, and apostolic Church." },
        { s: "L", t: "Lord, help us live as members of your one Church." },
        { s: "A", t: "Make us holy, make us welcoming, and keep us faithful. Amen." }
      ]
    }
  },

  // ─── WEEK 3 ───────────────────────────────────────────────
  {
    week: 3,
    title: "The Pope and the Bishops",
    pillar: "Creed",
    ccc: "880-896",
    verse: "Go, therefore, and make disciples of all nations. \u2014 Matthew 28:19",
    discover: {
      title: "Leaders of the Church",
      instruction: "Tap to learn about each leader in the Church!",
      items: [
        { icon: "\ud83d\udc51", name: "The Pope", desc: "The Pope is the Bishop of Rome and successor of St. Peter. He leads the whole Church on earth. (CCC 882)" },
        { icon: "\u2b06\ufe0f", name: "Bishops", desc: "Bishops are successors of the Apostles. Each bishop leads a diocese \u2014 a group of parishes. (CCC 886)" },
        { icon: "\u271d\ufe0f", name: "Priests", desc: "Priests celebrate Mass, hear confessions, and care for a parish community. They work with the bishop. (CCC 1564)" },
        { icon: "\ud83e\udd32", name: "Deacons", desc: "Deacons help at Mass, can baptize, and serve those in need. Some deacons are married! (CCC 1571)" },
        { icon: "\ud83d\ude4b", name: "The Laity", desc: "That's us! All baptized people who aren't ordained. We share the faith at home, school, and work. (CCC 897-900)" }
      ]
    },
    secondary: "timeline",
    timeline: {
      title: "Order of Church Leadership",
      instruction: "Put these in order from highest authority to all of us!",
      items: [
        { id: 1, text: "The Pope", order: 1 },
        { id: 2, text: "Bishops", order: 2 },
        { id: 3, text: "Priests", order: 3 },
        { id: 4, text: "Deacons", order: 4 },
        { id: 5, text: "The Laity (all of us!)", order: 5 }
      ]
    },
    quiz: {
      questions: [
        { q: "The Pope is the successor of which Apostle?", opts: ["John", "Paul", "Peter", "James"], correct: 2 },
        { q: "What is a diocese?", opts: ["A type of prayer", "A group of parishes led by a bishop", "A type of church", "A holy day"], correct: 1 },
        { q: "Who celebrates Mass in a parish?", opts: ["Deacons", "Bishops", "Priests", "The laity"], correct: 2 },
        { q: "Non-ordained baptized people are called the ___.", opts: ["Clergy", "Laity", "Friars", "Monks"], correct: 1 },
        { q: "Bishops are successors of the ___.", opts: ["Saints", "Prophets", "Apostles", "Angels"], correct: 2 }
      ],
    bonus: { q: "The unbroken line of Popes from Peter to today is called what?", opts: ["The Holy Chain", "The Papal Line", "Apostolic Succession", "The Bishop's List"], correct: 2, reward: "📖 Catechism Expert!" }
    },
    prayer: {
      title: "Prayer for Church Leaders",
      lines: [
        { s: "L", t: "Let us pray for all the leaders of our Church." },
        { s: "A", t: "In the name of the Father, and of the Son, and of the Holy Spirit. Amen." },
        { s: "L", t: "Lord, bless our Pope and give him wisdom and courage." },
        { s: "A", t: "Bless our bishops, priests, and deacons who serve us." },
        { s: "L", t: "Help all of us \u2014 the laity \u2014 to share your love every day." },
        { s: "A", t: "We are all part of your Church. Help us serve one another. Amen." }
      ]
    }
  },

  // ─── WEEK 4 ───────────────────────────────────────────────
  {
    week: 4,
    title: "The Parish: Our Faith Family",
    pillar: "Creed",
    ccc: "2179, 2226",
    verse: "They devoted themselves to the teaching of the Apostles, to fellowship, to the breaking of bread, and to prayers. \u2014 Acts 2:42",
    discover: {
      title: "Our Parish",
      instruction: "Tap to discover the parts of our parish family!",
      items: [
        { icon: "\ud83c\udfdb\ufe0f", name: "The Church Building", desc: "A sacred space where we gather to worship God. It's more than a building \u2014 it's where we meet Jesus! (CCC 1180)" },
        { icon: "\ud83d\udc68\u200d\u2b1b", name: "The Pastor", desc: "The priest who leads our parish community. He celebrates Mass, visits the sick, and cares for everyone. (CCC 2179)" },
        { icon: "\ud83d\udccb", name: "Ministries", desc: "Lectors read Scripture, the choir sings, ushers welcome, catechists teach \u2014 everyone has a role! (CCC 903)" },
        { icon: "\ud83c\udf89", name: "Parish Life", desc: "Potlucks, service projects, faith formation, festivals \u2014 a parish is a vibrant community of love! (CCC 2179)" },
        { icon: "\ud83d\udc9b", name: "You Are the Church", desc: "Every baptized person is an important part of the parish. The Church isn't just a building \u2014 it's US! (CCC 752)" }
      ]
    },
    secondary: "sort",
    sort: {
      title: "Sort Parish Activities!",
      instruction: "Tap an activity, then tap the category it belongs to!",
      items: [
        { name: "Sunday Mass", icon: "\u26ea", group: "Worship" },
        { name: "Food bank volunteering", icon: "\ud83e\udd6b", group: "Service" },
        { name: "Parish potluck dinner", icon: "\ud83c\udf7d\ufe0f", group: "Community" },
        { name: "CCD / Faith formation", icon: "\ud83d\udcda", group: "Learning" },
        { name: "Adoration", icon: "\ud83d\udd6f\ufe0f", group: "Worship" },
        { name: "Visiting the sick", icon: "\ud83d\udc90", group: "Service" },
        { name: "Christmas pageant", icon: "\ud83c\udf84", group: "Community" },
        { name: "Bible study", icon: "\ud83d\udcd6", group: "Learning" }
      ],
      groups: ["Worship", "Service", "Community", "Learning"],
      colors: { Worship: "#4A90D9", Service: "#6DB87B", Community: "#D4A843", Learning: "#9B6DB8" },
      icons: { Worship: "\u26ea", Service: "\ud83e\udd1d", Community: "\ud83c\udf89", Learning: "\ud83d\udcda" }
    },
    quiz: {
      questions: [
        { q: "A parish is a ___ of Catholics.", opts: ["Building", "Community", "Book", "Rule"], correct: 1 },
        { q: "What did the first Christians devote themselves to?", opts: ["Sports and games", "Teaching, fellowship, bread, prayers", "Building roads", "Making money"], correct: 1 },
        { q: "Who leads a parish?", opts: ["The mayor", "The principal", "The pastor/priest", "The president"], correct: 2 },
        { q: "We worship God together in the ___ building.", opts: ["School", "Church", "Library", "Office"], correct: 1 },
        { q: "Every baptized person is part of the ___.", opts: ["Government", "Church", "Team", "Club"], correct: 1 }
      ],
    bonus: { q: "In Acts 2:42, the first Christians devoted themselves to four things. Which of these is NOT one of them?", opts: ["Breaking of bread", "Building churches", "Prayers", "The Apostles' teaching"], correct: 1, reward: "✨ Faith Champion!" }
    },
    prayer: {
      title: "Prayer for Our Parish",
      lines: [
        { s: "L", t: "Lord, thank you for our parish family." },
        { s: "A", t: "In the name of the Father, and of the Son, and of the Holy Spirit. Amen." },
        { s: "L", t: "Thank you for our pastor and all who serve in our parish." },
        { s: "A", t: "Help us to love and serve one another." },
        { s: "L", t: "May our parish always be a place of welcome, prayer, and joy." },
        { s: "A", t: "Lord, bless our parish family. Amen." }
      ]
    }
  },

  // ─── WEEK 5 ───────────────────────────────────────────────
  {
    week: 5,
    title: "Unit 1 Review: The Church",
    pillar: "Creed",
    ccc: "748-780",
    verse: "You are Peter, and upon this rock I will build my Church. \u2014 Matthew 16:18",
    discover: {
      title: "Review: The Church",
      instruction: "Tap to review the big ideas from Unit 1!",
      items: [
        { icon: "\ud83e\udea8", name: "How Jesus Built the Church", desc: "Jesus chose Peter as the rock and gave him the keys. The Apostles spread the Good News. At Pentecost, the Church was born!" },
        { icon: "\u2728", name: "The Four Marks", desc: "One, Holy, Catholic, and Apostolic \u2014 we say these every time we pray the Nicene Creed." },
        { icon: "\ud83d\udc51", name: "Church Leaders", desc: "The Pope succeeds Peter. Bishops succeed the Apostles. Priests and deacons serve our parishes." },
        { icon: "\ud83d\udc9b", name: "Our Parish Family", desc: "A community of Catholics who worship, serve, learn, and celebrate together." }
      ]
    },
    secondary: "sort",
    sort: {
      title: "Review Match!",
      instruction: "Match each fact to the right lesson!",
      items: [
        { name: "Peter means 'rock'", icon: "\ud83e\udea8", group: "Week 1" },
        { name: "Catholic means 'universal'", icon: "\ud83c\udf0d", group: "Week 2" },
        { name: "Bishops lead dioceses", icon: "\u2b06\ufe0f", group: "Week 3" },
        { name: "We are the Church", icon: "\ud83d\udc9b", group: "Week 4" },
        { name: "Pentecost = birthday of the Church", icon: "\ud83d\udd25", group: "Week 1" },
        { name: "The Church is Apostolic", icon: "\ud83d\udcdc", group: "Week 2" },
        { name: "The Pope succeeds Peter", icon: "\ud83d\udc51", group: "Week 3" },
        { name: "Teaching, fellowship, bread, prayers", icon: "\ud83c\udf5e", group: "Week 4" }
      ],
      groups: ["Week 1", "Week 2", "Week 3", "Week 4"],
      colors: { "Week 1": "#4A90D9", "Week 2": "#D4A843", "Week 3": "#6DB87B", "Week 4": "#9B6DB8" },
      icons: { "Week 1": "1\ufe0f\u20e3", "Week 2": "2\ufe0f\u20e3", "Week 3": "3\ufe0f\u20e3", "Week 4": "4\ufe0f\u20e3" }
    },
    quiz: {
      questions: [
        { q: "Jesus built His Church on which Apostle?", opts: ["Paul", "John", "Peter", "Matthew"], correct: 2 },
        { q: "The four marks of the Church are:", opts: ["Faith, Hope, Love, Peace", "One, Holy, Catholic, Apostolic", "Big, Old, Pretty, Rich", "East, West, North, South"], correct: 1 },
        { q: "What does 'Catholic' mean?", opts: ["Roman", "Ancient", "Universal", "Perfect"], correct: 2 },
        { q: "The Pope is the successor of ___.", opts: ["Moses", "Peter", "Paul", "John"], correct: 1 },
        { q: "Bishops are successors of the ___.", opts: ["Prophets", "Kings", "Apostles", "Saints"], correct: 2 }
      ],
    bonus: { q: "Which mark of the Church means the same faith is taught everywhere in the world, from Africa to Asia to the Americas?", opts: ["One", "Holy", "Apostolic", "Catholic"], correct: 3, reward: "🌟 Review Master!" }
    },
    prayer: {
      title: "Glory Be",
      lines: [
        { s: "L", t: "Let us close our review by praising the Holy Trinity." },
        { s: "A", t: "In the name of the Father, and of the Son, and of the Holy Spirit. Amen." },
        { s: "A", t: "Glory be to the Father, and to the Son, and to the Holy Spirit." },
        { s: "A", t: "As it was in the beginning, is now, and ever shall be, world without end. Amen." }
      ]
    }
  },

  // ─── WEEK 6 ───────────────────────────────────────────────
  {
    week: 6,
    title: "What Is Grace?",
    pillar: "Sacraments",
    ccc: "1996-2005",
    verse: "My grace is sufficient for you. \u2014 2 Corinthians 12:9",
    discover: {
      title: "Discover Grace",
      instruction: "Tap to learn about God's amazing gift of grace!",
      items: [
        { icon: "\ud83c\udf81", name: "Grace Is a Gift", desc: "Grace is God's free gift of His own life and love in our souls. We can't earn it \u2014 God gives it freely! (CCC 1996)" },
        { icon: "\ud83d\udc8e", name: "Sanctifying Grace", desc: "This grace makes our souls holy. We first receive it at Baptism. It's like a spark of God's own life in us! (CCC 1999)" },
        { icon: "\ud83d\udca1", name: "Actual Grace", desc: "God's special help in everyday moments \u2014 to do good, resist temptation, and make wise choices. (CCC 2000)" },
        { icon: "\u26f2", name: "Grace and the Sacraments", desc: "The 7 sacraments are the main channels of grace. Through them, God pours His grace into our lives. (CCC 1131)" },
        { icon: "\ud83c\udf31", name: "Growing in Grace", desc: "Prayer, good works, and the sacraments help grace grow in us. We become more like Jesus! (CCC 2003)" }
      ]
    },
    secondary: "fillblank",
    fillblank: {
      title: "Fill in the Blanks!",
      instruction: "Complete each sentence about grace.",
      sentences: [
        { text: "Grace is God's free ___ to us.", answer: "gift", options: ["gift", "rule", "test", "job"] },
        { text: "We first receive sanctifying grace at ___.", answer: "Baptism", options: ["school", "Baptism", "home", "work"] },
        { text: "___ grace helps us in everyday moments.", answer: "Actual", options: ["Actual", "Big", "Tiny", "Special"] },
        { text: "The sacraments are channels of God's ___.", answer: "grace", options: ["power", "grace", "rules", "tests"] }
      ]
    },
    quiz: {
      questions: [
        { q: "What is grace?", opts: ["A prayer", "God's free gift of His life and love in us", "A type of song", "A Church rule"], correct: 1 },
        { q: "Can we earn grace?", opts: ["Yes, by being perfect", "Yes, by paying", "No \u2014 it is a free gift", "Only on Sundays"], correct: 2 },
        { q: "When do we first receive sanctifying grace?", opts: ["At school", "At Baptism", "At age 18", "At Confirmation"], correct: 1 },
        { q: "What are the main channels of grace?", opts: ["Books", "The sacraments", "Sports", "Movies"], correct: 1 },
        { q: "___ grace helps us in everyday moments.", opts: ["Sanctifying", "Special", "Actual", "Hidden"], correct: 2 }
      ],
    bonus: { q: "A friend says 'I can earn grace by being good enough.' How would you kindly correct them?", opts: ["Grace is God's free gift — we can never earn it", "You're right, keep trying!", "Grace is only for adults", "Grace comes from studying hard"], correct: 0, reward: "✨ Grace Guardian!" }
    },
    prayer: {
      title: "Prayer for Grace",
      lines: [
        { s: "L", t: "Lord, you give us your grace freely, out of pure love." },
        { s: "A", t: "In the name of the Father, and of the Son, and of the Holy Spirit. Amen." },
        { s: "L", t: "Fill us with your grace, Lord. Help us grow in holiness." },
        { s: "A", t: "Thank you, God, for your gift of grace." },
        { s: "L", t: "Help us share your grace with others through kindness and love." },
        { s: "A", t: "May your grace grow in us every day. Amen." }
      ]
    }
  },

  // ─── WEEK 7 ───────────────────────────────────────────────
  {
    week: 7,
    title: "Signs and Symbols in the Church",
    pillar: "Sacraments",
    ccc: "1145-1152",
    verse: "His invisible attributes have been understood through the things that have been made. \u2014 Romans 1:20",
    discover: {
      title: "Signs and Symbols",
      instruction: "Tap to learn how God uses signs to give us grace!",
      items: [
        { icon: "\ud83d\uded1", name: "Signs Point to Something", desc: "A stop sign tells us something we can't see (danger). Sacramental signs point to invisible grace! (CCC 1145)" },
        { icon: "\ud83d\udca7", name: "Sacramental Signs", desc: "Water, oil, bread, wine, laying on of hands \u2014 these visible signs carry invisible grace. (CCC 1152)" },
        { icon: "\ud83e\uded7", name: "Matter and Form", desc: "Every sacrament has 'stuff' (matter \u2014 like water) and 'words' (form \u2014 like 'I baptize you'). Both are needed! (CCC 1153)" },
        { icon: "\ud83d\udc41\ufe0f", name: "Visible and Invisible", desc: "We see water being poured, but God does the invisible work of washing away sin and giving new life! (CCC 1148)" },
        { icon: "\u271d\ufe0f", name: "Symbols Everywhere", desc: "The cross, holy water, candles, incense \u2014 the Church is full of signs that remind us of God's presence. (CCC 1667-1668)" }
      ]
    },
    secondary: "sort",
    sort: {
      title: "Match Signs to Sacraments!",
      instruction: "Tap a sign, then tap the sacrament it belongs to!",
      items: [
        { name: "Water poured three times", icon: "\ud83d\udca7", group: "Baptism" },
        { name: "Bread and wine", icon: "\ud83c\udf5e", group: "Eucharist" },
        { name: "Sacred chrism on forehead", icon: "\ud83e\uded2", group: "Confirmation" },
        { name: "White garment", icon: "\ud83d\udc57", group: "Baptism" },
        { name: "Words of absolution", icon: "\ud83d\udde3\ufe0f", group: "Reconciliation" },
        { name: "Laying on of hands", icon: "\ud83e\udd32", group: "Confirmation" }
      ],
      groups: ["Baptism", "Eucharist", "Confirmation", "Reconciliation"],
      colors: { Baptism: "#4A90D9", Eucharist: "#D4A843", Confirmation: "#E8773A", Reconciliation: "#6DB87B" },
      icons: { Baptism: "\ud83d\udca7", Eucharist: "\ud83c\udf5e", Confirmation: "\ud83e\uded2", Reconciliation: "\ud83d\udc9c" }
    },
    quiz: {
      questions: [
        { q: "What do sacramental signs do?", opts: ["Look pretty", "Point to invisible grace", "Make noise", "Cost money"], correct: 1 },
        { q: "'Matter' in a sacrament means the ___.", opts: ["Words spoken", "Stuff used (water, oil, bread)", "Music played", "Building used"], correct: 1 },
        { q: "'Form' in a sacrament means the ___.", opts: ["Shape of the church", "Words spoken", "Color of vestments", "Time of day"], correct: 1 },
        { q: "What does water in Baptism represent?", opts: ["Keeps us cool", "Washing clean, new life", "A drink", "A bath"], correct: 1 },
        { q: "Can we see grace directly?", opts: ["Yes, it glows", "Yes, it's blue", "No \u2014 it is invisible", "Only at night"], correct: 2 }
      ],
    bonus: { q: "Why does every sacrament need BOTH matter (stuff) AND form (words)?", opts: ["It's just a tradition", "The priest likes using objects", "Because God uses visible signs to give invisible grace", "Matter and form are the same thing"], correct: 2, reward: "🏆 Sacrament Scholar!" }
    },
    prayer: {
      title: "Prayer of the Senses",
      lines: [
        { s: "L", t: "Lord, you use things we can see, hear, and touch to give us your grace." },
        { s: "A", t: "In the name of the Father, and of the Son, and of the Holy Spirit. Amen." },
        { s: "L", t: "Thank you for water that washes us clean in Baptism." },
        { s: "A", t: "Thank you for bread and wine that become the Body and Blood of Jesus." },
        { s: "L", t: "Open our eyes to see your signs of love all around us." },
        { s: "A", t: "Help us receive your grace with grateful hearts. Amen." }
      ]
    }
  },

  // ─── WEEK 8 ───────────────────────────────────────────────
  {
    week: 8,
    title: "What Are Sacraments?",
    pillar: "Sacraments",
    ccc: "1210-1211",
    verse: "Jesus breathed on them and said: Receive the Holy Spirit. \u2014 John 20:22",
    discover: {
      title: "The 7 Sacraments",
      instruction: "Tap each sacrament to learn about it!",
      items: [
        { icon: "\ud83d\udca7", name: "Baptism", desc: "Welcomed into God's family \u2014 washed clean of original sin and filled with grace. (CCC 1213)" },
        { icon: "\ud83d\udd25", name: "Confirmation", desc: "Strengthened by the Holy Spirit to live and share our faith bravely. (CCC 1285)" },
        { icon: "\ud83c\udf5e", name: "Eucharist", desc: "Receiving Jesus' Body and Blood \u2014 the source and summit of our faith. (CCC 1324)" },
        { icon: "\ud83d\udc9c", name: "Reconciliation", desc: "God forgives our sins when we are truly sorry and confess to a priest. (CCC 1422)" },
        { icon: "\ud83d\ude4f", name: "Anointing of the Sick", desc: "Healing and strength for those who are seriously ill or near death. (CCC 1499)" },
        { icon: "\ud83d\udcff", name: "Holy Orders", desc: "Men are called and ordained to serve as deacons, priests, or bishops. (CCC 1536)" },
        { icon: "\ud83d\udc92", name: "Matrimony", desc: "A man and woman are united in love by God, forming a lifelong covenant. (CCC 1601)" }
      ]
    },
    secondary: "sort",
    sort: {
      title: "Sort the Sacraments!",
      instruction: "Tap a sacrament, then tap the group it belongs to!",
      items: [
        { name: "Baptism", icon: "\ud83d\udca7", group: "Initiation" },
        { name: "Eucharist", icon: "\ud83c\udf5e", group: "Initiation" },
        { name: "Confirmation", icon: "\ud83d\udd25", group: "Initiation" },
        { name: "Reconciliation", icon: "\ud83d\udc9c", group: "Healing" },
        { name: "Anointing of the Sick", icon: "\ud83d\ude4f", group: "Healing" },
        { name: "Holy Orders", icon: "\ud83d\udcff", group: "Service" },
        { name: "Matrimony", icon: "\ud83d\udc92", group: "Service" }
      ],
      groups: ["Initiation", "Healing", "Service"],
      colors: { Initiation: "#4A90D9", Healing: "#6DB87B", Service: "#D4A843" },
      icons: { Initiation: "\u2728", Healing: "\ud83d\udc9a", Service: "\ud83e\udd1d" }
    },
    quiz: {
      questions: [
        { q: "How many sacraments are there?", opts: ["3", "5", "7", "10"], correct: 2 },
        { q: "Who gave us the sacraments?", opts: ["The Pope", "Jesus", "Moses", "The Apostles"], correct: 1 },
        { q: "What do the sacraments give us?", opts: ["Money", "Homework", "God's grace", "Superpowers"], correct: 2 },
        { q: "Which sacrament welcomes us into God's family?", opts: ["Eucharist", "Confirmation", "Matrimony", "Baptism"], correct: 3 },
        { q: "Which sacrament forgives our sins?", opts: ["Anointing", "Reconciliation", "Holy Orders", "Baptism"], correct: 1 }
      ],
    bonus: { q: "A sacrament is defined as 'an outward sign instituted by Christ to give grace.' Who alone has the authority to create a sacrament?", opts: ["The Pope", "Jesus Christ", "Any bishop", "The saints"], correct: 1, reward: "📖 Catechism Expert!" }
    },
    prayer: {
      title: "Prayer for the Sacraments",
      lines: [
        { s: "L", t: "Let us remember that we are in the holy presence of God." },
        { s: "A", t: "In the name of the Father, and of the Son, and of the Holy Spirit. Amen." },
        { s: "L", t: "Lord Jesus, you gave us the sacraments so we could be close to you." },
        { s: "A", t: "Thank you, Jesus, for your gifts of love." },
        { s: "L", t: "Help us to receive the sacraments with joy and open hearts." },
        { s: "A", t: "May your grace fill us and help us grow in holiness. Amen." }
      ]
    }
  },

  // ─── WEEK 9 ───────────────────────────────────────────────
  {
    week: 9,
    title: "Sacraments of Initiation",
    pillar: "Sacraments",
    ccc: "1212-1419",
    verse: "Repent and be baptized, every one of you, in the name of Jesus Christ. \u2014 Acts 2:38",
    discover: {
      title: "The 3 Sacraments of Initiation",
      instruction: "Tap to learn how we become full members of the Church!",
      items: [
        { icon: "\ud83d\udeaa", name: "Baptism \u2014 The Door", desc: "Baptism is the door to the Church and to all other sacraments. Without it, we can't receive any others! (CCC 1213)" },
        { icon: "\ud83d\udee1\ufe0f", name: "Confirmation \u2014 The Seal", desc: "Confirmation completes Baptism. The bishop anoints us and we're sealed with the Holy Spirit forever! (CCC 1285)" },
        { icon: "\ud83c\udf5e", name: "Eucharist \u2014 The Nourishment", desc: "The Eucharist is the source and summit of Christian life. Jesus feeds us with His own Body and Blood! (CCC 1324)" },
        { icon: "\ud83d\udc68\u200d\ud83d\udc69\u200d\ud83d\udc67\u200d\ud83d\udc66", name: "Together = Full Members", desc: "These three sacraments together make us full members of the Church. They give us everything we need to live as Catholics. (CCC 1212)" },
        { icon: "\u267e\ufe0f", name: "Once or Often?", desc: "Baptism and Confirmation happen once \u2014 they leave a permanent mark on our souls. The Eucharist we receive again and again! (CCC 1272)" }
      ]
    },
    secondary: "timeline",
    timeline: {
      title: "Order of Initiation",
      instruction: "Put these in the correct order!",
      items: [
        { id: 1, text: "Baptism (the door)", order: 1 },
        { id: 2, text: "Confirmation (the seal)", order: 2 },
        { id: 3, text: "Eucharist (the nourishment)", order: 3 },
        { id: 4, text: "We become full members of the Church", order: 4 },
        { id: 5, text: "We continue receiving Eucharist throughout life", order: 5 }
      ]
    },
    quiz: {
      questions: [
        { q: "Which sacrament is the 'door' to all others?", opts: ["Eucharist", "Confirmation", "Baptism", "Matrimony"], correct: 2 },
        { q: "Which sacrament completes Baptism?", opts: ["Eucharist", "Confirmation", "Holy Orders", "Matrimony"], correct: 1 },
        { q: "The Eucharist is the ___ and summit of Christian life.", opts: ["Beginning", "Source", "End", "Middle"], correct: 1 },
        { q: "How many Sacraments of Initiation are there?", opts: ["1", "2", "3", "7"], correct: 2 },
        { q: "Which can be received more than once?", opts: ["Baptism", "Confirmation", "Eucharist", "All of them"], correct: 2 }
      ],
    bonus: { q: "Why is the Eucharist called the 'source and summit' of Christian life?", opts: ["It is the tallest part of the church", "It is the first sacrament we receive", "It is only celebrated on special days", "All grace flows from it and everything leads to it"], correct: 3, reward: "🌟 Eucharist Explorer!" }
    },
    prayer: {
      title: "Prayer of Initiation",
      lines: [
        { s: "L", t: "Lord, thank you for welcoming us into your Church." },
        { s: "A", t: "In the name of the Father, and of the Son, and of the Holy Spirit. Amen." },
        { s: "L", t: "Thank you for Baptism \u2014 the door to your family." },
        { s: "A", t: "Thank you for Confirmation \u2014 your Spirit strengthens us." },
        { s: "L", t: "Thank you for the Eucharist \u2014 Jesus feeds us with His Body and Blood." },
        { s: "A", t: "Help us treasure these gifts and live as faithful members of your Church. Amen." }
      ]
    }
  },

  // ─── WEEK 10 ──────────────────────────────────────────────
  {
    week: 10,
    title: "Sacraments of Healing and Service",
    pillar: "Sacraments",
    ccc: "1420-1666",
    verse: "Is anyone among you sick? Let him call the elders of the Church. \u2014 James 5:14",
    discover: {
      title: "Healing and Service",
      instruction: "Tap to discover the sacraments that heal us and help us serve!",
      items: [
        { icon: "\ud83d\udc9c", name: "Reconciliation", desc: "We confess our sins to a priest and receive God's forgiveness. It heals the damage sin does to our souls. (CCC 1422)" },
        { icon: "\ud83d\ude4f", name: "Anointing of the Sick", desc: "A priest anoints the seriously ill with holy oil, giving strength and peace. (CCC 1499)" },
        { icon: "\ud83d\udcff", name: "Holy Orders", desc: "Men are ordained as deacons, priests, or bishops to serve the Church in a special way. (CCC 1536)" },
        { icon: "\ud83d\udc92", name: "Matrimony", desc: "A man and woman promise lifelong love and are united by God. Their family becomes a 'domestic church.' (CCC 1601)" },
        { icon: "\ud83d\udc9a", name: "Healing + Service", desc: "Healing sacraments restore us when we're broken. Service sacraments build up the whole Church. (CCC 1421)" }
      ]
    },
    secondary: "sort",
    sort: {
      title: "Healing or Service?",
      instruction: "Tap a sacrament, then tap whether it's Healing or Service!",
      items: [
        { name: "Reconciliation", icon: "\ud83d\udc9c", group: "Healing" },
        { name: "Anointing of the Sick", icon: "\ud83d\ude4f", group: "Healing" },
        { name: "Holy Orders", icon: "\ud83d\udcff", group: "Service" },
        { name: "Matrimony", icon: "\ud83d\udc92", group: "Service" }
      ],
      groups: ["Healing", "Service"],
      colors: { Healing: "#6DB87B", Service: "#D4A843" },
      icons: { Healing: "\ud83d\udc9a", Service: "\ud83e\udd1d" }
    },
    quiz: {
      questions: [
        { q: "Name the two Sacraments of Healing.", opts: ["Baptism and Eucharist", "Reconciliation and Anointing of the Sick", "Matrimony and Holy Orders", "Confirmation and Baptism"], correct: 1 },
        { q: "Name the two Sacraments of Service.", opts: ["Baptism and Confirmation", "Reconciliation and Anointing", "Holy Orders and Matrimony", "Eucharist and Baptism"], correct: 2 },
        { q: "Who anoints the sick?", opts: ["A deacon", "A priest", "A teacher", "A doctor"], correct: 1 },
        { q: "In Reconciliation, we confess to a ___.", opts: ["Friend", "Teacher", "Priest", "Parent"], correct: 2 },
        { q: "Matrimony is a lifelong commitment of ___.", opts: ["Work", "Love", "Study", "Travel"], correct: 1 }
      ],
    bonus: { q: "Reconciliation and Anointing of the Sick are both Sacraments of Healing. What do they have in common?", opts: ["Both restore and strengthen our relationship with God", "Both use water", "Both can only happen once", "Both require a bishop"], correct: 0, reward: "✨ Healing Heart!" }
    },
    prayer: {
      title: "Prayer for Healing and Service",
      lines: [
        { s: "L", t: "Lord, you heal the sick and call people to serve." },
        { s: "A", t: "In the name of the Father, and of the Son, and of the Holy Spirit. Amen." },
        { s: "L", t: "We pray for all who are sick. Send them your healing and peace." },
        { s: "A", t: "Lord, hear our prayer." },
        { s: "L", t: "We pray for priests, deacons, and married couples who serve your Church." },
        { s: "A", t: "Bless them and give them strength. Amen." }
      ]
    }
  },
  // ─── WEEK 11 ──────────────────────────────────────────────
  {
    week: 11,
    title: "Baptism: Born into God's Family",
    pillar: "Sacraments",
    ccc: "1213-1284",
    verse: "Unless one is born of water and the Spirit, he cannot enter the kingdom of God. — John 3:5",
    discover: {
      title: "Discover Baptism",
      instruction: "Tap each part of Baptism to learn what happens!",
      items: [
        { icon: "💧", name: "Water", desc: "The priest pours water three times, saying 'I baptize you in the name of the Father, and of the Son, and of the Holy Spirit.' (CCC 1239)" },
        { icon: "🕯️", name: "Baptismal Candle", desc: "A candle is lit from the Easter candle — it represents the light of Christ that now lives in us! (CCC 1243)" },
        { icon: "👗", name: "White Garment", desc: "The white garment shows we have been made clean and new in Christ. We have 'put on Christ!' (CCC 1243)" },
        { icon: "🫒", name: "Sacred Chrism", desc: "The priest anoints the baby with holy oil called sacred chrism — we belong to Christ! (CCC 1241)" },
        { icon: "👨‍👩‍👧", name: "Godparents", desc: "Godparents promise to help the child grow in faith. They are spiritual helpers for life! (CCC 1255)" }
      ]
    },
    secondary: "fillblank",
    fillblank: {
      title: "Complete the Baptism Words!",
      instruction: "Fill in the missing words from the Baptism rite.",
      sentences: [
        { text: "I baptize you in the name of the ___.", answer: "Father", options: ["Father", "Church", "Priest", "Earth"] },
        { text: "and of the ___.", answer: "Son", options: ["Son", "Moon", "Priest", "Pope"] },
        { text: "and of the Holy ___.", answer: "Spirit", options: ["Water", "Bible", "Spirit", "Book"] },
        { text: "Baptism washes away original ___.", answer: "sin", options: ["sin", "water", "dust", "homework"] }
      ]
    },
    quiz: {
      questions: [
        { q: "What is poured on a person during Baptism?", opts: ["Oil", "Milk", "Water", "Juice"], correct: 2 },
        { q: "How many times does the priest pour water?", opts: ["1", "2", "3", "7"], correct: 2 },
        { q: "What does the white garment represent?", opts: ["Being cold", "Being made new in Christ", "A gift", "Being dry"], correct: 1 },
        { q: "Who promises to help the child grow in faith?", opts: ["Teachers", "Godparents", "Friends", "Neighbors"], correct: 1 },
        { q: "Baptism washes away ___.", opts: ["Dirt", "Germs", "Original sin", "Bad dreams"], correct: 2 }
      ],
    bonus: { q: "Why is water poured THREE times during Baptism — not once or twice?", opts: ["To make sure the baby is clean", "Because three is a lucky number", "In the name of each Person of the Trinity: Father, Son, Holy Spirit", "In honor of the three Apostles"], correct: 2, reward: "🏆 Baptism Scholar!" }
    },
    prayer: {
      title: "Baptism Renewal Prayer",
      lines: [
        { s: "L", t: "On the day of our Baptism, we became children of God." },
        { s: "A", t: "Thank you, Lord, for making us part of your family." },
        { s: "L", t: "Do you reject sin, so as to live in the freedom of the children of God?" },
        { s: "A", t: "I do." },
        { s: "L", t: "Do you believe in God, the Father almighty, Creator of heaven and earth?" },
        { s: "A", t: "I do." },
        { s: "L", t: "This is our faith. This is the faith of the Church." },
        { s: "A", t: "We are proud to profess it, in Christ Jesus our Lord. Amen." }
      ]
    }
  },

  // ─── WEEK 12 ──────────────────────────────────────────────
  {
    week: 12,
    title: "Confirmation: Sealed with the Spirit",
    pillar: "Sacraments",
    ccc: "1285-1321",
    verse: "You will receive power when the Holy Spirit comes upon you. — Acts 1:8",
    discover: {
      title: "Discover Confirmation",
      instruction: "Tap to learn about the sacrament that strengthens us!",
      items: [
        { icon: "⬆️", name: "The Bishop", desc: "Usually the bishop — a successor of the Apostles — is the one who confirms us. (CCC 1313)" },
        { icon: "🤲", name: "Laying on of Hands", desc: "An ancient sign calling the Holy Spirit to come upon us — the bishop extends his hands over us. (CCC 1288)" },
        { icon: "🫒", name: "Sacred Chrism", desc: "The bishop anoints our forehead with sacred chrism in the sign of the cross. (CCC 1293)" },
        { icon: "💬", name: "The Words", desc: "'Be sealed with the Gift of the Holy Spirit.' These powerful words complete the sacrament. (CCC 1300)" },
        { icon: "🎁", name: "Gifts of the Spirit", desc: "Wisdom, Understanding, Counsel, Fortitude, Knowledge, Piety, and Fear of the Lord — 7 gifts! (CCC 1831)" }
      ]
    },
    secondary: "fillblank",
    fillblank: {
      title: "Confirmation Fill-In!",
      instruction: "Complete each sentence about Confirmation.",
      sentences: [
        { text: "Be ___ with the Gift of the Holy Spirit.", answer: "sealed", options: ["sealed", "filled", "covered", "blessed"] },
        { text: "The bishop anoints with sacred ___.", answer: "chrism", options: ["chrism", "water", "milk", "juice"] },
        { text: "Confirmation strengthens us to ___ our faith.", answer: "share", options: ["hide", "share", "forget", "sell"] },
        { text: "There are ___ gifts of the Holy Spirit.", answer: "seven", options: ["three", "five", "seven", "twelve"] }
      ]
    },
    quiz: {
      questions: [
        { q: "Who usually administers Confirmation?", opts: ["A deacon", "The bishop", "A teacher", "The Pope"], correct: 1 },
        { q: "What oil is used in Confirmation?", opts: ["Olive oil", "Baby oil", "Sacred chrism", "Cooking oil"], correct: 2 },
        { q: "What words are spoken at Confirmation?", opts: ["I baptize you", "Be sealed with the Gift of the Holy Spirit", "Go in peace", "You are forgiven"], correct: 1 },
        { q: "How many gifts of the Holy Spirit are there?", opts: ["3", "5", "7", "12"], correct: 2 },
        { q: "Confirmation strengthens us to ___ our faith.", opts: ["Hide", "Forget", "Share", "Sell"], correct: 2 }
      ],
    bonus: { q: "The seven gifts of the Holy Spirit help us live as Christians. Which gift helps us be brave in standing up for our faith?", opts: ["Wisdom", "Fortitude", "Piety", "Knowledge"], correct: 1, reward: "🌟 Spirit Seeker!" }
    },
    prayer: {
      title: "Come, Holy Spirit",
      lines: [
        { s: "L", t: "Let us call upon the Holy Spirit and His seven gifts." },
        { s: "A", t: "In the name of the Father, and of the Son, and of the Holy Spirit. Amen." },
        { s: "L", t: "Come, Holy Spirit, fill our hearts with your love." },
        { s: "A", t: "Give us wisdom and understanding." },
        { s: "L", t: "Give us counsel and fortitude." },
        { s: "A", t: "Give us knowledge, piety, and reverence for you." },
        { s: "L", t: "Seal us with your gifts and make us brave witnesses." },
        { s: "A", t: "Come, Holy Spirit! Amen." }
      ]
    }
  },

  // ─── WEEK 13 ──────────────────────────────────────────────
  {
    week: 13,
    title: "The Eucharist: The Real Presence",
    pillar: "Sacraments",
    ccc: "1373-1381",
    verse: "I am the living bread which came down from heaven. Whoever eats this bread will live forever. — John 6:51",
    discover: {
      title: "The Real Presence",
      instruction: "Tap to discover the incredible truth about the Eucharist!",
      items: [
        { icon: "📖", name: "Jesus' Promise", desc: "Jesus said: 'I am the living bread. Whoever eats this bread will live forever.' He meant it literally! (CCC 1406)" },
        { icon: "🍷", name: "The Last Supper", desc: "Jesus took bread and said 'This is my body.' He took wine and said 'This is my blood.' Not a symbol — IS! (CCC 1339)" },
        { icon: "✨", name: "Transubstantiation", desc: "A big word for an amazing miracle! The bread and wine TRULY become Jesus' Body and Blood while still looking like bread and wine. (CCC 1376)" },
        { icon: "❌", name: "Not a Symbol", desc: "The Eucharist is NOT just a symbol or a reminder. It IS Jesus — Body, Blood, Soul, and Divinity! (CCC 1374)" },
        { icon: "🏛️", name: "The Tabernacle", desc: "The Eucharist is kept in the tabernacle. A special lamp burns nearby to show Jesus is present! (CCC 1379)" }
      ]
    },
    secondary: "fillblank",
    fillblank: {
      title: "Real Presence Fill-In!",
      instruction: "Complete each sentence about the Eucharist.",
      sentences: [
        { text: "Jesus said: This is my ___.", answer: "body", options: ["body", "book", "idea", "picture"] },
        { text: "The change is called ___.", answer: "transubstantiation", options: ["transformation", "transubstantiation", "translation", "transportation"] },
        { text: "The Eucharist IS Jesus, not a ___.", answer: "symbol", options: ["symbol", "snack", "story", "song"] },
        { text: "The Eucharist is kept in the ___.", answer: "tabernacle", options: ["closet", "tabernacle", "kitchen", "garage"] }
      ]
    },
    quiz: {
      questions: [
        { q: "What does the bread become at Mass?", opts: ["Better bread", "The Body of Christ", "A symbol", "A snack"], correct: 1 },
        { q: "Is the Eucharist a symbol?", opts: ["Yes", "Sometimes", "No — it IS Jesus", "Only for kids"], correct: 2 },
        { q: "What is transubstantiation?", opts: ["A prayer", "Bread and wine become Jesus' Body and Blood", "A song", "A holiday"], correct: 1 },
        { q: "Where did Jesus first give us the Eucharist?", opts: ["Bethlehem", "The Temple", "The Last Supper", "Nazareth"], correct: 2 },
        { q: "Where is the Eucharist kept in church?", opts: ["The sacristy", "The tabernacle", "The bell tower", "The office"], correct: 1 }
      ],
    bonus: { q: "If a friend says 'the Eucharist is just a symbol of Jesus,' what does the Church actually teach?", opts: ["Your friend is correct", "It becomes Jesus only on special holidays", "It depends on the priest", "The bread and wine truly become Jesus' Body and Blood"], correct: 3, reward: "📖 Real Presence Pro!" }
    },
    prayer: {
      title: "Prayer Before the Tabernacle",
      lines: [
        { s: "L", t: "Jesus, you are truly present in the Eucharist." },
        { s: "A", t: "In the name of the Father, and of the Son, and of the Holy Spirit. Amen." },
        { s: "L", t: "We believe that the Eucharist is your Body and Blood." },
        { s: "A", t: "Lord, I believe. Help my unbelief." },
        { s: "L", t: "Thank you for staying with us in the tabernacle." },
        { s: "A", t: "Jesus, we adore you. We love you. Stay with us always. Amen." }
      ]
    }
  },

  // ─── WEEK 14 ──────────────────────────────────────────────
  {
    week: 14,
    title: "The Parts of the Mass",
    pillar: "Sacraments",
    ccc: "1346-1355",
    verse: "Do this in memory of me. — Luke 22:19",
    discover: {
      title: "The Four Parts of the Mass",
      instruction: "Tap to learn what happens at each part of the Mass!",
      items: [
        { icon: "🚶", name: "Introductory Rites", desc: "We gather together, make the Sign of the Cross, and ask for God's mercy. (CCC 1348)" },
        { icon: "📖", name: "Liturgy of the Word", desc: "We hear readings from Scripture, the Gospel, and the homily (the priest's teaching). (CCC 1349)" },
        { icon: "🍞", name: "Liturgy of the Eucharist", desc: "The offertory, the consecration (bread and wine become Jesus!), and the Great Amen. (CCC 1350-1353)" },
        { icon: "🏁", name: "Concluding Rites", desc: "The final blessing and 'Go forth!' — we are sent to live our faith in the world! (CCC 1332)" },
        { icon: "🌍", name: "Every Mass", desc: "Whether in our parish or across the world, in any language — the Mass is the same sacrifice of Jesus. (CCC 1367)" }
      ]
    },
    secondary: "timeline",
    timeline: {
      title: "Order of the Mass",
      instruction: "Put the parts of the Mass in order!",
      items: [
        { id: 1, text: "Introductory Rites (gathering)", order: 1 },
        { id: 2, text: "Liturgy of the Word (readings)", order: 2 },
        { id: 3, text: "Liturgy of the Eucharist (sacrifice)", order: 3 },
        { id: 4, text: "Holy Communion (receiving Jesus)", order: 4 },
        { id: 5, text: "Concluding Rites (sent forth)", order: 5 }
      ]
    },
    quiz: {
      questions: [
        { q: "How many main parts does the Mass have?", opts: ["2", "3", "4", "6"], correct: 2 },
        { q: "Which part includes the readings?", opts: ["Introductory Rites", "Liturgy of the Word", "Concluding Rites", "Offertory"], correct: 1 },
        { q: "When does the bread become Jesus' Body?", opts: ["At the beginning", "During the readings", "At the consecration", "After Mass"], correct: 2 },
        { q: "What happens at Communion?", opts: ["We go home", "We receive Jesus", "We read the Bible", "We sing only"], correct: 1 },
        { q: "The Mass ends by sending us to ___.", opts: ["Go home and rest", "Live our faith in the world", "Eat lunch", "Take a nap"], correct: 1 }
      ],
    bonus: { q: "During which part of the Mass does the bread and wine become the Body and Blood of Christ?", opts: ["Liturgy of the Eucharist", "Introductory Rites", "Liturgy of the Word", "Concluding Rites"], correct: 0, reward: "✨ Mass Master!" }
    },
    prayer: {
      title: "Prayer Before Mass",
      lines: [
        { s: "L", t: "Lord Jesus, we are about to celebrate the Mass — the most beautiful prayer on earth." },
        { s: "A", t: "In the name of the Father, and of the Son, and of the Holy Spirit. Amen." },
        { s: "L", t: "Help us to listen carefully to your Word." },
        { s: "A", t: "Open our ears and our hearts." },
        { s: "L", t: "Help us to receive you in the Eucharist with love and reverence." },
        { s: "A", t: "Lord Jesus, we are ready. Come into our hearts. Amen." }
      ]
    }
  },

  // ─── WEEK 15 ──────────────────────────────────────────────
  {
    week: 15,
    title: "Receiving Holy Communion",
    pillar: "Sacraments",
    ccc: "1382-1401",
    verse: "As often as you eat this bread and drink the chalice, you proclaim the death of the Lord. — 1 Corinthians 11:26",
    discover: {
      title: "Receiving Jesus",
      instruction: "Tap to learn how to receive Holy Communion with reverence!",
      items: [
        { icon: "💎", name: "State of Grace", desc: "We must be free of mortal sin. If we've committed a serious sin, we go to Confession first. (CCC 1385)" },
        { icon: "⏰", name: "The Fast", desc: "We fast from food and drink (except water and medicine) for one hour before receiving Communion. (CCC 1387)" },
        { icon: "🍞", name: "'The Body of Christ'", desc: "The priest or minister holds up the host and says 'The Body of Christ.' (CCC 1396)" },
        { icon: "🙌", name: "'Amen!'", desc: "We say 'AMEN!' — which means 'I believe!' Yes, this IS the Body of Christ! (CCC 1396)" },
        { icon: "🙏", name: "Reverence", desc: "We receive with deep respect, either on the tongue or in the hand. Then we pray and give thanks. (CCC 1387)" }
      ]
    },
    secondary: "timeline",
    timeline: {
      title: "Steps to Receive Communion",
      instruction: "Put these steps in order!",
      items: [
        { id: 1, text: "Examine your conscience", order: 1 },
        { id: 2, text: "Go to Confession if needed", order: 2 },
        { id: 3, text: "Fast for one hour before Communion", order: 3 },
        { id: 4, text: "Approach with reverence", order: 4 },
        { id: 5, text: "Respond 'Amen' and receive Jesus", order: 5 }
      ]
    },
    quiz: {
      questions: [
        { q: "What must we be in to receive Communion?", opts: ["A good mood", "A state of grace", "A hurry", "A big group"], correct: 1 },
        { q: "How long do we fast before Communion?", opts: ["One day", "One hour", "One week", "One minute"], correct: 1 },
        { q: "What do we say when the priest says 'The Body of Christ'?", opts: ["Thank you", "Amen", "Please", "Alleluia"], correct: 1 },
        { q: "What does 'Amen' mean here?", opts: ["Goodbye", "I'm hungry", "I believe", "Let's go"], correct: 2 },
        { q: "What should we do after receiving?", opts: ["Talk to friends", "Pray and give thanks", "Leave immediately", "Take a nap"], correct: 1 }
      ],
    bonus: { q: "You realize you committed a serious sin this week. What should you do BEFORE receiving Communion?", opts: ["Just say sorry in your head", "Receive Communion anyway", "Go to Confession first", "Skip Mass entirely"], correct: 2, reward: "🏆 Communion Champion!" }
    },
    prayer: {
      title: "Prayer After Communion",
      lines: [
        { s: "L", t: "Lord Jesus, you have come into our hearts in Holy Communion." },
        { s: "A", t: "In the name of the Father, and of the Son, and of the Holy Spirit. Amen." },
        { s: "L", t: "Thank you for the gift of your Body and Blood." },
        { s: "A", t: "Thank you, Jesus, for loving us so much." },
        { s: "L", t: "Stay close to us today and every day." },
        { s: "A", t: "Help us to love others the way you love us. Amen." }
      ]
    }
  },

  // ─── WEEK 16 ──────────────────────────────────────────────
  {
    week: 16,
    title: "Unit 2-3 Review: Sacraments & Mass",
    pillar: "Sacraments",
    ccc: "1113-1134, 1322-1419",
    verse: "Jesus breathed on them and said: Receive the Holy Spirit. — John 20:22",
    discover: {
      title: "Review: Sacraments & Mass",
      instruction: "Tap to review the big ideas from Units 2-3!",
      items: [
        { icon: "🎁", name: "Grace", desc: "God's free gift given through the sacraments — we can't earn it, but we can grow in it!" },
        { icon: "7️⃣", name: "7 Sacraments in 3 Groups", desc: "Initiation (Baptism, Confirmation, Eucharist), Healing (Reconciliation, Anointing), Service (Holy Orders, Matrimony)." },
        { icon: "💧", name: "Baptism", desc: "Water, chrism, white garment, candle — born again as children of God!" },
        { icon: "🔥", name: "Confirmation", desc: "The bishop anoints with chrism. 'Be sealed with the Gift of the Holy Spirit.' 7 gifts!" },
        { icon: "🍞", name: "Eucharist & Mass", desc: "The Real Presence, transubstantiation, four parts of the Mass, how to receive Communion." }
      ]
    },
    secondary: "sort",
    sort: {
      title: "Sort the Review!",
      instruction: "Match each fact to the right topic!",
      items: [
        { name: "God's free gift of His life in us", icon: "✨", group: "Grace" },
        { name: "Water poured three times", icon: "💧", group: "Baptism" },
        { name: "Bishop anoints with chrism", icon: "🫒", group: "Confirmation" },
        { name: "Bread becomes Jesus' Body", icon: "🍞", group: "Eucharist" },
        { name: "Sanctifying and actual", icon: "💎", group: "Grace" },
        { name: "White garment and candle", icon: "🕯️", group: "Baptism" },
        { name: "Seven gifts of the Holy Spirit", icon: "🔥", group: "Confirmation" },
        { name: "Kept in the tabernacle", icon: "🏛️", group: "Eucharist" }
      ],
      groups: ["Grace", "Baptism", "Confirmation", "Eucharist"],
      colors: { Grace: "#D4A843", Baptism: "#4A90D9", Confirmation: "#E8773A", Eucharist: "#6DB87B" },
      icons: { Grace: "🎁", Baptism: "💧", Confirmation: "🔥", Eucharist: "🍞" }
    },
    quiz: {
      questions: [
        { q: "How many sacraments are there?", opts: ["3", "5", "7", "12"], correct: 2 },
        { q: "What is grace?", opts: ["A prayer", "God's free gift of His life in us", "A song", "A rule"], correct: 1 },
        { q: "Name the Sacraments of Initiation.", opts: ["Reconciliation, Anointing, Orders", "Baptism, Confirmation, Eucharist", "Matrimony and Holy Orders", "All seven"], correct: 1 },
        { q: "Is the Eucharist a symbol?", opts: ["Yes", "Sometimes", "No — it IS Jesus", "Only for adults"], correct: 2 },
        { q: "What do we say when we receive Communion?", opts: ["Thanks", "Amen", "Please", "Alleluia"], correct: 1 }
      ],
    bonus: { q: "Which sacrament can you receive only ONCE in your lifetime and can never be repeated?", opts: ["Eucharist", "Baptism", "Reconciliation", "Anointing of the Sick"], correct: 1, reward: "🌟 Review Master!" }
    },
    prayer: {
      title: "Glory Be",
      lines: [
        { s: "L", t: "Let us close our review by giving glory to God." },
        { s: "A", t: "In the name of the Father, and of the Son, and of the Holy Spirit. Amen." },
        { s: "A", t: "Glory be to the Father, and to the Son, and to the Holy Spirit." },
        { s: "A", t: "As it was in the beginning, is now, and ever shall be, world without end. Amen." }
      ]
    }
  },

  // ─── WEEK 17 ──────────────────────────────────────────────
  {
    week: 17,
    title: "The Liturgical Year: God's Calendar",
    pillar: "Sacraments",
    ccc: "1168-1173",
    verse: "For all things there is a time, and a season for every purpose under heaven. — Ecclesiastes 3:1",
    discover: {
      title: "The Liturgical Seasons",
      instruction: "Tap each season to discover its color and meaning!",
      items: [
        { icon: "🟣", name: "Advent", desc: "Purple — 4 weeks of waiting and preparing for Christmas. We light candles on the Advent wreath! (CCC 524)" },
        { icon: "⭐", name: "Christmas", desc: "White and gold — celebrating Jesus' birth! It's not just one day — it's a whole season! (CCC 525)" },
        { icon: "✝️", name: "Lent", desc: "Purple — 40 days of prayer, fasting, and almsgiving before Easter. We grow closer to Jesus. (CCC 540)" },
        { icon: "🌅", name: "Easter", desc: "White and gold — celebrating Jesus' resurrection for 50 days! The most important season! (CCC 1169)" },
        { icon: "🌿", name: "Ordinary Time", desc: "Green — the longest season. 'Ordinary' doesn't mean boring — it means 'counted' (ordered) time for growing in faith! (CCC 1163)" }
      ]
    },
    secondary: "timeline",
    timeline: {
      title: "Order of the Liturgical Year",
      instruction: "Put the seasons in order!",
      items: [
        { id: 1, text: "Advent (preparing for Jesus)", order: 1 },
        { id: 2, text: "Christmas (Jesus is born!)", order: 2 },
        { id: 3, text: "Ordinary Time (winter/spring)", order: 3 },
        { id: 4, text: "Lent (40 days of preparation)", order: 4 },
        { id: 5, text: "Easter (Jesus is risen — 50 days!)", order: 5 }
      ]
    },
    quiz: {
      questions: [
        { q: "What color is Advent?", opts: ["Green", "Red", "Purple", "White"], correct: 2 },
        { q: "How many days is Lent?", opts: ["7", "12", "40", "50"], correct: 2 },
        { q: "What season celebrates Jesus' resurrection?", opts: ["Advent", "Lent", "Christmas", "Easter"], correct: 3 },
        { q: "What is the longest liturgical season?", opts: ["Lent", "Advent", "Easter", "Ordinary Time"], correct: 3 },
        { q: "What color is Ordinary Time?", opts: ["Purple", "White", "Green", "Red"], correct: 2 }
      ],
    bonus: { q: "Advent and Lent both use purple vestments. What do these two seasons have in common?", opts: ["They both celebrate a birthday", "They are both 40 days long", "They both come in summer", "They are both times of preparation and waiting"], correct: 3, reward: "📖 Liturgy Scholar!" }
    },
    prayer: {
      title: "Prayer Through the Seasons",
      lines: [
        { s: "L", t: "Lord, you give us a beautiful calendar to celebrate your love all year long." },
        { s: "A", t: "In the name of the Father, and of the Son, and of the Holy Spirit. Amen." },
        { s: "L", t: "In Advent, help us wait with hope. At Christmas, help us rejoice." },
        { s: "A", t: "In Lent, help us grow. At Easter, help us celebrate your victory!" },
        { s: "L", t: "In Ordinary Time, help us grow in faith each and every day." },
        { s: "A", t: "Thank you for every season of grace. Amen." }
      ]
    }
  },

  // ─── WEEK 18 ──────────────────────────────────────────────
  {
    week: 18,
    title: "Holy Days and Feast Days",
    pillar: "Sacraments",
    ccc: "2177-2188",
    verse: "This is the day which the Lord has made. Let us exult and rejoice in it. — Psalm 118:24",
    discover: {
      title: "Special Days in the Church",
      instruction: "Tap to learn about the Church's special celebrations!",
      items: [
        { icon: "☀️", name: "Sunday", desc: "The Lord's Day! Every Sunday is a mini-Easter. We celebrate the Resurrection every week! (CCC 2174)" },
        { icon: "📅", name: "Holy Days of Obligation", desc: "Extra-special days when we MUST go to Mass — Christmas, Assumption, All Saints' Day, and more. (CCC 2177)" },
        { icon: "😇", name: "Feast Days", desc: "Days honoring the saints. A saint's feast day is their 'heavenly birthday' — the day they entered heaven! (CCC 1173)" },
        { icon: "🎊", name: "Solemnities", desc: "The most important celebrations in the Church — like Easter, Christmas, and Pentecost. (CCC 1168)" },
        { icon: "🎉", name: "Why Celebrate?", desc: "Remembering Jesus and the saints helps us grow closer to God and gives us heroes to follow! (CCC 1172)" }
      ]
    },
    secondary: "sort",
    sort: {
      title: "What Kind of Day?",
      instruction: "Tap each celebration, then tap its type!",
      items: [
        { name: "Mass every Sunday", icon: "☀️", group: "Every Week" },
        { name: "Christmas", icon: "🎄", group: "Holy Day" },
        { name: "St. Patrick's Day", icon: "☘️", group: "Feast Day" },
        { name: "All Saints' Day", icon: "😇", group: "Holy Day" },
        { name: "The Assumption of Mary", icon: "👑", group: "Holy Day" },
        { name: "St. Francis of Assisi", icon: "🐦", group: "Feast Day" }
      ],
      groups: ["Every Week", "Holy Day", "Feast Day"],
      colors: { "Every Week": "#4A90D9", "Holy Day": "#D4A843", "Feast Day": "#6DB87B" },
      icons: { "Every Week": "☀️", "Holy Day": "📅", "Feast Day": "😇" }
    },
    quiz: {
      questions: [
        { q: "What day is the Lord's Day?", opts: ["Saturday", "Sunday", "Monday", "Friday"], correct: 1 },
        { q: "What are Holy Days of Obligation?", opts: ["Regular school days", "Days we must attend Mass", "Vacation days", "Sports days"], correct: 1 },
        { q: "A saint's feast day celebrates their ___.", opts: ["Birthday on earth", "Heavenly birthday", "Vacation", "School day"], correct: 1 },
        { q: "Is Christmas a Holy Day of Obligation?", opts: ["No", "Only for kids", "Yes", "Only sometimes"], correct: 2 },
        { q: "Every Sunday is a mini-___.", opts: ["Holiday", "Easter", "Birthday", "Vacation"], correct: 1 }
      ],
    bonus: { q: "Why does the Church call every Sunday a 'mini-Easter'?", opts: ["Because Sunday is the day Jesus rose from the dead", "Because we eat special food", "Because we hide eggs", "Because Sunday is the last day of the week"], correct: 0, reward: "✨ Holy Day Hero!" }
    },
    prayer: {
      title: "Prayer to the Saints",
      lines: [
        { s: "L", t: "Lord, thank you for the saints who show us how to follow Jesus." },
        { s: "A", t: "In the name of the Father, and of the Son, and of the Holy Spirit. Amen." },
        { s: "L", t: "Holy saints in heaven, pray for us!" },
        { s: "A", t: "Help us to be saints too!" },
        { s: "L", t: "Thank you, Lord, for giving us special days to celebrate your love." },
        { s: "A", t: "May every day bring us closer to you. Amen." }
      ]
    }
  },

  // ─── WEEK 19 ──────────────────────────────────────────────
  {
    week: 19,
    title: "Sacred Objects and Vestments",
    pillar: "Sacraments",
    ccc: "1183, 1348-1350",
    verse: "You shall make holy vestments for Aaron, your brother, for glory and for beauty. — Exodus 28:2",
    discover: {
      title: "Sacred Objects",
      instruction: "Tap to learn about the beautiful things we use in worship!",
      items: [
        { icon: "⛪", name: "The Altar", desc: "The holy table where the sacrifice of the Mass takes place. It represents Christ Himself! (CCC 1383)" },
        { icon: "🏆", name: "Chalice and Paten", desc: "The chalice holds the wine (which becomes Jesus' Blood). The paten holds the bread (His Body). (CCC 1574)" },
        { icon: "🏛️", name: "Tabernacle", desc: "The sacred box where the Eucharist is kept. A sanctuary lamp burns nearby — Jesus is here! (CCC 1379)" },
        { icon: "✝️", name: "Crucifix", desc: "The cross with Jesus on it, displayed in every Catholic church. It reminds us of His sacrifice. (CCC 1192)" },
        { icon: "👔", name: "Vestments", desc: "The priest wears special clothing at Mass. The colors change with the liturgical season! (CCC 1348)" }
      ]
    },
    secondary: "sort",
    sort: {
      title: "Sort the Sacred Items!",
      instruction: "Tap an item, then tap the category it belongs to!",
      items: [
        { name: "Chalice", icon: "🏆", group: "Altar Items" },
        { name: "Paten", icon: "🍽️", group: "Altar Items" },
        { name: "Altar", icon: "⛪", group: "Altar Items" },
        { name: "Tabernacle", icon: "🏛️", group: "Church Furnishings" },
        { name: "Crucifix", icon: "✝️", group: "Church Furnishings" },
        { name: "Holy water font", icon: "💧", group: "Church Furnishings" },
        { name: "Chasuble", icon: "👔", group: "Vestments" },
        { name: "Stole", icon: "🎀", group: "Vestments" }
      ],
      groups: ["Altar Items", "Church Furnishings", "Vestments"],
      colors: { "Altar Items": "#D4A843", "Church Furnishings": "#4A90D9", Vestments: "#6DB87B" },
      icons: { "Altar Items": "🏆", "Church Furnishings": "🏛️", Vestments: "👔" }
    },
    quiz: {
      questions: [
        { q: "What is the chalice?", opts: ["A candle", "The cup for the Blood of Christ", "A prayer book", "A hymnal"], correct: 1 },
        { q: "Where is the Eucharist kept?", opts: ["The sacristy", "The tabernacle", "The bell tower", "The office"], correct: 1 },
        { q: "What burns near the tabernacle?", opts: ["Incense", "A candle/sanctuary lamp", "A fireplace", "Nothing"], correct: 1 },
        { q: "Vestment colors change with the ___.", opts: ["Weather", "Priest's mood", "Liturgical season", "Day of the week"], correct: 2 },
        { q: "The altar is where the ___ takes place.", opts: ["Homily", "Sacrifice of the Mass", "Choir practice", "Bible study"], correct: 1 }
      ],
    bonus: { q: "The sanctuary lamp (candle) burns near the tabernacle at all times. Why?", opts: ["To light up the church", "Because candles look nice", "To show that Jesus is truly present in the Eucharist", "To keep the church warm"], correct: 2, reward: "🏆 Sacred Objects Star!" }
    },
    prayer: {
      title: "Prayer Before the Crucifix",
      lines: [
        { s: "L", t: "Lord Jesus, we look upon your cross and remember your great love for us." },
        { s: "A", t: "In the name of the Father, and of the Son, and of the Holy Spirit. Amen." },
        { s: "L", t: "Thank you for giving your life for us on the cross." },
        { s: "A", t: "Help us to love others as you have loved us." },
        { s: "L", t: "May every sacred object in our church remind us of your presence." },
        { s: "A", t: "We adore you, Lord, and we thank you. Amen." }
      ]
    }
  },

  // ─── WEEK 20 ──────────────────────────────────────────────
  {
    week: 20,
    title: "Unit 4 Review: Liturgical Year",
    pillar: "Sacraments",
    ccc: "1163-1173",
    verse: "For all things there is a time. — Ecclesiastes 3:1",
    discover: {
      title: "Review: Liturgical Year",
      instruction: "Tap to review the liturgical year and sacred objects!",
      items: [
        { icon: "🗓️", name: "5 Seasons", desc: "Advent (purple), Christmas (white/gold), Lent (purple), Easter (white/gold), Ordinary Time (green)." },
        { icon: "📅", name: "Holy Days of Obligation", desc: "Special days when we must attend Mass — Christmas, All Saints' Day, and more." },
        { icon: "😇", name: "Saints' Feast Days", desc: "Their 'heavenly birthdays'! Each saint teaches us a unique way to follow Jesus." },
        { icon: "🏆", name: "Sacred Objects", desc: "Altar, chalice, paten, tabernacle, crucifix — each helps us worship God and receive His grace." },
        { icon: "👔", name: "Vestments", desc: "The priest's special clothing changes color with the liturgical season." }
      ]
    },
    secondary: "sort",
    sort: {
      title: "Match the Color!",
      instruction: "Tap a season, then tap its liturgical color!",
      items: [
        { name: "Advent", icon: "🟣", group: "Purple" },
        { name: "Christmas", icon: "⭐", group: "White/Gold" },
        { name: "Lent", icon: "✝️", group: "Purple" },
        { name: "Easter", icon: "🌅", group: "White/Gold" },
        { name: "Ordinary Time", icon: "🌿", group: "Green" },
        { name: "Pentecost", icon: "🔥", group: "Red" }
      ],
      groups: ["Purple", "White/Gold", "Green", "Red"],
      colors: { Purple: "#9B6DB8", "White/Gold": "#D4A843", Green: "#6DB87B", Red: "#D94A4A" },
      icons: { Purple: "🟣", "White/Gold": "⭐", Green: "🌿", Red: "🔴" }
    },
    quiz: {
      questions: [
        { q: "Name the 5 liturgical seasons.", opts: ["Spring, Summer, Fall, Winter, Rain", "Advent, Christmas, Lent, Easter, Ordinary Time", "Happy, Sad, Angry, Calm, Silly", "Red, Blue, Green, Yellow, Purple"], correct: 1 },
        { q: "What color is Lent?", opts: ["Green", "White", "Purple", "Red"], correct: 2 },
        { q: "Where is the Eucharist kept?", opts: ["The altar", "The tabernacle", "The pulpit", "The choir loft"], correct: 1 },
        { q: "What is a chalice?", opts: ["A vestment", "A type of prayer", "The cup for the Blood of Christ", "A book"], correct: 2 },
        { q: "A saint's feast day is their ___.", opts: ["Birthday", "Heavenly birthday", "Vacation", "Graduation"], correct: 1 }
      ],
    bonus: { q: "If a priest wears green vestments, which liturgical season is it?", opts: ["Advent", "Ordinary Time", "Lent", "Easter"], correct: 1, reward: "🌟 Review Master!" }
    },
    prayer: {
      title: "Hail Mary",
      lines: [
        { s: "L", t: "Let us close our review with a prayer to Our Lady." },
        { s: "A", t: "In the name of the Father, and of the Son, and of the Holy Spirit. Amen." },
        { s: "A", t: "Hail Mary, full of grace, the Lord is with thee." },
        { s: "A", t: "Blessed art thou among women, and blessed is the fruit of thy womb, Jesus." },
        { s: "A", t: "Holy Mary, Mother of God, pray for us sinners," },
        { s: "A", t: "now and at the hour of our death. Amen." }
      ]
    }
  },
  // ─── WEEK 21 ──────────────────────────────────────────────
  {
    week: 21,
    title: "The Ten Commandments (1-3)",
    pillar: "Morality",
    ccc: "2083-2195",
    verse: "I am the Lord your God. You shall not have strange gods before me. — Exodus 20:2-3",
    discover: {
      title: "Commandments 1-3: Love God",
      instruction: "Tap each commandment to learn how we show love for God!",
      items: [
        { icon: "1️⃣", name: "No Other Gods", desc: "I am the Lord your God — you shall not have strange gods before me. God must come first in our lives! (CCC 2084)" },
        { icon: "2️⃣", name: "God's Holy Name", desc: "You shall not take the name of the Lord your God in vain. God's name is sacred — use it with love and respect! (CCC 2142)" },
        { icon: "3️⃣", name: "Keep Holy the Lord's Day", desc: "Remember to keep holy the Lord's Day. Sunday is God's day — we go to Mass and rest! (CCC 2168)" },
        { icon: "❤️", name: "Loving God", desc: "The first 3 commandments all focus on our relationship with God — loving Him above all else. (CCC 2083)" },
        { icon: "☀️", name: "Sunday", desc: "The 3rd commandment means going to Mass on Sunday and resting from unnecessary work. It's a day for God and family! (CCC 2180)" }
      ]
    },
    secondary: "fillblank",
    fillblank: {
      title: "Complete the Commandments!",
      instruction: "Fill in the missing words.",
      sentences: [
        { text: "You shall not have strange ___ before me.", answer: "gods", options: ["gods", "friends", "toys", "books"] },
        { text: "You shall not take the name of the Lord in ___.", answer: "vain", options: ["vain", "song", "church", "school"] },
        { text: "Remember to keep holy the Lord's ___.", answer: "Day", options: ["Day", "Book", "House", "Name"] },
        { text: "The first 3 commandments teach us to love ___.", answer: "God", options: ["God", "Sports", "Money", "Toys"] }
      ]
    },
    quiz: {
      questions: [
        { q: "The first commandment says: have no other ___.", opts: ["Friends", "Gods", "Jobs", "Homes"], correct: 1 },
        { q: "The second commandment is about God's ___.", opts: ["House", "Name", "Book", "Rules"], correct: 1 },
        { q: "The third commandment tells us to keep holy ___.", opts: ["Monday", "Friday", "Sunday", "Wednesday"], correct: 2 },
        { q: "The first 3 commandments teach us to love ___.", opts: ["Ourselves", "Our neighbor", "God", "Money"], correct: 2 },
        { q: "On Sunday we should attend ___.", opts: ["A game", "A movie", "Mass", "A party"], correct: 2 }
      ],
    bonus: { q: "The first three commandments are about loving God. If someone put sports or popularity ABOVE God in their life, which commandment would that break?", opts: ["The 2nd — God's name in vain", "The 3rd — keep holy the Lord's Day", "The 5th — do not kill", "The 1st — no strange gods before me"], correct: 3, reward: "📖 Commandment Keeper!" }
    },
    prayer: {
      title: "Act of Love",
      lines: [
        { s: "L", t: "Let us pray an Act of Love to God." },
        { s: "A", t: "In the name of the Father, and of the Son, and of the Holy Spirit. Amen." },
        { s: "L", t: "O my God, I love you above all things." },
        { s: "A", t: "O my God, I love you above all things." },
        { s: "L", t: "I love you with my whole heart and soul because you are all good and worthy of all my love." },
        { s: "A", t: "Help me to love you more and more each day. Amen." }
      ]
    }
  },

  // ─── WEEK 22 ──────────────────────────────────────────────
  {
    week: 22,
    title: "The Ten Commandments (4-10)",
    pillar: "Morality",
    ccc: "2196-2557",
    verse: "Honor your father and your mother. — Exodus 20:12",
    discover: {
      title: "Commandments 4-10: Love Neighbor",
      instruction: "Tap each commandment to learn how we show love for others!",
      items: [
        { icon: "👨‍👩‍👧", name: "Honor Your Parents", desc: "Honor your father and mother. Obey them, respect them, and care for them. (CCC 2197)" },
        { icon: "🤍", name: "Respect All Life", desc: "You shall not kill. Every human life is sacred from conception to natural death. (CCC 2258)" },
        { icon: "💍", name: "Be Faithful and Pure", desc: "The 6th and 9th commandments teach us to be pure in body and mind, and faithful in marriage. (CCC 2331)" },
        { icon: "🎁", name: "Don't Steal, Be Generous", desc: "The 7th and 10th commandments say: don't steal, don't be greedy — instead, be generous! (CCC 2401)" },
        { icon: "📝", name: "Always Tell the Truth", desc: "You shall not bear false witness — never lie. Be honest and truthful always! (CCC 2464)" }
      ]
    },
    secondary: "sort",
    sort: {
      title: "Love God or Love Neighbor?",
      instruction: "Tap a commandment, then tap who it teaches us to love!",
      items: [
        { name: "No other gods", icon: "1️⃣", group: "Love God (1-3)" },
        { name: "Don't take God's name in vain", icon: "2️⃣", group: "Love God (1-3)" },
        { name: "Keep holy the Lord's Day", icon: "3️⃣", group: "Love God (1-3)" },
        { name: "Honor your father and mother", icon: "👨‍👩‍👧", group: "Love Neighbor (4-10)" },
        { name: "You shall not kill", icon: "🤍", group: "Love Neighbor (4-10)" },
        { name: "You shall not steal", icon: "🎁", group: "Love Neighbor (4-10)" },
        { name: "You shall not lie", icon: "📝", group: "Love Neighbor (4-10)" }
      ],
      groups: ["Love God (1-3)", "Love Neighbor (4-10)"],
      colors: { "Love God (1-3)": "#4A90D9", "Love Neighbor (4-10)": "#6DB87B" },
      icons: { "Love God (1-3)": "❤️", "Love Neighbor (4-10)": "🤝" }
    },
    quiz: {
      questions: [
        { q: "The 4th commandment is: Honor your ___ and ___.", opts: ["Friends and pets", "Father and mother", "Teachers and coaches", "Toys and games"], correct: 1 },
        { q: "The 5th commandment protects ___.", opts: ["Animals", "Human life", "Property", "The environment"], correct: 1 },
        { q: "The 8th commandment tells us not to ___.", opts: ["Eat", "Sleep", "Lie", "Play"], correct: 2 },
        { q: "Commandments 4-10 teach us to love our ___.", opts: ["Pets", "Neighbor", "Toys", "Homework"], correct: 1 },
        { q: "The 7th commandment says: do not ___.", opts: ["Run", "Steal", "Sing", "Read"], correct: 1 }
      ],
    bonus: { q: "The 8th Commandment says 'do not bear false witness.' Besides lying, what else does this commandment forbid?", opts: ["Gossip and spreading rumors about others", "Eating too much", "Playing too many games", "Staying up late"], correct: 0, reward: "✨ Moral Guide!" }
    },
    prayer: {
      title: "Act of Contrition",
      lines: [
        { s: "L", t: "Let us ask God's forgiveness for the times we've broken His commandments." },
        { s: "A", t: "In the name of the Father, and of the Son, and of the Holy Spirit. Amen." },
        { s: "A", t: "O my God, I am heartily sorry for having offended you." },
        { s: "A", t: "I detest all my sins because I dread the loss of heaven and the pains of hell." },
        { s: "A", t: "But most of all because they offend you, my God, who are all good and deserving of all my love." },
        { s: "A", t: "I firmly resolve, with the help of your grace, to sin no more and to avoid the near occasions of sin. Amen." }
      ]
    }
  },

  // ─── WEEK 23 ──────────────────────────────────────────────
  {
    week: 23,
    title: "The Greatest Commandment",
    pillar: "Morality",
    ccc: "2055-2056",
    verse: "You shall love the Lord your God with all your heart, and with all your soul, and with all your mind. — Matthew 22:37",
    discover: {
      title: "The Two Great Commandments",
      instruction: "Discover what Jesus said was most important!",
      items: [
        { icon: "❤️", name: "Love God", desc: "The FIRST and GREATEST commandment: Love the Lord your God with all your heart, soul, and mind. (CCC 2055)" },
        { icon: "🤝", name: "Love Your Neighbor", desc: "The SECOND: Love your neighbor as yourself. Everyone is our neighbor! (CCC 2196)" },
        { icon: "📜", name: "All the Law", desc: "Jesus said ALL other commandments hang on these two. They sum up everything! (CCC 2055)" },
        { icon: "💛", name: "Love Yourself", desc: "Jesus said 'as yourself' — God wants us to love ourselves too, because we are His children. (CCC 2264)" },
        { icon: "✝️", name: "Jesus Shows the Way", desc: "Jesus didn't just teach this — He LIVED it. He loved God completely and gave His life for us. (CCC 459)" }
      ]
    },
    secondary: "fillblank",
    fillblank: {
      title: "Complete the Verse!",
      instruction: "Fill in the missing words from the Greatest Commandment.",
      sentences: [
        { text: "You shall love the Lord your God with all your ___.", answer: "heart", options: ["heart", "money", "toys", "homework"] },
        { text: "You shall love your ___ as yourself.", answer: "neighbor", options: ["pet", "neighbor", "toys", "phone"] },
        { text: "On these two commandments hang all the law and the ___.", answer: "prophets", options: ["rules", "prophets", "stories", "songs"] },
        { text: "The greatest of these is ___.", answer: "love", options: ["power", "love", "knowledge", "speed"] }
      ]
    },
    quiz: {
      questions: [
        { q: "What is the greatest commandment?", opts: ["Don't steal", "Love God with all your heart", "Go to school", "Be quiet"], correct: 1 },
        { q: "The second is: love your ___.", opts: ["Pet", "Neighbor", "Toys", "Phone"], correct: 1 },
        { q: "How many great commandments did Jesus give?", opts: ["1", "2", "5", "10"], correct: 1 },
        { q: "Who is our neighbor?", opts: ["People next door", "Only friends", "Everyone", "Only family"], correct: 2 },
        { q: "Jesus said all laws hang on ___.", opts: ["The Bible", "These two commandments", "The Pope", "The Church"], correct: 1 }
      ],
    bonus: { q: "Jesus said 'love your neighbor as yourself.' A student at school is being left out at recess. What would this commandment call you to do?", opts: ["Ignore them — it's not your problem", "Watch from a distance", "Invite them to play with you", "Tell the teacher but don't help"], correct: 2, reward: "🌟 Love in Action!" }
    },
    prayer: {
      title: "Prayer of Love",
      lines: [
        { s: "L", t: "Lord Jesus, you taught us the greatest commandment." },
        { s: "A", t: "Help us to love God with all our heart, soul, and mind." },
        { s: "L", t: "You showed us how to love our neighbor." },
        { s: "A", t: "Help us to see you in every person we meet." },
        { s: "L", t: "Fill our hearts with your love so we can share it with others." },
        { s: "A", t: "We ask this in your holy name. Amen." }
      ]
    }
  },

  // ─── WEEK 24 ──────────────────────────────────────────────
  {
    week: 24,
    title: "The Beatitudes",
    pillar: "Morality",
    ccc: "1716-1729",
    verse: "Blessed are the poor in spirit, for theirs is the kingdom of heaven. — Matthew 5:3",
    discover: {
      title: "The Beatitudes",
      instruction: "Tap each Beatitude to discover Jesus' recipe for true happiness!",
      items: [
        { icon: "🙏", name: "Poor in Spirit", desc: "Blessed are the poor in spirit — those who depend on God, not on things. The kingdom of heaven is theirs! (CCC 1716)" },
        { icon: "🕊️", name: "The Meek", desc: "Blessed are the meek — those who are gentle and patient. They will inherit the earth! (CCC 1716)" },
        { icon: "💜", name: "The Merciful", desc: "Blessed are the merciful — those who forgive others and show compassion. They will receive mercy! (CCC 1716)" },
        { icon: "☮️", name: "The Peacemakers", desc: "Blessed are the peacemakers — those who help people get along. They are called children of God! (CCC 1716)" },
        { icon: "💪", name: "The Persecuted", desc: "Blessed are those persecuted for doing right — even when it's hard, God rewards faithfulness! (CCC 1716)" }
      ]
    },
    secondary: "sort",
    sort: {
      title: "World vs. Jesus!",
      instruction: "What does the WORLD say vs. what JESUS says matters most?",
      items: [
        { name: "Having lots of stuff", icon: "💰", group: "The World Says" },
        { name: "Being famous", icon: "📱", group: "The World Says" },
        { name: "Being the strongest", icon: "💪", group: "The World Says" },
        { name: "Getting revenge", icon: "😤", group: "The World Says" },
        { name: "Depending on God", icon: "🙏", group: "Jesus Says" },
        { name: "Being gentle and patient", icon: "🕊️", group: "Jesus Says" },
        { name: "Forgiving others", icon: "💜", group: "Jesus Says" },
        { name: "Making peace", icon: "☮️", group: "Jesus Says" }
      ],
      groups: ["The World Says", "Jesus Says"],
      colors: { "The World Says": "#888888", "Jesus Says": "#D4A843" },
      icons: { "The World Says": "🌍", "Jesus Says": "✝️" }
    },
    quiz: {
      questions: [
        { q: "Where did Jesus teach the Beatitudes?", opts: ["The Temple", "The Last Supper", "The Sermon on the Mount", "The Garden"], correct: 2 },
        { q: "What does 'blessed' mean?", opts: ["Tired", "Sad", "Truly happy", "Hungry"], correct: 2 },
        { q: "Blessed are the ___ — they shall see God.", opts: ["Rich", "Pure in heart", "Strong", "Famous"], correct: 1 },
        { q: "Blessed are the peacemakers — they are called ___.", opts: ["Heroes", "Teachers", "Children of God", "Winners"], correct: 2 },
        { q: "The Beatitudes teach that real happiness comes from ___.", opts: ["Money", "Trusting God and loving others", "Fame", "Sports"], correct: 1 }
      ],
    bonus: { q: "Jesus says 'Blessed are the poor in spirit.' This does NOT mean having no money. What does it really mean?", opts: ["Being sad all the time", "Depending on God rather than on things", "Giving away everything you own", "Not caring about anything"], correct: 1, reward: "🏆 Beatitude Builder!" }
    },
    prayer: {
      title: "Beatitudes Prayer",
      lines: [
        { s: "L", t: "Lord Jesus, you taught us the path to true happiness." },
        { s: "A", t: "In the name of the Father, and of the Son, and of the Holy Spirit. Amen." },
        { s: "L", t: "Help us to be poor in spirit — to depend on you, not on things." },
        { s: "A", t: "Help us to be merciful — to forgive as you forgive us." },
        { s: "L", t: "Help us to be peacemakers — to bring your peace wherever we go." },
        { s: "A", t: "Jesus, teach us to find our happiness in you. Amen." }
      ]
    }
  },

  // ─── WEEK 25 ──────────────────────────────────────────────
  {
    week: 25,
    title: "Unit 5 Review: The Moral Life",
    pillar: "Morality",
    ccc: "1691-1698",
    verse: "You shall love the Lord your God with all your heart. — Matthew 22:37",
    discover: {
      title: "Review: The Moral Life",
      instruction: "Tap to review everything about the moral life!",
      items: [
        { icon: "1️⃣", name: "Commandments 1-3: Love God", desc: "No other gods, honor God's name, keep holy Sunday. These teach us to put God first!" },
        { icon: "🤝", name: "Commandments 4-10: Love Neighbor", desc: "Honor parents, respect life, be faithful, don't steal, don't lie. Love in action!" },
        { icon: "❤️", name: "The Greatest Commandment", desc: "Love God with all your heart, soul, and mind. Love your neighbor as yourself." },
        { icon: "😊", name: "The Beatitudes", desc: "Jesus' recipe for TRUE happiness: humility, mercy, peace, and trusting God." }
      ]
    },
    secondary: "sort",
    sort: {
      title: "Review Match!",
      instruction: "Match each teaching to the right lesson!",
      items: [
        { name: "No other gods before me", icon: "1️⃣", group: "Commandments 1-3" },
        { name: "Honor your father and mother", icon: "👨‍👩‍👧", group: "Commandments 4-10" },
        { name: "Love God with all your heart", icon: "❤️", group: "Greatest Commandment" },
        { name: "Blessed are the peacemakers", icon: "☮️", group: "Beatitudes" },
        { name: "Keep holy the Lord's Day", icon: "☀️", group: "Commandments 1-3" },
        { name: "Do not steal", icon: "🎁", group: "Commandments 4-10" },
        { name: "Love your neighbor as yourself", icon: "🤝", group: "Greatest Commandment" },
        { name: "Blessed are the merciful", icon: "💜", group: "Beatitudes" }
      ],
      groups: ["Commandments 1-3", "Commandments 4-10", "Greatest Commandment", "Beatitudes"],
      colors: { "Commandments 1-3": "#4A90D9", "Commandments 4-10": "#6DB87B", "Greatest Commandment": "#D4A843", Beatitudes: "#9B6DB8" },
      icons: { "Commandments 1-3": "📜", "Commandments 4-10": "🤝", "Greatest Commandment": "❤️", Beatitudes: "😊" }
    },
    quiz: {
      questions: [
        { q: "How many commandments are there?", opts: ["5", "7", "10", "12"], correct: 2 },
        { q: "Which commandment says 'honor your father and mother'?", opts: ["The 1st", "The 3rd", "The 4th", "The 8th"], correct: 2 },
        { q: "What is the greatest commandment?", opts: ["Don't steal", "Love God with all your heart", "Be quiet", "Go to school"], correct: 1 },
        { q: "What does 'blessed' mean?", opts: ["Tired", "Truly happy", "Angry", "Confused"], correct: 1 },
        { q: "The Beatitudes were taught by ___ on the ___.", opts: ["Moses, Sinai", "Jesus, Sermon on the Mount", "Peter, Temple", "Paul, Road"], correct: 1 }
      ],
    bonus: { q: "The Ten Commandments, the Greatest Commandment, and the Beatitudes ALL point to the same goal. What is it?", opts: ["Being famous", "Following lots of rules", "Avoiding all punishment", "Living in true love of God and neighbor"], correct: 3, reward: "🌟 Review Master!" }
    },
    prayer: {
      title: "Our Father",
      lines: [
        { s: "L", t: "Let us close our review with the prayer Jesus Himself taught us." },
        { s: "A", t: "In the name of the Father, and of the Son, and of the Holy Spirit. Amen." },
        { s: "A", t: "Our Father, who art in heaven, hallowed be thy name." },
        { s: "A", t: "Thy kingdom come, thy will be done, on earth as it is in heaven." },
        { s: "A", t: "Give us this day our daily bread, and forgive us our trespasses," },
        { s: "A", t: "as we forgive those who trespass against us." },
        { s: "A", t: "And lead us not into temptation, but deliver us from evil. Amen." }
      ]
    }
  },

  // ─── WEEK 26 ──────────────────────────────────────────────
  {
    week: 26,
    title: "What Is Prayer?",
    pillar: "Prayer",
    ccc: "2559-2567",
    verse: "Pray without ceasing. — 1 Thessalonians 5:17",
    discover: {
      title: "Discover Prayer",
      instruction: "Tap to learn about the four types of prayer!",
      items: [
        { icon: "💬", name: "Talking to God", desc: "Prayer is a conversation with God. He always listens, anywhere, anytime — even in silence! (CCC 2559)" },
        { icon: "👂", name: "Listening to God", desc: "Prayer isn't just talking! It's also being quiet and listening for God's voice in our hearts. (CCC 2560)" },
        { icon: "🌟", name: "Adoration", desc: "Praising God for who He is — the Creator, the Almighty, the All-Loving. We worship Him! (CCC 2628)" },
        { icon: "🙏", name: "Thanksgiving", desc: "Thanking God for His gifts — our family, friends, food, faith, and especially Jesus! (CCC 2637)" },
        { icon: "🙋", name: "Petition", desc: "Asking God for what we need — help with a test, healing for Grandma, peace in the world. (CCC 2629)" },
        { icon: "💔", name: "Contrition", desc: "Telling God we're sorry for our sins. God always forgives when we're truly sorry! (CCC 2631)" }
      ]
    },
    secondary: "sort",
    sort: {
      title: "What Type of Prayer?",
      instruction: "Tap a prayer, then tap its type!",
      items: [
        { name: "'God, you are amazing!'", icon: "🌟", group: "Adoration" },
        { name: "'Thank you for my family.'", icon: "🙏", group: "Thanksgiving" },
        { name: "'Please help my grandma.'", icon: "🙋", group: "Petition" },
        { name: "'I'm sorry I was mean.'", icon: "💔", group: "Contrition" },
        { name: "'Lord, you are holy and wonderful!'", icon: "✨", group: "Adoration" },
        { name: "'Thank you for this beautiful day!'", icon: "☀️", group: "Thanksgiving" },
        { name: "'Please help me on my test.'", icon: "📝", group: "Petition" },
        { name: "'Forgive me for not telling the truth.'", icon: "😔", group: "Contrition" }
      ],
      groups: ["Adoration", "Thanksgiving", "Petition", "Contrition"],
      colors: { Adoration: "#D4A843", Thanksgiving: "#6DB87B", Petition: "#4A90D9", Contrition: "#9B6DB8" },
      icons: { Adoration: "🌟", Thanksgiving: "🙏", Petition: "🙋", Contrition: "💔" }
    },
    quiz: {
      questions: [
        { q: "What is prayer?", opts: ["A song", "Talking and listening to God", "A book", "A rule"], correct: 1 },
        { q: "Can we pray only in church?", opts: ["Yes", "No — anywhere, anytime", "Only at night", "Only on Sunday"], correct: 1 },
        { q: "Name the 4 types of prayer.", opts: ["Read, Write, Sing, Dance", "Adoration, Thanksgiving, Petition, Contrition", "Morning, Noon, Night, Bedtime", "Loud, Soft, Fast, Slow"], correct: 1 },
        { q: "Which type of prayer praises God?", opts: ["Petition", "Contrition", "Adoration", "Thanksgiving"], correct: 2 },
        { q: "Which type of prayer says sorry?", opts: ["Adoration", "Thanksgiving", "Petition", "Contrition"], correct: 3 }
      ],
    bonus: { q: "You thank God for your family. Then you tell Him you're sorry for being mean to your brother. Which TWO types of prayer did you just use?", opts: ["Thanksgiving and Contrition", "Adoration and Petition", "Petition and Adoration", "Contrition and Petition"], correct: 0, reward: "✨ Prayer Champion!" }
    },
    prayer: {
      title: "Four Types of Prayer",
      lines: [
        { s: "L", t: "Let us practice all four types of prayer together." },
        { s: "A", t: "In the name of the Father, and of the Son, and of the Holy Spirit. Amen." },
        { s: "L", t: "ADORATION: Let us praise God for who He is." },
        { s: "A", t: "God, you are great and wonderful and holy. We worship you!" },
        { s: "L", t: "THANKSGIVING: Let us thank God for His gifts." },
        { s: "A", t: "Thank you, Lord, for our families, our friends, and our faith." },
        { s: "L", t: "PETITION: Let us ask God for what we need." },
        { s: "A", t: "Lord, help us to be kind, brave, and faithful." },
        { s: "L", t: "CONTRITION: Let us tell God we are sorry." },
        { s: "A", t: "Forgive us, Lord, for the times we have not loved you or others. Amen." }
      ]
    }
  },

  // ─── WEEK 27 ──────────────────────────────────────────────
  {
    week: 27,
    title: "The Our Father in Depth",
    pillar: "Prayer",
    ccc: "2759-2865",
    verse: "When you pray, say: Our Father, who art in heaven. — Luke 11:2",
    discover: {
      title: "Every Word Matters",
      instruction: "Tap each part of the Our Father to understand it deeply!",
      items: [
        { icon: "👨‍👩‍👧‍👦", name: "Our Father", desc: "We say 'OUR' not 'MY' — we pray as a family. God is the Father of all of us! (CCC 2786)" },
        { icon: "☁️", name: "Who art in heaven", desc: "God is everywhere, but heaven is His special dwelling place — and our true home! (CCC 2794)" },
        { icon: "✨", name: "Hallowed be thy name", desc: "'Hallowed' means holy. We ask that everyone honor and respect God's holy name. (CCC 2807)" },
        { icon: "👑", name: "Thy kingdom come", desc: "We ask God to bring His kingdom of love, peace, and justice. It starts in our hearts! (CCC 2816)" },
        { icon: "🍞", name: "Give us our daily bread", desc: "We ask God for what we need — food for our body and the Eucharist for our soul! (CCC 2828)" },
        { icon: "💜", name: "Forgive us... as we forgive", desc: "We ask forgiveness AND promise to forgive others. The two go together! (CCC 2838)" },
        { icon: "🛡️", name: "Deliver us from evil", desc: "We ask God to protect us from temptation and from the evil one. God is our shield! (CCC 2850)" }
      ]
    },
    secondary: "fillblank",
    fillblank: {
      title: "Pray the Our Father!",
      instruction: "Fill in the missing words to complete the prayer.",
      sentences: [
        { text: "Our Father, who art in ___.", answer: "heaven", options: ["heaven", "church", "school", "town"] },
        { text: "Hallowed be thy ___.", answer: "name", options: ["house", "name", "day", "book"] },
        { text: "Thy ___ come.", answer: "kingdom", options: ["kingdom", "birthday", "friends", "angels"] },
        { text: "Give us this day our daily ___.", answer: "bread", options: ["homework", "bread", "water", "candy"] },
        { text: "And lead us not into ___.", answer: "temptation", options: ["trouble", "temptation", "traffic", "town"] }
      ]
    },
    quiz: {
      questions: [
        { q: "Who taught us the Our Father?", opts: ["Moses", "Peter", "Jesus", "Mary"], correct: 2 },
        { q: "Why 'Our' Father instead of 'My' Father?", opts: ["Sounds better", "We pray as God's family", "It's a rule", "No reason"], correct: 1 },
        { q: "What does 'hallowed' mean?", opts: ["Empty", "Scary", "Holy", "Loud"], correct: 2 },
        { q: "'Daily bread' also refers to the ___.", opts: ["School lunch", "Eucharist", "Bible", "Rosary"], correct: 1 },
        { q: "We also promise to ___ others.", opts: ["Study with", "Forgive", "Avoid", "Quiz"], correct: 1 }
      ],
    bonus: { q: "In the Our Father, we pray 'give us this day our daily bread.' Besides food, what else does 'daily bread' refer to according to Church teaching?", opts: ["Dessert", "Money", "The Eucharist", "Sleep"], correct: 2, reward: "📖 Our Father Expert!" }
    },
    prayer: {
      title: "Praying the Our Father",
      lines: [
        { s: "L", t: "Let us pray the prayer Jesus taught us, slowly and with meaning." },
        { s: "A", t: "Our Father, who art in heaven, hallowed be thy name." },
        { s: "A", t: "Thy kingdom come, thy will be done, on earth as it is in heaven." },
        { s: "A", t: "Give us this day our daily bread," },
        { s: "A", t: "and forgive us our trespasses, as we forgive those who trespass against us." },
        { s: "A", t: "And lead us not into temptation, but deliver us from evil. Amen." }
      ]
    }
  },

  // ─── WEEK 28 ──────────────────────────────────────────────
  {
    week: 28,
    title: "The Hail Mary and the Rosary",
    pillar: "Prayer",
    ccc: "2673-2679, 2708",
    verse: "Hail, full of grace, the Lord is with you. — Luke 1:28",
    discover: {
      title: "The Hail Mary and Rosary",
      instruction: "Tap to discover the beautiful prayer to Mary!",
      items: [
        { icon: "👼", name: "The Angel's Words", desc: "'Hail, full of grace, the Lord is with thee' — these are the words the Angel Gabriel spoke to Mary! (CCC 2676)" },
        { icon: "👩", name: "Elizabeth's Words", desc: "'Blessed art thou among women, and blessed is the fruit of thy womb, Jesus' — Elizabeth said this when Mary visited! (CCC 2676)" },
        { icon: "⛪", name: "The Church's Prayer", desc: "'Holy Mary, Mother of God, pray for us sinners, now and at the hour of our death' — the Church added this. (CCC 2677)" },
        { icon: "📿", name: "The Rosary", desc: "A string of beads used to pray Hail Marys while meditating on events in Jesus' and Mary's life. (CCC 2708)" },
        { icon: "🌟", name: "The Mysteries", desc: "Joyful, Sorrowful, Glorious, and Luminous — four sets of events we think about while praying the Rosary. (CCC 2708)" }
      ]
    },
    secondary: "timeline",
    timeline: {
      title: "How the Hail Mary Came Together",
      instruction: "Put these in order!",
      items: [
        { id: 1, text: "Angel Gabriel greets Mary (Luke 1:28)", order: 1 },
        { id: 2, text: "Mary visits Elizabeth (Luke 1:42)", order: 2 },
        { id: 3, text: "The Church adds 'Holy Mary, Mother of God...'", order: 3 },
        { id: 4, text: "The Rosary combines these prayers", order: 4 },
        { id: 5, text: "We meditate on the Mysteries of Jesus' life", order: 5 }
      ]
    },
    quiz: {
      questions: [
        { q: "Who said 'Hail, full of grace'?", opts: ["Elizabeth", "Jesus", "The Angel Gabriel", "Peter"], correct: 2 },
        { q: "Who said 'Blessed art thou among women'?", opts: ["Gabriel", "Elizabeth", "Mary", "Joseph"], correct: 1 },
        { q: "How many sets of mysteries in the Rosary?", opts: ["2", "3", "4", "7"], correct: 2 },
        { q: "The Rosary helps us think about the life of ___.", opts: ["The saints", "Jesus", "The Apostles", "Moses"], correct: 1 },
        { q: "'Mother of God' is a title for ___.", opts: ["Elizabeth", "Martha", "Mary", "Ruth"], correct: 2 }
      ],
    bonus: { q: "The Rosary is not just about Mary — it helps us meditate on the life of Jesus. The four sets of mysteries are Joyful, Sorrowful, Glorious, and what?", opts: ["Wonderful", "Luminous", "Amazing", "Peaceful"], correct: 1, reward: "🌟 Rosary Devotee!" }
    },
    prayer: {
      title: "One Decade of the Rosary",
      lines: [
        { s: "L", t: "Let us pray one decade of the Rosary together." },
        { s: "A", t: "In the name of the Father, and of the Son, and of the Holy Spirit. Amen." },
        { s: "L", t: "Let us think about the Annunciation — when the Angel Gabriel told Mary she would be the Mother of God." },
        { s: "A", t: "Hail Mary, full of grace, the Lord is with thee." },
        { s: "A", t: "Blessed art thou among women, and blessed is the fruit of thy womb, Jesus." },
        { s: "A", t: "Holy Mary, Mother of God, pray for us sinners," },
        { s: "A", t: "now and at the hour of our death. Amen." },
        { s: "L", t: "Glory be to the Father, and to the Son, and to the Holy Spirit." },
        { s: "A", t: "As it was in the beginning, is now, and ever shall be, world without end. Amen." }
      ]
    }
  },

  // ─── WEEK 29 ──────────────────────────────────────────────
  {
    week: 29,
    title: "Saints Who Teach Us to Pray",
    pillar: "Prayer",
    ccc: "2683-2684",
    verse: "Since we are surrounded by so great a cloud of witnesses, let us run with perseverance. — Hebrews 12:1",
    discover: {
      title: "Saints and Prayer",
      instruction: "Tap each saint to learn how they prayed!",
      items: [
        { icon: "🐦", name: "St. Francis of Assisi", desc: "Francis prayed through creation — he saw God in everything! His Prayer of Peace is famous worldwide. (CCC 2684)" },
        { icon: "🌹", name: "St. Thérèse of Lisieux", desc: "'The Little Way' — Thérèse taught that prayer can be simple. Even small acts of love are powerful prayers! (CCC 2684)" },
        { icon: "🌹", name: "St. Juan Diego", desc: "Our Lady of Guadalupe appeared to Juan Diego. He trusted and obeyed even when others doubted him. (CCC 2684)" },
        { icon: "☘️", name: "St. Patrick", desc: "Patrick used the shamrock to teach about the Trinity. His prayers converted a whole nation! (CCC 2684)" },
        { icon: "🏔️", name: "St. Kateri Tekakwitha", desc: "The first Native American saint. She found deep peace in prayer despite great suffering. (CCC 2684)" }
      ]
    },
    secondary: "sort",
    sort: {
      title: "Match the Saint!",
      instruction: "Tap a description, then tap the saint it belongs to!",
      items: [
        { name: "'Make me an instrument of peace'", icon: "🕊️", group: "St. Francis" },
        { name: "'The Little Way' of doing small things with love", icon: "🌹", group: "St. Thérèse" },
        { name: "Our Lady of Guadalupe appeared to him", icon: "🌹", group: "St. Juan Diego" },
        { name: "Used a shamrock to teach the Trinity", icon: "☘️", group: "St. Patrick" },
        { name: "First Native American saint", icon: "🏔️", group: "St. Kateri" },
        { name: "Saw God in all creation", icon: "🐦", group: "St. Francis" }
      ],
      groups: ["St. Francis", "St. Thérèse", "St. Juan Diego", "St. Patrick", "St. Kateri"],
      colors: { "St. Francis": "#6DB87B", "St. Thérèse": "#D4A843", "St. Juan Diego": "#4A90D9", "St. Patrick": "#6DB87B", "St. Kateri": "#9B6DB8" },
      icons: { "St. Francis": "🐦", "St. Thérèse": "🌹", "St. Juan Diego": "🌹", "St. Patrick": "☘️", "St. Kateri": "🏔️" }
    },
    quiz: {
      questions: [
        { q: "Which saint said 'Make me an instrument of your peace'?", opts: ["St. Patrick", "St. Francis", "St. Thérèse", "St. Kateri"], correct: 1 },
        { q: "Which saint taught 'The Little Way'?", opts: ["St. Francis", "St. Thérèse of Lisieux", "St. Patrick", "St. Juan Diego"], correct: 1 },
        { q: "To whom did Our Lady of Guadalupe appear?", opts: ["St. Patrick", "St. Francis", "St. Juan Diego", "St. Kateri"], correct: 2 },
        { q: "Which saint used a shamrock to teach the Trinity?", opts: ["St. Francis", "St. Thérèse", "St. Juan Diego", "St. Patrick"], correct: 3 },
        { q: "Who was the first Native American saint?", opts: ["St. Juan Diego", "St. Patrick", "St. Kateri Tekakwitha", "St. Francis"], correct: 2 }
      ],
    bonus: { q: "St. Thérèse of Lisieux described prayer as 'a surge of the heart' and called her way 'The Little Way.' What did she mean by this?", opts: ["Only say short prayers", "Pray only when you feel like it", "Only children can pray well", "Do small things with great love for God"], correct: 3, reward: "🏆 Saints Scholar!" }
    },
    prayer: {
      title: "Prayer of St. Francis (adapted)",
      lines: [
        { s: "L", t: "Let us pray the Prayer of St. Francis together." },
        { s: "A", t: "In the name of the Father, and of the Son, and of the Holy Spirit. Amen." },
        { s: "L", t: "Lord, make me an instrument of your peace." },
        { s: "A", t: "Where there is hatred, let me bring love." },
        { s: "L", t: "Where there is sadness, let me bring joy." },
        { s: "A", t: "Where there is darkness, let me bring light." },
        { s: "L", t: "For it is in giving that we receive." },
        { s: "A", t: "It is in pardoning that we are pardoned. Amen." }
      ]
    }
  },

  // ─── WEEK 30 ──────────────────────────────────────────────
  {
    week: 30,
    title: "Year in Review & Celebration",
    pillar: "Creed",
    ccc: "426-429",
    verse: "I am the way, the truth, and the life. — John 14:6",
    discover: {
      title: "What We Learned This Year!",
      instruction: "Tap to remember the big topics we covered!",
      items: [
        { icon: "⛪", name: "The Church", desc: "Jesus built His Church on Peter, and it continues today with the Pope, bishops, priests, deacons, and all of us!" },
        { icon: "✨", name: "Four Marks", desc: "The Church is One, Holy, Catholic, and Apostolic — we profess this in the Nicene Creed." },
        { icon: "7️⃣", name: "The 7 Sacraments", desc: "Baptism, Confirmation, Eucharist, Reconciliation, Anointing of the Sick, Holy Orders, Matrimony." },
        { icon: "🗓️", name: "The Liturgical Year", desc: "Advent, Christmas, Lent, Easter, Ordinary Time — each season celebrates God's love." },
        { icon: "📜", name: "The Moral Life", desc: "The Ten Commandments, the Greatest Commandment, and the Beatitudes guide us to live like Jesus." },
        { icon: "🙏", name: "Prayer", desc: "We learned the Our Father in depth, prayed the Rosary, and discovered saints who teach us to pray." }
      ]
    },
    secondary: "sort",
    sort: {
      title: "Match the Pillar!",
      instruction: "Tap a topic, then tap the pillar it belongs to!",
      items: [
        { name: "Trinity", icon: "🔺", group: "Creed" },
        { name: "Baptism", icon: "💧", group: "Sacraments" },
        { name: "Ten Commandments", icon: "📜", group: "Morality" },
        { name: "The Rosary", icon: "📿", group: "Prayer" },
        { name: "Four Marks", icon: "✨", group: "Creed" },
        { name: "Eucharist", icon: "🍞", group: "Sacraments" },
        { name: "Beatitudes", icon: "😊", group: "Morality" },
        { name: "Our Father", icon: "🙏", group: "Prayer" }
      ],
      groups: ["Creed", "Sacraments", "Morality", "Prayer"],
      colors: { Creed: "#4A90D9", Sacraments: "#D4A843", Morality: "#6DB87B", Prayer: "#9B6DB8" },
      icons: { Creed: "⛪", Sacraments: "🍞", Morality: "📜", Prayer: "🙏" }
    },
    quiz: {
      questions: [
        { q: "How many marks of the Church are there?", opts: ["2", "3", "4", "7"], correct: 2 },
        { q: "Which sacrament forgives our sins?", opts: ["Baptism", "Confirmation", "Reconciliation", "Eucharist"], correct: 2 },
        { q: "What does 'hallowed' mean?", opts: ["Empty", "Scary", "Holy", "Loud"], correct: 2 },
        { q: "Jesus said the greatest commandment is to ___.", opts: ["Be rich", "Love God", "Stay home", "Be famous"], correct: 1 },
        { q: "Who gave us the sacraments?", opts: ["Moses", "Peter", "Jesus", "Mary"], correct: 2 }
      ],
    bonus: { q: "This year we learned about the Church, Sacraments, Morality, and Prayer — the four 'pillars' of Catholic faith. Where can you find ALL of these teachings gathered together?", opts: ["The Catechism of the Catholic Church", "The parish bulletin", "The school textbook", "The newspaper"], correct: 0, reward: "✨ Faith Champion!" }
    },
    prayer: {
      title: "End-of-Year Prayer",
      lines: [
        { s: "L", t: "Lord, thank you for an amazing year of learning about our faith." },
        { s: "A", t: "Thank you for our catechist, our classmates, and our parish family." },
        { s: "L", t: "Help us to remember everything we learned this year." },
        { s: "A", t: "And help us to live it out every day — at home, at school, and with our friends." },
        { s: "L", t: "May we always walk with you, Jesus — the Way, the Truth, and the Life." },
        { s: "A", t: "In the name of the Father, and of the Son, and of the Holy Spirit. Amen." }
      ]
    }
  }
];
export const CURRICULUM = defineCurriculum(3, SESSIONS);
