import SingleRegisterForm from "@/components/alexaverse/register-form";
import React from "react";

type Props = {
  params: {
    eventSlug: string;
  };
};

const RegisterPage = (props: Props) => {
  const eventSlug = props.params.eventSlug;
  return (
    <div>
      <SingleRegisterForm eventName={eventSlug} eventSlug="eventSlug" />
    </div>
  );
};

export default RegisterPage;
