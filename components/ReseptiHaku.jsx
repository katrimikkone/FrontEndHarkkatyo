import { useState, useEffect } from "react";
import { Grid, Card, CardHeader, Box, CardMedia, Typography, CardContent, Button, TextField, Container, FormControl, MenuItem, Select } from '@mui/material';
import { getReseptit } from "./reseptit";

//function ReseptiHaku({ reseptit }) {
function ReseptiHaku() {
    const [haku, setHaku] = useState('');
    const [reseptit, setResepti] = useState([]);
    const [haetaan, setHaetaan] = useState(false);
    const [kategoria, setKategoria] = useState('')


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


    const muuta = (e) => {
        setHaku(e.target.value)
        setHaetaan(false)
    }

    const hae = () => {
        setHaetaan(true)
        console.log("Searching...");
    }

    const muutaKategoria = (e) => {
        setKategoria(e.target.value);
        setHaetaan(false);
        console.log("Selected category:", kategoria);
    }

    const haeKuva = (e) => {

    }

    const HaeReseptit = () => {
        //console.log(reseptit)
        if (haetaan) {
            let result = reseptit.filter(resepti => resepti.nimi.includes(haku) && haku != "" || resepti.kategoria === kategoria)
            if (result.length > 0) {

                let haku = result.map(resepti => {
                    return (
                        <Grid item key={resepti.id} sx={{ backgroundColor: '#80ced6', p: 2, marginTop: 5, marginLeft: 3 }}>
                            <Card sx={{ maxWidth: 350, backgroundColor: '#d5f4e6' }}>
                                <CardHeader title={resepti.nimi} subheader={resepti.kuvaus} />
                                {
                                    resepti.kuva ?
                                        <CardContent>
                                            <CardMedia sx={{ height: 200, width: 300 }} component='img'
                                                image={'http://localhost:8080/download/' + resepti.kuva}    //Tänne palvelimen osoite ja kuvan nimi
                                                // image={resepti.kuva}
                                                alt={resepti.kuvaus} />
                                            <p>
                                                Kategoria: {resepti.kategoria} <br></br>
                                                Valmistusaika: {resepti.valmistusaika} min <br></br>
                                                Tähdet {resepti.tahdet} /5
                                            </p >
                                        </CardContent>
                                        :
                                        <CardContent>
                                            <Typography >Ei kuvaa</Typography>
                                        </CardContent>
                                }
                            </Card>
                        </Grid >
                    )
                }) //map
                return (haku)
            } else {
                return (<p>Kyseisellä haulla ei löytynyt reseptejä!</p>)
            } //if result
        } // if haetaan
    }

    return (
        <Container>
            <Box component='form'
                sx={{ '& > :not(style)': { m: 1, width: '45ch' }, padding: 2 }}>

                <Typography variant="h4">Reseptihaku</Typography>
                <Typography variant="body1">
                    Hae reseptin nimellä tai osalla sitä:
                </Typography>
                <TextField name="nimi" variant="outlined" onChange={muuta} /><br />
                <Typography variant="body1">
                    Tai voit hakea reseptejä myös kategorioittain:
                </Typography>
                <FormControl variant="outlined" sx={{ m: 1, width: 200 }} name="lomakekontrol">
                    <Select value={kategoria} onChange={muutaKategoria}>
                        <MenuItem value=""></MenuItem>
                        <MenuItem value={'Alkuruoka'}>Alkuruoka</MenuItem>
                        <MenuItem value={'Pääruoka'}>Pääruoka</MenuItem>
                        <MenuItem value={`Jälkiruoka`}>Jälkiuoka</MenuItem>
                    </Select>
                </FormControl><br />
                {/**     */}
                <Button variant="contained" onClick={hae}>Hae</Button>
                {HaeReseptit()}

            </Box>
        </Container>
    )
}

export default ReseptiHaku
