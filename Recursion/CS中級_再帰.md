# 再帰

再帰の具体例

```text
例えば、100 段続く階段を 1 段ずつ下っているケースを考えてみましょう。「0 段目まで階段を下る」を 「1 段を下りる」というパターンを繰り返し利用することで、次のように定義することができます。

もし現在の段数が 0 であれば、止まる
現在の段数が 0 でなければ、1 段下る
```

```php
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

```php
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

```php
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

```php
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

```php
<?php
function numberOfDots(int $x): int{
    //ベースケースで無限ループの回避
    if ($x ==1) return 1;

    return numberOfDots($x-1) + $x;
}
```

## Q 正方形の合計面積

x=n のとき S(n),x=n-1 のときを S(n-1)とすると,S(n) = S(n-1) + (n \**2) *n

```php
<?php
function totalSquareArea(int $x): int{
    if ($x ==1) return 1;

    return totalSquareArea($x-1) + pow($x, 3);
}
```

## Q 羊を数える

S(n) = S(n-1) + "n sheep~"

```php
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

```php
<?php
function reverseString(string $s): string{
    if (mb_strlen($s) == 1) return $s;

    return mb_substr($s, -1) . reverseString(mb_substr($s, 0, -1));
}
```

```php
//正答例
<?php
function reverseString(string $s): string{
    // ベースケース
    if (strlen($s) <= 1) return $s;
    // substring関数を使って最後の1文字を切り取ります。
    $subStr = substr($s, 0, strlen($s) - 1);
    return $s[strlen($s) - 1] . reverseString($subStr);
}
```

## 最大公約数

最大公約数の再帰関数 g(m,n)は

```
n = 0のとき、gcd(m,n) = m
n>0のとき、gcd(m,n) = gcd(n,m%n)
```

```php
<?php
function gcd($m, $n){

    if (($m % $n) == 0) return $n;

    return gcd($n, $m % $n);
}
```

```python
def gcd(m,n):
    if (m % n) == 0:
        return n
    else:
        return gcd(n, m % n)
```

## 平方根

相対誤差：測定した値と理論値の差を、理論値で割った値を使って表す誤差のこと

```text
1000 kg と 1001 kg の差を求めたい場合、次のように計算できます。


まず、測定値と理論値の差を求めます。

1001 - 1000 = 1


次に、この差を理論値で割ります。

1 / 1000 = 0.001


この値をパーセントに変換するために、100をかけます。

0.001 * 100 = 0.1%


この結果から、1000 kg と 1001 kg の間には 0.1% の相対誤差があることがわかります。つまり、測定値が理論値から 0.1% だけずれているということです。
```

```php
<?php
function isSquareRootCloseEnough($a, $b){
    //abs(x)はxの絶対値を返す
    return 100 * abs(($a - $b) / $b) < 0.01;
}

function squareRootHelper($x, $guess){
    $newGuess = ($guess + $x/$guess)/2;

    echo "guess : " . strval($guess) . PHP_EOL;
    echo "new guess : " . strval($newGuess) . PHP_EOL;

    if(isSquareRootCloseEnough($newGuess,$guess)) return $newGuess;

    return squareRootHelper($x,($guess + $x/$guess)/2);
}

function squareRoot($x){
    return sauareRootHelper($x, 1);
}

echo squareRoot(65);
```

```php
/*
自然数 n が与えられるので、n の約数のうち、n 自身を除く最大の数値を返す getGreatestDivisor という関数を定義しましょう。例えば、12 が与えられたとき、12 の約数 1,2,3,4,6,12 のうち、12 を除いた 6 を返します。
*/
<?php

function getGreatDivisor($n){
    return getGreatestDivisorHelper($n, $n-1);
}

function getGreatestDivisorHelper($n, $k){
    if ($n % $k == 0) return $k;

    return getGreatestDivisorHelper($n, $k-1);
}
```

$n =12の時、getGreatDivisor(12)が呼び出されてgetGreatestDivisionHelper(12,11)が返される。<br>
次にgetGreatestDivisionHelper(12,11)で再帰関数が実行されていく。getGreatestDivisorHelper(12, 6)：12は6で割り切れるので、$k（つまり 6）を返す。これが最大公約数になる。

## Q 正方形の合計枚数

長方形の縦と横の最大公約数を求めてそれを１辺とする正方形をいくつ作れるかを計算する

```php
<?php

function countSquare(int $x, int $y): int{
    $squareEdge = gcd($x, $y);
    return ($x / $squareEdge) * ($y / $squareEdge);
}

function gcd(int $x, int $y){
    if (($x % $y) == 0) return $y;

    return gcd($y, $x % $y);
}
```

```python
def gcd(x,y):
    if x % y ==0:
        return y
    else
        return gcd(y, x % y)

