{% macro contactInfo( space = '', text = '', iframeSrc = '', previewUrl = '' ) %}

    <div class="contact-info {% if space %}{{ space }}{% endif %}">
        <div class="contact-info__col contact-info-col--small">
            {{ text | safe }}
        </div>
        <div class="contact-info__col contact-info-col--large">
            <div class="contact-info_embed-container">
                <iframe width="100%" height="100%" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"
                        src="{{ iframeSrc | safe }}">
                </iframe>
            </div>
            <a href="{{ previewUrl | safe }}" class="link-primary" target="_blank">Größere Karte anzeigen</a>
        </div>
    </div>

{% endmacro %}
