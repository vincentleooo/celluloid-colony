import NavBarDetails from "../data/NavBarDetails";
import Logo from "../navigation/Logo";
import NavBar from "../navigation/NavBar";

const Header = () => {
  return (
    <div className="grid grid-cols-2 py-5 z-50">
      <Logo text="Celluloid Colony"></Logo>
      <NavBar content={NavBarDetails} />
    </div>
  );
};

export default Header;
