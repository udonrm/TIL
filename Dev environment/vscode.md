# スペニットを登録したい

Code から基本設定 → ユーザースペニット <br>

スニペッツファイルに以下を記述

```text
"スニペット名": {
  "prefix": "短縮語",
  "body": [
      "展開するコード",
      "展開するコード",
      "展開するコード"
  ],
  "description": "スニペットの説明"
}
```

md ファイルでも適用する場合は setting.json に以下を追記

```text
"[markdown]":  {
    "editor.wordWrap": "on",
    "editor.quickSuggestions": {
        "comments": "on",
        "strings": "on",
        "other": "on"
    },
    "editor.snippetSuggestions": "top"
}
```

参照：https://aadojo.alterbooth.com/entry/2023/01/16/110000
