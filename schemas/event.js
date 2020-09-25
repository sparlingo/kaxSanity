export default {
  name: 'event',
  title: 'Event',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string'
    },
    {
      name: 'time',
      title: 'Time and Date',
      type: 'datetime'
    }
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'datetime'
    }
  }
}