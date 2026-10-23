<script setup lang="ts">
const questions = [
  {
    question: 'Mức giá được xác định như thế nào?',
    answer:
      'Mức giá được trao đổi trực tiếp dựa trên nền tảng, tình trạng tài khoản hoặc Page, số lượng và khả năng chuyển giao. Trang không niêm yết một mức giá chung cho mọi trường hợp.',
  },
  {
    question: 'Tôi cần gửi những thông tin gì để bắt đầu?',
    answer:
      'Bạn có thể cho biết loại tài khoản/Page cần tìm hoặc muốn kết nối, thị trường, tình trạng hiện tại, khoảng follower, số lượng và điều kiện cần trao đổi. Không chia sẻ mật khẩu hoặc mã xác thực khi trao đổi.',
  },
  {
    question: 'Có thể trao đổi nhiều tình trạng TikTok US không?',
    answer:
      'Có thể trao đổi các tình trạng được liệt kê trong phần dịch vụ, bao gồm Die Shop, No Shop, Blocked thuế, Beta, Monetize và No Monetize. Khả năng tiếp nhận và điều kiện cụ thể cần được xác nhận theo từng trường hợp.',
  },
  {
    question: 'Facebook Page có hỗ trợ số lượng lớn không?',
    answer:
      'Nhu cầu cung cấp số lượng lớn có thể được trao đổi. Tình trạng Page, thông tin liên quan và điều kiện chuyển giao cần được làm rõ trước khi thống nhất.',
  },
  {
    question: 'Có thể trao đổi TikTok Shop USA không?',
    answer:
      'Có. Hãy cung cấp thông tin tình trạng tài khoản và số lượng dự kiến để trao đổi báo giá cùng điều kiện phù hợp.',
  },
]
</script>

<template>
  <section id="faq" class="bg-brand-ink py-20 sm:py-28">
    <div class="mx-auto grid max-w-7xl gap-10 px-5 lg:grid-cols-[0.72fr_1.28fr] lg:gap-20 lg:px-8">
      <div class="reveal-on-scroll">
        <p class="text-[11px] font-bold tracking-[0.2em] text-brand-coral">
          GIẢI ĐÁP NHANH
        </p>
        <h2 class="mt-4 font-display text-4xl font-bold leading-tight text-white sm:text-5xl">
          Trước khi
          <span class="text-brand-coral">bắt đầu.</span>
        </h2>
        <p class="mt-4 max-w-md leading-7 text-brand-muted">
          Một vài điều thường được hỏi khi trao đổi về tài khoản và Facebook Page.
        </p>
        <a href="#contact" class="mt-6 inline-flex min-h-11 items-center gap-2 text-sm font-bold text-brand-accent hover:text-white">
          Còn câu hỏi khác? Liên hệ <span aria-hidden="true">↗</span>
        </a>
      </div>

      <div class="reveal-on-scroll divide-y divide-white/10 border-y border-white/10">
        <details
          v-for="(item, index) in questions"
          :key="item.question"
          class="group py-5"
          :open="index === 0"
        >
          <summary class="flex min-h-11 cursor-pointer list-none items-center justify-between gap-5 text-base font-semibold text-white marker:content-none">
            <span>{{ item.question }}</span>
            <span class="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/15 text-brand-accent transition group-open:rotate-45 group-open:border-brand-accent/50" aria-hidden="true">+</span>
          </summary>
          <p class="max-w-2xl pt-3 pr-10 text-sm leading-7 text-brand-muted">
            {{ item.answer }}
          </p>
        </details>
      </div>
    </div>
  </section>
</template>
