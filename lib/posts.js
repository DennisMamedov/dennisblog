import {frontMatter as huh} from '../pages/blog/huh.mdx'
import {frontMatter as arch} from '../pages/blog/arch.mdx'
import {frontMatter as nwd} from '../pages/blog/nwd.mdx'

let blogPosts = [arch, huh, nwd];

export function getSortedPosts() {
  return blogPosts.sort((a, b) => {
    if(a.pinned && b.pinned) {
      if (a.date < b.date) {
        return 1
      } else {
        return -1
      }
    } else if (a.pinned) {
      return -1
    } else if (b.pinned) {
      return 1
    }else if (a.date < b.date) {
      return 1
    } else {
      return -1
    }
  })
}
