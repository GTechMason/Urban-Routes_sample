// NO dropdowns in Urban Routes

// Here is an example code for selecting an option with the visible text ‘Option 1’
describe('My dropdown menu application example', () => {
    it('should have option 1', async () => {
        //replace the URL with your own URL from the server
        await browser.url(`https://cnt-d8a700bd-2a47-4103-96fd-87420112250c.containerhub.tripleten-services.com/`);
                
const exampleDropdown = $('#exampleDropdown');
exampleDropdown.selectByVisibleText('Option 1');