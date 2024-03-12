// import { logo } from "../assets";

export const Video = () => {
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="relative  mb-6 sm:mx-auto md:mb-10 md:max-w-md lg:max-w-lg">
        <iframe
          className=" mx-auto w-full h-full  rounded-none lg:max-w-xl h-64 rounded-lg sm:h-96 shadow-xl"
          src="https://www.youtube.com/embed/CJuQ5zUvWBU?si=hJFTEGxj8IZ6Ty8y&amp;start=9"
          title="YouTube video player"
          frameBorder={0}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
      <div className="mb-16 md:mb-0 md:max-w-xl sm:mx-auto md:text-center">
        <h2 className="mb-5 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
          Driftwood By Sea
          <span className="inline-block text-lg text-balance text-deep-purple-accent-400">
            Garden open from 1st June to 31st July 2024.
          </span>
        </h2>
        <p className="mb-5 text-base text-gray-700 md:text-lg">
          All booking details for individuals, small groups or coaches here,
          including provision of talks to horticultural societies and other
          groups and clubs.
        </p>
        <div className="flex  gap-3 items-center md:justify-center">
          <a href="/" className="btn btn-lg btn-secondary btn-lg  ">
            Book
          </a>
          <a href="/" aria-label="" className="btn btn-lg btn-ghost ">
            Donate
          </a>
        </div>
      </div>
    </div>
  );
};
