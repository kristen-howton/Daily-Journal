const journalEntry = (journalObject) {
    return `
    <form action="">
        <fieldset = "journal">
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
                <option value="happy">happy</option>
                <option value="fine">fine</option>
                <option value="sad">sad</option>
            </select>
        </fieldset>
        <button>
            <option value="recordJournalEntry">Record Journal Entry</option>
        </button>
        </fieldset>
    </form>`
}

        // date: "02/18/2020",
        // concept: "Command Line Interface - The Terminal",
        // entry: "Learned some of the basic commands that we would be using.",
        // mood: "Ok"