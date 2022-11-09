// img作成　トトロ
const totoro1 = document.createElement("img");
totoro1.src = "../img/a01.gif";
totoro1.alt = "トトロ喜び";
const totoro2 = document.createElement("img");
totoro2.src = "../img/a02.gif";
totoro2.alt = "トトロ驚き";

// img作成　クイズ問題
const img01 = document.createElement("img");
img01.src = "../img/chihiro043.jpg";
img01.alt = "千と千尋の神隠し";
const img02 = document.createElement("img");
img02.src = "../img/porco041.jpg";
img02.alt = "紅の豚";
const img03 = document.createElement("img");
img03.src = "../img/mimi033.jpg";
img03.alt = "耳をすませば";
const img04 = document.createElement("img");
img04.src = "../img/howl016.jpg";
img04.alt = "ハウルの動く城";
const img05 = document.createElement("img");
img05.src = "../img/kazetachinu049.jpg";
img05.alt = "風立ちぬ";
const img06 = document.createElement("img");
img06.src = "../img/mononoke023.jpg";
img06.alt = "もののけ姫";
const img07 = document.createElement("img");
img07.src = "../img/laputa010.jpg";
img07.alt = "天空の城ラピュタ";
const img08 = document.createElement("img");
img08.src = "../img/omoide018.jpg";
img08.alt = "おもひでぽろぽろ";
const img09 = document.createElement("img");
img09.src = "../img/karigurashi048.jpg";
img09.alt = "借りぐらしのアリエッティ";
const img10 = document.createElement("img");
img10.src = "../img/nausicaa023.jpg";
img10.alt = "風の谷のナウシカ";

// クイズ配列
const quiz = [
  {
    quesiton: img01,
    answers: ["千と千尋の神隠し", "崖の上のポニョ", "借りぐらしのアリエッティ"],
    correct: "千と千尋の神隠し",
  },
  {
    quesiton: img02,
    answers: ["おもひでぽろぽろ", "ハウルの動く城", "紅の豚"],
    correct: "紅の豚",
  },
  {
    quesiton: img03,
    answers: ["耳をすませば", "コクリコ坂から", "平成狸合戦ぽんぽこ"],
    correct: "耳をすませば",
  },
  {
    quesiton: img04,
    answers: ["天空の城ラピュタ", "ハウルの動く城", "思い出のマーニー"],
    correct: "ハウルの動く城",
  },
  {
    quesiton: img05,
    answers: ["コクリコ坂から", "火垂るの墓", "風立ちぬ"],
    correct: "風立ちぬ",
  },
  {
    quesiton: img06,
    answers: ["千と千尋の神隠し", "もののけ姫", "ゲド戦記"],
    correct: "もののけ姫",
  },
  {
    quesiton: img07,
    answers: ["魔女の宅急便", "となりのトトロ", "天空の城ラピュタ"],
    correct: "天空の城ラピュタ",
  },
  {
    quesiton: img08,
    answers: ["おもひでぽろぽろ", "アーヤと魔女", "耳をすませば"],
    correct: "おもひでぽろぽろ",
  },
  {
    quesiton: img09,
    answers: ["借りぐらしのアリエッティ", "猫の恩返し", "紅の豚"],
    correct: "借りぐらしのアリエッティ",
  },
  {
    quesiton: img10,
    answers: ["風の谷のナウシカ", "千と千尋の神隠し", "天空の城ラピュタ"],
    correct: "風の谷のナウシカ",
  },
];

// 変数など初期設定
const quizLength = quiz.length;

let quizIndex = 0;
let score = 0;

const button = document.getElementsByTagName("button");

// 出てくるアイテムたちのアニメーション

// ---荒地の魔女
let timerAnimation1;
function showArechi() {
  const arechi = document.querySelector(".arechi");
  arechi.classList.add("hyouzi");
  timerAnimation1 = setTimeout(closeArechi, 5000);
}
function closeArechi() {
  clearTimeout(timerAnimation1);
  const arechi = document.querySelector(".arechi");
  arechi.classList.remove("hyouzi");
}
function showArechi1() {
  timerAnimationAA = setInterval(showArechi, 10000);
}
showArechi1();

