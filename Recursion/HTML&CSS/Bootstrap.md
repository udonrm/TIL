# Bootstrap

## コンテナ

メディアクエリを使わなくても画面幅に応じてサイズの調整が行われる

## 練習問題(6)

## 課題 1

```html
<button class="btn btn-outline-primary col-5 col-md-11">See Profile</button>
<button class="btn btn-info col-5 col-md-11 mt-1">Send a Message</button>
```

## 課題 2

```html
<div class="container min-vh-100 bg-dark d-flex align-items-center">
  <div class="row justify-content-center">
    <div class="col-10 col-md-8 col-lg-4 bg-white">
      <button type="button" class="close" aria-label="Close">
        <span aria-hidden="true">&times;</span>
      </button>
      <div class="p-4">
        <h4 class="text-center">ログイン</h4>
        <div class="row justify-content-center align-items-center p-3">
          <!-- col snsアイコンのimgを配置しましょう。-->
          <img
            class="col-3"
            src="https://cdn.pixabay.com/photo/2016/01/26/17/15/gmail-1162901__340.png"
            alt="gmail"
          />
          <img
            class="col-3"
            src="https://cdn.pixabay.com/photo/2017/08/05/11/24/logo-2582757__340.png"
            alt="GitHub"
          />
          <img
            class="col-3"
            src="https://cdn.pixabay.com/photo/2017/08/22/11/56/linked-in-2668700__340.png"
            alt="linkedin"
          />
        </div>
        <h5 class="text-center">または</h5>
        <form>
          <div class="form-group" mb-4>
            <input
              type="text"
              class="form-control"
              id="email"
              placeholder="Eメールアドレス"
              required
            />
          </div>
          <div class="form-group mb-4">
            <input
              type="password"
              class="form-control"
              id="password"
              placeholder="パスワード"
              required
            />
          </div>
          <button type="submit" class="btn btn-primary col-12">新規登録</button>
        </form>
      </div>
    </div>
  </div>
</div>
```

## 課題 3

