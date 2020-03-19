let entries = []


export const useJournalEntries = () => {
    const sortedByDate = entries.sort(
        (currentEntry, nextEntry) =>
            Date.parse(currentEntry.date) - Date.parse(nextEntry.date)
    )
    return sortedByDate.slice()
}

export const getJournalEntries = () => {
    return fetch("http://localhost:3000/entries")
        .then(response => response.json())
        .then(parsedEntries => {
            entries = parsedEntries
        })

}

export const saveJournalEntry = (newJournalEntry) => {
    return fetch("http://localhost:3000/entries", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newJournalEntry)
    })
        .then(getJournalEntries)
}

