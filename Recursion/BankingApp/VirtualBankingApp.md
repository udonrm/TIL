# Virtual Banking App

## HTML の作成(1)

```html
<head>
  <!-- メタタグ -->
  <meta charset="utf-8" />
  <meta
    name="viewport"
    content="width=device-width, initial-scale=1, shrink-to-fit=no"
  />

  <!-- Bootstrap CSS -->
  <link
    rel="stylesheet"
    href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
    integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh"
    crossorigin="anonymous"
  />

  <!-- fontawesome -->
  <link
    href="https://use.fontawesome.com/releases/v5.13.0/css/all.css"
    rel="stylesheet"
  />

  <title>Page 1</title>
</head>
<!-- ここから記述してください。 -->
<div
  class="vh-100 bg-dark d-flex flex-column justify-content-center align-items-center"
>
  <div class="d-flex align-items-center col-md-7 col-10">
    <div class="bg-white col-12 text-center p-4">
      <h2 class="pb-3">Please type your information below</h2>
      <form>
        <div class="form-row pb-3">
          <div class="col">
            <input type="text" class="form-control" placeholder="First name" />
          </div>
          <div class="col">
            <input type="text" class="form-control" placeholder="Last name" />
          </div>
        </div>
        <div class="form-group ">
          <input
            type="email"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter your bank ID"
          />
        </div>
        <div class="form-group ">
          <input
            type="email"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter your first deposit"
          />
        </div>
      </form>
      <div>
        <button type="submit" class="btn btn-primary col-12">Submit</button>
      </div>
    </div>
  </div>
</div>
```

```css
body {
  font-family: Futura !important;
  letter-spacing: 0.02em !important;
}

p {
  margin: 0 !important;
}

/* font-size */
.rem1p3 {
  font-size: 1.3rem;
}

.rem1p5 {
  font-size: 1.5rem;
}

/* background */
.bg-green {
  background: #4ba3a1;
}

.bg-blue {
  background: #1a4567;
}

/* effect */
.hover {
  cursor: pointer;
}

.hover:hover {
  opacity: 0.9;
}

/* specific layout */
.money-box {
  margin: 1em 0;
  border: double 5px white;
  background: #1a4567;
  color: white;
}

.calculation-box {
  margin: 0.5em 0;
  padding: 0.5em 0;
  border: solid 2px white;
  background: #1a4567;
  color: white;
}
```

## HTML の作成(2)

```html
<head>
  <!-- メタタグ -->
  <meta charset="utf-8" />
  <meta
    name="viewport"
    content="width=device-width, initial-scale=1, shrink-to-fit=no"
  />

  <!-- Bootstrap CSS -->
  <link
    rel="stylesheet"
    href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
    integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh"
    crossorigin="anonymous"
  />

  <!-- fontawesome -->
  <link
    href="https://use.fontawesome.com/releases/v5.13.0/css/all.css"
    rel="stylesheet"
  />

  <title>Page 2</title>
</head>
<!-- ここから記述してください。 -->

<div
  class="vh-100 bg-dark d-flex flex-column justify-content-center align-items-center"
>
  <div class="d-flex align-items-center col-md-7 col-10">
    <div class="bg-green col-12 text-center pt-md-4 px-4 pt-1 text-white">
      <div class="pb-2 pb-md-4 text-right">
        <p class="py-1">Your Name: Kaiden Herman</p>
        <p class="py-1">Your Back ID: 12345678</p>
        <p class="py-1">Your First Deposit: $205.00</p>
      </div>
      <div class="d-flex bg-danger py-1 py-md-2">
        <p class="col-8 text-left rem1p5">Available Balance</p>
        <p class="col-4 text-right rem1p5">$12,345</p>
      </div>
      <div
        class="d-flex justify-content-center flex-wrap text-center py-3 mx-0"
      >
        <div class="col-lg-4 col-12 py-1 py-md-3 px-0 px-md-1">
          <div id="withdrawBtn" class="bg-blue hover p-3">
            <h5>WITHDRAWAL</h5>
            <i class="fas fa-wallet fa-3x"></i>
          </div>
        </div>
        <div class="col-lg-4 col-12 py-1 py-md-3 px-0 px-md-1">
          <div id="depositBtn" class="bg-blue hover p-3">
            <h5>DEPOSIT</h5>
            <i class="fas fa-coins fa-3x"></i>
          </div>
        </div>
        <div class="col-lg-4 col-12 py-1 py-md-3 px-0 px-md-1">
          <div id="comeBackLaterBtn" class="bg-blue hover p-3">
            <h5>COME BACK LATER</h5>
            <i class="fas fa-home fa-3x"></i>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
```

```css
body {
  font-family: Futura !important;
  letter-spacing: 0.02em !important;
}

p {
  margin: 0 !important;
}

/* font-size */
.rem1p3 {
  font-size: 1.3rem;
}

.rem1p5 {
  font-size: 1.5rem;
}

/* background */
.bg-green {
  background: #4ba3a1;
}

.bg-blue {
  background: #1a4567;
}

/* effect */
.hover {
  cursor: pointer;
}

.hover:hover {
  opacity: 0.9;
}

/* specific layout */
.money-box {
  margin: 1em 0;
  border: double 5px white;
  background: #1a4567;
  color: white;
}

.calculation-box {
  margin: 0.5em 0;
  padding: 0.5em 0;
  border: solid 2px white;
  background: #1a4567;
  color: white;
}
```

## HTML の作成(3)

```html
<head>
  <!-- メタタグ -->
  <meta charset="utf-8" />
  <meta
    name="viewport"
    content="width=device-width, initial-scale=1, shrink-to-fit=no"
  />

  <!-- Bootstrap CSS -->
  <link
    rel="stylesheet"
    href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
    integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh"
    crossorigin="anonymous"
  />

  <!-- fontawesome -->
  <link
    href="https://use.fontawesome.com/releases/v5.13.0/css/all.css"
    rel="stylesheet"
  />

  <title>Page 3</title>
</head>
<!-- ここから記述してください。 -->
<div
  class="vh-100 bg-dark d-flex flex-column justify-content-center align-items-center"
>
  <div class="d-flex align-items-center col-md-7 col-10">
    <div class="bg-white col-12 text-center p-4">
      <h2 class="pb-3">Please Enter The Withdrawal Amount</h2>
      <div class="form-group row">
        <label
          for="moneyWithdraw100"
          class="col-2 col-form-label col-form-label-sm"
          >$100</label
        >
        <div class="col-10">
          <input
            type="number"
            class="form-control form-control-sm text-right withdraw-bill"
            data-bill="100"
            id="moneyWithdraw100"
            placeholder="5"
          />
        </div>
      </div>
      <div class="form-group row">
        <label
          for="moneyWithdraw50"
          class="col-2 col-form-label col-form-label-sm"
          >$50</label
        >
        <div class="col-10">
          <input
            type="number"
            class="form-control form-control-sm text-right withdraw-bill"
            data-bill="50"
            id="moneyWithdraw50"
            placeholder="1"
          />
        </div>
      </div>
      <div class="form-group row">
        <label
          for="moneyWithdraw20"
          class="col-2 col-form-label col-form-label-sm"
          >$20</label
        >
        <div class="col-10">
          <input
            type="number"
            class="form-control form-control-sm text-right withdraw-bill"
            data-bill="20"
            id="moneyWithdraw20"
            placeholder="2"
          />
        </div>
      </div>
      <div class="form-group row">
        <label
          for="moneyWithdraw10"
          class="col-2 col-form-label col-form-label-sm"
          >$10</label
        >
        <div class="col-10">
          <input
            type="number"
            class="form-control form-control-sm text-right withdraw-bill"
            data-bill="10"
            id="moneyWithdraw10"
            placeholder="3"
          />
        </div>
      </div>
      <div class="form-group row">
        <label
          for="moneyWithdraw5"
          class="col-2 col-form-label col-form-label-sm"
          >$5</label
        >
        <div class="col-10">
          <input
            type="number"
            class="form-control form-control-sm text-right withdraw-bill"
            data-bill="5"
            id="moneyWithdraw5"
            placeholder="1"
          />
        </div>
      </div>
      <div class="form-group row">
        <label
          for="moneyWithdraw1"
          class="col-2 col-form-label col-form-label-sm"
          >$1</label
        >
        <div class="col-10">
          <input
            type="number"
            class="form-control form-control-sm text-right withdraw-bill"
            data-bill="1"
            id="moneyWithdraw1"
            placeholder="4"
          />
        </div>
      </div>
      <div class="text-center money-box p-3">
        <p id="withdrawTotal">$0.00</p>
      </div>
      <div class="d-flex justify-content-between">
        <div class="col-6 pl-0">
          <button id="withdrawGoBack" class="btn btn-outline-primary col-12">
            Go Back
          </button>
        </div>
        <div class="col-6 pr-0">
          <button id="withdrawProcess" class="btn btn-primary col-12">
            Next
          </button>
        </div>
      </div>
    </div>
  </div>
</div>
```

```css
/* ここから記述してください。  */
body {
  font-family: Futura !important;
  letter-spacing: 0.02em !important;
}

p {
  margin: 0 !important;
}

/* font-size */
.rem1p3 {
  font-size: 1.3rem;
}

.rem1p5 {
  font-size: 1.5rem;
}

/* background */
.bg-green {
  background: #4ba3a1;
}

.bg-blue {
  background: #1a4567;
}

/* effect */
.hover {
  cursor: pointer;
}

.hover:hover {
  opacity: 0.9;
}

.money-box {
  margin: 1em 0;
  border: double 5px white;
  background: #1a4567;
  color: white;
}

.calculation-box {
  margin: 0.5em 0;
  padding: 0.5em 0;
  border: solid 2px white;
  background: #1a4567;
  color: white;
}
```

## HTML の作成(4)

```html
<head>
  <!-- メタタグ -->
  <meta charset="utf-8" />
  <meta
    name="viewport"
    content="width=device-width, initial-scale=1, shrink-to-fit=no"
  />

  <!-- Bootstrap CSS -->
  <link
    rel="stylesheet"
    href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
    integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh"
    crossorigin="anonymous"
  />

  <!-- fontawesome -->
  <link
    href="https://use.fontawesome.com/releases/v5.13.0/css/all.css"
    rel="stylesheet"
  />

  <title>Page 4</title>
</head>
<!-- ここから記述してください。 -->
<div
  class="vh-100 bg-dark d-flex flex-column justify-content-center align-items-center"
>
  <div class="d-flex align-items-center col-md-7 col-10">
    <div class="bg-white col-12 text-center p-4">
      <div class="col-12">
        <h2 class="pb-1">The money you are going to take is ...</h2>
        <div class="d-flex justify-content-center">
          <div class="text-right col-8 px-1 calculation-box">
            <p class="rem1p3 calculation-box mb-1 pr-2">5 × $100</p>
            <p class="rem1p3 calculation-box mb-1 pr-2">1 × $50</p>
            <p class="rem1p3 calculation-box mb-1 pr-2">2 × $20</p>
            <p class="rem1p3 calculation-box mb-1 pr-2">1 × $5</p>
            <p class="rem1p3 calculation-box mb-1 pr-2">4 × $1</p>
            <p class="rem1p3 pr-2">total: $599</p>
          </div>
        </div>
        <div class="d-flex justify-content-between mt-3">
          <div class="col-6 pl-0">
            <button type="submit" class="btn btn-outline-primary col-12">
              Go Back
            </button>
          </div>
          <div class="col-6 pr-0">
            <button type="submit" class="btn btn-primary col-12">
              Confirm
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
```

```css
/* ここから記述してください。  */
body {
  font-family: Futura !important;
  letter-spacing: 0.02em !important;
}

p {
  margin: 0 !important;
}

/* font-size */
.rem1p3 {
  font-size: 1.3rem;
}

.rem1p5 {
  font-size: 1.5rem;
}

/* background */
.bg-green {
  background: #4ba3a1;
}

.bg-blue {
  background: #1a4567;
}

/* effect */
.hover {
  cursor: pointer;
}

.hover:hover {
  opacity: 0.9;
}

/* specific layout */
.money-box {
  margin: 1em 0;
  border: double 5px white;
  background: #1a4567;
  color: white;
}

.calculation-box {
  margin: 0.5em 0;
  padding: 0.5em 0;
  border: solid 2px white;
  background: #1a4567;
  color: white;
}
```

## HTML の作成(5)

```html
<head>
  <!-- メタタグ -->
  <meta charset="utf-8" />
  <meta
    name="viewport"
    content="width=device-width, initial-scale=1, shrink-to-fit=no"
  />

  <!-- Bootstrap CSS -->
  <link
    rel="stylesheet"
    href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
    integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh"
    crossorigin="anonymous"
  />

  <!-- fontawesome -->
  <link
    href="https://use.fontawesome.com/releases/v5.13.0/css/all.css"
    rel="stylesheet"
  />

  <title>Page 5</title>
</head>
<div
  class="vh-100 bg-dark d-flex flex-column justify-content-center align-items-center"
>
  <div class="d-flex align-items-center col-md-7 col-10">
    <div class="bg-white col-12 text-center p-4">
      <h2 class="pb-3">Please Enter The Deposit Amount</h2>
      <div class="form-group">
        <input
          type="email"
          class="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          placeholder="$105.00"
        />
      </div>
      <div class="d-flex justify-content-between mt-3">
        <div class="col-6 pl-0">
          <button type="submit" class="btn btn-outline-primary col-12">
            Go Back
          </button>
        </div>
        <div class="col-6 pr-0">
          <button type="submit" class="btn btn-primary col-12">Confirm</button>
        </div>
      </div>
    </div>
  </div>
</div>
```

```css
body {
  font-family: Futura !important;
  letter-spacing: 0.02em !important;
}

p {
  margin: 0 !important;
}

/* font-size */
.rem1p3 {
  font-size: 1.3rem;
}

.rem1p5 {
  font-size: 1.5rem;
}

/* background */
.bg-green {
  background: #4ba3a1;
}

.bg-blue {
  background: #1a4567;
}

/* effect */
.hover {
  cursor: pointer;
}

.hover:hover {
  opacity: 0.9;
}

/* specific layout */
.money-box {
  margin: 1em 0;
  border: double 5px white;
  background: #1a4567;
  color: white;
}

.calculation-box {
  margin: 0.5em 0;
  padding: 0.5em 0;
  border: solid 2px white;
  background: #1a4567;
  color: white;
}
```

