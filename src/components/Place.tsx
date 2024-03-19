// import { logo } from "../assets";

export const Place = () => (
  <div className="p-10 m-10 flex flex-col-2 justify-center gap-20">
    <div>
      <h1 className="text-4xl m-8  text-center">Where find us?</h1>
      <div className="mockup-phone">
        <div className="camera"></div>
        <div className="display">
          <div className="artboard artboard-demo phone-1">
            <div className=" flex flex-col gap-10 shadow-2xl rounded-2xl">
              <div className="mockup-window border border-base-300 flex justify-center border-t"></div>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1555.28910178942!2d0.9858424902047791!3d51.11255677554129!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47dec5846e2b669b%3A0xe9929d26a7dc62e7!2sDolly%20Plum%20holidays!5e0!3m2!1sen!2suk!4v1711192109878!5m2!1sen!2suk"
                className="h-screen w-screen"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);
