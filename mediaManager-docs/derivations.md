# possible derivations

## saving data

* creator of the photo

## info getting

* Detect faces and group similar faces
* Find camera/lens
* Parse Exif data
* Find locations in photos
  * by looking at the location tag
  * by matching to known locations with, for example, sift
  * machine learning tagging
* Machine learning for tags
  * YOLO network
* Extract time
  * also check if the time is plausible
    * by checking locations
    * are those people in earlier photos
* Get the original name
* Get file format
* Ocr the image to get the text
  * use special license plate ocr software
* Extract social data
  * File names can indicate social networks
  * Tag photos as WhatsApp or Facebook photos
* Find similar images
  * Implement top shot to find the best photo
* Extract embedded files
* Use the stable defusing tagging algorithm to find tags
* Match photos that are taken at the same location

## transformations

* Making a jpg preview for raw files
* Make a thumbnail
* Look for an HDR pair and make an HDR image
* Stitch into panoramas
* Extract the live video from a live photo
