import styled from "styled-components";

export const Container = styled.header`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  padding: 30px 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 999;
`;

export const Logo = styled.a`
  color: #094b65;
  font-weight: 700;
  font-size: 2rem;
  text-decoration: none;
`;

export const HeaderList = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const HeaderListItem = styled.li`
  list-style: none;
  margin-left: 20px;

  .active {
    background-color: #094b65;
    color: white;
  }
`;

export const HeaderItem = styled.a`
  padding: 6px 15px;
  color: #094b65;
  border-radius: 20px;

  :hover {
    background-color: #094b65;
    color: white;
  }
`;
