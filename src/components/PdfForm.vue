<template>
  <div>
    <b-tabs type="is-toggle" expanded v-model="activeTab">
      <b-tab-item label="From URL" icon="application">
        <section>
          <b-field abel="Url">
            <b-input placeholder="URL" type="url" v-model="url" @keyup.native.enter="getPdf"></b-input>
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
    </b-tabs>

    <b-button @click="getPdf">Submit</b-button>

    <b-loading :is-full-page="isFullPage" :active.sync="isLoading" :can-cancel="false"></b-loading>
  </div>
</template>
<script>
import axios from "axios";

export default {
  data() {
    return {
      activeTab: 0,
      dropFiles: [],
      url: "",
      errors: [],
      isLoading: false,
      isFullPage: true
    };
  },
  methods: {
    getPdf() {
      switch (this.activeTab) {
        case 0: {
          this.isLoading = true;
          axios
            .post(
              "/generate-pdf",
              {
                url: this.url
              },
              {
                headers: {},
                responseType: "blob"
              }
            )
            .then(response => {
              this.isLoading = false;
              const blob = new Blob([response.data], {
                type: "application/octet-stream"
              });
              const blobURL = window.URL.createObjectURL(blob);
              const link = document.createElement("a");
              link.style.display = "none";
              document.body.appendChild(link);
              link.href = blobURL;
              link.setAttribute("download", "your_pdf.pdf");
              link.click();
              document.body.removeChild(link);
            })
            .catch(error => {
              // response tyle is blob and needs converted with file reader
              const reader = new FileReader();

              reader.onload = event => {
                this.errors = JSON.parse(event.srcElement.result);
                this.errorMessage();
              };

              reader.readAsText(error.response.data);
            });

          break;
        }
        case 1: {
          console.log("tab 1 active");
          break;
        }
        default: {
          throw new Error("no default specified");
        }
      }
    },
    errorMessage() {
      this.isLoading = false;
      const error = this.errors.errors[0];
      this.$buefy.notification.open({
        message: `${error.msg} in field ${error.param}`,
        position: "is-bottom-right",
        type: "is-danger",
        hasIcon: true,
        duration: 5000
      });
    }
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

