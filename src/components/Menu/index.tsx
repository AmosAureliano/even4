import { useState } from "react";
import { 
    MenuLabel,
    NavBackground,
    Icon,
    Navigation,
    List,
    ItemLink
} from './styles'
function Menu() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  return (
    <>
      <MenuLabel htmlFor="navi-toggle" onClick={handleClick}>
        <Icon clicked={click}>&nbsp;</Icon>
      </MenuLabel>
      <NavBackground clicked={click}>&nbsp;</NavBackground>

      <Navigation clicked={click}>
        <List>
          <li>
            <ItemLink onClick={handleClick} to="/">
              Home
            </ItemLink>
          </li>
          <li>
            <ItemLink onClick={handleClick} to="/about">
              Meus eventos
            </ItemLink>
          </li>
          <li>
            <ItemLink onClick={handleClick} to="/portfolio">
              Perfil
            </ItemLink>
          </li>
        </List>
      </Navigation>
    </>
  );
}

export default Menu;