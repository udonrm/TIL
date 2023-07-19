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

## keydown

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
  <p>press up and down</p>

  <div>
    <button class="btn">+</button>
    <button class="btn">-</button>
  </div>
</div>
```

```js
let body = document.getElementsByTagName("body").item(0);

body.addEventListener("keydown", function (event) {
  console.log(event.key);
  console.log(event.code);
});
```

---

```html
<!-- 
問題
キーボードを押して、そのキーをコンソールに出力させる処理を作成してください。 
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
  <p>press up and down</p>

  <div>
    <button class="btn">+</button>
    <button class="btn">-</button>
  </div>
</div>
```

```js
let body = document.getElementsByTagName("body").item(0);

body.addEventListener("keydown", function (event) {
  console.log(event.key);
});
```

---

```html
<!-- 
    ToDo: 
    キーボードに「u」と入力されたら箱を+10px、「d」と入力されたら箱を-10pxする処理を実装してください。
    addEventListenerのkeydownを使って、「箱の現在の高さを把握し、押されたキーボードによって箱のstyle属性のheightプロパティを変更する」という関数を実行してください。 
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
  <p>press up and down</p>

  <div>
    <button class="btn">+</button>
    <button class="btn">-</button>
  </div>
</div>
```

```js
// HTMLElement.offsetHeightで現在の要素の高さを取得することができます。
// HTMLElement.style.heightは要素のstyle属性のheightプロパティの値を取得、もしくは、設定することができます。

let body = document.getElementsByTagName("body").item(0);

body.addEventListener("keydown", function (event) {
  console.log(event.key);

  const pBlock = document.getElementById("pBlock");
  const pxIncrease = 10;

  let height = pBlock.offsetHeight;

  if (event.key === "u") {
    console.log(pBlock.style.height);
    pBlock.style.height = height + pxIncrease + "px";
  } else if (event.key === "d") {
    console.log(pBlock.style.height);
    pBlock.style.height = height - pxIncrease + "px";
  }
});
```

---

```html
<!-- 
    ToDo
    「+」が押された時に、箱の高さを+10pxするincreasePxという関数を、「-」が押された時に箱の高さを-10pxするdecreasePxという関数を実行してください。要素の現在の高さを取得するhtmlElement.offsetHeightや、style属性のheightプロパティにアクセスするhtmlElement.style.heightを使ってください。 
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
  <p>press up and down</p>

  <div>
    <button onclick="increasePx()" class="btn">+</button>
    <button onclick="decreasePx()" class="btn">-</button>
  </div>
</div>
```

```js
const pBlock = document.getElementById("pBlock");
const pxIncrease = 10;

function increasePx() {
  let height = pBlock.offsetHeight;
  pBlock.style.height = height + pxIncrease + "px";
}

function decreasePx() {
  let height = pBlock.offsetHeight;
  pBlock.style.height = height - pxIncrease + "px";
}
```

## keydown(上級)

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
  <p>press up and down</p>

  <div>
    <!-- ***上級者向け*** イベントオブジェクトのインスタンスを取得するdispatchEvent関数を使用してイベントをトリガーすることができます。DispatchEventは他にもたくさんのイベントオブジェクトを取り込むことができるので、興味があればJSのドキュメントを参照してください。 -->
    <!-- 要素がクリックされた時、body要素に対してKeyboardEventを実行。https://ja.javascript.info/dispatch-events
    KeyboardEvent("種類", "初期化")。キーが押された時、keyをArrowUpに設定します。https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/KeyboardEvent -->
    <button
      class="btn"
      onclick="document.getElementsByTagName(`body`).item(0).dispatchEvent(new KeyboardEvent('keydown',{'key':'ArrowUp'}))"
    >
      +
    </button>
    <button
      class="btn"
      onclick="document.getElementsByTagName(`body`).item(0).dispatchEvent(new KeyboardEvent('keydown',{'key':'ArrowDown'}))"
    >
      -
    </button>
  </div>
</div>
```

```js
let body = document.getElementsByTagName("body").item(0);

body.addEventListener("keydown", function (event) {
  console.log(event.key);

  const pBlock = document.getElementById("pBlock");
  const pxIncrease = 10;
  let height = pBlock.offsetHeight;

  if (event.key === "ArrowUp") {
    pBlock.style.height = height + pxIncrease + "px";
  } else if (event.key === "ArrowDown") {
    pBlock.style.height = height - pxIncrease + "px";
  }
});
```

