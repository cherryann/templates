{% macro imageText( image = false, text = false, space = false ) %}

    <div class="image-text {% if space %}mod-space{% endif %}">
        <div class="image-text__col">
            {{ image | safe }}
        </div>
        <div class="image-text__col">
            {{ text | safe }}
        </div>
    </div>

{% endmacro %}
