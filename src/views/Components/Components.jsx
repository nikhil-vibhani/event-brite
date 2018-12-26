import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// react components for routing our app without refresh
import { Link } from "react-router-dom";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// @material-ui/icons
// core components
import Header from "components/Header/Header.jsx";
import Footer from "components/Footer/Footer.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Parallax from "components/Parallax/Parallax.jsx";
// sections for this page
import HeaderLinks from "components/Header/HeaderLinks.jsx";

//Start Custom Add
import FirstContent from "../FirstContent";
import { connect } from 'react-redux';
// End Custom Add



import componentsStyle from "assets/jss/material-kit-react/views/components.jsx";

class Components extends React.Component {

  state = {
    Event: {}
  }

  componentDidMount() {
    const {Event} = this.props;
    this.setState({Event});
  }

  componentWillReceiveProps(nextProps) {
    const { Event } = nextProps;
    this.setState({Event});
  }

  render() {
    const { classes, ...rest } = this.props;
    const { Event } = this.state;

    const { category, creator, media, title} = Event.eventDetails?Event.eventDetails: {};

    return (
      <div>
        <Header
          brand="Eventbrite"
          rightLinks={<HeaderLinks />}
          fixed
          color="transparent"
          changeColorOnScroll={{
            height: 400,
            color: "white"
          }}
          {...rest}
        />
        <Parallax image={media?media[0].url:""}>
          <div className={classes.container}>
            <GridContainer>
              <GridItem>
                <div className={classes.brand}>
                  <h1 className={classes.title}>{title?title:""}</h1>
                  {creator && <h3 className={classes.subtitle}>
                    by {creator?creator.name:""}.
                  </h3>}
                </div>
              </GridItem>
            </GridContainer>
          </div>
        </Parallax>

        <div className={classNames(classes.main, classes.mainRaised)}>
          <FirstContent />
          {/* <SectionBasics />
          <SectionNavbars />
          <SectionTabs />
          <SectionPills />
          <SectionNotifications />
          <SectionTypography />
          <SectionJavascript />
          <SectionCarousel />
          <SectionCompletedExamples />
          <SectionLogin /> */}
          {/* <GridItem md={12} className={classes.textCenter}>
            <Link to={"/login-page"} className={classes.link}>
              <Button color="primary" size="lg" simple>
                View Login Page
              </Button>
            </Link>
          </GridItem> */}          
          {/* <SectionDownload /> */}
        </div>
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  Event: state.Event
})

export default connect(mapStateToProps, {})(withStyles(componentsStyle)(Components));
