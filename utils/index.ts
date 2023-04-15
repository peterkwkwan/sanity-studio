import {CurrentUser} from 'sanity'

export const isAdministrator = (currentUser: Omit<CurrentUser, 'role'> | null) => {
  return !currentUser?.roles.find(({name}) => name === 'administrator')
}
