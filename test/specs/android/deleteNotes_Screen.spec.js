const DeleteNoteScreen = require("C:\\Projects\\webdriverio-appium-v8\\test\\screenobjects\\android\\delete-note.screen")

describe('Add Notes', () => {
    //Implementing before hook
    before(async () => {
        await DeleteNoteScreen.skipTutorials();
        await DeleteNoteScreen.addSaveNotes("Ashwin's Test","Ashwin\nAvantika\nAvyansh");  

    });


    // it ('Add and save Notes' , async () => {
    //     await DeleteNoteScreen.skipTutorials(); 
    //     await DeleteNoteScreen.addSaveNotes("Ashwin's Test","Ashwin\nAvantika\nAvyansh"); 
    
    // });
    

    it('Delete Notes' , async () => {
        
        await DeleteNoteScreen.clickMore.click();
        await DeleteNoteScreen.DeleteBtn.click();
        await driver.acceptAlert();
        await DeleteNoteScreen.navIcon.click();
        await DeleteNoteScreen.trashCan.click();

        const testtext = await DeleteNoteScreen.titleRead.getText();
        await expect(testtext).toEqual("Ashwin's Test");

        

        await driver.pause(3000)
    
    });


});
