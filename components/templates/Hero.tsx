import Image from "next/image";
import Button from "../button/Button";

const Hero = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:h-[35rem] items-center max-w-screen-md mx-auto my-12 z-0 text-center sm:text-left">
      <div className="relative h-96 sm:h-full">
        <Image
          src="/images/book_cover.jpg"
          alt=""
          layout="fill"
          objectFit="contain"
        />
      </div>
      <div>
        <h1 className="font-bold text-2xl mb-3 text-yellow-100">
          Celluloid Colony: Locating History and Ethnography in Early Dutch
          Colonial Films of Indonesia
        </h1>
        <h2 className="font-semibold text-xl mb-2 text-yellow-100">
          By Sandeep Ray
        </h2>
        <p className="text-yellow-100">
          How should colonial film archives be read? How can historians and
          ethnographers use colonial film as a complement to conventional
          written sources? Sandeep Ray uses the case of Dutch colonial film in
          Indonesia to show how a critically-, historically- and
          cinematically-informed reading of colonial film in the archive can be
          a powerful and unexpected source, and one more easily accessible today
          via digitisation.
        </p>
      </div>
    </div>
  );
};

export default Hero;
