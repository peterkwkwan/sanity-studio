import {homePage} from './documents/pages/home'
import {comptenciesPage} from './documents/pages/w-r-competencies'
import {skillsPage} from './documents/pages/skills'
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
import learningDevelopment from './documents/content/learningDevelopment'
import skills from './documents/content/skills'
import jobSkills from './objects/jobSkills'
import titleWithDescription from './objects/titleWithDescription'
import practiceSkills from './documents/content/practiceSkills'
import {careerFramework} from './documents/pages/career-framework'

export const schemaTypes = [
  homePage,
  competencies,
  comptenciesPage,
  skillsPage,
  careerFramework,
  learningDevelopment,
  practiceSkills,
  skills,
  jobSkills,
  jobs,
  jobFamily,
  jobFamilyGroup,
  businessSegment,
  Logo,
  colors,
  menu,
  menuOption,
  titleWithDescription,
  submenuOption,
  jobFamilyCard,
]
