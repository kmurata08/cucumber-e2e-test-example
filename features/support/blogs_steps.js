const { Given, When, Then, Before, After } = require("cucumber");
const puppeteer = require('puppeteer');
const { assert } = require('chai');

var browser = null;
var page = null;

Before(async function () {
    // ブラウザとセッションをグローバル変数にもつ
    browser = await puppeteer.launch({headless: false});
    page = await browser.newPage();
});

Given('記事登録ページにアクセスしている', async function () {
    await page.goto('http://localhost:8000/blogs/add');
    await page.waitFor(500);
});

When('タイトルに {string} を入力する', async function (inputTitle) {
    await page.type("input[name=title]", inputTitle);
    await page.waitFor(500);
});

When('本文に {string} を入力する', async function (inputBody) {
    await page.type("textarea[name=body]", inputBody);
    await page.waitFor(500);
});

When('作成者に {string} を入力する', async function (inputAuthor) {
    await page.type("input[name=author]", inputAuthor);
    await page.waitFor(500);
});

When('投稿ボタンをクリックする', async function () {
    await page.click('input[type=submit]'); 
    await page.waitFor(1000); 
});

Then('投稿一覧ページが表示される', async function () {
    var gotH1Text = await page.$eval('h1', item => {
        return item.textContent;
    });
    assert.equal(gotH1Text, '記事一覧');
});

Then('一番上の投稿タイトルが {string} になっている', async function (wantBlogTitle) {
    var gotTopBlogTitle = await page.$eval('h2:first-of-type > a', item => {
        return item.textContent;
    });
    assert.equal(gotTopBlogTitle, wantBlogTitle);
});

After(async function () {
    // ブラウザを閉じる
    browser.close();
});