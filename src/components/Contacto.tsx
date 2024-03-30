export const Contacto = () => {
  return (
    <div className="bg-[#ebe0bc] m-10 rounded-3xl">
      <div className="">
        <div className="  mt-10 m-5">
          <div className="hero-content flex-col lg:flex-row-reverse lg:justify-around">
            <div className="text-center  lg:text-center">
              <h1 className="text-8xl font-extrabold text-white">Contacto</h1>
              <p className="py-6 text-2xl font-bold text-white">
                Martiniano Leguizamón 1235/87<br></br> C.P.: 1440 - Capital
                Federal <br></br> Buenos Aires, Argentina
              </p>
            </div>
            <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
              <form className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Nombre</span>
                  </label>
                  <input
                    type="nombre"
                    placeholder="Carlos Perez"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    placeholder="Carlos@gmail.com"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Asunto</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Asunto"
                    className="input input-bordered"
                    required
                  />
                  <label className="form-control">
                    <div className="label">
                      <span className="label-text">Tu consulta</span>
                    </div>
                    <textarea
                      className="textarea textarea-bordered h-24"
                      placeholder="Tu consultal"
                    ></textarea>
                  </label>
                </div>
                <div className="form-control mt-6">
                  <button className="btn btn-primary">Enviar</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
