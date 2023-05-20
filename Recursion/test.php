<?php

function reverseString(string $s): string
{
    // 文字列の長さが1の場合はそのまま返す
    if (mb_strlen($s) == 1) return $s;

    // 最後の文字と、それを除いた部分を逆順にしたものを結合して返す
    return mb_substr($s, -1) . reverseString(mb_substr($s, 0, mb_strlen($s) - 1));
}
