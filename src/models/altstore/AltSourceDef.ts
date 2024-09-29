import type { AltSourceApp } from "~/models/altstore/AltSourceApp";
import type { AltSourceNews } from "~/models/altstore/AltSourceNews";

// ref: https://faq.altstore.io/distribute-your-apps/make-a-source
export interface AltSourceDef {
    // The name of your source as it will appear in AltStore.
    name: string,
    // A short, one-sentence description of your source. This will appear underneath the source's name on its About page.
    subtitle?: string,
    // A full-length description of your source. This can include any information you believe is relevant for your source, such as information about your apps or additional links.
    description?: string,
    // A link to an image that will be used to visually identify your source. It will appear as a circle.
    // ! If not provided, this defaults to the iconURL of the first app listed in your source.
    iconURL?: string,
    // A link to an image that will be displayed as the header of your source's About page. The image will be blurred by default, but can be viewed by swiping the source's info banner.
    // ! We recommended using a 3:2 aspect ratio for best results.
    // ! If not provided, this defaults to your source's iconURL.
    headerURL?: string,
    // A link to the primary website for your source. It will be displayed underneath your source's name on its About page.
    website?: string,
    // A link to your Patreon campaign.  This will enable you to distribute Patreon-only apps through your Source. You must add a Patreon object to every app listing you want to designate as Patreon-only. See the Apps section for more information.
    patreonURL?: string,
    // A color that will be used to theme your source's About page. We recommend using a color that works well with your source's icon for consistent theming, but you are free to choose any color you want. Black and white tint colors will be automatically adjusted for legibility.
    // ! This must be in hexadecimal format (e.g #F54F32 or C9B632)
    // ! If not provided, this defaults to the tintColor of the first app listed in your source.
    tintColor?: string,
    // An ordered list of app bundleIdentifier's you want featured on your source's About page. Currently, only the first five will be displayed.
    // ! If not provided, this defaults to the first five apps listed in your source.
    featuredApps?: string[],
    // An ordered list of the apps in your source. 
    // see https://faq.altstore.io/distribute-your-apps/make-a-source#apps
    apps: AltSourceApp[],
    // A list of the News items in your source. The ordering does not matter because AltStore will display them in reverse chronological order according to their date. 
    // see https://faq.altstore.io/distribute-your-apps/make-a-source#news-items
    news: AltSourceNews[],
    userInfo: {}
}