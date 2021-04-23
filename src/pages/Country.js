import getData from '../utils/getData';
import getHash from '../utils/getHash';
const Country = async () => {
    const countryName = getHash();
    const countries = await getData(countryName);
    const country = countries[0];
    console.log(country);
    const view = `
<a href="https://sergiorod21.github.io/Countries/" class="backbtn">
    <!-- <img src="/public/assets/left-arrow.png" class="back-arrow" alt="left-arrow"> -->
    <p>Back</p>
</a>
<div class="Country">
    <img src="${country.flag}" alt="bandera">
    <article class="Country__description">
        <h2>${country.name}</h2>
        <h3><span>Native name:</span> ${country.nativeName}</h3>
        <h3><span>Languages:</span> ${country.languages[0].name}</h3>
        <h3><span>Capital:</span> ${country.capital}</h3>
        <h3><span>Region:</span> ${country.region}</h3>
        <h3><span>Population:</span> ${country.population}</h3>
</div>
</article>
</div>
`;
    return view;
}

export default Country;