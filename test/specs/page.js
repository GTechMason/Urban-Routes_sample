module.exports = {
    // Inputs
    fromField: '#from',
    toField: '#to',
    phoneNumberField: '#phone',
    codeField: '#code',
    // Buttons
    callATaxiButton: '//button[contains(text(), "Call a taxi")]',
    phoneNumberButton: '//div[contains(text(), "Phone number")]',
    nextButton: '//button[contains(text(), "Next")]',
    // Modals
    phoneNumberModal: '.modal',
    //Functions
    fillAddresses: async function(from, to) {
    const fromField = await $(this.fromField);
    await fromField.setValue(from);
    const toField = await $(this.toField);
    await toField.setValue(to);
    const callATaxiButton = await $(this.callATaxiButton);
    await callATaxiButton.waitForDisplayed();
    await callATaxiButton.click();
    }
};

