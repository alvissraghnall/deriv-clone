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

  onMount(() => {
    window.addEventListener(
      "click",
      function (event) {
        console.log(event.target);
        if (!event.target.closest(".popover")) {
<<<<<<< HEAD
          console.log("click!");
=======
          console.log("closest!");
>>>>>>> 1f65c97c26041af6c425aa8922462616b8ec813f
          closeModal();
        }
      },
      false
    );

    function closeModal() {
      // popover.style.display = "none";
      let popover = document.querySelector(".popover");
      console.log(document.querySelectorAll(".popover"));
      if()
      document.querySelector(".popover").style.display = "none";
    }
  });

  const items/*: { name: string; text: string }[][]*/ = [
    [
      {
        name: "CFDs",
        text:
          "Trade with leverage and tight spreads for better returns on successful trades.",
      },
      {
        name: "Options",
        text: "Earn fixed payouts by predicting an asset's price movement.",
      },
      {
        name: "Multipliers",
        text: "Combine the upside of CFDs with the simplicity of options.",
      },
    ],
    [
      {
        name: "DMT5",
        text:
          "Trade on Deriv MT5 (DMT5), the all-in-one FX and CFD trading platform.",
      },
      {
        name: "DerivX",
        text:
          "Trade FX and CFDs on a customisable, easy-to-use trading platform.",
      },
      {
        name: "DTrader",
        text:
          "A whole new trading experience on a powerful yet easy to use platform.",
      },
    ],
    [
      {
        name: "SmartTrader",
        text: "Trade the world's markets with our popular user platform.",
      },
      {
        name: "DBot",
        text: "Automated trading at your fingertips. No coding required.",
      },
    ],
  ];
</script>

<Popover
  target="trade"
  placement="bottom"
  dismissible
  container="body"
  style="max-width: 990px;"
>
  <Container class="d-flex flex-row">
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