## mouseover

```html
<!-- 
    ToDo: 
    checkボックスがクリックされると、<input id="passwordClick" type="password">のtype属性がtextに変更する、passwordToggleという関数を作成し、処理を実装してください。type属性にはhtmlElement.typeでアクセスすることができます。
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
  <div class="col-12">
    <label for="passwordClick">Password</label>
    <input id="passwordClick" type="password" />
  </div>
  <div class="col-12">
    <label for="passwordClickCheck">Show/Hide Password</label>
    <input type="checkbox" id="passwordClickCheck" onclick="passwordToggle()" />
  </div>
  <div class="col-12">
    <button>Lock Password</button>
  </div>
  <h3 class="mt-5">Password</h3>
  <div id="lockedPassDiv" class="col-12"></div>
</div>
```

```js
function passwordToggle(){
  const pass = document.getElementById("passwordClick");

  pass.type = pass.type === "password" ? "text" : "password;
}
```

## mouseover(2)

```html
<!-- 
    ToDo: 
    inputタグに何も入力できないようにロックをかけ、さらにid属性lockedPassDivの要素にinputタグに入力されたパスワードをpタグで表示する、lockPassという関数を作成し、処理を実装してください。 
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
  <div class="col-12">
    <label for="passwordClick">Password</label>
    <input id="passwordClick" type="password" />
  </div>
  <div class="col-12">
    <label for="passwordClickCheck">Show/Hide Password</label>
    <input type="checkbox" id="passwordClickCheck" onclick="passwordToggle()" />
  </div>
  <div class="col-12">
    <button onclick="lockPass()">Lock Password</button>
  </div>
  <h3 class="mt-5">Password</h3>
  <div id="lockedPassDiv" class="col-12"></div>
</div>
```

```js
function passwordToggle() {
  const pass = document.getElementById("passwordClick");
  pass.type = pass.type === "password" ? "text" : "password";
}

function lockPass() {
  const pass = document.getElementById("passwordClick");
  const target = document.getElementById("lockedPassDiv");

  pass.disabled = true;

  const p = document.createElement("p");
  p.innerHTML = pass.value;

  target.append(p);
}
```

## Q パスワード非表示

```js
function passwordStars(password) {
  let output = "";
  for (let i = 0; i < password.length; i++) {
    output += "*";
  }
  return output;
}
```

## mouseover(3)

```html
<!-- 
    ToDo: 
    入力された文字列を全て*に変換する、passwordStarsという関数を作成してください。
    ユーザーがマウスホバーした時にパスワードが見え、それ以外の時に文字列を*によって隠すイベントリスナーを実行してください。
    またLockPasswordがクリックされるたびに要素が追加されていかないように、appendされる前にtargetの中身を空にしてください
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
  <div class="col-12">
    <label for="passwordClick">Password</label>
    <input id="passwordClick" type="password" />
  </div>
  <div class="col-12">
    <label for="passwordClickCheck">Show/Hide Password</label>
    <input type="checkbox" id="passwordClickCheck" onclick="passwordToggle()" />
  </div>
  <div class="col-12">
    <button onclick="lockPass()">Lock Password</button>
  </div>
  <h3 class="mt-5">Password</h3>
  <div id="lockedPassDiv" class="col-12"></div>
</div>
```

```js
function passwordToggle() {
  const pass = document.getElementById("passwordClick");
  pass.type = pass.type === "password" ? "text" : "password";
}

// 入力された文字列を全部星に変換する、passwordStarsという関数を作成してください。
// ここからJavaScriptを記述してください。
function passwordStars(password) {
  let output = "";
  for (let i = 0; i < password.length; i++) {
    output += "*";
  }
  return output;
}

function lockPass() {
  const pass = document.getElementById(`passwordClick`);
  const target = document.getElementById("lockedPassDiv");

  if (pass.value === "") return;

  pass.disabled = true;

  const p = document.createElement("p");
  p.innerHTML = pass.value;

  // ユーザーがマウスホバーした時に、パスワードが見えるようにイベントリスナーを設定してください。
  // ユーザーがマウスホバーしていない時に、パスワードが*で表示されるようにイベントリスナーを設定してください。
  // マウスホバーの時は、addEventListener("mouseover", function())、それ以外の時は、addEventListener("mouseout", function())で実装できます。
  // ここからJavaScriptを記述してください。
  p.addEventListener("mouseover", function () {
    p.innerHTML = pass.value;
  });

  //デフォルトの状態が星になるようにする
  p.addEventListener("mouseout", function () {
    p.innerHTML = passwordStars(pass.value);
  });

  // Lock Passwordを何回押しても何度も要素が表示されないように、appendをする前にtargetの中身を空にしてください。
  target.innerHTML = "";
  target.append(p);
}
```

