import Image from "next/image";

function TechsList({ technologies, title }) {
  return (
    <div className="techImages">
      {technologies.map((tech, key) => {
        return (
          <span key={key} className="group">
            <Image
              src={`/${tech}.png`}
              alt={`${tech} Image`}
              width={100}
              height={100}
              className="group-hover:translate-y-full"
            />

            <p className="group-hover:translate-y-0 ">{tech}</p>
          </span>
        );
      })}
      <h1 className="heading">{title}</h1>
    </div>
  );
}

export default TechsList;
