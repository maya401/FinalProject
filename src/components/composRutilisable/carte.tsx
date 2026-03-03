import type { CarteProps } from "../../typage/types";

export default function Carte({ title, title1, description, className }: CarteProps) {
  return (
    <div>
      <div className={className}></div>
      <div className="flex items-center">
        <span className={`${className} w-24 h-2 bg-orange-600`}></span>
        <span className={`${className} w-24 h-2 bg-black`}></span>
      </div>
      <div className={`${"text-5xl mt-5"} ${className}`}>{title} </div>
      <div className={`${"text-5xl mt-5"} ${className}`}>{title1} </div>
      <div>{description}</div>
    </div>
  );
}
