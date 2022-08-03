import Link from "next/link";
import Image from "next/future/image";

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
        <div className="bg-opacity-20 backdrop-blur-sm rounded-lg shadow-lg bg-gray-300 text-left hover:scale-105 transition-all">
          {props.attachment ? (
            <Image
              src={props.attachment}
              alt={props.attachment}
              className="rounded-t w-full h-full"
            />
          ) : props.image ? (
            <Image
              src={props.image}
              alt={props.image}
              className="rounded-t w-full h-full"
            />
          ) : (
            <></>
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
