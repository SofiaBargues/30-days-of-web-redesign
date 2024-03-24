// import { logo } from "../assets";

export const Music = () => (
  <>
    <div className="hero  bg-base-content text-white">
      <div className="hero-content flex-col sm:flex-row">
        <iframe
          src="https://open.spotify.com/embed/playlist/4RySonVVEMgGilMarxe7w1?wmode=opaque"
          className=" h-96 m-10  rounded-3xl"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
        <div>
          <h1 className="text-5xl font-bold">Live, from the Palace!</h1>
          <p className="py-6">
            Check out our Spotify playlist, with highlights, hits and deep-cuts
            from over half a century of live music at Crystal Palace.
          </p>
        </div>
      </div>
    </div>
  </>
);
