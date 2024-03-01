// import { logo } from "../assets";

const Scuares = () => (
  <section>
    <div className="h-400 py-10 px-6">
      <div className="grid grid-cols-4 gap-4">
        <div className="relative group">
          <img
            className="w-full h-auto"
            src="https://via.placeholder.com/150"
            alt="Placeholder"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 flex justify-center items-center transition-opacity duration-300">
            <p className="text-white text-lg">Photo 1</p>
          </div>
        </div>
        <div className="relative group">
          <img
            className="w-full h-auto"
            src="https://via.placeholder.com/150"
            alt="Placeholder"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 flex justify-center items-center transition-opacity duration-300">
            <p className="text-white text-lg">Photo 2</p>
          </div>
        </div>
        <div className="relative group">
          <img
            className="w-full h-auto"
            src="https://via.placeholder.com/150"
            alt="Placeholder"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 flex justify-center items-center transition-opacity duration-300">
            <p className="text-white text-lg">Photo 3</p>
          </div>
        </div>
        <div className="relative group">
          <img
            className="w-full h-auto"
            src="https://via.placeholder.com/150"
            alt="Placeholder"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 flex justify-center items-center transition-opacity duration-300">
            <p className="text-white text-lg">Photo 4</p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Scuares;
