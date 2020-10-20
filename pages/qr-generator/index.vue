<template>
  <v-container>
    <v-text-field
      v-model="text"
      label=""
      hide-details
      outlined
      dense
      placeholder="http://example.com"
    >
      <template slot="append">
        <v-btn outlined style="margin-bottom: 6px" @click="generate">
          生成
        </v-btn>
      </template>
    </v-text-field>
    <v-container v-if="qrCode.length > 0">
      <div>
        <v-btn
          v-for="size in imgSize"
          :key="size"
          elevation="2"
          outlined
          :disabled="size === selectedImgSize"
          v-on:click="selectedImgSize = size"
          >{{ `${size} x ${size}` }}</v-btn
        >&nbsp;
      </div>
      <div class="text-center">
        <img
          :src="qrCode"
          :width="selectedImgSize + 'px'"
          :height="selectedImgSize + 'px'"
        />
      </div>
    </v-container>
  </v-container>
</template>

<script>
export default {
  data: () => {
    return {
      text: "",
      qrCode: "",
      selectedImgSize: 100,
      imgSize: [100, 200, 300, 400, 500, 800],
    };
  },
  methods: {
    generate() {
      const size = 300;
      let code = `https://chart.googleapis.com/chart?chs=${size}x${size}&cht=qr&chl=${encodeURIComponent(
        this.text
      )}`;
      this.qrCode = code;
    },
  },
};
</script>