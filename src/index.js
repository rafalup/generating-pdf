const puppeteer = require('puppeteer');


const run = async() => { // open the browser and prepare a page
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('https://github.com/mazarafa');

    await page.pdf({
        path: 'meugit.pdf',
        format: 'A4',
    });

    // close the browser
    await browser.close();
};

// run the async function
run();