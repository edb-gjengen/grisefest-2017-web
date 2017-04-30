import React from 'react';
import styled from 'styled-components';
import urlJoin from 'url-join';

import { staticUrl } from '../../config';

const GreatBigHero = styled.section`
  width: 100%;
  margin: auto;
  padding: 50vh 5vw 4vh;
  background: url('${urlJoin(staticUrl, 'img/some-pigs-are-more-equal.jpg')}') center, darkgray;
  background-size: cover;

  color: white;
  text-align: center;
  text-shadow: .1rem .1rem .2rem black;
  font-size: 7vw;

  @media (min-width: 750px) {
    font-size: 5vw;
    padding-left: 10vw;
    padding-right: 10vw;
  }
`;

export default props => <GreatBigHero>Det Norske Studentersamfund inviterer&nbsp;deg&nbsp;herved&nbsp;til den&nbsp;21.&nbsp;Grisefest!</GreatBigHero>;
