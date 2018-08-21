{% import sitePath + "site-header.njs" as siteHeader %}
{% import sitePath + "site-footer.njs" as siteFooter %}

<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>templates | {% block pageTitle %}{% endblock %}</title>

    <link rel="stylesheet" href="/css/main.css">
</head>
<body>

    <div class="site">
        {% block navigation %}
            {{ siteHeader.siteHeader() }}
        {% endblock %}

        <main class="site-main site-main--space">
            {% block content %}
            {% endblock %}
        </main>

        {% block footer %}
            {{ siteFooter.siteFooter() }}
        {% endblock %}
    </div>

    <script type="text/javascript" data-main="/js/app/main.js" src="/js/app/vendor/require.js"></script>

</body>
</html>
