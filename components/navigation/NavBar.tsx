import Link from "next/link";
import { ReactNode, useEffect, useRef, useState } from "react";
import NavBarDetailsI from "../data/NavBarDetailsI";

interface NavBarDetailsProps {
  content: NavBarDetailsI[],
}

const NavBar = (props: NavBarDetailsProps) => {
  return (
    <div className="grid grid-rows-1 grid-flow-col gap-6 justify-end">
    {props.content.map(e => (
      <h1 key={e.name}><Link href={e.link}><a>{e.name}</a></Link></h1>
    ))}
    </div>
  );
};

export default NavBar
