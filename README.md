# 'flexcards' theme for Bolt CMS
## Introduction: Experimental bootstrap 4 testing
Flexcards is a Bolt CMS theme (>= 3.2) working with Bootstrap 4 'cards' and jQuery for a simple, dynamic and flexible grid layout. Basic theme shipped with Bolt CMS comes with 'Foundation' framework support and a heavy nested file structure/macros. Flexcards skips foundation css/js completely. For extending flexcards you will need to work with .twig and Bootstrap 4. Please be aware that this work here is completely experimental. Of course, as of this very very alpha version every further development support from Bolt CMS theme developers is very welcome. Please fork, or file issues at least :)

:no_bell: 
```Before you start using this experimental work you should probably read about what browser versions are supported with Bootstrap 4. Have a look here:``` [Browsers supported](http://v4-alpha.getbootstrap.com/getting-started/browsers-devices/)

## Installation
You can also give older Bolt CMS versions a try but please do not file any issues based on this versions. 'Flexcards' development is based on Bolt CMS v3.2.6 (stable release).

### Via "Extensions" in Bolt CMS
You will need to install the famous Bolt CMS on your server, or update your current Bolt install to latest stable release. The theme is available in the [Bolt extensions store](https://market.bolt.cm/) (or market place?) from where you should be able to install directly in your backend. Go to your extensions tab and search for 'bootstrap' or 'flexcard'. Installation is self-explaining, in case you are running into problems [read here](https://docs.bolt.cm/3.2/extensions/introduction#installing-new-extensions).

### Manual installation
In case you will give older Bolt CMS install a try or your server doesn't allow back-end installation you can download flexcards from github here and install it manually via ftp on your server. Just unzip the folder into your `themes` folder and set the theme in `config.yml`.

## Bolt/Bootstrap 4/jQuery/.twig resources for your own development
All the scripts and css are included in the theme and have no other dependencies. Here some links to get more information about using this resources for your own work:

 * [Bolt CMS ^v3.2] https://docs.bolt.cm/3.2/getting-started/introduction
 * [bootstrap >=4](https://v4-alpha.getbootstrap.com/) as framework
 * [twig >=2](http://twig.sensiolabs.org/doc/2.x/) I used this docs for working with Bolt CMS templates/themes
 * [jQuery >=3](https://jquery.com/download/) for the slim version
 * [theter](http://tether.io/) in case you want to use bootstrap tooltips
 

