# cucumber-e2e-test-example
cucumberでのE2Eテストデモ用実装例.  
記事投稿と一覧取得ができる、記事管理アプリをBDDフレームワークを使ったE2Eテストで動作検証する.

## 環境
* バックエンド: Docker x Django
* BDDフレームワーク: cucumber
* ブラウザ操作 / Webドライバ: pupeteer
* node.js v14.8.0
* yarn

## 準備
```
$ yarn install
$ docker-compose run --rm web python manage.py migrate
$ docker-compose up -d
```

## テスト実行
```
$ yarn run e2e-test
```