## HTML の作成(6)

```html
<head>
  <!-- メタタグ -->
  <meta charset="utf-8" />
  <meta
    name="viewport"
    content="width=device-width, initial-scale=1, shrink-to-fit=no"
  />

  <!-- Bootstrap CSS -->
  <link
    rel="stylesheet"
    href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
    integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh"
    crossorigin="anonymous"
  />

  <!-- fontawesome -->
  <link
    href="https://use.fontawesome.com/releases/v5.13.0/css/all.css"
    rel="stylesheet"
  />

  <title>Page 5</title>
</head>
<div
  class="vh-100 bg-dark d-flex flex-column justify-content-center align-items-center"
>
  <div class="d-flex align-items-center col-md-7 col-10">
    <div class="bg-white col-12 text-center p-4">
      <h2 class="pb-3">How many days will you be gone?</h2>
      <div class="form-group">
        <input type="text" class="form-control" placeholder="4 days" />
      </div>
      <div class="d-flex justify-content-between mt-3">
        <div class="col-6 pl-0">
          <button type="submit" class="btn btn-outline-primary col-12">
            Go Back
          </button>
        </div>
        <div class="col-6 pr-0">
          <button type="submit" class="btn btn-primary col-12">Confirm</button>
        </div>
      </div>
    </div>
  </div>
</div>
```

```css
.rem1p3 {
  font-size: 1.3rem;
}

.rem1p5 {
  font-size: 1.5rem;
}

/* background */
.bg-green {
  background: #4ba3a1;
}

.bg-blue {
  background: #1a4567;
}

/* effect */
.hover {
  cursor: pointer;
}

.hover:hover {
  opacity: 0.9;
}

/* specific layout */
.money-box {
  margin: 1em 0;
  border: double 5px white;
  background: #1a4567;
  color: white;
}

.calculation-box {
  margin: 0.5em 0;
  padding: 0.5em 0;
  border: solid 2px white;
  background: #1a4567;
  color: white;
}
```

## 名前空間の設定

- https://www.sejuku.net/blog/65850

```html
<!-- 
    ToDo: 今度何度も使う、initial-formとbankPageの要素の情報を名前空間configの中に保存し、コンソールで出力しましょう。 
-->
<head>
  <!-- Bootstrap CSS -->
  <link
    rel="stylesheet"
    href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
    integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh"
    crossorigin="anonymous"
  />

  <!-- fontawesome -->
  <link
    href="https://use.fontawesome.com/releases/v5.13.0/css/all.css"
    rel="stylesheet"
  />
</head>
<!-- 1ページ目 -->
<div
  class="vh-100 bg-dark d-flex flex-column justify-content-center align-items-center"
>
  <div class="d-flex align-items-center col-md-7 col-10">
    <div id="initial-form" class="bg-white col-12 text-center p-4">
      <h2 class="pb-3">Please type your information below</h2>
      <form class="form">
        <div class="form-group">
          <!-- input要素のrequired属性は、その入力項目が必須属性であることをブラウザに知らせることができます。HTML5では、required属性を設定するだけでJavaScriptによる入力チェックがなくてもエラーメッセージを表示させることが可能です。 -->
          <input
            type="email"
            name="userEmail"
            class="form-control"
            placeholder="Email"
            required
          />
        </div>
        <div class="form-group">
          <input
            type="text"
            name="userFirstName"
            class="form-control"
            placeholder="First name"
            required
          />
        </div>
        <div class="form-group">
          <input
            type="text"
            name="userLastName"
            class="form-control"
            placeholder="Last name"
            required
          />
        </div>
        <div class="form-group">
          <input
            type="number"
            class="form-control"
            name="userFirstDeposit"
            aria-describedby="emailHelp"
            placeholder="Enter your first deposit"
            required
          />
        </div>
        <div class="form-group">
          <div class="form-check">
            <!-- チェックボックスをあらかじめチェックするにはchecked属性を使用します。 -->
            <input
              class="form-check-input"
              type="radio"
              name="userAccountType"
              id="userAccountType1"
              value="savings"
              checked
              required
            />
            <label class="form-check-label" for="userAccountType1">
              Savings
            </label>
          </div>
          <div class="form-check">
            <input
              class="form-check-input"
              type="radio"
              name="userAccountType"
              id="userAccountType2"
              value="checkings"
              required
            />
            <label class="form-check-label" for="userAccountType2">
              Checkings
            </label>
          </div>
        </div>
        <button type="submit" class="btn btn-primary col-12">Submit</button>
      </form>
    </div>
    <!-- 2ページ目の枠 -->
    <div id="bankPage" class="bg-green col-12 text-center text-white"></div>
  </div>
</div>
```

```js
// 名前空間configを作成して、メンバ変数にinitialFormとbankPageの要素情報を保存してください。
// 名前空間がわからない方は、初級コンテンツ「クラスと名前空間」で復習しましょう。
// 名前空間を通じて、initial-formとbankPageにアクセスし、コンソールに出力しましょう。
// ここからJavaScriptを記述してください。

class config{
  initialForm: document.getElementById("initial-form"),
  bankPage: document.getElementById("bankPage")
}

console.log(config.initialForm);
console.log(config.bankPage);
```

## クラスの設定

```js
const config = {
  initialForm: document.getElementById("initial-form"),
  bankPage: document.getElementById("bankPage"),
};

// 個々のユーザーをオブジェクトとして管理するためにBankAccountクラスを作成してください。
// firstName、lastName、email、type、moneyを入力として受け取って、メンバ変数を設定し、オブジェクトの初期値を決定してください。
// メンバ変数: firstName、lastName、email、type、money、initialDeposit
// getFullName()メソッドを作成してください。

// 具体的にユーザーを入れて出力してみましょう。
// "Elisa", "Jones", "elisa.jones@gmail.com", "checking", "30"
// getFullName()メソッドにアクセスし、コンソールに出力してみましょう。

class BankAccount {
  constructor(firstName, lastName, email, type, money) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.type = type;
    this.money = money;
  }

  getFullName() {
    return this.firstName + " " + this.lastName;
  }
}

let user1 = new BankAccount(
  "Elisa",
  "Jones",
  "elisa.jones@gmail.com",
  "checking",
  "30"
);
console.log(user1);
console.log(user1.getFullName());
```

## ランダムな数字の作成

```js
// ランダムな数を生成するには、Math.random()を使用します。
// Math.random()は0-1未満のランダムな数を返します。
console.log(Math.random());

// では、ここで0-3未満のランダムな数を生成してみましょう。
console.log(Math.random() * 3);

// 次に2-5未満のランダムな数を生成してみましょう。
console.log(Math.random() * (5 - 2) + 2);

// したがって、Math.random() * (max - min) + minでmin-max未満のランダムな数を生成することができます。

// では、minとmaxを受け取って、min-max間のランダムな数を返す、getRandomIntegerという関数を作成してください。
// getRandomInteger(4,10)を出力してください。
// getRandomInteger(50,100)を出力してください。
// floor関数を使って関数を書き換えて、整数のみ出力するようにしてください。

function getRandomInteger(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

console.log(getRandomInteger(4, 10));
console.log(getRandomInteger(50, 100));
```

---

```js
const config = {
  initialForm: document.getElementById("initial-form"),
  bankPage: document.getElementById("bankPage"),
};

// 口座番号を初期値として設定してください。
class BankAccount {
  constructor(firstName, lastName, email, type, money) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.type = type;
    this.money = money;
    this.initialDeposit = money;
  }

  getFullName() {
    return this.firstName + " " + this.lastName;
  }
}

function getRandomInteger(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

let user1 = new BankAccount(
  "Elisa",
  "Jones",
  "elisa.jones@gmail.com",
  "checking",
  getRandomInteger(1, 1000),
  "30"
);

let user2 = new BankAccount(
  "Jameson",
  "Dorsey",
  "jameson.dorsey@gmail.com",
  "saving",
  getRandomInteger(1, Math.pow(10, 8)),
  "90"
);

console.log(user1);
console.log(user2);

// minとmaxを受け取ってランダムな整数を生成するgetRandomIntegerという関数を作成してください。
// 出力の数値は整数でなければいけません。

// 具体的にユーザーを入れてコンソールに出力してみましょう。
// "Elisa", "Jones", "elisa.jones@gmail.com", "checking", getRandomInteger(1,1000), "30"

// Jamesonに対しては、1から10^8までのランダムな整数を設定してください。
// "Jameson", "Dorsey", "jameson.dorsey@gmail.com", "saving", "90"
// コンソールに出力してみましょう。
```

## submit した情報からインスタンス作成

```html
<head>
  <!-- Bootstrap CSS -->
  <link
    rel="stylesheet"
    href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
    integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh"
    crossorigin="anonymous"
  />

  <!-- fontawesome -->
  <link
    href="https://use.fontawesome.com/releases/v5.13.0/css/all.css"
    rel="stylesheet"
  />
</head>
<!-- 1ページ目 -->
<div
  class="vh-100 bg-dark d-flex flex-column justify-content-center align-items-center"
>
  <div class="d-flex align-items-center col-md-7 col-10">
    <div id="initial-form" class="bg-white col-12 text-center p-4">
      <h2 class="pb-3">Please type your information below</h2>
      <!-- formからid取得 -->
      <!-- 「onsubmit」は「formタグ」内の属性として記述するようになっており、submitされた時に起動するイベントです。 -->
      <!-- preventDefault() メソッドは、ユーザーエージェントに、イベントが明示的に処理されない場合にその既定のアクションを通常どおりに行うべきではないことを伝えます。通常submitするとその情報を送信してページを更新することですが、それを防ぐことができます。 -->
      <form
        id="bank-form"
        class="form"
        onsubmit="initializeUserAccount(); event.preventDefault()"
      >
        <div class="form-group">
          <input
            type="email"
            name="userEmail"
            class="form-control"
            placeholder="Email"
            required
          />
        </div>
        <div class="form-group">
          <input
            type="text"
            name="userFirstName"
            class="form-control"
            placeholder="First name"
            required
          />
        </div>
        <div class="form-group">
          <input
            type="text"
            name="userLastName"
            class="form-control"
            placeholder="Last name"
            required
          />
        </div>
        <div class="form-group">
          <input
            type="number"
            class="form-control"
            name="userFirstDeposit"
            aria-describedby="emailHelp"
            placeholder="Enter your first deposit"
            required
          />
        </div>
        <div class="form-group">
          <div class="form-check">
            <input
              class="form-check-input"
              type="radio"
              name="userAccountType"
              id="userAccountType1"
              value="savings"
              checked
              required
            />
            <label class="form-check-label" for="userAccountType1">
              Savings
            </label>
          </div>
          <div class="form-check">
            <input
              class="form-check-input"
              type="radio"
              name="userAccountType"
              id="userAccountType2"
              value="checkings"
              required
            />
            <label class="form-check-label" for="userAccountType2">
              Checkings
            </label>
          </div>
        </div>
        <button type="submit" class="btn btn-primary col-12">Submit</button>
      </form>
    </div>
    <!-- 2ページ目の枠 -->
    <div id="bankPage" class="bg-green col-12 text-center text-white"></div>
  </div>
</div>
```

```js
const config = {
  initialForm: document.getElementById("initial-form"),
  bankPage: document.getElementById("bankPage"),
};

class BankAccount {
  constructor(firstName, lastName, email, type, accountNumber, money) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.type = type;
    this.accountNumber = accountNumber;
    this.money = money;
    this.initialDeposit = money;
  }

  getFullName() {
    return this.firstName + " " + this.lastName;
  }
}

function getRandomInteger(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

// inputに応じてオブジェクトを作成する、initializeUserAccountという関数を実装してください。
// 受け取った情報をコンソールに表示するために、関数の中にはconsole.logを入れて、入力された情報と一致するか確かめましょう。
// querySelectorAllを使って、セレクタの文字列をリストとして取得してください。
// querySelectorAll(`input[name="id名"]`)によってinputタグの特定のidの情報を取得してください。
// https://developer.mozilla.org/ja/docs/Web/API/Document/querySelectorAll
// 入力された金額は文字列なので、int型に変換して初期化してください。

function initializeUserAccount() {
  const form = document.getElementById("bank-form");
  let userBankAccount = new BankAccount(
    form.querySelectorAll(`input[name="userFirstName"]`).item(0).value,
    form.querySelectorAll(`input[name="userLastName"]`).item(0).value,
    form.querySelectorAll(`input[name="userEmail"]`)[0].value,
    form
      .querySelectorAll(`input[name="userAccountType"]:checked`)
      .item(0).value,
    getRandomInteger(1, Math.pow(10, 8)),
    parseInt(
      form.querySelectorAll(`input[name="userFirstDeposit"]`).item(0).value
    )
  );
  console.log(userBankAccount);
}
```

## データの反映

