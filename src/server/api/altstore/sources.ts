import type { AltSourceDef } from "~/models/altstore/AltSourceDef";
import type { GithubRelease } from "~/models/github/GithubReleases";
import { useCachableData } from "~/composables/CachableData";
import { useGithubData } from "~/composables/GithubData";

export default defineEventHandler(async (event) => {
  const runtimeConfig = useRuntimeConfig();
  const { getLatestRelease, getAsset } = useGithubData();
  const { getData } = useCachableData();

  const release = (await getLatestRelease()) as GithubRelease | null;
  const iosAsset = getAsset(release, ".ipa");

  // get metadata
  const nameMetaUrl = `https://raw.githubusercontent.com/${runtimeConfig.github.repo}/refs/heads/main/metadata/en-US/title.txt`;
  const subtitleMetaUrl = `https://raw.githubusercontent.com/${runtimeConfig.github.repo}/refs/heads/main/metadata/en-US/short_description.txt`;
  const descriptionMetaUrl = `https://raw.githubusercontent.com/${runtimeConfig.github.repo}/refs/heads/main/metadata/en-US/full_description.txt`;

  const name = await getData<string>(nameMetaUrl);
  const subtitle = await getData<string>(subtitleMetaUrl);
  const description = await getData<string>(descriptionMetaUrl);

  const altSource: AltSourceDef = {
    name: runtimeConfig.altsource.name,
    subtitle: runtimeConfig.altsource.subtitle,
    description: runtimeConfig.altsource.description,
    iconURL: runtimeConfig.altsource.icon,
    headerURL: runtimeConfig.altsource.header,
    website: runtimeConfig.altsource.website,
    tintColor: runtimeConfig.altsource.tint,
    featuredApps: [
      "org.veilproject.veilWallet",
    ],
    apps: [
      {
        name,
        bundleIdentifier: "org.veilproject.veilWallet",
        developerName: "Ivan Yv",
        subtitle,
        category: "other",
        screenshots: [

        ],
        localizedDescription: description,
        iconURL: `https://raw.githubusercontent.com/${runtimeConfig.github.repo}/main/metadata/en-US/images/icon.png`,
        versions: [
          {
            version: (release?.tag_name ?? "_unknown").substring(1),
            date: release?.published_at ?? "2024-05-17T23:36:00+03:00",
            downloadURL: iosAsset?.browser_download_url ?? "unknown",
            size: iosAsset?.size ?? 0,
            // TO-DO: get from repository (fastlane/triple-t format)
            // localizedDescription: "",
          },
        ],
        appPermissions: {
          entitlements: [
            "keychain-access-groups",
            "aps-environment",
          ],
          // https://github.com/steel97/veil_wallet/blob/main/ios/Runner/Info.plist
          privacy: {
            NSFaceIDUsageDescription: "This app uses face id to secure user data",
            NSCameraUsageDescription: "This app needs camera access to scan QR codes",
          },
        },
      },
    ],
    // TO-DO gather news somehow, from somewehere
    news: [
      {
        title: "Veil source",
        identifier: "0434b8bd-f1ae-44c4-800b-eb0adca7da1d", // TO-DO, this should be guid?
        caption: "Veil source is now available!",
        date: "2024-05-17T23:00:10+03:00",
        tintColor: "#0282EA",
        notify: false,
        // imageURL: runtimeConfig.altsource.icon,
        // appID: "org.veilproject.veilWallet",
      },
    ],
    userInfo: {},
  };

  return altSource;
});