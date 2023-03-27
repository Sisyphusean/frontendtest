import React, { useEffect } from 'react';
import { GithubUser } from '../interfaces/apiInterfaces';

import { useState } from 'react';

import { ReactComponent as LeftChevron } from "../assets/font_awesome_icons/Left-Chevron.svg";
import { ReactComponent as RightChevron } from "../assets/font_awesome_icons/Right-Chevron.svg";
import { GetGithubProfileData } from '../services/apiHandlers';


const maxRows = 5;
const cardsperRow = 4;

function Pager(props: {
    currentPage: number;
    lastPage: number;
    setCurrentPageHandler: (page: number, chevron: string) => void;
}) {
    const { currentPage, lastPage, setCurrentPageHandler } = props;

    // Limit the lastPage to a maximum of 49
    const limitedLastPage = Math.min(lastPage, 49);

    const getPageNumbers = () => {
        const pageNumbers: number[] = [];

        if (limitedLastPage <= 5) {
            for (let i = 1; i <= limitedLastPage; i++) {
                pageNumbers.push(i);
            }
        } else if (currentPage <= 3) {
            for (let i = 1; i <= 4; i++) {
                pageNumbers.push(i);
            }
            pageNumbers.push(-1);
            pageNumbers.push(limitedLastPage);
        } else if (currentPage >= limitedLastPage - 2) {
            pageNumbers.push(1);
            pageNumbers.push(-1);
            for (let i = limitedLastPage - 3; i <= limitedLastPage; i++) {
                pageNumbers.push(i);
            }
        } else {
            pageNumbers.push(1);
            pageNumbers.push(-1);
            for (let i = currentPage - 1; i <= currentPage + 1; i++) {
                pageNumbers.push(i);
            }
            pageNumbers.push(-1);
            pageNumbers.push(limitedLastPage);
        }

        return pageNumbers;
    };

    const pageNumbers = getPageNumbers();

    return (
        <div className="pager-container">
            <div className="pager-number-container">
                <LeftChevron onClick={() => setCurrentPageHandler(1, "left")} />
                <div className='page-numbers'>
                    {pageNumbers.map((pageNumber, index) => {
                        if (pageNumber === -1) {
                            return <span key={index}>...</span>;
                        } else if (pageNumber === currentPage) {
                            return (
                                <span className="pager-number pager-number-active" key={index}>
                                    {pageNumber}
                                </span>
                            );
                        } else {
                            return (
                                <span
                                    className="pager-number"
                                    key={index}
                                    onClick={() => setCurrentPageHandler(pageNumber, "")}
                                >
                                    {pageNumber}
                                </span>
                            );
                        }
                    })}
                </div>
                <RightChevron
                    onClick={() => setCurrentPageHandler(limitedLastPage, "right")}
                />
            </div>
        </div>
    );
}

export default function Cardgroup(props: any) {
    var keyword = props.keyword
    let totalNumberOfPages = props.rawData.rawData.data ? Math.ceil(props.rawData.rawData.data.total_count / (maxRows * cardsperRow)) : 0
    var cardRows = null
    var [items, setItems] = useState(props.rawData.rawData.data ? props.rawData.rawData.data.items : [])
    var [isRateLimitingOccurring, setRateLimitingOccuring] = useState(false)
    let [currentPage, setCurrentPage] = useState(1)
    var [lastPage, setLastPage] = useState(totalNumberOfPages)
    var [isFetching, setIsFetching] = useState(false)

    useEffect(() => {
        fetchNewItems(keyword, currentPage).then((result: any) => {

            if (result.isLoading) {
                setIsFetching(true)
            }

            if (result.data?.items.length > 0) {
                setRateLimitingOccuring(false)
                setItems(result.data.items)
                setLastPage(Math.ceil(result.data.total_count / (maxRows * cardsperRow)))
            } else {
                setItems([])
                if (result.error === "Request failed with status code 403") {
                    setRateLimitingOccuring(true)
                    setLastPage(0)
                    setCurrentPage(0)
                }
            }
        })
    },
        [currentPage, keyword, lastPage, isRateLimitingOccurring])

    //Get New Items
    const fetchNewItems = async (keyword: string, page: number) => {
        let result = await GetGithubProfileData(keyword, page)
        return result
    }

    //Change Current Page to cause useEffect to re-render
    function setCurrentPageHandler(page: number = 0, chevron: string = "") {
        if (page > 0 && page <= lastPage) {
            setCurrentPage(page)
            fetchNewItems(keyword, page).then((result: any) => {
                if (result.data?.items) {
                    setItems(result.data.items)
                } else {
                    setItems([result.data.items])
                }
                setLastPage(Math.ceil(result.data.total_count / (maxRows * cardsperRow)))
            })
            return
        }

        if (page === 0 && chevron === "left") {
            let newPage = currentPage - 1
            if (newPage > 0) {
                setCurrentPage(currentPage - 1)
                fetchNewItems(keyword, page).then((result: any) => {
                    setItems(result.data.items)
                    setLastPage(Math.ceil(result.data.total_count / (maxRows * cardsperRow)))
                })
            }
            return
        }

        if (page === 0 && chevron === "right") {
            if (currentPage < lastPage) {
                setCurrentPage(currentPage + 1)
                fetchNewItems(keyword, page).then((result: any) => {
                    setItems(result.data.items)
                    setLastPage(Math.ceil(result.data.total_count / (maxRows * cardsperRow)))
                })
            }
            return

        }
    }

    if (items) {
        //create a map of the array items
        cardRows = items.map((item: GithubUser, index: number) => {
            return (
                <div key={index} className="card">
                    <img className="card-profile-image" src={item.avatar_url} alt={`${item.login} profile`} />
                    <p className='userName'>{item.login}</p>
                    <p className='score-visit-links'>Score: {item.score}
                        <a className='profile-link' href={`${item.html_url}`} target='_blank'>Visit Profile</a></p>
                </div>
            )
        })
    }

    return (
        <div>
            {isRateLimitingOccurring
                ? ""
                :
                (
                    lastPage === 0 ?
                        ""
                        : <Pager
                            currentPage={currentPage}
                            lastPage={lastPage}
                            setCurrentPageHandler={setCurrentPageHandler} />
                )
            }
            {
                lastPage > 0 ?
                    <div className='card-group'>
                        {cardRows}
                    </div>
                    :
                    (
                        isRateLimitingOccurring ?
                            <div className="response-card warning" style={{ marginTop: "10em", flexDirection: "column" }}>
                                <p style={{ fontSize: "1.2rem", fontWeight: "600", marginBottom: "0" }}>
                                    Uhoh Rate Limiting is happening
                                </p>
                                <p>
                                    Rate limiting occurs when too many requests are made to an API in a short amount of time. This can
                                    happen when a large number of requests are sent over a short
                                    period of time. To prevent this from happening,
                                    please wait a few minutes before making another request.
                                </p>
                            </div>
                            : <p style={{ marginTop: "4em" }}>
                                No Results for {keyword}
                            </p>
                    )
            }
        </div>
    )
}