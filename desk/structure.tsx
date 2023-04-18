import type {StructureResolver} from 'sanity/desk'
import {RocketIcon, DocumentsIcon} from '@sanity/icons'
import {FaBuilding, FaPalette} from 'react-icons/fa'
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
        .title('Pages')
        .child(
          S.list()
            .title('Pages')
            .items([
              S.documentTypeListItem('homePage').title('Home').icon(AiOutlineHome),
              S.listItem()
                .title('Competencies Page')
                .child(
                  S.list()
                    .title('Competencies Page Content')
                    .items([
                      S.documentTypeListItem('competencies').title('Competencies').icon(RocketIcon),
                      S.documentTypeListItem('competenciesPage')
                        .title('Page Content')
                        .icon(DocumentsIcon),
                    ])
                ),
            ])
        ),
      //   .child(S.documentTypeListItem('competencies').title('Competencies')),

      // S.documentTypeListItem('competencies').title('Competencies').icon(RocketIcon),
      // S.documentTypeListItem('brandLogo').title('Brand Logo').icon(FaBuilding),
      // S.divider(),
    ])
