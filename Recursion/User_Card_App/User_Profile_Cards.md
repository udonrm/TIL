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

## createElement

```html
<div>
  <div id="target-container"></div>
</div>
```

```js
let parentDiv = document.createElement("div");
let p1 = document.createElement("p");

p1.innerHTML = "This is paragraph 1";

parentDiv.append(p1);

let p2 = document.createElement("p");

p2.innerHTML = "This is paragraph 2";

parentDiv.append(p2);

document.getElementById("target-container").append(parentDiv);
```

## フルーツの画像

```php
<?php
function fruitImgUrl(string $fruit): string{
    $fruit = strtolower($fruit);

    if($fruit == "banana") return "url1";
    else if($fruit == "pineapple") return "url2";
    else if($fruit == "pear") return "url3";
    else return "no image";
}
```

## フルーツのレンダリング(2)

```html
<head>
  <!-- Bootstrapの読み込み -->
  <link
    rel="stylesheet"
    href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
    integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk"
    crossorigin="anonymous"
  />
</head>
<div>
  <div id="fruit-container" class="row">
    <!-- ここにbananaの画像と説明を追加します。 -->
  </div>
</div>
```

```css
.fruitImg {
  width: 100px;
  height: 100px;
  padding: 1em;
}

.fruitDiv {
  display: flex;
  align-content: center;
  justify-content: center;
  width: 25%;
  margin-top: 2em;
}
```

```js
function fruitImgUrl(fruit) {
  fruit = fruit.toLowerCase();

  if (fruit === "banana")
    return "https://www.kroger.com/product/images/xlarge/front/0000000004011";
  else if (fruit === "pineapple")
    return "https://www.kroger.com/product/images/medium/front/0000000004430";
  else if (fruit === "pear")
    return "https://www.producemarketguide.com/media/user_RZKVrm5KkV/22481/forelle-pears_variety-page.png";
  // デフォルト
  else
    return "https://upload.wikimedia.org/wikipedia/commons/2/2f/Culinary_fruits_front_view.jpg";
}

let fruitP = document.createElement("p");
fruitP.innerHTML = "Our fruit is banana";

let fruitImg = document.createElement("img");
fruitImg.src = fruitImgUrl("banana");

fruitImg.classList.add("fruitImg");

let fruitDiv = document.createElement("div");

fruitDiv.classList.add("fruitDiv");
fruitDiv.append(fruitP);
fruitDiv.append(fruitImg);

document.getElementById("fruit-container").append(fruitDiv);
```

## フルーツのレンダリング(3)

```html
<head>
  <!-- Bootstrapの読み込み -->
  <link
    rel="stylesheet"
    href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
    integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk"
    crossorigin="anonymous"
  />
</head>
<div>
  <div id="fruit-container" class="row">
    <!-- ここに画像と説明を追加します。 -->
  </div>
</div>
```

```css
.fruitImg {
  width: 100px;
  height: 100px;
  padding: 1em;
}

.fruitDiv {
  display: flex;
  align-content: center;
  justify-content: center;
  width: 25%;
  margin-top: 2em;
}
```

```js
function fruitImgUrl(fruit) {
  fruit = fruit.toLowerCase();

  // === はデータ型もcheckする演算子
  if (fruit === "banana")
    return "https://www.kroger.com/product/images/xlarge/front/0000000004011";
  else if (fruit === "pineapple")
    return "https://www.kroger.com/product/images/medium/front/0000000004430";
  else if (fruit === "pear")
    return "https://www.producemarketguide.com/media/user_RZKVrm5KkV/22481/forelle-pears_variety-page.png";
  // デフォルト
  else
    return "https://upload.wikimedia.org/wikipedia/commons/2/2f/Culinary_fruits_front_view.jpg";
}

function renderFruit(fruit, ele) {
  let fruitP = document.createElement("p");
  fruitP.innerHTML = "Our fruit is :" + fruit;

  let fruitImg = document.createElement("img");

  fruitImg.src = fruitImgUrl(fruit);

  fruitImg.classList.add("fruitImg");

  let fruitDiv = document.createElement("div");

  fruitDiv.classList.add("fruitDiv");
  fruitDiv.append(fruitP);
  fruitDiv.append(fruitImg);

  ele.append(fruitDiv);
}

let fruitContainer = document.getElementById("fruit-container");

// 関数の呼び出し
renderFruit("banana", fruitContainer);
renderFruit("pear", fruitContainer);
renderFruit("pineapple", fruitContainer);
renderFruit("coconut", fruitContainer);
renderFruit("grape", fruitContainer);
```

