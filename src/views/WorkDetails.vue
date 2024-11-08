<script setup>
import { onMounted,onUnmounted, onBeforeMount, ref } from 'vue';
import { useRoute } from 'vue-router'

const route = useRoute()

const projectData = ref(null);  // Declare a reactive reference


const details = [
  { image: "1b", label: "" },
  { image: "2b", label: "" },
  { image: "3b", label: "" },
  { image: "4b", label: "" },
];

onMounted(() => {
  console.log(`The component is now mounted.`,  route.params.slug);
  fetch('/data.json') // Adjust the path as necessary
    .then(response => response.json())
    .then(data => {
      let filterdata = data.find((item)=>item.slug ==  route.params.slug);
      console.log(filterdata)
      projectData.value = filterdata  // Set the value of the reactive reference
     
          $('[data-fancybox="gallery"]').fancybox({
            buttons: [
              "slideShow",
              "thumbs",
              "zoom",
              "fullScreen",
              "share",
              "close"
            ],
            loop: false,
            protect: true
          });

    })
    .catch(error => console.error('Error fetching JSON:', error));
});

onUnmounted(() => {
  console.log('Component is unmounted');
});
onBeforeMount(() => {
  console.log('Component is onBeforeMount');
});


const testdata = {
    "naresh":"fasdf",
    "mahesh":"fasdf",
    "charan":"fasdf"
}

function getchData(){

}

</script>





<template>
<div className='row'>
      <div className='col'>
        <h1 v-if="projectData">{{projectData.title}}</h1>
        <div  v-if="projectData">
          <a  className='mb-4 smImage' v-for="item in projectData.data" :key="item.image"   :href="`/works/${projectData.slug}/${item.image}.png`" data-fancybox="gallery">
            <img :src="`/works/${projectData.slug}/${item.image}.png`" className="img-fluid" />
          </a>
        </div>


      </div>
    </div>
</template>

<style>
@media (min-width: 1024px) {
  
}
</style>
