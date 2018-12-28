<template>
  <div>
    <div v-if="projects.length === 0">Loading</div>
    <div class="grid">
        <ProjectItem :key="project.slug" v-for="project in projects" :project="project" @openModal="openModal" />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import ProjectItem from "@/components/ProjectItem.vue"; // @ is an alias to /src

@Component({
    components: {
        ProjectItem
    }
})
export default class HelloWorld extends Vue {
  @Prop() private projects!: Array<any>;

  public openModal(project: any) {
      this.$emit('openModal', project);
  }
}
</script>

<style scoped lang="scss">
.grid {
    max-width:1200px;
    display:flex;
    margin:auto;
    flex-wrap: wrap;
    margin-top:30px;
}
</style>
