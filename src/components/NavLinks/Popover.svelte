<script>
  import { Popover } from "sveltestrap";
  import {
    Col,
    Row,
    Container,
    Card,
    CardTitle,
    CardText,
  } from "svelte-materialify";
  import { Navigate } from "svelte-router-spa";
  import Trade from "./Trade.svelte";
  import { onMount } from "svelte";
  import { items } from "../../ts-utils/trade-items";
</script>

<Popover
  target="trade"
  placement="bottom"
  dismissible
  container="body"
  style="max-width: 990px;"
>
  <Container class="d-flex flex-row bg-light bg-white">
    <Row class="flex-column" width="100%">
      <span class="text--secondary text-overline">Trade Types</span>
      <Trade items={items[0]} />
    </Row>
    <hr width="3px" height="100%" color="grey" />
    <Row class="flex-column" width="100%">
      <span class="text--secondary text-overline">Trading Platforms</span>
      <Trade items={items[1]} />
    </Row>
    <Row
      class="flex-column justify-center align-content-center align-center pt-7"
      width="100%"
    >
      <span class="text--secondary text-overline d-block" />
      <Trade items={items[2]} />
    </Row>
  </Container>
</Popover>

<style>
  .popover:global() {
    border-radius: 7% !important;
    padding-left: 1.3em !important;
  }
</style>
