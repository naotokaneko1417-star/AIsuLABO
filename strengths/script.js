const TYPE_KEYS = ["A", "B", "C", "D", "E"];

const typeData = {
  A: {
    name: "思考・分析型",
    tagline: "ロジックと根拠で判断する強み",
    lead: "情報を整理して根拠のある結論を出すことが得意なタイプです。複雑な問題を分解して考える力があり、感情より先に「なぜ？」「どうすれば？」を問いかける姿勢が職場での信頼につながっています。",
    short: "データや根拠をもとに考え、問題の本質を掘り下げるのが強みのタイプ。",
    tips: [
      "分析や調査が必要な場面で積極的に手を挙げる",
      "会議では「なぜそうなのか」を言語化する役割を担う",
      "数字や根拠をセットにして提案する癖をつける",
    ],
    question: "最近、自分のロジカルな視点が役立った場面はどこでしたか？",
    prompt:
      "私は情報を整理して根拠のある結論を出すことが得意です。この強みをさらに仕事で活かすための具体的なアクションを5つ提案してください。",
    color: "var(--teal)",
  },
  B: {
    name: "対人・コミュニケーション型",
    tagline: "人との関係を築いて動かす強み",
    lead: "相手の感情や状況を察する力が高く、自然と人間関係を円滑にできるタイプです。初対面でも話しやすい雰囲気を作れる力は、チームや顧客との信頼構築において大きな武器になります。",
    short: "相手を理解して関係を築き、場の雰囲気を作る力が強みのタイプ。",
    tips: [
      "1on1や面談など「人と深く話す場」を積極的に作る",
      "チーム内で声をかけにくい人を意識的に気にかける",
      "自分のコミュニケーション力を、交渉・説得の場面にも転用する",
    ],
    question: "あなたの関わりで、誰かの気持ちや行動が変わった経験はありますか？",
    prompt:
      "私は相手の感情や状況を察する力が高く、人間関係を作ることが得意です。この強みを仕事でさらに活かすための具体的な提案を5つしてください。",
    color: "var(--coral)",
  },
  C: {
    name: "実行・推進型",
    tagline: "決めたらすぐ動く推進力の強み",
    lead: "考えるより先に動き、結果を出すことへのこだわりが強いタイプです。プロジェクトの停滞を打開したり、チームに「やってみよう」という勢いをもたらす存在として評価されやすいです。",
    short: "行動力と推進力で結果を作り出す、スピードと実行が強みのタイプ。",
    tips: [
      "「完璧になってから動く」より「7割で動いて修正」を意識する",
      "プロジェクトの立ち上げフェーズや停滞している仕事を積極的に引き受ける",
      "自分の行動力を「周りを動かす」方向にも使う",
    ],
    question: "これまでの仕事で、あなたが動いたことで物事が前進した場面はどこですか？",
    prompt:
      "私は決めたらすぐに行動に移す推進力が強みです。この実行力をさらに仕事で発揮するための具体的なアドバイスを5つしてください。",
    color: "#9b87c4",
  },
  D: {
    name: "創造・発想型",
    tagline: "新しい視点とアイデアを生む強み",
    lead: "既存のやり方に「もっと良い方法があるはず」と感じ、新しい選択肢を生み出すことが得意なタイプです。ゼロから何かを作ったり、誰も考えていなかった解決策を提案する場面で本領を発揮します。",
    short: "既存の枠を超えたアイデアや発想で、新しい価値を作るのが強みのタイプ。",
    tips: [
      "「なぜこのやり方なのか」を問い直す習慣をつける",
      "他業界・他分野の事例を積極的にインプットして発想の幅を広げる",
      "アイデアを出した後は「実行できる形」に落とし込む練習をする",
    ],
    question: "最近、「こうすればもっと良くなる」と思ったアイデアはありましたか？",
    prompt:
      "私は新しいアイデアや解決策を考えることが得意です。この創造力・発想力をさらに仕事で活かすための具体的なアクションを5つ提案してください。",
    color: "var(--gold)",
  },
  E: {
    name: "調整・サポート型",
    tagline: "チームを支えて成果を引き出す強み",
    lead: "誰かが困っていると自然と手を差し伸べ、チームの意見をまとめる役割を担うタイプです。縁の下の力持ちとして全体のパフォーマンスを上げる力は、チームの結束力に直結しています。",
    short: "チームを調整・サポートし、全体の力を最大化するのが強みのタイプ。",
    tips: [
      "自分のサポートが誰かの成果につながった場面を言語化して記録する",
      "「縁の下」の役割を「なくてはならない人材」として自覚的に担う",
      "調整力をマネジメントやプロジェクト管理にも転用する",
    ],
    question: "あなたのサポートや調整で、チームが助かった場面はどこですか？",
    prompt:
      "私はチームの調整やサポートが得意で、周りを支えることに強みがあります。この強みをさらにキャリアで活かすための具体的なアドバイスを5つしてください。",
    color: "#b0c4c2",
  },
};

