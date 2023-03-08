import { ContainerHeader, ContainerNav } from "./StyledHeader";
import LinkActive from "../LinkActive/LinkActive";

const Header = ({ logo, alt }) => {
  return (
    <ContainerHeader>
      <figure>
        <img src={logo} alt={alt} />
      </figure>
      <ContainerNav>
        <LinkActive to="/">Inicio</LinkActive>
        <LinkActive to="/departments">Departamentos</LinkActive>
        <LinkActive to="/touristic">Turismo</LinkActive>
        <LinkActive to="/presidents">Presidentes</LinkActive>
      </ContainerNav>
    </ContainerHeader>
  );
};

export default Header;
