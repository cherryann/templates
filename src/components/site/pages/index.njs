{% import 'modules' as modules %}
{% import 'patterns' as patterns %}

{% extends templatePath + "default.njs" %}

{% block pageTitle %}Overview{% endblock %}

{% block content %}

    <div class="mod-space">
        <h1 class="headline-h1">headline-h1</h1>
        <h2 class="headline-h2">headline-h2</h2>
        <h3 class="headline-h3">headline-h3</h3>

        <p class="text-copy text-copy--bold">
            Lorem ipsum dolor sit amet
        </p>
        <p class="text-copy">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore
            et dolore magna aliquyam <strong class="text-copy--bold">sed diam nonumy eirmod</strong> erat, sed diam voluptua.
            At vero eos et accusam et justo duo dolores et ea rebum.
            Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit
            amet, consetetur sadipscing elitr, tempor invidunt ut labore et dolore magna
            aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita
            kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
        </p>
    </div>

    <h3 class="headline-h3">image-text</h3>
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

    <h3 class="headline-h3">image-mosaic</h3>
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

    <h3 class="headline-h3">text-highlight</h3>
    {{ modules.textHighlight.textHighlight (
    space = true,
    text = 'Lorem ipsum dolor sit
                amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita
                kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
    background = 'http://placehold.it/600x400' )
    }}

{% endblock %}
