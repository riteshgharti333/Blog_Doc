import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const postsDirectory = path.join(process.cwd(), 'content/posts')

export function getAllPosts() {
  const files = fs.readdirSync(postsDirectory)

  return files.map((file) => {
    const slug = file.replace('.mdx', '')
    const fullPath = path.join(postsDirectory, file)
    const fileContent = fs.readFileSync(fullPath, 'utf-8')

    const { data } = matter(fileContent)

    return {
      slug,
      ...data,
    }
  })
}