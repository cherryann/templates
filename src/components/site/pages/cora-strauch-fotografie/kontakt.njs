{% import 'modules' as modules %}
{% import 'patterns' as patterns %}

{% extends templatePath + "default.njs" %}

{% block pageTitle %}Cora Strauch  Fotografie - Was zählt ist der Moment.{% endblock %}

{% block favicon %}
    <link rel="apple-touch-icon" sizes="152x152" href="/images/cora-strauch-fotografie/apple-touch-icon.png">
    <link rel="icon" type="image/png" sizes="32x32" href="/images/cora-strauch-fotografie/favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="16x16" href="/images/cora-strauch-fotografie/favicon-16x16.png">
    <link rel="manifest" href="/images/cora-strauch-fotografie/site.webmanifest">
    <meta name="msapplication-TileColor" content="#da532c">
    <meta name="theme-color" content="#ffffff">
{% endblock %}

{% block metaTags %}
    <meta name="description" content="Cora Strauch  Fotografie - Was zählt ist der Moment.">
    <meta name="robots" content="index, follow, archive">
    <meta name="twitter:title" content="Cora Strauch  Fotografie - Was zählt ist der Moment.">
    <meta name="twitter:description" content="Cora Strauch  Fotografie - Was zählt ist der Moment.">
    <meta name="twitter:card" content="summary_large_image">
    <meta property="og:url" content="SEITENURL">
    <meta property="og:title" content="Cora Strauch  Fotografie - Was zählt ist der Moment.">
    <meta property="og:description" content="Cora Strauch  Fotografie - Was zählt ist der Moment.">
    <meta property="og:type" content="website">
    <meta property="og:locale" content="de_DE">
    <meta property="og:site_name" content="Cora Strauch  Fotografie - Was zählt ist der Moment.">
    <meta name="twitter:image" content="/images/cora-strauch-fotografie/1532646286.png">
    <meta property="og:image" content="/images/cora-strauch-fotografie/1532646286.png">
{% endblock %}

{% block cssStyle %}
    <link rel="stylesheet" href="/css/skin.css">
{% endblock %}

{% block navigation %}
    {{ siteHeader.siteHeader(
    logo = '<img src="/images/cora-strauch-fotografie/1532646286.png" class="img-responsive" />'
    ) }}
{% endblock %}

{% block content %}
    {{ modules.imageMood.imageMood (
        space = 'mod-space--large',
        headline = '<h1 class="headline-h1">Kontakt</h1>',
        image = '<img src="/images/cora-strauch-fotografie/image-mosaic/15.jpg"
                 class="img-responsive"
            />'
    )}}

    {{ modules.contactInfo.contactInfo (
    space = 'mod-space--large',
    text = '<p class="text-copy">Cora Strauch<br />
            52525 Heinsberg<br />
            Cora Strauch@gmx.de<br />
            Telefon: 01712373225</p>',
    iframeSrc = 'https://www.openstreetmap.org/export/embed.html?bbox=5.977760776877404%2C51.01488777835605%2C6.22306488454342%2C51.109287441033736&amp;layer=mapnik&amp;marker=51.06211167114368%2C6.100412830710411',
    previewUrl = 'https://www.openstreetmap.org/?mlat=51.0621&amp;mlon=6.1004#map=13/51.0621/6.1004s'
    )
    }}

    {{ modules.socialMedia.socialMedia(
        space = 'mod-space',
        twitterUrl = '1',
        twitterText = '1',
        facebookUrl = '1',
        phoneNumber = '01712373225',
        mailAddress = 'corastrauch@gmx.de',
        instagramUser = 'corastrauchfotografie',
        infoTextTwitter = 'Teile meine Seite bei twitter',
        infoTextFacebook = 'Teile meine Seite bei facebook',
        infoTextInstagram = 'Schau dir meine neusten Fotos bei Instagram an',
        infoTextPhone = 'Ich freue mich von dir zu hören!',
        infoTextMail = 'Ich freue mich über deine Nachricht!'
    ) }}
{% endblock %}

{% block footer %}
    {{ siteFooter.siteFooter(
    content = '<li><a href="impressum.html">Impressum</a></li>
            <li><a href="datenschutz.html">Datenschutz</a></li>
            <li><a href="kontakt.html">Kontakt</a></li>'
    ) }}
{% endblock %}
