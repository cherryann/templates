{% macro imageText( contentLeft = '', contentRight = '', space = '' ) %}

    <div class="image-text {% if space %}{{ space }}{% endif %}">
        <div class="image-text__col">
            {{ contentLeft | safe }}
        </div>
        <div class="image-text__col">
            {{ contentRight | safe }}
        </div>
    </div>

{% endmacro %}
