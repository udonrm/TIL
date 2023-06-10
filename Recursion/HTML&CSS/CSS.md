## 練習問題(2)

```css
/* 感情に合わせた色を決め:rootでCSS変数を宣言しましょう。*/
:root {
  /* angryの色指定の例 */
  /* 見本と同じ色にする必要はありません */
  --color-angry: #e52258;
  --color-bad: purple;
  --color-sad: blue;
  --color-happy: orange;
  --color-disgusted: brown;
  --color-surprised: yellow;
  --small: 0.5rem;
}

/* h3タグの文字を白にしてください */
h3 {
  color: white;
}

/* 箱の中の絵文字と文字が中央に表示されるようにしてください */
.box {
  /* paddingとmarginはボックスモデルの節で学習します */
  width: 100px;
  height: 100px;
  padding: var(--small);
  margin: var(--small);
}

.container {
  /* display flexについてはflexboxの節で学習します。 */
  display: flex;
  flex-wrap: wrap;
}

/* ボックスの色を感情に合わせて変更しましょう。 */
.angry {
  background-color: var(--color-angry);
}

.bad {
  background-color: var(--color-bad);
}

.sad {
  background-color: var(--color-sad);
}

.happy {
  background-color: var(--color-happy);
}

.disgusted {
  background-color: var(--color-disgusted);
}
.surprised {
  background-color: var(--color-surprised);
}

/* boxをhoverすると色が変わるCSSを書きましょう。rgbを使って好きな色を選び、透明度を指定しましょう */
.box:hover {
  background-color: rgb(0, 0, 0, 0.5);
}
```

# 練習問題(3)

## 課題 1

```css
.container {
  /* flexboxを使ってレイアウトを実現しましょう */

  display: flex;
  justify-content: center;
  flex-direction: row-reverse;
  width: 600px;
  height: 600px;
  margin: auto;
  background-color: var(--color-sky);
}
```

## 課題 2

```css
.container {
  /* flexboxを使ってレイアウトを実現しましょう */
  display: flex;
  flex-direction: column-reverse;
  justify-content: flex-end;
  align-items: flex-end;
  width: 600px;
  height: 600px;
  margin: auto;
  background-color: var(--color-sky);
}
```

## 課題 3

```css
:root {
  --color-sky: #d3eeff;
  --color-commander: pink;
}
.container {
  /* flexboxを使ってレイアウトを実現しましょう */
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 600px;
  height: 600px;
  margin: auto;
  background-color: var(--color-sky);
}
.commander {
  border-radius: 50%;
  background-color: var(--color-commander);
}

/* 追加したdivタグにクラスをつけ、flexboxでレイアウトを実現させましょう */

.second-line {
  display: flex;
  justify-content: center;
  width: 100;
}

.third-line {
  display: flex;
  justify-content: center;
  width: 100;
}
```

## 課題 4

```css
:root {
  --color-sky: #d3eeff;
  --color-commander: pink;
}
.container {
  /* flexboxを使ってレイアウトを実現しましょう 
   flex-directionでcolumnで縦並び→flex-endで上まで詰める
   */
  display: flex;
  flex-direction: column-reverse;
  justify-content: flex-end;
  align-items: center;
  width: 600px;
  height: 600px;
  margin: auto;
  background-color: var(--color-sky);
}
.commander {
  border-radius: 50%;
  background-color: var(--color-commander);
}

/* 追加したdivタグにクラス名を割り当て、flexboxを使ってレイアウトを実現しましょう */

.second-line {
  display: flex;
  justify-content: space-around;
  width: 100%;
}

.third-line {
  display: flex;
  justify-content: center;
  width: 100%;
}
```

# 練習問題(4)

## 課題 1

```html
<header>
  <h1>My Portfolio</h1>
  <ul>
    <li>ABOUT</li>
    <li>WORKS</li>
    <li>NEWS</li>
    <li>CONTACT</li>
  </ul>
</header>
```

```css
header {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  color: var(--info);
  padding: 0 var(--medium);
}

.nav-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 80%;
  list-style: none;
  padding-left: 0;
}
```

