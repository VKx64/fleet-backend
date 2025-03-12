/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_1967373549")

  // add field
  collection.fields.addAt(6, new Field({
    "hidden": false,
    "id": "file376926767",
    "maxSelect": 1,
    "maxSize": 0,
    "mimeTypes": [],
    "name": "avatar",
    "presentable": false,
    "protected": false,
    "required": false,
    "system": false,
    "thumbs": [],
    "type": "file"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_1967373549")

  // remove field
  collection.fields.removeById("file376926767")

  return app.save(collection)
})
