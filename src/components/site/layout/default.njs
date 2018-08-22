{% import sitePath + "site-header.njs" as siteHeader %}
{% import sitePath + "site-footer.njs" as siteFooter %}

<!DOCTYPE html>
<html class="no-js" lang="de-DE">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta http-equiv="x-ua-compatible" content="ie=edge">
    {#<link rel="shortcut icon" type="image/x-icon" href="favicon.ico">#}
    <title>templates | {% block pageTitle %}{% endblock %}</title>

    <link rel="stylesheet" href="/css/main.css">

    <script>
        document.querySelector('html').classList.remove('no-js');
    </script>
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
