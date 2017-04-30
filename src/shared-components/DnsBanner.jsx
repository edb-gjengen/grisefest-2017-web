import React from 'react';
import styled from 'styled-components';
import urlJoin from 'url-join';

import { staticUrl } from '../../config';

const DnsBanner = styled.a`
  display: block;
  width: 100%;
  height: 3.2rem;
  background: url('${urlJoin(staticUrl, '/img/dns-logo.png')}') center no-repeat, rgb(255, 170, 46);
  background-size: contain;
  color: #111;
  text-align: center;
  z-index: 666;
`;

export default props => <DnsBanner href="https://studentersamfundet.no" {...props} />;
