import * as React from 'react'
import { PieChart } from '@mui/x-charts/PieChart';
import { BarChart } from '@mui/x-charts/BarChart';
import { Container, Typography, Button, Grid, Rating } from '@mui/material'

function Raportointi({ reseptit }) {

    const result1 = reseptit.filter(resepti => resepti.kategoria === 'Alkuruoka')
    const result2 = reseptit.filter(resepti => resepti.kategoria === 'Pääruoka')
    const result3 = reseptit.filter(resepti => resepti.kategoria === 'Jälkiruoka')

    return (
        <>
            <Container>

                <Typography variant="h4" textAlign="center">Chart</Typography>
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

            </Container>
        </>

    )



}

export default Raportointi