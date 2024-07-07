// eslint-disable-next-line no-undef
const config = require('../config');

describe('Test', () => {
    it('wait functions', async () => {
        await browser.url(`${config.API_URL}`)
        //select an element using a CSS selector 
        const fromField = await $('#from');
                // wait for an element to exist on the page
        await fromField.waitForExist();
                // wait for an element to be visible on the page
        await fromField.waitForDisplayed();
                // wait for an element to be clickable on the page
        await fromField.waitForClickable();
    })
})

//Also, if we expect that the element does not exist, we can specify by passing to the function {reverse: true}.

describe('Test', () => {
        it('wait functions reverse', async () => {
            await browser.url(`${config.API_URL}`)
            //select an element using a CSS selector
            const fromField = await $('#from');
                    // wait for an element to not exist on the page
            await fromField.waitForExist({reverse: true});
                    // wait for an element to not be visible on the page
            await fromField.waitForDisplayed({reverse: true});
                    // wait for an element to not be clickable on the page
            await fromField.waitForClickable({reverse: true});
        })
    })

    // waitUntil

    it('should save the phone', async () => {
        await browser.url(`${config.API_URL}`)
        await page.fillAddresses('East 2nd Street, 601', '1300 1st St');
                // Store the element for waiting in the separate variable
        const phoneNumberButton = await $(page.phoneNumberButton)
        const phoneNumber = "+19999999999";
                // Submit the phone number
        await page.submitPhoneNumber(phoneNumber); // The magic method, which we will consider later
                // Wait until the button text changes to the given one
        await phoneNumberButton.waitUntil(async function() {
            return (await this.getText()) === phoneNumber
        })
    })

    describe('Test', () => {
        it('wait functions timeout', async () => {
            await browser.url(`${config.API_URL}`)
            const fromField = await $('#from');
                    // wait for 10 seconds an element to not exist on the page
            await fromField.waitForExist({timeout: 10000, reverse: true});
                    // wait for 10 seconds an element to be visible on the page
            await fromField.waitForDisplayed({timeout: 10000});
                    // wait for 10 seconds an element to be clickable on the page
            await fromField.waitForClickable({timeout: 10000});
        })
    })
