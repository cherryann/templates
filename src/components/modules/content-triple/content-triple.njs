{% macro contentTriple( scrollAnchor = '', space = '', contentLeft = '', contentMiddle = '', contentRight = '' ) %}
    <div {% if scrollAnchor %}id="{{ scrollAnchor }}"{% endif %} class="content-triple {% if space %}{{ space }}{% endif %}">
        <div class="content-triple__col">{% if contentLeft %}{{ contentLeft | safe }}{% endif %}</div>
        <div class="content-triple__col">{% if contentMiddle %}{{ contentMiddle | safe }}{% endif %}</div>
        <div class="content-triple__col">{% if contentRight %}{{ contentRight | safe }}{% endif %}</div>
    </div>
{% endmacro %}
