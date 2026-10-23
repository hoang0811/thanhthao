<script setup lang="ts">
const services = [
  {
    id: 'tiktok-us',
    number: '01',
    category: 'TIKTOK ACCOUNT BUYER',
    title: 'Thu mua tài khoản TikTok US',
    description:
      'Tiếp nhận tài khoản TikTok US và một số thị trường quốc tế, từ số lượng nhỏ đến số lượng lớn.',
    features: [
      'Kênh US bảo mật',
      'Kênh Die Shop, No Shop',
      'Kênh Blocked thuế',
      'Kênh Beta, Monetize và No Monetize',
      'Tài khoản từ 10K–100K+ Followers',
      'Hỗ trợ Change Mail tùy tình trạng',
    ],
  },
  {
    id: 'tiktok-shop',
    number: '02',
    category: 'TIKTOK SHOP USA BUYER',
    title: 'Thu mua tài khoản TikTok Shop USA',
    description:
      'Trao đổi tài khoản TikTok Shop thị trường Mỹ, ưu tiên thông tin rõ ràng và điều kiện chuyển giao phù hợp.',
    features: [
      'Tiếp nhận nhiều tình trạng tài khoản',
      'Tài khoản từ 10K–100K Followers',
      'Báo giá theo tình trạng và số lượng',
      'Thống nhất điều kiện trước giao dịch',
    ],
  },
  {
    id: 'facebook-page',
    number: '03',
    category: 'FACEBOOK PAGE SUPPLIER',
    title: 'Cung cấp Facebook Page',
    description:
      'Kết nối nguồn Facebook Page dành cho Creator, người làm nội dung và đối tác phát triển Reels.',
    features: [
      'Tình trạng kiếm tiền theo thực tế',
      'Định hướng thị trường quốc tế',
      'Cung cấp số lượng lớn theo nhu cầu',
      'Hỗ trợ hướng dẫn thiết lập Payout',
      'Tư vấn ngách nội dung và Reels',
    ],
  },
  {
    id: 'partner-sourcing',
    number: '04',
    category: 'BUSINESS PARTNERSHIP',
    title: 'Kết nối nguồn hàng & đối tác',
    description:
      'Kết nối cộng tác viên, nguồn cung và khách hàng có nhu cầu hợp tác lâu dài.',
    features: [
      'Báo giá theo tình trạng và số lượng',
      'Trao đổi trực tiếp, minh bạch',
      'Thống nhất điều kiện giao dịch',
      'Kết nối cộng tác viên toàn quốc',
    ],
  },
]
</script>

<template>
  <section id="services" class="relative overflow-hidden bg-brand-paper py-20 sm:py-28">
    <div class="pointer-events-none absolute -left-48 top-40 h-96 w-96 rounded-full bg-brand-coral/10 blur-[120px]" />
    <div class="mx-auto max-w-7xl px-5 lg:px-8">
      <div class="reveal-on-scroll grid gap-6 border-b border-white/10 pb-10 md:grid-cols-[1fr_1.1fr] md:items-end">
        <div>
          <p class="text-[11px] font-extrabold tracking-[0.2em] text-brand-accent">
            01 / HỆ SINH THÁI DỊCH VỤ
          </p>
          <h2 class="mt-4 max-w-2xl font-display text-4xl font-bold leading-[1.05] tracking-tight text-white sm:text-5xl">
            Tìm đúng kết nối.
            <span class="text-brand-accent">Mở lối phát triển.</span>
          </h2>
        </div>

        <p class="max-w-lg leading-7 text-brand-muted md:justify-self-end">
          Mỗi nhu cầu được trao đổi trực tiếp, dựa trên tình trạng thực tế,
          số lượng và điều kiện chuyển giao.
        </p>
      </div>

      <div class="mt-8 grid gap-4 md:grid-cols-2">
        <article
          v-for="service in services"
          :id="service.id"
          :key="service.id"
          class="service-card reveal-on-scroll group relative flex min-h-[19rem] flex-col overflow-hidden rounded-2xl border border-white/10 p-6 sm:p-8"
        >
          <div class="absolute right-5 top-2 select-none font-display text-7xl font-bold tracking-[-0.1em] text-white/[0.035] transition duration-300 group-hover:text-brand-accent/10">
            {{ service.number }}
          </div>

          <div class="relative flex items-center justify-between">
            <span class="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-brand-accent/20 bg-brand-accent/10 font-display text-lg font-bold text-brand-accent">
              {{ service.category.startsWith('FACEBOOK') ? 'F' : service.category.startsWith('BUSINESS') ? '↗' : 'T' }}
            </span>
            <span class="text-[9px] font-bold tracking-[0.16em] text-brand-muted">
              {{ service.category }}
            </span>
          </div>

          <h3 class="relative mt-6 max-w-sm text-2xl font-bold leading-tight text-white sm:text-3xl">
            {{ service.title }}
          </h3>

          <p class="relative mt-3 max-w-lg text-sm leading-6 text-brand-muted">
            {{ service.description }}
          </p>

          <ul class="relative mt-5 flex flex-wrap gap-2">
            <li
              v-for="feature in service.features"
              :key="feature"
              class="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-[10px] leading-4 text-slate-300"
            >
              {{ feature }}
            </li>
          </ul>

          <a
            href="#contact"
            :aria-label="`Liên hệ về dịch vụ: ${service.title}`"
            class="relative mt-auto inline-flex min-h-11 items-center gap-2 pt-6 text-sm font-bold text-brand-accent"
          >
            Trao đổi dịch vụ
            <span aria-hidden="true" class="transition-transform duration-300 group-hover:translate-x-1">↗</span>
          </a>
        </article>
      </div>

      <div
        id="partnership"
        class="contact-glow reveal-on-scroll relative mt-8 grid gap-7 overflow-hidden rounded-2xl border border-brand-accent/20 p-7 text-white sm:p-10 md:grid-cols-[1fr_auto] md:items-center"
      >
        <div class="pointer-events-none absolute -right-10 -top-24 h-64 w-64 rounded-full border border-brand-accent/15" />
        <div>
          <p class="text-[10px] font-bold tracking-[0.19em] text-brand-accent">
            02 / HỢP TÁC
          </p>
          <h3 class="relative mt-3 max-w-2xl font-display text-3xl font-bold leading-tight sm:text-4xl">
            Sẵn sàng kết nối nguồn hàng mới?
          </h3>
          <p class="relative mt-3 max-w-xl text-sm leading-6 text-brand-muted">
            Có nguồn tài khoản hoặc Facebook Page cần kết nối? Hãy trao đổi
            trực tiếp để thống nhất điều kiện phù hợp.
          </p>
        </div>

        <a
          href="#contact"
          class="relative inline-flex min-h-12 items-center justify-center gap-3 rounded-xl bg-brand-accent px-5 py-3 text-sm font-extrabold text-brand-ink shadow-[0_0_24px_rgba(108,245,229,0.16)] transition hover:shadow-[0_0_34px_rgba(108,245,229,0.3)]"
        >
          Kết nối đối tác
          <span aria-hidden="true">↗</span>
        </a>
      </div>
    </div>
  </section>
</template>
