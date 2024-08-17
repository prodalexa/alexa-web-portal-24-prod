import SingleRegisterForm from "@/components/alexaverse/register-form";
import { getTicketBySlug } from "@/sanity/data/alexaverse-data";
import React from "react";

type Props = {
  params: {
    eventSlug: string;
  };
};

const RegisterPage = async (props: Props) => {
  const eventData = await getTicketBySlug(props.params.eventSlug);
  return (
    <div>
      <SingleRegisterForm event={eventData} />
    </div>
  );
};

export default RegisterPage;
