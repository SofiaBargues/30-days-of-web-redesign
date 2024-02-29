import { data } from "../data";
import { cn } from "mxcn";

function Card({
  item,
  i,
  shape,
}: {
  item: {
    title: string;
    value: string;
    url: string;
  };
  i: number;
  shape: "horizontal" | "vertical" | "square";
}) {
  return (
    <div
      key={i}
      className={cn(
        "card bg-base-100 shadow-xl",
        shape === "horizontal"
          ? "md:col-span-2"
          : shape === "vertical"
          ? "md:row-span-2"
          : ""
      )}
      style={{ width: "100%", height: "100%" }} // Establece el ancho y alto al 100%
    >
      <figure style={{ width: "100%", height: "100%" }}>
        {" "}
        {/* Establece el ancho y alto al 100% */}
        <img
          src={item.url}
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />{" "}
        {/* Ajusta la imagen */}
      </figure>
      <div className="card-body">
        <h2 className="card-title">{item.title}</h2>
        <p className="font-bold">{item.value}</p>
      </div>
    </div>
  );
}

const CssGrid = () => {
  return (
    <div className="grid md:grid-cols-4 auto-rows-[300px] gap-4 my-10">
      {data.map((item, i) => (
        <Card
          key={i}
          item={item}
          i={i}
          shape={
            i === 0 || i === 4 || i === 5 || i === 6
              ? "horizontal"
              : i === 2
              ? "vertical"
              : "square"
          }
        />
      ))}
    </div>
  );
};

export default CssGrid;
