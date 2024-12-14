// ref: https://faq.altstore.io/distribute-your-apps/make-a-source#app-versions
export interface AltSourceAppVersion {
  // Your app's version number (CFBundleShortVersionString). It is case sensitive and should match exactly what is in your Info.plist.
  version: string;
  // The release date for this version.
  // ! This should be in ISO 8601 format (e.g. 2023-2-17 or 2023-02-17T12:00:00-06:00)
  date: string;
  // A description of what's new in this version. You can use this to tell users about new features, bugs fixes, etc.
  localizedDescription?: string;
  // The URL where your .ipa is hosted.
  downloadURL: string;
  size: number;
  // The minimum iOS version supported by this release. AltStore will hide any updates that are not supported by the user's device.
  minOSVersion?: string;
  // The maximum iOS version supported by this release (inclusive). AltStore will hide any updates that are not supported by the user's device.
  maxOSVersion?: string;
}