<template>
<div>

  <div class="block text-center py-10 border-b border-light-gray">
    <div class="text-third text-6xl">
      sudtech job board
    </div>
    <div class="text-second-gray text-2xl">
      sudtech job board connecting the best jobs with top talent
    </div>
  </div>

  <div class="container mx-auto mb-12">
    <div class="py-10 text-2xl text-center font-bold">
      Login
    </div>
    <div class="w-1/3 mx-auto">
      <div>
        <label for="Email">E-Mail Address</label>
        <input type="email" class="px-3 py-1 mb-4 rounded-lg bg-footer w-full">
        <label for="Password">Password</label>
        <input type="password" class="px-3 py-1 mb-4 rounded-lg bg-footer w-full">
      </div>
      <div class="mb-4">
        <input type="checkbox"> <span class="font-light">Remember Me</span>
      </div>
      <div class="flex">
        <button class="px-4 py-2 rounded-sm hover:bg-white hover:text-secondary font-bold border-2 border-secondary bg-secondary text-white focus:outline-none">Login</button>
        <button class="px-4 py-2 ml-6 rounded-sm hover:bg-white hover:text-primary font-bold border-2 border-primary bg-primary text-white focus:outline-none">Register</button>
        <a href="#" class="ml-12 flex text-sm items-center text-second-gray font-thin">Forgot Your Password</a>
      </div>
    </div>
  </div>

</div>


</template>

<script>
  export default {
    name: 'Login',
    props: {}
  }
</script>