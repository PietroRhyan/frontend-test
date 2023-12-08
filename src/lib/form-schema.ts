import { RJSFSchema, UiSchema } from '@rjsf/utils'

export const schema: RJSFSchema = {
  required: ['name', 'email', 'birth'],
  properties: {
    avatar: {
      title: 'Avatar',
      type: 'string',
      format: 'data-url',
    },
    name: {
      title: 'Nome',
      type: 'string',
    },
    email: {
      title: 'Email',
      type: 'string',
    },
    birth: {
      title: 'Data de Nascimento',
      type: 'string',
      format: 'date',
    },
  },
}

export const uiSchema: UiSchema = {
  'ui:options': {},
}
