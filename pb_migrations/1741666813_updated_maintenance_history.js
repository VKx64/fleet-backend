/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_519639891")

  // add field
  collection.fields.addAt(3, new Field({
    "hidden": false,
    "id": "date2862495610",
    "max": "",
    "min": "",
    "name": "date",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "date"
  }))

  // add field
  collection.fields.addAt(4, new Field({
    "autogeneratePattern": "",
    "hidden": false,
    "id": "text1156222427",
    "max": 0,
    "min": 0,
    "name": "remarks",
    "pattern": "",
    "presentable": false,
    "primaryKey": false,
    "required": false,
    "system": false,
    "type": "text"
  }))

  // add field
  collection.fields.addAt(5, new Field({
    "hidden": false,
    "id": "select325763347",
    "maxSelect": 1,
    "name": "result",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "select",
    "values": [
      "good",
      "okay",
      "bad",
      "perfect"
    ]
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_519639891")

  // remove field
  collection.fields.removeById("date2862495610")

  // remove field
  collection.fields.removeById("text1156222427")

  // remove field
  collection.fields.removeById("select325763347")

  return app.save(collection)
})