```js
const config = {
  initialForm: document.getElementById("initial-form"),
  bankPage: document.getElementById("bankPage"),
};

class BankAccount {
  constructor(firstName, lastName, email, type, accountNumber, money) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.type = type;
    this.accountNumber = accountNumber;
    this.money = money;
    this.initialDeposit = money;
  }

  getFullName() {
    return this.firstName + " " + this.lastName;
  }
}

function getRandomInteger(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function initializeUserAccount() {
  const form = document.getElementById("bank-form");
  let userBankAccount = new BankAccount(
    form.querySelectorAll(`input[name="userFirstName"]`).item(0).value,
    form.querySelectorAll(`input[name="userLastName"]`).item(0).value,
    form.querySelectorAll(`input[name="userEmail"]`)[0].value,
    form
      .querySelectorAll(`input[name="userAccountType"]:checked`)
      .item(0).value,
    getRandomInteger(1, Math.pow(10, 8)),
    parseInt(
      form.querySelectorAll(`input[name="userFirstDeposit"]`).item(0).value
    )
  );
  console.log(userBankAccount);

  // 1ページ目を非表示にして、2ページ目を呼び出してください。
  config.initialForm.classList.add("d-none");
  config.bankPage.append(mainBankPage(userBankAccount));
}

// <div class="pb-2 pb-md-4 text-right">
//     <p class="py-1">Your Name: Kaiden Herman</p>
//     <p class="py-1">Your Back ID: 12345678</p>
//     <p class="py-1">Your First Deposit: $205.00</p>
// </div>

// オブジェクトを受け取り、2ページ目を生成するmainBankPageという関数を作成してください。
// submitされた情報をページに反映してみましょう。
// 上の部分をJavaScriptによって作成してみましょう。
// innerHTMLによってオブジェクトの情報を要素に挿入しましょう。

function mainBankPage(bankAccount) {
  let infoCon = document.createElement("div");
  infoCon.classList.add("pb-2", "pb-md-4", "text-right");

  let nameP = document.createElement("p");
  nameP.classList.add("py-1");

  let bankIdP = nameP.cloneNode(true);
  let initialDepositP = nameP.cloneNode(true);

  nameP.innerHTML = bankAccount.getFullName();
  bankIdP.innerHTML = bankAccount.accountNumber;
  initialDepositP.innerHTML = bankAccount.initialDeposit;

  infoCon.append(nameP, bankIdP, initialDepositP);
  return infoCon;
}
```

## テンプレートリテラル

```js
// テンプレートリテラルを使わない今までのやり方
let string = "My name is";
console.log("Hello" + string + "Steve. Nice to meet you.");

// テンプレートリテラルを使うと${変数}で、変数を含めることができます。
// したがって、今まで使っていた、「+」演算子を省略することができます。
console.log(`Hello ${string} Steve. Nice to meet you.`);

// 計算式も含めることができます。
console.log(`半径2の円の面積は${2 * 2 * 3.14}です。`);
```

---

```js
function mainBankPage(bankAccount) {
  let infoCon = document.createElement("div");
  infoCon.classList.add("pb-2", "pb-md-4", "text-right");

  let nameP = document.createElement("p");
  nameP.classList.add("py-1");

  let bankIdP = nameP.cloneNode(true);
  let initialDepositP = nameP.cloneNode(true);

  nameP.innerHTML = bankAccount.getFullName();
  bankIdP.innerHTML = bankAccount.accountNumber;
  initialDepositP.innerHTML = bankAccount.initialDeposit;

  infoCon.append(nameP, bankIdP, initialDepositP);

  // <div class="d-flex bg-danger py-1 py-md-2">
  //     <p class="col-8 text-left rem1p5">Available Balance</p>
  //     <p class="col-4 text-right rem1p5">$12,345</p>
  // </div>

  // この部分をcreateElementやinnerHTMLを使って作成してください。
  // 要素.innerHTML =
  // `
  //     <p class="px-2">Recursion</p>
  //     <p class="col-12">Computer Science</p>
  // `;
  // innerHTMLはこのような形でまとめて要素を追加することができます。
  // テンプレートリテラルを活用してオブジェクトの情報をHTMLに挿入してください。

  // ここからJavaScriptを記述してください。

  let balanceCon = document.createElement("div");
  balanceCon.classList.add("d-flex", "bg-danger", "py-1", "py-md-2");

  balanceCon.innerHTML = `
  <p class="col-8 text-left rem1p5">Available Balance</p>
  <p class="col-4 text-right rem1p5">$${bankAccount.money}</p>
  `;
  return balanceCon;
}
```

## 2 ページ目の完成

```js
const config = {
  initialForm: document.getElementById("initial-form"),
  bankPage: document.getElementById("bankPage"),
};

class BankAccount {
  constructor(firstName, lastName, email, type, accountNumber, money) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.type = type;
    this.accountNumber = accountNumber;
    this.money = money;
    this.initialDeposit = money;
  }

  getFullName() {
    return this.firstName + " " + this.lastName;
  }
}

function getRandomInteger(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function initializeUserAccount() {
  const form = document.getElementById("bank-form");
  let userBankAccount = new BankAccount(
    form.querySelectorAll(`input[name="userFirstName"]`).item(0).value,
    form.querySelectorAll(`input[name="userLastName"]`).item(0).value,
    form.querySelectorAll(`input[name="userEmail"]`)[0].value,
    form
      .querySelectorAll(`input[name="userAccountType"]:checked`)
      .item(0).value,
    getRandomInteger(1, Math.pow(10, 8)),
    parseInt(
      form.querySelectorAll(`input[name="userFirstDeposit"]`).item(0).value
    )
  );
  console.log(userBankAccount);

  config.initialForm.classList.add("d-none");
  config.bankPage.append(mainBankPage(userBankAccount));
}

function mainBankPage(bankAccount) {
  let infoCon = document.createElement("div");
  infoCon.classList.add("pb-2", "pb-md-4", "text-right");

  let nameP = document.createElement("p");
  nameP.classList.add("py-1");

  let bankIdP = nameP.cloneNode(true);
  let initialDepositP = nameP.cloneNode(true);

  nameP.innerHTML = bankAccount.getFullName();
  bankIdP.innerHTML = bankAccount.accountNumber;
  initialDepositP.innerHTML = bankAccount.initialDeposit;

  infoCon.append(nameP, bankIdP, initialDepositP);

  let balanceCon = document.createElement("div");
  balanceCon.classList.add("d-flex", "bg-danger", "py-1", "py-md-2");

  balanceCon.innerHTML = `
        <p class="col-8 text-left rem1p5">Available Balance</p>
        <p class="col-4 text-right rem1p5">$${bankAccount.money}</p>
    `;

  // ---- infoCon ----
  // ---- balanceCon ----

  // <div class="d-flex justify-content-center flex-wrap text-center py-3 mx-0">
  //     <div class="col-lg-4 col-12 py-1 py-md-3 px-0 px-md-1">
  //         <div id="withdrawBtn" class="bg-blue hover p-3">
  //             <h5>WITHDRAWAL</h5>
  //             <i class="fas fa-wallet fa-3x"></i>
  //         </div>
  //     </div>
  //     <div class="col-lg-4 col-12 py-1 py-md-3 px-0 px-md-1">
  //         <div id="depositBtn" class="bg-blue hover p-3">
  //             <h5>DEPOSIT</h5>
  //             <i class="fas fa-coins fa-3x"></i>
  //         </div>
  //     </div>
  //     <div class="col-lg-4 col-12 py-1 py-md-3 px-0 px-md-1">
  //         <div id="comeBackLaterBtn" class="bg-blue hover p-3">
  //             <h5>COME BACK LATER</h5>
  //             <i class="fas fa-home fa-3x"></i>
  //         </div>
  //     </div>
  // </div>

  // JavaScriptを用いて、上の部分を作成してください。
  // innerHTMLを使って要素をまとめて挿入しましょう。
  // infoCon、balanceCon、作成したものをcontainerに追加し、containerをreturnしましょう。

  // ここからJavaScriptを作成してください。
  let menuCon = document.createElement("div");
  menuCon.classList.add(
    "d-flex",
    "justify-content-center",
    "flex-wrap",
    "text-center",
    "py-3",
    "mx-0"
  );

  menuCon.innerHTML = `
  <div class="col-lg-4 col-12 py-1 py-md-3 px-0 px-md-1">
    <div id="withdrawBtn" class="bg-blue hover p-3">
      <h5>WITHDRAWAL</h5>
        <i class="fas fa-wallet fa-3x"></i>
    </div>
  </div>
  <div class="col-lg-4 col-12 py-1 py-md-3 px-0 px-md-1">
    <div id="depositBtn" class="bg-blue hover p-3">
      <h5>DEPOSIT</h5>
        <i class="fas fa-coins fa-3x"></i>
    </div>
  </div>
  <div class="col-lg-4 col-12 py-1 py-md-3 px-0 px-md-1">
    <div id="comeBackLaterBtn" class="bg-blue hover p-3">
      <h5>COME BACK LATER</h5>
        <i class="fas fa-home fa-3x"></i>
    </div>
  </div>
  `;

  let container = document.createElement("div");
  container.append(infoCon, balanceCon, menuCon);

  return container;
}
```

## アラートの実装

```js
const config = {
  initialForm: document.getElementById("initial-form"),
  bankPage: document.getElementById("bankPage"),
};

class BankAccount {
  constructor(firstName, lastName, email, type, accountNumber, money) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.type = type;
    this.accountNumber = accountNumber;
    this.money = money;
    this.initialDeposit = money;
  }

  getFullName() {
    return this.firstName + " " + this.lastName;
  }
}

