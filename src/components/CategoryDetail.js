import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { useParams } from 'react-router-dom';

import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import NotFound from './NotFound';

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
        marginLeft: theme.spacing(2),
        marginBottom: theme.spacing(1),
        width: '30%'
    },
    cardGrid: {
        padding: theme.spacing(8),
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

export default function CategoryDetail({ Products }) {
    const { productId } = useParams();
    const classes = useStyles();
    const prod = Products && Products.length > 0 && Object.entries(Products).find(p => p[1].id && p[1].id.toString() === productId.toString());

    console.log("Products", Products);
    console.log("ID", productId);

    var category = '';
    if (Products && Products.length > 0) {
        if (Products.find(p => p.category === 'men clothing' || p.category === 'women clothing'))
            category = 'clothing';
        else if (Products.find(p => p.category === 'jewelery'))
            category = 'jewelry';
        else if (Products.find(p => p.category === 'electronics'))
            category = 'electronics';
    }

    if (!prod) {
        return (
            <NotFound />
            );
    }

    return (
        <div>
            {prod &&
                <Container className={classes.cardGrid} maxWidth="md" style={{ textAlign: 'center' }}>
                    <Grid container spacing={4}>
                        <Grid item key={prod.id} xs={12} style={{ backgroundColor: '#424242' }}>
                            <Card className={classes.root}>
                                <Container className={classes.cardGrid} maxWidth="md" style={{ textAlign: 'left' }}>
                                    <Typography component="h5" variant="h5">
                                        {prod[1].title}
                                    </Typography>
                                    <br />
                                <Typography variant="subtitle2" color="textSecondary">
                                        {prod[1].description}
                                    </Typography>
                                    <br />
                                    <Typography variant="body2" color="textSecondary">
                                        Price: ${Math.abs(prod[1].price).toFixed(2)}
                                </Typography>
                                <br /><br />
                                <Button href={`/${category}`} size="small" variant="outlined" color="primary" >
                                    Back
                                </Button>
                                </Container>
                            <Container className={classes.cardGrid} maxWidth="md" style={{ textAlign: 'right' }}>
                                <img src={prod[1].image} alt="Product" style={{ maxHeight: '400px', maxWidth: '300px' }} />
                                </Container>
                            </Card>
                        </Grid>
                    </Grid>
                </Container>
            }
        </div>
    );
}