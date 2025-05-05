import React from 'react'

const DashboardHomePage = () => {
  return (
    <div className='text-4xl'>
      hello from dashboard home page
      If you want to add additional keys later, use the Schema#add method.

Each key in our code blogSchema defines a property in our documents which will be cast to its associated SchemaType. For example, we've defined a property title which will be cast to the String SchemaType and property date which will be cast to a Date SchemaType.

Notice above that if a property only requires a type, it can be specified using a shorthand notation (contrast the title property above with the date property).

Keys may also be assigned nested objects containing further key/type definitions like the meta property above. This will happen whenever a key's value is a POJO that doesn't have a type property.

In these cases, Mongoose only creates actual schema paths for leaves in the tree. (like meta.votes and meta.favs above), and the branches do not have actual paths. A side-effect of this is that meta above cannot have its own validation. If validation is needed up the tree, a path needs to be created up the tree - see the Subdocuments section for more information on how to do this. Also read the Mixed subsection of the SchemaTypes guide for some gotchas.

The permitted SchemaTypes are:
    </div>
  )
}

export default DashboardHomePage
