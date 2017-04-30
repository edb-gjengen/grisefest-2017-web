import React from 'react';
import styled from 'styled-components';

import TextSection from './TextSection';
// import Heading from './Heading';

const KjoepBillett = styled(TextSection)`
  /* background: rgb(255, 170, 46); */
  overflow: hidden;
  text-align: center;
  padding: 16vh 5vw 11vh;
`;

const ShadowP = styled.p`
  text-shadow: .1rem .1rem .4rem rgba(255,255,255,0.5);
`;

const BuyButton = styled.a`
  display: inline-flex;
  align-items: center;
  border: 0 none;
  padding: 3vh 3vw;
  border-radius: 1.2rem;
  background: mediumseagreen;
  color: white;
  cursor: pointer;
  transition: background .2s ease-in-out;
  text-shadow: none;
  text-decoration: none;

  &:hover {
    background-color: darkGreen;
  }
`;

// @TODO Ta med resten av historien
export default props => (
  <KjoepBillett {...props}>
    <ShadowP>23. september 2017, Chateau Neuf</ShadowP><br />
    <p>
      <BuyButton href="https://dns.ticketco.no/grisefest2017">Kjøp billett</BuyButton>
    </p>
  </KjoepBillett>
);
