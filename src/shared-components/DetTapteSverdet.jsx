import React from 'react';
import styled from 'styled-components';

import TextSection from './TextSection';
import Heading from './Heading';

const H3 = styled.h3`
  font-family: 'Julius Sans One', Georgia, serif;
  font-variant: small-caps;
  font-size: 1.5em;
  margin-top: 2em;
  margin-bottom: .5em;
`;

const Blockquote = styled.blockquote`
  padding: 0 2vw;
  font-size: .8em;

  * {
    max-width: 100%;
  }
`;

const Cite = styled.cite`
  font-style: italic;
  text-align: right;
`;

export default props => (
  <TextSection {...props} id="det-tapte-sverdet">
    <Heading>Det tapte sverdet</Heading>
    <p>I oktober 2013 feiret Det Norske Studentersamfund 200 år. Vi er en gammel organisasjon med gamle tradisjoner og skatter. Venner fra fjernt og nær var samlet i Universitetets aula for å hedre Hans Majestet den Gylne Gris og hans nye Riddere, kommandører og storkors. Dog gikk ikke alt etter planen denne kvelden. Hans Majestets egne sverd, som skulle brukes til at slå våre utvalgte til riddere, var i hui og hast forlagt i grisebingen. Villig lot Skatmester Thomas Michelet Hans Majestet låne hans private sverd , slik at seremonien kunne gjennomføres som planlagt.</p>

    <Blockquote>
      <p>Kringsatt av venner, gikk<br />
      han inn på sin fest!<br />
      Men blant de innbudte –<br />
      var en slu gjest!</p>

      <p>Grisen spør nå i angst,<br />
      udekket, åpen:<br />
      hva skal jeg kjempe med,<br />
      hvor er mitt våpen?</p>

      <p>Hvor er mitt vern mot vold,<br />
      hvor er mitt sverd?<br />
      troen på livet vårt,<br />
      menneskets verd.</p>

      <p>For festens fremtids skyld,<br />
      søk og lever det,<br />
      Billetter til grisefest:<br />
      Det skal du få med!</p>
    </Blockquote>

    <p>Sverdet som på mystisk vis forsvant har vært i slektens eie lengre enn DNS har eksistert og er av stor affeksjonsverdi for eieren og hans familie. Ikke minst er det pinlig for Hans Majestet å ikke være i stand til å levere tilbake noe han har lånt.</p>

    <p>Vi har full forståelse for at ”bergingskulturen” rår. Og at sverdets nå 4 årige bortkommenhet, kun var ment som et pek i beste mening. Men nå håper altså Hans Majestet at de ”skyldige” har kost seg lenge nok med vår angst, og at de vil levere sverdet tilbake.</p>

    <p>Som takk for dette vil Hans Majestet grisen garantere fullt amnesti for udåden og samtidig invitere røverne til grisefest på hans regning. Sågar et trynfoto med Hans Majestet kan der fikses.</p>

    <p>Anonyme tips som kan oppklare saken kan sendes til <a href="mailto:formand@studentersamfundet.no">formand@studentersamfundet.no</a>. Belønningen vil i så tilfelle tilfalle tipseren.</p>
  </TextSection>
);
