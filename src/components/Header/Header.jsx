import Button from "../Button/Button";
import Paragraf from "../Paragraf/Paragraf";
import "./style.css";

const Header = () => {
  return (
    <header>
      Header
      <Button title='text another' bg='blue' />
      <Paragraf>
        Lorem.
      </Paragraf>
    </header>
  );
};

export default Header;
