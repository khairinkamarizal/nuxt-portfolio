<script setup lang="ts">
useSeoMeta({
  title: "Contact",
  description:
    "Get in touch with me for collaboration opportunities, project inquiries, or just to say hello. I'm always excited to discuss new ideas and opportunities.",
  ogTitle: "Contact — Let's Work Together",
  ogDescription:
    "Get in touch with me for collaboration opportunities, project inquiries, or just to say hello. I'm always excited to discuss new ideas and opportunities.",
  twitterCard: "summary_large_image",
});

const formData = ref({
  name: "",
  email: "",
  subject: "",
  message: "",
});

const isSubmitting = ref(false);
const submitStatus = ref("");

const submitForm = async () => {
  isSubmitting.value = true;
  submitStatus.value = "";

  try {
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000));
    submitStatus.value = "success";
    formData.value = { name: "", email: "", subject: "", message: "" };
  } catch (error) {
    submitStatus.value = "error";
  } finally {
    isSubmitting.value = false;
  }
};

const contactInfo = [
  {
    icon: "M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
    title: "Email",
    value: "hello@example.com",
    link: "mailto:hello@example.com",
  },
  {
    icon: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z",
    title: "Location",
    value: "San Francisco, CA",
    link: "#",
  },
  {
    icon: "M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z",
    title: "Phone",
    value: "+1 (555) 123-4567",
    link: "tel:+15551234567",
  },
];

const socialLinks = [
  {
    name: "GitHub",
    icon: "M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z",
    link: "https://github.com/yourusername",
  },
  {
    name: "LinkedIn",
    icon: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z",
    link: "https://linkedin.com/in/yourusername",
  },
  {
    name: "Twitter",
    icon: "M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z",
    link: "https://twitter.com/yourusername",
  },
];
</script>

<template>
  <div class="min-h-screen">
    <!-- Hero Section -->
    <section class="px-16 py-24">
      <div class="max-w-4xl mx-auto text-center">
        <h1 class="text-5xl font-bold tracking-tight mb-6 dark:text-white">
          Let's Work Together
        </h1>
        <p
          class="text-xl text-gray-600 dark:text-gray-300 mb-12 leading-relaxed">
          I'm always excited to discuss new projects, collaboration
          opportunities, or just have a chat about technology and design. Don't
          hesitate to reach out!
        </p>
      </div>
    </section>

    <!-- Contact Form & Info -->
    <section class="px-16 pb-24">
      <div class="max-w-6xl mx-auto">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <!-- Contact Form -->
          <div class="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-sm">
            <h2 class="text-2xl font-bold mb-8 dark:text-white">
              Send me a message
            </h2>

            <form
              @submit.prevent="submitForm"
              class="space-y-6">
              <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label
                    for="name"
                    class="block text-sm font-medium mb-2 dark:text-white"
                    >Name</label
                  >
                  <input
                    id="name"
                    v-model="formData.name"
                    type="text"
                    required
                    class="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                    placeholder="Your name" />
                </div>
                <div>
                  <label
                    for="email"
                    class="block text-sm font-medium mb-2 dark:text-white"
                    >Email</label
                  >
                  <input
                    id="email"
                    v-model="formData.email"
                    type="email"
                    required
                    class="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                    placeholder="your@email.com" />
                </div>
              </div>

              <div>
                <label
                  for="subject"
                  class="block text-sm font-medium mb-2 dark:text-white"
                  >Subject</label
                >
                <input
                  id="subject"
                  v-model="formData.subject"
                  type="text"
                  required
                  class="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                  placeholder="What's this about?" />
              </div>

              <div>
                <label
                  for="message"
                  class="block text-sm font-medium mb-2 dark:text-white"
                  >Message</label
                >
                <textarea
                  id="message"
                  v-model="formData.message"
                  required
                  rows="6"
                  class="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                  placeholder="Tell me about your project or idea..."></textarea>
              </div>

              <button
                type="submit"
                :disabled="isSubmitting"
                class="w-full bg-blue-500 text-white px-8 py-4 rounded-lg font-medium hover:bg-blue-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2">
                <span v-if="isSubmitting">Sending...</span>
                <span v-else>Send Message</span>
                <svg
                  v-if="isSubmitting"
                  class="w-5 h-5 animate-spin"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24">
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path>
                </svg>
              </button>

              <!-- Success/Error Messages -->
              <div
                v-if="submitStatus === 'success'"
                class="p-4 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-lg">
                Thank you! Your message has been sent successfully. I'll get
                back to you soon.
              </div>
              <div
                v-if="submitStatus === 'error'"
                class="p-4 bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200 rounded-lg">
                Sorry, there was an error sending your message. Please try again
                or contact me directly.
              </div>
            </form>
          </div>

          <!-- Contact Information -->
          <div class="space-y-8">
            <div>
              <h2 class="text-2xl font-bold mb-8 dark:text-white">
                Get in touch
              </h2>
              <p class="text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                Prefer to reach out directly? Here are all the ways you can
                connect with me. I typically respond within 24 hours.
              </p>
            </div>

            <!-- Contact Details -->
            <div class="space-y-6">
              <div
                v-for="info in contactInfo"
                :key="info.title"
                class="flex items-center gap-4 p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div
                  class="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg
                    class="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24">
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      :d="info.icon"></path>
                  </svg>
                </div>
                <div>
                  <h3 class="font-semibold dark:text-white">
                    {{ info.title }}
                  </h3>
                  <a
                    :href="info.link"
                    class="text-blue-500 hover:text-blue-600 transition-colors">
                    {{ info.value }}
                  </a>
                </div>
              </div>
            </div>

            <!-- Social Links -->
            <div>
              <h3 class="text-lg font-semibold mb-4 dark:text-white">
                Follow me
              </h3>
              <div class="flex gap-4">
                <a
                  v-for="social in socialLinks"
                  :key="social.name"
                  :href="social.link"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="w-12 h-12 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center hover:bg-blue-500 hover:text-white transition-colors group">
                  <svg
                    class="w-6 h-6 group-hover:text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24">
                    <path :d="social.icon"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Availability Status -->
    <section class="px-16 py-24 bg-gray-50 dark:bg-gray-900">
      <div class="max-w-4xl mx-auto text-center">
        <div
          class="inline-flex items-center gap-3 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-6 py-3 rounded-full mb-8">
          <div class="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
          <span class="font-medium">Available for new projects</span>
        </div>
        <h2 class="text-3xl font-bold mb-6 dark:text-white">
          Currently accepting new opportunities
        </h2>
        <p class="text-lg text-gray-600 dark:text-gray-300 mb-8">
          I'm currently available for freelance projects, consulting work, and
          full-time opportunities. Let's discuss how we can work together to
          bring your ideas to life.
        </p>
        <div class="flex gap-6 justify-center">
          <NuxtLink
            to="/work"
            class="bg-blue-500 text-white px-8 py-4 rounded-lg font-medium hover:bg-blue-600 transition-colors">
            View My Work
          </NuxtLink>
          <NuxtLink
            to="/about"
            class="border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 px-8 py-4 rounded-lg font-medium hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
            Learn More About Me
          </NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>

