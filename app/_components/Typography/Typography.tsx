type TypographySize = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
type TypographyColor =
  | "primary"
  | "secondary"
  | "success"
  | "danger"
  | "warning"
  | string;

type TypographyProps = {
  text: string;
  bold?: boolean;
  size?: TypographySize;
  color?: string;
  className?: string;
};

export const Typography = ({
  text,
  bold = false,
  size = "h6",
  color = "primary",
  className = "",
}: TypographyProps) => {
  // 文字サイズに対応するクラス名を定義
  const sizeClasses: Record<TypographySize, string> = {
    h1: "text-32px",
    h2: "text-24px",
    h3: "text-20px",
    h4: "text-18px",
    h5: "text-16px",
    h6: "text-14px",
  };

  // 文字色に対応するクラス名を定義
  const colorClasses: Record<TypographyColor, string> = {
    primary: "text-[#2a2a36]",
    secondary: "text-[#FFFFFF]",
    success: "text-[#00FF00]",
    danger: "text-[#FF0000]",
    warning: "text-[#FFA500]",
  };

  // フォントの太さのクラス
  const fontWeight = bold ? "font-bold" : "font-medium";

  // 選択された文字のサイズのクラス名を取得
  const sizeClass = sizeClasses[size];

  // 選択された文字の色のクラス名を取得
  const colorClass = colorClasses[color];

  return (
    <div className={`${sizeClass} ${fontWeight} ${colorClass} ${className}`}>
      {text}
    </div>
  );
};
