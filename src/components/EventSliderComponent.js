import React, {Component} from "react";
import PropTypes from "prop-types";
import withStyles from "@material-ui/core/styles/withStyles";
import CarouselSlider from "react-carousel-slider";

const styles = {
    imgClass: {
        width: 100,
        height: 150
    }
}
// npm i --save react-bootstrap-carousel
class EventSliderComponent extends Component {

    render() {
        const {classes} = this.props;
        let data = [
            {
                des: "1",
                imgSrc: require("assets/img/bg4.jpg")
            },
            {
                des: "2",
                imgSrc: require("assets/img/bg4.jpg")
            }
        ];

        let itemsStyle = {
            padding: "0px",
            background: "white",
            margin:"0 30px",
            boxShadow: "1px 1px 1px 1px #9E9E9E",
            borderRadius: "4px"
        };
        
        let btnWrapperStyle = {
            position: "relative",
            borderRadius: "50%",
            height: "50px",
            width: "50px",
            boxShadow: "1px 1px 1px 1px #9E9E9E",
            textAlign: "center"
        }

        let btnStyle = {
            display: "inline-block",
            position: "relative",
            top: "50%",
            transform: "translateY(-50%)",
            fontSize: "36px"
        }

        let imgStyle = {
            height: "20%",
            borderBottom: "1px solid #9E9E9E"
        };
        
        let scientists = data.map((item, index) => 
            <div key = {index} >
                <img  src = {item.imgSrc} style={{width: 200}}></img>
            </div>
        );
        
        let rBtnCpnt = (<div style = {btnWrapperStyle} >
            <div style = {btnStyle} className = "material-icons" >chevron_right</div>
        </div>);

        let lBtnCpnt = (<div style = {btnWrapperStyle} >
            <div style = {btnStyle} className = "material-icons" >chevron_left</div>
        </div>); 
        return (
            <div>
                <CarouselSlider 
                    sliderBoxStyle = {{height: "300px", width: "100%", background: "transparent"}} 
                    accEle = {{dots: false}}
                    slideCpnts = {scientists} 
                    itemsStyle = {itemsStyle} 
                    buttonSetting = {{placeOn: 'middle-outside'}}
                    rBtnCpnt = {rBtnCpnt}
                    lBtnCpnt = {lBtnCpnt}
                />
            </div>
        );
    }
}

EventSliderComponent.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(EventSliderComponent);