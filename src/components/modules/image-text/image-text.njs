{% macro imageText() %}

    <div class="image-text mod-space">
        <div class="image-text__col">
            <img src="http://placehold.it/300x200"
                 srcset="http://placehold.it/300x200 300w"
                 sizes="100vw"
                 alt="Placeholder"
                 class="img-responsive"
            />
        </div>
        <div class="image-text__col">
            <p class="text-copy--bold">
                Lorem ipsum dolor sit amet
            </p>
            <p class="text-copy">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore
                et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
                Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit
                amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita
                kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
            </p>
        </div>
    </div>

{% endmacro %}