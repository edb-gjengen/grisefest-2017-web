import React from 'react';
import styled from 'styled-components';

import TextSection from './TextSection';
import Heading from './Heading';

/*
const Historie = styled(TextSection)`
  background: rgb(255, 170, 46);
  overflow: hidden;
`;
*/
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
  <TextSection {...props} id="historie">
    <Heading>Historie</Heading>
    <p>Det er lett å la seg forundre over hvordan et halvgodt påfunn under en fest i 1859 kunne bli utgangspunktet for den desidert mest kuriøse, men også en av de viktigste akademiske tradisjonene i Norge. Med over 150 år på labbene, har Hans Majestet Grisen satt et sterkt preg på Det Norske Studentersamfund og norsk studentkultur.</p>

    <p>Men historien om Grisen er ikke bare en historie om fest og moro – den er også historien om studentenes hus, og ikke minst mangel på hus. Helt siden stiftelsen i 1813, hadde Studentersamfundet ført en omstreifende tilværelse, dels med tilhold i små kvistværelser, dels ved å leie seg inn i halvbekvemmelige lokaler. Like før Grisen gjorde sitt inntog på 1850-tallet, holdt Samfundet til på hjørnet av Øvre slottsgate og Prinsens gate. Men heller ikke dette lokalet var tilfredsstillende i lengden. Allerede i 1850 ble det satt i gang et arbeid for å finne finansiering til et eget hus.</p>

    <p>Gjennom en storstilt innsamlingsaksjon skulle man reise et byggefond – og innsatsen var imponerende! Innsamlingen ble den direkte foranledning for H.M. Grisens tronbestigelse. Ledelsen av innsamlingsarbeidet ble betrodd den sagnomsuste Fireskillingskomiteen, som skulle få studenter og andre av byens borgere til å avstå en fireskilling så ofte som mulig. Og det kom ikke til å mangle på fantasifulle virkemidler for å lokke frem både fireskillinger og andre valører; man solgte livsvarige medlemskap, oppfordret til lån, ga offentlige fester, forestillinger, kunstutstilling etc. Studentersamfundets teater kom med viktige bidrag. Stykket Gildet paa Mærrahaugen, eller den fortryllede Agurk (høsten 1858) brakte inn store penger og har blitt stående som et høydepunkt. Og bidragene lot ikke vente på seg – Fireskillingskomiteen møtte suksess. 10. juni 1859 kunne grunnsteinen legges ned for den nye Samfundsbygning i Universitetsgaten 26.</p>

    <H3>Å gjøre majestet av gris</H3>

    <p>Studentersamfundet var på denne tiden tydelig preget av menn (kvinnene hadde ikke adgang til medlemskap før i 1884) med et særskilt anlegg for å komme opp med kuriøse ideer – og en egen evne til å sette de ut i live. Under juletrefesten 1857 ble Grisen første gang konfrontert med sitt folk. Grisen, en sparegris av porselen, hadde akkurat kommet til Studentersamfundet som en gave fra studentene i København, og skulle være et virkemiddel i reisingen av byggefondet. Grisen avløste nå sin forgjenger i arbeidet med å samle inn penger, en lurvete hatt. Formannen, Ferdinand Roll, ønsket å hedre de energiske medlemmene av fireskillingskomiteen, og med et kort avertissement i Morgenbladet ble det innkalt til fest 9. april 1859: ”Studentersamfundet. Iaften Lag for Fireskillingsmændene”. Sparegrisen hadde allerede fått sin apoteose, formann Roll hadde utropt ham til Studentersamfundets majestet.</p>

    <p>Men på denne festen grunnla H. M. sitt ordensvesen ved den velkjente samfundsgriselige kunngjørelse av 9. april 1859:</p>

    <Blockquote>
      <p>Vi, Samfundsgris, har fundet det tjenligt uden Henhold til nogen § i Samfundsloven at oprette en Samfundsgriselig studenterlig Ridderorden, hvilken Vi til ihukommelse af Os selv har besluttet at kalde Den Gyldne Gris og for hvilken Orden Vi erklærer os som Herre og Stormester.</p>
    </Blockquote>

    <p>Dermed var griseordenen etablert. Statutter for ordenen, en parodi på statuttene for den Kongelige Norske St. Olavs Orden, ble vedtatt, og ordensregnet rislet for første gang over de håpefulle. Det var Fireskillingens medlemmer som ble de første i rekken av Grisens ranke ridderskare. Grisen ble for øvrig båret rundt i høytidelig prosesjon mens alle fikk anledning til å slippe sine skillinger ned i den. Til denne anledning var ”God save the Gris” skrevet, fortsatt den fremste av grisehymnene.</p>

    <p>Den neste store grisefest fulgte allerede to år senere, og i 1867 den 3. grisefest. Det var ved disse festene ordenens seremoniell ble grunnlagt. Særlig den 3. grisefesten var betydningsfull og grunnleggende for den form festene skulle få heretter. Det var til denne festen Karl Falk Wasserfall skrev sin udødelige grisehymne:</p>

    <Blockquote>
      <p>Søn af Dit Ophav!<br />
      Frugt af stærke Lænder!<br />
      Deiligste Krop af<br />
      Guld med hvide Tænder!<br />
      Huldt ifra oven<br />
      Du vort Svin paa Skoven<br />
      Smil til os svinepolisk!</p>
    </Blockquote>

    <p>Ordenens seremoniell og grisefestenes form har blitt utviklet og tilpasset nye generasjoner studenter helt frem mot den 20. store grisefest i 2013. Det har blitt lagt adskillig vekt på at festene ikke skulle stivne og miste den humoristiske brodden, samtidig som man har holdt hardt på mange faste elementer.</p>

    <p>Flere av grisehymnene har blitt sunget helt fra de første festene; prosesjonen, kantaten og ridderslaget med deklamasjon av deviser har vært sentrale ledd i seremoniene helt siden starten; og ordenen innrettes fortsatt etter statuttene som ble utformet i 1867. En fellesnevner har vært den enorme innsatsen som har blitt lagt i å forfatte kantater og andre tekster, utforme kulisser, kostymer og effekter, og alt annet som må til for at en grisefest skal bli så overmåte grandios og burlesk-pompøs som den må være.</p>

    <H3>Død og oppstandelse</H3>

    <p>Det har ikke manglet på faretruende situasjoner – fatale øyeblikk hvor hele grisetradisjonen kunne gått tapt. I 1865, under en uvanlig belivet punsjefest, styrtet H. M. ut av vinduet og knuste mot gaten. I et sørgekvad het det:</p>

    <Blockquote>
      <p>Sorgen ruged som natten sort;<br />
      Grisen vandred mod dødens port;<br />
      alt var jammer kun og kvide,<br />
      tyst var ved sottesengen,<br />
      sørgerlig lød bulletinen:</p>

      <p>«Gylden svands hænger mat og slap;<br />
      Søvn urolig og pulsen knap,<br />
      Og i skinken fin’s trichiner.<br />
      Grisen gaar bagud af dansen.»</p>

      <Cite>Underskrev Wilhelm Hansen</Cite>
    </Blockquote>

    <p>Men det tok ikke lang tid før Grisen gjenoppstod i fornyet og forsterket drakt. Wilhelm Faye-Hansen, en utrettelig innsamler til byggefondet og en av samfundshistoriens varmeste grisevenner, fikk billedhuggeren Brynjulv Bergslien til å modellere Grisen i ny drakt. Den ble så skåret ut i tre av fanger på Botsfengslet (hvis direktør var den tro venn av Grisen og evige samfundsstøtte, Richard Petersen). Det er i denne skikkelsen vi kjenner Grisen i dag.</p>

    <H3>Udødelig tradisjon</H3>

    <p>Grisen har også måttet slite med sviktende oppslutning hos egne undersåtter. På 1920-tallet og på 1970-tallet så det ut til at de alvorstyngede studentene hadde latt sitt tungsinn trenge H. M. fullstendig ut i glemselen. Han har til og med flere ganger blitt fordrevet i eksil og erklært avsatt, endog brutalt bortført. Men tiden har vist at Grisen trenger sitt folk og folket trenger ham. I periodene Studentersamfundet har vært sentrum for sterke politiske motsetninger, har Grisen blitt stuet bort – men så snart stemningen har roet seg igjen, har Grisen atter dukket opp som sosialt samlingspunkt.</p>

    <p>Man kan spørre seg hvordan grisetradisjonen har blitt så gammel. Svaret må vel ligge i Grisens egenart – som et unikt uttrykk for en akademisk satirisk humor, med en anelse av akademisk selvhøytidelighet.</p>

    <p>Som storkors av DGG, Knut Bøckman, uttrykte det: ”Det er i denne balansegangen mellom det grinaktige sludder og det seriøse snev av egendyrkelse, kombinert med et kritisk, men dog velvillig blikk på samfunnet og verden, at Grisens egenart ligger.” Men Grisens viktigste funksjon og overlevelseskraft må først og fremst være som symbol på Studentersamfundet som oslostudentenes fremste sosiale arena, på tvers av faglig tilknytning, interesser og politisk orientering – gjennom hele 200 år.</p>

    <p>Samfundsbygningen i Universitetsgaten 26 ble solgt i forfallen tilstand i 1918 av et Samfund som hadde vokst ut av bygget. Studentersamfundet gikk så ut i en ny husvill periode, før det endelig i 1973 kunne flytte inn i sitt Chateau Neuf. Selv om få mynter finner veien til H.M.s buk i dag, kan Studentersamfundet fortsatt nyte godt av det som ble grunnlagt i Grisens svennsdager.</p>

    <p>
      <em>Hans Maiestet D.G. Grisens hoffhistoriker og Vokter af Svinets perler<br />
      Tor Ivar Hansen</em>
    </p>
    <p><em>Skrevet til Studentersamfundets 200-årsjubileum, 2013</em></p>
  </TextSection>
);
