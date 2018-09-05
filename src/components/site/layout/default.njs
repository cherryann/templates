{% import sitePath + "site-header.njs" as siteHeader %}
{% import sitePath + "site-footer.njs" as siteFooter %}

<!DOCTYPE html>
<html class="no-js" lang="de-DE">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta http-equiv="x-ua-compatible" content="ie=edge">

    {% block favicon %}
    {#<link rel="shortcut icon" type="image/x-icon" href="favicon.ico">#}
    {% endblock %}

    {% block metaTags %}
    <meta name="description" content="">
    <meta name="robots" content="index, follow, archive">
    <meta name="twitter:title" content="">
    <meta name="twitter:description" content="">
    <meta name="twitter:card" content="summary_large_image">
    <meta property="og:url" content="">
    <meta property="og:title" content="">
    <meta property="og:description" content="">
    <meta property="og:type" content="website">
    <meta property="og:locale" content="de_DE">
    <meta property="og:site_name" content="">
    <meta name="twitter:image" content="">
    <meta property="og:image" content="">
    {% endblock %}

    <title>{% block pageTitle %}{% endblock %}</title>

    {% block cssStyle %}
        <link rel="stylesheet" href="/css/main.css">
    {% endblock %}

    <script>
        document.querySelector('html').classList.remove('no-js');
    </script>
</head>
<body>

    <div class="site">
        {% block navigation %}
            {{ siteHeader.siteHeader(
                content = '<li><a href="#" class="link-primary">HOME</a></li>
            <li><a href="#" class="link-primary">LINK 1</a></li>
            <li><a href="#" class="link-primary">LINK 2</a></li>
            <li><a href="#" class="link-primary">LINK 3</a></li>'
            ) }}
        {% endblock %}

        <main class="site-main">
            {% block content %}
            {% endblock %}
        </main>

        {% block footer %}
            {{ siteFooter.siteFooter(
                content = '<li><a href="#" class="link-secondary">Link 1</a></li>
            <li><a href="#" class="link-secondary">Link 2</a></li>
            <li><a href="#" class="link-secondary">Link 3</a></li>'
            ) }}
        {% endblock %}
    </div>

    <script type="text/javascript" data-main="/js/app/main.js" src="/js/app/vendor/require.js"></script>

</body>
</html>
