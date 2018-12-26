import React from "react";
import PropTypes from "prop-types";
import withStyles from "@material-ui/core/styles/withStyles";
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';
import Paper from '@material-ui/core/Paper';
import GridContainer from "./Grid/GridContainer.jsx";
import GridItem from "./Grid/GridItem.jsx";
import Select from 'react-select';

const styles = {
    paperDiv: {
        padding: '11px 0 11px 0',
        fontSize: 20,
        color: '#6F7287'
    },
    paper: {
        minHeight: 100,
        padding: 15,
        borderLeft: '8px solid #2444ff'
    },
    modalContent: {
        overflowY: 'auto',
        marginTop: 66,
        padding: '35px 55px 35px 64px'
    },
    appBar: {
        textAlign: 'center'
    },
    toolBar: {
        backgroundColor: '#E5E5E5'
    },
    modalDeleteIcon: {
        color: '#6F7287'
    },
    ticketBtn: {
        width: '96%'
    },
    footer: {
        // position: 'fixed',
        // zIndex: '999999',
        // width: '100%',
        // bottom: '0px',
        // borderTop: '4px solid #dadada'
        // backgroundColor: '#ffffff',
        textAlign: 'center',
        boxShadow: '0px -5px 9px #adadadbf',
        width: '100%',
        margin: '0%',
        // position: 'fixed',        
        bottom: '0%',
        zIndex: '999999'
    },
    footerFirstDiv: {
        marginBottom: 40,
        padding: '13px 22px 0px 15px'
    },
    footerSpan1: {
        float: 'left'
    },
    footerSpan2: {
        float: 'right'
    },
    footerBtnDiv: {
        textAlign: 'center'
    },
    footerButton: {
        width: '96%'
    }
}

function Transition(props) {
    return <Slide direction="up" {...props} />;
}
    
class MobileModalComponent extends React.Component {
    state = {
        open: false,
        selectedOption: { value: '1', label: '1' },
    };
    
    handleClickOpen = () => {
        this.setState({ open: true });
    };
    
    handleClose = () => {
        this.setState({ open: false });
    };

    handleChange = (selectedOption) => {
        this.setState({ selectedOption });
    };

    onClickToCheckout = (e) => {
        this.setState({ open: false });
        this.context.router.history.push('/registration-page');
    }

    render() {
        const { classes } = this.props;

        const options = [
            { value: '1', label: '1' },
            { value: '2', label: '2' },
            { value: '3', label: '3' }
        ];

        let data = []
        for(var i = 0; i<=100; i++) {
            data.push(
                <GridItem xs={12} key={i} className={classes.paperDiv}>
                    <Paper className={classes.paper} elevation={1}>
                        <GridContainer>
                            <GridItem xs={6}>
                                General Admission
                            </GridItem>
                            <GridItem xs={4}>
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
        }        
        return (
        <div>
            <Button variant="contained" color="primary" className={classes.ticketBtn} onClick={this.handleClickOpen}>
                Ticket
            </Button>
            <Dialog
            fullScreen
            open={this.state.open}
            onClose={this.handleClose}
            TransitionComponent={Transition}
            >
            <AppBar className={classes.appBar}>
                <Toolbar className={classes.toolBar}>
                    
                        <GridItem xs={10} className={classes.paperDiv}>
                            Ticket
                        </GridItem>
                        <GridItem xs={2} className={classes.paperDiv}>
                            <IconButton className={classes.modalDeleteIcon} color="inherit" onClick={this.handleClose} aria-label="Close">
                                <CloseIcon />
                            </IconButton>
                        </GridItem>
                    
                </Toolbar>
            </AppBar>
            <div className={classes.modalContent}>                
                <GridContainer>
                    {data}
                </GridContainer>
            </div>
            <div className={classes.footer}>
                <div className={classes.footerFirstDiv}>
                    <span className={classes.footerSpan1}>QTY: {this.state.selectedOption.value}</span> <span className={classes.footerSpan2}>Free</span>
                </div>
                <div className={classes.footerBtnDiv}>
                    <Button className={classes.footerButton} variant="contained" color="primary" onClick={this.onClickToCheckout}>
                        Checkout
                    </Button>
                </div>
            </div>
            </Dialog>
        </div>
        );
    }
}

MobileModalComponent.propTypes = {
    classes: PropTypes.object.isRequired,
};

MobileModalComponent.contextTypes = {
    router: PropTypes.object
};

export default withStyles(styles)(MobileModalComponent);
