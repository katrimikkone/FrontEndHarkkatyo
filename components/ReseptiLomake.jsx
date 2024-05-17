import { useState } from 'react'
import { Select, MenuItem, Container, FormControl, Input, InputLabel, Paper, Box, TextField, Typography, Button, IconButton } from '@mui/material';
import AttachmentIcon from '@mui/icons-material/Attachment';
import { addResepti } from './reseptit';

function ReseptiLomake() { //{ reseptit }

    const [viesti, setViesti] = useState('');

    const [resepti, setResepti] = useState(
        {
            nimi: '',
            kategoria: '',
            kuvaus: '',
            valmistusaika: 0,
            tahdet: 0,
            kuva: '',
            favorite: false
        }
    );


    const muuta = (e) => {
        setResepti(
            {
                ...resepti, [e.target.name]: e.target.value
            }
        )
        setViesti('')
    }

    const muutaKuva = (e) => {
        setResepti({
            ...resepti,
            [e.target.name]: e.target.files[0]
        });
        setViesti('');
    }

    const handleChange = (e) => {
        setResepti({
            ...resepti,
            tahdet: e.target.value
        });
    }

    const handleKategoria = (e) => {
        setResepti({
            ...resepti,
            kategoria: e.target.value
        })
    }




    const lisaa = async () => { //tietokantaoperaatio on asynkroninen
        let formData = new FormData(); // nimi, kategoria, kuvaus, valmistusaika, tahdet, kuva, favorite
        formData.append('nimi', resepti.nimi)
        formData.append('kategoria', resepti.kategoria)
        formData.append('kuvaus', resepti.kuvaus)
        formData.append('valmistusaika', resepti.valmistusaika)
        formData.append('tahdet', resepti.tahdet)
        formData.append('kuva', resepti.kuva)
        formData.append('favorite', resepti.favorite)

        try {
            // kutsutaan kantakäsittelijältä addReseptiä eli reseptit.jsx
            const response = await addResepti(formData)
            console.log("formData " + response)
            setResepti(
                {
                    nimi: '',
                    kategoria: '',
                    kuvaus: '',
                    valmistusaika: 0,
                    tahdet: 0,
                    kuva: '',
                    favorite: 0
                }

            )
            setViesti('Resepti lisättiin listaukseen')

        } catch (error) {
            setViesti('Lisäys ei onnistunut')
        }

    }




    return (
        <Container>
            <Paper style={{ marginBottom: 20, paddingLeft: 10 }}>
                <Box component='form'
                    sx={{ '& > :not(style)': { m: 1, width: '45ch' }, }} >

                    <Typography variant="h4">Lisää resepti</Typography>
                    <TextField name="nimi" label="Nimi" variant="outlined" value={resepti.nimi} onChange={muuta} /><br />
                    <FormControl variant="outlined" sx={{ m: 1, width: 300 }} name="lomakekontrol">
                        <InputLabel >Kategoria</InputLabel>
                        <Select value={resepti.kategoria} onChange={handleKategoria} label="Kategoria" >
                            <MenuItem value=""></MenuItem>
                            <MenuItem value={'Alkuruoka'}>Alkuruoka</MenuItem>
                            <MenuItem value={'Pääruoka'}>Pääruoka</MenuItem>
                            <MenuItem value={`Jälkiruoka`}>Jälkiuoka</MenuItem>
                        </Select>
                    </FormControl><br />

                    <TextField name="kuvaus" label="Kuvaus" variant="outlined" multiline rows={4} value={resepti.kuvaus} onChange={muuta} /><br />
                    <TextField label="Valmistusaika" variant="outlined" value={resepti.valmistusaika} onChange={muuta} /><br />

                    <FormControl variant="outlined" sx={{ m: 1, width: 300 }} id="formcontrol">
                        <InputLabel >Tähdet</InputLabel>
                        <Select value={resepti.tahdet} onChange={handleChange} label="Tähdet" >
                            <MenuItem value=""></MenuItem>
                            <MenuItem value={1}>1</MenuItem>
                            <MenuItem value={2}>2</MenuItem>
                            <MenuItem value={3}>3</MenuItem>
                            <MenuItem value={4}>4</MenuItem>
                            <MenuItem value={5}>5</MenuItem>
                        </Select>
                    </FormControl><br />
                    <Input accept='image/*' name='kuva' type='file' id='kuva'
                        onChange={muutaKuva} style={{ display: 'none' }} />
                    <InputLabel htmlFor='kuva'>
                        <Typography display='inline'>Kuva</Typography>
                        <Button component='span' startIcon={<AttachmentIcon />} />
                    </InputLabel>

                    <Button variant="contained" onClick={() => lisaa()}>Lisää</Button>
                    {viesti}
                </Box>
            </Paper >
        </Container>
    )
}

export default ReseptiLomake