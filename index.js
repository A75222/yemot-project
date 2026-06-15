const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// בדיקה שהשרת עובד בהצלחה
app.get('/', (req, res) => {
    res.send('השרת של האלפון הטלפוני באוויר ופועל בהצלחה!');
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
