[![Code Climate](https://codeclimate.com/github/sablonier/flexcards/badges/gpa.svg)](https://codeclimate.com/github/sablonier/flexcards) ![Current state](https://img.shields.io/badge/bolt--theme-alpha-red.svg)

# 'flexcards' theme for Bolt CMS

## Using bootstrap 4 for the frontend
Flexcards is a Bolt CMS theme (>= 3.2) working with Bootstrap 4 'cards' and jQuery for a simple, dynamic and flexible grid layout. Basic theme shipped with Bolt CMS (base-2016) comes with foundation framework support. Flexcards skips foundation css/js completely, for extending flexcards you will need to work with .twig and Bootstrap 4 (see links below). Please be aware that flexcards development is experimental.

:no_bell: 
```Before you start using this experimental work for production you should probably read about what browser versions are supported with Bootstrap 4. Have a look here:``` 
[Browsers supported](http://v4-alpha.getbootstrap.com/getting-started/browsers-devices/)

## What flexcard does
I was trying to use bootstrap 4 for a gallery-like frontpage for blog entries, ordered in read direction also on larger screens with at least 3 or 4 columns. I made some tests with new bootstrap compononents but ran into (common?) ordering and grid issues. I didn't want to overload with one of those masonry scripts, so I started with an own simple jquery script for fixed-width-items in responsive columns, for use with bolt cms only.

![What flexcard does](https://github.com/sablonier/flexcards/blob/master/screenshots/readme_flex_example.png)

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
