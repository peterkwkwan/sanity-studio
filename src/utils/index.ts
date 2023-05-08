import {CurrentUser, ValidationContext} from 'sanity'

export const isAdministrator = (currentUser: Omit<CurrentUser, 'role'> | null) => {
  return !!currentUser?.roles.some((role) => role.name === 'administrator')
}

type IsUniqueString = (value: string, context: ValidationContext) => Promise<any>

export const isUniqueString: IsUniqueString = (value, context) => {
  const {getClient, document, path = []} = context

  const client = getClient({apiVersion: '2023-05-01'})

  const id = document?._id.replace(/^drafts\./, '')

  const params = {
    draft: `drafts.${id}`,
    published: id,
    value,
  }

  const query = `!defined(*[
      _type == '${document?._type}' &&
      !(_id in [$draft, $published]) &&
      lower(${path[0]}) == lower($value)
    ][0]._id)`

  return client.fetch(query, params)
}
