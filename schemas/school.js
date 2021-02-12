export default {
  name: 'school',
  title: 'School',
  type: 'document',
  fields: [
    {
      name: 'location',
      title: "Location",
      type: 'geopoint',
    },
    {
      name: 'type',
      type: 'string',
      title: 'Name'
    }
  ],
}