```html
<link
  rel="stylesheet"
  href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
  integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh"
  crossorigin="anonymous"
/>

<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">Navbar</a>
  <button
    class="navbar-toggler"
    type="button"
    data-toggle="collapse"
    data-target="#navbarNavAltMarkup"
    aria-controls="navbarNavAltMarkup"
    aria-expanded="false"
    aria-label="Toggle navigation"
  >
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div class="navbar-nav">
      <a class="nav-item nav-link active" href="#"
        >Home <span class="sr-only">(current)</span></a
      >
      <a class="nav-item nav-link" href="#">Features</a>
      <a class="nav-item nav-link" href="#">Pricing</a>
      <a class="nav-item nav-link disabled" href="#">Disabled</a>
    </div>
  </div>
</nav>
<!-- グローバルナビゲーション -->
<div class="bg-dark">
  <ul class="nav container">
    <li class="nav-item">
      <span class="nav-link text-white">Home</span>
    </li>
    <li class="nav-item">
      <span class="nav-link text-white">About us</span>
    </li>
    <li class="nav-item">
      <span class="nav-link text-white">Pricing</span>
    </li>
  </ul>
</div>

<!-- ヘッダー -->
<div class="bg-light py-5">
  <!-- グリッドシステム container -->
  <div class="container text-center text-md-left">
    <!-- row -->
    <div class="row">
      <!-- col -->
      <!-- h1ブログタイトル col-12 -->
      <h1 class="col-12 font-weight-bold">
        Title of a longer<br />featured blog post
      </h1>
      <!-- pタグ -->
      <p class="col-12 col-md-6 py-2">
        Something short and leading about the collection below—its contents, the
        creator, etc. Make it short and sweet, but not too short so folks don't
        simply skip over it entirely.
      </p>
      <!-- ボタン2つ -->
      <div class="col-12 justify-content-center justify-content-md-start">
        <button class="btn btn-primary">Main call to action</button>
        <button class="btn btn-secondary ml-3">Secondary action</button>
      </div>
    </div>
  </div>
</div>

<!-- 右側に画像のsection (スマホ画面は上に画像 下にテキスト)-->
<!-- グリッドシステム container -->
<div class="container py-4">
  <!-- row -->
  <div class="row align-items-center">
    <!-- col -->
    <div class="col-12 col-md-6 order-md-1 d-flex justify-content-center">
      <div class="bg-info img-size"></div>
    </div>
    <!-- col -->
    <div class="col-12 col-md-6 order-md-0 text-center text-md-left">
      <!-- グリッドシステムの入れ子 row -->
      <div class="row pt-3 pt-md-0">
        <!-- col h2タグ-->
        <h2 class="col-12">First featurette heading. It'll blow your mind.</h2>
        <!-- col pタグ-->
        <p class="col-12">
          Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id
          ligula porta felis euismod semper. Praesent commodo cursus magna, vel
          scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo.
        </p>
      </div>
    </div>
  </div>
</div>

<!-- 左側に画像のsection (スマホ画面は上に画像)-->
<!-- グリッドシステム container -->
<div class="container py-4">
  <!-- row -->
  <div class="row align-items-center">
    <!-- col -->
    <div class="col-12 col-md-6 d-flex justify-content-center">
      <div class="bg-warning img-size"></div>
    </div>
    <!-- col -->
    <div class="col-12 col-md-6 text-center text-md-left">
      <!-- row -->
      <div class="row pt-3 pt-md-0">
        <!-- col h2タグ-->
        <h2 class="col-12">First featurette heading. It'll blow your mind.</h2>
        <!-- col pタグ-->
        <p class="col-12">
          Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id
          ligula porta felis euismod semper. Praesent commodo cursus magna, vel
          scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo.
        </p>
      </div>
    </div>
  </div>
</div>

<!-- 丸い画像 section -->
<!-- グリッドシステム -->
<div class="container py-4">
  <!-- row -->
  <div class="row justify-content-between">
    <!-- col -->
    <div class="col-12 col-md-3 text-center py-5">
      <!-- 円の画像 -->
      <div class="d-flex justify-content-center align-items-center">
        <div class="bg-success circle-size"></div>
      </div>
      <!-- h3タグ -->
      <h3 class="pt-3">Heading</h3>
      <!-- pタグ -->
      <p>
        Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod.
        Nullam id dolor id nibh ultricies vehicula ut id elit. Morbi leo risus,
        porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus
        magna.
      </p>
      <!-- ボタン -->
      <button class="btn btn-secondary">View details</button>
    </div>
    <!-- 以下画像の色を変えて同じHTMLを繰り返し -->
    <!-- col -->
    <div class="col-12 col-md-3 text-center py-5">
      <div class="d-flex justify-content-center align-items-center">
        <div class="bg-primary circle-size"></div>
      </div>
      <h3 class="pt-3">Heading</h3>
      <p>
        Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod.
        Nullam id dolor id nibh ultricies vehicula ut id elit. Morbi leo risus,
        porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus
        magna.
      </p>
      <button class="btn btn-secondary">View details</button>
    </div>
    <!-- col -->
    <div class="col-12 col-md-3 text-center py-5">
      <div class="d-flex justify-content-center align-items-center">
        <div class="bg-danger circle-size"></div>
      </div>
      <h3 class="pt-3">Heading</h3>
      <p>
        Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod.
        Nullam id dolor id nibh ultricies vehicula ut id elit. Morbi leo risus,
        porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus
        magna.
      </p>
      <button class="btn btn-secondary">View details</button>
    </div>
  </div>
  <!-- 2列目のrow -->
  <div class="row justify-content-between">
    <div class="col-12 col-md-3 text-center py-5">
      <div class="d-flex justify-content-center align-items-center">
        <div class="bg-primary circle-size"></div>
      </div>
      <h3 class="pt-3">Heading</h3>
      <p>
        Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod.
        Nullam id dolor id nibh ultricies vehicula ut id elit. Morbi leo risus,
        porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus
        magna.
      </p>
      <button class="btn btn-secondary">View details</button>
    </div>
    <div class="col-12 col-md-3 text-center py-5">
      <div class="d-flex justify-content-center align-items-center">
        <div class="bg-danger circle-size"></div>
      </div>
      <h3 class="pt-3">Heading</h3>
      <p>
        Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod.
        Nullam id dolor id nibh ultricies vehicula ut id elit. Morbi leo risus,
        porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus
        magna.
      </p>
      <button class="btn btn-secondary">View details</button>
    </div>
    <div class="col-12 col-md-3 text-center py-5">
      <div class="d-flex justify-content-center align-items-center">
        <div class="bg-success circle-size"></div>
      </div>
      <h3 class="pt-3">Heading</h3>
      <p>
        Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod.
        Nullam id dolor id nibh ultricies vehicula ut id elit. Morbi leo risus,
        porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus
        magna.
      </p>
      <button class="btn btn-secondary">View details</button>
    </div>
  </div>
</div>
<!-- フッター -->
<div class="footer bg-light">
  <div class="d-flex justify-content-center align-items-center py-3">
    <p class="px-2 m-0">Copyright © 2020 Recursion</p>
    <a href="#" class="px-2">Privacy</a>
    <a href="#" class="px-2">Term</a>
  </div>
</div>
```

