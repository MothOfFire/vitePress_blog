<script setup lang="ts">
import { computed } from "vue";
const props = defineProps<{
  modelValue: string | number;
  placeholder: string;
  disabled?: boolean;
  clearable?: boolean;
}>();

const emit = defineEmits<{
  (e: "update:modelValue", value: string | number): void;
}>();

const input = (event: Event) => {
  const target = event.target as HTMLInputElement;
  emit("update:modelValue", target.value);
};

// 计算类名数组
const MyInput = computed(() => {
  return [
    "my-input",
    {
      "my-input-disabled": props.disabled,
    },
  ];
});

const clearStyle = computed(() => {
  return {
    display: props.clearable ? (props.modelValue ? "block" : "none") : "none",
    cursor: props.disabled ? "not-allowed" : "pointer",
  };
});

// 清空输入框
const clearInput = () => {
  emit("update:modelValue", "");
};
</script>

<template>
  <div :class="MyInput">
    <!-- 输入框主体 -->
    <input
      type="text"
      :value="modelValue"
      @input="input"
      :placeholder="placeholder"
      :disabled="disabled"
    />
    <!-- 清空图标 -->
    <span class="clear-icon" :style="clearStyle" @click="clearInput">
      <i>X</i>
    </span>
  </div>
</template>

<style lang="scss" scoped>
.my-input {
  // 转换为行块元素
  display: inline-block;
  // 最小宽度
  min-width: 250px;
  input {
    // 去除默认样式
    border: none;
    outline: none;
    // 设置边框
    border: 1px solid #ccc;
    // 设置圆角
    border-radius: 25px;
    // 设置内边距
    padding: 8px;
    // 设置字体大小
    font-size: 14px;
    transition: all 0.15s ease;
    &:focus {
      // 设置边框颜色
      border-color: #007bff;
    }
  }
}
// 禁用状态
.my-input-disabled {
  input {
    background-color: #ccc;
    cursor: no-drop;
  }
}
.clear-icon {
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translateY(-50%);
  i {
    font-size: 14px;
    color: #999;
  }
}
// 鼠标移入
.my-input:hover .clear-icon {
  display: block;
}
// 鼠标移入
.my-input:hover .clear-icon i {
  color: #007bff;
}
</style>
