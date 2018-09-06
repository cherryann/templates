{% macro siteHeader( content = '', space = '' ) %}
<header class="site-header {% if space %}{{ space }}{% endif %}">
    <nav>
        <a href="#" class="site-header__logo">Logo</a>
        <ul class="site-header__navigation">
            {{ content | safe }}
        </ul>
    </nav>
</header>
{% endmacro %}
