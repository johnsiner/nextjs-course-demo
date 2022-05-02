import { MongoClient } from 'mongodb';

const handler = async (req, res) => {
    if (req.method === 'POST') {
        const data = req.body;

        const client = await MongoClient.connect('mongodb+srv://johnsiner:HUYMIOPZOBu7p88L@cluster0.oiani.mongodb.net/meetups?retryWrites=true&w=majority')
        const db = client.db();

        const meetupsCollection = db.collection('meetups');
        const result = await meetupsCollection.insertOne(data);
        console.log(result);
        client.close();

        await res.status(201).json({ message: 'Meetup inserted' });

    }
}

export default handler;