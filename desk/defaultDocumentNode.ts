import type {DefaultDocumentNodeResolver} from 'sanity/desk'
import DocumentsPane from 'sanity-plugin-documents-pane'

export const defaultDocumentNode: DefaultDocumentNodeResolver = (S, {schemaType}) => {
  switch (schemaType) {
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
