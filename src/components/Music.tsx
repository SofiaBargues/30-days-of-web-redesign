// import { logo } from "../assets";

export const Music = () => (
  <>
    <div className="hero  bg-base-200">
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

    <div className=" p-20">
      <h1 className="text-4xl text-right font-bold mx-10">Where find us?</h1>
      <div className="">
        <div className="bg-white  mt-10 border rounded-2xl border-base-300 m-5">
          <div className=" p-8 flex flex-col gap-10 shadow-2xl rounded-2xl">
            <div className="mockup-window border border-base-300 m-20m-20 flex justify-center border-t"></div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2502.955464319433!2d0.9250114765984924!3d51.14617237173352!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47dedace43b02073%3A0xcd8472beeb922af!2sSt%20Mary's%20Church%2C%20Hinxhill!5e0!3m2!1sen!2suk!4v1711016168596!5m2!1sen!2suk"
              className="w-full h-96  rounded-3xl"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </div>
  </>
);
