import Image from "next/image";
import Link from "next/link";
import { CardBody, CardContainer, CardItem } from "../ui/3d-card";

type Props = {};

const Tickets = ({}: Props) => {
  // Stubbed tickets data for Alexaverse (static)
  const ticketsList = [
    {
      id: 1,
      title: "Web Slinger",
      ticket: "/alexaverse/tickets/web-slinger.png",
      registrationUrl: "#",
    },
    {
      id: 2,
      title: "Regener8",
      ticket: "/alexaverse/tickets/regener8.png",
      registrationUrl: "#",
    },
    {
      id: 3,
      title: "VlogIt",
      ticket: "/alexaverse/tickets/vlogit.png",
      registrationUrl: "#",
    },
    {
      id: 4,
      title: "Sherlock Syndrome",
      ticket: "/alexaverse/tickets/sherlock-syndrome.png",
      registrationUrl: "#",
    },
    {
      id: 5,
      title: "Puzzle Perfect Programming",
      ticket: "/alexaverse/tickets/puzzle-perfect-programming.png",
      registrationUrl: "#",
    },
    {
      id: 6,
      title: "Carnival Room",
      ticket: "/alexaverse/tickets/carnival-room.png",
      registrationUrl: "#",
    },
  ];

  return (
    <div
      id="our-events"
      className="flex flex-col justify-center items-center mt-10 pb-20"
    >
      <Image
        src="/alexaverse/events.png"
        height={170}
        width={360}
        alt="Hero Separator"
        objectPosition="center"
        className="-mt-8 px-5 mb-3"
      />
      <div className="w-full flex text-white tracking-wider justify-center font-bold text-lg items-center mb-3 ">
        Registration Closed
      </div>

      <div className="flex flex-col gap-6">
        {ticketsList.map((ticket, index) => (
          <div
            key={index}
            className="flex justify-center items-center bg-transparent rounded-lg"
          >
            <CardContainer className="inter-var w-[100%] group">
              <CardBody className="relative border-none bg-transparent inset-0 z-40 w-auto sm:w-[30rem] h-auto rounded-xl shadow-2xl">
                <CardItem translateZ="90" className="w-full">
                  <Link href={ticket.registrationUrl}>
                    <Image
                      src={ticket.ticket}
                      alt={ticket.title}
                      width={630}
                      height={400}
                      objectFit="contain"
                      className="sponsor-image"
                    />
                  </Link>
                </CardItem>
              </CardBody>
            </CardContainer>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tickets;
