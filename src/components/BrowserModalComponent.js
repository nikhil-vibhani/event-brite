import React from "react";
import PropTypes from "prop-types";
import withStyles from "@material-ui/core/styles/withStyles";
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Paper from '@material-ui/core/Paper';
import Select from 'react-select';
import { connect } from 'react-redux';

import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

import GridContainer from "./Grid/GridContainer.jsx";
import GridItem from "./Grid/GridItem.jsx";

import { addCheckOut } from '../action/event.action';

let styles = {
    paperDiv: {
        padding: '11px 0 11px 0',
        fontSize: 20,
        color: '#6F7287',
        margin: '0 33px 0 33px'
    },
    paper: {
        minHeight: 100,
        padding: 15,
        borderLeft: '8px solid #2444ff',
        fontSize: 15
    },
    modalContent: {
        overflowY: 'auto',
        marginTop: 66,
        padding: '35px 55px 35px 64px'
    },
    checkoutBtn: {
        float: 'right'
    },
    closeIcon: {
        float: 'right',
        color: '#6F7287',
        bottom: 10
    },
    headerTitle: {
        width: '90%',
        float: 'left',
        textAlign: 'center',
        color: '#a6a7ad'
    },
    header: {
        backgroundColor: '#E5E5E5',
        height: 81,
        marginBottom: 18
    },
    Dialog: {        
        minHeight: '70vh',
        maxHeight: '70vh',
        width: '100%'
    }
}

class BrowserModalComponent extends React.Component {
    state = {
        open: false,
        selectedOption: { value: '1', label: '1' },
        Event: {}
    };

    componentDidMount() {
        const {Event} = this.props;
        this.setState({Event});
    }

    componentWillReceiveProps(nextProps) {
        const {Event} = nextProps;
        this.setState({Event});
    }

    handleClickOpen = () => {
        this.setState({ open: true });
    };

    handleClose = () => {
        this.setState({ open: false });
    };

    handleChange = (selectedOption) => {        
        this.setState({ selectedOption });
    }
    
    onClickToCheckout = (e) => {
        // this.setState({ open: false });
        this.props.addCheckOut(this.state.selectedOption);
        // this.context.router.history.push('/registration-page');
    }

    render() {
        
        const { eventDetails } = this.state.Event;
        
        const { tickets, ticketSaleStart, ticketSaleEnd } = eventDetails?eventDetails:{};
        console.log("ticketSaleStart, ticketSaleEnd", ticketSaleStart, ticketSaleEnd);
        
        const options = [
            { value: '1', label: '1' },
            { value: '2', label: '2' },
            { value: '3', label: '3' }
        ];

        let data = []  
        tickets==undefined?[]:tickets.map((res, i) => {
            data.push(
                <GridItem xs={12} key={i} className={this.props.classes.paperDiv}>
                    <Paper className={this.props.classes.paper} elevation={1}>
                        <GridContainer>
                            <GridItem xs={6} sm={6} md={6}>
                                {res.ticketName}
                            </GridItem>
                            <GridItem xs={4} sm={4} md={4}>
                                <Select
                                    value={this.state.selectedOption}
                                    onChange={this.handleChange}
                                    options={options}
                                />
                            </GridItem>
                        </GridContainer>
                    </Paper>
                </GridItem>
            )
        })

        return (
        <div>
            <Button variant="outlined" color="primary" onClick={this.handleClickOpen}>
              Ticket
            </Button>
            <Dialog
                open={this.state.open}            
                onClose={this.handleClose}
                aria-labelledby="alert-dialog-slide-title"
                aria-describedby="alert-dialog-slide-description"
                contentClassName={this.props.classes.Dialog}
                fullWidth={true}
            >
            <DialogTitle id="alert-dialog-slide-title" className={this.props.classes.header}>
                 <div className={this.props.classes.headerTitle}>
                     Ticket
                 </div>
                <IconButton className={this.props.classes.closeIcon} color="inherit" onClick={this.handleClose} aria-label="Close">
                    <CloseIcon />
                </IconButton>
            </DialogTitle>
            <DialogContent>
                <DialogContentText id="alert-dialog-slide-description">
                    <GridContainer>
                        {data}
                    </GridContainer>
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                    <GridItem xs={4}>
                        QTY: {this.state.selectedOption.value}
                    </GridItem>
                    <GridItem xs={4}>
                        Free  
                    </GridItem>
                    <GridItem xs={4}>
                        <Button className={this.props.classes.checkoutBtn} variant="contained" onClick={this.onClickToCheckout} color="primary">
                            Checkout
                        </Button>            
                    </GridItem>
                {/* <Button onClick={this.handleClose} color="primary">
                Disagree
                </Button>
                <Button onClick={this.handleClose} color="primary">
                Agree
                </Button> */}
            </DialogActions>
            </Dialog>
        </div>
        );
    }
}

BrowserModalComponent.propTypes = {
    classes: PropTypes.object.isRequired,
};

BrowserModalComponent.contextTypes = {
    router: PropTypes.object
};

const mapStateToProps = (state) => ({
    Event: state.Event
})

export default connect(mapStateToProps, {addCheckOut})(withStyles(styles)(BrowserModalComponent));
