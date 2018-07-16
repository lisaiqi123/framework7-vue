<template>
  <div id="app" class="views">
    <div class="view view-main">
        <div class="pages toolbar-through">
            <div data-page="index" class="page">
                <router-view/>
                <my-footer></my-footer>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
import myFooter from "./components/footer/footer";
export default {
  name: 'App',
  components:{myFooter}
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
