# スコープ

スコープ：コード内で使われる変数名や関数名の有効範囲

```php
<?php
function userName(){
    $firstName = "Emily";
    $lastName = "Robertson";

    return $firstName . " - " . $lastName;
}

$firstName = "Masamune";
$lastName = "watanabe";

function myFun(){
    //ローカルスコープからグローバル変数にサクセスするときglobalを使う
    global $firstName, $lastName;

    echo $firstName . " - " . $lastName . PHP_EOL;

    $firstName = "Fernando";
    $lastName = "Yamato";
    echo $firstName . " - " . $lastName . PHP_EOL;

    echo userName() . PHP_EOL;

    $firstName = "Andy";
    $lastName = "Jordan";
    echo $firstName . " - " . $lastName . PHP_EOL;
}
```

```php
<?php
$x = 34;
$y = 10;

function square($x){
    // x がローカルスコープで検索されます
    // 引数になっているので、ローカルスコープの中で見つかります
    return $x * $x;
}

function globalMult($x){
    // x がローカルスコープで検索されます
    // 引数になっているので、ローカルスコープの中で見つかります
    // y はローカルスコープで見つからず y = 10 としてグローバルスコープで見つかりました
    global $y;
    return $x * $y;
}

function myFun(){
    // 関数スコープ

    // x を出力します
    // global キーワードで親スコープであるグローバルスコープを検索します
    global $x;
    echo $x . PHP_EOL;

    // x を上書きします
    $x = 56;

    echo $x . PHP_EOL;

    echo  square(4) . PHP_EOL;
    echo  globalMult(4) . PHP_EOL;
}

myFun();
```

## 値渡し

```php
<?php
function message($inputMessage){
    $inputMessage = $inputMessage . " - is the message. ";
    return $inputMessage;
}

function myFun(){
    $subject = "It will rain tomorrow";
    echo $subject . PHP_EOL;

    //subjectを値として返す
    //subjectの中のデータはmessageの仮引数にコピーされる
    $newMessage = message($subject);

    echo $subject . PHP_EOL;
    echo $newMessage . PHP_EOL;
}
```

## メモリ割り当て

変数、データ構造、クラスインスタンスなどの値を格納するためにメモリ上の特定の領域を確保するプロセスのこと
