<template>
  <div class="write">
    <div className="shop">
      <div className="text-area">
        <div
          ref="editorElemMenu"
          style="backgroundcolor: '#f1f1f1'; border: '1px solid #ccc'"
          className="editorElem-menu"
        />
        <div
          ref="editorElemBody"
          :className="
            value && value !== '<p><br></p>'
              ? 'contentClass editorElem-body'
              : 'placeholderClass editorElem-body'
          "
          style="height: 700;border: '1px solid #ccc',borderTop: 'none'"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, reactive, toRefs, ref } from "vue";

import E from "wangeditor";

interface DataProps {
  editor: any;

  editorContent: string;

  getContent: (ref?: any) => void;
}

const props = defineProps({
  options: {
    type: Object,

    default: () => ({}),
  },

  value: {
    type: String,

    default: "",
  },
});



const editorElemMenu = ref();

const editorElemBody = ref();

const data: DataProps = reactive({
  editorContent: "",
  editor: {},
  getContent: () => {
    console.log(props.value,11111);
    
    data.editor.txt.html(props.value);
  },
});

const emit = defineEmits(["onEditor", "update:value"]);

onMounted(() => {
  const elemMenu = editorElemMenu.value;

  const elemBody = editorElemBody.value;

  data.editor = new E(elemMenu, elemBody);
  // 使用 onchange 函数监听内容的变化，并实时更新到 state 中
  (data.editor.config.placeholder = ""),
    (data.editor.config.onchange = () => {
      // console.log(data.editor.txt.html());
      data.editorContent = data.editor.txt.html();
      // 向外部返回一个处理过的值
      emit("onEditor", data.editor.txt.html());

      emit("update:value", data.editor.txt.html());
    });

    //给内容框添加值
    setTimeout(()=>{
     data.editor.txt.append(props.value);
    },100)

  data.editor.config.customUploadImg = function (files: any, insert: any) {
    // files 是 input 中选中的文件列表insert 是获取图片 url 后，插入到编辑器的方法

    // let file;

    // if (files && files.length) {

    //  file = files[0];

    // } else {

    //  return

    // }

    // 图片上传

    console.log("files1", files);

    const formData = new FormData();

    formData.append("file", files[0]);

    // console.log("files", files, insert);

    // formData.append('Banners',{id:editorinfo.id,naviChildId:editorinfo.naviChildId})
  };

  data.editor.config.menus = [
    "head", // 标题

    "bold", // 粗体

    "fontSize", // 字号

    "fontName", // 字体

    "italic", // 斜体

    "underline", // 下划线

    "strikeThrough", // 删除线

    "foreColor", // 文字颜色

    "backColor", // 背景颜色

    "link", // 插入链接

    "list", // 列表

    "justify", // 对齐方式

    "quote", // 引用

    "emoticon", // 表情

    "image", // 插入图片

    "table", // 表格

    "video", // 插入视频

    "code", // 插入代码

    "undo", // 撤销

    "redo", // 重复
  ];

  data.editor.config.uploadImgShowBase64 = true;

  data.editor.create();

  // data.getContent()
});

const refData = toRefs(data);
</script>

<style scoped lang="less">
.write {
  width: 900px;

  border: 1px solid #000;
}

::v-deep(.w-e-text-container) {
  min-height: 349px;

  max-height: 449px;

  overflow-y: auto;

  line-height: 32px;

  &:focus {
    outline: 0;

    box-shadow: 0 0 0 1px rgba(0, 88, 240, 1) inset;
  }

  &:active {
    outline: 0;

    box-shadow: 0 0 0 1px rgba(0, 88, 240, 1) inset;
  }

  &:visited {
    outline: 0;

    box-shadow: 0 0 0 1px rgba(0, 88, 240, 1) inset;
  }

  &::-webkit-scrollbar {
    /*滚动条整体样式*/

    width: 0px; /*高宽分别对应横竖滚动条的尺寸*/
  }

  .placeholder {
    line-height: 32px;

    left: 16px;

    top: 16px;

    width: calc(100% - 16px);
  }

  .w-e-text {
    max-height: 449px;

    line-height: 32px;

    padding: 16px 16px;

    color: rgb(80, 78, 78);

    &::-webkit-scrollbar {
      /*滚动条整体样式*/

      width: 0px; /*高宽分别对应横竖滚动条的尺寸*/
    }

    p {
      line-height: 32px;

      margin: 0px;
    }
  }
}

.placeholderClass {
  :deep(.w-e-text-container) {
    background: #f2f3f5;

    border-radius: 2px;

    color: #d1d5dd;

    &:hover {
      outline: 0;

      box-shadow: none;

      // box-shadow: 0 0 0 1px #F2F3F5 inset;
    }

    &:focus {
      outline: 0;

      box-shadow: 0 0 0 1px rgba(0, 88, 240, 1) inset;
    }
  }
}

.contentClass {
  :deep(.w-e-text-container) {
    background: #fff;

    border-radius: 2px;

    color: #171b23;

    box-shadow: 0 0 0 1px rgba(0, 88, 240, 1) inset;

    &:hover {
      outline: 0;

      box-shadow: none;

      box-shadow: 0 0 0 1px rgba(0, 88, 240, 1) inset;
    }

    &:focus {
      outline: 0;

      box-shadow: 0 0 0 1px rgba(0, 88, 240, 1) inset;
    }
  }
}
</style>
