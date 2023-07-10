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
