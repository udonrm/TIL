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
