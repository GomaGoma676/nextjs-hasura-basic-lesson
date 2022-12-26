## Project setup : 
#### ・Nextjs
#### ・TypeScript
#### ・Apollo Client
#### ・React-testing-library
#### ・Next-page-tester
#### ・Tailwind CSS
#### ・Mock Service Worker(MSW)

## 1. Nextjs Project 新規作成
### 1-1. yarn install *インストールしていない場合
    npm install --global yarn
    yarn --version
### 1-2.  create-next-app
    npx create-next-app@11.1.2 .
#### Node.js version 10.13以降が必要です。 -> ターミナル `node -v`でver確認出来ます。
### 1-3.  Apollo Client + heroicons + cross-fetch のインストール
    yarn add @apollo/client@3.3.15 graphql@15.5.0 @apollo/react-hooks@4.0.0 cross-fetch@3.1.4 @heroicons/react@1.0.6
### 1-4.  React-Testing-Library + MSW + next-page-tester のインストール
    yarn add react@17.0.2 react-dom@17.0.2
    yarn add next@11.1.2
    yarn add -D msw@0.35.0 next-page-tester@0.29.0 jest@26.6.3 @testing-library/react@11.2.6 @types/jest@26.0.22 @testing-library/jest-dom@5.11.10 @testing-library/dom@7.30.3 @testing-library/user-event@13.1.3 babel-jest@26.6.3 @babel/core@7.17.9 jest-css-modules
### 1-5.  Project folder 直下に".babelrc"ファイルを作成して下記設定を追加
    touch .babelrc
~~~
    {
        "presets": ["next/babel"]
    }
~~~
### 1-6.  package.json に jest の設定を追記
~~~
    "jest": {
        "testPathIgnorePatterns": [
            "<rootDir>/.next/",
            "<rootDir>/node_modules/"
        ],
        "moduleNameMapper": {
            "\\.(css)$": "<rootDir>/node_modules/jest-css-modules"
        }
    }
~~~
### 1-7.  package.jsonに test scriptを追記
~~~
    "scripts": {
        ...
        "test": "jest --env=jsdom --verbose"
    },
~~~
### 1-8.  prettierの設定 : settingsでRequire Config + Format On Saveにチェック
    touch .prettierrc
~~~
    {
        "singleQuote": true,
        "semi": false
    }
~~~  
## 2. TypeScript の導入
https://nextjs.org/learn/excel/typescript/create-tsconfig
### 2-1. 空のtsconfig.json作成
    touch tsconfig.json
### 2-2. 必要moduleのインストール
    yarn add -D typescript @types/react@17.0.41 @types/node@14.14.41
### 2-3. 開発server起動
    yarn dev
### 2-4. _app.js, index.js -> tsx へ拡張子変更
### 2-5. AppProps型追記
~~~
    import { AppProps } from 'next/app'

    function MyApp({ Component, pageProps }: AppProps) {
        return <Component {...pageProps} />
    }

    export default MyApp
~~~

## 3. Tailwind CSS の導入
https://tailwindcss.com/docs/guides/nextjs
### 3-1. 必要moduleのインストール
    yarn add tailwindcss@latest postcss@latest autoprefixer@latest
### 3-2. tailwind.config.js, postcss.config.jsの生成
    npx tailwindcss init -p
### 3-3. tailwind.config.jsのcontent設定追加
~~~
module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: false,
    theme: {
        extend: {},
    },
    variants: {
        extend: {},
    },
    plugins: [],
}
~~~
### 3-4. globals.cssの編集
~~~
@tailwind base;
@tailwind components;
@tailwind utilities;
~~~
## 4. Test動作確認
### 4-1. `__tests__`フォルダと`Home.test.tsx`ファイルの作成
~~~
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Home from '../pages/index'

it('Should render title text', () => {
  render(<Home />)
  expect(screen.getByText('Next.js!')).toBeInTheDocument()
})
~~~
### 4-2. yarn test -> テストがPASSするか確認
~~~
 PASS  __tests__/Home.test.tsx
  ✓ Should render hello text (20 ms)

Test Suites: 1 passed, 1 total
Tests:       1 passed, 1 total
Snapshots:   0 total
Time:        1.728 s, estimated 2 s
~~~
## 5. GraphQL codegen
### 5-1.  install modules + init
    yarn add -D @graphql-codegen/cli@1.21.3
    yarn graphql-codegen init
    yarn
    yarn add -D @graphql-codegen/typescript@1.21.1
### 5-2.  add queries in queries/queries.ts file
### 5-3.  generate types automatically
    yarn gen-types
