import Cards from "../cards/Cards";
import dataJson from "../data/data.json"
import Masonry from "react-masonry-css";

const CardsAll = () => {
  return (
    <>
    <Masonry breakpointCols={3} className="gap-6 hidden sm:flex">
      {dataJson.map(e => (
      <div key={e.title} className="mb-6"><Cards link={"resources/" + e.path} chapter={e.chapter} title={e.title} image={e.image} attachment={e.Attachments ? e.Attachments : ""}></Cards></div>  
      )
    )}
    </Masonry>
    <Masonry breakpointCols={1} className="gap-6 flex sm:hidden">
      {dataJson.map(e => (
      <div key={e.title} className="mb-6"><Cards link={"resources/" + e.path} chapter={e.chapter} title={e.title} image={e.image} attachment={e.Attachments ? e.Attachments : ""}></Cards></div>  
      )
    )}
    </Masonry>
    </>
  )
}

export default CardsAll;