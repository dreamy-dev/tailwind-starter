type ButtonProps = {
  backgroundColorClass?: string;
  textColorClass?: string;
  borderColorClass?: string;
  styles?: string;
  iconBefore?: React.ReactNode;
  iconAfter?: React.ReactNode;
  children: React.ReactNode;
  position?: "left" | "center" | "right";
};

export default function Button({
  backgroundColorClass,
  textColorClass,
  borderColorClass,
  iconBefore,
  styles,
  iconAfter,
  children,
  position,
}: ButtonProps) {
  const containerStyles: React.CSSProperties = {
    display: "flex",
    justifyContent:
      position === "left"
        ? "flex-start"
        : position === "center"
        ? "center"
        : "flex-end",
    alignItems: "center",
  };
  const secondaryButtonStyles = `${backgroundColorClass} border-2 ${textColorClass} ${borderColorClass} ${styles} flex text-sm px-2.5 py-2 hover:primary-800 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 rounded`;
  return (
    <div style={containerStyles}>
      <button className={secondaryButtonStyles}>
        {iconBefore && <span className="mr-2">{iconBefore}</span>}
        {children}
        {iconAfter && <span className="ml-2">{iconAfter}</span>}
      </button>
    </div>
  );
}
