{% import 'modules' as modules %}
{% import 'patterns' as patterns %}

{% extends templatePath + "default.njs" %}

{#https://cora-strauch.jimdo.com/#}
{#https://www.templatemonster.com/de/demo/68544.html#}
{#https://www.templatemonster.com/de/demo/65120.html#}
{#https://livedemo00.template-help.com/wt_65120/gallery-single-grid-fluid-3.html#}

{#- Social Media Module#}
{#- Contact Module / Google Maps#}

{% block pageTitle %}Cora Strauch  Fotografie - Was zählt ist der Moment.{% endblock %}

{% block content %}

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

    {{ modules.imageText.imageText(
    space = true,
    image = '<img src="http://placehold.it/300x200"
                 srcset="http://placehold.it/300x200 300w"
                 sizes="100vw"
                 alt="Placeholder"
                 class="img-responsive"
            />',
    text = '<p class="headline-h3">
                Lorem ipsum dolor sit amet
            </p>
            <p class="text-copy">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore
                et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
                Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit
                amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita
                kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
            </p>' ) }}

{% endblock %}

{% block footer %}
{% endblock %}
