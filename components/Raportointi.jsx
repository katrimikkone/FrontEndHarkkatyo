import * as React from 'react'
import { useState, useEffect } from 'react'
import { PieChart } from '@mui/x-charts/PieChart';
import { BarChart } from '@mui/x-charts/BarChart';
import { Container, Typography, Button, Paper, Rating, Link } from '@mui/material'
import { getReseptit } from './reseptit';


//function Raportointi({ reseptit }) {
function Raportointi() {

    const [reseptit, setReseptit] = useState([])

    const haeReseptit = async () => {
        try {
            const response = await getReseptit();
            setReseptit(response.data)
        } catch (error) {
            setReseptit([]);
        }
    }

    useEffect(() => { //laukaistaan tietokannasta haku eli reseptit.jsx
        haeReseptit();
    }, []);

    const result1 = reseptit.filter(resepti => resepti.kategoria === 'Alkuruoka')
    const result2 = reseptit.filter(resepti => resepti.kategoria === 'Pääruoka')
    const result3 = reseptit.filter(resepti => resepti.kategoria === 'Jälkiruoka')

    console.log(reseptit)

    return (
        <Paper sx={{ paddingBottom: 2 }}>
            <Container>
                <Typography variant="h4">Tilastointia</Typography>
                <PieChart
                    series={[
                        {
                            data: [
                                { id: 0, value: result1.length, label: 'Alkuruoka' },
                                { id: 1, value: result2.length, label: 'Pääruoka' },
                                { id: 2, value: result3.length, label: 'Jälkiruoka' },
                            ]
                        }
                    ]}
                    width={400}
                    height={200}
                />
                <Link to='/'>
                    <Button sx={{ marginLeft: 10, marginTop: 2 }} variant="contained">Etusivulle</Button>
                </Link>
            </Container>
        </Paper>

    )



}

export default Raportointi