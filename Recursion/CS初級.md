# クラスと名前空間

クラス(class):データと関数を組み合わせた構造体<br>

メンバ変数（member variable）:クラス内で定義されたデータ<br>
php では::でアクセスする<br>

メソッド（method）:クラス内で定義された関数<br>

```text:使用例
// クラス
// 物理に関する法則をまとめる
PhysicsThings:

// メンバ変数
// 地球の重力加速度
GRAVITY_ON_EARTH:
// 月の重力加速度
GRAVITY_ON_MOON:

// メソッド
// 質量を受け取って、地球上でのニュートン(N)を計算します
newtonOnEarth:
// 質量を受け取って、月上でのニュートン(N)を計算します
newtonOnMoon:
```

public static とは<br>
public - どんなクラスでも使用可能<br>
static - インスタンスがなくても使用可能

# Q 平方根の判定

```php:php
<?php
function isRationalNumber(int $number): bool{

$sqrt = sqrt($number);
    if (intval($sqrt) ** 2 == $number){
        return true;
    }
    else {
        return false;
    }
}
```

- 4 の時平方根 2 を 2 乗して 4 になるので true
- 5 の時平方根 2.236...で intval で整数に変換されると 2,これを 2 乗して 4 になるので false

# Q アンダースコア

```php:php
<?php
function insertUnderscoreAt(string $s, int $i): string{

    if ($i >= strlen($s)) {
        return $s;
    }

    $front = substr($s, 0, $i); //先頭からi番目まで
    $back = substr($s, $i); //i番目以降

    return $front . "_" . $back;
}
```

i=0 の時$front は空文字になる

# Q 文字列の真ん中を返す

```php:php
<?php
    function middleSubstring(string $stringInput): string {
    $len = strlen($stringInput);
    $middle = floor($len / 2);

    if ($len <= 2) {
        return $stringInput[0];
    }

    $start = $middle - floor($middle / 2);

    return substr($stringInput, $start, $middle);
}
```
