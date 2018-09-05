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
    space = true,
    content = '<li><a href="#" class="link-primary">HOME1</a></li>
            <li><a href="#" class="link-primary">LINK 1</a></li>
            <li><a href="#" class="link-primary">LINK 2</a></li>
            <li><a href="#" class="link-primary">LINK 3</a></li>'
    ) }}
{% endblock %}

{% block content %}

    {{ modules.imageText.imageText(
    space = true,
    image = '<img src="http://placehold.it/300x200"
                 srcset="http://placehold.it/300x200 300w"
                 sizes="100vw"
                 alt="Placeholder"
                 class="img-responsive"
            />',
    text = '<p class="headline-h1">
                Über mich
            </p>
            <p class="text-copy">
                Ich bin Cora Strauch, Hobby Fotografin, in und um Heinsberg.<br />
                Ich fotografiere mit dem Herzen und freue mich, für euch besondere Momente festhalten zu dürfen und euch damit Freude zu machen!<br /><br />
                Ich liebe die natürliche Fotografie von Menschen und Emotionen um Erinnerungen festzuhalten.<br />
                Familien, Babybauchzeit, Babys/ Neugeborene und Feste sind Motive, für die wir sehr gerne einen Termin vereinbaren können! :)<br /><br />
                Meldet euch gerne unter <a href="tel:0171/2373225" class="link-primary">0171/2373225</a><br />
                Oder <a href="mailto:corastrauch@gmx.de" class="link-primary">corastrauch@gmx.de</a><br /><br />
            </p>
            <p class="headline-h3">Preise</strong>
            <p class="text-copy">
                Ich würde mich, bei Interesse, über eine Nachricht<br />
                mit eurem Wunsch/Anliegen freuen und wir besprechen alles weitere! :)<br /><br />
                Grundsätzlich biete ich jedoch immer an, dass euch alle Bilder die während des Shootings entstehen, auf SDHC oder CD zur Verfügung stehen.
            </p>'
    ) }}

    {{ modules.textHighlight.textHighlight (
        space = true,
        text = 'Welches meiner Fotos ich am liebsten mag? <br /> Das was ich Morgen machen werde!',
        background = '/images/1530719388.jpg' )
    }}

    {{ modules.imageMosaic.imageMosaic (
        space = true,
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
        space = true,
        text = 'Was zählt ist der Moment',
        background = '/images/1530719388.jpg' )
    }}

    {{ modules.socialShare.socialShare(
        space = true,
        twitterUrl = '',
        twitterText = '',
        facebookUrl = ''
    ) }}
{% endblock %}

{% block footer %}
    {{ siteFooter.siteFooter(
    content = '<li><a href="#" class="link-secondary">Link 1</a></li>
            <li><a href="#" class="link-secondary">Link 2</a></li>
            <li><a href="#" class="link-secondary">Link 3</a></li>'
    ) }}
{% endblock %}
