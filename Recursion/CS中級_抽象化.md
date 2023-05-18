# 抽象化

抽象化：不必要な詳細を減らす、あるいは隠すことによって、システムの複雑さを整理し、管理する技術のこと<br>
関数とデータを名前空間の中として保存できるようになる

## Q 緯度経度の計算

```php:
<?php
    function calculateLocation(float $latitude, float $longitude): string{
        return getLatitudeDirection($latitude) . "/" . getLongtitudeDirection($longitude);
    }
    // 関数を完成させてください
    function getLatitudeDirection(float $latitude): string{
        if ($latitude >0) return "north";
        else if ($latitude < 0) return "south";
        else return "equator";
    }

    function getLongtitudeDirection(float $longitude): string{
        if ($longitude >0) return "east";
        else if ($longitude < 0) return "west";
        else return "prime meridian";
    }
```

calculateLocation 関数を先頭に置いてその下に緯度と経度を計算する関数を 2 つ置く<br>

```php
return getLatitudeDirection($latitude) . "/" . getLongtitudeDirection($longitude);
```

で呼び出す

## Q ドメインの切り取り

```php:php
<?php
function upperCaseDomain(string $email): string{

$atLocation = strpos($email, "@");
    $domain = substr($email, $atLocation+1);
    return strtoupper($domain);
}
```

```python:python
def upper_case_domain(email: str) -> str:

    at_location = email.find("@")
    domain = email[at_location+1:]
    return domain.upper()
```

- @の位置を特定
- @の次の文字以降を$domain に格納
- $domain を strtoupper で大文字にする

## Q ピタゴラス数

```php:
<?php
    function isPerfectSquare(int $x, int $y): bool {
    $distance = sqrt(pow($x, 2) + pow($y, 2));
    return !hasDecimal($distance);
    }

    function hasDecimal(float $z): bool {
        return fmod($z, 1) != 0;
    }

```

```python:python
import math

def is_perfect_square(x: int, y: int) -> bool:
    distance = math.sqrt(math.pow(x, 2) + math.pow(y, 2))
    return not has_decimal(distance)

def has_decimal(distance: float) -> bool:
    return distance != int(distance)

```

- distance に距離を格納する
- hasDecimal は受け取った z が小数でない時に true
- isPerfectSquare で原点からの距離が自然数の時に true を返す

## Q 複利の計算

```php:php
<?php
function calculateGoalMoney(int $capital, int $year): int{
    $i = calculateInterestRate($capital);
    $futureValue = $capital * pow(1+ $i, $year);
    return floor($futureValue);
}

function calculateInterestRate(int $capital){
    if ($capital %2 == 0) return 0.02;
    else return 0.03;
}
```

```python:python
import math

def calculate_interest_rate(capital: int) -> float:
    if capital % 2 == 0:
        return 0.02
    else:
        return 0.03

def calculate_goal_money(capital: int, year: int) -> int:
    i = calculate_interest_rate(capital)
    future_value = capital * math.pow((1 + i), year)
    return math.floor(future_value)
```

- calculateInterestRate で金利の定義
- calculateGoalMoney で i, year, capital を使って futurevalue を定義する
- floor で小数点以下を切り捨てて出力

## 関数の分解

タスクに応じて関数を割り当てる

```php:
<?php
# ②文字の ASCII 値が奇数か偶数かチェックする関数
function isCharCodeEven($stringChar){
    $isEven = false;
    /// ordで文字コードを手に入れます
    if(ord($stringChar) % 2 === 0){
        $isEven = true;
    }
    return $isEven;
}

// ①インデックスと文字列を受け取り、message を生成する関数
//$stringの$indexの位置の文字を返す
function chosenCharacter($index, $string){
    return "The char [" . $string[$index] . "] at index " . $index;
}

// 本体の関数
function randomCharEvenOrOddDecomposed($s){
    // ランダムなインデックスを取得
    $randomIndex = rand(0, strlen($s));

    // 関数の分解①
    $message = chosenCharacter($randomIndex,$s);

    // 関数の分解②
    if (isCharCodeEven($s[$randomIndex])) {
        $message .= " is Even";
    } else {
        $message .= " is Odd";
    }

    return $message;
}

echo randomCharEvenOrOddDecomposed("Don't tell me lies.") . PHP_EOL;
```
