import * as dotenv from 'dotenv';
dotenv.config();

import * as express from 'express';
import * as cors  from 'cors';
import { MovieRouter } from 'src/Custom_modules/Routers';
import { STR_API,
         STR_MESSAGE_SERVER_IS_RUNNING_ON,
         STR_BACKEND_PATH_MOVIEROUTER } from 'src/ConstData/ConstString';

const app = express();

app.use('/', express.static('uploads'));
app.use(cors({
    origin: true,
    credentials: true,
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(`/${STR_API}/${STR_BACKEND_PATH_MOVIEROUTER}`, MovieRouter);

app.get('/', (req, res) => {
    res.send(`${STR_MESSAGE_SERVER_IS_RUNNING_ON}`);
});

app.listen(process.env.SERVER_PORT || 4000, () => {
    console.log(`${STR_MESSAGE_SERVER_IS_RUNNING_ON} ${process.env.SERVER_PORT}`);
});
