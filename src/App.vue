
<template>
  <header class="w-full flex flex-col items-center overflow-x-hidden h-auto">
    <div class="w-full h-24 flex justify-between  items-center container max-w-screen-xl px-10 md:text-base sm:text-sm text-xs">
      <span class="dark:text-white text-black font-mono">IV. Portfolio</span>
      <nav class="dark:text-white text-black space-x-4 md:space-x-6 flex font-mono items-center">
        <a id="scroll-project-button" class="hover:text-indigo-400" href="#">Projects</a>
        <a id="scroll-resume-button" class="hover:text-pink-400" href="#">Resume</a>
        <a @click="sendEmail()" class="hover:text-[#33D2FF]" href="#">Contact</a>
        <SunIcon @click="setDarkMode" class="h-7 text-black dark:text-white cursor-pointer"/>
      </nav>
    </div>

    <div class="w-full h-72 mt-48 md:mt-20 px-10 md:max-w-screen-xl flex items-center">
      <div class="dark:text-white text-black  font-mono space-y-10">
        <span>Hey, I'm</span>
        <h1 class="text-6xl w-fit bg-gradient-to-r from-[#9845E8] via-[#33D2FF] to-[#DD5789] bg-clip-text text-transparent drop-shadow-xl">Ivan Vorobei</h1>
        <p class="sm:hidden md:hidden lg:hidden">I'm a front-end developer with real working experience in creating user-friendly and stylish web applications using Vue.js and Tailwind CSS. 
          <br><br>I work with APIs to integrate external services and add interactivity to websites. I develop custom websites, ranging from small to medium complexity projects. <br><br>I can implement any design and quickly make a website interactive using JavaScript, providing efficient and effective solutions for individuals and businesses. </p>
          <p class="hidden sm:block md:block lg:block">I'm a front-end developer with real working experience in creating user-friendly and stylish web applications using Vue.js and Tailwind CSS. 
            I work with APIs to integrate external services and add interactivity to websites. I develop custom websites, ranging from small to medium complexity projects. I can implement any design and quickly make a website interactive using JavaScript, providing efficient and effective solutions for individuals and businesses. </p>
      </div>
      
    </div>




    <section class="w-full h-12 mt-64 md:mt-48 px-10 max-w-screen-xl mx-auto flex items-center dark:text-white text-black space-x-2 font-mono">
      <div class="bg-gradient-to-r from-[#9358F7] to-[#10D7E2] w-48 h-12 p-px rounded-sm">
        <button @click="sendEmail()" class=" dark:bg-[#141414] dark:hover:bg-black hover:bg-[#d3d3d3] shadow-xl bg-white w-full h-full text-center rounded-sm text-sm flex justify-center items-center gap-2">
          <EnvelopeIcon class="h-4"/>
            Send an email
        </button>
      
      </div>
      <!-- <div class="bg-gradient-to-r from-[#6964DE] to-[#FCA6E9] w-48 h-12 p-px rounded-sm">
        <button class=" dark:bg-[#141414] dark:hover:bg-black hover:bg-[#d3d3d3] shadow-xl bg-white w-full h-full text-center rounded-sm text-sm flex justify-center items-center gap-2">
          <svg class="h-4 mb-1 text-black dark:text-white" fill="currentColor" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 552.77 552.77" xml:space="preserve" stroke="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <g> <path d="M17.95,528.854h71.861c9.914,0,17.95-8.037,17.95-17.951V196.8c0-9.915-8.036-17.95-17.95-17.95H17.95 C8.035,178.85,0,186.885,0,196.8v314.103C0,520.816,8.035,528.854,17.95,528.854z"></path> <path d="M17.95,123.629h71.861c9.914,0,17.95-8.036,17.95-17.95V41.866c0-9.914-8.036-17.95-17.95-17.95H17.95 C8.035,23.916,0,31.952,0,41.866v63.813C0,115.593,8.035,123.629,17.95,123.629z"></path> <path d="M525.732,215.282c-10.098-13.292-24.988-24.223-44.676-32.791c-19.688-8.562-41.42-12.846-65.197-12.846 c-48.268,0-89.168,18.421-122.699,55.27c-6.672,7.332-11.523,5.729-11.523-4.186V196.8c0-9.915-8.037-17.95-17.951-17.95h-64.192 c-9.915,0-17.95,8.035-17.95,17.95v314.103c0,9.914,8.036,17.951,17.95,17.951h71.861c9.915,0,17.95-8.037,17.95-17.951V401.666 c0-45.508,2.748-76.701,8.244-93.574c5.494-16.873,15.66-30.422,30.488-40.649c14.83-10.227,31.574-15.343,50.24-15.343 c14.572,0,27.037,3.58,37.393,10.741c10.355,7.16,17.834,17.19,22.436,30.104c4.604,12.912,6.904,41.354,6.904,85.33v132.627 c0,9.914,8.035,17.951,17.949,17.951h71.861c9.914,0,17.949-8.037,17.949-17.951V333.02c0-31.445-1.982-55.607-5.941-72.48 S535.836,228.581,525.732,215.282z"></path> </g> </g> </g></svg>
          LinkedIn
        </button>
      
      </div>
      <div class="bg-gradient-to-r from-[#F4426C] to-[#FBF2B1] w-48 h-12 p-px rounded-sm">
        <button class=" dark:bg-[#141414] dark:hover:bg-black hover:bg-[#d3d3d3] shadow-xl bg-white w-full h-full text-center rounded-sm text-sm flex justify-center items-center gap-2">
          <svg class="h-4 mt-1 text-black dark:text-white" fill="currentColor" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" stroke="currentColor"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M24.75 17.542c-1.469 0-2.849-0.62-4.099-1.635l0.302-1.432 0.010-0.057c0.276-1.521 1.13-4.078 3.786-4.078 1.99 0 3.604 1.615 3.604 3.604 0 1.984-1.615 3.599-3.604 3.599zM24.75 6.693c-3.385 0-6.016 2.198-7.083 5.818-1.625-2.443-2.865-5.38-3.583-7.854h-3.646v9.484c-0.005 1.875-1.521 3.391-3.396 3.396-1.875-0.005-3.391-1.526-3.396-3.396v-9.484h-3.646v9.484c0 3.885 3.161 7.068 7.042 7.068 3.885 0 7.042-3.182 7.042-7.068v-1.589c0.708 1.474 1.578 2.974 2.635 4.297l-2.234 10.495h3.729l1.62-7.615c1.417 0.906 3.047 1.479 4.917 1.479 4 0 7.25-3.271 7.25-7.266 0-4-3.25-7.25-7.25-7.25z"></path> </g></svg>
          Upwork
        </button>
      
      </div> -->
      <div class="bg-gradient-to-r from-[#D24074] to-[#6518B4] w-48 h-12 p-px rounded-sm">
        <a href="https://github.com/garder-les-ciseaux-droits" class=" dark:bg-[#141414] dark:hover:bg-black hover:bg-[#d3d3d3] shadow-xl bg-white w-full h-full text-center rounded-sm text-sm flex justify-center items-center gap-2">
          <svg viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" class="h-6 w-6 text-black dark:text-white" fill="currentColor">
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
            <g id="SVGRepo_iconCarrier">
              <title>github [#142]</title>
              <desc>Created with Sketch.</desc>
              <defs></defs>
              <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                <g id="Dribbble-Light-Preview" transform="translate(-140.000000, -7559.000000)" fill="currentColor">
                  <g id="icons" transform="translate(56.000000, 160.000000)">
                    <path d="M94,7399 C99.523,7399 104,7403.59 104,7409.253 C104,7413.782 101.138,7417.624 97.167,7418.981 C96.66,7419.082 96.48,7418.762 96.48,7418.489 C96.48,7418.151 96.492,7417.047 96.492,7415.675 C96.492,7414.719 96.172,7414.095 95.813,7413.777 C98.04,7413.523 100.38,7412.656 100.38,7408.718 C100.38,7407.598 99.992,7406.684 99.35,7405.966 C99.454,7405.707 99.797,7404.664 99.252,7403.252 C99.252,7403.252 98.414,7402.977 96.505,7404.303 C95.706,7404.076 94.85,7403.962 94,7403.958 C93.15,7403.962 92.295,7404.076 91.497,7404.303 C89.586,7402.977 88.746,7403.252 88.746,7403.252 C88.203,7404.664 88.546,7405.707 88.649,7405.966 C88.01,7406.684 87.619,7407.598 87.619,7408.718 C87.619,7412.646 89.954,7413.526 92.175,7413.785 C91.889,7414.041 91.63,7414.493 91.54,7415.156 C90.97,7415.418 89.522,7415.871 88.63,7414.304 C88.63,7414.304 88.101,7413.319 87.097,7413.247 C87.097,7413.247 86.122,7413.234 87.029,7413.87 C87.029,7413.87 87.684,7414.185 88.139,7415.37 C88.139,7415.37 88.726,7417.2 91.508,7416.58 C91.513,7417.437 91.522,7418.245 91.522,7418.489 C91.522,7418.76 91.338,7419.077 90.839,7418.982 C86.865,7417.627 84,7413.783 84,7409.253 C84,7403.59 88.478,7399 94,7399" id="github-[#142]"> </path>
                  </g>
                </g>
              </g>
            </g>
          </svg>
          
          GitHub
        </a>
      </div>
    </section>
  </header>

  <main id="project-section"  class="w-full max-w-screen-xl px-10 mt-24 md:mt-32 mx-auto h-auto  dark:text-white text-black overflow-x-hidden">
    <h2 class="font-mono">FEATURED PROJECTS</h2>
    <div class="w-full h-full mt-16 flex flex-col space-y-10 md:space-y-0 md:grid md:grid-rows-3 md:grid-cols-2 md:gap-x-24 md:gap-y-12 ">
      <div class="w-full h-auto bg-transparent hover:bg-black/10 p-2 rounded-lg">
        <img src="/src/assets/websites/site6.png">
        <div class="space-y-2 mt-4 h-24 ">
          <div class=" flex justify-between">
            <span class="font-bold">VTubers Insights</span>
            <a href="https://garder-les-ciseaux-droits.github.io/vtuber-insights/"><svg viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" class="h-6 w-6 text-black dark:text-white" fill="currentColor">
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
              <g id="SVGRepo_iconCarrier">
                <title>github [#142]</title>
                <desc>Created with Sketch.</desc>
                <defs></defs>
                <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                  <g id="Dribbble-Light-Preview" transform="translate(-140.000000, -7559.000000)" fill="currentColor">
                    <g id="icons" transform="translate(56.000000, 160.000000)">
                      <path d="M94,7399 C99.523,7399 104,7403.59 104,7409.253 C104,7413.782 101.138,7417.624 97.167,7418.981 C96.66,7419.082 96.48,7418.762 96.48,7418.489 C96.48,7418.151 96.492,7417.047 96.492,7415.675 C96.492,7414.719 96.172,7414.095 95.813,7413.777 C98.04,7413.523 100.38,7412.656 100.38,7408.718 C100.38,7407.598 99.992,7406.684 99.35,7405.966 C99.454,7405.707 99.797,7404.664 99.252,7403.252 C99.252,7403.252 98.414,7402.977 96.505,7404.303 C95.706,7404.076 94.85,7403.962 94,7403.958 C93.15,7403.962 92.295,7404.076 91.497,7404.303 C89.586,7402.977 88.746,7403.252 88.746,7403.252 C88.203,7404.664 88.546,7405.707 88.649,7405.966 C88.01,7406.684 87.619,7407.598 87.619,7408.718 C87.619,7412.646 89.954,7413.526 92.175,7413.785 C91.889,7414.041 91.63,7414.493 91.54,7415.156 C90.97,7415.418 89.522,7415.871 88.63,7414.304 C88.63,7414.304 88.101,7413.319 87.097,7413.247 C87.097,7413.247 86.122,7413.234 87.029,7413.87 C87.029,7413.87 87.684,7414.185 88.139,7415.37 C88.139,7415.37 88.726,7417.2 91.508,7416.58 C91.513,7417.437 91.522,7418.245 91.522,7418.489 C91.522,7418.76 91.338,7419.077 90.839,7418.982 C86.865,7417.627 84,7413.783 84,7409.253 C84,7403.59 88.478,7399 94,7399" id="github-[#142]"> </path>
                    </g>
                  </g>
                </g>
              </g>
            </svg>
            </a>
          </div>
          <p class="font-thin text-sm">Fully working analytics platform interface and API connectivity. </p>
          <p class="font-thin text-indigo-400 text-sm">Vue.js, Tailwind, JavaScript</p>
        </div>
      </div>
      <div class="w-full h-auto bg-transparent hover:bg-black/10 p-2 rounded-lg">
        <img src="/src/assets/websites/site2.png">
        <div class="space-y-2 mt-4 h-24 ">
          <div class="flex justify-between ">
            <span class="font-bold">ChatGPT Interface</span>
            <a href="https://garder-les-ciseaux-droits.github.io/chat-got-project/"><svg viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" class="h-6 w-6 text-black dark:text-white" fill="currentColor">
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
              <g id="SVGRepo_iconCarrier">
                <title>github [#142]</title>
                <desc>Created with Sketch.</desc>
                <defs></defs>
                <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                  <g id="Dribbble-Light-Preview" transform="translate(-140.000000, -7559.000000)" fill="currentColor">
                    <g id="icons" transform="translate(56.000000, 160.000000)">
                      <path d="M94,7399 C99.523,7399 104,7403.59 104,7409.253 C104,7413.782 101.138,7417.624 97.167,7418.981 C96.66,7419.082 96.48,7418.762 96.48,7418.489 C96.48,7418.151 96.492,7417.047 96.492,7415.675 C96.492,7414.719 96.172,7414.095 95.813,7413.777 C98.04,7413.523 100.38,7412.656 100.38,7408.718 C100.38,7407.598 99.992,7406.684 99.35,7405.966 C99.454,7405.707 99.797,7404.664 99.252,7403.252 C99.252,7403.252 98.414,7402.977 96.505,7404.303 C95.706,7404.076 94.85,7403.962 94,7403.958 C93.15,7403.962 92.295,7404.076 91.497,7404.303 C89.586,7402.977 88.746,7403.252 88.746,7403.252 C88.203,7404.664 88.546,7405.707 88.649,7405.966 C88.01,7406.684 87.619,7407.598 87.619,7408.718 C87.619,7412.646 89.954,7413.526 92.175,7413.785 C91.889,7414.041 91.63,7414.493 91.54,7415.156 C90.97,7415.418 89.522,7415.871 88.63,7414.304 C88.63,7414.304 88.101,7413.319 87.097,7413.247 C87.097,7413.247 86.122,7413.234 87.029,7413.87 C87.029,7413.87 87.684,7414.185 88.139,7415.37 C88.139,7415.37 88.726,7417.2 91.508,7416.58 C91.513,7417.437 91.522,7418.245 91.522,7418.489 C91.522,7418.76 91.338,7419.077 90.839,7418.982 C86.865,7417.627 84,7413.783 84,7409.253 C84,7403.59 88.478,7399 94,7399" id="github-[#142]"> </path>
                    </g>
                  </g>
                </g>
              </g>
            </svg>
            </a>
          </div>
          <p class="font-thin text-sm">Implemented interface using the OpenAI API</p>
          <p class="font-thin text-indigo-400 text-sm">Vue.js, Tailwind</p>
        </div>
      </div>
      <div class="w-full h-auto bg-transparent hover:bg-black/10 p-2 rounded-lg">
        <img src="/src/assets/websites/site7.png">
        <div class="space-y-2 mt-4 h-24 ">
          <div class="flex justify-between">
            <span class="font-bold">Livermore Trading Tables</span>
            <a href="https://garder-les-ciseaux-droits.github.io/livermores-tables/"><svg viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" class="h-6 w-6 text-black dark:text-white" fill="currentColor">
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
              <g id="SVGRepo_iconCarrier">
                <title>github [#142]</title>
                <desc>Created with Sketch.</desc>
                <defs></defs>
                <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                  <g id="Dribbble-Light-Preview" transform="translate(-140.000000, -7559.000000)" fill="currentColor">
                    <g id="icons" transform="translate(56.000000, 160.000000)">
                      <path d="M94,7399 C99.523,7399 104,7403.59 104,7409.253 C104,7413.782 101.138,7417.624 97.167,7418.981 C96.66,7419.082 96.48,7418.762 96.48,7418.489 C96.48,7418.151 96.492,7417.047 96.492,7415.675 C96.492,7414.719 96.172,7414.095 95.813,7413.777 C98.04,7413.523 100.38,7412.656 100.38,7408.718 C100.38,7407.598 99.992,7406.684 99.35,7405.966 C99.454,7405.707 99.797,7404.664 99.252,7403.252 C99.252,7403.252 98.414,7402.977 96.505,7404.303 C95.706,7404.076 94.85,7403.962 94,7403.958 C93.15,7403.962 92.295,7404.076 91.497,7404.303 C89.586,7402.977 88.746,7403.252 88.746,7403.252 C88.203,7404.664 88.546,7405.707 88.649,7405.966 C88.01,7406.684 87.619,7407.598 87.619,7408.718 C87.619,7412.646 89.954,7413.526 92.175,7413.785 C91.889,7414.041 91.63,7414.493 91.54,7415.156 C90.97,7415.418 89.522,7415.871 88.63,7414.304 C88.63,7414.304 88.101,7413.319 87.097,7413.247 C87.097,7413.247 86.122,7413.234 87.029,7413.87 C87.029,7413.87 87.684,7414.185 88.139,7415.37 C88.139,7415.37 88.726,7417.2 91.508,7416.58 C91.513,7417.437 91.522,7418.245 91.522,7418.489 C91.522,7418.76 91.338,7419.077 90.839,7418.982 C86.865,7417.627 84,7413.783 84,7409.253 C84,7403.59 88.478,7399 94,7399" id="github-[#142]"> </path>
                    </g>
                  </g>
                </g>
              </g>
            </svg>
            </a>
          </div>
          <p class="font-thin text-sm">Special Jesse Livermore's tables for stock trading with local server and custom API.</p>
          <p class="font-thin text-indigo-400 text-sm">JavaScript, HTML, CSS</p>
        </div>
      </div>
      <div class="w-full h-auto bg-transparent hover:bg-black/10 p-2 rounded-lg">
        <img src="/src/assets/websites/site1.png">
        <div class="space-y-2 mt-4 h-24 ">
          <div class="flex justify-between ">
            <span class="font-bold">Nail Courses(Meow)</span>
            <a href="https://garder-les-ciseaux-droits.github.io/eva-website/"><svg viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" class="h-6 w-6 text-black dark:text-white" fill="currentColor">
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
              <g id="SVGRepo_iconCarrier">
                <title>github [#142]</title>
                <desc>Created with Sketch.</desc>
                <defs></defs>
                <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                  <g id="Dribbble-Light-Preview" transform="translate(-140.000000, -7559.000000)" fill="currentColor">
                    <g id="icons" transform="translate(56.000000, 160.000000)">
                      <path d="M94,7399 C99.523,7399 104,7403.59 104,7409.253 C104,7413.782 101.138,7417.624 97.167,7418.981 C96.66,7419.082 96.48,7418.762 96.48,7418.489 C96.48,7418.151 96.492,7417.047 96.492,7415.675 C96.492,7414.719 96.172,7414.095 95.813,7413.777 C98.04,7413.523 100.38,7412.656 100.38,7408.718 C100.38,7407.598 99.992,7406.684 99.35,7405.966 C99.454,7405.707 99.797,7404.664 99.252,7403.252 C99.252,7403.252 98.414,7402.977 96.505,7404.303 C95.706,7404.076 94.85,7403.962 94,7403.958 C93.15,7403.962 92.295,7404.076 91.497,7404.303 C89.586,7402.977 88.746,7403.252 88.746,7403.252 C88.203,7404.664 88.546,7405.707 88.649,7405.966 C88.01,7406.684 87.619,7407.598 87.619,7408.718 C87.619,7412.646 89.954,7413.526 92.175,7413.785 C91.889,7414.041 91.63,7414.493 91.54,7415.156 C90.97,7415.418 89.522,7415.871 88.63,7414.304 C88.63,7414.304 88.101,7413.319 87.097,7413.247 C87.097,7413.247 86.122,7413.234 87.029,7413.87 C87.029,7413.87 87.684,7414.185 88.139,7415.37 C88.139,7415.37 88.726,7417.2 91.508,7416.58 C91.513,7417.437 91.522,7418.245 91.522,7418.489 C91.522,7418.76 91.338,7419.077 90.839,7418.982 C86.865,7417.627 84,7413.783 84,7409.253 C84,7403.59 88.478,7399 94,7399" id="github-[#142]"> </path>
                    </g>
                  </g>
                </g>
              </g>
            </svg>
            </a>
          </div>
          <p class="font-thin text-sm">Custom website for selling courses through social media. </p>
          <p class="font-thin text-indigo-400 text-sm">Vue.js, Tailwind, JavaScript</p>
        </div>
      </div>
      

      <div class="w-full h-auto bg-transparent hover:bg-black/10 p-2 rounded-lg">
        <img src="/src/assets/websites/site3-2.png">
        <div class="space-y-2 mt-4 h-24 ">
          <div class="flex justify-between">
            <span class="font-bold">Tournaments Website</span>
            <a href="https://garder-les-ciseaux-droits.github.io/tournament-website/"><svg viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" class="h-6 w-6 text-black dark:text-white" fill="currentColor">
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
              <g id="SVGRepo_iconCarrier">
                <title>github [#142]</title>
                <desc>Created with Sketch.</desc>
                <defs></defs>
                <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                  <g id="Dribbble-Light-Preview" transform="translate(-140.000000, -7559.000000)" fill="currentColor">
                    <g id="icons" transform="translate(56.000000, 160.000000)">
                      <path d="M94,7399 C99.523,7399 104,7403.59 104,7409.253 C104,7413.782 101.138,7417.624 97.167,7418.981 C96.66,7419.082 96.48,7418.762 96.48,7418.489 C96.48,7418.151 96.492,7417.047 96.492,7415.675 C96.492,7414.719 96.172,7414.095 95.813,7413.777 C98.04,7413.523 100.38,7412.656 100.38,7408.718 C100.38,7407.598 99.992,7406.684 99.35,7405.966 C99.454,7405.707 99.797,7404.664 99.252,7403.252 C99.252,7403.252 98.414,7402.977 96.505,7404.303 C95.706,7404.076 94.85,7403.962 94,7403.958 C93.15,7403.962 92.295,7404.076 91.497,7404.303 C89.586,7402.977 88.746,7403.252 88.746,7403.252 C88.203,7404.664 88.546,7405.707 88.649,7405.966 C88.01,7406.684 87.619,7407.598 87.619,7408.718 C87.619,7412.646 89.954,7413.526 92.175,7413.785 C91.889,7414.041 91.63,7414.493 91.54,7415.156 C90.97,7415.418 89.522,7415.871 88.63,7414.304 C88.63,7414.304 88.101,7413.319 87.097,7413.247 C87.097,7413.247 86.122,7413.234 87.029,7413.87 C87.029,7413.87 87.684,7414.185 88.139,7415.37 C88.139,7415.37 88.726,7417.2 91.508,7416.58 C91.513,7417.437 91.522,7418.245 91.522,7418.489 C91.522,7418.76 91.338,7419.077 90.839,7418.982 C86.865,7417.627 84,7413.783 84,7409.253 C84,7403.59 88.478,7399 94,7399" id="github-[#142]"> </path>
                    </g>
                  </g>
                </g>
              </g>
            </svg>
            </a>
          </div>
          <p class="font-thin text-sm">Completely replicated main page site by ready-made design</p>
          <p class="font-thin text-indigo-400 text-sm">Vue.js, Tailwind</p>
        </div>
      </div>
      <div class="w-full h-auto bg-transparent hover:bg-black/10 p-2 rounded-lg">
        <img src="/src/assets/websites/site4.png">
        <div class="space-y-2 mt-4 h-24 ">
          <div class="flex justify-between">
            <span class="font-bold">Luxury Castle Selling</span>
            <a href="https://garder-les-ciseaux-droits.github.io/castle-selling/#/"><svg viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" class="h-6 w-6 text-black dark:text-white" fill="currentColor">
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
              <g id="SVGRepo_iconCarrier">
                <title>github [#142]</title>
                <desc>Created with Sketch.</desc>
                <defs></defs>
                <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                  <g id="Dribbble-Light-Preview" transform="translate(-140.000000, -7559.000000)" fill="currentColor">
                    <g id="icons" transform="translate(56.000000, 160.000000)">
                      <path d="M94,7399 C99.523,7399 104,7403.59 104,7409.253 C104,7413.782 101.138,7417.624 97.167,7418.981 C96.66,7419.082 96.48,7418.762 96.48,7418.489 C96.48,7418.151 96.492,7417.047 96.492,7415.675 C96.492,7414.719 96.172,7414.095 95.813,7413.777 C98.04,7413.523 100.38,7412.656 100.38,7408.718 C100.38,7407.598 99.992,7406.684 99.35,7405.966 C99.454,7405.707 99.797,7404.664 99.252,7403.252 C99.252,7403.252 98.414,7402.977 96.505,7404.303 C95.706,7404.076 94.85,7403.962 94,7403.958 C93.15,7403.962 92.295,7404.076 91.497,7404.303 C89.586,7402.977 88.746,7403.252 88.746,7403.252 C88.203,7404.664 88.546,7405.707 88.649,7405.966 C88.01,7406.684 87.619,7407.598 87.619,7408.718 C87.619,7412.646 89.954,7413.526 92.175,7413.785 C91.889,7414.041 91.63,7414.493 91.54,7415.156 C90.97,7415.418 89.522,7415.871 88.63,7414.304 C88.63,7414.304 88.101,7413.319 87.097,7413.247 C87.097,7413.247 86.122,7413.234 87.029,7413.87 C87.029,7413.87 87.684,7414.185 88.139,7415.37 C88.139,7415.37 88.726,7417.2 91.508,7416.58 C91.513,7417.437 91.522,7418.245 91.522,7418.489 C91.522,7418.76 91.338,7419.077 90.839,7418.982 C86.865,7417.627 84,7413.783 84,7409.253 C84,7403.59 88.478,7399 94,7399" id="github-[#142]"> </path>
                    </g>
                  </g>
                </g>
              </g>
            </svg>
            </a>
          </div>
          <p class="font-thin text-sm">A catalog of castles with personalized business information.</p>
          <p class="font-thin text-indigo-400 text-sm">Vue.js, Tailwind</p>
        </div>
      </div>

      
     
      
      
    </div>
  </main>

  <section id="resume-section"  class="w-full max-w-screen-xl px-10 mt-48 mx-auto h-auto overflow-y-hidden md:h-[20rem] dark:text-white text-black grid grid-cols-1 md:flex overflow-x-hidden">
    <div class="h-16 w-full md:w-1/4 md:h-full font-mono md:text-base text-sm">
      <h3>EXPERIENCE</h3>
    </div>
    <div class="w-full md:w-3/4 h-[30rem] md:h-[50rem] flex flex-col">
      <div class="w-full h-48 text-start ">
        <p class="flex justify-between">
          <span class="text-sm md:text-lg font-bold">1 YEAR OF REAL FREELANCE EXPERIENCE WITH INDIVIDUALS AND BUSINESS</span>
          <span class="font-thin text-xs md:text-sm">June 2023 - Present</span>
        </p>
        <p class="text-indigo-400 font-thin">Online</p>
        <div class="mt-6 space-y-6 md:text-base text-sm">
          <p class=" text-opacity-80 dark:text-white text-black">— developed my first personalized <span class="font-bold">ChatGPT project</span> with OpenAI API integration</p>

          <p class="text-opacity-80 dark:text-white text-black">— finished the first freelance project <span class="font-bold">"Nail Courses (Meow)"</span>  for online sales of manicure courses</p>

          <p class=" text-opacity-80 dark:text-white text-black">— developed <span class="font-bold"> Tournament Website</span> with Figma ready-made design for a local Tournament Community</p>

          <p class=" text-opacity-80 dark:text-white text-black">— worked on <span class="font-bold">VTubers Insights</span> for live viewer predictions for a local startup. Made a full-fledged interface ready for API integration</p>

          <p class="text-opacity-80 dark:text-white text-black">— created <span class="font-bold">Livermore Trading Tables</span> for a stock swing-trader</p>
  
        </div>
        
      </div>
    </div>
  </section>

  <section class="w-full max-w-screen-xl px-10 mt-24 mx-auto h-auto overflow-y-hidden  dark:text-white text-black grid grid-cols-1 md:flex overflow-x-hidden">
    <div class="w-full h-16 md:w-1/4 md:h-full font-mono  md:text-base text-sm">
      <h3>SKILLS</h3>
    </div>
    <div class="w-full md:w-3/4 h-[45rem] md:h-[35rem] flex flex-col">
      <div class="w-full h-48 text-start ">
        <p class="flex justify-between">
          <span class="text-sm md:text-lg font-bold uppercase">A comprehensive set of skills and tools for creating web applications of varying complexity</span>
        </p>
        <p class="text-indigo-400 font-thin">Front-End development</p>
        <div class="mt-6 space-y-6 md:text-base text-sm">
          <p class=" text-opacity-80 dark:text-white text-black">— <span class="font-bold">Vue.js</span> offers a high-speed performance thanks to its virtual DOM, component-based architecture, and two-way binding.<br><br><span class="darK:font-thin font-light">Also, over 700,000 web applications have been designed with the help of this front-end framework, including popular brands such as Alibaba, Reuters, 9gag, Xiaomi, and Ride Receipts</span></p>

          <p class="text-opacity-80 dark:text-white text-black">—  <span class="font-bold">Tailwind CSS</span>, a utility-first CSS framework designed to enable users to create applications faster and easier.</p>

          <p class=" text-opacity-80 dark:text-white text-black">— <span class="font-bold ">Git</span>, a mature, actively maintained open source revision control system used by thousands of developers around the world.</p>

          <p class=" text-opacity-80 dark:text-white text-black font-bold">— HTML, CSS, SaaS</p>

          <p class="text-opacity-80 dark:text-white text-black">— <span class="font-bold ">JavaScript</span>, a Programming Language for the Web. It can update and change both HTML and CSS. JavaScript can calculate, manipulate and validate data.</p>
  
          <p class="text-opacity-80 dark:text-white text-black">— <span class="font-bold">AJAX</span> allows web pages to be updated asynchronously by exchanging data with a web server behind the scenes.</p>
        </div>
      </div>
    </div>
  </section>
  <footer class="w-full overflow-y-hidden  max-w-screen-xl h-auto pb-24 md:pb-0 md:h-[15rem]   mt-12  flex mx-auto px-10 flex-col justify-start items-center overflow-x-hidden">
    <div class="w-full h-2 border-t dark:border-white border-black">
     
    </div>
    <div class="w-full h-full md:h-[17rem] grid grid-cols-1 md:flex  md:justify-between mt-12 md:mt-24">
      <div class="w-full hidden md:w-64 h-24  md:h-full md:flex justify-start items-start">
        <span class="uppercase dark:font-thin font-light dark:text-white text-black text-sm md:text-lg">Contact</span>
      </div>
      
      <div class="w-full md:w-auto h-12  md:h-full flex justify-center items-start space-x-4 text-black dark:text-white">
        <div class="border w-48 h-12 p-px rounded-sm">
          <button @click="sendEmail()" class=" dark:bg-[#141414] dark:hover:bg-black hover:bg-[#d3d3d3] shadow-xl bg-white w-full h-full text-center rounded-sm text-sm flex justify-center items-center gap-2">
            <EnvelopeIcon class="h-4"/>
              Send an email
          </button>
        
        </div>
        <div class="border w-48 h-12 p-px rounded-sm">
          <a href="https://github.com/garder-les-ciseaux-droits" class=" dark:bg-[#141414] dark:hover:bg-black hover:bg-[#d3d3d3] shadow-xl bg-white w-full h-full text-center rounded-sm text-sm flex justify-center items-center gap-2">
            <svg viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" class="h-6 w-6 text-black dark:text-white" fill="currentColor">
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
              <g id="SVGRepo_iconCarrier">
                <title>github [#142]</title>
                <desc>Created with Sketch.</desc>
                <defs></defs>
                <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                  <g id="Dribbble-Light-Preview" transform="translate(-140.000000, -7559.000000)" fill="currentColor">
                    <g id="icons" transform="translate(56.000000, 160.000000)">
                      <path d="M94,7399 C99.523,7399 104,7403.59 104,7409.253 C104,7413.782 101.138,7417.624 97.167,7418.981 C96.66,7419.082 96.48,7418.762 96.48,7418.489 C96.48,7418.151 96.492,7417.047 96.492,7415.675 C96.492,7414.719 96.172,7414.095 95.813,7413.777 C98.04,7413.523 100.38,7412.656 100.38,7408.718 C100.38,7407.598 99.992,7406.684 99.35,7405.966 C99.454,7405.707 99.797,7404.664 99.252,7403.252 C99.252,7403.252 98.414,7402.977 96.505,7404.303 C95.706,7404.076 94.85,7403.962 94,7403.958 C93.15,7403.962 92.295,7404.076 91.497,7404.303 C89.586,7402.977 88.746,7403.252 88.746,7403.252 C88.203,7404.664 88.546,7405.707 88.649,7405.966 C88.01,7406.684 87.619,7407.598 87.619,7408.718 C87.619,7412.646 89.954,7413.526 92.175,7413.785 C91.889,7414.041 91.63,7414.493 91.54,7415.156 C90.97,7415.418 89.522,7415.871 88.63,7414.304 C88.63,7414.304 88.101,7413.319 87.097,7413.247 C87.097,7413.247 86.122,7413.234 87.029,7413.87 C87.029,7413.87 87.684,7414.185 88.139,7415.37 C88.139,7415.37 88.726,7417.2 91.508,7416.58 C91.513,7417.437 91.522,7418.245 91.522,7418.489 C91.522,7418.76 91.338,7419.077 90.839,7418.982 C86.865,7417.627 84,7413.783 84,7409.253 C84,7403.59 88.478,7399 94,7399" id="github-[#142]"> </path>
                    </g>
                  </g>
                </g>
              </g>
            </svg>
            
             GitHub
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>


<script setup>
import { SunIcon, EnvelopeIcon} from '@heroicons/vue/24/solid'

// Add dark-theme by default
document.documentElement.classList.add('dark');

let isDarkMode = true;

function setDarkMode(){
  if(!isDarkMode) {
    document.documentElement.classList.add('dark');
    isDarkMode = !isDarkMode;
  }
   
  else{
    document.documentElement.classList.remove('dark');
    isDarkMode = !isDarkMode;
  }
}

function sendEmail() {
    window.location.href = "mailto:evdevosh@gmail.com?subject=Subject%20of%20the%20email&body=Hello%20there!";
}

document.addEventListener('DOMContentLoaded', function() {
        document.getElementById('scroll-project-button').addEventListener('click', function() {
            document.getElementById('project-section').scrollIntoView({
                behavior: 'smooth'
            });
        });
});

document.addEventListener('DOMContentLoaded', function() {
        document.getElementById('scroll-resume-button').addEventListener('click', function() {
            document.getElementById('resume-section').scrollIntoView({
                behavior: 'smooth'
            });
        });
});

</script>
<style>
html {
  scroll-behavior: smooth;
}

</style>
