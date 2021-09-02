import {
  Нeader,
  NavList,
  NavListItem,
  NavLinkStyled,
} from "../Navigation/Navigation.styled";
import { Container } from "../Container/Container.styled";

function Navigation() {
  return (
    <Нeader>
      <Container>
        <NavList>
          <NavListItem>
            <NavLinkStyled exact to="/" activeStyle={{ color: "orange" }}>
              Home
            </NavLinkStyled>
          </NavListItem>

          <NavListItem>
            <NavLinkStyled to="/movies" activeStyle={{ color: "orange" }}>
              Movies
            </NavLinkStyled>
          </NavListItem>
        </NavList>
      </Container>
    </Нeader>
  );
}

export default Navigation;