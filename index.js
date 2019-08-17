let weeks = {
  "A": [
    [
      ["terra, ae", "earth, land"],
      ["porta, ae", "gate"],
      ["Maria, ae", "Mary"],
      ["nauta, ae", "sailor"],
      ["victōria, ae", "victory"],
      ["silva, ae", "forest"],
      ["glōria, ae", "fame, glory"],
    ],
    [
      ["ōrat", "he, she, it prays"],
      ["ōrant", "they pray"],
      ["videt", "he, she, it sees"],
      ["vident", "they see"],
      ["non, adv.", "not"],
      ["laudat", "he, she, it praises"],
      ["laudant", "they praise"],
      ["prōvincia, ae", "province"],
      ["servus, ī", "servant, slave"],
      ["fīlius, ī", "son"],
      ["Deus, Deī", "God"],
      ["amīcus, ī", "friend"],
      ["Chrīstus, ī", "Christ"],
      ["Chrīstiānus, ī", "Christian"],
      ["et, conj.", "and"],
    ],
    [
      ["bellum, ī", "war"],
      ["caelum, ī", "sky, heaven(C)"],
      ["rēgnum, ī", "kingdom, royal power"],
      ["praemium, ī", "reward"],
      ["perīculum, ī", "danger"],
      ["imperium, ī", "command, power, empire"],
      ["dedit", "he, she, it gave"],
      ["dedērunt", "they gave"],
      ["gladius, ī", "sword"],
      ["sed, conj.", "but"],
      ["oppidum, ī", "town"],
      ["Gallia, ae", "Gaul"],
      ["Gallus, ī", "a Gaul"],
      ["Rōmānus, ī", "a Roman"],
      ["Roma, ae", "Rome"],
      ["propter, prep. w. acc.", "on account of"],
      ["cum, prep. w. abl.", "with"],
      ["post, prep. w. acc.", "after, behind"],
      ["in, prep. w. abl.", "in, on"],
    ],
    [
      ["sum", "I am"],
      ["es", "you are"],
      ["est", "he, she, it is"],
      ["sumus", "we are"],
      ["estis", "you (plural) are"],
      ["sunt", "they are"],
      ["quod, conj.", "because"],
      ["itaque, conj.", "therefore, and so"],
      ["oncolunt", "they inhabit"],
      ["vidētis", "you(plural) see"],
      ["vīcērunt", "they conquered"],
      ["tabula, ae", "map"],
    ],
    [
      ["lēx, legīs", "law"],
      ["rēx, rēgis", "king"],
      ["dux, ducis", "leader"],
      ["lūx, lūcis", "light"],
      ["homō, hominis", "man, mankind"],
      ["imperātor, imperātōris", "commander in chief, general"],
      ["vēritās, vēritātis", "truth"],
      ["Caesar, Caesaris", "Caesar"],
      ["salūs, salūtis", "safety, welfare, salvation"],
      ["vōx, vōcis", "voice, cry"],
      ["audīvit", "he, she, it heard"],
      ["Ego", "I"],
      ["vita, ae", "life"],
      ["virtūs, virtūtis", "courage, virtue "],
      ["mīles, mīlitis", "soldier"],
      ["pāx, pācis", "peace"],
      ["via, ae", "road", "way"],
      ["populūs, populī", "people, nation"],
      ["mūnīverunt", "they fortified (w.viam or via)"],
    ],
    [
      ["pars, partis", "part"],
      ["collis, collis, m.", "hill"],
      ["hostis, hostis", "enemy (in war)"],
      ["gēns, gentis", "tribe"],
      ["caedēs, caedis", "slaughter"],
      ["frāter, frātris (frātrum)", "brother"],
      ["pater, patris (partum)", "father"],
      ["māter, mātris (mātrum)", "mother"],
      ["mōns, mōntis", "mountain"],
      ["clamor, clāmōris", "shout"],
      ["prīnceps, prīncepis", "chief leading man"],
      ["occīdērunt", "they killed"],
      ["in cruce", "on the cross"],
      ["flūmen, flūmenis", "river"],
      ["iter, itineris", "journey, march, route"],
      ["corpus, corporis", "body"],
      ["vulnus, vulneris", "wound"],
      ["agmen, agmenis", "col of soldiers, army"],
      ["nōmen, nōmenis", "name"],
    ],
    [
      ["mundus, ī", "world"],
      ["erat", "he, she, it was"],
      ["erant", "they were"],
      ["adventus, ūs", "arrival"],
      ["equitātus, ūs", "cavalry"],
      ["exercitus, ūs", "army"],
      ["impetus, ūs", "attack"],
      ["metus, ūs", "fear"],
      ["spīritus, ūs", "breath, spirit"],
      ["portus, ūs", "harbor, port"],
      ["senātus, ūs", "senate"],
    ],
    [
      ["in, prep w. abl.", "in, on"],
      ["in, prep w. acc.", "in, on, into, against, upon"],
      ["nunc; adv.", "now"],
      ["autem; conj. postpositive", "however"],
      ["fēcērunt", "they made"],
      ["vēnit", "he, she, it came"],
      ["vēnērunt", "they came"],
      ["multī", "many"],
      ["rēs, reī", "thing, affair"],
      ["fidēs, fideī", "faith, reliability"],
      ["aciēs, aciēī", "battle line"],
      ["spēs, speī", "hope"],
      ["posuērunt", "they put, placed,"],
      ["they pitched (w. castra)"],
      ["grātia, ae (sing)- favor, grace"],
      ["castra, castrōrum", "camp"],
      ["impedīmenta, impedimentōrum", "baggage, baggage train"],
      ["grātiae, grātiārum (pl.)", "thanks"],
      ["cōpia, ae (sing)", "supply, abundance"],
      ["cōpiae, cōpiārum (pl.)", "troops, forces"],
      ["agunt", "they give (w. grātiās)"],
      ["cēpērunt", "they captured"],
    ],
    [
      ["omnium", "of all "],
      ["vīdērunt", "they saw "],
      ["magnus, a, um", "great, large "],
      ["altus, a, um", "high, deep "],
      ["bonus, a, um", "good "],
      ["longus, a, um", "long "],
      ["malus, a, um", "bad "],
      ["multus, a, um", "much, (pl.) many "],
      ["sānctus, a, um", "holy, saint "],
      ["prīmus, a, um", "first "],
      ["America, ae", "America "],
    ],
    [
      [],
    ],
    [
      ["angustus, a, um", "narrow "],
      ["reliquus, a, um", "remaining, the rest of "],
      ["tūtus, a, um", "safe "],
      ["Rōmānus, a, um", "Roman "],
      ["Chrīstiānus, a, um", "Christian "],
      ["suprēmus, a, um", "highest "],
      ["estō", "let….be "],
      ["prō, prep w. abl.", "in front of, on behalf of "],
      ["inopia, ae", "scarcity, want "],
      ["dominus, ī", "Lord, master "],
      ["mūrus, ī", "wall "],
      ["frūmentum, ī", "grain (pl. crops) "],
      ["legiō, legiōnis f.", "legion "],
      ["sit", "be (understood in Latin supply in English) "],
    ],
    [
      ["gravis, e", "heavy, severe, serious "],
      ["brevis, e", "short "],
      ["commūnis, e", "common "],
      ["difficilis, e", "difficult "],
      ["facilis, e", "easy "],
      ["fortis, e", "brave, strong "],
      ["nōbilis, e", "noble, renowned "],
      ["omnis, e", "all, every "],
      ["cupidus, a, um; w. gen.", "eager, desirous "],
      ["plēnus, a, um; w. gen. or abl.", "full "],
      ["fīnitimus, a, um; w. dat.", "neighboring, next "],
      ["similis, e; w. gen or dat.", "like, similar "],
      ["Jēsus, ū", "Jesus "],
      ["et…et", "both…and "],
      ["quid", "what? "],
      ["prīmā lūce", "at dawn "],
      ["urbs, urbis", "city "],
      ["pōns, pontis, m.- bridge "],
      ["signum, ī", "standard, signal, sign "],
      ["eques, equitis", "horseman (pl. cavalry) "],
      ["pictūra, ae", "picture "],
      ["crux, crucis", "cross "],
      ["Amen", "(Hebrew) so be it "],
    ],
    [
      ["laudō, 1, tr.", "praise "],
      ["occupō, 1, tr.", "seize "],
      ["oppugnō, 1, tr,", "attack, assault "],
      ["ōrō, 1, tr.", "beg, pray "],
      ["parō, 1, tr.", "prepare, get ready "],
      ["cum; conj.", "when "],
    ],
    [
      [],
    ],
    [
      [],
    ],
    [
      ["pūgno, 1, intr.", "fight "],
      ["superō, 1, tr.", "overcome, conquer, surpass "],
      ["portō, 1, tr.", "carry "],
      ["centuriō, centuriōnis", "a centurian "],
      ["numerus, ī", "number "],
      ["dō, dare, dedī, datus, 1, tr.", "give "],
      ["vocō, 1, tr.", "call "],
      ["interim, adv. ", "meanwhile "],
      ["mors, mortis", "death "],
      ["hibērna, hibēnōrum (p. only)", "winter quarters "],
    ],
    [
      ["ubi, adv.", "where?"],
      ["quis, pronoun", "who?"],
      ["quid, pronoun", "what?"],
      ["cūr, adv.", "why?"],
      ["locus, locī (pl. loca,locōrum)", "place"],
      ["aliēnus, a, um", "unfavorable, another, foreign"],
    ],
    [
      ["ōratiō, ōrātiōnis", "speech, prayer"],
      ["semper, adv.", "always"],
      ["sīcut, conj.", "as"],
      ["in prīncipīo", "in the beginning"],
      ["in saecula saeculōrum", "world without end forever"],
      ["-ne", "particle used in questions"],
      ["sit", "be or may"],
      ["monuit", "advised"],
      ["suus, a, um", "his (adj.)"],
      ["America, ae", "America"],
      ["fēcit", "made"],
      ["omit", "for"],
      ["Americanus, a, um", "American (adj.)"],
    ],
    [
      ["moneō, 2, tr.", "warn, advise"],
      ["timeō, timēre, timuī, 2, tr.", "fear"],
      ["terreō", "terrify"],
      ["habeō, 2, tr.", "have"],
      ["arama, armōrum", "arms"],
    ],
    [
      ["Margarītārius, a, um", "Pearl"],
      ["Japōnia, ae", "Japan"],
    ],
    [
      ["ego, meī", "I"],
      ["nōs, nostrī", "we"],
      ["videō, vidēre, vidī, vīsus, 2, tr. ", "see"],
      ["saepe adv.", "often"],
      ["salūtem dat", "gives greeting"],
      ["valē", "farewell, goodbye"],
      ["omnia", "all things, everything"],
      ["Galba, ae", "Galba (a Roman proper name)"],
      ["tū, tuī", "you (sing.)"],
      ["vōs, vestrī", "you (pl.)"],
      ["teneō, tenēnere, tenuī, tentus, 2, tr.", "hold"],
      ["moveō, movēre, mōvī, mōtus, 2, tr.", "move"],
      ["tamen, adv.", "nevertheless"],
      ["neque, conj.", "nor, and...not"],
      ["Imperator", "(nonmilitary) emperor"],
      ["et", "and, also"],
      ["vērus, a, um, adj.", "true"],
      ["sī", "if"],
      ["Mehercule!", "By Hercules!"],
      ["hōs", "these"],
    ],
    [
      ["meus, a, um", "my"],
      ["is, ea, id", "he, she, it"],
      ["sustineō, sustinēre, sustinuī, sustentus, 2, tr.", "sustain, withstand"],
      ["finēs, finum, m. pl. 3rd decl. ", "territory"],
      ["āla, ae", "wing"],
    ],
    [
      ["suī", "him/her/it/themselves"],
      ["etiam, adv.", "also"],
      ["enim, conj., postp.", "for"],
      ["ōrātor, ōrātōris", "an orator"],
      ["dē, prep. w. abl.", "concernng"],
      ["inquit", "he said"],
      ["laudatūr", "is praised"],
      ["Annuntiātiō, Annuntātōnis", "the Annunciation (by the Angel Gabriel)"],
      ["magnificat", "doth magnify"],
      ["anima mea", "my soul"],
      ["quia", "same as quod"],
      ["fēcit", "he has done"],
      ["pōnunt", "place"],
      ["Chrīstophorus", "Greek, Christ-bearer"],
    ],
    [
      ["dūcō, dūcere, dūxī, ductus, 3, tr. ", "lead, guide"],
      ["gerō, gerere, gessī, gestus, 3, tr.", "carry carry on, wage (w. bellum)"],
      ["dēfendō, dēfendere, dēfendī, dēfēnsus, 3, tr.", "draw up, equip"],
      ["mittō, mittere, mīsī, missus, 3, tr.", "send"],
      ["fortiter, adv.", "bravely, strongly"],
      ["vincō, vincere, vīcī, victus, 3, tr.", "conquer"],
      ["petō, petere, petīvī, petītus, 3, tr.", "drive, repulse, rout"],
      ["litterae, litterārum", "letter (i.e. an epistle), dispatch"],
      ["frūmentum, ī", "rations"],
    ],
    [
      ["pōnō, pōnere, posuī, positus, 3, tr.", "put, place, set, pitch (w.castra)"],
      ["contendō, contendere, contendī, 3, intr.", "strive, contend, hasten"],
      ["agō, agere, ēgī, āctus, 3. tr.", "drive, do (not as a helping verb), act, treat"],
      ["ibi, adv.", "there"],
      ["dē, prep. w. abl.", "concerning, about"],
      ["portō", "use"],
    ],
    [
      ["audiō, 4, tr.", "hear"],
      ["muniō, 4, tr.", "fortify, construct (w/ viam or viās)"],
      ["veniō, venīre, vēnī, ventum, 4, intr.", "come"],
      ["conveniō, ceonvenīre, convēnī, conventum, 4, intr.", "come together, assemble"],
      ["per, prep. w. acc.", "through"],
    ],
    [
      ["Populusque", "et Populus"],
      ["sum, esse, fuī, futūrus, intr.", "am"],
      ["undique, adv.", "from all sides, on all sides"],
      ["tēlum, ī", "dart"],
    ],
    [
      ["absum, abesse, āfuī, āfutūrus, intr; ab (ā) w. abl.", "am away, am distant"],
      ["longē, adv. ", "far, by far"],
      ["collocō, 1, tr.", "place, station"],
      ["maneō, manēre, mānsī, mānsūrus, 2, intr.", "remain"],
      ["compleō, complēre, comlēvī, complētus, tr.; w. abl.", "fill (with)"],
      ["cēdō, cēdere, cessī, cessūrus, 3, intr.", "give way, yield"],
      ["atque (ac), conj.", "and"],
      ["Populīque = et Populī"],
      ["Sanctūs Michael", "St. Michael the Archangel"],
      ["vinculum, ī", "chain"],
      ["intrā", "enter!"],
      ["gaudium, ī", "joy"],
      ["tuus, a, um adj.", "your"],
    ],
    [
      ["incitō, 1, tr.", "incite, arouse"],
      ["adjuvō, adjuvāre, adjūvī, adjūtus, 1, tr.", "help, aid"],
      ["servō, 1, tr. ", "guard, keep"],
      ["perturbō, 1, tr.", "confuse, disturb"],
      ["incendō, incendere, incendī, incēnsus, 3, tr.", "set fire to, burn"],
      ["tum, adv.", "then, at that time"],
    ],
    [
      [],
    ],
  ],
  "B": [
    [

    ]
  ]
}
let test = prompt("Would you like to test? y/n") === "y"
let way = test ? (prompt("Would you like to answer in English? y/n") === "n") : false
let week = Number(prompt(`What week would you like to ${test ? "test" : "review"}?`)) - 1
function shuffle(a) {
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}
let review = weeks.A[week]
review.forEach(el => {
  for (let x = 0; x < 0; x++) {
    review.push(el)
  }
})
review = shuffle(review)
review.forEach((el, i) => {
  let item = document.createElement("h3")
  item.innerText = el[way ? 1 : 0] + ": " + (test ? "?" : el[way ? 0 : 1])
  item.id = test ? "textNoFont" : "text"
  let writeBox = document.createElement("div")
  writeBox.id = "writeBox"
  if (i % 2 === 0) {
    document.getElementById("side1").appendChild(item)
    // document.getElementById("side1").appendChild(document.createElement("br"))
    document.getElementById("side1").appendChild(writeBox)

  } else {
    document.getElementById("side2").appendChild(item)
    // document.getElementById("side2").appendChild(document.createElement("br"))

    document.getElementById("side2").appendChild(writeBox)


  }
})