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
      <div className="mb-16 md:mb-0 md:max-w-xl sm:mx-auto md:text-center">
        <h2 className="mb-5 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
          The quick, brown fox jumps over a very sad and{" "}
          <span className="inline-block text-deep-purple-accent-400">
            lazy dog
          </span>
        </h2>
        <p className="mb-5 text-base text-gray-700 md:text-lg">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae.
        </p>
        <div className="flex items-center md:justify-center">
          <a
            href="/"
            className="inline-flex items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
          >
            Get started
          </a>
          <a
            href="/"
            aria-label=""
            className="inline-flex items-center font-semibold text-gray-800 transition-colors duration-200 hover:text-deep-purple-accent-700"
          >
            Learn more
          </a>
        </div>
      </div>
    </div>
  );
};
