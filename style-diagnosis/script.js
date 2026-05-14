const TYPE_KEYS = ["A", "B", "C", "D", "E"];

const typeData = {
  A: {
    name: "ソロ集中型",
    tagline: "一人で深く集中することで力を発揮するスタイル",
    lead: "邪魔されない環境で自分のペースを守りながら仕事をする時に、最もパフォーマンスが上がるタイプです。深く考え、質の高いアウトプットを出す力は、専門性が求められる場面で特に光ります。",
    short: "独立した環境で深く集中し、質の高い成果を出すのが得意なスタイル。",
    tips: [
      "集中できる時間帯を「ゾーン時間」としてブロックして守る",
      "オープンな環境が苦手なら、リモートや個室活用を上司に提案してみる",
      "成果物の質で評価される仕事を積極的に引き受ける",
    ],
    question: "最もパフォーマンスが上がった時、どんな環境で何をしていましたか？",
    prompt:
      "私は一人で集中して仕事をする時に最もパフォーマンスが上がります。このスタイルを活かしてキャリアを築くための具体的なアドバイスを5つしてください。",
    color: "var(--teal)",
  },
  B: {
    name: "チーム推進型",
    tagline: "人と協働することで最大の力を発揮するスタイル",
    lead: "誰かと一緒に考え、議論し、動く中で最もエネルギーが湧いてくるタイプです。チームの雰囲気を作り、全員を同じ方向に向かわせる力は、組織の推進力として大きな価値を持ちます。",
    short: "チームで議論・協力しながら動く時に、最大のパフォーマンスが出るスタイル。",
    tips: [
      "チームを巻き込む会議・議論の場を自分から設計してみる",
      "1on1やチームランチなど関係構築の機会を意識的に作る",
      "協働が評価される役割（PMやリーダー）を意識的に目指す",
    ],
    question: "チームで仕事をして、最も充実していた時の状況を教えてください。",
    prompt:
      "私はチームで協力しながら仕事を進める時に最も力が発揮できます。このスタイルを活かしてキャリアを築くための具体的なアドバイスを5つしてください。",
    color: "var(--coral)",
  },
  C: {
    name: "計画実行型",
    tagline: "段取りと計画で着実に成果を出すスタイル",
    lead: "仕事の前に計画を立て、手順を整えてから動くことで力を発揮するタイプです。予定通りに着実に進める安心感と、ブレのない実行力は、複雑なプロジェクト管理や精度が求められる場面で輝きます。",
    short: "段取りを整えて計画的に動き、確実に成果を積み上げるのが得意なスタイル。",
    tips: [
      "タスクを細分化してリスト化し、1つずつ完了させる習慣を続ける",
      "プロジェクト管理ツールを積極的に活用して可視化する",
      "「段取り力」を武器に、スケジュール管理が重要な役割を担う",
    ],
    question: "計画をしっかり立てて動いた時に、最もうまくいった経験はありますか？",
    prompt:
      "私は計画を立ててから動くスタイルが合っていて、段取りを整えることで安心してパフォーマンスが上がります。このスタイルを活かしてキャリアを築くための具体的なアドバイスを5つしてください。",
    color: "#9b87c4",
  },
  D: {
    name: "即興対応型",
    tagline: "変化に対応しながら柔軟に動くスタイル",
    lead: "計画より流れを重視し、その場の状況に合わせて最適な動き方を見つけるタイプです。予想外の出来事にも慌てず、むしろ力が入るその適応力は、変化が激しい環境や緊急対応が多い場面で特に活きます。",
    short: "状況の変化に柔軟に対応し、動きながら最適解を見つけるのが得意なスタイル。",
    tips: [
      "変化が多い業務やポジションに積極的に手を挙げる",
      "「完璧な計画」より「速い初動と修正」を意識する",
      "自分の即興力を強みとして、緊急対応や新規プロジェクトを引き受ける",
    ],
    question: "予定が変わったり想定外のことが起きた時、うまく対応できた経験はありますか？",
    prompt:
      "私はその場の状況に合わせて柔軟に動く即興対応型のスタイルです。この強みを活かしてキャリアを築くための具体的なアドバイスを5つしてください。",
    color: "var(--gold)",
  },
  E: {
    name: "ビジョン先行型",
    tagline: "全体像と意味から考えて動くスタイル",
    lead: "「なぜやるか」「どこに向かうか」を把握してから動くことで、最もエネルギーが湧くタイプです。大局を掴む力と、目的から逆算する思考は、戦略立案や長期的な視点が必要な場面で発揮されます。",
    short: "全体像・目的・ビジョンを把握してから動く、大局思考が得意なスタイル。",
    tips: [
      "「この仕事の目的は何か」を常に確認する習慣をつける",
      "戦略・企画・ビジョン設定など大局を扱う役割を目指す",
      "目先の作業に埋もれた時は、一度引いて全体像を描き直す",
    ],
    question: "目標やビジョンが明確な時と不明確な時で、仕事への姿勢はどう変わりますか？",
    prompt:
      "私は全体像や目的が見えていないと動きにくく、ビジョンから逆算して考えるスタイルです。この強みを活かしてキャリアを築くための具体的なアドバイスを5つしてください。",
    color: "#b0c4c2",
  },
};

const questionsRaw = [
  { type: "A", text: "1人で黙々と作業している時に、最もパフォーマンスが上がる" },
  { type: "B", text: "チームで議論しながら仕事を進めるのが自分に合っている" },
  { type: "C", text: "仕事を始める前に、段取りや計画をしっかり立てたい" },
  { type: "D", text: "予定が変わっても、その場でうまく対応できる方だ" },
  { type: "E", text: "「なぜやるか」「どこに向かうか」が見えていないと動きにくい" },
  { type: "A", text: "仕事は誰にも邪魔されない環境で集中したい" },
  { type: "B", text: "一人より誰かと一緒に取り組む方がいいアウトプットが出る" },
  { type: "C", text: "スケジュールや手順が明確になっていると安心して動ける" },
  { type: "D", text: "細かく計画するより、流れを見ながら動く方が自分らしい" },
  { type: "E", text: "目先の作業より、全体の方向性や意味を考えることが多い" },
  { type: "A", text: "自分のペースで仕事を進めることが大切だと感じる" },
  { type: "B", text: "仕事中に誰かと話すことで、アイデアや気力が湧いてくる" },
  { type: "C", text: "予定通りに進むことで、仕事の質が保てると感じる" },
  { type: "D", text: "突発的な対応や想定外の事態に、むしろ力が入る" },
  { type: "E", text: "長期的な目標や大きなビジョンから逆算して仕事を考えたい" },
  { type: "A", text: "一つのことに深く集中できる環境が、自分には合っている" },
  { type: "B", text: "チームの一員として、同じ目標に向かうことにやりがいを感じる" },
  { type: "C", text: "やることリストを作り、一つずつこなしていくのが好きだ" },
  { type: "D", text: "完璧に準備するよりも、動きながら考えるスタイルが合っている" },
  { type: "E", text: "細部より全体像を掴むことを優先しがちだ" },
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

  resultTitle.textContent = `あなたの仕事スタイルは「${data.name}」です`;
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
