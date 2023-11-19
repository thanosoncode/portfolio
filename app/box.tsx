interface BoxProps {
  outerClasses?: string;
  innerClasses?: string;
  children?: React.ReactNode;
}

const Box = ({ outerClasses, innerClasses, children }: BoxProps) => {
  return (
    <div className={`flex items-center justify-center ${outerClasses}`}>
      <div
        className={`mx-[3vw] w-full border-l border-r border-neutral-700 ${innerClasses}`}
      >
        {children}
      </div>
    </div>
  );
};

export default Box;