const questionsRaw = [
  { type: "A", text: "情報を集めて整理し、根拠のある結論を出すのが得意だ" },
  { type: "B", text: "初対面の人とも自然に話せる方だ" },
  { type: "C", text: "やると決めたことはとにかく行動に移す方だ" },
  { type: "D", text: "新しいアイデアや解決策を考えるのが楽しいと感じる" },
  { type: "E", text: "誰かが困っていると、自然と手を貸したくなる" },
  { type: "A", text: "問題が起きた時、感情より先に「なぜ起きたか」を考える" },
  { type: "B", text: "相手の感情や状況を察することが得意だ" },
  { type: "C", text: "まず動いてから修正するスタイルが自分に合っている" },
  { type: "D", text: "既存のやり方をそのままにせず、改善や変化を提案したくなる" },
  { type: "E", text: "チームや職場の意見をまとめたり、間を取り持つ役割が向いている" },
  { type: "A", text: "複雑な課題を細かく分解して考えることが多い" },
  { type: "B", text: "チームや職場の雰囲気を和ませる役割になりやすい" },
  { type: "C", text: "プロジェクトを前に進めるための推進力があると言われる" },
  { type: "D", text: "「こんな方法もある」と複数の選択肢を思い浮かべやすい" },
  { type: "E", text: "裏方として誰かを支えることにやりがいを感じる" },
  { type: "A", text: "データや数字をもとに判断するのが自分に向いていると感じる" },
  { type: "B", text: "人の話をじっくり聞いて、理解することが苦にならない" },
  { type: "C", text: "結果を出すことへのこだわりが強い方だ" },
  { type: "D", text: "ゼロから何かを作り出すことに喜びを感じる" },
  { type: "E", text: "メンバーの状況を把握して、必要なサポートをするのが得意だ" },
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
  form.innerHTML = questionsRaw
    .map((q, i) => {
      const name = `q${i + 1}`;
      const options = LIKERT.map(({ value, label }) => {
        const id = `${name}-v${value}`;
        return `
          <label class="likert-option" for="${id}">
            <input id="${id}" type="radio" name="${name}" value="${value}" />
            <span>${label}</span>
          </label>
        `;
      }).join("");

      return `
        <fieldset class="question-card">
          <legend class="question-title">Q${i + 1}. ${q.text}</legend>
          <div class="likert-wrap">
            <div class="likert-labels">
              <span>あてはまらない</span>
              <span>あてはまる</span>
            </div>
            <div class="likert-options">${options}</div>
          </div>
        </fieldset>
      `;
    })
    .join("");
}

function renderTypes() {
  typeGrid.innerHTML = TYPE_KEYS.map((key) => {
    const d = typeData[key];
    return `
      <article class="type-card">
        <div class="type-dot" style="background:${d.color}"></div>
        <h3>${d.name}</h3>
        <p>${d.tagline}</p>
      </article>
    `;
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
  answers.forEach((val, i) => {
    if (val !== null) scores[questionsRaw[i].type] += val;
  });
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

  resultTitle.textContent = `あなたの得意領域は「${data.name}」です`;
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
      </div>
    `;
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
