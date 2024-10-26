<script setup>

</script>

<template>
  <h1>Contact</h1>
  <div class="row pt-1">
      <div class="col col-6">
<form class="contactForm">
  <div class="form-group">
    <label for="exampleInputEmail1">Name*</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
 
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Email*</label>
    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
  </div>
    <div class="form-group">
    <label for="exampleFormControlTextarea1">Message*</label>
    <textarea class="form-control textaarea"  rows="3"></textarea>
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
      </div>
  </div>
  
</template>