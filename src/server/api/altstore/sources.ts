import { useGithubData } from "~/composables/GithubData";
import type { GithubRelease } from "~/models/github/GithubReleases";

export default defineEventHandler(async (event) => {
    const runtimeConfig = useRuntimeConfig();
    const { getLatestRelease, getAsset } = useGithubData();

    const release = (await getLatestRelease()) as GithubRelease | null;
    const iosAsset = getAsset(release, ".ipa");

    const altSource: AltSourceDef = {
        name: runtimeConfig.altsource.name,
        identifier: runtimeConfig.altsource.identifier,
        apiVersion: "v2",
        apps: [
            {
                name: "Veil - Privacy focused wallet",
                bundleIdentifier: "org.veilproject.wallet",
                developerName: "Ivan Yv",
                subtitle: "Privacy focused VEIL coin crypto wallet",
                category: "other",
                screenshots: [

                ],
                localizedDescription: `Veil - Privacy without compromise

                Veil is creating an encrypted equivalent of the cash economy, where privacy is the most convenient choice. Learn more, download the wallet, and join the journey. 
                
                PRIVACY BY DEFAULT
                
                Privacy should not be optional. Veil aims to make full-time privacy the most convenient choice.
                
                INCENTIVIZED PARTICIPATION
                
                By holding Veil, our users not only contribute to broadly distributed network security, but earn staking rewards — anonymously!
                
                FAIR LAUNCH
                
                No ICO. No premine. Veil's blockchain is secured via Proof-of-Work and Proof-of-Stake in order to combine both security and fair distribution.
                
                USER-FOCUSED
                
                In a digital cash society, participation extends to everybody, not just those who read user manuals. Veil aims to be one of the most user-friendly wallets in crypto.
                
                SELF-SUSTAINING
                
                The Veil network includes built-in self-funding for project development, operations, customer support, and ongoing research and development.
                
                FUTURE-SAFE
                
                Veil will continue to push the limits of cryptography and blockchain technology through Veil Labs, an entity dedicated to R&D and partnerships with leading academic institutions.
                
                
                Project website:
                https://veil-project.com
                Source code:
                https://github.com/steel97/veil_wallet
                Discord
                https://discord.veil-project.com`,
                iconURL: "https://raw.githubusercontent.com/steel97/veil_wallet/main/metadata/en-US/images/icon.png",
                versions: [
                    {
                        version: release?.tag_name ?? "unknown",
                        date: /*release?.published_at ??*/ "2024-05-17T23:36:00+03:00",// TO-DO date converters
                        downloadURL: iosAsset?.browser_download_url ?? "unknown",
                        // TO-DO: get from repository (fastlane/triple-t format)
                        //localizedDescription: "",                        
                    }
                ],
                appPermissions: [
                    {
                        // TO-DO fix
                        entitlements: [
                            "keychain-access-groups"
                        ],
                        // https://github.com/steel97/veil_wallet/blob/main/ios/Runner/Info.plist
                        privacy: {
                            "NSFaceIDUsageDescription": "This app uses face id to secure user data",
                            "NSCameraUsageDescription": "This app needs camera access to scan QR codes"
                        }
                    }
                ]
            }
        ],
        // TO-DO gather news somehow, from somewehere
        news: [
            {
                title: "Veil source",
                identifier: "news_1", // TO-DO, this should be guid?
                caption: "Veil source is now available!",
                date: "2024-05-17T23:00:10+03:00"
            }
        ],
        userInfo: {}
    };

    return altSource;
})