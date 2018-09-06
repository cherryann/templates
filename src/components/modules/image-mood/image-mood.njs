{% macro imageMood( image= '', space = '' ) %}
    <div class="image-mood {% if space %}{{ space }}{% endif %}">
        {{ image | safe }}
    </div>
{% endmacro %}