function getRandomInteger(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function initializeUserAccount() {
  const form = document.getElementById("bank-form");
  let userBankAccount = new BankAccount(
    form.querySelectorAll(`input[name="userFirstName"]`).item(0).value,
    form.querySelectorAll(`input[name="userLastName"]`).item(0).value,
    form.querySelectorAll(`input[name="userEmail"]`)[0].value,
    form
      .querySelectorAll(`input[name="userAccountType"]:checked`)
      .item(0).value,
    getRandomInteger(1, Math.pow(10, 8)),
    parseInt(
      form.querySelectorAll(`input[name="userFirstDeposit"]`).item(0).value
    )
  );
  console.log(userBankAccount);

  config.initialForm.classList.add("d-none");
  config.bankPage.append(mainBankPage(userBankAccount));
}

function mainBankPage(bankAccount) {
  let infoCon = document.createElement("div");
  infoCon.classList.add("pb-2", "pb-md-4", "text-right");

  let nameP = document.createElement("p");
  nameP.classList.add("py-1");

  let bankIdP = nameP.cloneNode(true);
  let initialDepositP = nameP.cloneNode(true);

  nameP.innerHTML = bankAccount.getFullName();
  bankIdP.innerHTML = bankAccount.accountNumber;
  initialDepositP.innerHTML = bankAccount.initialDeposit;

  infoCon.append(nameP, bankIdP, initialDepositP);

  let balanceCon = document.createElement("div");
  balanceCon.classList.add("d-flex", "bg-danger", "py-1", "py-md-2");

  balanceCon.innerHTML = `
        <p class="col-8 text-left rem1p5">Available Balance</p>
        <p class="col-4 text-right rem1p5">$${bankAccount.money}</p>
    `;

  let menuCon = document.createElement("div");
  menuCon.classList.add(
    "d-flex",
    "justify-content-center",
    "flex-wrap",
    "text-center",
    "py-3",
    "mx-0"
  );

  // 各ボタンにIDをつけてください。
  // withdrawBtn、depositBtn、comeBackLaterBtn

  menuCon.innerHTML = `
        <div class="col-lg-4 col-12 py-1 py-md-3 px-0 px-md-1">
            <div class="bg-blue hover p-3" id = "withdrawBtn">
                <h5>WITHDRAWAL</h5>
                <i class="fas fa-wallet fa-3x"></i>
            </div>
        </div>
        <div class="col-lg-4 col-12 py-1 py-md-3 px-0 px-md-1">
            <div class="bg-blue hover p-3" id = "depositBtn">
                <h5>DEPOSIT</h5>
                <i class="fas fa-coins fa-3x"></i>
            </div>
        </div>
        <div class="col-lg-4 col-12 py-1 py-md-3 px-0 px-md-1">
            <div class="bg-blue hover p-3" id = "comeBackLaterBtn">
                <h5>COME BACK LATER</h5>
                <i class="fas fa-home fa-3x"></i>
            </div>
        </div>
    `;

  // 各ボタンがクリックされた時にalertをつけます。
  // querySelectorAllを使って要素を指定してください。querySelectorAll(#id)でidを指定することができます。
  // document.getElementByIdは、documentの中(今スクリーン上にあるもの)を検索します。したがって、ここでは、document.getElementById("withdrawBtn")は使えません。
  // ここからJavaScriptを記述してください。

  menuCon
    .querySelectorAll("#withdrawBtn")[0]
    .addEventListener("click", function () {
      alert("withdraw");
    });

  menuCon
    .querySelectorAll("#depositBtn")[0]
    .addEventListener("click", function () {
      alert("deposit");
    });

  menuCon
    .querySelectorAll("#comeBackLaterBtn")[0]
    .addEventListener("click", function () {
      alert("come back later");
    });

  let container = document.createElement("div");
  container.append(infoCon, balanceCon, menuCon);

  return container;
}
```

## withdraw ページの作成

```js
// <h2 class="pb-3">Please Enter The Withdrawal Amount</h2>
// <div class="form-group row">
//     <label for="moneyWithdraw100" class="col-2 col-form-label col-form-label-sm">$100</label>
//     <div class="col-10">
//         <input type="number" class="form-control form-control-sm text-right withdraw-bill" data-bill="100" id="moneyWithdraw100" placeholder="5">
//     </div>
// </div>
// <div class="form-group row">
//     <label for="moneyWithdraw50" class="col-2 col-form-label col-form-label-sm">$50</label>
//     <div class="col-10">
//         <input type="number" class="form-control form-control-sm text-right withdraw-bill" data-bill="50" id="moneyWithdraw50" placeholder="1">
//     </div>
// </div>
// <div class="form-group row">
//     <label for="moneyWithdraw20" class="col-2 col-form-label col-form-label-sm">$20</label>
//     <div class="col-10">
//         <input type="number" class="form-control form-control-sm text-right withdraw-bill" data-bill="20" id="moneyWithdraw20" placeholder="2">
//     </div>
// </div>
// <div class="form-group row">
//     <label for="moneyWithdraw10" class="col-2 col-form-label col-form-label-sm">$10</label>
//     <div class="col-10">
//         <input type="number" class="form-control form-control-sm text-right withdraw-bill" data-bill="10" id="moneyWithdraw10" placeholder="3">
//     </div>
// </div>
// <div class="form-group row">
//     <label for="moneyWithdraw5" class="col-2 col-form-label col-form-label-sm">$5</label>
//     <div class="col-10">
//         <input type="number" class="form-control form-control-sm text-right withdraw-bill" data-bill="5" id="moneyWithdraw5" placeholder="1">
//     </div>
// </div>
// <div class="form-group row">
//     <label for="moneyWithdraw1" class="col-2 col-form-label col-form-label-sm">$1</label>
//     <div class="col-10">
//         <input type="number" class="form-control form-control-sm text-right withdraw-bill" data-bill="1" id="moneyWithdraw1" placeholder="4">
//     </div>
// </div>
// <div class="text-center money-box p-3">
//     <p id="withdrawTotal">$0.00</p>
// </div>

// withdrawページの一部を作成する、billInputSelectorという関数を作成ください。
// billInputSelectorには、titleをパラメータとして設定してください。
// innerHTMLを使って要素をまとめて挿入しましょう。
// 作成した後はコンソールに出力して確認しましょう。
// ここからJavaScriptを記述してください。

// 出力で確認してみましょう。
// console.log(billInputSelector("Please Enter The Withdrawal Amount"));

function billInputSelector(title) {
  let container = document.createElement("div");
  container.innerHTML = `
  <h2 class="pb-3">${title}</h2>
<div class="form-group row">
    <label for="moneyWithdraw100" class="col-2 col-form-label col-form-label-sm">$100</label>
    <div class="col-10">
        <input type="number" class="form-control form-control-sm text-right withdraw-bill" data-bill="100" id="moneyWithdraw100" placeholder="5">
    </div>
</div>
<div class="form-group row">
    <label for="moneyWithdraw50" class="col-2 col-form-label col-form-label-sm">$50</label>
    <div class="col-10">
        <input type="number" class="form-control form-control-sm text-right withdraw-bill" data-bill="50" id="moneyWithdraw50" placeholder="1">
    </div>
</div>
<div class="form-group row">
    <label for="moneyWithdraw20" class="col-2 col-form-label col-form-label-sm">$20</label>
    <div class="col-10">
        <input type="number" class="form-control form-control-sm text-right withdraw-bill" data-bill="20" id="moneyWithdraw20" placeholder="2">
    </div>
</div>
<div class="form-group row">
    <label for="moneyWithdraw10" class="col-2 col-form-label col-form-label-sm">$10</label>
    <div class="col-10">
        <input type="number" class="form-control form-control-sm text-right withdraw-bill" data-bill="10" id="moneyWithdraw10" placeholder="3">
    </div>
</div>
<div class="form-group row">
    <label for="moneyWithdraw5" class="col-2 col-form-label col-form-label-sm">$5</label>
    <div class="col-10">
        <input type="number" class="form-control form-control-sm text-right withdraw-bill" data-bill="5" id="moneyWithdraw5" placeholder="1">
    </div>
</div>
<div class="form-group row">
    <label for="moneyWithdraw1" class="col-2 col-form-label col-form-label-sm">$1</label>
    <div class="col-10">
        <input type="number" class="form-control form-control-sm text-right withdraw-bill" data-bill="1" id="moneyWithdraw1" placeholder="4">
    </div>
</div>
<div class="text-center money-box p-3">
    <p id="withdrawTotal">$0.00</p>
</div>
  `;
  return container;
}
console.log(billInputSelector("Please Enter The Withdrawal Amount"));
```

## withdraw ページの作成(2)

```js
// <div class="d-flex justify-content-between">
//     <div class="col-6 pl-0">
//         <button id="withdrawGoBack" class="btn btn-outline-primary col-12">Go Back</button>
//     </div>
//     <div class="col-6 pr-0">
//         <button id="withdrawProcess" class="btn btn-primary col-12">Next</button>
//     </div>
// </div>

// 上のレイアウトをJavaScriptで作成してください。
// 文字列を受け取り、文字列に応じてボタンを作成するbackNextBtnという関数を作成してください。
// HTMLにパラメータを埋め込む必要があるので、テンプレートリテラルを使用しましょう。
// ここからJavaScriptを記述してください。

// 出力して確認
// console.log(backNextBtn("back", "next"));

function backNextBtn(backString, nextString) {
  let btnCon = document.createElement("div");
  btnCon.innerHTML = `
  <div class="d-flex justify-content-between">
    <div class="col-6 pl-0">
        <button id="withdrawGoBack" class="btn btn-outline-primary col-12">${backString}</button>
    </div>
    <div class="col-6 pr-0">
        <button id="withdrawProcess" class="btn btn-primary col-12">${nextString}</button>
    </div>
  </div>
  `;
  return btnCon;
}
```

### withdraw ページの作成(3)

```js
// 次にwithdrawページが出現するwithdrawPageという関数を作成してください。
// 以下のレイアウトを参考にしてください。
// <div class="p-5">
//     ページ --> title: Please Enter The Withdrawal Amount
//     ボタン --> backString: back, nextString: next
// </div>

// ここからJavaScriptを記述してください。

// コンソールで確認
// console.log(withdrawPage());

function withdrawPage() {
  let container = document.createElement("div");
  container.classList.add("p-5");

  container.append(billInputSelector("Please Enter The Withdrawal Amount"));
  container.append(backNextBtn("back", "next"));

  return container;
}

console.log(withdrawPage());
```

## withdraw ページの作成(4)

```js
function displayNone(ele) {
  ele.classList.remove("d-block");
  ele.classList.add("d-none");
}

function displayBlock(ele) {
  ele.classList.remove("d-none");
  ele.classList.add("d-block");
}

const config = {
  initialForm: document.getElementById("initial-form"),
  bankPage: document.getElementById("bankPage"),
  //追加
  sidePage: document.getElementById("sidePage"),
};

class BankAccount {
  constructor(firstName, lastName, email, type, accountNumber, money) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.type = type;
    this.accountNumber = accountNumber;
    this.money = money;
    this.initialDeposit = money;
  }

  getFullName() {
    return this.firstName + " " + this.lastName;
  }
}

function getRandomInteger(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function initializeUserAccount() {
  const form = document.getElementById("bank-form");
  let userBankAccount = new BankAccount(
    form.querySelectorAll(`input[name="userFirstName"]`).item(0).value,
    form.querySelectorAll(`input[name="userLastName"]`).item(0).value,
    form.querySelectorAll(`input[name="userEmail"]`)[0].value,
    form
      .querySelectorAll(`input[name="userAccountType"]:checked`)
      .item(0).value,
    getRandomInteger(1, Math.pow(10, 8)),
    parseInt(
      form.querySelectorAll(`input[name="userFirstDeposit"]`).item(0).value
    )
  );
  console.log(userBankAccount);

  config.initialForm.classList.add("d-none");
  config.bankPage.append(mainBankPage(userBankAccount));
}

function mainBankPage(bankAccount) {
  let infoCon = document.createElement("div");
  infoCon.classList.add("pb-2", "pb-md-4", "text-right");

  let nameP = document.createElement("p");
  nameP.classList.add("py-1");

  let bankIdP = nameP.cloneNode(true);
  let initialDepositP = nameP.cloneNode(true);

  nameP.innerHTML = bankAccount.getFullName();
  bankIdP.innerHTML = bankAccount.accountNumber;
  initialDepositP.innerHTML = bankAccount.initialDeposit;

  infoCon.append(nameP, bankIdP, initialDepositP);

  let balanceCon = document.createElement("div");
  balanceCon.classList.add("d-flex", "bg-danger", "py-1", "py-md-2");

  balanceCon.innerHTML = `
        <p class="col-8 text-left rem1p5">Available Balance</p>
        <p class="col-4 text-right rem1p5">$${bankAccount.money}</p>
    `;

  let menuCon = document.createElement("div");
  menuCon.classList.add(
    "d-flex",
    "justify-content-center",
    "flex-wrap",
    "text-center",
    "py-3",
    "mx-0"
  );

  menuCon.innerHTML = `
        <div class="col-lg-4 col-12 py-1 py-md-3 px-0 px-md-1">
            <div id="withdrawBtn" class="bg-blue hover p-3">
                <h5>WITHDRAWAL</h5>
                <i class="fas fa-wallet fa-3x"></i>
            </div>
        </div>
        <div class="col-lg-4 col-12 py-1 py-md-3 px-0 px-md-1">
            <div id="depositBtn" class="bg-blue hover p-3">
                <h5>DEPOSIT</h5>
                <i class="fas fa-coins fa-3x"></i>
            </div>
        </div>
        <div class="col-lg-4 col-12 py-1 py-md-3 px-0 px-md-1">
            <div id="comeBackLaterBtn" class="bg-blue hover p-3">
                <h5>COME BACK LATER</h5>
                <i class="fas fa-home fa-3x"></i>
            </div>
        </div>
    `;

  menuCon
    .querySelectorAll("#withdrawBtn")[0]
    .addEventListener("click", function () {
      withdrawController();
    });
  menuCon
    .querySelectorAll("#depositBtn")[0]
    .addEventListener("click", function () {
      alert("deposit");
    });
  menuCon
    .querySelectorAll("#comeBackLaterBtn")[0]
    .addEventListener("click", function () {
      alert("come back later");
    });

  let container = document.createElement("div");
  container.append(infoCon, balanceCon, menuCon);

  return container;
}

function billInputSelector(title) {
  let container = document.createElement("div");
  container.innerHTML = `
        <h2 class="pb-3">${title}</h2>
        <div class="form-group row">
            <label for="moneyWithdraw100" class="col-2 col-form-label col-form-label-sm">$100</label>
            <div class="col-10">
                <input type="number" class="form-control form-control-sm text-right withdraw-bill" data-bill="100" id="moneyWithdraw100" placeholder="5">
            </div>
        </div>
        <div class="form-group row">
            <label for="moneyWithdraw50" class="col-2 col-form-label col-form-label-sm">$50</label>
            <div class="col-10">
                <input type="number" class="form-control form-control-sm text-right withdraw-bill" data-bill="50" id="moneyWithdraw50" placeholder="1">
            </div>
        </div>
        <div class="form-group row">
            <label for="moneyWithdraw20" class="col-2 col-form-label col-form-label-sm">$20</label>
            <div class="col-10">
                <input type="number" class="form-control form-control-sm text-right withdraw-bill" data-bill="20" id="moneyWithdraw20" placeholder="2">
            </div>
        </div>
        <div class="form-group row">
            <label for="moneyWithdraw10" class="col-2 col-form-label col-form-label-sm">$10</label>
            <div class="col-10">
                <input type="number" class="form-control form-control-sm text-right withdraw-bill" data-bill="10" id="moneyWithdraw10" placeholder="3">
            </div>
        </div>
        <div class="form-group row">
            <label for="moneyWithdraw5" class="col-2 col-form-label col-form-label-sm">$5</label>
            <div class="col-10">
                <input type="number" class="form-control form-control-sm text-right withdraw-bill" data-bill="5" id="moneyWithdraw5" placeholder="1">
            </div>
        </div>
        <div class="form-group row">
            <label for="moneyWithdraw1" class="col-2 col-form-label col-form-label-sm">$1</label>
            <div class="col-10">
                <input type="number" class="form-control form-control-sm text-right withdraw-bill" data-bill="1" id="moneyWithdraw1" placeholder="4">
            </div>
        </div>
        <div class="text-center money-box p-3">
            <p id="withdrawTotal">$0.00</p>
        </div>
    `;
  return container;
}

function backNextBtn(backString, nextString) {
  let container = document.createElement("div");
  container.innerHTML = `
    <div class="d-flex justify-content-between">
        <div class="col-6 pl-0">
            <button class="btn btn-outline-primary col-12">$
            ${backString}</button>
        </div>
        <div class="col-6 pr-0">
            <button class="btn btn-primary col-12">${nextString}</button>
        </div>
    </div>
    `;
  return container;
}

// 要素(ele)を受けとって要素を非表示にするdisplayNone関数、要素を表示するdisplayBlock関数を作成してください。JavaScriptの一番上に記述してください。

// 新しいページとしてHTMLにid属性sidePageがついたコンテナを追加してください。このコンテナにどこからでもアクセスすることができるように名前空間にも追加しましょう。
// HTMLのbankPageの次に、以下を追加してください。
// <div id="sidePage" class="bg-white col-12 text-center">
// </div>

// bankPageを非表示にし、sidePageを表示するwithdrawControllerという関数を作成してください。withdrawボタンがクリックされた時にこの関数が実行されるようにaddEventListenerを修正してください。
// bankPageを非表示、sidePageを表示した後は、新しい情報をレンダリングするため、一度両方のページを空にしてください。
// その後、withdrawのページをsidePageにappendしてください。

// ここからJavaScriptを記述してください。

function withdrawController() {
  displayNone(config.bankPage);
  displayBlock(config.sidePage);
  config.bankPage.innerHTML = "";
  config.sidePage.innerHTML = "";
  config.sidePage.append(withdrawPage());
}

function withdrawPage() {
  let container = document.createElement("div");
  container.classList.add("p-5");

  let withdrawContainer = document.createElement("div");
  container.append(withdrawContainer);

  withdrawContainer.append(
    billInputSelector("Please Enter The Withdrawal Amount")
  );
  withdrawContainer.append(backNextBtn("back", "next"));

  return container;
}
```

## 入力の確認

```js
function withdrawPage() {
  let container = document.createElement("div");
  container.classList.add("p-5");

  let withdrawContainer = document.createElement("div");
  container.append(withdrawContainer);

  withdrawContainer.append(
    billInputSelector("Please Enter The Withdrawal Amount")
  );
  withdrawContainer.append(backNextBtn("back", "next"));

  // 各inputタグを取得するためにHTMLにbill-inputクラスを付与してください。
  // 1つ目のinputに要素が入力されたら、その値をコンソールに出力する処理を作成してください。
  // addEventListener("change", function)と処理を実装してください。
  // changeイベントはinput, select, textarea要素において、ユーザーによる要素の値の変更が確定したときに発生します。
  // 入力された数字をそのままコンソールに出力してください。
  // ここからJavaScriptを記述してください。

  let billInputs = withdrawContainer.querySelectorAll(".bill-input");

  billInputs[0].addEventListener("change", function () {
    console.log(billInputs[0].value);
  });
  return container;
}
```

## 入力の表示

```js
function withdrawPage() {
  let container = document.createElement("div");
  container.classList.add("p-5");

  let withdrawContainer = document.createElement("div");
  container.append(withdrawContainer);

  withdrawContainer.append(
    billInputSelector("Please Enter The Withdrawal Amount")
  );
  withdrawContainer.append(backNextBtn("back", "next"));

  let billInputs = withdrawContainer.querySelectorAll(".bill-input");

  // それぞれの要素に入力があった時にtotalに表示してください。
  // for文とaddEventListener、innerHTMLを組み合わせましょう。
  // ここからJavaScriptを記述してください。
  for (let i = 0; i < billInputs.length; i++) {
    billInputs[i].addEventListener("change", function () {
      document.getElementById("withdrawTotal").innerHTML = billInputs[i].value;
    });
  }
  return container;
}
```

## Q Bill Summation

```js
function billSummation(arr1, arr2) {
  let multipliedNumber = 0;
  for (let i = 0; i < arr1.length; i++) {
    multipliedNumber += arr1[i] * arr2[i];
  }
  return multipliedNumber;
}
```

## billSummation

```js
// data-billを持つ要素、文字列data-billを受け取り、合計金額を計算するbillSummationという関数を作成してください。
// for文を使って合計金額を算出してください。
// getAttributeメソッドとparseIntを組み合わせて、data-billの値をint型として取得し、入力された値と掛け合わせてください。
// 例: 入力5, $100 --> 500
function withdrawPage() {
  let container = document.createElement("div");
  container.classList.add("p-5");

  let withdrawContainer = document.createElement("div");
  container.append(withdrawContainer);

  withdrawContainer.append(
    billInputSelector("Please Enter The Withdrawal Amount")
  );
  withdrawContainer.append(backNextBtn("back", "next"));

  let billInputs = withdrawContainer.querySelectorAll(".bill-input");

  for (let i = 0; i < billInputs.length; i++) {
    billInputs[i].addEventListener("change", function (event) {
      // billSummationという関数の値を代入
      // inputの値が変わる度に関数が実行されます。
      document.getElementById("withdrawTotal").innerHTML = billSummation(
        billInputs,
        "data-bill"
      ).toString();
    });
  }

  return container;
}

function billSummation(inputElementNodeList, multiplierAttribute) {
  let summation = 0;
  for (let i = 0; i < inputElementNodeList.length; i++) {
    //currEleはどの料金を選択しているかを表して、valueは選択した料金にかける数値(inputに入力される数)を表す
    let currEle = inputElementNodeList[i];
    let value = parseInt(currEle.value);

    if (currEle.hasAttribute(multiplierAttribute))
      value *= parseInt(currEle.getAttribute(multiplierAttribute));

    if (value > 0) summation += value;
  }
  return summation;
}
```

## 前のページを表示

```js
function displayNone(ele) {
  ele.classList.remove("d-block");
  ele.classList.add("d-none");
}

function displayBlock(ele) {
  ele.classList.remove("d-none");
  ele.classList.add("d-block");
}

const config = {
  initialForm: document.getElementById("initial-form"),
  bankPage: document.getElementById("bankPage"),
  sidePage: document.getElementById("sidePage"),
};

class BankAccount {
  constructor(firstName, lastName, email, type, accountNumber, money) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.type = type;
    this.accountNumber = accountNumber;
    this.money = money;
    this.initialDeposit = money;
  }

  getFullName() {
    return this.firstName + " " + this.lastName;
  }
}

