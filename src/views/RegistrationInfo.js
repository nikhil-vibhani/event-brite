import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// core components
import Header from "components/Header/Header.jsx";
import Footer from "components/Footer/Footer.jsx";
import Button from "components/CustomButtons/Button.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import HeaderLinks from "components/Header/HeaderLinks.jsx";
import Parallax from "components/Parallax/Parallax.jsx";
import CustomInput from "components/CustomInput/CustomInput.jsx";
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

import RegistrationInfoStyle from "assets/jss/material-kit-react/views/profilePage.jsx";


const styles = {
    ...RegistrationInfoStyle,
    firstContent: {
        marginTop: 30
    },
    lastContent: {
        marginTop: 30,
        paddingBottom: 50
    },
    headerH4: {
        fontSize: '26px',
        lineHeight: '28px',
        fontWeight: 'bold'
    },
    firstLabel: {
        fontSize: '17px',
        textAlign: 'left',
        lineHeight: '21px',
        color: 'int(005580)',
        margin: 0,
        padding: 0,
        fontWeight: '300'
    },
    paper: {
        padding: 15
    },
    paperHeaderTitle: {
        fontSize: 18,
        lineHeight: '28px',
        fontWeight: '400'
    },
    devider: {
        margin: '18px 0 25px 0'
    }
}

class RegistrationInfo extends React.Component {
  render() {
    const { classes, ...rest } = this.props;
    
    return (
      <div>
        <Header
          color="transparent"
          brand="Gujarat Power Expo"
          rightLinks={<HeaderLinks />}
          fixed
          changeColorOnScroll={{
            height: 200,
            color: "white"
          }}
          {...rest}
        />
        <Parallax small filter image={require("assets/img/profile-bg.jpg")} />
        <div className={classNames(classes.main, classes.mainRaised)}>
          <div>
            <div className={classes.container}>
              <GridContainer justify="center">
                <GridItem xs={12} sm={12} md={6}>
                  <div className={classes.profile}>
                    <div className={classes.name}>
                      <h3 className={classes.title}>Eventbrite</h3>
                    </div>
                  </div>
                </GridItem>
              </GridContainer>
              <GridContainer justify="center" className={classes.firstContent}>
                    <GridItem cs={12} sm={12} md={8}>
                        <h4 className={classes.headerH4}>Guj Power Expo 2018</h4>
                        <p className={classes.firstLabel}>Aries Events Pvt ltd</p>
                        <p className={classes.firstLabel}>Friday, December 21, 2018 at 10:00 AM - Sunday, December 23, 2018 at 7:00 PM (IST)</p>
                        <p className={classes.firstLabel}>Ahmedabad, India</p>
                    </GridItem>
              </GridContainer>
              <GridContainer justify="center" className={classes.firstContent}>
                    <GridItem cs={12} sm={12} md={8}>
                        <Paper className={classes.paper} elevation={1}>
                            <h4 className={classes.paperHeaderTitle}>Order Summery</h4>
                            <Divider className={classes.devider}/>
                            <GridContainer justify="center" style={{padding: 10}}>
                                <Table className={classes.table}>
                                    <TableHead>
                                    <TableRow>
                                        <TableCell>TYPE</TableCell>
                                        <TableCell numeric>QUANTITY</TableCell>
                                        
                                    </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        <TableRow>
                                            <TableCell>General Admission</TableCell>
                                            <TableCell numeric>1</TableCell>
                                        </TableRow>
                                    </TableBody>
                                </Table>
                            </GridContainer>
                        </Paper>
                    </GridItem>
              </GridContainer>
              <GridContainer justify="center" className={classes.lastContent}>
                    <GridItem cs={12} sm={12} md={8}>
                        <Paper className={classes.paper} elevation={1}>
                            <h4 className={classes.paperHeaderTitle}>Registration Information</h4>
                            <Divider className={classes.devider}/>
                            <GridContainer justify="center" style={{padding: 10}}>
                                <GridItem xs={12} sm={12} md={6}>
                                    <CustomInput
                                        labelText="First Name"
                                        id="name"
                                        formControlProps={{
                                        fullWidth: true
                                        }}
                                    />
                                </GridItem>
                                <GridItem xs={12} sm={12} md={6}>
                                    <CustomInput
                                        labelText="Last Name"
                                        id="email"
                                        formControlProps={{
                                        fullWidth: true
                                        }}
                                    />
                                </GridItem>
                                <GridItem xs={12} sm={12} md={6}>
                                    <CustomInput
                                        labelText="Email Address"
                                        id="name"
                                        formControlProps={{
                                        fullWidth: true
                                        }}
                                    />
                                </GridItem>
                                <GridItem xs={12} sm={12} md={6}>
                                    <CustomInput
                                        labelText="Confirm Email Address"
                                        id="email"
                                        formControlProps={{
                                        fullWidth: true
                                        }}
                                    />
                                </GridItem>
                                <GridItem xs={12} sm={12} md={12}>
                                    <Button variant="contained" color="primary" onClick={this.handleClickOpen}>
                                        Complete Registration
                                    </Button>
                                </GridItem>
                                <GridItem xs={12} sm={12} md={8} style={{marginTop: 15}}>
                                    <p>
                                        I accept the terms of service and have read the privacy policy. I agree that Eventbrite may share my information with the event organizer.
                                    </p>
                                </GridItem>
                            </GridContainer>
                        </Paper>
                    </GridItem>
              </GridContainer>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default withStyles(styles)(RegistrationInfo);
