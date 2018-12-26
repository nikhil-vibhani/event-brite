/*eslint-disable*/
import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// nodejs library that concatenates classes
import classNames from "classnames";
import { List, ListItem, withStyles } from "@material-ui/core";
import MobileModalComponent from '../MobileModalComponent';
// @material-ui/icons
import Favorite from "@material-ui/icons/Favorite";
// import { BrowserView, MobileView, isBrowser, isMobile } from "react-device-detect";
import footerStyle from "assets/jss/material-kit-react/components/footerStyle.jsx";
import Media from "react-media";

const styles = {
  ...footerStyle,
  footerDiv: {
    backgroundColor: '#ffffff',
    textAlign: 'center',
    boxShadow: '0px -5px 9px #adadadbf',
    width: '100%',
    margin: '0%',
    position: 'fixed',    
    bottom: '0%',
    zIndex: '999'
  },
  firstDiv: {

  },
}

function Footer({ ...props }) {
  const { classes, whiteFont } = props;
  const footerClasses = classNames({
    [classes.footer]: true,
    [classes.footerWhiteFont]: whiteFont
  });
  const aClasses = classNames({
    [classes.a]: true,
    [classes.footerWhiteFont]: whiteFont
  });

  
  return (
    <div>
      <footer className={footerClasses}>
        <div className={classes.container}>
          <div className={classes.right}>
            &copy; {1900 + new Date().getYear()} , made with{" "}
            <Favorite className={classes.icon} /> by{" "}
            Eventbrite
          </div>
        </div>
      </footer>
      <Media
          query="(max-width: 959px)"
          render={() => <div className={classes.footerDiv}>
              <div className={classes.firstDiv}>
                  $20 - $40
              </div>
              <div>
                <MobileModalComponent />
              </div>
          </div>}
      />
        
      
    </div>
  );
}

Footer.propTypes = {
  classes: PropTypes.object.isRequired,
  whiteFont: PropTypes.bool
};

Footer.contextTypes = {
  router: PropTypes.object
};

export default withStyles(styles)(Footer);
