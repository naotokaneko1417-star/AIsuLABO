const questions = [
  {
    text: "何かを選ぶ時、まず考えがちなのは？",
    answers: {
      A: "失敗しない選び方や、あとで後悔しない理由を探してしまう",
      B: "本当は嫌でも「このくらい我慢できる」と自分に言い聞かせる",
      C: "自分の希望より、相手や周りが困らないかを先に考える",
      D: "変えたい気持ちはあるけれど、今のままの方が安心だと思う",
      E: "どれを選びたいのか考えているうちに、頭がぼんやりしてくる",
    },
  },
  {
    text: "予定を断りたい時に起きやすいことは？",
    answers: {
      A: "相手が納得しそうな理由を考え続けて、なかなか返事できない",
      B: "疲れていても「行けばなんとかなる」と気持ちを押し込める",
      C: "断ったら悪い気がして、結局相手に合わせてしまう",
      D: "断った後に気まずくなるのが怖くて、返事を先延ばしにする",
      E: "行きたいのか断りたいのか、自分でも判断がつかなくなる",
    },
  },
  {
    text: "モヤモヤした時の癖は？",
    answers: {
      A: "何が正しかったのか、どうすればよかったのかを分析し続ける",
      B: "「大したことない」「気にしすぎ」とすぐに片づける",
      C: "相手も大変だったはず、と自分の気持ちより相手を優先する",
      D: "変に動くより、今はこのままにしておこうと思う",
      E: "何が嫌だったのか言葉にできず、ただ気分だけが重くなる",
    },
  },
  {
    text: "人に相談する時、言いがちなことは？",
    answers: {
      A: "どっちを選ぶのが正しいと思う？",
      B: "こんなことで傷つくのは、私が気にしすぎかな？",
      C: "相手に迷惑をかけたくなくて、どうしたらいいかわからない",
      D: "変えたい気持ちはあるけど、変えた後のことが怖い",
      E: "考えているのに、自分がどうしたいのか全然まとまらない",
    },
  },
  {
    text: "疲れやすい場面は？",
    answers: {
      A: "答えがない話し合いや、正解が見えない選択をする時",
      B: "泣きそう、怒りそうなど、感情が表に出そうな時",
      C: "頼まれごとが続き、自分の時間や余裕が削られている時",
      D: "新しい環境や新しいやり方を選ばなければいけない時",
      E: "目標や将来像を聞かれて、はっきり答えなければいけない時",
    },
  },
  {
    text: "褒められた時に思いやすいことは？",
    answers: {
      A: "本当にこれで良かったのかな、と出来栄えを確認したくなる",
      B: "うれしいのに、素直に喜ぶのが少し怖い",
      C: "次も期待に応えなきゃ、とすぐにプレッシャーを感じる",
      D: "評価されたことで、これから何か変わるのではと落ち着かない",
      E: "何を褒められたのか、自分ではあまりピンとこない",
    },
  },
  {
    text: "自分の意見を言う時に引っかかることは？",
    answers: {
      A: "根拠が弱かったらどうしよう、と言う前に考え込む",
      B: "感情的だと思われたくなくて、言い方を抑えすぎる",
      C: "相手と違う意見だったら気まずいと思って飲み込む",
      D: "言ったことで関係や状況が変わるのが怖くなる",
      E: "話し始めても、自分の意見が途中でわからなくなる",
    },
  },
  {
    text: "「好きなことは何？」と聞かれた時は？",
    answers: {
      A: "趣味より、ちゃんとして見える答えを探してしまう",
      B: "好きと言い切るほどではないかも、と気持ちを小さくする",
      C: "相手が反応しやすそうな答えを選んでしまう",
      D: "新しく探すより、昔好きだったものに戻りたくなる",
      E: "聞かれると急に何も思いつかなくなる",
    },
  },
  {
    text: "後悔しやすいのはどんな時？",
    answers: {
      A: "あとから、もっと良い選び方があった気がして考え直す時",
      B: "本当は嫌だったのに、その場で何も言えなかった時",
      C: "相手を優先しすぎて、自分だけ疲れてしまった時",
      D: "変えたいと思っていたのに、怖くて何もしなかった時",
      E: "決められないまま時間だけが過ぎてしまった時",
    },
  },
  {
    text: "周りの人を見て感じやすいことは？",
    answers: {
      A: "みんなちゃんと正しい道を選んでいるように見える",
      B: "自分だけ弱い、気にしすぎ、と思ってしまう",
      C: "周りの空気に合わせないと置いていかれそうに感じる",
      D: "変わっていく人を見ると焦るのに、自分は動けない",
      E: "比べるほど、自分がどこへ向かいたいのかわからなくなる",
    },
  },
  {
    text: "本当は嫌なことがあった時は？",
    answers: {
      A: "嫌だと言ってもいい理由や根拠を探す",
      B: "嫌だと思った自分を責めて、気持ちを抑える",
      C: "相手を傷つけない言い方を考えすぎて、結局言えない",
      D: "伝えた後に関係が変わるのが怖くて黙ってしまう",
      E: "嫌だったのか、ただ疲れていただけなのかも曖昧になる",
    },
  },
  {
    text: "新しいことを始める時は？",
    answers: {
      A: "まず失敗しない方法を調べ続けて、始めるまで時間がかかる",
      B: "楽しみな気持ちより、不安や恥ずかしさを先に抑えてしまう",
      C: "周りにどう思われるかが気になって、始める前に疲れる",
      D: "今の安心やペースが崩れるのが怖くて踏み出しにくい",
      E: "興味はあるのに、何から始めればいいかわからなくなる",
    },
  },
  {
    text: "自分を責めやすいポイントは？",
    answers: {
      A: "もっと正しく、もっと効率よくできたはずと思うこと",
      B: "怒ったり落ち込んだり、感情が動いてしまったこと",
      C: "人に合わせきれず、誰かを困らせたかもしれないこと",
      D: "変わりたいのに、いつもの自分に戻ってしまうこと",
      E: "考えているのに、結局何も決められないこと",
    },
  },
  {
    text: "ほっとする言葉は？",
    answers: {
      A: "完璧な正解を選ばなくても大丈夫",
      B: "理由がうまく言えなくても、感じたことは大事にしていい",
      C: "相手だけでなく、自分の都合も入れて考えていい",
      D: "全部変えなくても、少し試すだけでいい",
      E: "はっきりした夢がなくても、心地よい方へ進んでいい",
    },
  },
  {
    text: "今、一番ほしい感覚は？",
    answers: {
      A: "自分で選んだことに「これでいい」と思える感覚",
      B: "弱音や本音を出しても大丈夫だと思える安心感",
      C: "相手だけでなく、自分の気持ちも大切にできている感覚",
      D: "少し変わっても、ちゃんとやっていけると思える感覚",
      E: "ぼんやりしていた方向が、少しだけ見えてくる感覚",
    },
  },
];

