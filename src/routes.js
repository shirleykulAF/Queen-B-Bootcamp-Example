import {route} from "express/lib/router";
import path from "path";

export default function routs(){
    app.get('/api/helloworld', (req, res) => {
        res.send('Hello World');
    });

    app.get('/*', (req, res) => {
        // res.send('Anything else');
        res.sendFile(path.join(__dirname, '../client/build', 'index.html'));
    });
}