function getRandomInteger(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function initializeUserAccount() {
  const form = document.getElementById("bank-form");
  let userBankAccount = new BankAccount(
    form.querySelectorAll(`input[name="userFirstName"]`).item(0).value,
    form.querySelectorAll(`input[name="userLastName"]`).item(0).value,
    form.querySelectorAll(`input[name="userEmail"]`)[0].value,
    form
      .querySelectorAll(`input[name="userAccountType"]:checked`)
      .item(0).value,
    getRandomInteger(1, Math.pow(10, 8)),
    parseInt(
      form.querySelectorAll(`input[name="userFirstDeposit"]`).item(0).value
    )
  );
  console.log(userBankAccount);

  config.initialForm.classList.add("d-none");
  config.bankPage.append(mainBankPage(userBankAccount));
}

function mainBankPage(bankAccount) {
  let infoCon = document.createElement("div");
  infoCon.classList.add("pb-2", "pb-md-4", "text-right");

  let nameP = document.createElement("p");
  nameP.classList.add("py-1");

  let bankIdP = nameP.cloneNode(true);
  let initialDepositP = nameP.cloneNode(true);

  nameP.innerHTML = bankAccount.getFullName();
  bankIdP.innerHTML = bankAccount.accountNumber;
  initialDepositP.innerHTML = bankAccount.initialDeposit;

  infoCon.append(nameP, bankIdP, initialDepositP);

  let balanceCon = document.createElement("div");
  balanceCon.classList.add("d-flex", "bg-danger", "py-1", "py-md-2");

  balanceCon.innerHTML = `
        <p class="col-8 text-left rem1p5">Available Balance</p>
        <p class="col-4 text-right rem1p5">$${bankAccount.money}</p>
    `;

  let menuCon = document.createElement("div");
  menuCon.classList.add(
    "d-flex",
    "justify-content-center",
    "flex-wrap",
    "text-center",
    "py-3",
    "mx-0"
  );

  menuCon.innerHTML = `
        <div class="col-lg-4 col-12 py-1 py-md-3 px-0 px-md-1">
            <div id="withdrawBtn" class="bg-blue hover p-3">
                <h5>WITHDRAWAL</h5>
                <i class="fas fa-wallet fa-3x"></i>
            </div>
        </div>
        <div class="col-lg-4 col-12 py-1 py-md-3 px-0 px-md-1">
            <div id="depositBtn" class="bg-blue hover p-3">
                <h5>DEPOSIT</h5>
                <i class="fas fa-coins fa-3x"></i>
            </div>
        </div>
        <div class="col-lg-4 col-12 py-1 py-md-3 px-0 px-md-1">
            <div id="comeBackLaterBtn" class="bg-blue hover p-3">
                <h5>COME BACK LATER</h5>
                <i class="fas fa-home fa-3x"></i>
            </div>
        </div>
    `;

  // パラメータを設定
  menuCon
    .querySelectorAll("#withdrawBtn")[0]
    .addEventListener("click", function () {
      withdrawController(bankAccount);
    });
  menuCon
    .querySelectorAll("#depositBtn")[0]
    .addEventListener("click", function () {
      alert("deposit");
    });
  menuCon
    .querySelectorAll("#comeBackLaterBtn")[0]
    .addEventListener("click", function () {
      alert("come back later");
    });

  let container = document.createElement("div");
  container.append(infoCon, balanceCon, menuCon);

  return container;
}

function billInputSelector(title) {
  let container = document.createElement("div");
  container.innerHTML = `
        <h2 class="pb-3">${title}</h2>
        <div class="form-group row">
            <label for="moneyWithdraw100" class="col-2 col-form-label col-form-label-sm">$100</label>
            <div class="col-10">
                <input type="number" class="form-control form-control-sm text-right withdraw-bill bill-input" data-bill="100" id="moneyWithdraw100" placeholder="5">
            </div>
        </div>
        <div class="form-group row">
            <label for="moneyWithdraw50" class="col-2 col-form-label col-form-label-sm">$50</label>
            <div class="col-10">
                <input type="number" class="form-control form-control-sm text-right withdraw-bill bill-input" data-bill="50" id="moneyWithdraw50" placeholder="1">
            </div>
        </div>
        <div class="form-group row">
            <label for="moneyWithdraw20" class="col-2 col-form-label col-form-label-sm">$20</label>
            <div class="col-10">
                <input type="number" class="form-control form-control-sm text-right withdraw-bill bill-input" data-bill="20" id="moneyWithdraw20" placeholder="2">
            </div>
        </div>
        <div class="form-group row">
            <label for="moneyWithdraw10" class="col-2 col-form-label col-form-label-sm">$10</label>
            <div class="col-10">
                <input type="number" class="form-control form-control-sm text-right withdraw-bill bill-input" data-bill="10" id="moneyWithdraw10" placeholder="3">
            </div>
        </div>
        <div class="form-group row">
            <label for="moneyWithdraw5" class="col-2 col-form-label col-form-label-sm">$5</label>
            <div class="col-10">
                <input type="number" class="form-control form-control-sm text-right withdraw-bill bill-input" data-bill="5" id="moneyWithdraw5" placeholder="1">
            </div>
        </div>
        <div class="form-group row">
            <label for="moneyWithdraw1" class="col-2 col-form-label col-form-label-sm">$1</label>
            <div class="col-10">
                <input type="number" class="form-control form-control-sm text-right withdraw-bill bill-input" data-bill="1" id="moneyWithdraw1" placeholder="4">
            </div>
        </div>
        <div class="text-center money-box p-3">
            <p id="withdrawTotal">$0.00</p>
        </div>
    `;
  return container;
}

function backNextBtn(backString, nextString) {
  let container = document.createElement("div");

  // back-btnというclassを追加します。
  container.innerHTML = `
    <div class="d-flex justify-content-between">
        <div class="col-6 pl-0">
            <button class="btn btn-outline-primary col-12 back-btn">${backString}</button>
        </div>
        <div class="col-6 pr-0">
            <button class="btn btn-primary col-12">${nextString}</button>
        </div>
    </div>
    `;
  return container;
}

// パラメータを設定
function withdrawController(bankAccount) {
  displayNone(config.bankPage);
  displayBlock(config.sidePage);
  config.bankPage.innerHTML = "";
  config.sidePage.innerHTML = "";
  // 渡す値を設定
  config.sidePage.append(withdrawPage(bankAccount));
}

// パラメータを設定
function withdrawPage(bankAccount) {
  let container = document.createElement("div");
  container.classList.add("p-5");

  let withdrawContainer = document.createElement("div");
  container.append(withdrawContainer);

  withdrawContainer.append(
    billInputSelector("Please Enter The Withdrawal Amount")
  );
  withdrawContainer.append(backNextBtn("back", "next"));

  // backを押すと前のページに戻る処理
  let backBtn = withdrawContainer.querySelectorAll(".back-btn").item(0);

  backBtn.addEventListener("click", function () {
    displayNone(config.sidePage);
    displayBlock(config.bankPage);
    // bankPageの中身を挿入
    config.bankPage.append(mainBankPage(bankAccount));
  });

  let billInputs = withdrawContainer.querySelectorAll(".bill-input");

  for (let i = 0; i < billInputs.length; i++) {
    billInputs[i].addEventListener("change", function (event) {
      document.getElementById("withdrawTotal").innerHTML = billSummation(
        billInputs,
        "data-bill"
      ).toString();
    });
  }

  return container;
}

function billSummation(inputElementNodeList, multiplierAttribute) {
  let summation = 0;
  for (let i = 0; i < inputElementNodeList.length; i++) {
    let currEle = inputElementNodeList[i];
    let value = parseInt(currEle.value);

    value = currEle.hasAttribute(multiplierAttribute)
      ? parseInt(currEle.getAttribute(multiplierAttribute)) * value
      : value;
    summation += value >= 0 ? value : 0;
  }
  return summation;
}
```

## calculation box の作成、表示

```js
let nextBtn = withdrawContainer.querySelectorAll(".next-btn").item(0);
nextBtn.addEventListener("click", function () {
  // 今のページを空にします。
  container.innerHTML = "";

  let confirmDialog = document.createElement("div");
  confirmDialog.append(
    billDialog(
      "The money you are going to take is ...",
      billInputs,
      "data-bill"
    )
  );
  container.append(confirmDialog);
});

// nextを押した後に表示されるページの一部を作成します。

// <h2 class="pb-1">The money you are going to take is ... </h2>
// <div class="d-flex justify-content-center">
//     <div class="text-right col-8 px-1 calculation-box">
//         <p class="rem1p3 calculation-box mb-1 pr-2">5 × $100</p>
//         <p class="rem1p3 calculation-box mb-1 pr-2">1 × $50</p>
//         <p class="rem1p3 calculation-box mb-1 pr-2">2 × $20</p>
//         <p class="rem1p3 calculation-box mb-1 pr-2">1 × $5</p>
//         <p class="rem1p3 calculation-box mb-1 pr-2">4 × $1</p>
//         <p class="rem1p3 pr-2">total: $599</p>
//     </div>
// </div>

// 先ほどのsummationに似た関数を作成します。今回は各計算をHTMLで表示する必要があります。
// タイトル、bill-inputを持つnodeと、bill-inputを受け取ります。(後で使い回すため)

function billDialog(title, inputElementNodeList, multiplierAttribute) {
  let container = document.createElement("div");

  let billElements = "";
  for (let i = 0; i < inputElementNodeList.length; i++) {
    let value = parseInt(inputElementNodeList[i].value);

    if (value > 0) {
      let bill =
        "$" + inputElementNodeList[i].getAttribute(multiplierAttribute);
      billElements += `<p class = "rem1p3 calculation-box mb-1 pr-2">${value} × ${bill}</p>`;
    }
  }

  let totalString = `<p class="rem1p3 pr-2">total: $${billSummation(
    inputElementNodeList,
    multiplierAttribute
  )}</p>`;

  container.innerHTML = `
      <h2 class="pb-1">${title}</h2>
      <div class="d-flex justify-content-center">
          <div class="text-right col-8 px-1 calculation-box">
              ${billElements}
              ${totalString}
          </div>
      </div>
  `;

  return container;
}
```

## 引き落とせる最大額の計算

```js
class BankAccount {
  // クラス変数maxWithdrawPercentを0.2と設定してください。
  maxWithdrawPercent = 0.2;

  constructor(
    firstName,
    lastName,
    email,
    type,
    accountNumber,
    money,
    maxWithdrawPercent
  ) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.type = type;
    this.accountNumber = accountNumber;
    this.money = money;
    this.initialDeposit = money;
  }

  getFullName() {
    return this.firstName + " " + this.lastName;
  }

  calculateWithdrawAmount(amount) {
    let maxWithdrawAmount = Math.floor(this.money * this.maxWithdrawPercent);
    amount = amount > maxWithdrawAmount ? maxWithdrawAmount : amount;
    return amount;
  }
  // 金額を受け取って、それが所持金の20%以下ならその金額、20%以上なら所持金の20%を返す、calculateWithdrawAmountというメソッドを作成してください。
}
```

## 引き落とせる最大額の表示

```js
function withdrawPage(bankAccount) {
  let container = document.createElement("div");
  container.classList.add("p-5");

  let withdrawContainer = document.createElement("div");
  container.append(withdrawContainer);

  withdrawContainer.append(
    billInputSelector("Please Enter The Withdrawal Amount")
  );
  withdrawContainer.append(backNextBtn("back", "next"));

  let backBtn = withdrawContainer.querySelectorAll(".back-btn").item(0);
  backBtn.addEventListener("click", function () {
    displayNone(config.sidePage);
    displayBlock(config.bankPage);
    config.bankPage.append(mainBankPage(bankAccount));
  });

  let billInputs = withdrawContainer.querySelectorAll(".bill-input");

  for (let i = 0; i < billInputs.length; i++) {
    billInputs[i].addEventListener("change", function (event) {
      document.getElementById("withdrawTotal").innerHTML = billSummation(
        billInputs,
        "data-bill"
      ).toString();
    });
  }

  let nextBtn = withdrawContainer.querySelectorAll(".next-btn").item(0);
  nextBtn.addEventListener("click", function () {
    container.innerHTML = "";

    let confirmDialog = document.createElement("div");
    confirmDialog.append(
      billDialog(
        "The money you are going to take is ...",
        billInputs,
        "data-bill"
      )
    );
    container.append(confirmDialog);

    // <div class="d-flex bg-danger py-1 py-md-2 mb-3 text-white">
    //     <p class="col-8 text-left rem1p5">Total to be withdrawn: </p>
    //     <p class="col-4 text-right rem1p5">$150</p>
    // </div>

    // HTMLを追加し、金額のところに引き落とすことができる金額を表示してください。
    // confirmDialogコンテナに追加してください。
    // backNextBtn関数を使って、Go Back、Confirmボタンを追加してください。
    // ここからJavaScriptを記述してください。

    let total = billSummation(billInputs, "data-bill");
    confirmDialog.innerHTML = `
    <div class="d-flex bg-danger py-1 py-md-2 mb-3 text-white">
        <p class="col-8 text-left rem1p5">Total to be withdrawn: </p>
        <p class="col-4 text-right rem1p5">$${bankAccount.calculateWithdrawAmount(
          total
        )}</p>
    </div>
    `;

    confirmDialog.append(backNextBtn("Go back", "Confirm"));
  });

  return container;
}
```

## 引き落とし&残高アップデート

```js

