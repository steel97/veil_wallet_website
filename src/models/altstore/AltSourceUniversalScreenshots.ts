import type { AltSourceScreenshot } from "~/models/altstore/AltSourceScreenshot";

// ref: https://faq.altstore.io/distribute-your-apps/make-a-source#screenshots
export interface AltSourceUniversalScreenshots {
  iphone: (AltSourceScreenshot | string)[];
  ipad: (AltSourceScreenshot | string)[];
}