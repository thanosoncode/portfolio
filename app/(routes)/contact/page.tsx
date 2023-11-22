import { MotionPageWrapper } from "../../components/MotionPageWrapper";
import Header from "../../components/Header";
import Container from "@/app/components/Container";
import { Metadata } from "next";
import Form from "./form/Form";

export const metadata: Metadata = {
  title: "ThanosJS | Contact",
  description: "Feel free to drop me message. I'm always happy to connect.",
};

const Contact = () => {
  return (
    <MotionPageWrapper>
      <Container>
        <Header
          title="Contact me"
          subtitle="Feel free to drop me a message. Whether it's a project inquiry or just to say hi, I'm always happy to connect."
        />
        <Form />
      </Container>
    </MotionPageWrapper>
  );
};

export default Contact;
