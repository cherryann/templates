{% macro imageMood( image= '', headline= '', space = '' ) %}
    <div class="image-mood {% if space %}{{ space }}{% endif %}">
        {% if headline %}
        <div class="image-mood__headline">
            {{ headline | safe }}
        </div>
        {% endif %}
        {% if image %}
        <div class="image-mood__image">
            {{ image | safe }}
        </div>
        {% endif %}
    </div>
{% endmacro %}
