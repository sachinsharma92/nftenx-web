import { RightArrowSecondary } from "assets/icons";
import { Button, PrimaryInput } from "components/atoms";
import CustomToast from "components/atoms/Toast";
import { useState } from "react";
import { Api } from "services/api";
import { useRouter } from 'next/router'

type PropType = {
  layout?: "vertical" | "horizontal";
  type?: "primary" | "secondary";
};

export const JoinWaitlistForm = (props: PropType) => {
  const router = useRouter();
  const [show, setShow] = useState(false);
  const [title, setTitle] = useState("Success");
  const [content, setContent] = useState("Added successfully");

  const joinWaitlist = async (event: any) => {
    event.preventDefault();
    const payload = {
      email: event.target.email.value,
    };
    const response = await Api.joinTheWaitlist(payload);
    if (response.success) {
      router.push('/join?success=true');
    } else {
      setTitle("Error");
      // TODO: change this message according to the message received from the API
      setContent("Email already in the waitlist");
      setShow(true);
    }
  };
  return (
    <>
      <CustomToast
        show={show}
        content={content}
        onClose={() => setShow(false)}
        title={title}
      />
    <form
      onSubmit={joinWaitlist}
      className={`flex flex-col ${
        props.layout != "vertical" ? "md:flex-row mt-16" : ""
      }  gap-4`}
    >
      <PrimaryInput
        styletype={props.type == "secondary" ? "transparent" : undefined}
        name="email"
        type="email"
        placeholder="Enter Your Email"
        className={`w-96 ${props.type === "secondary"? 'text-center' :''}`}
      />
      <Button
        type="submit"
        className="bg-white bg-opacity-5 border-[1px] border-white border-opacity-20 flex flex-row w-auto group self-center"
      >
        <>
          Join Waitlist{" "}
          <RightArrowSecondary className="transition-all group-hover:translate-x-2" />
        </>
      </Button>
    </form>
    </>
  );
};
