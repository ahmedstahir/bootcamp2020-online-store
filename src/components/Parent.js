import React, { useEffect, useState } from 'react';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';
import { ThemeProvider } from '@material-ui/styles';
import { createMuiTheme } from '@material-ui/core/styles';
import StoreIcon from '@material-ui/icons/Store';
import Button from '@material-ui/core/Button';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './Home'
import Clothing from './Clothing'
import Jewelry from './Jewelry'
import Electronics from './Electronics'
import CategoryIndex from './CategoryIndex'
import CategoryDetail from './CategoryDetail'
import Loader from './Loader'
import NotFound from './NotFound'

function GitHub() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'Follow the '}
            <Link color="inherit" href="https://github.com/ahmedstahir/bootcamp2020-online-store">
                link of GitHub repository
      </Link>{' to access code.'}
        </Typography>
    );
}

const theme = createMuiTheme({
    palette: {
        type: "dark",
        primary: {
            main: '#90caf9',
        },
        secondary: {
            main: '#424242',
        },
    },
});

const useStyles = makeStyles((theme) => ({
    appBar: {
        position: 'relative',
    },
    toolbar: {
        flexWrap: 'wrap',
    },
    toolbarTitle: {
        flexGrow: 1,
    },
    link: {
        margin: theme.spacing(1, 1.5),
    },


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
}));

export default function Parent() {
    const [fetchedProducts, setFetchedProducts] = useState([]);
    const [dataLoading, setDataLoading] = useState(false);

    const classes = useStyles();

    async function fetchDataFromApi() {
        if (fetchedProducts === null || fetchedProducts.length < 1) {
            setDataLoading(true);
            const productsResponse = await fetch('https://fakestoreapi.com/products');
            const products = await productsResponse.json();
            setFetchedProducts(products);
            setDataLoading(false);
        }
    }

    useEffect(fetchDataFromApi, []);

    const clothingProducts = fetchedProducts && fetchedProducts.length > 0 && fetchedProducts.filter(prod => prod.category === 'men clothing' || prod.category === 'women clothing');
    const jewelryProducts = fetchedProducts && fetchedProducts.length > 0 && fetchedProducts.filter(prod => prod.category === 'jewelery');
    const electronicProducts = fetchedProducts && fetchedProducts.length > 0 && fetchedProducts.filter(prod => prod.category === 'electronics');

    if (dataLoading) {
        return (
            <Loader open={true} />
            );
    }

    //debugger;
    return (
        <ThemeProvider theme={theme}>
            <React.Fragment>
                <CssBaseline />
                <AppBar position="static" color="primary" elevation={0} className={classes.appBar}>
                    <Toolbar className={classes.toolbar}>
                        <StoreIcon className={classes.icon} />
                        <Typography variant="h6" color="inherit" noWrap className={classes.toolbarTitle}>
                            The React Online Store
                        </Typography>
                        <Button href="/" variant="contained" color="secondary" className={classes.link}>
                            Home
                        </Button>
                    </Toolbar>
                </AppBar>  
                <main style={{ backgroundColor: '#121212' }}>
                    <BrowserRouter>
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="clothing" element={<Clothing />}>
                                <Route path="/" element={<CategoryIndex Products={clothingProducts} />} />
                                <Route path=":productId" element={<CategoryDetail Products={clothingProducts} />} />
                            </Route>
                            <Route path="jewelry" element={<Jewelry />}>
                                <Route path="/" element={<CategoryIndex Products={jewelryProducts} />} />
                                <Route path=":productId" element={<CategoryDetail Products={jewelryProducts} />} />
                            </Route>
                            <Route path="electronics" element={<Electronics />}>
                                <Route path="/" element={<CategoryIndex Products={electronicProducts} />} />
                                <Route path=":productId" element={<CategoryDetail Products={electronicProducts} />} />
                            </Route>
                            <Route path="*" element={<NotFound />} />
                        </Routes>
                    </BrowserRouter>
                </main>
                {/* Footer */}
                <footer className={classes.footer}>
                    <Typography variant="h6" align="center" gutterBottom>
                        React Router v6 practice project in Bootcamp 2020
                </Typography>
                    <GitHub />
                </footer>
                {/* End footer */}
            </React.Fragment>
        </ThemeProvider>
    );
}