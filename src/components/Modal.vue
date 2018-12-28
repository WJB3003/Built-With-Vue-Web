<template>
  <div class="modal">
    <div class="modal-body">
      <div class="project-info">
        <div>
          <h3>{{project.name}}</h3>
          <p>{{project.short_description}}</p>
          <!-- <div class="project-tags">
                    <div :key="tag" v-for="tag in project.tags" class="project-tag">
                        {{tag}}
                    </div>
          </div>-->
        </div>
        <div class="visit-site-btn">
          <button>Visit Site</button>
        </div>
      </div>
      <div class="project-img-links">
        <div class="project-img">
          <img :src="project.project_preview">
        </div>
        <div class="project-links">
          <div v-if="project.twitter_url" class="project-link">
            <div class="project-link-icon">
              <i class="fab fa-twitter"></i>
            </div>
            <div class="project-link-label">
              <h3>Twitter</h3>
              <p>{{project.twitter_url}}</p>
            </div>
            <div class="project-link-arrow">
              <i class="fas fa-long-arrow-alt-right"></i>
            </div>
          </div>
          <div v-if="project.instagram_url" class="project-link">
            <div class="project-link-icon">
              <i class="fab fa-instagram"></i>
            </div>
            <div class="project-link-label">
              <h3>Instagram</h3>
              <p>{{project.instagram_url}}</p>
            </div>
            <div class="project-link-arrow">
              <i class="fas fa-long-arrow-alt-right"></i>
            </div>
          </div>
          <div v-if="project.facebook_url" class="project-link">
            <div class="project-link-icon">
              <i class="fab fa-facebook"></i>
            </div>
            <div class="project-link-label">
              <h3>Facebook</h3>
              <p>{{project.facebook_url}}</p>
            </div>
            <div class="project-link-arrow">
              <i class="fas fa-long-arrow-alt-right"></i>
            </div>
          </div>
          <div v-if="project.product_hunt_url" class="project-link">
            <div class="project-link-icon">
              <i class="fab fa-product-hunt"></i>
            </div>
            <div class="project-link-label">
              <h3>Product Hunt</h3>
              <p>{{project.product_hunt_url}}</p>
            </div>
            <div class="project-link-arrow">
              <i class="fas fa-long-arrow-alt-right"></i>
            </div>
          </div>
          <div v-if="project.github_url" class="project-link">
            <div class="project-link-icon">
              <i class="fab fa-github"></i>
            </div>
            <div class="project-link-label">
              <h3>Github</h3>
              <p>{{project.github_url}}</p>
            </div>
            <div class="project-link-arrow">
              <i class="fas fa-long-arrow-alt-right"></i>
            </div>
          </div>
          <div v-if="project.youtube_url" class="project-link">
            <div class="project-link-icon">
              <i class="fab fa-youtube"></i>
            </div>
            <div class="project-link-label">
              <h3>Youtube</h3>
              <p>{{project.youtube_url}}</p>
            </div>
            <div class="project-link-arrow">
              <i class="fas fa-long-arrow-alt-right"></i>
            </div>
          </div>
        </div>
      </div>
      <div class="project-img-links">
        <div class="project-img">
          Share
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component({
  components: {}
})
export default class HelloWorld extends Vue {
  @Prop() project!: any;
}
</script>

<style scoped lang="scss">
.modal {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.3);
  z-index: 1;
}

.modal-body {
  background: #f9f9fb;
  padding: 30px;
  max-width: 850px;
  margin: auto;
  margin-top: 40px;
}

h3 {
  margin: 0;
  padding: 0;
}

p {
  margin: 0;
  padding: 0;
  margin-bottom: 6px 20px;
  font-size: 14px;
  color: gray;
}

.project-info {
  display: flex;
  justify-content: space-between;
  border: 2px solid #efefef;
  padding: 20px;
  background: white;
  border-radius: 3px;
}

.project-tags {
  display: flex;
  .project-tag {
    font-size: 12px;
    font-weight: bold;
    background: #f3f3f3;
    padding: 8px 10px;
    border-radius: 3px;
    margin-right: 6px;
    &:hover {
      pointer: cursor;
    }
  }
}

.visit-site-btn {
  button {
    color: white;
    font-weight: bold;
    background: #55ba87;
    font-family: inherit;
    border: 0;
    padding: 14px 50px;
    border-radius: 3px;
    outline: none;
    &:hover {
      cursor: pointer;
    }
  }
}

.project-img {
  img {
    background: white;
    border-radius: 3px;
    width: 500px;
    border: 2px solid #efefef;
    padding: 20px;
  }
}

.project-img-links {
  margin-top: 10px;
  display: flex;
  justify-content: space-between;
}

.project-links {
  width: 360px;
  border-radius: 3px;
  padding-left: 20px;
}

.project-link {
  display: flex;
  background: white;
  border-radius: 3px;
  border: 2px solid #efefef;
  padding: 14px 10px;
  margin-bottom: 10px;
  &:hover {
    cursor: pointer;
  }

  i {
    font-size: 24px;
  }

  h3 {
    font-size: 14px;
  }

  p {
    font-size: 12px;
  }

  .project-link-icon {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50px;
    color: #55ba87;
  }

  .project-link-label {
    flex-grow: 1;
  }

  .project-link-arrow {
    display: flex;
    justify-content: center;
    align-items: center;
    i {
      font-size: 16px;
      opacity: 0.2;
    }
  }
}
</style>
