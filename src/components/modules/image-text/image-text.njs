{% macro imageText( contentLeft = '', contentRight = '', space = '', scrollAnchor = '' ) %}

    <div class="image-text {% if space %}{{ space }}{% endif %}" {% if scrollAnchor %}id="{{ scrollAnchor }}"{% endif %}>
        <div class="image-text__col">
            {{ contentLeft | safe }}
        </div>
        <div class="image-text__col">
            {{ contentRight | safe }}
        </div>
    </div>

{% endmacro %}
