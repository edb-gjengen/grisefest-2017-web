import React from 'react';
import styled from 'styled-components';

import TextSection from './TextSection';
import Heading from './Heading';

export default props => (
  <TextSection {...props}>
    <Heading>Program</Heading>
    <p>Grisefesten er todelt. Først en åpen seremoni kl 16.00, der ordenspromosjonen vil finne sted. Dette er en seremoni hvor medlemmer og/eller venner av Studentersamfundet som har utmerket seg spesielt, blir beæret av Hans Majestet Grisen og slått til ridder, kommandør eller storkorsinnehaver av ordenen «Den Gyldne Gris». Seremonien vil finne sted i Gamle Festsal til Universitetet i Oslo (Domus Media i universitets urbygning på Karl Johan) og er åpen og gratis for alle interesserte. Det er dog begrenset med plasser.</p>
    <p>Deretter fortsetter Grisefesten med tre-retters middag for påmeldte på Grisens slott, Chateau Neuf, som har huset flere gallaer og grisefester ved tidligere anledninger. Efter måltidet bys det opp til dans. Åpent med førdrink fra kl 18.00 og til bords kl 19.00. På invitasjonslisten står studenter og ordensinnehavere, gamle pamper, storfolk og kulturpersoner.
Etter en trivelig festaften vil kvelden utarte seg til en hyggelig efterfest rundt midnatt.</p>
  </TextSection>
);
