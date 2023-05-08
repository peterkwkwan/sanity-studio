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
import jobFamily from './documents/content/jobFamily'
import businessSegment from './documents/content/businessSegment'
import businessSegmentCompetencies from './objects/businessSegmentCompetencies'

export const schemaTypes = [
  homePage,
  competencies,
  comptenciesPage,
  jobs,
  jobFamily,
  jobFamilyGroup,
  businessSegment,
  businessSegmentCompetencies,
  Logo,
  colors,
  menu,
  menuOption,
  submenuOption,
  jobFamilyCard,
]
