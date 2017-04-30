import React from 'react';
import PropTypes from 'prop-types';
import styled, { injectGlobal } from 'styled-components';
import renderChildren from 'aurora-core/dist/utils/render-children';

import DnsBanner from '../../shared-components/DnsBanner';
import GreatBigHero from '../../shared-components/GreatBigHero';
import Program from '../../shared-components/Program';
import Historie from '../../shared-components/Historie';
import Annonsere from '../../shared-components/Annonsere';
import KjoepBillett from '../../shared-components/KjoepBillett';
import DetTapteSverdet from '../../shared-components/DetTapteSverdet';
import BliFrivillig from '../../shared-components/BliFrivillig';

injectGlobal`
  @import url('https://fonts.googleapis.com/css?family=Roboto');
  @import url('https://fonts.googleapis.com/css?family=Julius+Sans+One');

  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed,
  figure, figcaption, footer, header, hgroup,
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
    box-sizing: border-box;
  }
  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure,
  footer, header, hgroup, menu, nav, section {
    display: block;
  }
  body {
    line-height: 1;
  }
  ol, ul {
    list-style: none;
  }
  blockquote, q {
    quotes: none;
  }
  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  html {
    font-size: 62.5%;
  }
  body {
    font-size: 4vw;
    font-family: Roboto, Helvetica, Arial, sans-serif;

    @media (min-width: 750px) {
      font-size: 2vw;
    }
    @media (min-width:   1280px) {
      font-size: 2.4rem;
    }
  }

  p,
  h3,
  blockquote,
  cite {
    line-height: 1.5;
    margin: 0 auto 1em;
    padding: 0 4vw;

    @media (min-width: 750px) {
      width: 66vw;
      width: 90vw;
      max-width: 100.0rem;
    }
  }

  em {
    font-style: italic;
  }
`;

class Grisefest2017App extends React.Component {
  static propTypes = {
    modules: PropTypes.array, // eslint-disable-line react/forbid-prop-types
  }

  static defaultProps = {
    modules: [],
  }

  render() {
    const { modules } = this.props;

    return (
      <div>
        <DnsBanner />
        <GreatBigHero />
        <KjoepBillett />
        <Program alt />
        <Historie expandAfter="33em" />
        <Annonsere alt />
        <DetTapteSverdet expandAfter="33em" />
        <BliFrivillig />
        {renderChildren(modules)}
      </div>
    );
  }
}

module.exports = Grisefest2017App;
