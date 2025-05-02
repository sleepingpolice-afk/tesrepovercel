const pg = require("./connect");

exports.getAllContacts = async function getAll(req, res) {
    try {
        const result = await pg.query('SELECT * FROM Contacts');
        if (result.rowCount === 0) {
            return res.status(404).json({ message: 'No contacts found' });
        }
        res.status(200).json(result.rows);
    } catch (error) {
        console.error('Error fetching Contacts:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
}

// exports.createContact = async function create(req, res) {
//     const { name, phone_num } = req.body;

//     if (!name || !phone_num) {
//         return res.status(400).json({ message: 'Name and Phone Number are required' });
//     }

//     try {
//         const result = await pg.query(
//             'INSERT INTO Contacts(name, phone_num) VALUES($1, $2) RETURNING *',
//             [name, phone_num]
//         );
//     res.status(201).json(result.rows[0]);
//     } catch (error) {
//         console.error('Error inserting contact:', error);
//         res.status(500).json({ message: 'Internal Server Error' });
//     }
// }

exports.createContact = async function create(req, res) {
    const { name, phone_num } = req.body;

    const phoneRegex = /^08\d{8,11}$/;

    if (!name || !phone_num) {
        return res.status(400).json({ message: 'Name and Phone Number are required' });
    }

    if (!phoneRegex.test(phone_num)) {
        return res.status(400).json({ message: 'Invalid phone number format.' });
    }

    try {
        const result = await pg.query(
            'INSERT INTO Contacts(name, phone_num) VALUES($1, $2) RETURNING *',
            [name, phone_num]
        );
        res.status(201).json(result.rows[0]);
    } catch (error) {
        console.error('Error inserting contact:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};


exports.deleteContact = async function deleteStore(req, res) {
    const { id } = req.params;

    if (!id) {
        return res.status(400).json({ message: 'ID is required' });
    }

    try {
        const result = await pg.query('DELETE FROM Contacts WHERE id = $1 RETURNING *', [id]);
        if (result.rowCount === 0) {
            return res.status(404).json({ message: 'Contact not found' });
        }
        res.status(200).json(result.rows[0]);
    } catch (error) {
        console.error('Error deleting contact:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
}