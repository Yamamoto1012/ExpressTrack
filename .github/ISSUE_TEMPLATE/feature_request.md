name: 機能提案
description: 新しい機能や改善案を提案してください
title: "[提案] <簡単な説明>"
labels: ["enhancement"]
body:
  - type: markdown
    attributes:
      value: |
        **新しい機能や改善案について以下に記入してください。**

  - type: input
    id: feature_title
    attributes:
      label: 提案のタイトル
      description: 提案したい機能のタイトルを教えてください。
      placeholder: "例: ダークモードの追加"

  - type: textarea
    id: feature_description
    attributes:
      label: 提案の詳細
      description: この機能がどのような問題を解決するか、またはなぜ必要なのかを教えてください。

  - type: textarea
    id: use_case
    attributes:
      label: ユースケース
      description: この機能が役立つ具体的なシナリオを教えてください。

  - type: textarea
    id: alternatives
    attributes:
      label: 代替案
      description: 他に検討した解決方法や回避策があれば教えてください。

  - type: textarea
    id: additional_info
    attributes:
      label: 補足情報
      description: モックアップ、図、関連リンクがあれば記載してください。
