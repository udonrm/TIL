# クラスと名前空間

クラス(class):データと関数を組み合わせた構造体<br>

メンバ変数（member variable）:クラス内で定義されたデータ<br>
php では::でアクセスする<br>

メソッド（method）:クラス内で定義された関数<br>

使用例

```text
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

```php:
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
