const express = require('express');
const app = express();
const port = 3000 || process.env.PORT;

const cors = require('cors');

app.use(cors({origin:'http://localhost:8080',optionsSuccessStatus:200,methods:"GET, PUT, POST"}))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.get('/', (req, res) => {
res.send('ok')
})




app.listen(port, () => console.log(`Example app listening on port ${port}!`))
