import { useState } from "react";
import { customers } from "../constants/data.ts";
import { img } from "../data.ts";
import { rating } from "../data.ts";

// function  Star({customers[0].rating})= {
//  let stars = []
//   return(

//   )
// }
type Valoracion = 1 | 2 | 3 | 4 | 5;

function Rating({ value }: { value: Valoracion }) {
  return (
    <div className="text-2xl text-yellow-500">
      {"★"
        .repeat(value)
        .padEnd(5, "☆")
        .split("")
        .map((elem, index) => (
          <span key={index} className={""}>
            {elem}
          </span>
        ))}
    </div>
  );
}

export function CustomerCard({ img, name, rating }) {
  return (
    <div className="flex m-10">
      <Rating value={3} />
      <div
        tabIndex={0}
        role="button"
        className="btn btn-ghost btn-circle avatar"
      >
        <div className="w-6 rounded-full">
          <img src={img.src} />
        </div>
      </div>
      <h1 className=""> {name}</h1>
      <div className="rating rating-sm flex flex-row px-10 items-center ">
        <input
          type="radio"
          name="rating-6"
          className="mask mask-star-2 bg-orange-400"
        />
        <input
          type="radio"
          name="rating-6"
          className="mask mask-star-2 bg-orange-400"
        />
        <input
          type="radio"
          name="rating-6"
          className="mask mask-star-2 bg-orange-400"
        />
        <input
          type="radio"
          name="rating-6"
          className="mask mask-star-2 bg-orange-400"
        />
        <input
          type="radio"
          name="rating-6"
          className="mask mask-star-2  bg-orange-300"
        />
      </div>
    </div>
  );
}
