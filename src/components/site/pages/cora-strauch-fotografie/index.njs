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
        space = true )
    }}

    {{ modules.textHighlight.textHighlight (
        text = 'Was zählt ist der Moment',
        background = '/images/1530719388.jpg' )
    }}

{% endblock %}
