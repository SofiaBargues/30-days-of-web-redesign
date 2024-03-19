// import { logo } from "../assets";

export const Availability = () => (
  <div className="p-10 m-10 flex flex-col-2 justify-center gap-20">
    <div>
      <h1 className="text-4xl m-8  text-center">Availability</h1>
      <div className="card">
        <div className=" flex flex-col gap-10 shadow-2xl rounded-2xl">
          <iframe
            src="https://calendar.google.com/calendar/u/0/embed?height=400&wkst=2&bgcolor=%23ffffff&ctz=Europe/London&src=ZG9sbHlwbHVtY290dGFnZUBnbWFpbC5jb20&src=ZW4tZ2IudWsjaG9saWRheUBncm91cC52LmNhbGVuZGFyLmdvb2dsZS5jb20&color=%23D50000&color=%230B8043&showPrint=0&showTabs=0&showCalendars=0&showTitle=0&showDate=1"
            className="h-96 w-96"
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
