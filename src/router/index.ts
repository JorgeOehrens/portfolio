import { createRouter, createWebHistory } from 'vue-router'
import TechnologyView from '../views/TechnologyView.vue'
import ExperienceView from '../views/ExperienceView.vue'
import ProjectView from '../views/ProjectsView.vue'



const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/tecnologias',
      name: 'tecnologias',
      component: TechnologyView
    },
    {
      path: '/experiencia',
      name: 'experiencia',
      component : ExperienceView
    },
    {
      path:'/proyectos',
      name:'proyectos',
      component:ProjectView
      
    }
  ]
})

export default router
