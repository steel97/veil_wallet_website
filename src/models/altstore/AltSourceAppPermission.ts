// ref: https://faq.altstore.io/distribute-your-apps/make-a-source#app-permissions
interface AltSourceAppPermission {
    /*
        These entitlements are required for all applications, so don't need to be listed:
        - com.app.developer.team-identifier
        - application-identifier
    */
    // A list of all entitlements used by the app and its app extensions.
    entitlements: string[],
    // A dictionary with all the "UsageDescription" keys in your app's Info.plist along with their descriptions. We recommend using the same descriptions already in your Info.plist.
    privacy: Map<string, string>
}