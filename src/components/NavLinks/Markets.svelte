<script lang="ts">
    import { Popover, Row, Col } from "sveltestrap";

    const rows = [
        {name: "Forex", text: "Trade the world’s largest financial market with popular forex pairs."}, 
        {name: "Synthetic Indices", text: "Enjoy synthetic markets that emulate real-world market movements."}, 
        {name: "Cryptocurrencies", text: "Trade with leverage on the price movement of popular crypto-fiat pairs."},
        {name: "Stocks & indices", text: "Predict broader market trends and diversify your risk with stocks & indices."}, 
        {name:  "Commodities", text: "Trade natural resources that are central to the world's economy."}
    ];
</script>

<Popover target="markets" dismissible placement="bottom">
    <Row class="flex-column">
        {#each rows as row}
             <Col class="d-flex">
                <img
                    src="./assets/{row.name}.svg"
                    alt=""
                    height={32}
                    width={32}
                    cols={2}
                />
                <Col>
                    <span class="text-h5 mb-1 black-text pl-3 font-weight-bold title" >{row.name}</span>
                    <p style="width: 100%; font-size: 1.1em;" class="text--disabled ml-2 grey-text text-lighten-1 cardtext font-weight-light">
                    {row.text}
                    </p>
                </Col>
             </Col>
        {/each}
    </Row>
</Popover>

<style lang="scss">
    .title {
        font-size: .9rem !important;
    }
    .cardtext {
        font-size: .85rem !important;
        transition: color .7s ease;
        
        &:hover {
            color: #222220 !important;
        }
    }
    .popover {
        background: white;
    }
</style>
