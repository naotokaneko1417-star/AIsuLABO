const TYPE_KEYS = ["A", "B", "C", "D", "E"];

const typeData = {
  A: {
    name: "正解探し型",
    tagline: "「この人で合ってる？」が止まらないタイプ",
    lead: "恋愛でも「正しい選択をしているか」を常に確認したくなるタイプです。慎重で真剣に向き合える反面、正解を探し続けるうちに目の前の相手と向き合えなくなることがあります。",
    short: "「この人でいいのか」という不安が、恋愛のモヤモヤの根っこにあるタイプ。",
    tips: ["「正解か」より「今、楽しいか」を基準にしてみる", "相手の良い部分を意識的に3つ書き出す", "比べる対象を「理想の相手」ではなく「昨日の関係」にする"],
    question: "正解かどうかを一度置いた時、今の関係について何を感じますか？",
    prompt: "私は恋愛でも「この選択で正解か」を考えすぎて不安になります。今の関係への本音を整理するための質問を5つしてください。",
    color: "#b040a0",
  },
  B: {
    name: "感情抑制型",
    tagline: "好きでも素直に出せないタイプ",
    lead: "感情が動いても、傷つくのが怖かったり「感情的に見られたくない」という気持ちから、本音を抑えてしまうタイプです。冷静さの裏に、たくさんの言いたいことが溜まっています。",
    short: "感情を出すことへの怖さが、恋愛のモヤモヤの根っこにあるタイプ。",
    tips: ["「感情を出した後どうなるか」を一度想像してみる", "小さな好意（ありがとう、など）から言葉にする練習をする", "日記に「本当は言いたかったこと」を書く習慣をつける"],
    question: "最近、相手に伝えたかったけれど言えなかったことはありますか？",
    prompt: "私は好きな人の前で感情を抑えてしまい、本音が言えません。感情を安全に表現するための質問を5つしてください。",
    color: "#e85d42",
  },
  C: {
    name: "過剰適応型",
    tagline: "相手に合わせすぎて自分を失うタイプ",
    lead: "嫌われることへの恐れから、相手の気持ちや期待に合わせすぎてしまうタイプです。気配りができる反面、自分の本音がどんどん後回しになり、気づくと疲れ果てていることがあります。",
    short: "「嫌われたくない」という気持ちが強すぎて、自分を見失いやすいタイプ。",
    tips: ["「相手が喜ぶこと」と「自分がしたいこと」を書き分けてみる", "週1回、自分の本音だけを基準に行動する機会を作る", "「少し嫌だった」という気持ちを小さなノートに残す"],
    question: "最近、本当は嫌だったけれど相手に合わせたことはありましたか？",
    prompt: "私は恋愛で相手に合わせすぎて、自分の本音がわからなくなります。相手の期待と自分の本音を分けて整理する質問を5つしてください。",
    color: "#9b87c4",
  },
  D: {
    name: "変化回避型",
    tagline: "関係が進むことへの不安が強いタイプ",
    lead: "仲が深まるにつれて「失望されるのでは」「この関係が壊れるのでは」という不安が強くなるタイプです。関係の転換点（告白・交際・同棲など）に特に敏感に反応します。",
    short: "関係の変化・進展が怖くて、現状維持に留まりたくなりやすいタイプ。",
    tips: ["「関係が変わった後」の良い面を具体的に想像してみる", "変化への不安と「このままの苦しさ」を分けて書き出す", "「全部変えなくていい、少し進むだけ」と自分に言い聞かせる"],
    question: "今の関係で「もう少し前に進んでみたい」と思っていることはありますか？",
    prompt: "私は恋愛で関係が進むことへの不安が強く、変化を避けてしまいます。不安を整理して一歩踏み出すための質問を5つしてください。",
    color: "var(--gold)",
  },
  E: {
    name: "理想迷子型",
    tagline: "どんな恋愛がしたいかぼんやりしているタイプ",
    lead: "恋愛への関心はあるのに、「どんな人が好きか」「どんな関係がしたいか」がぼんやりしているタイプです。理想を大きく描こうとするあまり、目の前の感情や日常の小さな気持ちが見えにくくなっています。",
    short: "恋愛の理想や方向性がぼんやりしていて、自分の気持ちに気づきにくいタイプ。",
    tips: ["大きな理想より「今日、この人といて楽しかったか」を確認する", "「好き」でなくていい、「なんとなく気になる」を大切にする", "理想の1日を描くことから、恋愛への欲求を探してみる"],
    question: "「これが自分の理想の恋愛かも」と感じた場面や経験はありましたか？",
    prompt: "私は恋愛の理想がぼんやりしていて、自分が何を求めているかわかりません。日常の感情から恋愛への本音を整理する質問を5つしてください。",
    color: "#b0c4c2",
  },
};

const questionsRaw = [
  { type: "A", text: "「この人と付き合っていて本当に正解なのか」と考えることが多い" },
  { type: "B", text: "好きな人の前だと、本当の気持ちを素直に出せない" },
  { type: "C", text: "恋愛では相手の気持ちを優先しすぎて、自分の本音が後回しになる" },
  { type: "D", text: "関係が進むにつれて、なぜか不安が増えてくることがある" },
  { type: "E", text: "どんな恋愛がしたいのか、自分でもよくわからない" },
  { type: "A", text: "相手の言動の意味を考えすぎて、なかなか答えが出ない" },
  { type: "B", text: "気持ちが高ぶっても、感情的に見られたくなくて抑えてしまう" },
  { type: "C", text: "嫌われたくなくて、相手に合わせすぎてしまうことがある" },
  { type: "D", text: "仲良くなればなるほど、相手に失望されるのが怖くなる" },
  { type: "E", text: "「好き」という感情なのか別の感情なのか、判別できないことがある" },
  { type: "A", text: "恋愛で「失敗しない選択」を常に探してしまう" },
  { type: "B", text: "傷つくのが怖くて、好きという気持ちを隠してしまうことがある" },
  { type: "C", text: "恋人の前では「自分を出しすぎないようにしている」と感じる" },
  { type: "D", text: "告白する・されるなど、関係の転換点が特に苦手だ" },
  { type: "E", text: "恋愛への興味はあるのに、具体的に何がしたいかぼんやりしている" },
  { type: "A", text: "付き合った後も「もっと合う人がいるのでは」と不安になる" },
  { type: "B", text: "不満や寂しさがあっても、相手に伝えるのが苦手だ" },
  { type: "C", text: "相手に気に入られようとして、疲れを感じることがある" },
  { type: "D", text: "「このままでいいのに」と現状の関係に留まりたくなることがある" },
  { type: "E", text: "理想の相手像を聞かれると、うまく答えられない" },
];

