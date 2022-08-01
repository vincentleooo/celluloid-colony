import Cards from "../cards/Cards";
import dataJson from "../data/data.json";
import Masonry from "react-masonry-css";
import { useState } from "react";
import Select from "react-select";
import makeAnimated from "react-select/animated";

interface ChapterSelection {
  value: number;
  label: string;
}

const options: ChapterSelection[] = [
  { value: 1, label: "Chapter 1" },
  { value: 2, label: "Chapter 2" },
  { value: 3, label: "Chapter 3" },
  { value: 4, label: "Chapter 4" },
  { value: 5, label: "Chapter 5" },
  { value: 6, label: "Chapter 6" },
];

// const animatedComponents = makeAnimated();

const CardsAll = () => {
  const selectedOptionDefault: number[] = [];
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedOptions, setSelectedOptions] = useState(selectedOptionDefault);

  const handleChange = (value: any) => {
    let newList: number[] = [];
    let valueList: ChapterSelection[] = value;
    valueList.map((e) => {
      newList.push(e.value);
    });
    setSelectedOptions(newList);
  };
  return (
    <>
      <div className="grid grid-cols-1 w-full sm:grid-cols-2 gap-6 mb-6 align-center">
        <div className="flex flex-col">
          <p className="text-left mb-1 font-bold text-md">Keyword search:</p>
          <input
            type="text"
            placeholder="Keyword"
            onChange={(e) => setSearchTerm(e.target.value)}
            className="mb-0 rounded-[0.250rem] border border-[rgb(204,204,204)] box-border px-2 py-[0.475rem] text-yellow-900 clip placeholder:text-gray-500"
          />
        </div>

        <div className="flex flex-col">
          <p className="text-left mb-1 font-bold text-md">Filter by chapter:</p>
          <Select
            options={options}
            isMulti
            onChange={handleChange}
            className="text-yellow-900 text-left w-full mx-auto rounded-lg placeholder:text-gray-500"
          ></Select>
        </div>
      </div>
      {/* <div className="grid gap-6 grid-cols-7 my-6 pb-3 border-b-2">
        <div>All Chapters</div>
        <div>Chapter 1</div>
        <div>Chapter 2</div>
        <div>Chapter 3</div>
        <div>Chapter 4</div>
        <div>Chapter 5</div>
        <div>Chapter 6</div>
      </div> */}
      <Masonry breakpointCols={3} className="gap-6 hidden sm:flex">
        {dataJson
          .filter((val) => {
            if (searchTerm == "") {
              if (
                selectedOptions.includes(val.chapter) &&
                selectedOptions.length > 0
              ) {
                return val;
              } else if (selectedOptions.length == 0) {
                return val;
              }
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
              if (selectedOptions.includes(val.chapter)) {
                return val;
              }
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
