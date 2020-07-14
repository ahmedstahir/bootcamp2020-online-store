import React from 'react';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import clothingImage from '../images/clothing.jpg';
import jewelryImage from '../images/jewelry.jpg';
import electronicsImage from '../images/electronics.jpg';

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
        cursor: 'pointer'
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
}));

export default function Home() {

    const classes = useStyles();

    return (
        <>
            {/* Hero unit */}
            <div className={classes.heroContent}>
                <Container maxWidth="sm">
                    <Typography component="h3" variant="h3" align="center" color="textPrimary" gutterBottom>
                        Welcome!
                    </Typography>
                    <Typography variant="h5" align="center" color="textSecondary" paragraph>
                        The React Online Store - home of the finest products that are categorized for easy access
                    </Typography>
                </Container>
            </div>
            <Container className={classes.cardGrid} maxWidth="md">
                {/* End hero unit */}
                <Grid container spacing={4}>
                    <Grid item xs={12} sm={6} md={4}>
                        <Card className={classes.card}>
                            <CardMedia
                                className={classes.cardMedia}
                                image={clothingImage}
                                title="Image title"
                            />
                            <CardContent className={classes.cardContent}>
                                <Typography gutterBottom variant="h5" component="h2">
                                    Clothing
                                        </Typography>
                                <Typography>
                                    Browse through a wide range of clothing products
                                        </Typography>
                            </CardContent>
                            <CardActions>
                                <Button href="/clothing" size="small" variant="outlined" color="primary" >
                                    View Products
                                </Button>
                            </CardActions>
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        <Card className={classes.card}>
                            <CardMedia
                                className={classes.cardMedia}
                                image={jewelryImage}
                                title="Image title"
                            />
                            <CardContent className={classes.cardContent}>
                                <Typography gutterBottom variant="h5" component="h2">
                                    Jewelry
                                            </Typography>
                                <Typography>
                                    Adorn yourself for every occasion including fancy events, parties or just casual meetups
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button href="/jewelry" size="small" variant="outlined" color="primary" >
                                    View Products
                                </Button>
                            </CardActions>
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        <Card className={classes.card}>
                            <CardMedia
                                className={classes.cardMedia}
                                image={electronicsImage}
                                title="Image title"
                            />
                            <CardContent className={classes.cardContent}>
                                <Typography gutterBottom variant="h5" component="h2">
                                    Electronics
                                            </Typography>
                                <Typography>
                                    Gadgets to meet your every requirement in this high-tech era
                                            </Typography>
                            </CardContent>
                            <CardActions>
                                <Button href="/electronics" size="small" variant="outlined" color="primary" >
                                    View Products
                                </Button>
                            </CardActions>
                        </Card>
                    </Grid>
                </Grid>
            </Container>
        </>
    );
}