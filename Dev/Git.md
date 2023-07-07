# Git: もう怖くない Git!チーム開発で必要な Git を完全マスター(Udemy)

コミットを辿って以前の状態に戻すことができる

- ワークツリー → ローカルリポジトリ →GitHub(リモートリポジトリ)

## ローカルでの操作

```
ワークツリー：ファイルを変更する作業場
ステージ：コミットする変更を準備(git add)
リポジトリ：スナップショットを記録（git commit）
```

## 変更履歴確認その他

```
git statusで変更状況の確認
git diffで変更差分の確認
```

## 変更をもとに戻す

```
ステージの情報をワークツリーに反映させて変更をもとに戻す
git checkout -- <ファイル名>コマンド

ステージした変更の取り消し：git reset HEAD <ファイル名>

直前のコミットをやり直す：git commit --amend
```

## GitHub とやりとりしよう

```
リモートの表示：git remote (-v)
リモートリポジトリを新規で複数追加できる
リモートから情報を取得する：git fetch <リモート名>, git pull <リモート名><ブランチ名>

fetchとpullの使い分け

リモートの詳細情報の表示：git remote show<リモート名>
リモートの変更、削除：git remote rename <old remote name> <new remote name> , git remote rm <remote name>
```
