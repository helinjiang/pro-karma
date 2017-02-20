var expect = require('chai').expect;

describe('测试浏览器兼容', function () {
    it('测试浏览器对 window.chrome 属性的支持', function () {
        // window.chrome是 Chrome 平台中独有的，因此只有 Chrome 浏览器中此用例才通过
        // https://developer.chrome.com/apps/api_index
        expect(window.chrome).to.not.be.undefined;
    });
});