const resultData = {
  A: {
    name: "正解探しタイプ",
    lead: "自分の本音よりも「どれが正しいか」を先に考えやすいタイプです。慎重で、物事をきちんと考えられる人です。",
    short: "正しさを探す力が強いぶん、小さな好みや違和感が後回しになりやすいタイプ。",
    tips: [
      "正しいかどうかの前に、好きか嫌いかを見る",
      "損しない選択より、少し呼吸が楽になる選択を探す",
      "「もし誰にも評価されないなら？」と問い直す",
    ],
    question: "正解かどうかを一度置いた時、本当はどちらに気持ちが動いていますか？",
    prompt:
      "私は何かを選ぶ時、正解を探しすぎて自分の気持ちがわからなくなります。今悩んでいることについて、正しさではなく本音を整理するための質問を5つしてください。",
  },
  B: {
    name: "感情を抑えるタイプ",
    lead: "自分の感情をすぐに抑えたり、説明したりしやすいタイプです。冷静で、周りを乱さないようにできる人です。",
    short: "感情を処理するのが早いぶん、本音の入口まで閉じてしまいやすいタイプ。",
    tips: [
      "感情に理由をつける前に、まず名前をつける",
      "「大したことない」と言う前の反応を見る",
      "感情を正当化しようとしなくていい",
    ],
    question: "最近、すぐに「大丈夫」と言ったけれど、本当は少し引っかかったことは何ですか？",
    prompt:
      "私は感情をすぐに抑えてしまい、自分が何を感じているのかわからなくなります。最近の出来事をもとに、私の感情を否定せず整理する質問を5つしてください。",
  },
  C: {
    name: "人に合わせすぎるタイプ",
    lead: "相手の気持ちや場の空気を読む力が強いタイプです。気づかいができて、人から頼られやすい人です。",
    short: "相手の希望を読む力が強いぶん、自分の希望が後ろに下がりやすいタイプ。",
    tips: [
      "相手の希望と自分の希望を分けて書く",
      "迷惑をかけない選択だけでなく、自分が疲れない選択を見る",
      "「本当は少し嫌だった」を拾う",
    ],
    question: "最近、自分より相手を優先した場面はどこですか？",
    prompt:
      "私は人に合わせすぎて、自分の本音がわからなくなることがあります。今の状況について、相手の希望と私の希望を分けて整理する質問を5つしてください。",
  },
  D: {
    name: "変化を怖がるタイプ",
    lead: "今の状態を守る力が強いタイプです。安定を大切にでき、リスクを見落としにくい人です。",
    short: "変化への不安が強くなり、本当は変えたい気持ちが隠れやすいタイプ。",
    tips: [
      "大きく変える前に、小さく試す",
      "変化の不安と、今のままの苦しさを分ける",
      "「やめる」ではなく「少し減らす」から考える",
    ],
    question: "いきなり変えなくていいなら、何を少しだけ変えてみたいですか？",
    prompt:
      "私は変化が怖くて、本当はどうしたいのかを見ないようにしてしまいます。大きく変えずに小さく試せる選択肢を整理する質問を5つしてください。",
  },
  E: {
    name: "理想がぼやけているタイプ",
    lead: "やりたいことや理想がぼんやりしやすいタイプです。可能性を広く見られ、柔軟に考えられる人です。",
    short: "大きな理想を探そうとして、日常の小さな快・不快が見えにくいタイプ。",
    tips: [
      "大きな夢より、今日の快・不快を見る",
      "理想の人生ではなく、理想の1日から考える",
      "「なんとなく好き」を仮置きする",
    ],
    question: "完璧な答えでなくていいなら、どんな1日が少し心地よいですか？",
    prompt:
      "私はやりたいことや理想がぼんやりしていて、自分の本音がわかりません。大きな目標ではなく、日常の快・不快から望みを整理する質問を5つしてください。",
  },
};

