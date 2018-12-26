
import React, {Component} from "react";
import PropTypes from "prop-types";
import withStyles from "@material-ui/core/styles/withStyles";
import typographyStyle from "assets/jss/material-kit-react/components/typographyStyle.jsx";
import Map from 'react-js-google-maps';

typographyStyle.containers = {
    marginTop: 50
}

class SimpleMap extends Component {

    state = {
      lat: 59.95,
      lng: 30.33
    }

    static defaultProps = {
      center: {
        lat: 59.95,
        lng: 30.33
      },
      zoom: 11
    };

    componentDidMount(){
      const {lat, lng} = this.props;
      this.setState({lat, lng})      
    }

    componentWillReceiveProps(nextProps){
      const {lat, lng} = nextProps;
      this.setState({lat, lng})
    }
    
    setMarker = () => {
        var lctn = { lat: parseInt(this.state.lat?this.state.lat:0), lng: parseInt(this.state.lng?this.state.lng:0) };
        var marker = new window.google.maps.Marker({
          position: lctn,
          map: window.gmaps['map1'].gmap
        });
    };
    
    onMapLoad = () => {
        this.setMarker();
    }

    fetchPlaces = (mapProps, map) => {
      const { google } = mapProps;
    }

    render() {        
        const mapOptions = {
          zoom: 4,
          center: { lat: parseInt(this.state.lat?this.state.lat:0), lng: parseInt(this.state.lng?this.state.lng:0) }
        }
        
        return (
          <div>
            <Map
              id="map1"
              apiKey="AIzaSyB03BNeKhRzqUhAkAaGqyZwyBq50E2QTmA"
              mapOptions={mapOptions}
              style={{ width: '100%', height: 340 }}  
              onLoad={this.onMapLoad.bind(this)}
              onReady={this.fetchPlaces}
            />
          </div>
        );
    }
}


function GoogleMapComponent({ ...props }) {
  const { classes, lat, lng } = props;  
  return (
    <div className={classes.containers}>
        <SimpleMap lat={lat} lng={lng}/>
    </div>
  );
}

GoogleMapComponent.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(typographyStyle)(GoogleMapComponent);