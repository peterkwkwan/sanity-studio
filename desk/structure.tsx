import type {StructureResolver} from 'sanity/desk'
import {RocketIcon, DocumentsIcon} from '@sanity/icons'
import {FaBuilding, FaPalette, FaSuitcase, FaLayerGroup} from 'react-icons/fa'
import {HiUserGroup} from 'react-icons/hi'
import {MdGroup} from 'react-icons/md'
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
              S.documentTypeListItem('competencies').title('Competencies').icon(RocketIcon),
              S.documentTypeListItem('jobs').title('Jobs').icon(FaSuitcase),
              S.documentTypeListItem('jobFamily').title('Job Family').icon(MdGroup),
              S.documentTypeListItem('jobFamilyGroup').title('Job Family Group').icon(HiUserGroup),
              S.documentTypeListItem('businessSegment')
                .title('Business Segment')
                .icon(FaLayerGroup),
            ])
        ),
      S.listItem()
        .title('Pages')
        .child(
          S.list()
            .title('Pages')
            .items([
              S.documentTypeListItem('homePage').title('Home').icon(AiOutlineHome),
              S.documentTypeListItem('competenciesPage')
                .title('Competencies Page')
                .icon(DocumentsIcon),
            ])
        ),
    ])
