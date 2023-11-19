import Box from "./box";

const Cta = () => {
  return (
    <Box
      outerClasses="border-b border-neutral-600"
      innerClasses="py-8 px-[3vw] bg-gradient-to-br from-[#4658e7] to-[#05168a]"
    >
      <div className="flex flex-col items-center gap-8 py-24" id="contact">
        <h1 className="text-center text-6xl">You made it this far</h1>
        <div className="w-48 whitespace-nowrap rounded-md bg-white py-2 text-center text-lg text-black">
          Say hi
        </div>
      </div>
    </Box>
  );
};

export default Cta;
