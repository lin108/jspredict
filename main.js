var tle = '0 LEMUR-2 JEROEN\n1 40934U 15052E   15306.10048119  .00001740  00000-0  15647-3 0  9990\n2 40934   6.0033 141.2190 0010344 133.6141 226.4604 14.76056230  5130';
var jspredict = require('jspredict');
jspredict.observe(tle, null);

