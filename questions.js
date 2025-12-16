    const questionStock = {
        // --- 問1: ランクと基底のハイブリッド問題 ---
        q1: [
            {
                html: `
                    次のベクトル \\(\\boldsymbol{a}_1\\), \\(\\boldsymbol{a}_2\\), \\(\\boldsymbol{a}_3\\), \\(\\boldsymbol{a}_4\\) について、以下の問いに答えなさい。
                    $$
                    \\boldsymbol{a}_1 = \\begin{pmatrix} 1 \\\\ 2 \\\\ 1 \\\\ 3 \\end{pmatrix}, \\quad
                    \\boldsymbol{a}_2 = \\begin{pmatrix} 2 \\\\ 4 \\\\ 3 \\\\ 1 \\end{pmatrix}, \\quad
                    \\boldsymbol{a}_3 = \\begin{pmatrix} 1 \\\\ 2 \\\\ 2 \\\\ -2 \\end{pmatrix}, \\quad
                    \\boldsymbol{a}_4 = \\begin{pmatrix} 3 \\\\ 6 \\\\ 4 \\\\ 4 \\end{pmatrix}
                    $$
                    
                    について、これらのベクトルの組における1次独立な最大個数を\\(r\\)とすると\\(r = \\) <input type="text" class="input-small" id="q1_rank">であり、
                    \\(r\\)個の1次独立なベクトルの組を前の方から選ぶと<br>
                    
                    <div class="answer-section">
                        <label><input type="checkbox" name="q1_basis" value="a1"> \\(\\boldsymbol{a}_1\\)</label>
                        <label><input type="checkbox" name="q1_basis" value="a2"> \\(\\boldsymbol{a}_2\\)</label>
                        <label><input type="checkbox" name="q1_basis" value="a3"> \\(\\boldsymbol{a}_3\\)</label>
                        <label><input type="checkbox" name="q1_basis" value="a4"> \\(\\boldsymbol{a}_4\\)</label>
                    </div>
                    となる。
                `,
                // ハイブリッド用の正解データ定義
                explanation: `
                <h3>【解説】</h3>
                <p>行列 \\( A = (\\boldsymbol{a}_1, \\boldsymbol{a}_2, \\boldsymbol{a}_3, \\boldsymbol{a}_4) \\) を行基本変形してランクを求める.</p>
                $$
                A = 
                \\begin{pmatrix}
                1 & 2 & 1 & 3 \\\\
                2 & 4 & 2 & 6 \\\\
                1 & 3 & 2 & 4 \\\\
                3 & 1 & -2 & 4
                \\end{pmatrix}
                $$
                <p>（第2行-2×第1行、第3行-第1行、第4行-3×第1行）</p>
                $$
                \\longrightarrow
                \\begin{pmatrix}
                1 & 2 & 1 & 3 \\\\
                0 & 0 & 0 & 0 \\\\
                0 & 1 & 1 & 1 \\\\
                0 & -5 & -5 & -5
                \\end{pmatrix}
                $$
                $$
                \\longrightarrow
                \\begin{pmatrix}
                1 & 2 & 1 & 3 \\\\
                0 & 1 & 1 & 1 \\\\
                0 & 0 & 0 & 0 \\\\
                0 & 0 & 0 & 0
                \\end{pmatrix}
                $$
                $$
                \\longrightarrow
                \\begin{pmatrix}
                1 & 0 & -1 & 1 \\\\
                0 & 1 & 1 & 1 \\\\
                0 & 0 & 0 & 0 \\\\
                0 & 0 & 0 & 0
                \\end{pmatrix}
                $$
                <p>
                よって<strong>ランクは \\( r=2 \\) </strong>である.<br>
                次に一次独立なベクトルの組は主成分に注目して\\(\\boldsymbol{a}_1, \\boldsymbol{a}_2\\)だとわかる.
                </p>
                <p><strong>答え：</strong> \\(r=2\\), 一次独立なベクトルの組：\\(\\boldsymbol{a}_1, \\boldsymbol{a}_2\\)</p>
                 `,
                correct: {
                    type: "hybrid",
                    // 数値入力の正解 (ランク2)
                    text: { id: "q1_rank", val: "2" }, 
                    // チェックボックスの正解 (a1, a2) ※a3=a2-a1 なのでa1,a2は独立
                    checkbox: { name: "q1_basis", vals: ["a1", "a2"] } 
                },
                gradingType: "hybrid"
            },
            {
                html: `
                    次のベクトル \\(\\boldsymbol{a}_1\\), \\(\\boldsymbol{a}_2\\), \\(\\boldsymbol{a}_3\\), \\(\\boldsymbol{a}_4\\), \\(\\boldsymbol{a}_5\\) について、以下の問いに答えなさい。
                    $$
                    \\boldsymbol{a}_1 = \\begin{pmatrix} 2 \\\\ 1 \\\\ 4 \\\\ 3 \\end{pmatrix}, \\quad
                    \\boldsymbol{a}_2 = \\begin{pmatrix} 1 \\\\ 0 \\\\ 2 \\\\ 1 \\end{pmatrix}, \\quad
                    \\boldsymbol{a}_3 = \\begin{pmatrix} 5 \\\\ 3 \\\\ 10 \\\\ 8 \\end{pmatrix}, \\quad
                    \\boldsymbol{a}_4 = \\begin{pmatrix} 1 \\\\ 1 \\\\ 1 \\\\ 2 \\end{pmatrix}, \\quad
                    \\boldsymbol{a}_5 = \\begin{pmatrix} 1 \\\\ 0 \\\\ 1 \\\\ 1 \\end{pmatrix}
                    $$
                    
                    について、これらのベクトルの組における1次独立な最大個数を\\(r\\)とすると\\(r = \\) <input type="text" class="input-small" id="q1_rank">であり、
                    \\(r\\)個の1次独立なベクトルの組を前の方から選ぶと<br>
                    
                    <div class="answer-section">
                        <label><input type="checkbox" name="q1_basis" value="a1"> \\(\\boldsymbol{a}_1\\)</label>
                        <label><input type="checkbox" name="q1_basis" value="a2"> \\(\\boldsymbol{a}_2\\)</label>
                        <label><input type="checkbox" name="q1_basis" value="a3"> \\(\\boldsymbol{a}_3\\)</label>
                        <label><input type="checkbox" name="q1_basis" value="a4"> \\(\\boldsymbol{a}_4\\)</label>
                        <label><input type="checkbox" name="q1_basis" value="a5"> \\(\\boldsymbol{a}_5\\)</label>
                    </div>
                    となる。
                `,
                correct: {
                    type: "hybrid",
                    text: { id: "q1_rank", val: "3" }, 
                    checkbox: { name: "q1_basis", vals: ["a1", "a2", "a4"] } 
                },
                gradingType: "hybrid"
            },
            {
                html: `
                    次のベクトル \\(\\boldsymbol{a}_1\\), \\(\\boldsymbol{a}_2\\), \\(\\boldsymbol{a}_3\\), \\(\\boldsymbol{a}_4\\), \\(\\boldsymbol{a}_5\\) について、以下の問いに答えなさい。
                    $$
                    \\boldsymbol{a}_1 = \\begin{pmatrix} 1 \\\\ 0 \\\\ 1 \\\\ 1 \\end{pmatrix}, \\quad
                    \\boldsymbol{a}_2 = \\begin{pmatrix} 2 \\\\ 1 \\\\ 0 \\\\ 1 \\end{pmatrix}, \\quad
                    \\boldsymbol{a}_3 = \\begin{pmatrix} 1 \\\\ 0 \\\\ -1 \\\\ 2 \\end{pmatrix}, \\quad
                    \\boldsymbol{a}_4 = \\begin{pmatrix} 2 \\\\ -1 \\\\ 2 \\\\ 4 \\end{pmatrix}, \\quad
                    \\boldsymbol{a}_5 = \\begin{pmatrix} 3 \\\\ 2 \\\\ 3 \\\\ -1 \\end{pmatrix}
                    $$
                    
                    について、これらのベクトルの組における1次独立な最大個数を\\(r\\)とすると\\(r = \\) <input type="text" class="input-small" id="q1_rank">であり、
                    \\(r\\)個の1次独立なベクトルの組を前の方から選ぶと<br>
                    
                    <div class="answer-section">
                        <label><input type="checkbox" name="q1_basis" value="a1"> \\(\\boldsymbol{a}_1\\)</label>
                        <label><input type="checkbox" name="q1_basis" value="a2"> \\(\\boldsymbol{a}_2\\)</label>
                        <label><input type="checkbox" name="q1_basis" value="a3"> \\(\\boldsymbol{a}_3\\)</label>
                        <label><input type="checkbox" name="q1_basis" value="a4"> \\(\\boldsymbol{a}_4\\)</label>
                        <label><input type="checkbox" name="q1_basis" value="a5"> \\(\\boldsymbol{a}_5\\)</label>
                    </div>
                    となる。
                `,
                correct: {
                    type: "hybrid",
                    text: { id: "q1_rank", val: "3" }, 
                    checkbox: { name: "q1_basis", vals: ["a1", "a2", "a3"] } 
                },
                gradingType: "hybrid"
            },
            {
                html: `
                    次のベクトル \\(\\boldsymbol{a}_1\\), \\(\\boldsymbol{a}_2\\), \\(\\boldsymbol{a}_3\\), \\(\\boldsymbol{a}_4\\), \\(\\boldsymbol{a}_5\\) について、以下の問いに答えなさい。
                    $$
                    \\boldsymbol{a}_1 = \\begin{pmatrix} 1 \\\\ 2 \\\\ 0 \\\\ 0 \\end{pmatrix}, \\quad
                    \\boldsymbol{a}_2 = \\begin{pmatrix} 2 \\\\ 3 \\\\ 0 \\\\ -1 \\end{pmatrix}, \\quad
                    \\boldsymbol{a}_3 = \\begin{pmatrix} 1 \\\\ -1 \\\\ 2 \\\\ 0 \\end{pmatrix}, \\quad
                    \\boldsymbol{a}_4 = \\begin{pmatrix} 1 \\\\ 1 \\\\ 0 \\\\ -1 \\end{pmatrix}, \\quad
                    \\boldsymbol{a}_5 = \\begin{pmatrix} 0 \\\\ 3 \\\\ -2 \\\\ 0 \\end{pmatrix}
                    $$
                    
                    について、これらのベクトルの組における1次独立な最大個数を\\(r\\)とすると\\(r = \\) <input type="text" class="input-small" id="q1_rank">であり、
                    \\(r\\)個の1次独立なベクトルの組を前の方から選ぶと<br>
                    
                    <div class="answer-section">
                        <label><input type="checkbox" name="q1_basis" value="a1"> \\(\\boldsymbol{a}_1\\)</label>
                        <label><input type="checkbox" name="q1_basis" value="a2"> \\(\\boldsymbol{a}_2\\)</label>
                        <label><input type="checkbox" name="q1_basis" value="a3"> \\(\\boldsymbol{a}_3\\)</label>
                        <label><input type="checkbox" name="q1_basis" value="a4"> \\(\\boldsymbol{a}_4\\)</label>
                        <label><input type="checkbox" name="q1_basis" value="a5"> \\(\\boldsymbol{a}_5\\)</label>
                    </div>
                    となる。
                `,
                correct: {
                    type: "hybrid",
                    text: { id: "q1_rank", val: "3" }, 
                    checkbox: { name: "q1_basis", vals: ["a1", "a2", "a3"] } 
                },
                gradingType: "hybrid"
            },
            {
                html: `
                    次のベクトル \\(\\boldsymbol{a}_1\\), \\(\\boldsymbol{a}_2\\), \\(\\boldsymbol{a}_3\\), \\(\\boldsymbol{a}_4\\), \\(\\boldsymbol{a}_5\\) について、以下の問いに答えなさい。
                    $$
                    \\boldsymbol{a}_1 = \\begin{pmatrix} 1 \\\\ 1 \\\\ -1 \\\\ 2 \\\\ 1 \\end{pmatrix}, \\quad
                    \\boldsymbol{a}_2 = \\begin{pmatrix} 1 \\\\ 0 \\\\ 1 \\\\ 1 \\\\ 0 \\end{pmatrix}, \\quad
                    \\boldsymbol{a}_3 = \\begin{pmatrix} 3 \\\\ 5 \\\\ -7 \\\\ 8 \\\\ 5 \\end{pmatrix}, \\quad
                    \\boldsymbol{a}_4 = \\begin{pmatrix} 1 \\\\ -2 \\\\ 5 \\\\ -1 \\\\ -2 \\end{pmatrix}, \\quad
                    \\boldsymbol{a}_5 = \\begin{pmatrix} 0 \\\\ 1 \\\\ 2 \\\\ 1 \\\\ 1 \\end{pmatrix}
                    $$
                    
                    について、これらのベクトルの組における1次独立な最大個数を\\(r\\)とすると\\(r = \\) <input type="text" class="input-small" id="q1_rank">であり、
                    \\(r\\)個の1次独立なベクトルの組を前の方から選ぶと<br>
                    
                    <div class="answer-section">
                        <label><input type="checkbox" name="q1_basis" value="a1"> \\(\\boldsymbol{a}_1\\)</label>
                        <label><input type="checkbox" name="q1_basis" value="a2"> \\(\\boldsymbol{a}_2\\)</label>
                        <label><input type="checkbox" name="q1_basis" value="a3"> \\(\\boldsymbol{a}_3\\)</label>
                        <label><input type="checkbox" name="q1_basis" value="a4"> \\(\\boldsymbol{a}_4\\)</label>
                        <label><input type="checkbox" name="q1_basis" value="a5"> \\(\\boldsymbol{a}_5\\)</label>
                    </div>
                    となる。
                `,
                explanation:``,
                correct: {
                    type: "hybrid",
                    text: { id: "q1_rank", val: "3" }, 
                    checkbox: { name: "q1_basis", vals: ["a1", "a2", "a5"] } 
                },
                gradingType: "hybrid"
            }
        ],

        // --- 問2: 部分空間の次元 ---
        q2: [
            {
                html: `
                    \\(\\mathbb{R}[x]_{2}\\) の部分空間
                    $$ M=\\langle\\{1-x+2x^{2},-2x+x^{2},-1+4x-3x^{2},5x-2x^{2}\\}\\rangle $$
                    について、
                    \\( \\dim(M) = \\) <input type="text" class="input-small" id="q2_dim">
                    である。`,
                correct: { q2_dim: "3" },
                gradingType: "text_match"
            },
            {
                html: `
                    \\(\\mathbb{R}[x]_{2}\\) の部分空間
                    $$ M=\\langle\\{1+2x+x^{2}, 2+x-x^{2}, 4+5x+x^{2}\\}\\rangle $$
                    について、
                    \\( \\dim(M) = \\) <input type="text" class="input-small" id="q_ex2_dim">
                    である。`,
                correct: { q_ex2_dim: "2" },
                gradingType: "text_match"
            },
            {
                html: `
                    \\(\\mathbb{R}[x]_{2}\\) の部分空間
                    $$ M=\\langle\\{1+2x+x^{2}, 2+x-x^{2}, 4+5x+x^{2}\\}\\rangle $$
                    について、
                    \\( \\dim(M) = \\) <input type="text" class="input-small" id="q_ex2_dim">
                    である。`,
                correct: { q_ex2_dim: "2" },
                gradingType: "text_match"
            },
            {
                html: `
                    \\(\\mathbb{R}[x]_{2}\\) の部分空間
                    $$ M=\\langle\\{1+x, x+x^{2}, 1+x+x^{2}\\}\\rangle $$
                    について、
                    \\( \\dim(M) = \\) <input type="text" class="input-small" id="q_ex3_dim">
                    である。`,
                correct: { q_ex3_dim: "3" },
                gradingType: "text_match"
            },
            {
                html: `
                    \\(\\mathbb{R}[x]_{2}\\) の部分空間
                    $$ M=\\langle\\{1-x+2x^{2}, -2+2x-4x^{2}, 3-3x+6x^{2}\\}\\rangle $$
                    について、
                    \\( \\dim(M) = \\) <input type="text" class="input-small" id="q_ex4_dim">
                    である。`,
                correct: { q_ex4_dim: "1" },
                gradingType: "text_match"
            }
        ],

        // --- 問3: ランクと核 ---
        q3: [
            {
                html: `
                    $$ T:\\mathbb{R}^{4}\\rightarrow\\mathbb{R}^{3}:T\\left(\\begin{bmatrix}x_{1}\\\\ x_{2}\\\\ x_{3}\\\\ x_{4}\\end{bmatrix}\\right)=\\begin{bmatrix}x_{1}-3x_{2}-4x_{3}-3x_{4}\\\\ -2x_{1}+7x_{2}+9x_{3}+6x_{4}\\\\ x_{2}+x_{3}+x_{4}\\end{bmatrix} $$
                    のとき、<br>
                    \\( \\text{rank}(T) = \\) <input type="text" class="input-small" id="q3_rank">, 
                    \\( \\text{null}(T) = \\) <input type="text" class="input-small" id="q3_null">
                    である。`,
                correct: { q3_rank: "3", q3_null: "1" },
                gradingType: "text_match"
            },
            {
                html: `
                    $$ T:\\mathbb{R}^{5}\\rightarrow\\mathbb{R}^{3}:T\\left(\\begin{bmatrix}x_{1}\\\\ x_{2}\\\\ x_{3}\\\\ x_{4}\\\\ x_{5}\\end{bmatrix}\\right)=\\begin{bmatrix}2x_{1}-x_{2}+x_{3}+5x_{4}\\\\ x_{1}+3x_{2}+4x_{3}-x_{4}+7x_{5}\\\\ x_{1}+x_{3}+2x_{4}+x_{5}\\end{bmatrix} $$
                    のとき、<br>
                    \\( \\text{rank}(T) = \\) <input type="text" class="input-small" id="q3_rank">, 
                    \\( \\text{null}(T) = \\) <input type="text" class="input-small" id="q3_null">
                    である。`,
                correct: { q3_rank: "2", q3_null: "3" },
                gradingType: "text_match"
            },
            {
                html: `
                    $$ T:\\mathbb{R}^{4}\\rightarrow\\mathbb{R}^{3}:T\\left(\\begin{bmatrix}x_{1}\\\\ x_{2}\\\\ x_{3}\\\\ x_{4}\\end{bmatrix}\\right)=\\begin{bmatrix}2x_{1}+4x_{2}+3x_{3}+x_{4}\\\\ x_{3}+x_{4}\\\\ x_{1}+2x_{2}+x_{3}\\end{bmatrix} $$
                    のとき、<br>
                    \\( \\text{rank}(T) = \\) <input type="text" class="input-small" id="q3_rank">, 
                    \\( \\text{null}(T) = \\) <input type="text" class="input-small" id="q3_null">
                    である。`,
                correct: { q3_rank: "2", q3_null: "2" },
                gradingType: "text_match"
            },
            {
                html: `
                    $$ T:\\mathbb{R}^{5}\\rightarrow\\mathbb{R}^{4}:T\\left(\\begin{bmatrix}x_{1}\\\\ x_{2}\\\\ x_{3}\\\\ x_{4}\\\\ x_{5}\\end{bmatrix}\\right)=\\begin{bmatrix}x_{1}-2x_{2}+x_{3}\\\\ x_{1}-2x_{2}+x_{3}+x_{5}\\\\ -2x_{1}+4x_{2}-2x_{3}+2x_{5}\\\\ x_{1}-x_{2}+2x_{3}+x_{4}+x_{5}\\end{bmatrix} $$
                    のとき、<br>
                    \\( \\text{rank}(T) = \\) <input type="text" class="input-small" id="q3_rank">, 
                    \\( \\text{null}(T) = \\) <input type="text" class="input-small" id="q3_null">
                    である。`,
                correct: { q3_rank: "3", q3_null: "2" },
                gradingType: "text_match"
            },
            {
                html: `
                    $$ T:\\mathbb{R}^{5}\\rightarrow\\mathbb{R}^{4}:T\\left(\\begin{bmatrix}x_{1}\\\\ x_{2}\\\\ x_{3}\\\\ x_{4}\\\\ x_{5}\\end{bmatrix}\\right)=\\begin{bmatrix}x_{2}+x_{3}+x_{4}+3x_{5}\\\\ -x_{1}-2x_{2}-5x_{3}-x_{4}-4x_{5}\\\\ x_{1}+x_{2}+4x_{3}+x_{5}\\\\ x_{1}-x_{2}+2x_{3}-2x_{4}-5x_{5}\\end{bmatrix} $$
                    のとき、<br>
                    \\( \\text{rank}(T) = \\) <input type="text" class="input-small" id="q3_rank">, 
                    \\( \\text{null}(T) = \\) <input type="text" class="input-small" id="q3_null">
                    である。`,
                correct: { q3_rank: "2", q3_null: "3" },
                gradingType: "text_match"
            }
        ],

        // --- 問4: 表現行列 ---
        q4: [
            {
                html: `
                    \\(\\mathbb{R}^{3}\\) 上の線形変換
                    $$ T\\left(\\begin{bmatrix}x_{1}\\\\ x_{2}\\\\ x_{3}\\end{bmatrix}\\right) = \\begin{bmatrix}1&1&0\\\\ 0&1&1\\\\ 1&0&1\\end{bmatrix} \\begin{bmatrix}x_{1}\\\\ x_{2}\\\\ x_{3}\\end{bmatrix} $$
                    について、\\(\\mathbb{R}^{3}\\) の基底
                    $$ \\left\\{ \\begin{bmatrix}2\\\\ 1\\\\ -1\\end{bmatrix}, \\begin{bmatrix}1\\\\ -1\\\\ -1\\end{bmatrix}, \\begin{bmatrix}2\\\\ 2\\\\ -1\\end{bmatrix} \\right\\} $$
                    に関する \\(T\\) の表現行列を \\(A = [a_{ij}]\\) とするとき、各成分を求めよ。
                    <div class="answer-section">
                        \\(A = \\)
                        <table class="matrix-table">
                            <tr>
                                <td><input type="text" class="input-small" id="q4_0_0"></td>
                                <td><input type="text" class="input-small" id="q4_0_1"></td>
                                <td><input type="text" class="input-small" id="q4_0_2"></td>
                            </tr>
                            <tr>
                                <td><input type="text" class="input-small" id="q4_1_0"></td>
                                <td><input type="text" class="input-small" id="q4_1_1"></td>
                                <td><input type="text" class="input-small" id="q4_1_2"></td>
                            </tr>
                            <tr>
                                <td><input type="text" class="input-small" id="q4_2_0"></td>
                                <td><input type="text" class="input-small" id="q4_2_1"></td>
                                <td><input type="text" class="input-small" id="q4_2_2"></td>
                            </tr>
                        </table>
                    </div>`,
                correct: {
                    q4_0_0: "13", q4_0_1: "2", q4_0_2: "15",
                    q4_1_0: "-5", q4_1_1: "0", q4_1_2: "-6",
                    q4_2_0: "-9", q4_2_1: "-2", q4_2_2: "-10"
                },
                gradingType: "text_match"
            },
            {
                html: `
                    \\(\\mathbb{R}^{3}\\) 上の線形変換
                    $$ T\\left(\\begin{bmatrix}x_{1}\\\\ x_{2}\\\\ x_{3}\\end{bmatrix}\\right) = \\begin{bmatrix}1&1&1\\\\ 0&1&0\\\\ 1&0&2\\end{bmatrix} \\begin{bmatrix}x_{1}\\\\ x_{2}\\\\ x_{3}\\end{bmatrix} $$
                    について、\\(\\mathbb{R}^{3}\\) の基底
                    $$ \\left\\{ \\begin{bmatrix}1\\\\ 1\\\\ 0\\end{bmatrix}, \\begin{bmatrix}0\\\\ 1\\\\ 1\\end{bmatrix}, \\begin{bmatrix}0\\\\ 0\\\\ 1\\end{bmatrix} \\right\\} $$
                    に関する \\(T\\) の表現行列を \\(A = [a_{ij}]\\) とするとき、各成分を求めよ。
                    <div class="answer-section">
                        \\(A = \\)
                        <table class="matrix-table">
                            <tr>
                                <td><input type="text" class="input-small" id="q4_0_0"></td>
                                <td><input type="text" class="input-small" id="q4_0_1"></td>
                                <td><input type="text" class="input-small" id="q4_0_2"></td>
                            </tr>
                            <tr>
                                <td><input type="text" class="input-small" id="q4_1_0"></td>
                                <td><input type="text" class="input-small" id="q4_1_1"></td>
                                <td><input type="text" class="input-small" id="q4_1_2"></td>
                            </tr>
                            <tr>
                                <td><input type="text" class="input-small" id="q4_2_0"></td>
                                <td><input type="text" class="input-small" id="q4_2_1"></td>
                                <td><input type="text" class="input-small" id="q4_2_2"></td>
                            </tr>
                        </table>
                    </div>`,
                correct: {
                    q4_0_0: "2", q4_0_1: "2", q4_0_2: "1",
                    q4_1_0: "-1", q4_1_1: "-1", q4_1_2: "-1",
                    q4_2_0: "2", q4_2_1: "3", q4_2_2: "3"
                },
                gradingType: "text_match"
            },
            {
                html: `
                    \\(\\mathbb{R}^{3}\\) 上の線形変換
                    $$ T\\left(\\begin{bmatrix}x_{1}\\\\ x_{2}\\\\ x_{3}\\end{bmatrix}\\right) = \\begin{bmatrix}1&1&0\\\\ 0&1&1\\\\ 1&0&1\\end{bmatrix} \\begin{bmatrix}x_{1}\\\\ x_{2}\\\\ x_{3}\\end{bmatrix} $$
                    について、\\(\\mathbb{R}^{3}\\) の基底
                    $$ \\left\\{ \\begin{bmatrix}1\\\\ 0\\\\ 2\\end{bmatrix}, \\begin{bmatrix}1\\\\ -1\\\\ -1\\end{bmatrix}, \\begin{bmatrix}-1\\\\ 1\\\\ 0\\end{bmatrix} \\right\\} $$
                    に関する \\(T\\) の表現行列を \\(A = [a_{ij}]\\) とするとき、各成分を求めよ。
                    <div class="answer-section">
                        \\(A = \\)
                        <table class="matrix-table">
                            <tr>
                                <td><input type="text" class="input-small" id="q4_0_0"></td>
                                <td><input type="text" class="input-small" id="q4_0_1"></td>
                                <td><input type="text" class="input-small" id="q4_0_2"></td>
                            </tr>
                            <tr>
                                <td><input type="text" class="input-small" id="q4_1_0"></td>
                                <td><input type="text" class="input-small" id="q4_1_1"></td>
                                <td><input type="text" class="input-small" id="q4_1_2"></td>
                            </tr>
                            <tr>
                                <td><input type="text" class="input-small" id="q4_2_0"></td>
                                <td><input type="text" class="input-small" id="q4_2_1"></td>
                                <td><input type="text" class="input-small" id="q4_2_2"></td>
                            </tr>
                        </table>
                    </div>`,
                correct: {
                    q4_0_0: "3", q4_0_1: "0", q4_0_2: "1",
                    q4_1_0: "-3", q4_1_1: "2", q4_1_2: "-3",
                    q4_2_0: "-1", q4_2_1: "2", q4_2_2: "-2"
                },
                gradingType: "text_match"
            },
            {
                html: `
                    \\(\\mathbb{R}^{3}\\) 上の線形変換
                    $$ T\\left(\\begin{bmatrix}x_{1}\\\\ x_{2}\\\\ x_{3}\\end{bmatrix}\\right) = \\begin{bmatrix}2&0&1\\\\ -1&-3&1\\\\ 2&5&2\\end{bmatrix} \\begin{bmatrix}x_{1}\\\\ x_{2}\\\\ x_{3}\\end{bmatrix} $$
                    について、\\(\\mathbb{R}^{3}\\) の基底
                    $$ \\left\\{ \\begin{bmatrix}1\\\\ 1\\\\ 0\\end{bmatrix}, \\begin{bmatrix}2\\\\ 1\\\\ 1\\end{bmatrix}, \\begin{bmatrix}3\\\\ 1\\\\ 1\\end{bmatrix} \\right\\} $$
                    に関する \\(T\\) の表現行列を \\(A = [a_{ij}]\\) とするとき、各成分を求めよ。
                    <div class="answer-section">
                        \\(A = \\)
                        <table class="matrix-table">
                            <tr>
                                <td><input type="text" class="input-small" id="q4_0_0"></td>
                                <td><input type="text" class="input-small" id="q4_0_1"></td>
                                <td><input type="text" class="input-small" id="q4_0_2"></td>
                            </tr>
                            <tr>
                                <td><input type="text" class="input-small" id="q4_1_0"></td>
                                <td><input type="text" class="input-small" id="q4_1_1"></td>
                                <td><input type="text" class="input-small" id="q4_1_2"></td>
                            </tr>
                            <tr>
                                <td><input type="text" class="input-small" id="q4_2_0"></td>
                                <td><input type="text" class="input-small" id="q4_2_1"></td>
                                <td><input type="text" class="input-small" id="q4_2_2"></td>
                            </tr>
                        </table>
                    </div>`,
                correct: {
                    q4_0_0: "-11", q4_0_1: "-15", q4_0_2: "-18",
                    q4_1_0: "8", q4_1_1: "13", q4_1_2: "14",
                    q4_2_0: "-1", q4_2_1: "-2", q4_2_2: "-1"
                },
                gradingType: "text_match"
            },
            {
                html: `
                    \\(\\mathbb{R}^{3}\\) 上の線形変換
                    $$ T\\left(\\begin{bmatrix}x_{1}\\\\ x_{2}\\\\ x_{3}\\end{bmatrix}\\right) = \\begin{bmatrix}1&-1&0\\\\ 1&-2&1\\\\ -2&4&3\\end{bmatrix} \\begin{bmatrix}x_{1}\\\\ x_{2}\\\\ x_{3}\\end{bmatrix} $$
                    について、\\(\\mathbb{R}^{3}\\) の基底
                    $$ \\left\\{ \\begin{bmatrix}0\\\\ 1\\\\ 0\\end{bmatrix}, \\begin{bmatrix}1\\\\ 0\\\\ 1\\end{bmatrix}, \\begin{bmatrix}2\\\\ 1\\\\ 1\\end{bmatrix} \\right\\} $$
                    に関する \\(T\\) の表現行列を \\(A = [a_{ij}]\\) とするとき、各成分を求めよ。
                    <div class="answer-section">
                        \\(A = \\)
                        <table class="matrix-table">
                            <tr>
                                <td><input type="text" class="input-small" id="q4_0_0"></td>
                                <td><input type="text" class="input-small" id="q4_0_1"></td>
                                <td><input type="text" class="input-small" id="q4_0_2"></td>
                            </tr>
                            <tr>
                                <td><input type="text" class="input-small" id="q4_1_0"></td>
                                <td><input type="text" class="input-small" id="q4_1_1"></td>
                                <td><input type="text" class="input-small" id="q4_1_2"></td>
                            </tr>
                            <tr>
                                <td><input type="text" class="input-small" id="q4_2_0"></td>
                                <td><input type="text" class="input-small" id="q4_2_1"></td>
                                <td><input type="text" class="input-small" id="q4_2_2"></td>
                            </tr>
                        </table>
                    </div>`,
                correct: {
                    q4_0_0: "3", q4_0_1: "2", q4_0_2: "3",
                    q4_1_0: "9", q4_1_1: "1", q4_1_2: "5",
                    q4_2_0: "-5", q4_2_1: "0", q4_2_2: "-2"
                },
                gradingType: "text_match"
            }
        ],

        // --- 問5: 内積 ---
        q5: [
            {
                html: `
                    \\(\\mathbb{R}[x]_{2}\\) において、内積 \\( \\int_{-1}^{1}f(x)g(x)dx \\) を考える。このとき、<br>
                    \\( f(x)=1+2x \\), \\( g(x)=-1+x+ax^{2} \\)<br>
                    が直交するように \\( a \\) を定めると、<br>
                    \\( a = \\) <input type="text" class="input-small" id="q5_a">
                    である。`,
                correct: { q5_a: "1" },
                gradingType: "text_match"
            },
            {
                html: `
                    \\(\\mathbb{R}[x]_{2}\\) において、内積 \\( \\int_{-1}^{1}f(x)g(x)dx \\) を考える。このとき、<br>
                    \\( f(x)=1 \\), \\( g(x)=3x^{2}+a \\)<br>
                    が直交するように \\( a \\) を定めると、<br>
                    \\( a = \\) <input type="text" class="input-small" id="q_ex1">
                    である。`,
                correct: { q_ex1: "-1" },
                gradingType: "text_match"
            },
            {
                html: `
                    \\(\\mathbb{R}[x]_{3}\\) において、内積 \\( \\int_{-1}^{1}f(x)g(x)dx \\) を考える。このとき、<br>
                    \\( f(x)=x \\), \\( g(x)=5x^{3}+ax \\)<br>
                    が直交するように \\( a \\) を定めると、<br>
                    \\( a = \\) <input type="text" class="input-small" id="q_ex2">
                    である。`,
                correct: { q_ex2: "-3" },
                gradingType: "text_match"
            },
            {
                html: `
                    \\(\\mathbb{R}[x]_{1}\\) において、内積 \\( \\int_{-1}^{1}f(x)g(x)dx \\) を考える。このとき、<br>
                    \\( f(x)=3x+1 \\), \\( g(x)=x+a \\)<br>
                    が直交するように \\( a \\) を定めると、<br>
                    \\( a = \\) <input type="text" class="input-small" id="q_ex3">
                    である。`,
                correct: { q_ex3: "-1" },
                gradingType: "text_match"
            },
            {
                html: `
                    \\(\\mathbb{R}[x]_{2}\\) において、内積 \\( \\int_{-1}^{1}f(x)g(x)dx \\) を考える。このとき、<br>
                    \\( f(x)=1+x \\), \\( g(x)=1-x+ax^{2} \\)<br>
                    が直交するように \\( a \\) を定めると、<br>
                    \\( a = \\) <input type="text" class="input-small" id="q_ex4">
                    である。`,
                correct: { q_ex4: "-2" },
                gradingType: "text_match"
            }
        ],

        // --- 問6: グラム・シュミット ---
        q6: [
            {
                html: `
                    \\(\\mathbb{R}^{3}\\) の基底 \\( \\left\\{ \\begin{bmatrix}1\\\\ -2\\\\ 2\\end{bmatrix}, \\begin{bmatrix}0\\\\ 1\\\\ -1\\end{bmatrix}, \\begin{bmatrix}1\\\\ 0\\\\ 1\\end{bmatrix} \\right\\} \\) をシュミットの方法で正規直交化したものを
                    $$ \\frac{1}{\\sqrt{a}}\\begin{bmatrix}a_{1}\\\\ a_{2}\\\\ a_{3}\\end{bmatrix}, \\frac{1}{\\sqrt{b}}\\begin{bmatrix}b_{1}\\\\ b_{2}\\\\ b_{3}\\end{bmatrix}, \\frac{1}{\\sqrt{c}}\\begin{bmatrix}c_{1}\\\\ c_{2}\\\\ c_{3}\\end{bmatrix} $$
                    とすると、<br><br>

                    <div class="vector-row">
                        \\( a = \\) <input type="text" class="input-small" id="q6_a"> , &nbsp;
                        \\( \\begin{bmatrix}a_1\\\\a_2\\\\a_3\\end{bmatrix} = \\)
                        <div class="vector-bracket-container"><div class="bracket-left"></div><div class="vector-inputs">
                            <input type="text" id="q6_a1"><input type="text" id="q6_a2"><input type="text" id="q6_a3">
                        </div><div class="bracket-right"></div></div>
                    </div>
                    <div class="vector-row">
                        \\( b = \\) <input type="text" class="input-small" id="q6_b"> , &nbsp;
                        \\( \\begin{bmatrix}b_1\\\\b_2\\\\b_3\\end{bmatrix} = \\)
                        <div class="vector-bracket-container"><div class="bracket-left"></div><div class="vector-inputs">
                            <input type="text" id="q6_b1"><input type="text" id="q6_b2"><input type="text" id="q6_b3">
                        </div><div class="bracket-right"></div></div>
                    </div>
                    <div class="vector-row">
                        \\( c = \\) <input type="text" class="input-small" id="q6_c"> , &nbsp;
                        \\( \\begin{bmatrix}c_1\\\\c_2\\\\c_3\\end{bmatrix} = \\)
                        <div class="vector-bracket-container"><div class="bracket-left"></div><div class="vector-inputs">
                            <input type="text" id="q6_c1"><input type="text" id="q6_c2"><input type="text" id="q6_c3">
                        </div><div class="bracket-right"></div></div>
                    </div>`,
                correct: {
                    q6_a: "9", q6_a1: "1", q6_a2: "-2", q6_a3: "2",
                    q6_b: "18", q6_b1: "4", q6_b2: "1", q6_b3: "-1",
                    q6_c: "2", q6_c1: "0", q6_c2: "1", q6_c3: "1"
                },
                gradingType: "text_match"
            },
            {
                html: `
                    \\(\\mathbb{R}^{3}\\) の基底 \\( \\left\\{ \\begin{bmatrix}1\\\\ 1\\\\ 1\\end{bmatrix}, \\begin{bmatrix}1\\\\ -1\\\\ 2\\end{bmatrix}, \\begin{bmatrix}-1\\\\ 1\\\\ 3\\end{bmatrix} \\right\\} \\) をシュミットの方法で正規直交化したものを
                    $$ \\frac{1}{\\sqrt{a}}\\begin{bmatrix}a_{1}\\\\ a_{2}\\\\ a_{3}\\end{bmatrix}, \\frac{1}{\\sqrt{b}}\\begin{bmatrix}b_{1}\\\\ b_{2}\\\\ b_{3}\\end{bmatrix}, \\frac{1}{\\sqrt{c}}\\begin{bmatrix}c_{1}\\\\ c_{2}\\\\ c_{3}\\end{bmatrix} $$
                    とすると、<br><br>

                    <div class="vector-row">
                        \\( a = \\) <input type="text" class="input-small" id="q6_a"> , &nbsp;
                        \\( \\begin{bmatrix}a_1\\\\a_2\\\\a_3\\end{bmatrix} = \\)
                        <div class="vector-bracket-container"><div class="bracket-left"></div><div class="vector-inputs">
                            <input type="text" id="q6_a1"><input type="text" id="q6_a2"><input type="text" id="q6_a3">
                        </div><div class="bracket-right"></div></div>
                    </div>
                    <div class="vector-row">
                        \\( b = \\) <input type="text" class="input-small" id="q6_b"> , &nbsp;
                        \\( \\begin{bmatrix}b_1\\\\b_2\\\\b_3\\end{bmatrix} = \\)
                        <div class="vector-bracket-container"><div class="bracket-left"></div><div class="vector-inputs">
                            <input type="text" id="q6_b1"><input type="text" id="q6_b2"><input type="text" id="q6_b3">
                        </div><div class="bracket-right"></div></div>
                    </div>
                    <div class="vector-row">
                        \\( c = \\) <input type="text" class="input-small" id="q6_c"> , &nbsp;
                        \\( \\begin{bmatrix}c_1\\\\c_2\\\\c_3\\end{bmatrix} = \\)
                        <div class="vector-bracket-container"><div class="bracket-left"></div><div class="vector-inputs">
                            <input type="text" id="q6_c1"><input type="text" id="q6_c2"><input type="text" id="q6_c3">
                        </div><div class="bracket-right"></div></div>
                    </div>`,
                correct: {
                    q6_a: "3", q6_a1: "1", q6_a2: "1", q6_a3: "1",
                    q6_b: "42", q6_b1: "1", q6_b2: "-5", q6_b3: "4",
                    q6_c: "14", q6_c1: "-3", q6_c2: "1", q6_c3: "2"
                },
                gradingType: "text_match"
            },
            {
                html: `
                    \\(\\mathbb{R}^{3}\\) の基底 \\( \\left\\{ \\begin{bmatrix}1\\\\ 1\\\\ 0\\end{bmatrix}, \\begin{bmatrix}1\\\\ 3\\\\ 1\\end{bmatrix}, \\begin{bmatrix}2\\\\ -1\\\\ 1\\end{bmatrix} \\right\\} \\) をシュミットの方法で正規直交化したものを
                    $$ \\frac{1}{\\sqrt{a}}\\begin{bmatrix}a_{1}\\\\ a_{2}\\\\ a_{3}\\end{bmatrix}, \\frac{1}{\\sqrt{b}}\\begin{bmatrix}b_{1}\\\\ b_{2}\\\\ b_{3}\\end{bmatrix}, \\frac{1}{\\sqrt{c}}\\begin{bmatrix}c_{1}\\\\ c_{2}\\\\ c_{3}\\end{bmatrix} $$
                    とすると、<br><br>

                    <div class="vector-row">
                        \\( a = \\) <input type="text" class="input-small" id="q6_a"> , &nbsp;
                        \\( \\begin{bmatrix}a_1\\\\a_2\\\\a_3\\end{bmatrix} = \\)
                        <div class="vector-bracket-container"><div class="bracket-left"></div><div class="vector-inputs">
                            <input type="text" id="q6_a1"><input type="text" id="q6_a2"><input type="text" id="q6_a3">
                        </div><div class="bracket-right"></div></div>
                    </div>
                    <div class="vector-row">
                        \\( b = \\) <input type="text" class="input-small" id="q6_b"> , &nbsp;
                        \\( \\begin{bmatrix}b_1\\\\b_2\\\\b_3\\end{bmatrix} = \\)
                        <div class="vector-bracket-container"><div class="bracket-left"></div><div class="vector-inputs">
                            <input type="text" id="q6_b1"><input type="text" id="q6_b2"><input type="text" id="q6_b3">
                        </div><div class="bracket-right"></div></div>
                    </div>
                    <div class="vector-row">
                        \\( c = \\) <input type="text" class="input-small" id="q6_c"> , &nbsp;
                        \\( \\begin{bmatrix}c_1\\\\c_2\\\\c_3\\end{bmatrix} = \\)
                        <div class="vector-bracket-container"><div class="bracket-left"></div><div class="vector-inputs">
                            <input type="text" id="q6_c1"><input type="text" id="q6_c2"><input type="text" id="q6_c3">
                        </div><div class="bracket-right"></div></div>
                    </div>`,
                correct: {
                    q6_a: "2", q6_a1: "1", q6_a2: "1", q6_a3: "0",
                    q6_b: "3", q6_b1: "-1", q6_b2: "1", q6_b3: "1",
                    q6_c: "6", q6_c1: "1", q6_c2: "-1", q6_c3: "2"
                },
                gradingType: "text_match"
            },
            {
                html: `
                    \\(\\mathbb{R}^{3}\\) の基底 \\( \\left\\{ \\begin{bmatrix}1\\\\ 1\\\\ 0\\end{bmatrix}, \\begin{bmatrix}1\\\\ 1\\\\ 1\\end{bmatrix}, \\begin{bmatrix}1\\\\ 0\\\\ 0\\end{bmatrix} \\right\\} \\) をシュミットの方法で正規直交化したものを
                    $$ \\frac{1}{\\sqrt{a}}\\begin{bmatrix}a_{1}\\\\ a_{2}\\\\ a_{3}\\end{bmatrix}, \\frac{1}{\\sqrt{b}}\\begin{bmatrix}b_{1}\\\\ b_{2}\\\\ b_{3}\\end{bmatrix}, \\frac{1}{\\sqrt{c}}\\begin{bmatrix}c_{1}\\\\ c_{2}\\\\ c_{3}\\end{bmatrix} $$
                    とすると、<br><br>

                    <div class="vector-row">
                        \\( a = \\) <input type="text" class="input-small" id="q6_a"> , &nbsp;
                        \\( \\begin{bmatrix}a_1\\\\a_2\\\\a_3\\end{bmatrix} = \\)
                        <div class="vector-bracket-container"><div class="bracket-left"></div><div class="vector-inputs">
                            <input type="text" id="q6_a1"><input type="text" id="q6_a2"><input type="text" id="q6_a3">
                        </div><div class="bracket-right"></div></div>
                    </div>
                    <div class="vector-row">
                        \\( b = \\) <input type="text" class="input-small" id="q6_b"> , &nbsp;
                        \\( \\begin{bmatrix}b_1\\\\b_2\\\\b_3\\end{bmatrix} = \\)
                        <div class="vector-bracket-container"><div class="bracket-left"></div><div class="vector-inputs">
                            <input type="text" id="q6_b1"><input type="text" id="q6_b2"><input type="text" id="q6_b3">
                        </div><div class="bracket-right"></div></div>
                    </div>
                    <div class="vector-row">
                        \\( c = \\) <input type="text" class="input-small" id="q6_c"> , &nbsp;
                        \\( \\begin{bmatrix}c_1\\\\c_2\\\\c_3\\end{bmatrix} = \\)
                        <div class="vector-bracket-container"><div class="bracket-left"></div><div class="vector-inputs">
                            <input type="text" id="q6_c1"><input type="text" id="q6_c2"><input type="text" id="q6_c3">
                        </div><div class="bracket-right"></div></div>
                    </div>`,
                correct: {
                    q6_a: "2", q6_a1: "1", q6_a2: "1", q6_a3: "0",
                    q6_b: "1", q6_b1: "0", q6_b2: "0", q6_b3: "1",
                    q6_c: "2", q6_c1: "1", q6_c2: "-1", q6_c3: "0"
                },
                gradingType: "text_match"
            },
            {
                html: `
                    \\(\\mathbb{R}^{3}\\) の基底 \\( \\left\\{ \\begin{bmatrix}2\\\\ 1\\\\ 1\\end{bmatrix}, \\begin{bmatrix}1\\\\ 0\\\\ 1\\end{bmatrix}, \\begin{bmatrix}1\\\\ 2\\\\ 1\\end{bmatrix} \\right\\} \\) をシュミットの方法で正規直交化したものを
                    $$ \\frac{1}{\\sqrt{a}}\\begin{bmatrix}a_{1}\\\\ a_{2}\\\\ a_{3}\\end{bmatrix}, \\frac{1}{\\sqrt{b}}\\begin{bmatrix}b_{1}\\\\ b_{2}\\\\ b_{3}\\end{bmatrix}, \\frac{1}{\\sqrt{c}}\\begin{bmatrix}c_{1}\\\\ c_{2}\\\\ c_{3}\\end{bmatrix} $$
                    とすると、<br><br>

                    <div class="vector-row">
                        \\( a = \\) <input type="text" class="input-small" id="q6_a"> , &nbsp;
                        \\( \\begin{bmatrix}a_1\\\\a_2\\\\a_3\\end{bmatrix} = \\)
                        <div class="vector-bracket-container"><div class="bracket-left"></div><div class="vector-inputs">
                            <input type="text" id="q6_a1"><input type="text" id="q6_a2"><input type="text" id="q6_a3">
                        </div><div class="bracket-right"></div></div>
                    </div>
                    <div class="vector-row">
                        \\( b = \\) <input type="text" class="input-small" id="q6_b"> , &nbsp;
                        \\( \\begin{bmatrix}b_1\\\\b_2\\\\b_3\\end{bmatrix} = \\)
                        <div class="vector-bracket-container"><div class="bracket-left"></div><div class="vector-inputs">
                            <input type="text" id="q6_b1"><input type="text" id="q6_b2"><input type="text" id="q6_b3">
                        </div><div class="bracket-right"></div></div>
                    </div>
                    <div class="vector-row">
                        \\( c = \\) <input type="text" class="input-small" id="q6_c"> , &nbsp;
                        \\( \\begin{bmatrix}c_1\\\\c_2\\\\c_3\\end{bmatrix} = \\)
                        <div class="vector-bracket-container"><div class="bracket-left"></div><div class="vector-inputs">
                            <input type="text" id="q6_c1"><input type="text" id="q6_c2"><input type="text" id="q6_c3">
                        </div><div class="bracket-right"></div></div>
                    </div>`,
                correct: {
                    q6_a: "6", q6_a1: "2", q6_a2: "1", q6_a3: "1",
                    q6_b: "2", q6_b1: "0", q6_b2: "-1", q6_b3: "1",
                    q6_c: "3", q6_c1: "-1", q6_c2: "1", q6_c3: "1"
                },
                gradingType: "text_match"
            }
        ],

        // --- 問7: 対角化 ---
        q7: [
            {
                html: `
                    実対称行列 \\( A=\\begin{bmatrix}0&0&1\\\\ 0&0&0\\\\ 1&0&0\\end{bmatrix} \\) の固有値を \\(\\lambda_1 \\le \\lambda_2 \\le \\lambda_3\\) とする。<br>
                    \\(\\lambda_1 = \\) <input type="text" class="input-small" id="q7_lam1">, 
                    \\(\\lambda_2 = \\) <input type="text" class="input-small" id="q7_lam2">, 
                    \\(\\lambda_3 = \\) <input type="text" class="input-small" id="q7_lam3"> <br><br>
                    
                    直交行列 \\(P=[p_1 p_2 p_3]\\) によって対角化するとき、各固有ベクトルを<br>
                    \\( p_{1}=\\frac{1}{\\sqrt{k_{1}}}\\begin{bmatrix}p_{11}\\\\ p_{21}\\\\ 1\\end{bmatrix}, p_{2}=\\frac{1}{\\sqrt{k_{2}}}\\begin{bmatrix}p_{12}\\\\ 1\\\\ p_{32}\\end{bmatrix}, p_{3}=\\frac{1}{\\sqrt{k_{3}}}\\begin{bmatrix}p_{13}\\\\ p_{23}\\\\ 1\\end{bmatrix} \\) とする。<br><br>
                    
                    \\(k_1=\\)<input type="text" class="input-mini" id="q7_k1">, \\(p_{11}=\\)<input type="text" class="input-mini" id="q7_p11">, \\(p_{21}=\\)<input type="text" class="input-mini" id="q7_p21"><br>
                    \\(k_2=\\)<input type="text" class="input-mini" id="q7_k2">, \\(p_{12}=\\)<input type="text" class="input-mini" id="q7_p12">, \\(p_{32}=\\)<input type="text" class="input-mini" id="q7_p32"><br>
                    \\(k_3=\\)<input type="text" class="input-mini" id="q7_k3">, \\(p_{13}=\\)<input type="text" class="input-mini" id="q7_p13">, \\(p_{23}=\\)<input type="text" class="input-mini" id="q7_p23">`,
                correct: {
                    q7_lam1: "-1", q7_lam2: "0", q7_lam3: "1",
                    q7_k1: "2", q7_p11: "-1", q7_p21: "0",
                    q7_k2: "1", q7_p12: "0", q7_p32: "0",
                    q7_k3: "2", q7_p13: "1", q7_p23: "0"
                },
                gradingType: "text_match"
            },
            {
                html: `
                    実対称行列 \\( A=\\begin{bmatrix}1&0&2\\\\ 0&2&0\\\\ 2&0&1\\end{bmatrix} \\) の固有値を \\(\\lambda_1 \\le \\lambda_2 \\le \\lambda_3\\) とする。<br>
                    \\(\\lambda_1 = \\) <input type="text" class="input-small" id="q_ex1_lam1">, 
                    \\(\\lambda_2 = \\) <input type="text" class="input-small" id="q_ex1_lam2">, 
                    \\(\\lambda_3 = \\) <input type="text" class="input-small" id="q_ex1_lam3"> <br><br>
        
                    直交行列 \\(P=[p_1 p_2 p_3]\\) によって対角化するとき、各固有ベクトルを<br>
                    \\( p_{1}=\\frac{1}{\\sqrt{k_{1}}}\\begin{bmatrix}p_{11}\\\\ p_{21}\\\\ 1\\end{bmatrix}, p_{2}=\\frac{1}{\\sqrt{k_{2}}}\\begin{bmatrix}p_{12}\\\\ 1\\\\ p_{32}\\end{bmatrix}, p_{3}=\\frac{1}{\\sqrt{k_{3}}}\\begin{bmatrix}p_{13}\\\\ p_{23}\\\\ 1\\end{bmatrix} \\) とする。<br><br>
        
                    \\(k_1=\\)<input type="text" class="input-mini" id="q_ex1_k1">, \\(p_{11}=\\)<input type="text" class="input-mini" id="q_ex1_p11">, \\(p_{21}=\\)<input type="text" class="input-mini" id="q_ex1_p21"><br>
                    \\(k_2=\\)<input type="text" class="input-mini" id="q_ex1_k2">, \\(p_{12}=\\)<input type="text" class="input-mini" id="q_ex1_p12">, \\(p_{32}=\\)<input type="text" class="input-mini" id="q_ex1_p32"><br>
                    \\(k_3=\\)<input type="text" class="input-mini" id="q_ex1_k3">, \\(p_{13}=\\)<input type="text" class="input-mini" id="q_ex1_p13">, \\(p_{23}=\\)<input type="text" class="input-mini" id="q_ex1_p23">`,
                correct: {
                    q_ex1_lam1: "-1", q_ex1_lam2: "2", q_ex1_lam3: "3",
                    q_ex1_k1: "2", q_ex1_p11: "-1", q_ex1_p21: "0",
                    q_ex1_k2: "1", q_ex1_p12: "0", q_ex1_p32: "0",
                    q_ex1_k3: "2", q_ex1_p13: "1", q_ex1_p23: "0"
                },
                gradingType: "text_match"
            },
            {
                html: `
                    実対称行列 \\( A=\\begin{bmatrix}0&0&2\\\\ 0&1&0\\\\ 2&0&0\\end{bmatrix} \\) の固有値を \\(\\lambda_1 \\le \\lambda_2 \\le \\lambda_3\\) とする。<br>
                    \\(\\lambda_1 = \\) <input type="text" class="input-small" id="q_ex2_lam1">, 
                    \\(\\lambda_2 = \\) <input type="text" class="input-small" id="q_ex2_lam2">, 
                    \\(\\lambda_3 = \\) <input type="text" class="input-small" id="q_ex2_lam3"> <br><br>
        
                    直交行列 \\(P=[p_1 p_2 p_3]\\) によって対角化するとき、各固有ベクトルを<br>
                    \\( p_{1}=\\frac{1}{\\sqrt{k_{1}}}\\begin{bmatrix}p_{11}\\\\ p_{21}\\\\ 1\\end{bmatrix}, p_{2}=\\frac{1}{\\sqrt{k_{2}}}\\begin{bmatrix}p_{12}\\\\ 1\\\\ p_{32}\\end{bmatrix}, p_{3}=\\frac{1}{\\sqrt{k_{3}}}\\begin{bmatrix}p_{13}\\\\ p_{23}\\\\ 1\\end{bmatrix} \\) とする。<br><br>
        
                    \\(k_1=\\)<input type="text" class="input-mini" id="q_ex2_k1">, \\(p_{11}=\\)<input type="text" class="input-mini" id="q_ex2_p11">, \\(p_{21}=\\)<input type="text" class="input-mini" id="q_ex2_p21"><br>
                    \\(k_2=\\)<input type="text" class="input-mini" id="q_ex2_k2">, \\(p_{12}=\\)<input type="text" class="input-mini" id="q_ex2_p12">, \\(p_{32}=\\)<input type="text" class="input-mini" id="q_ex2_p32"><br>
                    \\(k_3=\\)<input type="text" class="input-mini" id="q_ex2_k3">, \\(p_{13}=\\)<input type="text" class="input-mini" id="q_ex2_p13">, \\(p_{23}=\\)<input type="text" class="input-mini" id="q_ex2_p23">`,
                correct: {
                    q_ex2_lam1: "-2", q_ex2_lam2: "1", q_ex2_lam3: "2",
                    q_ex2_k1: "2", q_ex2_p11: "-1", q_ex2_p21: "0",
                    q_ex2_k2: "1", q_ex2_p12: "0", q_ex2_p32: "0",
                    q_ex2_k3: "2", q_ex2_p13: "1", q_ex2_p23: "0"
                },
                gradingType: "text_match"
            },
            {
                html: `
                    実対称行列 \\( A=\\begin{bmatrix}2&0&1\\\\ 0&4&0\\\\ 1&0&2\\end{bmatrix} \\) の固有値を \\(\\lambda_1 \\le \\lambda_2 \\le \\lambda_3\\) とする。<br>
                    \\(\\lambda_1 = \\) <input type="text" class="input-small" id="q_ex3_lam1">, 
                    \\(\\lambda_2 = \\) <input type="text" class="input-small" id="q_ex3_lam2">, 
                    \\(\\lambda_3 = \\) <input type="text" class="input-small" id="q_ex3_lam3"> <br><br>
        
                    直交行列 \\(P=[p_1 p_2 p_3]\\) によって対角化するとき、各固有ベクトルを<br>
                    \\( p_{1}=\\frac{1}{\\sqrt{k_{1}}}\\begin{bmatrix}p_{11}\\\\ p_{21}\\\\ 1\\end{bmatrix}, p_{2}=\\frac{1}{\\sqrt{k_{2}}}\\begin{bmatrix}1\\\\ p_{22}\\\\ p_{32}\\end{bmatrix}, p_{3}=\\frac{1}{\\sqrt{k_{3}}}\\begin{bmatrix}p_{13}\\\\ 1\\\\ p_{33}\\end{bmatrix} \\) とする。<br><br>
        
                    \\(k_1=\\)<input type="text" class="input-mini" id="q_ex3_k1">, \\(p_{11}=\\)<input type="text" class="input-mini" id="q_ex3_p11">, \\(p_{21}=\\)<input type="text" class="input-mini" id="q_ex3_p21"><br>
                    \\(k_2=\\)<input type="text" class="input-mini" id="q_ex3_k2">, \\(p_{22}=\\)<input type="text" class="input-mini" id="q_ex3_p22">, \\(p_{32}=\\)<input type="text" class="input-mini" id="q_ex3_p32"><br>
                    \\(k_3=\\)<input type="text" class="input-mini" id="q_ex3_k3">, \\(p_{13}=\\)<input type="text" class="input-mini" id="q_ex3_p13">, \\(p_{33}=\\)<input type="text" class="input-mini" id="q_ex3_p33">`,
                correct: {
                    q_ex3_lam1: "1", q_ex3_lam2: "3", q_ex3_lam3: "4",
                    q_ex3_k1: "2", q_ex3_p11: "-1", q_ex3_p21: "0",
                    q_ex3_k2: "2", q_ex3_p22: "0", q_ex3_p32: "1",
                    q_ex3_k3: "1", q_ex3_p13: "0", q_ex3_p33: "0"
                },
                gradingType: "text_match"
            },
            {
                html: `
                    実対称行列 \\( A=\\begin{bmatrix}2&1&0\\\\ 1&2&0\\\\ 0&0&4\\end{bmatrix} \\) の固有値を \\(\\lambda_1 \\le \\lambda_2 \\le \\lambda_3\\) とする。<br>
                    \\(\\lambda_1 = \\) <input type="text" class="input-small" id="q_ex4_lam1">, 
                    \\(\\lambda_2 = \\) <input type="text" class="input-small" id="q_ex4_lam2">, 
                    \\(\\lambda_3 = \\) <input type="text" class="input-small" id="q_ex4_lam3"> <br><br>
        
                    直交行列 \\(P=[p_1 p_2 p_3]\\) によって対角化するとき、各固有ベクトルを<br>
                    \\( p_{1}=\\frac{1}{\\sqrt{k_{1}}}\\begin{bmatrix}1\\\\ p_{21}\\\\ p_{31}\\end{bmatrix}, p_{2}=\\frac{1}{\\sqrt{k_{2}}}\\begin{bmatrix}1\\\\ p_{22}\\\\ p_{32}\\end{bmatrix}, p_{3}=\\frac{1}{\\sqrt{k_{3}}}\\begin{bmatrix}p_{13}\\\\ p_{23}\\\\ 1\\end{bmatrix} \\) とする。<br><br>
        
                    \\(k_1=\\)<input type="text" class="input-mini" id="q_ex4_k1">, \\(p_{21}=\\)<input type="text" class="input-mini" id="q_ex4_p21">, \\(p_{31}=\\)<input type="text" class="input-mini" id="q_ex4_p31"><br>
                    \\(k_2=\\)<input type="text" class="input-mini" id="q_ex4_k2">, \\(p_{22}=\\)<input type="text" class="input-mini" id="q_ex4_p22">, \\(p_{32}=\\)<input type="text" class="input-mini" id="q_ex4_p32"><br>
                    \\(k_3=\\)<input type="text" class="input-mini" id="q_ex4_k3">, \\(p_{13}=\\)<input type="text" class="input-mini" id="q_ex4_p13">, \\(p_{23}=\\)<input type="text" class="input-mini" id="q_ex4_p23">`,
                correct: {
                    q_ex4_lam1: "1", q_ex4_lam2: "3", q_ex4_lam3: "4",
                    q_ex4_k1: "2", q_ex4_p21: "-1", q_ex4_p31: "0",
                    q_ex4_k2: "2", q_ex4_p22: "1", q_ex4_p32: "0",
                    q_ex4_k3: "1", q_ex4_p13: "0", q_ex4_p23: "0"
                },
                gradingType: "text_match"
            }
        ],

        // --- 問8: 2次形式 ---
        q8: [
            {
                html: `
                    2次形式 \\( q(x_{1},x_{2},x_{3})=-x_{1}^{2}+6x_{1}x_{3}-x_{2}^{2}+8x_{2}x_{3}-x_{3}^{2} \\) の係数行列のうち、対称行列であるものを \\(A=[a_{ij}]\\) とすると、<br>
                    \\(A = \\)
                    <table class="matrix-table">
                        <tr>
                            <td><input type="text" class="input-small" id="q8_0_0"></td>
                            <td><input type="text" class="input-small" id="q8_0_1"></td>
                            <td><input type="text" class="input-small" id="q8_0_2"></td>
                        </tr>
                        <tr>
                            <td><input type="text" class="input-small" id="q8_1_0"></td>
                            <td><input type="text" class="input-small" id="q8_1_1"></td>
                            <td><input type="text" class="input-small" id="q8_1_2"></td>
                        </tr>
                        <tr>
                            <td><input type="text" class="input-small" id="q8_2_0"></td>
                            <td><input type="text" class="input-small" id="q8_2_1"></td>
                            <td><input type="text" class="input-small" id="q8_2_2"></td>
                        </tr>
                    </table>
                    <br>
                    である。また、\\(q\\) の符号数を \\((r, s)\\) とすると、<br>
                    \\(r = \\) <input type="text" class="input-small" id="q8_r">, 
                    \\(s = \\) <input type="text" class="input-small" id="q8_s">
                    である。`,
                correct: {
                    q8_0_0: "-1", q8_0_1: "0", q8_0_2: "3",
                    q8_1_0: "0", q8_1_1: "-1", q8_1_2: "4",
                    q8_2_0: "3", q8_2_1: "4", q8_2_2: "-1",
                    q8_r: "1", q8_s: "2"
                },
                gradingType: "text_match"
            },
            {
                html: `
                    2次形式 \\( q(x_{1},x_{2},x_{3})=2x_{1}^{2}-2x_{1}x_{2}+2x_{2}^{2}-2x_{2}x_{3}+2x_{3}^{2} \\) の係数行列のうち、対称行列であるものを \\(A=[a_{ij}]\\) とすると、<br>
                    \\(A = \\)
                    <table class="matrix-table">
                    <tr>
                    <td><input type="text" class="input-small" id="q_ex1_0_0"></td>
                    <td><input type="text" class="input-small" id="q_ex1_0_1"></td>
                    <td><input type="text" class="input-small" id="q_ex1_0_2"></td>
                    </tr>
                    <tr>
                    <td><input type="text" class="input-small" id="q_ex1_1_0"></td>
                    <td><input type="text" class="input-small" id="q_ex1_1_1"></td>
                    <td><input type="text" class="input-small" id="q_ex1_1_2"></td>
                    </tr>
                    <tr>
                    <td><input type="text" class="input-small" id="q_ex1_2_0"></td>
                    <td><input type="text" class="input-small" id="q_ex1_2_1"></td>
                    <td><input type="text" class="input-small" id="q_ex1_2_2"></td>
                    </tr>
                    </table>
                    <br>
                    である。また、\\(q\\) の符号数を \\((r, s)\\) とすると、<br>
                    \\(r = \\) <input type="text" class="input-small" id="q_ex1_r">, 
                    \\(s = \\) <input type="text" class="input-small" id="q_ex1_s">
                    である。`,
                correct: {
                 q_ex1_0_0: "2", q_ex1_0_1: "-1", q_ex1_0_2: "0",
                 q_ex1_1_0: "-1", q_ex1_1_1: "2", q_ex1_1_2: "-1",
                 q_ex1_2_0: "0", q_ex1_2_1: "-1", q_ex1_2_2: "2",
                 q_ex1_r: "3", q_ex1_s: "0"
                }, 
                gradingType: "text_match"
            },
            {
    html: `
        2次形式 \\( q(x_{1},x_{2},x_{3})=4x_{1}x_{2}+x_{3}^{2} \\) の係数行列のうち、対称行列であるものを \\(A=[a_{ij}]\\) とすると、<br>
        \\(A = \\)
        <table class="matrix-table">
            <tr>
                <td><input type="text" class="input-small" id="q_ex2_0_0"></td>
                <td><input type="text" class="input-small" id="q_ex2_0_1"></td>
                <td><input type="text" class="input-small" id="q_ex2_0_2"></td>
            </tr>
            <tr>
                <td><input type="text" class="input-small" id="q_ex2_1_0"></td>
                <td><input type="text" class="input-small" id="q_ex2_1_1"></td>
                <td><input type="text" class="input-small" id="q_ex2_1_2"></td>
            </tr>
            <tr>
                <td><input type="text" class="input-small" id="q_ex2_2_0"></td>
                <td><input type="text" class="input-small" id="q_ex2_2_1"></td>
                <td><input type="text" class="input-small" id="q_ex2_2_2"></td>
            </tr>
        </table>
        <br>
        である。また、\\(q\\) の符号数を \\((r, s)\\) とすると、<br>
        \\(r = \\) <input type="text" class="input-small" id="q_ex2_r">, 
        \\(s = \\) <input type="text" class="input-small" id="q_ex2_s">
        である。`,
    correct: {
        q_ex2_0_0: "0", q_ex2_0_1: "2", q_ex2_0_2: "0",
        q_ex2_1_0: "2", q_ex2_1_1: "0", q_ex2_1_2: "0",
        q_ex2_2_0: "0", q_ex2_2_1: "0", q_ex2_2_2: "1",
        q_ex2_r: "2", q_ex2_s: "1"
    },
    gradingType: "text_match"
},
{
    html: `
        2次形式 \\( q(x_{1},x_{2},x_{3})=x_{1}^{2}-2x_{2}^{2}+2x_{2}x_{3}-2x_{3}^{2} \\) の係数行列のうち、対称行列であるものを \\(A=[a_{ij}]\\) とすると、<br>
        \\(A = \\)
        <table class="matrix-table">
            <tr>
                <td><input type="text" class="input-small" id="q_ex3_0_0"></td>
                <td><input type="text" class="input-small" id="q_ex3_0_1"></td>
                <td><input type="text" class="input-small" id="q_ex3_0_2"></td>
            </tr>
            <tr>
                <td><input type="text" class="input-small" id="q_ex3_1_0"></td>
                <td><input type="text" class="input-small" id="q_ex3_1_1"></td>
                <td><input type="text" class="input-small" id="q_ex3_1_2"></td>
            </tr>
            <tr>
                <td><input type="text" class="input-small" id="q_ex3_2_0"></td>
                <td><input type="text" class="input-small" id="q_ex3_2_1"></td>
                <td><input type="text" class="input-small" id="q_ex3_2_2"></td>
            </tr>
        </table>
        <br>
        である。また、\\(q\\) の符号数を \\((r, s)\\) とすると、<br>
        \\(r = \\) <input type="text" class="input-small" id="q_ex3_r">, 
        \\(s = \\) <input type="text" class="input-small" id="q_ex3_s">
        である。`,
    correct: {
        q_ex3_0_0: "1", q_ex3_0_1: "0", q_ex3_0_2: "0",
        q_ex3_1_0: "0", q_ex3_1_1: "-2", q_ex3_1_2: "1",
        q_ex3_2_0: "0", q_ex3_2_1: "1", q_ex3_2_2: "-2",
        q_ex3_r: "1", q_ex3_s: "2"
    },
    gradingType: "text_match"
},
{
    html: `
        2次形式 \\( q(x_{1},x_{2},x_{3})=-3x_{1}^{2}+2x_{1}x_{2}-3x_{2}^{2}-2x_{3}^{2} \\) の係数行列のうち、対称行列であるものを \\(A=[a_{ij}]\\) とすると、<br>
        \\(A = \\)
        <table class="matrix-table">
            <tr>
                <td><input type="text" class="input-small" id="q_ex4_0_0"></td>
                <td><input type="text" class="input-small" id="q_ex4_0_1"></td>
                <td><input type="text" class="input-small" id="q_ex4_0_2"></td>
            </tr>
            <tr>
                <td><input type="text" class="input-small" id="q_ex4_1_0"></td>
                <td><input type="text" class="input-small" id="q_ex4_1_1"></td>
                <td><input type="text" class="input-small" id="q_ex4_1_2"></td>
            </tr>
            <tr>
                <td><input type="text" class="input-small" id="q_ex4_2_0"></td>
                <td><input type="text" class="input-small" id="q_ex4_2_1"></td>
                <td><input type="text" class="input-small" id="q_ex4_2_2"></td>
            </tr>
        </table>
        <br>
        である。また、\\(q\\) の符号数を \\((r, s)\\) とすると、<br>
        \\(r = \\) <input type="text" class="input-small" id="q_ex4_r">, 
        \\(s = \\) <input type="text" class="input-small" id="q_ex4_s">
        である。`,
    correct: {
        q_ex4_0_0: "-3", q_ex4_0_1: "1", q_ex4_0_2: "0",
        q_ex4_1_0: "1", q_ex4_1_1: "-3", q_ex4_1_2: "0",
        q_ex4_2_0: "0", q_ex4_2_1: "0", q_ex4_2_2: "-2",
        q_ex4_r: "0", q_ex4_s: "3"
    },
    gradingType: "text_match"
}
        ]
    };
