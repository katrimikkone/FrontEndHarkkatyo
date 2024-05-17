import axios from "axios";
// tämä on tietokantakomponentti
let palvelin = 'http://localhost:8080/';

export const getReseptit = async () => { //kutsuu palvelinta eli reseptiServeriä
    try {
        const response = await axios.get(palvelin + 'reseptit/all');
        return (response);
    } catch (error) {
        return ({ status: 500, message: 'Haku ei onnistunut' });
    }
}

export const addResepti = async (resepti) => {
    try {
        /* Kun EI ole kuvaa
        const response = await axios.post(palvelin + 'matka/add', matka, {
          headers: {'Content-Type': 'application/json' }
        });       
*/
        // Kun ON kuva
        const response = await axios.post(palvelin + 'resepti/add', resepti, {
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' } //tulee tiedosto eli kuva
        });

        return (response);
    } catch (error) {
        return ({ status: 500, message: 'Lisäys ei onnistunut: ' + error.message });
    }
}

export const modifyResepti = async (id, newData) => {
    try {
        const response = await axios.put(palvelin + 'reseptit/' + id, newData, {
            headers: { 'Content-Type': 'application/json' }
        });
        return response.data; // Palauta vastauksen data
    } catch (error) {
        throw error; // Heitä virhe, jos pyyntö epäonnistuu
    }
}
/*
export const modifyResepti = async (id) => {
    console.log("modiFyResepti " + id)
    try {
        const response = await axios.put(palvelin + 'reseptit/' + id, resepti, { //onko resepti, tarpeen?

            headers: { 'Content-Type': 'application/x-www-form-urlencoded' } //tulee tiedosto eli kuva
            // headers: { 'Content-Type': 'application/json' }
        });
        return (response);
    } catch (error) {
        return ({ status: 500, message: 'Muokkaus ei onnistunut: ' + error.message });
    }
}
*/
export const deleteResepti = async (id) => {
    try {
        const response = await axios.delete(palvelin + 'resepti/' + id);
        return (response);
    } catch (error) {
        return ({ status: error.status, message: 'Poisto ei onnistunut: ' + error.message });
    }
}