withdraw(amount){
  this.money -= this.calculateWithdrawAmount(amount);
  return this.money;
}

let nextBtn = withdrawContainer.querySelectorAll(".next-btn").item(0);
nextBtn.addEventListener("click", function () {
  container.innerHTML = "";

  let confirmDialog = document.createElement("div");
  confirmDialog.append(
    billDialog(
      "The money you are going to take is ...",
      billInputs,
      "data-bill"
    )
  );
  container.append(confirmDialog);

  let total = billSummation(billInputs, "data-bill");

  confirmDialog.innerHTML += `
            <div class="d-flex bg-danger py-1 py-md-2 mb-3 text-white">
                <p class="col-8 text-left rem1p5">Total to be withdrawn: </p>
                <p class="col-4 text-right rem1p5">$${bankAccount.calculateWithdrawAmount(
                  total
                )}</p>
            </div>
        `;

  let withdrawConfirmBtns = backNextBtn("Go Back", "Confirm");
  confirmDialog.append(withdrawConfirmBtns);

  // Go Backボタンがクリックされたら、前のページに戻る処理を実装してください。
  // Confirmボタンがクリックされると、ダッシュボードに戻る処理を実装してください。
  // 残高のアップデートを忘れないようにしてください。
  // ここからJavaScriptを記述してください。

  let confirmBackBtn = withdrawConfirmBtns.querySelectorAll(".back-btn")[0];
  let confirmNextBtn = withdrawConfirmBtns.querySelectorAll(".next-btn")[0];

  confirmBackBtn.addEventListener("click", function(){
    container.innerHTML = "";
    container.append(withdrawContainer);
  });

  confirmNextBtn.addEventListener("click", function(){
    bankAccount.withdraw(total);
    displayNone(config.sidePage);
    displayBlock(config.bankPage);
    config.bankPage.append(mainBankPage(bankAccount));
  });
});
```

## DRY 対策

```js
menuCon
  .querySelectorAll("#withdrawBtn")[0]
  .addEventListener("click", function () {
    sideBankSwitch();
    config.sidePage.append(withdrawPage(bankAccount));
  });

menuCon
  .querySelectorAll("#depositBtn")[0]
  .addEventListener("click", function () {
    sideBankSwitch();
    console.log("testing 1");
  });

menuCon
  .querySelectorAll("#comeBackLaterBtn")[0]
  .addEventListener("click", function () {
    sideBankSwitch();
    console.log("testing 2");
  });

//共通パーツ化
function sideBankSwitch() {
  displayNone(config.bankPage);
  displayBlock(config.sidePage);
  config.bankPage.innerHTML = "";
  config.sidePage.innerHTML = "";
}
```

## Deposit ページ(1)

```js
// withdrawPageの中身
// let container = document.createElement("div");
// container.classList.add("p-5");

// let withdrawContainer = document.createElement("div");
// container.append(withdrawContainer);

// withdrawContainer.append(billInputSelector("Please Enter The Withdrawal Amount"));
// withdrawContainer.append(backNextBtn("back", "next"));

// let backBtn = withdrawContainer.querySelectorAll(".back-btn").item(0);
//     backBtn.addEventListener("click", function(){
//         displayNone(config.sidePage);
//         displayBlock(config.bankPage);
//         config.bankPage.append(mainBankPage(bankAccount));
//     })

// depositPageという関数を作成してください。withdrawPageとほとんど同じなのでコピーしてもokです。
// withdrawとついているところはすべてをdepositに変更してください。
// ここからJavaScriptを記述してください。

function depositPage(bankAccount) {
  let container = document.createElement("div");
  container.classList.add("p-5");

  let depositContainer = document.createElement("div");
  container.append(depositContainer);

  depositContainer.append(billInputSelector("Please Enter The Deposit Amount"));
  depositContainer.append(backNextBtn("back", "next"));

  let backBtn = depositContainer.querySelectorAll(".back-btn").item(0);
  backBtn.addEventListener("click", function () {
    displayNone(config.sidePage);
    displayBlock(config.bankPage);
    config.bankPage.append(mainBankPage(bankAccount));
  });
  return container;
}
```

## Deposit ページ(2)

```js
function depositPage(bankAccount) {
  let container = document.createElement("div");
  container.classList.add("p-5");

  let depositContainer = document.createElement("div");
  container.append(depositContainer);

  depositContainer.append(billInputSelector("Please Enter The Deposit Amount"));
  depositContainer.append(backNextBtn("back", "next"));

  let backBtn = depositContainer.querySelectorAll(".back-btn").item(0);
  backBtn.addEventListener("click", function () {
    displayNone(config.sidePage);
    displayBlock(config.bankPage);
    config.bankPage.append(mainBankPage(bankAccount));
  });

  // let billInputs = withdrawContainer.querySelectorAll(".bill-input");

  // for (let i = 0; i < billInputs.length; i++) {
  //     billInputs[i].addEventListener("change", function(event){
  //         document.getElementById("withdrawTotal").innerHTML = billSummation(billInputs, "data-bill").toString();
  //     });
  // }

  // depositバージョンに書き換えてください。
  // withdrawのtotalのidをtotalBillAmountに変更してください。
  // ここからJavaScriptを記述してください。
  let billInputs = depositContainer.querySelectorAll(".bill-input");

  for (let i = 0; i < billInputs.length; i++) {
    billInputs[i].addEventListener("change", function (event) {
      document.getElementById("totalBillAmount").innerHTML = billSummation(
        billInputs,
        "data-bill"
      ).toString();
    });
  }
  return container;
}
```

## Deposit ページ(3)

```js
function depositPage(bankAccount) {
  let container = document.createElement("div");
  container.classList.add("p-5");

  let depositContainer = document.createElement("div");
  container.append(depositContainer);

  depositContainer.append(billInputSelector("Please Enter The Deposit Amount"));
  depositContainer.append(backNextBtn("back", "next"));

  let backBtn = depositContainer.querySelectorAll(".back-btn").item(0);
  backBtn.addEventListener("click", function () {
    displayNone(config.sidePage);
    displayBlock(config.bankPage);
    config.bankPage.append(mainBankPage(bankAccount));
  });

  let billInputs = depositContainer.querySelectorAll(".bill-input");

  for (let i = 0; i < billInputs.length; i++) {
    billInputs[i].addEventListener("change", function (event) {
      document.getElementById("totalBillAmount").innerHTML = billSummation(
        billInputs,
        "data-bill"
      ).toString();
    });
  }

  // let nextBtn = withdrawContainer.querySelectorAll(".next-btn").item(0);
  // nextBtn.addEventListener("click", function(){
  //     container.innerHTML = '';

  //     let confirmDialog = document.createElement("div");
  //     confirmDialog.append(billDialog("The money you are going to take is ...", billInputs, "data-bill"));
  //     container.append(confirmDialog);

  //     let total = billSummation(billInputs, "data-bill");

  //     confirmDialog.innerHTML +=
  //     `
  //         <div class="d-flex bg-danger py-1 py-md-2 mb-3 text-white">
  //             <p class="col-8 text-left rem1p5">Total to be withdrawn: </p>
  //             <p class="col-4 text-right rem1p5">$${bankAccount.calculateWithdrawAmount(total)}</p>
  //         </div>
  //     `

  //     let withdrawConfirmBtns = backNextBtn("Go Back", "Confirm");
  //     confirmDialog.append(withdrawConfirmBtns);

  // depositの場合はいくらでも入金可能なので、withdrawの時のような複雑な処理を記述する必要はありません。
  // ここからJavaScriptを記述してください。

  let nextBtn = depositContainer.querySelectorAll(".next-btn").item(0);
  nextBtn.addEventListener("click", function(){
      container.innerHTML = '';

      let confirmDialog = document.createElement("div");
      confirmDialog.append(billDialog("The money you are going to deposit is ...", billInputs, "data-bill"));
      container.append(confirmDialog);

      let total = billSummation(billInputs, "data-bill");

      confirmDialog.innerHTML +=
      `
          <div class="d-flex bg-danger py-1 py-md-2 mb-3 text-white">
              <p class="col-8 text-left rem1p5">Total to be withdrawn: </p>
              <p class="col-4 text-right rem1p5">$${total}</p>
          </div>
      `

      let withdrawConfirmBtns = backNextBtn("Go Back", "Confirm");
      confirmDialog.append(withdrawConfirmBtns);
});
  return container;
```

## Deposit ページ(4)

```js
function displayNone(ele) {
  ele.classList.remove("d-block");
  ele.classList.add("d-none");
}

function displayBlock(ele) {
  ele.classList.remove("d-none");
  ele.classList.add("d-block");
}

const config = {
  initialForm: document.getElementById("initial-form"),
  bankPage: document.getElementById("bankPage"),
  sidePage: document.getElementById("sidePage"),
};

class BankAccount {
  maxWithdrawPercent = 0.2;

  constructor(firstName, lastName, email, type, accountNumber, money) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.type = type;
    this.accountNumber = accountNumber;
    this.money = money;
    this.initialDeposit = money;
  }

  getFullName() {
    return this.firstName + " " + this.lastName;
  }

  calculateWithdrawAmount(amount) {
    let maxWithdrawAmount = Math.floor(this.money * this.maxWithdrawPercent);
    amount = amount > maxWithdrawAmount ? maxWithdrawAmount : amount;
    return amount;
  }

  withdraw(amount) {
    this.money -= this.calculateWithdrawAmount(amount);
    return this.money;
  }

  // depositメソッドの作成
  deposit(amount) {
    this.money += amount;
    return amount;
  }
}

