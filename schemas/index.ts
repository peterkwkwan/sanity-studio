import {homePage} from './documents/pages/home'
import {comptenciesPage} from './documents/pages/w-r-competencies'
import competencies from './documents/content/competencies'

import colors from './documents/site/brand/colors'
import menu from './documents/site/navigation/menu'
import menuOption from './objects/menuOption'
import submenuOption from './objects/submenuOption'
import jobFamilyCard from './objects/jobFamilyCard'
import Logo from './documents/site/brand/logo'
import jobs from './documents/content/jobs'
import jobFamilyGroup from './documents/content/jobFamilyGroup'
import jobFamilyCompetencies from './objects/jobFamilyCompetencies'
import jobFamily from './documents/content/jobFamily'

export const schemaTypes = [
  homePage,
  competencies,
  comptenciesPage,
  jobs,
  jobFamily,
  jobFamilyGroup,
  jobFamilyCompetencies,
  Logo,
  colors,
  menu,
  menuOption,
  submenuOption,
  jobFamilyCard,
]
