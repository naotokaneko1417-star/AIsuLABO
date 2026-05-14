const TYPE_KEYS = ["A", "B", "C", "D", "E"];

const typeData = {
  A: {
    name: "仕事内容ミスマッチ型",
    tagline: "やりたいことと任されることのズレ",
    lead: "今の仕事の内容そのものに「これじゃない感」を感じているタイプです。能力や意欲があるのに、それを発揮できる場が用意されていないもどかしさが積み重なっています。",
    short: "任されている仕事と、自分の得意なこと・やりたいことの間にズレがあるタイプ。",
    tips: [
      "過去に夢中になった仕事の場面を3つ振り返ってみる",
      "今の業務の中に「少しだけ面白い」と感じる瞬間を探して記録する",
      "得意なことを活かせる小さな役割を、今の職場の中で探してみる",
    ],
    question: "時間を忘れて仕事に没頭できた時、何をしていましたか？",
    prompt:
      "私は今の仕事の内容が自分に合っていない気がしています。自分の得意なことや本当にやりたいことを整理するための質問を5つしてください。",
    color: "var(--teal)",
  },
  B: {
    name: "人間関係疲弊型",
    tagline: "職場の人間関係での消耗",
    lead: "仕事の内容よりも、人間関係によって消耗しているタイプです。相手への気づかいができる反面、そのエネルギーが人間関係の維持に使われすぎて、本来の力が発揮できなくなっています。",
    short: "職場の人間関係で消耗し、本来の力が発揮できていないタイプ。",
    tips: [
      "1日の終わりに「今日誰かに気を遣いすぎたか」を確認する",
      "職場での消耗とプライベートの回復を意識的に分ける",
      "「この関係で助かっていること」を週1回思い出してみる",
    ],
    question: "職場で、最近一番エネルギーを使っている人間関係は何ですか？",
    prompt:
      "私は職場の人間関係で消耗しています。どこに負担を感じているのか、どう対処できるかを整理するための質問を5つしてください。",
    color: "var(--coral)",
  },
  C: {
    name: "成長停滞型",
    tagline: "成長できていないもどかしさ",
    lead: "今の環境で成長の実感を得にくく、物足りなさを感じているタイプです。向上心や探求心が強い分、現状維持の環境がじわじわとストレスになっています。",
    short: "成長意欲が高いのに、今の環境がそれを受け止めてくれていないタイプ。",
    tips: [
      "今の仕事で「新しく気づいたこと」を週1で書き出してみる",
      "成長を感じられた過去の経験を振り返り、共通点を探す",
      "環境に頼らず、自分の中でできる小さなチャレンジを1つ作る",
    ],
    question: "1年前の自分と比べて、何が変わりましたか？",
    prompt:
      "私は今の仕事で成長している実感が持てません。どんな成長が自分には必要で、どこで得られるかを整理するための質問を5つしてください。",
    color: "#9b87c4",
  },
  D: {
    name: "価値観のズレ型",
    tagline: "会社と自分の価値観の衝突",
    lead: "職場のやり方や方向性に納得できないことが多いタイプです。自分なりの信念や大切にしたいものがはっきりしている分、それと合わない環境に強い違和感を感じやすくなっています。",
    short: "会社・職場の価値観と自分の価値観のズレが、モヤモヤの根っこにあるタイプ。",
    tips: [
      "「自分が仕事で絶対に譲りたくないこと」を3つ書き出す",
      "職場の方針と自分の価値観のどこがズレているかを言語化する",
      "完全な一致は難しいと知りつつ、許容できるズレの範囲を考えてみる",
    ],
    question: "仕事をする上で、絶対に譲りたくないことは何ですか？",
    prompt:
      "私は職場のやり方や価値観に納得できないことが多いです。自分が本当に大切にしたいことを整理するための質問を5つしてください。",
    color: "var(--gold)",
  },
  E: {
    name: "環境・条件不満型",
    tagline: "働く環境や条件への不満",
    lead: "給与・労働時間・評価など「働く条件」に不満が集まっているタイプです。自分の貢献に対して正当な対価や評価を求めており、それが満たされていない感覚が積み重なっています。",
    short: "給与・時間・評価など、働く条件や環境への不満がモヤモヤの中心にあるタイプ。",
    tips: [
      "「今の職場で受け取れていると感じること」を書き出してみる",
      "条件面の希望を、具体的な数字や言葉で言語化する",
      "条件が改善されたとして、他の部分も続けられるかを確認する",
    ],
    question: "働く条件で、少し改善されたら一番ほっとすることは何ですか？",
    prompt:
      "私は今の職場の環境や条件に不満があります。自分がどんな条件で働きたいのかを整理するための質問を5つしてください。",
    color: "#b0c4c2",
  },
};

const questionsRaw = [
  { type: "A", text: "仕事をしていると「なぜこれをやっているんだろう」と思うことがある" },
  { type: "B", text: "職場での人間関係に、消耗感やストレスを感じることがある" },
  { type: "C", text: "最近、仕事を通じて新しいことを学べていないと感じる" },
  { type: "D", text: "会社や職場の方向性・判断に、納得できないことが多い" },
  { type: "E", text: "給与や待遇が、自分の頑張りに見合っていないと感じる" },
  { type: "A", text: "自分の得意なことが、今の仕事ではあまり活かせていない気がする" },
  { type: "B", text: "上司や同僚との関わりが、帰宅後も頭から離れないことがある" },
  { type: "C", text: "このまま今の仕事を続けても、1年後の成長がイメージできない" },
  { type: "D", text: "職場で大切にされていることと、自分が大切にしたいことが違う気がする" },
  { type: "E", text: "働く時間や場所など、労働環境に不満や窮屈さを感じる" },
  { type: "A", text: "担当している仕事に、面白さや手応えをあまり感じられない" },
  { type: "B", text: "職場では気を遣いすぎて、本来の自分でいられていない" },
  { type: "C", text: "チャレンジできる機会が少なく、物足りなさを感じている" },
  { type: "D", text: "「なぜこんなやり方をするのだろう」と疑問に思う場面が多い" },
  { type: "E", text: "仕事量と評価・報酬のバランスが取れていないと感じる" },
  { type: "A", text: "仕事中に時間を忘れて集中できる瞬間が、ほとんどない" },
  { type: "B", text: "今の職場の雰囲気や文化が、自分に合っていないと感じる" },
  { type: "C", text: "もっと成長したいのに、職場の環境がそれを許してくれない感覚がある" },
  { type: "D", text: "自分が本当にやりたいことと、職場から求められていることがズレている" },
  { type: "E", text: "今の職場で長く働く自分を、あまりイメージできない" },
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
  const maxScore = Math.max(...Object.values(scores));
  const topType = TYPE_KEYS.reduce((best, k) => (scores[k] > scores[best] ? k : best), TYPE_KEYS[0]);
  const data = typeData[topType];

  resultTitle.textContent = `あなたのモヤモヤの根っこは「${data.name}」です`;
  resultTagline.textContent = data.tagline;
  resultLead.textContent = data.lead;

  const maxPossible = questionsRaw.filter((q) => q.type === topType).length * 5;

  scoreList.innerHTML = TYPE_KEYS.map((key) => {
    const d = typeData[key];
    const score = scores[key];
    const qCount = questionsRaw.filter((q) => q.type === key).length;
    const possible = qCount * 5;
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