const LIKERT = [
  { value: 1, label: "全く\nあてはまらない" },
  { value: 2, label: "あまり\nあてはまらない" },
  { value: 3, label: "どちらとも\nいえない" },
  { value: 4, label: "ややあてはまる" },
  { value: 5, label: "非常に\nあてはまる" },
];

const form = document.querySelector("#quizForm");
const progressBar = document.querySelector("#progressBar");
const progressText = document.querySelector("#progressText");
const errorMessage = document.querySelector("#errorMessage");
const resultSection = document.querySelector("#result");
const resultTitle = document.querySelector("#resultTitle");
const resultTagline = document.querySelector("#resultTagline");
const resultLead = document.querySelector("#resultLead");
const scoreList = document.querySelector("#scoreList");
const paidTeaser = document.querySelector("#paidTeaser");
const paidTypeName = document.querySelector("#paidTypeName");
const typeGrid = document.querySelector("#typeGrid");

function renderQuiz() {
  form.innerHTML = questionsRaw.map((q, i) => {
    const name = `q${i + 1}`;
    const options = LIKERT.map(({ value, label }) => {
      const id = `${name}-v${value}`;
      return `<label class="likert-option" for="${id}"><input id="${id}" type="radio" name="${name}" value="${value}" /><span>${label}</span></label>`;
    }).join("");
    return `<fieldset class="question-card"><legend class="question-title">Q${i + 1}. ${q.text}</legend><div class="likert-wrap"><div class="likert-labels"><span>あてはまらない</span><span>あてはまる</span></div><div class="likert-options">${options}</div></div></fieldset>`;
  }).join("");
}

function renderTypes() {
  typeGrid.innerHTML = TYPE_KEYS.map((key) => {
    const d = typeData[key];
    return `<article class="type-card"><div class="type-dot" style="background:${d.color}"></div><h3>${d.name}</h3><p>${d.tagline}</p></article>`;
  }).join("");
}

function getAnswers() {
  return questionsRaw.map((_, i) => {
    const checked = form.querySelector(`input[name="q${i + 1}"]:checked`);
    return checked ? Number(checked.value) : null;
  });
}

function calcScores(answers) {
  const scores = { A: 0, B: 0, C: 0, D: 0, E: 0 };
  answers.forEach((val, i) => { if (val !== null) scores[questionsRaw[i].type] += val; });
  return scores;
}

function updateProgress() {
  const answered = getAnswers().filter((v) => v !== null).length;
  const pct = Math.round((answered / questionsRaw.length) * 100);
  progressBar.style.width = `${pct}%`;
  progressText.textContent = `${answered} / ${questionsRaw.length} 回答済み`;
  if (answered === questionsRaw.length) errorMessage.textContent = "";
}

function showResult() {
  const answers = getAnswers();
  const unanswered = answers.filter((v) => v === null).length;
  if (unanswered > 0) { errorMessage.textContent = `未回答の質問があります。あと ${unanswered} 問に答えてください。`; return; }
  errorMessage.textContent = "";
  const scores = calcScores(answers);
  const topType = TYPE_KEYS.reduce((best, k) => (scores[k] > scores[best] ? k : best), TYPE_KEYS[0]);
  const data = typeData[topType];
  resultTitle.textContent = `あなたは「${data.name}」です`;
  resultTagline.textContent = data.tagline;
  resultLead.textContent = data.lead;
  scoreList.innerHTML = TYPE_KEYS.map((key) => {
    const d = typeData[key];
    const score = scores[key];
    const possible = questionsRaw.filter((q) => q.type === key).length * 5;
    const pct = Math.round((score / possible) * 100);
    const isTop = key === topType;
    return `<div class="score-row${isTop ? " top-type" : ""}"><span class="score-label">${d.name}</span><div class="score-track"><div class="score-fill" style="width:${pct}%; background:${isTop ? "linear-gradient(90deg, var(--teal), var(--coral))" : d.color}"></div></div><span class="score-num">${score} / ${possible}</span></div>`;
  }).join("");
  if (paidTypeName) paidTypeName.textContent = data.name;
  if (paidTeaser) paidTeaser.hidden = false;
  resultSection.hidden = false;
  resultSection.scrollIntoView({ behavior: "smooth", block: "start" });
}

function resetQuiz() {
  form.reset();
  resultSection.hidden = true;
  if (paidTeaser) paidTeaser.hidden = true;
  errorMessage.textContent = "";
  updateProgress();
  document.querySelector("#diagnosis").scrollIntoView({ behavior: "smooth", block: "start" });
}

renderQuiz(); renderTypes(); updateProgress();
form.addEventListener("change", updateProgress);
document.querySelector("#showResultButton").addEventListener("click", showResult);
document.querySelector("#resetButton").addEventListener("click", resetQuiz);
