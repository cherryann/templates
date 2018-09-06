{% macro textHighlight( text = false, background = false, space = '' ) %}

    <div class="text-highlight {% if background %}text-highlight--static-image{% endif %} {% if space %}{{ space }}{% endif %}"
         {% if background %}style="background-image: url( {{ background }} );{% endif %}">
        <p class="text-highlight__text"> {{ text | safe }} </p>
    </div>

{% endmacro %}
