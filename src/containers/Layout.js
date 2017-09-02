import React, { Component } from 'react';
import PropTypes from 'prop-types';
import 'assets/styles/index.css';
const styles = {
  div: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    justifyContent: 'center',
    overflow: 'hidden',
    width: '100%',
    position: 'relative',
    zIndex: 2,
  },

  background: {
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    filter: 'grayscale(100%)',
    zIndex: -1,
  },

  overlayColor: {
    backgroundColor: 'rgba(0, 151, 44, .45)',
    zIndex: 0,
  },

  overlay: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },

  ul: {
    listStyleType: 'none',
    margin: 0,
    padding: 0,
    textAlign: 'center',
  },

  li: {
    display: 'inline-block',
    fontSize: '4em',
    paddingBottom: 0,
    paddingLeft: '0.5em',
    paddingRight: '0.5em',
    paddingTop: 0,
  },

  h1: {
    color: '#fafafa',
    fontFamily: '"refrigerator-deluxe", Helvetica',
    fontSize: '2.4em',
    fontWeight: 500,
    marginBottom: '1.5em',
    letterSpacing: '0.05em',
  },

  a: {
    color: '#fafafa'
  },

  'a:hover': {
    color: '#38E58D',
  },

  'a.i': {
  },

  'a.i.span': {
    fontSize: 0,
  },
};

class Link extends Component {
  static propTypes = {
    name: PropTypes.string,
    url: PropTypes.string,
  };

  constructor (props) {
    super(props);
    this.state = {
      hover: false,
    };
  }

  handleMouseOver = () => {
    this.setState({ hover: true });
  }

  handleMouseOut = () => {
    this.setState({ hover: false });
  }

  render () {
    const { name, url } = this.props;
    const hoverStyles = this.state.hover
      && styles['a:hover']
      || styles.a;
    return (
      <li style={styles.li}>
        <a
          onMouseOver={this.handleMouseOver}
          onMouseOut={this.handleMouseOut}
          href={url}
        >
          <i
            style={hoverStyles}
            className={`icon-${name}`}
          /> <span style={styles['a.i.span']}>{name}</span>
        </a>
      </li>
    );
  }
}

const Layout = () => (
  <div style={{ ...styles.wrapper, ...styles.overlay }}>
    <div style={styles.div}>
      <h1 style={styles.h1}>Kevin Altman</h1>
      <ul style={styles.ul}>
        <Link name='medium' url='http://medium.com/@itg' />
        <Link name='github' url='http://github.com/itsthatguy' />
        <Link name='npm' url='http://npmjs.com/~itg' />
        <Link name='twitter' url='http://twitter.com/itg' />
        <Link name='instagram' url='http://instagram.com/vikinghug' />
        <Link name='linkedin' url='http://linkedin.com/in/itsthatguy' />
      </ul>
    </div>
    <div style={{ ...styles.overlay, ...styles.background }} className='background' />
    <div style={{ ...styles.overlay, ...styles.overlayColor }} />
  </div>
);

Layout.propTypes = {
  foos: PropTypes.array,
};

export default Layout;
