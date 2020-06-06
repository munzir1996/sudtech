<template>
<div>

  <div class="container mx-auto px-4 mb-12">
    <div class="sm:w-1/2 mx-auto">
      <div>
        <div class="mb-4">
          <label for="Job Title">Job Title</label>
          <input type="name" class="px-3 py-1 rounded-lg bg-footer w-full">
          <span class="text-second-gray text-sm">Example: Senior Laravel Developer</span>
        </div>
        
        <div class="mb-4">
          <label for="Job Location">Job Location</label>
          <input type="texr" class="px-3 py-1 rounded-lg bg-footer w-full">
          <span class="text-second-gray text-sm">Example: “Remote”, “Remote, Khartoum Only”, “Bahri”</span>
        </div>
        
        <div class="mb-4">
          <label for="URL To Description/Application">URL To Description/Application</label>
          <span class="text-primary ml-3 text-xs">(optional)</span>
          <input type="text" class="px-3 py-1 rounded-lg bg-footer w-full">
          <span class="text-second-gray text-sm">Example: http://yourcomany.com/careerd</span>
        </div>

        <div class="mb-4">
          <label for="Tags">Tags</label>
          <input type="text" class="px-3 py-1 rounded-lg bg-footer w-full">
          <span class="text-second-gray text-sm">Max of Five Tags</span>
        </div>

        <div class="mb-4">
          <label for="Company Name">Company Name</label>
          <input type="text" class="px-3 py-1 rounded-lg bg-footer w-full">
        </div>

        <div class="mb-4">
          <label for="Company Logo">Company Logo</label>
          <span class="text-primary ml-3 text-xs">(optional)</span>
          <input type="text" class="px-3 py-1 rounded-lg bg-footer w-full">
        </div>

        <div class="mb-4">
          <label for="Color">Color</label>
          <span class="text-primary ml-3 text-xs">(optional)</span>
          <input type="text" class="px-3 py-1 rounded-lg bg-footer w-full">
          <span class="text-second-gray text-sm">Highlight Your Listing in a Custom Color</span>
        </div>
      </div>
      <div class="flex justify-center mt-10">
        <button class="px-4 py-2 rounded-sm hover:bg-white hover:text-secondary font-bold border-2 border-secondary bg-secondary text-white focus:outline-none">
          Post Job
        </button>
      </div>
    </div>
  </div>

</div>


</template>

<script>
  export default {
    name: 'Postjob',
    props: {}
  }
</script>