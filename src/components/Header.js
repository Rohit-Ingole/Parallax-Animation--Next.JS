import { useEffect } from "react";
import {
  Container,
  HeaderItem,
  HeaderList,
  HeaderListItem,
  Logo,
} from "../styles/_Header";

const Header = () => {
  useEffect(() => {
    let header = document.querySelector("#header");

    window.addEventListener("scroll", function () {
      let value = window.scrollY;

      header.style.top = value * 0.5 + "px";
    });
  });

  return (
    <Container id="header">
      <Logo href="#">Jungle</Logo>
      <HeaderList>
        <HeaderListItem>
          <HeaderItem href="#" className="active">
            Home
          </HeaderItem>
        </HeaderListItem>
        <HeaderListItem>
          <HeaderItem href="#">About</HeaderItem>
        </HeaderListItem>
        <HeaderListItem>
          <HeaderItem href="#">Destination</HeaderItem>
        </HeaderListItem>
        <HeaderListItem>
          <HeaderItem href="#">Contact</HeaderItem>
        </HeaderListItem>
      </HeaderList>
    </Container>
  );
};

export default Header;
