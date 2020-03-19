const contentTarget = document.querySelector(".journalFormContainer")

const render = () => {
    contentTarget.innerHTML = `
        <form action="">
        <fieldset>
            <label for="journalDate">Date of entry</label>
            <input type="date" name="journalData" id="journalData">
        </fieldset>

        <fieldset>
            <label for="conceptsCovered">Concepts covered</label>
            <input type="text">
        </fieldset>

        <fieldset>
            <label for="journalEntry">Journal Entry</label>
            <textarea name="Journal Entry" id="" cols="30" rows="10"></textarea>
        </fieldset>

        <fieldset>
            <label for="moodForTheDay">Mood for the day</label>
            <select name="Mood for the day" id="">
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
        <button>
            <option value="recordJournalEntry">Record Journal Entry</option>
        </button>
        </fieldset>
    </form>
    `
}

const JournalFormComponent = () => {
    render()
}


export default JournalFormComponent