// ---ポニョ赤
let timerAnimation2;
function showPnyoaka() {
  const pnyoaka = document.querySelector(".pnyoaka");
  pnyoaka.classList.add("hyouzi");
  timerAnimation2 = setTimeout(closePnyoaka, 12000);
}
function closePnyoaka() {
  clearTimeout(timerAnimation2);
  const pnyoaka = document.querySelector(".pnyoaka");
  pnyoaka.classList.remove("hyouzi");
}
function showPnyoaka2() {
  timerAnimationA = setInterval(showPnyoaka, 5000);
}
showPnyoaka2();

// ---すすわたり01
let timerAnimation3;
function showSusu01() {
  const susu01 = document.querySelector(".susu01");
  susu01.classList.add("hyouzi");
  timerAnimation3 = setTimeout(closeSusu01, 3000);
}
function closeSusu01() {
  clearTimeout(timerAnimation3);
  const susu01 = document.querySelector(".susu01");
  susu01.classList.remove("hyouzi");
}
function showSusu02() {
  timerAnimationB = setInterval(showSusu01, 5000);
}
showSusu02();

// ---すすわたり02;
let timerAnimation4;
function showSusu03() {
  const susu02 = document.querySelector(".susu02");
  susu02.classList.add("hyouzi");
  timerAnimation4 = setTimeout(closeSusu02, 8000);
}
function closeSusu02() {
  clearTimeout(timerAnimation4);
  const susu02 = document.querySelector(".susu02");
  susu02.classList.remove("hyouzi");
}
function showSusu04() {
  timerAnimationC = setInterval(showSusu03, 1000);
}
showSusu04();

// ---tanuki;
let timerAnimation5;
function showtanuki01() {
  const tanuki = document.querySelector(".tanuki");
  tanuki.classList.add("hyouzi");
  timerAnimation5 = setTimeout(closetanuki01, 2000);
}
function closetanuki01() {
  clearTimeout(timerAnimation5);
  const tanuki = document.querySelector(".tanuki");
  tanuki.classList.remove("hyouzi");
}
function showtanuki02() {
  timerAnimationD = setInterval(showtanuki01, 10000);
}
showtanuki02();

// ---satuki;
let timerAnimation6;
function showsatuki01() {
  const satuki = document.querySelector(".satuki");
  satuki.classList.add("hyouzi");
  timerAnimation6 = setTimeout(closesatuki01, 10000);
}
function closesatuki01() {
  clearTimeout(timerAnimation6);
  const satuki = document.querySelector(".satuki");
  satuki.classList.remove("hyouzi");
}
function showsatuki02() {
  timerAnimationF = setInterval(showsatuki01, 1000);
}
showsatuki02();

// ---すすわたり03;
let timerAnimation7;
function showSusu05() {
  const susu03 = document.querySelector(".susu03");
  susu03.classList.add("hyouzi");
  timerAnimation7 = setTimeout(closeSusu03, 4000);
}
function closeSusu03() {
  clearTimeout(timerAnimation7);
  const susu03 = document.querySelector(".susu03");
  susu03.classList.remove("hyouzi");
}
function showSusu06() {
  timerAnimationP = setInterval(showSusu05, 10000);
}
showSusu06();

//============================
// クイズの問題画像を表示、選択肢を定義
//============================
const setupQuiz = () => {
  const x = document.getElementById("js-question");
  x.appendChild(quiz[quizIndex].quesiton);
  x.classList.add("addimg");

  let buttonIndex = 0;
  let buttonLength = button.length;
  while (buttonIndex < buttonLength) {
    button[buttonIndex].textContent = quiz[quizIndex].answers[buttonIndex];
    buttonIndex++;
  }
};

//初回画面表示
setupQuiz();

