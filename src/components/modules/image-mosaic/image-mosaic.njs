{% macro imageMosaic( space = false ) %}

    <div class="image-mosaic auto-init {% if space %}mod-space{% endif %}" data-module="modules/image-mosaic/image-mosaic">
        <a href="http://placehold.it/600x400" class="image-mosaic__content"><img src="http://placehold.it/600x400" class="image-mosaic__image" /></a>
        <a href="http://placehold.it/400x600" class="image-mosaic__content"><img src="http://placehold.it/400x600" class="image-mosaic__image" /></a>
        <a href="http://placehold.it/300x600" class="image-mosaic__content"><img src="http://placehold.it/300x600" class="image-mosaic__image" /></a>
        <a href="http://placehold.it/300x600" class="image-mosaic__content"><img src="http://placehold.it/300x600" class="image-mosaic__image" /></a>
        <a href="http://placehold.it/400x600" class="image-mosaic__content"><img src="http://placehold.it/400x600" class="image-mosaic__image" /></a>
        <a href="http://placehold.it/400x600" class="image-mosaic__content"><img src="http://placehold.it/400x600" class="image-mosaic__image" /></a>
        <a href="http://placehold.it/600x400" class="image-mosaic__content"><img src="http://placehold.it/600x400" class="image-mosaic__image" /></a>
    </div>

{% endmacro %}
