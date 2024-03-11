// import { logo } from "../assets";

export const Video = () => {
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="relative mb-6 sm:mx-auto md:mb-10 md:max-w-md lg:max-w-lg">
        <iframe
          className=" mx-auto w-full h-full  rounded-none lg:max-w-xl h-64 rounded-lg sm:h-96 shadow-xl"
          src="https://www.youtube.com/embed/CJuQ5zUvWBU?si=hJFTEGxj8IZ6Ty8y&amp;start=9"
          title="YouTube video player"
          frameBorder={0}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    </div>
  );
};
