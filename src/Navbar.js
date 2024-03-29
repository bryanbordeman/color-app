import React, { Component } from 'react';
import { withStyles } from '@material-ui/styles';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Snackbar from '@material-ui/core/Snackbar';
import CloseIcon from '@material-ui/icons/Close';
import { IconButton } from '@material-ui/core';
import Slider from 'rc-slider';
import { Link } from 'react-router-dom'
import 'rc-slider/assets/index.css';
import styles from './styles/NavbarStyles'

class Navbar extends Component {
    constructor(props){
        super(props);
        this.state={format: 'hex', open: false};
        this.handleFormatChange = this.handleFormatChange.bind(this)
        this.closeSnakebar = this.closeSnakebar.bind(this)
    }

    closeSnakebar(){
        this.setState({open: false})
    }
    handleFormatChange(e){
        this.setState({ format: e.target.value, open: true });
        this.props.handleChange(e.target.value)
    }
    render() { 
        const { level, changeLevel, showingAllColors, classes } = this.props
        const { format } = this.state
        return (
            <header className={classes.Navbar}>
                <div className={classes.logo}>
                    <Link to='/'>reactcolorpicker</Link>
                </div>
                {showingAllColors &&
                <div>
                    <span>Level: {level}</span>
                    <div className={classes.slider}>
                        <Slider 
                            defaultValue={level} 
                            min={100} 
                            max={900} 
                            step={100} 
                            onAfterChange={changeLevel}
                        />
                        
                    </div>
                </div>
                }
                <div className={classes.selectContainer}>
                    <Select value={ format } onChange={ this.handleFormatChange }>
                        <MenuItem value="hex">HEX </MenuItem>
                        <MenuItem value="rgb">RGB </MenuItem>
                        <MenuItem value="rgba">RGBA </MenuItem>
                    </Select>
                </div>
                <Snackbar 
                anchorOrigin={{vertical: "bottom", horizontal: "left"}}
                open={this.state.open}
                autoHideDuration={3000}
                message={<span id="messgae-id">Format Changed to {format.toUpperCase()}</span>}
                ContentProps={{"aria-describedby" : "message-id"}}
                onClose={this.closeSnakebar}
                action={[
                    <IconButton 
                    onClick={this.closeSnakebar} 
                    color="inherit" 
                    key="close" 
                    aria-label="close">
                        <CloseIcon/>
                    </IconButton>
                ]}
                />
            </header>
        );
    }
}
 
export default withStyles(styles)(Navbar);