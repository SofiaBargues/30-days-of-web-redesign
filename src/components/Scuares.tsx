// import { logo } from "../assets";

export const Squares = () => (
  <section>
    <div className=" h-96 flex justify-start">
      <div className="text-5xl text-balance text-center font-semibold rounded-box place-items-center"></div>
      <div className="grid grid-cols-3 gap-10 items-center m-10  ">
        <div tabIndex={0} className="collapse bg-base-200 ">
          <div className="collapse-title text-xl font-medium">
            Tennis Coaching
          </div>
          <div className=" text-balance m-6">
            <p>
              Coaching is available for groups on Tuesdays. Aaron Cowley is the
              head coach for Quainton. The coaching team are available for
              individual or small group coaching emailpwhcowley@hotmail.com
            </p>
          </div>
        </div>
        <div tabIndex={0} className="collapse bg-base-200">
          <div className="collapse-title text-xl font-medium">
            Booking the courts
          </div>
          <div className=" text-balance m-6">
            <p>
              Courts are available all year round from 8 am to 10 pm, either to
              paid up members or on a pay and play basis. Annual membership
              starts at £33 for children or £20 per 1.5 hour booking per court.
              This includes use of the floodlights when required.
            </p>
          </div>
        </div>
        <div tabIndex={0} className="collapse bg-base-200">
          <div className="collapse-title text-xl font- ">Social tennis</div>
          <div className=" text-balance m-6">
            <p>
              The courts are booked for social tennis every week on: Tuesday
              morning 9.30 - 11 am. Please phone Jan Stiegeler for more
              information on01296 655800. Thursday 7 - 8pm Thursday 8 - 9 pm.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
);
