<script setup lang="ts">
const steps = [
  {
    number: '01',
    title: 'Chia sẻ nhu cầu',
    description:
      'Cho biết bạn đang cần tài khoản TikTok, TikTok Shop USA hay Facebook Page; nêu thị trường, tình trạng mong muốn và số lượng dự kiến.',
    label: 'NỀN TẢNG · THỊ TRƯỜNG · SỐ LƯỢNG',
  },
  {
    number: '02',
    title: 'Trao đổi tình trạng',
    description:
      'Cùng làm rõ thông tin tài khoản hoặc Page, khả năng chuyển giao và những điều kiện liên quan trước khi thống nhất.',
    label: 'TÌNH TRẠNG · ĐIỀU KIỆN',
  },
  {
    number: '03',
    title: 'Thống nhất báo giá',
    description:
      'Mức giá được trao đổi theo tình trạng thực tế và số lượng. Chỉ tiến hành khi các bên đã thống nhất điều kiện phù hợp.',
    label: 'BÁO GIÁ · XÁC NHẬN',
  },
]
</script>

<template>
  <section id="process" class="relative overflow-hidden bg-[#0B1829] py-20 sm:py-28">
    <div class="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(108,245,229,0.08),transparent_55%)]" />
    <div class="relative mx-auto max-w-7xl px-5 lg:px-8">
      <div class="reveal-on-scroll max-w-2xl">
        <p class="text-[11px] font-bold tracking-[0.2em] text-brand-accent">
          QUY TRÌNH TRAO ĐỔI
        </p>
        <h2 class="mt-4 font-display text-4xl font-bold leading-tight text-white sm:text-5xl">
          Rõ thông tin.
          <span class="text-brand-accent">Rõ từng bước.</span>
        </h2>
        <p class="mt-4 leading-7 text-brand-muted">
          Một khung trao đổi đơn giản giúp đôi bên làm rõ nhu cầu và điều kiện
          trước khi đi đến thống nhất.
        </p>
      </div>

      <div class="relative mt-12 grid gap-4 md:grid-cols-3">
        <div class="pointer-events-none absolute left-[16%] right-[16%] top-8 hidden h-px bg-gradient-to-r from-brand-accent/0 via-brand-accent/35 to-brand-accent/0 md:block" />

        <article
          v-for="(step, index) in steps"
          :key="step.number"
          class="reveal-on-scroll relative rounded-2xl border border-white/10 bg-brand-surface p-6 sm:p-7"
          :style="{ transitionDelay: `${index * 120}ms` }"
        >
          <div class="flex items-center justify-between">
            <span class="flex h-14 w-14 items-center justify-center rounded-2xl border border-brand-accent/25 bg-brand-accent/10 font-display text-xl font-bold text-brand-accent">
              {{ step.number }}
            </span>
            <span class="text-xs font-bold text-brand-muted">0{{ index + 1 }} / 03</span>
          </div>
          <h3 class="mt-7 font-display text-2xl font-bold text-white">
            {{ step.title }}
          </h3>
          <p class="mt-3 min-h-[7.5rem] text-sm leading-6 text-brand-muted">
            {{ step.description }}
          </p>
          <p class="mt-5 border-t border-white/10 pt-4 text-[9px] font-bold tracking-[0.13em] text-brand-accent">
            {{ step.label }}
          </p>
        </article>
      </div>

      <div class="reveal-on-scroll mt-6 flex flex-col gap-5 rounded-2xl border border-brand-coral/20 bg-brand-coral/5 p-6 sm:flex-row sm:items-center sm:justify-between sm:p-7">
        <div>
          <p class="text-sm font-bold text-white">Để nhận báo giá sát hơn, bạn có thể chuẩn bị:</p>
          <p class="mt-2 text-sm leading-6 text-brand-muted">
            Nền tảng · thị trường · loại tài khoản/Page · khoảng follower · tình trạng · số lượng · điều kiện cần trao đổi.
          </p>
        </div>
        <a
          href="#contact"
          class="inline-flex min-h-12 shrink-0 items-center justify-center gap-2 rounded-xl bg-brand-accent px-5 py-3 text-sm font-extrabold text-brand-ink transition hover:-translate-y-0.5 hover:shadow-[0_0_30px_rgba(108,245,229,0.25)]"
        >
          Trao đổi nhu cầu
          <span aria-hidden="true">↗</span>
        </a>
      </div>
    </div>
  </section>
</template>
