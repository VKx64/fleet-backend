/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_519639891")

  // remove field
  collection.fields.removeById("relation2690522695")

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_519639891")

  // add field
  collection.fields.addAt(2, new Field({
    "cascadeDelete": false,
    "collectionId": "pbc_3288676456",
    "hidden": false,
    "id": "relation2690522695",
    "maxSelect": 1,
    "minSelect": 0,
    "name": "fleet",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "relation"
  }))

  return app.save(collection)
})