## フルーツのレンダリング(上級者向け)

```html
<head>
  <!-- Bootstrapの読み込み -->
  <link
    rel="stylesheet"
    href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
    integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk"
    crossorigin="anonymous"
  />
</head>
<div>
  <div id="fruit-container" class="row">
    <!-- ここに画像と説明を追加します。 -->
  </div>
</div>
```

```css
.fruitImg {
  width: 100px;
  height: 100px;
  padding: 1em;
}

.fruitDiv {
  display: flex;
  align-content: center;
  justify-content: center;
  width: 25%;
  margin-top: 2em;
}
```

```js
function fruitImgUrlTable(fruit) {
  const fruitTable = {
    banana: "https://www.kroger.com/product/images/xlarge/front/0000000004011",
    pineapple:
      "https://www.kroger.com/product/images/medium/front/0000000004430",
    pear: "https://www.producemarketguide.com/media/user_RZKVrm5KkV/22481/forelle-pears_variety-page.png",
  };

  const defaultUrl =
    "https://upload.wikimedia.org/wikipedia/commons/2/2f/Culinary_fruits_front_view.jpg";

  // それぞれのフルーツのURLかデフォルトのURLを返します。もしキーが見つからなかったらundefinedが返されます。
  return fruitTable[fruit] !== undefined ? fruitTable[fruit] : defaultUrl;
}

function renderFruit(fruit, ele) {
  let fruitP = document.createElement("p");
  fruitP.innerHTML = "Our fruit is : " + fruit;

  let fruitImg = document.createElement("img");

  fruitImg.src = fruitImgUrlTable(fruit);

  fruitImg.classList.add("fruitImg");

  let fruitDiv = document.createElement("div");
  fruitDiv.classList.add("fruitDiv");
  fruitDiv.append(fruitP);
  fruitDiv.append(fruitImg);

  ele.append(fruitDiv);
}

let fruitContainer = document.getElementById("fruit-container");

// 関数の呼び出し
renderFruit("banana", fruitContainer);
renderFruit("pear", fruitContainer);
renderFruit("pineapple", fruitContainer);
renderFruit("coconut", fruitContainer);
renderFruit("grape", fruitContainer);
```

## HTMl の作成

```html
<link
  rel="stylesheet"
  href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
  integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk"
  crossorigin="anonymous"
/>

<div
  class="vh-100 bg-dark d-flex flex-column justify-content-center align-items-center"
>
  <div class="d-flex align-items-center col-md-7 col-10 m-1">
    <div class="d-flex col-12 profile-card">
      <div class="col-8 py-3">
        <h4>Kaiden Herman</h4>
        <div class="py-2">
          <p>Job :</p>
          <p>Software Engineer</p>
        </div>
        <div class="py-2">
          <p>Skill :</p>
          <p>C++, C#, Java, PHP, JavaScript, Python</p>
        </div>
        <div class="py-2">
          <p>Country :</p>
          <p>United States</p>
        </div>
      </div>
      <div class="col-4 d-flex justify-content-center align-items-center">
        <div>
          <img
            class="avatar"
            src="https://pbs.twimg.com/profile_images/501759258665299968/3799Ffxy.jpeg"
          />
        </div>
      </div>
    </div>
  </div>
</div>
```

```css
.avatar {
  width: 100%;
  height: auto;
  padding: 1em;
}

p {
  font-family: Futura;
  margin: 0 !important;
  letter-spacing: 0.02em;
}

.profile-card {
  background-color: white;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 10px;
}
```

## カード全体の作成

