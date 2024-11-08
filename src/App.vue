<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { onMounted, ref } from 'vue';

const sideNav = ref(null);  // Declare a reactive reference
const isMenu =  ref(null);
onMounted(() => {
  console.log(`The component is now mounted.`);

  fetch('/data.json') // Adjust the path as necessary
    .then(response => response.json())
    .then(data => {
      sideNav.value = data;  // Set the value of the reactive reference
      console.log(sideNav.value);
    })
    .catch(error => console.error('Error fetching JSON:', error));
});

function toggleMenu(){
  isMenu.value = !isMenu.value
}
</script>

<template>
<div class="BodyContainer">
 <div className='container'>
        <div className='row'>
        <div className='col col-12 col-sm-3'>
          <div class="NavContainer mobile"  :class="[isMenu ? 'activeNav' : '']">
            <div class="d-flex justify-content-between align-items-center">
              <a href="/" class="mb-0 bredcrumb">Naresh Dhondi </a>
              <div v-on:click="toggleMenu()" class="d-flex d-sm-none pointer">
               <img :src="`/favicon.png`" class="mlogo"  />
              </div>
            </div>
            
            <div className='navMenu'>
              <div class="d-flex d-sm-none justify-content-end  pointer" v-on:click="toggleMenu()">X</div>
                <h3><a href="/">Home</a></h3>
            <ul>
            <li v-for="item in sideNav" :key="item"><a :href="`/details/${item.slug}`" :class="[item.slug == $route.params.slug ? 'active' : '']">{{item.title}}</a></li>
                 </ul>
            <ul class="mt-4">
                <li><a href='/about'>About</a></li>
                <li><a href='/contact'>Contact</a></li>
            </ul>
            </div>
          </div>
        </div>
        <div className='col col-12 col-sm-9'>
          <div class="rightContainer">
         <router-view v-slot="{ Component }">
            <transition name="fade">
              <component :is="Component" />
            </transition>
          </router-view>
          </div>
        </div>
        </div>
        
    </div>
</div>

</template>

<style scss scoped>

@media (max-width: 768px) {
 .NavContainer.mobile{
        position: fixed;
        padding:30px 16px;
        top: 0;
        background: #fff;
        width: 100%;
        left: 0;
        z-index: 999;

 }
  .NavContainer.mobile h2{margin-bottom: 0;}
  .NavContainer.mobile .navMenu{
       position: absolute;
        top: 0;
        background: #fff;
        margin-top: 0;
        width: 100%;
        padding: 30px;
        display: none;
       left: 0;
        z-index: 9;
        height: 100vh;
        overflow: auto;
  }
}
.NavContainer.mobile.activeNav  .navMenu{ display: block;}
.mlogo{height: 20px;}
</style>