## getAttribute

```html
<div>
  <!-- data-***属性は、要素に任意のキーと値を付けるための属性です。キー名は、data-の後に続けます。例えば、下記は、secretというキーと、その値を付けたものです。 -->
  <div id="dataSecret" data-secret="hello world"></div>
</div>
```

```js
//データをタグに紐付けしてJS内でアクセス
console.log(document.getElementById("dataSecret").getAttribute("data-secret"));
```

## Slider(2)

```html
<head>
  <link
    rel="stylesheet"
    href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
    integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk"
    crossorigin="anonymous"
  />
</head>
<div class="m-5">
  <!-- ここからBootstrapを記述してください。 -->
  <div class="col-12">
    <div class="box bg-primayr"></div>
    <div class="box bg-secondary"></div>
    <div class="box bg-success"></div>
    <div class="box bg-warning"></div>
    <div class="box bg-danger"></div>
  </div>
</div>
```

```css
.box {
  height: 50vh;
  padding: 0 !important;
}
```

## Slider(3)

- https://zero-plus.io/media/css-animation-keyframes/

```html
<head>
  <link
    rel="stylesheet"
    href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
    integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk"
    crossorigin="anonymous"
  />
</head>
<div class="m-5">
  <div class="col-12">
    <div class="box bg-primary deplete-animation"></div>
    <div class="box bg-secondary expand-animation"></div>
    <div class="box bg-success"></div>
    <div class="box bg-warning"></div>
    <div class="box bg-danger"></div>
  </div>
</div>
```

```css
.box {
  height: 50vh;
  padding: 0 !important;
  transition: all 2s linear;
}

.deplete-animation {
  animation: deplete 1s linear forwards;
}

.expand-animation {
  animation: deplete 1s linear reverse forwards;
}

@keyframes deplete {
  0% {
    width: 100%;
    opacity: 1;
  }
  100% {
    width: 0%;
    opacity: 1;
  }
}
```

## Slider(4)

```html
<!-- 
    ToDo:
    全ての要素を非表示にしてください。
    その後、querySelectorAllを用いて、5つの箱の要素をHTMLのノードのリストとして取得してください。
    次にsliderShowというコンテナを作成し、mainコンテナとextraコンテナを配置してください。
    最後にmainコンテナの中に1つ目の箱をappendしてみましょう。 
-->
<head>
  <link
    rel="stylesheet"
    href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
    integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk"
    crossorigin="anonymous"
  />
</head>
<div id="target" class="m-5">
  <!-- 全ての要素を非表示にしてください。 -->
  <div class="col-12 slider-data d-none">
    <div class="box slider-item bg-primary"></div>
    <div class="box slider-item bg-secondary"></div>
    <div class="box slider-item bg-success"></div>
    <div class="box slider-item bg-warning"></div>
    <div class="box slider-item bg-danger"></div>
  </div>
</div>
```

```js
// querySelectorAllを使って全ての箱の要素をリストとして取得し、コンソールに出力してください。
// 1つ目の箱の要素をコンソールに出力してください。
const target = document.getElementById("target");

const sliderItems = document.querySelectorAll(
  "#target .slider-data .slider-item"
);
console.log(sliderItems[0]);

// <div class="col-12 d-flex flex-nowrap overflow-hidden"> -- sliderShow
//     <div class="main full-width"> -- main
//     </div>
//     <div class="extra full-width"> -- extra
//     </div>
// </div>

// 上のHTMLをcreateElementやclassListを用いて作成してください。
// mainコンテナに一番最初の箱をappendし、sliderShowをid属性targetのdivに追加してください。
let sliderShow = document.createElement("div");
let main = document.createElement("div");
let extra = document.createElement("div");

sliderShow.classList.add("col-12", "d-flex", "flex-nowrap", "overflow-hidden");
main.classList.add("main", "full-width");
extra.classList.add("extra", "full-width");

main.append(sliderItems[0]);

sliderShow.append(main);
sliderShow.append(extra);
target.append(sliderShow);
```

