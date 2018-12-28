import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    projects: []
  },
  mutations: {
    setProjects(state, projects) {
      state.projects = projects;
    }
  },
  actions: {
    getProjects({commit}) {
      gapi.client.sheets.spreadsheets.values
        .get({
          spreadsheetId: "1nGXKoyGO8ziRztYVBj8LPci76WD36PFGE_7WbTNn-uU",
          range: "Form Responses 1"
        })
        .then(
          (response: any) => {
            const values = response.result.values;
            const projects : any = [];
            values.map((project: any) => {
              const obj = {
                date_created: project[0],
                name: project[1],
                short_description: project[2],
                additional_infomration: project[3],
                project_url:project[4],
                project_preview: project[5],
                creators_name: project[6],
                creators_profile_img: project[8],
                twitter_url: project[9],
                facebook_url: project[10],
                instagram_url: project[11],
                product_hunt_url: project[12],
                github_url: project[13],
                youtube_url: project[14],
                status: project[15],
                views: project[16],
                tags: project[17]
              };
              if(obj.status === 'Approved' && obj.views) {
                const tags = obj.tags.split(',');
                obj.tags = tags;
                obj.views = parseInt(obj.views);
                projects.push(obj);
              }
            })
            commit('setProjects', projects);
          },
          (response: any) => {
          }
        );
    }
  },
  getters: {
    projects(state) {
      return state.projects;
    }
  }
})
