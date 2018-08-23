{% import 'modules' as modules %}
{% import 'patterns' as patterns %}

{% extends templatePath + "default.njs" %}

{#https://cora-strauch.jimdo.com/#}
{#https://www.templatemonster.com/de/demo/68544.html#}
{#https://www.templatemonster.com/de/demo/65120.html#}
{#https://livedemo00.template-help.com/wt_65120/gallery-single-grid-fluid-3.html#}

{% block pageTitle %}Cora Strauch  Fotografie - Was zählt ist der Moment.{% endblock %}

{% block content %}

    {{ modules.textHighlight.textHighlight() }}

{% endblock %}
