describe('web driver io task 1', () => {
    beforeEach(async () => {
        await browser.url('https://pastebin.com/');
    });

    it('create a new paste', async () => {
        await $('.header__btn').click();
        await $('#postform-text').setValue('Hello from WebDriver');
        await $('#select2-postform-expiration-container').click();
        await $('//ul/li[text()="10 Minutes"]').click();
        await $('#postform-name').setValue('helloweb');
        await $("//button[text()='Create New Paste']").click();

    });
});