## slider(5)

```html
<!-- 
    ToDo: 
    createElement、classList、innerHTML等を使って左右のボタンを作成してブラウザに表示してください。 
-->
<head>
  <link
    rel="stylesheet"
    href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
    integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk"
    crossorigin="anonymous"
  />
</head>
<div id="target" class="m-5">
  <div class="col-12 slider-data d-none">
    <div class="box slider-item bg-primary"></div>
    <div class="box slider-item bg-secondary"></div>
    <div class="box slider-item bg-success"></div>
    <div class="box slider-item bg-warning"></div>
    <div class="box slider-item bg-danger"></div>
  </div>
</div>
```

```js
const target = document.getElementById("target");
const sliderItems = document.querySelectorAll(
  "#target .slider-data .slider-item"
);

let sliderShow = document.createElement("div");
let main = document.createElement("div");
let extra = document.createElement("div");

sliderShow.classList.add("col-12", "d-flex", "flex-nowrap", "overflow-hidden");
main.classList.add("main", "full-width");
extra.classList.add("extra", "full-width");

main.append(sliderItems[0]);

sliderShow.append(main);
sliderShow.append(extra);
target.append(sliderShow);

// <div class="offset-5 mt-2">
//     <button class="btn btn-light"><</button>
//     <button class="btn btn-light">></button>
// </div>
// createElement、classList、innerHTMLを使用してください。
// ここからJavaScriptを記述してください。

let buttonBlock = document.createElement("div");
buttonBlock.classList.add("offset-5", "mt-2");

let leftButton = document.createElement("button");
leftButton.classList.add("btn", "btn-light");
leftButton.innerHTML = "<";

let rightButton = document.createElement("button");
rightButton.classList.add("btn", "btn-light");
rightButton.innerHTML = ">";

buttonBlock.append(leftButton);
buttonBlock.append(rightButton);
target.append(buttonBlock);
```

## カエルジャンプ

```js
function frogPosition(leaves, jumps, start) {
  let newJumps = ((jumps % leaves) + leaves) % leaves;
  let newPosition = ((start - 1 + newJumps) % leaves) + 1;
  return newPosition;
}

function frogPosition(leaves, jumps, start) {
  let position = (jumps + start) % leaves;

  if (position <= 0) return position + leaves;
  else return position;
}
```

## Slider(6)

- https://developer.mozilla.org/ja/docs/Web/API/NodeList/item

```html
<!--
    ToDo:
    まずメインコンテナにsetAttributeを使ってインデックス(初期値)を設定します。

    1か-1を受け取って次の要素を設定するslideJumpという関数を作成してください。
    slideJumpではまず現在のスライドのインデックスと要素を把握し、受け取ったsteps(1または-1)によって、次のスライドの要素を決定します(1だと後の要素、-1だと前の要素という意味)。その後、更新されたインデックスをメインコンテナに再設定します。

    スライドは一番最後の要素のあとは最初に戻り、一番最初の前は最後に戻るので、インデックスのstepsに応じてインデックスを計算する際には十分注意してください。
-->
<head>
  <link
    rel="stylesheet"
    href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
    integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk"
    crossorigin="anonymous"
  />
</head>
<div id="target" class="m-5">
  <div class="col-12 slider-data d-none">
    <div class="box slider-item bg-primary"></div>
    <div class="box slider-item bg-secondary"></div>
    <div class="box slider-item bg-success"></div>
    <div class="box slider-item bg-warning"></div>
    <div class="box slider-item bg-danger"></div>
  </div>
</div>
```

