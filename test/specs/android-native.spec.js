// Following section will demonstrate how can we use package and activities efficiently.
// Add comment for Git test
describe('Android Native Feature Tests', () => {
    it('Access an Activity directly', async () => {
      // access activity
      await driver.startActivity("io.appium.android.apis", "io.appium.android.apis.app.AlertDialogSamples");
      // "io.appium.android.apis"   ".app.AlertDialogSamples"
      // pause 3s
      await driver.pause(5000);
  
      // assertion
      await expect($('//*[@text="App/Alert Dialogs"]')).toExist();
    
    })

    it('Access an Activity directly', async () => {
        // access activity - Using Appium automator properties
        await driver.startActivity("io.appium.android.apis", "io.appium.android.apis.app.AlertDialogSamples");
        
        await $('~OK Cancel dialog with a message').click();

        // Get alert text
        console.log('ALERT TEXT --->', await driver.getAlertText());

        await expect(await driver.getAlertText()).toContain("Lorem ipsum dolor");
       
        // Accept the alert
        await driver.acceptAlert();

        // Dismiss the alert
        // await driver.dismissAlert();

        // assertion - Check that after cancelling alert the alert message is not displayed
        await expect ($('//*[@resource-id- = "android:id/alertTitle"]')).not.toExist();

               
      
      })
    
    it('Vertical Scrolling', async () => {
        // Example for vertical scroll
        
        await $('~App').click();
        await driver.pause(3000)
        await $('//*[@content-desc ="Activity"]').click();
        await driver.pause(3000)
        
        await $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollTextIntoView("Secure Surfaces")').click();

        await expect($('~Secure Dialog')).toExist();
     
         
    })

    it('Horizontal Scrolling', async () => {
        // Example for forward & backward scroll
        await driver.startActivity(
           "io.appium.android.apis",
           "io.appium.android.apis.view.Gallery1"
        );
                
        await $('android=new UiScrollable(new UiSelector().scrollable(true)).setAsHorizontalList().scrollForward()');
        await $('android=new UiScrollable(new UiSelector().scrollable(true)).setAsHorizontalList().scrollBackward()');

              
    })

    it.only('Working with a date picker', async () => {
        // access the date picker
        await driver.startActivity(
          "io.appium.android.apis",
          "io.appium.android.apis.view.DateWidgets1"
        )
    
        // get current date
        const date = await $('//*[@resource-id="io.appium.android.apis:id/dateDisplay"]');
        const currentDate = await date.getText();
    
        // click on change the date button
        await $('~change the date').click();
    
        // scroll right to the next month
        await $('android=new UiScrollable(new UiSelector().scrollable(true)).setAsHorizontalList().scrollForward()');
    
        // select the 10th date
        await $('//*[@text="10"]').click();
    
        // click on ok button
        await $('//*[@resource-id="android:id/button1"]').click();
    
        // verify the updated date
        await expect(await date.getText()).not.toEqual(currentDate);
      });
    
});
