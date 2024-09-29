// ref: https://faq.altstore.io/distribute-your-apps/make-a-source#screenshots
export interface AltSourceScreenshot {
    // Link to a screenshot of your app.
    imageURL: string,
    // The pixel width of the image. If not provided, AltStore will assume a default size of 393 x 852 points (iPhone 15 in portrait mode). 
    // ! All iPad screenshots must provide an explicitwidth.
    width: number,
    // The pixel height of the image. If not provided, AltStore will assume a default size of 393 x 852 points (iPhone 15 in portrait mode). 
    // ! All iPad screenshots must provide an explicitheight.
    height: number
}