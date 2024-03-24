export const Map = () => {
  return (
    <div className="bg-yellow-400 p-20">
      <h1 className="text-4xl text-right font-bold m-10 text-white">
        Where find us?
      </h1>
      <div className="">
        <div className="bg-white  mt-10 border rounded-2xl border-base-300 m-5">
          <div className=" p-8 flex flex-col gap-10 shadow-2xl rounded-2xl">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d4976.1285958591825!2d-0.0674621!3d51.4202455!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487601675f83a341%3A0xbbe9342ed722fb88!2sCrystal%20Palace%20Bowl!5e0!3m2!1sen!2suk!4v1711295984034!5m2!1sen!2suk"
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
  );
};
