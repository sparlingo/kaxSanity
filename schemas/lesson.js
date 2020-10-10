export default {
  name: 'lesson',
  title: 'Lesson',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string'
    },
    {
      name: 'level',
      title: 'Student Level',
      type: 'string'
    },
    {
      name: 'keywords',
      title: 'Key Words',
      type: 'array',
      of: [{type: 'string'}]
    },
    {
      name: 'grabber',
      title: 'How to grab attention',
      type: 'string'
    },
    {
      name: 'image',
      title: 'Banner Image',
      type: 'image',
      options: {
        hotspot: true
      }
    },
    {
      name: 'description',
      title: 'Description',
      type: 'array',
      of: [
        {
          title: 'Block',
          type: 'block',
          styles: [{title: 'Normal', value: 'normal'}],
          lists: []
        }
      ]
    }
  ],
  preview: {
    select: {
      title: 'title'
    }
  }
}