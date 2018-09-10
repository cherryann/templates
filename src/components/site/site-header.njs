{% macro siteHeader( content = '', logo = '', space = '', invert = '' ) %}
<header class="site-header {% if space %}{{ space }}{% endif %}{% if invert %}{{ invert }}{% endif %}">
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
