import {CurrentUser, ValidationContext} from 'sanity'
import {useClient} from 'sanity'

export const isAdministrator = (currentUser: Omit<CurrentUser, 'role'> | null) => {
  return !!currentUser?.roles.some((role) => role.name === 'administrator')
}

// type IsUniqueString = (value: string, context: ValidationContext) => Promise<any>

// export const useIsUniqueString: IsUniqueString = (value, context) => {
//   const client = useClient()

//   const {document} = context

//   const id = document?._id.replace(/^drafts\./, '')

//   const params = {
//     draft: `drafts.${id}`,
//     published: id,
//     value,
//   }

//   const query = `!defined(*[
//       _type == 'competencies' &&
//       !(_id in [$draft, $published]) &&
//       title == $value
//     ][0]._id)`

//   return client.fetch(query, params)
// }
