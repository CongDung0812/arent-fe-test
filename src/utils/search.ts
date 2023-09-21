export const createSearchPattern = (keyword: string) => {
  const keywords = String(keyword)
    .toLocaleLowerCase()
    .trim()
    .split(/[-_\s\\|!@#$%^&*()]+/i)
  return new RegExp(`(${keywords.join('.*')})+`, 'i')
}

export const search = <T extends Record<string, unknown>>(
  items: T[],
  searchFields: (keyof T)[] | ((item: T) => string),
  keyword: string,
  separator = '|||'
): T[] => {
  const pattern = createSearchPattern(keyword)
  return items.filter((item) => {
    let searchText: string
    if (searchFields instanceof Function) {
      searchText = searchFields(item)
    } else {
      searchText = searchFields
        .map((field) => String(item[field]))
        .join(separator)
    }
    return pattern.test(searchText)
  })
}