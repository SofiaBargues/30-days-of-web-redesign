// import { logo } from "../assets";

import { TabContactUs } from "./TabContactUs";
import { News } from "./Music";
import { WeekendScools } from "./WeekendScools";
import { TabWorktUs } from "./TabWorktUs";

export const TimeLine = () => (
  <div className="m-10">
    <h1 className="text-6xl text-yellow-400  text-right font-bold m-20">
      Our highlights
    </h1>

    <ul className="timeline text-center text-balance timeline-snap-icon max-sm:timeline-compact timeline-vertical">
      <li>
        <div className="timeline-middle">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="h-5 w-5"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <div className="timeline-start md:text-end mb-10">
          <time className="font-mono italic">The Stage Magazine</time>
          <div className="text-lg font-black">
            “A sleeping giant among the capital’s open air venues”
          </div>
          <img
            src="https://images.squarespace-cdn.com/content/v1/5e53fd130b5d7822b0c250a5/1599472886674-VA8SOMD7TGY31SWD7ML2/CNV00026.jpg?format=1000w"
            className="max-w-sm rounded-lg shadow-2xl"
          />
          <time className="font-mono text-xs flex italic">
            Image © Pete Still
          </time>

          <div></div>
        </div>
        <hr />
      </li>
      <li>
        <hr />
        <div className="timeline-middle">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="h-5 w-5"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <div className="timeline-end mb-10">
          <time className="font-mono italic">Rick Wakeman, Musician</time>
          <div className="text-lg font-black">
            “The best outdoor venue in London, magical. It was special back then
            and could be even more special now”
          </div>
          <img
            src="https://images.squarespace-cdn.com/content/v1/5e53fd130b5d7822b0c250a5/1599474308377-MMGK4DNNSWO2R1L4NOPQ/CP+Bowl+1+%28%C2%A9+Dennis+Gilbert+1997%29.JPG?format=1000w"
            className="max-w-sm rounded-lg shadow-2xl"
          />{" "}
          <time className="font-mono text-xs flex italic">
            Image © Dennis Gilbert
          </time>
        </div>
        <hr />
      </li>
      <li>
        <hr />
        <div className="timeline-middle">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="h-5 w-5"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <div className="timeline-start md:text-end mb-10">
          <time className="font-mono italic">1971</time>
          <div className="text-lg font-black">Rod Stewart and The Faces</div>
          <img
            src="https://storage.googleapis.com/cdn.thelondoneconomic.com/wp-content/uploads/2021/05/ef936f8e-1971-rod-stewart-and-the-faces-at-crystal-palace-bowl-image_-michael-putland.jpeg"
            className="max-w-sm rounded-lg shadow-2xl"
          />
          <time className="font-mono text-xs flex italic">
            Image © Michael Putland
          </time>
        </div>
        <hr />
      </li>
      <li>
        <hr />
        <div className="timeline-middle">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="h-5 w-5"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <div className="timeline-end mb-10">
          <time className="font-mono italic">1984</time>
          <div className="text-lg font-black">Jimmy Cliff</div>
          <img
            src="https://static.standard.co.uk/2021/02/22/12/newFile-3.jpg?crop=8:5,smart&quality=75&auto=webp&width=640"
            className="max-w-sm rounded-lg shadow-2xl"
          />

          <time className="font-mono text-xs flex italic">
            Image © Masataka Ishida
          </time>
        </div>
        <hr />
      </li>
      <li>
        <hr />
        <div className="timeline-middle">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="h-5 w-5"
          >
            {/* <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
              clipRule="evenodd"
            /> */}
          </svg>
        </div>
        <div className="timeline-middle  md:text-center mb-10 mt-10">
          <time className="font-mono italic">2022</time>
          <div className="text-lg font-black">You did it!</div>
          <img
            src="https://pbs.twimg.com/media/FYQC5OwXwAEP4JI?format=jpg&name=small"
            className="w-full mb-10 rounded-lg  shadow-2xl"
          />
          Update: Following the hugely successful #BackTheBowl crowdfunding
          campaign, which raised over £65,000 thanks to individual pledges of
          more than 1,000 people and the generous support of the Mayor of
          London, the new stage surface was installed in July 2022. This marks
          the end of the first phase of our project to revive Crystal Palace
          Bowl, with the next phase aiming to modernise the backstage area and
          improve access to the venue.
        </div>
      </li>
    </ul>
  </div>
);
