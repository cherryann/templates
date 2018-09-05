{% macro siteHeader( content = '', space = false ) %}
<header class="site-header {% if space %}mod-space{% endif %}">
    <nav>
        <ul class="site-header__navigation">
            {{ content | safe }}
        </ul>
    </nav>
</header>
{% endmacro %}
