let request = new XMLHttpRequest();
request.open("GET", "https://rest-countries-api-techieegy.herokuapp.com/v1/all", true);

request.send();

request.onload = () => {
    let data = JSON.parse(request.response);
    data.forEach((item) => {
        let maincontainer = document.createElement("div");
        maincontainer.setAttribute('class', "maincontainer");
        document.querySelector("body").appendChild(maincontainer);

        let cards = document.createElement("div");
        cards.setAttribute('class', "cards");
        maincontainer.appendChild(cards);

        let cardscontainer = document.createElement('div');
        cardscontainer.setAttribute('class', "cardscontainer");
        cards.appendChild(cardscontainer);

        const name = document.createElement("h1");
        name.classList.add("name");
        name.innerHTML = `${item.name}`;

        cardscontainer.appendChild(name);

        let image = document.createElement("img");
        image.classList.add("image");
        image.setAttribute("src", item.flags[0]);
        cardscontainer.appendChild(image);

        let capital = document.createElement("h2");
        capital.setAttribute('class', "capital");
        capital.innerHTML = `Capital: ${item.capital}`;
        cardscontainer.appendChild(capital);

        let language = document.createElement("h2");
        language.setAttribute('class', "language");
        language.innerHTML = `Latlng: ${item.latlng}`;
        cardscontainer.appendChild(language);

        let region = document.createElement("h2");
        region.setAttribute('class', "region");
        region.innerHTML = `Region: ${item.region}`;
        cardscontainer.appendChild(region);

        let currency_code = document.createElement("h2");
        currency_code.setAttribute('class', "currency_code");
        currency_code.innerHTML = `currency Code: (${item.currencies[0].code})`;
        cardscontainer.appendChild(currency_code);

        let currency_name = document.createElement("h2");
        currency_name.setAttribute('class', "currency_name");
        currency_name.innerHTML = `Currency Name: (${item.currencies[0].name})`;
        cardscontainer.appendChild(currency_name);

        let currency_symbol = document.createElement("h2");
        currency_symbol.setAttribute('class', "currency_symbol");
        currency_symbol.innerHTML = `Currency Symbol: (${item.currencies[0].symbol})`;
        cardscontainer.appendChild(currency_symbol);

        let nativename = document.createElement("h2");
        nativename.setAttribute('class', "nativename");
        nativename.innerHTML = `Nativename: ${item.nativeName}`;
        cardscontainer.appendChild(nativename);
    });
};