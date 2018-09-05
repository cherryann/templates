{% macro imageMosaic( space = false, content = '', hiddenModal = false ) %}

    <div class="image-mosaic auto-init {% if space %}mod-space{% endif %}" data-module="modules/image-mosaic/image-mosaic" {% if hiddenModal %}data-options='{"showModal": "false"}'{% endif %}>

        <div class="image-mosaic__grid">
            {{ content | safe }}
        </div>

        <div class="image-mosaic__modal hidden">
            <span class="image-mosaic__modal-close"></span>
            <div class="image-mosaic__modal-window"></div>
            <div class="image-mosaic__modal-backdrop"></div>
        </div>
    </div>

{% endmacro %}
