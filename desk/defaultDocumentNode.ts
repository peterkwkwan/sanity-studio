import type {DefaultDocumentNodeResolver} from 'sanity/desk'
import DocumentsPane from 'sanity-plugin-documents-pane'

export const defaultDocumentNode: DefaultDocumentNodeResolver = (S, {schemaType}) => {
  switch (schemaType) {
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
