// import { logo } from "../assets";

export const Squares = () => (
  <section>
    <div className="h-400 py-10 px-6">
      <div className="grid grid-cols-4 gap-4">
        <div className="relative group">
          <img
            className="w-full h-auto"
            src="https://static.wixstatic.com/media/f8d286_7972c078365841e2b9a6ebbe50f24779~mv2_d_4303_3256_s_4_2.jpg/v1/fill/w_220,h_220,q_90/f8d286_7972c078365841e2b9a6ebbe50f24779~mv2_d_4303_3256_s_4_2.webp"
            alt="Placeholder"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 flex justify-center items-center transition-opacity duration-300">
            <p className="text-white text-lg">Fishing Quarter Museum</p>
          </div>
        </div>
        <div className="relative group">
          <img
            className="w-full h-auto"
            src="https://static.wixstatic.com/media/f8d286_2e3d80b097a141be9ac54cc438efdec6~mv2.jpg/v1/fit/w_480,h_480,q_90/f8d286_2e3d80b097a141be9ac54cc438efdec6~mv2.webp"
            alt="Placeholder"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 flex justify-center items-center transition-opacity duration-300">
            <p className="text-white text-lg">
              Events & Exhibit Space For Hire
            </p>
          </div>
        </div>
        <div className="relative group">
          <img
            className="w-full h-auto"
            src="https://static.wixstatic.com/media/f8d286_d6d179d93cd44826815d957ba2393eed~mv2.jpg/v1/fit/w_480,h_479,q_90/f8d286_d6d179d93cd44826815d957ba2393eed~mv2.webp"
            alt="Placeholder"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 flex justify-center items-center transition-opacity duration-300">
            <p className="text-white text-lg">Brighton Fishing Museum</p>
          </div>
        </div>
        <div className="relative group">
          <img
            className="w-auto h-full"
            src="https://static.wixstatic.com/media/f8d286_f746d47d570c449fa27e553630cd8802~mv2_d_5108_3110_s_4_2.jpg/v1/fit/w_480,h_480,q_90/f8d286_f746d47d570c449fa27e553630cd8802~mv2_d_5108_3110_s_4_2.webp"
            alt="Placeholder"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 flex justify-center items-center transition-opacity duration-300">
            <p className="text-white text-lg">Fishing Quarter Gallery</p>
          </div>
        </div>
      </div>
    </div>
  </section>
);
