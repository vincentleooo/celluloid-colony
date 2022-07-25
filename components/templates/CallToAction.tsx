import Button from "../button/Button";

const CTA = () => {
  return (
    <div className="mx-auto text-center my-12 bg-gray-300 bg-opacity-20 backdrop-blur-2xl rounded drop-shadow-2xl py-8">
      <h1 className="font-bold text-2xl mb-3">Learn More</h1>
      <div className="flex gap-3 justify-center">
        <Button content="Order" link="https://nuspress.nus.edu.sg/products/celluloid-colony"></Button>
        <Button content="Resources" link="./resources"></Button>
      </div>
    </div>
  );
};

export default CTA;
