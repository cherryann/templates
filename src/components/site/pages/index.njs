{% import 'modules' as modules %}
{% import 'patterns' as patterns %}

{% extends templatePath + "default.njs" %}

{% block pageTitle %}Overview{% endblock %}

{% block navigation %}
    {{ siteHeader.siteHeader(
    space = 'mod-space',
    content = '<li><a href="#">HOME</a></li>
            <li><a href="#">LINK 1</a></li>
            <li><a href="#">LINK 2</a></li>
            <li><a href="#">LINK 3</a></li>'
    ) }}
{% endblock %}

{% block content %}

    <div class="mod-space">
        <h1 class="headline-h1">headline-h1</h1>
        <h2 class="headline-h2">headline-h2</h2>
        <h3 class="headline-h3">headline-h3</h3>
        <h3 class="headline-h4">headline-h4</h3>
        <h3 class="headline-h5">headline-h5</h3>
        <h3 class="headline-h6">headline-h6</h3>

        <p class="text-copy text-copy--bold">
            Lorem ipsum dolor sit amet
        </p>
        <p class="text-copy">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore
            et dolore magna aliquyam <strong class="text-copy--bold">sed diam nonumy eirmod</strong> erat, sed diam voluptua.
            At vero eos et accusam et justo duo dolores et ea rebum.
            Stet clita kasd gubergren, no sea Lorem ipsum dolor sit amet. Lorem ipsum dolor sit
            amet, consetetur sadipscing elitr, tempor invidunt ut labore et dolore magna
            aliquyam erat, sed diam voluptua. <a href="#" class="link-primary">At vero eos et accusam</a> et justo duo dolores et ea rebum. Stet clita
            kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
        </p>

        <br />
        <br />
        <a href="#" class="link-primary">Link primary as anchor</a>
        <a href="#" class="link-primary disabled">Link primary as a disabled class</a>
        <span class="link-primary">Link primary as span</span>
        <div class="link-primary">Link primary as div</div>
        <br />
        <br />
        <a href="#" class="link-secondary">Link secondary as anchor</a>
        <a href="#" class="link-secondary disabled">Link secondary as a disabled class</a>
        <span class="link-secondary">Link secondary as span</span>
        <div class="link-secondary">Link secondary as div</div>
        <br />
        <br />
        <button type="submit" class="button-primary">Button primary as button</button>
        <a href="#" class="button-primary">Button primary as anchor</a>
        <span class="button-primary">Button primary as span</span>
        <div class="button-primary">Button primary as div</div>
        <br/>
        <br/>
        <button type="submit" disabled class="button-primary">Button primary as button disabled attribute</button>
        <a href="/" class="button-primary disabled">Button primary as a disabled class</a>
        <br />
        <br />
        <button type="submit" class="button-secondary">Button secondary as button</button>
        <a href="#" class="button-secondary">Button secondary as anchor</a>
        <span class="button-secondary">Button secondary as span</span>
        <div class="button-secondary">Button secondary as div</div>
        <br/>
        <br/>
        <button type="submit" disabled class="button-secondary">Button secondary as button disabled attribute</button>
        <a href="/" class="button-secondary disabled">Button secondary as a disabled class</a>
    </div>

    <h3 class="headline-h3">content-triple</h3>
    {{ modules.contentTriple.contentTriple (
    space = 'mod-space',
    contentLeft = '<h4 class="headline-h4">headline</h4> <p class="text-copy">Lorem ipsum dolor sit
                amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita
                kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
                 <p class="text-copy">Lorem ipsum dolor sit
                amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita
                kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
                <a href="#" class="link-primary">Link primary as anchor</a>',
    contentMiddle = '<img src="http://placehold.it/600x800" class="img-responsive" />',
    contentRight = '<img src="http://placehold.it/600x800" class="img-responsive" />'
    )
    }}

    {{ modules.contentTriple.contentTriple (
    space = 'mod-space--large',
    contentLeft = '<img src="http://placehold.it/600x800" class="img-responsive" />',
    contentMiddle = '<img src="http://placehold.it/600x800" class="img-responsive" />',
    contentRight = '<img src="http://placehold.it/600x800" class="img-responsive" />'
    )
    }}

    <h3 class="headline-h3">image-mood</h3>
    {{ modules.imageMood.imageMood (
    space = 'mod-space--large',
    image = '<img src="http://placehold.it/1600x400"
                 srcset="http://placehold.it/1600x400 300w"
                 sizes="100vw"
                 alt="Placeholder"
                 class="img-responsive"
            />'
    )}}

    <h3 class="headline-h3">contact-info</h3>
    {{ modules.contactInfo.contactInfo (
    space = 'mod-space',
    text = '<p class="text-copy">Lorem ipsum dolor sit
                amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita
                kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>',
    iframeSrc = 'https://www.openstreetmap.org/export/embed.html?bbox=5.977760776877404%2C51.01488777835605%2C6.22306488454342%2C51.109287441033736&amp;layer=mapnik&amp;marker=51.06211167114368%2C6.100412830710411',
    previewUrl = 'https://www.openstreetmap.org/?mlat=51.0621&amp;mlon=6.1004#map=13/51.0621/6.1004s'
    )
    }}

    <h3 class="headline-h3">image-text</h3>
    {{ modules.imageText.imageText(
    space = 'mod-space',
    contentLeft = '<img src="http://placehold.it/300x200"
             srcset="http://placehold.it/300x200 300w"
             sizes="100vw"
             alt="Placeholder"
             class="img-responsive"
        />',
    contentRight = '<p class="headline-h3">
            Lorem ipsum dolor sit amet
        </p>
        <p class="text-copy">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore
            et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
            Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit
            amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna
            aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita
            kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
        </p>' ) }}

    <h3 class="headline-h3">image-mosaic</h3>
    {{ modules.imageMosaic.imageMosaic (
    space = 'mod-space',
    content = '../images/image-mosaic/'
    )
    }}

    <h3 class="headline-h3">text-highlight</h3>
    {{ modules.textHighlight.textHighlight (
    space = 'mod-space',
    text = 'Lorem ipsum dolor sit
                amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita
                kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
    background = 'http://placehold.it/600x400' )
    }}

    <h3 class="headline-h3">social-media</h3>
    {{ modules.socialMedia.socialMedia(
        space = 'mod-space',
        twitterUrl = '1',
        twitterText = '1',
        facebookUrl = '1',
        phoneNumber = '1',
        mailAddress = '1',
        instagramUser = '1',
        infoTextTwitter = 'Lorem ipsum dolor sit
                amet, consetetur sadipscing elitr.',
        infoTextFacebook = '1',
        infoTextInstagram = '1',
        infoTextPhone = '1',
        infoTextMail = '1'
    ) }}

    <h3 class="headline-h3">text-info</h3>
    {{ modules.textInfo.textInfo(
        space = 'mod-space',
        text = '<p class="headline-h1">
            Lorem ipsum dolor sit amet
        </p>
        <p class="text-copy">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, <strong class="text-copy--bold">sed diam nonumy eirmod</strong>
            sed diam nonumy eirmod tempor invidunt ut labore
            et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
            Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit
            amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna
            aliquyam erat, sed diam voluptua. At vero eos <a href="#" class="link-primary">At vero eos et accusam</a>
            et accusam et justo duo dolores et ea rebum. Stet clita
            kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
        </p>
        <p class="headline-h6">
            Lorem ipsum dolor sit amet
        </p>
        <p class="text-copy">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore
            et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
            Stet clita kasd gubergren, <strong class="text-copy--bold">sed diam nonumy eirmod</strong> no sea takimata
            sanctus est <a href="#" class="link-primary"> At vero eos et accusam</a> Lorem ipsum dolor sit amet. Lorem ipsum dolor sit
            amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna
            aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita
            kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
        </p>
        <ul class="list-bullet"><li>List 1</li><li>List 2</li><li>List 3</li><li>List 4</li><li>List 5</li><li>List 6</li></ul>
        <p class="text-copy">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, <strong class="text-copy--bold">sed diam nonumy eirmod</strong>
            sed diam nonumy eirmod tempor invidunt ut labore
            et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
            Stet clita kasd gubergren, no sea takimata <a href="#" class="link-secondary">At vero eos et accusam</a> sanctus est
            Lorem ipsum dolor sit amet. Lorem ipsum dolor sit
            amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna
            aliquyam erat, sed diam voluptua. At vero eos <a href="#" class="link-primary">At vero eos et accusam</a>
            et accusam et justo duo dolores et ea rebum. Stet clita
            kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
        </p>'
    ) }}

{% endblock %}

{% block footer %}
    {{ siteFooter.siteFooter(
    content = '<li><a href="#">Link 1</a></li>
            <li><a href="#">Link 2</a></li>
            <li><a href="#">Link 3</a></li>'
    ) }}
{% endblock %}
