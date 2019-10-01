<template>
  <form action="/generate-pdf" type="post">
    <b-tabs type="is-toggle" expanded v-model="activeTab">
      <b-tab-item label="From URL" icon="application">
        <section>
          <b-field abel="Url">
            <b-input placeholder="URL" type="url" v-model="pdfurl.url"></b-input>
          </b-field>
        </section>
      </b-tab-item>
      <b-tab-item label="From File" icon="upload">
        <b-field class="upload-tab">
          <b-upload v-model="dropFiles" multiple drag-drop>
            <section class="section">
              <div class="content has-text-centered">
                <p>
                  <b-icon icon="upload" size="is-large"></b-icon>
                </p>
                <p>Drop your files here or click to upload</p>
              </div>
            </section>
          </b-upload>
        </b-field>

        <div class="tags">
          <span v-for="(file, index) in dropFiles" :key="index" class="tag is-primary">
            {{file.name}}
            <button
              class="delete is-small"
              type="button"
              @click="deleteDropFile(index)"
            ></button>
          </span>
        </div>
      </b-tab-item>
      <!-- <b-tab-item label="From Creator" icon="lead-pencil">
        <section>
          <b-field abel="Url">
            <b-input placeholder="URL" type="url"></b-input>
          </b-field>
        </section>
      </b-tab-item>-->
    </b-tabs>
    <b-button @click="getPdf">Submit</b-button>
    <b-button @click="downloadPdf">Download PDF</b-button>
  </form>
</template>
<script>
import "core-js/stable";
import "regenerator-runtime/runtime";
export default {
  data() {
    return {
      activeTab: 0,
      dropFiles: [],
      pdfurl: { url: "https://www.visitscotland.com" }
    };
  },
  methods: {
    async getPdf() {
      switch (this.activeTab) {
        case 0: {
          const response = await fetch("/generate-pdf", {
            method: "POST",
            resposeType: "arraybuffer",
            headers: {
              "Content-Type": "application/json",
              Accept: "application/pdf"
            },
            redirect: "follow",
            body: JSON.stringify(this.pdfurl)
          });

          break;
        }
        case 1: {
          console.log("tab 1 active");
          break;
        }
      }
    },
    downloadPdf() {}
  }
};
</script>
<style lang="scss">
.display-box {
  min-height: 200px;
}
.upload-tab {
  display: flex;
  align-content: center;
  justify-content: center;
}
.tab-content {
  min-height: 230px;
}
</style>

