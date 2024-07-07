// eslint-disable-next-line no-undef
const config = require('../config');

describe('Create an order', () => {
    it('should open phone number modal', async () => {
        await browser.url(`${config.API_URL}`)
        const fromField = $('#from');
        fromField.setValue('East 2nd Street, 601');
                const toField = await $('#to')
        await toField.setValue('1300 1st St')
        // add a pause to see that the input was filled
        await browser.pause(10000);
    })
})

describe('Create an order', () => {
    it('should open phone number modal', async () => {
        await browser.url(`${config.API_URL}`)
        const fromField = $('#from');
        fromField.setValue('East 2nd Street, 601');
        const toField = await $('#to')
        await toField.setValue('1300 1st St')
        const callATaxiButton = await $('//button[contains(text(), "Call a taxi")]')
        await callATaxiButton.click()
        // add a pause to see that the input was filled
        await browser.pause(10000);
    })
})

describe('Create an order', () => {
    it('should open phone number modal', async () => {
        await browser.url(`${config.API_URL}`)
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

describe('Create an order', () => {
    it('should open phone number modal', async () => {
        await browser.url(`${config.API_URL}`)
        const fromField = await $('#from');
        await fromField.setValue('East 2nd Street, 601');
        const toField = await $('#to')
        await toField.setValue('1300 1st St')
        const callATaxiButton = await $('//button[contains(text(), "Call a taxi")]')
        // We are waiting when the button will be visiable
                await callATaxiButton.waitForDisplayed()
        await callATaxiButton.click()
        const phoneNumberButton = await $('//div[contains(text(), "Phone number")]')
        // We are waiting when the button will be visiable
        await phoneNumberButton.waitForDisplayed()
        await phoneNumberButton.click()
        const phoneNumberModal = await $(".modal")
        expect(phoneNumberModal).toBeExisting()
        // waitForExist and waitForClickable could be used in similar situations. 
        // waitForExist saves us from situations in which an element doesn’t exist in the DOM tree. 
        // waitForClickable helps us handle situations in which an element, like a button, is disabled, 
        // but we are trying to interact with it
    })
})