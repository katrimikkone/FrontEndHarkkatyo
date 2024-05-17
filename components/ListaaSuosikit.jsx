import * as React from 'react';
import { useState, useEffect } from 'react';
import { Container, Paper, Button, Grid, Typography, Card, CardMedia, IconButton } from '@mui/material'
import FavoriteIcon from '@mui/icons-material/Favorite';

import { red, grey } from '@mui/material/colors';
import { getReseptit, modifyResepti } from './reseptit';

function ListaaSuosikit() {
    const [reseptit, setReseptit] = useState([])
    const [suosikit, setSuosikit] = useState([])
    const [isFavorite, setIsFavorite] = useState(true);
    // const result3 = reseptit.filter(resepti => resepti.kategoria === 'Jälkiruoka')

    /*  const handleClick = async (id) => {
           console.log("toimiiko " + id)
           try {
               const response = await modifyResepti(id);
               console.log("modifyn jälkeen " + response.data)
           } catch (error) {
   
           }
       } 
    const handleClick = async (id) => {
        try {
            // Uudet tiedot, jotka päivitetään (tässä tapauksessa vain favorite asetetaan falseksi)
            const newData = { favorite: false };
            const response = await modifyResepti(id, newData);
            console.log("Reseptin päivitys onnistui:", response);
            // Päivitä tila tarvittaessa ja tee muut toimenpiteet
        } catch (error) {
            console.error("Reseptin päivitys epäonnistui:", error);
            // Käsittele virhe tarvittaessa
        }
    }*/
    const handleClick = async (id) => {
        try {
            // Uudet tiedot, jotka päivitetään (tässä tapauksessa vain favorite asetetaan falseksi)
            const newData = { favorite: false };
            // Lähetä PUT-pyyntö ja odota vastausta
            const response = await modifyResepti(id, newData);
            console.log("Reseptin päivitys onnistui:", response);

            // Päivitä tila: poista resepti suosikeista
            setReseptit(prevReseptit => prevReseptit.filter(resepti => resepti.id !== id));
            setSuosikit(prevReseptit => prevReseptit.filter(suosikki => suosikki.id !== id));

            setIsFavorite(false);

        } catch (error) {
            console.error("Reseptin päivitys epäonnistui:", error);
            // Käsittele virhe tarvittaessa
        }
    }

    const haeSuosikkiReseptit = async () => {
        try {
            const response = await getReseptit();
            const suosikkiReseptit = response.data.filter(resepti => resepti.favorite === 1);
            setSuosikit(suosikkiReseptit);
            console.log("Response:", response.data);
            console.log("Suosikit:", suosikit);
            setReseptit(response.data)
        } catch (error) {
            setReseptit([]);
        }

    }

    useEffect(() => { //laukaistaan tietokannasta haku eli reseptit.jsx
        haeSuosikkiReseptit();
    }, []);

    useEffect(() => {
        console.log("Suosikit tila muuttui:", suosikit);
    },);


    return (
        <Container>
            <Grid container spacing={2}>
                {
                    suosikit?.map((suosikki, index) => {
                        //         if (resepti.favorite === 1){
                        return (

                            <Grid item xs={12} sm={6} md={4} lg={3} key={index} >
                                <Card sx={{ margin: 2 }}>
                                    <CardMedia
                                        component='img'
                                        image={'http://localhost:8080/download/' + suosikki.kuva}    //Tänne palvelimen osoite ja kuvan nimi
                                        alt={suosikki.kuvaus}
                                        sx={{
                                            height: 300,
                                            widht: 500,
                                        }}

                                    />

                                    <IconButton onClick={() => handleClick(suosikki.id)} sx={{ color: red[400] }}>
                                        <FavoriteIcon />
                                    </IconButton>
                                </Card>
                            </Grid>
                        )
                        //     }
                    })
                }
            </Grid>
        </Container >
    )
}

export default ListaaSuosikit