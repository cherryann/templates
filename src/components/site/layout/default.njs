{% import sitePath + "site-head.njs" as siteHead %}
{% import sitePath + "site-foot.njs" as siteFoot %}

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
            {{ siteHead.siteHead() }}
        {% endblock %}

        <main class="site-main site-main--space">
            {% block content %}
            {% endblock %}
        </main>

        {% block footer %}
            {{ siteFoot.siteFoot() }}
        {% endblock %}
    </div>

    <script type="text/javascript" data-main="/js/app/main.js" src="/js/app/vendor/require.js"></script>

</body>
</html>
