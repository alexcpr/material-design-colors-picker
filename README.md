# Material Design Colors Picker

🎨 Quick and easy extension to quickly copy a color from the Google Material design color palette. The extension is compatible with Chrome and Firefox. You can copy in #HEX, HEX, RGB, RGBA formats.

## Installation 

### Download from the Google Chrome store

Comming soon.

### [Download from the Firefox Add-ons store](https://addons.mozilla.org/en-US/firefox/addon/material-design-colors-picker/)

### Install locally

#### Chrome

Clone the repository like this
```
git clone https://github.com/binksxela/material-design-colors-picker.git
```

Go to ```chrome://extensions``` and check ```Developer mode``` if it isn't already.

Click ```Load unpacked extension...``` and navigate to the folder where you cloned the repository.

#### Firefox

Clone the repository like this
```
git clone https://github.com/binksxela/material-design-colors-picker.git
```

Go to ```about:debugging``` and click on ```Load a temporary module``` then navigate to the folder where you cloned the repository and choose the ```manifest.json``` file.

## Used libraries

*   [Material Design](https://material.io/guidelines/style/color.html) - For the colors in the palette.
*   [Font Awesome](http://fontawesome.io/) For the icons.
*   [Clipboard.js](https://clipboardjs.com/) To copy into your clipboard.

## Build

In order to build ```app.min.css``` you must minify ```app.css``` using [csso](https://css.github.io/csso/csso.html).

In order to build ```picker.min.js``` you must transpil ```picker.js``` to ES5 with [babel](https://babeljs.io/) and then minify ```picker.js``` using [jscompress](https://jscompress.com/).