```js
// <div class="vh-100 bg-dark d-flex flex-column justify-content-center align-items-center">

// この部分をJavaScriptによって作成し、コンソールに出力してください。
//     <div class="d-flex align-items-center col-md-7 col-10 m-1">
//         <div class="d-flex col-12 profile-card">
//         </div>
//     </div>

// </div>

// classList.add()関数は複数のクラスをパラメータとして受け取ることができます。
// 例. classList.add("bg-danger", "d-flex", "text-dark");

// ここからJavaScriptを記述してTODOをクリアしてください。

let innerFlex = document.createElement("div");
innerFlex.classList.add(
  "d-flex",
  "align-items-center",
  "col-md-7",
  "col-10",
  "m-1"
);

let cardDiv = document.createElement("div");
innerFlex.append(cardDiv);

cardDiv.classList.add("d-flex", "col-12", "profile-card");

console.log(innerFlex);
```

## カードの左半分の作成

```js
let leftInfo = document.createElement("div");
leftInfo.classList.add("col-8", "py-3");

let div1 = document.createElement("div");
div1.classList.add("py-2");

let div2 = div1.cloneNode(true);
let div3 = div1.cloneNode(true);

let nameTitle = document.createElement("h4");
nameTitle.innerHTML = "Kaiden Herman";

let employeeJob = document.createElement("p");
let employeeSkill = document.createElement("p");
let employeeCountry = document.createElement("p");

employeeJob.innerHTML = "Job:" + "<br>" + "Software  Engineer";
div1.append(employeeJob);

employeeSkill.innerHTML =
  "Skill: " + "<br>" + "C++, C#, Java, PHP, JavaScript, Python";
div2.append(employeeSkill);

employeeCountry.innerHTML = "Country : " + "<br>" + "United States";
div3.append(employeeCountry);

leftInfo.append(nameTitle);
leftInfo.append(div1);
leftInfo.append(div2);
leftInfo.append(div3);

console.log(leftPart);
```

```html
<div class="col-8 py-3">
  <h4>Kaiden Herman</h4>
  <div class="py-2">
    <p>Job: <br />Software Engineer</p>
  </div>
  <div class="py-2">
    <p>Skill: <br />C++, C#, Java, PHP, JavaScript, Python</p>
  </div>
  <div class="py-2">
    <p>Country : <br />United States</p>
  </div>
</div>
```

## カードの右半分の作成

```js
let rightInfo = document.createElement("div");
let div4 = document.createElement("div");
rightInfo.classList.add(
  "col-4",
  "d-flex",
  "justify-content-center",
  "align-items-center"
);

let avatar = document.createElement("img");
avatar.classList.add("avatar");
avatar.src =
  "https://pbs.twimg.com/profile_images/501759258665299968/3799Ffxy.jpeg";

div4.append(avatar);
rightInfo.append(div4);

cardDiv.append(leftInfo);
cardDiv.append(rightInfo);

document.getElementById("profiles").append(innerFlex);
```

## データの表示

```js
function createEmployeeCard(employeeName, job, skills, country, avatarUrl) {
  let innerFlex = document.createElement("div");
  innerFlex.classList.add(
    "d-flex",
    "align-items-center",
    "col-md-7",
    "col-10",
    "m-1"
  );

  let cardDiv = document.createElement("div");
  innerFlex.append(cardDiv);
  cardDiv.classList.add("d-flex", "col-12", "profile-card");

  let leftInfo = document.createElement("div");
  leftInfo.classList.add("col-8", "py-3");

  let div1 = document.createElement("div");
  div1.classList.add("py-2");

  let div2 = div1.cloneNode(true);
  let div3 = div1.cloneNode(true);

  let nameTitle = document.createElement("h4");
  nameTitle.innerHTML = employeeName;

  let employeeJob = document.createElement("p");
  let employeeSkill = document.createElement("p");
  let employeeCountry = document.createElement("p");

  employeeJob.innerHTML = "Job: " + "<br>" + job;
  div1.append(employeeJob);

  employeeSkill.innerHTML = "Skill: " + "<br>" + skills;
  div2.append(employeeSkill);

  employeeCountry.innerHTML = "Country : " + "<br>" + country;
  div3.append(employeeCountry);

  leftInfo.append(nameTitle);
  leftInfo.append(div1);
  leftInfo.append(div2);
  leftInfo.append(div3);

  let rightInfo = document.createElement("div");
  let div4 = document.createElement("div");
  rightInfo.classList.add(
    "col-4",
    "d-flex",
    "justify-content-center",
    "align-items-center"
  );

  let avatar = document.createElement("img");
  avatar.classList.add("avatar");
  avatar.src = avatarUrl;

  div4.append(avatar);
  rightInfo.append(div4);

  cardDiv.append(leftInfo);
  cardDiv.append(rightInfo);

  return innerFlex;
}

const profileDiv = document.getElementById("profiles");

let employee1 = createEmployeeCard(
  "Kaiden Herman",
  "Software Engineer",
  "C++, C#, Java, PHP, JavaScript, Python",
  "United States",
  "https://pbs.twimg.com/profile_images/501759258665299968/3799Ffxy.jpeg"
);
let employee2 = createEmployeeCard(
  "Elizabeth Dunn",
  "Accountant",
  "Excel, Word, Quickbooks",
  "England",
  "https://randomuser.me/api/portraits/women/76.jpg"
);
let employee3 = createEmployeeCard(
  "Duan Moreno",
  "Teacher",
  "Working with children, History, Word",
  "Argentina",
  "https://randomuser.me/api/portraits/med/men/93.jpg"
);

profileDiv.append(employee1);
profileDiv.append(employee2);
profileDiv.append(employee3);
```