```js
const target = document.getElementById("target");
const sliderItems = document.querySelectorAll(
  "#target .slider-data .slider-item"
);

let sliderShow = document.createElement("div");
let main = document.createElement("div");
let extra = document.createElement("div");

sliderShow.classList.add("col-12", "d-flex", "flex-nowrap", "overflow-hidden");
main.classList.add("main", "full-width");
extra.classList.add("extra", "full-width");

main.append(sliderItems[0]);

sliderShow.append(main);
sliderShow.append(extra);
target.append(sliderShow);

let controls = document.createElement("div");
controls.classList.add("offset-5", "mt-2");

let leftBtn = document.createElement("button");
leftBtn.classList.add("btn", "btn-light");
leftBtn.innerHTML = "<";

let rightBtn = document.createElement("button");
rightBtn.classList.add("btn", "btn-light");
rightBtn.innerHTML = ">";

controls.append(leftBtn);
controls.append(rightBtn);
target.append(controls);

//indexの初期値を設定
main.setAttribute("data-index", "0");

// 1か-1を受け取って次の要素を設定するslideJumpという関数を作成してください。
// slideJumpではまず現在のスライドのインデックスと要素を把握し、受け取ったsteps(1または-1)によって、次のスライドの要素を決定します(1だと後の要素、-1だと前の要素という意味)。その後、更新されたインデックスをメインコンテナに再設定します(インデックスは文字列なので注意してください)。スライドは一番最後の要素のあとは最初に戻り、一番最初の前は最後に戻るので、インデックスのstepsに応じてインデックスを計算する際には十分注意してください。
// slideJumpの中でconsole.log(index)、console.log(currentElement)とconsole.log(nextElement)を行ってください。

function slideJump(steps) {
  let index = parseInt(main.getAttribute("data-index"));

  let currentElement = sliderItems.item(index);

  index += steps;
  console.log(index);

  //一番最初の前は最後に戻る
  if (index < 0) index = sliderItems.length - 1;
  //一番最後の後は最初に戻る
  else if (index >= sliderItems.length) index = 0;

  //indexがstepによって更新されているので次の要素を設定する
  let nextElement = sliderItems.item(index);

  //コンソールで確認
  console.log(currentElement);
  console.log(nextElement);

  //indexが更新されたのでdata-indexの更新
  main.setAttribute("data-index", index.toString());
}
```

## Slider(7)

```html
<!-- 
    ToDo: 
    見本を確認してください。
    現在の要素、次の要素、rightかleftを受け取って、スライダーを実現するanimateMainという関数を作成してください。

    現在の要素から次の要素へと移す必要があるので、extraコンテナには現在の要素を配置し、mainコンテナには次の要素を配置してください。mainが出現するように出現するエフェクトを持つexpand-animationクラスを追加し、extraには消滅エフェクトを持つdeplete-animationを追加してください。

    今回は右方向のアニメーション(次の要素が"右"から出現するスライダーアニメーション)を実装してください。 
-->
<head>
  <link
    rel="stylesheet"
    href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
    integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk"
    crossorigin="anonymous"
  />
</head>
<div id="target" class="m-5">
  <div class="col-12 slider-data d-none">
    <div class="box slider-item bg-primary"></div>
    <div class="box slider-item bg-secondary"></div>
    <div class="box slider-item bg-success"></div>
    <div class="box slider-item bg-warning"></div>
    <div class="box slider-item bg-danger"></div>
  </div>
</div>
```

