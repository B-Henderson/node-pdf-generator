<template>
  <section class="section display-box">
    <b-tabs type="is-toggle" expanded>
      <b-tab-item label="From URL" icon="application">
        <div class="card">
          <div class="card-content">
            <form action="/generate-pdf" type="post">
              <b-field abel="Url">
                <b-input placeholder="URL" type="url"></b-input>
              </b-field>
            </form>
          </div>
        </div>
      </b-tab-item>
      <b-tab-item label="From File" icon="folder-upload"></b-tab-item>
      <b-tab-item label="From Creator" icon="lead-pencil"></b-tab-item>
    </b-tabs>
  </section>
</template>
<style lang="scss">
.display-box {
  min-height: 200px;
}
</style>
