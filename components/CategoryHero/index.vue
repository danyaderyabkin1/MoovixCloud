<script setup lang="ts">

</script>

<template>
  <section class="section py-8">
    <UContainer class="bg-indigo-50 dark:bg-gray-800 p-10 rounded-3xl flex relative py-16">
      <div class="w-1/2">
        <UBreadcrumb
            divider="/"
            :links="[{ label: 'Главная', to: '/' }, { label: 'Облачные серверы' }]"
            :ui="{base: 'font-light', li:'text-cool-700', active: 'text-cool-500 dark:text-gray-400'}"
            class="mb-5"
        />
        <h1 class="text-6xl font-bold mb-3">Облачные серверы</h1>
        <p class="mb-8 pr-32">Серверы для приложений, веб-сайтов, веб-сервисов,
          онлайн-магазинов, игр, что угодно.</p>
        <UButton :ui="{variant:{solid: 'bg-[#7A809E] hover:bg-[#a4aac8] dark:hover:bg-black/30 rounded-xl px-5 py-4'}}" class="mb-3">Выбрать сервер</UButton>
        <p class="text-cool-500 text-[14px]">Бесплатное резервное копирование, кроме Cloud-1</p>
      </div>
      <img class="w-5/12 absolute top-0 right-0 h-full object-contain" src="/assets/images/73d60405f1e65bbde0010a7a72475c79.png" alt="categoryHero">
    </UContainer>
  </section>
</template>

<style scoped>

</style>