const TYPE_KEYS = ["A", "B", "C", "D", "E"];

const typeData = {
  A: {
    name: "承認・評価型",
    tagline: "認められることで最大のエネルギーが湧くタイプ",
    lead: "努力や成果を誰かに見てもらい、正当に評価されることで充実感が生まれるタイプです。フィードバックを大切にし、認められた時の喜びが次の仕事へのモチベーションを作ります。",
    short: "評価やフィードバックが適切にもらえる環境で、最も充実感を感じるタイプ。",
    tips: [
      "上司や同僚に定期的にフィードバックをもらう機会を自分から作る",
      "成果を可視化して共有する習慣をつける（報告・連絡を積極的に）",
      "評価制度が明確な職場・チームを選ぶことを優先する",
    ],
    question: "これまでで最も認められて嬉しかった経験はどんな場面でしたか？",
    prompt:
      "私は自分の努力や成果を認められることで充実感と意欲が高まります。この特性を活かして仕事の充実度を上げるための具体的なアドバイスを5つしてください。",
    color: "var(--teal)",
  },
  B: {
    name: "成果・達成型",
    tagline: "目標を達成した瞬間に充実感が爆発するタイプ",
    lead: "明確な目標に向かって全力で取り組み、達成した時の手応えが充実感の源泉になるタイプです。結果が見える仕事ほど力が入り、高い目標ほど燃えるという傾向があります。",
    short: "数字や成果として結果が見える時に、最も強い充実感を感じるタイプ。",
    tips: [
      "定量的な目標を自分で設定し、達成を「見える化」する",
      "大きな目標を小さなマイルストーンに分けて達成体験を重ねる",
      "結果で評価される環境・役割（営業・プロジェクトリード等）を選ぶ",
    ],
    question: "これまでで最も「やりきった」という達成感を感じた仕事はなんですか？",
    prompt:
      "私は目標を達成した時に最も充実感を感じます。この達成欲求を活かして仕事の充実度を高めるための具体的なアドバイスを5つしてください。",
    color: "var(--coral)",
  },
  C: {
    name: "貢献・影響型",
    tagline: "誰かの役に立っている実感が充実感の源泉のタイプ",
    lead: "自分の仕事が誰かの助けになっていると感じる時に、最も充実感が生まれるタイプです。目の前の相手が喜んでいる姿や、社会にポジティブな影響を与えている実感が仕事の意義になっています。",
    short: "誰かの役に立てている・影響を与えられていると感じる時に充実するタイプ。",
    tips: [
      "自分の仕事が誰に・どんな価値を届けているかを定期的に言語化する",
      "顧客や利用者と直接関わる機会を積極的に持つ",
      "社会的意義のある仕事・プロジェクトを選ぶ視点を持つ",
    ],
    question: "自分の仕事が誰かの役に立っていると最も感じた場面はどこですか？",
    prompt:
      "私は自分の仕事が誰かの役に立っている実感がある時に最も充実します。この特性を活かして仕事の意義を感じ続けるための具体的なアドバイスを5つしてください。",
    color: "#9b87c4",
  },
  D: {
    name: "自律・裁量型",
    tagline: "自分で考え自分で動ける時に充実感が生まれるタイプ",
    lead: "細かく指示されるより、自分なりのやり方で判断・実行できる環境で充実感が高まるタイプです。「自分でコントロールできている」感覚が、仕事のエネルギーと直結しています。",
    short: "自分で考えて自分で判断・行動できる裁量がある時に、最も充実するタイプ。",
    tips: [
      "「この件は自分で判断します」と宣言できる領域を少しずつ広げる",
      "自律性が高い職場・職種（フリーランス・裁量が大きい職場）を意識する",
      "細かい指示より「目標だけ決めて方法は任せてほしい」と上司に伝える",
    ],
    question: "自分の裁量で仕事を進められた時と、そうでない時では何が違いますか？",
    prompt:
      "私は自分で考えて自分で決められる裁量がある時に最も充実します。この特性を活かしてキャリアを設計するための具体的なアドバイスを5つしてください。",
    color: "var(--gold)",
  },
  E: {
    name: "成長・学習型",
    tagline: "学び続けている実感が充実感の源泉のタイプ",
    lead: "新しいことを学んだり、昨日より今日の自分が少し成長していると感じる時に最もやりがいを感じるタイプです。難しい課題を乗り越えた時の成長実感が、仕事を続けるエネルギーになっています。",
    short: "学びや成長の実感が積み上がっていく時に、最も強い充実感を感じるタイプ。",
    tips: [
      "「今日新しく学んだこと」を1つ記録する習慣をつける",
      "少し背伸びが必要な仕事や役割を意識的に選ぶ",
      "スキルアップや資格・学習に投資できる環境を職場選びの軸にする",
    ],
    question: "仕事を通じて最も成長を実感できた時期は、どんな状況でしたか？",
    prompt:
      "私は新しいことを学び成長を実感している時に最も仕事の充実感を感じます。この学習欲求を活かして充実したキャリアを築くための具体的なアドバイスを5つしてください。",
    color: "#b0c4c2",
  },
};

