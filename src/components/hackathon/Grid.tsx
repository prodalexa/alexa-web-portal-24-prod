"use client";

type Props = {
  name: string;
  line1: string;
  line2?: string;
  className?: string;
};

function Grid({ name, line1, line2, className }: Props) {
  return (
    <div className={`flex flex-col items-center justify-center w-full max-h-3xl py-8 ${className || ''}`}>
      <h1 className="text-hack_orange text-4xl md:text-5xl font-extrabold mb-2">
        {name}
      </h1>
      <div className="w-full max-w-lg border-x-4 border-t-4 border-white pt-4 space-y-4">
        <p className="text-white text-2xl md:text-5xl text-center">{line1}</p>
        <p className="text-white text-2xl md:text-5xl text-center">{line2}</p>
      </div>
    </div>
  );
}

export default Grid;
