{% import 'modules' as modules %}
{% import 'patterns' as patterns %}

{% extends templatePath + "default.njs" %}

{% block pageTitle %}Overview{% endblock %}

{% block navigation %}
{% endblock %}

{% block content %}
    {{ modules.imageMood.imageMood (
    space = 'mod-space--large',
    image = '<img src="http://placehold.it/1600x400"
                 srcset="http://placehold.it/1600x400 300w"
                 sizes="100vw"
                 alt="Placeholder"
                 class="img-responsive"
            />'
    )}}

    <div class="text-center text-info mod-center mod-space">
        <h1 class="headline-h1">404</h1>
        <p class="text-copy">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore
            et dolore magna aliquyam <strong class="text-copy--bold">sed diam nonumy eirmod</strong> erat, sed diam voluptua.
            At vero eos et accusam et justo duo dolores et ea rebum.
            Stet clita kasd gubergren, no sea Lorem ipsum dolor sit amet. Lorem ipsum dolor sit
            amet, consetetur sadipscing elitr, tempor invidunt ut labore et dolore magna
            aliquyam erat, sed diam voluptua. <a href="#" class="link-primary">At vero eos et accusam</a> et justo duo dolores et ea rebum. Stet clita
            kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
        </p>
        <a href="#" class="button-primary">Button primary as anchor</a>
    </div>

{% endblock %}

{% block footer %}
{% endblock %}
