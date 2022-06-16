<script>
    import { slide } from "svelte/transition";
    import { Button } from "svelte-materialify";
</script>

<section class="intro-section">
    <h3>Simple. Flexible. Reliable.</h3>

    <div class="intro-section-text">
        Trade Forex, Synthetics, stocks & Indices, Cryptocurrencies, and commodities.
    </div>

    <div class="intro-section-flip-animation">
        <p transition:slide={{ duration: 2500 }}> 100+ Tradeable assets </p>
        <p transition:slide={{ duration: 2500, delay: 2500 }}> Sharp prices. </p>
        <p transition:slide={{ duration: 2500, delay: 2500 * 2 }}> 24/7 Trading. </p>
        <p transition:slide={{ duration: 2500, delay: 2500 * 3 }}> Tight Spreads. </p>
        <p transition:slide={{ duration: 2500, delay: 2500 * 4 }}> 20+ years of experience. </p>
    </div>

    <Button type="button" rounded ripple>
        Create free demo account
    </Button>

    <div class="buttom-images-fade">
        
    </div>
</section>

<style>
    .intro-section {
        color: #fff;
        font-size: .5rem;
        font-weight: 600;
        text-align: left;
        background: url("../assets/hero_bg.png");
    }

    .intro-section-text {

    }
</style>