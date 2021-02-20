let validateCodes = [
    // 0: nom a h2
    function () {
        let h2 = result.getElementsByTagName("h2")[0];
        let name = h2.textContent;
        let firstname = name.split(' ')[0];

        if (firstname.length > 0) {
            alert('Hola, ' + firstname + '! Benvingut/da!');
        } else {
            alert('Posa el teu nom entre els <h2>!');
        }
    }
];