import "../tyles/TransactionLabel.css";

const TransactionLabel = ({ title }) => {
    return(
        <div className="form__transactionLabel">
            <label className="form__label">{title}</label>
            <input  className="form__input" type="text" name={title}></input>
        </div>
    );
}

export default TransactionLabel;