function getRandomInteger(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function initializeUserAccount() {
  const form = document.getElementById("bank-form");
  let userBankAccount = new BankAccount(
    form.querySelectorAll(`input[name="userFirstName"]`).item(0).value,
    form.querySelectorAll(`input[name="userLastName"]`).item(0).value,
    form.querySelectorAll(`input[name="userEmail"]`)[0].value,
    form
      .querySelectorAll(`input[name="userAccountType"]:checked`)
      .item(0).value,
    getRandomInteger(1, Math.pow(10, 8)),
    parseInt(
      form.querySelectorAll(`input[name="userFirstDeposit"]`).item(0).value
    )
  );
  console.log(userBankAccount);

  config.initialForm.classList.add("d-none");
  config.bankPage.append(mainBankPage(userBankAccount));
}

function mainBankPage(bankAccount) {
  let infoCon = document.createElement("div");
  infoCon.classList.add("pb-2", "pb-md-4", "text-right");

  let nameP = document.createElement("p");
  nameP.classList.add("py-1");

  let bankIdP = nameP.cloneNode(true);
  let initialDepositP = nameP.cloneNode(true);

  nameP.innerHTML = bankAccount.getFullName();
  bankIdP.innerHTML = bankAccount.accountNumber;
  initialDepositP.innerHTML = bankAccount.initialDeposit;

  infoCon.append(nameP, bankIdP, initialDepositP);

  let balanceCon = document.createElement("div");
  balanceCon.classList.add("d-flex", "bg-danger", "py-1", "py-md-2");

  balanceCon.innerHTML = `
        <p class="col-8 text-left rem1p5">Available Balance</p>
        <p class="col-4 text-right rem1p5">$${bankAccount.money}</p>
    `;

  let menuCon = document.createElement("div");
  menuCon.classList.add(
    "d-flex",
    "justify-content-center",
    "flex-wrap",
    "text-center",
    "py-3",
    "mx-0"
  );

  menuCon.innerHTML = `
        <div class="col-lg-4 col-12 py-1 py-md-3 px-0 px-md-1">
            <div id="withdrawBtn" class="bg-blue hover p-3">
                <h5>WITHDRAWAL</h5>
                <i class="fas fa-wallet fa-3x"></i>
            </div>
        </div>
        <div class="col-lg-4 col-12 py-1 py-md-3 px-0 px-md-1">
            <div id="depositBtn" class="bg-blue hover p-3">
                <h5>DEPOSIT</h5>
                <i class="fas fa-coins fa-3x"></i>
            </div>
        </div>
        <div class="col-lg-4 col-12 py-1 py-md-3 px-0 px-md-1">
            <div id="comeBackLaterBtn" class="bg-blue hover p-3">
                <h5>COME BACK LATER</h5>
                <i class="fas fa-home fa-3x"></i>
            </div>
        </div>
    `;

  menuCon
    .querySelectorAll("#withdrawBtn")[0]
    .addEventListener("click", function () {
      sideBankSwitch();
      config.sidePage.append(withdrawPage(bankAccount));
    });

  menuCon
    .querySelectorAll("#depositBtn")[0]
    .addEventListener("click", function () {
      sideBankSwitch();
      config.sidePage.append(depositPage(bankAccount));
    });

  menuCon
    .querySelectorAll("#comeBackLaterBtn")[0]
    .addEventListener("click", function () {
      sideBankSwitch();
      console.log("testing 2");
    });

  let container = document.createElement("div");
  container.append(infoCon, balanceCon, menuCon);

  return container;
}

function billInputSelector(title) {
  let container = document.createElement("div");
  container.innerHTML = `
        <h2 class="pb-3">${title}</h2>
        <div class="form-group row">
            <label for="moneyWithdraw100" class="col-2 col-form-label col-form-label-sm">$100</label>
            <div class="col-10">
                <input type="number" class="form-control form-control-sm text-right withdraw-bill bill-input" data-bill="100" id="moneyWithdraw100" placeholder="5">
            </div>
        </div>
        <div class="form-group row">
            <label for="moneyWithdraw50" class="col-2 col-form-label col-form-label-sm">$50</label>
            <div class="col-10">
                <input type="number" class="form-control form-control-sm text-right withdraw-bill bill-input" data-bill="50" id="moneyWithdraw50" placeholder="1">
            </div>
        </div>
        <div class="form-group row">
            <label for="moneyWithdraw20" class="col-2 col-form-label col-form-label-sm">$20</label>
            <div class="col-10">
                <input type="number" class="form-control form-control-sm text-right withdraw-bill bill-input" data-bill="20" id="moneyWithdraw20" placeholder="2">
            </div>
        </div>
        <div class="form-group row">
            <label for="moneyWithdraw10" class="col-2 col-form-label col-form-label-sm">$10</label>
            <div class="col-10">
                <input type="number" class="form-control form-control-sm text-right withdraw-bill bill-input" data-bill="10" id="moneyWithdraw10" placeholder="3">
            </div>
        </div>
        <div class="form-group row">
            <label for="moneyWithdraw5" class="col-2 col-form-label col-form-label-sm">$5</label>
            <div class="col-10">
                <input type="number" class="form-control form-control-sm text-right withdraw-bill bill-input" data-bill="5" id="moneyWithdraw5" placeholder="1">
            </div>
        </div>
        <div class="form-group row">
            <label for="moneyWithdraw1" class="col-2 col-form-label col-form-label-sm">$1</label>
            <div class="col-10">
                <input type="number" class="form-control form-control-sm text-right withdraw-bill bill-input" data-bill="1" id="moneyWithdraw1" placeholder="4">
            </div>
        </div>
        <div class="text-center money-box p-3">
            <p id="totalBillAmount">$0.00</p>
        </div>
    `;
  return container;
}

function backNextBtn(backString, nextString) {
  let container = document.createElement("div");

  container.innerHTML = `
    <div class="d-flex justify-content-between">
        <div class="col-6 pl-0">
            <button class="btn btn-outline-primary col-12 back-btn">${backString}</button>
        </div>
        <div class="col-6 pr-0">
            <button class="btn btn-primary col-12 next-btn">${nextString}</button>
        </div>
    </div>
    `;
  return container;
}

function sideBankSwitch() {
  displayNone(config.bankPage);
  displayBlock(config.sidePage);
  config.bankPage.innerHTML = "";
  config.sidePage.innerHTML = "";
}

// sidePageを閉じ、ダッシュボードを表示する関数
function bankReturn(bankAccount) {
  displayNone(config.sidePage);
  displayBlock(config.bankPage);
  config.bankPage.append(mainBankPage(bankAccount));
}

function withdrawPage(bankAccount) {
  let container = document.createElement("div");
  container.classList.add("p-5");

  let withdrawContainer = document.createElement("div");
  container.append(withdrawContainer);

  withdrawContainer.append(
    billInputSelector("Please Enter The Withdrawal Amount")
  );
  withdrawContainer.append(backNextBtn("back", "next"));

  let backBtn = withdrawContainer.querySelectorAll(".back-btn").item(0);
  backBtn.addEventListener("click", function () {
    // displayNone(config.sidePage);
    // displayBlock(config.bankPage);
    // config.bankPage.append(mainBankPage(bankAccount));
    // 書き換え
    bankReturn(bankAccount);
  });

  let billInputs = withdrawContainer.querySelectorAll(".bill-input");

  for (let i = 0; i < billInputs.length; i++) {
    billInputs[i].addEventListener("change", function (event) {
      document.getElementById("totalBillAmount").innerHTML = billSummation(
        billInputs,
        "data-bill"
      ).toString();
    });
  }

  let nextBtn = withdrawContainer.querySelectorAll(".next-btn").item(0);
  nextBtn.addEventListener("click", function () {
    container.innerHTML = "";

    let confirmDialog = document.createElement("div");
    confirmDialog.append(
      billDialog(
        "The money you are going to take is ...",
        billInputs,
        "data-bill"
      )
    );
    container.append(confirmDialog);

    let total = billSummation(billInputs, "data-bill");

    confirmDialog.innerHTML += `
            <div class="d-flex bg-danger py-1 py-md-2 mb-3 text-white">
                <p class="col-8 text-left rem1p5">Total to be withdrawn: </p>
                <p class="col-4 text-right rem1p5">$${bankAccount.calculateWithdrawAmount(
                  total
                )}</p>
            </div>
        `;

    let withdrawConfirmBtns = backNextBtn("Go Back", "Confirm");
    confirmDialog.append(withdrawConfirmBtns);

    let confirmBackBtn = withdrawConfirmBtns.querySelectorAll(".back-btn")[0];
    let confirmNextBtn = withdrawConfirmBtns.querySelectorAll(".next-btn")[0];

    confirmBackBtn.addEventListener("click", function () {
      container.innerHTML = "";
      container.append(withdrawContainer);
    });

    confirmNextBtn.addEventListener("click", function () {
      bankAccount.withdraw(total);
      // displayNone(config.sidePage);
      // displayBlock(config.bankPage);
      // config.bankPage.append(mainBankPage(bankAccount));
      // 書き換え
      bankReturn(bankAccount);
    });
  });

  return container;
}

function billSummation(inputElementNodeList, multiplierAttribute) {
  let summation = 0;
  for (let i = 0; i < inputElementNodeList.length; i++) {
    let currEle = inputElementNodeList[i];
    let value = parseInt(currEle.value);

    value = currEle.hasAttribute(multiplierAttribute)
      ? parseInt(currEle.getAttribute(multiplierAttribute)) * value
      : value;
    summation += value >= 0 ? value : 0;
  }
  return summation;
}

function billDialog(title, inputElementNodeList, multiplierAttribute) {
  let container = document.createElement("div");

  let billElements = "";
  for (let i = 0; i < inputElementNodeList.length; i++) {
    let value = parseInt(inputElementNodeList[i].value);

    if (value > 0) {
      let bill =
        "$" + inputElementNodeList[i].getAttribute(multiplierAttribute);
      billElements += `<p class="rem1p3 calculation-box mb-1 pr-2">${value} × ${bill}</p>`;
    }
  }

  let totalString = `<p class="rem1p3 pr-2">total: $${billSummation(
    inputElementNodeList,
    multiplierAttribute
  )}</p>`;

  container.innerHTML = `
        <h2 class="pb-1">${title}</h2>
        <div class="d-flex justify-content-center">
            <div class="text-right col-8 px-1 calculation-box">
                ${billElements}
                ${totalString}
            </div>
        </div>
    `;
  return container;
}

function depositPage(bankAccount) {
  let container = document.createElement("div");
  container.classList.add("p-5");

  let depositContainer = document.createElement("div");
  container.append(depositContainer);

  depositContainer.append(billInputSelector("Please Enter The Deposit Amount"));
  depositContainer.append(backNextBtn("back", "next"));

  let backBtn = depositContainer.querySelectorAll(".back-btn").item(0);
  backBtn.addEventListener("click", function () {
    // displayNone(config.sidePage);
    // displayBlock(config.bankPage);
    // config.bankPage.append(mainBankPage(bankAccount));
    // 書き換え
    bankReturn(bankAccount);
  });

  let billInputs = depositContainer.querySelectorAll(".bill-input");

  for (let i = 0; i < billInputs.length; i++) {
    billInputs[i].addEventListener("change", function (event) {
      document.getElementById("totalBillAmount").innerHTML = billSummation(
        billInputs,
        "data-bill"
      ).toString();
    });
  }

  let nextBtn = depositContainer.querySelectorAll(".next-btn").item(0);

  nextBtn.addEventListener("click", function () {
    container.innerHTML = "";

    let confirmDialog = document.createElement("div");
    confirmDialog.append(
      billDialog(
        "The money you are going to deposit is ...",
        billInputs,
        "data-bill"
      )
    );
    container.append(confirmDialog);

    let total = billSummation(billInputs, "data-bill");
    confirmDialog.innerHTML += `
            <div class="d-flex bg-danger py-1 py-md-2 mb-3 text-white">
                <p class="col-8 text-left rem1p5">Total to be withdrawn: </p>
                <p class="col-4 text-right rem1p5">$${total}</p>
            </div>
        `;
    let depositConfirmBtns = backNextBtn("Go Back", "Confirm");
    confirmDialog.append(depositConfirmBtns);

    // Go Backがクリックされた時、前のページに戻り、Confirmがクリックされた時、残高に反映した上でダッシュボードに戻ります。

    // let confirmBackBtn = withdrawConfirmBtns.querySelectorAll(".back-btn")[0];
    // let confirmNextBtn = withdrawConfirmBtns.querySelectorAll(".next-btn")[0];

    // confirmBackBtn.addEventListener("click", function(){
    //     container.innerHTML = "";
    //     container.append(withdrawContainer);
    // });

    // confirmNextBtn.addEventListener("click", function(){
    //     bankAccount.withdraw(total);
    //     displayNone(config.sidePage);
    //     displayBlock(config.bankPage);
    //     config.bankPage.append(mainBankPage(bankAccount));
    // });

    let confirmBackBtn = depositConfirmBtns.querySelectorAll(".back-btn")[0];
    let confirmNextBtn = depositConfirmBtns.querySelectorAll(".next-btn")[0];

    confirmBackBtn.addEventListener("click", function () {
      container.innerHTML = "";
      container.append(depositContainer);
    });

    confirmNextBtn.addEventListener("click", function () {
      // withdrawではなくdeposit
      bankAccount.deposit(total);

      // この処理は何度も出てきているので、bankReturnという関数を使って書き換えます。
      // displayNone(config.sidePage);
      // displayBlock(config.bankPage);
      // config.bankPage.append(mainBankPage(bankAccount));

      // 上の処理が出てきているところはbankReturnで全て書き換えます。
      bankReturn(bankAccount);
    });
  });

  return container;
}
```

## Come back later ページの作成(1)

```js
menuCon
  .querySelectorAll("#comeBackLaterBtn")[0]
  .addEventListener("click", function () {
    sideBankSwitch();
    // come back laterページを追加してください。
    config.sidePage.append(comeBackLaterPage(bankAccount));
  });

function comeBackLaterPage(bankAccount) {
  let container = document.createElement("div");
  container.classList.add("p-5");
  container.innerHTML = `
  <h2 class="pb-3">How many days will you be gone?</h2>
    <div class="form-group">
        <input type="number" class="form-control" id="days-gone" placeholder="4">
    </div>
  `;

  container.append(backNextBtn("Back", "Confirm"));

  let backBtn = container.querySelectorAll(".back-btn")[0];

  backBtn.addEventListener("click", function () {
    bankReturn(bankAccount);
  });

  return container;
}
```

## Come back later ページの作成(2)

```js
function displayNone(ele) {
  ele.classList.remove("d-block");
  ele.classList.add("d-none");
}

function displayBlock(ele) {
  ele.classList.remove("d-none");
  ele.classList.add("d-block");
}

const config = {
  initialForm: document.getElementById("initial-form"),
  bankPage: document.getElementById("bankPage"),
  sidePage: document.getElementById("sidePage"),
};

class BankAccount {
  maxWithdrawPercent = 0.2;

  // 年利8%を表す、クラス変数を追加してください。
  annualInterestRate = 0.08;

  constructor(firstName, lastName, email, type, accountNumber, money) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.type = type;
    this.accountNumber = accountNumber;
    this.money = money;
    this.initialDeposit = money;
  }

  getFullName() {
    return this.firstName + " " + this.lastName;
  }

  calculateWithdrawAmount(amount) {
    let maxWithdrawAmount = Math.floor(this.money * this.maxWithdrawPercent);
    amount = amount > maxWithdrawAmount ? maxWithdrawAmount : amount;
    return amount;
  }

  withdraw(amount) {
    this.money -= this.calculateWithdrawAmount(amount);
    return this.money;
  }

  deposit(amount) {
    this.money += amount;
    return amount;
  }

  // 日にちを受け取って利子を計算するsimulateTimePassageというメソッドを作成してください。
  // 年利から日割り計算を行います。money * (1 + i) ^ (days/365) で日割り計算を行うことができます。
  // 今回はday1から複利が適用されるとします。(日にちが浅い場合は単利、日にちが経過した場合は複利のような計算もありますが、今回はシンプルに全ての計算を複利とします。)

  simulateTimePassage(days) {
    let daysPerYear = 365;
    //利益の計算
    let profit =
      this.money * Math.pow(1 + this.annualInterestRate, days / daysPerYear) -
      this.money;
    this.money += profit;
    return profit;
  }
}

