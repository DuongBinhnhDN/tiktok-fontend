import HeaderOnly from '../layouts/HeaderOnly'


import Home from '../pages/Home'
import Following from '../pages/Following'
import Profile from '../pages/Profile'
import Upload from '../pages/Upload'
import Search from '../pages/Search'
import Live from '../pages/Live'
import Messages from '../pages/Messages'


const publicRoutes = [
    { path: '/', component: Home },
    { path: '/following', component: Following },
    { path: '/@:nickname', component: Profile },
    { path: '/live', component: Live },
    { path: '/upload', component: Upload, layout: HeaderOnly },
    { path: '/search', component: Search, layout: null },
    { path: '/messages', component: Messages, layout: HeaderOnly },
]

const privateRoutes = [

]

export { publicRoutes, privateRoutes }