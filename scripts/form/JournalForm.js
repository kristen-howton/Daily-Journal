import { saveJournalEntry } from "../JournalDataProvider.js"

const contentTarget = document.querySelector(".journalFormContainer")
const eventHub = document.querySelector(".container")

const createEntry = (date, concept, entry, mood) => {
    return {
        date: date,
        concept: concept,
        entry: entry,
        mood: mood
    }
}

eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "recordJournalEntry") {
        const journalDate = document.querySelector("#journalDate").value
        const entryText = document.querySelector("#conceptCovered").value
        const journalEntry = document.querySelector("#journalEntry").value
        const moodOfDay = document.querySelector("#moodOfDay").value
    const newEntryObject = createEntry(journalDate, entryText, journalEntry, moodOfDay)
    saveJournalEntry(newEntryObject)
        .then( () => {
            const entryRecorded = new CustomEvent("recordEntryClicked")
            eventHub.dispatchEvent(entryRecorded)
        })
    }  
})


const render = () => {
    contentTarget.innerHTML = `
        <fieldset>
            <label for="journalDate">Date of entry</label>
            <input type="date" name="journalDate" id="journalDate">
        </fieldset>
        <fieldset>
        <label for="conceptCovered">Concept Covered: </label>
        <input type="text" id="conceptCovered">
    </fieldset>
        <fieldset>
            <label for="journalEntry">Journal Entry: </label>
            <input type="text" id="journalEntry">
        </fieldset>
        <fieldset>
            <label for="moodForTheDay">Mood for the day</label>
            <select name="Mood for the day" id="moodOfDay">
                <option value="Optimistic">Optimistic</option>
                <option value="Motivated" class="value">Motivated</option>
                <option value="Productive" class="value">Productive</option>
                <option value="Resourceful">Resourceful</option>
                <option value="Stressed">Stressed</option>
                <option value="Perplexed" class="value">Perplexed</option>
                <option value="Discouraged" class="value">Discouraged</option>
                <option value="Incapable" class="value">Incapable</option>
            </select>
        </fieldset>
        <button id="recordJournalEntry">Record Journal Entry</button>
    `
}

const JournalFormComponent = () => {
    render()
}


export default JournalFormComponent



