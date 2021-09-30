const express = require('express');
const bodyParser = require('body-parser');
const pdf = require('html-pdf');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.json({limit: '10mb', extended: true}))
app.use(bodyParser.urlencoded({limit: '10mb', extended: true}))

app.listen(port, () => console.log(`Listening on port ${port}`));


app.post('/create-pdf', (req, res) => {
		var pdfTemplate = 0;
		switch(req.body.template) {
			case 1:
				pdfTemplate = require('./documents/index');
				break;
			case 2:
				pdfTemplate = require('./documents/template2');
				break;
			case 3:
				pdfTemplate = require('./documents/template3');
				break;
			default: pdfTemplate = require('./documents/index');
		}
    pdf.create(pdfTemplate(req.body), {}).toFile('result.pdf', (err) => {
        if(err) {
            res.send(Promise.reject());
        }

        res.send(Promise.resolve());
    });
});

app.get('/fetch-pdf', (req, res) => {
    res.sendFile(`${__dirname}/result.pdf`)
})

