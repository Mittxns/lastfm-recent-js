# LastFM Recent JS
LastFM Recent JS is a Javascript file that accesses the Last.FM API through jQuery and JSON to in order to display recently scrobbled tracks on a user's profile. 

##Dependencies

Most obviously, a [Last.FM](http://www.last.fm/) account is needed for this script to be useful. If you're not going to be using this script on a WordPress website, jQuery will need to be called. A quick way to do this is by adding the following to your head section.

```html
<script src="//ajax.googleapis.com/ajax/libs/jquery/1.9.0/jquery.min.js"></script>
```
##Installation

Before editing the script, create a [LastFM API account](http://www.last.fm/api/accounts) and keep your API key readily accessible.

In the second line, after the `$.getJSON`, the last.fm API is being accessed. In order to supply the script with your credentials, enter your last.fm username after `&user=` and your API key after `&api_key=`. Also make sure that the script is imported by the following:

```html
<script src="path-to-script/lastfm.js"></script>
```

By default, the script is setup to look for an h5 tag with a class of `listening-to`. To edit this, line 12 can be changed to be another div class. 

##Use

The simplest method to see this script in action would be adding this line in your .html file.

```html
<h5><span class="listening-to"></span></h5>
```

By reading the last.fm documentation it's evident that this script can be used to display much more than just a recently played track. 
