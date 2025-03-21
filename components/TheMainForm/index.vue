<script setup lang="ts">

</script>

<template>
  <section class="feedback p-5">
    <UContainer class="bg-indigo-50 dark:bg-gray-800 feedback__container flex items-center rounded-3xl mx-auto pe-8">
      <div class="flex gap-3">
        <img src="/assets/images/chat.webp.webp" alt="chat">
      </div>
      <div class="w-2/5">
        <h4 class="mb-2 text-2xl font-medium flex items-center gap-2">
          Не можете определиться?
        </h4>
        <p class=" text-gray-500  dark:text-gray-400">Напишите нам и мы поможем подобрать облачный сервер,
          который Вам подойдет</p>
      </div>
      <UButton class="ms-auto" :ui="{gap: { xl: 'gap-x-1'}}">
        <template #trailing>
          <UIcon name="i-mingcute-telegram-fill" class="w-5 h-5" />
          Написать нам
        </template>
      </UButton>
    </UContainer>
  </section>
</template>

<style scoped>

</style>