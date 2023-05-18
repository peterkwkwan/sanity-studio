import type {StructureResolver} from 'sanity/desk'
import {RocketIcon, DocumentsIcon} from '@sanity/icons'
import {FaBuilding, FaPalette, FaSuitcase, FaLayerGroup} from 'react-icons/fa'
import {GiTeacher, GiSkills} from 'react-icons/gi'
import {HiUserGroup} from 'react-icons/hi'
import {MdGroup} from 'react-icons/md'
import {TbStairsUp} from 'react-icons/tb'
import {BsFillMenuButtonWideFill} from 'react-icons/bs'
import {AiOutlineHome} from 'react-icons/ai'

export const structure: StructureResolver = (S) =>
  S.list()
    .id('root')
    .title('Content')
    .items([
      S.listItem()
        .title('Site Settings')
        .child(
          S.list()
            .title('Settings')
            .items([
              S.listItem()
                .title('Brand')
                .child(
                  S.list()
                    .title('Brand assets')
                    .items([
                      S.documentTypeListItem('brandLogo').title('Brand Logo').icon(FaBuilding),
                      S.documentTypeListItem('brandColors').title('Colors').icon(FaPalette),
                    ])
                ),
              S.documentTypeListItem('menu').title('Menu').icon(BsFillMenuButtonWideFill),
            ])
        ),
      S.listItem()
        .title('Content')
        .child(
          S.list()
            .title('Content')
            .items([
              S.documentTypeListItem('jobs').title('Jobs').icon(FaSuitcase),
              S.documentTypeListItem('jobFamily').title('Job Family').icon(MdGroup),
              S.documentTypeListItem('jobFamilyGroup').title('Job Family Group').icon(HiUserGroup),
              S.documentTypeListItem('businessSegment')
                .title('Business Segment')
                .icon(FaLayerGroup),
              S.documentTypeListItem('competencies').title('Competencies').icon(RocketIcon),
              S.documentTypeListItem('practiceSkills').title('Practice Skills').icon(TbStairsUp),
              S.documentTypeListItem('skills').title('Job Skills').icon(GiSkills),
              S.documentTypeListItem('learningDevelopment')
                .title('Learning & Development')
                .icon(GiTeacher),
            ])
        ),
      S.listItem()
        .title('Pages')
        .child(
          S.list()
            .title('Pages')
            .items([
              S.documentTypeListItem('homePage').title('Home').icon(AiOutlineHome),

              // Competencies
              S.listItem()
                .title('Competencies Page')
                .child(
                  S.list()
                    .title('Competencies Page')
                    .items([
                      S.documentTypeListItem('competenciesPage')
                        .title('Competencies Page')
                        .icon(DocumentsIcon),
                      S.documentTypeListItem('competencies').title('Competencies').icon(RocketIcon),
                    ])
                ),

              // Skills
              S.listItem()
                .title('Skills Page')
                .child(
                  S.list()
                    .title('Skills Page')
                    .items([
                      S.documentTypeListItem('skillsPage')
                        .title('Page Content')
                        .icon(DocumentsIcon),
                      S.documentTypeListItem('practiceSkills')
                        .title('Practice Skills')
                        .icon(TbStairsUp),
                    ])
                ),

              S.documentTypeListItem('careerFramework')
                .title('Career Framework')
                .icon(DocumentsIcon),
            ])
        ),
    ])
