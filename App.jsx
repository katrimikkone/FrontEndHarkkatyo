import ReseptiHaku from "./components/ReseptiHaku";
import ReseptiListaus from "./components/ReseptiListaus";
import ReseptiLomake from "./components/ReseptiLomake";
import TabsMUI from "./muinavi/TabsMUI";
import { Typography, Container } from "@mui/material";
import { ThemeProvider, createTheme } from '@mui/material/styles'
import { CssBaseline } from "@mui/material";
import { green, teal, lime } from '@mui/material/colors'
import DrawerMUI from "./muinavi/DrawerMUI";
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ListaaSuosikit from "./components/ListaaSuosikit";
import { useState } from "react";


const reseptit = [
  {
    id: 1,
    nimi: 'Pollo saltado',
    kategoria: 'Pääruoka',
    kuvaus: 'Stir fried chicken with fries and rice',
    valmistusaika: 35,
    tahdet: 5,
    kuva: 'pics/pollosaltado.jpg',
    favorite: true,
  },
  {
    id: 2,
    nimi: 'Tallarin verde con bistec',
    kategoria: 'Pääruoka',
    kuvaus: 'Peruvian pesto noodles with beef steak',
    valmistusaika: 40,
    tahdet: 5,
    kuva: 'pics/tallarinesverdes.jpg',
    favorite: false,
  },
  {
    id: 3,
    nimi: 'Ceviche de pescado',
    kategoria: 'Pääruoka',
    kuvaus: 'Fresh fish cooked in lime juice and ají',
    valmistusaika: 30,
    tahdet: 5,
    kuva: 'pics/cevichepescado.jpg',
    favorite: false,
  },
  {
    id: 4,
    nimi: 'Suspiro Limeño',
    kategoria: 'Jälkiruoka',
    kuvaus: 'Dessert featuring a luscious layer of dulce de leche topped with a light, caramelized meringue',
    valmistusaika: 60,
    tahdet: 5,
    kuva: 'pics/suspirolimeno.jpg',
    favorite: false,
  },
  {
    id: 5,
    nimi: 'Arroz con leche y Mazamorra morada ',
    kategoria: 'Jälkiruoka',
    kuvaus: 'Delicious combination of flavors, colors and tradition.',
    valmistusaika: 105,
    tahdet: 5,
    kuva: 'pics/mazamorra.jpg',
    favorite: true,
  },
  {
    id: 6,
    nimi: 'Ceviche mixto',
    kategoria: 'Pääruoka',
    kuvaus: 'Fresh seafood combined with fish cooked in lime juice and ají.',
    valmistusaika: 45,
    tahdet: 5,
    kuva: 'pics/cevichemixto.jpg',
    favorite: false,
  },
  {
    id: 7,
    nimi: 'Papa a la huancaína',
    kategoria: 'Alkuruoka',
    kuvaus: 'Yellow ají sauce served with potato.',
    valmistusaika: 45,
    tahdet: 5,
    kuva: 'pics/papahuancaina.jpg',
    favorite: false,
  },
  {
    id: 8,
    nimi: 'Causa de atun',
    kategoria: 'Alkuruoka',
    kuvaus: 'Mashed potato made with ají amarillo chili pepper layered with tuna fillet and a slight hint of mayonnaise topped off with a slice of boiled egg.',
    valmistusaika: 55,
    tahdet: 5,
    kuva: 'pics/causadeatun.jpg',
    favorite: true,
  }
]

const router = createBrowserRouter([
  {
    element: <DrawerMUI />,
    // errorElement: <Error />,
    children: [
      {
        path: '/',
        element: <ReseptiListaus reseptit={reseptit} />
      },
      {
        path: 'hae',
        element: <ReseptiHaku reseptit={reseptit} />,
      },
      {
        path: 'lisaa',
        element: <ReseptiLomake />,
      },
      {
        path: 'suosikit',
        element: <ListaaSuosikit />,
      }
    ]
  },
]);




const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#efcf2c',
    },
    secondary: {
      main: '#a7b788',
    },
    text: {
      primary: '#003049',
      secondary: '#4c87a0',
    },
    background: {
      default: 'rgba(234,225,211,0.81)',
      paper: '#efd2a7',
    },
  },
  typography: { fontFamily: "'Nanum Gothic', 'sans-serif'" },
})

/**const theme = createTheme({
  palette: {
    primary: { main: teal[100], contrastText: '#FFFFFF' },
    secondary: { main: green[800], contrastText: '#FFFFFF' },
    text: { primary: teal[800], secondary: lime[700] }
  },
  typography: { fontFamily: "'Nanum Gothic', 'sans-serif'" },
}) */



function App() {

  return (
    <>
      <ThemeProvider theme={theme}>

        <CssBaseline />

        <RouterProvider router={router} />

        {/** <ThemeProvider theme={theme}>
       * <ThemeProvider themeOptions={themeOptions} />
       *  <DrawerMUI reseptit={reseptit} />
         *  <TabsMUI reseptit={reseptit} />
            <TabsMUI reseptit={reseptit} />
            <DrawerMUI reseptit={reseptit} />   */}

      </ThemeProvider >

    </>
  )
}

export default App
