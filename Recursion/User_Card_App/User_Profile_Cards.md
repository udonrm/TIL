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
```

## フルーツのレンダリング(上級者向け)