```js
const target = document.getElementById("target");
const sliderItems = document.querySelectorAll(
  "#target .slider-data .slider-item"
);

let sliderShow = document.createElement("div");
let main = document.createElement("div");
let extra = document.createElement("div");

sliderShow.classList.add("col-12", "d-flex", "flex-nowrap", "overflow-hidden");
main.classList.add("main", "full-width");
extra.classList.add("extra", "full-width");

main.append(sliderItems[0]);

sliderShow.append(main);
sliderShow.append(extra);
target.append(sliderShow);

let controls = document.createElement("div");
controls.classList.add("offset-5", "mt-2");

let leftBtn = document.createElement("button");
leftBtn.classList.add("btn", "btn-light");
leftBtn.innerHTML = "<";

let rightBtn = document.createElement("button");
rightBtn.classList.add("btn", "btn-light");
rightBtn.innerHTML = ">";

controls.append(leftBtn);
controls.append(rightBtn);
target.append(controls);

main.setAttribute("data-index", "0");

function slideJump(steps) {
  let index = parseInt(main.getAttribute("data-index"));
  let currentElement = sliderItems.item(index);

  index += steps;

  if (index < 0) index = sliderItems.length - 1;
  else if (index >= sliderItems.length) index = 0;

  let nextElement = sliderItems.item(index);

  main.setAttribute("data-index", index.toString());
}

// 現在の要素、次の要素、rightかleftを受け取って、スライダーを実現するanimateMainという関数を作成してください。
// 現在の要素から次の要素へと移す必要があるので、extraコンテナには現在の要素を配置し、mainコンテナには次の要素を配置してください。mainが出現するように出現するエフェクトを持つexpand-animationクラスを追加し、extraには消滅エフェクトを持つdeplete-animationを追加してください。
// 受け取ったanimationTypeがrightの時は、右方向のアニメーション(次の要素が"右"から出現するスライダーアニメーション)を実装してください。(後にleft版も作成するのでif文を用いてください。)
// ここからJavaScriptを記述してください。
function animateMain(currentElement, nextElement, animationType) {
  //extraはスライドのエフェクトなので消滅する今の要素を入れる
  extra.innerHTML = "";
  extra.append(currentElement);

  main.innerHTML = "";
  main.append(nextElement);

  main.classList.add("expand-animation");
  extra.classList.add("deplete-animation");

  if (animationType === "right") {
    sliderShow.innerHTML = "";
    //extraが消えてmainが登場する
    sliderShow.append(extra);
    sliderShow.append(main);
  }
}
// 関数が完成したら呼び出しを実行してください。
animateMain(sliderItems[0], sliderItems[1], "right");
```

## Slider(8)

```js
const target = document.getElementById("target");
const sliderItems = document.querySelectorAll(
  "#target .slider-data .slider-item"
);

let sliderShow = document.createElement("div");
let main = document.createElement("div");
let extra = document.createElement("div");

sliderShow.classList.add("col-12", "d-flex", "flex-nowrap", "overflow-hidden");
main.classList.add("main", "full-width");
extra.classList.add("extra", "full-width");

main.append(sliderItems[0]);

sliderShow.append(main);
sliderShow.append(extra);
target.append(sliderShow);

let controls = document.createElement("div");
controls.classList.add("offset-5", "mt-2");

let leftBtn = document.createElement("button");
leftBtn.classList.add("btn", "btn-light");
leftBtn.innerHTML = "<";

let rightBtn = document.createElement("button");
rightBtn.classList.add("btn", "btn-light");
rightBtn.innerHTML = ">";

controls.append(leftBtn);
controls.append(rightBtn);
target.append(controls);

main.setAttribute("data-index", "0");

function slideJump(steps) {
  let index = parseInt(main.getAttribute("data-index"));
  let currentElement = sliderItems.item(index);

  index += steps;

  if (index < 0) index = sliderItems.length - 1;
  else if (index >= sliderItems.length) index = 0;

  let nextElement = sliderItems.item(index);

  main.setAttribute("data-index", index.toString());
}

function animateMain(currentElement, nextElement, animationType) {
  main.innerHTML = "";
  main.append(nextElement);

  extra.innerHTML = "";
  extra.append(currentElement);

  main.classList.add("expand-animation");
  extra.classList.add("deplete-animation");

  if (animationType === "right") {
    sliderShow.innerHTML = "";
    sliderShow.append(extra);
    sliderShow.append(main);
  }
  // ここからelse if文を記述してください。
  // leftの場合はアニメーションの方向に気をつける必要があります。
  else if (animationType === "left") {
    sliderShow.innerHTML = "";
    slideShow.append(main);
    slideShow.append(extra);
  }
}

// rightとleftのコードを両方試して、アニメーションの方向を比較してみましょう。
// currentElementとnextElementがどの箱なのか再度確かめましょう。
// animateMain(sliderItems[2], sliderItems[3], "right");
// animateMain(sliderItems[0], sliderItems[4], "left");
```

## Slider(9)

```html
<!-- 
    ToDo:
    slideJumpがanimationType(rightかleft)を受け取れるようにパラメータを追加し、関数の中でcurrentElement、nextElement、 animationTypeを受け取り、animateMain関数を呼び出してください。

    また左ボタンがクリックされた時にslideJump関数を実行するようにaddEventListenerを実装してください。同様に右ボタンがクリックされた時にslideJump関数を実行するようにaddEventListenerを実装してください。 
-->

<head>
  <link
    rel="stylesheet"
    href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
    integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk"
    crossorigin="anonymous"
  />
</head>
<div id="target" class="m-5">
  <div class="col-12 slider-data d-none">
    <div class="box slider-item bg-primary"></div>
    <div class="box slider-item bg-secondary"></div>
    <div class="box slider-item bg-success"></div>
    <div class="box slider-item bg-warning"></div>
    <div class="box slider-item bg-danger"></div>
  </div>
</div>
```

