import { useState } from 'react'
import { Select, MenuItem, FormControl, InputLabel, Paper, Box, TextField, Typography, Button } from '@mui/material';

function ReseptiLomake() {
    const [resepti, setResepti] = useState(
        {
            nimi: '',
            kategoria: '',
            kuvaus: '',
            valmistusaika: 0,
            tahdet: 0,
            suosikki: false
        }
    );

    const [viesti, setViesti] = useState('');

    const muuta = (e) => {
        setResepti(
            {
                ...resepti, [e.target.name]: e.target.value
            }
        )
        setViesti('')
    }

    const handleChange = (e) => {
        setResepti(e.target.value);
    }

    const lisaa = () => {
        setResepti(
            {
                nimi: '',
                kategoria: '',
                kuvaus: '',
                valmistusaika: 0,
                tahdet: 0,
                suosikki: false
            }

        )
        setViesti('Resepti lisättiin listaukseen')
    }

    return (
        <Paper style={{ marginBottom: 20, paddingLeft: 10 }}>
            <Box component='form'
                sx={{ '& > :not(style)': { m: 1, width: '25ch' }, }} >

                <Typography variant="h4">Lisää resepti</Typography>
                <TextField name="nimi" label="Nimi" variant="standard" value={resepti.nimi} onChange={muuta} /><br />
                <FormControl variant="standard" sx={{ m: 1, width: 200 }} name="lomakekontrol">
                    <InputLabel >Kategoria</InputLabel>
                    <Select value={resepti} onChange={handleChange} label="Kategoria" >
                        <MenuItem value=""></MenuItem>
                        <MenuItem value={'Alkuruoka'}>Alkuruoka</MenuItem>
                        <MenuItem value={'Pääruoka'}>Pääruoka</MenuItem>
                        <MenuItem value={`Jälkiruoka`}>Jälkiuoka</MenuItem>
                    </Select>
                </FormControl><br />

                <TextField name="kuvaus" label="Kuvaus" variant="standard" multiline rows={4} value={resepti.kuvaus} onChange={muuta} /><br />
                <TextField label="Valmistusaika" variant="standard" value={resepti.valmistusaika} onChange={muuta} /><br />

                <FormControl variant="standard" sx={{ m: 1, width: 200 }} id="formcontrol">
                    <InputLabel >Tähdet</InputLabel>
                    <Select value={resepti} onChange={handleChange} label="Tähdet" >
                        <MenuItem value=""></MenuItem>
                        <MenuItem value={1}>1</MenuItem>
                        <MenuItem value={2}>2</MenuItem>
                        <MenuItem value={3}>3</MenuItem>
                        <MenuItem value={4}>4</MenuItem>
                        <MenuItem value={5}>5</MenuItem>
                    </Select>
                </FormControl><br />

                <Button variant="contained" onClick={() => lisaa()}>Lisää</Button>
                {viesti}
            </Box>
        </Paper >
    )
}

export default ReseptiLomake