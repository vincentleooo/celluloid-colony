import Link from "next/link";

interface LogoProps {
  text: string;
}

const Logo = (props: LogoProps) => {
  return (
    <div className="font-bold">
      <Link href="/"><a>{props.text}</a></Link>
    </div>
  );
};

export default Logo;
