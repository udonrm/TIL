# HTML

練習問題(1)

## 課題 1

```HTML
<!DOCTYPE html>
<html lang="ja">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>課題1</title>
  </head>

  <body>
    <h1>自己紹介</h1>
    <p><strong>名前:</strong>Name</p>
    <p><strong>出身地: </strong>東京都</p>
    <p><strong>資格</strong></p>
    <ul>
      <li>基本情報技術者</li>
      <li>応用情報技術者</li>
      <li>甲種危険物取扱者</li>
    </ul>

    <p><strong>趣味</strong></p>
    <ol>
      <li><a href="https://cdn.pixabay.com/photo/2015/05/29/19/18/bicycle-789648__340.jpg">サイクリング</a></li>
      <img
        src="https://cdn.pixabay.com/photo/2015/05/29/19/18/bicycle-789648__340.jpg"
        height="200"
        width="250"
      />
      <li><a href="https://cdn.pixabay.com/photo/2014/05/22/22/05/photo-351528__340.jpg">カメラ</a></li>
      <img
        src="https://cdn.pixabay.com/photo/2014/05/22/22/05/photo-351528__340.jpg"
        height="200"
        width="250"
      />
    </ol>

    <h2>一言</h2>
    <p>画像を使う際は<strong>著作権</strong>に気をつけてください。</p>
  </body>
</html>
```

## 課題 2

```html
<!DOCTYPE html>
<html lang="ja">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>課題2</title>
  </head>
  <body>
    <p>テキスト</p>
    <form action="" method="">
      <input type="text" name="email" placeholder="email" size="50" />

      <p>ラジオボタン</p>
      <label> <input type="radio" name="radio" />はい </label>

      <label> <input type="radio" name="radio" />いいえ </label>

      <label> <input type="radio" name="radio" />無回答 </label>

      <p>ボタン</p>
      <input type="submit" value="ログイン" />
    </form>
  </body>
</html>
```

## 課題 3

```html
<!DOCTYPE html>
<html lang="ja">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>課題2</title>
  </head>

  <body>
    <form action="" method="">
      <h2>テキスト</h2>
      <input type="text" name="email" placeholder="email" size="30" />

      <h2>パスワード</h2>
      <input type="text" name="password" placeholder="password" size="15" />

      <h2>ラジオボタン</h2>
      <label> <input type="radio" name="radio" />はい </label>

      <label> <input type="radio" name="radio" />いいえ </label>

      <label> <input type="radio" name="radio" />無回答 </label>

      <p><strong>ラジオボタンは排他的な選択肢。</strong></p>

      <h2>チェックボタン</h2>
      <label> <input type="checkbox" name="check" />徒歩 </label>
      <label> <input type="checkbox" name="check" />電車 </label>
      <label> <input type="checkbox" name="check" />バス </label>

      <p><strong>チェクボタンは複数選択可能。</strong></p>

      <h2>ボタン</h2>
      <input type="submit" value="ログイン" />
    </form>
  </body>
</html>
```
