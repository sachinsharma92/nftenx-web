import { RightArrowSecondary } from "assets/icons";
import { Button, PrimaryInput } from "components/atoms";
import { useEffect, useState } from "react";
import { Api } from "services/api";

type PropType = {
  layout?: "vertical" | "horizontal";
  type?: "primary" | "secondary";
  onSuccess?: Function;
  onChange?: Function;
};

export const JoinWaitlistForm = (props: PropType) => {
  const [show, setShow] = useState(false);
  const [title, setTitle] = useState("Success");
  const [content, setContent] = useState("Added successfully");

  useEffect(() => {
    if (props.onChange) {
      props.onChange({ fshow: show, ftitle: title, fcontent: content });
    }
  }, [show, title, content]);

  const joinWaitlist = async (event: any) => {
    event.preventDefault();
    const payload = {
      email: event.target.email.value,
    };
    const response = await Api.joinTheWaitlist(payload);
    if (response.success && props.onSuccess) {
      props.onSuccess(response.success);
    } else {
      setTitle("Error");
      // TODO: change this message according to the message received from the API
      setContent("Email already in the waitlist");
      setShow(true);
    }
  };
  return (
    <form
      onSubmit={joinWaitlist}
      className={`flex flex-col ${
        props.layout != "vertical" ? "md:flex-row" : ""
      }  gap-4 mt-16`}
    >
      <PrimaryInput
        styletype={props.type == "secondary" ? "transparent" : undefined}
        name="email"
        type="email"
        placeholder="Enter Your Email"
        className="w-96"
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
  );
};
