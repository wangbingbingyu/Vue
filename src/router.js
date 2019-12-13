import Vue from 'vue'
import Router from 'vue-router'
import Index from './components/out/index.vue'
import Login from './components/login/login.vue'
import TeacherReg from './components/login/teacher-register.vue'
import Teacherogin from './components/login/teacher-login.vue'
import Teacherforget from './components/login/teacher-forget.vue'
import Content from './components/index/contents.vue'
import Base from './components/base/base.vue'
import Myinform from './components/base/myinform.vue'
import Attestation from './components/base/attestation.vue'
import Pass from './components/base/pass.vue'
import Course from './components/course/course.vue'
import Mycourse from './components/course/mycourse.vue'
import Qa from './components/qa/qa.vue'
import Myquestion from './components/qa/myquestion.vue'
import Myanswer from './components/qa/myanswer.vue'
import Upload from './components/course/uploadcourse.vue'
import Myallcourse from './components/course/myallcourse.vue'

Vue.use(Router)

const router = new Router({
    routes: [
        { path: '/', redirect: '/login' },
        {
            path: '/login',
            component: Login,
            children: [
                { path: '', component: Teacherogin },
                { path: 'teacherLogin', component: Teacherogin },
                { path: 'studentLogin', component: Teacherogin },
                { path: 'teacherReg', component: TeacherReg },
                { path: 'teacherForget', component: Teacherforget },
            ]
        },
        {
            path: '/index',
            component: Index,
            children: [
                { path: '', component: Content },
                { path: 'content', component: Content },
                {
                    path: '/base',
                    component: Base,
                    children: [
                        { path: '', component: Myinform },
                        { path: 'myinform', component: Myinform },
                        { path: 'attestation', component: Attestation },
                        { path: 'pass', component: Pass },
                    ]
                },
                {
                    path: '/course',
                    component: Course,
                    children: [
                        { path: '', component: Mycourse },
                        { path: 'mycourse', component: Mycourse },
                        { path: 'upload', component: Upload },
                        { path: 'mysctive', component: Myallcourse },
                    ]
                },
                {
                    path: '/qa',
                    component: Qa,
                    children: [
                        { path: '', component: Myquestion },
                        { path: 'myquestion', component: Myquestion },
                        { path: 'myanswer', component: Myanswer },
                    ]
                },
                {
                    path: '/salay',
                }
            ]
        },
    ]
})

const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err)
}

export default router