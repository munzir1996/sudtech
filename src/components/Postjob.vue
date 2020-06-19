<template>

  <div class="container mx-auto px-4 mb-12">
    <div class="sm:w-3/4 mx-auto">
      <div>
        <div class="mb-4">
          <label for="Job Title" class="uppercase">Job Title</label>
          <input type="name" class="px-3 py-1 rounded-lg bg-gray-200 w-full">
          <span class="text-second-gray text-sm">Example: Senior Laravel Developer</span>
        </div>
        
        <div class="mb-4">
          <label for="Job Location" class="uppercase">Job Location</label>
          <input type="texr" class="px-3 py-1 rounded-lg bg-gray-200 w-full">
          <span class="text-second-gray text-sm">Example: “Remote”, “Remote, Khartoum Only”, “Bahri”</span>
        </div>
        
        <div class="mb-4">
          <label for="Tags" class="uppercase">Tags</label>
          <input type="text" class="px-3 py-1 rounded-lg bg-gray-200 w-full">
          <span class="text-second-gray text-sm">Max of Five Tags</span>
        </div>

        <div class="mb-4">
          <label for="company Name" class="uppercase">company Name</label>
          <input type="text" class="px-3 py-1 rounded-lg bg-gray-200 w-full">
        </div>
        
        <div class="mb-4">
          <label for="job description" class="uppercase">job description</label>
          <ckeditor :editor="editor" v-model="job_description" :config="editorConfig"></ckeditor>
          <!-- <input type="text" class="px-3 py-1 rounded-lg bg-gray-200 w-full"> -->
        </div>

        <div class="mb-4">
          <label for="job responsibilities" class="uppercase">job responsibilities</label>
          <span class="text-primary ml-3 text-xs">(optional)</span>
          <ckeditor :editor="editor" v-model="job_responsibilities" :config="editorConfig"></ckeditor>
          <!-- <input type="text" class="px-3 py-1 rounded-lg bg-gray-200 w-full"> -->
        </div>

        <div class="mb-4">
          <label for="job requirements" class="uppercase">job requirements</label>
          <span class="text-primary ml-3 text-xs">(optional)</span>
          <ckeditor :editor="editor" v-model="job_requirements" :config="editorConfig"></ckeditor>
          <!-- <input type="text" class="px-3 py-1 rounded-lg bg-gray-200 w-full"> -->
        </div>

        <div class="mb-4">
          <label for="Company Logo" class="uppercase">Company Logo</label>
          <span class="text-primary ml-3 text-xs">(optional)</span>
          <input type="file" class="px-3 py-1 rounded-lg bg-gray-200 w-full">
        </div>

        <div class="mb-4">
          <div class="block">
            <label for="Color" class="uppercase">Color</label>
            <span class="text-primary ml-3 text-xs">(optional)</span>
          </div>
          <input type="checkbox" name="" id="">
          <input type="color" class="mx-1" name="" id="">
          <span class="text-second-gray text-sm">Highlight Your Listing in a Custom Color</span>
        </div>

        <Compact v-model="colors" @change-color="onChange"></Compact>

      </div>
      <div class="flex justify-center mt-10">
        <button class="px-4 py-2 rounded-sm hover:bg-white hover:text-secondary font-bold border-2 border-secondary bg-secondary text-white focus:outline-none">
          Post Job
        </button>
      </div>
    </div>
  </div>


</template>

<script>
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
  export default {
    name: 'PostJob',
    props: {},
    data() {
      return {
        
        editor: ClassicEditor,
        job_description: '',
        job_responsibilities: '',
        job_requirements: '',
        editorConfig: {
            // The configuration of the editor.
            // toolbar: ['Heading', 'bold', 'italic', 'bulletedList', 'numberedList', 'insertTable', 'blockQuote'
            // , 'undo', 'redo' ]
        }
      };
    },
  }
  
</script>