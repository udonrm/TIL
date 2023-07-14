# Switching Sliders

## addEventListener

イベントリスナー：イベントが発生した時に呼び出される関数
イベントハンドラ：イベントが発生した時に実行されるコードブロック

```html
<head>
  <link
    rel="stylesheet"
    href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
    integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk"
    crossorigin="anonymous"
  />
</head>
<div class="m-2">
  <button id="targetBtn" class="btn btn-primary">Click me too</button>
</div>
```

```js
document.getElementById("targetBtn").addEventListener("click", function () {
  alert("表示させたいテキスト");
});
```

```html
<!-- onclick属性でHTMLタグに直接埋め込む -->
<head>
  <link
    rel="stylesheet"
    href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
    integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk"
    crossorigin="anonymous"
  />
  <style></style>
</head>
<div class="m-2">
  <!-- HTMLのonclick属性を使うと、要素がクリックされた時にJavaScriptのステートメントを実行します。 -->
  <!-- ""がすでに使われている場合は、``を使用してください。 -->
  <!-- コンソールを確認してください。 -->
  <button
    class="btn btn-primary"
    onclick="alert(`Thanks for clicking`);let x = 3 * 5; console.log(x+343);"
  >
    Click me
  </button>
</div>
```

## DOM イベントとリスナー

```js
EventTarget.addEventListener(eventType, callback);
//ターゲットのオブジェクトにイベントリスナーを登録する

EventTarget.removeEventListener(eventType, callback);
// eventType、およびコールバック関数の参照に基づいて、このオブジェクトからイベントリスナーを削除します。

EventTarget.dispatchEvent(eventObject);
// 任意のイベントを作成し、dispatchEvent()メソッドを使って、対象となる要素にイベントを発生させることができます。
// Eventオブジェクトには文字列であるeventTypeが含まれてます。
```

---

```html
<div>
    <p id="target-p">Incoming Event</p>
    <h1 id="target-h">The second Event</p>
</div>
```

```js
let targetElement = document.getElementById("target-p");

//新しいイベントオブジェクトの作成
const customEvent = new Event("myUniqueEvent");
console.log(customEvent);

//イベントが発火した時に実行する関数
function randomFunction() {
  console.log("The event just ran!!");
}

//targetElementにイベントリスナーを追加して関数の参照を渡す
//イベントがトリガーされたら渡されたコーリバックを実行する
targetElement.addEventListener("myUniqueEvent", randomFunction);

//対象となる要素にイベントを発生させる
targetElement.dispatchEvent(customEvent);

let hElement = document.getElementById("target-h");

hElement.addEventListener("echo", function () {
  for (let i = 1; i <= 10; i++) {
    console.log("Hello World");
  }
});

hElement.dispatchEvent(new Event("echo"));
```

---

```html
<div>
  <p id="target-p">Incoming Event</p>
</div>
```

```js
let targetElement = document.getElementById("target-p");
const customEvent = new Event("myUniqueEvent");

function randomFunction(event) {
  console.log("The event just ran!!!");

  //イベントが発生した要素
  console.log(event.target);

  //現在のドキュメントの生成からイベントが作成された時点までの時間
  console.log(event.timeStamp);

  //イベントタイプ
  console.log(event.type);

  //eventのデータ型
  console.log(typeof event);
}

targetElement.addEventListener("myUniqueEvent", randomFunction);

targetElement.dispatchEvent(customEvent);

targetElement.addEventListener("click", function (e) {
  console.log(e.timeStamp);
});
```

## ブラウザイベント

```html
<div>
  <p id="target1">Click me</p>
  <p id="target2">Hover me</p>
  <input type="text" id="target3" placeholder="Write inside of me" />
</div>
```

```js
let target1 = document.getElementById("target1");
let target2 = document.getElementById("target2");
let target3 = document.getElementById("target3");

function logClick() {
  console.log("I was clicked!");
}

target1.addEventListener("click", logClick);

target2.addEventListener("mouseover", function () {
  console.log("The mouse was over me!");
});

target2.addEventListener("mouseout", function () {
  console.log("The mouse left me!");
});

target3.addEventListener("keypress", function (eventObject) {
  console.log("The" + eventObject.key + "was pressed!");
});
```

## 電卓の作成(2)

