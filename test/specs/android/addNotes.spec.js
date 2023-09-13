describe('Add Notes', () => {
    it('Skip Tutorials' , async () => {
        //Skip tutorial step
        await $('//*[@text = "SKIP"]').click();
            
    });

    it('CLick Add Notes' , async () => {
        await $('//*[@resource-id = "com.socialnmobile.dictapps.notepad.color.note:id/img_add"]').click();
            
    });

    it('CLick Text' , async () => {
        await $('//*[@class = "android.widget.LinearLayout"]').click();
            
    });

    it('Verify the add note section' , async () => {
        await expect($('//*[@text = "Editing"]')).toBeDisplayed();
            
    });

  
    it('Add Titles' , async () => {
        await $('//*[@resource-id = "com.socialnmobile.dictapps.notepad.color.note:id/edit_title"]').setValue("Ashwin's List");
            
    });

    it('Add Notes' , async () => {
        await $('//*[@resource-id = "com.socialnmobile.dictapps.notepad.color.note:id/edit_note"]').setValue("Ashwin\nAvantika\nAvyansh");
        await driver.pause(3000)

        await driver.back();
        await driver.back();
            
    });

    it('Assert for edit button' , async () => {
        await expect($('//*[@resource-id = "com.socialnmobile.dictapps.notepad.color.note:id/edit_btn"]')).toBeDisplayed();
        await expect($('//*[@resource-id = "com.socialnmobile.dictapps.notepad.color.note:id/view_note"]')).toHaveText("Ashwin\nAvantika\nAvyansh");

        await driver.pause(3000)
    
    });


});
