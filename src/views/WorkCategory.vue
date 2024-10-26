<script setup>
import { onMounted, ref } from 'vue';
const category = [
{image:'1s', linkuUrl:"boards", label:"Boards", year:"2020"},
{image:'3s', linkuUrl:"", label:"Boards", year:"2020"},
{image:'2s', linkuUrl:"", label:"Boards", year:"2020"},
{image:'4s', linkuUrl:"", label:"Boards", year:"2020"},
{image:'5s', linkuUrl:"", label:"Boards", year:"2020"},
{image:'6s', linkuUrl:"", label:"Boards", year:"2020"}
]
const cateThumb = ref(null);  // Declare a reactive reference
onMounted(() => {
  console.log(`The component is now mounted.`);

  fetch('/data.json') // Adjust the path as necessary
    .then(response => response.json())
    .then(data => {
      cateThumb.value = data;  // Set the value of the reactive reference
      console.log(cateThumb.value);
    })
    .catch(error => console.error('Error fetching JSON:', error));
});

</script>

<template>
           <div className='row'>
                <div className='col col-12 col-sm-4'  v-for="item in cateThumb"  v-bind:key="item.slug">
                       <a className='imgThumb'  :href="`/details/${item.slug}`" >
                       <img :src="`/works/${item.slug}/thumb.png`" className="img-fluid" />
                       <div className='Info'>
                           {{item.title}}<br/>
                          <span>{{item.year}}</span>
                       </div>
                       </a>
                       </div>
           </div>
</template>
