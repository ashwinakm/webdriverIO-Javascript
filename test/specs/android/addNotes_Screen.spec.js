const AddNoteScreen = require("C:\\Projects\\webdriverio-appium-v8\\test\\screenobjects\\android\\add-note.screen")
describe('Add Notes', () => {

    it('Skip Tutorials' , async () => {
        await AddNoteScreen.skipBtn.click()       
    });

    it('CLick Add Notes' , async () => {
        await AddNoteScreen.addNotes.click()      
    });

    it('CLick Text' , async () => {
       await AddNoteScreen.clickText.click()      
    });

    it('Verify the add note section' , async () => {
        await AddNoteScreen.verifyNotes.click()    
    });

  
    it('Add Titles' , async () => {
        await AddNoteScreen.addTitles.setValue("Ashwin's List");      
    });

    it('Add Notes' , async () => {
        await AddNoteScreen.addValues.setValue("Ashwin\nAvantika\nAvyansh");
        await AddNoteScreen.saveNote();     
    });

    it('Assert for edit button' , async () => {
        await expect($('//*[@resource-id = "com.socialnmobile.dictapps.notepad.color.note:id/edit_btn"]')).toBeDisplayed();
        await expect($('//*[@resource-id = "com.socialnmobile.dictapps.notepad.color.note:id/view_note"]')).toHaveText("Ashwin\nAvantika\nAvyansh");
     });

});
