// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

// We import object and document schemas
import author from './author'
import blockContent from './blockContent'
import category from './category'
import group from './group'
import lesson from './lesson'
import post from './post'
import school from './school'
import student from './student'
import video from './video'

export default createSchema({
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    author,
    blockContent,
    category,
    group,
    lesson,
    post,
    school,
    student,
    video
  ])
})
