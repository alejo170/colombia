import styled from "styled-components";

export const ContainerFooter = styled.footer`
  display: flex;
  justify-content: space-between;
  margin: auto;
  background: var(--blue);

  padding: 1rem 5rem;

  @media (max-width: 750px) {
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
export const ParagraphFooter = styled.p`
  color: var(--white);
`;
