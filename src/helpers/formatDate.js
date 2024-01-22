export const formatDate = (date) => {
    const data = new Date(date)
    const formatter = new Intl.DateTimeFormat(['ban', 'id'])
    return formatter.format(data)
}