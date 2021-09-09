import * as fs from 'fs'
import * as path from 'path'
import matter from 'gray-matter'

export interface IPostFrontmatter {
  title: string
  excerpt: string
  date: number
  image?: string

  [keys: string]: unknown
}
export interface IPost {
  filename: string
  frontmatter: IPostFrontmatter
  content: string
}

export const root = path.join(process.cwd(), 'posts')

export const list = () => {
  return fs.readdirSync(root).filter(file => file.endsWith('.mdx'))
}
export const read = (filename: string): IPost => {
  const raw = fs.readFileSync(path.join(root, filename))
  const { data, content } = matter(raw)

  const frontmatter = data as IPostFrontmatter

  // NOTE: Convert date
  frontmatter.date = new Date(frontmatter.date).getTime()

  return {
    filename,
    frontmatter,
    content: content.trim()
  }
}

export const excerpts = (): IPostFrontmatter[] => {
  const posts = list()
    .map(filename => read(filename))
    .map(post => {
      // NOTE: Generate excerpt
      let excerpt = post.frontmatter.excerpt

      if (!excerpt) {
        excerpt = post.content.slice(0, 30) + '...'
      }

      return {
        ...post.frontmatter,
        excerpt,
        link: post.filename.replace('.mdx', '')
      }
    })
    .sort((a, b) => b.date - a.date)

  return posts
}
