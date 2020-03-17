import EntryListComponent from "./JournalEntryList.js";
import { getJournalEntries } from "./JournalDataProvider.js";

getJournalEntries().then(EntryListComponent())
