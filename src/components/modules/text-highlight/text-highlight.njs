{% macro textHighlight( text = false, background = false, space = '', scrollAnchor = '' ) %}

    <div class="text-highlight auto-init {% if background %}text-highlight--static-image{% endif %} {% if space %}{{ space }}{% endif %}"
         {% if scrollAnchor %}id="{{ scrollAnchor }}"{% endif %}
         {% if background %}data-image-src="{{ background }}{% endif %}" data-module="modules/text-highlight/text-highlight">
        <p class="text-highlight__text"> {{ text | safe }} </p>
    </div>

{% endmacro %}
