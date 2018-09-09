{% import 'modules' as modules %}
{% import 'patterns' as patterns %}

{% extends templatePath + "default.njs" %}

{% block pageTitle %}Cora Strauch  Fotografie - Was zählt ist der Moment.{% endblock %}

{% block favicon %}
    {#<link rel="shortcut icon" type="image/x-icon" href="favicon.ico">#}
{% endblock %}

{% block metaTags %}
    <meta name="description" content="Cora Strauch  Fotografie - Was zählt ist der Moment.">
    <meta name="robots" content="index, follow, archive">
    <meta name="twitter:title" content="Cora Strauch  Fotografie - Was zählt ist der Moment.">
    <meta name="twitter:description" content="Cora Strauch  Fotografie - Was zählt ist der Moment.">
    <meta name="twitter:card" content="summary_large_image">
    <meta property="og:url" content="">
    <meta property="og:title" content="">
    <meta property="og:description" content="Cora Strauch  Fotografie - Was zählt ist der Moment.">
    <meta property="og:type" content="website">
    <meta property="og:locale" content="de_DE">
    <meta property="og:site_name" content="">
    <meta name="twitter:image" content="">
    <meta property="og:image" content="">
{% endblock %}

{% block cssStyle %}
    <link rel="stylesheet" href="/css/skin.css">
{% endblock %}

{% block navigation %}
    {{ siteHeader.siteHeader(
    content = '<li><a href="#">HOME1</a></li>
            <li><a href="#">LINK 1</a></li>
            <li><a href="#">LINK 2</a></li>
            <li><a href="#">LINK 3</a></li>'
    ) }}
{% endblock %}

{% block content %}
    {{ modules.imageMood.imageMood (
        headline = '<h1 class="headline-h1">Moments - Cora Strauch Fotografie</h1>',
        image = '<img src="http://placehold.it/1600x400"
                 srcset="http://placehold.it/1600x400 300w"
                 sizes="100vw"
                 alt="Placeholder"
                 class="img-responsive"
            />'
    )}}

    {{ modules.imageMosaic.imageMosaic (
    space = 'mod-space',
    content = '<div class="image-mosaic__content"><img src="http://placehold.it/600x400" class="image-mosaic__image" /></div>
            <div class="image-mosaic__content"><img src="http://placehold.it/400x600" class="image-mosaic__image" /></div>
            <div class="image-mosaic__content"><img src="http://placehold.it/300x600" class="image-mosaic__image" /></div>
            <div class="image-mosaic__content"><img src="http://placehold.it/300x600" class="image-mosaic__image" /></div>
            <div class="image-mosaic__content"><img src="http://placehold.it/400x600" class="image-mosaic__image" /></div>
            <div class="image-mosaic__content"><img src="http://placehold.it/400x600" class="image-mosaic__image" /></div>
            <div class="image-mosaic__content"><img src="http://placehold.it/600x400" class="image-mosaic__image" /></div>'
    )
    }}

    {{ modules.textHighlight.textHighlight (
    space = 'mod-space--large',
    text = 'Welches meiner Fotos ich am liebsten mag? <br /> Das was ich Morgen machen werde!',
    background = '/images/1530719388.jpg' )
    }}

    {{ modules.imageText.imageText(
    space = 'mod-space',
    contentLeft = '<img src="http://placehold.it/300x200"
                 srcset="http://placehold.it/300x200 300w"
                 sizes="100vw"
                 alt="Placeholder"
                 class="img-responsive"
            />',
    contentRight = '<h2 class="headline-h3">Über mich</h2><p class="text-copy">
                Ich bin Cora Strauch, Hobby Fotografin, in und um Heinsberg.<br />
                Ich fotografiere mit dem Herzen und freue mich, für euch besondere Momente festhalten zu dürfen und euch damit Freude zu machen!<br /><br />
                Ich liebe die natürliche Fotografie von Menschen und Emotionen um Erinnerungen festzuhalten.<br />
                Familien, Babybauchzeit, Babys/ Neugeborene und Feste sind Motive, für die wir sehr gerne einen Termin vereinbaren können! :)<br /><br />
            </p>
            <p class="text-copy--bold">Preise</strong>
            <p class="text-copy">
                Ich würde mich, bei Interesse, über eine Nachricht<br />
                mit eurem Wunsch/Anliegen freuen und wir besprechen alles weitere!<br /><br />
                Grundsätzlich biete ich jedoch immer an, dass euch alle Bilder die während des Shootings entstehen, auf SDHC oder CD zur Verfügung stehen.
            </p>'
    ) }}

    {{ modules.socialMedia.socialMedia(
        space = 'mod-space--large',
        phoneNumber = '01712373225',
        mailAddress = 'corastrauch@gmx.de',
        instagramUser = 'corastrauchfotografie',
        infoTextInstagram = 'Schau dir meine neusten Fotos auf Instagram an!',
        infoTextPhone = 'Interesse geweckt? Ich freue mich von dir zu hören.',
        infoTextMail = 'Interesse geweckt? Ich freue mich über deine Nachricht!'
    ) }}



    {{ modules.contactInfo.contactInfo (
    space = 'mod-space',
    text = '<h3 class="headline-h3">Kontakt</h3>
            <p class="text-copy">Cora Strauch<br />
            52525 Heinsberg<br />
            Cora Strauch@gmx.de<br />
            Telefon: 01712373225</p>',
    iframeSrc = 'https://www.openstreetmap.org/export/embed.html?bbox=5.977760776877404%2C51.01488777835605%2C6.22306488454342%2C51.109287441033736&amp;layer=mapnik&amp;marker=51.06211167114368%2C6.100412830710411',
    previewUrl = 'https://www.openstreetmap.org/?mlat=51.0621&amp;mlon=6.1004#map=13/51.0621/6.1004s'
    )
    }}

    {{ modules.textHighlight.textHighlight (
        space = 'mod-space',
        text = 'Was zählt ist der Moment',
        background = '/images/1530719388.jpg' )
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
    content = '<li><a href="#">Link 1</a></li>
            <li><a href="#">Link 2</a></li>
            <li><a href="#">Link 3</a></li>'
    ) }}
{% endblock %}