## クラスの作成

```js
class Employee {
  constructor(firstName, lastName, job, skill, country, avatarUrl) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.job = job;
    this.skill = skill;
    this.country = country;
    this.avatarUrl = avatarUrl;
  }

  getFullName() {
    return this.firstName + " " + this.lastName;
  }
}

let employee1 = new Employee(
  "Kaiden",
  "Herman",
  "Software Engineer",
  "C++, C#, Java, PHP, JavaScript, Python",
  "United States",
  "https://pbs.twimg.com/profile_images/501759258665299968/3799Ffxy.jpeg"
);

console.log(employee1);
console.log(employee1.getFullName());
```

## オブジェクトの作成

employeeObject を引数として受け取るオブジェクト

```js
function createEmployeeCard(employeeObject) {
  let innerFlex = document.createElement("div");
  innerFlex.classList.add(
    "d-flex",
    "align-items-center",
    "col-md-7",
    "col-10",
    "m-1"
  );

  let cardDiv = document.createElement("div");
  innerFlex.append(cardDiv);
  cardDiv.classList.add("d-flex", "col-12", "profile-card");

  //*** 左半分 ***
  let leftInfo = document.createElement("div");
  leftInfo.classList.add("col-8", "py-3");
  let div1 = document.createElement("div");
  div1.classList.add("py-2");
  let div2 = div1.cloneNode(true);
  let div3 = div1.cloneNode(true);

  let nameTitle = document.createElement("h4");
  nameTitle.innerHTML = employeeObject.getFullName;

  let employeeJob = document.createElement("p");
  let employeeSkill = document.createElement("p");
  let employeeCountry = document.createElement("p");

  employeeJob.innerHTML = "Job: " + "<br>" + employeeObject.job;
  div1.append(employeeJob);

  employeeSkill.innerHTML = "Skill: " + "<br>" + employeeObject.skills;
  div2.append(employeeSkill);

  employeeCountry.innerHTML = "Country : " + "<br>" + employeeObject.country;
  div3.append(employeeCountry);

  leftInfo.append(nameTitle);
  leftInfo.append(div1);
  leftInfo.append(div2);
  leftInfo.append(div3);
  //*** 左半分終了 ***

  //*** 右半分 ***
  let rightInfo = document.createElement("div");
  let div4 = document.createElement("div");
  rightInfo.classList.add(
    "col-4",
    "d-flex",
    "justify-content-center",
    "align-items-center"
  );
  let avatar = document.createElement("img");
  avatar.classList.add("avatar");
  avatar.src = avatarUrl;
  div4.append(avatar);
  rightInfo.append(div4);
  //*** 右半分終了 ***

  cardDiv.append(leftInfo);
  cardDiv.append(rightInfo);

  return innerFlex;
}

const profileDiv = document.getElementById("profiles");

class Employee {
  constructor(firstName, lastName, job, skill, country, avatarUrl) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.job = job;
    this.skill = skill;
    this.country = country;
    this.avatarUrl = avatarUrl;
  }

  getFullName() {
    return this.firstName + " " + this.lastName;
  }
}

let employee1 = new Employee(
  "Kaiden",
  "Herman",
  "Software Engineer",
  "C++, C#, Java, PHP, JavaScript, Python",
  "United States",
  "https://pbs.twimg.com/profile_images/501759258665299968/3799Ffxy.jpeg"
);
let employee2 = new Employee(
  "Elizabeth",
  "Dunn",
  "Accountant",
  "Excel, Word, Quickbooks",
  "England",
  "https://randomuser.me/api/portraits/women/76.jpg"
);
let employee3 = new Employee(
  "Duan",
  "Moreno",
  "Teacher",
  "Working with children, History, Word",
  "Argentina",
  "https://randomuser.me/api/portraits/med/men/93.jpg"
);

profileDiv.append(createEmployeeCard(employee1));
profileDiv.append(createEmployeeCard(employee2));
profileDiv.append(createEmployeeCard(employee3));
```

