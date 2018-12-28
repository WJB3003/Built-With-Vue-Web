<template>
  <div @click="openModal" class="project-item hvr-grow-shadow">
    <div>
        <img :src="project.project_preview" />
    </div>
    <div class="project-details">
        <h3>{{project.name}}</h3>
        <p>{{project.short_description}}</p>
    </div>
    <div class="project-stats">
        <div class="project-tags">
            <div v-for="tag in project.tags" class="project-tag">
                {{tag}}
            </div>
        </div>
        <div class="project-views">
            {{project.views}}
        </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component({
    components: {
    }
})
export default class HelloWorld extends Vue {
  @Prop() private project!: any;

  public openModal() {
      this.$emit('openModal', this.project);
  }
}
</script>

<style scoped lang="scss">

.project-item {
    border:1px solid #EFEFEF;
    background:white;
    max-width:378px;
    margin:15px 10px;
    border-radius:6px;
    h3{
        font-size:16px;
        font-weight:bold;
        font-family: inherit;
        margin:0;
        padding:0;
    }
    
    p {
        margin:0;
        margin-top:10px;
        padding:0;
        font-size:14px;
    }
    
    img{
        width:100%;
    }
    
    .project-details {
        background:white;
        padding: 12px 20px;
        border-top:2px solid #EFEFEF;
    }

    &:hover{
        cursor:pointer;
    }
}

.project-stats{
    display:flex;
    align-items: center;
    justify-content: space-between;
    padding:10px;
    .project-tags{ 
        display:flex;
    }

    .project-tag {
        font-size:10px;
        font-weight: bold;
        background:#F3F3F3;
        padding:8px 6px;
        border-radius: 3px;
        margin-left:10px;
    }

    .project-views{
        font-size:14px;
        font-weight:bold;
    }
}

</style>
