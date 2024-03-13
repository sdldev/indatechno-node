import { NOW, column, defineDb, defineTable,  } from 'astro:db';

const Site = defineTable({
  columns: {
    name: column.text(),
    description: column.text(),
    url: column.text(),
    discord: column.text(),
    telegram: column.text(),
    twitter: column.text(),
  }
})

const Project = defineTable({
  columns: {
    id: column.number({ primaryKey: true }),
    name: column.text(),
    body: column.text(),
    url: column.text(),
    discord: column.text(),
    telegram: column.text(),
    twitter: column.text(),
    created_at: column.date({default: NOW}),
    // metadata: column.json(),
  }
})

const Blog = defineTable({
  columns: {
    author: column.text(),
    body: column.text(),
    title: column.text(),
    slug: column.text(),
    summary: column.text(),
    publishedAt: column.date(),
    updatedAt: column.date(),
  },
});

export default defineDb({ 
  tables: { Site, Project, Blog } 
});

