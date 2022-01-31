export default {
  title: "Item",
  name: "item",
  type: "document",
  fields: [
    {
      title: "Category",
      name: "category",
      type: "reference",
      to: [{ type: "category" }],
      validation: (Rule) => Rule.required(),
    },
    {
      title: "Item ID",
      name: "itemId",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      title: "Item Name",
      name: "itemName",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      title: "Description",
      name: "description",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      title: "Price",
      name: "price",
      type: "number",
      validation: (Rule) => Rule.required().min(0),
    },
    {
      title: "Image",
      name: "image",
      type: "image",
    },
  ],
};
