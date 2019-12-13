<template>
  <div id="index">
    <Header></Header>
    <Nav></Nav>
    <router-view></router-view>
    <Footer></Footer>
  </div>
</template>
<script>
import Header from './header'
import Nav from './nav'
import Footer from './footer'

export default {
  name: 'index',
  components: {
    Header,
    Nav,
    Footer,
  }
}
</script>

<style>
</style>
