<script setup lang="ts">
const appConfig = useAppConfig()
const { hasLogo, headerLightUrl, headerDarkUrl, contextMenuItems } = useLogoAssets()
</script>

<template>
  <UContextMenu
      v-if="hasLogo"
      :items="contextMenuItems"
  >
    <div class="flex flex-row items-center gap-2 font-semibold">
      <UColorModeImage
          :light="headerLightUrl"
          :dark="headerDarkUrl"
          :alt="appConfig.header?.logo?.alt || appConfig.header?.title"
          :class="['h-6 w-auto shrink-0', appConfig.header?.logo?.class]"
      />
      <span>
    {{ appConfig.header?.title || '{appConfig.header.title}' }}
  </span>
    </div>
  </UContextMenu>
  <span v-else>
    {{ appConfig.header?.title || '{appConfig.header.title}' }}
  </span>
</template>