## 課題 4

```html
<!-- グローバルナビゲーション -->
<div class="bg-light sticky-top container-fluid">
  <nav class="container navbar navbar-expand-lg navbar-light">
    <!-- ブランドロゴ Image and text -->
    <a class="navbar-brand" href="#">
      <img
        src="https://img.icons8.com/color-glass/344/top-view-bird.png"
        alt=""
        width="70"
        height="70"
      />
      Recursion
    </a>

    <!-- toggler (ハンバーガーメニューのボタン) -->
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <!-- スマホ画面では隠れるメニュー -->
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <!-- メニューリスト -->
      <ul class="navbar-nav text-center mr-auto">
        <li class="nav-item active ml-3">
          <a class="nav-link" href="#"
            >Home<span class="sr-only">(current)</span></a
          >
        </li>
        <li class="nav-item ml-3">
          <a class="nav-link" href="#">Why Recursion?</a>
        </li>
        <li class="nav-item ml-3">
          <a class="nav-link" href="#">Community</a>
        </li>
      </ul>
      <!-- ログインと会員登録ボタン -->
      <ul class="navbar-nav text-center">
        <li class="nav-item ml-3">
          <a class="nav-link" href="#">ログイン</a>
        </li>
        <li class="nav-item ml-3">
          <a class="btn btn-outline-secondary" href="#">会員登録</a>
        </li>
      </ul>
    </div>
  </nav>
</div>

<!-- Contents Top-->
<!-- グリッドシステム container -->
<div class="container">
  <!-- row -->
  <div class="row">
    <!-- col : Text Area -->
    <div class="col-12 col-md-5 d-flex align-items-center py-4">
      <div class="container py-2">
        <p class="font-weight-bold">Recursion Community</p>
        <h3 class="font-weight-bold">Let's code together</h3>
        <p class="pt-3">
          <strong class="bg-warning">「一人でソフトウェアを作れない」</strong
          >を解決するコミュニティ。より実践的な問題を練習して、質の高いエンジニアを目指しましょう。
        </p>
        <!-- Button -->
        <a href="#" class="btn btn-primary btn-lg mt-3">コミュニティに入る</a>
      </div>
    </div>
    <!-- col : Image Area -->
    <div class="col-12 col-md-7 d-flex align-items-center">
      <div class="container">
        <img
          src="https://cdn.pixabay.com/photo/2015/01/27/19/34/giraffe-614141_960_720.jpg"
          alt=""
          class="img-fluid"
        />
      </div>
    </div>
  </div>
</div>

<!-- Contents Middle -->
<!-- container -->
<div class="container text-center text-md-left py-3">
  <!-- row : fontawesome speach bubble section-->
  <div class="row">
    <!-- col : Text Area -->
    <div class="col-12 col-md-6 py-4">
      <div class="container">
        <h3 class="font-weight-bold pt-2">Ask questions and give answers</h3>
        <p class="pt-2">
          詰まった時はいつでもコミュニティで質問することができます。適切なアドバイスをもらうこと
        </p>
      </div>
    </div>
    <!-- col : Icon Area 中央寄せ -->
    <div
      class="col-12 col-md-6 d-flex justify-content-center align-items-center py-4"
    >
      <i class="fas fa-comments fa-7x text-success"></i>
    </div>
  </div>
  <!-- row : fontawesone headphone section 以下アイコンの位置を変えて繰り返し-->
  <div class="row">
    <!-- col : Text Area -->
    <div class="col-12 col-md-6 py-4">
      <div class="container">
        <h3 class="font-weight-bold pt-2">Experience real-time coding</h3>
        <p class="pt-2">
          コーディング問題、プロジェクトをライブストリーミングで解説します。一流エンジニアがどのようなプロセスでコーディングをするかを学習することができます。
        </p>
      </div>
    </div>
    <!-- col : Icon Area 左寄せ -->
    <div
      class="col-12 col-md-6 d-flex justify-content-center justify-content-md-start align-items-center py-4"
    >
      <i class="fas fa-headphones fa-7x text-danger"></i>
    </div>
  </div>
  <!-- fontawesome trophy section-->
  <div class="row">
    <!-- col : Text Area  -->
    <div class="col-12 col-md-6 py-4">
      <div class="container">
        <h3 class="font-weight-bold pt-2">Learn with other learner</h3>
        <p class="pt-2">
          Recursionのコミュニティを通して、コンピュータサイエンスに興味のある仲間を見つけることができるので、モチベーションを維持したまま学習を続けることができます。
        </p>
      </div>
    </div>
    <!-- col : Icon Area 右寄せ -->
    <div
      class="col-12 col-md-6 d-flex justify-content-center justify-content-md-end align-items-center py-4"
    >
      <i class="fas fa-trophy fa-7x text-warning"></i>
    </div>
  </div>
</div>

<!-- Contents Bottom-->
<div class="container">
  <div class="row">
    <!-- col : Text Area -->
    <div
      class="col-12 col-md-6 py-4 d-flex align-items-center text-center text-md-left"
    >
      <div class="container py-2">
        <h3 class="font-weight-bold">Apply knowledge for reality</h3>
        <p class="pt-3">
          実用的なコーディング問題、プロジェクトを解いて、自分でソフトウェアを作ることができるエンジニアを目指しましょう。
        </p>
      </div>
    </div>
    <!-- col : Image Area -->
    <div class="col-12 col-md-6 d-flex align-items-center">
      <div class="container">
        <img
          src="https://cdn.pixabay.com/photo/2017/01/28/11/00/white-tailed-eagle-2015098__340.jpg"
          alt=""
          class="img-fluid"
        />
      </div>
    </div>
  </div>
</div>

<!-- Conversion Button Area-->
<div class="bg-primary mt-5">
  <div class="container text-center p-5">
    <h2 class="text-white">Recursionのコミュニティに参加しよう。</h2>
    <p class="text-white pt-2">
      プレミアム会員になって効率的に学習を進めよう。
    </p>
    <!-- Button -->
    <a href="" class="btn btn-warning font-weight-bold mt-3"
      >コミュニティに参加する</a
    >
  </div>
</div>
<!-- footer -->
<div class="footer my-3">
  <div class="container">
    <div class="text-center">
      <p><small>Copyright © 2020 Recursion</small></p>
    </div>
  </div>
</div>
```

## 昆虫採集アプリ

```html

```