```html
<head>
  <link
    rel="stylesheet"
    href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
    integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk"
    crossorigin="anonymous"
  />
</head>
<div class="m-2">
  <div class="col-6 row justify-content-end mb-2">
    <label for="operator1">Operand 1 - </label>
    <!-- inputタグにvalue属性が初期値として表示されます。 -->
    <input type="text" id="operator1" value="2" />

    <label for="operator2">Operand 2 -</label>
    <input type="text" id="operator2" value="6" />

    <!-- inputタグのvalue属性は、要素.valueプロパティで取得することができます。 -->
    <!-- onclick属性でクリック時に実行されるステートメントを設定します。 -->
    <button
      class="ml-1"
      onclick="alert(`Op1: ` + document.getElementById('operator1').value + `, Op2: ` + document.getElementById('operator2').value)"
    >
      Test Input
    </button>
  </div>
</div>
```

## Q 電卓

```php
function calculator(string $op1, string $op2, string $operatorChar): float{
    $op1 = floatval($op1);
    $op2 = floatval($op2);

    switch($operatorChar){
        case '+':
            return $op1 + $op2;
        case '-':
            return $op1 - $op2;
        case '*':
            return $op1 * $op2;
        case '/':
            return $num2 == 0 ? $op1 : $op1 / $op2;
    }
}

```

## 電卓の作成(3)

```html
<!-- 
    ToDo: addEventListenerを使って、演算子がクリックされると計算を行う計算機を作成してください。
    各ボタンがクリックされるとapplyOperationという関数が実行され、その出力をanswerというid属性を持つinputタグのvalue属性に反映させてください。 
-->
<head>
  <link
    rel="stylesheet"
    href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
    integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk"
    crossorigin="anonymous"
  />
</head>
<div class="m-2">
  <div class="col-6 row justify-content-end mb-2">
    <label for="operator1">Operand 1 - </label>
    <input type="text" id="operator1" value="2" />

    <label for="operator2">Operand 2 -</label>
    <input type="text" id="operator2" value="6" />

    <button
      class="ml-1"
      onclick="alert(`Op1: ` + document.getElementById('operator1').value + `, Op2: ` + document.getElementById('operator2').value)"
    >
      Test Input
    </button>
  </div>

  <div class="col-6 row justify-content-end">
    <label for="answer">Total</label>
    <!-- disable属性でinput属性を無効にします。したがって、inputタグですが、情報を入力することはできません。 -->
    <input type="text" id="answer" disabled />
    <div class="ml-1">
      <button id="plusOperator">+</button>
      <button id="minusOperator">-</button>
      <button id="timesOperator">*</button>
      <button id="divideOperator">/</button>
    </div>
  </div>
</div>
```

```js
// オペランド1、オペランド2、演算子を受け取って、計算を行うapplyOperationという関数を作成してください。
// オペランドは文字列として渡されるのでint型に変換する必要があります。
// もし演算子が+、-、*、/に該当しない場合は、NaN(Not A Number)を返してください。

// addEventListener(種類, 関数)を使って、各ボタンがクリックされるとapplyOperationという関数が実行され、その出力をanswerというid属性を持つinputタグのvalue属性に反映させてください。
// JSではinputタグのvalue属性は直接変更することができます。

// ここからJavaScriptを記述してください。

function applyOperation(operator1, operator2, operator) {
  operator1 = parseInt(operator1);
  operator2 = parseInt(operator2);

  //returnを返すときはbreakはいらない
  switch (operator) {
    case "+":
      return operator1 + operator2;
    case "-":
      return operator1 - operator2;
    case "*":
      return operator1 * operator2;
    case "/":
      return operator1 / operator2;
    default:
      return "Nan";
  }
}

const op1 = document.getElementById("operator1");
const op2 = document.getElementById("operator2");

const answer = document.getElementById("answer");

//オペランドのボタンにクリックイベントリスナーを追加

document.getElementById("plusOperator").addEventListener("click", function () {
  answer.value = applyOperation(op1.value, op2.value, "+");
});

document.getElementById("minusOperator").addEventListener("click", function () {
  answer.value = applyOperation(op1.value, op2.value, "-");
});

document.getElementById("timesOperator").addEventListener("click", function () {
  answer.value = applyOperation(op1.value, op2.value, "*");
});

document
  .getElementById("divideOperator")
  .addEventListener("click", function () {
    answer.value = applyOperation(op1.value, op2.value, "/");
  });
```

## querySelectorAll