def countSquare(x,y)
    square_edge = gcd(x, y)
    return (x // square_edge) * (y // square_edge)
```

python は//で切り捨て除算

## Q 数字を分割して足す

```text
A(123) = A(12) + 3
A(123) = A(floor(123/10)) + 123 % 10
```

```php
<?php
function splitAndAdd(int $digits): int{

    if ($digits < 10) return $digits;

    return splitAndAdd(floor($digits / 10)) + $digits % 10;
}
```

12 が入力されたとき,2+splitAndAdd(intval(12/10))<br>
次の再帰呼び出しは$digits=1 なので 1 + splitAndAdd(intval(1/10))になって $digits が基底ケースを満たす

```python
import math

def splitAndAdd(digits):
    if digits < 10: return digits
    return digits % 10 + splitAndAdd(math.floor(digits / 10))
```

## 総和の総和

```php
<?php
function simpleSummation($count){
    if ($count <= 0) return 0;
    return $count + simpleSummation($count -1);
}

function simpleSummationOfSummations($count){
    if ($count<= 0) return 0;
    return simpleSummation($count) + simpleSummationOfSummations($count-1);
}
```

## フィボナッチ数列

```php
<?php
function fibonacciNumber($n){
    if ($n == 0) return 0;
    else if($n == 1) return 1;

    return fibonacciNumber($n - 1) + fibonacciNumber($n - 2);
}
```

深さ優先探索：木の末端側から処理が徐々に実行される ←→ 幅優先探索

## Q フィボナッチ数列

```php
<?php
function fibonacci(int $n): int{
    if ($n == 0) return 0;
    else if ($n == 1) return 1;

    return fibonacci($n - 1) + fibonacci($n - 2);
}
```

```python
def fibonacci(n):
    # 関数を完成させてください
    if n == 0:
        return 0
    elif n ==1:
        return 1
    return fibonacci(n - 1) + fibonacci(n - 2)
```

## Q 3 で割り続ける

```php
<?php
function divideBy3Count(int $n): int{
    if ($n == 1) return 0;
    return 1 + divideBy3Count($n / 3);
}
```

```python
def divideBy3Count(n):
    if n == 1: return 0
    return 1 + divideBy3Count(n / 3)
```

## Q 約数

```php
<?php
function divisorHelper($number, $current, $divisors){
    if ($current > $number) {
        return rtrim($divisors, '-');
    }
    if ($number % $current == 0){
        $divisors .= $current . '-';
    }
    return divisorHelper($number, $current + 1, $divisors);
}

function divisor(int $number): string{
    return divisorHelper($number, 1, '');
}
```

```php
//正答例
<?php
function divisor(int $number): string{
    return divisorHelper($number, 1);
}

function divisorHelper(int $number, int $i):string {
    if ($number <= $i) return $number;
    if ($number % $i == 0) return $i . '-' . divisorHelper($number, $i+1);
    return divisorHelper($number, $i+1);
}
```

## Q 投資の計算

```php
<?php
function howLongToReachFundGoal(int $capitalMoney, int $goalMoney, int $interest): int {
    return howLongToReachFundGoalHelper($capitalMoney, $goalMoney, $interest, 0);
}

function howLongToReachFundGoalHelper(int $capitalMoney, int $goalMoney, int $interest, int $year) {
    if ($year >= 80) return 80;
    if($capitalMoney >= $goalMoney) return $year;

    $newCapitalMoney = $capitalMoney * (1 + $interest/100);
    $newGoalMoney = $goalMoney * (1 + ($year % 2 == 0 ? 2 : 3)/100);

    return howLongToReachFundGoalHelper($newCapitalMoney, $newGoalMoney, $interest, $year+1);
}
```

```php
//正答例
<?php
function howLongToReachFundGoal(int $capitalMoney,int $goalMoney,int $interest): int{
    return howLongToReachFundGoalHelper($capitalMoney,$goalMoney,$interest,0);
}

function howLongToReachFundGoalHelper(float $capitalMoney,float $goalMoney,int $interest,int $year): int{
    if ($capitalMoney >= $goalMoney) return $year;
    if ($year >= 80) return 80;

    if ($year % 2 == 0) $goalMoney *= 1.02;
    else $goalMoney *= 1.03;

    $capitalMoney *= (1+$interest/100);

    return howLongToReachFundGoalHelper($capitalMoney, $goalMoney, $interest, $year+1);
}

```

## 末尾再帰

再帰呼び出しが関数の最後の操作となる形式の再帰のこと
https://zenn.dev/kj455/articles/dfa23c8357b274

```php
<?php
function simpleSummationTail($n) {
    // 途中結果を保存するため、引数を追加します
    return simpleSummationTailHelper($n, 0);
}

// 補助関数
function simpleSummationTailHelper($count, $total){
    // ベースケースに達したら、計算結果を返します
    if($count <= 0 ) {
        return $total;
    }

    // total + count として、計算結果を足していきます
    return simpleSummationTailHelper($count-1, $total+$count);
}
```

```php
<?php
// 末尾再帰を使って、n 番目のフィボナッチを返す関数を作成します
function fibonacciNumberTailHelper($fn1, $fn2, $n){
    if($n < 1) {
        return $fn1;
    }

    return fibonacciNumberTailHelper($fn2, $fn1+$fn2, $n-1);
}

function fibonacciNumberTail($n){
    // 補助関数を使用し、初期値 0, 1 を追加します
    return fibonacciNumberTailHelper(0,1,$n);
}
```

## Q フィボナッチ数列

```php
//末尾再帰を使って
<?php

function fibonacciTail(int $n): int{
    return fibonacciTailHelper(0, 1, $n);
}

function fibonacciTailHelper(int $f1, int $f2, int $n): int{
    if ($n == 0) return $f1;
    return fibonacciTailHelper($f2, $f1+$f2, $n-1);
}
```

## Q 数字の分割

```php
<?php
function recursiveDigitsAdded(int $digits): int{
    // 関数を完成させてください

    if ($digits < 10) return $digits;

    $sum = splitAndAdd($digits);

    if ($sum < 10) return $sum;
    return $sum + recursiveDigitsAdded($sum);
}

function splitAndAdd(int $current): int{
    if ($current <10) return $current;
    return $current % 10 + splitAndAdd(floor($current / 10));
}
```

```python
import math
def recursiveDigitsAdded(digits):
    if digits < 10: return digits

    sum = splitAndAdd(digits)

    if sum < 10: return sum
    return sum + recursiveDigitsAdded(sum)

def splitAndAdd(current):
    if current < 10: return current
    return current % 10 + splitAndAdd(math.floor(current / 10))
```
