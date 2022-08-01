import Cards from "../cards/Cards";
import dataJson from "../data/data.json";
import Masonry from "react-masonry-css";
import { useState } from "react";

const CardsAll = () => {
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <>
      <div>
        Keyword search:&nbsp;
        <input
        type="text"
        placeholder="Keyword"
        onChange={(e) => setSearchTerm(e.target.value)}
        className="mb-8 ml-1 rounded-md px-2 py-0.5 text-yellow-900"
      />
      </div>
      {/* <div className="grid gap-6 grid-cols-6">
        <div>All Chapters</div>
        <div>Chapter 1</div>
        <div>Chapter 1</div>
        <div>Chapter 1</div>
        <div>Chapter 1</div>
        <div>Chapter 1</div>
        <div>Chapter 1</div>
      </div> */}
      <Masonry breakpointCols={3} className="gap-6 hidden sm:flex">
        {dataJson
          .filter((val) => {
            if (searchTerm == "") {
              return val;
            } else if (
              val.title.toLowerCase().includes(searchTerm.toLowerCase())
            ) {
              return val;
            }
          })
          .map((e) => (
            <div key={e.title} className="mb-6">
              <Cards
                link={"resources/" + e.path}
                chapter={e.chapter}
                title={e.title}
                image={e.image}
                attachment={e.Attachments ? e.Attachments : ""}
              ></Cards>
            </div>
          ))}
      </Masonry>
      <Masonry breakpointCols={1} className="gap-6 flex sm:hidden">
        {dataJson
          .filter((val) => {
            if (searchTerm == "") {
              return val;
            } else if (
              val.title.toLowerCase().includes(searchTerm.toLowerCase())
            ) {
              return val;
            }
          })
          .map((e) => (
            <div key={e.title} className="mb-6">
              <Cards
                link={"resources/" + e.path}
                chapter={e.chapter}
                title={e.title}
                image={e.image}
                attachment={e.Attachments ? e.Attachments : ""}
              ></Cards>
            </div>
          ))}
      </Masonry>
    </>
  );
};

export default CardsAll;
