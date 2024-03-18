// import { logo } from "../assets";

export const Squares = () => (
  <section>
    <div className=" h-72">
      <div className="text-5xl text-balance text-center font-semibold rounded-box place-items-center"></div>
      <div className="grid grid-cols-3 gap-3 items-center m-10 ">
        <div tabIndex={0} className="collapse bg-base-200">
          <div className="collapse-title text-xl font-medium">
            Tennis Coaching
          </div>
          <div className="collapse-content">
            <p>
              Coaching is available for groups on Tuesdays. Aaron Cowley is the
              head coach for Quainton. The coaching team are available for
              individual or small group coaching emailpwhcowley@hotmail.com or
              phone07539 244155. The club can supply rackets for the sessions if
              required. Please do share this information.
            </p>
          </div>
        </div>
        <div tabIndex={0} className="collapse bg-base-200">
          <div className="collapse-title text-xl font-medium">
            Booking the courts
          </div>
          <div className="collapse-content">
            <p>
              Courts are available all year round from 8 am to 10 pm, either to
              paid up members or on a pay and play basis. Annual membership
              starts at £33 for children or £20 per 1.5 hour booking per court.
              This includes use of the floodlights when required. All court
              bookings should be made in advance using the ClubSpark Booker App.
              This can be downloaded for free from the App Store. Once
              downloaded and signed in, search for Quainton LTC and find an
              available slot at a time and date that suits. Pay and play court
              users: Once you have booked a court, please pay the fee to
              Quainton Sports Club. Bank Sort Code: 20-03-18. Account
              No:00735442. Reference: Your Surname. Please then get in touch
              with Paul Ormerod (07734 750633) to arrange for access on the
              date/time of your booking.
            </p>
          </div>
        </div>
        <div tabIndex={0} className="collapse bg-base-200">
          <div className="collapse-title text-xl font-medium">
            Social tennis
          </div>
          <div className="collapse-content">
            <p>
              The courts are booked for social tennis every week on: Tuesday
              morning 9.30 - 11 am. Please phone Jan Stiegeler for more
              information on01296 655800. Thursday 7 - 8pm Thursday 8 - 9 pm.
              Please phone Paul Ormerod on07734 750633 for more information.
              Men's matches or practice usually takes place on Sunday mornings.
              If you would be interested in joining the team or just coming
              along to join in please phone John Lucas01296 655552. We are
              hoping to start a mixed team in the near future.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
);
