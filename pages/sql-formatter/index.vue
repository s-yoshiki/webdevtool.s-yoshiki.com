<template>
  <v-container>
    <h2>{{title}}</h2>
    <v-row no-gutters>
      <v-col sm="6">
        <h3>Input</h3>
        <div class="monacoCover">
          <MonacoEditor
            ref="srcEditor"
            v-model="srcCode"
            :language="language"
            :diffEditor="false"
            :theme="dark ? 'vs-dark' : 'default'"
            :style="{ width: clientWidth, height: clientHeight }"
            :readOnly="true"
            :options="{
              scrollBeyondLastLine: true,
              wordWrap: 'on',
              fontSize: fontSize,
              enableSplitViewResizing: false,
              ignoreTrimWhitespace: false,
            }"
            @editorWillMount="onSrcEditorWillMount"
          />
        </div>
      </v-col>
      <v-col sm="6">
        <h3>Output</h3>
        <div class="monacoCover">
          <MonacoEditor
            ref="dstEditor"
            v-model="dstCode"
            :language="language"
            :theme="dark ? 'vs-dark' : 'default'"
            :style="{ width: clientWidth, height: clientHeight }"
            :readOnly="true"
            :options="{
              scrollBeyondLastLine: true,
              wordWrap: 'on',
              fontSize: fontSize,
              enableSplitViewResizing: false,
              ignoreTrimWhitespace: false,
            }"
            @editorWillMount="onDstEditorWillMount"
          />
        </div>
      </v-col>
    </v-row>
    <h3>Option</h3>
    <v-row style="height: 35px">
      <v-col>Indent</v-col>
      <v-col>
        <v-radio-group v-model="formatOpt.indent" row>
          <v-radio label="2 spaces" value="0"></v-radio>
          <v-radio label="4 spaces" value="1"></v-radio>
          <v-radio label="tab" value="2"></v-radio>
        </v-radio-group>
      </v-col>
    </v-row>
    <v-row style="height: 35px">
      <v-col>Uppercase</v-col>
      <v-col>
        <v-checkbox
          v-model="formatOpt.uppercase"
          label="Uppercase"
          hide-details
        ></v-checkbox>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import MonacoEditor from "vue-monaco";
import {getInfoById} from "~/data/urlist";
import SqlFormatter from "sql-formatter-plus";

const pageInfo = getInfoById('sql-formatter')

export default {
  head: {
    title: pageInfo.title,
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "description" },
    ],
  },
  components: { MonacoEditor },
  data: () => ({
    title: pageInfo.title,
    srcCode:
      "select * from foo_table foo where foo.id > 100 order by foo.name;",
    srcMonaco: null,
    dstMonaco: null,
    language: "sql",
    dark: false,
    fontSize: 12,
    clientWidth: "99%",
    clientHeight: "300px",
    formatOpt: {
      indent: "0",
      uppercase: true,
    },
  }),
  methods: {
    onSrcEditorWillMount(monaco) {
      this.srcMonaco = monaco;
    },
    onDstEditorWillMount(monaco) {
      this.dstMonaco = monaco;
    },
    resize(el) {
      this.$refs.srcEditor.getEditor().layout();
      this.$refs.dstEditor.getEditor().layout();
    },
  },
  mounted() {
    window.addEventListener("resize", this.resize);
  },
  destroyed() {
    window.removeEventListener("resize", this.resize);
  },
  computed: {
    dstCode: function () {
      const indentType = ["  ", "    ", "\t"];
      try {
        return SqlFormatter.format(this.srcCode, {
          language: "sql",
          indent: indentType[Number(this.formatOpt.indent)],
          uppercase: true,
          linesBetweenQueries: 2,
        });
      } catch (e) {
        return "";
      }
    },
  },
};
</script>

<style scoped>
.monacoCover {
  background-color: #9f9f9f;
  padding: 1px;
}
</style>