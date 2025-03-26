import { browser } from "$app/environment";
import { init, register } from "svelte-i18n";

const defaultLocale = "de";

const localeFileCollection: { languageKey: string, path: string }[] = [
    { languageKey: "en", path: "./en.json" },
    { languageKey: "de", path: "./de.json" },
    { languageKey: "jp", path: "./jp.json" },
    { languageKey: "es", path: "./es.json" },
    { languageKey: "it", path: "./it.json" }
]

localeFileCollection.forEach((collection) => {
    register(
        collection.languageKey, 
        () => import(collection.path)
    );
});

init({
    fallbackLocale: defaultLocale,
    initialLocale: browser ? window.navigator.language : defaultLocale
});
