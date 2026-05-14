const TYPE_KEYS = ["A", "B", "C", "D", "E"];

const typeData = {
  A: {
    name: "リード型",
    tagline: "関係を引っ張ることで安心できるスタイル",
    lead: "恋愛では自分から動き、関係をリードすることで心地よさを感じるタイプです。積極性と行動力が魅力ですが、相手のペースや気持ちへの配慮を意識することで、より深い関係が築けます。",
    short: "自分からアクションを起こし、関係を引っ張るのが自然なスタイル。",
    tips: ["リードする前に「相手はどうしたいか」を一度確認する", "自分のペースを押しつけていないか定期的に振り返る", "相手から提案された時は、素直に乗ってみる"],
    question: "恋愛で自分がリードした時、うまくいったと感じた経験はありますか？",
    prompt: "私は恋愛でリードする側が自然なスタイルです。この強みを活かしながら相手との関係をより深めるための質問を5つしてください。",
    color: "var(--teal)",
  },
  B: {
    name: "サポート型",
    tagline: "支えることで充実感を感じるスタイル",
    lead: "パートナーを支えたり、寄り添うことに充実感を感じるタイプです。相手の喜びを自分の喜びにできる温かさが魅力ですが、自分の欲求も同じくらい大切にすることが長続きする関係の鍵です。",
    short: "相手を支え、寄り添う側に回ることで最も充実感を感じるスタイル。",
    tips: ["「相手の欲求」と「自分の欲求」を分けて考える時間を作る", "「してあげたい」と「してほしい」を正直に伝える練習をする", "自分が疲れていないか定期的に確認する"],
    question: "サポートし続けた結果、自分の気持ちが後回しになったことはありますか？",
    prompt: "私は恋愛でサポートする側が心地よいスタイルです。自分も大切にしながら相手を支える関係を築くための質問を5つしてください。",
    color: "var(--coral)",
  },
  C: {
    name: "対等型",
    tagline: "フェアなパートナーシップを求めるスタイル",
    lead: "どちらかが引っ張るより、お互いが対等に意見を出し合い、一緒に決めていく関係が理想のタイプです。公平さへのこだわりが強く、不均衡な関係にストレスを感じやすい傾向があります。",
    short: "お互いを尊重し合う、フェアで対等な関係を最も重視するスタイル。",
    tips: ["「対等であること」にこだわりすぎていないか振り返る", "完璧な対等より「お互いが心地よいか」を優先する", "相手の「リードしたい気持ち」も尊重してみる"],
    question: "対等な関係ができていると感じた経験と、できていないと感じた経験は何ですか？",
    prompt: "私は恋愛でお互いが対等なパートナーシップを強く求めています。このスタイルで良い関係を築くための質問を5つしてください。",
    color: "#9b87c4",
  },
  D: {
    name: "自律型",
    tagline: "自分の時間と空間を大切にするスタイル",
    lead: "恋愛しながらも、自分だけの時間・空間・ペースを守ることを大切にするタイプです。「好きだけど、ベったりはしたくない」という感覚が自然で、適度な距離感のある関係で最も安定します。",
    short: "自分の時間・空間を保ちながら、適度な距離感で愛せるスタイル。",
    tips: ["「一人の時間が欲しい」を素直に伝える言い方を準備しておく", "距離を置きたい時と、孤独になりたい時を区別する", "相手も一人の時間を必要としていることを忘れない"],
    question: "自律的なスタイルが相手に理解されなくて、困った経験はありますか？",
    prompt: "私は恋愛でも自分の時間や空間を大切にする自律型のスタイルです。このスタイルで良い関係を築くための質問を5つしてください。",
    color: "var(--gold)",
  },
  E: {
    name: "共鳴型",
    tagline: "深い感情的つながりを求めるスタイル",
    lead: "表面的な仲良さより、魂が通じ合うような深い感情的つながりを求めるタイプです。共感・共鳴できる瞬間に強い充実感を覚え、浅い関係には物足りなさを感じやすい傾向があります。",
    short: "感情を深く共鳴させ合えるつながりを、最も大切にするスタイル。",
    tips: ["「共鳴できない」と感じた時は、まず自分の感情を言語化する", "相手に「感情的なつながり」を求めすぎていないか確認する", "共鳴の瞬間を大切にし、日記に残す習慣をつける"],
    question: "「この人とは通じ合えている」と感じた時、何が起きていましたか？",
    prompt: "私は恋愛で深い感情的つながりを求める共鳴型のスタイルです。このスタイルで充実した関係を築くための質問を5つしてください。",
    color: "#b0c4c2",
  },
};

const questionsRaw = [
  { type: "A", text: "恋愛では自分から積極的に動く方が心地よい" },
  { type: "B", text: "恋愛では相手を支えたり、寄り添う側の方が落ち着く" },
  { type: "C", text: "お互いの意見を尊重し合える、フェアな関係が理想だ" },
  { type: "D", text: "恋愛しながらも、自分だけの時間や空間は確保したい" },
  { type: "E", text: "恋愛では、深い感情的つながりを最も大切にしたい" },
  { type: "A", text: "デートの計画やプランを自分で決めたい方だ" },
  { type: "B", text: "相手が喜んでいる姿を見ることが、恋愛の充実感につながる" },
  { type: "C", text: "一方が主導権を持つより、2人で一緒に決めたい" },
  { type: "D", text: "一緒にいても、それぞれのペースで過ごせる関係が理想だ" },
  { type: "E", text: "気持ちをわかり合える・共鳴し合える関係に最も惹かれる" },
  { type: "A", text: "相手をリードしてあげる役割の方が自然に感じる" },
  { type: "B", text: "縁の下の力持ちとして、パートナーを支えることにやりがいを感じる" },
  { type: "C", text: "恋愛では「対等なパートナーシップ」を大切にしたい" },
  { type: "D", text: "「べったりした関係」より「適度な距離感のある関係」が心地よい" },
  { type: "E", text: "表面的な仲の良さより、魂が通じ合う感覚を求めている" },
  { type: "A", text: "恋愛においても、主導権を持ちたいと感じる" },
  { type: "B", text: "相手の話をじっくり聞いて、気持ちを受け止めることが得意だ" },
  { type: "C", text: "どちらかが一方的に我慢する関係は長続きしないと感じる" },
  { type: "D", text: "パートナーができても、自分の趣味や友人関係は大切にしたい" },
  { type: "E", text: "相手と感情を共有し、一緒に感動したり共感したりできる関係が理想だ" },
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
  resultTitle.textContent = `あなたの恋愛スタイルは「${data.name}」です`;
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
