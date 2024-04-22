import { Grid, Card, Container, CardHeader, Box, CardMedia, IconButton, Typography, CardContent } from '@mui/material';
import { useState } from 'react';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { red, grey } from '@mui/material/colors';
import { Rating } from '@mui/material'


function ReseptiListaus({ reseptit }) {

    const [favorites, setFavorites] = useState(reseptit.map(resepti => ({ id: resepti.id, favorite: resepti.favorite })));

    const handleClick = (id) => {
        console.log("Searching.." + id)
        setFavorites(prevFavorites => prevFavorites.map(favorite => {
            if (favorite.id === id) {
                return { ...favorite, favorite: !favorite.favorite };
            }
            console.log("After... " + favorite.id)
            return favorite;
        }));
    };



    return (
        <Container>
            <Typography variant="h1">Peruvian delicacies</Typography>
            <Grid container spacing={2} >

                {
                    reseptit?.map((resepti) => {
                        return (
                            <Grid key={resepti.id} sx={{ p: 2, marginTop: 5, marginLeft: 3 }}>
                                <Grid item xs={12} key={resepti.id}>
                                    <Card sx={{ maxWidth: 350 }}>
                                        <CardHeader title={resepti.nimi} subheader={resepti.kuvaus} />
                                        {
                                            resepti.kuva ?
                                                <CardContent  >
                                                    <CardMedia sx={{ height: 200, width: 300 }} component='img'
                                                        image={resepti.kuva} />
                                                </CardContent>
                                                :
                                                <CardContent>
                                                    <Typography >Ei kuvaa</Typography>
                                                </CardContent>
                                        }
                                        <IconButton onClick={() => handleClick(resepti.id)} sx={{ color: favorites.find(fav => fav.id === resepti.id)?.favorite ? red[400] : grey[500] }} aria-label="add to favorites">
                                            <FavoriteIcon />
                                        </IconButton>
                                        <Rating name="read-only" value={resepti.tahdet} readOnly />
                                    </Card>
                                </Grid>

                            </Grid >
                        )

                    })

                }

            </Grid >
        </Container>
    )


}

export default ReseptiListaus;