import React, { Component } from 'react';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';

import anime from 'animejs';

import styled from 'styled-components';
import { theme, mixins } from '../styles';

const LoaderContainer = styled.div`
  ${mixins.flexCenter};
  background-color: ${theme.colors.darkNavy};
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 99;
`;
const LogoWrapper = styled.div`
  width: max-content;
  max-width: 451;
  transition: ${theme.transition};
  opacity: ${props => (props.isMounted ? 1 : 0)};
  svg {
    width: 100%;
    height: 100%;
    display: block;
    margin: 0 auto;
    fill: none;
    user-select: none;
    #B {
      opacity: 0;
    }
  }
`;

class Loader extends Component {
  static propTypes = {
    finishLoading: PropTypes.func.isRequired,
  };

  state = {
    isMounted: false,
  };

  componentDidMount() {
    this.setState({ isMounted: true }, () => this.animate());
  }

  componentWillUnmount() {
    this.setState({ isMounted: false });
  }

  animate() {
    const loader = anime.timeline({
      complete: () => this.props.finishLoading(),
    });

    loader
      .add({
        targets: '#logo #Rectangle',
        delay: 300,
        duration: 550, // initially 1500
        easing: 'easeInOutQuart',
        strokeDashoffset: [anime.setDashoffset, 0],
      })
      .add({
        targets: '#logo #Line',
        delay: 0,
        duration: 700, // initially 100
        easing: 'easeInOutQuart',
        strokeDashoffset: [anime.setDashoffset, 0],
      })
      .add({
        targets: '#logo #tag-line',
        duration: 600, // initially 800
        easing: 'easeInOutQuart',
        opacity: 1,
      })
      .add({
        targets: '#logo',
        delay: 700,
        duration: 300,
        easing: 'easeInOutQuart',
        opacity: 0,
        scale: 0.1,
      })
      .add({
        targets: '.loader',
        duration: 200,
        easing: 'easeInOutQuart',
        opacity: 0,
        zIndex: -1,
      });
  }

  render() {
    const { isMounted } = this.state;

    return (
      <LoaderContainer className="loader">
        <Helmet>
          <body className={isMounted ? 'hidden' : ''} />
        </Helmet>
        <LogoWrapper isMounted={isMounted}>
          <svg
            width="380px"
            height="86px"
            viewBox="0 0 380 86"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            id="logo">
            <desc>Created with Sketch.</desc>
            <defs />
            <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
              <g id="iPhone-7" transform="translate(23.000000, -177.000000)">
                <path
                  d="M162.423999,214 L324.1625,214.000014 C340.773312,214.000016 354.239035,224.294667 354.239035,237 C354.239035,249.70254 340.750974,259.999984 324.1625,259.999986 L162.423999,260"
                  id="Rectangle"
                  stroke="#C46520"
                  strokeWidth="4"
                  fillOpacity="0.047044837"
                  fill="#D8D8D8"
                />
                <path d="M100.366194,212.5 L-21.49277,212.5" id="Line" strokeLinecap="square" />
                <path
                  id="Line-decoration-1"
                  d="M-21.49277,212.5 L-10.69277,215.5 L-10.69277,209.5 L-21.49277,212.5 Z"
                  strokeLinecap="square"
                />
                <text
                  id="Boanerges"
                  fontFamily="AmericanTypewriter-Bold, American Typewriter"
                  fontSize="64"
                  fontWeight="bold">
                  <tspan x="86" y="253" fill="#BD0FE1">
                    B
                  </tspan>
                  <tspan x="133.744" y="253" fontSize="48" fill="#42B7E9">
                    oanerges
                  </tspan>
                </text>
                <polyline
                  id="Star"
                  stroke="#DC2B2B"
                  fill="#C82D3E"
                  points="175.177779 202.528038 162 201.198178 172.790079 191.714666 172.042263 178.9712 183.30214 184.546035 196.017742 178 192.18665 190.928949 200.793141 199.626744 187.165518 202.042438 179.76902 213.964006"
                />
                <path
                  d="M95.8528988,261 L156.782381,261"
                  id="Line"
                  stroke="#DB1818"
                  strokeWidth="4"
                  strokeLinecap="square"
                />
                <path
                  d="M84,203 L84,260.5"
                  id="Line"
                  stroke="#F11A1A"
                  strokeWidth="4"
                  strokeLinecap="square"
                />
              </g>
            </g>
          </svg>
        </LogoWrapper>
      </LoaderContainer>
    );
  }
}

export default Loader;
