[![Code Climate](https://codeclimate.com/github/sablonier/flexcards/badges/gpa.svg)](https://codeclimate.com/github/sablonier/flexcards) ![Current state](https://img.shields.io/badge/bolt--theme-alpha-red.svg)

# 'flexcards' theme for Bolt CMS

## Using bootstrap 4 for the frontend
Flexcards is a Bolt CMS theme (>= 3.2) working with Bootstrap 4 'card' component for a simple, dynamic and flexible grid layout. Current base theme shipped with Bolt CMS (base-2016) comes with foundation framework support, bootstrap is only used for the backend. For extending flexcards you will need to work with .twig and Bootstrap 4 (see links below). Please be aware that flexcards development is experimental.

:no_bell: 
```Before you start using this experimental work for production you should probably read about what browser versions are supported with Bootstrap 4. Have a look here:``` 
[Browsers supported](http://v4-alpha.getbootstrap.com/getting-started/browsers-devices/)

## Features
Flexcards is using bootstrap 4 for a gallery-like frontpage for blog entries or any other content, ordered in read direction also for larger screens. Basically it provides a *4 column grid system with responsive breakpoints* and reorder of the content. You can easily extend flexcards to provide *fixed positions* for a card (see section 'Configuration' below). *Flexcards does not use jQuery or masonry scripts*. The elements have fixed width (more comparable to what brick.js does).

![Ordering of content in read direction](https://github.com/sablonier/flexcards/blob/master/screenshots/readme_flex_example.png)

## Installation

### Requirements
* New or updated installation of [Bolt CMS (>3.2)](http://www.bolt.cm)
* PHP 5.5.9 or higher (see also [Bolt Requirements](https://docs.bolt.cm/3.2/getting-started/requirements))

You can also give older Bolt versions a try but please do not file any issues based on older versions. 'Flexcards' development is based on Bolt CMS v3.2.6 (stable release) at the moment.

### Via 'Extend' on dashboard
You will need to install the famous Bolt CMS on your server, or update your current Bolt install to latest stable release. Flexcards is available in the [Bolt extensions store](https://market.bolt.cm/) (or market place?) from where it should be available directly in your bolt admin panel. Navigate to your extensions in Bolt and search for 'bootstrap' or 'flexcard'. Installation is self-explaining, in case you are running into problems [read here](https://docs.bolt.cm/3.2/extensions/introduction#installing-new-extensions).

### Install manually
In case you will give an older Bolt CMS install a try (or restrictions on your server doesn't allow back-end installation) you can download flexcards from github and install it via (s)ftp on your server. Just unzip the folder into your `themes` folder and set 'flexcards' as theme in `config.yml`.

### Configurations

#### theme.yml and flexcards.css
You will only find common global configuration in theme.yml as it is shipped with Bolt CMS basic theme. You will need to modify `flexcard.css to get your own design.

#### Sticking cards at fixed positions 
![Stick cards to position](https://github.com/sablonier/flexcards/blob/master/screenshots/readme_fixed_positions.png)

You can provide positions for the cards for your authors. You will need to add an additional field in your contenttype used for the cards. Here is an example of adding a ```position field``` to 'entries' content in ```contenttypes.yml``` (or via dashboard Configuration->ContentTypes):

```diff
entries:
    name: Entries
    singular_name: Entry
    fields:
+       position:
+           label: Grid position
+           type: integer
+           group: content
        title:
            type: text
            class: large
            group: content
            ...
```
The number of position follows reading order left>right>top>down.


## Bolt/Bootstrap 4/jQuery/.twig resources for your own development
All the standard scripts and css are included in the theme (no CDN links). For more information about using this resources for your own work:

 * [Bolt CMS template work](https://docs.bolt.cm/3.2/getting-started/introduction)
 * [bootstrap >=4](https://v4-alpha.getbootstrap.com/) as framework
 * [twig >=2](http://twig.sensiolabs.org/doc/2.x/) I used this docs for working with Bolt CMS templates/themes
 * [jQuery >=3](https://jquery.com/download/) for the slim version
 * [theter](http://tether.io/) in case you want to use bootstrap tooltips
