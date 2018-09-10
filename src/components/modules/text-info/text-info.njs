{% macro textInfo( text = '', space = '' ) %}

    <div class="text-info {% if space %}{{ space }}{% endif %}">
        {{ text | safe }}
    </div>

{% endmacro %}
