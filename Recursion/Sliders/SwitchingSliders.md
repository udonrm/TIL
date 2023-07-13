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
