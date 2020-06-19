<template>
  <div>

    <div class="block text-center pb-8 border-b border-light-gray">
      <div class="text-third text-6xl">
        sudtech job board
      </div>
      <div class="px-1 text-second-gray text-2xl">
        sudtech job board connecting the best jobs with top talent
      </div>
    </div>

    <div class="md:flex py-1 px-4 mt-8 justify-between mx-auto w-9/12 md:w-3/5 bg-gray-200">
      <div class="mb-2 md:w-2/3 md:mb-0">
      <select class="h-full w-full py-3 md:py-0" name="" id="">
        <option value=""></option>
      </select>
      </div>
      <div>
        <button class="px-8 py-2 text-2xl w-full hover:bg-white hover:text-primary bg-secondary focus:outline-none text-white rounded-sm">Search</button>
      </div>
    </div>

    <div class="px-4 md:px-16 py-12">
      <div class="text-xl font-bold">
        New Jobs
      </div>
      <a @click="toggle" href="#" v-for="(x, k) in 4" :key="k"
        class="border-b border-gray-300 py-2 px-3 w-full flex flex-wrap justify-between hover:bg-gray-200">
        <div class="flex flex-no-wrap w-full md:w-3/4 flex-col md:flex-row">
          <div class="md:w-1/2 flex">
            <img class="h-4/3 w-4/3 object-cover rounded mr-4 self-start"
              src="https://images.unsplash.com/photo-1549924231-f129b911e442?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80">
            <div class="block">
              <div class="text-dark text-lg">Senior Full Stack Engineer - Laravel</div>
              <div class="text-dark font-light">Givebutter</div>
              <div class="flex">
                <button class="fill-current text-second-gray focus:outline-none">
                  <svg class="h-4 w-4" width="22" height="22" viewBox="0 0 22 22" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd"
                      d="M0 10.9554V11.0446C0.0106637 13.7301 0.98363 16.1885 2.59196 18.0931C3.05715 18.6439 3.57549 19.1485 4.13908 19.5987C4.70631 20.0519 5.31937 20.4501 5.97019 20.7853C6.90271 21.2656 7.91275 21.6165 8.97659 21.8143C9.59145 21.9286 10.2243 21.9918 10.8705 21.9993C10.9136 21.9998 10.9567 22 10.9999 22C14.6894 22 17.9547 20.1836 19.9502 17.3962C20.3681 16.8125 20.7303 16.1861 21.0291 15.525C21.6528 14.1448 21.9999 12.613 21.9999 11C21.9999 7.73978 20.5816 4.81084 18.3283 2.79653C17.8064 2.32998 17.2397 1.91249 16.6355 1.55132C14.9873 0.56615 13.0597 0 10.9999 0C10.888 0 10.7764 0.00167179 10.6653 0.00499153C8.99846 0.0547895 7.42477 0.475413 6.0239 1.18719C5.07085 1.67144 4.19779 2.29045 3.42982 3.01914C2.7166 3.69587 2.09401 4.4672 1.58216 5.31302C1.22108 5.90969 0.915112 6.54343 0.671295 7.20718C0.241844 8.37631 0.00522906 9.63855 0 10.9554ZM19.4812 14.0186C19.8171 13.075 19.9999 12.0588 19.9999 11C19.9999 8.54265 19.0151 6.31533 17.4186 4.6912C16.5975 6.05399 15.5148 7.18424 14.2668 8.0469C14.7351 9.26262 14.9886 10.5603 15.0045 11.8778C15.7692 12.0484 16.5274 12.304 17.2669 12.6488C18.0741 13.0252 18.8141 13.487 19.4812 14.0186ZM14.8413 13.8954C15.3752 14.0321 15.904 14.22 16.4217 14.4614C17.222 14.8346 17.9417 15.3105 18.5723 15.8661C17.0688 18.2008 14.5151 19.7953 11.5788 19.9817C12.5517 19.0585 13.3709 17.9405 13.972 16.6514C14.3909 15.7531 14.678 14.8272 14.8413 13.8954ZM12.9964 11.6219C12.9583 10.7382 12.7898 9.86839 12.5013 9.04079C9.68874 10.2998 6.36584 10.3765 3.35382 8.97197C3.01251 8.81281 2.68319 8.63837 2.36632 8.44983C2.12787 9.25835 1.99991 10.1142 1.99991 11C1.99991 12.9462 2.61763 14.748 3.6677 16.2203C5.83038 13.1875 9.36854 11.4987 12.9964 11.6219ZM5.047 17.7502C6.77258 15.059 9.77137 13.5382 12.8585 13.6191C12.723 14.3586 12.4919 15.093 12.1594 15.8062C11.3777 17.4825 10.1453 18.805 8.67385 19.6965C7.31043 19.3328 6.07441 18.6569 5.047 17.7502ZM10.9999 2C12.7846 2 14.4479 2.51946 15.847 3.41543C15.2113 4.54838 14.3593 5.4961 13.368 6.23057C12.3472 4.57072 10.8752 3.16433 9.02696 2.21692C9.6619 2.07492 10.3222 2 10.9999 2ZM7.80619 3.84582C9.44618 4.61056 10.7474 5.80659 11.6379 7.23588C9.3464 8.24654 6.64722 8.30095 4.19906 7.15936C3.83384 6.98905 3.48541 6.79735 3.15458 6.58645C3.91365 5.24006 5.00929 4.10867 6.32734 3.30645C6.82672 3.44058 7.32138 3.61975 7.80619 3.84582Z" />
                  </svg>
                </button>
                <span class="text-xs text-second-gray pl-1">Remote</span>
              </div>
            </div>
          </div>
          <div class="flex flex-wrap py-4">
            <button
              class="px-2 py-0 mr-1 mb-1 self-center border border-gray-400 rounded-lg shadow-sm focus:outline-none">Laravel</button>
            <button
              class="px-2 py-0 mr-1 mb-1 self-center border border-gray-400 rounded-lg shadow-sm focus:outline-none">Vue.js</button>
            <button
              class="px-2 py-0 mr-1 mb-1 self-center border border-gray-400 rounded-lg shadow-sm focus:outline-none">React</button>
            <button
              class="px-2 py-0 mr-1 mb-1 self-center border border-gray-400 rounded-lg shadow-sm focus:outline-none">Tailwind
              CSS</button>
            <button
              class="px-2 py-0 mr-1 mb-1 self-center border border-gray-400 rounded-lg shadow-sm focus:outline-none">PHP</button>
          </div>
        </div>
        <div class="flex justify-end">
          <div class="flex items-center">
            <button class="fill-current text-second-gray mr-4 focus:outline-none">
              <svg class="h-4 w-4" width="18" height="18" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M11.8283 8.99996L13.2426 10.4142L16.071 7.58575C17.6331 6.02365 17.6331 3.49099 16.071 1.9289C14.5089 0.3668 11.9762 0.3668 10.4141 1.9289L7.58571 4.75732L8.99992 6.17154L11.8283 3.34311C12.6094 2.56206 13.8757 2.56206 14.6568 3.34311C15.4378 4.12416 15.4378 5.39049 14.6568 6.17154L11.8283 8.99996Z" />
                <path
                  d="M8.99996 11.8285L10.4142 13.2427L7.58575 16.0711C6.02365 17.6332 3.49099 17.6332 1.9289 16.0711C0.3668 14.509 0.3668 11.9764 1.9289 10.4143L4.75732 7.58583L6.17154 9.00004L3.34311 11.8285C2.56206 12.6095 2.56206 13.8758 3.34311 14.6569C4.12416 15.4379 5.39049 15.4379 6.17154 14.6569L8.99996 11.8285Z" />
                <path
                  d="M11.8284 7.58568C12.2189 7.19516 12.2189 6.56199 11.8284 6.17147C11.4379 5.78094 10.8047 5.78094 10.4142 6.17147L6.17154 10.4141C5.78101 10.8046 5.78101 11.4378 6.17154 11.8283C6.56206 12.2188 7.19522 12.2188 7.58575 11.8283L11.8284 7.58568Z" />
              </svg>
            </button>
            <span class="mr-4">1w</span>
          </div>
          <div class="flex items-center">
            <button class="px-4 py-2 hover:bg-white hover:text-primary bg-secondary focus:outline-none text-white rounded-sm">
              <router-link to="/postjob/description" class="nav-link">Apply</router-link>
            </button>
          </div>
        </div>
      </a>

      <div class="flex justify-between mt-12">
        <div class="text-xl font-bold">
          Older Jobs
        </div>
        <div class="flex text-second-gray items-end justify-end text-sm">
          Note, these jobs may no longer be available
        </div>
      </div>
      <a href="#" v-for="(y, index) in 2" :key="index"
        class="border-b border-gray-300 py-2 px-3 w-full flex flex-wrap justify-between hover:bg-gray-200">
        <div class="flex flex-no-wrap w-full md:w-3/4 flex-col md:flex-row">
          <div class="md:w-1/2 flex">
            <img class="h-4/3 w-4/3 object-cover rounded mr-4 self-start"
              src="https://images.unsplash.com/photo-1549924231-f129b911e442?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80">
            <div class="block">
              <div class="text-dark text-lg">Senior Full Stack Engineer - Laravel</div>
              <div class="text-dark font-light">Givebutter</div>
              <div class="flex">
                <button class="fill-current text-second-gray focus:outline-none">
                  <svg class="h-4 w-4" width="22" height="22" viewBox="0 0 22 22" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd"
                      d="M0 10.9554V11.0446C0.0106637 13.7301 0.98363 16.1885 2.59196 18.0931C3.05715 18.6439 3.57549 19.1485 4.13908 19.5987C4.70631 20.0519 5.31937 20.4501 5.97019 20.7853C6.90271 21.2656 7.91275 21.6165 8.97659 21.8143C9.59145 21.9286 10.2243 21.9918 10.8705 21.9993C10.9136 21.9998 10.9567 22 10.9999 22C14.6894 22 17.9547 20.1836 19.9502 17.3962C20.3681 16.8125 20.7303 16.1861 21.0291 15.525C21.6528 14.1448 21.9999 12.613 21.9999 11C21.9999 7.73978 20.5816 4.81084 18.3283 2.79653C17.8064 2.32998 17.2397 1.91249 16.6355 1.55132C14.9873 0.56615 13.0597 0 10.9999 0C10.888 0 10.7764 0.00167179 10.6653 0.00499153C8.99846 0.0547895 7.42477 0.475413 6.0239 1.18719C5.07085 1.67144 4.19779 2.29045 3.42982 3.01914C2.7166 3.69587 2.09401 4.4672 1.58216 5.31302C1.22108 5.90969 0.915112 6.54343 0.671295 7.20718C0.241844 8.37631 0.00522906 9.63855 0 10.9554ZM19.4812 14.0186C19.8171 13.075 19.9999 12.0588 19.9999 11C19.9999 8.54265 19.0151 6.31533 17.4186 4.6912C16.5975 6.05399 15.5148 7.18424 14.2668 8.0469C14.7351 9.26262 14.9886 10.5603 15.0045 11.8778C15.7692 12.0484 16.5274 12.304 17.2669 12.6488C18.0741 13.0252 18.8141 13.487 19.4812 14.0186ZM14.8413 13.8954C15.3752 14.0321 15.904 14.22 16.4217 14.4614C17.222 14.8346 17.9417 15.3105 18.5723 15.8661C17.0688 18.2008 14.5151 19.7953 11.5788 19.9817C12.5517 19.0585 13.3709 17.9405 13.972 16.6514C14.3909 15.7531 14.678 14.8272 14.8413 13.8954ZM12.9964 11.6219C12.9583 10.7382 12.7898 9.86839 12.5013 9.04079C9.68874 10.2998 6.36584 10.3765 3.35382 8.97197C3.01251 8.81281 2.68319 8.63837 2.36632 8.44983C2.12787 9.25835 1.99991 10.1142 1.99991 11C1.99991 12.9462 2.61763 14.748 3.6677 16.2203C5.83038 13.1875 9.36854 11.4987 12.9964 11.6219ZM5.047 17.7502C6.77258 15.059 9.77137 13.5382 12.8585 13.6191C12.723 14.3586 12.4919 15.093 12.1594 15.8062C11.3777 17.4825 10.1453 18.805 8.67385 19.6965C7.31043 19.3328 6.07441 18.6569 5.047 17.7502ZM10.9999 2C12.7846 2 14.4479 2.51946 15.847 3.41543C15.2113 4.54838 14.3593 5.4961 13.368 6.23057C12.3472 4.57072 10.8752 3.16433 9.02696 2.21692C9.6619 2.07492 10.3222 2 10.9999 2ZM7.80619 3.84582C9.44618 4.61056 10.7474 5.80659 11.6379 7.23588C9.3464 8.24654 6.64722 8.30095 4.19906 7.15936C3.83384 6.98905 3.48541 6.79735 3.15458 6.58645C3.91365 5.24006 5.00929 4.10867 6.32734 3.30645C6.82672 3.44058 7.32138 3.61975 7.80619 3.84582Z" />
                  </svg>
                </button>
                <span class="text-xs text-second-gray pl-1">Remote</span>
              </div>
            </div>
          </div>
          <div class="flex flex-wrap py-4 md:py-0">
            <button
              class="px-2 py-0 mr-1 mb-1 self-center border border-gray-400 rounded-lg shadow-sm focus:outline-none">Laravel</button>
            <button
              class="px-2 py-0 mr-1 mb-1 self-center border border-gray-400 rounded-lg shadow-sm focus:outline-none">Vue.js</button>
            <button
              class="px-2 py-0 mr-1 mb-1 self-center border border-gray-400 rounded-lg shadow-sm focus:outline-none">React</button>
            <button
              class="px-2 py-0 mr-1 mb-1 self-center border border-gray-400 rounded-lg shadow-sm focus:outline-none">Tailwind
              CSS</button>
            <button
              class="px-2 py-0 mr-1 mb-1 self-center border border-gray-400 rounded-lg shadow-sm focus:outline-none">PHP</button>
          </div>
        </div>
        <div class="flex justify-end">
          <div class="flex items-center">
            <button class="fill-current text-second-gray mr-4 focus:outline-none">
              <svg class="h-4 w-4" width="18" height="18" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M11.8283 8.99996L13.2426 10.4142L16.071 7.58575C17.6331 6.02365 17.6331 3.49099 16.071 1.9289C14.5089 0.3668 11.9762 0.3668 10.4141 1.9289L7.58571 4.75732L8.99992 6.17154L11.8283 3.34311C12.6094 2.56206 13.8757 2.56206 14.6568 3.34311C15.4378 4.12416 15.4378 5.39049 14.6568 6.17154L11.8283 8.99996Z" />
                <path
                  d="M8.99996 11.8285L10.4142 13.2427L7.58575 16.0711C6.02365 17.6332 3.49099 17.6332 1.9289 16.0711C0.3668 14.509 0.3668 11.9764 1.9289 10.4143L4.75732 7.58583L6.17154 9.00004L3.34311 11.8285C2.56206 12.6095 2.56206 13.8758 3.34311 14.6569C4.12416 15.4379 5.39049 15.4379 6.17154 14.6569L8.99996 11.8285Z" />
                <path
                  d="M11.8284 7.58568C12.2189 7.19516 12.2189 6.56199 11.8284 6.17147C11.4379 5.78094 10.8047 5.78094 10.4142 6.17147L6.17154 10.4141C5.78101 10.8046 5.78101 11.4378 6.17154 11.8283C6.56206 12.2188 7.19522 12.2188 7.58575 11.8283L11.8284 7.58568Z" />
              </svg>
            </button>
            <span class="mr-4">1w</span>
          </div>
          <div class="flex items-center">
            <button class="px-4 py-2 hover:bg-white hover:text-primary bg-secondary text-white rounded-sm focus:outline-none">
              <router-link to="/postjob/description" class="nav-link">Apply</router-link>
            </button>
          </div>
        </div>
      </a>
    </div>
  </div>
  <!-- End Cards -->


</template>

<script>
  export default {
    name: 'Home',
    props: {},
    data() {
      return {
        isOpen: false,
      }
    },
    methods: {
      toggle() {
        this.isOpen = !this.isOpen
      },
    }

  }
</script>




