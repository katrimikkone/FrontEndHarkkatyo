import { useState } from "react";
import { Grid, Card, CardHeader, Box, CardMedia, Typography, CardContent, Button, TextField, Paper } from '@mui/material';

function ReseptiHaku({ reseptit }) {
    const [haku, setHaku] = useState('');
    const [haetaan, setHaetaan] = useState(false);

    const muuta = (e) => {
        setHaku(e.target.value)
        setHaetaan(false)
    }

    const hae = () => {
        setHaetaan(true)
    }

    const HaeReseptit = () => {
        //console.log(reseptit)
        if (haetaan) {
            let result = reseptit.filter(resepti => resepti.nimi.includes(haku))

            if (result.length > 0) {
                let haku = result.map(resepti => {
                    return (
                        <>
                            <Box sx={{ backgroundColor: '#80ced6', p: 2 }}>
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
                                    </Card>
                                </Grid>

                            </Box>
                            <p key={resepti.id}>
                                Kategoria: {resepti.kategoria} <br></br>
                                Valmistusaika: {resepti.valmistusaika} min <br></br>
                                Tähdet {resepti.tahdet} /5
                            </p >
                        </>
                    )
                }) //map

                return (haku)
            } else {
                return (<p>Kyseisellä haulla ei löytynyt reseptejä!</p>)
            } //if result
        } // if haetaan
    }

    return (

        <Box component='form'
            sx={{ '& > :not(style)': { m: 1, width: '35ch' }, padding: 2 }}>

            <Typography variant="h4">Reseptihaku</Typography>
            <Typography variant="body1">
                Hae reseptin nimellä tai osalla sitä:
            </Typography>
            <TextField name="nimi" variant="standard" onChange={muuta} /><br />
            <Button variant="contained" onClick={hae}>Hae</Button>
            {HaeReseptit()}

        </Box>

    )
}

export default ReseptiHaku
