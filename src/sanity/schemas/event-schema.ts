import { Rule } from "sanity";

export interface Event {
  title: string;
  slug: { current: string };
  description: string;
  poster: {
    asset: { _ref: string; _type: "reference" };
    alt: string;
  };
  images?: { asset: { _ref: string; _type: "reference" } }[];
  type: "workshop" | "seminar" | "hackathon" | "ideathon" | "others";
  registrationOpened: boolean;
  registrationLink?: string;
  teamSize?: number;
  datetime?: string;
  venue?: string;
}

const event = {
  name: "event",
  title: "Event",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
      },
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "description",
      title: "Description",
      type: "text",
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "poster",
      title: "Poster",
      type: "image",
      options: { hotspot: true },
      fields: [
        {
          name: "alt",
          title: "Alt",
          type: "string",
        },
      ],
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "images",
      title: "Images",
      type: "array",
      of: [
        {
          type: "image",
        },
      ],
    },
    {
      name: "type",
      title: "Type",
      type: "string",
      options: {
        list: [
          { title: "Workshop", value: "workshop" },
          { title: "Seminar", value: "seminar" },
          { title: "Hackathon", value: "hackathon" },
          { title: "Ideathon", value: "ideathon" },
          { title: "Others", value: "others" },
        ],
      },
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "registrationOpened",
      title: "Registration Opened",
      type: "boolean",
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "registrationLink",
      title: "Registration Link",
      type: "url",
      hidden: ({ parent }: { parent: any }) => !parent.registrationOpened,
    },
    {
      name: "teamSize",
      title: "Team Size",
      type: "number",
      hidden: ({ parent }: { parent: any }) =>
        parent.type !== "hackathon" && parent.type !== "ideathon",
    },
    {
      name: "datetime",
      title: "Date & Time",
      type: "datetime",
      hidden: ({ parent }: { parent: any }) => !parent.registrationOpened,
      validation: (Rule: any) =>
        Rule.custom((field: any, context: any) => {
          if (context.parent.registrationOpened && !field) {
            return "Date & Time is required when registration is opened";
          }
          return true;
        }),
    },
    {
      name: "venue",
      title: "Venue",
      type: "string",
      hidden: ({ parent }: { parent: any }) => !parent.registrationOpened,
      validation: (Rule: any) =>
        Rule.custom((field: any, context: any) => {
          if (context.parent.registrationOpened && !field) {
            return "Venue is required when registration is opened";
          }
          return true;
        }),
    },
  ],
};

export default event;
