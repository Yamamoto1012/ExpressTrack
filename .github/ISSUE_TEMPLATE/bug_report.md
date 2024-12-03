name: バグ報告
description: プロジェクトで見つけたバグを報告してください
title: "[バグ] <簡単な説明>"
labels: ["bug"]
body:
  - type: markdown
    attributes:
      value: |
        **以下のテンプレートに記入してください。正確なバグの再現に役立ちます！**

  - type: input
    id: summary
    attributes:
      label: バグの概要
      description: バグの簡単な説明を書いてください。
      placeholder: "例: 保存ボタンを押すとアプリがクラッシュします"

  - type: textarea
    id: steps
    attributes:
      label: 再現手順
      description: バグを再現するための手順を詳しく教えてください。
      placeholder: |
        1. アプリを開く
        2. 「保存」ボタンを押す
        3. クラッシュする

  - type: textarea
    id: expected_behavior
    attributes:
      label: 期待する動作
      description: 本来どう動作するべきだったか教えてください。

  - type: textarea
    id: actual_behavior
    attributes:
      label: 実際の動作
      description: 実際に何が起きたのか教えてください。

  - type: input
    id: environment
    attributes:
      label: 環境情報
      description: 使用している環境を教えてください（例: OS、ブラウザ、デバイスなど）。
      placeholder: "例: Windows 10、Chrome 92、iPhone 13"

  - type: textarea
    id: additional_info
    attributes:
      label: 補足情報
      description: ログ、スクリーンショット、その他関連情報があれば教えてください。
