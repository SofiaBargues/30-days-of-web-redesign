// import { logo } from "../assets";

export const Squares = () => (
  <section>
    <div className="h-400 py-10 px-6">
      <div className="grid grid-cols-2 gap-96">
        <figure className="relative max-w-sm transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0 px-20">
          <div className="relative group">
            {/* Open the modal using document.getElementById('ID').showModal() method */}
            <button
              className="btn btn-ghost text-2xl btn-outline  btn-secondary"
              onClick={() => document.getElementById("my_modal_2").showModal()}
            >
              +
            </button>
            <dialog id="my_modal_2" className="modal text-secondary">
              <div className="modal-box">
                <h3 className="font-bold  text-lg">Hello!</h3>
                <p className="py-4">Press ESC key or click outside to close</p>
              </div>
              <form method="dialog" className="modal-backdrop">
                <button>close</button>
              </form>
            </dialog>
          </div>
        </figure>

        <figure className="relative max-w-sm transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0 px-16">
          <div className="relative group">
            {/* Open the modal using document.getElementById('ID').showModal() method */}
            <button
              className="btn btn-ghost text-2xl btn-outline  btn-secondary"
              onClick={() => document.getElementById("my_modal_2").showModal()}
            >
              +
            </button>
            <dialog id="my_modal_2" className="modal text-secondary">
              <div className="modal-box">
                <h3 className="font-bold  text-lg">Hello!</h3>
                <p className="py-4">Press ESC key or click outside to close</p>
              </div>
              <form method="dialog" className="modal-backdrop">
                <button>close</button>
              </form>
            </dialog>
          </div>
        </figure>

        <figure className="relative max-w-sm transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0 p-10">
          <div className="relative group">
            {/* Open the modal using document.getElementById('ID').showModal() method */}
            <button
              className="btn btn-ghost text-2xl btn-outline  btn-secondary"
              onClick={() => document.getElementById("my_modal_2").showModal()}
            >
              +
            </button>
            <dialog id="my_modal_2" className="modal text-secondary">
              <div className="modal-box">
                <h3 className="font-bold  text-lg">Hello!</h3>
                <p className="py-4">Press ESC key or click outside to close</p>
              </div>
              <form method="dialog" className="modal-backdrop">
                <button>close</button>
              </form>
            </dialog>
          </div>
        </figure>

        <figure className="relative max-w-sm transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0 p-8">
          <div className="relative group">
            {/* Open the modal using document.getElementById('ID').showModal() method */}
            <button
              className="btn btn-ghost text-2xl btn-outline  btn-secondary"
              onClick={() => document.getElementById("my_modal_2").showModal()}
            >
              +
            </button>
            <dialog id="my_modal_2" className="modal text-secondary">
              <div className="modal-box">
                <h3 className="font-bold  text-lg">Hello!</h3>
                <p className="py-4">Press ESC key or click outside to close</p>
              </div>
              <form method="dialog" className="modal-backdrop">
                <button>close</button>
              </form>
            </dialog>
          </div>
        </figure>
      </div>
    </div>
  </section>
);
