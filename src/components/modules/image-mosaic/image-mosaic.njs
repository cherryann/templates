{% macro imageMosaic( space = '', content = false, hiddenModal = false, contentPath = false ) %}

    {#{% if hiddenModal %}data-options='{"showModal": "false"}'{% endif %}#}

    <div class="image-mosaic auto-init {% if space %}{{ space }}{% endif %}" data-module="modules/image-mosaic/image-mosaic" {% if contentPath %}data-options='{"contentPath": "{{ contentPath }}"}'{% endif %}>
        <div class="image-mosaic__grid">
            {% if content %}
            {{ content | safe }}
            {% endif %}
        </div>

        <div class="image-mosaic__modal hidden">
            <span class="image-mosaic__modal-close"></span>
            <div class="image-mosaic__modal-window"></div>
            <div class="image-mosaic__modal-backdrop"></div>
        </div>
    </div>

{% endmacro %}
