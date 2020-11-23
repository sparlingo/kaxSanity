export default {
  name: 'group',
  title: 'Group',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string'
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 24
      }
    },
    {
      name: 'teacher',
      title: 'Teacher',
      type: 'reference',
      to: {type: 'author'}
    },
    {
      name: 'classPic',
      title: 'Class Picture',
      type: 'image',
      options: {
        hotspot: true
      }
    },
  ],
  preview: {
    select: {
      title: 'title',
      author: 'teacher.name',
      media: 'classPic'
    }
  }
}