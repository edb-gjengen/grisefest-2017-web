import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const colors = {
  main: 'rgb(255, 170, 46)',
  alt: 'papayawhip',
};

const Section = styled.section`
  background: ${props => (props.alt ? colors.main : colors.alt)};
  color: #333;
  padding: 2vh 2vw 5vh;
  overflow: hidden;
  position: relative;

  text-shadow: .1rem .1rem ${props => (props.alt || true ? '.4rem rgba(255,255,255,0.5)': '.3rem transparent')};

  max-height: ${props => (props.expanded ? 'none' : props.expandAfter)};

  h1 {
    color: ${props => (props.alt ? 'white': 'palevioletred')};
    text-shadow: .1rem .1rem ${props => (props.alt ? '.4rem rgba(0,0,0,0.5)': '.3rem white')};
  }

  address {
    max-width: 70rem;
    margin: 1em auto;
    padding: 0 7vw;
  }
`;

const ExpanderA = styled.a`
  display: block;
  width: 100%;
  padding: 5.5em 2vw 1em;

  cursor: pointer;
  text-decoration: none;
  color: inherit;

  position: absolute;
  bottom:0;
  left: 0;
  text-align: center;

  background: linear-gradient(to bottom, transparent, ${props => (props.alt ? colors.main : colors.alt)} 5em);

  &:hover,
  &:focus {
    text-decoration: underline;
  }
`;

const Expander = props => <ExpanderA tabindex="0" onClick={props.expand}>Vis resten</ExpanderA>;
Expander.propTypes = {
  expand: PropTypes.func.isRequired,
};

class TextSection extends React.Component {
  static propTypes = {
    alt: PropTypes.bool,
    children: PropTypes.node,
    expandAfter: PropTypes.string,
  }

  static defaultProps = {
    alt: false,
    children: null,
    expandAfter: '',
  }

  constructor(props) {
    super(props);

    this.state = {
      expandAfter: this.props.expandAfter,
      expanded: !this.props.expandAfter,
    };
  }

  expandSection = () => {
    this.setState({
      expanded: true,
    });
  }

  render() {
    return (
      <Section {...this.props} expanded={this.state.expanded}>
        {this.props.children}
        {!this.state.expanded && <Expander expand={this.expandSection} alt={this.props.alt} />}
      </Section>
    );
  }
}

export default TextSection;
