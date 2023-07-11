## getElementById

```html
<div>
  <p id="hw">Hello World</p>
  <div id="bg">
    <h1>Big Bang</h1>
  </div>
</div>
```

```js
// "hw"というIDを持つ要素にアクセスし要素を取得したのち、変数に保存します。
let ele1 = document.getElementById("hw");
console.log(ele1);

let ele2 = document.getElementById("bg");
console.log(ele2);
```

## innerHTML

HTML 要素の内容を取得したり書き換えたりする →web ページの動的な更新

```html
<div>
  <p id="he">Hello Earth</p>
  <p id="hp">Hello Pluto</p>
  <p id="hm">Hello Mars</p>
</div>
```

```js
let ele1 = document.getElementById("he");
console.log(ele1);

let startString = "Goodbye the ";

ele1.innerHTML = startString + "Earth";

document.getElementById("hp").innerHTML = startString + "Pluto";
document.getElementById("hm").innerHTML = startString + "Mars";
```

## classList

HTML 内でスペースによって区切られた一連のトークンを表現する

```html
<div id="target-con" class="bg-red">
  <p id="p1">Hello World 1</p>
</div>

<div id="target-con-2" class="bg-red">
  <p id="p2">Hello World 2</p>
</div>
```

```js
let container = document.getElementById("target-con-2");

let p2 = document.getElementById("p2");

console.log(p2);

container.classList.remove("bg-red");
container.classList.add("bg-black");

p2.classList.add("text-white");

console.log(p2);
```

## 特別な Element オブジェクト

```html
<div>
  <img id="img1" src="https://recursionist.io/img/front/price/panda.png" />
</div>

<div>
  <img id="img2" src="https://recursionist.io/img/front/price/turtle.png" />
</div>
```

```js
let img2 = document.getElementById("img2");
console.log(img2.src);

img2.src = "https://recursionist.io/img/front/price/turtle.png";
console.log(img2.src);
```

## createElement

```html
<div>
  <div id="target-container"></div>
</div>
```

```js
let parentDiv = document.createElement("div");
let p1 = document.createElement("p");

p1.innerHTML = "This is paragraph 1";

parentDiv.append(p1);

let p2 = document.createElement("p");

p2.innerHTML = "This is paragraph 2";

parentDiv.append(p2);

document.getElementById("target-container").append(parentDiv);
```

## フルーツの画像

```php
<?php
function fruitImgUrl(string $fruit): string{
    $fruit = strtolower($fruit);

    if($fruit == "banana") return "url1";
    else if($fruit == "pineapple") return "url2";
    else if($fruit == "pear") return "url3";
    else return "no image";
}
```

## フルーツのレンダリング(2)

```html
<head>
  <!-- Bootstrapの読み込み -->
  <link
    rel="stylesheet"
    href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
    integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk"
    crossorigin="anonymous"
  />
</head>
<div>
  <div id="fruit-container" class="row">
    <!-- ここにbananaの画像と説明を追加します。 -->
  </div>
</div>
```

```css
.fruitImg {
  width: 100px;
  height: 100px;
  padding: 1em;
}

.fruitDiv {
  display: flex;
  align-content: center;
  justify-content: center;
  width: 25%;
  margin-top: 2em;
}
```

```js
function fruitImgUrl(fruit) {
  fruit = fruit.toLowerCase();

  if (fruit === "banana")
    return "https://www.kroger.com/product/images/xlarge/front/0000000004011";
  else if (fruit === "pineapple")
    return "https://www.kroger.com/product/images/medium/front/0000000004430";
  else if (fruit === "pear")
    return "https://www.producemarketguide.com/media/user_RZKVrm5KkV/22481/forelle-pears_variety-page.png";
  // デフォルト
  else
    return "https://upload.wikimedia.org/wikipedia/commons/2/2f/Culinary_fruits_front_view.jpg";
}

let fruitP = document.createElement("p");
fruitP.innerHTML = "Our fruit is banana";

let fruitImg = document.createElement("img");
fruitImg.src = fruitImgUrl("banana");

fruitImg.classList.add("fruitImg");

let fruitDiv = document.createElement("div");

fruitDiv.classList.add("fruitDiv");
fruitDiv.append(fruitP);
fruitDiv.append(fruitImg);

document.getElementById("fruit-container").append(fruitDiv);
```

