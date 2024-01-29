# Todo

## Sanity Artwork schema

```js
export default {
  name: "artwork",
  title: "Obra de Arte",
  type: "document",
  fields: [
    {
      name: "photos",
      title: "Photos",
      type: "array",
      of: [{ type: "image", options: { accept: "image/*" } }],
    },
    {
      name: "name",
      title: "Name",
      type: "string",
    },
    {
      name: "date",
      title: "Date",
      type: "date",
    },
    {
      name: "technique",
      title: "Technique",
      type: "string",
    },
    {
      name: "materials",
      title: "Materials",
      type: "array",
      of: [{ type: "string" }],
    },
    {
      name: "size",
      title: "Size",
      type: "string",
    },
    {
      name: "price",
      title: "Price",
      type: "number",
    },
    {
      name: "detail",
      title: "Detail",
      type: "text",
    },
    {
      name: "colors",
      title: "Colors",
      type: "array",
      of: [{ type: "string" }],
    },
    {
      name: "style",
      title: "Style",
      type: "string",
    },
    {
      name: "available",
      title: "Available",
      type: "boolean",
    },
  ],
};
```