## ラムダ関数の作成

```js
function createEmployeeCard(employeeObject) {
  let innerFlex = document.createElement("div");
  innerFlex.classList.add(
    "d-flex",
    "align-items-center",
    "col-md-7",
    "col-10",
    "m-1"
  );

  let cardDiv = document.createElement("div");
  innerFlex.append(cardDiv);
  cardDiv.classList.add("d-flex", "col-12", "profile-card");

  //*** 左半分 ***
  let leftInfo = document.createElement("div");
  leftInfo.classList.add("col-8", "py-3");
  let div1 = document.createElement("div");
  div1.classList.add("py-2");
  let div2 = div1.cloneNode(true);
  let div3 = div1.cloneNode(true);

  let nameTitle = document.createElement("h4");
  nameTitle.innerHTML = employeeObject.getFullName();

  let employeeJob = document.createElement("p");
  let employeeSkill = document.createElement("p");
  let employeeCountry = document.createElement("p");

  employeeJob.innerHTML = "Job: " + "<br>" + employeeObject.job;
  div1.append(employeeJob);

  employeeSkill.innerHTML = "Skill: " + "<br>" + employeeObject.skills;
  div2.append(employeeSkill);

  employeeCountry.innerHTML = "Country : " + "<br>" + employeeObject.country;
  div3.append(employeeCountry);

  leftInfo.append(nameTitle);
  leftInfo.append(div1);
  leftInfo.append(div2);
  leftInfo.append(div3);
  //*** 左半分 ***

  //*** 右半分 ***
  let rightInfo = document.createElement("div");
  let div4 = document.createElement("div");
  rightInfo.classList.add(
    "col-4",
    "d-flex",
    "justify-content-center",
    "align-items-center"
  );
  let avatar = document.createElement("img");
  avatar.classList.add("avatar");
  avatar.src = employeeObject.avatarUrl;
  div4.append(avatar);
  rightInfo.append(div4);
  //*** 右半分終了 ***

  cardDiv.append(leftInfo);
  cardDiv.append(rightInfo);

  return innerFlex;
}

const profileDiv = document.getElementById("profiles");

// 従業員のクラスを生成します。createEmployeeCard関数はオブジェクトを受け取ります。
class Employee {
  constructor(firstName, lastName, job, skills, country, avatarUrl) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.job = job;
    this.skills = skills;
    this.country = country;
    this.avatarUrl = avatarUrl;
  }

  getFullName() {
    return this.firstName + " " + this.lastName;
  }
}

//配列の使用
let employee1 = new Employee(
  "Kaiden",
  "Herman",
  "Software Engineer",
  "C++, C#, Java, PHP, JavaScript, Python",
  "United States",
  "https://pbs.twimg.com/profile_images/501759258665299968/3799Ffxy.jpeg"
);
let employee2 = new Employee(
  "Elizabeth",
  "Dunn",
  "Accountant",
  "Excel, Word, Quickbooks",
  "England",
  "https://randomuser.me/api/portraits/women/76.jpg"
);
let employee3 = new Employee(
  "Duan",
  "Moreno",
  "Teacher",
  "Working with children, History, Word",
  "Argentina",
  "https://randomuser.me/api/portraits/med/men/93.jpg"
);

let employees = [employee1, employee2, employee3];

employees.map((employee) => profileDiv.append(createEmployeeCard(employee)));
```

