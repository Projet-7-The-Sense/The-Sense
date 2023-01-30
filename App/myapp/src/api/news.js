import { useState } from "react";

export const getNews = async () => {
    const response = await fetch(
        'http://localhost:4444/news/list', {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }
    )
    const news = await response.json();
    return news;
};

export const DeleteNews = async (news) => {
    
    fetch('http://localhost:4444/news/delete', {
        method: 'DELETE',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(news)
    })
};


export const InsertNews = async (id, password, firstname, lastname, phone_number, age, reduction_points=0) => {
    const response = await fetch(
        'http://localhost:4444/news/insert', {
            method: 'POST',
            body: JSON.stringify({id, password, firstname, lastname, phone_number, age, reduction_points}),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }
    )
    return response.status;
}