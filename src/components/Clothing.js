import React from 'react';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { Outlet } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    icon: {
        marginRight: theme.spacing(2),
        color: 'black'
    },
    heroContent: {
        backgroundColor: '#424242',
        padding: theme.spacing(8, 0, 6),
    },
    heroButtons: {
        marginTop: theme.spacing(4),
    },
    cardGrid: {
        paddingTop: theme.spacing(8),
        paddingBottom: theme.spacing(8),
        backgroundColor: '#121212',
    },
    card: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
    },
    cardMedia: {
        paddingTop: '56.25%', // 16:9
    },
    cardContent: {
        flexGrow: 1,
    },
    footer: {
        backgroundColor: '#424242',
        padding: theme.spacing(6),
    },
    root: {
        display: 'flex',
    },
    details: {
        display: 'flex',
        flexDirection: 'column',
    },
    content: {
        flex: '1 0 auto',
    },
    cover: {
        width: 151,
    },
}));

export default function Clothing() {

    const classes = useStyles();

    //debugger;
    return (
        <>
            {/* Hero unit */}
            <div className={classes.heroContent}>
                <Container maxWidth="sm">
                    <Typography component="h3" variant="h3" align="center" color="textPrimary" gutterBottom>
                        Home of Cloting Products
                            </Typography>
                    <Typography variant="h5" align="center" color="textSecondary" paragraph>
                        Browse through a wide range of clothing products
                            </Typography>
                </Container>
            </div>
            {/* End hero unit */}

            <Outlet />
        </>
    );
}