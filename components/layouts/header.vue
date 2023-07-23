<template>
  <div class="header flex w-full justify-around">
    <img
      src="/assets/img/001.jpg"
      alt="logo"
      class="w-10 h-10 object-cover rounded-full"
      @click="navigate('/')"
    />
    <div class="flex">
      <p
        v-for="(item, index) in ITEMS"
        :key="index"
        @click="navigate('/', item.hash)"
      >
        {{ item.name }}
      </p>
    </div>
    <button @click="navigate('/inquiry')">お問い合わせ</button>
  </div>
</template>

<style>
.header {
  background-color: blue;
  color: aliceblue;
  display: flex;
}
</style>

<script>
import { defineComponent } from "vue";
import { useNavigate } from "@/utils/navigate";

export default defineComponent({
  setup() {
    const { navigate } = useNavigate();
    const ITEMS = [
      {
        name: "特徴",
        hash: "#feature",
      },
      {
        name: "機能紹介",
        hash: "#function",
      },
      {
        name: "導入費用",
        hash: "#cost",
      },
      {
        name: "利用者の声",
        hash: "#voice",
      },
      {
        name: "よくある質問",
        hash: "#faq",
      },
      {
        name: "ニュースお知らせ",
        hash: "#news",
      },
    ];

    return {
      navigate,
      ITEMS,
    };
  },
});
</script>
