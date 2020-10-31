export default {
  name: 'student',
  title: 'Student',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string'
    },
    {
      name: 'zhName',
      title: 'Chinese Name',
      type: 'string'
    },
    {
      name: 'birthDate',
      title: 'Birth Date',
      type: 'date'
    },
    {
      name: 'englishLevel',
      title: 'English Level',
      type: 'number'
    },
    {
      name: 'brotherOrSister',
      title: 'Brother or Sister?',
      type: 'boolean'
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 24
      }
    },
    {
      name: 'profile',
      title: 'Student Profile',
      type: 'blockContent'
    }
  ],
  preview: {
    select: {
      title: 'name',
      media: 'image'
    }
  }
}