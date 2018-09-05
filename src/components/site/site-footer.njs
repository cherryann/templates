{% macro siteFooter( content = '' ) %}
<footer class="site-footer">
    <ul class="site-footer__navigation">
        {{ content | safe }}
    </ul>
</footer>
{% endmacro %}