## フルーツのレンダリング(3)

```html
<head>
  <!-- Bootstrapの読み込み -->
  <link
    rel="stylesheet"
    href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
    integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk"
    crossorigin="anonymous"
  />
</head>
<div>
  <div id="fruit-container" class="row">
    <!-- ここに画像と説明を追加します。 -->
  </div>
</div>
```

```css
.fruitImg {
  width: 100px;
  height: 100px;
  padding: 1em;
}

.fruitDiv {
  display: flex;
  align-content: center;
  justify-content: center;
  width: 25%;
  margin-top: 2em;
}
```

```js
function fruitImgUrl(fruit) {
  fruit = fruit.toLowerCase();

  // === はデータ型もcheckする演算子
  if (fruit === "banana")
    return "https://www.kroger.com/product/images/xlarge/front/0000000004011";
  else if (fruit === "pineapple")
    return "https://www.kroger.com/product/images/medium/front/0000000004430";
  else if (fruit === "pear")
    return "https://www.producemarketguide.com/media/user_RZKVrm5KkV/22481/forelle-pears_variety-page.png";
  // デフォルト
  else
    return "https://upload.wikimedia.org/wikipedia/commons/2/2f/Culinary_fruits_front_view.jpg";
}

function renderFruit(fruit, ele) {
  let fruitP = document.createElement("p");
  fruitP.innerHTML = "Our fruit is :" + fruit;

  let fruitImg = document.createElement("img");

  fruitImg.src = fruitImgUrl(fruit);

  fruitImg.classList.add("fruitImg");

  let fruitDiv = document.createElement("div");

  fruitDiv.classList.add("fruitDiv");
  fruitDiv.append(fruitP);
  fruitDiv.append(fruitImg);

  ele.append(fruitDiv);
}

let fruitContainer = document.getElementById("fruit-container");

// 関数の呼び出し
renderFruit("banana", fruitContainer);
renderFruit("pear", fruitContainer);
renderFruit("pineapple", fruitContainer);
renderFruit("coconut", fruitContainer);
renderFruit("grape", fruitContainer);
```

## フルーツのレンダリング(上級者向け)

```html
<head>
  <!-- Bootstrapの読み込み -->
  <link
    rel="stylesheet"
    href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
    integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk"
    crossorigin="anonymous"
  />
</head>
<div>
  <div id="fruit-container" class="row">
    <!-- ここに画像と説明を追加します。 -->
  </div>
</div>
```

```css
.fruitImg {
  width: 100px;
  height: 100px;
  padding: 1em;
}

.fruitDiv {
  display: flex;
  align-content: center;
  justify-content: center;
  width: 25%;
  margin-top: 2em;
}
```

```js
function fruitImgUrlTable(fruit) {
  const fruitTable = {
    banana: "https://www.kroger.com/product/images/xlarge/front/0000000004011",
    pineapple:
      "https://www.kroger.com/product/images/medium/front/0000000004430",
    pear: "https://www.producemarketguide.com/media/user_RZKVrm5KkV/22481/forelle-pears_variety-page.png",
  };

  const defaultUrl =
    "https://upload.wikimedia.org/wikipedia/commons/2/2f/Culinary_fruits_front_view.jpg";

  // それぞれのフルーツのURLかデフォルトのURLを返します。もしキーが見つからなかったらundefinedが返されます。
  return fruitTable[fruit] !== undefined ? fruitTable[fruit] : defaultUrl;
}

function renderFruit(fruit, ele) {
  let fruitP = document.createElement("p");
  fruitP.innerHTML = "Our fruit is : " + fruit;

  let fruitImg = document.createElement("img");

  fruitImg.src = fruitImgUrlTable(fruit);

  fruitImg.classList.add("fruitImg");

  let fruitDiv = document.createElement("div");
  fruitDiv.classList.add("fruitDiv");
  fruitDiv.append(fruitP);
  fruitDiv.append(fruitImg);

  ele.append(fruitDiv);
}

let fruitContainer = document.getElementById("fruit-container");

// 関数の呼び出し
renderFruit("banana", fruitContainer);
renderFruit("pear", fruitContainer);
renderFruit("pineapple", fruitContainer);
renderFruit("coconut", fruitContainer);
renderFruit("grape", fruitContainer);
```

