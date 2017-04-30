import React from 'react';
import styled from 'styled-components';

const Iframe = styled.iframe`
  width: 100%;
`;

const BliFrivillig = (props) => {
  return (
    <Iframe
      src="https://docs.google.com/forms/d/e/1FAIpQLSdVJHH2FeX7pJ-ExULyS-R0YI_UfzFP_bU_DB_u_8la-Vnr8A/viewform?embedded=true"
      width="1024"
      height="1600"
      frameborder="0"
      marginheight="0"
      marginwidth="0"
    >Loading...</Iframe>
  );
};

export default BliFrivillig;
