<template>
  <div class="input">
    <div class="funs"></div>
    <n-scrollbar style="flex: 1; overflow-y: auto">
      <editor-content :editor="editor" />
    </n-scrollbar>
  </div>
</template>

<script setup lang="ts">
import { useEditor, EditorContent } from '@tiptap/vue-3';
import StarterKit from '@tiptap/starter-kit';
import Placeholder from '@tiptap/extension-placeholder';
import '@renderer/assets/css/edit.less';

const editor = useEditor({
  content: '',
  extensions: [
    StarterKit,
    Placeholder.configure({
      placeholder: '请输入'
    })
  ]
});
</script>

<style scoped lang="less">
.input {
  height: 100%;
  display: flex;
  flex-direction: column;
  > :last-child {
    flex: 1;
  }
}
.funs {
  height: 35px;
}
</style>