## 課題 2

```html
<footer>
  <div class="icons">
    <a href="#"
      ><img src="https://img.icons8.com/color/344/instagram-new--v1.png" alt=""
    /></a>
    <a href="#"
      ><img src="https://img.icons8.com/color/344/twitter--v1.png" alt=""
    /></a>
    <a href="#"
      ><img
        src="https://img.icons8.com/external-justicon-flat-justicon/344/external-facebook-social-media-justicon-flat-justicon.png"
        alt=""
    /></a>
  </div>

  <p>© 2020 My Portfolio</p>
</footer>
```

```css
footer {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: var(--small);
  color: var(--info);
}

footer img {
  width: var(--medium);
  padding: var(--small);
}
```

## 課題 3

```html
<div class="container">
  <div class="archives">
    <img
      src="https://cdn.pixabay.com/photo/2022/05/18/12/04/flower-7205105_960_720.jpg"
      alt=""
    />
    <img
      src="https://cdn.pixabay.com/photo/2020/04/30/03/26/rufous-5111261_960_720.jpg"
      alt=""
    />
    <img
      src="https://cdn.pixabay.com/photo/2022/07/22/13/23/coast-7338147_960_720.jpg"
      alt=""
    />
    <img
      src="https://cdn.pixabay.com/photo/2022/06/28/15/21/bach-7289941_960_720.jpg"
      alt=""
    />
    <img
      src="https://cdn.pixabay.com/photo/2022/05/03/17/42/animals-7172323_960_720.jpg"
      alt=""
    />
  </div>
</div>
```

```css
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.archives {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.archives img {
  width: var(--img-width);
  margin: var(--small);
}
```

## 課題 4

```html
<button>See More ></button>
```

```css
button {
  background-color: var(--info);
  color: var(--white);
  padding: var(--small) var(--medium);
  margin: var(--small);
  border: none;
}
```

## 課題 5

```css
@media (min-width: 768px) {
  header {
    justify-content: space-between;
  }
  .nav {
    width: 50%;
  }

  footer {
    flex-direction: row;
    justify-content: center;
  }
}
```

# 練習問題 5

## 課題 1

```css
/* 計算機本体が画面中央にくるように配置してください */
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

/* 計算機本体の色、形、サイズ、paddingを指定してください */
.calc-body {
  width: 300px;
  border-radius: 10px;
  background-color: var(--color-black);
  padding: var(--medium);
}
```

## 課題 2

```css
h1 {
  padding: 0;
  margin: 0;
  color: var(--color-white);
}

h1::first-letter {
  color: var(--color-orange);
  font-size: var(--font-large);
}
```

## 課題 3

```css
/* 表示枠の色、文字の色、表示枠の高さ、文字が表示される位置（右揃え）を指定してください */
#result {
  width: 65%;
  padding-right: var(--medium);
  background-color: var(--color-darkgray);
  color: var(--color-white);
  font-size: var(--font-size);
  text-align: end;
  line-height: 1.7;
}

/* 横一列ボタンの中のボタンの配置*/
.btns {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

/* それぞれのボタンの大きさ、形、文字の色と大きさ */
.btn {
  width: var(--btn-size);
  height: var(--btn-size);
  margin: var(--small) 0;
  border-radius: 50%;
  color: var(--color-white);
  font-size: var(--font-size);
}

/* ボタンの色 opd: 数字 op: 演算子 */
.opd {
  background-color: var(--color-darkgray);
}

.op {
  background-color: var(--color-orange);
}
```

## 課題 4

```css
/* ボタンを押した時にボタンの大きさが小さくなるアニメーションを作成してください */
.btn:active {
  transform: scale(0.8);
}

/* ボタンの色 opd: 数字 op: 演算子 */
.opd {
  background-color: var(--color-darkgray);
}

.opd:hover {
  background-color: var(--color-lightgray);
}

.op {
  background-color: var(--color-orange);
}

.op:hover {
  background-color: var(--color-white);
  color: var(--color-orange);
}
```
