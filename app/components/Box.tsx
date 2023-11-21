interface BoxProps {
  classes?: string;
  children?: React.ReactNode;
}

const Box = ({ classes, children }: BoxProps) => {
  return (
    <div className={`${classes} mx-auto w-full max-w-[940px] px-4`}>
      {children}
    </div>
  );
};

export default Box;
