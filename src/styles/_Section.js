import styled from "styled-components";

export const Container = styled.section`
  position: relative;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  ::before {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100px;
    background: linear-gradient(to top, #094b65, transparent);
    z-index: 10;
  }

  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    object-fit: cover;
  }
`;

export const SectionH2 = styled.h2`
  position: absolute;
  color: #094b65;
  font-size: 10vw;
  text-align: center;
  line-height: 0.55em;
  font-weight: 500;
  font-family: "Rancho", cursive;
  transform: translateY(-50%);

  span {
    font-size: 0.2em;
    letter-spacing: 2px;
    font-weight: 400;
    font-family: "Poppins", sans-serif;
  }
`;

export const ExploreBtn = styled.a`
  display: inline-block;
  padding: 8px 30px;
  font-size: 1.2em;
  color: #094b65;
  background: white;
  font-weight: 500;
  letter-spacing: 2px;
  border-radius: 40px;
  transform: translateY(100px);
`;
