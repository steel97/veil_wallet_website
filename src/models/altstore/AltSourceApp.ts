// ref: https://faq.altstore.io/distribute-your-apps/make-a-source#apps
interface AltSourceApp {
    // The name of your app as it will appear on its store page.
    name: string,
    // Your app's bundle identifier (CFBundleIdentifier). It is case sensitive and should match exactly what is in your Info.plist.
    // ! A source cannot have multiple apps with the same bundle identifier.
    bundleIdentifier: string,
    // The name of the developer or developers as it will appear on the store page.
    developerName: string,
    // A short, one-sentence description of your app that will appear in the Browse tab of AltStore.
    subtitle?: string,
    // A full-length description of your app. This can include any information you believe is relevant for your app, such as feature descriptions or additional links. 
    localizedDescription: string,
    // A link to you app's icon image. It will automatically be masked to an app icon shape.
    iconURL: string,
    // The color used to theme your app's store page. We recommend using your app's existing tint color (if it has one), but you are free to choose any color you want.
    // ! This must be in hexadecimal format (e.g #F54F32 or C9B632)
    tintColor?: string,
    // The store category best representing your app.
    /*
        This must be one of the below values. If no category is provided it will default to other
        - developer
        - entertainment
        - games
        - lifestyle
        - other
        - photo-video
        - social
        - utilities
    */
    category?: string,
    // Screenshots of your app. We recommend showcasing your app's main features. 
    // see https://faq.altstore.io/distribute-your-apps/make-a-source#screenshots
    screenshots?: AltSourceUniversalScreenshots | (AltSourceScreenshot[] | string[]),
    // A list of all the published versions of your app.
    // see https://faq.altstore.io/distribute-your-apps/make-a-source#app-versions
    versions: AltSourceAppVersion[],
    // An object listing all entitlements and privacy permissions information used by the app. 
    // see https://faq.altstore.io/distribute-your-apps/make-a-source#app-permissions
    appPermissions: AltSourceAppPermission[],
    // An object specifying the required pledge/tiers to download the app.  
    // https://faq.altstore.io/distribute-your-apps/make-a-source#patreon-apps
    patreon?: AltSourcePatreon
}