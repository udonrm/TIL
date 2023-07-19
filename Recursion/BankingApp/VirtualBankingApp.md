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
