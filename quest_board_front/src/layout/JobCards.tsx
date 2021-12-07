import React from 'react'
import crud from '../api/httpClient/crud'
import { JobCard } from '../components/JobCard';
import { useJobContext } from '../providers/JobProvider';
import qs from 'qs';
import ROUTES from '../router/ROUTES';

export const JobCards = () => {
    const [cardsData, setCardsdata] = React.useState([] as any[]);
    const [cardsDataSearched, setCardsDataSearched] = React.useState([] as any[])
    const jobContext = useJobContext()

    React.useEffect(() => {
        crud.jobOffer.read().then(data =>{setCardsdata(data.data); setCardsDataSearched(data.data); console.log(data.data)})
    }, [])

    React.useEffect(() => {
        setCardsDataSearched(cardsData.filter(cardData => JSON.stringify(cardData).indexOf(jobContext.searchJob) !== -1))
    }, [jobContext.searchJob])


    return (
        <>
            {cardsDataSearched.length > 0 ? 
                cardsDataSearched.map((cardData, index) => (<JobCard redirect={() => document.location.href = `${ROUTES.LEARNMORE}/?${qs.stringify(cardData.data)}`} key={index} level={cardData.data.rank} title={cardData.data.title} description={cardData.data.content}/>))
            :
                <></>
            }
        </>
    )
}