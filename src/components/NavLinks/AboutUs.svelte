<script>
    import { Popover, Row, Col } from "sveltestrap";
    const items = [{
        name: "who we are",
    }, {
        name: 'regulatory information'
    }, {
        name: "why choose us"
    }, {
        name: "partnership programs"
    }, {
        name: 'contact us'
    }, {
        name: "careers"
    }]

</script>

<Popover target="about-us" dismissible placement="bottom" style="max-width: 250px;">
    <Row class="flex-column">
        {#each items as item}
            <a href={item.name.split(" ").join("-")}>
                <Col class="d-flex">
                    <img
                        src="./assets/{item.name}.svg"
                        alt=""
                        height={32}
                        width={32}
                        cols={2}
                    />
                    <Col>
                        <span class="text-capitalize mb-1 black-text pl-3 title" >{item.name}</span>
                        <!-- <p style="width: 100%; font-size: 1.1em;" class="text--disabled ml-2 grey-text text-lighten-1 cardtext font-weight-light">
                        {row.text}
                        </p> -->
                    </Col>
                
                </Col>
            </a>
        {/each}
    </Row>
</Popover>

<style>
a {
    text-decoration: none;
    padding-bottom: .47em;
}    
</style>