import SegmentedIndex from "../segmented/Segmented";
import CardsAll from "./CardsAll";

const CardsOverview = () => {
  return (
    <div className="mx-auto text-center" id="resources">
      <h1 className="font-bold text-2xl">From the Book</h1>
      {/* <SegmentedIndex></SegmentedIndex> */}
      <div className="my-8 mt-5">
        <CardsAll></CardsAll>
      </div>
    </div>
  );
};

export default CardsOverview;
