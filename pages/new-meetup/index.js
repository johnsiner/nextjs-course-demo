import { useRouter } from "next/router"
import NewMeetupForm from "../../components/meetups/NewMeetupForm"
import { Fragment } from "react";
import Head from "next/head";

const NewMeetupPage = () => {

    const router = useRouter();

    const addMeetupHandler = async entererdMeetupData => {
        const response = await fetch('/api/new-meetup', {
            method: 'POST',
            body: JSON.stringify(entererdMeetupData),
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        })

        const data = await response.json();
        console.log(data);

        router.push('/')
    }

    return (
        <Fragment>
            <Head>
                <title>Add a new meetup</title>
                <meta
                    name="description"
                    content="Add your own metup"
                />
            </Head>
            <NewMeetupForm onAddMeetup={addMeetupHandler} />
        </Fragment>
    )
}

export default NewMeetupPage;