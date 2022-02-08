export default {
  title: "Order",
  name: "order",
  type: "document",
  fields: [
    {
      title: "Kiosk ID",
      name: "kioskId",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      title: "Order Details",
      name: "orderDetails",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
  ],
};
