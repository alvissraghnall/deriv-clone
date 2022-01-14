<script lang="ts">
import { Navigate } from "svelte-router-spa";
import { Col, CardText } from "svelte-materialify";

export let items: {name: string, text: string}[];
let linkCheck = "CFDs" || "Options" || "Multipliers";
</script>

{#each items as item}
<Navigate to="{ item.name === linkCheck ? `/trade-types/${item.name.toLowerCase()}` : `/${item.name.toLowerCase()}`}" styles="text-decoration-none hov mt-n4 mb-n7 pb-n8 s-col d-flex width flex-row">
    <Col cols={2} class="ml-n5">
        <img
            src="./assets/{item.name}.svg"
            alt=""
            height={32}
            width={32}
        />
    </Col>
    <Col cols={10} class="ma-0 width">
        <span class="text-h5 mb-1 black-text pl-3 font-weight-bold">{item.name}</span>
        <br />
        
        <p style="width: 100%; font-size: 1.1em;" class="text--disabled ml-2 grey-text text-lighten-1 cardtext font-weight-light">
            {item.text}
        </p>
    </Col>
</Navigate>
{/each}


<style lang="scss">

.cardtext {
    line-height: 1.5;
    width: auto;
    font-size: .1em;
    text-align: left;
    transition: color .5s ease;

    &:hover {
        color: rgb(41, 37, 37) !important;
    }
}

.width {
    width: 100%;
}

.hov {
    transition: background .6s ease-in;
    &:hover {
        background: #d1c4e9 !important;
    }
}
</style>
