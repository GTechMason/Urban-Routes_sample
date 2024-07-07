// NO dropdowns in Urban Routes

// eslint-disable-next-line no-undef
const config = require('../config');

// Here is an example code for selecting an option with the visible text ‘Option 1’
describe('My dropdown menu application example', () => {
    it('should have option 1', async () => {
        //replace the URL with your own URL from the server
        await browser.url(``${config.API_URL}`);
                
const exampleDropdown = $('#exampleDropdown');
exampleDropdown.selectByVisibleText('Option 1');
    })
});