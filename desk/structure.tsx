import type {StructureResolver} from 'sanity/desk'
import {RocketIcon, DocumentsIcon} from '@sanity/icons'
import {FaBuilding, FaPalette} from 'react-icons/fa'
import {BsMenuButtonFill} from 'react-icons/bs'

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
              S.listItem()
                .title('Navigation')
                .child(
                  S.list()
                    .title('Menu')
                    .items([S.documentTypeListItem('menu').title('Menu').icon(BsMenuButtonFill)])
                ),
            ])
        ),
      S.listItem()
        .title('Pages')
        .child(
          S.list()
            .title('Pages')
            .items([
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
