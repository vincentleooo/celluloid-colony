/* eslint-disable @next/next/no-img-element */
import Link from "next/link";

interface CardsProps {
  title: string;
  content?: string;
  link: string;
  image?: string;
  chapter: number;
  attachment: string;
}

const Cards = (props: CardsProps) => {
  return (
    <Link href={props.link}>
      <a href="" className="hover:text-yellow-100">
        <div className="bg-opacity-20 backdrop-blur-2xl rounded drop-shadow-2xl bg-gray-300 text-left hover:scale-105 transition-all">
          {props.attachment ? (
            <img
              src={props.attachment}
              alt={props.attachment}
              className="rounded-t"
            />
          ) : (
            <img src={props.image} alt={props.image} className="rounded-t" />
          )}
          <div className="px-3">
            <p className="text-xs mt-3 mb-1">Chapter {props.chapter}</p>
            <h1 className="text-xl font-semibold leading-6 pb-3">
              {props.title}
            </h1>
          </div>
        </div>
      </a>
    </Link>
  );
};

export default Cards;