<template>
  <div class="home">
    <Modal v-if="project" :project="project" />
    <Grid :projects="projects" @openModal="openModal" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Grid from "@/components/Grid.vue"; // @ is an alias to /src
import Modal from "@/components/Modal.vue"; // @ is an alias to /src

@Component({
  components: {
    Grid,
    Modal
  }
})
export default class Home extends Vue {
  public project: any = null;

  mounted() {
    setTimeout(() => {
      this.$store.dispatch("getProjects");
    }, 500);
  }

  get projects () {
    return this.$store.getters.projects;
  }

  public openModal(project: any) {
    console.log("OPEN MODAL");
    this.project = project;
  }
}
</script>

<style scope lang="scss">
  
</style>
