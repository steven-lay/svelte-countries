<script>
import { fade } from "svelte/transition";

async function getCountries() {
    const res = await fetch("https://restcountries.eu/rest/v2/all");

    if (res.ok) {
        return res.json();
    } else {
        throw new Error("Error fetching data");
    }
}
</script>

{#await getCountries() then data}
    <div in:fade={{ duration: 250 }}>
        <h1 class="text-center !mb-0">Country information</h1>
        <p class="text-center">Choose a country to show some facts about it.</p>

        <div class="grid grid-cols-1 md:grid-cols-2">
            {#each data as item}
                <div class="text-center border border-gray-200">
                    <a href="Country/{item.name}">
                        <div>
                            <img
                                src={item.flag}
                                alt="Flag of {item.name}"
                                class="h-24 md:h-16 mx-auto"
                                loading="lazy" />
                        </div>
                        <div>
                            <h3 class="no-underline">{item.name}</h3>
                        </div>
                    </a>
                </div>
            {/each}
        </div>
    </div>
{/await}
