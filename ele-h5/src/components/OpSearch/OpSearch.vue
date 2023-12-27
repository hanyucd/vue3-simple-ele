<template>
  <div class="op-search" :class="{ 'op-search--show-action': showAction }" :style="{ background }">
    <div class="op-search__content" :class="shape ? `op-search__content--${shape}` : ''">
      <div class="op-cell op-search__field">
        <div class="op-field__left-icon">
          <VanIcon name="search" />
        </div>
        <div class="op-cell__value">
          <div class="op-field__body">
            <input
              type="search"
              class="op-field__control"
              :value="modelValue"
              :placeholder="placeholder"
              @keypress="onKeypress"
              @click="emits('inputClick')"
              @input="emits('update:modelValue', ($event.target as HTMLInputElement).value)"
            />
            <div v-if="$slots['right-icon']" class="op-field__right-icon">
              <slot name="right-icon"></slot>
            </div>
            <VanIcon v-else-if="modelValue" name="clear" class="op-field__clear" @click="onClear" />
          </div>
        </div>
      </div>
    </div>
    <div v-if="showAction" class="op-search__action">
      <slot name="action">
        <div @click="emits('cancel')">取消</div>
      </slot>
    </div>
  </div>
</template>

<script setup lang="ts">
interface IProps {
  showAction?: boolean;
  background?: string;
  placeholder?: string;
  shape?: string;
  modelValue?: string | number;
}
const props = defineProps<IProps>();

const emits = defineEmits<{
  search: [v?: string | number];
  cancel: [];
  clear: [];
  inputClick: [];
  'update:modelValue': [v?: string | number];
}>();

/**
 * 该函数是一个用于处理键盘事件的Vue指令,当键盘按下Enter键时，函数会阻止默认行为并触发一个名为"search"的事件，
 * 将props.modelValue作为参数传递给事件
 */
const onKeypress = (e: KeyboardEvent) => {
  const ENTER_CODE = 13;
  if (e.keyCode === ENTER_CODE) {
    e.preventDefault();
    emits('search', props.modelValue);
  }
};

const onClear = () => {
  emits('clear');
  emits('search', '');
};
</script>

<style lang="scss">
@import './style.scss';
</style>
