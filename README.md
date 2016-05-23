#Number to Bahasa

A Javascript converter from arbitrary number to Indonesian Language (Bahasa).

##Installation

###Bower package

If you haven't install bower yet, [follow this instruction](http://bower.io/#install-bower)

1. Execute this command line in your terminal / CMD :

`bower install number_to_bahasa`

2. Include this script into your HTML : 

`<script type="text/javascript" src="bower_components/number_to_bahasa/dist/ntb.min.js"></script>`

###Direct usage

copy `/dist/ntb.min.js` file and use it however you want.

##Usage

var NTB = new NumberToBahasa();
- NTB.parse(100) returns `seratus`
- NTB.parse(1000) returns `seribu`
- NTB.parse(10000) returns `sepuluh ribu`

Usage with decimals :

- NTB.parse(100.2345) returns `seratus koma dua tiga empat lima`
- NTB.parse(23,2341) returns `dua puluh tiga koma dua tiga empat satu`

See `demo.html` for demo (duh!).

##Contributing

Please fork this repo and send me [pull request](https://github.com/naprirfan/number_to_bahasa/pulls).

##Issues

If you find any bugs, or you have some feature in mind, Let me know by creating an [issue](https://github.com/naprirfan/number_to_bahasa/issues). 