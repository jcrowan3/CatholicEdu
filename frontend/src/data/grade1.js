// GRADE 1 — "God's Love and Creation"
// Catholic Catechist Toolkit
// 30 sessions for ages 6–7; see docs/ai-content-provenance-audit.md.
// Scripture: Catholic Public Domain Version (CPDV)

export const PILLAR_COLORS = {
  Creed: "#4A90D9",
  Sacraments: "#D4A843",
  Morality: "#6DB87B",
  Prayer: "#9B6DB8",
  Review: "#C0607A",
};

const ACTIVITY_COLORS = ["#4A90D9", "#D4A843", "#6DB87B", "#9B6DB8"];
const ACTIVITY_ICONS = ["⭐", "💛", "🕊️", "🌿"];

function rotateQuestion([q, answer, ...distractors], offset) {
  const opts = [answer, ...distractors];
  const shift = offset % opts.length;
  const rotated = [...opts.slice(shift), ...opts.slice(0, shift)];
  return { q, opts: rotated, correct: rotated.indexOf(answer) };
}

function fillblank(title, rows) {
  return {
    type: "fillblank",
    data: {
      title,
      instruction: "Choose the word that completes each sentence.",
      sentences: rows.map(([text, answer, ...distractors], index) => {
        const question = rotateQuestion(["", answer, ...distractors], index);
        return { text, answer, options: question.opts };
      }),
    },
  };
}

function sort(title, groups, rows) {
  return {
    type: "sort",
    data: {
      title,
      instruction: "Tap each card, then tap the group where it belongs.",
      groups,
      items: rows.map(([name, group, icon = "⭐"]) => ({ name, group, icon })),
      colors: Object.fromEntries(groups.map((group, index) => [group, ACTIVITY_COLORS[index]])),
      icons: Object.fromEntries(groups.map((group, index) => [group, ACTIVITY_ICONS[index]])),
    },
  };
}

function timeline(title, rows) {
  return {
    type: "timeline",
    data: {
      title,
      instruction: "Tap two cards to put the story in the right order.",
      items: rows.map((text, index) => ({ id: index + 1, text, order: index + 1 })),
    },
  };
}

