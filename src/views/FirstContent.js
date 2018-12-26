import React from "react";
// plugin that creates slider
import nouislider from "nouislider";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import Chip from '@material-ui/core/Chip';
import Divider from '@material-ui/core/Divider';
import Avatar from '@material-ui/core/Avatar';
import GoogleMapComponent from '../components/GoogleMapComponent'
// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Button from "components/CustomButtons/Button.jsx";
import EventSliderComponent from 'components/EventSliderComponent';
import basicsStyle from "assets/jss/material-kit-react/views/componentsSections/basicsStyle.jsx";
import { connect } from 'react-redux';
import { getEventData } from '../action/event.action';
import DateFormat from 'dateformat';

const styles = {
    ...basicsStyle,
    deviderStyle: {
        padding: '35px 0 60px 0'
    },
    divIcon : {
        display: 'inline-flex'
    },
    iconStyle : {
        margin: '0 10px 0 2px'
    },
    secondText : {
        fontSize: '15px',
        lineHeight: '21px',
        fontWeight: '400'
    },
    lastSecFirstLabel: {
        color: '#1E0A3C',
        fontWeight: '600',
        paddingBottom: '5px',
        lineHeight: '4px'
    },
    lastSecSecondLabel : {
        color: '#1E0A3C',
        fontSize: 15,
        lineHeight: '22px'
    },
    chipContent: {
        margin: '10px 9px 10px 0px'
    }
}

const google = window.google;

class FirstContent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        Event: {}
    }
  }



  componentDidMount() {
      this.props.getEventData()
  }

  componentWillReceiveProps(nextProps) {      
      const { Event } = nextProps;
       this.setState({Event})
  }

  render() {
    
    const { classes } = this.props;
    
    const { description, tickets, ticketSaleEnd, ticketSaleStart, location } = this.state.Event.eventDetails?this.state.Event.eventDetails:{};
    
    const [lat, lng] = location?location.geometry.coordinates:"";

    const startDate = ticketSaleStart?DateFormat(ticketSaleStart, "ddd, mmm dS, yyyy, h:MM TT"):"";
    const endDate = ticketSaleEnd?DateFormat(ticketSaleEnd, "ddd, mmm dS, yyyy, h:MM TT"):"";    
    
    return (
      <div className={classes.sections}>
        <div className={classes.container}>
          <div id="buttons">
            <GridContainer justify="center">
              <GridItem xs={12} sm={12} md={8}>
                <div className={classes.title}>
                    <h4>
                        DESCRIPTION
                    </h4>
                </div>
                <div>
                    {description?description:""}
                </div>
              </GridItem>
              <GridItem xs={12} sm={12} md={4}>
                    <GridContainer>
                        <GridItem xs={12}>
                        <div className={classes.title}>
                            <h4>
                                DATE AND TIME
                            </h4>
                        </div>
                        <div>
                            <p>{startDate} - <br />{endDate}</p>
                        </div>
                        </GridItem>
                    </GridContainer>
                    <GridContainer>
                        <GridItem xs={12}>
                        <div className={classes.title}>
                            <h4>
                                LOCATION
                            </h4>
                        </div>
                        <div>
                            <p>Eka club the Arena Exhibition centre<br/>
                               Near Kankaria Lake<br/>
                               Ahmedabad, Gujarat 380015</p>
                        </div>
                        </GridItem>
                    </GridContainer>
              </GridItem>
              {tickets!=undefined && tickets.length > 0 && <GridItem xs={12} sm={12} md={12}>
                <GridContainer>
                    <GridItem xs={12}>
                    <div className={classes.title}>
                        <h4>
                            TAGS
                        </h4>
                    </div>
                    <div>
                        {tickets.map((x, index)=> <Chip key={index} label={x.ticketName} className={`${classes.chip} ${classes.chipContent}`} />)}
                    </div>
                    </GridItem>
                </GridContainer>                
              </GridItem>}
              <GridItem xs={12} sm={12} md={12}>
                <GridContainer>
                    <GridItem xs={12}>
                    <div className={classes.title}>
                        <h4>
                            SHARE WITH FRIENDS
                        </h4>
                    </div>
                    <div className={classes.divIcon}>
                        <Avatar className={classes.iconStyle}>
                            <i className={classes.socialIcons + " fab fa-facebook"} />
                        </Avatar>
                        <Avatar className={classes.iconStyle}>
                            <i className={classes.socialIcons + " fab fa-facebook-messenger"} />
                        </Avatar>
                        <Avatar className={classes.iconStyle}>
                            <i className={classes.socialIcons + " fab fa-linkedin"} />
                        </Avatar>
                        <Avatar className={classes.iconStyle}>
                            <i className={classes.socialIcons + " fab fa-twitter"} />
                        </Avatar>                        
                    </div>
                    </GridItem>
                </GridContainer>                
              </GridItem>
              <GridItem xs={12} sm={12} md={12} className={classes.deviderStyle}>
                <Divider />
              </GridItem>
              <GridItem xs={12} sm={12} md={12}>
                <div style={{textAlign: 'center'}}>
                    <h5>
                        <a href="javascript:void(0)" style={{color: '#3D64FF'}}><span>Organizer</span>
                            Aries Events Pvt ltd
                        </a>
                    </h5>
                    <p className={classes.secondText}>Organizer of Guj Power Expo 2018</p>
                    <div>
                        Aries Events Pvt. Ltd., formerly known as Aakar Expocom is a highly professional company involved in organising Trade Exhibitions in India &amp; Abroad.
                    </div>
                    <div style={{marginTop: 30}}>
                        <Button variant="outlined" className={classes.button} style={{backgroundColor: '#ffffff', color: '#000000', boreder: '1px solid #000000'}}>
                            Follow
                        </Button>
                        <Button className={classes.margin} simple style={{color: '#3D64FF'}}>
                            Contact
                        </Button>
                    </div>
                </div>
              </GridItem>
              <GridItem xs={12} sm={12} md={12}>
                <GoogleMapComponent lat={lat} lng={lng}/>
              </GridItem>
              <GridItem xs={12} sm={12} md={12}>
                    <div style={{textAlign: 'center', padding: '55px 0 0 0'}}>
                        <p className={classes.lastSecFirstLabel}>
                            Guj Power Expo 2018
                        </p>
                        <p className={classes.lastSecSecondLabel}>at</p>
                        <p className={classes.lastSecFirstLabel}>
                            Eka club the Arena Exhibition centre
                        </p>
                        <p className={classes.lastSecSecondLabel}>Near Kankaria Lake, Ahmedabad, Gujarat 380015</p>
                    </div>
              </GridItem>
              <GridItem xs={12} sm={12} md={12} style={{textAlign: 'center'}}>
                    <p style={{top: 24, position: 'relative'}}>Other events you may like</p>
                    <EventSliderComponent />
              </GridItem>              
            </GridContainer>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
    Event: state.Event
})

export default connect(mapStateToProps, {getEventData})(withStyles(styles)(FirstContent));
