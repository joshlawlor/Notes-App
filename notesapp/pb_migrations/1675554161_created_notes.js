migrate((db) => {
  const collection = new Collection({
    "id": "o9dzs1wzs3q1mnt",
    "created": "2023-02-04 23:42:41.819Z",
    "updated": "2023-02-04 23:42:41.819Z",
    "name": "notes",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "zrlqhcus",
        "name": "title",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      }
    ],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("o9dzs1wzs3q1mnt");

  return dao.deleteCollection(collection);
})
