import "./button.css";
type Props = {
  children: JSX.Element | string;
  color?: string | undefined;
  width?: string | number | undefined;
  height?: string | number | undefined;
  active?: boolean | undefined;
  props?: Props;
};

export function Button({
  children,
  color,
  width,
  height,
  active,
  ...props
}: Props) {
  const buttonStyle = {
    color: color,
    width: width,
    height: height,
  };
  return (
    <>
      <button
        {...props}
        type="button"
        style={buttonStyle}
        className="button-container"
        disabled={!active}
      >
        {children}
      </button>
    </>
  );
}
