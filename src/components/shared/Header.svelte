<script lang="ts">
import { Row, Col, Container, Button, Icon, NavigationDrawer, Overlay, List, ListItem, ListGroup } from "svelte-materialify";
import { mdiMenu, mdiClose, mdiChevronUp, mdiChevronDown, mdiGavel } from "@mdi/js";
import { Navigate } from "svelte-router-spa";
import { onMount } from "svelte";
import Popover from "../NavLinks/Popover.svelte";
import Markets from "../NavLinks/Markets.svelte";
import AboutUs from "../NavLinks/AboutUs.svelte";
import Resources from "../NavLinks/Resources.svelte";
import Trade from "../NavLinks/Trade.svelte";
import { items } from "../../ts-utils/trade-items";
import { markets } from "../../ts-utils/nav-rows";

// style="{width > 996 ? "display: flex;" : "display: none;"}"
// style={width < 996 ? "display: block;" : "display: none;"}

let width;
let active = false;
let tradeDropDown = false;
let marketsDropDown = false;
let aboutDropDown = false;
let resourcesDropDown = false;
let legalDropDown = false;
let partnerDropDown = false;
let popover;


const onFocus = e => {
  console.log(e.target);
  e.target.classList.add("focus");
}

const navClick = e => {
  e.target.style.background = "#212121";
}

function toggleNavigation(){
  active = !active;
}
</script>

<header height="25px">
  <Row class="justify-space-around align-center">
    <Col class="d-flex flex-row align-center" xs={8} lg={4}>
      <Button
        fab
        depressed
        on:click={toggleNavigation}
        class="d-block d-lg-none"
      >
        <Icon path={!active ? mdiMenu : mdiClose} />
      </Button>
      <div class="font-weight-black title d-flex align-center">
        <span><img
          src="./assets/logo.svg"
          height="{width < 996 ? "17" : "27"}"
          width="{width < 996 ? "100" : "160"}"
          alt="DERIV"
          />
        </span>
        <span class="ml-2 font-weight-black pipe" style="border-right: 5px solid white; width: 2px; height: 2.57em;"></span>
        <span class="text--secondary ml-3 text-h5"> GET TRADING</span>
      </div>
    </Col>
    <Col class="justify-space-between d-none d-lg-flex" >
      <ul style="width: 100%;" class="d-flex flex-row justify-space-between">
        <li class="nav-item"><a href="#" class="nav-btn" id="trade" tabindex="0" on:click={navClick}>Trade</a></li><Popover />
        <li class="nav-item"><a href="#" class="nav-btn" id="markets" tabindex="0" on:click={navClick}>Markets</a></li><Markets />
        <li class="nav-item"><a href="#" class="nav-btn" id="about-us" tabindex="0" on:click={navClick}>About Us</a></li><AboutUs />
        <li class="nav-item"><a href="#" class="nav-btn" id="resources" tabindex="0" on:click={navClick}>Resources</a></li><Resources />
      </ul>
    </Col>
    <Col>
      <div class="d-flex justify-end mr-4" style="">
        <Button outlined class="red-text login-btn">Log In</Button>
      </div>
    </Col>
  </Row>
</header>
<NavigationDrawer style="position: relative; background: grey;" {active}>
  <List>
    <ListGroup bind:tradeDropDown offset={72}>
      
      <span slot="activator"> Trade </span>
      <span slot="append">
        <Icon path={mdiChevronUp} rotate={tradeDropDown ? 0 : 180} />
      </span>
      <Container class="d-flex flex-column">
        <Row class="flex-column" width="100%">
          <span class="text--white text-overline">Trade Types</span>
          <Trade items={items[0]} />
        </Row>
        <hr width="100%" height="3px" color="black" />
        <Row class="flex-column" width="100%">
          <span class="text--white text-overline">Trading Platforms</span>
          <Trade items={items[1].concat(items[2]) } />
        </Row>
      </Container>
    </ListGroup>
    <ListGroup bind:marketsDropDown offset={72}>
      <span slot="activator"> Markets </span>
      <span slot="append">
        <Icon path={mdiChevronUp} rotate={marketsDropDown ? 0 : 180} />
      </span>
      <Row class="flex-column">
        {#each markets as row}
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
    </ListGroup>
    <ListGroup bind:aboutDropDown offset={72}>
      <span slot="activator"> About Us </span>
      <span slot="append">
        <Icon path={mdiChevronUp} rotate={aboutDropDown ? 0 : 180} />
      </span>
      <ListItem>Create</ListItem>
      <ListItem>Read</ListItem>
      <ListItem>Write</ListItem>
      <ListItem>Delete</ListItem>
    </ListGroup>
    <ListGroup bind:resourcesDropDown offset={72}>
      <span slot="activator"> Resources </span>
      <span slot="append">
        <Icon path={mdiChevronUp} rotate={resourcesDropDown ? 0 : 180} />
      </span>
      <ListItem>Create</ListItem>
      <ListItem>Read</ListItem>
      <ListItem>Write</ListItem>
      <ListItem>Delete</ListItem>
    </ListGroup>
    <ListGroup bind:legalDropDown offset={72}>
      <span slot="activator"> Legal </span>
      <span slot="append">
        <Icon path={mdiChevronUp} rotate={legalDropDown ? 0 : 180} />
      </span>
      <ListItem>Create</ListItem>
      <ListItem>Read</ListItem>
      <ListItem>Write</ListItem>
      <ListItem>Delete</ListItem>
    </ListGroup>
    <ListGroup bind:partnerDropDown offset={72}>
      <span slot="activator"> Partner </span>
      <span slot="append">
        <Icon path={mdiChevronUp} rotate={partnerDropDown ? 0 : 180} />
      </span>
      <ListItem>Create</ListItem>
      <ListItem>Read</ListItem>
      <ListItem>Write</ListItem>
      <ListItem>Delete</ListItem>
    </ListGroup>
    
  </List>
</NavigationDrawer>
<Overlay {active} absolute on:click={toggleNavigation} index={1} />


<style lang="scss">
  .nav-item {
    list-style-type: none;
    text-decoration: none !important;
    position: relative;

    &::after {
      position: absolute;
      top: 100%;
      left: 0%;
      width: 0;
      height: 2px;
      background: red;
      content: '';
      transition: width 0.5s ease-in-out;
      display: block;
    }

    &:hover {
      text-decoration: none !important;
    }

    &:hover:after {
      width: 30%;

      // content: "vhv";
    }
  }

  .pipe {
    font-size: 20px;
  }

  .title {
    position: relative;
    top: 10% !important;
    left: .3em;
    line-height: 2;
  }

  .nav-btn {
    border: none;
    padding: 0;
    background: none;
    color: white !important;
    text-decoration: none !important;

    &:hover {
      color: red !important;
      background: #212121;
      font-weight: bold;
    }

  }
</style>
