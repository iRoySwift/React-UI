import React, { Component } from 'react';
import PropTypes from 'prop-types';
import OverlayScrollbars from 'overlayscrollbars';
import 'overlayscrollbars/css/OverlayScrollbars.css';

class ScrollBar extends Component {
  componentDidMount() {
    this.init();
  }
  componentWillUnmount() {
    this.scrollBars = null;
  }

  init () {
    const {
        className,
        resize,
        sizeAutoCapable,
        clipAlways,
        normalizeRTL,
        paddingAbsolute,
        autoUpdate,
        autoUpdateInterval,
        nativeScrollbarsOverlaid,
        overflowBehavior,
        scrollbars,
        textarea,
        callbacks,
      } = this.props;
      this.scrollBars = OverlayScrollbars(this.ScrollbarRef, {
          className,
          resize,
          sizeAutoCapable,
          clipAlways,
          normalizeRTL,
          paddingAbsolute,
          autoUpdate,
          autoUpdateInterval,
          nativeScrollbarsOverlaid,
          overflowBehavior,
          scrollbars,
          textarea,
          callbacks,
      });
  }

  getScrollBars(name, ...args) {
      return this.scrollBars[name](...args);
  }

  options(...args) {
      return this.getScrollBars('options', ...args);
  }
  update() {
      this.getScrollBars('update');
  }
  sleep() {
      this.getScrollBars('sleep');
  }
  scroll(...args) {
      return this.getScrollBars('scroll', ...args);
  }
  scrollStop() {
      this.getScrollBars('scrollStop');
  }
  getElements(...args) {
      return this.getScrollBars('getElements', ...args);
  }
  getState(...args) {
      return this.getScrollBars('getState', ...args);
  }
  destroy() {
      this.getScrollBars('destroy');
  }
  ext(...args) {
      return this.getScrollBars('ext', ...args);
  }
  addExt(...args) {
      return this.getScrollBars('addExt', ...args);
  }
  removeExt(...args) {
      this.getScrollBars('removeExt', ...args);
  }
  defaultOptions() {
      return OverlayScrollbars.defaultOptions();
  }
  globals() {
      return OverlayScrollbars.globals();
  }
  extension(...args) {
      return OverlayScrollbars.extension(...args);
  }

  render() {
      return (
          <div id={this.props.id}
               ref={el => this.ScrollbarRef = el}
               style={{...this.props.style}}>
              {/* eslint-disable-next-line */}
              {this.props.children}
          </div>
      );
  }
}

ScrollBar.propTypes = {
    id: PropTypes.string,
    style: PropTypes.object,
    className: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    resize: PropTypes.oneOf([
        'none',
        'both',
        'horizontal',
        'vertical',
        'n',
        'b',
        'h',
        'v',
    ]),
    sizeAutoCapable: PropTypes.bool,
    clipAlways: PropTypes.bool,
    normalizeRTL: PropTypes.bool,
    paddingAbsolute: PropTypes.bool,
    autoUpdate: PropTypes.oneOfType([PropTypes.bool, PropTypes.object]),
    autoUpdateInterval: PropTypes.number,
    nativeScrollbarsOverlaid: PropTypes.object,
    overflowBehavior: PropTypes.object,
    scrollbars: PropTypes.object,
    textarea: PropTypes.object,
    callbacks: PropTypes.object,
};
ScrollBar.defaultProps = {
    id: '',
    style: {},
    className: 'os-theme-dark',
    resize: 'none',
    sizeAutoCapable: true,
    clipAlways: true,
    normalizeRTL: true,
    paddingAbsolute: false,
    autoUpdate: null,
    autoUpdateInterval: 33,
    nativeScrollbarsOverlaid: {
        showNativeScrollbars: false,
        initialize: true,
    },
    overflowBehavior: {
        x: 'scroll',
        y: 'scroll',
    },
    scrollbars: {
        visibility: 'auto',
        autoHide: 'never',
        autoHideDelay: 800,
        dragScrolling: true,
        clickScrolling: false,
        touchSupport: true,
    },
    textarea: {
        dynWidth: false,
        dynHeight: false,
        inheritedAttrs: ['style', 'class'],
    },
    callbacks: {
        onInitialized: null,
        onInitializationWithdrawn: null,
        onDestroyed: null,
        onScrollStart: null,
        onScroll: null,
        onScrollStop: null,
        onOverflowChanged: null,
        onOverflowAmountChanged: null,
        onDirectionChanged: null,
        onContentSizeChanged: null,
        onHostSizeChanged: null,
        onUpdated: null,
    },
};

export default ScrollBar;
