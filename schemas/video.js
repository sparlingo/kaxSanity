export default {
  name: 'video',
  title: 'Video',
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
      name: 'creator',
      title: 'Creator',
      type: 'string',
    },
    {
      name: 'youtubeURL',
      title: 'Youtube URL',
      type: 'string'
    },
    {
      name: 'videoPic',
      title: 'Video Picture',
      type: 'image',
      options: {
        hotspot: true
      }
    },
    {
      name: 'keywords',
      title: 'Keywords',
      type: 'string'
    }
  ],
  preview: {
    select: {
      title: 'title',
      media: 'videoPic'
    }
  }
}