//========================
//ボタンを押したら正誤判定
//========================
const clickHandler = (e) => {
  if (quiz[quizIndex].correct === e.target.textContent) {
    //正解したら　toto-a を2秒表示
    let timerId;
    function showBox() {
      const toto = document.querySelector(".toto_a");
      toto.classList.add("hyouzi");
      timerId = setTimeout(closeBox, 1500);
    }
    function closeBox() {
      clearTimeout(timerId);
      const toto = document.querySelector(".toto_a");
      toto.classList.remove("hyouzi");
    }
    showBox();
    score++;
  } else {
    //不正解したら　toto-b を2秒表示
    let timerId;
    function showBox() {
      const toto = document.querySelector(".toto_b");
      toto.classList.add("hyouzi");
      timerId = setTimeout(closeBox, 1500);
    }
    function closeBox() {
      clearTimeout(timerId);
      const toto = document.querySelector(".toto_b");

      toto.classList.remove("hyouzi");
    }
    showBox();
  }

  //次の動作
  quizIndex++;

  hantei();
};

//==========================
// アイテムを押した時のタイマー変動
//==========================
//タイマー変動　プラス
const timePlus01 = document.querySelector(".timePlus01");
const timePlus02 = document.querySelector(".timePlus02");
const timePlus03 = document.querySelector(".timePlus03");
function addCount() {
  i = i + 3;
  console.log(i);
}

let buAnimation;
function showBu() {
  const Buu = document.querySelector(".time-bu");
  Buu.innerHTML = "🥺";
  buAnimation = setTimeout(closeBu, 1000);
}
function closeBu() {
  clearTimeout(buAnimation);
  const Buu = document.querySelector(".time-bu");
  Buu.innerHTML = "";
}

let yeiAnimation;
function showYei() {
  const yei = document.querySelector(".time-yei");
  yei.innerHTML = "👍";
  yeiAnimation = setTimeout(closeYei, 1000);
}
function closeYei() {
  clearTimeout(yeiAnimation);
  const yei = document.querySelector(".time-yei");
  yei.innerHTML = "";
}

timePlus01.addEventListener("click", () => {
  addCount();
  showYei();
});
timePlus02.addEventListener("click", () => {
  addCount();
  showYei();
});
timePlus03.addEventListener("click", () => {
  addCount();
  showYei();
});

//タイマー処理　マイナス
const timeMinus01 = document.querySelector(".timeMinus01");
const timeMinus02 = document.querySelector(".timeMinus02");
const timeMinus03 = document.querySelector(".timeMinus03");
const timeMinus04 = document.querySelector(".timeMinus04");
function subCount() {
  i = i - 3;
  console.log(i);
}

timeMinus01.addEventListener("click", () => {
  subCount();
  showBu();
});
timeMinus02.addEventListener("click", () => {
  subCount();
  showBu();
});
timeMinus03.addEventListener("click", () => {
  subCount();
  showBu();
});
timeMinus04.addEventListener("click", () => {
  subCount();
  showBu();
});
//==========================
// タイマーをセットしてスタート
//==========================
let i = 20;
const intervalId = setInterval(function () {
  i--;
  // console.log(i);
  const time = document.getElementById("js-timer");
  time.classList.add("time");
  time.innerHTML = i;

  if (i <= 0 || quizIndex >= quizLength) {
    clearInterval(intervalId);
    console.log("タイマーがキャンセルされた");
    const timerArea = document.querySelector(".timerArea");
    timerArea.classList.add("-s");
    scorehyouzi();
  }
}, 1000);

//==========================
// 判定
//==========================
function hantei() {
  if (quizIndex < quizLength) {
    setupQuiz();
    // } else {
    //   scorehyouzi();
  }
}

