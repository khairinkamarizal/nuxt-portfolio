<script setup lang="ts">
useSeoMeta({
  title: "Work",
  description:
    "Explore my portfolio of web development projects, from e-commerce platforms to SaaS applications.",
  ogTitle: "Work — Portfolio Projects",
  ogDescription:
    "Explore my portfolio of web development projects, from e-commerce platforms to SaaS applications.",
  twitterCard: "summary_large_image",
});

const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description:
      "A modern e-commerce solution built with Vue.js and Nuxt, featuring real-time inventory management, secure payment processing, and seamless checkout experience.",
    image: "bg-gradient-to-br from-blue-500 to-purple-600",
    technologies: ["Vue.js", "Nuxt", "Tailwind CSS", "Stripe", "PostgreSQL"],
    category: "Web Application",
    year: "2024",
    link: "#",
  },
  {
    id: 2,
    title: "SaaS Analytics Dashboard",
    description:
      "A comprehensive analytics dashboard with real-time data visualization, interactive charts, and customizable widgets for business intelligence.",
    image: "bg-gradient-to-br from-green-500 to-blue-600",
    technologies: ["React", "TypeScript", "D3.js", "Node.js", "MongoDB"],
    category: "Dashboard",
    year: "2024",
    link: "#",
  },
  {
    id: 3,
    title: "Mobile Banking App",
    description:
      "A secure mobile banking application with biometric authentication, real-time transactions, and intuitive user interface design.",
    image: "bg-gradient-to-br from-purple-500 to-pink-600",
    technologies: [
      "React Native",
      "TypeScript",
      "Redux",
      "Firebase",
      "Biometric Auth",
    ],
    category: "Mobile App",
    year: "2023",
    link: "#",
  },
  {
    id: 4,
    title: "Portfolio Website",
    description:
      "A responsive portfolio website built with modern web technologies, featuring smooth animations and optimized performance.",
    image: "bg-gradient-to-br from-orange-500 to-red-600",
    technologies: ["Nuxt", "Vue.js", "Tailwind CSS", "Framer Motion", "Vercel"],
    category: "Website",
    year: "2024",
    link: "#",
  },
  {
    id: 5,
    title: "Task Management System",
    description:
      "A collaborative task management system with real-time updates, team collaboration features, and project tracking capabilities.",
    image: "bg-gradient-to-br from-teal-500 to-cyan-600",
    technologies: ["Vue.js", "Socket.io", "Express", "MySQL", "Redis"],
    category: "Web Application",
    year: "2023",
    link: "#",
  },
  {
    id: 6,
    title: "AI-Powered Chatbot",
    description:
      "An intelligent chatbot integrated with OpenAI API, featuring natural language processing and context-aware responses.",
    image: "bg-gradient-to-br from-indigo-500 to-purple-600",
    technologies: ["Python", "FastAPI", "OpenAI API", "React", "WebSocket"],
    category: "AI/ML",
    year: "2024",
    link: "#",
  },
];
</script>

<template>
  <div class="min-h-screen">
    <!-- Header Section -->
    <section class="px-16 py-24">
      <div class="max-w-4xl mx-auto text-center">
        <h1 class="text-5xl font-bold tracking-tight mb-6 dark:text-white">
          My Work
        </h1>
        <p
          class="text-xl text-gray-600 dark:text-gray-300 mb-12 leading-relaxed">
          A collection of projects that showcase my passion for creating
          innovative digital experiences and solving complex problems.
        </p>
      </div>
    </section>

    <!-- Projects Grid -->
    <section class="px-16 pb-24">
      <div class="max-w-7xl mx-auto">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div
            v-for="project in projects"
            :key="project.id"
            class="group cursor-pointer bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300">
            <!-- Project Image -->
            <div class="relative h-48 overflow-hidden">
              <div
                :class="project.image"
                class="w-full h-full group-hover:scale-110 transition-transform duration-500"></div>
              <div
                class="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
                <div
                  class="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <svg
                    class="w-8 h-8 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24">
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                  </svg>
                </div>
              </div>
            </div>

            <!-- Project Content -->
            <div class="p-6">
              <div class="flex justify-between items-start mb-3">
                <span class="text-sm text-blue-500 font-medium">{{
                  project.category
                }}</span>
                <span class="text-sm text-gray-500 dark:text-gray-400">{{
                  project.year
                }}</span>
              </div>

              <h3
                class="text-xl font-semibold mb-3 dark:text-white group-hover:text-blue-500 transition-colors">
                {{ project.title }}
              </h3>

              <p
                class="text-gray-600 dark:text-gray-300 mb-4 text-sm leading-relaxed">
                {{ project.description }}
              </p>

              <!-- Technologies -->
              <div class="flex flex-wrap gap-2 mb-4">
                <span
                  v-for="tech in project.technologies"
                  :key="tech"
                  class="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded-full">
                  {{ tech }}
                </span>
              </div>

              <!-- View Project Link -->
              <a
                :href="project.link"
                class="inline-flex items-center text-blue-500 hover:text-blue-600 font-medium text-sm transition-colors">
                View Project
                <svg
                  class="w-4 h-4 ml-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24">
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Call to Action -->
    <section class="px-16 py-24 bg-gray-50 dark:bg-gray-900">
      <div class="max-w-4xl mx-auto text-center">
        <h2 class="text-3xl font-bold mb-6 dark:text-white">
          Interested in working together?
        </h2>
        <p class="text-lg text-gray-600 dark:text-gray-300 mb-8">
          I'm always excited to take on new challenges and create amazing
          digital experiences.
        </p>
        <NuxtLink
          to="/about"
          class="bg-blue-500 text-white px-8 py-4 rounded-lg font-medium hover:bg-blue-600 transition-colors inline-flex items-center gap-2">
          Get In Touch
          <svg
            class="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
          </svg>
        </NuxtLink>
      </div>
    </section>
  </div>
</template>
