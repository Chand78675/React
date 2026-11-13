import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Login } from './components/login/login.jsx'
import'../node_modules/bootstrap/dist/js/bootstrap.bundle.js';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/bootstrap-icons/font/bootstrap-icons.css';
import { NetflixIndex } from './components/login/netflix/netflix-index.jsx'
import { DataBinding } from './components/login/data-binding/data.binding.jsx'
import{EventBinding} from './components/login/event-binding/event-binding.jsx'
import { MouseDemo } from './components/login/mouse-demo/mouse-demo.jsx'
import { MouseAnimation } from './components/login/mouse-animation/mouse-animation.jsx'
import { EmiCalculater } from './components/login/emi-calculater/emi-calculater.jsx'
import { ButtonDemo } from './components/login/button-demo/button-demo.jsx'
import { DebounceDemo } from './components/login/debounce-demo/debounce-demo.jsx'
import { ThrottleDemo } from './components/login/throttle-demo/throttle-demo.jsx'
import { CroselDemo } from './components/login/crosel-demo/crosel-demo.jsx'
import { FormDemo } from './components/login/form-demo/form-demo.jsx'
import { DataBindingExample} from './components/login/sunday-practice/data-binding.jsx'
import { FormikDemo } from './components/login/formik-demo/formik-demo.jsx'
import { HookForm } from './components/login/Hook-Form/hook-form.jsx'
import { FormNew } from './components/login/controlled-components/new.jsx'
import { CondaitionDemo } from './components/login/condational-rendaring/condational-rendering-demo.jsx'
import { LifeCycleDemo } from './components/login/mount-life-cycle-demo/life-cycle-demo.jsx'
import { ContexDemo } from './components/login/contex-demo.jsx/contex-demo.jsx'
import { ReducerDemo } from './components/login/Reducer-demo/reducer-demo.jsx'
import { Portfolioindex } from './portfolio-demo/portfolio-index.jsx'
import { VideoTutorialIndex } from './video-tutorials/video-tutorials-index.jsx'
createRoot(document.getElementById('root')).render(
  <VideoTutorialIndex/>
)
