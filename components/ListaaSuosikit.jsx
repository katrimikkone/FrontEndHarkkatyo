import * as React from 'react';
import { styled } from '@mui/material/styles';
import { useState } from 'react';
import { Container, Paper, Box, Grid, Typography, ImageListItem, ImageListItemBar, IconButton } from '@mui/material'
import FavoriteIcon from '@mui/icons-material/Favorite';
import { red, grey } from '@mui/material/colors';

function ListaaSuosikit({ reseptit }) {
    const [favorites, setFavorites] = useState(reseptit.map(resepti => ({ id: resepti.id, favorite: resepti.favorite })));

    const handleClick = (id) => {
        console.log("Searching.." + id)
        console.log(suosikkiReseptitList)
        setFavorites(prevFavorites => prevFavorites.map(favorite => {
            if (favorite.id === id) {
                return { ...favorite, favorite: !favorite.favorite };
            }
            console.log("After... " + favorite.id)

            return favorite;
        }));
    };

    const suosikkiReseptitList = reseptit.filter(resepti => resepti.favorite);

    return (
        <>

            <Container maxWidth="lg" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center' }}>

                <Grid container spacing={2}>
                    {suosikkiReseptitList.map((resepti) => (
                        <Grid item xs={12} sm={6} md={4} lg={3} key={resepti.kuva}>
                            <Paper style={{ position: 'relative', width: '100%', height: 0, paddingBottom: '100%', backgroundColor: 'transparent', overflow: 'hidden' }}>

                                <img
                                    style={{ position: 'absolute', width: '100%', height: '100%', objectFit: 'cover', top: 0, left: 0 }}
                                    src={`${resepti.kuva}?w=164&h=164&fit=crop&auto=format`}
                                    alt={resepti.nimi}
                                    loading="lazy"
                                />

                                < IconButton onClick={() => handleClick(resepti.id)} sx={{ color: favorites.find(fav => fav.id === resepti.id)?.favorite ? red[400] : grey[500] }} >
                                    <FavoriteIcon /></IconButton>
                            </Paper>
                        </Grid>
                    ))}
                </Grid >


            </Container >
        </>
    )
}



export default ListaaSuosikit