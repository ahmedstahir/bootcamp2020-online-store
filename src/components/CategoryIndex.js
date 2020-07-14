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
import { Link } from 'react-router-dom';

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

function GitHub() {
    return (
        <Typography variant="body2" color="#424242" align="center">
            <Link color="inherit" to="https://github.com/ahmedstahir/bootcamp2020-online-store">
                link of GitHub repository
      </Link>
        </Typography>
    );
}

export default function CategoryIndex({ Products }) {

    const classes = useStyles();
    var category = '';
    if (Products && Products.length > 0) {
        if (Products.find(p => p.category === 'men clothing' || p.category === 'women clothing'))
            category = 'clothing';
        else if (Products.find(p => p.category === 'jewelery'))
            category = 'jewelery';
        else if (Products.find(p => p.category === 'electronics'))
            category = 'electronics';
    }

    return (
        <>
            {Products &&
                <Container className={classes.cardGrid} maxWidth="md">
                    <Grid container spacing={4}>
                        {Object.entries(Products).map((prod) => (
                            <Grid item key={prod[1].id} xs={12} sm={6} md={4}>
                                <Card className={classes.root}>
                                    <div className={classes.details}>
                                        <CardContent className={classes.content}>
                                            <Typography component="h6" variant="subtitle2">
                                                {prod[1].title}
                                            </Typography>
                                            <Typography variant="body2" color="textSecondary">
                                                Price: ${Math.abs(prod[1].price).toFixed(2)}
                                            </Typography>
                                        </CardContent>
                                        <Button className={classes.heroButtons} href={`/${category}/${prod[1].id}`} size="small" variant="outlined" color="primary" >
                                            Detail
                                        </Button>
                                    </div>
                                    <CardMedia
                                        className={classes.cover}
                                        image={prod[1].image}
                                        title={prod[1].title}
                                    />

                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            }
        </>
    );
}