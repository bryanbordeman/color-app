import { withStyles } from "@material-ui/styles";
import React from "react";


const styles = {
    main: {
        backgroundColor: 'purple',
        border: "3px solid teal"
    }
};

function MiniPalette(props){
    const { classes } = props;
    console.log(classes)
    return (
        <div className={classes.main}>
            <h1>Mini Palette</h1>
        </div>
    );
}

export default withStyles(styles)(MiniPalette);