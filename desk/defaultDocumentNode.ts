import type {DefaultDocumentNodeResolver} from 'sanity/desk'
import Iframe from 'sanity-plugin-iframe-pane'
import DocumentsPane from 'sanity-plugin-documents-pane'
import {SanityDocument, Slug} from 'sanity'

export const defaultDocumentNode: DefaultDocumentNodeResolver = (S, {schemaType}) => {
  switch (schemaType) {
    case `homePage`:
      return S.document().views([
        S.view.form(),
        S.view
          // enable live previews
          // READ: https://www.sanity.io/guides/nextjs-live-preview#0444f4dd6f03
          .component(Iframe)
          .options({
            url: (doc: SanityDocument) =>
              (doc?.slug as Slug)?.current
                ? `http://localhost:3000/api/preview?slug=${doc.slug.current}`
                : `http://localhost:3000/api/preview`,
          })
          .title('Live Preview'),
      ])
    // TO-DO: should render out all practice areas that are referenced by this competency
    // groq query needs to be tweaked? Not sure if possible

    // case `competencies`:
    //   return S.document().views([
    //     S.view.form(),
    //     S.view
    //       .component(DocumentsPane)
    //       .options({
    //         query: `*[
    //           _type == "competenciesPage" &&
    //           references($id)
    //         ]`,
    //         params: {id: `_id`},
    //       })
    //       .title('Practice Area(s)'),
    //   ])
    default:
      return S.document().views([S.view.form()])
  }
}