```js
const target = document.getElementById("target");
const sliderItems = document.querySelectorAll(
  "#target .slider-data .slider-item"
);

let sliderShow = document.createElement("div");
let main = document.createElement("div");
let extra = document.createElement("div");

sliderShow.classList.add("col-12", "d-flex", "flex-nowrap", "overflow-hidden");
main.classList.add("main", "full-width");
extra.classList.add("extra", "full-width");

main.append(sliderItems[0]);

sliderShow.append(main);
sliderShow.append(extra);
target.append(sliderShow);

let controls = document.createElement("div");
controls.classList.add("offset-5", "mt-2");

let leftBtn = document.createElement("button");
leftBtn.classList.add("btn", "btn-light");
leftBtn.innerHTML = "<";

let rightBtn = document.createElement("button");
rightBtn.classList.add("btn", "btn-light");
rightBtn.innerHTML = ">";

controls.append(leftBtn);
controls.append(rightBtn);
target.append(controls);

main.setAttribute("data-index", "0");

// ここからJavaScriptを記述してください。
//パラメータの追加
function slideJump(steps, animationType) {
  let index = parseInt(main.getAttribute("data-index"));
  let currentElement = sliderItems.item(index);

  index += steps;

  if (index < 0) index = sliderItems.length - 1;
  else if (index >= sliderItems.length) index = 0;

  let nextElement = sliderItems.item(index);

  main.setAttribute("data-index", index.toString());

  //アニメーションタイプに応じてanimateMain関数を呼び出す
  animateMain(currentElement, nextElement, animationType);
}

function animateMain(currentElement, nextElement, animationType) {
  main.innerHTML = "";
  main.append(nextElement);

  extra.innerHTML = "";
  extra.append(currentElement);

  main.classList.add("expand-animation");
  extra.classList.add("deplete-animation");

  if (animationType === "right") {
    sliderShow.innerHTML = "";
    sliderShow.append(extra);
    sliderShow.append(main);
  } else if (animationType === "left") {
    sliderShow.innerHTML = "";
    sliderShow.append(main);
    sliderShow.append(extra);
  }
}

// 右ボタンをクリックした時に右方向へスライドし、左ボタンをクリックすると左方向へスライドするaddEventListenerを追加してください。

leftBtn.addEventListener("click", function () {
  slideJump(-1, "left");
});

rightBtn.addEventListener("click", function () {
  slideJump(1, "right");
});
```

## Vending Machine

```html
<head>
  <link
    rel="stylesheet"
    href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
    integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk"
    crossorigin="anonymous"
  />
</head>
<div class="container-fluid">
  <div class="row">
    <div id="target" class="col-lg-6"></div>
    <div
      id="buttonContainer"
      class="col-lg-6 d-flex flex-wrap align-items-center"
    ></div>
  </div>
</div>
```

```css
.half-width {
  width: 50%;
}
```