const LESSONS = [
  {
    week: 1,
    title: "God Made the World",
    pillar: "Creed",
    verse: "In the beginning, God created heaven and earth. — Genesis 1:1",
    scripture: "Genesis 1:1",
    ccc: "279",
    summary: "God lovingly created heaven and earth.",
    concepts: [
      ["🌍", "God Creates", "God freely made the whole world from nothing, with wisdom and love.", "Who made heaven and earth?", "God", "The stars", "People", "Animals"],
      ["🌟", "Creation Is Good", "Everything God made shows his goodness and beauty.", "What does creation show us about God?", "His goodness", "His distance", "His weakness", "His confusion"],
      ["🌿", "Care for Creation", "We thank God by treating his world, plants, animals, and people with care.", "How can we thank God for creation?", "Care for it", "Ignore it", "Waste it", "Harm it"],
    ],
    activity: timeline("God Creates the World", ["God creates light", "God makes the sky and seas", "God fills the earth with living things", "God creates people in his image"]),
    prayer: ["Thank you for the beautiful world you made.", "Help us care for your creation with love."],
  },
  {
    week: 2,
    title: "God Made Me",
    pillar: "Creed",
    verse: "And God created man to his own image; to the image of God he created him. — Genesis 1:27",
    scripture: "Genesis 1:27",
    ccc: "355–356",
    summary: "Every person is made in God's image and is precious.",
    concepts: [
      ["🪞", "God's Image", "God made every person in his image, able to know and love him.", "Whose image are people made in?", "God's image", "An angel's image", "A king's image", "No one's image"],
      ["💛", "Loved on Purpose", "God knows your name and made you on purpose; your life is a gift.", "How did God make you?", "With love and purpose", "By accident", "Without knowing you", "Only to work"],
      ["🤝", "Everyone Has Dignity", "Every person deserves love and respect because each person comes from God.", "Why should we respect every person?", "Each is made by God", "Only some are important", "Only friends matter", "People earn all dignity"],
    ],
    activity: fillblank("Made and Loved by God", [["God made every person in his ___.", "image", "house", "garden", "book"], ["My life is a ___ from God.", "gift", "mistake", "puzzle", "prize I earned"], ["Every person deserves love and ___.", "respect", "fear", "praise", "money"]]),
    prayer: ["Thank you for making each one of us in your image.", "Help us treat every person with love and respect."],
  },
  {
    week: 3,
    title: "God Is Our Father",
    pillar: "Creed",
    verse: "See what kind of love the Father has given to us, that we would be called, and would become, the sons of God. — 1 John 3:1",
    scripture: "1 John 3:1",
    ccc: "239",
    summary: "God is our loving Father who knows and cares for us.",
    concepts: [
      ["👨‍👧", "Perfect Father", "God is our Father in a way greater than any human parent.", "What kind of Father is God?", "A perfectly loving Father", "A forgetful father", "A faraway father", "A make-believe father"],
      ["🛡️", "God Cares", "God knows what we need and stays with us in joyful and difficult times.", "When does God care for us?", "Always", "Only on Sunday", "Only when happy", "Only when perfect"],
      ["🙏", "We Can Trust Him", "We can speak honestly to our Father in prayer and trust his goodness.", "How can we speak with God?", "In prayer", "Only by mail", "Only in dreams", "We cannot"],
    ],
    activity: sort("A Father's Loving Care", ["God Does", "We Can Do"], [["Knows our needs", "God Does", "💛"], ["Stays with us", "God Does", "🛡️"], ["Pray honestly", "We Can Do", "🙏"], ["Trust his love", "We Can Do", "🤲"]]),
    prayer: ["Thank you for being our loving Father.", "Help us trust that you are always near."],
  },
  {
    week: 4,
    title: "The Holy Trinity",
    pillar: "Creed",
    verse: "In the name of the Father and of the Son and of the Holy Spirit. — Matthew 28:19",
    scripture: "Matthew 28:19",
    ccc: "261",
    summary: "There is one God in three Persons: Father, Son, and Holy Spirit.",
    concepts: [
      ["☝️", "One God", "Catholics believe in one God, not three gods.", "How many Gods are there?", "One", "Two", "Three", "Many"],
      ["🔺", "Three Persons", "The one God is Father, Son, and Holy Spirit: three divine Persons.", "Who are the three Persons?", "Father, Son, Holy Spirit", "Jesus, Mary, Joseph", "Peter, Paul, John", "Faith, hope, love"],
      ["✝️", "Sign of the Cross", "We name the Trinity whenever we make the Sign of the Cross.", "What prayer names the Trinity?", "The Sign of the Cross", "A birthday wish", "A song", "A greeting"],
    ],
    activity: sort("Father, Son, and Holy Spirit", ["Father", "Son", "Holy Spirit"], [["Creator", "Father", "🌍"], ["Jesus", "Son", "✝️"], ["Came at Pentecost", "Holy Spirit", "🔥"], ["Became man", "Son", "👶"], ["Gives us life", "Holy Spirit", "🕊️"]]),
    prayer: ["Glory to you, Father, Son, and Holy Spirit.", "Help us live each day in your love."],
  },
  {
    week: 5,
    title: "Review: God Loves Us",
    pillar: "Review",
    verse: "Know that the Lord himself is God. He made us, and we ourselves did not. — Psalm 99:3",
    scripture: "Psalm 99:3",
    ccc: "198",
    summary: "Our one God created us, loves us, and is Father, Son, and Holy Spirit.",
    concepts: [
      ["🌍", "Creator", "God made the world and every person with love.", "Who is the Creator?", "God", "People", "Angels", "Nature"],
      ["💛", "Loved", "We are made in God's image and each person has dignity.", "Why is every person precious?", "Each is made in God's image", "Only talent matters", "Only age matters", "Only strength matters"],
      ["🔺", "Trinity", "The one God is Father, Son, and Holy Spirit.", "How many Persons are in the Trinity?", "Three", "One", "Two", "Four"],
    ],
    activity: sort("Review God's Love", ["Creation", "God's Image", "Trinity"], [["God made the world", "Creation", "🌍"], ["Every person has dignity", "God's Image", "💛"], ["Father, Son, Holy Spirit", "Trinity", "🔺"], ["Care for the earth", "Creation", "🌿"], ["Respect every person", "God's Image", "🤝"]]),
    prayer: ["Thank you for creating us and calling us your children.", "Keep us close to the Father, Son, and Holy Spirit."],
  },
  {
    week: 6,
    title: "Jesus Is the Son of God",
    pillar: "Creed",
    verse: "For God so loved the world that he gave his only-begotten Son. — John 3:16",
    scripture: "John 3:16",
    ccc: "422",
    summary: "Jesus is God's Son, sent to save us and show the Father's love.",
    concepts: [
      ["✝️", "God's Son", "Jesus is the eternal Son of God who became truly human for us.", "Who is Jesus?", "The Son of God", "Only a teacher", "An angel", "A storybook king"],
      ["💌", "Sent in Love", "The Father sent Jesus because God loves every person.", "Why did the Father send Jesus?", "Because God loves us", "To entertain us", "To make us rich", "Because people were perfect"],
      ["🛟", "Our Savior", "Jesus saves us from sin and leads us to friendship with God.", "What does Savior mean?", "Jesus saves us from sin", "Jesus builds houses", "Jesus writes laws only", "Jesus avoids people"],
    ],
    activity: fillblank("Jesus, God's Son", [["Jesus is the Son of ___.", "God", "Joseph only", "an angel", "a king"], ["The Father sent Jesus because he ___ us.", "loves", "forgot", "feared", "needed"], ["Jesus is our ___.", "Savior", "neighbor only", "soldier", "judge only"]]),
    prayer: ["Jesus, thank you for coming to show us the Father's love.", "Help us know you, love you, and follow you."],
  },
  {
    week: 7,
    title: "Mary Says Yes to God",
    pillar: "Creed",
    verse: "Behold, I am the handmaid of the Lord. Let it be done to me according to your word. — Luke 1:38",
    scripture: "Luke 1:38",
    ccc: "494",
    summary: "Mary trusted God and freely said yes to becoming Jesus' mother.",
    concepts: [
      ["👼", "The Angel's Message", "The angel Gabriel told Mary that she would be the mother of Jesus.", "Who brought God's message to Mary?", "The angel Gabriel", "A shepherd", "A king", "An Apostle"],
      ["💙", "Mary's Yes", "Mary trusted God and answered, 'Let it be done to me.'",
        "How did Mary answer God?", "She said yes with trust", "She laughed", "She ran away", "She demanded proof"],
      ["👩‍👦", "Mother of Jesus", "Mary is the mother of Jesus, who is truly God and truly man.", "Whose mother is Mary?", "Jesus' mother", "Peter's mother", "Gabriel's mother", "Moses' mother"],
    ],
    activity: timeline("The Annunciation", ["God sends the angel Gabriel", "Gabriel greets Mary", "Mary hears God's plan", "Mary freely says yes"]),
    prayer: ["Thank you for Mary's trusting yes.", "Help us say yes when you ask us to love and serve."],
  },
  {
    week: 8,
    title: "Jesus Is Born",
    pillar: "Creed",
    verse: "For today a Savior has been born for you in the city of David: he is Christ the Lord. — Luke 2:11",
    scripture: "Luke 2:11",
    ccc: "525",
    summary: "Jesus our Savior was born in Bethlehem and welcomed by humble people.",
    concepts: [
      ["⭐", "Bethlehem", "Mary laid the newborn Jesus in a manger in Bethlehem.", "Where was Jesus born?", "Bethlehem", "Rome", "Egypt", "Galilee"],
      ["🐑", "The Shepherds", "Angels announced the good news first to shepherds nearby.", "Who heard the angels' good news?", "Shepherds", "Soldiers", "Merchants", "Fishermen"],
      ["👶", "God Comes Close", "The Son of God became a little child, poor and humble, to draw us close.", "How did the Son of God come to us?", "As a little child", "As a rich ruler", "As an army", "As a cloud only"],
    ],
    activity: timeline("The Christmas Story", ["Mary and Joseph travel to Bethlehem", "Jesus is born and laid in a manger", "Angels announce good news", "Shepherds visit Jesus"]),
    prayer: ["Jesus, thank you for coming close to us at Christmas.", "Make our hearts ready to welcome you."],
  },
  {
    week: 9,
    title: "Jesus Grows in a Family",
    pillar: "Creed",
    verse: "And he descended with them and went to Nazareth. And he was subordinate to them. — Luke 2:51",
    scripture: "Luke 2:51",
    ccc: "531",
    summary: "Jesus grew in the Holy Family and made ordinary family life holy.",
    concepts: [
      ["🏠", "Nazareth", "Jesus lived a quiet childhood with Mary and Joseph in Nazareth.", "Where did Jesus grow up?", "Nazareth", "Bethlehem only", "Rome", "Athens"],
      ["👨‍👩‍👦", "Holy Family", "Jesus, Mary, and Joseph are called the Holy Family.", "Who belongs to the Holy Family?", "Jesus, Mary, and Joseph", "Peter, Paul, and John", "Moses, Aaron, and Miriam", "Three shepherds"],
      ["🧹", "Ordinary Holiness", "Jesus obeyed, learned, worked, prayed, and shared family life.", "What did Jesus make holy?", "Ordinary family life", "Only palaces", "Only travel", "Only celebrations"],
    ],
    activity: sort("Life in the Holy Family", ["Jesus Did", "We Can Do"], [["Obeyed Mary and Joseph", "Jesus Did", "💛"], ["Grew in Nazareth", "Jesus Did", "🏠"], ["Help our families", "We Can Do", "🤝"], ["Pray together", "We Can Do", "🙏"]]),
    prayer: ["Jesus, Mary, and Joseph, bless our families.", "Help us make our homes places of patience, prayer, and love."],
  },
  {
    week: 10,
    title: "Jesus Teaches Us to Love",
    pillar: "Morality",
    verse: "I give you a new commandment: Love one another. Just as I have loved you. — John 13:34",
    scripture: "John 13:34",
    ccc: "1823",
    summary: "Jesus commands us to love one another as he loves us.",
    concepts: [
      ["❤️", "Jesus' Command", "Jesus tells his disciples to love one another as he loves them.", "What does Jesus command us to do?", "Love one another", "Win every time", "Avoid everyone", "Collect things"],
      ["🤲", "Love Takes Action", "Christian love means choosing another person's good through kind words and deeds.", "How does Christian love act?", "It seeks another's good", "It only feels nice", "It expects prizes", "It ignores needs"],
      ["🌍", "Love Everyone", "Jesus asks us to love family, friends, strangers, and even people who are difficult.", "Whom does Jesus ask us to love?", "Everyone", "Only friends", "Only family", "Only people like us"],
    ],
    activity: sort("Loving Choices", ["Shows Love", "Does Not Show Love"], [["Invite someone who is alone", "Shows Love", "🤝"], ["Share fairly", "Shows Love", "🎁"], ["Use cruel words", "Does Not Show Love", "🗯️"], ["Ignore someone who needs help", "Does Not Show Love", "🙈"]]),
    prayer: ["Jesus, thank you for loving us completely.", "Teach us to choose patient and generous love."],
  },
  {
    week: 11,
    title: "Jesus Works Miracles",
    pillar: "Creed",
    verse: "Who do you think this is, that both wind and sea obey him? — Mark 4:40",
    scripture: "Mark 4:40",
    ccc: "547–548",
    summary: "Jesus' miracles are signs that God's Kingdom has come near.",
    concepts: [
      ["🌊", "Calming the Storm", "Jesus calmed wind and waves, showing his power over creation.", "What did Jesus calm?", "A storm", "A parade", "A classroom", "A market"],
      ["🩹", "Healing", "Jesus healed sick people with compassion and welcomed those others avoided.", "Why did Jesus heal people?", "He had compassion", "He wanted applause", "He owed them", "He feared them"],
      ["🪧", "Signs of the Kingdom", "Miracles point beyond themselves to God's saving presence.", "What do Jesus' miracles point to?", "God's Kingdom", "A magic show", "Human luck", "A secret club"],
    ],
    activity: sort("Jesus' Miracles", ["Healing", "Nature", "Feeding"], [["A man who could not walk", "Healing", "🩹"], ["A storm on the sea", "Nature", "🌊"], ["A crowd with loaves and fish", "Feeding", "🍞"], ["A person who could not see", "Healing", "👁️"]]),
    prayer: ["Jesus, your miracles show God's loving power.", "Help us trust you when we are afraid or in need."],
  },
  {
    week: 12,
    title: "Jesus the Good Shepherd",
    pillar: "Creed",
    verse: "I am the good Shepherd. I know my own, and my own know me. — John 10:14",
    scripture: "John 10:14",
    ccc: "754",
    summary: "Jesus is the Good Shepherd who knows, guides, and protects his people.",
    concepts: [
      ["🐑", "He Knows Us", "Jesus knows each of his sheep personally and calls us to follow him.", "How well does Jesus know us?", "Personally", "Not at all", "Only by our grade", "Only when we pray"],
      ["🧭", "He Guides Us", "Jesus guides us through his words and the teaching of his Church.", "How does Jesus guide us?", "By his word and Church", "By guessing", "By popularity", "By prizes"],
      ["🛡️", "He Protects Us", "The Good Shepherd stays with his flock and gives his life for the sheep.", "What does the Good Shepherd do?", "Stays with his sheep", "Leaves them alone", "Forgets their names", "Scares them"],
    ],
    activity: fillblank("The Good Shepherd", [["Jesus is the Good ___.", "Shepherd", "merchant", "soldier", "builder"], ["Jesus ___ each of us.", "knows", "forgets", "avoids", "tests only"], ["We listen to Jesus and ___ him.", "follow", "hide from", "replace", "command"]]),
    prayer: ["Jesus, our Good Shepherd, you know us by name.", "Guide us safely and help us listen to your voice."],
  },
  {
    week: 13,
    title: "The Last Supper and the Eucharist",
    pillar: "Sacraments",
    verse: "This is my body, which is given for you. Do this as a commemoration of me. — Luke 22:19",
    scripture: "Luke 22:19",
    ccc: "1337",
    summary: "At the Last Supper Jesus gave the Church the Eucharist.",
    concepts: [
      ["🍞", "This Is My Body", "Jesus took bread, gave thanks, and said, 'This is my body.'",
        "What did Jesus say over the bread?", "This is my body", "This is only a story", "Save this for later", "Give this away"],
      ["🍷", "The New Covenant", "Jesus shared the cup as the new covenant in his Blood.", "What did Jesus share with the Apostles?", "The cup", "A crown", "A sword", "A map"],
      ["⛪", "Do This", "Jesus commanded the Apostles to celebrate this memorial, which the Church continues at Mass.", "Where does the Church obey Jesus' command?", "At Mass", "At a sports game", "At bedtime only", "At a market"],
    ],
    activity: timeline("The Last Supper", ["Jesus gathers with the Apostles", "Jesus takes bread and gives thanks", "Jesus says, 'This is my body'", "Jesus tells them, 'Do this in memory of me'"]),
    prayer: ["Jesus, thank you for giving your Church the Eucharist.", "Prepare our hearts to love and worship you at Mass."],
  },
  {
    week: 14,
    title: "Jesus Gives His Life for Us",
    pillar: "Creed",
    verse: "No one has a greater love than this: that he lay down his life for his friends. — John 15:13",
    scripture: "John 15:13",
    ccc: "619–620",
    summary: "Jesus freely died on the Cross to save us from sin.",
    concepts: [
      ["✝️", "The Cross", "Jesus freely gave his life on the Cross out of love for the Father and for us.", "Why did Jesus give his life?", "Out of love", "By mistake", "For treasure", "To become famous"],
      ["🛟", "He Saves Us", "By his loving obedience, Jesus saves us from sin and opens the way to God.", "What does Jesus save us from?", "Sin", "Homework", "Rain", "Growing older"],
      ["❤️", "Greatest Love", "The Cross shows that God's love is faithful even when love is costly.", "What does the Cross show?", "God's faithful love", "God forgot us", "Power is everything", "Kindness is weak"],
    ],
    activity: fillblank("Jesus' Saving Love", [["Jesus died on the ___.", "Cross", "boat", "mountain", "road"], ["Jesus freely gave his life out of ___.", "love", "fear", "anger", "surprise"], ["Jesus saves us from ___.", "sin", "weather", "chores", "learning"]]),
    prayer: ["Jesus, thank you for loving us even unto the Cross.", "Help us trust your mercy and love others generously."],
  },
  {
    week: 15,
    title: "Jesus Rises from the Dead",
    pillar: "Creed",
    verse: "He is not here. For he has risen, just as he said. — Matthew 28:6",
    scripture: "Matthew 28:6",
    ccc: "638",
    summary: "Jesus truly rose from the dead on Easter Sunday.",
    concepts: [
      ["🌅", "Easter Morning", "On the third day, the tomb was empty because Jesus had truly risen.", "What happened on Easter morning?", "Jesus rose from the dead", "Jesus stayed in the tomb", "The Apostles left forever", "Nothing changed"],
      ["🪨", "The Empty Tomb", "The rolled-away stone and empty tomb were the first signs of the Resurrection.", "What did the women find?", "An empty tomb", "A locked house", "A full boat", "A palace"],
      ["🎉", "Death Is Defeated", "The Resurrection is the center of our faith and gives us hope of eternal life.", "What gives Christians hope of eternal life?", "Jesus' Resurrection", "Being famous", "Owning things", "Never suffering"],
    ],
    activity: timeline("Holy Week to Easter", ["Jesus shares the Last Supper", "Jesus dies on the Cross", "Jesus is laid in the tomb", "Jesus rises on Easter Sunday"]),
    prayer: ["Risen Jesus, you have defeated sin and death.", "Fill us with Easter joy and hope."],
  },
  {
    week: 16,
    title: "The Holy Spirit Is Our Helper",
    pillar: "Creed",
    verse: "The Advocate, the Holy Spirit... will teach you all things. — John 14:26",
    scripture: "John 14:26",
    ccc: "729",
    summary: "Jesus sends the Holy Spirit to teach, guide, and strengthen us.",
    concepts: [
      ["🕊️", "God the Holy Spirit", "The Holy Spirit is the third Person of the Trinity, truly God.", "Who is the Holy Spirit?", "The third Person of the Trinity", "A bird", "An idea", "An angel"],
      ["🧠", "He Teaches", "The Spirit helps the Church remember and understand all Jesus taught.", "What does the Holy Spirit help us understand?", "Jesus' teaching", "Only numbers", "Secret codes", "Weather"],
      ["💪", "He Strengthens", "The Holy Spirit gives courage and helps us choose what is good.", "What does the Spirit give us?", "Courage to do good", "Fear of everyone", "A perfect life", "Anything we demand"],
    ],
    activity: sort("The Holy Spirit Helps", ["Teaches", "Guides", "Strengthens"], [["Helps us understand Jesus", "Teaches", "📖"], ["Leads us toward good choices", "Guides", "🧭"], ["Gives courage", "Strengthens", "💪"], ["Reminds the Church of truth", "Teaches", "🧠"]]),
    prayer: ["Come, Holy Spirit, and fill our hearts.", "Teach us truth and give us courage to do good."],
  },
  {
    week: 17,
    title: "Pentecost",
    pillar: "Creed",
    verse: "And they were all filled with the Holy Spirit. — Acts 2:4",
    scripture: "Acts 2:4",
    ccc: "731–732",
    summary: "At Pentecost the Holy Spirit filled the disciples and revealed the Church.",
    concepts: [
      ["🌬️", "A Mighty Wind", "The disciples heard a sound like a strong wind when the Spirit came.", "What sound did the disciples hear?", "A mighty wind", "A trumpet band", "Ocean waves", "A whisper only"],
      ["🔥", "Tongues of Fire", "Something like tongues of fire rested over the disciples.", "What appeared over the disciples?", "Tongues like fire", "Crowns", "Rainbows", "Stars"],
      ["🗣️", "Courage to Share", "Filled with the Spirit, the disciples boldly proclaimed Jesus to people of many languages.", "What did the Spirit give the disciples?", "Courage to share Jesus", "A reason to hide", "Gold and silver", "A new building"],
    ],
    activity: timeline("Pentecost Day", ["The disciples pray together", "A sound like a mighty wind fills the house", "Tongues like fire appear", "The disciples proclaim Jesus boldly"]),
    prayer: ["Holy Spirit, you filled the disciples at Pentecost.", "Give your Church courage to share the Good News."],
  },
  {
    week: 18,
    title: "The Church Is God's Family",
    pillar: "Creed",
    verse: "Now they were persevering in the doctrine of the Apostles, and in the communion of the breaking of bread, and in the prayers. — Acts 2:42",
    scripture: "Acts 2:42",
    ccc: "751–752",
    summary: "The Church is God's gathered family, united in faith, worship, and love.",
    concepts: [
      ["👨‍👩‍👧‍👦", "People of God", "The Church is first the people God gathers, not only a building.", "What is the Church first of all?", "God's gathered people", "Only a building", "Only the clergy", "A private club"],
      ["🍞", "Worship Together", "Catholics gather especially on Sunday to hear God's Word and celebrate the Eucharist.", "Why do Catholics gather on Sunday?", "To worship God", "To shop", "To compete", "To earn prizes"],
      ["🤝", "One Family", "Baptism joins us to Christ and makes us brothers and sisters in the Church.", "What joins us to the Church?", "Baptism", "A ticket", "Our age", "Winning a contest"],
    ],
    activity: sort("Church Family Life", ["Faith", "Worship", "Love"], [["Learn the Apostles' teaching", "Faith", "📖"], ["Celebrate the Eucharist", "Worship", "🍞"], ["Care for people in need", "Love", "🤝"], ["Pray together", "Worship", "🙏"]]),
    prayer: ["Father, thank you for gathering us into your Church.", "Make us one family in faith, worship, and love."],
  },
  {
    week: 19,
    title: "Baptism: New Life in Christ",
    pillar: "Sacraments",
    verse: "Baptizing them in the name of the Father and of the Son and of the Holy Spirit. — Matthew 28:19",
    scripture: "Matthew 28:19",
    ccc: "1213",
    summary: "Baptism frees us from sin and gives us new life as God's children.",
    concepts: [
      ["💧", "Water", "Baptism uses water with the words Jesus gave his Church.", "What sign is used in Baptism?", "Water", "Sand", "Bread", "A crown"],
      ["🕊️", "New Life", "In Baptism the Holy Spirit gives us new life in Christ and washes away sin.", "What does Baptism give us?", "New life in Christ", "A prize", "A job", "Perfect grades"],
      ["👨‍👩‍👧‍👦", "God's Family", "Baptism makes us children of God and members of the Church.", "Whose family do we join in Baptism?", "God's family, the Church", "A sports team", "A royal court", "No family"],
    ],
    activity: sort("Signs of Baptism", ["Water", "White Garment", "Candle"], [["Cleansing and new life", "Water", "💧"], ["Putting on Christ", "White Garment", "🤍"], ["Light of Christ", "Candle", "🕯️"], ["Poured with the Trinitarian words", "Water", "💦"]]),
    prayer: ["Father, thank you for the gift of Baptism.", "Help us live each day as your beloved children."],
  },
  {
    week: 20,
    title: "The Seven Sacraments",
    pillar: "Sacraments",
    verse: "Then they, setting out, preached everywhere, with the Lord cooperating and confirming the word by the accompanying signs. — Mark 16:20",
    scripture: "Mark 16:20",
    ccc: "1113",
    summary: "Jesus gives the Church seven sacraments as effective signs of grace.",
    concepts: [
      ["7️⃣", "Seven Gifts", "The Church celebrates seven sacraments given by Christ.", "How many sacraments are there?", "Seven", "Three", "Five", "Twelve"],
      ["🪧", "Signs of Grace", "Sacraments use visible signs to give the grace they signify.", "What do sacraments give?", "God's grace", "Only information", "Good luck", "Entertainment"],
      ["⛪", "Christ at Work", "Jesus acts in every sacrament through his Church.", "Who acts in the sacraments?", "Jesus Christ", "The community alone", "The priest alone", "No one"],
    ],
    activity: sort("The Seven Sacraments", ["Beginning", "Healing", "Serving"], [["Baptism", "Beginning", "💧"], ["Confirmation", "Beginning", "🕊️"], ["Eucharist", "Beginning", "🍞"], ["Reconciliation", "Healing", "🤝"], ["Anointing of the Sick", "Healing", "🫒"], ["Holy Orders", "Serving", "⛪"], ["Matrimony", "Serving", "💍"]]),
    prayer: ["Jesus, thank you for meeting us in the sacraments.", "Open our hearts to receive your grace."],
  },
  {
    week: 21,
    title: "We Meet Jesus at Mass",
    pillar: "Sacraments",
    verse: "They explained... how they had recognized him at the breaking of the bread. — Luke 24:35",
    scripture: "Luke 24:35",
    ccc: "1324",
    summary: "At Mass we hear God's Word and meet Jesus in the Eucharist.",
    concepts: [
      ["📖", "Liturgy of the Word", "At Mass we listen as God speaks through Sacred Scripture.", "What do we hear during the Liturgy of the Word?", "Sacred Scripture", "A weather report", "A fairy tale", "Sports news"],
      ["🍞", "Liturgy of the Eucharist", "Bread and wine become Christ's Body and Blood through the words of consecration.", "Whom do we receive in the Eucharist?", "Jesus Christ", "A symbol only", "An angel", "A saint"],
      ["📤", "Sent to Love", "The dismissal sends us to live what we celebrated by loving and serving.", "What are we sent to do after Mass?", "Love and serve", "Forget God", "Keep faith private", "Judge others"],
    ],
    activity: timeline("The Shape of the Mass", ["Gather and make the Sign of the Cross", "Listen to God's Word", "Give thanks in the Eucharistic Prayer", "Receive a blessing and go forth"]),
    prayer: ["Jesus, thank you for meeting us in Word and Sacrament.", "Help us take the love of Mass into the world."],
  },
  {
    week: 22,
    title: "The Bible Is God's Word",
    pillar: "Creed",
    verse: "Your word is a lamp to my feet and a light to my paths. — Psalm 118:105",
    scripture: "Psalm 118:105",
    ccc: "101",
    summary: "God speaks to us in the human words of Sacred Scripture.",
    concepts: [
      ["📚", "One Bible", "The Bible is a library of inspired books that together tell God's saving plan.", "What is the Bible?", "Inspired books of God's Word", "One person's diary", "A science manual", "A book of spells"],
      ["🕯️", "A Light", "God's Word lights our path by teaching truth and showing how to live.", "What does God's Word do?", "Lights our path", "Hides all truth", "Makes choices for us", "Promises no difficulties"],
      ["👂", "Listen and Respond", "We listen prayerfully, ask what God is saying, and put his Word into practice.", "How should we receive Scripture?", "Listen and live it", "Rush through it", "Ignore it", "Use it to boast"],
    ],
    activity: sort("The Bible's Two Parts", ["Old Testament", "New Testament"], [["Creation", "Old Testament", "🌍"], ["Moses", "Old Testament", "📜"], ["The Gospels", "New Testament", "✝️"], ["The early Church", "New Testament", "⛪"]]),
    prayer: ["God, thank you for speaking to us in Sacred Scripture.", "Open our ears and hearts to live your Word."],
  },
  {
    week: 23,
    title: "The Ten Commandments",
    pillar: "Morality",
    verse: "I am the Lord your God, who led you away from the land of Egypt. — Exodus 20:2",
    scripture: "Exodus 20:2",
    ccc: "2056",
    summary: "God gave the Ten Commandments to guide his people in freedom and love.",
    concepts: [
      ["📜", "God's Covenant", "God gave Moses the commandments after freeing his people from slavery.", "To whom did God give the commandments?", "Moses", "Peter", "Joseph", "Noah"],
      ["🧭", "A Loving Guide", "The commandments show how to love God and our neighbor; they guide freedom.", "What do the commandments guide us toward?", "Love and freedom", "Fear and hiding", "Riches", "Popularity"],
      ["🔟", "Ten Commandments", "The first commandments concern love of God; the others teach love of neighbor.", "What do the commandments teach?", "Love of God and neighbor", "Only school rules", "How to become famous", "How to avoid everyone"],
    ],
    activity: sort("Love God and Neighbor", ["Love God", "Love Neighbor"], [["Worship God alone", "Love God", "🙏"], ["Keep the Lord's Day holy", "Love God", "⛪"], ["Honor father and mother", "Love Neighbor", "👨‍👩‍👧"], ["Tell the truth", "Love Neighbor", "🗣️"], ["Respect life", "Love Neighbor", "💛"]]),
    prayer: ["God, your commandments lead us toward life.", "Help us obey you freely and love our neighbor."],
  },
  {
    week: 24,
    title: "Love God and Your Neighbor",
    pillar: "Morality",
    verse: "You shall love the Lord your God with all your heart... You shall love your neighbor as yourself. — Matthew 22:37–39",
    scripture: "Matthew 22:37–39",
    ccc: "2055",
    summary: "Jesus sums up God's law as wholehearted love of God and neighbor.",
    concepts: [
      ["🙏", "Love God", "We love God with our whole heart, soul, and mind.", "How should we love God?", "With our whole self", "Only sometimes", "Only with words", "Only when life is easy"],
      ["🤝", "Love Your Neighbor", "A neighbor is any person whose good God asks us to care about.", "Who is our neighbor?", "Every person we are called to love", "Only someone next door", "Only a friend", "Only family"],
      ["🪞", "As Yourself", "Healthy care for ourselves helps us recognize the same dignity and needs in others.", "How does Jesus say to love our neighbor?", "As ourselves", "Less than ourselves", "Only for rewards", "Only in secret"],
    ],
    activity: fillblank("The Great Commandment", [["Love God with all your ___.", "heart", "money", "talent only", "free time"], ["Love your ___ as yourself.", "neighbor", "prize", "favorite only", "possessions"], ["Jesus says these commands sum up God's ___.", "law", "weather", "calendar", "stories"]]),
    prayer: ["God, we want to love you with our whole selves.", "Show us how to love each neighbor in word and action."],
  },
  {
    week: 25,
    title: "Jesus Teaches Forgiveness",
    pillar: "Morality",
    verse: "For if you will forgive men their sins, your heavenly Father also will forgive you. — Matthew 6:14",
    scripture: "Matthew 6:14",
    ccc: "2840",
    summary: "Because God is merciful, Jesus teaches us to ask forgiveness and forgive others.",
    concepts: [
      ["🙏", "Ask Forgiveness", "When we sin, we honestly admit it, tell God we are sorry, and seek to repair harm.", "What should we do after we sin?", "Ask forgiveness and make amends", "Hide it forever", "Blame someone else", "Pretend it was good"],
      ["🤲", "Receive Mercy", "God's mercy is greater than our sins and calls us back to friendship.", "What is greater than our sins?", "God's mercy", "Our excuses", "Our fear", "Our plans"],
      ["🕊️", "Forgive Others", "Forgiving releases revenge and seeks another's good; it does not pretend harm was right.", "What does forgiveness release?", "Revenge", "Truth", "Safety", "Wisdom"],
    ],
    activity: timeline("Making Peace", ["Recognize the wrong", "Say honestly, 'I am sorry'", "Try to repair the harm", "Forgive and choose peace"]),
    prayer: ["Merciful Father, forgive our sins.", "Help us make peace and forgive as you forgive us."],
  },
  {
    week: 26,
    title: "Prayer Is Friendship with God",
    pillar: "Prayer",
    verse: "In all things, with prayer and supplication, with acts of thanksgiving, let your petitions be made known to God. — Philippians 4:6",
    scripture: "Philippians 4:6",
    ccc: "2559",
    summary: "Prayer is raising our hearts and minds to God in a living relationship.",
    concepts: [
      ["💬", "Talk with God", "We can tell God our joys, needs, sorrow, thanks, and praise.", "What can we bring to God in prayer?", "Everything in our hearts", "Only perfect words", "Only problems", "Nothing personal"],
      ["👂", "Listen", "Prayer also makes quiet space to listen for God's Word and loving guidance.", "What else do we do in prayer?", "Listen to God", "Only speak", "Demand answers", "Avoid silence"],
      ["🕰️", "Pray Every Day", "Like friendship, prayer grows through faithful time together.", "How does prayer friendship grow?", "By praying faithfully", "By waiting for emergencies", "By showing off", "By never being quiet"],
    ],
    activity: sort("Ways to Pray", ["Praise", "Thanks", "Sorry", "Please"], [["God, you are holy", "Praise", "⭐"], ["Thank you for my family", "Thanks", "💛"], ["Forgive me for an unkind word", "Sorry", "🙏"], ["Help someone who is sick", "Please", "🤲"]]),
    prayer: ["God, thank you for inviting us to speak and listen to you.", "Help our friendship with you grow every day."],
  },
  {
    week: 27,
    title: "Jesus Gives Us the Our Father",
    pillar: "Prayer",
    verse: "Therefore, you shall pray in this way: Our Father, who is in heaven. — Matthew 6:9",
    scripture: "Matthew 6:9",
    ccc: "2759",
    summary: "Jesus taught the Our Father as the perfect prayer of God's children.",
    concepts: [
      ["👨‍👧", "Our Father", "Jesus invites us to address the holy God with trust as our Father.", "How does Jesus teach us to address God?", "Our Father", "A stranger", "An idea", "An earthly king only"],
      ["🍞", "Daily Bread", "We ask God for what we truly need each day, in body and soul.", "What do we ask for each day?", "Daily bread", "Every luxury", "Fame", "No help"],
      ["🕊️", "Forgiveness and Help", "We ask God to forgive us, help us forgive, and protect us from evil.", "What does the Our Father ask us to share?", "Forgiveness", "Secrets", "Riches", "Applause"],
    ],
    activity: timeline("The Our Father", ["Honor God's holy name", "Ask that God's Kingdom come", "Ask for daily bread", "Ask forgiveness and protection"]),
    prayer: ["Our Father in heaven, holy is your name.", "Give us what we need and help us forgive one another."],
  },
  {
    week: 28,
    title: "Mary and the Saints Pray with Us",
    pillar: "Prayer",
    verse: "For behold, from this time, all generations shall call me blessed. — Luke 1:48",
    scripture: "Luke 1:48",
    ccc: "956, 971",
    summary: "Mary and the saints are friends of God in heaven who pray with and for the Church.",
    concepts: [
      ["💙", "Mary, Mother of Jesus", "Catholics honor Mary because God chose her to be the mother of his Son.", "Why do Catholics honor Mary?", "She is Jesus' mother", "She is a goddess", "She replaces Jesus", "She wrote the Gospels"],
      ["🌟", "Saints in Heaven", "Saints are God's friends who finished their earthly lives faithfully and now live with him.", "Where are the saints?", "With God in heaven", "Forgotten", "Only in pictures", "Living as angels"],
      ["🙏", "They Pray for Us", "Asking a saint to pray is like asking a faithful friend to bring our needs to God.", "What do we ask saints to do?", "Pray for us", "Grant grace by themselves", "Replace God", "Predict our future"],
    ],
    activity: sort("Holy Friends", ["Mary", "A Saint", "All Christians"], [["Mother of Jesus", "Mary", "💙"], ["Lives with God in heaven", "A Saint", "🌟"], ["Can pray for one another", "All Christians", "🙏"], ["Said yes to Gabriel", "Mary", "🕊️"]]),
    prayer: ["God, thank you for Mary and all the saints.", "With their prayers, help us follow Jesus faithfully."],
  },
  {
    week: 29,
    title: "The Church Year and Sunday",
    pillar: "Prayer",
    verse: "This is the day that the Lord has made. Let us exult and rejoice in it. — Psalm 117:24",
    scripture: "Psalm 117:24",
    ccc: "1163–1167",
    summary: "The Church year celebrates Jesus' saving life, and every Sunday is the Lord's Day.",
    concepts: [
      ["🕯️", "Advent and Christmas", "Advent prepares us to welcome Jesus; Christmas celebrates his birth.", "What feast celebrates Jesus' birth?", "Christmas", "Easter", "Pentecost", "Lent"],
      ["✝️", "Lent and Easter", "Lent prepares us through prayer, fasting, and giving; Easter celebrates the Resurrection.", "What does Easter celebrate?", "Jesus' Resurrection", "Jesus' birth", "Creation", "Moses receiving the law"],
      ["☀️", "Every Sunday", "Sunday is the weekly celebration of Jesus' Resurrection and the heart of Christian worship.", "Why is Sunday the Lord's Day?", "Jesus rose on Sunday", "It starts school", "It is always sunny", "No one works anywhere"],
    ],
    activity: timeline("The Church Year", ["Advent prepares for Jesus", "Christmas celebrates his birth", "Lent prepares for Easter", "Easter celebrates his Resurrection", "Pentecost celebrates the Holy Spirit"]),
    prayer: ["Jesus, walk with us through every season of the Church year.", "Help us make Sunday a day of worship, joy, and rest."],
  },
  {
    week: 30,
    title: "Go Share God's Love",
    pillar: "Review",
    verse: "Go forth to the whole world and preach the Gospel to every creature. — Mark 16:15",
    scripture: "Mark 16:15",
    ccc: "849",
    summary: "Jesus sends every baptized person to share the Gospel through words and loving actions.",
    concepts: [
      ["📣", "Good News", "The Gospel is the good news that Jesus saves us and calls us to life with God.", "What is the Gospel?", "Good news about Jesus", "A secret rule", "Only a history date", "A prize"],
      ["👣", "Sent by Jesus", "At Baptism we become disciples, and Jesus sends disciples to make him known.", "Who sends us to share the Gospel?", "Jesus", "Advertisers", "Celebrities", "No one"],
      ["💛", "Words and Actions", "We share faith by speaking truthfully about Jesus and living his patient, generous love.", "How can we share God's love?", "By words and loving actions", "By winning arguments", "By forcing people", "By hiding kindness"],
    ],
    activity: sort("Living the Mission", ["Share in Words", "Share in Actions"], [["Tell why Jesus gives you hope", "Share in Words", "📣"], ["Invite someone to pray", "Share in Words", "🙏"], ["Welcome a lonely person", "Share in Actions", "🤝"], ["Serve someone in need", "Share in Actions", "💛"]]),
    prayer: ["Jesus, thank you for everything we learned this year.", "Send us to share your Good News with courage and love."],
  },
];

