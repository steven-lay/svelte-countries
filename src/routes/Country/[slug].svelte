<script context="module">
export async function load({ page, fetch }) {
    const url = `${page.params.slug}.json`;
    const res = await fetch(url);
    if (res.ok) {
        const country = await res.json();
        return { props: { country } };
    }
    return {
        status: res.status,
        error: new Error(`Could not load ${url}`),
    };
}
</script>

<script>
import { fade } from "svelte/transition";

export let country;
</script>

<div in:fade={{ duration: 250 }}>
    <a href="/" class="font-bold !no-underline !text-lg">← Go back</a>

    <h1 class="!mt-8">Data for {country.name}</h1>
    <img src={country.flag} alt="Flag of {country.name}" class="w-1/2" />
    <ul>
        <li><b>Native name:</b> {country.nativeName}</li>
        <li><b>Demonym:</b> {country.demonym}</li>
        <li><b>Population:</b> {country.population}</li>
        <li>
            <b>Languages</b>:
            <ul>
                {#each country.languages as lang}
                    <li>{lang.name}</li>
                {/each}
            </ul>
        </li>
        <li>
            <b>Currencies:</b>
            <ul>
                {#each country.currencies as currency}
                    <li>{currency.name} {currency.symbol}</li>
                {/each}
            </ul>
        </li>
        <li>
            <b>Timezones:</b>
            <ul>
                {#each country.timezones as timezone}
                    <li>{timezone}</li>
                {/each}
            </ul>
        </li>
        <li><b>Capital City:</b> {country.capital}</li>
        <li><b>Region:</b> {country.region}</li>
        <li><b>Sub-region:</b> {country.subregion}</li>
    </ul>
</div>

<style>
li {
    @apply;
}
</style>
