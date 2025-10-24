<script setup lang="ts">
useSeoMeta({
  title: "About",
  description:
    "Learn more about my journey as a creative designer and developer, my passion for technology, and what drives me to create exceptional digital experiences.",
  ogTitle: "About — Creative Designer & Developer",
  ogDescription:
    "Learn more about my journey as a creative designer and developer, my passion for technology, and what drives me to create exceptional digital experiences.",
  twitterCard: "summary_large_image",
});

const skills = [
  { name: "Frontend Development", level: 95 },
  { name: "UI/UX Design", level: 90 },
  { name: "Vue.js / React", level: 92 },
  { name: "TypeScript", level: 88 },
  { name: "Node.js", level: 85 },
  { name: "Database Design", level: 80 },
];

const experiences = [
  {
    year: "2024",
    title: "Senior Frontend Developer",
    company: "Tech Innovations Inc.",
    description:
      "Leading frontend development for multiple SaaS products, mentoring junior developers, and implementing modern development practices.",
  },
  {
    year: "2022-2023",
    title: "Full Stack Developer",
    company: "Digital Solutions Co.",
    description:
      "Developed full-stack web applications using Vue.js, Node.js, and PostgreSQL. Collaborated with design teams to create intuitive user experiences.",
  },
  {
    year: "2020-2022",
    title: "Frontend Developer",
    company: "StartupXYZ",
    description:
      "Built responsive web applications and mobile-first interfaces. Contributed to open-source projects and maintained high code quality standards.",
  },
];
</script>

<template>
  <div class="min-h-screen">
    <!-- Hero Section -->
    <section class="px-16 py-24">
      <div class="max-w-4xl mx-auto">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h1 class="text-5xl font-bold tracking-tight mb-8 dark:text-white">
              About Me
            </h1>
            <div
              class="space-y-6 text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              <p>
                I'm a passionate creative designer and developer with over 4
                years of experience crafting digital experiences that make a
                difference. My journey began with a curiosity about how things
                work and evolved into a love for creating beautiful, functional
                solutions.
              </p>
              <p>
                I specialize in frontend development using modern frameworks
                like Vue.js and React, but I'm equally comfortable diving into
                backend technologies when needed. My approach combines technical
                expertise with a keen eye for design, ensuring that every
                project I work on is both technically sound and visually
                appealing.
              </p>
              <p>
                When I'm not coding, you'll find me exploring new technologies,
                contributing to open-source projects, or sharing knowledge with
                the developer community. I believe in continuous learning and
                staying up-to-date with the latest industry trends.
              </p>
            </div>
          </div>

          <!-- Profile Image Placeholder -->
          <div class="relative">
            <div
              class="w-80 h-80 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl mx-auto shadow-2xl"></div>
            <div
              class="absolute -bottom-6 -right-6 w-24 h-24 bg-gradient-to-br from-green-400 to-blue-500 rounded-full opacity-80"></div>
          </div>
        </div>
      </div>
    </section>

    <!-- Skills Section -->
    <section class="px-16 py-24 bg-gray-50 dark:bg-gray-900">
      <div class="max-w-4xl mx-auto">
        <h2 class="text-4xl font-bold text-center mb-16 dark:text-white">
          Skills & Expertise
        </h2>
        <div class="space-y-8">
          <div
            v-for="skill in skills"
            :key="skill.name"
            class="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm">
            <div class="flex justify-between items-center mb-3">
              <span class="font-semibold dark:text-white">{{
                skill.name
              }}</span>
              <span class="text-sm text-gray-500 dark:text-gray-400"
                >{{ skill.level }}%</span
              >
            </div>
            <div class="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
              <div
                class="bg-gradient-to-r from-blue-500 to-purple-600 h-3 rounded-full transition-all duration-1000 ease-out"
                :style="{ width: `${skill.level}%` }"></div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Experience Section -->
    <section class="px-16 py-24">
      <div class="max-w-4xl mx-auto">
        <h2 class="text-4xl font-bold text-center mb-16 dark:text-white">
          Professional Experience
        </h2>
        <div class="space-y-8">
          <div
            v-for="exp in experiences"
            :key="exp.year"
            class="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-sm hover:shadow-lg transition-shadow">
            <div class="flex items-start gap-6">
              <div class="flex-shrink-0">
                <div
                  class="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                  <span class="text-white font-bold text-sm">{{
                    exp.year
                  }}</span>
                </div>
              </div>
              <div class="flex-1">
                <h3 class="text-xl font-semibold mb-2 dark:text-white">
                  {{ exp.title }}
                </h3>
                <p class="text-blue-500 font-medium mb-3">{{ exp.company }}</p>
                <p class="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {{ exp.description }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Personal Interests -->
    <section class="px-16 py-24 bg-gray-50 dark:bg-gray-900">
      <div class="max-w-4xl mx-auto">
        <h2 class="text-4xl font-bold text-center mb-16 dark:text-white">
          Beyond Code
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div
            class="text-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-sm">
            <div
              class="w-16 h-16 bg-gradient-to-br from-green-400 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg
                class="w-8 h-8 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
              </svg>
            </div>
            <h3 class="text-xl font-semibold mb-4 dark:text-white">Learning</h3>
            <p class="text-gray-600 dark:text-gray-300">
              Always exploring new technologies, frameworks, and design trends
              to stay at the forefront of innovation.
            </p>
          </div>

          <div
            class="text-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-sm">
            <div
              class="w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg
                class="w-8 h-8 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
              </svg>
            </div>
            <h3 class="text-xl font-semibold mb-4 dark:text-white">
              Community
            </h3>
            <p class="text-gray-600 dark:text-gray-300">
              Contributing to open-source projects and sharing knowledge with
              fellow developers through mentoring and workshops.
            </p>
          </div>

          <div
            class="text-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-sm">
            <div
              class="w-16 h-16 bg-gradient-to-br from-orange-400 to-red-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg
                class="w-8 h-8 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
              </svg>
            </div>
            <h3 class="text-xl font-semibold mb-4 dark:text-white">
              Creativity
            </h3>
            <p class="text-gray-600 dark:text-gray-300">
              Passionate about design, photography, and creating beautiful
              things that inspire and delight users.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact CTA -->
    <section class="px-16 py-24">
      <div class="max-w-4xl mx-auto text-center">
        <h2 class="text-3xl font-bold mb-6 dark:text-white">
          Let's work together
        </h2>
        <p class="text-lg text-gray-600 dark:text-gray-300 mb-8">
          I'm always interested in new opportunities and exciting projects.
          Let's discuss how we can bring your ideas to life.
        </p>
        <div class="flex gap-6 justify-center">
          <NuxtLink
            to="/work"
            class="bg-blue-500 text-white px-8 py-4 rounded-lg font-medium hover:bg-blue-600 transition-colors">
            View My Work
          </NuxtLink>
          <a
            href="mailto:hello@example.com"
            class="border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 px-8 py-4 rounded-lg font-medium hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
            Get In Touch
          </a>
        </div>
      </div>
    </section>
  </div>
</template>
