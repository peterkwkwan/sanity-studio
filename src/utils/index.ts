import {CurrentUser} from 'sanity'

export const isAdministrator = (currentUser: Omit<CurrentUser, 'role'> | null) => {
  return !!currentUser?.roles.some((role) => role.name === 'administrator')
}
