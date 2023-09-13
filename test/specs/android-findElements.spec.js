## Adding this comment to test workflow
describe('Android Elements Tests', () => {
    it('find element by accessibility id' , async () => {
        
        // find element by accessibility id
        const appOption = await $('~App');

        // click on that element.
        await appOption.click();

        //Add assertion
        const actionBar = await $('~Action Bar');
        await expect (actionBar).toBeExisting();

    })

    it('find element by class name' , async () => {
        
        // find element by class name
        const className = await $('android.widget.TextView');
        
        //console.log(await className.getText())
       
        //Add assertion
        await expect(className).toHaveText('API Demos');
        

    })

    it('find element by Xpath' , async () => {
        
        // find element by Xpath with content-desc
        await $('//android.widget.TextView[@text="Alert Dialogs"]').click();

        // find element by Xpath with resource id
        await $('//android.widget.Button[@resource-id ="io.appium.android.apis:id/select_button"]').click();

        await $('//android.widget.TextView[@text ="Command two"]').click();
              
        //Add assertion
        const textData = await $('android.widget.TextView')
        await expect(textData).toHaveText('You selected: 1 , Command two')
        

    })

    it('find multiple elements and assert' , async () => {
        const expectedList=['API Demos',"Access'ibility",'Accessibility',
        'Animation','App','Content','Graphics','Media',
        'NFC','OS','Preference','Text','Views']

        const actualList=[]
        
        // find element by Xpath with content-desc
        const textList = await $$('android.widget.TextView');

        for (const elements of textList){
            actualList.push(await elements.getText());
        }

        //Add assertion
        
        await expect(actualList).toEqual(expectedList)
        
    })

    it.only('find multiple elements and assert' , async () => {
        //Access autocomplete screen.
        await $('~Views').click();
        await $('//*[@text="Auto Complete"]').click();
        await $('//*[@content-desc="1. Screen Top"]').click();
        

        // enter the country name
        const textField = await $('//*[@resource-id="io.appium.android.apis:id/edit"]');
        await textField.addValue('Canada');

        // verify the country name
        await expect(textField).toHaveText('Canada');
        
    })

});