function buildSession(lesson, lessonIndex) {
  const discoverItems = lesson.concepts.map(([icon, name, desc], index) => ({
    icon,
    name,
    desc: index === 0 ? `${desc} (CCC ${lesson.ccc}).` : desc,
  }));
  const conceptQuestions = lesson.concepts.map((concept, index) =>
    rotateQuestion(concept.slice(3), lessonIndex + index));
  const nearbySummaries = [1, 2, 3].map(
    (offset) => LESSONS[(lessonIndex + offset) % LESSONS.length].summary,
  );
  const questions = [
    ...conceptQuestions,
    rotateQuestion(
      ["What is this lesson's main truth?", lesson.summary, ...nearbySummaries],
      lessonIndex + 3,
    ),
    rotateQuestion(
      ["Where can families read more about this Catholic teaching?", `CCC ${lesson.ccc}`, "A weather report", "A sports score", "A restaurant menu"],
      lessonIndex + 4,
    ),
  ];
  const scriptureDistractors = [1, 2, 3].map(
    (offset) => LESSONS[(lessonIndex + offset) % LESSONS.length].scripture,
  );
  const bonus = rotateQuestion(
    ["Which Scripture passage guides this lesson?", lesson.scripture, ...scriptureDistractors],
    lessonIndex + 5,
  );

  return {
    week: lesson.week,
    title: lesson.title,
    pillar: lesson.pillar,
    verse: lesson.verse,
    discover: {
      title: `Discover: ${lesson.title}`,
      instruction: "Tap each card to discover today's Catholic teaching.",
      items: discoverItems,
    },
    secondary: lesson.activity.type,
    [lesson.activity.type]: lesson.activity.data,
    quiz: {
      questions,
      bonus: { ...bonus, reward: "Grade 1 Faith Explorer!" },
    },
    prayer: {
      title: `Prayer: ${lesson.title}`,
      lines: [
        { s: "L", t: "In the name of the Father, and of the Son, and of the Holy Spirit." },
        { s: "A", t: lesson.prayer[0] },
        { s: "L", t: `God of love, help us remember: ${lesson.summary}` },
        { s: "A", t: lesson.prayer[1] },
        { s: "L", t: "Stay with our families, our parish, and everyone who needs your care." },
        { s: "A", t: "Amen." },
      ],
    },
  };
}

export const SESSIONS = LESSONS.map(buildSession);
