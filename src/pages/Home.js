import getData from '../utils/getData';

const Home = async () =>{
const countries = await getData();
console.log(countries);
const view = `

<div class="Countries">
    ${countries.map((country) => `
    <article class="Countries__country">
        <a href="#/${country.name}">
            <img src="${country.flag}" class="country-flag" alt="${country.name}">
            <h3 class="country-name">${country.name}</h3>
            <ul class="country-information">
                <h4><span>Population:</span> ${country.population}</h4>
                <h4><span>Region:</span> ${country.region}</h4>
                <h4><span>Capital:</span> ${country.capital}</h4>
            </ul>
        </a>
    </article>
    `
    )
    .join('')}
</div>
`;
return view;
}

export default Home;