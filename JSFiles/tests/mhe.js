"use strict";
const { browser, element, $, by } = require("protractor");
describe('Mhe', function () {
    it('Mhe Login', function () {
        browser.get('https://my-qastg.mheducation.com/secure/');
        browser.sleep(1000);
        let username = $('#username').click().clear().sendKeys("autobotsqastg");
        let password = $('#password').click().clear().sendKeys("Temp1234");
        element(by.xpath("//button[@class='btn btn-sm btn-primary btn-block']")).click().then(function () {
            browser.sleep(10000);
        });
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWhlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vdGVzdHMvbWhlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxNQUFNLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFDLEdBQUcsT0FBTyxDQUFDLFlBQVksQ0FBQyxDQUFDO0FBRXpELFFBQVEsQ0FBQyxLQUFLLEVBQUU7SUFDWixFQUFFLENBQUMsV0FBVyxFQUFFO1FBQ1osT0FBTyxDQUFDLEdBQUcsQ0FBQywwQ0FBMEMsQ0FBQyxDQUFBO1FBQ3ZELE9BQU8sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUE7UUFDbkIsSUFBSSxRQUFRLEdBQUUsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDLEtBQUssRUFBRSxDQUFDLFFBQVEsQ0FBQyxlQUFlLENBQUMsQ0FBQTtRQUN0RSxJQUFJLFFBQVEsR0FBRSxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUMsS0FBSyxFQUFFLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxDQUFBO1FBQ2pFLE9BQU8sQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLHFEQUFxRCxDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxJQUFJLENBQUM7WUFDbEYsT0FBTyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQTtRQUV4QixDQUFDLENBQUMsQ0FBQTtJQUlOLENBQUMsQ0FBQyxDQUFDO0FBQ1AsQ0FBQyxDQUFDLENBQUMifQ==