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
