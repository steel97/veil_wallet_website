// ref: https://faq.altstore.io/distribute-your-apps/make-a-source#news-items
interface AltSourceNews {
    // The title of your News item.
    title: string,
    // A unique value to distinguish this News item from others in your source.
    // ! A source cannot have multiple News items with the same identifier.
    identifier: string,
    // A short, one-sentence description of your News item.
    caption: string,
    // The publishing date for this News item.
    // ! This should be in ISO 8601 format (e.g. 2023-2-17 or 2023-02-17T12:00:00-06:00)
    date: string,
    // The background color for your News item. 
    // ! This must be in hexadecimal format (e.g #F54F32 or F65432)
    tintColor?: string,
    // A link to the image you want featured with your News item. 
    // ! This will be scaled to fill a 67:40 aspect ratio.
    imageURL?: string,
    // When true, AltStore will send a push notification about this News item when it next checks for updates in the background.
    notify?: boolean,
    // A link that AltStore should open when the News item is tapped. Links will be opened in an in-app web browser.
    url?: string,
    // The bundle identifier of an associated app. This will make the app's info banner appear below the News item, which will open the app's Store page when tapped.
    appID?: string,

}