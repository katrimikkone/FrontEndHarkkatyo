import ReseptiHaku from "./components/ReseptiHaku";
import ReseptiListaus from "./components/ReseptiListaus";
import ReseptiLomake from "./components/ReseptiLomake";
import TabsMUI from "./muinavi/TabsMUI";
import { ThemeProvider, createTheme } from '@mui/material/styles'
import { CssBaseline } from "@mui/material";
import { green, teal, lime } from '@mui/material/colors'

const reseptit = [
  {
    id: 1,
    nimi: 'Pollo saltado',
    kategoria: 'Pääruoka',
    kuvaus: 'Stir fried chicken with fries and rice',
    valmistusaika: 35,
    tahdet: 5,
    kuva: 'pics/pollosaltado.jpg'
  },
  {
    id: 2,
    nimi: 'Tallarin verde con bistec',
    kategoria: 'Pääruoka',
    kuvaus: 'Peruvian pesto noodles with beef steak',
    valmistusaika: 40,
    tahdet: 5,
    kuva: 'pics/tallarinesverdes.jpg'
  },
  {
    id: 3,
    nimi: 'Ceviche de pescado',
    kategoria: 'Pääruoka',
    kuvaus: 'Fresh fish cooked in lime juice and ají',
    valmistusaika: 30,
    tahdet: 5,
    kuva: 'pics/cevichepescado.jpg'
  },
  {
    id: 4,
    nimi: 'Suspiro Limeño',
    kategoria: 'Jälkiruoka',
    kuvaus: 'Dessert featuring a luscious layer of dulce de leche topped with a light, caramelized meringue',
    valmistusaika: 60,
    tahdet: 5,
    kuva: 'pics/suspirolimeno.jpg'
  },
  {
    id: 5,
    nimi: 'Arroz con leche y Mazamorra morada ',
    kategoria: 'Jälkiruoka',
    kuvaus: 'Delicious combination of flavors, colors and tradition.',
    valmistusaika: 105,
    tahdet: 5,
    kuva: 'pics/mazamorra.jpg'
  },
  {
    id: 6,
    nimi: 'Ceviche mixto',
    kategoria: 'Pääruoka',
    kuvaus: 'Fresh seafood combined with fish cooked in lime juice and ají.',
    valmistusaika: 45,
    tahdet: 5,
    kuva: 'pics/cevichemixto.jpg'
  },
  {
    id: 7,
    nimi: 'Papa a la huancaína',
    kategoria: 'Alkuruoka',
    kuvaus: 'Yellow ají sauce served with potato.',
    valmistusaika: 45,
    tahdet: 5,
    kuva: 'pics/papahuancaina.jpg'
  },
  {
    id: 8,
    nimi: 'Causa de atun',
    kategoria: 'Alkuruoka',
    kuvaus: 'Mashed potato made with ají amarillo chili pepper layered with tuna fillet and a slight hint of mayonnaise topped off with a slice of boiled egg.',
    valmistusaika: 55,
    tahdet: 5,
    kuva: 'pics/causadeatun.jpg'
  }
]

const theme = createTheme({
  palette: {
    primary: { main: teal[100], contrastText: '#FFFFFF' },
    secondary: { main: green[800], contrastText: '#FFFFFF' },
    text: { primary: teal[800], secondary: lime[700] }
  },
  typography: { fontFamily: "'Nanum Gothic', 'sans-serif'" },
})

function App() {

  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <TabsMUI reseptit={reseptit} />
        {/**     <ReseptiLomake />
        <ReseptiHaku lista={reseptit} />
        <ReseptiListaus lista={reseptit} />*/}
      </ThemeProvider >
      { /**  <TabsMUI lista={reseptit} />
                    */}



    </>
  )
}

export default App
