import Home from "./(routes)/home/Home";
import { MotionPageWrapper } from "./components/MotionPageWrapper";

const HomePage = () => {
  return (
    <MotionPageWrapper>
      <Home />
    </MotionPageWrapper>
  );
};

export default HomePage;