```js
const target = document.getElementById("target");

// 自動販売機の全体画面
let main = document.createElement("div");
main.classList.add("col-12", "d-flex", "flex-nowrap");

//動物の画像表示画面
let animalImg = document.createElement("div");
animalImg.classList.add("animalImg", "half-width");

//名前と値段、数字のボタンの画面
let animalInfo = document.createElement("div");
animalInfo.classList.add("animalInfo", "half-width");

main.append(animalImg);
main.append(animalInfo);
target.append(main);

class Animal {
  constructor(name, price, imgUrl) {
    this.name = name;
    this.price = price;
    this.imgUrl = imgUrl;
  }

  display() {
    let image = document.createElement("img");
    image.src = this.imgUrl;
    image.alt = this.name;
    animalImg.innerHTML = "";
    animalImg.append(image);

    let name = document.createElement("h2");
    name.innerHTML = this.name;

    let price = document.createElement("p");
    price.innerHTML = "Price : $" + this.price;

    animalInfo.innerHTML = "";
    animalInfo.append(name);
    animalInfo.append(price);
  }
}

let buttonContainer = document.getElementById("buttonContainer");

for (let i = 0; i < zoo.length; i++) {
  let button = document.createElement("button");
  button.classList.add("btn", "btn-primary", "m-2");
  button.textContent = i + 1;
  button.addEventListener("click", function () {
    zoo[i].display();
  });
  buttonContainer.append(button);
}
animalInfo.append(buttonContainer);

let zoo = [
  new Animal(
    "Tiger",
    100,
    "https://cdn.pixabay.com/photo/2015/12/18/13/46/tiger-1098607__340.jpg"
  ),
  new Animal(
    "Elephant",
    200,
    "https://cdn.pixabay.com/photo/2016/11/14/04/45/elephant-1822636__480.jpg"
  ),
  new Animal(
    "Parrot",
    30,
    "https://cdn.pixabay.com/photo/2018/09/22/17/05/parrot-3695678__340.jpg"
  ),
  new Animal(
    "Lemurs",
    15,
    "https://cdn.pixabay.com/photo/2015/10/28/15/05/lemurs-1010643__340.jpg"
  ),
  new Animal(
    "Ibis",
    75,
    "https://cdn.pixabay.com/photo/2018/11/11/16/51/ibis-3809147__340.jpg"
  ),
  new Animal(
    "Panda",
    90,
    "https://cdn.pixabay.com/photo/2019/08/21/16/03/panda-4421395__340.jpg"
  ),
  new Animal(
    "Zebra",
    120,
    "https://cdn.pixabay.com/photo/2020/10/13/10/20/zebra-5651454__480.jpg"
  ),
  new Animal(
    "Rabbit",
    25,
    "https://cdn.pixabay.com/photo/2018/06/28/00/11/mara-mammal-3502921__340.jpg"
  ),
  new Animal(
    "Giraffe",
    150,
    "https://cdn.pixabay.com/photo/2019/07/27/06/21/giraffe-4366005__340.jpg"
  ),
  new Animal(
    "Raccoon",
    45,
    "https://cdn.pixabay.com/photo/2018/07/14/17/46/raccoon-3538081__340.jpg"
  ),
  new Animal(
    "Frog",
    5,
    "https://cdn.pixabay.com/photo/2016/04/17/16/37/frog-1335022__340.jpg"
  ),
  new Animal(
    "Iguana",
    40,
    "https://cdn.pixabay.com/photo/2017/02/05/11/43/iguana-2039719__340.jpg"
  ),
  new Animal(
    "Adler",
    55,
    "https://cdn.pixabay.com/photo/2017/10/20/21/45/adler-2872995__340.jpg"
  ),
  new Animal(
    "Wolf",
    60,
    "https://cdn.pixabay.com/photo/2019/09/17/14/24/wolf-4483675__340.jpg"
  ),
  new Animal(
    "Crocodile",
    250,
    "https://cdn.pixabay.com/photo/2014/01/14/18/31/nile-crocodile-245013__340.jpg"
  ),
  new Animal(
    "Ape",
    20,
    "https://cdn.pixabay.com/photo/2019/07/24/14/17/monkey-4360298__340.jpg"
  ),
  new Animal(
    "Ostrich",
    140,
    "https://cdn.pixabay.com/photo/2019/09/25/15/58/ostrich-4504017__340.jpg"
  ),
  new Animal(
    "Rhinoceros",
    170,
    "https://cdn.pixabay.com/photo/2019/09/04/09/48/rhinoceros-4451152__340.jpg"
  ),
  new Animal(
    "Icebear",
    210,
    "https://cdn.pixabay.com/photo/2017/08/14/20/33/polar-bear-2641842__340.jpg"
  ),
  new Animal(
    "Cheetah",
    190,
    "https://cdn.pixabay.com/photo/2018/06/14/22/22/cheetah-3475778__340.jpg"
  ),
  new Animal(
    "Koala",
    30,
    "https://cdn.pixabay.com/photo/2013/01/14/12/21/koala-74908__340.jpg"
  ),
  new Animal(
    "Penguin",
    25,
    "https://cdn.pixabay.com/photo/2016/09/29/16/40/king-penguin-1703294__340.jpg"
  ),
];
```