```html
<div id="outer-div">
  <p>Hello World</p>
  <p class="small-text">P1 with class "small-text"</p>
  <p class="small-text">P2 with class "small-text"</p>
  <p class="small-text">P3 with class "small-text"</p>
  <p class="small-text">P4 with class "small-text"</p>
  <div id="inner-div">
    <p></p>
  </div>
</div>
```

```js
let outer = document.getElementById("outer-div");

//outer内でsmall-textクラスを持つ全ての要素を探す
let smallTextOuter = outer.querySelectorAll(".small-text");

// そのいくつかを出力します。
console.log(smallTextOuter[0]);
console.log(smallTextOuter.item(1));
console.log(smallTextOuter[2]);

//サイズの取得
console.log(smallTextOuter.length);

//全てを出力
console.log(smallTextOuter);

let innerDiv = document.getElementById("inner-div");
let innerP = innerDiv.querySelectorAll(".inner-p");

console.log("working with the inner..");
console.log(innerP.item(0));

let outerP = innerDiv.querySelectorAll("#outer-div");
console.log(outerP.length);
```

---

```html
<head>
  <link
    rel="stylesheet"
    href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
    integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk"
    crossorigin="anonymous"
  />
</head>
<div class="m-2">
  <div class="col-6 row justify-content-end mb-2">
    <label for="operator1">Operand 1 - </label>
    <input type="text" id="operator1" value="2" />

    <label for="operator2">Operand 2 -</label>
    <input type="text" id="operator2" value="6" />

    <button
      class="ml-1"
      onclick="alert(`Op1: ` + document.getElementById('operator1').value + `, Op2: ` + document.getElementById('operator2').value)"
    >
      Test Input
    </button>
  </div>

  <div class="col-6 row justify-content-end">
    <label for="answer">Total</label>
    <input type="text" id="answer" disabled />
    <div class="ml-1">
      <button id="plusOperator" class="operator-btn">+</button>
      <button id="minusOperator" class="operator-btn">-</button>
      <button id="timesOperator" class="operator-btn">*</button>
      <button id="divideOperator" class="operator-btn">/</button>
    </div>
  </div>
</div>
```

```js
function applyOperation(op1, op2, operator) {
  op1 = parseInt(op1);
  op2 = parseInt(op2);

  if (operator === "+") return op1 + op2;
  if (operator === "-") return op1 - op2;
  if (operator === "*") return op1 * op2;
  if (operator === "/") return op1 / op2;

  return NaN;
}

const op1 = document.getElementById("operator1");
const op2 = document.getElementById("operator2");
const answer = document.getElementById("answer");

// querySelectorAllメソッドとは、指定したセレクタに一致するすべてのHTML要素(NodeList)を取得するメソッドです。今回の場合、operator-btnというクラスを持っている要素が返されます。
// 返された値は、HTMLCollectionと呼ばれるノードのリストです。ノードについては上級コースで学習します。
const operatorButtons = document.querySelectorAll(".operator-btn");

// コンソールで確認してみましょう。
console.log(operatorButtons);
console.log(operatorButtons[0]);
console.log(operatorButtons[3]);
```

---

```html
<!-- 
    問題
    querySelectorAllメソッドでbuttonをNode Listとして取得し、コンソールに出力してみましょう。
 -->
<head>
  <link
    rel="stylesheet"
    href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
    integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk"
    crossorigin="anonymous"
  />
</head>
<div class="m-2">
  <div class="col-6 row justify-content-center mb-2">
    <label class="col-12 text-center" for="op1">Operand 1</label>
    <input class="col-12" type="text" id="op1" value="2" />

    <label class="mt-3 col-12 text-center" for="op2">Operand 2</label>
    <input class="col-12" type="text" id="op2" value="6" />

    <button
      type="button"
      class="btn btn-secondary mt-3"
      onclick="alert(`Op1: ` + document.getElementById(`op1`).value + `, Op2: ` + document.getElementById(`op2`).value)"
    >
      Test Input
    </button>
  </div>

  <div class="col-6 row">
    <label class="col-12" for="total"></label>
    <input class="col-12" type="text" id="total" disabled />
    <div class="mt-2">
      <button id="plusOperator" class="btn btn-primary op-btn">+</button>
      <button id="minusOperator" class="btn btn-primary op-btn">-</button>
      <button id="multiplyOperator" class="btn btn-primary op-btn">*</button>
      <button id="devideOperator" class="btn btn-primary op-btn">/</button>
    </div>
  </div>
</div>
```

