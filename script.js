
        const stageCount = 7;
        let currentStage = 1;
        let currentQuestionIndex = 0;
        let playerHealth = 5;
        let enemyHealth = 5;
        let timeLeft = 15;
        let timerInterval;

        const quizData = {
            1: [
                { question: "ワーキングプアが増えた理由はどれでしょう", 
                    choices: ["働かない人が増えたから", "物価が下がり、働かなくても生きていけるから ", "非正規雇用が増えたから"], 
                    answer: "非正規雇用が増えたから", 
                    explanation: "非正規雇用は、正規雇用と比べて、賃金が低いことと、長く勤務しても賃上げが望めない"},
                { question: "ワーキングプアの解決策で、望ましいものはどれでしょう", 
                    choices: ["働く人たちを増やす", "労働環境を考え直す", "正社員の採用を減らす"], 
                    answer: "労働環境を考え直す",
                    explanation: "労働環境の改善などによって、ワーキングプアを実現することにも解決につながる"},
                { question: "ワーキングプアになりやすい職業はどれでしょう", 
                    choices: ["飲食店員", "教師", "警備員", "漁師"], 
                    answer: "警備員",
                    explanation: "賃金が低い、労働環境が過酷、季節による変動が大きいなどの要因がある"},
                { question: "ワーキングプアが増えた理由として何の負担が増えたからでしょう", 
                    choices: ["生活費", "介護・子育て", "移動費", "体"], 
                    answer: "介護・子育て",
                    explanation: "短い勤務時間、休業など、やむを得ない理由で遅刻、早退、欠勤によって、手取額が減少"},
                { question: "ワーキングプアに対する対する国の支援はあるか", 
                    choices: ["〇", "×"], 
                    answer: "〇",
                    explanation: "非正規雇用者が正規雇用の仕事につけるようにすることも国が行うべき就労支援として大切"},
                { question: "世界の何人に１人が極度の貧困状態で生活してるでしょう", 
                    choices: ["110", "56", "33", "6"], 
                    answer: "6",
                    explanation: "解消するには政府や企業、市民が連携して様々な支援を行う必要がある"},
                { question: "日本で最も貧困率が高い県は？", 
                    choices: ["沖縄県", "東京都", "愛知県", "愛媛県"], 
                    answer: "沖縄県",
                    explanation: "1人親世帯の多さ、非正規雇用の割合が高い、低賃金、物価の安さ、過疎化や高齢化があげられる"}
            ],
            2: [
                { question: "日本で大学への進学率？", 
                    choices: ["42%", "68%", "59%", "84%"], 
                    answer: "59%",
                    explanation: "文部科学省が公表した令和6年度学校基本調査（確定値）によると2024年度の大学進学率は59.1％で過去最高を更新"},
                { question: "世界で教育の質が高いのは？", 
                    choices: ["フィンランド", "韓国", "オーストラリア", "日本"], 
                    answer: "フィンランド",
                    explanation: "＜特徴の例＞自国の国籍をもつ子供だけでなく、フィンランドに暮らす難民や移民の子どもたちにも平等に教育を受ける権利が保障されている"},
                { question: "国公立の大学費用はどのくらいか？", 
                    choices: ["242万円", "282万円", "305万円"], 
                    answer: "282万円",
                    explanation: "4年制　約243万円　　6年制　約360万円"},
                { question: "教員不足の原因として当てはまるものは？", 
                    choices: ["育休がとれない", "一校あたりに必要な教員が増えたから", "夏休みがなかったから"], 
                    answer: "一校あたりに必要な教員が増えたから", 
                    explanation: "対策として、採用枠の拡大や待遇改善、教員養成の充実、教育ソリューションの活用などがある"},
                { question: "公立学校の教員の平均勤務時間は(1週間で)？", 
                    choices: ["40時間", "50時間", "60時間", "70時間"], 
                    answer: "60時間",
                    explanation: "部活動の過熱化によって部活顧問の教員の長時間労働化が進んだ。教員の残業時間は月80時間も珍しくない"},
                { question: "教育現場で何の対応が問題視されているか", 
                    choices: ["特別支援教育", "一般教育", "登校生徒", "いじめ・不登校"], 
                    answer: "いじめ・不登校",
                    explanation: "学校でカウンセラーなどを設置する対策がとられている"},
                { question: "部活動の負担軽減のために進められている取り組みは？", 
                    choices: ["部活動の廃止", "地域移行(地域クラブが運営を担う)", "休日の活動時間を増やす", "教師のボランティア精神に任せる"], 
                    answer: "地域移行(地域クラブが運営を担う)",
                    explanation: "教師の負担削減というメリットはあるが、デメリットとして費用負担の増加、"}
            ],
            3: [
                { question: "日本国憲法での「働くこと」の定義は？", 
                    choices: ["権利","選択", "義務", "特権" ], 
                    answer: "義務",
                    explanation: "「働くこと」は国民の義務で、誰もが社会の一員として働く責任をもっている"},
                { question: "団体権とは？", 
                    choices: ["休暇を取る権利", "労働組合を作る権利", "ストライキをする権利", "著作権"], 
                    answer: "労働組合を作る権利",
                    explanation: "働く環境をより良くするための基本的な権利"},
                { question: "団体交渉権とは何のための権利ですか？", 
                    choices: ["労働条件を交渉するため", "会社を休むため", "ストライキをするため", "給料を減らすため"], 
                    answer: "労働条件を交渉するため",
                    explanation: "労働者が労働組合を通じて会社と賃金や労働時間などについて話し合い条件を改善するための権利"},
                { question: "最低賃金が適応されるのは誰ですか？", 
                    choices: ["正社員のみ", "すべての労働者", "パート・アルバイト以外", "派遣社員のみ"], 
                    answer: "すべての労働者",
                    explanation: "これは誰もが一定水準以上の賃金を保障されるための法律"},
                { question: "2024年の愛媛県の最低賃金は？", 
                    choices: ["1000円", "980円", "1163円", "956円"], 
                    answer: "956円",
                    explanation: "地域によって金額が異なるため、地元の情報を確認することが大切"},
                { question: "参政権とは？", 
                    choices: ["法律を変える権利", "旅行する権利", "税金を払う権利", "政治に参加する権利"], 
                    answer: "政治に参加する権利",
                    explanation: "選挙に参加したり立候補したりして政治に関わる権利を指し、民主主義の重要な要素"},
                { question: "選挙権を持てる最低年齢は？", 
                    choices: ["16歳", "18歳", "20歳", "22歳"], 
                    answer: "18歳",
                    explanation: "2015年に公職選挙法が改正され、選挙権の年齢が20歳以上から18歳以上に引き下げられた"}
            ],
            4: [
                { question: "災害発生後何時間で人命救助のデッドラインになるでしょうか？", 
                    choices: ["15時間", "24時間", "48時間", "72時間"], 
                    answer: "72時間",
                    explanation: "２４時間以内に救出 された被災者の生存率約９０％、４８時 間以内だと約５０％、７２時間以内だと ２０～３０％だそうである"},
                { question: "4人家族に必要な3日間の水分量は？", 
                    choices: ["36L", "43L", "56L", "62L"], 
                    answer: "36L",
                    explanation: "1人当たり1日3Lの水が必要"},
                { question: "日本の防災意識が低い理由は？", 
                    choices: ["自然リスクについて認識できていない", "自然災害が多く慣れているから", "自分のこととして捉えられていないから", "災害に興味ないから"], 
                    answer: "自分のこととして捉えられていないから", 
                    explanation: "防災意識を高めるために日ごろから防災情報を収集し、最新の情報を把握する"},
                { question: "火災が起きた時に、最も最適な避難方法は？", 
                    choices: ["低い姿勢で避難する", "とにかく走る", "深呼吸をしてから逃げる", "煙のない部屋に逃げ込む"], 
                    answer: "低い姿勢で避難する",
                    explanation: "火災時の煙には有毒ガスが含まれており、吸い込むと命に関わるから"},
                { question: "地震が起きた時にとる安全な行動は？", 
                    choices: ["窓から外の様子を確認する", "揺れが収まるまで机の下に身を隠す", "大きな声で助けを呼ぶ"], 
                    answer: "揺れが収まるまで机の下に身を隠す",
                    explanation: "ガラスの破片や落下物が危険だから"},
                { question: "地震が起きたが起きた時エレベーター乗っていたらどうする？", 
                    choices: ["全ての階のボタンを押し停止した階で降りる", "じっと待つ", "エレベーターの中で安全を確保する", "非常ベルを鳴らす"],
                    answer: "全ての階のボタンを押し停止した階で降りる",
                    explanation: "閉じ込められる危険性があるから"},
                { question: "停電時に懐中電灯の代わりに使ってはいけないものは？", 
                    choices: ["スマホのライト", "ろうそく", "LEDランタン", "乾電池式のライト"], 
                    answer: "ろうそく",
                    explanation: "地震の余震などで倒れて火事の原因になるから"}
            ],
            5: [
                { question: "AIを使った医療のメリットは？", 
                    choices: ["診断の精度が下がる", "医療ミスが増える", "事務業務の効率化", "大量のデータが不要になる"], 
                    answer: "事務作業の効率化",
                    explanation: "作業を自動化し、医者や看護師の負担を軽減できる"},
                { question: "AIが改善できる医療課題は？", 
                    choices: ["医療費の増加", "地域格差の改善", "医師の仕事をすべて代行する"], 
                    answer: "地域格差の改善",
                    explanation: "地域ごとの医療サービス差を減らすことができる"},
                { question: "AIができないことは？", 
                    choices: ["すべての病気を治せる", "医師のサポートができる", "正しい診断ができる", "患者の希望に沿った治療が可能"], 
                    answer: "患者の希望に沿った治療が可能",
                    explanation: "患者さんの気持ちを含めた判断は難しいから"},
                { question: "AI医療で注意するべき点は？", 
                    choices: ["1つの情報だけで診断できる", "常に正しいデータを使う必要がない", "大量のデータが必要", "すべての診断の自動化"], 
                    answer: "大量のデータが必要",
                    explanation: "AIは学習のためには膨大なデータが必要"},
                { question: "AIを活用して期待されることは？", 
                    choices: ["オンライン診断ができる", "診断の精度が上がる", "診断ミスが増加する", "医療費が大幅に上がる"], 
                    answer: "オンライン診断ができる",
                    explanation: "遠隔で診断ができるが、最終判断は人間の医者が行う"},
                { question: "AIを活用した画像診断可能なことは？", 
                    choices: ["医師の仕事をすべて代行する", "がんの早期発見", "診断に長時間を要する", "すべての病気の診断"], 
                    answer: "がんの早期発見",
                    explanation: "AIは画像診断精度が高い"},
                { question: "AEDの相場はどのくらいでしょう", 
                    choices: ["5万", "15万", "25万", "50万"], 
                    answer: "25万",
                    explanation: "AEDは心肺停止の人に電気ショックを与えて蘇生させる道具で、公共の建物においてあることが多い"}
            ],
            6: [
                { question: "過疎化とはどんな現象？", 
                    choices: ["人が都市に集中すること", "地域の人口減少に伴い社会機能が低下すること", "子供の数が増え学校が不足すること", "国全体の人口が増えること"], 
                    answer: "地域の人口減少に伴い社会機能が低下すること",
                    explanation: "人口が減少し、地域の維持が難しくなること"},
                { question: "過疎地域での問題は？", 
                    choices: ["公共交通機関の減少", "医療や福祉サービスの低下", "学校の統廃合", "すべて正しい"], 
                    answer: "すべて正しい", 
                    explanation: "人口減少により交通・医療・教育の環境が悪化する"},
                { question: "過密化が引き起こす問題として正しくないものは？", 
                    choices: ["交通渋滞や電車の混雑", "住宅価格の上昇", "都市の空気がきれいになる", "自然環境の破壊"], 
                    answer: "都市の空気がきれいになる",
                    explanation: "人口集中により大気汚染が悪化しやすい"},
                { question: "都市の過密化を解決するための取り組みとして正しいのは？", 
                    choices: ["地方への移住を促進する", "公共交通機関を整備する", "都市の緑地や公園を増やす", "すべて正しい"], 
                    answer: "すべて正しい",
                    explanation: "移住支援や交通・環境整備で都市の負担を減らす"},
                { question: "世界で人口爆発が問題視されている地域は？", 
                    choices: ["ヨーロッパ", "アフリカ", "南極大陸", "北アメリカ"], 
                    answer: "アフリカ",
                    explanation: "アフリカでは出生率が高く、今後も人口が急増すると予測されている"},
                { question: "人口爆発が地球環境に与える影響として正しくないものは？", 
                    choices: ["二酸化炭素の排出量が増える", "森林伐採が進む", "エネルギー需要が減る", "水資源が不足する"], 
                    answer: "エネルギー需要が減る",
                    explanation: "人口増加によりエネルギー需要も増え、環境への負担が大きくなる"},
                { question: "世界の人口が急増した理由は？",
                    choices: ["死亡率が低下した", "戦争が増えた", "気温が上昇した", "食料の生産量が減少した"], 
                    answer: "死亡率が低下した", 
                    explanation: "医療の発展で寿命が伸び、死亡率が低下したため人口が増加した"}
            ],
            7: [
                { question: "水質汚染の主な原因として正しくないものは？", 
                    choices: ["工業排水や農業の流出", "生活排水の未処理の流出", "プラスチックごみの流出", "海や川の水を使わないこと"], 
                    answer: "海や川の水を使わないこと",
                    explanation: "水質汚染は、化学物質や生活排水、プラスチックごみの流出によっておこる"},
                { question: "私たちが森林破壊を防ぐためにできることは？", 
                    choices: ["木材を大量に消費し、経済を活性化させる", "森林を守るための認証（FSC認証 など）を受けた製品を選ぶ", "違法伐採の木材を積極的に買う", "森林は関係ないので気にしない"], 
                    answer: "森林を守るための認証（FSC認証 など）を受けた製品を選ぶ", 
                    explanation: "FSC認証などのマークがある製品を選ぶことで、森林保護に貢献できる"},
                { question: "地下水のくみ上げ過ぎが原因で起こる公害は？", 
                    choices: ["大気汚染", "地盤沈下", "土壌汚染", "水質汚濁"], 
                    answer: "地盤沈下", 
                    explanation: "地盤沈下の対策として地下水の節水、地盤改良工事がある"},
                { question: "オゾン層を破壊することで問題となっている物質はどれか？", 
                    choices: ["ダイオキシン", "オゾン", "フロン", "二酸化炭素"], 
                    answer: "フロン", 
                    explanation: "オゾン層が破壊されると有害な紫外線が増加し、人体や生態系に様々な影響を及ぼす"},
                { question: "毎年世界中で作られているプラスチックの量は東京スカイツリー何個分の重さ？", 
                    choices: ["約100個分", "約1000個分", "約10個分", "約10000個分"], 
                    answer: "約10000個分", 
                    explanation: "2019年の1年間で作られたプラスチックの量はの量は約3億6800万トン"},
                { question: "リニアエコノミーの問題点として正しくないものは？", 
                    choices: ["資源が枯渇する可能性がある", "ごみの量が増え、環境に影響を与える", "循環型社会を実現しやすい", "地球温暖化の原因になる"], 
                    answer: "循環型社会を実現しやすい", 
                    explanation: "資源の再利用が行われないため循環型社会への移行が求められている"},
                { question: "「リニアエコノミー」とはどのような経済の仕組みか？", 
                    choices: ["資源を採取し、生産・消費・廃棄する仕組み", "資源を何度もリサイクルし、廃棄物を減らす仕組み", "製品を再利用して新たに資源を採取しない仕組み", "経済活動を完全に停止する仕組み"], 
                    answer: "資源を採取し、生産・消費・廃棄する仕組み", 
                    explanation: "このままでは資源が枯渇し、環境への負担が大きくなる"}
            ]
        };

        function createStageButtons() {
            const container =document.getElementById("stageButtons");
            container.style.display = "flex"; // 横並びにする
            container.style.justifyContent = "center"; // 中央寄せ
            container.style.gap = "10px"; // ボタン間の間隔

            for (let i = 1; i <= stageCount; i++) {
                let btn = document.createElement("button");
                btn.classList.add("stage-button");
                btn.textContent = i;

                btn.onclick = () => loadStage(i);
                container.appendChild(btn);
            }
        }

        function loadStage(stage) {
            document.body.style.background = getStageColor(stage);
            currentStage = stage;
            playerHealth = 5;
            enemyHealth = 5;
            timeLeft = 15;
            document.getElementById("timer").textContent = timeLeft;
            updateHealthBars();
            document.getElementById("homeScreen").classList.remove("active");
            document.getElementById("quizScreen").classList.add("active");
            
            // ステージの質問をランダム化
            shuffleQuestions(stage);

            displayQuestion(0);
        }

        // 質問をランダムにシャッフルする関数
        function shuffleQuestions(stage) {
             // ステージの質問リストをシャッフル
            let questions = quizData[stage];
            for (let i = questions.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [questions[i], questions[j]] = [questions[j], questions[i]];
            }
        }

        function displayQuestion(questionIndex) {
            if (questionIndex >= quizData[currentStage].length) {
                alert("ステージクリア！");
                goHome();
                return;
            }
            
            clearInterval(timerInterval);
            timeLeft = 15;
            document.getElementById("timer").textContent = timeLeft;
            
            // 正解・不正解の表示を消す
            const resultMessage = document.getElementById("resultMessage");
            resultMessage.textContent = "";

            const explanation = document.getElementById("explanation");
            explanationMessage.textContent = "";

            const questionData = quizData[currentStage][questionIndex];
            if (!questionData || !questionData.question) {
                return; // 空の問題なら何もしない
            }

            // 「問題：」の形式で表示
            document.getElementById("questionText").innerHTML = `<strong>問題：</strong> ${questionData.question}`;

            const choicesContainer = document.getElementById("choices");
            choicesContainer.innerHTML = "";

            questionData.choices.forEach(choice => {
                let button = document.createElement("button");
                button.classList.add("choice-button");
                button.textContent = choice;
                button.onclick = () => checkAnswer(choice, questionData.answer, questionIndex);
                choicesContainer.appendChild(button);
            });

            startTimer(questionIndex);
        }

        function startTimer(questionIndex) {
            timerInterval = setInterval(() => {
                timeLeft--;
                document.getElementById("timer").textContent = timeLeft;
                if (timeLeft <= 0) {
                    clearInterval(timerInterval);
                    checkAnswer("", quizData[currentStage][questionIndex].answer, questionIndex);
                }
            }, 1000);
        }

        // 正誤判定
        function checkAnswer(selected, correct, questionIndex) {
            clearInterval(timerInterval);
            const resultMessage = document.getElementById("resultMessage");
            const questionData = quizData[currentStage][questionIndex];

            if (selected === correct) {
                // 正解なら
                resultMessage.textContent = "正解！"; // 正解表示
                resultMessage.style.color = "green"; // 緑色で表示
                enemyHealth--;
                //　敵の体力が０になったら
                if (enemyHealth === 0) {
                    alert("ステージクリア！"); // ゲームクリアで表示
                    goHome(); // ホームに戻る
                    return;
                }
            } else {
                //　不正解なら
                resultMessage.textContent = "不正解！"; // 不正解表示
                resultMessage.style.color = "red"; // 赤色で表示
                playerHealth--;
                //　プレイヤーの体力が０になったら
                if (playerHealth === 0) {
                    alert("ゲームオーバー！"); //　ゲームオーバーで表示
                    loadStage(currentStage);
                    return;
                }
            }

            // 解説の表示（`explanation` があれば表示する）
            if (questionData.explanation) {
                explanationMessage.textContent = `解説：${questionData.explanation}`;
                explanationMessage.style.color = "black";
            } 

            updateHealthBars();
            setTimeout(()=> displayQuestion(questionIndex + 1), 1500);
        }

        function updateHealthBars() {
            document.getElementById("playerHealth").style.width = (playerHealth * 20) + "%";
            document.getElementById("enemyHealth").style.width = (enemyHealth * 20) + "%";
            document.getElementById("playerHealthText").textContent = playerHealth;
            document.getElementById("enemyHealthText").textContent = enemyHealth;
        }

        // 各ステージカラー
        function getStageColor(stage) {
            const colors = ["#ffffff", "#eee8aa", "#e6e6fa", "#dbebc4", "#ffeaf4", "#87cefa", "#f5f5f5"];
            return colors[stage % colors.length];
        }

        function goHome() {
            document.body.style.background = "white";
            document.getElementById("quizScreen").classList.remove("active");
            document.getElementById("homeScreen").classList.add("active");
        }

        createStageButtons();