describe('My locators application', () => {
    it('should have locators', async () => {
        //replace the URL with your own URL from the server
        await browser.url(`https://cnt-d8a700bd-2a47-4103-96fd-87420112250c.containerhub.tripleten-services.com/`);
                // our code will be here
                await expect($('.dst-picker')).toBeExisting();
        await expect($('#root')).toBeExisting();
        await expect($('label')).toBeExisting();
        await expect($('[alt="Routes"]')).toBeExisting();
        //xpath locators
        await expect($('//a')).toBeExisting();
        await expect($('//input[@type="text"]')).toBeExisting();
        await expect($('//form/div[1]/div[2]')).toBeExisting();
        await expect($('//*[@class="input-container"]')).toBeExisting();
        await expect($('//div[@class="logo"]//img')).toBeExisting();
        await expect($('//div[@class="input-container"]//input[@id="from"]')).toBeExisting();
        await expect($('//label[contains(text(), "From")]')).toBeExisting();
        await expect($('//label[starts-with(text(), "F")]')).toBeExisting();
    })
})