//========================
//結果画面の表示
//========================
function scorehyouzi() {
  //タイマーアイテムを表示させないようにする
  const sp = document.querySelector(".l-sp");
  sp.classList.add("on");

  // 「js-question」「.choice」をdisplay:none
  const z = document.getElementById("js-question");
  z.classList.add("y");
  const i = document.querySelector(".choice");
  i.classList.add("y");
  //結果画面の背景をチェンジ
  const body = document.getElementById("js-body");
  const body2 = document.getElementById("js-body2");
  body.classList.remove("-gamepage");
  body.classList.add("-kekkagamen");
  body2.classList.remove("-gamepage");
  body2.classList.add("-kekkagamen");

  //結果画面のheadingを消す
  const heading = document.getElementById("js-heading");
  heading.classList.add("-y");

  //坊display:noneを表示　js-bou
  const bou = document.getElementById("js-bou");
  bou.classList.add("-y");

  // 結果画面にボタンを表示
  const u = document.getElementById("js-kekkaBtn");
  u.classList.add("s");
  // 「kekka-area」エリアに結果を作成→表示
  const KekkaBox = document.createElement("div");
  KekkaBox.classList.add("KekkaBox");

  const KekkaBox2 = document.createElement("div");
  KekkaBox2.classList.add("KekkaBox2");

  const kekkaP1 = document.createElement("p");
  kekkaP1.classList.add("kekkaP1");
  kekkaP1.innerHTML = "あなたのオタク度は";

  const kekkaP2 = document.createElement("p");
  kekkaP2.classList.add("kekkaP2");
  console.log(score);
  const kekkaTypes = ["神", "偉人", "フツウ", "凡人"];
  if (score === 0) {
    kekkaP2.innerHTML = kekkaTypes[3];
  } else if (score === 1) {
    kekkaP2.innerHTML = kekkaTypes[3];
  } else if (score === 2) {
    kekkaP2.innerHTML = kekkaTypes[3];
  } else if (score === 3) {
    kekkaP2.innerHTML = kekkaTypes[2];
  } else if (score === 4) {
    kekkaP2.innerHTML = kekkaTypes[2];
  } else if (score === 5) {
    kekkaP2.innerHTML = kekkaTypes[2];
  } else if (score === 6) {
    kekkaP2.innerHTML = kekkaTypes[2];
  } else if (score === 7) {
    kekkaP2.innerHTML = kekkaTypes[2];
  } else if (score === 8) {
    kekkaP2.innerHTML = kekkaTypes[1];
  } else if (score === 9) {
    kekkaP2.innerHTML = kekkaTypes[1];
  } else if (score === 10) {
    kekkaP2.innerHTML = kekkaTypes[0];
  } else {
  }

  const kekkaP3 = document.createElement("p");
  kekkaP3.classList.add("kekkaP3");
  kekkaP3.innerHTML = "レベルです";

  const kekkaU = document.createElement("p");
  kekkaU.classList.add("kekkaU");
  const kekkaUTypes = [
    "あなたはれっきとしたジブリオタクですね！自信を持って周りの人に宣言しましょう！",
    "あなたはかなりのジブリ好きですね。オタクまであと少し。これからもジブリ作品を楽しんでください。",
    "ジブリマニアまであと一歩！見たことのない作品がまだあるはず。是非見てみて、ハマるかも。",
    "残念ながらジブリ好きとは言えません…。ジブリの世界には面白いことがいっぱい。",
  ];
  if (score === 0) {
    kekkaU.innerHTML = kekkaUTypes[3];
  } else if (score === 1) {
    kekkaU.innerHTML = kekkaUTypes[3];
  } else if (score === 2) {
    kekkaU.innerHTML = kekkaUTypes[3];
  } else if (score === 3) {
    kekkaU.innerHTML = kekkaUTypes[2];
  } else if (score === 4) {
    kekkaU.innerHTML = kekkaUTypes[2];
  } else if (score === 5) {
    kekkaU.innerHTML = kekkaUTypes[2];
  } else if (score === 6) {
    kekkaU.innerHTML = kekkaUTypes[2];
  } else if (score === 7) {
    kekkaU.innerHTML = kekkaUTypes[1];
  } else if (score === 8) {
    kekkaU.innerHTML = kekkaUTypes[1];
  } else if (score === 9) {
    kekkaU.innerHTML = kekkaUTypes[1];
  } else if (score === 10) {
    kekkaU.innerHTML = kekkaUTypes[0];
  } else {
  }

  const l = document.getElementById("js-kekkaArea");
  l.appendChild(KekkaBox);
  KekkaBox.appendChild(kekkaP1);
  KekkaBox.appendChild(kekkaP2);
  KekkaBox.appendChild(kekkaP3);
  l.appendChild(KekkaBox2);
  KekkaBox2.appendChild(kekkaU);
}

//==========================
// ボタンをクリックしたら正誤判定
//==========================

button[0].addEventListener("click", (e) => {
  clickHandler(e);
});
button[1].addEventListener("click", (e) => {
  clickHandler(e);
});
button[2].addEventListener("click", (e) => {
  clickHandler(e);
});
