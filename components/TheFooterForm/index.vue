<script setup lang="ts">

</script>

<template>
  <section class="feedback p-5">
    <div class="container bg-sky-100 dark:bg-gray-700 feedback__container flex items-center max-w-7xl rounded-3xl mx-auto p-8">
      <div class="flex gap-3">
        <UButton variant="outline" color="white" :ui="{square: {xl: 'p-4'}, variant: {outline: 'ring-0 bg-white dark:bg-black'}, rounded: 'rounded-full', icon: {size: {xl: 'h-6 w-6'}}}" icon="i-bx-bxl-telegram"/>
        <UButton variant="outline" color="white" :ui="{square: {xl: 'p-4'}, variant: {outline: 'ring-0 bg-white dark:bg-black'}, rounded: 'rounded-full', icon: {size: {xl: 'h-6 w-6'}}}" icon="i-bx-bxl-vk"/>
        <UButton variant="outline" color="white" :ui="{square: {xl: 'p-4'}, variant: {outline: 'ring-0 bg-white dark:bg-black'}, rounded: 'rounded-full', icon: {size: {xl: 'h-6 w-6'}}}">
          <template #trailing>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clip-path="url(#clip0_487_2)">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M0.226562 9.7079C4.18767 9.65856 6.41445 9.38767 7.90056 7.90145C9.38667 6.41534 9.65756 4.18856 9.70689 0.227539C4.53978 0.37965 0.378674 4.54067 0.226562 9.7079ZM10.2931 0.227539C10.3425 4.18856 10.6133 6.41534 12.0996 7.90145C13.5857 9.38767 15.8125 9.65856 19.7735 9.7079C19.6213 4.54067 15.4603 0.37965 10.2931 0.227539ZM19.7735 10.2941C15.8125 10.3435 13.5857 10.6145 12.0996 12.1006C10.6133 13.5867 10.3425 15.8135 10.2931 19.7745C15.4603 19.6223 19.6213 15.4613 19.7735 10.2941ZM9.70689 19.7745C9.65756 15.8135 9.38667 13.5867 7.90056 12.1006C6.41445 10.6145 4.18767 10.3435 0.226562 10.2941C0.378674 15.4613 4.53978 19.6223 9.70689 19.7745Z" fill="currentColor"/>
              </g>
              <defs>
                <clipPath id="clip0_487_2">
                  <rect width="20" height="20" fill="white"/>
                </clipPath>
              </defs>
            </svg>
          </template>
        </UButton>
      </div>
      <p class="ms-4 flex items-center gap-2">
        <UIcon class="w-6 h-6" name="i-material-symbols-chevron-left"/>
        Сообщества
      </p>
      <UButton class="ms-auto" :ui="{gap: { xl: 'gap-x-1'}}">
        <template #trailing>
          <UIcon name="i-tabler-mail-filled" class="w-5 h-5" />
          <UIcon name="i-ix-separator-line" class="w-4 h-5 rotate-90" />
          Обратная связь
        </template>
      </UButton>
    </div>
  </section>
</template>

<style scoped>

</style>