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
