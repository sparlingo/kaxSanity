export default {
    name: 'gimmick',
    title: 'Gimmick',
    type: 'document',
    fields: [
      {
        name: 'title',
        title: 'Title',
        type: 'string'
      },
      {
        name: 'description',
        title: 'Description',
        type: 'string'
      }
    ],
    preview: {
      select: {
        title: 'title',
        subtitle: 'description'
      }
    }
  }