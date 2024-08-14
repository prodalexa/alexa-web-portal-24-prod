import { Link } from "lucide-react";
import Image from "next/image";
import React from "react";

function Tickets() {
  return (
    <div>
      <Link href="">
        <Image
          src="/ticket.png"
          alt="Picture of the author"
          width={500}
          height={500}
        />
      </Link>
    </div>
  );
}

export default Tickets;
