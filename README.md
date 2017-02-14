# 'flexcards' theme for Bolt CMS

## Introduction: experimental bootstrap 4 testing
Flexcards is a Bolt CMS theme (>= 3.2) working with Bootstrap 4 'cards' and jQuery for a simple, dynamic and flexible grid layout. Basic theme shipped with Bolt CMS comes with 'Foundation' framework support and a heavy nested file structure/macros. Flexcards skips foundation css/js completely. 

For extending flexcards you will need to work with .twig and Bootstrap 4 (see links below). Please be aware that flexcards development is experimental. Of course, as of this very very alpha version every further development support from Bolt CMS theme developers is very welcome. Please fork, or file issues at least.

:no_bell: 
```Before you start using this experimental work for production you should probably read about what browser versions are supported with Bootstrap 4. Have a look here:``` 
[Browsers supported](http://v4-alpha.getbootstrap.com/getting-started/browsers-devices/)

## Installation

### Requirements
* New or updated installation of [Bolt CMS (>3.2)](http://www.bolt.cm)
* PHP 5.5.9 or higher (see also [Bolt Requirements](https://docs.bolt.cm/3.2/getting-started/requirements))

You can also give older Bolt versions a try but please do not file any issues based on older versions. 'Flexcards' development is based on Bolt CMS v3.2.6 (stable release) at the moment.

### Via 'Extensions' inline
You will need to install the famous Bolt CMS on your server, or update your current Bolt install to latest stable release. Flexcards is available in the [Bolt extensions store](https://market.bolt.cm/) (or market place?) from where it should be available directly in your bolt admin panel. Navigate to your extensions in Bolt and search for 'bootstrap' or 'flexcard'. Installation is self-explaining, in case you are running into problems [read here](https://docs.bolt.cm/3.2/extensions/introduction#installing-new-extensions).

### Manual install
In case you will give an older Bolt CMS install a try (or restrictions on your server doesn't allow back-end installation) you can download flexcards from github here and install it via (s)ftp on your server. Just unzip the folder into your `themes` folder and set flexcards as theme in `config.yml`.

### Setup
There is a `theme.yml` for ongoing development in the theme folder but this is just a clone from the base template shipped with Bolt CMS. There are no global settings for flexcards design, you will need to modify `flexcard.css` to get your own styles.

## Bolt/Bootstrap 4/jQuery/.twig resources for your own development
All the scripts and css are included in the theme and have no other dependencies. Here some links to get more information about using this resources for your own work:

 * [Bolt CMS template work](https://docs.bolt.cm/3.2/getting-started/introduction)
 * [bootstrap >=4](https://v4-alpha.getbootstrap.com/) as framework
 * [twig >=2](http://twig.sensiolabs.org/doc/2.x/) I used this docs for working with Bolt CMS templates/themes
 * [jQuery >=3](https://jquery.com/download/) for the slim version
 * [theter](http://tether.io/) in case you want to use bootstrap tooltips