## Motivational Speech Wallpaper

```html
<link
  rel="stylesheet"
  href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
  integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk"
  crossorigin="anonymous"
/>

<div
  id="target"
  class="py-5 bg-white d-flex flex-column justify-content-center align-items-center"
></div>
```

```css
.container {
  width: 100%;
}

.imgBackground {
  background-size: cover;
}
```

```js
function motivationalSpeechWallpaper(paperObject) {
  let container = document.createElement("div");
  container.classList.add("container", "d-flex", "justify-content-center");

  let wallPaper = document.createElement("div");
  wallPaper.classList.add(
    "vh-75",
    "p-md-5",
    "p-3",
    "my-5",
    "col-md-8",
    "col-12",
    "d-flex",
    "imgBackground"
  );
  wallPaper.style.backgroundImage = `url('${paperObject.paperImgUrl}')`;

  wallPaper.classList.add(paperObject.horizontalPosition);
  wallPaper.classList.add(paperObject.verticalPosition);

  let speechPart = document.createElement("div");
  speechPart.classList.add("col-8");

  let motivationalSpeech = document.createElement("h3");
  motivationalSpeech.classList.add("paperText");
  motivationalSpeech.innerHTML = paperObject.text;
  motivationalSpeech.style.color = `#${paperObject.colorCode}`;

  speechPart.append(motivationalSpeech);
  wallPaper.append(speechPart);
  container.append(wallPaper);

  return container;
}

class Paper {
  constructor(
    text,
    colorCode,
    paperImgUrl,
    verticalPosition,
    horizontalPosition
  ) {
    this.text = text;
    this.colorCode = colorCode;
    this.paperImgUrl = paperImgUrl;
    this.verticalPosition = this.verticalTable[verticalPosition];
    this.horizontalPosition = this.horizontalTable[horizontalPosition];
  }

  verticalTable = {
    top: "align-items-start",
    center: "align-items-center",
    bottom: "align-items-end",
  };

  horizontalTable = {
    left: "justify-content-start",
    center: "justify-content-center",
    right: "justify-content-end",
  };
}

let speech1 = new Paper(
  "Perfection is achieved, not when there is nothing more to add, but when there is nothing left to take away. - Antoine de Saint",
  "1B4F72",
  "https://cdn.pixabay.com/photo/2020/06/12/03/06/magnifying-glass-5288877__340.jpg",
  "top",
  "right"
);

let speech2 = new Paper(
  "The scientist discovers a new type of material or energy and the engineer discovers a new use for it. - Gordon Lindsay Glegg",
  "007bff",
  "https://cdn.pixabay.com/photo/2018/02/23/04/38/laptop-3174729_1280.jpg",
  "center",
  "left"
);

let speech3 = new Paper(
  "Scientists study the world as it is, engineers create the world that never has been. - Theodore von Karman",
  "ecf0f1",
  "https://cdn.pixabay.com/photo/2017/05/10/19/29/robot-2301646_1280.jpg",
  "center",
  "center"
);

const domObj = document.getElementById("target");

domObj.append(motivationalSpeechWallpaper(speech1));
domObj.append(motivationalSpeechWallpaper(speech2));
domObj.append(motivationalSpeechWallpaper(speech3));
```

## Emotion Onomatopoeia Dictionary

```js
const target = document.getElementById("target");

class Word {
  constructor(word, definition, pictureUrl) {
    this.word = word;
    this.definition = definition;
    this.pictureUrl = pictureUrl;
  }
}

class EmotionObject {
  constructor(emotion, description, color, emoji, onomatopoeia) {
    this.emotion = emotion;
    this.description = description;
    this.color = color;
    this.emoji = emoji;
    this.onomatopoeia = onomatopoeia;
  }

