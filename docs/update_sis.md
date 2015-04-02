# Update a PeopleSoft SIS environment with custom files

## Create output files

Running the `gulp` command will create the `dist` directory with the following files:

* A single CSS file: `dist/uc_sis.css`
* A single JavaScript file: `dist/uc_sis.js`
* Optimized images under: `dist/uc_images`

## CSS

1. Open app designer
1. Search for the `uc_sis` sub stylesheet
1. Overwrite the `uc_sis` sub stylesheet with the contents of `dist/uc_sis.css`
1. Save the file

## JS

1. Open app designer
1. File -> Open
1. Name = `PT_COMMON`
1. Definition = `HTML`
1. Replace the JavaScript on the bottom of the file
