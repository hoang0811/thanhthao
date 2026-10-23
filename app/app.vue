
<script setup lang="ts">
import { onMounted, onUnmounted } from 'vue'

let revealObserver: IntersectionObserver | undefined

onMounted(() => {
  if (!('IntersectionObserver' in window)) {
    document.querySelectorAll('.reveal-on-scroll').forEach((element) => {
      element.classList.add('is-visible')
    })
    return
  }

  revealObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible')
          observer.unobserve(entry.target)
        }
      })
    },
    { threshold: 0.12 },
  )

  document.querySelectorAll('.reveal-on-scroll').forEach((element) => {
    revealObserver?.observe(element)
  })
})

onUnmounted(() => revealObserver?.disconnect())

useHead({
  htmlAttrs: {
    lang: 'vi',
  },
  title: 'Thanh Thảo | Thu Mua TikTok US & Cung Cấp Facebook Page',
  meta: [
    {
      name: 'description',
      content:
        'Thanh Thảo kết nối thu mua tài khoản TikTok US, TikTok Shop USA và cung cấp Facebook Page. Trao đổi trực tiếp, báo giá theo tình trạng và nhu cầu hợp tác.',
    },
    {
      name: 'theme-color',
      content: '#07111F',
    },
  ],
  link: [
    { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
    { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
    {
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/css2?family=Be+Vietnam+Pro:wght@400;500;600;700;800&family=Space+Grotesk:wght@400;500;600;700&display=swap',
    },
  ],
})
</script>

<template>
  <div class="min-h-screen bg-brand-ink text-brand-text">
    <AppHeader />

    <main>
      <HeroSection />
      <ServiceSection />
      <NetworkSection />
      <ProcessSection />
      <FaqSection />
    </main>

    <AppFooter />
  </div>
</template>
