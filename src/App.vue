<template>
  <div id="app" class="font-roboto font-medium"> 
    
    <Header />

    <div>
      <a class="block sm:hidden text-center text-primary text-5xl">
        <router-link to="/" class="nav-link">sudtech</router-link>
      </a>
    </div>

    <router-view class="view"></router-view>

    <Footer />

  </div>
</template>

<script>
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default {
  name: 'App',
  components: {
    Header,
    Footer,
  },
  data() {
    return {
      x: 1,
      y: 1,
    }
  },

}
</script>

<style src="./assets/css/tailwind.css"></style>

