import { Grid, Card, Container, CardHeader, Box, CardMedia, IconButton, Typography, CardContent } from '@mui/material';
import { useState, useEffect } from 'react';
import FavoriteIcon from '@mui/icons-material/Favorite';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { red, grey } from '@mui/material/colors';
import { Rating } from '@mui/material'
import { getReseptit, deleteResepti, modifyResepti } from './reseptit';
import { Link } from 'react-router-dom';

//function ReseptiListaus({ reseptit }) {
function ReseptiListaus() {
    const [reseptit, setResepti] = useState([]);
    const [favorites, setFavorites] = useState([]);

    const haeKaikkiReseptit = async () => { //tehdään työ taustalla
        try {
            const response = await getReseptit();
            setResepti(response.data)
        } catch (error) {
            setResepti([]);
        }
    }

    useEffect(() => { //laukaistaan tietokannasta haku eli reseptit.jsx
        haeKaikkiReseptit();
    }, []);


    const handleClick = async (id) => {
        try {
            const newData = { favorite: true }
            const response = await modifyResepti(id, newData);
            console.log("Reseptin päivitys onnistui: ", response);

        } catch (error) {
            console.error("Reseptin päivitys epäonnistui:", error);

        }
    }

    const deleteItem = async (id) => {
        try {
            const response = await deleteResepti(id);
            setResepti(prevReseptit => prevReseptit.filter(resepti => resepti.id !== id));
            console.log(response)
        } catch (error) {
            console.log(error)
        }

    }



    return (
        <Container>
            <Typography variant="h1">Peruvian delicacies</Typography>
            <Grid container spacing={1} >

                {
                    reseptit?.map((resepti) => {
                        return (
                            <Grid key={resepti.id} sx={{ p: 2, marginTop: 3, marginLeft: 1 }}>
                                <Grid item key={resepti.id}>
                                    <Card sx={{ maxWidth: 350 }}>
                                        <CardHeader title={resepti.nimi} subheader={resepti.kuvaus} />
                                        {
                                            resepti.kuva ?
                                                <CardContent  >
                                                    <CardMedia sx={{ height: 200, width: 300 }} component='img'
                                                        image={'http://localhost:8080/download/' + resepti.kuva}    //Tänne palvelimen osoite ja kuvan nimi
                                                        // image={resepti.kuva}
                                                        alt={resepti.kuvaus} />
                                                </CardContent>
                                                :
                                                <CardContent>
                                                    <Typography >Ei kuvaa</Typography>
                                                </CardContent>
                                        }
                                        <IconButton onClick={() => handleClick(resepti.id)} sx={{
                                            color: favorites.find(fav => fav.id === resepti.id)?.favorite ? red[400] : grey[500]
                                        }} aria-label="add to favorites">
                                            <FavoriteIcon />
                                        </IconButton>
                                        <Rating name="read-only" value={resepti.tahdet} readOnly />
                                        <IconButton component={Link} to={'muokkaa/' + resepti.id + '/' + resepti.nimi + '/' + resepti.kategoria + '/' + resepti.kuvaus + '/' + resepti.valmistusaika + '/' + resepti.tahdet + '/' + resepti.kuvaNimi}><EditIcon /></IconButton>
                                        <IconButton onClick={() => deleteItem(resepti.id)}><DeleteIcon /></IconButton>
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