const questionsRaw = [
  { type: "A", text: "上司や周りから「よくやった」と認められると、仕事への意欲が上がる" },
  { type: "B", text: "目標を達成した瞬間に、大きな充実感を感じる" },
  { type: "C", text: "自分の仕事が誰かの役に立っていると感じる時、最も充実している" },
  { type: "D", text: "自分で考えて自分で判断できる仕事に、やりがいを感じる" },
  { type: "E", text: "新しいことを学んでいると感じる時に、最もやりがいを感じる" },
  { type: "A", text: "自分の努力や成果を誰かに見てもらえていると感じると充実する" },
  { type: "B", text: "数字や結果として成果が見えることで、仕事のやりがいを実感する" },
  { type: "C", text: "チームや周りの人の力になれていると実感できる仕事が好きだ" },
  { type: "D", text: "細かく指示されるより、自分なりのやり方で進められる方がいい" },
  { type: "E", text: "今日の自分が昨日より少し成長していると実感できる仕事が好きだ" },
  { type: "A", text: "評価やフィードバックが適切にもらえる環境が、自分には重要だ" },
  { type: "B", text: "高い目標に向かって全力で取り組んでいる時が一番燃える" },
  { type: "C", text: "社会や誰かにポジティブな影響を与えられる仕事に意味を感じる" },
  { type: "D", text: "仕事の進め方や優先順位を自分でコントロールできることが重要だ" },
  { type: "E", text: "難しい課題に挑戦し、乗り越えた時の成長実感が充実感につながる" },
  { type: "A", text: "頑張りが正当に認められることで、次の仕事への意欲が続く" },
  { type: "B", text: "「やりきった」という手応えが、仕事の充実感の中心にある" },
  { type: "C", text: "目の前の相手が喜んでいる姿を見ることで、仕事の意義を感じる" },
  { type: "D", text: "自分の裁量で動けている感覚が、充実感の源泉になっている" },
  { type: "E", text: "知識やスキルが積み上がっていく感覚が、仕事を続けるモチベーションになる" },
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
      return `
        <label class="likert-option" for="${id}">
          <input id="${id}" type="radio" name="${name}" value="${value}" />
          <span>${label}</span>
        </label>`;
    }).join("");
    return `
      <fieldset class="question-card">
        <legend class="question-title">Q${i + 1}. ${q.text}</legend>
        <div class="likert-wrap">
          <div class="likert-labels"><span>あてはまらない</span><span>あてはまる</span></div>
          <div class="likert-options">${options}</div>
        </div>
      </fieldset>`;
  }).join("");
}

function renderTypes() {
  typeGrid.innerHTML = TYPE_KEYS.map((key) => {
    const d = typeData[key];
    return `
      <article class="type-card">
        <div class="type-dot" style="background:${d.color}"></div>
        <h3>${d.name}</h3>
        <p>${d.tagline}</p>
      </article>`;
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
  if (unanswered > 0) {
    errorMessage.textContent = `未回答の質問があります。あと ${unanswered} 問に答えてください。`;
    return;
  }
  errorMessage.textContent = "";

  const scores = calcScores(answers);
  const topType = TYPE_KEYS.reduce((best, k) => (scores[k] > scores[best] ? k : best), TYPE_KEYS[0]);
  const data = typeData[topType];

  resultTitle.textContent = `あなたの充実感タイプは「${data.name}」です`;
  resultTagline.textContent = data.tagline;
  resultLead.textContent = data.lead;

  scoreList.innerHTML = TYPE_KEYS.map((key) => {
    const d = typeData[key];
    const score = scores[key];
    const possible = questionsRaw.filter((q) => q.type === key).length * 5;
    const pct = Math.round((score / possible) * 100);
    const isTop = key === topType;
    return `
      <div class="score-row${isTop ? " top-type" : ""}">
        <span class="score-label">${d.name}</span>
        <div class="score-track">
          <div class="score-fill" style="width:${pct}%; background:${isTop ? "linear-gradient(90deg, var(--teal), var(--coral))" : d.color}"></div>
        </div>
        <span class="score-num">${score} / ${possible}</span>
      </div>`;
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

renderQuiz();
renderTypes();
updateProgress();
form.addEventListener("change", updateProgress);
document.querySelector("#showResultButton").addEventListener("click", showResult);
document.querySelector("#resetButton").addEventListener("click", resetQuiz);
