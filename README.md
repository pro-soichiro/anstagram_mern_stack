# プロフィール帳

これはMERNスタックで作成したプロフィール帳のようなアプリケーションです。

## サンプル

https://anstagram-mern-stack.onrender.com/

renderを利用して、デプロイされています。
Freeプランであるため、初回は起動に時間がかかります。
また、DBの接続が切れている場合があるため、
cloneしてご自身の環境で起動することをお勧めします。


## 初めかた


### 事前準備

1. MongoDBの環境変数を設定

rootディレクトリに.envファイルを作成し、
MONGO_URLというキーでMongoDBのDBキーを設定してください。

2. 初期データの登録

MongoDB compassなどで、seedsディレクトリのuser.jsonをimportしてください。


### 起動手順

1. ライブラリのインストール 

```bash
npm install
```

2. 起動

```bash
npm run dev
```

localhost:3000で起動します。

サーバー側は8080で起動されています。

