import React, { ReactNode, useState, createContext, useEffect } from 'react';

interface IShortenContext {
    shortenLink: Function,
    shortenLinks: string[],
    initialLink: string,
    LOCAL_DATA: any,
}

export const ShortenContext = createContext<IShortenContext>({} as IShortenContext);

interface IProps {
    children: ReactNode;
}


export function ShortenContextProvider({ children }: IProps): JSX.Element {
    
    const API_BASE = 'https://api.shrtco.de/v2/'
    const LOCAL_DATA = localStorage.getItem('links')

    const [shortenLinks, setShortenLinks] = useState<[]>([])
    const [initialLink, setInitialLink] = useState<string>('')

    const shortenLink = async (link:string) => {
        setInitialLink(link)
        let shortLink: any;
        await fetch(`${API_BASE}shorten?url=${link}`)
        .then(res => res.json())
        .then(res => shortLink = res.result.full_short_link)
        .catch(err => console.log(err))
        const old:any = [...shortenLinks]
        const newLink = {
            original: link,
            short: shortLink
        }
        old.push(newLink)
        setShortenLinks(old)
        localStorage.setItem('links', JSON.stringify(old))
    }



    
    return (
        <ShortenContext.Provider value={{
            shortenLink,
            shortenLinks,
            initialLink,
            LOCAL_DATA,
        }}>
            {children}
        </ShortenContext.Provider>
        );
}