  //感情のすべての擬音語のWordオブジェクトの配列を返す
  getOnomatopoeiaWords() {
    let res = [];
    for (let i = 0; i < this.onomatopoeia.length; $i++) {
      res.push(
        new Word(
          this.onomatopoeia[i],
          dictionary[this.onomatopoeia[i]],
          pictureDictionary[this.onomatopoeia[i]]
        )
      );
    }
    return res;
  }
  //コンテナのHTMLを文字列で返す
  getHtmlContainerString() {
    let string = `
    <div id = ${this.emotion} style = "background: ${this.color}">
      <div class = "container py-3">
        <div class = "p-3 text-white">
          <h2>${this.emotion}</h2>
          <p>${this.description}</p>
        </div>
        <div class = "d-flex justify-content-between flex-wrap">
    `;
    for (let i = 0; i < this.getOnomatopoeiaWords().length; i++) {
      let obj = this.getOnomatopoeiaWords();
      string += `
      <div class = "d-flex col-md-5 col-12 bg-white px-0 my-2">
        <div class = "col-8">
          <h4 class = "pt-3">${obj[i].word}</h4>
          <p class = "pt-2">${obj[i].definition}</p>
        </div>
        <div class = "col-4 px-0 d-flex justify-content-center align-items-center">
          <img class = "col-12 imgFit p-1" src = "${obj[i].pictureUrl}" alt = "">
        </div>
      </div>
      `;
    }
    string += `
        </div>
      </div>
    </div>
    `;
    return string;
  }
}

//グローバル定数
const dictionary = {
  bark: "the sound made by a dog",
  grunt: "issue a low, animal-like noise",
  roar: "make a loud noise, as of an animal",
  whack: "the act of hitting vigorously",
  smack: "a blow from a flat object (as an open hand)",
  hiss: `make a sharp, elongated "s" sound`,
  ahem: "the utterance of a sound similar to clearing the throat",
  bawl: "cry loudly",
  bling: "flashy, ostentatious jewelry",
  boom: "a deep prolonged loud noise",
  buzz: "the sound of rapid vibration",
  caw: "utter a cry, characteristic of crows, rooks, or ravens",
  chatter: "talk socially without exchanging too much information",
  chant: "a repetitive song in which syllables are assigned to a tone",
  clatter:
    "a continuous rattling sound as of hard objects falling or striking each other.",
  clunk: "a heavy dull sound (as made by impact of heavy objects)",
  crawl:
    "move forward on the hands and knees or by dragging the body close to the ground.",
  flick: "throw or toss with a quick motion",
  giggle: "a light, silly laugh.",
  gargle:
    "an act or instance or the sound of washing one's mouth and throat with a liquid kept in motion by exhaling through it.",
  honk: "the cry of a goose or any loud sound resembling it",
  oink: "the short low gruff noise of the kind made by hogs",
  whine: "a complaint uttered in a plaintive way",
  waah: "sound made when crying by babies",
  zing: "sound my by something energetic",
};

