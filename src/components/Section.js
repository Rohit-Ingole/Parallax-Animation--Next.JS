import { useEffect } from "react";
import bird1 from "../assets/bird1.jpg";
import bird2 from "../assets/bird2.jpg";
import forest from "../assets/forest.jpg";
import rocks from "../assets/rocks.jpg";
import water from "../assets/water.jpg";

import { ExploreBtn, Container, SectionH2 } from "../styles/_Section";

const Section = () => {
  useEffect(() => {
    let text = document.querySelector("#text");
    let btn = document.querySelector("#btn");
    let bird1 = document.querySelector("#bird1");
    let bird2 = document.querySelector("#bird2");
    let forest = document.querySelector("#forest");
    let rocks = document.querySelector("#rocks");
    let water = document.querySelector("#water");

    window.addEventListener("scroll", function () {
      let value = window.scrollY;

      text.style.top = 40 + value * -0.5 + "%";

      bird1.style.top = value * -1.5 + "px";
      bird1.style.left = value * 2 + "px";

      bird2.style.top = value * -1.5 + "px";
      bird2.style.left = value * -2 + "px";

      btn.style.marginTop = value * 1.5 + "px";

      rocks.style.top = value * -0.12 + "px";

      forest.style.top = value * 0.25 + "px";
    });
  });

  return (
    <Container>
      <SectionH2 id="text">
        <span>
          It's time for a new
          <br />
        </span>
        Adventure
      </SectionH2>
      <img src={bird1} id="bird1" />
      <img src={bird2} id="bird2" />
      <img src={forest} id="forest" />
      <ExploreBtn href="#" id="btn">
        Explore
      </ExploreBtn>
      <img src={rocks} id="rocks" />
      <img src={water} id="water" />
    </Container>
  );
};

export default Section;
