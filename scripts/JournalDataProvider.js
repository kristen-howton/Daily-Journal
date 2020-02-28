/*
 *   Journal data provider for Daily Journal application
 *
 *      Holds the raw data about each entry and exports
 *      functions that other modules can use to filter
 *      the entries for different purposes.
 */

// This is the original data. Can't Touch This.
const journal = [
    {
        date: "02/16/2020",
        concept: "Introduction to NSS",
        entry: "We talked about expectations at NSS. We were also introduced to instructors and other classmates.",
        mood: "fine"
    },
    {
        date: "02/17/2020",
        concept: "Installing terminal and bookmarking important pages",
        entry: "We installed the terminal and bookmarked our github page.",
        mood: "Ok"
    },
    {
        date: "02/18/2020",
        concept: "Command Line Interface - The Terminal",
        entry: "Learned some of the basic commands that we would be using.",
        mood: "Ok"
    }
]

/*
    You export a function that provides a version of the
    raw data in the format that you want
*/
export const useJournalEntries = () => {
    const sortedByDate = journal.sort(
        (currentEntry, nextEntry) =>
            Date.parse(currentEntry.date) - Date.parse(nextEntry.date)
    )
    return sortedByDate
}