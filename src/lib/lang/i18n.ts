import { addMessages, getLocaleFromNavigator, init } from "svelte-i18n";

import de from "$lib/lang/de.json";

addMessages("de", de);

init({
    fallbackLocale: "de",
    initialLocale: getLocaleFromNavigator(),
});
