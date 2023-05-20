# 再帰

再帰の具体例

```text
例えば、100 段続く階段を 1 段ずつ下っているケースを考えてみましょう。「0 段目まで階段を下る」を 「1 段を下りる」というパターンを繰り返し利用することで、次のように定義することができます。

もし現在の段数が 0 であれば、止まる
現在の段数が 0 でなければ、1 段下る
```

```php:php
<?php
function multiply($m.$n-1) + $m;
    if ($n <= 0){
        return 0;
    }

    return multiply($m, $n-1) + $m;

    echo multiply(5,4);
```

- 関数に戻り値を保証してループを終了させるステートメント：ベースケース
- これがない場合 → 無限ループになる

## 再帰を使って文字列の長さを取得

```text
(s が空の文字列のとき) lengthOfString(s) = 0

(s が空の文字列ではないとき) lengthOfString(s) = lengthOfString(s.slice(0,-1)) + 1
```

s.slice(0.-1)は先頭から最後の 1 つ前の文字まで全部

```php:
<?php
//文字列の最後を切り取る
echo substr("abcde", 0, -1) . PHP_EOL;

function lengthOfString($s){
    if ($s == ''){
        return 0;
    }

//関数を自身を使って再起的に定義する
    return lengthOfString(substr($s, 0, -1)) + 1;
}

echo lengthOfString("ABCDE") . PHP_EOL;
```

## 総和

```php:
<?php
function summation($n){
    if ($n <= 0){
        return 0;
    }

    return summation($n-1) + $n;

    echo summation(5);
}
```

## 階乗

```php:
<?php
function factorial($n){
    if ($n <= 0 ){
        return 1;
    }

    return factorial($n-1) * $n;
}

echo factorial(5) . PHP_EOL;
```

## Q パスカルの三角形

n 番目に含まれる個数を d(n),n-1 番目に含まれる個数を d(n-1)とすると、d(n) = d(n-1) + n

```php:
<?php
function numberOfDots(int $x): int{
    //ベースケースで無限ループの回避
    if ($x ==1) return 1;

    return numberOfDots($x-1) + $x;
}
```

## Q 正方形の合計面積

x=n のとき S(n),x=n-1 のときを S(n-1)とすると,S(n) = S(n-1) + (n \**2) *n

```php:
<?php
function totalSquareArea(int $x): int{
    if ($x ==1) return 1;

    return totalSquareArea($x-1) + pow($x, 3);
}
```

## Q 羊を数える

S(n) = S(n-1) + "n sheep~"

```php:
<?php
function sheeps(int $count): string{
    // 関数を完成させてください
    if ($count == 1) return "1 sheep ~ ";

    return sheeps($count-1) . "$count sheep ~ ";
}
```

## 文字列の逆表示

```text
文字列を受け取って反転した文字列を r(string)とする。
r(abcd)
d + r(abc)
d + c + r(ab)
d + c + b + r(a)
d + c + b + a
```

文字列のカウントは mb_strlen 関数

r(S) = substr("r", -1) + r(S-1)

```php:
<?php
function reverseString(string $s): string{
    if (mb_strlen($s) == 1) return $s;

    return mb_substr($s, -1) . reverseString(mb_substr($s, 0, -1));
}
```
