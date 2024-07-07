describe('Create an order', () => {
    it('should open phone number modal', async () => {
        await browser.url(`https://cnt-d8a700bd-2a47-4103-96fd-87420112250c.containerhub.tripleten-services.com/`)
        const fromField = $('#from');
        fromField.setValue('East 2nd Street, 601');
        const toField = await $('#to')
        await toField.setValue('1300 1st St')
        const callATaxiButton = await $('//button[contains(text(), "Call a taxi")]')
        await callATaxiButton.click()
        const phoneNumberButton = await $('//div[contains(text(), "Phone number")]')
        await phoneNumberButton.click()
        const phoneNumberModal = await $(".modal")
        expect(phoneNumberModal).toBeExisting()
        // add a pause to see that the input was filled
        await browser.pause(10000);
    })
})
