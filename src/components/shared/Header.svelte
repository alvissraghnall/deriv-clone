<script>
import { Row, Col, Button, Icon } from "svelte-materialify";
import { mdiMenu } from "@mdi/js";
import { Navigate } from "svelte-router-spa";
import { onMount } from "svelte";
import Popover from "../NavLinks/Popover.svelte";

// style="{width > 996 ? "display: flex;" : "display: none;"}"
// style={width < 996 ? "display: block;" : "display: none;"}

let width;
let active = false;

const onFocus = e => {
  console.log(e.target);
  e.target.classList.add("focus");
}

const navClick = e => {
  e.target.style.background = "#212121";
}

onMount( async ()=> {
  width = window.outerWidth;
})

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
        <Icon path={mdiMenu} />
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
        <li class="nav-item" id="trade"><button class="nav-btn" on:click={navClick}>Trade</button></li><Popover />
        <li class="nav-item" id="markets"><button class="nav-btn" on:click={navClick}>Markets</button></li><Popover />
        <li class="nav-item" id="about-us"><button class="nav-btn" on:click={navClick}>About Us</button></li><Popover />
        <li class="nav-item" id="resources"><button class="nav-btn" on:click={navClick}>Resources</button></li><Popover />
      </ul>
    </Col>
    <Col>
      <div class="d-flex justify-end mr-4" style="">
        <Button outlined class="red-text login-btn">Log In</Button>
      </div>
    </Col>
  </Row>
</header>

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

    &:hover {
      color: red;
      background: #212121;
    }

  }
</style>
