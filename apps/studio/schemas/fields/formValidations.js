export default {
  name: "formValidations",
  title: "Form field validations",
  type: "object",
  fields: [
    {
      name: "validationTypes",
      title: "Validation Types",
      type: "array",
      of: [{ type: "string" }],
      options: {
        list: [
          { title: "Accepted", value: "accepted" },
          { title: "After Date", value: "after" },
          { title: "Alphabetic characters only", value: "alpha" },
          { title: "Alphanumeric characters only", value: "alphanumeric" },
          { title: "Bail - Stop on 1st error", value: "bail" },
          { title: "Before Date", value: "before" },
          { title: "Between number range", value: "between" },
          // { title: "confirm", value: "confirm" },
          { title: "Date format", value: "date" },
          { title: "Email - Is Valid", value: "email" },
          { title: "Ends with?", value: "ends_with" },
          { title: "In input?", value: "in" },
          { title: "Matches", value: "matches" },
          { title: "Max number", value: "max" },
          // { title: "mime", value: "mime" },
          { title: "Min number", value: "min" },
          { title: "Not in input", value: "not" },
          { title: "is Number", value: "number" },
          { title: "Optional", value: "optional" },
          { title: "Required", value: "required" },
          { title: "Starts with?", value: "starts_with" },
          { title: "Valid URL?", value: "url" },
        ],
        layout: "grid",
        // direction: "horizontal",
      },
    },
    {
      name: "afterDateValid",
      title: "After date valid",
      type: "datetime",
      hidden: ({ parent }) =>
        parent?.validationTypes === undefined ||
        parent?.validationTypes.includes("after") === false,
    },
    // AFTER
    {
      name: "beforeDateValid",
      title: "Before date valid",
      type: "datetime",
      hidden: ({ parent }) =>
        parent?.validationTypes === undefined ||
        parent?.validationTypes.includes("before") === false,
    },
    // BEFORE
    {
      name: "betweenValid",
      title: "Between Range Valid",
      type: "object",
      fields: [
        {
          name: "betweenMin",
          title: "Between min",
          type: "number",
        },
        {
          name: "betweenMax",
          title: "Between max",
          type: "number",
        },
        {
          name: "betweenDefault",
          title: "Between default",
          description: "Optional default value",
          type: "number",
        },
        {
          name: "showDefault",
          title: "Show default",
          type: "boolean",
        },
      ],
      hidden: ({ parent }) =>
        parent?.validationTypes === undefined ||
        parent?.validationTypes.includes("between") === false,
    },
    // BETWEEN
    // TODO: CONFIRM
    {
      name: "dateFormatValid",
      title: "Date Format accepted",
      type: "object",
      fields: [
        {
          name: "dateMonth",
          title: "Date month",
          type: "string",
          options: {
            list: [
              {
                title: "MM - Two-digit month representation (01-12)",
                value: "MM",
              },
              {
                title:
                  "M - Single-digit month representation (1-12) leading zero allowed",
                value: "M",
              },
            ],
            layout: "radio",
          },
        },
        {
          name: "dateDay",
          title: "Date day",
          type: "string",
          options: {
            list: [
              {
                title: "DD -Two-digit day of the month (01-31)",
                value: "DD",
              },
              {
                title:
                  "D - Single-digit day of the month (1-31), leading zero allowed",
                value: "D",
              },
            ],
            layout: "radio",
          },
        },
        {
          name: "dateYear",
          title: "Date year",
          type: "string",
          options: {
            list: [
              {
                title: "YY - Two-digit year",
                value: "YY",
              },
              {
                title: "YYYY - Four-digit year",
                value: "YYYY",
              },
            ],
            layout: "radio",
          },
        },
      ],
      hidden: ({ parent }) =>
        parent?.validationTypes === undefined ||
        parent?.validationTypes.includes("date") === false,
    },
    // DATE
    {
      name: "endsWithValid",
      title: "Ends With?",
      description: "List of words or letters that a field must end with",
      type: "array",
      of: [{ type: "string" }],
      hidden: ({ parent }) =>
        parent?.validationTypes === undefined ||
        parent?.validationTypes.includes("ends_with") === false,
    },
    // ENDS_WITH
    {
      name: "inInputValid",
      title: "IN the input field",
      description:
        "Option must be IN the input field - great for SELECT fields",
      type: "array",
      of: [{ type: "string" }],
      hidden: ({ parent }) =>
        parent?.validationTypes === undefined ||
        parent?.validationTypes.includes("in") === false,
    },
    // IN_VALID
    {
      name: "matchInputValid",
      title: "Matches the input field",
      description: "Option must MATCH the input field",
      type: "object",
      fields: [
        {
          name: "isRegExp",
          title: "Regular Expression match?",
          type: "boolean",
        },
        {
          name: "matchRegExp",
          title: "Match Regular expression",
          type: "string",
          hidden: ({ parent }) =>
            parent?.isRegExp === undefined || parent?.isRegExp === false,
        },
        {
          name: "matchStringList",
          title: "Match string list",
          type: "array",
          of: [{ type: "string" }],
          hidden: ({ parent }) => parent?.isRegExp === true,
        },
      ],
      hidden: ({ parent }) =>
        parent?.validationTypes === undefined ||
        parent?.validationTypes.includes("matches") === false,
    },
    // MATCHES
    {
      name: "maxValid",
      title: "Max valid",
      type: "number",
      description:
        "Checks that the value of a Number, or length of a String or Array is less than a maximum length or value. The maximum value/length defaults to 10.",
      hidden: ({ parent }) =>
        parent?.validationTypes === undefined ||
        parent?.validationTypes.includes("max") === false,
    },
    // MAX
    // TODO: MIME
    {
      name: "minValid",
      title: "Min valid",
      type: "number",
      description:
        "Checks that the value of a Number, or length of a String or Array is less than a minimum length or value. The minimum value/length defaults to 1.",
      hidden: ({ parent }) =>
        parent?.validationTypes === undefined ||
        parent?.validationTypes.includes("min") === false,
    },
    // MIN
    {
      name: "notValid",
      title: "NOT in the input field",
      description:
        "Checks to ensure the input data does not match a set of predefined values",
      type: "array",
      of: [{ type: "string" }],
      hidden: ({ parent }) =>
        parent?.validationTypes === undefined ||
        parent?.validationTypes.includes("not") === false,
    },
    // NOT_VALID
    {
      name: "startsWithValid",
      title: "Starts With?",
      description: "List of words or letters that a field must start with",
      type: "array",
      of: [{ type: "string" }],
      hidden: ({ parent }) =>
        parent?.validationTypes === undefined ||
        parent?.validationTypes.includes("starts_with") === false,
    },
    // STARTS_WITH
  ],
};
