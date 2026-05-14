const TYPE_KEYS = ["A", "B", "C", "D", "E"];

const typeData = {
  A: {
    name: "安心重視型",
    tagline: "安定と安心感がパートナーへの最大の期待",
    lead: "感情の浮き沈みが少ない、穏やかで安定した関係を最も求めるタイプです。「この人といれば大丈夫」という安心感が恋愛の土台になっており、それが揺らぐと強い不安を感じます。",
    short: "安定感と安心感がパートナーへの一番の期待であるタイプ。",
    tips: ["安心できる関係を育てるために、小さな信頼の積み重ねを大切にする", "「安心できない」と感じた時は、その原因を言語化してみる", "安心を求める自分を肯定しながら、相手にも安心を与える方法を考える"],
    question: "「この人といれば安心」と感じた瞬間は、どんな場面でしたか？",
    prompt: "私は恋愛で安定と安心感を最も求めています。この期待を大切にしながら充実した関係を築くための質問を5つしてください。",
    color: "#b05030",
  },
  B: {
    name: "承認欲求型",
    tagline: "認めてもらえることで恋愛が輝くタイプ",
    lead: "パートナーに自分の存在や努力を認めてもらうことで、恋愛への意欲と自己肯定感が高まるタイプです。「大切にされている」実感が恋愛の充実感と直結しています。",
    short: "認められ・大切にされていると感じることで、恋愛が充実するタイプ。",
    tips: ["「認めてほしい」という気持ちを言葉にして伝える練習をする", "相手からの小さな承認に気づいて受け取る習慣をつける", "自分自身が自分を認める時間を意識的に作る"],
    question: "パートナーに「認めてもらえた」と感じた時、どんな行動や言葉がありましたか？",
    prompt: "私は恋愛でパートナーに認めてもらうことで充実感が高まります。この期待と自分自身の自己肯定感を高めるための質問を5つしてください。",
    color: "var(--coral)",
  },
  C: {
    name: "成長共鳴型",
    tagline: "一緒に高め合える関係を求めるタイプ",
    lead: "恋愛を「2人で成長していく旅」として捉え、お互いを刺激し合える関係に最も魅力を感じるタイプです。一緒にいることで自分がより良くなれると感じる相手に強く惹かれます。",
    short: "共に成長・高め合える関係を、パートナーへの最大の期待にしているタイプ。",
    tips: ["2人で共通の目標や挑戦を作ってみる", "相手の成長を自分のことのように喜べているか振り返る", "「一緒にいて成長できているか」を定期的に確認する"],
    question: "パートナーや好きな人から影響を受けて、自分が成長したと感じた経験はありますか？",
    prompt: "私は恋愛でお互いが成長し合える関係を強く求めています。この期待を活かして充実した関係を築くための質問を5つしてください。",
    color: "#9b87c4",
  },
  D: {
    name: "自由尊重型",
    tagline: "干渉されず自分らしくいられる関係を求めるタイプ",
    lead: "お互いの個性や価値観を尊重し、束縛や干渉のない自由な関係を求めるタイプです。「好きだけど、自分らしくいたい」という感覚が自然で、それを理解してくれるパートナーに深く惹かれます。",
    short: "自分らしさを保ちながら、お互いの自由を尊重し合える関係を求めるタイプ。",
    tips: ["「自由でいたい」という欲求を、相手にわかりやすく伝える言葉を準備する", "相手の自由も同じように尊重できているか振り返る", "自由な関係の中でも「つながっている感覚」を大切にする方法を探す"],
    question: "「干渉されすぎ」と感じた時と「ちょうどいい距離感」と感じた時の違いは何でしたか？",
    prompt: "私は恋愛でお互いの自由を尊重し合える関係を求めています。このスタイルで充実した関係を築くための質問を5つしてください。",
    color: "var(--gold)",
  },
  E: {
    name: "共感密着型",
    tagline: "気持ちをわかってもらえることが恋愛の核心のタイプ",
    lead: "悩みや感情を素直に話せて、ちゃんと受け止めてもらえる関係を最も求めるタイプです。「わかってもらえている」という感覚が恋愛の充実感の中心にあり、共感のない関係には強い孤独を感じます。",
    short: "気持ちを受け止めてもらい、共感でつながることが最大の期待のタイプ。",
    tips: ["「わかってほしいこと」を具体的に伝える練習をする", "相手が共感してくれた瞬間を意識的に受け取る", "共感を求める前に、自分が相手の気持ちを受け取れているか確認する"],
    question: "「この人はわかってくれている」と感じた時、何がきっかけでしたか？",
    prompt: "私は恋愛でパートナーに気持ちをわかってもらうことを最も求めています。共感でつながる関係を築くための質問を5つしてください。",
    color: "#b0c4c2",
  },
};

const questionsRaw = [
  { type: "A", text: "恋愛において、安定感・安心感は何より重要だ" },
  { type: "B", text: "パートナーに認めてもらえると、自己肯定感が上がる" },
  { type: "C", text: "一緒にいることで、お互いが成長できる関係が理想だ" },
  { type: "D", text: "パートナーには、自分のことを尊重して干渉しすぎないでほしい" },
  { type: "E", text: "悩みや感情を素直に話せて、受け止めてくれるパートナーが理想だ" },
  { type: "A", text: "感情の浮き沈みが少ない、穏やかなパートナーに安心を感じる" },
  { type: "B", text: "「好き」「大切にしている」という言葉や行動を定期的にほしい" },
  { type: "C", text: "パートナーに刺激を受けて、自分も高みを目指せる関係が好きだ" },
  { type: "D", text: "「ひとりの時間」を確保することを理解してくれるパートナーが理想だ" },
  { type: "E", text: "「わかってもらえている」という感覚が恋愛の充実感の中心にある" },
  { type: "A", text: "関係が壊れないか不安になりやすく、安定した関係を強く望む" },
  { type: "B", text: "努力や頑張りをパートナーに見てもらいたい気持ちが強い" },
  { type: "C", text: "2人でチャレンジしたり、目標を持って取り組める関係に魅力を感じる" },
  { type: "D", text: "お互いの個性や価値観を大切にし合える関係が心地よい" },
  { type: "E", text: "気持ちをわかってほしい・共感してほしいという欲求が強い" },
  { type: "A", text: "「この人といれば大丈夫」という安心感が恋愛の土台だと思う" },
  { type: "B", text: "パートナーに大切にされていると感じると、恋愛に前向きになれる" },
  { type: "C", text: "恋愛は「一緒に成長していく旅」だと思う" },
  { type: "D", text: "束縛や過干渉のない、自由を認め合える関係が長続きすると思う" },
  { type: "E", text: "感情的なつながりを大切にする、温かみのある関係が理想だ" },
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
  resultTitle.textContent = `あなたは「${data.name}」の恋愛をしています`;
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
