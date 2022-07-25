import Link from "next/link";

interface ButtonProps {
  content: string;
  link: string;
}

const Button = (props: ButtonProps) => {
  return (
    <Link href={props.link}>
      <a>
        <button
          type="button"
          className="focus:outline-none text-gray-800 bg-yellow-300 hover:bg-yellow-400 focus:ring-4 focus:ring-yellow-200 font-medium rounded-sm text-sm px-4 py-2 dark:focus:ring-yellow-900"
        >
          {props.content}
        </button>
      </a>
    </Link>
  );
};

export default Button;
