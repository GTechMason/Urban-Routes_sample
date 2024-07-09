module.exports = {
    getPhoneNumber: function(countryCode) {
        number = Math.floor(1000000000 + Math.random() * 9000000000)
        return `${countryCode}${number}`
    },
    getElementByText: async function(obj) {
        return await $(`//div[contains(text(), "${obj.toString()}")]`);
    }
};