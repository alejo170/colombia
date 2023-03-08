import styled from "styled-components";

export const ContainerHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 5rem;

  @media (max-width: 900px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 1rem;
  }

  @media (max-width: 600px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1rem;
  }
`;

export const ContainerNav = styled.nav`
  display: flex;
  gap: 3rem;

  @media (max-width: 750px) {
    gap: 2rem;
  }

  @media (max-width: 600px) {
    gap: 2rem;
  }
`;
