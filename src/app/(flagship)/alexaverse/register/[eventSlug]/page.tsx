import React from "react";

type Props = {
  params: {
    eventSlug: string;
  };
};

const RegisterPage = async (props: Props) => {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <h1 className="text-3xl font-bold text-center">
        Registration for this event is now closed.
      </h1>
    </div>
  );
};

export default RegisterPage;
