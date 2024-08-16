
import Image from "next/image";
type Props = {};

function Tickets({}: Props) {
  const ticketsList = [
    {
      id: 1,
      sponsor: "Ideathon",
      url: "mailto:alexadevsrm@gmail.com",
      image: "/alexaverse/Ticket.png",
    },
    {
      id: 2,
      sponsor: "Yatra",
      url: "mailto:alexadevsrm@gmail.com",
      image:"/alexaverse/Ticket.png",
    },
    {
      id: 3,
      sponsor: "FPV",
      url: "mailto:alexadevsrm@gmail.com",
      image: "/alexaverse/Ticket.png",
    },
    {
      id: 4,
      sponsor: "Interview",
      url: "mailto:alexadevsrm@gmail.com",
      image: "/alexaverse/Ticket.png",
    },
  ];
  return (
    <div className="flex flex-col justify-center items-center  mt-10 pb-20">
      <Image
        src="/alexaverse/events.png"
        height={170}
        width={360}
        alt="Hero Separator"
        objectPosition="center"
        className="-mt-8 px-5 mb-10"
      />
      <div className="w-full flex text-white justify-center font-bold text-5xl md:text-7xl items-center mb-3 ">
        {/* Title could go here if needed */}
      </div>

      <div className="flex flex-col gap-6">
        {ticketsList.map((sponsor) => (
          
          <div
            key={sponsor.id}
            className="flex justify-center items-center px-7 py-2 bg-transparent rounded-lg"
          >
            
            <Image
              src={sponsor.image}
              alt={sponsor.sponsor}
              width={630}
              height={400}
              objectFit="contain"
              className="sponsor-image"
            />
            
          </div>
         

        ))}
      </div>
    </div>
  );
}

export default Tickets;
