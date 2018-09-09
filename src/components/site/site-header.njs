{% macro siteHeader( content = '', space = '', invert = '' ) %}
<header class="site-header {% if space %}{{ space }}{% endif %}{% if invert %}{{ invert }}{% endif %}">
    <nav>
        <div class="site-header__logo">
            <a href="#" class="site-header__logo-image">Logo</a>
        </div>

        <ul class="site-header__navigation">
            {{ content | safe }}
        </ul>
    </nav>
</header>
{% endmacro %}
