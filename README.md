## How to use
This project is WordPress plugin. So it requires to be installed into WordPress CMS as regular plugin and be activated then.
Once done plugin will add one custom block in Gutenberg editor that provide preview mode in admin and can be viewed in frontend (just put block onto page, save it and switch to page frontend view mode).
Beside this plugin add admin menu item with block source content and an option to update it.

Internaly plugin code uses `npm` and `composer` bundles. This package contains them all installed and compiled.
But if you want to do it yourself run from plugin root folder:
- `composer install`
- `npm i`
- `npm run prod`

Last command will compile all plugin assests into 2 variations: normal file and minified file (*.min.js, *.min.css)
Which one (min/non min) version will be used by plugin depends on value of global WP constant `SCRIPT_DEBUG`. Adding this constant inside `wp-config.php` with value `true` will force plugin to use non minified assets and vise versa.

## Requirements
WordPress >= 6.1
PHP >= 8.1
MariaDB >= 10.5.0 OR MySQL >= 8.0.0

## Comments on Gutenberg block implementation
The implementation of the block may seem weird from the point of view of common sense, but the task contained a requirement to create an Ajax endpoint that will return content to be displayed in the block, fetched from a remote server. In the absence of such a requirement, content rendering could be done through the standard Render method. But a requirement is a requirement, so I chose some compromise. In the admin panel, the block receives its content through a custom REST API endpoint, which is called by an asynchronous request from the browser; on the site page, the block receives content in the same way, but the classic Ajax hook in WordPress is used. There is no deep meaning in this - it is just a demonstration of the possibilities.
In both cases, the block content is rendered on the browser side, which theoretically offloads the server.