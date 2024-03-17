import { restElement } from "@babel/types";
import { discount, robot } from "../assets";
import { Navbar } from "./Navbar";
import { Squares } from "./Scuares";
import { Circles } from "./Circles";
import { Proof } from "./Proof";

export const Hero = () => {
  return (
    <div className="hero min-h-screen bg-white">
      <div className="hero-content flex-col sm:flex-row-reverse">
        <div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="grid gap-4">
              <div>
                <img
                  className="h-auto max-w-full rounded-lg"
                  src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg"
                  alt=""
                />
              </div>
            </div>
            <div className="grid gap-4">
              <div>
                <img
                  className="h-auto max-w-full rounded-lg"
                  src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-4.jpg"
                  alt=""
                />
              </div>
              <div>
                <img
                  className="h-auto max-w-full rounded-lg"
                  src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-5.jpg"
                  alt=""
                />
              </div>
            </div>
            <div className="grid gap-4">
              <div>
                <img
                  className="h-auto max-w-full rounded-lg"
                  src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-6.jpg"
                  alt=""
                />
              </div>
            </div>
            <div className="grid gap-4">
              <div>
                <img
                  className="h-auto max-w-full rounded-lg"
                  src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-10.jpg"
                  alt=""
                />
              </div>{" "}
              <div>
                <img
                  className="h-auto max-w-full rounded-lg"
                  src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-9.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>

        <div>
          <h1 className="text-5xl font-bold">Box Office News!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button className="btn text-white rounded-sm btn-primary">
            Get Started
          </button>
          <div className="flex my-20  gap-10">
            <div className="hero-overlay bg-opacity-60"></div>
            <img
              alt="remax"
              loading="lazy"
              width="auto"
              height="auto"
              decoding="async"
              data-nimg={1}
              className="filter grayscale opacity-60"
              srcSet="https://www.estatetext.com/_next/image?url=%2Fimages%2Fremax-logo.png&w=128&q=75"
              src="https://www.estatetext.com/_next/image?url=%2Fimages%2Fremax-logo.png&w=128&q=75"
              style={{ color: "transparent" }}
            />
            <img
              alt="keller williams"
              loading="lazy"
              width={200}
              height={50}
              decoding="async"
              data-nimg={1}
              className="filter grayscale opacity-60"
              srcSet="https://www.estatetext.com/_next/image?url=%2Fimages%2Fkeller-williams-logo.png&w=128&q=75"
              src="https://www.estatetext.com/_next/image?url=%2Fimages%2Fkeller-williams-logo.png&w=128&q=75"
              style={{ color: "transparent" }}
            />
            <img
              alt="coldwell banker"
              loading="lazy"
              width={100}
              height={100}
              decoding="async"
              data-nimg={1}
              className="filter grayscale  opacity-60"
              srcSet="https://www.estatetext.com/_next/image?url=%2Fimages%2Fcentury21-logo.png&w=128&q=75"
              src="https://www.estatetext.com/_next/image?url=%2Fimages%2Fcentury21-logo.png&w=128&q=75"
              style={{ color: "transparent" }}
            />
            <img
              alt="century 21"
              loading="lazy"
              width="auto"
              height="auto"
              decoding="async"
              data-nimg={1}
              className="filter grayscale opacity-60"
              srcSet="https://www.estatetext.com/_next/image?url=%2Fimages%2Fcoldwellbanker-logo.png&w=128&q=75"
              src="https://www.estatetext.com/_next/image?url=%2Fimages%2Fcoldwellbanker-logo.png&w=128&q=75"
              style={{ color: "transparent" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
