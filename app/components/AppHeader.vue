
<script setup lang="ts">
import { ref } from 'vue'

const menuOpen = ref(false)

const links = [
  { label: 'Trang chủ', href: '#home' },
  { label: 'Dịch vụ', href: '#services' },
  { label: 'Quy trình', href: '#process' },
  { label: 'Hợp tác', href: '#partnership' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Liên hệ', href: '#contact' },
]
</script>

<template>
  <header
    class="sticky top-0 z-50 border-b border-white/10 bg-brand-ink/85 text-brand-text backdrop-blur-xl"
  >
    <div
      class="mx-auto flex max-w-7xl items-center justify-between px-5 py-3 lg:px-8"
    >
      <a href="#home" class="flex items-center gap-3" @click="menuOpen = false">
        <div
          class="flex h-11 w-11 items-center justify-center rounded-2xl border border-brand-accent/30 bg-brand-accent/10 font-display text-xl font-bold text-brand-accent shadow-[0_0_22px_rgba(108,245,229,0.12)]"
        >
          TT
        </div>

        <div>
          <p class="text-sm font-extrabold tracking-wide text-white">
            THANH THẢO
          </p>
          <p class="mt-1 text-[10px] tracking-[0.14em] text-brand-muted">
            TIKTOK & FACEBOOK BUSINESS
          </p>
        </div>
      </a>

      <nav class="hidden items-center gap-5 lg:gap-7 md:flex">
        <a
          v-for="link in links"
          :key="link.href"
          :href="link.href"
          class="text-sm font-medium text-slate-300 transition hover:text-brand-accent"
        >
          {{ link.label }}
        </a>

        <a
          href="#contact"
          class="rounded-xl bg-brand-accent px-5 py-3 text-sm font-bold text-brand-ink shadow-[0_0_24px_rgba(108,245,229,0.18)] transition hover:-translate-y-0.5 hover:shadow-[0_0_32px_rgba(108,245,229,0.34)]"
        >
          Bắt đầu kết nối ↗
        </a>
      </nav>

      <button
        type="button"
        class="min-h-11 rounded-xl border border-white/15 px-4 py-2 text-xs font-bold tracking-widest text-white transition hover:border-brand-accent/40 hover:text-brand-accent md:hidden"
        :aria-expanded="menuOpen"
        :aria-label="menuOpen ? 'Đóng menu điều hướng' : 'Mở menu điều hướng'"
        @click="menuOpen = !menuOpen"
      >
        {{ menuOpen ? 'ĐÓNG' : 'MENU' }}
      </button>
    </div>

    <nav
      v-if="menuOpen"
      class="border-t border-white/10 bg-brand-ink/95 px-5 py-3 md:hidden"
    >
      <a
        v-for="link in links"
        :key="link.href"
        :href="link.href"
        class="block min-h-11 border-b border-white/10 px-3 py-3 text-sm font-medium text-slate-300 transition hover:text-brand-accent"
        @click="menuOpen = false"
      >
        {{ link.label }}
      </a>
    </nav>
  </header>
</template>
