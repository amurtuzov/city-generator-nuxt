<script lang="ts" setup>
const sizes = [
  'Small Town',
  'Medium Town',
  'Large City',
  'Metropolis',
  'Capital City',
]
const terrains = [
  'Coastal',
  'Riverine',
  'Mountainous',
  'Forested',
  'Desert',
  'Plains',
]
const generatedItemsListRef = ref<HTMLElement>()
const generatedItems = ref<Array<string>>([])
const params = reactive({
  size: '',
  terrain: '',
  keywords: '',
  description: '',
})
const errorMessages = reactive({
  description: '',
  keywords: '',
})

const isValid = computed(() => {
  return (
    (!!params.keywords || !!params.description)
    && !errorMessages.keywords
    && !errorMessages.description
  )
})

const { execute: generateAction, status, data } = useAsyncData<{ result: Array<string> }>(
  async () => {
    return await $fetch('https://namegenerator.com/ai/generate/city-names', {
      method: 'POST',
      body: params,
    })
  },
  {
    server: false,
    immediate: false,
  },
)

const isLoading = computed(() => status.value === 'pending')

function textFieldsLatinLettersCheck(fieldType: string) {
  const re = /^[A-Za-z0-9\s,.!?:;‘'-]+$/
  if (
    params[fieldType as keyof typeof params] !== ''
    && !re.test(params[fieldType as keyof typeof params])
  ) {
    errorMessages[fieldType as keyof typeof errorMessages]
        = 'Please use Latin letters'
  }
  else {
    errorMessages[fieldType as keyof typeof errorMessages] = ''
  }
}

async function generate() {
  try {
    await generateAction()
    if (data.value && data.value.result && data.value.result.length)
      generatedItems.value = data.value.result

    await nextTick()
    generatedItemsListRef.value?.scrollIntoView({ behavior: 'smooth' })
  }
  catch (e) {
    console.error(e)
  }
}

function confirmDialogOverlayStopPropagation(e: Event) {
  const target = e.target as HTMLElement
  if (target.classList.contains('p-dialog-mask')) {
    e.stopImmediatePropagation()
    e.stopPropagation()
  }
}

onMounted(() => {
  document.addEventListener('click', confirmDialogOverlayStopPropagation)
})

onBeforeUnmount(() => {
  document.removeEventListener('click', confirmDialogOverlayStopPropagation)
})
</script>

<template>
  <div class="home pt-8 pb-8 w-full p-5 grid grid-nogutter">
    <LazyPrimeConfirmDialog group="headless" style="width: 300px" @click.stop>
      <template #container="{ message, acceptCallback, rejectCallback }">
        <div class="bg-white flex flex-column gap-5 p-3 pt-4 border-round">
          <span class="text-center text-gray-900">{{ message?.message }}</span>
          <div class="flex align-items-center justify-content-end gap-2">
            <LazyPrimeButton outlined label="No" @click.stop="rejectCallback" />
            <LazyPrimeButton label="Yes" @click.stop="acceptCallback" />
          </div>
        </div>
      </template>
    </LazyPrimeConfirmDialog>
    <h1
      class="text-center text-gray-900 font-bold mt-0 mb-5 md:mb-6 xl:mb-7 text-6xl md:text-7xl col-12"
    >
      Blog Post Titles
    </h1>
    <div
      class="text-center text-gray-900 text-xl md:text-2xl col-10 col-offset-1 mb-6 md:mb-8 xl:mb-10"
    >
      This tool creates powerful and catchy titles for articles and blogs. Enter
      the word in the field below and click the Generate button.
    </div>
    <div
      class="home__form w-full grid grid-nogutter col-12 justify-content-center mb-8"
    >
      <div class="home__form-wrapper w-full flex flex-column gap-3">
        <div
          class="flex flex-column gap-6 lg:flex-row lg:justify-content-between mb-4"
        >
          <div class="p-float-label lg:w-6">
            <LazyPrimeDropdown
              v-model="params.size"
              :options="sizes"
              input-id="sizes"
              class="align-items-center w-full h-4rem"
            />
            <label for="sizes">Size or Significance</label>
          </div>
          <div class="p-float-label lg:w-6">
            <LazyPrimeDropdown
              v-model="params.terrain"
              :options="terrains"
              input-id="terrain"
              class="align-items-center w-full h-4rem"
            />
            <label for="terrain">Terrain Type</label>
          </div>
        </div>
        <div class="flex gap-3 flex-column w-full">
          <div class="w-full">
            <div class="p-float-label">
              <LazyPrimeInputText
                v-model="params.keywords"
                class="flex align-items-center h-4rem w-full mb-1"
                :class="{ 'p-invalid': errorMessages.keywords }"
                input-id="keywords"
                @input="textFieldsLatinLettersCheck('keywords')"
              />
              <label for="keywords">Inspiration Keywords</label>
            </div>
            <small class="p-error">
              {{ errorMessages.keywords || '&nbsp;' }}
            </small>
          </div>
          <div class="w-full">
            <div class="p-float-label">
              <LazyPrimeTextarea
                v-model="params.description"
                auto-resize
                class="flex align-items-center w-full mb-1"
                :class="{ 'p-invalid': errorMessages.description }"
                rows="5"
                input-id="description"
                @input="textFieldsLatinLettersCheck('description')"
              />
              <label for="description">Short Description</label>
            </div>
            <small class="p-error">
              {{ errorMessages.description || '&nbsp;' }}
            </small>
          </div>
        </div>
        <LazyPrimeButton
          class="p-button-lg w-full flex align-items-center justify-content-center h-4rem"
          :disabled="isLoading || !isValid"
          @click="generate"
        >
          <i v-if="isLoading" class="pi pi-spin pi-spinner" />
          <span v-if="!isLoading" class="px-3 font-bold">Generate</span>
        </LazyPrimeButton>
      </div>
    </div>
    <div
      v-if="generatedItems.length"
      ref="generatedItemsListRef"
      class="home__list m-auto pb-8 flex flex-column gap-5 col-12"
    >
      <div class="flex align-items-center justify-content-between gap-2">
        <div class="text-sm lg:text-lg font-bold">
          <span class="text-primary">10000+&nbsp;</span>
          <span>items in our database</span>
        </div>
        <LazyFavoritesToggler />
      </div>
      <div class="flex flex-column gap-3">
        <LazyListItem v-for="item in generatedItems" :key="item" :item="item" />
      </div>
      <LazyPrimeButton
        class="p-button-lg flex align-items-center justify-content-center h-3rem m-auto mt-2"
        :disabled="isLoading"
        :pt="{
          root: {
            style: { width: '280px' },
          },
        }"
        @click="generate"
      >
        <i v-if="isLoading" class="pi pi-spin pi-spinner" />
        <span v-if="!isLoading" class="px-3 font-bold">Generate more</span>
      </LazyPrimeButton>
    </div>
    <div
      class="home__how text-gray-900 grid grid-nogutter m-auto text-lg line-height-3 pt-8 border-top-1 border-primary"
    >
      <div class="text-primary font-bold text-4xl mb-5 col-12">
        How it works
      </div>
      <div class="col-12 lg:col-6">
        <p class="lg:p-2 mb-5">
          When writing a blog, the title or headline is the most important
          aspect. This is what’s going to entice readers to read or share your
          post. If the title isn’t good, your article isn’t going anywhere. If
          you need help crafting a great blog title, our title generator service
          is what you need!
        </p>
        <p class="lg:p-2 mb-5">
          This tool will not only help you title an existing blog post but can
          also help you generate ideas for future posts. This could be an
          invaluable tool for people who make their living writing on the
          internet.
        </p>
        <p class="lg:p-2 mb-5">
          If you are worried about cost, don’t be: our tool is completely free
          to use as much as you like. The title ideas it produces don’t cost
          anything and are free from any royalty restrictions. Plus, you don’t
          need to give us your email or any other information.
        </p>
        <p class="font-bold lg:p-2 mb-5">
          Blog title generator: How does it work?
        </p>
        <p class="lg:p-2 mb-5">
          This page has a text box. In this box, you’ll want to put the main
          keyword for your blog post. Similarly, if you haven’t written a post
          yet, using a keyword related to the topic you want to write about
          would be a great idea.
        </p>
      </div>
      <div class="col-12 lg:col-6">
        <p class="lg:p-2 mb-5">
          Keep in mind, however, that you must use only Latin characters and
          cannot use spaces. Once you’ve entered a good keyword, hit the
          GENERATE button. Our server will then generate thousands of blog title
          ideas for you related to that keyword. You’ll see a relatively small
          list at first, but if you scroll down and hit the GENERATE MORE
          button, you’ll get additional ideas.
        </p>
        <p class="lg:p-2 mb-5">
          Next to each title idea will be two buttons: a COPY button and a STAR
          button. The COPY button will copy that title idea so you can paste it
          somewhere. Meanwhile, the STAR button will save that title to a list.
          You can access the list by hitting the SAVED IDEAS button.
        </p>
        <p class="lg:p-2 mb-5">
          You don’t need to worry about losing your saved ideas if you hit the
          GENERATE MORE button again or even do another keyword search. Feel
          free to jump around!
        </p>
        <p class="lg:p-2 mb-5">
          When you have compiled a good list, hit the SAVED IDEAS button and
          then the DOWNLOAD button. You’ll receive a text file with all your
          saved ideas. Hit the DELETE ALL button to clear your list and start
          the process again.
        </p>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.home {
  background: rgba(255, 255, 255, 0.1);
  &__form {
    &-wrapper {
      max-width: 450px;
      @include screen($lg) {
        max-width: 700px;
      }
    }
  }
  &__how,
  &__list {
    max-width: 1000px;
  }
}
</style>
