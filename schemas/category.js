export default {
  title: "Category",
  name: "category",
  type: "document",
  fields: [
    {
      title: "Category ID",
      name: "categoryId",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      title: "Category Name",
      name: "categoryName",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      title: "Image",
      name: "image",
      type: "image",
      validation: (Rule) => Rule.required(),
    },
  ],
};
