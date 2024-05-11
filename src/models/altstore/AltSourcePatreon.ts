// ref: https://faq.altstore.io/distribute-your-apps/make-a-source#patreon-apps
interface AltSourcePatreon {
    /*
        The minimum pledge amount required for download. This can be used to limit downloads to higher tiers.
        This amount is assumed to be in USD by default. If using a non-USD currency for your campaign, you must specify it using the currency key below.

        ! This amount will be shown as the app's monthly price if provided. For this reason, we recommend always providing a minimum pledge amount, even if you only have one tier.
    */
    pledge: number,
    /*
        The ISO currency code of your campaign's currency.
        * This key is required if you provide a pledge amount and your campaign uses a non-USD currency.
    */
    currency: string,
    /*
        The identifier of a campaign benefit. You can add benefits to any of your Patreon campaign tiers, then specify it using this key to allow anyone with that benefit to download your app.
        ! Benefit identifiers are hidden by default, but you can find them by using the Patreon API. 
    */
    benefit?: string,
    /*
        A list of tier identifiers designating which tiers are required to download. A user must be a member of one of these tiers to download your app.
        You can find a tier's identifier by selecting a tier and going to its checkout page. The identifier is the numeric value at the end of the URL.

        example:
        https://www.patreon.com/checkout/shaneriley?rid=8373919
        tier id = 8373919
    */
    tiers?: string[],
}