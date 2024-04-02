import { Grid, Card, CardHeader, Box, CardMedia, IconButton, Typography, CardContent } from '@mui/material';
import { useState } from 'react';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { red } from '@mui/material/colors';


function ReseptiListaus({ reseptit }) {

    const [color, setColor] = useState('');

    const muutaPunaiseksi = (e) => {
        console.log("painettu");
        setColor()
    }

    return (
        <Grid container spacing={2} >
            {
                reseptit?.map((resepti) => {
                    return (
                        <Box sx={{ backgroundColor: '#80ced6', p: 2, marginTop: 5, marginLeft: 3 }}>
                            <Grid item key={resepti.id}>
                                <Card sx={{ maxWidth: 350, backgroundColor: '#d5f4e6' }}>
                                    <CardHeader title={resepti.nimi} subheader={resepti.kuvaus} />
                                    {
                                        resepti.kuva ?
                                            <CardContent>
                                                <CardMedia sx={{ height: 200, width: 300 }} component='img'
                                                    image={resepti.kuva} />
                                            </CardContent>
                                            :
                                            <CardContent>
                                                <Typography >Ei kuvaa</Typography>
                                            </CardContent>
                                    }
                                    <IconButton onClick={muutaPunaiseksi} aria-label="add to favorites">
                                        <FavoriteIcon />
                                    </IconButton>
                                </Card>
                            </Grid>
                        </Box>

                    )

                })

            }

        </Grid>
    )


}

export default ReseptiListaus;