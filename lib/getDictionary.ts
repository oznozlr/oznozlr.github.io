

const dictionaries = {
    en: () => 
        import("./../dictinoaries/en.json").then((module) => module.default),
    tr: () => 
        import("./../dictinoaries/tr.json").then((module) => module.default),
};

export const getDictionary = async (locale: String) => {

    if(!locale || locale === undefined){
        return dictionaries["en"](); 
    } else {
        return dictionaries[locale as "en" | "tr"]();
    }
};