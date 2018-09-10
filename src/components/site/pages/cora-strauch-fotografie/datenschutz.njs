{% import 'modules' as modules %}
{% import 'patterns' as patterns %}

{% extends templatePath + "default.njs" %}

{% block pageTitle %}Cora Strauch  Fotografie - Was zählt ist der Moment.{% endblock %}

{% block favicon %}
    {#<link rel="shortcut icon" type="image/x-icon" href="favicon.ico">#}
{% endblock %}

{% block metaTags %}
    <meta name="description" content="Cora Strauch  Fotografie - Was zählt ist der Moment.">
    <meta name="robots" content="index, follow, archive">
    <meta name="twitter:title" content="Cora Strauch  Fotografie - Was zählt ist der Moment.">
    <meta name="twitter:description" content="Cora Strauch  Fotografie - Was zählt ist der Moment.">
    <meta name="twitter:card" content="summary_large_image">
    <meta property="og:url" content="SEITENURL">
    <meta property="og:title" content="Cora Strauch  Fotografie - Was zählt ist der Moment.">
    <meta property="og:description" content="Cora Strauch  Fotografie - Was zählt ist der Moment.">
    <meta property="og:type" content="website">
    <meta property="og:locale" content="de_DE">
    <meta property="og:site_name" content="Cora Strauch  Fotografie - Was zählt ist der Moment.">
    <meta name="twitter:image" content="/images/1532646286.png">
    <meta property="og:image" content="/images/1532646286.png">
{% endblock %}

{% block cssStyle %}
    <link rel="stylesheet" href="/css/skin.css">
{% endblock %}

{% block navigation %}
    {{ siteHeader.siteHeader(
    logo = '<img src="/images/1532646286.png" class="img-responsive" />'
    ) }}
{% endblock %}

{% block content %}
    {{ modules.imageMood.imageMood (
        space = 'mod-space--large',
        image = '<img src="http://placehold.it/1600x400"
                 srcset="http://placehold.it/1600x400 300w"
                 sizes="100vw"
                 alt="Placeholder"
                 class="img-responsive"
            />'
    )}}

    {{ modules.textInfo.textInfo(
    space = 'mod-space--large',
    text = '<p class="headline-h1">Datenschutzerklärung</p>
    <p class="text-copy"><strong>Allgemeiner Hinweis und Pflichtinformationen</strong></p>
    <p class="text-copy"><strong>Benennung der verantwortlichen Stelle</strong></p>
    <p class="text-copy">Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:</p>
    <p class="text-copy"><span id="s3-t-firma">Name der Firma</span><br><span id="s3-t-ansprechpartner">Ansprechpartner</span><br><span id="s3-t-strasse">Straße und Hausnummer</span><br><span id="s3-t-plz">PLZ</span> <span id="s3-t-ort">Ort</span></p><p></p>
    <p class="text-copy">Die verantwortliche Stelle entscheidet allein oder gemeinsam mit anderen über die Zwecke und Mittel der Verarbeitung von personenbezogenen Daten (z.B. Namen, Kontaktdaten o. Ä.).</p>

    <p class="text-copy"><strong>Widerruf Ihrer Einwilligung zur Datenverarbeitung</strong></p>
    <p class="text-copy">Nur mit Ihrer ausdrücklichen Einwilligung sind einige Vorgänge der Datenverarbeitung möglich. Ein Widerruf Ihrer bereits erteilten Einwilligung ist jederzeit möglich. Für den Widerruf genügt eine formlose Mitteilung per E-Mail. Die Rechtmäßigkeit der bis zum Widerruf erfolgten Datenverarbeitung bleibt vom Widerruf unberührt.</p>

    <p class="text-copy"><strong>Recht auf Beschwerde bei der zuständigen Aufsichtsbehörde</strong></p>
    <p class="text-copy">Als Betroffener steht Ihnen im Falle eines datenschutzrechtlichen Verstoßes ein Beschwerderecht bei der zuständigen Aufsichtsbehörde zu. Zuständige Aufsichtsbehörde bezüglich datenschutzrechtlicher Fragen ist der Landesdatenschutzbeauftragte des Bundeslandes, in dem sich der Sitz unseres Unternehmens befindet. Der folgende Link stellt eine Liste der Datenschutzbeauftragten sowie deren Kontaktdaten bereit: <a href="https://www.bfdi.bund.de/DE/Infothek/Anschriften_Links/anschriften_links-node.html" target="_blank">https://www.bfdi.bund.de/DE/Infothek/Anschriften_Links/anschriften_links-node.html</a>.</p>

    <p class="text-copy"><strong>Recht auf Datenübertragbarkeit</strong></p>
    <p class="text-copy">Ihnen steht das Recht zu, Daten, die wir auf Grundlage Ihrer Einwilligung oder in Erfüllung eines Vertrags automatisiert verarbeiten, an sich oder an Dritte aushändigen zu lassen. Die Bereitstellung erfolgt in einem maschinenlesbaren Format. Sofern Sie die direkte Übertragung der Daten an einen anderen Verantwortlichen verlangen, erfolgt dies nur, soweit es technisch machbar ist.</p>

    <p class="text-copy"><strong>Recht auf Auskunft, Berichtigung, Sperrung, Löschung</strong></p>
    <p class="text-copy">Sie haben jederzeit im Rahmen der geltenden gesetzlichen Bestimmungen das Recht auf unentgeltliche Auskunft über Ihre gespeicherten personenbezogenen Daten, Herkunft der Daten, deren Empfänger und den Zweck der Datenverarbeitung und ggf. ein Recht auf Berichtigung, Sperrung oder Löschung dieser Daten. Diesbezüglich und auch zu weiteren Fragen zum Thema personenbezogene Daten können Sie sich jederzeit über die im Impressum aufgeführten Kontaktmöglichkeiten an uns wenden.</p>

    <p class="text-copy"><strong>SSL- bzw. TLS-Verschlüsselung</strong></p>
    <p class="text-copy">Aus Sicherheitsgründen und zum Schutz der Übertragung vertraulicher Inhalte, die Sie an uns als Seitenbetreiber senden, nutzt unsere Website eine SSL-bzw. TLS-Verschlüsselung. Damit sind Daten, die Sie über diese Website übermitteln, für Dritte nicht mitlesbar. Sie erkennen eine verschlüsselte Verbindung an der „https://“ Adresszeile Ihres Browsers und am Schloss-Symbol in der Browserzeile.</p>

    <p class="text-copy"><strong>Google Web Fonts</strong></p>
    <p class="text-copy">Unsere Website verwendet Web Fonts von Google. Anbieter ist die Google Inc., 1600 Amphitheatre Parkway, Mountain View, CA 94043, USA.</p>
    <p class="text-copy">Durch den Einsatz dieser Web Fonts wird es möglich Ihnen die von uns gewünschte Darstellung unserer Website zu präsentieren, unabhängig davon welche Schriften Ihnen lokal zur Verfügung stehen. Dies erfolgt über den Abruf der Google Web Fonts von einem Server von Google in den USA und der damit verbundenen Weitergabe Ihre Daten an Google. Dabei handelt es sich um Ihre IP-Adresse und welche Seite Sie bei uns besucht haben. Der Einsatz von Google Web Fonts erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Als Betreiber dieser Website haben wir ein berechtigtes Interesse an der optimalen Darstellung und Übertragung unseres Webauftritts.</p>
    <p class="text-copy">Das Unternehmen Google ist für das us-europäische Datenschutzübereinkommen "Privacy Shield" zertifiziert. Dieses Datenschutzübereinkommen soll die Einhaltung des in der EU geltenden Datenschutzniveaus gewährleisten.</p>
    <p class="text-copy">Einzelheiten über Google Web Fonts finden Sie unter: <a href="https://www.google.com/fonts#AboutPlace:about">https://www.google.com/fonts#AboutPlace:about</a> und weitere Informationen in den Datenschutzbestimmungen von Google: <a href="https://policies.google.com/privacy/partners?hl=de">https://policies.google.com/privacy/partners?hl=de</a></p>
    <p class="text-copy"><small>Quelle: Datenschutz-Konfigurator von <a href="http://www.mein-datenschutzbeauftragter.de" target="_blank">mein-datenschutzbeauftragter.de</a></small></p>'
    ) }}

    {{ modules.socialMedia.socialMedia(
        space = 'mod-space',
        twitterUrl = '1',
        twitterText = '1',
        facebookUrl = '1',
        phoneNumber = '01712373225',
        mailAddress = 'corastrauch@gmx.de',
        instagramUser = 'corastrauchfotografie',
        infoTextTwitter = 'Teile meine Seite bei twitter',
        infoTextFacebook = 'Teile meine Seite bei facebook',
        infoTextInstagram = 'Schau dir meine neusten Fotos bei Instagram an',
        infoTextPhone = 'Ich freue mich von dir zu hören!',
        infoTextMail = 'Ich freue mich über deine Nachricht!'
    ) }}
{% endblock %}

{% block footer %}
    {{ siteFooter.siteFooter(
    content = '<li><a href="impressum.html">Impressum</a></li>
            <li><a href="datenschutz.html">Datenschutz</a></li>
            <li><a href="kontakt.html">Kontakt</a></li>'
    ) }}
{% endblock %}
