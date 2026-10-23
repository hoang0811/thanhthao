<template>
  <footer id="contact" class="border-t border-white/10 bg-brand-ink text-brand-text">
    <div class="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-24">
      <div class="grid gap-12 md:grid-cols-[1fr_0.8fr] md:items-center">
        <div class="reveal-on-scroll">
          <p class="text-[11px] font-extrabold tracking-[0.2em] text-brand-accent">
            03 / KẾT NỐI
          </p>

          <h2 class="mt-5 max-w-2xl font-display text-4xl font-bold leading-[1.04] tracking-tight text-white sm:text-6xl">
            Chọn đúng đối tác.
            <span class="block text-brand-accent">Bắt đầu từ đây.</span>
          </h2>

          <p class="mt-6 max-w-xl leading-7 text-brand-muted">
            Bạn có nguồn tài khoản hoặc đang tìm Facebook Page phù hợp? Hãy
            liên hệ để trao đổi tình trạng, số lượng và nhu cầu thực tế.
          </p>

          <div class="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-[10px] font-bold tracking-[0.13em] text-slate-400">
            <span>TIKTOK ACCOUNT BUYER</span>
            <span>TIKTOK SHOP USA</span>
            <span>FACEBOOK PAGE</span>
          </div>
        </div>

        <div class="contact-glow reveal-on-scroll relative overflow-hidden rounded-2xl border border-white/10 p-7 text-white sm:p-9">
          <div class="pointer-events-none absolute -right-12 -top-16 h-52 w-52 rounded-full border border-brand-accent/15" aria-hidden="true" />
          <div class="pointer-events-none absolute -right-5 -top-8 h-36 w-36 rounded-full border border-brand-coral/20" aria-hidden="true" />
          <div class="relative">
          <div class="absolute right-0 top-0 font-display text-5xl font-bold text-brand-accent/70" aria-hidden="true">
            TT
          </div>

          <p class="text-[10px] font-bold tracking-[0.2em] text-brand-accent">
            LIÊN HỆ TRỰC TIẾP
          </p>
          <h3 class="mt-4 font-display text-3xl font-bold">Thanh Thảo</h3>

          <div class="mt-8 border-t border-white/10 pt-5">
            <p class="text-xs text-brand-muted">Zalo / Điện thoại</p>
            <a
              href="tel:0329824880"
              class="mt-2 inline-block font-display text-3xl font-bold tracking-wide text-brand-accent transition hover:text-white sm:text-4xl"
            >
              0329 824 880
            </a>
          </div>

          <a
            href="tel:0329824880"
            class="mt-7 inline-flex min-h-12 items-center justify-center gap-3 rounded-xl bg-brand-accent px-5 py-3 text-sm font-extrabold text-brand-ink shadow-[0_0_24px_rgba(108,245,229,0.15)] transition hover:shadow-[0_0_34px_rgba(108,245,229,0.3)]"
          >
            Gọi trao đổi
            <span aria-hidden="true">↗</span>
          </a>

          <p class="mt-6 max-w-sm text-[11px] leading-5 text-slate-400">
            Điều kiện cung cấp, chuyển giao và mức giá phụ thuộc tình trạng
            thực tế, thỏa thuận giữa các bên và chính sách nền tảng áp dụng.
          </p>
          </div>
        </div>
      </div>

      <div class="mt-16 flex flex-col gap-3 border-t border-white/10 pt-5 text-[10px] font-semibold tracking-wide text-slate-500 sm:flex-row sm:items-center sm:justify-between">
        <p>© {{ new Date().getFullYear() }} Thanh Thảo. All rights reserved.</p>

        <a href="#home" class="transition hover:text-brand-accent">
          Trở về đầu trang ↑
        </a>
      </div>
    </div>
  </footer>
</template>
