import "./button.css";
type Props = {
  children: JSX.Element | string;
  color?: string | undefined;
  width?: string | number | undefined;
  height?: string | number | undefined;
  fontSize?: string | undefined;
  fontWeight?: string | undefined;
  active?: boolean | undefined;
  props?: Props;
  type?: "submit" | "reset" | "button" | undefined;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
};

export function Button({
  children,
  color,
  width,
  height,
  active,
  fontSize,
  fontWeight,
  type,
  onClick,
  ...props
}: Props) {
  const buttonStyle = {
    color: color,
    width: width,
    height: height,
    fontSize: fontSize,
    fontWeight: fontWeight,
  };
  return (
    <>
      <button
        {...props}
        type={type}
        style={buttonStyle}
        className="button-container"
        disabled={!active}
        onClick={onClick}
      >
        {children}
      </button>
    </>
  );
}
