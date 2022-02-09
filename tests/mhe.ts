const { browser, element, $ ,by} = require("protractor");

describe('Mhe', function () {
    it('Mhe Login', function () {
        browser.get('https://my-qastg.mheducation.com/secure/')
        browser.sleep(1000)
        let username= $('#username').click().clear().sendKeys("autobotsqastg")
        let password= $('#password').click().clear().sendKeys("Temp1234")
        element(by.xpath("//button[@class='btn btn-sm btn-primary btn-block']")).click().then(function(){
            browser.sleep(10000)

        })
     

        
    });
});