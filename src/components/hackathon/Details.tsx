"use client";

import Grid from "./Grid";

const Details = () => {
  return (
    <section id="details" className="py-8 md:py-8 relative overflow-hidden">
      <div className="flex items-start justify-start md:items-center md:mb-0">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1440"
          height="139"
          viewBox="0 0 1440 139"
          fill="none"
        >
          <rect x="-13.5254" width="1453.52" height="139" fill="white" />
          <rect x="87.0332" width="43.2198" height="46" fill="black" />
          <rect x="-0.322266" width="43.2198" height="46" fill="black" />
          <rect x="87.0332" y="93" width="43.2198" height="46" fill="black" />
          <rect x="-0.322266" y="93" width="43.2198" height="46" fill="black" />
          <rect x="130.245" y="46" width="44.1593" height="47" fill="black" />
          <rect x="42.8896" y="46" width="44.1593" height="47" fill="black" />
          <rect x="174.412" width="43.2198" height="46" fill="black" />
          <rect x="174.412" y="93" width="43.2198" height="46" fill="black" />
          <rect x="217.632" y="46" width="44.1593" height="47" fill="black" />
          <rect x="261.783" width="43.2198" height="46" fill="black" />
          <rect x="261.783" y="93" width="43.2198" height="46" fill="black" />
          <rect x="305.011" y="46" width="44.1593" height="47" fill="black" />
          <rect x="349.17" width="43.2198" height="46" fill="black" />
          <rect x="349.17" y="93" width="43.2198" height="46" fill="black" />
          <rect x="392.39" y="46" width="44.1593" height="47" fill="black" />
          <rect x="436.549" width="43.2198" height="46" fill="black" />
          <rect x="436.549" y="93" width="43.2198" height="46" fill="black" />
          <rect x="479.769" y="46" width="44.1593" height="47" fill="black" />
          <rect x="523.928" width="43.2198" height="46" fill="black" />
          <rect x="523.928" y="93" width="43.2198" height="46" fill="black" />
          <rect x="567.14" y="46" width="43.2198" height="47" fill="black" />
          <rect x="610.368" width="44.1593" height="46" fill="black" />
          <rect x="610.368" y="93" width="44.1593" height="46" fill="black" />
          <rect x="654.526" y="46" width="43.2198" height="47" fill="black" />
          <rect x="697.747" width="44.1593" height="46" fill="black" />
          <rect x="697.747" y="93" width="44.1593" height="46" fill="black" />
          <rect x="741.905" y="46" width="43.2198" height="47" fill="black" />
          <rect x="785.126" width="44.1593" height="46" fill="black" />
          <rect x="785.126" y="93" width="44.1593" height="46" fill="black" />
          <rect x="829.284" y="46" width="43.2198" height="47" fill="black" />
          <rect x="872.497" width="44.1593" height="46" fill="black" />
          <rect x="872.497" y="93" width="44.1593" height="46" fill="black" />
          <rect x="916.663" y="46" width="43.2198" height="47" fill="black" />
          <rect x="959.884" width="43.2198" height="46" fill="black" />
          <rect x="959.884" y="93" width="43.2198" height="46" fill="black" />
          <rect x="1003.1" y="46" width="44.1593" height="47" fill="black" />
          <rect x="1047.26" width="43.2198" height="46" fill="black" />
          <rect x="1047.26" y="93" width="43.2198" height="46" fill="black" />
          <rect x="1090.48" y="46" width="44.1593" height="47" fill="black" />
          <rect x="1134.64" width="43.2198" height="46" fill="black" />
          <rect x="1134.64" y="93" width="43.2198" height="46" fill="black" />
          <rect x="1177.85" y="46" width="44.1593" height="47" fill="black" />
          <rect x="1222.02" width="43.2198" height="46" fill="black" />
          <rect x="1222.02" y="93" width="43.2198" height="46" fill="black" />
          <rect x="1265.24" y="46" width="44.1593" height="47" fill="black" />
          <rect x="1309.39" width="43.2198" height="46" fill="black" />
          <rect x="1309.39" y="93" width="43.2198" height="46" fill="black" />
          <rect x="1396.78" width="43.2198" height="46" fill="black" />
          <rect x="1396.78" y="93" width="43.2198" height="46" fill="black" />
          <rect x="1352.62" y="46" width="44.1593" height="47" fill="black" />
          <rect x="-44" y="46" width="44.1593" height="47" fill="black" />
        </svg>
      </div>
      <div className="container mx-auto md:px-20 md:pt-24">
        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-12 md:col-span-5 md:col-start-1 flex flex-col gap-8 font-monsterrat">
            <Grid name="Venue" line1="Sir J.C. Bose" line2="Tech Park (12th floor)" className="order-1 md:order-1" />
            <Grid name="Team Size" line1="2-4" line2="Members" className="order-3 md:order-3" />
            <Grid name="Prize Pool" line1="To be announced" line2="" className="order-5 md:order-5" />
          </div>
          
          <div className="col-span-12 md:col-span-5 md:col-start-8 flex flex-col gap-8 md:pt-40 font-monsterrat">
            <Grid name="Duration" line1="24" line2="Hours" className="order-2 md:order-2" />
            <Grid name="Registration Cost" line1="₹150/- per team" line2="" className="order-4 md:order-4" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Details;
