import chroma from 'chroma-js';


export default  {

    ColorBox : {
        width: '20%',
        height: props => props.showingFullPalette ? '25%' :'50%',
        margin: '0 auto',
        display: 'inline-block',
        position: 'relative',
        cursor: 'pointer',
        marginBottom: '-4.5px',
        "&:hover button": {
            opacity: 1
        }
    },

    copyText: {
        color: props => chroma(props.background).luminance() >= 0.7? 'rgba(0,0,0,0.6)' : 'white'
    },
    colorName:{
        color: props => chroma(props.background).luminance() <= 0.08? 'white' : 'rgba(0,0,0,0.6)'
    },
    seeMore:{
        color: props => chroma(props.background).luminance() >= 0.7? 'rgba(0,0,0,0.6)' : 'white',
        background: 'rgba(255, 255, 255, 0.3)',
        position: 'absolute',
        border: 'none',
        right: '0px',
        bottom: '0px',
        width: '60px',
        height: '30px',
        textAlign: 'center',
        lineHeight: '30px',
        textTransform: 'uppercase'
    },
    copyButton:{
        color: props => chroma(props.background).luminance() >= 0.7? 'rgba(0,0,0,0.6)' : 'white',
        width: '100px',
        height: '30px',
        position: 'absolute',
        display: 'inline-block',
        top: '50%',
        left: '50%',
        marginLeft: '-50px',
        marginTop: '-15px',
        textAlign: 'center',
        outline: 'none',
        background: 'rgba(255, 255, 255, 0.3)',
        fontSize: '1rem',
        lineHeight: '30px',
        textTransform: 'uppercase',
        border: 'none',
        textDecoration: 'none',
        opacity: 0
    },
    boxContent: {
        position: 'absolute',
        width: '100%',
        left: '0px',
        bottom:'0px',
        padding: '10px',
        color: 'black',
        letterSpacing: '1px',
        textTransform: 'uppercase',
        fontSize: '12px',
    },
    copyOverlay: {
        opacity: '0',
        zIndex: '0',
        width: '100%',
        height: '100%',
        transition: 'transform 0.6s ease-in-out',
        transform: 'scale(0.1)'
    },
    showOverlay: {
        opacity: '1',
        transform: 'scale(50)',
        zIndex: '10',
        position: 'absolute',
        
    },

    copyMsg: {
        position: 'fixed',
        left: '0',
        right: '0',
        top: '0',
        bottom: '0',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        fontSize: '4rem',
        transform: 'scale(0.1)',
        opacity: '0',
        color: 'white',
        zIndex: '0',
        '& h1': {
            fontWeight: '400',
            textShadow: '1px 2px black',
            background: 'rgba(255, 255, 255, 0.3)',
            width: '100%',
            textAlign: 'center',
            marginBottom: '0',
            padding: '1rem',
            textTransform: 'uppercase',
        },
        '& p': {
            fontSize: '2rem',
            fontWeight: '100',
        }
    },

    showMsg: {
        opacity: '1',
        transform: 'scale(1)',
        zIndex: '25',
        transition: 'all 0.4s ease-in-out',
        transitionDelay: '0.3s',
    }
}