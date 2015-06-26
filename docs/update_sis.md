# Update a PeopleSoft SIS environment with custom files

## Create output files

Running the `gulp` command will create the `dist` directory with the following files:

* JavaScript file to load all the custom assets: `dist/sis_loadfiles.js`
* CSS file: `dist/uc_sis.css`
* JavaScript file: `dist/uc_sis.js`
* Optimized images under: `dist/uc_images`

## Load Files

The `dist/sis_loadfiles.js` is used to inject the CSS & JavaScript onto the page

1. Open app designer
1. File -> Open
1. Name = `PT_COMMON`
1. Definition = `HTML`
1. Replace the JavaScript on the bottom of the file

## CSS / JavaScript / Images

Copy the files into their respective folder:

* `sis_cs.js` into `/bcs/app/psoft/dev/uc_cust/data/portal/js`
* `sis_cs.css` into `/bcs/app/psoft/dev/uc_cust/data/portal/css`
* All images into `/bcs/app/psoft/dev/uc_cust/data/portal/images`