## HTMl の作成

```html
<link
  rel="stylesheet"
  href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
  integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk"
  crossorigin="anonymous"
/>

<div
  class="vh-100 bg-dark d-flex flex-column justify-content-center align-items-center"
>
  <div class="d-flex align-items-center col-md-7 col-10 m-1">
    <div class="d-flex col-12 profile-card">
      <div class="col-8 py-3">
        <h4>Kaiden Herman</h4>
        <div class="py-2">
          <p>Job :</p>
          <p>Software Engineer</p>
        </div>
        <div class="py-2">
          <p>Skill :</p>
          <p>C++, C#, Java, PHP, JavaScript, Python</p>
        </div>
        <div class="py-2">
          <p>Country :</p>
          <p>United States</p>
        </div>
      </div>
      <div class="col-4 d-flex justify-content-center align-items-center">
        <div>
          <img
            class="avatar"
            src="https://pbs.twimg.com/profile_images/501759258665299968/3799Ffxy.jpeg"
          />
        </div>
      </div>
    </div>
  </div>
</div>
```

```css
.avatar {
  width: 100%;
  height: auto;
  padding: 1em;
}

p {
  font-family: Futura;
  margin: 0 !important;
  letter-spacing: 0.02em;
}

.profile-card {
  background-color: white;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 10px;
}
```

## カード全体の作成

```js
// <div class="vh-100 bg-dark d-flex flex-column justify-content-center align-items-center">

// この部分をJavaScriptによって作成し、コンソールに出力してください。
//     <div class="d-flex align-items-center col-md-7 col-10 m-1">
//         <div class="d-flex col-12 profile-card">
//         </div>
//     </div>

// </div>

// classList.add()関数は複数のクラスをパラメータとして受け取ることができます。
// 例. classList.add("bg-danger", "d-flex", "text-dark");

// ここからJavaScriptを記述してTODOをクリアしてください。

let innerFlex = document.createElement("div");
innerFlex.classList.add(
  "d-flex",
  "align-items-center",
  "col-md-7",
  "col-10",
  "m-1"
);

let cardDiv = document.createElement("div");
innerFlex.append(cardDiv);

cardDiv.classList.add("d-flex", "col-12", "profile-card");

console.log(innerFlex);
```

## カードの左半分の作成

```js
let leftPart = document.createElement("div");
leftPart.classList.add("col-8", "py-3");

let div1 = document.createElement("div");
div1.classList.add("py-2");

let div2 = div1.cloneNode(true);
let div3 = div1.cloneNode(true);

let nameTitle = document.createElement("h4");
nameTitle.innerHTML = "Kaiden Herman";

let employeeJob = document.createElement("p");
let employeeSkill = document.createElement("p");
let employeeCountry = document.createElement("p");

employeeJob.innerHTML = "Job:" + "<br>" + "Software  Engineer";
div1.append(employeeJob);

employeeSkill.innerHTML =
  "Skill: " + "<br>" + "C++, C#, Java, PHP, JavaScript, Python";
div2.append(employeeSkill);

employeeCountry.innerHTML = "Country : " + "<br>" + "United States";
div3.append(employeeCountry);

leftPart.append(nameTitle);
leftInfo.append(div1);
leftInfo.append(div2);
leftInfo.append(div3);

console.log(leftPart);
```

```html
<div class="col-8 py-3">
  <h4>Kaiden Herman</h4>
  <div class="py-2">
    <p>Job: <br />Software Engineer</p>
  </div>
  <div class="py-2">
    <p>Skill: <br />C++, C#, Java, PHP, JavaScript, Python</p>
  </div>
  <div class="py-2">
    <p>Country : <br />United States</p>
  </div>
</div>
```
