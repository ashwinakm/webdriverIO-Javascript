const AddNoteScreen = require("C:\\Projects\\webdriverio-appium-v8\\test\\screenobjects\\android\\add-note.screen")

class DeleteNoteScreen{
    get clickMore() {
        return $('~More');    
    }

    get DeleteBtn() {
        return  $('//*[@text = "Delete"]');
    }

    get navIcon() {
        return $('//*[@resource-id = "com.socialnmobile.dictapps.notepad.color.note:id/icon_nav"]');
    }

    get trashCan() {
        return $('//*[@text = "Trash Can"]');
    }

    get titleRead() {
        return $('//*[@resource-id = "com.socialnmobile.dictapps.notepad.color.note:id/title"]');
    }

    async skipTutorials() {
        await AddNoteScreen.skipBtn.click();
    }

    async addSaveNotes(noteHeading,noteBody) {
        await AddNoteScreen.addNotes.click();
        await AddNoteScreen.clickText.click();
        await AddNoteScreen.verifyNotes.click();
        await AddNoteScreen.addTitles.setValue(noteHeading);
        await AddNoteScreen.addValues.setValue(noteBody);      
        await AddNoteScreen.saveNote(); 

    }

    
}

module.exports = new DeleteNoteScreen();
