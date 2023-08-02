import { browser } from '$app/environment';
import { goto } from '$app/navigation';

let first = true;

export async function load({ url }) {
    if (first && browser) {
        first = false;
        // Triggers double content
        await goto(`${url.pathname}`, { replaceState: true });

        // Does not trigger double content
        // void goto(`${url.pathname}`, { replaceState: true });
    }
}
