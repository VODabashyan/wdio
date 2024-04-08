describe('web driver io task 2', () => {
    beforeEach(async () => {
        await browser.url('https://pastebin.com/');
    });

    it('create a new paste with validation', async () => {
        await $('.header__btn').click();
        await $('#postform-text').setValue('git config --global user.name  "New Sheriff in Town"\n');
        await $('#postform-text').addValue('git reset $(git commit-tree HEAD^{tree} -m "Legacy code")\n');
        await $('#postform-text').addValue('git push origin master --force');
        await $('#select2-postform-format-container').click();
        await $('//ul/li[text()="Bash"]').click();
        await $('#select2-postform-expiration-container').click();
        await $('//ul/li[text()="10 Minutes"]').click();
        await $('#postform-name').setValue('how to gain dominance among developers');
        await $("//button[text()='Create New Paste']").click();

        await expect($('.info-top')).toHaveText('how to gain dominance among developers');
        const bashButton = await $("//a[normalize-space()='Bash']")
        await expect(bashButton).toExist();
        const container  = await ($('//ol[@class="bash"]'));
        await expect(container).toHaveTextContaining('git config --global user.name  "New Sheriff in Town"\n');
        await expect(container).toHaveTextContaining('git reset $(git commit-tree HEAD^{tree} -m "Legacy code")\n');
        await expect(container).toHaveTextContaining('git push origin master --force');
    });
});