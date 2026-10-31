/** @type {import('prettier').Config} */
const config = {
  // 文末のセミコロンを付けない
  semi: false,
  // 文字列をシングルクォートで囲む（JSXの属性はダブルクォートのまま）
  singleQuote: true,
  // 1行の最大文字数の目安。超えそうな行は折り返す
  printWidth: 110,
}

export default config