```js
function applyOperation(op1, op2, operator) {
  op1 = parseInt(op1);
  op2 = parseInt(op2);

  if (operator === "+") return op1 + op2;
  if (operator === "-") return op1 - op2;
  if (operator === "*") return op1 * op2;
  if (operator === "/") return op1 / op2;

  return NaN;
}

const op1 = document.getElementById("op1");
const op2 = document.getElementById("op2");
const total = document.getElementById("total");

// ここからJavaScriptを記述してください。
const operatorButtons = document.querySelectorAll(".btn");

console.log(operatorButtons);
```

---

```html
<!-- 
    ToDo
    querySelectorAllメソッドはノードリストを返すと学習しました。では、for文を使ってそれぞれの要素がクリックされた時に、applyOperationが実行される、addEventListenerを実装してください。 
-->
<head>
  <link
    rel="stylesheet"
    href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
    integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk"
    crossorigin="anonymous"
  />
</head>
<div class="m-2">
  <div class="col-6 row justify-content-end mb-2">
    <label for="operator1">Operand 1 - </label>
    <input type="text" id="operator1" value="2" />

    <label for="operator2">Operand 2 -</label>
    <input type="text" id="operator2" value="6" />

    <button
      class="ml-1"
      onclick="alert(`Op1: ` + document.getElementById('operator1').value + `, Op2: ` + document.getElementById('operator2').value)"
    >
      Test Input
    </button>
  </div>

  <div class="col-6 row justify-content-end">
    <label for="answer">Total</label>
    <input type="text" id="answer" disabled />
    <div class="ml-1">
      <button id="plusOperator" class="operator-btn">+</button>
      <button id="minusOperator" class="operator-btn">-</button>
      <button id="timesOperator" class="operator-btn">*</button>
      <button id="divideOperator" class="operator-btn">/</button>
    </div>
  </div>
</div>
```

```js
function applyOperation(op1, op2, operator) {
  op1 = parseInt(op1);
  op2 = parseInt(op2);

  if (operator === "+") return op1 + op2;
  if (operator === "-") return op1 - op2;
  if (operator === "*") return op1 * op2;
  if (operator === "/") return op1 / op2;

  return NaN;
}

const op1 = document.getElementById("operator1");
const op2 = document.getElementById("operator2");
const answer = document.getElementById("answer");

const operatorButtons = document.querySelectorAll(".operator-btn");

// ここからJavaScriptを記述してください。
// for文を使って、各ボタンがクリックされた時に、applyOperationが実行されるように処理を行ってください。
// 要素.innerHTMLで要素の中身を取得することができるので、演算子の取得に活用してください。

for (let i = 0; i < operatorButtons.length; i++) {
  let opElement = operatorButtons[i];
  opElement.addEventListener("click", function () {
    answer.value = applyOperation(op1.value, op2.value, opElement.innerHTML);
  });
}
```

## querySelectorAll(上級)

```html
<head>
  <link
    rel="stylesheet"
    href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
    integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk"
    crossorigin="anonymous"
  />
</head>
<div class="m-2">
  <div class="col-6 row justify-content-end mb-2">
    <label for="operator1">Operand 1 - </label>
    <input type="text" id="operator1" value="2" />

    <label for="operator2">Operand 2 -</label>
    <input type="text" id="operator2" value="6" />

    <button
      class="ml-1"
      onclick="alert(`Op1: ` + document.getElementById('operator1').value + `, Op2: ` + document.getElementById('operator2').value)"
    >
      Test Input
    </button>
  </div>

  <div class="col-6 row justify-content-end">
    <label for="answer">Total</label>
    <input type="text" id="answer" disabled />
    <div class="ml-1">
      <button id="plusOperator" class="operator-btn">+</button>
      <button id="minusOperator" class="operator-btn">-</button>
      <button id="timesOperator" class="operator-btn">*</button>
      <button id="divideOperator" class="operator-btn">/</button>
    </div>
  </div>
</div>
```

```js
function applyOperation(op1, op2, operator) {
  op1 = parseInt(op1);
  op2 = parseInt(op2);

  if (operator === "+") return op1 + op2;
  if (operator === "-") return op1 - op2;
  if (operator === "*") return op1 * op2;
  if (operator === "/") return op1 / op2;

  return NaN;
}

const op1 = document.getElementById("operator1");
const op2 = document.getElementById("operator2");
const answer = document.getElementById("answer");

const operatorButtons = document.querySelectorAll(".operator-btn");

// 関数メソッド（mapやforEachなど）を使ってリストの反復処理を行い、ラムダ関数を適用します。これらの概念については、上級コースで学びます。
operatorButtons.forEach((opElement) =>
  opElement.addEventListener("click", function () {
    answer.value = applyOperation(op1.value, op2.value, opElement.innerHTML);
  })
);
```

