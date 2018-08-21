{% import 'modules' as modules %}
{% import 'patterns' as patterns %}

{% extends templatePath + "default.njs" %}

{% block pageTitle %}Overview{% endblock %}

{% block content %}

    <h1 class="headline-h1">headline-h1</h1>
    <h2 class="headline-h2">headline-h2</h2>
    <h3 class="headline-h3">headline-h3</h3>

    <p class="text-copy--bold">
        Lorem ipsum dolor sit amet
    </p>
    <p class="text-copy">
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore
        et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
        Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit
        amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna
        aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita
        kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
    </p>

    <h3 class="headline-h3">image-text-50-50</h3>
    {{ modules.imageText5050.imageText5050() }}

{% endblock %}
