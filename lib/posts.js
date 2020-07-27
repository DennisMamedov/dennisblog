import {frontMatter as wie} from '../pages/blog/wie.mdx'
import {frontMatter as site} from '../pages/blog/site.mdx'
import {frontMatter as nwd} from '../pages/blog/nwd.mdx'

let blogPosts = [site, wie, nwd];

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
