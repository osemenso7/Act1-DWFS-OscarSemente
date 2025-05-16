import {useEffect, useState} from "react";

const useBuyBooks = (selectedBook) => {
    const [buyBooks, setBuyBooks] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);

    const handleBookToBuy = (selectedBook) => {
        if (selectedBook.book === undefined) {
            setBuyBooks([]);
            return;
        }

        let buyBooksTemp = [...buyBooks];
        const existBook = buyBooksTemp.find(item => item.book.id === selectedBook.book.id);

        if (selectedBook.sum) {
            if (existBook) {
                buyBooksTemp = buyBooksTemp.map(item =>
                    item.book.id === selectedBook.book.id
                        ? {...item, numBooks: item.numBooks + 1}
                        : item
                );
            } else {
                buyBooksTemp.push({book: selectedBook.book, numBooks: 1});
            }
        } else {
            if (existBook) {
                buyBooksTemp = buyBooksTemp
                    .map(item =>
                        item.book.id === selectedBook.book.id
                            ? {...item, numBooks: item.numBooks - 1}
                            : item
                    )
                    .filter(item => item.numBooks > 0);
            }
        }

        setBuyBooks(buyBooksTemp);
    };

    const  calculateTotalPrice = () => {
        let buyBooksTemp = [...buyBooks];
        let total = buyBooksTemp.reduce((total, item) => {
            return total + (item.book.price * item.numBooks);
        }, 0);
        setTotalPrice(total);
    };

    useEffect(() => {
        handleBookToBuy(selectedBook);
    }, [selectedBook]);

    useEffect(() => {
        calculateTotalPrice();
    }, [buyBooks]);

    return { buyBooks, totalPrice };
}

export default useBuyBooks;