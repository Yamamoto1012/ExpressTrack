name: リファクタリングリクエスト
description: コードのリファクタリングをリクエストしてください
title: "[リファクタリング] <簡単な説明>"
labels: ["refactor"]
body:
  - type: markdown
    attributes:
      value: |
        **以下のテンプレートに記入してください。リファクタリングの詳細を教えてください。**

  - type: input
    id: refactor_title
    attributes:
      label: リファクタリングのタイトル
      description: リファクタリングの簡単なタイトルを教えてください。
      placeholder: "例: コンポーネントの分割"

  - type: textarea
    id: refactor_description
    attributes:
      label: リファクタリングの詳細
      description: リファクタリングの詳細とその理由を教えてください。

  - type: textarea
    id: current_implementation
    attributes:
      label: 現在の実装
      description: 現在のコードの実装を教えてください。

  - type: textarea
    id: proposed_changes
    attributes:
      label: 提案する変更
      description: 提案するリファクタリングの変更点を教えてください。

  - type: textarea
    id: additional_info
    attributes:
      label: 補足情報
      description: その他関連情報があれば教えてください。