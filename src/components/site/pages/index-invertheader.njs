{% import 'modules' as modules %}
{% import 'patterns' as patterns %}

{% extends templatePath + "default.njs" %}

{% block pageTitle %}Overview{% endblock %}

{% block navigation %}
    {{ siteHeader.siteHeader(
    invert = 'site-header--invert',
    content = '<li><a href="#">HOME</a></li>
            <li><a href="#">LINK 1</a></li>
            <li><a href="#">LINK 2</a></li>
            <li><a href="#">LINK 3</a></li>'
    ) }}
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
{% endblock %}

{% block footer %}
{% endblock %}
