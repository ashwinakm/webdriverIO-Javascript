class AddNoteScreen{
    get skipBtn() {
        return $('//*[@text = "SKIP"]');
    }

    get addNotes() {
        return  $('//*[@resource-id = "com.socialnmobile.dictapps.notepad.color.note:id/img_add"]');
    }

    get clickText() {
        return  $('//*[@class = "android.widget.LinearLayout"]');
    }

    get verifyNotes() {
        return  $('//*[@text = "Editing"]');
    }

    get addTitles() {
        return  $('//*[@resource-id = "com.socialnmobile.dictapps.notepad.color.note:id/edit_title"]');
    }

    get addValues() {
        return  $('//*[@resource-id = "com.socialnmobile.dictapps.notepad.color.note:id/edit_note"]');
    }

    async saveNote() {
        await driver.back();
        await driver.back();

    }


}

module.exports = new AddNoteScreen();
