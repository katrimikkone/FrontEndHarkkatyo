import * as React from 'react';
import { useState, useEffect } from 'react';
import { Container, Paper, Grid, MenuItem, Typography, TextField, Select } from '@mui/material'
import { getReseptit, modifyResepti } from './reseptit';

function Muokkaa(id) {

    const [reseptit, setReseptit] = useState([])

    const haeReseptit = async () => {
        try {
            const response = await getReseptit();
            setReseptit(response.data)
            console.log("jotain ", id)
        } catch (error) {
            setReseptit([]);
        }
    }

    useEffect(() => { //laukaistaan tietokannasta haku eli reseptit.jsx
        haeReseptit();
    }, []);

    return (
        <Container>
            <Paper>
                <Typography variant="h4">
                    Muokkaa reseptiä
                </Typography>
                <TextField fullWidth name='nimi' value={reseptit.nimi} />
                <Select fullWidth name='kategoria' value={reseptit.kategoria}>
                    {
                        reseptit.map((resepti, index) => {
                            return (
                                <MenuItem key={index}>
                                    {resepti.kategoria}
                                </MenuItem>
                            )
                        })
                    }
                </Select>
                <TextField fullWidth name='nimi' value={reseptit.nimi} />
                <TextField fullWidth name='nimi' value={reseptit.nimi} />
                <TextField fullWidth name='nimi' value={reseptit.nimi} />

            </Paper>
        </Container>
    )

}

export default Muokkaa