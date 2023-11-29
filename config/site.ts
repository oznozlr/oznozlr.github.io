export interface SiteConfig{
    siteName : string,
    description : string,
    currentlyAt : string,
    socialLinks : {
        twitter : string;
        youtube : string;
        github : string;
        linkedin : string;
        instagram : string;
    };
}


const siteConfig: SiteConfig = {
    siteName : "Explorer",
    description : "Explorer - Açıklama yazılabilir.",
    currentlyAt : "Budapest",
    socialLinks : {
        twitter : "link",
        youtube : "link",
        github : "link",
        linkedin : "link",
        instagram : "lnk"
    },
};

export default siteConfig;