// Part 1: Weeks 1-10

export const PILLAR_COLORS = { Creed: "#3B5BA5", Sacraments: "#9B5D1A", Morality: "#2A6B3E", Prayer: "#6B3B9A", Review: "#4A4A6A" };

export const SESSIONS = [
  // ─── WEEK 1 ───────────────────────────────────────────────
  {
    week: 1,
    title: "Who Am I? Made in God's Image",
    pillar: "Creed",
    verse: "God created man in his own image, in the image of God he created him. — Genesis 1:27",
    discover: {
      title: "Discover: Imago Dei",
      instruction: "Tap each card to explore what it means to be made in God's image.",
      items: [
        { icon: "✨", name: "Imago Dei", desc: "You are made in the image and likeness of God — imago Dei. This is not a feeling or an achievement. It is a fact about who you are. Your dignity cannot be earned or taken away." },
        { icon: "🧠", name: "Intellect and Will", desc: "Unlike animals, humans can reason and freely choose. These are the two powers of the soul — intellect (to know truth) and will (to choose good). They reflect God's own knowing and loving." },
        { icon: "💎", name: "Inherent Dignity", desc: "Because every person is made in God's image, every person has dignity — regardless of ability, appearance, achievement, or behavior. Sin can damage but cannot destroy the image of God in a person." },
        { icon: "📞", name: "Vocation", desc: "Being made in God's image means being made for relationship with Him. A vocation is a call — and the most fundamental vocation is to know, love, and serve God." },
        { icon: "🤝", name: "Body and Soul", desc: "Catholics do not believe the body is a prison for the soul. We are body AND soul together — a unity. The Resurrection proves that our bodies matter and will be glorified." }
      ]
    },
    secondary: "sort",
    sort: {
      title: "What Does Imago Dei Mean?",
      instruction: "Tap a statement, then tap the category it belongs to.",
      items: [
        { name: "Using reason to solve a problem", icon: "🧠", group: "Intellect" },
        { name: "Choosing to tell the truth when lying is easier", icon: "💪", group: "Free Will" },
        { name: "Respecting someone who has hurt you", icon: "❤️", group: "Dignity" },
        { name: "Praying when things are hard", icon: "🙏", group: "Relationship with God" },
        { name: "Using logic to argue fairly", icon: "⚖️", group: "Intellect" },
        { name: "Saying no to peer pressure", icon: "🛑", group: "Free Will" },
        { name: "Seeing beauty in a stranger", icon: "👁️", group: "Dignity" },
        { name: "Bringing your real problems to God", icon: "📞", group: "Relationship with God" }
      ],
      groups: ["Intellect", "Free Will", "Dignity", "Relationship with God"],
      colors: { Intellect: "#3B5BA5", "Free Will": "#2A6B3E", Dignity: "#9B5D1A", "Relationship with God": "#6B3B9A" },
      icons: { Intellect: "🧠", "Free Will": "💪", Dignity: "💎", "Relationship with God": "🙏" }
    },
    quiz: {
      questions: [
        { q: "What does 'imago Dei' mean?", opts: ["Image of the Pope", "Made in God's image", "A Latin prayer", "The soul alone"], correct: 1 },
        { q: "Can human dignity be erased by sin?", opts: ["Yes, completely", "Only mortal sin erases it", "No — it is inherent", "Only God can take it away"], correct: 2 },
        { q: "What are the two powers of the human soul?", opts: ["Body and spirit", "Faith and works", "Intellect and will", "Memory and imagination"], correct: 2 },
        { q: "What is a vocation?", opts: ["A job", "A feeling", "A call from God", "A religious order"], correct: 2 },
        { q: "Why do Catholics believe the body matters?", opts: ["It houses the soul", "We believe in the Resurrection of the body", "It is made of clay", "The soul needs it for now"], correct: 1 }
      ]
    ,
    bonus: { q: "Apologetics is the practice of ___.", opts: ["Saying sorry", "Defending and explaining the faith", "Apologizing for Church history", "Avoiding questions"], correct: 1, reward: "Faith Champion!" }
    },
    prayer: {
      title: "Psalm 139: Known and Loved",
      lines: [
        { s: "L", t: "Lord, you have searched me and known me." },
        { s: "A", t: "You know when I sit and when I rise." },
        { s: "L", t: "You formed my inmost being; you knit me together in my mother's womb." },
        { s: "A", t: "I praise you, for I am fearfully and wonderfully made." },
        { s: "L", t: "How precious to me are your thoughts, God!" },
        { s: "A", t: "Help us to see ourselves as you see us — made in your image, worthy of love. Amen." }
      ]
    }
  },

  // ─── WEEK 2 ───────────────────────────────────────────────
  {
    week: 2,
    title: "Free Will and Human Freedom",
    pillar: "Creed",
    verse: "Before man are life and death, good and evil; whichever he chooses shall be given to him. — Sirach 15:14-15",
    discover: {
      title: "Discover: Free Will",
      instruction: "Tap each card to understand the gift of human freedom.",
      items: [
        { icon: "🗽", name: "Freedom Defined", desc: "True freedom is the power to act or not to act, for the sake of what is genuinely good. It is a gift from God that makes love possible." },
        { icon: "🚫", name: "Not Unlimited", desc: "Freedom is not license — the ability to do anything we want. Choosing evil is not an exercise of freedom but its misuse. Sin actually diminishes freedom." },
        { icon: "⛓️", name: "External Limits", desc: "Ignorance, fear, habit, and social pressures can reduce our moral responsibility. These factors do not remove freedom entirely, but they affect our culpability." },
        { icon: "🕊️", name: "Inner Freedom", desc: "Even in difficult circumstances, we can choose how to respond. The martyrs and saints show us that inner freedom cannot be taken away." },
        { icon: "❤️", name: "Freedom and Love", desc: "We can only truly love if we freely choose to. God gave us free will so that our love for Him and for others would be real, not programmed." }
      ]
    },
    secondary: "fillblank",
    fillblank: {
      title: "Complete the Key Ideas",
      instruction: "Fill in the missing word from what we just learned.",
      sentences: [
        { text: "True freedom is the power to choose what is genuinely ___.", answer: "good", options: ["good", "easy", "popular", "comfortable"] },
        { text: "Choosing evil is not freedom but its ___.", answer: "misuse", options: ["misuse", "exercise", "extension", "limit"] },
        { text: "God gave us free will so our ___ would be real.", answer: "love", options: ["love", "obedience", "suffering", "talent"] },
        { text: "___ actually diminishes our freedom over time.", answer: "Sin", options: ["Sin", "Prayer", "Study", "Work"] }
      ]
    },
    quiz: {
      questions: [
        { q: "True freedom is the power to choose ___.", opts: ["Whatever we want", "What is genuinely good", "The easiest path", "What others expect"], correct: 1 },
        { q: "What diminishes our moral freedom?", opts: ["Prayer", "Ignorance, fear, habit, or pressure", "Church rules", "Scripture reading"], correct: 1 },
        { q: "Why did God give us free will?", opts: ["To test us", "So we could truly love and choose Him", "Because He had to", "So we could be independent"], correct: 1 },
        { q: "Is choosing evil an act of freedom?", opts: ["Yes — all choices are free", "No — it is a misuse of freedom", "Only if no one is hurt", "Only for adults"], correct: 1 },
        { q: "What grows when we choose good consistently?", opts: ["Pride", "Virtue", "Wealth", "Popularity"], correct: 1 }
      ]
    ,
    bonus: { q: "The term 'I believe' (Credo) in the Creed is a personal act of ___.", opts: ["opinion", "faith", "doubt", "tradition"], correct: 1, reward: "Creed Scholar!" }
    },
    prayer: {
      title: "Prayer for Freedom",
      lines: [
        { s: "L", t: "Lord, you made us free so that we could love." },
        { s: "A", t: "Free us from the habits and fears that hold us back." },
        { s: "L", t: "When we are tempted, strengthen our will." },
        { s: "A", t: "When we are confused, enlighten our minds." },
        { s: "L", t: "Help us to use our freedom well — always choosing what is truly good." },
        { s: "A", t: "May our choices always lead us closer to you. Amen." }
      ]
    }
  },

  // ─── WEEK 3 ───────────────────────────────────────────────
  {
    week: 3,
    title: "Conscience: God's Voice Within",
    pillar: "Creed",
    verse: "Deep within his conscience man discovers a law which he has not laid upon himself but which he must obey. — Gaudium et Spes 16",
    discover: {
      title: "Discover: Conscience",
      instruction: "Tap each card to learn about the voice God placed within you.",
      items: [
        { icon: "⚖️", name: "What Is Conscience?", desc: "Conscience is the practical judgment of reason by which we recognize the moral quality of an act — before, during, or after we perform it. It is not a feeling but a reasoned judgment." },
        { icon: "📖", name: "Forming Conscience", desc: "Conscience must be formed — educated in truth. We form it through Scripture, the teaching of the Church, prayer, and the example of the saints. An unformed conscience can lead us astray." },
        { icon: "🧭", name: "Certain Conscience", desc: "We must always follow a certain conscience — one that has made a firm judgment about what is right. Acting against a certain conscience is always wrong, even if the conscience is mistaken." },
        { icon: "⚠️", name: "Erroneous Conscience", desc: "A conscience can be wrong if it has not been properly formed. We are responsible for forming our conscience well. Vincible (curable) ignorance increases our guilt; invincible ignorance reduces it." },
        { icon: "🙏", name: "Examination of Conscience", desc: "Catholics regularly examine their conscience — reviewing their actions honestly before God. This is essential preparation for the Sacrament of Reconciliation." }
      ]
    },
    secondary: "sort",
    sort: {
      title: "Formed or Unformed Conscience?",
      instruction: "Tap a scenario, then tap the category it belongs to.",
      items: [
        { name: "Checking Church teaching before deciding", icon: "📖", group: "Formed" },
        { name: "Just doing what feels right", icon: "🤷", group: "Unformed" },
        { name: "Praying before a difficult choice", icon: "🙏", group: "Formed" },
        { name: "Following the crowd without thinking", icon: "👥", group: "Unformed" },
        { name: "Seeking advice from a wise mentor", icon: "🧑‍🏫", group: "Formed" },
        { name: "Assuming your first instinct is always right", icon: "⚡", group: "Unformed" },
        { name: "Reading Scripture for moral guidance", icon: "📜", group: "Formed" },
        { name: "Ignoring guilt without reflection", icon: "🙈", group: "Unformed" }
      ],
      groups: ["Formed", "Unformed"],
      colors: { Formed: "#2A6B3E", Unformed: "#C0392B" },
      icons: { Formed: "✅", Unformed: "⚠️" }
    },
    quiz: {
      questions: [
        { q: "What is conscience?", opts: ["A feeling of guilt", "The practical judgment of reason about the moral quality of an act", "A voice in your head", "Your emotional reaction"], correct: 1 },
        { q: "How do we form our conscience?", opts: ["By following feelings", "Through Scripture, Church teaching, and prayer", "By doing what friends do", "It forms itself automatically"], correct: 1 },
        { q: "Must we always follow a certain conscience?", opts: ["No — only if it agrees with the Church", "Yes — always", "Only when convenient", "Only for serious matters"], correct: 1 },
        { q: "What is an erroneous conscience?", opts: ["A guilty conscience", "A conscience that has made a wrong judgment due to poor formation", "A conscience that is too strict", "A conscience that never speaks"], correct: 1 },
        { q: "What is the examination of conscience for?", opts: ["Feeling bad about yourself", "Honestly reviewing actions before God, especially before Reconciliation", "Judging others", "Making excuses"], correct: 1 }
      ]
    ,
    bonus: { q: "Sacred Tradition and Sacred Scripture together form the ___.", opts: ["Catechism", "single deposit of faith", "Bible", "Rosary"], correct: 1, reward: "Believer Extraordinaire!" }
    },
    prayer: {
      title: "Prayer to the Holy Spirit",
      lines: [
        { s: "L", t: "Come, Holy Spirit, fill our hearts and enlighten our minds." },
        { s: "A", t: "Help us to hear your voice in our conscience." },
        { s: "L", t: "When we are unsure, guide us to the truth." },
        { s: "A", t: "When we know the truth, give us courage to follow it." },
        { s: "L", t: "Form our conscience according to your Word and your Church." },
        { s: "A", t: "May we always seek what is true and choose what is good. Amen." }
      ]
    }
  },

  // ─── WEEK 4 ───────────────────────────────────────────────
  {
    week: 4,
    title: "Sin: What It Is and What It Does",
    pillar: "Creed",
    verse: "If we say that we have no sin, we deceive ourselves. If we confess our sins, He is faithful and just to forgive us. — 1 John 1:8-9",
    discover: {
      title: "Discover: Sin",
      instruction: "Tap each card to understand what sin really is — and what it does.",
      items: [
        { icon: "⚠️", name: "Sin Defined", desc: "Sin is an utterance, deed, or desire contrary to God's eternal law. It is not just rule-breaking — it is a rupture in our relationship with God and others." },
        { icon: "⚖️", name: "Mortal vs. Venial", desc: "Mortal sin destroys charity (sanctifying grace) in the soul. Venial sin weakens but does not destroy our relationship with God. Both are real and both matter." },
        { icon: "3️⃣", name: "Three Conditions", desc: "For a sin to be mortal, three conditions must ALL be present: grave matter, full knowledge, and deliberate consent. If any one is missing, the sin is venial." },
        { icon: "💔", name: "Consequences", desc: "Sin disrupts our relationship with God, damages our relationships with others, and wounds ourselves. It creates patterns (vice) that make future sin easier." },
        { icon: "🔥", name: "Capital Sins", desc: "The seven capital sins — pride, greed, envy, wrath, lust, gluttony, sloth — are the roots from which other sins grow. They are tendencies, not necessarily mortal sins." }
      ]
    },
    secondary: "sort",
    sort: {
      title: "Mortal, Venial, or Not a Sin?",
      instruction: "Tap a scenario, then tap the category it belongs to.",
      items: [
        { name: "Deliberately missing Mass on Sunday without reason", icon: "⛪", group: "Mortal" },
        { name: "Telling a small lie to avoid embarrassment", icon: "🤥", group: "Venial" },
        { name: "Accidentally breaking a friend's toy", icon: "🧸", group: "Not a Sin" },
        { name: "Stealing something of serious value", icon: "💰", group: "Mortal" },
        { name: "Being impatient with a sibling", icon: "😤", group: "Venial" },
        { name: "Feeling angry when treated unfairly", icon: "😠", group: "Not a Sin" },
        { name: "Cheating on an important test", icon: "📝", group: "Venial" },
        { name: "Using God's name as a curse word", icon: "🗣️", group: "Venial" }
      ],
      groups: ["Mortal", "Venial", "Not a Sin"],
      colors: { Mortal: "#C0392B", Venial: "#D4A843", "Not a Sin": "#2A6B3E" },
      icons: { Mortal: "⚠️", Venial: "⚡", "Not a Sin": "✅" }
    },
    quiz: {
      questions: [
        { q: "What are the three conditions for mortal sin?", opts: ["Prayer, fasting, almsgiving", "Grave matter, full knowledge, deliberate consent", "Faith, hope, charity", "Sorrow, confession, penance"], correct: 1 },
        { q: "What does mortal sin destroy?", opts: ["The body", "Charity (sanctifying grace) in the soul", "Free will", "Intelligence"], correct: 1 },
        { q: "What does venial sin do?", opts: ["Destroys our relationship with God", "Has no effect", "Weakens but does not destroy our relationship with God", "Only affects others"], correct: 2 },
        { q: "Name three capital sins.", opts: ["Faith, hope, charity", "Prudence, justice, fortitude", "Pride, greed, envy", "Mercy, peace, love"], correct: 2 },
        { q: "Is sin just rule-breaking?", opts: ["Yes — it is about obeying rules", "No — it is a rupture in relationship with God", "Only for children", "Only when caught"], correct: 1 }
      ]
    ,
    bonus: { q: "The Magisterium is the ___ authority of the Church.", opts: ["financial", "political", "teaching", "military"], correct: 2, reward: "Doctrine Star!" }
    },
    prayer: {
      title: "Act of Contrition",
      lines: [
        { s: "L", t: "Let us pray the Act of Contrition together, as a genuine expression of sorrow." },
        { s: "A", t: "O my God, I am heartily sorry for having offended you." },
        { s: "L", t: "And I detest all my sins because of your just punishments." },
        { s: "A", t: "But most of all because they offend you, my God, who are all good and deserving of all my love." },
        { s: "L", t: "I firmly resolve, with the help of your grace, to sin no more and to avoid the near occasions of sin." },
        { s: "A", t: "Amen." }
      ]
    }
  },

  // ─── WEEK 5 ───────────────────────────────────────────────
  {
    week: 5,
    title: "Unit 1 Review",
    pillar: "Review",
    verse: "Review session",
    discover: {
      title: "Unit 1 Review: Identity, Freedom & Conscience",
      instruction: "Tap to review the big ideas from Weeks 1-4.",
      items: [
        { icon: "🪞", name: "Review: Imago Dei", desc: "We are made in God's image — imago Dei. We have intellect and will, body and soul united, inherent dignity that cannot be erased." },
        { icon: "🗽", name: "Review: Free Will", desc: "True freedom is ordered to the good. Sin diminishes freedom; virtue expands it. We can only truly love if we freely choose." },
        { icon: "⚖️", name: "Review: Conscience", desc: "Conscience is the practical judgment of reason about moral acts. We must form it through Scripture, Church teaching, and prayer — and always follow a certain conscience." },
        { icon: "⚠️", name: "Review: Sin", desc: "Mortal sin requires three conditions: grave matter, full knowledge, deliberate consent. The seven capital sins are roots from which other sins grow." }
      ]
    },
    secondary: "sort",
    sort: {
      title: "Match the Concept!",
      instruction: "Tap a definition, then tap the concept it belongs to.",
      items: [
        { name: "Made in God's image and likeness", icon: "✨", group: "Imago Dei" },
        { name: "The power to choose what is genuinely good", icon: "🗽", group: "Free Will" },
        { name: "Practical judgment of reason about moral acts", icon: "⚖️", group: "Conscience" },
        { name: "A rupture in relationship with God", icon: "💔", group: "Sin" },
        { name: "Intellect and will", icon: "🧠", group: "Imago Dei" },
        { name: "Virtue expands it; sin diminishes it", icon: "🔄", group: "Free Will" },
        { name: "Must be formed through Scripture and prayer", icon: "📚", group: "Conscience" },
        { name: "Pride, greed, envy, wrath, lust, gluttony, sloth", icon: "🔥", group: "Sin" }
      ],
      groups: ["Imago Dei", "Free Will", "Conscience", "Sin"],
      colors: { "Imago Dei": "#3B5BA5", "Free Will": "#2A6B3E", Conscience: "#9B5D1A", Sin: "#C0392B" },
      icons: { "Imago Dei": "✨", "Free Will": "🗽", Conscience: "⚖️", Sin: "⚠️" }
    },
    quiz: {
      questions: [
        { q: "What does imago Dei mean?", opts: ["Image of Mary", "Made in the image of God", "A Latin prayer", "The human body"], correct: 1 },
        { q: "List the three conditions for mortal sin.", opts: ["Sorrow, confession, penance", "Grave matter, full knowledge, deliberate consent", "Faith, hope, charity", "Object, intention, circumstances"], correct: 1 },
        { q: "What is conscience?", opts: ["A feeling of guilt", "The practical judgment of reason about the moral quality of an act", "God speaking directly", "An instinct"], correct: 1 },
        { q: "What does true freedom allow us to do?", opts: ["Whatever we want", "Choose what is genuinely good", "Avoid responsibility", "Ignore rules"], correct: 1 },
        { q: "Name two capital sins.", opts: ["Faith and hope", "Pride and greed", "Prudence and justice", "Mercy and peace"], correct: 1 }
      ]
    ,
    bonus: { q: "Apologetics is the practice of ___.", opts: ["Saying sorry", "Defending and explaining the faith", "Apologizing for Church history", "Avoiding questions"], correct: 1, reward: "Super Scholar!" }
    },
    prayer: {
      title: "Glory Be",
      lines: [
        { s: "L", t: "As we complete Unit 1, let us give God glory." },
        { s: "A", t: "Glory be to the Father, and to the Son, and to the Holy Spirit." },
        { s: "L", t: "As it was in the beginning, is now, and ever shall be, world without end." },
        { s: "A", t: "Amen." }
      ]
    }
  },

  // ─── WEEK 6 ───────────────────────────────────────────────
  {
    week: 6,
    title: "The Sources of Morality",
    pillar: "Morality",
    verse: "Do not be conformed to this world, but be transformed by the renewal of your mind. — Romans 12:2",
    discover: {
      title: "Discover: The Sources of Morality",
      instruction: "Tap each card to learn how to evaluate the morality of any act.",
      items: [
        { icon: "🎯", name: "Object", desc: "The object is what the act IS in itself — independent of the intention. For example, lying is always wrong in itself, regardless of why you lied." },
        { icon: "💭", name: "Intention", desc: "The intention is the purpose or goal pursued by the person acting. A good intention can make a good act better, but it can never make an evil act good." },
        { icon: "📋", name: "Circumstances", desc: "Circumstances are the conditions surrounding the act — who, when, how, where. They can increase or decrease the goodness or gravity of an act, but they cannot make an evil act good." },
        { icon: "✅", name: "The Rule", desc: "For any act to be morally good, ALL THREE must be good: the object, the intention, and the circumstances. If any one is bad, the whole act is tainted." },
        { icon: "🚫", name: "Intrinsic Evil", desc: "Some acts are always wrong regardless of intention or circumstances — these are 'intrinsically evil.' Examples include murder, lying, and adultery." }
      ]
    },
    secondary: "fillblank",
    fillblank: {
      title: "Analyze the Morality",
      instruction: "Fill in the missing word from what we just learned.",
      sentences: [
        { text: "The ___ of an act is what the act is in itself.", answer: "object", options: ["object", "intention", "circumstance", "feeling"] },
        { text: "A good intention can never make an ___ act good.", answer: "evil", options: ["evil", "boring", "difficult", "unpopular"] },
        { text: "For an act to be morally good, all ___ sources must be good.", answer: "three", options: ["three", "two", "four", "five"] },
        { text: "Some acts are always wrong — they are called intrinsically ___.", answer: "evil", options: ["evil", "hard", "unfair", "painful"] }
      ]
    },
    quiz: {
      questions: [
        { q: "What are the three sources of morality?", opts: ["Faith, hope, charity", "Object, intention, circumstances", "Body, mind, soul", "Past, present, future"], correct: 1 },
        { q: "Can a good intention make an evil act good?", opts: ["Yes, always", "No", "Only sometimes", "Only in emergencies"], correct: 1 },
        { q: "What is the 'object' of a moral act?", opts: ["The outcome", "What the act is in itself", "How you feel about it", "Who sees you do it"], correct: 1 },
        { q: "What is an 'intrinsically evil' act?", opts: ["A difficult act", "An act always wrong regardless of intention or circumstances", "An act done in secret", "An act that hurts feelings"], correct: 1 },
        { q: "For an act to be morally good, the three sources must all be ___.", opts: ["Known", "Good", "Legal", "Popular"], correct: 1 }
      ]
    ,
    bonus: { q: "Conscience is the ___ voice within that helps us judge right and wrong.", opts: ["loud", "inner/moral", "outside", "imaginary"], correct: 1, reward: "Virtue Hero!" }
    },
    prayer: {
      title: "Prayer for Moral Clarity",
      lines: [
        { s: "L", t: "Lord, help us to see our actions clearly — as they truly are." },
        { s: "A", t: "Give us the wisdom to evaluate not just what we do, but why we do it." },
        { s: "L", t: "Protect us from the temptation to justify evil with good intentions." },
        { s: "A", t: "Help us to choose what is good — in action, intention, and all circumstances. Amen." }
      ]
    }
  },

  // ─── WEEK 7 ───────────────────────────────────────────────
  {
    week: 7,
    title: "The Natural Moral Law",
    pillar: "Morality",
    verse: "For what can be known about God is plain to them, because God has shown it to them. — Romans 1:19-20",
    discover: {
      title: "Discover: Natural Law",
      instruction: "Tap each card to learn about the moral law God built into creation.",
      items: [
        { icon: "📜", name: "What It Is", desc: "Natural law is the moral law God built into human nature — it is the rational creature's participation in God's eternal law. It is knowable by reason alone, even without Revelation." },
        { icon: "🌍", name: "Universal", desc: "Natural law applies to all people in all times and cultures. 'Do good and avoid evil' is the first principle — recognized by every civilization in history." },
        { icon: "🏔️", name: "Immutable", desc: "Natural law does not change, though its application can vary by circumstance. What was wrong 2,000 years ago is still wrong today." },
        { icon: "⚖️", name: "Foundation of Rights", desc: "Universal human rights are grounded in natural law. Human dignity is not granted by governments — it is recognized because God built it into our nature." },
        { icon: "⛪", name: "Church and Natural Law", desc: "The Church clarifies and defends natural law with her teaching authority. She does not invent moral rules — she reads and interprets the law God wrote into creation." }
      ]
    },
    secondary: "sort",
    sort: {
      title: "Natural Law, Church Law, or Both?",
      instruction: "Tap a principle, then tap where it comes from.",
      items: [
        { name: "Do not murder", icon: "🚫", group: "Natural Law" },
        { name: "Attend Mass on Sundays", icon: "⛪", group: "Church Law" },
        { name: "Do not steal", icon: "🔒", group: "Natural Law" },
        { name: "Fast during Lent", icon: "🍞", group: "Church Law" },
        { name: "Keep promises", icon: "🤝", group: "Natural Law" },
        { name: "Love your neighbor", icon: "❤️", group: "Both" },
        { name: "Respect parents", icon: "👨‍👩‍👧", group: "Natural Law" },
        { name: "Confess sins annually", icon: "🙏", group: "Church Law" }
      ],
      groups: ["Natural Law", "Church Law", "Both"],
      colors: { "Natural Law": "#3B5BA5", "Church Law": "#9B5D1A", Both: "#2A6B3E" },
      icons: { "Natural Law": "📜", "Church Law": "⛪", Both: "🤝" }
    },
    quiz: {
      questions: [
        { q: "What is natural law?", opts: ["Laws of physics", "God's moral law written into human nature, knowable by reason", "Rules made by the Church", "Scientific method"], correct: 1 },
        { q: "Who can know natural law?", opts: ["Only Catholics", "Only adults", "All people through the use of reason", "Only theologians"], correct: 2 },
        { q: "Does natural law change?", opts: ["Yes, with culture", "No — it is universal and immutable", "Only the Pope can change it", "It changes every century"], correct: 1 },
        { q: "What is natural law the foundation of?", opts: ["Government", "Universal human rights and dignity", "The legal system", "Democracy"], correct: 1 },
        { q: "Why can Catholics discuss ethics with non-believers?", opts: ["Because the Bible says so", "Because natural law is accessible to all through reason", "Because everyone secretly believes", "They can't"], correct: 1 }
      ]
    ,
    bonus: { q: "We have a duty to ___ our conscience through Church teaching and prayer.", opts: ["ignore", "suppress", "form", "replace"], correct: 2, reward: "Moral Champion!" }
    },
    prayer: {
      title: "Prayer for Justice",
      lines: [
        { s: "L", t: "Lord, you wrote your law into every human heart." },
        { s: "A", t: "Help all people to recognize the truth you have placed within them." },
        { s: "L", t: "Give us the courage to defend human dignity wherever it is threatened." },
        { s: "A", t: "Write your law more deeply on our hearts, and on the hearts of all people. Amen." }
      ]
    }
  },

  // ─── WEEK 8 ───────────────────────────────────────────────
  {
    week: 8,
    title: "Virtue: The Key to a Good Life",
    pillar: "Morality",
    verse: "Finally, brothers, whatever is true, whatever is honorable, whatever is just, whatever is pure — think about these things. — Philippians 4:8",
    discover: {
      title: "Discover: Virtue",
      instruction: "Tap each card to learn about the habits that shape a good life.",
      items: [
        { icon: "🏆", name: "What Is Virtue?", desc: "A virtue is a firm disposition to do the good. It is a habit — built through repeated good choices and strengthened by God's grace. Virtue makes it easier to act well." },
        { icon: "🏛️", name: "Cardinal Virtues", desc: "The four cardinal (hinge) virtues are prudence, justice, fortitude, and temperance. They are acquired by human effort and are the foundation of all other moral virtues." },
        { icon: "🌟", name: "Theological Virtues", desc: "The three theological virtues — faith, hope, and charity — are gifts from God, infused at Baptism. They connect us directly to God and are the source and goal of the moral life." },
        { icon: "🔗", name: "Vice", desc: "Vice is the opposite of virtue — a habitual inclination toward evil. Repeated bad choices create patterns that make sin easier and virtue harder. But vice can be overcome by grace and effort." },
        { icon: "🌱", name: "Growth in Virtue", desc: "Virtue grows through practice, prayer, and the sacraments. Like a muscle, it gets stronger with use. The saints are examples of virtue lived heroically over a lifetime." }
      ]
    },
    secondary: "sort",
    sort: {
      title: "Cardinal or Theological?",
      instruction: "Tap a virtue, then tap the category it belongs to.",
      items: [
        { name: "Prudence — right reason applied to action", icon: "⚖️", group: "Cardinal" },
        { name: "Faith — believing in God and all He has revealed", icon: "✝️", group: "Theological" },
        { name: "Justice — giving to each what is due", icon: "🏛️", group: "Cardinal" },
        { name: "Hope — trusting in God's promises", icon: "⚓", group: "Theological" },
        { name: "Fortitude — courage to do what is right", icon: "🛡️", group: "Cardinal" },
        { name: "Charity — loving God above all and neighbor as self", icon: "❤️", group: "Theological" },
        { name: "Temperance — moderation in all things", icon: "⚖️", group: "Cardinal" },
        { name: "Acquired by human effort", icon: "💪", group: "Cardinal" }
      ],
      groups: ["Cardinal", "Theological"],
      colors: { Cardinal: "#3B5BA5", Theological: "#6B3B9A" },
      icons: { Cardinal: "🏛️", Theological: "🌟" }
    },
    quiz: {
      questions: [
        { q: "What is a virtue?", opts: ["A rule", "A firm disposition to do the good", "A feeling", "A reward"], correct: 1 },
        { q: "Name the four cardinal virtues.", opts: ["Faith, hope, charity, love", "Prudence, justice, fortitude, temperance", "Wisdom, courage, peace, joy", "Prayer, fasting, almsgiving, mercy"], correct: 1 },
        { q: "What are the theological virtues?", opts: ["Prudence, justice, fortitude", "Faith, hope, charity", "Truth, beauty, goodness", "Humility, patience, kindness"], correct: 1 },
        { q: "Where do the theological virtues come from?", opts: ["Human effort alone", "Good parenting", "God — infused at Baptism", "Reading the Bible"], correct: 2 },
        { q: "How does virtue grow?", opts: ["Automatically with age", "Through practice, prayer, and the sacraments", "By avoiding all decisions", "Only through suffering"], correct: 1 }
      ]
    ,
    bonus: { q: "The principle of double effect helps us evaluate actions that have both ___ effects.", opts: ["large and small", "good and bad", "public and private", "spiritual and physical"], correct: 1, reward: "Goodness Guide!" }
    },
    prayer: {
      title: "Prayer for Virtue",
      lines: [
        { s: "L", t: "Lord, you call us not just to avoid evil, but to pursue the good." },
        { s: "A", t: "Plant the seeds of virtue deep within our hearts." },
        { s: "L", t: "Give us prudence to see clearly, justice to act rightly, fortitude to persevere, and temperance to live in balance." },
        { s: "A", t: "Increase our faith, strengthen our hope, and set our hearts on fire with charity." },
        { s: "L", t: "May we grow in virtue each day, by your grace." },
        { s: "A", t: "Amen." }
      ]
    }
  },

  // ─── WEEK 9 ───────────────────────────────────────────────
  {
    week: 9,
    title: "Prudence and Moral Decision-Making",
    pillar: "Morality",
    verse: "The Lord gives wisdom; from His mouth come knowledge and understanding. — Proverbs 2:6-7",
    discover: {
      title: "Discover: Prudence",
      instruction: "Tap each card to learn about the most important virtue for making good decisions.",
      items: [
        { icon: "⚖️", name: "Prudence Defined", desc: "Prudence is the virtue that disposes reason to discern the good and to choose the right means to achieve it. It applies right reason to action." },
        { icon: "1️⃣2️⃣3️⃣", name: "Three Acts", desc: "Prudence involves three acts: counsel (deliberating about what to do), judgment (deciding what to do), and command (actually doing it). All three are essential." },
        { icon: "👑", name: "Why It's First", desc: "Prudence is called the 'charioteer' of all virtues because it tells the other virtues how to act in each situation. Without prudence, even courage can become recklessness." },
        { icon: "⚠️", name: "Common Mistakes", desc: "The enemies of prudence include: rashness (acting without thinking), excessive caution (being paralyzed by fear), and cunning (using intelligence selfishly)." },
        { icon: "🌱", name: "Growing in Prudence", desc: "We grow in prudence through prayer, seeking wise counsel, learning from our mistakes, and examining our past choices honestly." }
      ]
    },
    secondary: "timeline",
    timeline: {
      title: "Prudence in Action",
      instruction: "Tap two items to swap them into the correct order for using prudence.",
      items: [
        { id: 1, text: "Recognize that a moral decision must be made", order: 1 },
        { id: 2, text: "Counsel — deliberate about the options", order: 2 },
        { id: 3, text: "Judgment — decide what is the right course", order: 3 },
        { id: 4, text: "Command — carry out the decision", order: 4 },
        { id: 5, text: "Reflect — evaluate the outcome honestly", order: 5 }
      ]
    },
    quiz: {
      questions: [
        { q: "What is prudence?", opts: ["Being cautious", "The virtue that applies right reason to action", "Avoiding risk", "Being smart"], correct: 1 },
        { q: "What are the three acts of prudence?", opts: ["Think, pray, act", "Counsel, judgment, command", "Read, write, speak", "Listen, learn, teach"], correct: 1 },
        { q: "Why is prudence called the 'charioteer' of virtues?", opts: ["It is the fastest virtue", "It directs all other virtues", "It was named by the Greeks", "It is the hardest virtue"], correct: 1 },
        { q: "What is the opposite of prudence in action?", opts: ["Patience", "Rashness or paralysis", "Courage", "Humility"], correct: 1 },
        { q: "How does one grow in prudence?", opts: ["By avoiding decisions", "Prayer, wise counsel, examining past choices", "By reading more", "It cannot be learned"], correct: 1 }
      ]
    ,
    bonus: { q: "Moral relativism is the false idea that ___.", opts: ["All morals come from God", "Right and wrong are different for each person", "The Church teaches morality", "Truth exists"], correct: 1, reward: "Virtue Star!" }
    },
    prayer: {
      title: "Prayer for Wisdom",
      lines: [
        { s: "L", t: "Lord, grant us the wisdom of Solomon and the prudence of the saints." },
        { s: "A", t: "Help us to think before we act, and to act when we have thought." },
        { s: "L", t: "When we face difficult choices, give us good counsel." },
        { s: "A", t: "When we know the right thing, give us the courage to do it. Amen." }
      ]
    }
  },

  // ─── WEEK 10 ──────────────────────────────────────────────
  {
    week: 10,
    title: "Unit 2 Review",
    pillar: "Review",
    verse: "Review session",
    discover: {
      title: "Unit 2 Review: Moral Decision-Making",
      instruction: "Tap to review the big ideas from Weeks 6-9.",
      items: [
        { icon: "🎯", name: "Review: Three Sources", desc: "The morality of an act comes from three sources: object, intention, and circumstances. All three must be good. A good intention cannot make an intrinsically evil act good." },
        { icon: "📜", name: "Review: Natural Law", desc: "Natural law is God's moral law written into human nature, knowable by reason alone. It is universal, immutable, and the foundation of human rights." },
        { icon: "🏆", name: "Review: Virtues", desc: "The four cardinal virtues are prudence, justice, fortitude, and temperance. The three theological virtues are faith, hope, and charity. Virtues grow through repeated good choices and God's grace." },
        { icon: "⚖️", name: "Review: Prudence", desc: "Prudence applies right reason to action through three acts: counsel, judgment, and command. It directs all other virtues." }
      ]
    },
    secondary: "sort",
    sort: {
      title: "Match the Concept!",
      instruction: "Tap a definition, then tap the concept it belongs to.",
      items: [
        { name: "Object, intention, circumstances", icon: "🎯", group: "Sources of Morality" },
        { name: "Knowable by reason alone", icon: "📜", group: "Natural Law" },
        { name: "Prudence, justice, fortitude, temperance", icon: "🏛️", group: "Virtues" },
        { name: "Counsel, judgment, command", icon: "⚖️", group: "Prudence" },
        { name: "A good intention cannot make evil good", icon: "🚫", group: "Sources of Morality" },
        { name: "Universal and immutable", icon: "🌍", group: "Natural Law" },
        { name: "Faith, hope, and charity", icon: "🌟", group: "Virtues" },
        { name: "Directs all other virtues", icon: "👑", group: "Prudence" }
      ],
      groups: ["Sources of Morality", "Natural Law", "Virtues", "Prudence"],
      colors: { "Sources of Morality": "#3B5BA5", "Natural Law": "#9B5D1A", Virtues: "#2A6B3E", Prudence: "#6B3B9A" },
      icons: { "Sources of Morality": "🎯", "Natural Law": "📜", Virtues: "🏆", Prudence: "⚖️" }
    },
    quiz: {
      questions: [
        { q: "Name the three sources of morality.", opts: ["Faith, hope, charity", "Object, intention, circumstances", "Past, present, future", "Self, others, God"], correct: 1 },
        { q: "Who can know natural law?", opts: ["Only Catholics", "All people through reason", "Only theologians", "Only adults"], correct: 1 },
        { q: "Name the four cardinal virtues.", opts: ["Faith, hope, charity, love", "Prudence, justice, fortitude, temperance", "Wisdom, knowledge, courage, peace", "Prayer, fasting, almsgiving, mercy"], correct: 1 },
        { q: "What are prudence's three acts?", opts: ["Think, feel, act", "Counsel, judgment, command", "Pray, decide, obey", "Read, study, practice"], correct: 1 },
        { q: "Can a good intention make an intrinsically evil act good?", opts: ["Yes", "No", "Sometimes", "Only in emergencies"], correct: 1 }
      ]
    ,
    bonus: { q: "The term 'I believe' (Credo) in the Creed is a personal act of ___.", opts: ["opinion", "faith", "doubt", "tradition"], correct: 1, reward: "Review Champion!" }
    },
    prayer: {
      title: "Our Father",
      lines: [
        { s: "L", t: "As we close Unit 2, let us pray the prayer Jesus taught us." },
        { s: "A", t: "Our Father, who art in heaven, hallowed be thy name." },
        { s: "L", t: "Thy kingdom come, thy will be done, on earth as it is in heaven." },
        { s: "A", t: "Give us this day our daily bread, and forgive us our trespasses, as we forgive those who trespass against us." },
        { s: "L", t: "And lead us not into temptation, but deliver us from evil." },
        { s: "A", t: "Amen." }
      ]
    }
  },
// Part 2: Weeks 11-20

  // ─── WEEK 11 ──────────────────────────────────────────────
  {
    week: 11,
    title: "Social Justice and the Common Good",
    pillar: "Morality",
    verse: "He has shown you what is good: to act justly, love mercy, and walk humbly with your God. \u2014 Micah 6:8",
    discover: {
      title: "Discover: The Common Good",
      instruction: "Tap each card to explore Catholic Social Teaching.",
      items: [
        { icon: "\ud83c\udfdb\ufe0f", name: "Common Good Defined", desc: "Society\u2019s conditions that allow individuals and communities to flourish. It is not what benefits the most people \u2014 it is what allows ALL to reach their fulfillment." },
        { icon: "3\ufe0f\u20e3", name: "Three Elements", desc: "The common good has three elements: respect for the person, social well-being and development, and peace and security of the group and its members." },
        { icon: "\ud83e\udd1d", name: "Solidarity", desc: "We are all responsible for one another. Solidarity means recognizing that \u2018love of neighbor\u2019 has a social dimension \u2014 we cannot be indifferent to others\u2019 suffering." },
        { icon: "\ud83d\udd3d", name: "Subsidiarity", desc: "Decisions should be made at the lowest appropriate level. Higher authorities should assist, not replace, local communities and families." },
        { icon: "\u26a0\ufe0f", name: "Social Sin", desc: "Sin has social effects. Unjust structures \u2014 racism, corruption, exploitation \u2014 perpetuate harm and are themselves sinful." }
      ]
    },
    secondary: "sort",
    sort: {
      title: "Match the Principle!",
      instruction: "Tap each example, then tap the Catholic Social Teaching principle it illustrates.",
      items: [
        { name: "A parish organizing a food drive", icon: "\ud83c\udf5e", group: "Solidarity" },
        { name: "Parents deciding their children\u2019s education", icon: "\ud83d\udc68\u200d\ud83d\udc69\u200d\ud83d\udc67", group: "Subsidiarity" },
        { name: "Laws protecting workers\u2019 rights", icon: "\u2696\ufe0f", group: "Common Good" },
        { name: "Ignoring poverty in your city", icon: "\ud83d\udeab", group: "Social Sin" },
        { name: "Volunteering at a homeless shelter", icon: "\ud83c\udfe0", group: "Solidarity" },
        { name: "Local government handling local issues", icon: "\ud83c\udfdb\ufe0f", group: "Subsidiarity" },
        { name: "Clean water access for all citizens", icon: "\ud83d\udca7", group: "Common Good" },
        { name: "Companies paying unfair wages", icon: "\ud83d\udcb0", group: "Social Sin" }
      ],
      groups: ["Solidarity", "Subsidiarity", "Common Good", "Social Sin"],
      colors: { Solidarity: "#3B5BA5", Subsidiarity: "#2A6B3E", "Common Good": "#9B5D1A", "Social Sin": "#C0392B" },
      icons: { Solidarity: "\ud83e\udd1d", Subsidiarity: "\ud83d\udd3d", "Common Good": "\ud83c\udfdb\ufe0f", "Social Sin": "\u26a0\ufe0f" }
    },
    quiz: {
      questions: [
        { q: "What is the common good?", opts: ["What benefits the majority", "Conditions of social life that allow individuals and groups to flourish", "Government programs", "Individual rights"], correct: 1 },
        { q: "What does solidarity call us to recognize?", opts: ["Our differences", "Our responsibility for one another", "Our independence", "Our wealth"], correct: 1 },
        { q: "What is subsidiarity?", opts: ["Government controls everything", "Decisions made at the lowest appropriate level", "The Pope decides all local issues", "Ignoring local problems"], correct: 1 },
        { q: "What are the three elements of the common good?", opts: ["Liberty, equality, fraternity", "Respect for person, social well-being, peace and security", "Faith, hope, charity", "Freedom, justice, mercy"], correct: 1 },
        { q: "What is social sin?", opts: ["Personal sins done in public", "Unjust social structures that perpetuate harm", "Sins committed by governments only", "Group prayer"], correct: 1 }
      ]
    ,
    bonus: { q: "Catholic Social Teaching is based on the ___ of every human person.", opts: ["wealth", "opinion", "dignity", "nationality"], correct: 2, reward: "Moral Explorer!" }
    },
    prayer: {
      title: "Prayer for Justice",
      lines: [
        { s: "L", t: "Lord, you call us to build a just society." },
        { s: "A", t: "Open our eyes to the suffering around us." },
        { s: "L", t: "Give us the courage to stand in solidarity with the poor and vulnerable." },
        { s: "A", t: "Help us to work for the common good \u2014 not just our own comfort." },
        { s: "L", t: "Transform unjust structures and give us hearts that seek justice." },
        { s: "A", t: "May your kingdom come on earth as it is in heaven. Amen." }
      ]
    }
  },

  // ─── WEEK 12 ──────────────────────────────────────────────
  {
    week: 12,
    title: "Life and Human Dignity",
    pillar: "Morality",
    verse: "Before I formed you in the womb I knew you. \u2014 Jeremiah 1:5",
    discover: {
      title: "Discover: Life and Dignity",
      instruction: "Tap each card to learn about the sacredness of human life.",
      items: [
        { icon: "\ud83d\udd6f\ufe0f", name: "Life\u2019s Sacredness", desc: "Human life is sacred from conception to natural death. This is because the human person is the most excellent of God\u2019s creatures, created in His image." },
        { icon: "\u2696\ufe0f", name: "5th Commandment", desc: "You shall not kill. This commandment prohibits the direct killing of innocent persons. It is the foundation of all life ethics in Catholic teaching." },
        { icon: "\ud83d\udeab", name: "Abortion", desc: "The direct termination of human life before birth is gravely wrong. From the moment of conception, every human being has the right to life." },
        { icon: "\u26a0\ufe0f", name: "Euthanasia", desc: "Deliberately ending a life to eliminate suffering is a grave violation of human dignity. Suffering can be managed with compassionate care, not by ending the sufferer." },
        { icon: "\ud83d\udee1\ufe0f", name: "Legitimate Defense", desc: "Protecting oneself or others from an unjust aggressor is permitted. But the intention must be defense, not killing. The force used must be proportionate." }
      ]
    },
    secondary: "timeline",
    timeline: {
      title: "Life and Dignity Principles",
      instruction: "Tap two items to swap them into the correct logical order.",
      items: [
        { id: 1, text: "Human life is sacred because we are made in God\u2019s image", order: 1 },
        { id: 2, text: "The 5th Commandment forbids killing the innocent", order: 2 },
        { id: 3, text: "This applies from the moment of conception", order: 3 },
        { id: 4, text: "It extends through all stages of life to natural death", order: 4 },
        { id: 5, text: "We must defend life and promote human dignity always", order: 5 }
      ]
    },
    quiz: {
      questions: [
        { q: "From when is human life sacred?", opts: ["From birth", "From conception to natural death", "From age of reason", "Only in certain cultures"], correct: 1 },
        { q: "What does the 5th Commandment prohibit?", opts: ["Stealing", "Lying", "The direct killing of innocent persons", "Missing Mass"], correct: 2 },
        { q: "What is euthanasia?", opts: ["A type of medicine", "Deliberately ending a life to eliminate suffering", "A form of prayer", "Compassionate care"], correct: 1 },
        { q: "Why is abortion gravely wrong?", opts: ["It is illegal", "It directly ends an innocent human life", "It is expensive", "The Church made a rule"], correct: 1 },
        { q: "Is legitimate defense allowed?", opts: ["Never", "Yes \u2014 with intention to protect, not to kill", "Only for soldiers", "Only at home"], correct: 1 }
      ]
    ,
    bonus: { q: "The consistent ethic of life means protecting human life from ___ to natural death.", opts: ["birth", "baptism", "conception", "childhood"], correct: 2, reward: "Virtue Hero!" }
    },
    prayer: {
      title: "Prayer for Life",
      lines: [
        { s: "L", t: "Lord, you are the author of all life." },
        { s: "A", t: "Protect every human life from conception to natural death." },
        { s: "L", t: "Comfort those who face difficult decisions about life." },
        { s: "A", t: "Give us courage to speak for those who cannot speak for themselves." },
        { s: "L", t: "Help us to see your image in every person \u2014 born and unborn, young and old." },
        { s: "A", t: "Mary, Mother of Life, pray for us. Amen." }
      ]
    }
  },

  // ─── WEEK 13 ──────────────────────────────────────────────
  {
    week: 13,
    title: "Truth, Justice, and the 8th Commandment",
    pillar: "Morality",
    verse: "And you will know the truth, and the truth will set you free. \u2014 John 8:32",
    discover: {
      title: "Discover: Truth and the 8th Commandment",
      instruction: "Tap each card to learn about the importance of truth.",
      items: [
        { icon: "\ud83d\udce2", name: "Truth-Telling", desc: "We have a duty to speak the truth because it respects the rationality and dignity of both speaker and listener. Living truthfully is a fundamental human disposition." },
        { icon: "\ud83e\udd25", name: "Lying Defined", desc: "A lie is saying what is false with the intention to deceive one who has the right to know the truth. Not every false statement is a lie \u2014 intention to deceive is key." },
        { icon: "\u2696\ufe0f", name: "Degrees of Harm", desc: "Not all lies are equal. Perjury (lying under oath), calumny (false accusations), and detraction (revealing harmful truths unnecessarily) are gravely harmful." },
        { icon: "\ud83d\udde3\ufe0f", name: "Calumny vs. Detraction", desc: "Calumny is making up false facts about someone. Detraction is revealing true but private harmful facts without good reason. Both damage reputations and violate justice." },
        { icon: "\ud83d\udcf1", name: "Social Media", desc: "Gossip, rumors, and viral misinformation all violate the 8th Commandment. Before sharing online, ask: Is it true? Is it kind? Is it necessary?" }
      ]
    },
    secondary: "fillblank",
    fillblank: {
      title: "Truth and the 8th Commandment",
      instruction: "Fill in the missing word.",
      sentences: [
        { text: "The 8th Commandment forbids misrepresenting the ___.", answer: "truth", options: ["truth", "law", "Church", "government"] },
        { text: "___ is making false statements about another person.", answer: "Calumny", options: ["Calumny", "Detraction", "Gossip", "Perjury"] },
        { text: "___ is revealing true but private harmful facts.", answer: "Detraction", options: ["Detraction", "Calumny", "Honesty", "Confession"] },
        { text: "Before sharing online: Is it true? Is it kind? Is it ___?", answer: "necessary", options: ["necessary", "funny", "popular", "trending"] }
      ]
    },
    quiz: {
      questions: [
        { q: "What does the 8th Commandment forbid?", opts: ["Stealing", "Missing Mass", "Misrepresenting the truth to those who have a right to know it", "Disrespecting parents"], correct: 2 },
        { q: "What is calumny?", opts: ["Telling the truth bluntly", "Making false statements about another person", "Sharing good news", "Keeping secrets"], correct: 1 },
        { q: "What is detraction?", opts: ["Lying under oath", "Revealing true but private harmful facts without good reason", "A compliment", "Forgetting someone\u2019s name"], correct: 1 },
        { q: "Is every false statement a lie?", opts: ["Yes, always", "No \u2014 only if intended to deceive one who has a right to the truth", "Only in court", "Only to adults"], correct: 1 },
        { q: "Name one way social media can violate the 8th Commandment.", opts: ["Being offline", "Spreading gossip, rumors, or misinformation", "Posting photos of food", "Using emojis"], correct: 1 }
      ]
    ,
    bonus: { q: "Chastity is the virtue that integrates ___ within the person.", opts: ["knowledge", "sexuality", "finances", "emotions only"], correct: 1, reward: "Moral Champion!" }
    },
    prayer: {
      title: "Prayer for Integrity",
      lines: [
        { s: "L", t: "Lord, you are Truth itself." },
        { s: "A", t: "Make us people of truth in thought, word, and deed." },
        { s: "L", t: "Guard our tongues from gossip and our fingers from sharing what harms others." },
        { s: "A", t: "Give us the courage to speak the truth with charity." },
        { s: "L", t: "In a world of misinformation, make us witnesses to what is real and good." },
        { s: "A", t: "Jesus, Way, Truth, and Life \u2014 guide us always. Amen." }
      ]
    }
  },

  // ─── WEEK 14 ──────────────────────────────────────────────
  {
    week: 14,
    title: "Sexuality, Chastity, and the 6th Commandment",
    pillar: "Morality",
    verse: "Your body is a temple of the Holy Spirit within you. Glorify God in your body. \u2014 1 Corinthians 6:19-20",
    discover: {
      title: "Discover: Chastity and the 6th Commandment",
      instruction: "Tap each card to learn about sexuality as a gift from God.",
      items: [
        { icon: "\ud83c\udf81", name: "Sexuality as Gift", desc: "God created us male and female. Sexuality is part of our personhood and dignity \u2014 it is a gift ordered toward love and life within marriage." },
        { icon: "\ud83c\udf1f", name: "Chastity for All", desc: "Chastity is the successful integration of sexuality within the person. It is a virtue for everyone \u2014 married, single, and celibate \u2014 not just a rule for teenagers." },
        { icon: "\ud83d\udc8d", name: "Marriage\u2019s Meaning", desc: "The conjugal act within marriage expresses total, faithful, fruitful, and free self-gift. These four qualities reflect God\u2019s own love." },
        { icon: "\u26a0\ufe0f", name: "Offenses", desc: "Pornography, fornication, and other misuses of sexuality harm persons by reducing them to objects. They damage dignity, relationships, and the ability to love authentically." },
        { icon: "\ud83d\udcaa", name: "Virtue Not Repression", desc: "Chastity is not the absence of desire but its integration and right ordering. It is the freedom to love well, not the repression of love." }
      ]
    },
    secondary: "sort",
    sort: {
      title: "Reflects or Contradicts Chastity?",
      instruction: "Tap a behavior, then tap whether it reflects or contradicts chastity.",
      items: [
        { name: "Respecting boundaries in a relationship", icon: "\u2705", group: "Reflects Chastity" },
        { name: "Viewing pornography", icon: "\ud83d\udeab", group: "Contradicts Chastity" },
        { name: "Choosing modesty in dress and speech", icon: "\ud83d\udc54", group: "Reflects Chastity" },
        { name: "Pressuring someone into physical intimacy", icon: "\u26a0\ufe0f", group: "Contradicts Chastity" },
        { name: "Practicing self-control with media", icon: "\ud83d\udcf1", group: "Reflects Chastity" },
        { name: "Reducing a person to their appearance", icon: "\ud83d\udc41\ufe0f", group: "Contradicts Chastity" },
        { name: "Treating others with dignity and respect", icon: "\ud83e\udd1d", group: "Reflects Chastity" },
        { name: "Sharing intimate images without consent", icon: "\ud83d\udcf5", group: "Contradicts Chastity" }
      ],
      groups: ["Reflects Chastity", "Contradicts Chastity"],
      colors: { "Reflects Chastity": "#2A6B3E", "Contradicts Chastity": "#C0392B" },
      icons: { "Reflects Chastity": "\u2705", "Contradicts Chastity": "\ud83d\udeab" }
    },
    quiz: {
      questions: [
        { q: "What is chastity?", opts: ["Avoiding all relationships", "The successful integration of sexuality within the person", "A vow taken by priests", "Not thinking about the body"], correct: 1 },
        { q: "Is chastity only for celibate people?", opts: ["Yes", "No \u2014 it is a virtue for everyone", "Only for teenagers", "Only for religious"], correct: 1 },
        { q: "What four qualities describe the marital act?", opts: ["Fun, exciting, passionate, private", "Total, faithful, fruitful, free", "Quick, simple, easy, natural", "Public, communal, shared, open"], correct: 1 },
        { q: "What does pornography do to persons?", opts: ["Nothing harmful", "Reduces them to objects; harms dignity and relationships", "Educates them", "Helps relationships"], correct: 1 },
        { q: "What is chastity NOT?", opts: ["A virtue", "The repression or absence of sexuality", "A gift", "A form of love"], correct: 1 }
      ]
    ,
    bonus: { q: "Stewardship means we are ___ of God's creation, not owners.", opts: ["destroyers", "caretakers", "consumers", "spectators"], correct: 1, reward: "Goodness Guide!" }
    },
    prayer: {
      title: "Prayer for Purity of Heart",
      lines: [
        { s: "L", t: "Lord Jesus, you said: Blessed are the pure in heart, for they shall see God." },
        { s: "A", t: "Purify our hearts and our intentions." },
        { s: "L", t: "Help us to see every person as your beloved \u2014 never as an object." },
        { s: "A", t: "Give us the strength to live chastely in a world that often misunderstands love." },
        { s: "L", t: "Holy Spirit, integrate our desires and order them toward authentic love." },
        { s: "A", t: "Mary, model of purity, pray for us. Amen." }
      ]
    }
  },

  // ─── WEEK 15 ──────────────────────────────────────────────
  {
    week: 15,
    title: "Stewardship: Property, Poverty, and the 7th Commandment",
    pillar: "Morality",
    verse: "Take care and guard against all greed, for one\u2019s life does not consist in the abundance of possessions. \u2014 Luke 12:15",
    discover: {
      title: "Discover: Stewardship and the 7th Commandment",
      instruction: "Tap each card to learn about property, poverty, and stewardship.",
      items: [
        { icon: "\ud83d\udd12", name: "7th Commandment", desc: "You shall not steal. This requires respect for others\u2019 property and just distribution of resources. It goes beyond simple theft to include fraud, wage theft, and exploitation." },
        { icon: "\ud83c\udfe0", name: "Private Property", desc: "Private property is legitimate and necessary for human dignity. But it is not absolute \u2014 ownership carries social responsibilities." },
        { icon: "\ud83c\udf0d", name: "Universal Destination", desc: "Created goods are ultimately meant for all people. No one can claim absolute ownership when others lack the basics for survival." },
        { icon: "\u2764\ufe0f", name: "Preferential Option", desc: "Catholic Social Teaching gives special moral urgency to the needs of the poor and vulnerable. This does not mean others don\u2019t matter \u2014 but the poor must not be forgotten." },
        { icon: "\ud83c\udf3f", name: "Stewardship", desc: "We are caretakers of creation and of our resources, not absolute owners. Everything we have is a gift from God to be used wisely and generously." }
      ]
    },
    secondary: "timeline",
    timeline: {
      title: "Catholic Social Teaching on Goods",
      instruction: "Tap two items to swap them into the correct logical order.",
      items: [
        { id: 1, text: "God created the earth and its goods for all people", order: 1 },
        { id: 2, text: "Private property is legitimate but carries social responsibility", order: 2 },
        { id: 3, text: "The 7th Commandment protects just distribution", order: 3 },
        { id: 4, text: "The poor and vulnerable deserve special attention", order: 4 },
        { id: 5, text: "We are stewards, not absolute owners, of God\u2019s gifts", order: 5 }
      ]
    },
    quiz: {
      questions: [
        { q: "What does the 7th Commandment require?", opts: ["Only not stealing", "Justice and respect for property and goods", "Giving everything away", "Working hard"], correct: 1 },
        { q: "What is the \u2018universal destination of goods\u2019?", opts: ["Everything should be free", "Created goods are ultimately meant for all people", "God owns nothing", "Only the Church owns property"], correct: 1 },
        { q: "Is private property legitimate?", opts: ["No", "Yes \u2014 but it is not absolute and has social responsibilities", "Only for the rich", "Only for churches"], correct: 1 },
        { q: "What is the \u2018preferential option for the poor\u2019?", opts: ["Only poor people matter", "Special moral urgency for the needs of those most vulnerable", "Poverty is a virtue", "Ignore the wealthy"], correct: 1 },
        { q: "What does stewardship mean?", opts: ["Owning everything", "We are caretakers, not absolute owners, of what God has given us", "Saving money", "Being stingy"], correct: 1 }
      ]
    ,
    bonus: { q: "The cardinal virtue of ___ helps us discern the right course of action.", opts: ["fortitude", "temperance", "prudence", "justice"], correct: 2, reward: "Virtue Star!" }
    },
    prayer: {
      title: "Prayer of St. Francis",
      lines: [
        { s: "L", t: "Lord, make me an instrument of your peace." },
        { s: "A", t: "Where there is hatred, let me sow love." },
        { s: "L", t: "Where there is injury, pardon. Where there is doubt, faith." },
        { s: "A", t: "Where there is despair, hope. Where there is darkness, light." },
        { s: "L", t: "Grant that I may not so much seek to be consoled as to console." },
        { s: "A", t: "For it is in giving that we receive, in pardoning that we are pardoned, and in dying that we are born to eternal life. Amen." }
      ]
    }
  },

  // ─── WEEK 16 ──────────────────────────────────────────────
  {
    week: 16,
    title: "Unit 3 Review: Social Justice",
    pillar: "Review",
    verse: "Review session",
    discover: {
      title: "Unit 3 Review: Social Justice",
      instruction: "Tap to review the big ideas from Weeks 11-15.",
      items: [
        { icon: "\ud83c\udfdb\ufe0f", name: "Common Good", desc: "The common good has three elements: respect for the person, social well-being, and peace. Solidarity and subsidiarity are key principles." },
        { icon: "\ud83d\udd6f\ufe0f", name: "Life and Dignity", desc: "Human life is sacred from conception to natural death. The 5th Commandment forbids killing the innocent. Euthanasia and abortion are gravely wrong." },
        { icon: "\ud83d\udce2", name: "Truth", desc: "The 8th Commandment forbids misrepresenting the truth. Calumny (false accusations) and detraction (revealing harmful truths) damage reputations and violate justice." },
        { icon: "\ud83c\udf1f", name: "Chastity", desc: "Chastity is the successful integration of sexuality \u2014 a virtue for everyone. Sexuality is a gift ordered to love and life within marriage." },
        { icon: "\ud83c\udf3f", name: "Stewardship", desc: "The 7th Commandment requires justice. The universal destination of goods means created goods are meant for all. We are stewards, not owners." }
      ]
    },
    secondary: "sort",
    sort: {
      title: "Match the Commandment!",
      instruction: "Tap a teaching, then tap the commandment it relates to.",
      items: [
        { name: "Protect life from conception to natural death", icon: "\ud83d\udd6f\ufe0f", group: "5th Commandment" },
        { name: "Do not steal; practice just distribution", icon: "\ud83d\udd12", group: "7th Commandment" },
        { name: "Do not bear false witness; avoid calumny", icon: "\ud83d\udce2", group: "8th Commandment" },
        { name: "Practice chastity according to your state in life", icon: "\ud83c\udf1f", group: "6th Commandment" },
        { name: "Euthanasia is gravely wrong", icon: "\u26a0\ufe0f", group: "5th Commandment" },
        { name: "Be a good steward of creation", icon: "\ud83c\udf3f", group: "7th Commandment" },
        { name: "Avoid gossip and misinformation online", icon: "\ud83d\udcf1", group: "8th Commandment" },
        { name: "Respect the gift of sexuality", icon: "\ud83d\udc8d", group: "6th Commandment" }
      ],
      groups: ["5th Commandment", "6th Commandment", "7th Commandment", "8th Commandment"],
      colors: { "5th Commandment": "#C0392B", "6th Commandment": "#6B3B9A", "7th Commandment": "#2A6B3E", "8th Commandment": "#3B5BA5" },
      icons: { "5th Commandment": "\ud83d\udd6f\ufe0f", "6th Commandment": "\ud83c\udf1f", "7th Commandment": "\ud83d\udd12", "8th Commandment": "\ud83d\udce2" }
    },
    quiz: {
      questions: [
        { q: "What are the three elements of the common good?", opts: ["Liberty, equality, fraternity", "Respect for person, social well-being, peace", "Faith, hope, charity", "Food, shelter, clothing"], correct: 1 },
        { q: "From when is human life sacred?", opts: ["Birth", "Conception to natural death", "Age of reason", "Baptism"], correct: 1 },
        { q: "What is calumny?", opts: ["A prayer", "Making false statements about another", "A type of sin", "Telling the truth"], correct: 1 },
        { q: "Is chastity only for celibate people?", opts: ["Yes", "No \u2014 it is for everyone", "Only for teens", "Only for married couples"], correct: 1 },
        { q: "What is the universal destination of goods?", opts: ["Everything is free", "Created goods are ultimately meant for all", "Only the Church owns things", "Property is evil"], correct: 1 }
      ]
    ,
    bonus: { q: "Sacred Tradition and Sacred Scripture together form the ___.", opts: ["Catechism", "single deposit of faith", "Bible", "Rosary"], correct: 1, reward: "Knowledge Star!" }
    },
    prayer: {
      title: "Hail Mary",
      lines: [
        { s: "L", t: "Let us entrust our moral lives to Our Lady\u2019s intercession." },
        { s: "A", t: "Hail Mary, full of grace, the Lord is with thee." },
        { s: "L", t: "Blessed art thou among women, and blessed is the fruit of thy womb, Jesus." },
        { s: "A", t: "Holy Mary, Mother of God, pray for us sinners." },
        { s: "L", t: "Now and at the hour of our death." },
        { s: "A", t: "Amen." }
      ]
    }
  },

  // ─── WEEK 17 ──────────────────────────────────────────────
  {
    week: 17,
    title: "What Is Discipleship?",
    pillar: "Creed",
    verse: "If anyone wishes to come after me, let him deny himself and take up his cross daily. \u2014 Luke 9:23",
    discover: {
      title: "Discover: Discipleship",
      instruction: "Tap each card to understand what it really means to follow Jesus.",
      items: [
        { icon: "\ud83d\udc63", name: "Disciple Defined", desc: "A disciple is one who follows, learns from, and imitates Jesus. The word comes from the Latin \u2018discipulus\u2019 \u2014 learner. Discipleship is not primarily about what you do, but about who you are becoming." },
        { icon: "\ud83d\udcc5", name: "Daily", desc: "Jesus says \u2018take up your cross daily.\u2019 Discipleship is not a one-time event \u2014 it is a daily choice. Every day we decide again: will I follow Jesus today, with this choice, in this situation?" },
        { icon: "\ud83d\udd04", name: "Conversion", desc: "Metanoia is the Greek word for conversion \u2014 a turning of the heart and mind toward God. Conversion is not a single moment; it is ongoing. We are always in the process of becoming more fully who God made us to be." },
        { icon: "\ud83d\udce1", name: "Mission", desc: "Disciples are sent. The Great Commission (Matthew 28:19-20) is not optional and not only for priests \u2014 every baptized person is sent to share the Gospel. Your ordinary life is mission territory." },
        { icon: "\u2696\ufe0f", name: "Cost and Joy", desc: "Jesus is honest: discipleship costs something. He does not promise comfort but purpose. And yet those who follow Him most completely \u2014 the saints \u2014 are also the most joyful. The cross and the resurrection go together." }
      ]
    },
    secondary: "timeline",
    timeline: {
      title: "The Journey of Discipleship",
      instruction: "Tap two items to swap them into the correct order.",
      items: [
        { id: 1, text: "Encounter \u2014 Meeting Jesus (prayer, sacraments, other disciples)", order: 1 },
        { id: 2, text: "Conversion \u2014 Turning away from sin and toward God", order: 2 },
        { id: 3, text: "Formation \u2014 Learning to think and live as Jesus does", order: 3 },
        { id: 4, text: "Community \u2014 Growing in faith with others", order: 4 },
        { id: 5, text: "Mission \u2014 Being sent to share what you have received", order: 5 }
      ]
    },
    quiz: {
      questions: [
        { q: "What does \u2018disciple\u2019 literally mean?", opts: ["Follower", "Learner", "Leader", "Worker"], correct: 1 },
        { q: "What does \u2018metanoia\u2019 mean?", opts: ["Following Jesus", "Spreading the Gospel", "Conversion \u2014 a turning of heart and mind toward God", "Receiving the sacraments"], correct: 2 },
        { q: "Is discipleship a one-time decision?", opts: ["Yes \u2014 at Baptism", "Yes \u2014 at Confirmation", "No \u2014 it is a daily choice", "Yes \u2014 at First Communion"], correct: 2 },
        { q: "What is the Great Commission?", opts: ["The Ten Commandments", "Jesus\u2019s command to all baptized to make disciples of all nations", "The mission of priests and religious", "The Sermon on the Mount"], correct: 1 },
        { q: "Did Jesus promise that discipleship would be comfortable?", opts: ["Yes \u2014 he promises an easy life", "No \u2014 he promises purpose, not ease", "Only for those who serve the poor", "Yes \u2014 God rewards faithful disciples with wealth"], correct: 1 }
      ]
    ,
    bonus: { q: "The Church teaches that faith and reason are ___.", opts: ["Opposed to each other", "Unrelated", "Complementary \u2014 both lead to truth", "The same thing"], correct: 2, reward: "Faith Explorer!" }
    },
    prayer: {
      title: "Prayer of Commitment",
      lines: [
        { s: "L", t: "Lord Jesus, you invite us to follow you." },
        { s: "A", t: "We want to say yes \u2014 not just today but every day." },
        { s: "L", t: "Help us to take up our cross without complaint." },
        { s: "A", t: "Help us to see the cross as the path to resurrection." },
        { s: "L", t: "Form us as disciples \u2014 in our thoughts, choices, words, and actions." },
        { s: "A", t: "Send us. Use us. We are yours. Amen." }
      ]
    }
  },

  // ─── WEEK 18 ──────────────────────────────────────────────
  {
    week: 18,
    title: "The Sacraments as Encounter with Christ",
    pillar: "Sacraments",
    verse: "I am the vine, you are the branches. Without me you can do nothing. \u2014 John 15:5",
    discover: {
      title: "Discover: Sacraments as Encounter",
      instruction: "Tap each card to learn how the sacraments are encounters with Christ.",
      items: [
        { icon: "\u271d\ufe0f", name: "Sacraments as Encounter", desc: "Christ Himself is the primary minister of every sacrament. The priest acts \u2018in persona Christi\u2019 \u2014 in the person of Christ. Sacraments are not rituals we perform but living encounters with the risen Lord." },
        { icon: "\u26a1", name: "Ex Opere Operato", desc: "Sacraments work \u2018by virtue of the action itself\u2019 \u2014 not because of the holiness of the priest or the feelings of the recipient. If the sacrament is validly celebrated, Christ acts through it." },
        { icon: "3\ufe0f\u20e3", name: "Three Groups", desc: "Initiation (Baptism, Confirmation, Eucharist), Healing (Reconciliation, Anointing of the Sick), and Service (Holy Orders, Matrimony). Each group strengthens discipleship in a different way." },
        { icon: "\ud83c\udf5e", name: "Eucharist", desc: "The Eucharist is the \u2018source and summit\u2019 of all Christian life. In it, we receive Christ Himself \u2014 Body, Blood, Soul, and Divinity \u2014 under the appearance of bread and wine." },
        { icon: "\ud83d\ude4f", name: "Frequent Confession", desc: "The Church recommends regular Reconciliation even for venial sins. Confession is not just for emergencies \u2014 it is a regular encounter with Christ\u2019s healing mercy." }
      ]
    },
    secondary: "sort",
    sort: {
      title: "Which Group?",
      instruction: "Tap each sacrament, then tap the group it belongs to.",
      items: [
        { name: "Baptism", icon: "\ud83d\udca7", group: "Initiation" },
        { name: "Confirmation", icon: "\ud83d\udd25", group: "Initiation" },
        { name: "Eucharist", icon: "\ud83c\udf5e", group: "Initiation" },
        { name: "Reconciliation", icon: "\ud83d\ude4f", group: "Healing" },
        { name: "Anointing of the Sick", icon: "\ud83d\udd6f\ufe0f", group: "Healing" },
        { name: "Holy Orders", icon: "\u26ea", group: "Service" },
        { name: "Matrimony", icon: "\ud83d\udc8d", group: "Service" }
      ],
      groups: ["Initiation", "Healing", "Service"],
      colors: { Initiation: "#3B5BA5", Healing: "#2A6B3E", Service: "#9B5D1A" },
      icons: { Initiation: "\ud83d\udca7", Healing: "\ud83d\ude4f", Service: "\u26ea" }
    },
    quiz: {
      questions: [
        { q: "Who is the primary minister of the sacraments?", opts: ["The priest", "Christ Himself", "The bishop", "The congregation"], correct: 1 },
        { q: "What does \u2018ex opere operato\u2019 mean?", opts: ["We must feel holy", "Sacraments work by the act itself, not our feelings", "Only the Pope can celebrate sacraments", "Sacraments are symbolic only"], correct: 1 },
        { q: "Which sacrament is \u2018source and summit\u2019 of Christian life?", opts: ["Baptism", "The Eucharist", "Confirmation", "Reconciliation"], correct: 1 },
        { q: "Why does the Church recommend regular Confession?", opts: ["To punish us", "For healing and growth, even for venial sins", "Only when we commit mortal sin", "Once a year is enough"], correct: 1 },
        { q: "In which sacrament does the priest act in persona Christi?", opts: ["Only the Eucharist", "Only Reconciliation", "All seven sacraments", "None \u2014 Christ acts alone"], correct: 2 }
      ]
    ,
    bonus: { q: "Confirmation completes the grace of ___.", opts: ["Holy Orders", "Matrimony", "Baptism", "Reconciliation"], correct: 2, reward: "Sacrament Star!" }
    },
    prayer: {
      title: "Prayer Before Communion",
      lines: [
        { s: "L", t: "Lord Jesus, you are truly present in the Eucharist \u2014 Body, Blood, Soul, and Divinity." },
        { s: "A", t: "We adore you. We believe in you. We love you." },
        { s: "L", t: "Make us worthy to receive you and to be transformed by the encounter." },
        { s: "A", t: "Help us to recognize you in every sacrament \u2014 not as ritual, but as meeting you face to face." },
        { s: "L", t: "Increase our hunger for the Eucharist and our trust in Reconciliation." },
        { s: "A", t: "Lord, we are not worthy, but only say the word and our souls shall be healed. Amen." }
      ]
    }
  },

  // ─── WEEK 19 ──────────────────────────────────────────────
  {
    week: 19,
    title: "Confirmation: Living the Mission",
    pillar: "Sacraments",
    verse: "You will receive power when the Holy Spirit comes upon you, and you will be my witnesses. \u2014 Acts 1:8",
    discover: {
      title: "Discover: Confirmation",
      instruction: "Tap each card to learn what Confirmation really means for your life.",
      items: [
        { icon: "\ud83d\udd25", name: "What Confirmation Does", desc: "Confirmation seals and strengthens the grace of Baptism. It imprints a permanent spiritual character on the soul \u2014 you can only be confirmed once." },
        { icon: "\ud83c\udf81", name: "Seven Gifts", desc: "The seven gifts of the Holy Spirit are: wisdom, understanding, counsel, fortitude, knowledge, piety, and fear of the Lord. They equip us for mission." },
        { icon: "\ud83c\udf93", name: "Not Graduation", desc: "Confirmation is NOT a graduation from faith formation. It is a commissioning INTO mission \u2014 a beginning, not an ending." },
        { icon: "\ud83d\udce1", name: "Witnesses", desc: "\u2018You will be my witnesses\u2019 (Acts 1:8). This is what Confirmation prepares us for \u2014 to witness to Christ in our daily lives, not just in church." },
        { icon: "\ud83c\udfe0", name: "In Ordinary Life", desc: "The gifts of the Spirit are for everyday courage: speaking truth when it\u2019s hard, living chastely, serving others, standing up for what is right at school and online." }
      ]
    },
    secondary: "fillblank",
    fillblank: {
      title: "The Gifts of the Holy Spirit",
      instruction: "Fill in the missing word.",
      sentences: [
        { text: "Confirmation completes the sacrament of ___.", answer: "Baptism", options: ["Baptism", "Eucharist", "Reconciliation", "Marriage"] },
        { text: "The gift of ___ helps us see things as God sees them.", answer: "wisdom", options: ["wisdom", "fortitude", "piety", "knowledge"] },
        { text: "Confirmation is not a graduation but a ___ into mission.", answer: "commissioning", options: ["commissioning", "retirement", "completion", "vacation"] },
        { text: "The Holy Spirit gives us ___ to stand up for what is right.", answer: "fortitude", options: ["fortitude", "popularity", "wealth", "comfort"] }
      ]
    },
    quiz: {
      questions: [
        { q: "What does Confirmation complete?", opts: ["Marriage", "Baptism \u2014 completing the sacraments of initiation", "Education", "Priesthood"], correct: 1 },
        { q: "Name the seven gifts of the Holy Spirit.", opts: ["Faith, hope, charity, love, peace, joy, patience", "Wisdom, understanding, counsel, fortitude, knowledge, piety, fear of the Lord", "Prudence, justice, fortitude, temperance, faith, hope, charity", "Humility, kindness, patience, generosity, faithfulness, gentleness, self-control"], correct: 1 },
        { q: "What does Confirmation imprint on the soul?", opts: ["A temporary mark", "A permanent spiritual character (seal)", "Nothing visible", "A feeling of peace"], correct: 1 },
        { q: "Is Confirmation a \u2018graduation\u2019 from faith?", opts: ["Yes \u2014 you\u2019re done learning", "No \u2014 it is a commissioning into mission", "Yes \u2014 you can stop going to church", "It depends on your parish"], correct: 1 },
        { q: "What does Acts 1:8 tell us we will be?", opts: ["Priests", "Witnesses to Jesus", "Perfect", "Famous"], correct: 1 }
      ]
    ,
    bonus: { q: "The Gifts of the Holy Spirit help us ___.", opts: ["Be popular", "Live the Christian life faithfully", "Avoid all suffering", "Get good grades"], correct: 1, reward: "Grace Expert!" }
    },
    prayer: {
      title: "Come, Holy Spirit",
      lines: [
        { s: "L", t: "Come, Holy Spirit, fill the hearts of your faithful." },
        { s: "A", t: "And enkindle in them the fire of your love." },
        { s: "L", t: "Send forth your Spirit, and they shall be created." },
        { s: "A", t: "And you shall renew the face of the earth." },
        { s: "L", t: "Grant us by the same Spirit to know what is right and always to rejoice in His consolation." },
        { s: "A", t: "Through Christ our Lord. Amen." }
      ]
    }
  },

  // ─── WEEK 20 ──────────────────────────────────────────────
  {
    week: 20,
    title: "Prayer as Relationship, Not Ritual",
    pillar: "Prayer",
    verse: "When you pray, go into your room, close the door, and pray to your Father in secret. \u2014 Matthew 6:6",
    discover: {
      title: "Discover: Prayer as Relationship",
      instruction: "Tap each card to deepen your understanding of prayer.",
      items: [
        { icon: "\ud83d\ude4f", name: "Prayer Defined", desc: "Prayer is the raising of one\u2019s heart and mind to God. It is not a transaction (\u2018I pray, God gives\u2019) but a personal encounter with Someone who loves you." },
        { icon: "\ud83d\udcd6", name: "Forms of Prayer", desc: "The three traditional forms are vocal (spoken words), meditative (thinking deeply about God\u2019s truth), and contemplative (resting silently in God\u2019s presence). All are valid and valuable." },
        { icon: "\ud83c\udf27\ufe0f", name: "The Challenge", desc: "Distraction and dryness in prayer are normal \u2014 they do not mean you are doing it wrong. Faithfulness in prayer matters far more than feeling good during prayer." },
        { icon: "\ud83d\udcdc", name: "Lectio Divina", desc: "Lectio divina is praying with Scripture in four steps: reading (lectio), meditating (meditatio), praying (oratio), and contemplating (contemplatio). It lets God speak to you through His Word." },
        { icon: "\u23f0", name: "Prayer in a Busy World", desc: "Schedule prayer like anything else important. Keep a prayer journal. Send short prayers throughout the day (\u2018Lord, help me here\u2019). Quality matters, but so does consistency." }
      ]
    },
    secondary: "timeline",
    timeline: {
      title: "Lectio Divina Steps",
      instruction: "Tap two items to swap them into the correct order.",
      items: [
        { id: 1, text: "Lectio \u2014 Read the Scripture passage slowly", order: 1 },
        { id: 2, text: "Meditatio \u2014 Think deeply about what struck you", order: 2 },
        { id: 3, text: "Oratio \u2014 Talk to God about what you discovered", order: 3 },
        { id: 4, text: "Contemplatio \u2014 Rest quietly in God\u2019s presence", order: 4 },
        { id: 5, text: "Actio \u2014 Go and live what you received", order: 5 }
      ]
    },
    quiz: {
      questions: [
        { q: "What is prayer?", opts: ["A transaction with God", "The raising of heart and mind to God \u2014 personal relationship with Him", "A ritual requirement", "Something only priests do"], correct: 1 },
        { q: "Name the three forms of prayer.", opts: ["Morning, noon, evening", "Vocal, meditative, contemplative", "Formal, informal, silent", "Reading, writing, speaking"], correct: 1 },
        { q: "Is dryness in prayer a sign something is wrong?", opts: ["Yes, stop praying", "No \u2014 it is normal; faithfulness matters more than feeling", "Only if it lasts a week", "Yes, pray harder"], correct: 1 },
        { q: "What is lectio divina?", opts: ["Reading the Bible quickly", "Praying with Scripture: reading, meditating, praying, contemplating", "A Latin Mass", "A type of hymn"], correct: 1 },
        { q: "Why is prayer important for discipleship?", opts: ["It earns grace points", "It is our relationship with Jesus \u2014 discipleship cannot survive without it", "It is required by law", "It makes us feel good"], correct: 1 }
      ]
    ,
    bonus: { q: "Discernment is the process of ___.", opts: ["Studying for a test", "Seeking God's will through prayer and reflection", "Making quick decisions", "Avoiding all choices"], correct: 1, reward: "Prayer Warrior!" }
    },
    prayer: {
      title: "Lectio Divina: John 15:4-5",
      lines: [
        { s: "L", t: "Let us pray together with Scripture. Listen carefully." },
        { s: "A", t: "\u2018Remain in me, and I in you. Just as a branch cannot bear fruit on its own unless it remains on the vine, so neither can you unless you remain in me.\u2019" },
        { s: "L", t: "Lord, what are you saying to us in this passage?" },
        { s: "A", t: "Help us to remain in you \u2014 in prayer, in the sacraments, in daily choices." },
        { s: "L", t: "We want to bear fruit \u2014 not on our own strength, but connected to you." },
        { s: "A", t: "Jesus, you are the vine. We are the branches. Without you we can do nothing. Amen." }
      ]
    }
  },// Part 3: Weeks 21-30

  // ─── WEEK 21 ──────────────────────────────────────────────
  {
    week: 21,
    title: "Unit 4 Review: Discipleship & Sacraments",
    pillar: "Review",
    verse: "Review session",
    discover: {
      title: "Unit 4 Review: Discipleship & Sacraments",
      instruction: "Tap to review the big ideas from Weeks 17-20.",
      items: [
        { icon: "👣", name: "Review: Discipleship", desc: "A disciple follows, learns from, and imitates Jesus daily. Metanoia means ongoing conversion. Disciples are sent — the Great Commission is for every baptized person." },
        { icon: "✝️", name: "Review: Sacraments", desc: "Sacraments are encounters with Christ, not just rituals. Ex opere operato means they work by the act itself. The Eucharist is the source and summit of Christian life." },
        { icon: "🔥", name: "Review: Confirmation", desc: "Confirmation seals Baptism and imprints a permanent character. The seven gifts equip us for mission. It is a commissioning, not a graduation." },
        { icon: "🙏", name: "Review: Prayer", desc: "Prayer is the raising of heart and mind to God — relationship, not ritual. Three forms: vocal, meditative, contemplative. Lectio divina prays with Scripture." }
      ]
    },
    secondary: "sort",
    sort: {
      title: "Match the Concept!",
      instruction: "Tap a definition, then tap the concept it belongs to.",
      items: [
        { name: "Follow, learn from, and imitate Jesus", icon: "👣", group: "Discipleship" },
        { name: "Encounter with the risen Christ", icon: "✝️", group: "Sacraments" },
        { name: "Commissioning, not graduation", icon: "🔥", group: "Confirmation" },
        { name: "Raising heart and mind to God", icon: "🙏", group: "Prayer" },
        { name: "Metanoia — ongoing conversion", icon: "🔄", group: "Discipleship" },
        { name: "Ex opere operato", icon: "⚡", group: "Sacraments" },
        { name: "Seven gifts of the Holy Spirit", icon: "🎁", group: "Confirmation" },
        { name: "Lectio divina", icon: "📖", group: "Prayer" }
      ],
      groups: ["Discipleship", "Sacraments", "Confirmation", "Prayer"],
      colors: { Discipleship: "#3B5BA5", Sacraments: "#9B5D1A", Confirmation: "#2A6B3E", Prayer: "#6B3B9A" },
      icons: { Discipleship: "👣", Sacraments: "✝️", Confirmation: "🔥", Prayer: "🙏" }
    },
    quiz: {
      questions: [
        { q: "What does 'metanoia' mean?", opts: ["Meditation", "Conversion — turning of heart and mind toward God", "A Greek prayer", "The Eucharist"], correct: 1 },
        { q: "Name the seven gifts of the Holy Spirit.", opts: ["Seven capital sins", "Wisdom, understanding, counsel, fortitude, knowledge, piety, fear of the Lord", "The seven sacraments", "The seven beatitudes"], correct: 1 },
        { q: "Is Confirmation a graduation?", opts: ["Yes", "No — it is a commissioning into mission", "It depends", "Yes, from CCD"], correct: 1 },
        { q: "What is ex opere operato?", opts: ["A Latin hymn", "Sacraments work by the valid act itself, not our feelings", "Only the Pope celebrates sacraments", "Sacraments are just symbols"], correct: 1 },
        { q: "Name the three forms of prayer.", opts: ["Morning, noon, evening", "Vocal, meditative, contemplative", "Loud, quiet, silent", "Reading, singing, kneeling"], correct: 1 }
      ]
    ,
    bonus: { q: "The Magisterium is the ___ authority of the Church.", opts: ["financial", "political", "teaching", "military"], correct: 2, reward: "Quiz Master!" }
    },
    prayer: {
      title: "Glory Be",
      lines: [
        { s: "L", t: "As we close Unit 4, let us give God glory for all He teaches us." },
        { s: "A", t: "Glory be to the Father, and to the Son, and to the Holy Spirit." },
        { s: "L", t: "As it was in the beginning, is now, and ever shall be, world without end." },
        { s: "A", t: "Amen." },
        { s: "L", t: "Lord, form us as disciples through your sacraments and prayer." },
        { s: "A", t: "Send us forth with the gifts of your Spirit. Amen." }
      ]
    }
  },

  // ─── WEEK 22 ──────────────────────────────────────────────
  {
    week: 22,
    title: "Faith and Reason: Partners, Not Enemies",
    pillar: "Creed",
    verse: "Come now and let us reason together, says the Lord. — Isaiah 1:18",
    discover: {
      title: "Discover: Faith and Reason",
      instruction: "Tap each card to explore how faith and reason work together.",
      items: [
        { icon: "🦅", name: "Two Wings", desc: "'Faith and reason are like two wings on which the human spirit rises to the contemplation of truth.' — St. John Paul II (Fides et Ratio, 1998). The Church has always believed that reason and faith both lead to truth." },
        { icon: "🔬", name: "The Church and Science", desc: "Catholics founded the world's first universities. Fr. Georges Lemaître proposed the Big Bang theory. Gregor Mendel, an Augustinian friar, founded modern genetics. The Church and science are not enemies." },
        { icon: "⚠️", name: "Fideism", desc: "Fideism is the error of thinking faith has nothing to do with reason — that we 'just believe' with no intellectual basis. The Church rejects fideism. Faith is reasonable and can be defended." },
        { icon: "📐", name: "Rationalism", desc: "Rationalism is the error of thinking human reason alone can answer every question. The Church also rejects this. Some truths — the Trinity, the Incarnation — are above reason and known only through Revelation." },
        { icon: "❓", name: "Doubt as a Starting Point", desc: "Honest intellectual doubt, brought to God and the Church, can deepen faith. St. Thomas Aquinas examined every possible objection to Christian faith. Questioning is not the enemy of faith — it can be its beginning." }
      ]
    },
    secondary: "fillblank",
    fillblank: {
      title: "Complete the Key Ideas",
      instruction: "Fill in the missing word from what we just learned.",
      sentences: [
        { text: "The Church teaches that faith and ___ are both paths to truth.", answer: "reason", options: ["reason", "feeling", "tradition", "science"] },
        { text: "Fr. Georges Lemaître proposed the ___ theory.", answer: "Big Bang", options: ["Big Bang", "Evolution", "Black Hole", "Multiverse"] },
        { text: "Fideism is the error of thinking faith has nothing to do with ___.", answer: "reason", options: ["reason", "Scripture", "the Church", "prayer"] },
        { text: "St. ___ Aquinas examined objections to Christian faith systematically.", answer: "Thomas", options: ["Thomas", "Peter", "Paul", "Augustine"] }
      ]
    },
    quiz: {
      questions: [
        { q: "What does the Catholic tradition say about faith and reason?", opts: ["Faith is superior to reason", "Reason has nothing to offer faith", "They are complementary — both lead to truth", "They are permanently in conflict"], correct: 2 },
        { q: "Who proposed the Big Bang theory?", opts: ["Charles Darwin", "Albert Einstein", "Fr. Georges Lemaître", "Gregor Mendel"], correct: 2 },
        { q: "What is fideism?", opts: ["Trust in the Church", "The error of thinking faith has nothing to do with reason", "The error of trusting science over faith", "A form of mysticism"], correct: 1 },
        { q: "Is honest intellectual doubt always the enemy of faith?", opts: ["Yes — doubt is always sinful", "Only if you share it publicly", "No — it can deepen faith if brought to God", "Only for young people"], correct: 2 },
        { q: "Which saint systematically examined every objection to Christian faith?", opts: ["St. Augustine", "St. Francis", "St. Thomas Aquinas", "St. Ignatius"], correct: 2 }
      ]
    ,
    bonus: { q: "The four last things are death, judgment, heaven, and ___.", opts: ["purgatory", "limbo", "hell", "earth"], correct: 2, reward: "Faith Champion!" }
    },
    prayer: {
      title: "Prayer for Knowledge and Wisdom",
      lines: [
        { s: "L", t: "Lord, you are Truth itself — all truth reflects your light." },
        { s: "A", t: "Sanctify our intellects. Make us curious, careful, and humble thinkers." },
        { s: "L", t: "When we have doubts, help us to bring them to you." },
        { s: "A", t: "When we have knowledge, keep us from pride." },
        { s: "L", t: "Let every truth we discover lead us closer to you, who are Truth." },
        { s: "A", t: "Enlighten our minds. Inflame our hearts. Amen." }
      ]
    }
  },

  // ─── WEEK 23 ──────────────────────────────────────────────
  {
    week: 23,
    title: "The Existence of God: Natural Arguments",
    pillar: "Creed",
    verse: "For the invisible things of Him, from the creation of the world, are clearly seen. — Wisdom 13:1-5",
    discover: {
      title: "Discover: Arguments for God's Existence",
      instruction: "Tap each card to explore how reason points to God.",
      items: [
        { icon: "🏃", name: "Motion", desc: "Everything that moves is moved by something else. But this chain cannot go on forever — there must be a First Mover that is not itself moved. This is what we call God." },
        { icon: "🔗", name: "Causation", desc: "Every effect has a cause. But this chain of causes cannot extend infinitely into the past — there must be a First Cause that is uncaused. This is God." },
        { icon: "❓", name: "Contingency", desc: "Everything around us could potentially not exist — it is 'contingent.' But if everything were contingent, at some point nothing would exist. So a Necessary Being must exist — one that cannot not exist." },
        { icon: "🎨", name: "Design", desc: "The order, beauty, and fine-tuning of creation point to an intelligent designer. The universe is not random chaos — it follows laws that are mathematically beautiful." },
        { icon: "📖", name: "CCC on Natural Knowledge", desc: "'The existence of God the Creator can be known with certainty through His works, by the light of human reason' (CCC 36). This is not just opinion — it is a truth of faith and reason together." }
      ]
    },
    secondary: "timeline",
    timeline: {
      title: "Building the Argument",
      instruction: "Tap two items to swap them into the correct logical order.",
      items: [
        { id: 1, text: "We observe motion and change in the world", order: 1 },
        { id: 2, text: "Everything in motion is moved by something else", order: 2 },
        { id: 3, text: "This chain cannot go on infinitely", order: 3 },
        { id: 4, text: "There must be a First Mover — unmoved itself", order: 4 },
        { id: 5, text: "This First Mover is what we call God", order: 5 }
      ]
    },
    quiz: {
      questions: [
        { q: "Can reason alone know that God exists?", opts: ["No — only faith can", "Yes — the Church teaches reason can know God's existence with certainty", "Only theologians can", "Only through miracles"], correct: 1 },
        { q: "Who wrote the Five Ways?", opts: ["St. Augustine", "St. Thomas Aquinas", "St. Francis", "St. Paul"], correct: 1 },
        { q: "What is the argument from motion?", opts: ["God moves everything", "Everything moved is moved by another; there must be a First Mover", "Motion proves nothing", "The earth moves around the sun"], correct: 1 },
        { q: "What does the argument from design conclude?", opts: ["Nothing useful", "The order and beauty of creation point to an intelligent designer", "The universe is random", "Science is wrong"], correct: 1 },
        { q: "What is a 'contingent' being?", opts: ["God", "A being that might not exist — depends on something else for its existence", "An angel", "A necessary being"], correct: 1 }
      ]
    ,
    bonus: { q: "Purgatory is a state of ___.", opts: ["Punishment forever", "Final purification before heaven", "Waiting to be reborn", "Separation from God forever"], correct: 1, reward: "Creed Scholar!" }
    },
    prayer: {
      title: "Canticle of Daniel",
      lines: [
        { s: "L", t: "Let all creation praise the Lord!" },
        { s: "A", t: "Sun and moon, bless the Lord. Stars of heaven, bless the Lord." },
        { s: "L", t: "Mountains and hills, bless the Lord. Seas and rivers, bless the Lord." },
        { s: "A", t: "All you living creatures, bless the Lord. Praise and exalt Him above all forever." },
        { s: "L", t: "The heavens declare the glory of God; the skies proclaim the work of His hands." },
        { s: "A", t: "Lord, help us to see your fingerprints in all creation and to know you through what you have made. Amen." }
      ]
    }
  },

  // ─── WEEK 24 ──────────────────────────────────────────────
  {
    week: 24,
    title: "Scripture and Tradition: How We Know What We Know",
    pillar: "Creed",
    verse: "All Scripture is inspired by God and is useful for teaching. — 2 Timothy 3:16-17",
    discover: {
      title: "Discover: Scripture and Tradition",
      instruction: "Tap each card to learn how God reveals Himself to us.",
      items: [
        { icon: "📖", name: "Two Sources", desc: "Scripture and Tradition together form the one deposit of divine revelation. They are not two separate sources competing with each other — they flow from the same wellspring." },
        { icon: "✍️", name: "Biblical Inspiration", desc: "God is the principal author of Scripture. But He worked through human authors who wrote in their own styles, languages, and historical contexts. Inspiration does not mean dictation." },
        { icon: "✅", name: "Inerrancy", desc: "Scripture is free from error regarding what is 'necessary for our salvation.' This does not mean the Bible is a science textbook — it means it teaches truth about God and our relationship with Him." },
        { icon: "🏛️", name: "Magisterium", desc: "The Church's teaching authority — the Magisterium — interprets Scripture authentically. We do not interpret the Bible alone or in isolation from the living Tradition of the Church." },
        { icon: "🔍", name: "Literal vs. Spiritual", desc: "Scripture has multiple levels of meaning: literal (what the text says), allegorical (what it points to in Christ), moral (how it guides us), and anagogical (where it leads us). Fundamentalism misses this richness." }
      ]
    },
    secondary: "fillblank",
    fillblank: {
      title: "Scripture and Tradition",
      instruction: "Fill in the missing word.",
      sentences: [
        { text: "Sacred Scripture and Sacred ___ form one deposit of revelation.", answer: "Tradition", options: ["Tradition", "Law", "History", "Opinion"] },
        { text: "Scripture is free from error in what is necessary for our ___.", answer: "salvation", options: ["salvation", "science", "entertainment", "politics"] },
        { text: "The ___ interprets Scripture authentically for the Church.", answer: "Magisterium", options: ["Magisterium", "individual", "government", "university"] },
        { text: "Fundamentalism reads Scripture only ___ and misses deeper senses.", answer: "literally", options: ["literally", "spiritually", "carefully", "slowly"] }
      ]
    },
    quiz: {
      questions: [
        { q: "What are the two sources of divine revelation?", opts: ["Science and religion", "Sacred Scripture and Sacred Tradition", "Faith and works", "Old and New Testaments"], correct: 1 },
        { q: "What does biblical inerrancy mean?", opts: ["The Bible is a science book", "Scripture is free from error in what is necessary for salvation", "Everything in the Bible happened exactly literally", "The Bible has no human authors"], correct: 1 },
        { q: "Who interprets Scripture authentically?", opts: ["Each individual", "The Magisterium of the Church", "Scientists", "Governments"], correct: 1 },
        { q: "What is fundamentalism's error?", opts: ["Reading carefully", "Reading Scripture only literally and missing its deeper senses", "Reading too slowly", "Reading in community"], correct: 1 },
        { q: "Can a Catholic interpret Scripture privately without the Church?", opts: ["Yes — anyone can", "No — we interpret within the living Tradition", "Only theologians can", "Only with a dictionary"], correct: 1 }
      ]
    ,
    bonus: { q: "The Church's mission is to ___.", opts: ["Build schools only", "Evangelize \u2014 share the Gospel with all people", "Collect money", "Stay hidden"], correct: 1, reward: "Believer Extraordinaire!" }
    },
    prayer: {
      title: "Prayer Before Reading Scripture",
      lines: [
        { s: "L", t: "Lord, your Word is a lamp for our feet and a light for our path." },
        { s: "A", t: "Open our eyes to behold wondrous things from your law." },
        { s: "L", t: "Help us to read Scripture not alone, but within your living Church." },
        { s: "A", t: "May your Word take root in our hearts and bear fruit in our lives." },
        { s: "L", t: "Holy Spirit, you inspired the sacred authors — now inspire us as we read." },
        { s: "A", t: "Speak, Lord, your servants are listening. Amen." }
      ]
    }
  },

  // ─── WEEK 25 ──────────────────────────────────────────────
  {
    week: 25,
    title: "Unit 5 Review: Faith, Reason & Revelation",
    pillar: "Review",
    verse: "Review session",
    discover: {
      title: "Unit 5 Review: Faith, Reason & Revelation",
      instruction: "Tap to review the big ideas from Weeks 22-24.",
      items: [
        { icon: "🦅", name: "Faith and Reason", desc: "Faith and reason are complementary — 'two wings.' The Church founded universities and embraces science. Neither fideism (faith without reason) nor rationalism (reason without faith) is correct." },
        { icon: "🔭", name: "Arguments for God", desc: "St. Thomas Aquinas wrote the Five Ways. Reason alone can know God's existence with certainty. The arguments from motion, causation, contingency, and design all point to God." },
        { icon: "📖", name: "Scripture and Tradition", desc: "Two sources form one deposit of revelation. Biblical inspiration means God is the principal author. Inerrancy means free from error in what is needed for salvation. The Magisterium interprets authentically." }
      ]
    },
    secondary: "sort",
    sort: {
      title: "Match the Concept!",
      instruction: "Tap a definition, then tap the concept it belongs to.",
      items: [
        { name: "Two wings that rise to truth", icon: "🦅", group: "Faith and Reason" },
        { name: "First Mover and First Cause", icon: "🔭", group: "Arguments for God" },
        { name: "Sacred Scripture and Sacred Tradition", icon: "📖", group: "Revelation" },
        { name: "Fideism and rationalism are both errors", icon: "⚠️", group: "Faith and Reason" },
        { name: "CCC 36: reason can know God exists", icon: "📜", group: "Arguments for God" },
        { name: "The Magisterium interprets authentically", icon: "🏛️", group: "Revelation" }
      ],
      groups: ["Faith and Reason", "Arguments for God", "Revelation"],
      colors: { "Faith and Reason": "#3B5BA5", "Arguments for God": "#9B5D1A", Revelation: "#2A6B3E" },
      icons: { "Faith and Reason": "🦅", "Arguments for God": "🔭", Revelation: "📖" }
    },
    quiz: {
      questions: [
        { q: "Are faith and reason enemies?", opts: ["Yes", "No — they are complementary paths to truth", "Sometimes", "Only in science"], correct: 1 },
        { q: "Who wrote the Five Ways?", opts: ["St. Augustine", "St. Thomas Aquinas", "St. Francis", "St. Paul"], correct: 1 },
        { q: "What are the two sources of divine revelation?", opts: ["Science and religion", "Sacred Scripture and Sacred Tradition", "Faith and works", "Old and New Testament"], correct: 1 },
        { q: "What is biblical inerrancy?", opts: ["The Bible is perfect in all ways", "Scripture is free from error in what is necessary for salvation", "The Bible is a science book", "Only the Pope can read it"], correct: 1 },
        { q: "Can reason alone know God exists?", opts: ["No", "Yes", "Only with special training", "Only through miracles"], correct: 1 }
      ]
    ,
    bonus: { q: "The Church teaches that faith and reason are ___.", opts: ["Opposed to each other", "Unrelated", "Complementary \u2014 both lead to truth", "The same thing"], correct: 2, reward: "All-Star Learner!" }
    },
    prayer: {
      title: "Nicene Creed",
      lines: [
        { s: "L", t: "Let us profess together what we believe." },
        { s: "A", t: "I believe in one God, the Father almighty, maker of heaven and earth, of all things visible and invisible." },
        { s: "L", t: "I believe in one Lord Jesus Christ, the Only Begotten Son of God." },
        { s: "A", t: "Born of the Father before all ages. God from God, Light from Light, true God from true God." },
        { s: "L", t: "For us and for our salvation he came down from heaven." },
        { s: "A", t: "Lord, increase our faith. Help us to believe with our whole mind and heart. Amen." }
      ]
    }
  },

  // ─── WEEK 26 ──────────────────────────────────────────────
  {
    week: 26,
    title: "The Call to Evangelization",
    pillar: "Creed",
    verse: "Go therefore and make disciples of all nations, baptizing them. — Matthew 28:19-20",
    discover: {
      title: "Discover: Evangelization",
      instruction: "Tap each card to explore how we share the Gospel.",
      items: [
        { icon: "📢", name: "Great Commission", desc: "'Go and make disciples of all nations' — this is not optional. It is addressed to every baptized person, not just priests and missionaries." },
        { icon: "👣", name: "Witness First", desc: "'Preach the Gospel always; when necessary use words' (attributed to St. Francis). The first way to evangelize is to live your faith visibly and authentically." },
        { icon: "🔄", name: "New Evangelization", desc: "The 'New Evangelization' means re-proposing the faith to those who have drifted away. It uses new ardor, new methods, and new expressions — while keeping the same Gospel." },
        { icon: "🤝", name: "Dialogue", desc: "Evangelization respects freedom. It proposes, never imposes. We share what we have received with love and respect, inviting others without coercion." },
        { icon: "🏫", name: "8th-Grade Evangelization", desc: "For you, evangelization means: living faithfully at school, speaking honestly about your faith when asked, inviting friends to youth group, and serving others without expecting credit." }
      ]
    },
    secondary: "sort",
    sort: {
      title: "Evangelization Strategies",
      instruction: "Tap an action, then tap the type of evangelization it represents.",
      items: [
        { name: "Living your faith visibly at school", icon: "🏫", group: "Witness" },
        { name: "Inviting a friend to youth group", icon: "🤝", group: "Invitation" },
        { name: "Helping at a food drive", icon: "🍞", group: "Service" },
        { name: "Sharing your faith story when asked", icon: "💬", group: "Proclamation" },
        { name: "Being kind to someone who is excluded", icon: "❤️", group: "Witness" },
        { name: "Answering a question about why you go to Mass", icon: "⛪", group: "Proclamation" },
        { name: "Volunteering at a nursing home", icon: "🏠", group: "Service" },
        { name: "Asking a friend to pray together", icon: "🙏", group: "Invitation" }
      ],
      groups: ["Witness", "Invitation", "Service", "Proclamation"],
      colors: { Witness: "#3B5BA5", Invitation: "#2A6B3E", Service: "#9B5D1A", Proclamation: "#6B3B9A" },
      icons: { Witness: "👣", Invitation: "🤝", Service: "🤲", Proclamation: "📢" }
    },
    quiz: {
      questions: [
        { q: "What is the Great Commission?", opts: ["The Ten Commandments", "Jesus' command to go and make disciples of all nations", "A special prayer", "The works of mercy"], correct: 1 },
        { q: "Is the Great Commission only for priests and religious?", opts: ["Yes", "No — it is for every baptized person", "Only for adults", "Only for missionaries"], correct: 1 },
        { q: "What is the New Evangelization?", opts: ["A new gospel", "Re-proposing the faith with new ardor, methods, and expressions", "Abandoning tradition", "Converting by force"], correct: 1 },
        { q: "Does evangelization impose faith on others?", opts: ["Yes — we must convert everyone", "No — it proposes and respects freedom", "Only in Catholic schools", "Only when they ask"], correct: 1 },
        { q: "What is the primary method of evangelization?", opts: ["Arguing", "Witness — living the faith", "Social media", "Handing out pamphlets"], correct: 1 }
      ]
    ,
    bonus: { q: "The New Evangelization calls Catholics to ___.", opts: ["Leave the Church", "Share the faith with new energy in today's world", "Only evangelize foreign countries", "Keep faith private"], correct: 1, reward: "Doctrine Star!" }
    },
    prayer: {
      title: "Missionary Prayer",
      lines: [
        { s: "L", t: "Lord, you said 'Go and make disciples of all nations.'" },
        { s: "A", t: "Here I am, Lord. Send me." },
        { s: "L", t: "Help us to evangelize not just with words but with our lives." },
        { s: "A", t: "Make us witnesses of joy, truth, and mercy." },
        { s: "L", t: "Give us courage to speak when asked and humility to serve without being asked." },
        { s: "A", t: "May all who see us see you, Lord. Amen." }
      ]
    }
  },

  // ─── WEEK 27 ──────────────────────────────────────────────
  {
    week: 27,
    title: "Works of Mercy: Faith in Action",
    pillar: "Morality",
    verse: "I was hungry and you gave me food. Whatever you did for one of these least brothers of mine, you did for me. — Matthew 25:35-36",
    discover: {
      title: "Discover: Works of Mercy",
      instruction: "Tap each card to learn how faith becomes action.",
      items: [
        { icon: "🍞", name: "Corporal Works", desc: "The seven Corporal Works of Mercy: feed the hungry, give drink to the thirsty, clothe the naked, shelter the homeless, visit the sick, visit prisoners, bury the dead." },
        { icon: "📖", name: "Spiritual Works", desc: "The seven Spiritual Works of Mercy: instruct the ignorant, counsel the doubtful, admonish sinners, bear wrongs patiently, forgive offenses, comfort the sorrowful, pray for the living and dead." },
        { icon: "✝️", name: "Matthew 25", desc: "'Whatever you did for one of these least brothers of mine, you did for me.' Jesus identifies Himself with the poor and suffering. To serve them is literally to serve Christ." },
        { icon: "⚖️", name: "Justice vs. Charity", desc: "Charity addresses immediate needs (giving food to a hungry person). Justice addresses root causes (working to change the systems that cause hunger). Both are required." },
        { icon: "🤲", name: "Service at This Age", desc: "You can practice the Works of Mercy now: tutoring younger students, food drives, hospital visits, writing letters to the lonely, praying for others, comforting a sad friend." }
      ]
    },
    secondary: "sort",
    sort: {
      title: "Corporal or Spiritual?",
      instruction: "Tap a Work of Mercy, then tap whether it is Corporal or Spiritual.",
      items: [
        { name: "Feed the hungry", icon: "🍞", group: "Corporal" },
        { name: "Instruct the ignorant", icon: "📚", group: "Spiritual" },
        { name: "Visit the sick", icon: "🏥", group: "Corporal" },
        { name: "Comfort the sorrowful", icon: "💛", group: "Spiritual" },
        { name: "Clothe the naked", icon: "👕", group: "Corporal" },
        { name: "Pray for the living and dead", icon: "🙏", group: "Spiritual" },
        { name: "Shelter the homeless", icon: "🏠", group: "Corporal" },
        { name: "Forgive offenses", icon: "🕊️", group: "Spiritual" }
      ],
      groups: ["Corporal", "Spiritual"],
      colors: { Corporal: "#9B5D1A", Spiritual: "#6B3B9A" },
      icons: { Corporal: "🤲", Spiritual: "📖" }
    },
    quiz: {
      questions: [
        { q: "How many Works of Mercy are there?", opts: ["7", "10", "14 — 7 Corporal and 7 Spiritual", "12"], correct: 2 },
        { q: "Name three Corporal Works of Mercy.", opts: ["Pray, fast, give alms", "Feed hungry, clothe naked, visit sick", "Read, write, teach", "Sing, dance, celebrate"], correct: 1 },
        { q: "Name two Spiritual Works of Mercy.", opts: ["Feed hungry, visit sick", "Pray for living and dead, comfort sorrowful", "Run, swim, climb", "Build, plant, harvest"], correct: 1 },
        { q: "What does Jesus say in Matthew 25 about serving the poor?", opts: ["It's optional", "Whatever you do to the least, you do to Him", "Only priests should serve", "It's too dangerous"], correct: 1 },
        { q: "What is the difference between charity and justice?", opts: ["They're the same", "Charity meets needs; justice addresses root causes", "Justice is for courts only", "Charity is only for the Church"], correct: 1 }
      ]
    ,
    bonus: { q: "Solidarity calls us to see all people as our ___.", opts: ["competitors", "brothers and sisters", "audience", "employees"], correct: 1, reward: "Moral Explorer!" }
    },
    prayer: {
      title: "Prayer of St. Teresa of Calcutta",
      lines: [
        { s: "L", t: "Lord, help us to see your face in every person we meet." },
        { s: "A", t: "Make us worthy to serve our brothers and sisters who live and die in poverty and hunger." },
        { s: "L", t: "Give them, through our hands, their daily bread." },
        { s: "A", t: "And by our understanding love, give them peace and joy." },
        { s: "L", t: "Help us to be instruments of your mercy — both corporal and spiritual." },
        { s: "A", t: "Lord, may we never be too busy, too tired, or too comfortable to serve you in the least of these. Amen." }
      ]
    }
  },

  // ─── WEEK 28 ──────────────────────────────────────────────
  {
    week: 28,
    title: "Saints as Models of Discipleship",
    pillar: "Prayer",
    verse: "We are surrounded by so great a cloud of witnesses. — Hebrews 12:1",
    discover: {
      title: "Discover: Saints as Models",
      instruction: "Tap each card to learn about saints who model discipleship.",
      items: [
        { icon: "⚖️", name: "Thomas More", desc: "St. Thomas More was a lawyer, statesman, and martyr. When King Henry VIII demanded he deny the Pope's authority, More refused — saying he died 'the King's good servant, but God's first.' He models putting God above all." },
        { icon: "📚", name: "Edith Stein", desc: "St. Edith Stein (Teresa Benedicta of the Cross) was a brilliant philosopher who converted from Judaism to Catholicism. She became a Carmelite nun and was martyred at Auschwitz. She shows that reason can lead to faith." },
        { icon: "💻", name: "Carlo Acutis", desc: "Blessed Carlo Acutis was a 21st-century Italian teenager who used the internet to evangelize — creating a website cataloging Eucharistic miracles. He died of leukemia at age 15, showing that holiness is for the young." },
        { icon: "🌿", name: "Kateri Tekakwitha", desc: "St. Kateri Tekakwitha was the first Native American saint. Despite opposition and suffering, she remained faithful to Christ. She models perseverance in faith despite cultural pressure." },
        { icon: "🌟", name: "Choosing a Patron", desc: "The tradition of choosing a Confirmation saint gives us a personal model and intercessor. Choose someone whose story speaks to your own struggles and aspirations." }
      ]
    },
    secondary: "sort",
    sort: {
      title: "Match the Saint!",
      instruction: "Tap a description, then tap the saint it describes.",
      items: [
        { name: "Died 'the King's good servant, but God's first'", icon: "⚖️", group: "Thomas More" },
        { name: "Philosopher who converted from Judaism", icon: "📚", group: "Edith Stein" },
        { name: "Teenager who evangelized using the internet", icon: "💻", group: "Carlo Acutis" },
        { name: "First Native American saint", icon: "🌿", group: "Kateri Tekakwitha" },
        { name: "Martyred by King Henry VIII", icon: "👑", group: "Thomas More" },
        { name: "Martyred at Auschwitz", icon: "✝️", group: "Edith Stein" },
        { name: "Created a website on Eucharistic miracles", icon: "🌐", group: "Carlo Acutis" },
        { name: "Persevered despite cultural opposition", icon: "💪", group: "Kateri Tekakwitha" }
      ],
      groups: ["Thomas More", "Edith Stein", "Carlo Acutis", "Kateri Tekakwitha"],
      colors: { "Thomas More": "#3B5BA5", "Edith Stein": "#9B5D1A", "Carlo Acutis": "#2A6B3E", "Kateri Tekakwitha": "#6B3B9A" },
      icons: { "Thomas More": "⚖️", "Edith Stein": "📚", "Carlo Acutis": "💻", "Kateri Tekakwitha": "🌿" }
    },
    quiz: {
      questions: [
        { q: "What were St. Thomas More's final words?", opts: ["I forgive you", "He died 'the King's good servant, but God's first'", "God save the King", "I believe"], correct: 1 },
        { q: "Who was Blessed Carlo Acutis?", opts: ["A medieval monk", "A 21st century Italian teenager who evangelized online; died at 15", "A pope", "A biblical figure"], correct: 1 },
        { q: "What did Edith Stein do before becoming a nun?", opts: ["She was a teacher", "She was a philosopher who converted from Judaism", "She was a doctor", "She was a queen"], correct: 1 },
        { q: "Who was the first Native American saint?", opts: ["St. Francis", "St. Kateri Tekakwitha", "St. Rose of Lima", "St. Juan Diego"], correct: 1 },
        { q: "Why do we choose a Confirmation saint?", opts: ["It's just tradition", "As a model and intercessor for our spiritual life", "The Church requires it", "For good luck"], correct: 1 }
      ]
    ,
    bonus: { q: "Ignatian discernment involves paying attention to ___.", opts: ["Only feelings", "Consolation and desolation in prayer", "Other people's opinions", "Random signs"], correct: 1, reward: "Prayer Pro!" }
    },
    prayer: {
      title: "Litany of the Saints",
      lines: [
        { s: "L", t: "We call on the saints who have gone before us — our cloud of witnesses." },
        { s: "A", t: "Holy Mary, Mother of God — pray for us." },
        { s: "L", t: "St. Thomas More, St. Edith Stein, Blessed Carlo Acutis, St. Kateri Tekakwitha —" },
        { s: "A", t: "Pray for us." },
        { s: "L", t: "All holy men and women of God —" },
        { s: "A", t: "Pray for us. Help us to follow your example of faith, courage, and love. Amen." }
      ]
    }
  },

  // ─── WEEK 29 ──────────────────────────────────────────────
  {
    week: 29,
    title: "Eschatology: The Last Things",
    pillar: "Creed",
    verse: "Death is swallowed up in victory. O death, where is your sting? — 1 Corinthians 15:54-55",
    discover: {
      title: "Discover: The Last Things",
      instruction: "Tap each card to explore what the Church teaches about the end.",
      items: [
        { icon: "⏳", name: "Death", desc: "Death is the moment when our soul separates from our body. It is the end of our earthly journey and the beginning of eternity. The Church teaches us to face death with faith, not fear." },
        { icon: "⚖️", name: "Particular Judgment", desc: "Each person is judged immediately after death — this is the particular judgment. It is an accounting of our life: our choices, our love, our faithfulness." },
        { icon: "🔥", name: "Purgatory", desc: "Purgatory is a state of purification for those who die in God's grace but still need cleansing. It is not a 'second chance' — it is a final preparation for the fullness of heaven." },
        { icon: "✨", name: "Heaven", desc: "Heaven is the fullness of life and happiness with God — the beatific vision. It is what we were made for: perfect communion with God and all the saints." },
        { icon: "🚪", name: "Hell", desc: "Hell is eternal separation from God, chosen freely. The Church affirms its reality while praying and hoping for all to be saved. God does not send people to hell — they choose to reject Him definitively." }
      ]
    },
    secondary: "timeline",
    timeline: {
      title: "The Last Things in Order",
      instruction: "Tap two items to swap them into the correct order.",
      items: [
        { id: 1, text: "Death — the soul separates from the body", order: 1 },
        { id: 2, text: "Particular Judgment — each person is judged immediately", order: 2 },
        { id: 3, text: "Purgatory — purification for those who need it (if applicable)", order: 3 },
        { id: 4, text: "Heaven or Hell — our eternal destination", order: 4 },
        { id: 5, text: "General Judgment — at the end of time, all is revealed", order: 5 }
      ]
    },
    quiz: {
      questions: [
        { q: "What are the four Last Things?", opts: ["Birth, life, death, resurrection", "Prayer, fasting, almsgiving, penance", "Death, judgment, heaven, hell", "Creation, Fall, Redemption, Restoration"], correct: 2 },
        { q: "What is particular judgment?", opts: ["The final exam", "Each person is judged immediately at death", "A courtroom trial", "Something that happens at Mass"], correct: 1 },
        { q: "What is purgatory?", opts: ["A second chance", "A state of purification for those in God's grace who still need purifying", "Another name for hell", "A place for good people"], correct: 1 },
        { q: "What is heaven?", opts: ["A place in the clouds", "Full relationship with God — the beatific vision", "A reward for being perfect", "A feeling of happiness"], correct: 1 },
        { q: "Is hell a real possibility?", opts: ["No — everyone goes to heaven", "Yes — the Church affirms it, though we pray for all to be saved", "Only for very bad people", "It's just a metaphor"], correct: 1 }
      ]
    ,
    bonus: { q: "The marks of the Church — One, Holy, Catholic, Apostolic — are ___.", opts: ["Optional beliefs", "Essential characteristics given by Christ", "Only symbolic", "Added later by the Pope"], correct: 1, reward: "Faith Explorer!" }
    },
    prayer: {
      title: "Eternal Rest",
      lines: [
        { s: "L", t: "Let us pray for all who have died — that they may rest in God's peace." },
        { s: "A", t: "Eternal rest grant unto them, O Lord." },
        { s: "L", t: "And let perpetual light shine upon them." },
        { s: "A", t: "May their souls, and the souls of all the faithful departed, through the mercy of God, rest in peace." },
        { s: "L", t: "Lord, help us to live each day in the light of eternity — knowing that our choices matter forever." },
        { s: "A", t: "Amen." }
      ]
    }
  },

  // ─── WEEK 30 ──────────────────────────────────────────────
  {
    week: 30,
    title: "Year in Review & Sending Forth",
    pillar: "Review",
    verse: "I can do all things through Christ who strengthens me. — Philippians 4:13",
    discover: {
      title: "What We Built This Year!",
      instruction: "Tap to review the five big themes of Grade 8.",
      items: [
        { icon: "🪞", name: "Who We Are", desc: "We are made in God's image — imago Dei. We have intellect and will. We have inherent dignity. Free will is ordered to the good. Conscience must be formed and followed. Sin is real and has consequences." },
        { icon: "⚖️", name: "Moral Decision-Making", desc: "Three sources of morality: object, intention, circumstances. Natural law is universal. Virtues — cardinal and theological — shape character. Prudence applies right reason to action." },
        { icon: "⚡", name: "Social Justice", desc: "The common good, solidarity, subsidiarity. Human life is sacred from conception to natural death. Truth-telling and the 8th Commandment. Chastity as integration. Stewardship and universal destination of goods." },
        { icon: "✝️", name: "Discipleship", desc: "Disciples follow, learn, and imitate Jesus daily. Sacraments are encounters with Christ. Confirmation is a commissioning. Prayer is relationship, not ritual. Metanoia — ongoing conversion." },
        { icon: "🚀", name: "Faith, Reason & Mission", desc: "Faith and reason are partners. Arguments for God's existence. Scripture and Tradition. The call to evangelization. Works of Mercy. Saints as models. The Last Things as ultimate horizon." }
      ]
    },
    secondary: "sort",
    sort: {
      title: "Which Pillar Does It Belong To?",
      instruction: "Tap a topic, then tap the pillar it belongs to.",
      items: [
        { name: "Imago Dei", icon: "🪞", group: "Creed" },
        { name: "The Sacraments", icon: "💧", group: "Sacraments" },
        { name: "The Cardinal Virtues", icon: "⚖️", group: "Morality" },
        { name: "Lectio Divina", icon: "📖", group: "Prayer" },
        { name: "The Five Ways", icon: "🔭", group: "Creed" },
        { name: "Works of Mercy", icon: "🤲", group: "Morality" },
        { name: "Confirmation", icon: "🔥", group: "Sacraments" },
        { name: "The Our Father", icon: "🙏", group: "Prayer" }
      ],
      groups: ["Creed", "Sacraments", "Morality", "Prayer"],
      colors: { Creed: "#3B5BA5", Sacraments: "#9B5D1A", Morality: "#2A6B3E", Prayer: "#6B3B9A" },
      icons: { Creed: "✝️", Sacraments: "💧", Morality: "⚖️", Prayer: "🙏" }
    },
    quiz: {
      questions: [
        { q: "What does imago Dei mean?", opts: ["Image of Mary", "Image of God", "Image of the Church", "Image of creation"], correct: 1 },
        { q: "Name the four cardinal virtues.", opts: ["Faith, hope, charity, love", "Prudence, justice, fortitude, temperance", "Wisdom, knowledge, counsel, piety", "Courage, honesty, kindness, service"], correct: 1 },
        { q: "What does 'metanoia' mean?", opts: ["Meditation", "A Greek prayer", "Conversion — a turning of heart and mind", "The Eucharist"], correct: 2 },
        { q: "What are the four Last Things?", opts: ["Birth, life, death, resurrection", "Prayer, fasting, almsgiving, penance", "Death, judgment, heaven, hell", "Creation, Fall, Redemption, Restoration"], correct: 2 },
        { q: "Who is sent to fulfill the Great Commission?", opts: ["Only priests and religious", "Only bishops", "Every baptized person", "Only those who have been confirmed"], correct: 2 }
      ]
    ,
    bonus: { q: "The four last things are death, judgment, heaven, and ___.", opts: ["purgatory", "limbo", "hell", "earth"], correct: 2, reward: "Super Scholar!" }
    },
    prayer: {
      title: "Graduation Blessing",
      lines: [
        { s: "L", t: "You have completed a year of serious faith formation. You are not the same as when you started." },
        { s: "A", t: "Lord, take everything we have learned this year and make it real in our lives." },
        { s: "L", t: "May you carry imago Dei with you — knowing your dignity and seeing it in others." },
        { s: "A", t: "May you be people of virtue — prudent, just, courageous, temperate." },
        { s: "L", t: "May you live as disciples — daily, joyfully, and without counting the cost." },
        { s: "A", t: "Send us forth. We are ready. In the name of the Father, Son, and Holy Spirit. Amen." }
      ]
    }
  },
];
