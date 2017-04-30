import React from 'react';
import styled from 'styled-components';

import TextSection from './TextSection';
import Heading from './Heading';

export default props => (
  <TextSection {...props} id="annonsere">
    <Heading>Annonsere</Heading>
    <p>Det Norske Studentersamfunds store prosjekter, fra den første grisefest til eget Chateau, ville aldri latt seg gjennomføre uten private gaver. Derfor har vi gjort det mulig å donere noe til festen generelt ved å sette inn annonser til seremoniens programblad. Behovet for akademikere er stadig større i arbeidslivet, så en annonse i vårt program trenger ikke kun være en uegennyttig handling.</p>
    <p>Ønske om annonseplass og generelle henvendelser kan sendes til:</p>
    <address>
      E-post: <a href="mailto::grisefest@studentersamfundet.no">grisefest@studentersamfundet.no</a><br /><br />
      Fysisk post:<br />
      <em>Det Norske Studentersamfund</em><br />
      <em>Slemdalsveien 15</em><br />
      <em>0369 Oslo</em><br />
    </address>
    <p>Merk konvolutten «Grisefest».</p>
  </TextSection>

);