## classList

```html
<head>
  <link
    rel="stylesheet"
    href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
    integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk"
    crossorigin="anonymous"
  />
</head>
<div class="m-2">
  <div class="box bg-primary d-block" id="pBlock"></div>
  <div class="box bg-secondary d-block"></div>

  <!-- onclick属性。要素がクリックされた時にステートメントが実行されます。 -->
  <button
    class="btn btn-primary mt-2"
    onclick="displayNone(document.getElementById(`pBlock`));"
  >
    Display Toggle
  </button>
</div>
```

```css
.box {
  height: 100px;
  width: 100px;
}
```

```js
function display(ele) {
  ele.classList.remove("d-block");
  ele.classList.add("d-none");
}
```

---

```html
<!-- 
    ToDo:
    ボタンがクリックされると、赤いboxを消す関数を作成し、ブラウザから赤いboxを消してください。
-->
<head>
  <link
    rel="stylesheet"
    href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
    integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk"
    crossorigin="anonymous"
  />
</head>
<div class="m-2">
  <div class="box bg-danger d-block" id="pBlock"></div>
  <div class="box bg-success d-block"></div>

  <button
    class="btn btn-primary mt-2 "
    onclick="displayNone(document.getElementById(`pBlock`));"
  >
    Display None
  </button>
</div>
```

```css
.box {
  height: 100px;
  width: 100px;
}
```

```js
function displayNone(ele) {
  ele.classList.remove("d-block");
  ele.classList.add("d-none");
}
```

## classList(2)

```html
<!-- ToDo:
     onclick属性を使って、ボタンがクリックされると、青の箱が消え、グレーの箱が出現する処理を作ってみましょう。 
     d-noneを取り除き、d-blockが付与するdisplayBlockという関数を作成してください。
-->

<head>
  <link
    rel="stylesheet"
    href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
    integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk"
    crossorigin="anonymous"
  />
</head>
<div class="m-2">
  <div class="box bg-primary d-block" id="pBlock"></div>
  <div class="box bg-secondary d-none" id="sBlock"></div>

  <button
    class="btn btn-primary mt-2"
    onclick="displayNone(document.getElementById(`pBlock`)); displayBlock(document.getElementById(`sBlock`))"
  >
    Display Toggle
  </button>
</div>
```

```css
.box {
  height: 100px;
  width: 100px;
}
```

```js
function displayNone(ele) {
  ele.classList.remove("d-block");
  ele.classList.add("d-none");
}

function displayBlock(ele) {
  ele.classList.remove("d-none");
  ele.classList.add("d-block");
}
```

## classList(3)

```html
<!-- ToDO:
     ボタンをクリックする度に青色のboxとグレーのboxが非表示 / 表示を繰り返す挙動を作成してください。
     要素のクラスの状態によって、d-noneとd-blockを入れ替える、toggleDisplayという関数を作成してください。
-->

<head>
  <link
    rel="stylesheet"
    href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
    integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk"
    crossorigin="anonymous"
  />
</head>
<div class="m-2">
  <div class="box bg-primary d-block" id="pBlock"></div>
  <div class="box bg-secondary d-none" id="sBlock"></div>

  <button
    class="btn btn-primary mt-2"
    onclick="toggleDisplay(document.getElementById(`pBlock`), document.getElementById(`sBlock`))"
  >
    Display Toggle
  </button>
</div>
```

```js
function displayNone(ele) {
  ele.classList.remove("d-block");
  ele.classList.add("d-none");
}

function displayBlock(ele) {
  ele.classList.remove("d-none");
  ele.classList.add("d-block");
}

// ここからJavaScriptを記述してください。
// 入力ele1、ele2
// もしele1がd-blockを持っていたら、上で記述されている関数を使ってele1をd-noneし、ele2をd-blockしてください。
// それ以外のケースでは、反対の処理を行ってください。

// classList.containsはクラスが含まれているか確認します。ブール値を返します。

function toggleDisplay(ele1, ele2) {
  if (ele1.classList.contains("d-block")) {
    displayNone(ele1);
    displayNone(ele2);
  } else {
    displayNone(ele2);
    displayNone(ele1);
  }
}
```