const form = document.querySelector("#quizForm");
const progressBar = document.querySelector("#progressBar");
const progressText = document.querySelector("#progressText");
const errorMessage = document.querySelector("#errorMessage");
const resultSection = document.querySelector("#result");
const resultTitle = document.querySelector("#resultTitle");
const resultLead = document.querySelector("#resultLead");
const scoreList = document.querySelector("#scoreList");
const resultTips = document.querySelector("#resultTips");
const resultQuestion = document.querySelector("#resultQuestion");
const resultPrompt = document.querySelector("#resultPrompt");
const copyPromptButton = document.querySelector("#copyPromptButton");
const copyStatus = document.querySelector("#copyStatus");
const typeGrid = document.querySelector("#typeGrid");

function renderQuiz() {
  form.innerHTML = questions
    .map((question, index) => {
      const options = Object.entries(question.answers)
        .map(([type, label]) => {
          const id = `q${index + 1}-${type}`;
          return `
            <label class="option" for="${id}">
              <input id="${id}" type="radio" name="q${index + 1}" value="${type}" />
              <span>${type}. ${label}</span>
            </label>
          `;
        })
        .join("");

      return `
        <fieldset class="question-card">
          <legend class="question-title">Q${index + 1}. ${question.text}</legend>
          <div class="options">${options}</div>
        </fieldset>
      `;
    })
    .join("");
}

