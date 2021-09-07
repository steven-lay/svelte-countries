/**
 * @type {import('@sveltejs/kit').RequestHandler}
 */
export async function get({ params }) {
    const { slug } = params;

    const res = await fetch(`https://restcountries.eu/rest/v2/name/${slug}`);
    let data = await res.json();

    return {
        body: JSON.stringify(data[0])
    };
}