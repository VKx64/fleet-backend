/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_519639891")

  // update field
  collection.fields.addAt(2, new Field({
    "cascadeDelete": true,
    "collectionId": "pbc_3749043101",
    "hidden": false,
    "id": "relation797243625",
    "maxSelect": 1,
    "minSelect": 0,
    "name": "maintenance",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "relation"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_519639891")

  // update field
  collection.fields.addAt(1, new Field({
    "cascadeDelete": false,
    "collectionId": "pbc_3749043101",
    "hidden": false,
    "id": "relation797243625",
    "maxSelect": 1,
    "minSelect": 0,
    "name": "maintenance",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "relation"
  }))

  return app.save(collection)
})