function getRandomInteger(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function initializeUserAccount() {
  const form = document.getElementById("bank-form");
  let userBankAccount = new BankAccount(
    form.querySelectorAll(`input[name="userFirstName"]`).item(0).value,
    form.querySelectorAll(`input[name="userLastName"]`).item(0).value,
    form.querySelectorAll(`input[name="userEmail"]`)[0].value,
    form
      .querySelectorAll(`input[name="userAccountType"]:checked`)
      .item(0).value,
    getRandomInteger(1, Math.pow(10, 8)),
    parseInt(
      form.querySelectorAll(`input[name="userFirstDeposit"]`).item(0).value
    )
  );
  console.log(userBankAccount);

  config.initialForm.classList.add("d-none");
  config.bankPage.append(mainBankPage(userBankAccount));
}

function mainBankPage(bankAccount) {
  let infoCon = document.createElement("div");
  infoCon.classList.add("pb-2", "pb-md-4", "text-right");

  let nameP = document.createElement("p");
  nameP.classList.add("py-1");

  let bankIdP = nameP.cloneNode(true);
  let initialDepositP = nameP.cloneNode(true);

  nameP.innerHTML = bankAccount.getFullName();
  bankIdP.innerHTML = bankAccount.accountNumber;
  initialDepositP.innerHTML = bankAccount.initialDeposit;

  infoCon.append(nameP, bankIdP, initialDepositP);

  let balanceCon = document.createElement("div");
  balanceCon.classList.add("d-flex", "bg-danger", "py-1", "py-md-2");

  balanceCon.innerHTML = `
        <p class="col-8 text-left rem1p5">Available Balance</p>
        <p class="col-4 text-right rem1p5">$${bankAccount.money}</p>
    `;

  let menuCon = document.createElement("div");
  menuCon.classList.add(
    "d-flex",
    "justify-content-center",
    "flex-wrap",
    "text-center",
    "py-3",
    "mx-0"
  );

  menuCon.innerHTML = `
        <div class="col-lg-4 col-12 py-1 py-md-3 px-0 px-md-1">
            <div id="withdrawBtn" class="bg-blue hover p-3">
                <h5>WITHDRAWAL</h5>
                <i class="fas fa-wallet fa-3x"></i>
            </div>
        </div>
        <div class="col-lg-4 col-12 py-1 py-md-3 px-0 px-md-1">
            <div id="depositBtn" class="bg-blue hover p-3">
                <h5>DEPOSIT</h5>
                <i class="fas fa-coins fa-3x"></i>
            </div>
        </div>
        <div class="col-lg-4 col-12 py-1 py-md-3 px-0 px-md-1">
            <div id="comeBackLaterBtn" class="bg-blue hover p-3">
                <h5>COME BACK LATER</h5>
                <i class="fas fa-home fa-3x"></i>
            </div>
        </div>
    `;

  menuCon
    .querySelectorAll("#withdrawBtn")[0]
    .addEventListener("click", function () {
      sideBankSwitch();
      config.sidePage.append(withdrawPage(bankAccount));
    });

  menuCon
    .querySelectorAll("#depositBtn")[0]
    .addEventListener("click", function () {
      sideBankSwitch();
      config.sidePage.append(depositPage(bankAccount));
    });

  menuCon
    .querySelectorAll("#comeBackLaterBtn")[0]
    .addEventListener("click", function () {
      sideBankSwitch();
      config.sidePage.append(comeBackLaterPage(bankAccount));
    });

  let container = document.createElement("div");
  container.append(infoCon, balanceCon, menuCon);

  return container;
}

function billInputSelector(title) {
  let container = document.createElement("div");
  container.innerHTML = `
        <h2 class="pb-3">${title}</h2>
        <div class="form-group row">
            <label for="moneyWithdraw100" class="col-2 col-form-label col-form-label-sm">$100</label>
            <div class="col-10">
                <input type="number" class="form-control form-control-sm text-right withdraw-bill bill-input" data-bill="100" id="moneyWithdraw100" placeholder="5">
            </div>
        </div>
        <div class="form-group row">
            <label for="moneyWithdraw50" class="col-2 col-form-label col-form-label-sm">$50</label>
            <div class="col-10">
                <input type="number" class="form-control form-control-sm text-right withdraw-bill bill-input" data-bill="50" id="moneyWithdraw50" placeholder="1">
            </div>
        </div>
        <div class="form-group row">
            <label for="moneyWithdraw20" class="col-2 col-form-label col-form-label-sm">$20</label>
            <div class="col-10">
                <input type="number" class="form-control form-control-sm text-right withdraw-bill bill-input" data-bill="20" id="moneyWithdraw20" placeholder="2">
            </div>
        </div>
        <div class="form-group row">
            <label for="moneyWithdraw10" class="col-2 col-form-label col-form-label-sm">$10</label>
            <div class="col-10">
                <input type="number" class="form-control form-control-sm text-right withdraw-bill bill-input" data-bill="10" id="moneyWithdraw10" placeholder="3">
            </div>
        </div>
        <div class="form-group row">
            <label for="moneyWithdraw5" class="col-2 col-form-label col-form-label-sm">$5</label>
            <div class="col-10">
                <input type="number" class="form-control form-control-sm text-right withdraw-bill bill-input" data-bill="5" id="moneyWithdraw5" placeholder="1">
            </div>
        </div>
        <div class="form-group row">
            <label for="moneyWithdraw1" class="col-2 col-form-label col-form-label-sm">$1</label>
            <div class="col-10">
                <input type="number" class="form-control form-control-sm text-right withdraw-bill bill-input" data-bill="1" id="moneyWithdraw1" placeholder="4">
            </div>
        </div>
        <div class="text-center money-box p-3">
            <p id="totalBillAmount">$0.00</p>
        </div>
    `;
  return container;
}

function backNextBtn(backString, nextString) {
  let container = document.createElement("div");

  container.innerHTML = `
    <div class="d-flex justify-content-between">
        <div class="col-6 pl-0">
            <button class="btn btn-outline-primary col-12 back-btn">${backString}</button>
        </div>
        <div class="col-6 pr-0">
            <button class="btn btn-primary col-12 next-btn">${nextString}</button>
        </div>
    </div>
    `;
  return container;
}

function sideBankSwitch() {
  displayNone(config.bankPage);
  displayBlock(config.sidePage);
  config.bankPage.innerHTML = "";
  config.sidePage.innerHTML = "";
}

function bankReturn(bankAccount) {
  displayNone(config.sidePage);
  displayBlock(config.bankPage);
  config.bankPage.append(mainBankPage(bankAccount));
}

function withdrawPage(bankAccount) {
  let container = document.createElement("div");
  container.classList.add("p-5");

  let withdrawContainer = document.createElement("div");
  container.append(withdrawContainer);

  withdrawContainer.append(
    billInputSelector("Please Enter The Withdrawal Amount")
  );
  withdrawContainer.append(backNextBtn("back", "next"));

  let backBtn = withdrawContainer.querySelectorAll(".back-btn").item(0);
  backBtn.addEventListener("click", function () {
    bankReturn(bankAccount);
  });

  let billInputs = withdrawContainer.querySelectorAll(".bill-input");

  for (let i = 0; i < billInputs.length; i++) {
    billInputs[i].addEventListener("change", function (event) {
      document.getElementById("totalBillAmount").innerHTML = billSummation(
        billInputs,
        "data-bill"
      ).toString();
    });
  }

  let nextBtn = withdrawContainer.querySelectorAll(".next-btn").item(0);
  nextBtn.addEventListener("click", function () {
    container.innerHTML = "";

    let confirmDialog = document.createElement("div");
    confirmDialog.append(
      billDialog(
        "The money you are going to take is ...",
        billInputs,
        "data-bill"
      )
    );
    container.append(confirmDialog);

    let total = billSummation(billInputs, "data-bill");
    let withdrawAmountPreview = bankAccount.calculateWithdrawAmount(total);

    confirmDialog.innerHTML += `
            <div class="d-flex bg-danger py-1 py-md-2 mb-3 text-white">
                <p class="col-8 text-left rem1p5">Total to be withdrawn: </p>
                <p class="col-4 text-right rem1p5">$${bankAccount.calculateWithdrawAmount(
                  total
                )}</p>
            </div>
        `;

    let withdrawConfirmBtns = backNextBtn("Go Back", "Confirm");
    confirmDialog.append(withdrawConfirmBtns);

    let confirmBackBtn = withdrawConfirmBtns.querySelectorAll(".back-btn")[0];
    let confirmNextBtn = withdrawConfirmBtns.querySelectorAll(".next-btn")[0];

    confirmBackBtn.addEventListener("click", function () {
      container.innerHTML = "";
      container.append(withdrawContainer);
    });

    confirmNextBtn.addEventListener("click", function () {
      bankAccount.withdraw(total);
      bankReturn(bankAccount);
    });
  });

  return container;
}

function billSummation(inputElementNodeList, multiplierAttribute) {
  let summation = 0;
  for (let i = 0; i < inputElementNodeList.length; i++) {
    let currEle = inputElementNodeList[i];
    let value = parseInt(currEle.value);

    value = currEle.hasAttribute(multiplierAttribute)
      ? parseInt(currEle.getAttribute(multiplierAttribute)) * value
      : value;
    summation += value >= 0 ? value : 0;
  }
  return summation;
}

function billDialog(title, inputElementNodeList, multiplierAttribute) {
  let container = document.createElement("div");

  let billElements = "";
  for (let i = 0; i < inputElementNodeList.length; i++) {
    let value = parseInt(inputElementNodeList[i].value);

    if (value > 0) {
      let bill =
        "$" + inputElementNodeList[i].getAttribute(multiplierAttribute);
      billElements += `<p class="rem1p3 calculation-box mb-1 pr-2">${value} × ${bill}</p>`;
    }
  }

  let totalString = `<p class="rem1p3 pr-2">total: $${billSummation(
    inputElementNodeList,
    multiplierAttribute
  )}</p>`;

  container.innerHTML = `
        <h2 class="pb-1">${title}</h2>
        <div class="d-flex justify-content-center">
            <div class="text-right col-8 px-1 calculation-box">
                ${billElements}
                ${totalString}
            </div>
        </div>
    `;
  return container;
}

function depositPage(bankAccount) {
  let container = document.createElement("div");
  container.classList.add("p-5");

  let depositContainer = document.createElement("div");
  container.append(depositContainer);

  depositContainer.append(billInputSelector("Please Enter The Deposit Amount"));
  depositContainer.append(backNextBtn("back", "next"));

  let backBtn = depositContainer.querySelectorAll(".back-btn").item(0);
  backBtn.addEventListener("click", function () {
    bankReturn(bankAccount);
  });

  let billInputs = depositContainer.querySelectorAll(".bill-input");

  for (let i = 0; i < billInputs.length; i++) {
    billInputs[i].addEventListener("change", function (event) {
      document.getElementById("totalBillAmount").innerHTML = billSummation(
        billInputs,
        "data-bill"
      ).toString();
    });
  }

  let nextBtn = depositContainer.querySelectorAll(".next-btn").item(0);

  nextBtn.addEventListener("click", function () {
    container.innerHTML = "";

    let confirmDialog = document.createElement("div");
    confirmDialog.append(
      billDialog(
        "The money you are going to deposit is ...",
        billInputs,
        "data-bill"
      )
    );
    container.append(confirmDialog);

    let total = billSummation(billInputs, "data-bill");
    confirmDialog.innerHTML += `
            <div class="d-flex bg-danger py-1 py-md-2 mb-3 text-white">
                <p class="col-8 text-left rem1p5">Total to be withdrawn: </p>
                <p class="col-4 text-right rem1p5">$${total}</p>
            </div>
        `;
    let depositConfirmBtns = backNextBtn("Go Back", "Confirm");
    confirmDialog.append(depositConfirmBtns);

    let confirmBackBtn = depositConfirmBtns.querySelectorAll(".back-btn")[0];
    let confirmNextBtn = depositConfirmBtns.querySelectorAll(".next-btn")[0];

    confirmBackBtn.addEventListener("click", function () {
      container.innerHTML = "";
      container.append(depositContainer);
    });

    confirmNextBtn.addEventListener("click", function () {
      bankAccount.deposit(total);
      bankReturn(bankAccount);
    });
  });

  return container;
}

function comeBackLaterPage(bankAccount) {
  let container = document.createElement("div");
  container.classList.add("p-5");

  container.innerHTML = `
        <div class="p-5">
            <h2 class="pb-3">How many days will you be gone?</h2>
            <div class="form-group">
                <input type="number" class="form-control" id="days-gone" placeholder="4">
            </div>
        </div>
    `;

  container.append(backNextBtn("Back", "Confirm"));

  let backBtn = container.querySelectorAll(".back-btn")[0];

  backBtn.addEventListener("click", function () {
    bankReturn(bankAccount);
  });

  // Confirmボタンがクリックされた時、入力されている値を元に利子を計算し、残高に反映してください。
  // 例えば、年利8%で365日(1年間)このページに帰ってこないと仮定すると、残高は money * (1 + 0.08)になります。
  // このシミュレーションを残高に反映してください。
  // ここからJavaScriptを実装してください。

  let nextBtn = container.querySelectorAll(".next-btn")[0];

  nextBtn.addEventListener("click", function () {
    let daysGoneInput = container.querySelectorAll("#days-gone")[0];
    let totalDaysGone = parseInt(daysGoneInput.value);
    totalDaysGone = totalDaysGone > 0 ? totalDaysGone : 0;
    bankAccount.simulateTimePassage(totalDaysGone);
    bankReturn(bankAccount);
  });

  return container;
}
```