function renderTypes() {
  typeGrid.innerHTML = Object.entries(resultData)
    .map(
      ([type, data]) => `
        <article class="type-card">
          <h3>${type}. ${data.name}</h3>
          <p>${data.short}</p>
        </article>
      `
    )
    .join("");
}

function getAnswers() {
  return questions.map((_, index) => {
    const checked = form.querySelector(`input[name="q${index + 1}"]:checked`);
    return checked ? checked.value : null;
  });
}

function countScores(answers) {
  return answers.reduce(
    (scores, answer) => {
      if (answer) scores[answer] += 1;
      return scores;
    },
    { A: 0, B: 0, C: 0, D: 0, E: 0 }
  );
}

function updateProgress() {
  const answered = getAnswers().filter(Boolean).length;
  const percent = Math.round((answered / questions.length) * 100);
  progressBar.style.width = `${percent}%`;
  progressText.textContent = `${answered} / ${questions.length} 回答済み`;
  if (answered === questions.length) errorMessage.textContent = "";
}

function showResult() {
  const answers = getAnswers();
  const answered = answers.filter(Boolean).length;

  if (answered < questions.length) {
    errorMessage.textContent = `未回答の質問があります。あと${questions.length - answered}問に答えてください。`;
    return;
  }

  const scores = countScores(answers);
  const maxScore = Math.max(...Object.values(scores));
  const winners = Object.keys(scores).filter((type) => scores[type] === maxScore);
  const mainType = winners[0];
  const data = resultData[mainType];

  resultTitle.textContent =
    winners.length > 1
      ? `あなたは「${data.name}」寄りです`
      : `あなたは「${data.name}」です`;
  resultLead.textContent =
    winners.length > 1
      ? `${data.lead} 同点のタイプもあるので、スコアが高い結果をあわせて読んでみてください。`
      : data.lead;

  scoreList.innerHTML = Object.entries(scores)
    .map(([type, score]) => {
      const width = Math.round((score / questions.length) * 100);
      return `
        <div class="score-row">
          <span>${type}. ${resultData[type].name}</span>
          <div class="score-track"><div class="score-fill" style="width:${width}%"></div></div>
          <strong>${score}</strong>
        </div>
      `;
    })
    .join("");

  resultTips.innerHTML = data.tips.map((tip) => `<li>${tip}</li>`).join("");
  resultQuestion.textContent = data.question;
  resultPrompt.textContent = data.prompt;
  copyStatus.textContent = "";
  resultSection.hidden = false;
  resultSection.scrollIntoView({ behavior: "smooth", block: "start" });
}

function resetQuiz() {
  form.reset();
  resultSection.hidden = true;
  errorMessage.textContent = "";
  updateProgress();
  document.querySelector("#diagnosis").scrollIntoView({ behavior: "smooth", block: "start" });
}

async function copyPrompt() {
  const text = resultPrompt.textContent;
  try {
    await navigator.clipboard.writeText(text);
    copyStatus.textContent = "コピーしました。";
  } catch {
    copyStatus.textContent = "コピーできませんでした。本文を選択してコピーしてください。";
  }
}

renderQuiz();
renderTypes();
updateProgress();

form.addEventListener("change", updateProgress);
document.querySelector("#showResultButton").addEventListener("click", showResult);
document.querySelector("#resetButton").addEventListener("click", resetQuiz);
copyPromptButton.addEventListener("click", copyPrompt);
