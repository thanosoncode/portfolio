interface ContainerProps {
  classes?: string;
  children?: React.ReactNode;
}

const Container = ({ classes, children }: ContainerProps) => {
  return (
    <div className={`${classes} mx-auto w-full max-w-[940px] px-4`}>
      {children}
    </div>
  );
};

export default Container;
