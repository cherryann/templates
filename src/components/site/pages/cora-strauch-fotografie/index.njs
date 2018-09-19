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
    {{ modules.textHighlight.textHighlight (
    space = 'mod-space',
    text = 'Welches meiner Fotos ich am liebsten mag? <br /> Das was ich Morgen machen werde!',
    background = '/images/cora-strauch-fotografie/1530719388.jpg' )
    }}

    <div class="mod-space">
        <h1 class="headline-h1">Moments - Cora Strauch Fotografie</h1>
    </div>

    {{ modules.imageMosaic.imageMosaic (
    space = 'mod-space',
    content = '../images/cora-strauch-fotografie/image-mosaic/'
    )
    }}

    {{ modules.textHighlight.textHighlight (
    space = 'mod-space',
    text = 'Was zählt ist der Moment',
    background = '/images/cora-strauch-fotografie/1530719388.jpg' )
    }}

    {{ modules.imageText.imageText(
    space = 'mod-space--large',
    contentLeft = '<img src="/images/cora-strauch-fotografie/image-mosaic/16.jpg"
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
        space = 'mod-space',
        phoneNumber = '01712373225',
        mailAddress = 'corastrauch@gmx.de',
        instagramUser = 'corastrauchfotografie',
        infoTextInstagram = 'Schau dir meine neusten Fotos auf Instagram an!',
        infoTextPhone = 'Interesse geweckt? Ich freue mich von dir zu hören.',
        infoTextMail = 'Interesse geweckt? Ich freue mich über deine Nachricht!',
        twitterUrl = 'SEITENURL',
        twitterText = 'Halte den Moment fest bei Cora Strauch Fotografie',
        facebookUrl = 'SEITENURL',
        instagramUser = 'corastrauchfotografie',
        infoTextTwitter = 'Teile meine Seite bei twitter',
        infoTextFacebook = 'Teile meine Seite bei facebook',
        infoTextInstagram = 'Schau dir meine neusten Fotos bei Instagram an'
    ) }}

{% endblock %}

{% block footer %}
    {{ siteFooter.siteFooter(
    content = '<li><a href="impressum.html">Impressum</a></li>
            <li><a href="datenschutz.html">Datenschutz</a></li>
            <li><a href="kontakt.html">Kontakt</a></li>'
    ) }}
{% endblock %}
