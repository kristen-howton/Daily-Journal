import { saveJournalEntry } from "../JournalDataProvider.js"

const contentTarget = document.querySelector(".journalFormContainer")
const eventHub = document.querySelector(".container")
const dateTarget = document.querySelector("#journalDate")
const conceptTarget = document.querySelector("#conceptsCovered")
const moodTarget = document.querySelector("#moodForTheDay")
const buttonTarget = document.querySelector("#saveJournalEntryButton")



const createEntry = (date, concept, entry, mood) => {
    return {
        date: date,
        concept: concept,
        entry: entry,
        mood: mood
    }
}

eventHub.addEventListener("click", event => {
    console.log("clicked")
    const newEntryObject = createEntry(dateTarget.value, conceptTarget.value, moodTarget.value, buttonTarget.value)
    saveJournalEntry(newEntryObject)
        .then(
            // Dispatch new custom event that state has changed
        )
    return false
})




const render = () => {
    contentTarget.innerHTML = `
        <form>
        <fieldset>
            <label for="journalDate">Date of entry</label>
            <input type="date" name="journalDate" id="journalDate">
        </fieldset>

        <fieldset>
            <label for="conceptsCovered">Concepts covered</label>
            <input type="text" id="conceptsCovered"> 
        </fieldset>

        <fieldset>
            <label for="journalEntry">Journal Entry</label>
            <textarea name="Journal Entry" id="journalEntry" cols="30" rows="10"></textarea>
        </fieldset>

        <fieldset>
            <label for="moodForTheDay" id="moodForTheDay">Mood for the day</label>
            <select name="Mood for the day">
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
        <button id="saveJournalEntryButton">Record Journal Entry</button>
    </form>
    `
}

const JournalFormComponent = () => {
    render()
}


export default JournalFormComponent