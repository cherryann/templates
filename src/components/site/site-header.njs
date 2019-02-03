{% macro siteHeader( content = '', logo = '', space = '', invert = '' ) %}
<header class="site-header auto-init {% if space %}{{ space }}{% endif %}{% if invert %}{{ invert }}{% endif %}"
        data-module="site/site-header">
    <nav>
        {% if logo %}
        <div class="site-header__logo">
            <a href="/" class="site-header__logo-image">{{ logo | safe }}</a>
        </div>
        {% endif %}
        {% if content %}
        <ul class="site-header__navigation">
            {{ content | safe }}
        </ul>
        {% endif %}
    </nav>
</header>
{% endmacro %}