const pictureDictionary = {
  bark: "https://cdn.pixabay.com/photo/2013/07/25/11/59/german-shepherd-166972_1280.jpg",
  grunt: "https://cdn.pixabay.com/photo/2010/11/29/nepal-419__480.jpg",
  roar: "https://cdn.pixabay.com/photo/2018/04/13/21/24/lion-3317670_1280.jpg",
  whack:
    "https://cdn.pixabay.com/photo/2017/10/27/11/49/boxer-2894025_1280.jpg",
  smack:
    "https://cdn.pixabay.com/photo/2015/03/20/19/38/hammer-682767_1280.jpg",
  hiss: "https://cdn.pixabay.com/photo/2016/10/13/23/30/cat-1739091_1280.jpg",
  ahem: "https://cdn.pixabay.com/photo/2014/03/13/10/12/man-286476_1280.jpg",
  bawl: "https://cdn.pixabay.com/photo/2015/06/26/10/17/smiley-822365_960_720.jpg",
  bling:
    "https://cdn.pixabay.com/photo/2017/12/30/13/37/happy-new-year-3050088_1280.jpg",
  boom: "https://cdn.pixabay.com/photo/2016/04/12/21/17/explosion-1325471_1280.jpg",
  buzz: "https://cdn.pixabay.com/photo/2020/02/13/10/29/bees-4845211_1280.jpg",
  caw: "https://cdn.pixabay.com/photo/2017/02/16/11/13/bird-2071185_1280.jpg",
  chatter: "https://cdn.pixabay.com/photo/2014/07/25/08/55/bar-401546_1280.jpg",
  chant:
    "https://cdn.pixabay.com/photo/2016/07/19/07/43/parchment-1527650__340.jpg",
  clatter:
    "https://cdn.pixabay.com/photo/2020/02/06/19/01/clutter-4825256_1280.jpg",
  clunk:
    "https://cdn.pixabay.com/photo/2017/01/10/03/06/steel-1968194_1280.jpg",
  crawl: "https://cdn.pixabay.com/photo/2017/11/23/07/47/baby-2972221__340.jpg",
  flick:
    "https://cdn.pixabay.com/photo/2012/02/23/08/48/disgust-15793_1280.jpg",
  giggle:
    "https://cdn.pixabay.com/photo/2017/08/07/15/18/people-2604850_1280.jpg",
  gargle:
    "https://cdn.pixabay.com/photo/2017/04/03/16/32/girl-smoke-cigarette-2198839_1280.jpg",
  honk: "https://cdn.pixabay.com/photo/2017/02/28/14/37/geese-2105918_1280.jpg",
  oink: "https://cdn.pixabay.com/photo/2019/03/02/15/32/pig-4030013_1280.jpg",
  whine:
    "https://cdn.pixabay.com/photo/2020/05/01/01/57/girl-5115192_960_720.jpg",
  waah: "https://cdn.pixabay.com/photo/2017/01/18/02/18/emotions-1988745_1280.jpg",
  zing: "https://cdn.pixabay.com/photo/2017/09/14/16/38/fiber-optic-2749588_1280.jpg",
};

const emotions = [
  new EmotionObject(
    "angry",
    "feeling or showing strong annoyance, displeasure, or hostility; full of anger.",
    "red",
    "😃",
    ["bark", "grunt", "roar", "whack", "smack", "hiss"]
  ),
  new EmotionObject(
    "happy",
    "feeling or showing pleasure or contentment.",
    "yellow",
    "😃",
    ["bling", "chatter", "chant", "giggle"]
  ),
  new EmotionObject(
    "bad",
    "not such as to be hoped for or desired; unpleasant or unwelcome.",
    "beige",
    "😃",
    ["ahem", "clatter", "clunk"]
  ),
  new EmotionObject(
    "sad",
    "feeling or showing sorrow; unhappy.",
    "grey",
    "😃",
    ["bawl", "whine", "waah"]
  ),
  new EmotionObject(
    "surprised",
    "to feel mild astonishment or shock.",
    "purple",
    "😃",
    ["boom", "honk", "zing"]
  ),
  new EmotionObject(
    "fearful",
    "feeling afraid; showing fear or anxiety.",
    "green",
    "😃",
    ["buzz", "caw", "crawl"]
  ),
  new EmotionObject(
    "disgusted",
    "feeling or showing strong annoyance, displeasure, or hostility; full of anger.",
    "orange",
    "😃",
    ["flick", "gargle", "oink"]
  ),
];

class helperFunction {
  static generateCategoryElements(emotionObjectList) {
    let container = document.createElement("div");
    container.classList.add(
      "container",
      "d-flex",
      "justify-content-center",
      "flex-wrap"
    );

    let shuffled = helperFunction.shuffledArray(emotionObjectList);
    for (let i = 0; i < shuffled.length; i++) {
      let emotionObject = shuffled[i];

      let content = document.createElement("div");
      content.classList.add(
        "expandLink",
        "col-12",
        "col-md-6",
        "col-lg-3",
        "p-4",
        "m-4",
        "text-center"
      );

      content.style.background = `${emotionObject.color}`;

      content.innerHTML = `
      <a href = #${emotionObject.emotion}></a>
      <h3 class = "text-white">${emotionObject.emotion}</h3>
      <h1>${emotionObject.emoji}</h1>
      <p class = "text-white">${emotionObject.description}</p>
      `;
      container.append(content);
    }
    target.append(container);
    return target;
  }

  static generateOnomatopoeiaElements(emotionObjectList) {}

  static shuffleArray(arr) {}
}
```
