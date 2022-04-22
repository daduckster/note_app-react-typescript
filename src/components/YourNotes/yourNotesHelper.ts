
export function scrollToNewNotesContainer() {
  const newNotesContainer = document.getElementById('newNotes')
  if(!newNotesContainer) return
  newNotesContainer.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'start' })
}